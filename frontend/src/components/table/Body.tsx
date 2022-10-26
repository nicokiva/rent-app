import { TableRow, TableCell, CircularProgress } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface BodyProps {
  data: Array<{ [key: string]: string | number }> | null | undefined;
  columnSize: number;
  onClickEdit: (id: string) => void;
  onClickDelete: (id: string) => void;
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

export const Body = ({ data, onClickDelete, onClickEdit, ...props }: BodyProps): JSX.Element => {
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
          <TableRow key={row.id} className={`reservation-${row.id}`}>
            {Object.keys(row)
              .filter((key) => key !== "id")
              .map((key, index) => (
                <TableCell className={key} key={`${row.id}-${index}`}>
                  {row[key]}
                </TableCell>
              ))}
            <TableCell>
              <EditIcon style={{ cursor: "pointer" }} onClick={() => onClickEdit(row.id.toString())} />
            </TableCell>
            <TableCell>
              <DeleteIcon style={{ cursor: "pointer" }} onClick={() => onClickDelete(row.id.toString())} />
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
};
