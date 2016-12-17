import React  from 'react';
import './Trip.scss';
import Destinations from '../../components/Destinations/Destinations';

const Trip = ({trip}) => {
  return (
    <section>
      <h1>{trip.name}</h1>
      <hr/>
      <h4>Destinations</h4>
      <Destinations destinations={trip.destinations}></Destinations>
    </section>
  )
};

export default Trip;