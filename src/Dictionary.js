import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState([]);

  function handleDictionary(response) {
    setResults(response.data[0]);
  }
  function handleImage(response) {
    setPhotos(response.data.photos);
  }
  function Load() {
    setLoaded(true);
    search();
  }

  function handleChangeKeyword(event) {
    setKeyword(event.target.value);
  }

  function search() {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleDictionary);

    const pexelsApiKey =
      "563492ad6f91700001000001004ec349788349a081c77866f7b8a4e1";
    const pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=4`;
    axios
      .get(pexelsUrl, { headers: { Authorization: `Bearer ${pexelsApiKey}` } })
      .then(handleImage);
  }
  function handleSearch(event) {
    event.preventDefault();
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <label>Search For A Word...</label>
          <form className="form" onSubmit={handleSearch}>
            <input
              type="search"
              defaultValue={props.defaultKeyword}
              autoFocus={true}
              onChange={handleChangeKeyword}
              className="form-control search-input"
            />
          </form>
        </section>

        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    Load();
    return `Loading...`;
  }
}
