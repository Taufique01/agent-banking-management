import React, { useEffect, useState } from "react";
import { InputField } from "../design-system/InputField";

export const PriceInput = ({ onChange }: PriceInputProps) => {
  const [price, setPrice] = useState<string>("");
  const handleChange = (event: any) => {
    const value = event.target.value;
    let numberOnly = "";

    for (const char of value) {
      const isDigit = "0" <= char && char <= "9";
      const isDecimal = char == ".";
      const isFirstDecimal = numberOnly.indexOf(".") == -1;

      if (isDigit || (isDecimal && isFirstDecimal)) {
        numberOnly = numberOnly.concat(char);
      }
    }
    setPrice(numberOnly);
  };

  useEffect(() => {
    const numberPrice = parseFloat(price);
    onChange(numberPrice);
  }, [price]);

  return (
    <>
      <InputField
        width="30%;"
        placeholder="Price"
        value={price}
        onChange={handleChange}
      />
    </>
  );
};

type PriceInputProps = { onChange: (price: number) => void };
