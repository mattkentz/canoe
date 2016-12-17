import { connect } from 'react-redux';
import Destinations from '../../components/Destinations/Destinations';

const mapStateToProps = (state, props) => {
    return {
        destinations: state.destinations
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

const DestinationsContainer = connect(mapStateToProps, mapDispatchToProps)(Destinations);

export default DestinationsContainer;
