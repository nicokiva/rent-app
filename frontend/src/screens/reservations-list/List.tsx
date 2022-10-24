import { useEffect, useState } from "react";
import Table from "../../components/table";
import { BaseReservationType, useReservations } from "../../hooks/useReservations";
import { useNavigate } from "react-router-dom";
import { Add } from "../../components/button";

export const List: () => JSX.Element = () => {
  const { getAll } = useReservations();
  const [data, setData] = useState<BaseReservationType | null | undefined>();
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate("/reserve");
  };

  const getList = async () => {
    setData(await getAll());
  };
  useEffect(() => {
    getList();
  }, []);

  return (
    <>
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

      <section style={{ textAlign: "right", marginRight: "50px", marginTop: "20px" }}>
        <Add onClick={handleAddClick} />
      </section>
    </>
  );
};
