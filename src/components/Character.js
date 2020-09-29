import React from "react";
import styled from "styled-components";
import CharacterColors from "./CharacterColors";

const CharacterCard = styled.div`
  background: #99f3eb;
  color: black;
  width: 350px;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5px auto;
`;

// Write your Character component here
function Character({
  name,
  birth_year,
  gender,
  height,
  mass,
  eye_color,
  skin_color,
  hair_color,
}) {
  return (
    <CharacterCard>
      <h2>{`${name} ${birth_year}`}</h2>
      <p>Gender: {gender}</p>
      <p>Height: {height} cm</p>
      <p>Mass: {mass} kg</p>
      <CharacterColors
        eye_color={eye_color}
        skin_color={skin_color}
        hair_color={hair_color}
      />
    </CharacterCard>
  );
}

export default Character;
