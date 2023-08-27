import { connect } from 'react-redux'
import Car from '../Components/Car'

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}

export default connect(mapStateToProps)(Car)