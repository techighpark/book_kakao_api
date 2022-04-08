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
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
        <BookInfoContainer>
          <Price>{price.toLocaleString()}</Price>
          <SalePrice>{sale_price.toLocaleString()}</SalePrice>
          <InStock>{status}</InStock>
          <Authors>
            {authors.map((author, index) => (
              <Author key={index}>{author}</Author>
            ))}
          </Authors>
        </BookInfoContainer>
      </Information>
      <Separator />
    </Container>
  );
};

const Author = styled.div`
  color: ${props => props.theme.fontLightColor};
`;
const Authors = styled.div`
  color: ${props => props.theme.fontLightColor};
`;
const InStock = styled.div`
  color: ${props => props.theme.fontLightColor};
`;
const SalePrice = styled.div`
  color: ${props => props.theme.fontColor};
`;
const Price = styled.div`
  color: ${props => props.theme.fontLightColor};
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: 300;
`;

const TitleContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid white; */
`;
const BookInfoContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  * {
    font-size: 12px;
    font-weight: 300;
  }
  /* border: 1px solid white; */
`;

const Separator = styled.div`
  border-top: 1px solid red;
  /* padding-top: 20px; */
`;

const Thumbnail = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  /* border: 1px solid white; */
`;
const Information = styled.div`
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  /* padding-bottom: 20px; */

  border-top: 1px solid ${props => props.theme.borderColor};
  border-bottom: 1px solid ${props => props.theme.borderColor};
`;
const Container = styled.div`
  width: 100%;
  max-width: 800px;
  height: 200px;
  margin-top: 50px;
  display: flex;
  /* flex-direction: column; */
  /* border: 2px solid red; */
`;

export default SearchResults;
