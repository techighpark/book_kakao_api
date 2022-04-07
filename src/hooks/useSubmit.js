import { useState } from "react";

const useSubmit = (initialValue, setFocus) => {
  const [submitValue, setSubmitValue] = useState(initialValue);

  const onSubmit = e => {
    e.preventDefault();
    setSubmitValue(e.target[0].value);
    setFocus(false);
    // navigate(`/search/${submitValue}`);
  };

  return { submitValue, onSubmit };
};

export default useSubmit;
