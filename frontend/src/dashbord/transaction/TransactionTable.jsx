import { ApiDataTable } from "../../common-components/ApiDataTable";
import "../styles/accountsummary.css";

const transactionTableColumns = [
  {
    Header: "Date",
    accessor: "updatedAt",
  },
  {
    Header: "Name",
    accessor: "customerName",
  },
  {
    Header: "Rec Acc.",
    accessor: "receivingAccount",
  },
  {
    Header: "Paying Acc.",
    accessor: "payingAccount",
  },
  {
    Header: "Received",
    accessor: "receivedAmount",
  },
  {
    Header: "Paid",
    accessor: "paidAmount",
  },
  {
    Header: "Receivables",
    accessor: "receivableAmount",
  },
  {
    Header: "Note",
    accessor: "note",
  },
];

const transactionApiUrl = "api/transactions/";

export const TransactionTable = () => {
  return (
    <ApiDataTable
      url={transactionApiUrl}
      tableColumns={transactionTableColumns}
    />
  );
};
