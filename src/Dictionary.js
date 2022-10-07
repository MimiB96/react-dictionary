import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import { Container } from "react-bootstrap";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function submitResponse(response) {
    setResults(response.data[0]);
  }
  function Load() {
    setLoaded(true);
    search();
  }

  function handleChangeKeyword(event) {
    setKeyword(event.target.value);
  }

  function search() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(url).then(submitResponse);
  }
  function handleSearch(event) {
    event.preventDefault();
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <Container>
          <form className="form" onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Search for a word"
              autoFocus={true}
              onChange={handleChangeKeyword}
            />
          </form>
        </Container>
        <Container>
          <Results results={results} />
        </Container>
      </div>
    );
  } else {
    Load();
    return `Loading...`;
  }
}
