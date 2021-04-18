import * as Const from '../constants'

const initialState = {
    cardData: []
}

export default function cartItem(state= [], action){
    switch (action.type) {
        case Const.ADD_TO_CART:
            console.log('Reducer: ', action)
            return [ 
                ...state,
               { cardData: action.data}
            ]
            
            break;
    
        default:
            return state
            break;
    }
}