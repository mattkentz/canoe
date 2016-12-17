import React, { Component }  from 'react';
import { connect } from 'react-redux';
import Destination from '../../components/Destination/Destination';
import * as actions from './Destination.actions';

class DestinationComponent extends Component {

  componentWillMount () {
    const destinationId = this.props.routeParams.id || this.props.id;
    if (destinationId) {
      this.destination = this.props.destinations[destinationId]
    }
  }

  addDestinationToTrip(index) {
    this.props.addToTrip(index, this.destination);
  }

  render () {
    return (
      <Destination destination={this.destination} handleTripsClick={this.addDestinationToTrip.bind(this)}></Destination>
    )
  }
}

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

const DestinationContainer = connect(mapStateToProps, mapDispatchToProps)(DestinationComponent);

export default DestinationContainer;
