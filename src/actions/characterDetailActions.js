import  { createAction } from 'promise-middleware-redux';
import { getCharacter } from '../services/AvatarApi';

export const [
  fetchCharacter,
  FETCH_CHARACTER,
  FETCH_CHARACTER_LOADING,
] = createAction('FETCH_CHARACTER', getCharacter);
