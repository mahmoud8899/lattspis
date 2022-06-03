import {
    createStore,
    combineReducers,
    applyMiddleware
} from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension/"

// set location
import {
    SetLocationResdurees
} from '../Reducres/LocationReducres'


// get all restrange products and butiker products....
import {
    CartInfoReducres,
    CartInfoIdReducres,
    BestRestrantsReducres,
    FreeDeliverReducres,
    ALLcatgoryReducres,
    CartInfoActionResturanReducres,
    UpdatedCartiNFOReducres,
    TheRatingReducres,
    RestaurantIdReducres
} from '../Reducres/HomeReducres'
// category
import {
    CategoryPublicReducres
} from '../Reducres/CategoryReducres'
// product 
import { ProductsPublicReducres } from "../Reducres/ProductsReducres"
// add to card 
import { CardLocalSaveReducres, CartReducres } from "../Reducres/CardReducres"

const reducers = combineReducers({
    // auth 
    HomeLocation: SetLocationResdurees,


    // home page 
    PageHomeRestrange: CartInfoReducres,
    cartInfoid: CartInfoIdReducres,
    pageHomeNewBestRestrant: BestRestrantsReducres,
    pageHomeFreeDelivery: FreeDeliverReducres,
    pageHomeCategory: ALLcatgoryReducres,
    pageUserCartinfo: CartInfoActionResturanReducres,
    updatedCartInfo: UpdatedCartiNFOReducres,
    theRating: TheRatingReducres,
    RestaurantID: RestaurantIdReducres,



    // category...
    PagePublicCategory: CategoryPublicReducres,


    // all products
    PagePublicProducts: ProductsPublicReducres,


    // save cart number...
    // save product cart time...
    Cartnumber: CardLocalSaveReducres,
    cart: CartReducres,

})

const middleware = [thunk]
const store = createStore(
    reducers, composeWithDevTools(applyMiddleware(...middleware))
)

export default store