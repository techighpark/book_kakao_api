import styled from "styled-components";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <SLayout>
      <Header />
      {children}
    </SLayout>
  );
};

const SLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  /* height: 100vh; */
  /* @media screen and (max-width: 500px) {
    width: 400px;
  } */
`;

export default Layout;
