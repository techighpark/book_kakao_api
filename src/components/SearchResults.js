import styled from "styled-components";

const SearchResults = ({
  thumbnail,
  title,
  price,
  sale_price,
  status,
  authors,
}) => {
  return (
    <Container>
      <Thumbnail src={thumbnail} />
      <Information>
        <div>제목:{title}</div>
        <div>가격:{price.toLocaleString()}원</div>
        <div>판매가격:{sale_price.toLocaleString()}원</div>
        <div>상태:{status}</div>
        <div>
          저자:
          {authors.map((author, index) => (
            <span key={index}>{author}</span>
          ))}
        </div>
      </Information>
      <Separator />
    </Container>
  );
};

const Separator = styled.div`
  @media screen and (max-width: 500px) {
    margin-top: 30px;
    border-bottom: 0.5px solid gray;
  }
`;
const Thumbnail = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  border: 1px solid white;
`;
const Information = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 12px;
  border: 1px solid orange;
`;
const Container = styled.div`
  width: 100%;
  max-width: 800px;
  height: 200px;
  margin-top: 100px;
  /* padding: 0px 100px; */
  border: 2px solid red;
  display: flex;
`;

export default SearchResults;
