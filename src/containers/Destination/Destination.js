import { connect } from 'react-redux';
import Destination from '../../components/Destination/Destination';
import * as actions from './Destination.actions';

const mapStateToProps = (state, props) => {
  return {
    destinations: state.destinations
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToTrip: (index, destination) => dispatch(actions.addToTrip(index, destination))
  }
};

const DestinationContainer = connect(mapStateToProps, mapDispatchToProps)(Destination);

export default DestinationContainer;
