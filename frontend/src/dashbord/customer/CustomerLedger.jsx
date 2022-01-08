import React, { useMemo } from "react";
import CustomerLedgerData from "./customerLedgerdata.json";
import { useTable, useGlobalFilter, usePagination } from "react-table";


const customerLedgerColumn = [
  {
    Header: " Name",
    accessor: "name",
  },
  {
    Header: "Cash Withdraw",
    accessor: "cash_withdraw",
  },
  {
    Header: "Cash Paid",
    accessor: "cash_paid",
  },
  {
    Header: "Bank Withdraw",
    accessor: "bank_withdraw",
  },
  {
    Header: "Bank Paid",
    accessor: "banK_paid",
  },
  {
    Header: "Due",
    accessor: "due",
  }
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
    state,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, usePagination);

  const { globalFilter } = state;

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
                <td><button>pay</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination-btn">
        <button onClick={() => previousPage()}>Pre page</button>
        <button onClick={() => nextPage()}>Next page</button>
      </div>
    </>
  );
};




