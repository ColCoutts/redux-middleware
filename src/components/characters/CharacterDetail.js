import React from 'react';
import PropTypes from 'prop-types';

function CharacterDetail({ character }) {
  const {
    name,
    img,
    affiliation
  } = character;

  return (
    <section>
      <h2>{name}</h2>
      <img src={img} />
      <p>{affiliation}</p>
    </section>
  );
}

CharacterDetail.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    affiliation: PropTypes.string.isRequired
  }).isRequired
};

export default CharacterDetail;
