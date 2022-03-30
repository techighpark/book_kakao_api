import { useEffect, useState } from "react";
import { bookSearch } from "../api";

const useSearch = ({ initialValue }) => {
  const [searchdata, setSearchdata] = useState("");
  const onChange = e => {
    const {
      target: { value },
    } = e;
    setSearchdata(value);
  };
  return { searchdata, onChange };
};

const Home = () => {
  const [books, setBooks] = useState([]);
  const search = useSearch("");
  console.log(search);

  const getBookResult = async query => {
    const results = await bookSearch(query);
    setBooks(results);
    return;
  };

  //   useEffect(() => {
  //     getBookResult("미움받을 용기");
  //   }, [search]);
  //   setSearch("미움받을 용기");
  return (
    <div>
      <div>Books</div>
      <div>Search</div>
      <input placeholder="Search Books" {...search} on></input>
    </div>
  );
};

export default Home;
