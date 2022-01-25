import { useTable, useGlobalFilter, usePagination } from "react-table";
import React from "react";
import "./table-style.css";

export const Table = ({ data, columns }) => {
  const tableData = React.useMemo(() => data, [data]);

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
  } = useTable({ columns, data: tableData }, useGlobalFilter, usePagination);

  const { pageIndex, globalFilter } = state;

  return (
    <>
      <div className="search-container">
        <input
          placeholder="search customer"
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
          page{""}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
          page{""}
        </span>
        <button onClick={() => previousPage()}>Pre page</button>
        <button onClick={() => nextPage()}>Next page</button>
      </div>
    </>
  );
};
