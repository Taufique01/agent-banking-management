import { ApiDataTable } from "../../common-components/ApiDataTable";
import { customerApiUrl } from "../apiUrls";

const customerListTableColumns = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Phone",
    accessor: "phone",
  },
  {
    Header: "address",
    accessor: "address",
  },
];

export const CustomarList = () => {
  return (
    <ApiDataTable
      url={customerApiUrl}
      tableColumns={customerListTableColumns}
      style={{'maxHeight':'300px'}}
    />
  );
};
