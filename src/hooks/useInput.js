import { useState } from "react";

export const useInput = initialValue => {
  const [inputValue, setInputValue] = useState(initialValue);
  const onChange = e => {
    const {
      target: { value },
    } = e;
    setInputValue(value);
  };
  return { inputValue, onChange };
};
