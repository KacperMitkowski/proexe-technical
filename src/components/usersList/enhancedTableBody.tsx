import { Button, TableBody, TableCell, TableRow } from "@mui/material";
import { TableHelper } from "../../helpers";
import { Order, User } from "../../types";

interface IProps {
  order: Order;
  orderBy: string;
  users: User[];
  themeStyles: object;
  handleDelete: (id: string) => Promise<void>;
}

export const EnhancedTableBody = ({
  order,
  orderBy,
  users,
  themeStyles,
  handleDelete,
}: IProps) => {
  return (
    <TableBody>
      {TableHelper.stableSort(
        users as any[],
        TableHelper.getComparator(order, orderBy)
      ).map((user) => (
        <TableRow
          key={user.name}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell style={themeStyles} scope="row">
            {user.id}
          </TableCell>
          <TableCell style={themeStyles}>{user.name}</TableCell>
          <TableCell style={themeStyles}>{user.username}</TableCell>
          <TableCell style={themeStyles}>{user.email}</TableCell>
          <TableCell style={themeStyles}>{user.city}</TableCell>
          <TableCell>
            <Button variant="contained">Edit</Button>
          </TableCell>
          <TableCell>
            <Button
              variant="contained"
              onClick={() => handleDelete(user?.id as string)}
            >
              Delete
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
