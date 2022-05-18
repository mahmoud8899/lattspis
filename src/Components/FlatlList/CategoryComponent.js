import React from 'react'
import { View, Text, Image } from 'react-native'
import Styles from './style'
import FontsDefault from '../../Assistant/FontDefault'
import { TheSlice } from '../../Assistant/TheSlice'
export default function CategoryComponent(props) {
    const { item, category } = props





    return <View style={Styles.CartContainer}>
        <View style={Styles.ImageContainer}>
            <Image
                source={{ uri: item?.item?.imageUrl }}
                style={Styles.image}
            />
        </View>

        <View style={{ padding: 10 }} >

            <View>
                <Text style={FontsDefault.FontNameCart}  >{TheSlice(item?.item?.title)}</Text>
                <Text style={[FontsDefault.fontDescriptionLight]} >{item?.item?.description}</Text>
            </View>

        </View>


    </View>
}


