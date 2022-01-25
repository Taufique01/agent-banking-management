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
      alert.success("Successfully added!");
      onAddSuccessful();
      return;
    }

    status === Status.Error && alert("Request failed");
  }, [alert, onAddSuccessful, status]);

  return (
    <div className="deposit-form-content" style={{ display: "flex" }}>
      <div className="select-wrapper">
        <ApiDataSelect
          url={accountApiUrl}
          placeholder="account"
          onChange={handleAccountChange}
        />
      </div>

      <input
        name="note"
        placeholder="note"
        onChange={handleNoteChange}
        style={{ width: "20%" }}
      />

      <input
        name="amount"
        placeholder="amount"
        onChange={handleAmountChange}
        type="number"
        style={{ width: "20%" }}
      />

      <button onClick={addCost} style={{ width: "20%", height: "45px" }}>
        Add
      </button>
    </div>
  );
};
