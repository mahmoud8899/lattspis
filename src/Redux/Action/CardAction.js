import * as ActionTypes from './Types'
import AsyncStorage from '@react-native-async-storage/async-storage'

// remove all cart
export const RemoveAllCartOne = () => async (dispatch, getStat) => {
    //  testing   console.log('remove action coming data...',id)
    dispatch({
        type: ActionTypes.REMOVE_ALL_CARTITEMS,
    
    })
  return  AsyncStorage.setItem(ActionTypes.SAVE_LOCAL_CH, JSON.stringify(getStat().cart.cartItems))
}


// remove Cart from items... 
export const RemoveCart_Action = (id) => async (dispatch, getStat) => {
    //  testing   console.log('remove action coming data...',id)
    dispatch({
        type: ActionTypes.REMOVE_CART_ITEMS,
        payload: id
    })
    AsyncStorage.setItem(ActionTypes.SAVE_LOCAL_CH, JSON.stringify(getStat().cart.cartItems))
}



// save time and date.
export const Add_timeAction = (data) => async (dispatch) => {

    // console.log('action run', data)

    dispatch({ type: ActionTypes.ADD_SAVE_TIME, payload: data })

    AsyncStorage.setItem('timeBooking', JSON.stringify(data))
}






// add cart save in loacastorage..
// save cart items 
export const AddCart_Action = (data) => async (dispatch, getStat) => {

    const FilterData = {

        cartinfo: data.cartinfo,
        qty: data.qty,
        description: data.description,
        image: data.image,
        name: data.name,
        prices: data.prices,
        product: data._id,
    }

    // console.log('coming',FilterData)

    dispatch({ type: ActionTypes.CART_ADD_ITEMS, payload: FilterData })
    // AsyncStorage.setItem(ActionTypes.SAVE_LOCAL_CH, JSON.stringify(getStat().cart.cartItems))
    //  console.log('save data....>....')

    return


}





// card number info 
// save cart number
export const AddCardNumberSave = (data) => async (dispatch, getState) => {

    dispatch({
        type: ActionTypes.ADD_CARDNUMBER_SAVE,
        payload: data
    })
    AsyncStorage.setItem(ActionTypes.ADD_LOCAT_CARTNUMBER, JSON.stringify(getState().Cartnumber.usercard))

}

// card number info 
// remove cart number
export const RemoveCardNumberAction = () => async (dispatch, getState) => {

    dispatch({
        type: ActionTypes.ADD_CARDNUMBER_REMOVE,
        payload: []
    })
    AsyncStorage.setItem(ActionTypes.ADD_LOCAT_CARTNUMBER, JSON.stringify(getState().Cartnumber.usercard))

}



// add cart  like... 
export const AddLikeCartAction = (id) => async (dispatch, getState) => {


    dispatch({
        type: ActionTypes.ADD_LIKE_CART,
        payload: id
    })


    AsyncStorage.setItem(ActionTypes.ADD_LINK, JSON.stringify(getState().like.likeCart))

}

// test add like card 
export const SaveLike = (data)=> (dispatch)=> {
    dispatch({
        type: ActionTypes.ADD_CALLBACK_NOT_FILTER,
        payload: data
    })

}

// remove like cart.. 
export const removeLikeAction = (id) => (dispatch, getState) => {

    dispatch({ type: ActionTypes.ADD_LIKE_REMOVE, payload: id })

    AsyncStorage.setItem(ActionTypes.ADD_LINK, JSON.stringify(getState().like.likeCart))
}


