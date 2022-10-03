import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventdefault();
    alert(`Searching for definition of ${keyword}`);
  }

  function changeKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type={search} autoFocus={true} onChange={changeKeyword} placeholder="What Word are You Looking For?"/>
      </form>
    </div>
  );
}
