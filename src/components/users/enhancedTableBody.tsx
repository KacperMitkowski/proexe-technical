import { Button, TableBody, TableCell, TableRow } from "@mui/material";
import { useContext } from "react";
import { CommonContext } from "../../contexts";
import { TableHelper } from "../../helpers";
import { COMMON_ACTIONS } from "../../reducers";
import { Order, User } from "../../types";

interface IProps {
  order: Order;
  orderBy: string;
  users: User[];
  themeStyles: object;
}

export const EnhancedTableBody = ({
  order,
  orderBy,
  users,
  themeStyles,
}: IProps) => {
  const commonContext = useContext(CommonContext);

  return (
    <TableBody>
      {TableHelper.stableSort(
        users as any[],
        TableHelper.getComparator(order, orderBy)
      ).map((user) => {
        return (
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
            <TableCell style={themeStyles}>
              <Button
                onClick={() =>
                  commonContext.dispatch({
                    type: COMMON_ACTIONS.OPEN_EDIT_USER_MODAL_ACTION,
                    payload: {
                      user,
                    },
                  })
                }
                variant="contained"
                color="warning"
              >
                Edit
              </Button>
            </TableCell>
            <TableCell>
              <Button
                color="error"
                variant="contained"
                onClick={() =>
                  commonContext.dispatch({
                    type: COMMON_ACTIONS.OPEN_DELETE_USERS_MODAL_ACTION,
                    payload: {
                      userId: user.id,
                    },
                  })
                }
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};
