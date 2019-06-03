import {
  fetchCharacters,
  FETCH_CHARACTERS_LOADING,
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_ERROR
} from '../actions/characterActions';

jest.mock('../services/AvatarApi.js', () => ({
  getCharacters: () => Promise.resolve([])
}));
describe('characters actions', () => {
  it('dispatches fetch and load characters actions', () => {
    expect(fetchCharacters()).toEqual({
      type: FETCH_CHARACTERS,
      pendingType: FETCH_CHARACTERS_LOADING,
      rejectedType: FETCH_CHARACTERS_ERROR,
      payload: expect.any(Promise)
    });
  });
});
