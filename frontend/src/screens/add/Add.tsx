import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddEditForm from "../../components/addEditForm";
import { Error, Success } from "../../components/toast";
import { FullReservationType, useReservations } from "../../hooks/useReservations";

interface AddProps {}
export const Add = ({}: AddProps): JSX.Element => {
  const { set } = useReservations();
  const navigate = useNavigate();
  const [addResult, setAddResult] = useState<boolean>();

  const handleSubmitForm = async (reservation: FullReservationType) => {
    const result = await set(reservation);

    setAddResult(result);
    if (!result) {
      return;
    }

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <>
      <AddEditForm onSubmit={handleSubmitForm} />
      {addResult === false && <Error />}
      {addResult === true && <Success />}
    </>
  );
};