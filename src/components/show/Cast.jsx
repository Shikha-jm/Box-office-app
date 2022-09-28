import React from "react";
import IMG_placeholder from "./../../images/notFoundimg.jpg";

function Cast({ cast }) {
  return (
    <>
      <div className="cast-row">
        {cast.map(({ person, character, voice }, key) => (
          <div key={key} className="cast-col">
            <div>
              <img
                src={person.image ? person.image.medium : IMG_placeholder}
                alt="cast-personw"
              />
            </div>
            <div>
              <span>
                {person.name} | {character.name} {voice ? "| Voice" : ""}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cast;
