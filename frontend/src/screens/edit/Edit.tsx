import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AddEditForm from "../../components/addEditForm";
import { Error } from "../../components/toast";
import { FullReservationType, useReservations } from "../../hooks/useReservations";

interface EditProps {}
export const Edit = ({}: EditProps): JSX.Element => {
  const [reservation, setReservation] = useState<FullReservationType>();
  const { reservationId } = useParams();
  const { getById, update } = useReservations();

  const navigate = useNavigate();
  const [editResult, setEditResult] = useState<boolean>();

  const getAndShow = async () => {
    if (!reservationId) {
      return;
    }

    const reservation = await getById(reservationId);
    if (!reservation) {
      navigate("/");
    }

    setReservation(reservation);
  };

  useEffect(() => {
    getAndShow();
  }, [reservationId, getById]);

  const handleSubmitForm = async (reservation: FullReservationType) => {
    if (!reservation || !reservationId) {
      return;
    }

    const result = await update({ id: reservationId, ...reservation });
    setEditResult(result);
    if (!result) {
      return;
    }

    navigate("/");
  };

  return (
    <>
      <AddEditForm reservation={reservation} onSubmit={handleSubmitForm} />
      {editResult === false && <Error />}
    </>
  );
};
