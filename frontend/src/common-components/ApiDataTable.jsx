import React, { useEffect, useState } from "react";
import { Table } from "./Table";
import { useGetDataClient } from "../clients/getDataClient";

export const ApiDataTable = ({ url, tableColumns }) => {
  const { response } = useGetDataClient(url);
  const [customersData, setCustomersData] = useState([]);

  useEffect(() => {
    if (response === undefined) return;
    setCustomersData(response);
  }, [response]);

  return <Table data={customersData} columns={tableColumns} />;
};
