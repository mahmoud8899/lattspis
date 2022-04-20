import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import Styles from "../Style";
import { LeftBottom } from '../../../Components/LeftBottom/LeftBottom'
import ButtonScreen from "../../../Components/ButtonScreen/ButtonScreen";
import FontsDefault from "../../../Assistant/FontDefault";




export default function OneOrder(props) {

    // param
    const { navigation } = props


    // 


    return <View style={FontsDefault.containerChildren}>
        <LeftBottom onPress={() => navigation.goBack()} Tilte='My Order' />

        <ScrollView contentContainerStyle={FontsDefault.scrollPaddingBottom}>
        <View style={[Styles.containerbox, Styles.marginTop]} >
            <Text style={[Styles.fontOne, Styles.marginFont]}>Order # 6256d59a795d981b9dca7fb5</Text>
            <Text style={[Styles.fontOne, Styles.marginFont]}>3 Days Ago</Text>
            <Text style={[Styles.fontOne, Styles.marginFont]}>Status : Processing</Text>
            <Text style={[Styles.fontOne, Styles.marginFont]}>Pay Payment : Cart Number</Text>
            <Text style={[Styles.fontOne, Styles.marginFont]}>Username :Mahmoud</Text>
            <Text style={[Styles.fontOne, Styles.marginFont]}>Email:X@X.Com</Text>
            <View style={Styles.borderwidth} />

            <View style={Styles.background} >
                <Text style={[Styles.fontOne, Styles.marginFont, Styles.backgroundColor]}>My Address</Text>
            </View>
            <Text style={[Styles.fontOne, Styles.marginFont]}>Full Name :Mahmoud Almadhoun</Text>
            <Text style={[Styles.fontOne, Styles.marginFont]}>Phone:+32423433322</Text>
            <Text style={[Styles.fontOne, Styles.marginFont]}>Address: sdxfcvx </Text>
            <Text style={[Styles.fontOne, Styles.marginFont]}>city : uppsala</Text>
            <Text style={[Styles.fontOne, Styles.marginFont]}>zip code : 438734</Text>

            <View style={Styles.borderwidth} />
            <View style={Styles.JustCenter}>
                <Image
                    style={Styles.productImage}
                    source={require('../../../../data/image/uppsalamat/3.jpg')}
                />
                <Text>name : Pizza</Text>
                <Text>Qty : 1</Text>
            </View>

            <View style={Styles.borderwidth} />

            <Text style={[Styles.fontOne, Styles.marginFont]}>Time Boking: 09:08:00 - Thursday - 14/04/2022</Text>
            <Text style={[Styles.fontOne, Styles.marginFont]}>1X item</Text>
            <View style={[Styles.marginx,Styles.MarginTop]}>
                 <ButtonScreen Titel='293 kr' />
            </View>
           
        </View>
        </ScrollView>
    </View>
}