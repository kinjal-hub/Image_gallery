import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper 
} from '@mui/material';

const ResponsiveTable = ({ data, columns }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="dynamic table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id} hover>
              {columns.map((column) => {
                const value = row[column.id];
                // Custom rendering logic can be applied here based on column type
                if (column.render) {
                    return <TableCell key={column.id}>{column.render(value)}</TableCell>;
                }
                return <TableCell key={column.id}>{value}</TableCell>;
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResponsiveTable;
const columns = [{ id: 'name', label: 'Name' }, { id: 'age', label: 'Age' }];
const data = [{ id: 1, name: 'John Doe', age: 30 }, { id: 2, name: 'Jane Doe', age: 25 }];
<ResponsiveTable data={data} columns={columns} />
