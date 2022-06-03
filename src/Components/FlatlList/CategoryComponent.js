import React from 'react'
import { View, Text, Image } from 'react-native'
import Styles from './style'
import FontsDefault from '../../Assistant/FontDefault'
import { TheSlice } from '../../Assistant/TheSlice'
import {TheImageCheck} from '../../Assistant/ImageUrl'
import LazyLoading from '../../Components/LazyLoading/LazyLoading'
export default function CategoryComponent(props) {
    const { item } = props


    // console.log('item',item?.item?.image )


    return <View style={Styles.CartContainer}>
        <View style={Styles.ImageContainer}>


        <LazyLoading image={TheImageCheck(item?.item?.image)}  style={Styles.image} />
           
        </View>

        <View style={{ padding: 10 }} >

            <View>
                <Text style={FontsDefault.FontNameCart}  >{TheSlice(item?.item?.foodType)}</Text>
                <Text style={[FontsDefault.fontDescriptionLight]} >{
                    TheSlice(item?.item?.description, 20)
                
                }</Text>
            </View>

        </View>


    </View>
}


