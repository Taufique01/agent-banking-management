import { ApiDataTable } from "../../common-components/ApiDataTable";

const customerLedgerColumns = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Phone",
    accessor: "phone",
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
];

const customerLedgerUrl = "api/customers-ledger/";

export const CustomersLedger = () => {
  return (
    <ApiDataTable
      url={customerLedgerUrl}
      tableColumns={customerLedgerColumns}
    />
  );
};
