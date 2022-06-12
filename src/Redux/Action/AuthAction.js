import * as ActionTypes from './Types'
import axios from 'axios'
import Url from '../../Assistant/Url'
import AsyncStorage from '@react-native-async-storage/async-storage'




// set Token ====>
export const setToken = token => ({
    type: ActionTypes.SET_TOKEN,
    payload: { token }
})
// set user
export const setUser = user => ({
    type: ActionTypes.SET_USER,
    payload: { user }
})













// user check in email for create new user info or login
export const TheEmailCheck = (email) => async (dispatch) => {


    // testing... console.log(email)

    try {
        const { data } = await axios.post(`${Url}user/checkuser/`, email)
        dispatch({
            type: ActionTypes.ADD_USER_CHECKIN, payload: data.message
        })
    } catch (error) {

        dispatch({
            type: ActionTypes.ADD_USER_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })

    }
}







// forget password//
// POST // url : api/user/forgetpassword/
export const ForgetPasswordAction = (user) => async (dispatch) => {

    try {
        const { data } = await axios.put(`${Url}user/forgetpassword/`, user)
        dispatch({
            type: ActionTypes.ADD_FORGET_PASSWORD_SUCCESS, payload: data.message
        })
    } catch (error) {

        dispatch({
            type: ActionTypes.ADD_USER_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })

    }

}



// change password  POST 
// URL : http://localhost:8000/api/user/change/:id
export const ChangePasswordForgetAction = (user) => async (dispatch) => {

    // console.log(id,password)
    try {


        const { data } = await axios.post(`/api/user/change/${user._id}`, user)
        dispatch({
            type: ActionTypes.ADD_CHANGEPASSWORD_FORGET_SUCCESS, payload: data.message
        })
    } catch (error) {

        dispatch({
            type: ActionTypes.ADD_USER_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })

    }

}










//  Add Address 
// Put 
export const AddAdressUserAction = (user) => async (dispatch, getState) => {

    try {


        const { userLogin: { token }, } = getState()


        await axios.put(`/api/user/update/user/`, user, {

            headers: {
                Authorization: `Bearer ${token}`,
            }

        })
        dispatch(GetUserInfoAction(token))

    } catch (error) {

        const message = error.response &&
            error.response.data.message ?
            error.response.data.message :
            error.message

        if (message === 'token failed') {

            dispatch(Action_logout())

        }
        dispatch({
            type: ActionTypes.ADD_USER_FAIL,
            payload: message

        })

    }

}










// change user email and username ... 
// api/user/update/username
export const ChangeUserInfo = (user) => async (dispatch, getState) => {

    try {


        const { userLogin: { token }, } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }

        await axios.put(`/api/user/update/username/`, user, config)
        dispatch(GetUserInfoAction(token))

    } catch (error) {

        const message = error.response &&
            error.response.data.message ?
            error.response.data.message :
            error.message

        if (message === 'token failed') {

            dispatch(Action_logout())

        }
        dispatch({
            type: ActionTypes.ADD_USER_FAIL,
            payload: message

        })
    }


}



