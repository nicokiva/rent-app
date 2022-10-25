const express = require("express");
const app = express();
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
app.use(express.json());
app.use(cors());
const port = 8080;

const indexedReservations = {};

const isReservationValid = (reservation) => !!reservation.vehicleId && !!reservation.userId;
app.post("/reservations", (req, res) => {
  if (!isReservationValid(req.body)) {
    res.status(400);
    res.end();
    return;
  }

  const id = uuidv4();
  const reservation = { id, ...req.body };

  indexedReservations[id] = reservation;

  res.status(201);
  res.json(reservation);
});

app.put("/reservations/:id", (req, res) => {
  const { id } = req.params;
  const reservation = indexedReservations[req.params.id];
  if (!reservation) {
    res.status(404);
    res.end();
    return;
  }

  if (!isReservationValid(req.body)) {
    res.status(400);
    res.end();
    return;
  }

  indexedReservations[id] = req.body;

  res.status(204);
  res.end();
});

app.get("/reservations", (req, res) => {
  res.json(
    Object.keys(indexedReservations).map((id) => {
      const reservation = indexedReservations[id];
      return {
        id,
        userId: reservation.userId,
        vehicleId: reservation.vehicleId,
        from: reservation.from,
        to: reservation.to,
      };
    })
  );
});

app.delete("/reservations/:id", (req, res) => {
  const reservation = indexedReservations[req.params.id];
  if (!reservation) {
    res.status(404);
    res.end();
    return;
  }

  delete indexedReservations[req.params.id];

  res.status(204);
  res.end();
});

app.get("/reservations/:id", (req, res) => {
  const reservation = indexedReservations[req.params.id];
  if (!reservation) {
    res.status(404);
    res.end();
    return;
  }
  res.json(reservation);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
