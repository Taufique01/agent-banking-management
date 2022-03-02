import "../styles/accountsummary.css";
import { ApiDataTable } from "../../common-components/ApiDataTable";
import {Input}  from "../../design-system/Input";
import { SubmitBtn } from "../../design-system/SubmitBtn";
import { ApiDataSelect } from "../../common-components/ApiDataSelect";
import { accountApiUrl } from "../apiUrls";

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
  <>
      <div class="form-group" style={{display:'flex',marginTop:'-15px'}}>
      <div className="select-wrapper" style={{width:'40%',marginRight:'2px'}} >
      <ApiDataSelect url={accountApiUrl} placeholder="account"/>
       </div>
        <Input name="account-name" placeholder="balance" onChangeHandle={(e)=>console.log(e.target.value)} styles={{height: "55px",width:"40%",marginRight:'2px'}}/>
        <SubmitBtn onSubmit={(e)=>alert("submit")} value="Add Account" styles={{height: "55px",width:"20%",marginRight:'2px'}}/>
      </div>
     <ApiDataTable url="api/accounts/" tableColumns={accountSummaryColumns}  />
    </>
  );
};
