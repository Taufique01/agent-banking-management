import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useGetDataClient } from "../clients/getDataClient";

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
  }),
  input: base=>({
    ...base,
    margin: 0,
    padding: 0,
    height:'50px'
  })

};

export const  ApiDataSelect = ({ url, placeholder, onChange,amount }) => {
  const { response } = useGetDataClient(url);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (!response) return;

    const tempOptions = response.map((value) => ({
      value: value.id,
      label: value.name,
    }));

    setOptions(tempOptions);
  }, [response]);

  return (
    <Select
      options={options}
      placeholder={placeholder}
      styles={selectStyles}
      onChange={onChange}
      value= {amount}
      defaultValue={{ label: placeholder}}
    />
  );
};
