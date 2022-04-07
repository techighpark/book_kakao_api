import { useEffect, useState } from "react";
import { bookSearch } from "../api";

const useSearch = (initialValue, inputValue) => {
  const [searchBooksList, setSearchBooksList] = useState(initialValue);

  const getBookResult = async query => {
    if (query === "") {
      setSearchBooksList([]);
    } else {
      const queryResults = await bookSearch(query);
      setSearchBooksList(queryResults);
    }
  };

  useEffect(() => {
    getBookResult(inputValue);
  }, [inputValue]);

  return { searchBooksList };
};

export default useSearch;
