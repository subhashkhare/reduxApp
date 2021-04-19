import { connect } from 'react-redux'
import Home from '../components/Home'
import { addToCart, removeFromCart } from './../services/actions/Action'

const mapsDispatchToProps = dispatch => ({
    addToCardHandler: data => dispatch(addToCart(data)),
    removeItemHandler: data => dispatch(removeFromCart(data))
})

const mapsStateToProps = state => ({
    data: state.cartItemReducer
})

export default connect(mapsStateToProps, mapsDispatchToProps)(Home)