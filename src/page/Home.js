import { useState } from "react";
import { useInput } from "../hooks/useInput";
import { useSearch } from "../hooks/useSearch";
import SearchResults from "../components/SearchResults";
import SearchingList from "../components/SearchingList";
import StyledPage from "../components/StyledPage";
import { useSearchSubmit } from "../hooks/useSearchSubmit";

const Home = () => {
  const [submitValue, setSubmitValue] = useState("");
  const [sort, setSort] = useState("acurracy");
  const [target, setTarget] = useState("title");

  const searchInput = useInput("");
  const books = useSearch([], searchInput.inputValue);
  const submitBooks = useSearchSubmit([], submitValue, sort, "1", "5", target);
  console.log(books);
  const onValidSubmit = e => {
    e.preventDefault();
    setSubmitValue(e.target[0].value);
    submitBooks.getBookResult(submitValue, sort, "1", "5", target);
  };

  const onSelectSort = e => {
    setSort(e.target.value);
  };
  const onClickTarget = e => {
    setTarget(e.target.title);
  };

  return (
    <StyledPage.Layout>
      <StyledPage.Container>
        <StyledPage.Title>Search Books</StyledPage.Title>
        <StyledPage.SortContainer>
          <form onSubmit={onValidSubmit}>
            <StyledPage.Row>
              <StyledPage.QueryInput
                placeholder="Search Books"
                value={searchInput.inputValue}
                onChange={searchInput.onChange}
              ></StyledPage.QueryInput>
            </StyledPage.Row>
            <StyledPage.Row>
              <StyledPage.Select
                name="sort"
                defaultValue={"accuracy"}
                onChange={onSelectSort}
              >
                <option value="accuracy">정확도순</option>
                <option value="latest">발간일순</option>
              </StyledPage.Select>
              <StyledPage.SortBtns>
                <StyledPage.SortBtn
                  title="title"
                  onClick={onClickTarget}
                  target={target}
                >
                  제목
                </StyledPage.SortBtn>
                <StyledPage.SortBtn
                  title="isbn"
                  onClick={onClickTarget}
                  target={target}
                >
                  ISBN
                </StyledPage.SortBtn>
                <StyledPage.SortBtn
                  title="publisher"
                  onClick={onClickTarget}
                  target={target}
                >
                  출판사
                </StyledPage.SortBtn>
                <StyledPage.SortBtn
                  title="person"
                  onClick={onClickTarget}
                  target={target}
                >
                  저자
                </StyledPage.SortBtn>
              </StyledPage.SortBtns>
            </StyledPage.Row>
          </form>
        </StyledPage.SortContainer>
        <StyledPage.BodyContainer>
          {books.searchBooksList.length === 0 ? null : (
            <div
              style={{
                position: "absolute",
                width: "395px",
                zIndex: 1,
                backgroundColor: "white",
                top: "20%",
                left: "25%",
                borderRadius: "5px",
                padding: "10px",
              }}
            >
              {books?.searchBooksList?.map((book, index) => (
                <SearchingList key={index} {...book} />
              ))}
            </div>
          )}
          <div style={{ position: "absolute" }}>
            {submitBooks?.searchBooksList?.map((book, index) => (
              <SearchResults key={index} {...book} />
            ))}
          </div>
        </StyledPage.BodyContainer>
      </StyledPage.Container>
    </StyledPage.Layout>
  );
};

export default Home;
