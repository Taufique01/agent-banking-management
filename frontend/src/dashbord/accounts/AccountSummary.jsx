import "../styles/accountsummary.css";
import { ApiDataTable } from "../../common-components/ApiDataTable";

const accountSummaryColumns = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Account Name",
    accessor: "name",
  },
  {
    Header: "Balance",
    accessor: "balance",
  },
];

export const AccountTable = () => {
  return (
    <ApiDataTable url="api/accounts/" tableColumns={accountSummaryColumns} />
  );
};
