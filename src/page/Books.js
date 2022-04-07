import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/Layout";
import useSearchSubmit from "../hooks/useSearchSubmit";
import SearchResults from "../components/SearchResults";
import InputComponent from "../components/InputComponent";

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
  console.log(submitBooksList);

  return (
    <Layout>
      <Container>
        <InputComponent />
        {submitBooksList?.map((book, index) => (
          <SearchResults key={index} {...book} />
        ))}
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding-bottom: 50px; */

  /* border: 1px solid; */
`;

export default BookList;
