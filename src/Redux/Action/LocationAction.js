import * as Types from './Types'
import AsyncStorage from '@react-native-async-storage/async-storage'



// set location ...
export const SetLocationAction = (data, error) => (dispatch) => {


    // console.log('coming',data)
    if (error) {

        return dispatch({
            type: Types.SET_LOCATION_FAIL,
            payload: 'sitting.'

        })
    }

     dispatch({
        type: Types.SET_LOCATION,
        payload: data

    })

    return AsyncStorage.setItem(Types.ASYNC_LOCATION_SAVE, JSON.stringify(data))


}