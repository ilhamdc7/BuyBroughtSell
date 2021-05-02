import {data} from '../../data'




const INITIAL_STATE = {
    product: data,
    basket: {}
}



export function basketReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case "ADD_BASKET":
            let basket = state.basket
            console.log(basket)
            if (basket[action.payload.id]){
                basket[action.payload.id].qty +=1
            }else{
                basket[action.payload.id] = action.payload
                basket[action.payload.id].qty = 1}
            return {...state, basket}

            default:
                return state
        case "DELETE_BASKET":
            let newElements = state.basket;
            delete newElements[action.payload.id]
            return {...state, basket: newElements}
    }

}

