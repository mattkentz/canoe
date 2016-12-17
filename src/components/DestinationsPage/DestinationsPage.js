import React from 'react';
import { browserHistory } from 'react-router';
import Destinations from '../../containers/Destinations/Destinations';
import DestinationForm from '../../containers/DestinationForm/DestinationForm';
import './DestinationsPage.scss';

const DestinationsPage = ({children}) => {
  function goToDestination(i) {
    browserHistory.push(`/destinations/${i}`)
  }

  function back() {
    window.history.back();
  }

  return (
    <section>
      <header>
        <h1>Destinations</h1>
      </header>
      <section>
        <DestinationForm/>
      </section>
      <Destinations handleClick={goToDestination}/>

      {
        children ?
          (
            <section className="trips__popup" onClick={back}>
              {  React.cloneElement(
                children) }
            </section>
          ) : null
      }
    </section>
  )
}

export default DestinationsPage;