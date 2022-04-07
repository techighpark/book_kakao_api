import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import HelmetTitle from "../components/HelmetTitle";
import InputComponent from "../components/InputComponent";

const Home = () => {
  const [bookList, setBookList] = useState([]);
  const eventHandler = useCallback(data => {
    setBookList(data);
  }, []);

  return (
    <Layout>
      <Container>
        <HelmetTitle title={"Home"} />
        <TitleContainer>
          <Title>Search Books</Title>
        </TitleContainer>
        <InputComponent onSubmitList={eventHandler} />
        <BodyContainer></BodyContainer>
      </Container>
    </Layout>
  );
};

const BodyContainer = styled.div`
  /* width: 450px; */

  /* border: 3px solid red; */

  @media screen and (max-width: 500px) {
    width: 300px;
  } ;
`;
const Title = styled.div`
  font-size: 80px;
  font-weight: 500;
  text-align: center;
  margin-top: 250px;
  letter-spacing: -0.1em;

  /* border: 1px solid; */
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* border: 1px solid; */
`;

export default Home;
