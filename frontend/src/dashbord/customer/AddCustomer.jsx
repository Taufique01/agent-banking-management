import { useContext, useEffect, useState } from "react";
import { Status } from "../../clients/status";
import { useAddDataClient } from "../../clients/addDataClient";
import { useAlert } from "react-alert";
import { CustomerContext } from "../transaction/AddTransaction";
import { customerApiUrl } from "../apiUrls";
import "../styles/customar.css";

export const AddCustomer = ({ authorize }) => {
  const { status, addNewData: addNewCustomer } =
    useAddDataClient(customerApiUrl);
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const { reloadCustomersData } = useContext(CustomerContext);

  const alert = useAlert();

  const addCustomer = () => {
    const customerDetails = {
      name: customerName,
      phone: phone,
      address: address,
    };

    addNewCustomer(customerDetails);
  };

  const handleNameChange = (customerName) => {
    setCustomerName(customerName);
  };

  const handlePhoneChange = (phone) => {
    setPhone(phone);
  };

  const handleAddressChange = (address) => {
    setAddress(address);
  };

  useEffect(() => {
    if (status === Status.Success) {
      alert.success("customer added");
      reloadCustomersData && reloadCustomersData();
    }
    status === Status.Error && alert.error("customer not added");
  }, [alert, reloadCustomersData, status]);

  return (
    <div className="deposit-form-content">
      <input
        onChange={(e) => {
          handleNameChange(e.target.value);
        }}
        placeholder="Name"
      />

      <input
        onChange={(e) => {
          handlePhoneChange(e.target.value);
        }}
        placeholder="phone"
      />

      <input
        onChange={(e) => {
          handleAddressChange(e.target.value);
        }}
        placeholder="address"
      />

      <button onClick={addCustomer} className="customer-add-btn">
        Add Customer
      </button>
    </div>
  );
};
