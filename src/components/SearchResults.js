import styled from "styled-components";

const Container = styled.div`
  height: 150px;
  display: flex;
  margin-top: 100px;
  @media screen and (max-width: 500px) {
    height: 400px;
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 50px;
  } ;
`;
const Information = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 12px;
  @media screen and (max-width: 500px) {
    align-items: flex-start;
    height: 300px;
    margin-top: 30px;
  } ;
`;
const Thumbnail = styled.img`
  width: 100px;
  height: 100%;
  object-fit: contain;
`;

const Separator = styled.div`
  @media screen and (max-width: 500px) {
    margin-top: 30px;
    border-bottom: 0.5px solid gray;
  }
`;

const SearchResults = ({
  title,
  price,
  authors,
  thumbnail,
  sale_price,
  status,
  url,
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

export default SearchResults;
