import { connect } from 'react-redux'
import Header from '../components/Header'

const mapsStateToProps = state => ({
    data: state.cartItemReducer
})

export default connect(mapsStateToProps)(Header)