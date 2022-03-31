import { useEffect, useState } from "react";
import { bookSearch } from "../api";

export const useSearchSubmit = (
  initialValue,
  inputValue,
  sort,
  page,
  size,
  target
) => {
  const [searchBooksList, setSearchBooksList] = useState(initialValue);

  const getBookResult = async (query, sort, page, size, target) => {
    if (query === "") {
      setSearchBooksList([]);
    } else {
      const queryResults = await bookSearch(query, sort, page, size, target);
      setSearchBooksList(queryResults);
    }
  };

  useEffect(() => {
    getBookResult(inputValue, sort, page, size, target);
  }, [inputValue, sort, page, size, target]);

  return { searchBooksList, getBookResult };
};
