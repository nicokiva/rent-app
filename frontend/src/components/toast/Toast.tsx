import Alert from "@mui/material/Alert";

export interface ToastProps {
  type: "error" | "success";
  children: string;
}
export const Toast = (props: ToastProps): JSX.Element => {
  return <Alert {...props} />;
};
