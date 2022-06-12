import React, { useEffect, useState, Fragment, useContext } from 'react'
import { View, Image, Text, TextInput } from 'react-native'
import FontsDefault from '../../Assistant/FontDefault'
import Styles from '../RestaurantScreen/Styles'
import SearchInput from '../../Components/SearchInput/SearchInput'
import { dummyStartersData, dummySushiData, } from '../../Assistant/DummyStartersData'
// item order..
import OneProduct from '../../Components/OneProduct/OneProduct'
import ButtonScreen from '../../Components/ButtonScreen/ButtonScreen'
import { OtherFlatList } from '../../Components/FlatlList/FlatList'
import ItemProducts from '../../Components/FlatlList/ItmeProducts'
import CategoryList from './CategoryList'
import HeaderProduct from './HeaderProduct'
import NavBarProduct from './NavBarProduct'
import { ScrollView } from 'react-native-virtualized-view';
import OptionsMenu from '../../Components/OptionsMenu/OptionsMenu'
import { ResturantIDAction } from '../../Redux/Action/HomeAction'
import { useDispatch, useSelector } from 'react-redux'
import LoadingError from '../../Components/LoadingError/LoadingError'
import { TheImageCheck } from '../../Assistant/ImageUrl'
import RestaurantDetails from './RestaurantDetails'
import { getCategoryAction } from '../../Redux/Action/CategoryAction'
import { PorudtsActionPaganationPublic } from '../../Redux/Action/ProductsAction'
import LazyLoading from '../../Components/LazyLoading/LazyLoading'
import YourOrders from '../../Components/YourOrders/YourOrders'

// set restaurant id 
import { FilterCartDetials } from '../../Components/OneProduct/FilterCardItem'
import ButtonViewOrder from './ButtonViewOrder'

