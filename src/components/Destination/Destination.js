import React  from 'react';
import './Destination.scss';
import Trips from '../../containers/Trips/Trips';

const Destination = ({destination, handleTripsClick}) => {
  return (
    <div className="destination">
      <h1>{destination.name}</h1>
      <hr/>
      <h4>Add To Trip:</h4>
      <Trips handleClick={handleTripsClick}></Trips>
    </div>
  )
}

export default Destination;