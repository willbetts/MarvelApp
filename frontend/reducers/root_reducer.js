import {combineReducers} from 'redux';
import CharactersReducer from './characters_reducer';


const RootReducer = combineReducers({
  characters: CharactersReducer
});

export default RootReducer;
