import FormControl from "../form";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import Checkbox from "../checkbox";
import Input from "../input";
import { FullReservationType } from "../../hooks/useReservations";
import Button from "../button";

interface AddEditFormProps {
  onSubmit: (reservation: FullReservationType) => void;
  reservation?: FullReservationType;
}

export const AddEditForm = ({ onSubmit, reservation }: AddEditFormProps): JSX.Element => {
  const [vehicleId, setVehicleId] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");
  const [needFullGas, setNeedFullGas] = useState<boolean>(false);

  const handleChangeVehicleId = (event: { target: { value: string } }) => {
    const { value } = event.target;
    setVehicleId(value);
  };

  const handleChangeUserId = (event: { target: { value: string } }) => {
    const { value } = event.target;
    setUserId(value);
  };

  const handleChangeFrom = (event: { target: { value: string } }) => {
    const { value } = event.target;
    setFrom(value);
  };

  const handleChangeTo = (event: { target: { value: string } }) => {
    const { value } = event.target;
    setTo(value);
  };

  const handleChangeNeedFullGas = (event: { target: { checked: boolean } }) => {
    setNeedFullGas(event.target.checked);
  };

  const handleClick = () => {
    onSubmit({ vehicleId, userId, from, to, needFullGas });
  };

  useEffect(() => {
    if (!reservation) {
      return;
    }

    setVehicleId(reservation.vehicleId);
    setUserId(reservation.userId);
    setFrom(reservation.from);
    setTo(reservation.to);
    setNeedFullGas(reservation.needFullGas);
  }, [reservation]);

  return (
    <FormControl>
      <Grid style={{ marginBottom: "20px" }} container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Input
            className='vehicle-id'
            type='number'
            onChange={handleChangeVehicleId}
            value={vehicleId}
            label='Vehicle Id'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input className='user-id' type='number' onChange={handleChangeUserId} value={userId} label='User Id' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input className='from' type='text' onChange={handleChangeFrom} value={from} label='From' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input className='to' type='text' onChange={handleChangeTo} value={to} label='To' />
        </Grid>
        <Grid item xs={12}>
          <Checkbox
            className='need-full-gas'
            label='Need full gas?'
            checked={needFullGas}
            onChange={handleChangeNeedFullGas as any}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Button variant='outlined' onClick={handleClick}>
            Back
          </Button>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Button type='submit' onClick={handleClick}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </FormControl>
  );
};
