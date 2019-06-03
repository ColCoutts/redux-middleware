export const getCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch your characters';

      return json;
    })
    .then(json => json.map(character => ({
      id: character._id,
      name: character.name,
      img: character.photoUrl
    })));
};

export const getCharacter = id => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch your characters';
      console.log(json);
      return json;
    })
    .then(json => ({
      id: json._id,
      pokemon: json.pokemon,
      img: json.photoUrl,
      affiliation: json.affiliation
    }));
};
