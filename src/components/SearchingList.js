import styled from "styled-components";

const SearchingList = ({ title, thumbnail }) => {
  return (
    <Container>
      <Thumnail src={thumbnail} alt={title}></Thumnail>
      <Title>{title}</Title>
    </Container>
  );
};

const Title = styled.span`
  padding: 0px 20px;
  font-size: 12px;
`;

const Thumnail = styled.img`
  /* width: 30px; */
  height: 35px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0px;
`;

export default SearchingList;
