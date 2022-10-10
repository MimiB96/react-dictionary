import React from "react";
import "./Dictionary.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer noopenner">
        <em>Listen</em>
      </a>

      {props.phonetic.text}
    </div>
  );
}
