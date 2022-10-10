import React from "react";
import "./Dictionary.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noreferrer noopenner"
        >
          Listen
        </a>
        <h2>{props.phonetic.text}</h2>
      </div>
    );
  } else {
    return null;
  }
}
