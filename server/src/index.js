const express = require("express");
const app = express();
app.use(express.json());
const port = 8080;

const reservations = [];

const isReservationValid = (reservation) => !!reservation.vehicleId && !!reservation.userId;
app.post("/reservations", (req, res) => {
  const reservation = req.body;

  if (!isReservationValid(reservation)) {
    res.status(400);
    res.end();
    return;
  }
  reservations.push(req.body);

  res.status(201);
  res.end();
});

app.get("/reservations", (req, res) => {
  res.json(reservations);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
