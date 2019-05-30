import React from 'react';
import PropTypes from 'prop-types';

function CharacterDetail({ character }) {
  const {
    name,
    image,
    affiliation
  } = character;

  return (
    <section>
      <h2>{name}</h2>
      <img src={image} />
      <p>{affiliation}</p>
    </section>
  );
}

CharacterDetail.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    affiliation: PropTypes.string.isRequired
  }).isRequired
};

export default CharacterDetail;
