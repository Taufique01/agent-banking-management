import { useEffect, useState } from "react";
import { AddCustomer } from "../customer/AddCustomer";
import { AddTransactionForm } from "./AddTransactionForm";
import { createContext } from "react";
import { useGetDataClient } from "../../clients/getDataClient";
import { customerApiUrl } from "../apiUrls";
import "./../styles/transactionform.css";

export const CustomerContext = createContext({
  customersData: [],
  reloadCustomersData: () => {},
});

export const AddTransaction = () => {
  const { response, reloadData: reloadCustomersData } =
    useGetDataClient(customerApiUrl);
  const [customersData, setCustomersData] = useState([]);

  useEffect(() => {
    if (response === undefined) return;
    setCustomersData(response);
  }, [response]);

  return (
    <CustomerContext.Provider value={{ customersData, reloadCustomersData }}>
      <div className="transaction-form-container">
          <AddCustomer />
       

        <AddTransactionForm />
      </div>
    </CustomerContext.Provider>
  );
};
