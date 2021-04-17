import * as Const from '../constants'

const initialState = {
    cardData: []
}

export default function reducerItem(state= initialState, actions){
    switch (actions.type) {
        case Const.ADD_TO_CART:
            return {
                ...state,
                cardData: actions.data
            }
            
            break;
    
        default:
            return state
            break;
    }
}