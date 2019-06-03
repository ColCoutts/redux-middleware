import {
  fetchCharacters,
  FETCH_CHARACTERS_LOADING,
  FETCH_CHARACTERS
} from '../actions/characterActions';

jest.mock('../services/AvatarApi.js', () => ({
  getCharacters: () => Promise.resolve([])
}));

describe('characters actions', () => {
  it('dispatches fetch and load characters actions', () => {
    const thunk = fetchCharacters();
    const dispatch = jest.fn();

    return thunk(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_CHARACTERS_LOADING
        });

        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_CHARACTERS,
          payload: []
        });
      });
  });
});
