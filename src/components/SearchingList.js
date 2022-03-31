import styled from "styled-components";

const Container = styled.div``;

const SearchingList = ({ title, thumbnail }) => {
  return (
    <Container>
      <div>{title}</div>
      <img src={thumbnail} alt={title} style={{ width: "30px" }}></img>
    </Container>
  );
};

export default SearchingList;
