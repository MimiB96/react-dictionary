import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function changeKeyword(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventdefault();

    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(submitResponse);
  }

  function submitResponse(response) {
    console.log(response);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          onChange={changeKeyword}
          placeholder="What Word are You Looking For?"
        />
      </form>
    </div>
  );
}
