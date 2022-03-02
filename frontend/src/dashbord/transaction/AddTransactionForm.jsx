import { useEffect, useState } from "react";
import { Status } from "../../clients/status";
import { ApiDataSelect } from "../../common-components/ApiDataSelect";
import { isEmptyOrSpacesOnly } from "../../utils/string-utils";
import { useAddDataClient } from "../../clients/addDataClient";
import { CustomerSelect } from "./CustomerSelect";
import { useAlert } from "react-alert";
import { accountApiUrl } from "../apiUrls";

const addTransactionUrl = "api/transaction/create/";



export const AddTransactionForm = () => {
  const [received, setReceived] = useState("");
  const [paid, setPaid] = useState("");
  const [note, setNote] = useState("");
  const [deposit, setDeposit] = useState("");
  const [withdraw, setWithdraw] = useState("")
  const [customerId, setCustomerId] = useState(null);
  const [receivingAccountId, setReceivingAccountId] = useState(null);
  const [payingAccountId, setPayingAccountId] = useState(null);

  const alert = useAlert();

  const { status, addNewData: addNewTransaction } =
    useAddDataClient(addTransactionUrl);

  const handleReceivedChange = (event) => {
    setReceived(event.target.value);
  };

  const handlePaidChange = (event) => {
    setPaid(event.target.value);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };
  const handleDepositChange = (event) => {
    setDeposit(event.target.value);
  };
  const handleWithdrawChange = (event) => {
    setWithdraw(event.target.value);
  };

  const handleCustomerIdChange = (newValue) => {
    setCustomerId(newValue.value);
  };

  const handleReceivingAccountIdChange = (newValue) => {
    setReceivingAccountId(newValue.value);
  };

  const handlePayingAccountIdChange = (newValue) => {
    setPayingAccountId(newValue.value);
  };

  useEffect(() => {
     if(status === Status.Success){
       setPaid("");
       setReceived("");
       setNote("");
       

      alert.success("Transaction added successfully");}
      status === Status.Error && alert.error("Request failed");
  }, [alert, status]);

  const addTransaction = () => {
    if (
      isEmptyOrSpacesOnly(received) ||
      isEmptyOrSpacesOnly(paid) ||
      !customerId ||
      !receivingAccountId ||
      !payingAccountId
    ) {
      alert.error("missing required fields");
      return;
    }

    const transactionInputs = {
      received,
      paid,
      customerId,
      receivingAccountId,
      payingAccountId,
      note,
    };

    addNewTransaction(transactionInputs);
  };

  const addWithdraw= () => {
    if (isEmptyOrSpacesOnly(withdraw) ){
      alert.error("missing required fields");
      return;
    }

    const transactionInputs = {
     
      withdraw
    };

    // addNewDeposit(transactionInputs);
  };

  const addDeposit= () => {
    if (
      isEmptyOrSpacesOnly(deposit) 
     
     
    ) {
      alert.error("missing required fields");
      return;
    }

    const transactionInputs = {
     
      deposit
    };

    // addNewDeposit(transactionInputs);
  };

  return (
    <div className="transaction-form">
      
      <div className="flex-container">
         <div clasName="flex-content" style={{marginRight:'5px'}}>
       
        <div className="select-wrapper">
          <CustomerSelect onChange={handleCustomerIdChange} 
           />
        </div>
        <div className="select-wrapper">
          <ApiDataSelect
            url={accountApiUrl}
            placeholder="Receiving Acc."
            onChange={handleReceivingAccountIdChange}
           
          />
        </div>
        <div className="select-wrapper">
          <ApiDataSelect
            url={accountApiUrl}
            placeholder="Paying Acc."
            onChange={handlePayingAccountIdChange}
           
          />
        </div>
     
      
        <input
          onChange={handleReceivedChange}
          placeholder="Received"
          type="number"
          value={received}
        />

        <input onChange={handlePaidChange} 
        placeholder="Paid" value={paid}
         type="number"
        />

        
        <input
          placeholder="Due"
          disabled={true}
          type="number"
          value={received - paid}
        />

        <input onChange={handleNoteChange} placeholder="note" type="text" value={note} />

        <button onClick={addTransaction} className="submit-btn">
          Add Transaction
        </button>
      </div>

      <div className="flex-content" style={{marginRight:'5px'}}>
        <input onChange={handleDepositChange} placeholder="deposit" type="number"  value={deposit} />
        <button onClick={addDeposit} className="submit-btn">Add Deposit</button>
      </div>
      
      <div className="flex-content">
      
        <input onChange={handleWithdrawChange} placeholder="withdraw" type="number" value={withdraw} />
        <button onClick={addWithdraw} className="submit-btn">Add Withdraw</button>
      
      
      </div>
    </div>
    </div>
  );

};
