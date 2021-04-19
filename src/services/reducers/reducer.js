import * as Const from '../constants'

const initialState = {
    cardData: []
}

export default function cartItem(state= [], action){
    switch (action.type) {
        case Const.ADD_TO_CART:
            return [ 
                ...state,
               { cardData: action.data}
            ]
            
            break;

        case Const.REMOVE_FROM_CART:
            state.pop()
            return [ 
                ...state
            ]
            
            break;
    
        default:
            return state
            break;
    }
}