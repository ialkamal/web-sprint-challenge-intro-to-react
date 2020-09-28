import React from "react";
import styled from "styled-components";

const CharacterCard = styled.div`
  background: #99f3eb;
  color: black;
  width: 350px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
`;

// Write your Character component here
function Character({ name, birth_year }) {
  return (
    <CharacterCard>
      <h2>{`${name} ${birth_year}`}</h2>
    </CharacterCard>
  );
}

export default Character;
