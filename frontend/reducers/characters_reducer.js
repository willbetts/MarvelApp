import { RECEIVE_CHARACTERS } from '../actions/character_actions';
import merge from 'lodash/merge';

const CharactersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CHARACTERS:
      return merge({}, action.characters);
    default:
      return oldState;
  }
};

export default CharactersReducer;
