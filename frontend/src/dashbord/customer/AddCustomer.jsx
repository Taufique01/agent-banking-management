import { useEffect, useState } from "react";
import { useAddCustomerClient } from "./addCustomerClient";
import '../styles/customar.css'


export const AddCustomer = ({authorize}) => {
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

   return  (
    <>
      
     
      <div className="form-container">

      <div className="form-group">
      <label for="name">Name :</label>
      <input
        onChange={(e) => {
          handleNameChange(e.target.value);
        }}
        placeholder="Name"
      />
      </div>
    
      <div className="form-group">
      <label for="name">Phone :</label>
      <input
        onChange={(e) => {
          handlePhoneChange(e.target.value);
        }}
        placeholder="phone"
      />
      </div>

      <div className="form-group">
      <label for="name">Address :</label>
      <input
        onChange={(e) => {
          handleAddressChange(e.target.value);
        }}
        placeholder="address"
      />
      </div>

      <div onClick={addCustomer} className="submit-btn">Add Customer</div>
      </div>
    </>
  )
  
};
