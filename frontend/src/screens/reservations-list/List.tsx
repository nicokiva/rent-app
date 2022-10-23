import { useEffect, useState } from "react";
import Table from "../../components/table";
import { BaseReservationType, useReservations } from "../../hooks/useReservations";

export const List: () => JSX.Element = () => {
  const [getAll, set] = useReservations();
  const [data, setData] = useState<BaseReservationType | null | undefined>();

  const getList = async () => {
    setData(await getAll());
  };
  useEffect(() => {
    getList();
  }, []);

  console.log(data);
  return (
    <Table
      headers={{
        userId: "User Id",
        vehicleId: "Vehicle Id",
        from: "From",
        to: "To",
      }}
      /* Casting to any to simplify but would be greater to use generics instead. */
      data={data as any}
    />
  );
};
