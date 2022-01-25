import { GenericCostRevenueAddForm } from "./GenericCostRevenueAddForm";
import { useGetDataClient } from "../../clients/getDataClient";
import { useEffect, useState } from "react";
import { Table } from "../../common-components/Table";

export const tableColumns = [
  {
    Header: "Date",
    accessor: "updatedAt",
  },
  {
    Header: "Account Name",
    accessor: "accountName",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Note",
    accessor: "note",
  },
];

export const GenericCostRevenue = ({ fetchUrl, saveUrl }) => {
  const { response, reloadData } = useGetDataClient(fetchUrl);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (response === undefined) return;
    setData(response);
  }, [response]);

  return (
    <div>
      <GenericCostRevenueAddForm
        onAddSuccessful={reloadData}
        saveUrl={saveUrl}
      />
      <Table data={data} columns={tableColumns} />
    </div>
  );
};
