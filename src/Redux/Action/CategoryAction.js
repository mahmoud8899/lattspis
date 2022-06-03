import * as ActionTypes from './Types'
import axios from 'axios'
import Url from '../../Assistant/Url'






// to restaurant -Public
// pagnation products...
// append.... 
export const AppendProductsWithUserId = (categoryId, data) => ({
    type: ActionTypes.ADD_PUBLIC_CATEGORY_SUCCESS,
    payload: { categoryId, data }
})

// count next pages...
export const AppenNumberNextPages = (nextpage) => ({
    type: ActionTypes.ADD_PUBLIC_CATEGORY_NUMBER,
    payload: { nextpage }
})

// to restaurant -Public
// All category 
// GET // URL : /api/category/restrange/list/:id cart info to restrange....../
export const getCategoryAction = (id) => async (dispatch, getState) => {


   
    const calculatedPage = getState()?.PagePublicCategory?.nexCategory[id]
    const listNext = calculatedPage === undefined ? id : calculatedPage

//  console.log(listNext)

    if (listNext) {
        try {

            dispatch({type :ActionTypes.ADD_PUBLIC_CATEGORY_LOADING})
            
            const { data } = await axios.get(`${Url}category/restrange/list/${listNext}/`)
            dispatch(AppendProductsWithUserId(id, data))
            dispatch(AppenNumberNextPages(id))

        } catch (error) {
            dispatch({
                type: ActionTypes.ADD_PUBLIC_CATEGORY_FAIL,
                payload: error.response &&
                    error.response.data.message ?
                    error.response.data.message :
                    error.message
            })
        }
    }




}
















