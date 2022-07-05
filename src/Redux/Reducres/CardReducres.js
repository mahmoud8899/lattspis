import * as ActionTypes from '../Action/Types'

// itemscard..
export const CartReducres = (state = { cartItems: [], timeBooking: [] }, action) => {
    switch (action.type) {

        case ActionTypes.CART_ADD_ITEMS:



            const item = action.payload

            const checkItems = state?.cartItems?.find((x) => x?.product === item?.product)
            if (checkItems) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) => x.product === checkItems.product ? item : x)
                }

            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

        case ActionTypes.REMOVE_CART_ITEMS:
            //    testing console.log('remove',action.payload)
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x.product !== action.payload)
            }


        case ActionTypes.REMOVE_ALL_CARTITEMS:
            return {
                ...state,
                cartItems: []

            }

        case ActionTypes.ADD_SAVE_TIME:
            return {
                ...state,
                timeBooking: action.payload
            }






        default: return state
    }
}







export const CardLocalSaveReducres = (state = {
    usercard: []
}, action) => {
    switch (action.type) {

        case ActionTypes.ADD_CARDNUMBER_SAVE: return {
            ...state,
            usercard: action.payload
        }
        case ActionTypes.ADD_CARDNUMBER_REMOVE: return {
            ...state,
            usercard: []
        }


        default: return state
    }
}


// add like card
export const addLikeReducres = (state = { likeCart: [] }, action) => {


    switch (action.type) {

        case ActionTypes.ADD_LIKE_CART:

            const likeUser = action.payload

            const checkLike = state.likeCart.find((x) => x._id === likeUser._id)

            if (checkLike) {

                return {
                    ...state,
                    likeCart: state.likeCart.map((x) => x._id === checkLike._id ? likeUser : x)
                }
            } else {

                return {
                    ...state,
                    likeCart: [...state.likeCart, likeUser]
                }
            }


        case ActionTypes.ADD_CALLBACK_NOT_FILTER:
            return {
                likeCart: action.payload
            }


        case ActionTypes.ADD_LIKE_REMOVE:
            return {
                ...state,
                likeCart: state.likeCart.filter((x) => x._id !== action.payload)
            }



        default: return state
    }
}