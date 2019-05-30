export const getCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch your characters';

      return json;
    })
    .then(json => json.map(character => ({
      id: character.id,
      name: character.name,
      img: character.photoUrl
    })));
};

export const getCharacter = id => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`)
    .then(json => ({
      id: json._id,
      name: json.name,
      image: json.photoUrl,
      affiliation: json.affiliation
    }));
};
