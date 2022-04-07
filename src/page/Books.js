import { useLocation, useParams } from "react-router-dom";
import useSearchSubmit from "../hooks/useSearchSubmit";

const BookList = () => {
  const { query } = useParams();
  const {
    state: { sortData },
  } = useLocation();

  const { submitBooksList } = useSearchSubmit(
    [],
    query,
    sortData?.select,
    1,
    5,
    sortData?.target
  );

  console.log(query);
  console.log(submitBooksList);

  return <div>books</div>;
};

export default BookList;
