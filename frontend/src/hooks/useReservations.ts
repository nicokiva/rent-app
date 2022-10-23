export type BaseReservationType = {
  id: number;
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

export const useReservations: () => [() => Promise<BaseReservationType | null>, () => void] = () => {
  const set = () => {};

  return [getAll, set];
};
