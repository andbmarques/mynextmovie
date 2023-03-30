import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  SearchButton,
  SearchButtonIcon,
  SearchInput,
} from "./styles";

const Search = () => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <Container>
      <SearchInput type="text" onChange={handleInputChange} />
      <SearchButton
        href={`/search/${searchText}`}
        style={{
          pointerEvents: searchText ? "all" : "none",
          background: searchText ? "#F8F32B" : "gray",
        }}
      >
        <SearchButtonIcon weight="bold" />
      </SearchButton>
    </Container>
  );
};

export default Search;
