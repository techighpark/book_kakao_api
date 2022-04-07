import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import useFocus from "../hooks/useFocus";

const SortComponent = ({ onChange }) => {
  const selectFocunRef = useRef(null);
  const [select, setSelect] = useState("Accuracy");
  const [target, setTarget] = useState("title");
  const { focus: selectFocus, setFocus: setSelectFocus } =
    useFocus(selectFocunRef);

  const onClickPublisher = value => {
    setTarget(value);
  };

  useEffect(() => {
    onChange({ target, select });
  }, [target, select, onChange]);

  return (
    <SortContainer>
      <SortBtns>
        <SelectBtn ref={selectFocunRef} selectFocus={selectFocus}>
          {select}
          <SelectList>
            <SelectItem
              onClick={() => {
                setSelect("Accuracy");
                setSelectFocus(false);
              }}
            >
              Accuracy
            </SelectItem>
            <SelectItem
              onClick={() => {
                setSelect("Latest");
                setSelectFocus(false);
              }}
            >
              Lastest
            </SelectItem>
          </SelectList>
        </SelectBtn>
        <SortBtn
          onClick={() => onClickPublisher("title")}
          selected={target === "title"}
        >
          <BtnText>Title</BtnText>
        </SortBtn>
        <SortBtn
          onClick={() => onClickPublisher("publisher")}
          selected={target === "publisher"}
        >
          <BtnText>Publisher</BtnText>
        </SortBtn>
        <SortBtn
          onClick={() => onClickPublisher("author")}
          selected={target === "author"}
        >
          <BtnText>Author</BtnText>
        </SortBtn>
      </SortBtns>
    </SortContainer>
  );
};

const SelectItem = styled.li`
  padding: 0 16px;
  border-radius: 4px;
  height: 36px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    border: 1px solid ${props => props.theme.borderHoverColor};
  }
`;
const SelectList = styled.ul`
  background-color: ${props => props.theme.btnBgColor};
  font-size: ${props => props.theme.btnFontSize};
  font-weight: ${props => props.theme.btnFontWeight};
  letter-spacing: ${props => props.theme.btnLetterSpacing};
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  transition: 0.3s ease-in-out;
  border-radius: 4px;
  display: none;
  /* border: 1px solid white; */
`;

const SelectBtn = styled.div`
  background-color: ${props => props.theme.btnBgColor};
  font-size: ${props => props.theme.btnFontSize};
  font-weight: ${props => props.theme.btnFontWeight};
  letter-spacing: ${props => props.theme.btnLetterSpacing};
  position: relative;
  margin: 11px 4px;
  padding: 0 16px;
  border-radius: 4px;
  height: 36px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${props =>
    props.selectFocus &&
    css`
      ${SelectList} {
        display: inline;
      }
    `}/* border: 1px solid green; */
`;

const BtnText = styled.div`
  font-size: ${props => props.theme.btnFontSize};
  font-weight: ${props => props.theme.btnFontWeight};
  letter-spacing: ${props => props.theme.btnLetterSpacing};
`;
const SortBtn = styled.div`
  background-color: ${props => props.theme.btnBgColor};
  margin: 11px 4px;
  padding: 0 16px;
  border-radius: 4px;
  height: 36px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  /* border: 1px solid red; */
  :hover {
    border: 1px solid ${props => props.theme.borderHoverColor};
  }
  ${props =>
    props.selected &&
    css`
      border: 1px solid ${props => props.theme.borderHoverColor};
    `}
`;
const SortBtns = styled.div`
  display: flex;
  justify-content: space-between;

  /* border: 1px solid white; */
`;

const SortContainer = styled.div`
  padding: 15px;
  min-width: 500px;

  /* border: 1px solid orange; */
`;

export default SortComponent;
