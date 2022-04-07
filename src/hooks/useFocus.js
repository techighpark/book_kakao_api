import { useEffect, useState } from "react";

const useFocus = focusRef => {
  const [focus, setFocus] = useState(false);
  const onFocus = e => {
    if (focusRef?.current?.contains(e.target)) {
      setFocus(true);
    } else {
      setFocus(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", onFocus);
    return () => {
      document.removeEventListener("mousedown", onFocus);
    };
  });
  return { focus, setFocus };
};

export default useFocus;
