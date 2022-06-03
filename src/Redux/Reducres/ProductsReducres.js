import * as ActionTypes from '../Action/Types'







// to restaurant -Public
// show post .
export const ShowPostIDReducres = (state = {
    productId: [],
    review: []
}, action) => {
    switch (action.type) {

        case ActionTypes.ADD_PRODUCT_ID_LOADING: return {
            loading: true
        }
        case ActionTypes.ADD_PRODUCT_ID_SUCCESS: return {
            ...state,

            productId: action.payload,
            loading: false,
        }

        case ActionTypes.ADD_REVIEW_SUCCESS: return {
            ...state,
            review: action.payload,
            loading: false,
        }


        case ActionTypes.ADD_PRODUCT_ID_FAIL: return {
            ...state,
            error: action.payload,
            loading: false,
        }

        default: return state
    }
}





// /ADD_PRODUCTS_PUBLIC_DATA

// to restaurant -Public
// all products...
// all products... 
export const ProductsPublicReducres = (state = {
    loading : false,
    allProducts: {},
    productNextNumber: {},
    error: null
}, action) => {

    switch (action.type) {



        case ActionTypes.ADD_PRODUCTS_PUBLIC_LOADING :
        return {
            ...state,
            loading : true,
        }
        case ActionTypes.ADD_PRODUCTS_PUBLIC_DATA:
            const categoryId = action.payload.categoryId
            return {
            
                ...state,
                allProducts: {
                    ...state.allProducts,
                    [categoryId]: (state.allProducts[categoryId] || []).concat(action.payload.data)
                },
                loading : false,

            }


        case ActionTypes.ADD_PRODUCTS_PUBLIC_NUMBER:

        // console.log('action types :reducres...', action.payload)
            return {

                ...state,
                productNextNumber: {
                    ...state.productNextNumber,
                    [action.payload.categoryId]: action.payload.nextpage,
                },
                loading : false,
            }
        case ActionTypes.ADD_PRODUCTS_PUBLIC_FAIL:
            return {
                ...state,
                error: action.payload,
                loading : false,
            }

        default: return state
    }
}







