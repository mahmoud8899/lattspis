import * as ActionTypes from './Types'
import axios from 'axios'
import Url from '../../Assistant/Url'



// comment review 
// POST  url  very / /product/product/comment/:id/
export const ReviewCommentUserAction = (user) => async (dispatch, getState) => {


    // console.log(user._id)
    try {


        const { userLogin: { token } } = getState()
        // console.log(token)
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const { data } = await axios.post(`/api/product/product/comment/${user._id}`, user, config)

        dispatch({ type: ActionTypes.ADD_REVIEW_SUCCESS, payload: data.message })
        dispatch(product_IDAction(user._id))
    } catch (error) {
        dispatch({
            type: ActionTypes.ADD_PRODUCT_ID_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}

// product id 
// GET // URL :  product/product/id
export const product_IDAction = (id) => async (dispatch) => {

    try {

        dispatch({ type: ActionTypes.ADD_PRODUCT_ID_LOADING })

        const { data } = await axios.get(`/api/product/product/details/${id}`)
        dispatch({ type: ActionTypes.ADD_PRODUCT_ID_SUCCESS, payload: data })
        // OtherParams && dispatch(AppendChangeData(data))
    } catch (error) {
        dispatch({
            type: ActionTypes.ADD_PRODUCT_ID_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}


// count next pages...
export const AppendNumberCategoryProduct = (nextpage) => ({
    type: ActionTypes.ADD_NUMBERNEXTPAGE_SUCCESS,
    payload: nextpage
})

// get products... 
export const productpaginationAction = (user) => async (dispatch, getState) => {
    const calculatedPage = getState()?.PaginationProducts?.categoryProductsNextPagesxp
    const nextRequestPage = calculatedPage === undefined ? 1 : calculatedPage
    if (nextRequestPage) {
        try {

            // dispatch({type : ActionTypes.ADD_PAGINATION_PRODUCT_LOADING})
            const { data } = await axios.get(`${Url}product/cartinfo/${user}?pageNumber=${nextRequestPage}`)
            dispatch(AppendProductAndCategory(data.product))
            if (data?.pages <= 1) return dispatch(AppendNumberCategoryProduct(null))
            const nextpage = data?.result?.next?.page > data?.pages ? null : data?.result?.next?.page
            dispatch(AppendNumberCategoryProduct(nextpage))
            return
        } catch (error) {
            dispatch({
                type: ActionTypes.ADD_PAGINATION_PRODUCT_FAIL,
                payload: error.response &&
                    error.response.data.error ?
                    error.response.data.error :
                    error.message
            })
        }

    }

}
// End Product Pagination  //.................................................................>






// to restaurant -Public
// pagnation products...
// append.... 
export const AppendProductsWithUserId = (categoryId, data) => ({
    type: ActionTypes.ADD_PRODUCTS_PUBLIC_DATA,
    payload: { categoryId, data }
})

// count next pages...
export const AppenNumberNextPages = (categoryId, nextpage) => ({
    type: ActionTypes.ADD_PRODUCTS_PUBLIC_NUMBER,
    payload: { categoryId, nextpage }
})

export const PorudtsActionPaganationPublic = (user) => async (dispatch, getState) => {

    const calculatedPage = getState()?.PagePublicProducts?.productNextNumber[user]
    const nextRequestPage = calculatedPage === undefined ? 1 : calculatedPage

    // console.log('nextRequestPage',nextRequestPage)

    if (nextRequestPage) {

        try {
            console.log('one.............')
            const { data } = await axios.get(`${Url}product/cartinfo/${user}?pageNumber=${nextRequestPage}`)
            dispatch(AppendProductsWithUserId(user, data.product))
            if (data?.pages <= 1) return dispatch(AppenNumberNextPages(user, null))
            const nextpage = data?.result?.next?.page > data?.pages ? null : data?.result?.next?.page

            dispatch(AppenNumberNextPages(user, nextpage))
            return

        } catch (error) {

            dispatch({
                type: ActionTypes.ADD_PRODUCTS_PUBLIC_FAIL,
                payload: error.response &&
                    error.response.data.error ?
                    error.response.data.error :
                    error.message
            })
        }

    }

}












