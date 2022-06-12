import React from "react";
import Styles from '../../Pages/RestaurantScreen/Styles'
import { View, Text, Image } from 'react-native'
import FontsDefault from '../../Assistant/FontDefault'
import ButtonScreen from '../ButtonScreen/ButtonScreen'

export default function Emptybasket(props) {


    return <View style={[Styles.padding, Styles.oneflex]} >

        <View>
            <Image source={require('../../../data/myimage/order.png')}
                style={Styles.Image}
            />
        </View>

        <Text style={[
            FontsDefault.TitleFont
        ]} >No items in your order</Text>

        <Text
            style={[
                FontsDefault.fontDescription
            ]}
        >Your order is lonely without items. Let's add some!</Text>



        <View style={{
            width: '100%',
            marginTop: 30
        }} >
            <ButtonScreen
                Titel='Add items'
                onPress={()=> props?.setOppenYourOrder(false)}

            />
        </View>
    </View>
}