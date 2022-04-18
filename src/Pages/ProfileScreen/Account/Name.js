import React from "react"
import { View, Text, TextInput } from 'react-native'
import FontsDefault from "../../../Assistant/FontDefault"
import ButtonScreen from "../../../Components/ButtonScreen/ButtonScreen"
import HeaderScreen from "../../../Components/Header/Header"
import InputScreen from "../../../Components/InputScreen/InputScreen"
import { LeftBottom } from "../../../Components/LeftBottom/LeftBottom"
import Styles from "../Style"

export default function NameScreen(props) {

    const { navigation } = props




    return <View style={FontsDefault.containerChildren}>
        <LeftBottom onPress={() => navigation.goBack()} />
        
        <HeaderScreen  Title='Name'  />

        <InputScreen   Title='first name' />

         <View  style={Styles.border} />

        <InputScreen Title='Last name' />


        <View style={Styles.ButtomClick} >
            <ButtonScreen Titel='Save' />
        </View>



    </View>
}