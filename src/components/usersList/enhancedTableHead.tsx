import {
  Box,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { TableHelper } from "../../helpers";
import { Order, User } from "../../types";

interface IProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof User
  ) => void;
  order: Order;
  orderBy: string;
  themeStyles: object;
}

export const EnhancedTableHead = ({
  onRequestSort,
  order,
  orderBy,
  themeStyles,
}: IProps) => {
  const createSortHandler =
    (property: keyof User) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {TableHelper.headCells.map((headCell) => (
          <TableCell
            style={themeStyles}
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              style={themeStyles}
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
