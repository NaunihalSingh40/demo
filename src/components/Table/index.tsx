import React, { ReactNode } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TTable } from "./types";

const PTable = <T, K extends keyof T>({ rows, columns }: TTable<T, K>) => (
  <Paper sx={{ width: "100%" }}>
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell
                key={`head-${index}`}
                align={"left"}
                style={{ minWidth: 130 }}
              >
                {column.header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow hover role="checkbox" tabIndex={-1} key={index}>
              {columns.map((column, index) => {
                return (
                  <TableCell key={`cell-${index}`} align={"left"}>
                    {row[column.key] as ReactNode}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Paper>
);

export default PTable;
