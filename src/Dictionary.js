import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function submitResponse(response) {
    setResults(response.data);
  }

  function handleChangeKeyword(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();

    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(submitResponse);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleChangeKeyword} />
      </form>
      <Results results={results} />
    </div>
  );
}
