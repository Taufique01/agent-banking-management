import { useEffect, useState } from "react";
import { Status } from "../../clients/status";
import { ApiDataSelect } from "../../common-components/ApiDataSelect";
import { isEmptyOrSpacesOnly } from "../../utils/string-utils";
import { useAddDataClient } from "../../clients/addDataClient";
import { useAlert } from "react-alert";
import { accountApiUrl } from "../apiUrls";

export const GenericCostRevenueAddForm = ({ onAddSuccessful, saveUrl }) => {
  const [accountId, setAccountId] = useState(null);
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [amountPlaceHolder, setPlaceHolder] = useState("amount");

  const { status, addNewData } = useAddDataClient(saveUrl);

  const alert = useAlert();

  const handleAccountChange = (selectedOption) => {
    setAccountId(selectedOption.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const addCost = () => {
    const hasMissingInput =
      !accountId || isEmptyOrSpacesOnly(amount) || isEmptyOrSpacesOnly(note);

    if (hasMissingInput) {
      alert.error("missing required fields");
      return;
    }

    addNewData({ accountId, amount, note });
  };

  useEffect(() => {
    if (status === Status.Success) {
      setNote("");
      setAmount("")
      alert.success("Successfully added!");
      onAddSuccessful();
      return;
    }

    status === Status.Error && alert("Request failed");
  }, [alert, onAddSuccessful, status]);

  return (
    <div className="deposit-form-content" style={{ display: "flex",marginBottom:"10px",marginTop:'-10px'
     }}>
      <div className="select-wrapper" style={{width:'25%',marginRight:"2px"}} >
        <ApiDataSelect
          url={accountApiUrl}
          placeholder="account"
          onChange={handleAccountChange}
          value={amount}
        />
      </div>

      <input
        name="note"
        placeholder="note"
        value={note}
        onChange={handleNoteChange}
        style={{ width: "25%",marginRight:"2px" }}
      />

      <input
        name="amount"
        placeholder="amount"
        onChange={handleAmountChange}
        type="number"
        value={amount}
        style={{ width: "25%",marginRight:"2px" }}
      />

      <button onClick={addCost} style={{ width: "25%", height: "55px" }}>
        Add
      </button>
    </div>
  );
};