// add telefon number
// PUT URL : // /api/user/telefonnumber/
export const AddTelefonNumber = (user) => async (dispatch, getState) => {

    try {


        dispatch({ type: ActionTypes.ADDTELEFONUMBER_LOADING })

        const { userLogin: { token }, } = getState()


        const { data } = await axios.put(`/api/user/telefonnumber/`,
            user, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        dispatch(GetUserInfoAction(token))
        dispatch({ type: ActionTypes.ADDTELEFONUMBER, payload: data.message })

    } catch (error) {

        const message = error.response &&
            error.response.data.message ?
            error.response.data.message :
            error.message

        if (message === 'token failed') {

            dispatch(Action_logout())

        }
        dispatch({
            type: ActionTypes.ADDTELEFONUMBER_FAIL,
            payload: message

        })

    }


}





// create user ....
// POST // url /user/create/
export const singUp_action = (user) => async (dispatch) => {
    try {
        dispatch({ type: ActionTypes.ADD_USER_LOADING })

        const { data } = await axios.post(`${Url}user/create/`, user)

        // console.log('data',data)
        dispatch(setToken(data.token))
        dispatch(setUser(data.data))
        axios.defaults.headers.Authorization = 'Bearer ' + data.token
        AsyncStorage.setItem(ActionTypes.KEY_USER, JSON.stringify(data.data))
        AsyncStorage.setItem(ActionTypes.KEY_TOKEN, data.token)


    } catch (error) {

        dispatch({
            type: ActionTypes.ADD_USER_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })

    }
}



// logo ut.. 
export const Action_logout = () => (dispatch) => {
    
     // remove user info
  
     AsyncStorage.removeItem(ActionTypes.KEY_USER)
     AsyncStorage.removeItem(ActionTypes.KEY_TOKEN)
     dispatch({ type: ActionTypes.ADD_USER_RESET })

}








// user Login .... 
// POST // url :  /api/user/login/
export const user_Login = (user) => async (dispatch) => {
    try {
        dispatch({ type: ActionTypes.ADD_USER_LOADING })

        const { data } = await axios.post(`${Url}user/login/`, user)

        dispatch(setToken(data.token))
        dispatch(setUser(data.data))
        axios.defaults.headers.Authorization = 'Bearer ' + data.token
        AsyncStorage.setItem(ActionTypes.KEY_USER, JSON.stringify(data.data))
        AsyncStorage.setItem(ActionTypes.KEY_TOKEN, data.token)


    } catch (error) {
        dispatch({
            type: ActionTypes.ADD_USER_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}





// Get user Info .... 
// GET // URL  /api/user/user/
export const GetUserInfoAction = (token) => async (dispatch) => {
    try {

    //    console.log('action token',token)
        const { data } = await axios.get(`${Url}user/user/`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })

        // console.log('sussfully', data)

        dispatch(setUser(data))
        dispatch(setToken(token))

    } catch (error) {

        const message = error.response &&
            error.response.data.message ?
            error.response.data.message :
            error.message

            // console.log('error', message)
        if (message === 'Not authorized' || message === 'token failed') {

            return dispatch(Action_logout())
        }

        dispatch({
            type: ActionTypes.ADD_USER_FAIL,
            payload: message
        })
    }
}




// google login 
// POST // /api/user/singup/googl/
export const LoginGoogle = (user) => async (dispatch) => {
    try {
        dispatch({ type: ActionTypes.ADD_USER_LOADING })

        const { data } = await axios.post(`/api/user/singup/googl/`, user)
        // console.log(data)
        dispatch(setToken(data.token))
        dispatch(setUser(data.data))
        axios.defaults.headers.Authorization = 'Bearer ' + data.token
        localStorage.setItem(ActionTypes.KEY_USER, JSON.stringify(data.data))
        localStorage.setItem(ActionTypes.KEY_TOKEN, data.token)


    } catch (error) {
        dispatch({
            type: ActionTypes.ADD_USER_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}






// add acount bank
// PUT : URL : // /api/user/addcount/user/
export const AddAcountBAction = (user, token) => async (dispatch) => {

    try {


        const { data } = await axios.put(`/api/user/addcount/user/`, user, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        dispatch({ type: ActionTypes.ADD_ACOUNT_USER_SUCCESS, payload: data.message })
        dispatch(GetUserInfoAction(token))

    } catch (error) {

        dispatch({
            type: ActionTypes.ADD_USER_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })


        // const message = error.response &&
        //     error.response.data.message ?
        //     error.response.data.message :
        //     error.message

        // if (message === 'token failed') {

        //     dispatch(Action_logout())

        // }
        // dispatch({
        //     type: ActionTypes.ADD_USER_FAIL,
        //     payload: message

        // })

    }

}





/// add address 
// add cart save in loacastorage..
// save cart items 
export const AddAddressAction = (data) => async (dispatch, getStat) => {


    dispatch({ type: ActionTypes.ADD_ADDRESS_LOADING })



    const UpdateData = {
        address: data?.address ,
        doornumber: data?.doornumber,
        city: data?.city,
        zipcode: data?.zipcode,
        location: data?.location,
        work: data?.work,
        firstAddress: true,


    }

    dispatch({ type: ActionTypes.ADD_ADDRESS_LOCAL_SUCCESSFULLY, payload: UpdateData })
    localStorage.setItem(ActionTypes.ADD_ADDRESS_ADDRESS, JSON.stringify(getStat().locateAddress.myAddressLocal))


    return


}


// remove Addresss 
// remove all address
export const RemoveAddressAction = () => async (dispatch, getStat) => {
    dispatch({ type: ActionTypes.ADD_ADDRESS_LOADING })
    dispatch({ type: ActionTypes.REMOVE_ALL_ADDRESS })
    return localStorage.setItem(ActionTypes.ADD_ADDRESS_ADDRESS, JSON.stringify(getStat().locateAddress.myAddressLocal))
}

// remove Cart from items... 
export const RemoveOneAddress = (id) => async (dispatch, getStat) => {
    dispatch({ type: ActionTypes.ADD_ADDRESS_LOADING })
    // console.log('action',id)
    dispatch({
        type: ActionTypes.REMOVE_ONE_ADDRESS,
        payload: id
    })
    localStorage.setItem(ActionTypes.ADD_ADDRESS_ADDRESS, JSON.stringify(getStat().locateAddress.myAddressLocal))
}