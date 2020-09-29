import React from "react";
import styled from "styled-components";

const CharacterFeatures = styled.div`
  background: lightyellow;
  font-style: italic;
  padding: 10px;
`;

// Write your Character component here
function CharacterColors({ eye_color, skin_color, hair_color}) {
  return (
    <CharacterFeatures>
      <p>Eye Color: {eye_color}</p>
      <p>Skin Color: {skin_color}</p>
      <p>Hair Color: {hair_color}</p>
    </CharacterFeatures>
  );
}

export default CharacterColors;
