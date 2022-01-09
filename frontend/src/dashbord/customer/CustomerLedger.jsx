import React, { useMemo } from "react";
import CustomerLedgerData from "./customerLedgerdata.json";
import { useTable, useGlobalFilter, usePagination } from "react-table";


const customerLedgerColumn = [
  {
    Header: " Name",
    accessor: "name",
  },
  {
    Header: "Received",
    accessor: "cash_withdraw",
  },
  {
    Header: "Paid",
    accessor: "cash_paid",
  },
  {
    Header: "receivable",
    accessor: "bank_withdraw",
  },
 
]

export const CustomersLedger = () => {
  const columns = useMemo(() => customerLedgerColumn, []);
  const data = useMemo(() => CustomerLedgerData, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    prepareRow,
    canNextPage,
    canPreviousPage,
    state,
    pageOptions,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, usePagination);

  const { pageIndex,globalFilter } = state;

  return (
    <>
      <div className="search-container">
        <div className="left-side">Customer Ledger</div>
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
              <th>action</th>
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
                <td ><button className="action-btn">Details</button></td>
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
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>Pre page</button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>Next page</button>
      </div>
    </>
  );
};




