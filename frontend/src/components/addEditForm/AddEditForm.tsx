import FormControl from "../form";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Add from "../button/add";
import Checkbox from "../checkbox";
import Input from "../input";
import { FullReservationType } from "../../hooks/useReservations";

interface AddEditFormProps {
  onSubmit: (reservation: FullReservationType) => void;
}

export const AddEditForm = ({ onSubmit }: AddEditFormProps): JSX.Element => {
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

  return (
    <FormControl>
      <Grid style={{ marginBottom: "20px" }} container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Input type='number' onChange={handleChangeVehicleId} value={vehicleId} label='Vehicle Id' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input type='number' onChange={handleChangeUserId} value={userId} label='User Id' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input type='text' onChange={handleChangeFrom} value={from} label='From' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input type='text' onChange={handleChangeTo} value={to} label='To' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Checkbox label='Need full gas?' checked={needFullGas} onChange={handleChangeNeedFullGas as any} />
        </Grid>
      </Grid>
      <Add type='submit' onClick={handleClick} />
    </FormControl>
  );
};
