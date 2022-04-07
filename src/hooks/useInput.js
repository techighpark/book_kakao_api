import { useState } from "react";

const useInput = (initialValue, setFocus) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const onChange = e => {
    const {
      target: { value },
    } = e;
    setInputValue(value);
    setFocus(true);
  };
  return { inputValue, onChange };
};

export default useInput;
