import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/Layout";
import SearchResults from "../components/SearchResults";
import InputComponent from "../components/InputComponent";
import HelmetTitle from "../components/HelmetTitle";
import useSearchSubmit from "../hooks/useSearchSubmit";
import { useCallback, useState } from "react";

const BookList = () => {
  const { query } = useParams();
  const [sortData, setSortData] = useState();

  const getSortData = useCallback(data => {
    setSortData(data);
  }, []);

  const { submitBooksList } = useSearchSubmit(
    [],
    query,
    sortData?.sort,
    1,
    5,
    sortData?.target
  );

  return (
    <Layout>
      <HelmetTitle title={"Results"} />
      <Container>
        <BodyContainer>
          <Title>
            <Link to={"/"}>Search Books</Link>
          </Title>
          <InputComponent getSortData={getSortData} />
        </BodyContainer>
        {submitBooksList?.map((book, index) => (
          <SearchResults key={index} {...book} />
        ))}
      </Container>
    </Layout>
  );
};
const BodyContainer = styled.div`
  position: relative;
  display: flex;
  /* border: 1px solid green; */
`;
const Title = styled.div`
  position: absolute;
  right: 100%;
  top: 57px;
  cursor: pointer;
  /* border: 1px solid; */
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 200px;

  /* border: 1px solid; */
`;

export default BookList;
