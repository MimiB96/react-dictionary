import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a
        href={props.phonetics.audio}
        target="_blank"
        rel="noreferrer nopenner"
      >
        Listen
      </a>

      {props.phonetics.text}
    </div>
  );
}
