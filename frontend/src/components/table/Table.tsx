import {
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table as TableMaterial,
} from "@mui/material";

interface TableProps {
  data: Array<{ [key: string]: string | number }>;
}

export const Table = ({ data }: TableProps) => {
  return (
    <TableContainer component={Paper}>
      <TableMaterial sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            {Object.keys(data[0]).map((key) => (
              <TableCell>{key}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => {
            return (
              <TableRow>
                {Object.keys(row).map((key) => (
                  <TableCell>{row[key]}</TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </TableMaterial>
    </TableContainer>
  );
};
