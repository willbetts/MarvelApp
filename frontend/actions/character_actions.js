import * as APIUtil from '../util/character_api_util'

export const RECEIVE_CHARACTERS = "RECEIVE_CHARACTERS";

export const receiveCharacters = characters => ({
  type: RECEIVE_CHARACTERS,
  characters
});

export const fetchCharacters = (location) => dispatch => (
  APIUtil.fetchCharacters(location)
  .then(characters => { dispatch(receiveCharacters(characters))})
);
