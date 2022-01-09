import React, { useMemo } from "react";
import TransactionData from "./transactiondata.json";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import "../styles/accountsummary.css";

const transactionTableColumn = [
  {
    Header: "Date",
    accessor: "date",
  },
  {
    Header: "Name",
    accessor: "customar_name",
  },
  {
    Header: "Type",
    accessor: "transaction_type",
  },
  {
    Header: "Rec Acc.",
    accessor: "receiving_account",
  },
  {
    Header: "Paying Acc.",
    accessor: "paying_account",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Paid",
    accessor: "pay",
  },
  {
    Header: "Due",
    accessor: "due",
  },
  {
    Header: "Note",
    accessor: "note",
  },
];

export const TransactionTable = () => {
  const columns = useMemo(() => transactionTableColumn, []);
  const data = useMemo(() => TransactionData, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    prepareRow,
    pageOptions,
    state,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, usePagination);

  const {pageIndex, globalFilter } = state;

  return (
    <>
      <div className="search-container">
        <div className="left-side">Transaction List</div>
        <input
          placeholder="search ..."
          value={globalFilter || ""}
          className="search-customer"
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
      </div>

      <table {...getTableProps()} className="customer-list-table">
        <thead className="header">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()} className="table-body">
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination-btn">
        <span>
           page{''}
           <strong>
              {pageIndex+1} of {pageOptions.length}
           </strong>
            page{''}
         </span>
        <button onClick={() => previousPage()}>Pre page</button>
        <button onClick={() => nextPage()}>Next page</button>
     </div>
    </>
  );
};
