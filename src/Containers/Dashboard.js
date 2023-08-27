import { connect } from 'react-redux'
import Dashboard from '../Components/Dashboard'


const mapStateToProps = (state) => {
    return {
        user: state.user,
        cars: state.cars
    }
}



export default connect(mapStateToProps)(Dashboard)