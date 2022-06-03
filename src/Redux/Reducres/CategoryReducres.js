import * as ActionTypes from '../Action/Types'


const statsMaps = {
    loading: false,
    nexCategory: {},
    category: {},
    error: null
}
// to restaurant -Public
export const CategoryPublicReducres = (state = statsMaps, action) => {
    switch (action.type) {


        case ActionTypes.ADD_PUBLIC_CATEGORY_LOADING:
            return {
                ...state,
                loading: true,
            }
        case ActionTypes.ADD_PUBLIC_CATEGORY_NUMBER:



            return {

                ...state,
                nexCategory: {
                    ...state.nexCategory,
                    [action.payload.nextpage]: action.payload.nextpage,
                },
                loading: false
            }

        case ActionTypes.ADD_PUBLIC_CATEGORY_SUCCESS:
            const categoryId = action.payload.categoryId
            return {

                ...state,
                category: {
                    ...state.category,
                    [categoryId]: (state.category[categoryId] || []).concat(action.payload.data)
                },
                loading: false,

            }

        case ActionTypes.ADD_PUBLIC_CATEGORY_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };

        default: return state
    }
}

