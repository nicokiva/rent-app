import {
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table as TableMaterial,
} from "@mui/material";
import { Body } from "./Body";

interface TableProps {
  data: Array<{ [key: string]: string | number }> | null | undefined;
  headers: { [key: string]: string };
  onClickEdit: (id: string) => void;
  onClickDelete: (id: string) => void;
}

export const Table = ({ data, headers, ...props }: TableProps) => (
  <TableContainer component={Paper}>
    <TableMaterial sx={{ minWidth: 650 }} aria-label='simple table'>
      <TableHead>
        <TableRow>
          {Object.keys(headers).map((key) => (
            <TableCell key={headers[key]}>{headers[key]}</TableCell>
          ))}
          <TableCell>E</TableCell>
          <TableCell>D</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <Body columnSize={Object.keys(headers).length + 2} data={data} {...props} />
      </TableBody>
    </TableMaterial>
  </TableContainer>
);
