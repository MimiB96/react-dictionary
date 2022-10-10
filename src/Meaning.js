import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h1>{props.meaning.partOfSpeech}</h1>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="Definition">
              {definition.definition}
              <br />
              <div>
                <strong>Example:</strong>
                <em> {definition.example}</em>
              </div>
              <br />
              <Synonyms synonyms={props.meaning.synonyms} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
