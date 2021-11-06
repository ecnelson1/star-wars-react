import React from 'react';
import PropTypes from 'prop-types';

function CharacterList({characters}){
    return (
      <ul aria-label="character-list">
        {characters.map((character) => (
          <li key={character.name}>
            <h1>{character.namer}</h1>
            <div>{character.gender}</div>
            <div>{character.hair_color}</div>
            <div>{character.height}</div>
            <div>{character.mass}</div>
          </li>
        ))}
      </ul>
    );
}

CharacterList.propTypes = {
  character: PropTypes.arrayOf(
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
