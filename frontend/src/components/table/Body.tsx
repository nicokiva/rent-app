import { TableRow, TableCell, CircularProgress } from "@mui/material";

interface BodyProps {
  data: Array<{ [key: string]: string | number }> | null | undefined;
  columnSize: number;
}

const EmptyBody = ({ children, columnSize }: { children: JSX.Element | string; columnSize: number }) => {
  return (
    <TableRow>
      <TableCell style={{ textAlign: "center" }} colSpan={columnSize}>
        {children}
      </TableCell>
    </TableRow>
  );
};

export const Body = ({ data, ...props }: BodyProps): JSX.Element => {
  if (data === undefined) {
    return (
      <EmptyBody {...props}>
        <CircularProgress />
      </EmptyBody>
    );
  }

  if (data === null) {
    return <EmptyBody {...props}>An error has occurred.</EmptyBody>;
  }

  if (data.length === 0) {
    return <EmptyBody {...props}>There is no data to display.</EmptyBody>;
  }

  return (
    <>
      {data.map((row) => {
        return (
          <TableRow key={row.id}>
            {Object.keys(row).map((key) => (
              <TableCell>{row[key]}</TableCell>
            ))}
          </TableRow>
        );
      })}
    </>
  );
};
