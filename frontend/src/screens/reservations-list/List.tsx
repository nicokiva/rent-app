import { useEffect, useState } from "react";
import Table from "../../components/table";
import { Error } from "../../components/toast";
import { BaseReservationType, useReservations } from "../../hooks/useReservations";
import { useNavigate } from "react-router-dom";
import { Add } from "../../components/button";

export const List: () => JSX.Element = () => {
  const { getAll, remove } = useReservations();
  const [data, setData] = useState<BaseReservationType | null | undefined>();
  const [removeResult, setRemoveResult] = useState<boolean>();
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

  const handleClickDelete = async (id: string) => {
    const result = await remove(id);
    setRemoveResult(result);
    if (!result) {
      return;
    }

    getList();
  };

  const handleClickEdit = (id: string) => {
    navigate(`/reserve/${id}`);
  };

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
        onClickDelete={handleClickDelete}
        onClickEdit={handleClickEdit}
      />

      <section style={{ textAlign: "right", marginRight: "50px", marginTop: "20px" }}>
        <Add onClick={handleAddClick} />
      </section>
      {removeResult === false && <Error />}
    </>
  );
};
