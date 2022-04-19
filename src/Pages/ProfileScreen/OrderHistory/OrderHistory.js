

import { Image, Text, View } from "react-native";
import React, { Fragment, useState } from "react";
import Styles from "../Style";
import { LeftBottom } from "../../../Components/LeftBottom/LeftBottom";
import ButtonScreen from "../../../Components/ButtonScreen/ButtonScreen";
import ShowOrdersUser from "./ShowOrders";
import FontsDefault from "../../../Assistant/FontDefault";


export default function OrderHistory(props) {

    const { navigation } = props


    // option 
    const [order, setOrder] = useState(true)


    // this is navigation Home
    function HandelHome() {
        return navigation.navigate('Discovery')
    }


    // [1] no orders has image nd navigation Home.
    // [2] show orders screen ShowOrdersUser


    return <View style={FontsDefault.containerChildren}>
        <LeftBottom onPress={() => navigation.goBack()} Tilte='Order History' />

        {order ?
           <ShowOrdersUser  navigation={navigation} />
            :

            <Fragment>
                <View style={[Styles.marginTop, FontsDefault.containerImage, Styles.marginTopStor]} >
                    <Image
                        style={FontsDefault.containerImageChildren}
                        source={require('../../../../data/myimage/order.png')}
                    />
                </View>

                <View>
                    <Text style={[Styles.titleFont, Styles.center, Styles.marginTop]} >no orders</Text>
                </View>

                <View style={Styles.ButtomClick} >
                    <ButtonScreen
                        Titel='Browes restaurants and stores'
                        onPress={HandelHome}
                    />
                </View>
            </Fragment>






        }

    </View>
}







