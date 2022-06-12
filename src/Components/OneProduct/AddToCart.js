import Styles from './Styles'
import React, { useContext, useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FontsDefault from '../../Assistant/FontDefault'
import { FilterCartDetials } from './FilterCardItem'
import { AddCart_Action, RemoveCart_Action } from '../../Redux/Action/CardAction'
import { useDispatch } from 'react-redux'
import { CollectNumber } from '../../Assistant/Total'

export default function AddToCart(props) {
    const {
        productId,
        YourOrderClass,
        CardOnly,
        CheckOutReload,
        FixData

    } = props


    // params 
    //  [1] productId this are data.
    // [2] YourOrderClass class true coming from page restaurant
    // [4] FixData this coming from page yourorders because  edit product id





    //  options params 
    // productId this is object product id and data
    // YourOrderClass this is coming from one product not from checkout 
    // ScreenAdd this is coming from product but not use just now.
    const dispatch = useDispatch()

    const [courrent, setCourrent] = useState(productId?.object?.qty ? productId?.object?.qty : 1)
    const [openArray, setOpenArray] = useState(false)
    const { filterCartProduct } = useContext(FilterCartDetials)


    // product id 
    const CheckOut_id = FixData ?  productId?.object?.product :   productId?.product ?
        productId?.product : productId?.object?._id


    // set current to product 
    useEffect(() => {

        if (productId?.object?._id || productId?.product) {

            const TestMahmoud = filterCartProduct?.find((x) => x?.product === CheckOut_id)
            // console.log('order', TestMahmoud)
            typeof TestMahmoud !== 'undefined' ? setCourrent(Number(TestMahmoud?.qty)) : setCourrent(Number(1))
            //  console.log('result', TestMahmoud?.qty)
        }

    }, [productId?.object?._id, filterCartProduct, CardOnly])







    // Handel data och change...
    const CartProduct = {
        _id: CheckOut_id,
        name: productId?.object ? productId?.object?.name : productId?.name,
        prices: productId?.object ? productId?.object?.prices : productId?.prices,
        image: productId?.object ? productId?.object?.image : productId?.image,
        cartinfo: productId?.object ? productId?.object?.cartinfo : productId?.cartinfo,
        description: productId?.object ? productId?.object?.description : productId?.description,
        qty: courrent
    }



    // more plus
    useEffect(() => {

        if (courrent && openArray) {

            dispatch(AddCart_Action(CartProduct))
            //  console.log('comming....')
            return setOpenArray(false)

        } else {
            // console.log('no')
            return
        }
        // eslint-disable-next-line
    }, [courrent, openArray])











    // this is add to cart 
    const AddProductCart = (e) => {

        // e.preventDefault()
        if (CartProduct) {
            // console.log('CARD PRODUCT', CartProduct)
            dispatch(AddCart_Action(CartProduct))
            // oppenProductCard({ value: false, object: '' })

            return

        }

    }



    // add plus more 
    const CourrentPlus = () => {



        if (YourOrderClass && courrent) {

            setCourrent(prev => prev + 1)

            // console.log('plus...')
            return setOpenArray(true)


        }

        // console.log('no...')

        return setCourrent(prev => prev + 1)
    }



    // add minuse,,,,,
    const CurrentMinus = () => {




        if (YourOrderClass) {
            setCourrent(prev => prev - 1)
            // console.log(CartProduct)
            return setOpenArray(true)
        }
        return setCourrent(prev => prev - 1)
    }


    const Testingup = (e) => {
        // e.preventDefault()

        // console.log('yes...')


        if (CheckOutReload) {
            // testing... console.log('hello')
            if (courrent === Number(0)) return
            return setCourrent(prev => prev - 1)

        }



        if (courrent === Number(1)) {
            return dispatch(RemoveCart_Action(CheckOut_id))
        }


    }



    // this is remove cart 
    const TheRemove = (e) => {
        e.preventDefault()
        dispatch(RemoveCart_Action(productId?.product ? productId?.product : productId?._id))
        // return oppenProductCard({ value: false, object: '' })

    }









    return <View style={Styles.containerAddOrder}>

        <View style={CardOnly ? [Styles.contentBtn, Styles.CardOnly] : [Styles.contentBtn, Styles.widthAddMinus]}>
            <TouchableOpacity
                style={Styles.backgroundColorToPlusMinus}
                onPress={() => courrent <= 1 ? Testingup() : CurrentMinus()}
            >
                <Icon
                    name="remove-outline"
                    style={Styles.plusMinus}
                />
            </TouchableOpacity>

            <Text style={[


                Styles.numOfOrder
            ]}>{courrent}</Text>

            <TouchableOpacity
                style={Styles.backgroundColorToPlusMinus}
                onPress={CourrentPlus}
            >
                <Icon
                    name="add-outline"
                    style={Styles.plusMinus}
                />
            </TouchableOpacity>




        </View>

        {CardOnly ? null : <TouchableOpacity style={[Styles.widthAddToCart, Styles.contentBtn]}
            onPress={() => courrent === 0 ? TheRemove() : AddProductCart()}
        >
            <Text style={[FontsDefault.fontButtonCart, FontsDefault.fontColorWith]}>
                Add To Cart
            </Text>
            <Text
                style={[
                    FontsDefault.fontColorWith,
                    FontsDefault.fontButtonCart,
                ]}
            >
                {CollectNumber(courrent, productId?.object?.prices)} Kr
            </Text>
        </TouchableOpacity>
        }
    </View>
}

