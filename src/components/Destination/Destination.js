import React, { Component }  from 'react';
import './Destination.scss';
import Trips from '../../containers/Trips/Trips';


class Destination extends Component {

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
    const destination = this.destination;

    return (
      <div className="destination">
        <h1>{destination.name}</h1>
        <hr/>
        <h4>Add To Trip:</h4>
        <Trips handleClick={this.addDestinationToTrip.bind(this)}></Trips>
      </div>
    )
  }
}

export default Destination;