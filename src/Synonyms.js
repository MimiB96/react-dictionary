import React from "react";
import "./Dictionary.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonym">
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>Synonyms: {synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
