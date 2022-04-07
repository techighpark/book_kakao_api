import { useCallback, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { SearchOutline } from "@styled-icons/evaicons-outline/SearchOutline";
import { BookOpen } from "@styled-icons/boxicons-regular/BookOpen";
import useFocus from "../hooks/useFocus";
import useInput from "../hooks/useInput";
import useSearch from "../hooks/useSearch";
import SearchingList from "./SearchingList";
import SortComponent from "./SortComponent";
import { useNavigate } from "react-router-dom";

const InputComponent = () => {
  const inputFocusRef = useRef(null);
  const [sortData, setSortData] = useState();
  const { focus: inputFocus, setFocus } = useFocus(inputFocusRef);
  const { inputValue, onChange } = useInput("", setFocus);
  const { searchBooksList } = useSearch([], inputValue);

  const eventHandler = useCallback(data => {
    setSortData(data);
  }, []);

  const navigate = useNavigate();
  const onSubmitTest = e => {
    e.preventDefault();
    navigate(`/search/${e.target[0].value}`, { state: { sortData } });
  };
  console.log(searchBooksList);

  return (
    <InputWrapper>
      <form onSubmit={onSubmitTest}>
        <InputContainer ref={inputFocusRef} inputFocus={inputFocus}>
          <InputDeco>
            <SearchOutlineIcon />
          </InputDeco>
          <InputCenter>
            <Input value={inputValue} onChange={onChange} />
          </InputCenter>
          <InputDeco>
            <BookOpenIcon />
          </InputDeco>
          {inputFocus ? (
            <SearchListContainer>
              <Separator />
              {searchBooksList.length === 0 ? (
                <ErrorText>There is no results</ErrorText>
              ) : (
                <>
                  {searchBooksList?.map((book, index) => (
                    <SearchingList key={index} {...book} />
                  ))}
                </>
              )}
            </SearchListContainer>
          ) : null}
        </InputContainer>
      </form>
      <SortComponent onChange={eventHandler} />
    </InputWrapper>
  );
};

const SearchListContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  padding: 44px 20px 30px 20px;
  background-color: ${props => props.theme.inputHoverBgColor};
  border-radius: 24px;
  z-index: -1;
  /* border: 5px solid blue; */
`;
const ErrorText = styled.div`
  font-size: ${props => props.theme.btnFontSize};
  font-weight: ${props => props.theme.btnFontWeight};
  letter-spacing: ${props => props.theme.btnLetterSpacing};
`;

const Separator = styled.div`
  border-top: 1px solid ${props => props.theme.borderColor};
  padding-top: 20px;
`;

const Input = styled.input`
  position: relative;
  padding: 0;
  border: none;
  height: 100%;
  width: 100%;
  outline: none;
  background-color: transparent;
  color: #e8eaed;
`;
const InputCenter = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  width: 500px;

  /* border: 1px solid yellow; */
`;

const BookOpenIcon = styled(BookOpen)`
  height: 20px;
  width: 20px;
  color: ${props => props.theme.inputIconColor};
`;
const SearchOutlineIcon = styled(SearchOutline)`
  height: 20px;
  width: 20px;
  color: ${props => props.theme.inputIconColor};
`;
const InputDeco = styled.div`
  height: 100%;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height: 44px;
  width: 100%;
  max-width: 584px;
  background: ${props => props.theme.inputBgColor};
  border: 1px solid ${props => props.theme.borderColor};
  ${props =>
    props.inputFocus &&
    css`
      border: none;
      background-color: ${props => props.theme.inputHoverBgColor};
    `}
  box-shadow: none;
  border-radius: 24px;
  position: relative;
  z-index: 3;

  /* border: 3px solid green; */
`;
const InputWrapper = styled.div`
  width: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 3px solid green; */
`;

export default InputComponent;
