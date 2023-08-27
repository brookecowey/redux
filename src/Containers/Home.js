import { connect } from 'react-redux'
import Home from '../Components/Home'

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}

export default connect(mapStateToProps)(Home)