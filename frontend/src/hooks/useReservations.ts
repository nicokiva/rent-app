export type BaseReservationType = {
  id?: string;
  userId: string;
  vehicleId: string;
  from: string;
  to: string;
};

export type FullReservationType = {
  needFullGas: boolean;
} & BaseReservationType;

/*
Datadog is not setup but if it was,
the `console.error` allows to log the errors there.
*/
const HOST = "http://localhost:8080";
const getAll: () => Promise<BaseReservationType | null> = async () => {
  const response = await fetch(`${HOST}/reservations`);

  if (!response.ok) {
    console.error("GetAll > Error fetching data.");
    return null;
  }

  return response.json();
};

const set: (reservation: FullReservationType) => Promise<boolean> = async (reservation) => {
  try {
    await fetch(`${HOST}/reservations`, {
      method: "post",
      body: JSON.stringify(reservation),
      headers: {
        "content-type": "application/json",
      },
    });
    return true;
  } catch (e) {
    console.error("Set > Error posting data.");
    return false;
  }
};

const update: (reservation: FullReservationType) => Promise<boolean> = async (reservation) => {
  try {
    await fetch(`${HOST}/reservations/${reservation.id}`, {
      method: "put",
      body: JSON.stringify(reservation),
      headers: {
        "content-type": "application/json",
      },
    });
    return true;
  } catch (e) {
    console.error("Update > Error updating data.");
    return false;
  }
};

const remove: (id: string) => Promise<boolean> = async (id) => {
  try {
    await fetch(`${HOST}/reservations/${id}`, {
      method: "delete",
    });
    return true;
  } catch (e) {
    console.error("Delete > Error removing data.");
    return false;
  }
};

const getById = async (id: string) => {
  const response = await fetch(`${HOST}/reservations/${id}`);

  if (!response.ok) {
    console.error("GetById > Error fetching data.");
    return null;
  }

  return response.json();
};

type useReservationsType = {
  getAll: () => Promise<BaseReservationType | null>;
  set: (reservation: FullReservationType) => Promise<boolean>;
  getById: (id: string) => Promise<FullReservationType>;
  update: (reservation: FullReservationType) => Promise<boolean>;
  remove: (id: string) => Promise<boolean>;
};

export const useReservations: () => useReservationsType = () => {
  return { getAll, set, getById, update, remove };
};
