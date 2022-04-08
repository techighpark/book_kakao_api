import { useEffect, useState } from "react";
import { bookSearch } from "../api";

const useSearchSubmit = (
  initialValue,
  submitValue,
  sort,
  page,
  size,
  target
) => {
  console.log(submitValue);
  const [submitBooksList, setSubmitBooksList] = useState(initialValue);
  const getBookResult = async (query, sort, page, size, target) => {
    if (query === "") {
      setSubmitBooksList([]);
    } else {
      const queryResults = await bookSearch(query, sort, page, size, target);
      setSubmitBooksList(queryResults);
    }
  };
  useEffect(() => {
    getBookResult(submitValue, sort, page, size, target);
  }, [submitValue, sort, page, size, target]);

  return { submitBooksList };
};

export default useSearchSubmit;
