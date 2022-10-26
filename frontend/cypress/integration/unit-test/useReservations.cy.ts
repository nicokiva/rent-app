import { useReservations } from "../../../src/hooks/useReservations";

describe("/useReservations spec", () => {
  describe("getById", () => {
    it("Should return null because request failed.", async () => {
      cy.intercept("GET", "/reservations/*", {
        statusCode: 400,
      });

      const { getById } = useReservations();

      const reservation = await getById("123");
      expect(reservation).to.be.a("null");
    });

    it("Should return data because request succeeded.", async () => {
      cy.intercept("GET", "/reservations/*", {
        statusCode: 200,
        body: {
          id: "1",
          userId: 1,
        },
      });

      const { getById } = useReservations();

      const reservation = await getById("123");
      expect(reservation.id).to.equal("1");
      expect(reservation.userId).to.equal(1);
    });
  });
});
