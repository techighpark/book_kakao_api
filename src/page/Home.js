import styled from "styled-components";

import { PageTitle } from "../components/HelmetTitle";
import Layout from "../components/Layout";

import InputComponent from "../components/InputComponent";

const Home = () => {
  // const [sort, setSort] = useState("acurracy");
  // const [target, setTarget] = useState("title");

  // const useSubmit = (defaultValue = null) => {
  //   const [submitValue, setSubmitValue] = useState(defaultValue);
  //   const onValidSubmit = e => {
  //     e.preventDefault();
  //     setSubmitValue(e.target[0].value);
  //   };
  //   return { submitValue, onValidSubmit };
  // };

  // const { submitValue, onValidSubmit } = useSubmit();
  // const submitBooks = useSearchSubmit([], submitValue, sort, "1", "5", target);

  return (
    <Layout>
      <Container>
        <PageTitle title={"Home"} />
        <TitleContainer>
          <Title>Search Books</Title>
        </TitleContainer>
        {/* <form onSubmit={onValidSubmit}> */}
        <InputComponent />

        <BodyContainer>
          {/* <div style={{ position: "absolute" }}>
            {submitBooks?.searchBooksList?.map((book, index) => (
              <SearchResults key={index} {...book} />
            ))}
          </div> */}
        </BodyContainer>
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
