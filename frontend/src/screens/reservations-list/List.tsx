import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Table from "../../components/table";
import { BaseReservationType, useReservations } from "../../hooks/useReservations";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export const List: () => JSX.Element = () => {
  const [getAll, set] = useReservations();
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
      <section style={{ textAlign: "right", marginRight: "50px", marginBottom: "20px" }}>
        <Button onClick={handleAddClick} variant='contained'>
          <AddIcon />
        </Button>
      </section>
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
    </>
  );
};
