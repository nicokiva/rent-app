const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
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
  res.json(reservations.map(({ vehicleId, userId, from, to }) => ({ vehicleId, userId, from, to })));
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
