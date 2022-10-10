import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
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
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(submitResponse);
  }
  function handleSearch(event) {
    event.preventDefault();
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h2>Search For A Word...</h2>
          <form className="form" onSubmit={handleSearch}>
            <input
              type="search"
              defaultValue={props.defaultKeyword}
              autoFocus={true}
              onChange={handleChangeKeyword}
            />
          </form>
        </section>

        <Results results={results} />
      </div>
    );
  } else {
    Load();
    return `Loading...`;
  }
}
