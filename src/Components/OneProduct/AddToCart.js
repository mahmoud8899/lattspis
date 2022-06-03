import Styles from './Styles'
import React, { useContext, useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FontsDefault from '../../Assistant/FontDefault'
import { FilterCartDetials } from './FilterCardItem'
import { AddCart_Action, RemoveCart_Action } from '../../Redux/Action/CardAction'
import { useDispatch } from 'react-redux'

export default function AddToCart(props) {
    const {
        productId,
        YourOrderClass,
        ScreenAdd
    } = props


    //  options params 
    // productId this is object product id and data
    // YourOrderClass this is coming from one product not from checkout 
    // ScreenAdd this is coming from product but not use just now.





    const { mapsFil } = useContext(FilterCartDetials)


    const dispatch = useDispatch()

    const [courrent, setCourrent] = useState(
        ScreenAdd ?
            mapsFil?.qty ? mapsFil?.qty : 1 :
            productId?.qty ? productId?.qty : 1)
    const [openArray, setOpenArray] = useState(false)




    // console.log('courrent', courrent)






    // this is object 
    const CartProduct = {
        _id: productId?.product ? productId?.product : productId?.object?._id,
        name: productId?.object?.name,
        prices: productId?.object?.prices,
        image: productId?.object?.image,
        cartinfo: productId?.object?.cartinfo,
        description: productId?.object?.description,
        qty: courrent
    }




    useEffect(() => {

        if (courrent && openArray) {

            dispatch(AddCart_Action(CartProduct))

            return setOpenArray(false)

        } else {
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


            return setOpenArray(true)


        }

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
        e.preventDefault()


        if (CheckOutReload) {
            // testing... console.log('hello')
            if (courrent === Number(0)) return
            return setCourrent(prev => prev - 1)

        }



        if (courrent === Number(1)) {
            return dispatch(RemoveCart_Action(productId?.product ? productId?.product : productId?._id))
        }


    }



    // this is remove cart 
    const TheRemove = (e) => {
        e.preventDefault()
        dispatch(RemoveCart_Action(productId?.product ? productId?.product : productId?._id))
        // return oppenProductCard({ value: false, object: '' })

    }







    return <View style={Styles.containerAddOrder}>
        <View style={[Styles.contentBtn, Styles.widthAddMinus]}>
            <TouchableOpacity onPress={() => courrent <= 1 ? Testingup() : CurrentMinus()} >
                <Icon
                    name="remove-outline"
                    style={[
                        Styles.plusMinus,
                        Styles.backgroundColorToPlusMinus,
                    ]}
                />
            </TouchableOpacity>

            <Text style={Styles.numOfOrder}>{courrent}</Text>

            <TouchableOpacity onPress={CourrentPlus}>
                <Icon
                    name="add-outline"
                    style={[
                        Styles.plusMinus,
                        Styles.backgroundColorToPlusMinus,
                    ]}
                />
            </TouchableOpacity>




        </View>

        <TouchableOpacity style={[Styles.widthAddToCart, Styles.contentBtn]}
            onPress={() => courrent === 0 ? TheRemove() : AddProductCart()}
        >
            <Text style={FontsDefault.fontButtonCart}>
                Add To Cart
            </Text>
            <Text
                style={[
                    FontsDefault.fontColorWith,
                    FontsDefault.fontCategory,
                ]}
            >
                {productId?.object?.prices} Kr
            </Text>
        </TouchableOpacity>
    </View>
}

// 