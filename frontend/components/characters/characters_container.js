import { connect } from 'react-redux';
import Characters from './characters';
import { fetchCharacters } from '../../actions/character_actions';

const mapStateToProps = (state, ownProps) => {
  let characters = Object.keys(state.characters).map((id) => state.characters[id]) || [];
  return {
    characters
  }};

const mapDispatchToProps = (dispatch) => ({
  fetchCharacters: (location) => dispatch(fetchCharacters(location))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Characters);
