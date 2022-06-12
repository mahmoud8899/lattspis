import { View, Text, TouchableOpacity } from 'react-native'
import React, { Fragment, useState } from 'react'
import FontsDefault from '../../Assistant/FontDefault'
import Styles from '../../Pages/RestaurantScreen/Styles'
import LazyLoading from '../LazyLoading/LazyLoading'
import { TheImageCheck } from '../../Assistant/ImageUrl'
import AddToCart from '../OneProduct/AddToCart'
import { CollectNumber } from '../../Assistant/Total'
import OneProduct from '../OneProduct/OneProduct'
export default function Items(props) {
    const { data } = props




    // set product id..
    const [saveId, setSaveId] = useState('')

    // oppen one product
    const [oppenProductCard, setOppenProductCard] = useState({ value: false, object: '' })



    // options 
    // [1] : AddToCart add to courrnt 
    // [2] OneProduct this is one product add more courrent


    console.log('oppenProductCard', oppenProductCard)





    // oppen product...
    function OppenProduct(item) {
        setOppenProductCard({
            value: true,
            object: item
        })
    }


    // set product id 
    function AddProductID(id) {
        setSaveId(id)
    }

    // console.log('saveId',saveId)

    return <View>
        {data?.map((item, Index) => (
            <View style={Styles.ContainerOderItem} key={Index}>
                <View style={Styles.containerFirstOrder}>

                    {item?.product ?
                        <AddToCart
                            CardOnly
                            productId={item}
                            YourOrderClass
                        />
                        :
                        <TouchableOpacity style={Styles.contentOrderNumber} onPress={() => AddProductID(item?.product)}>
                            <Text
                                style={[
                                    FontsDefault.fontCategory,
                                    FontsDefault.FontsColorall
                                ]}
                            >
                                {item?.qty}
                            </Text>
                        </TouchableOpacity>

                    }






                    <TouchableOpacity style={Styles.marginX} onPress={() => OppenProduct(item)} >
                        <Text
                            style={[
                                FontsDefault.fontDescription,
                                FontsDefault.fontColorBlack,
                            ]}
                        >
                            {item?.name}
                        </Text>
                        <Text
                            style={[
                                FontsDefault.fontDescription,
                                FontsDefault.FontColor,
                            ]}
                        >
                            {CollectNumber(item?.qty, item?.prices)} kr
                        </Text>
                    </TouchableOpacity>

                    <View style={Styles.imageLeft} >
                        <LazyLoading
                            image={TheImageCheck(item?.image)}
                            style={Styles.styleImageOrder}
                        />
                    </View>


                </View>

            </View>
        ))
        }



        <OneProduct
            oppenProductCard={oppenProductCard}
            setOppenProductCard={setOppenProductCard}
            FixData
        />





    </View>

}
