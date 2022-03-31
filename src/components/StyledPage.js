import styled from "styled-components";
const StyledPage = {
  Layout: styled.div`
    width: 100%;
    min-width: 400px;
    padding: 0px 60px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
  `,
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Title: styled.div`
    font-size: 20px;
    text-align: center;
    margin-top: 50px;
  `,
  SortContainer: styled.div`
    width: 100%;
    margin-top: 50px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Row: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    @media screen and (max-width: 500px) {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 20px;
    } ;
  `,
  QueryInput: styled.input`
    width: 400px;
    @media screen and (max-width: 500px) {
      width: 300px;
    } ;
  `,
  Select: styled.select`
    width: 100px;
    font-size: 12px;
    min-width: 80px;
    margin-right: 50px;
    @media screen and (max-width: 500px) {
      margin-right: 0px;
      margin-bottom: 20px;
    } ;
  `,
  SortBtns: styled.div`
    width: 200px;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 500px) {
      width: 250px;
    } ;
  `,
  SortBtn: styled.span`
    cursor: pointer;
    color: ${props => (props.target === props.title ? "pink" : "")};
    font-size: ${props => (props.target === props.title ? "13px" : "")};
    &:hover {
      color: gray;
      font-size: 13px;
    }
  `,
  BodyContainer: styled.div`
    width: 450px;
    @media screen and (max-width: 500px) {
      width: 300px;
    } ;
  `,
};

export default StyledPage;
