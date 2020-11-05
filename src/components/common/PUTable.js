import React from "react";
import { makeStyles, withStyles } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const TableCellStyles = withStyles({
  root: {
    borderRight: "1px solid #e7f1f1",
    borderBottomColor: "#e7f1f1",
  },
  head: {
      fontFamily: 'ProximaNovaSemibold',
      fontSize: 15,
  }
})(TableCell);

function createData(name, calories, fat, carbs, protein, details) {
  return { name, calories, fat, carbs, protein, details };
}

const tableHead = ["Date", "Type", "Transaction", "Amount", "Statement", "Details"];

const rows = [
  createData(
    "2020-08-16:18-14",
    "Buy",
    "Amazon",
    "-1,333 USD",
    "Success",
    "details"
  ),
  createData(
    "2020-08-16:18-14",
    "Buy",
    "Amazon",
    "-1,333 USD",
    "Success",
    "details"
  ),
  createData(
    "2020-08-16:18-14",
    "Exchange",
    "Amazon",
    "-1,333 USD",
    "Success",
    "details"
  ),
  createData(
    "2020-08-16:18-14",
    "Exchange",
    "Amazon",
    "-1,333 USD",
    "Success",
    "details"
  ),
  createData(
    "2020-08-16:18-14",
    "Exchange",
    "Amazon",
    "-1,333 USD",
    "Success",
    "details"
  ),
];

const useStyles = makeStyles({
  root: {
    background: "#f5fbfb",
  },
  table: {
    maxWidth: '100%',
    background: "#f5fbfb",
  },
});

const PUTable = () => {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table
        classes={{ root: classes.root }}
        className={classes.table}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            {tableHead.map((head, index) => <TableCellStyles key={index}>{head}</TableCellStyles>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i}>
              <TableCellStyles component="th" scope="row">
                {row.name}
              </TableCellStyles>
              <TableCellStyles>{row.calories}</TableCellStyles>
              <TableCellStyles>{row.fat}</TableCellStyles>
              <TableCellStyles>{row.carbs}</TableCellStyles>
              <TableCellStyles>{row.protein}</TableCellStyles>
              <TableCellStyles>{row.details}</TableCellStyles>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PUTable;
