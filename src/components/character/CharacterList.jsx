import React from 'react';
import PropTypes from 'prop-types';
import './Characters.css';
function CharacterList({characters}){
    return (
      <ul aria-label="character-list">
        {characters.map((character) => (
          <li  className='li' key={character.name}>
            <h1 className="name">{character.name}</h1>
            <div className="gender">Gender: {character.gender}</div>
            <div className="hair-color">Hair Color: {character.hair_color}</div>
            <div className="height">Height: {character.height}</div>
            <div className="mass">Mass: {character.mass}</div>
          </li>
        ))}
      </ul>
    );
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      hair_color: PropTypes.string.isRequired,
      height: PropTypes.string.isRequired,
      mass: PropTypes.string.isRequired,
    })
  ),
};

export default CharacterList
