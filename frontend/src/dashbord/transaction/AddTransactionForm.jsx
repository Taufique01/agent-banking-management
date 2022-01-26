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
    status === Status.Success &&
      alert.success("Transaction added successfully");
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
      alert("missing required fields");
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

  return (
    <div className="transaction-form">
      <div className="form-group">
        <div className="select-wrapper">
          <CustomerSelect onChange={handleCustomerIdChange} />
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
      </div>

      <div className="form-group">
        <input
          onChange={handleReceivedChange}
          placeholder="Received"
          type="number"
        />
        <input onChange={handlePaidChange} placeholder="Paid" />
        <input
          value={received - paid}
          placeholder="Due"
          disabled={true}
          type="number"
        />
        <input onChange={handleNoteChange} placeholder="note" type="text" />

        <button onClick={addTransaction} className="submit-btn">
          Add Transaction
        </button>
      </div>
    </div>
  );
};
