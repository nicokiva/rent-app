describe("/Reserve spec", () => {
  let response: any = null;
  before(() => {
    cy.intercept("POST", "/reservations", (req) => {
      req.continue((res) => {
        response = res.body;
      });
    });
  });

  const vehicleId = 1234;
  const userId = 5678;
  const from = "NY";
  const to = "Dallas";

  it("Should go to /reserve and fill in the form properly and submmit", () => {
    cy.visit("http://localhost:3000/reserve");

    cy.get(".vehicle-id input").type(vehicleId.toString());
    cy.get(".user-id input").type(userId.toString());
    cy.get(".from input").type(from);
    cy.get(".to input").type(to);

    cy.get("button[type=submit]").click();

    cy.url().should("eq", "http://localhost:3000/");
  });

  it("Should have inserted the reservation as expected", () => {
    const { id } = response;
    const rowSelector = `tr.reservation-${id}`;
    cy.get(rowSelector).should("exist");
    cy.get(`${rowSelector} .vehicleId`).contains(vehicleId);
    cy.get(`${rowSelector} .userId`).contains(userId);
    cy.get(`${rowSelector} .from`).contains(from);
    cy.get(`${rowSelector} .to`).contains(to);
  });
});
