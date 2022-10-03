import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong> {definition.definition}</strong>
              <br />
              <strong>Example:</strong>
              <em> {definition.example}</em>
              <Synonyms synonyms={props.meaning.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}