export default function ProductScreen(props) {
    const { navigation, route } = props



    const { setSetRestaurantId, filterCartProduct } = useContext(FilterCartDetials)

    // resturant params id..... 
    const TheResturantName = route?.params?.item
    const dispatch = useDispatch()


    // this is option show all restaurst datilas.
    const RestaurantID = useSelector((state) => state.RestaurantID)
    const { loading, error, restaurant } = RestaurantID

    // get all category to restrange.
    // get all category to restraurn
    const CategoryPublic = useSelector((state) => state?.PagePublicCategory?.category[restaurant?._id]) || []

    // category loading and error // event sometheig error 
    // testing okey....
    const CategoryPublicError = useSelector((state) => state?.PagePublicCategory)
    const { error: errorCategoryPublicError, loading: loadingCategoryPublicError } = CategoryPublicError


    // open product card .... 
    const [oppenProductCard, setOppenProductCard] = useState({ value: false, object: '' })
    // change background navbar when scroll dwon...
    const [styleBackgroundScroll, setStyleBackgroundScroll] = useState(false)
    // show icon searching 
    const [ShowIconSearch, setShowIconSearch] = useState(false)
    // list category with scroll down.
    const [showCategory, setShowCategory] = useState(false)
    // option oppen user list delivery
    const [userList, setUserList] = useState(false)

    // oppen restaurant datilas
    const [oppenRestaurantDatilas, setOppenRestaurantDatilas] = useState(false)
    // send requrest to category och run
    const [categoryRun, setcategoryRun] = useState(false)

    // oppen card items show how many has orders
    const [oppenYourOrder, setOppenYourOrder] = useState(false)


    // this is bottom callback
    const OnClickButton = () => {
        return navigation.goBack()
    }




    // restaurant datilas
    const handleNavigate = () => {
        setOppenRestaurantDatilas(true)
    }





    // scroll hidden nav bar and searching... show catgory list...
    const handleScroll = event => {
        //  console.log('ddddd scroll', event.nativeEvent.contentOffset.y)
        const positionY = event.nativeEvent.contentOffset.y

        if (positionY > Number(339.6666666666667)) {
            setStyleBackgroundScroll(true)
            setShowIconSearch(true)
        } else {
            setStyleBackgroundScroll(false)
            setShowIconSearch(false)
        }

        if (positionY > Number(806.3333333333334)) {
            setShowCategory(true)
        } else {
            setShowCategory(false)
        }
    }




    // fatch restaurant id
    // get 
    useEffect(() => {
        if (TheResturantName) {

            dispatch(ResturantIDAction(TheResturantName))
            setcategoryRun(true)
        }

    }, [TheResturantName])



    // get all category.....
    // get cart id to cart order
    // testing and loading this is okej 
    useEffect(() => {

        if (categoryRun) {
            if (typeof restaurant?._id === 'string' || typeof restaurant?._id !== 'undefined') {
                CategoryPublic?.length === 0 && dispatch(getCategoryAction(restaurant?._id))
                return setSetRestaurantId(restaurant?._id)

            }
        }



        return () => {
            setSetRestaurantId('')
        }


        // eslint-disable-next-line
    }, [restaurant?._id, dispatch, categoryRun, setSetRestaurantId,])





    //pagination products...
    // next page and event error and loading
    const matProducts = useSelector((state) => state?.PagePublicProducts?.allProducts[restaurant?._id]) || []
    const NumberPages = useSelector((state) => state?.PagePublicProducts?.productNextNumber[restaurant?._id]) || null
    const ProductList = useSelector((state) => state?.PagePublicProducts)
    const { error: errorproduct } = ProductList

    // get all products .....
    // testing loading and error
    useEffect(() => {
        if (CategoryPublic?.length > 0) {
            console.log('run')
            matProducts?.length === 0 && dispatch(PorudtsActionPaganationPublic(restaurant?._id))
        }

    }, [
        matProducts?.length,
        restaurant?._id,
        dispatch,
        CategoryPublic?.length
    ])


    // options  code .... 
    // [1] - LoadingError check out loading and error befor comming data..
    // [2] - HeaderProduct  has name resturant and time fish food and show icons and callbak Home.
    // [00] - YourOrders view orders has user....
    // [3] - CategoryList this is category list to resturant products..
    // [4] - NavBarProduct rating resturant and oppen resturant datilas and delivery menu
    // [5] - ItemProducts   this is item products... to resturant
    // [6] - ItemDetails  show product datilas and add card
    // [7] - OptionsMeun  user list add adderss and time for order..
    // [8] - RestaurantDetails  restaurant datilas...
    // [9] - ButtonViewOrder  this is button view orders....






    return <LoadingError loading={loading} error={error}>
        {oppenRestaurantDatilas ?
            <RestaurantDetails
                setOppenRestaurantDatilas={setOppenRestaurantDatilas}
                data={restaurant}
            />
            : oppenYourOrder ?

                <YourOrders
                    oppenYourOrder={oppenYourOrder}
                    setOppenYourOrder={setOppenYourOrder}
                    filterCartProduct={filterCartProduct}
                />
                :

                <Fragment>
                    <View style={[Styles.containerLeftButton, styleBackgroundScroll && Styles.styleBackgroundForScroll]}>
                        <HeaderProduct
                            ShowIconSearch={ShowIconSearch}
                            OnClickButton={OnClickButton}
                            data={restaurant}
                            styleBackgroundScroll={styleBackgroundScroll}
                        // onClick={onClick}
                        />

                        {showCategory && (
                            <CategoryList data={CategoryPublic} />
                        )}
                    </View>




                    <ScrollView
                        style={Styles.containerScrollView}
                        onScroll={handleScroll}
                    >



                        <View style={[FontsDefault.containerImageChildren]}   >
                            <LazyLoading
                                image={TheImageCheck(restaurant?.image)}
                                style={Styles.styleImage}
                            />
                        </View>




                        <View style={{ padding: 10 }}>

                            <NavBarProduct
                                item={dummySushiData}
                                handleNavigate={handleNavigate}
                                setUserList={setUserList}
                                data={restaurant}

                            />









                            <CategoryList data={CategoryPublic} />

                            {CategoryPublic?.length >= 1 &&
                                <ItemProducts
                                    setOppenProductCard={setOppenProductCard}
                                    Restaurant_id={restaurant?._id}
                                    matProducts={matProducts}
                                    NumberPages={NumberPages}
                                />
                            }






                        </View>






                    </ScrollView>


                    <ButtonViewOrder
                        setOppenYourOrder={setOppenYourOrder}

                    />

                    {
                        oppenProductCard?.value ? <OneProduct

                            oppenProductCard={oppenProductCard}
                            setOppenProductCard={setOppenProductCard}

                        />
                            : null
                    }

                    {
                        userList && <OptionsMenu
                            userList={userList}
                            setUserList={setUserList}
                        />
                    }
                </Fragment>
        }







    </LoadingError>

}




