import { useEffect, useState } from "react";
import { useAddCustomerClient } from "./addCustomerClient";

export const AddCustomer = () => {
  const { status, addNewCustomer } = useAddCustomerClient();
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

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
    if (status === "success") {
      alert("customer added");
    }
  }, [status]);

  return (
    <>
      <div>Add customer form</div>

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

      <button onClick={addCustomer}>add customer</button>
    </>
  );
};
