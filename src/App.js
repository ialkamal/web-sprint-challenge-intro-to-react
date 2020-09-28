import React, { useEffect, useState } from "react";
import axios from "axios";
import Character from "./components/Character";

import "./App.css";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const listOfCharacters = [];
  const promises = [];

  useEffect(() => {
    for (let i = 0; i < 15; i++)
      promises.push(
        axios
          .get(`https://swapi.dev/api/people/${i}`)
          .then((response) => {
            listOfCharacters.push(response.data);
          })
          .catch((err) =>
            console.log(console.log("The data was not returned", err))
          )
      );

    Promise.all(promises).then(() => setCharacters(listOfCharacters));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map((character, index) => {
        return (
          <Character
            key={index}
            name={character.name}
            birth_year={character.birth_year}
          />
        );
      })}
    </div>
  );
};

export default App;
