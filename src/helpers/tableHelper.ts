import { HeadCell, Order } from "../types";

export class TableHelper {
  static headCells: readonly HeadCell[] = [
    {
      id: "id",
      numeric: false,
      disablePadding: true,
      label: "ID",
    },
    {
      id: "name",
      numeric: false,
      disablePadding: false,
      label: "Name",
    },
    {
      id: "username",
      numeric: false,
      disablePadding: false,
      label: "Username",
    },
    {
      id: "email",
      numeric: false,
      disablePadding: false,
      label: "Email",
    },
    {
      id: "city",
      numeric: false,
      disablePadding: false,
      label: "Address",
    },
  ];

  static stableSort<T>(
    array: readonly T[],
    comparator: (a: T, b: T) => number
  ) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  static descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  static getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key
  ): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string }
  ) => number {
    return order === "desc"
      ? (a, b) => TableHelper.descendingComparator(a, b, orderBy)
      : (a, b) => -TableHelper.descendingComparator(a, b, orderBy);
  }
}
