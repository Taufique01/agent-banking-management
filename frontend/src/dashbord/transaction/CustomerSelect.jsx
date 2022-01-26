import { useContext, useEffect, useState } from "react";
import Select from "react-select";
import { CustomerContext } from "../transaction/AddTransaction";

const selectStyles = {
  control: (provided) => ({
    ...provided,
    background: "#ffffff",
    boxShadow: "none",
    width: "100%",
    marginLeft: "0px",
    marginRight: "0px",
    fontFamily: "Roboto",
    fontSize: "18px",
    minHeight: '30px'
   
    
   
  }),
  input: base => ({
    ...base,
    margin: 0,
    padding: 0,
    height:'50px'
})
  
};

export const CustomerSelect = ({ onChange }) => {
  const { customersData } = useContext(CustomerContext);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (!customersData) return;

    const tempOptions = customersData.map((value) => ({
      value: value.id,
      label: value.name,
    }));

    setOptions(tempOptions);
  }, [customersData]);

  return (
    <Select
      options={options}
      placeholder="Select customer"
      styles={selectStyles}
      onChange={onChange}
    />
  );
};
