

import { Image, Text, View } from "react-native";
import React from "react";
import Styles from "../Style";
import HeaderScreen from "../../../Components/Header/Header";
import { LeftBottom } from "../../../Components/LeftBottom/LeftBottom";
import ButtonScreen from "../../../Components/ButtonScreen/ButtonScreen";



export default function OrderHistory(props) {

    const {navigation} = props


    // this is navigation Home
    function HandelHome(){


        return navigation.navigate('Discovery')
    }


    return <View style={Styles.containerChildren}>
         <LeftBottom OnClickButtom={() => navigation.goBack()} />
          <HeaderScreen Title='Order History' />

          <View style={[Styles.marginTop,Styles.containerImage]} >
            <Image
                style={Styles.containerImageChildren}
                source={require('../../../../data/myimage/order.png')}
            />
        </View>


        <View>
            <Text style={[Styles.titleFont,Styles.center, Styles.marginTop]} >no orders</Text>
        </View>



          <View style={Styles.ButtomClick} >
            <ButtonScreen
                Titel='Browes restaurants and stores'
                onPress={HandelHome}
            />
        </View>
    </View>
}





