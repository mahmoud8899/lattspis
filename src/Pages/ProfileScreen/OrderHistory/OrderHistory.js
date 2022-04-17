

import { Image, Text, View } from "react-native";
import React, { Fragment, useState } from "react";
import Styles from "../Style";
import { LeftBottom } from "../../../Components/LeftBottom/LeftBottom";
import ButtonScreen from "../../../Components/ButtonScreen/ButtonScreen";
import ShowOrdersUser from "./ShowOrders";


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


    return <View style={Styles.containerChildren}>
        <LeftBottom OnClickButtom={() => navigation.goBack()} Tilte='Order History' />

        {order ?
           <ShowOrdersUser  navigation={navigation} />
            :

            <Fragment>
                <View style={[Styles.marginTop, Styles.containerImage, Styles.marginTopStor]} >
                    <Image
                        style={Styles.containerImageChildren}
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







