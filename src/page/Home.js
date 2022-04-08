import styled from "styled-components";
import Layout from "../components/Layout";
import HelmetTitle from "../components/HelmetTitle";
import InputComponent from "../components/InputComponent";
import { useCallback, useState } from "react";

const Home = () => {
  const [, setSortData] = useState();
  const getSortData = useCallback(data => {
    setSortData(data);
  }, []);

  return (
    <Layout>
      <Container>
        <HelmetTitle title={"Home"} />
        <TitleContainer>
          <Title>Search Books</Title>
        </TitleContainer>
        <InputComponent getSortData={getSortData} displayTitle={false} />
      </Container>
    </Layout>
  );
};

const Title = styled.div`
  font-size: 80px;
  font-weight: 500;
  text-align: center;
  margin-top: 250px;
  letter-spacing: -0.1em;

  /* border: 1px solid; */
  @media screen and (max-width: 500px) {
    font-size: 40px;
    font-weight: 500;
    margin-top: 150px;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding-bottom: 50px; */
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
