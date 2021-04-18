import { connect } from 'react-redux'
import Home from '../components/Home'
import { addToCart } from './../services/actions/Action'

const mapsDispatchToProps = dispatch => ({
    addToCardHandler: data => dispatch(addToCart(data))
})

const mapsStateToProps = state => ({
    data: state.cartItemReducer
})

export default connect(mapsStateToProps, mapsDispatchToProps)(Home)