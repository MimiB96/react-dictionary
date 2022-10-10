import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-3" key={index}>
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel="noopenner noreferrer"
                >
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt={photo.photographer}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
