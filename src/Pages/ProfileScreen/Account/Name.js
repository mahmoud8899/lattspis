import React from "react"
import { View, Text, TextInput } from 'react-native'
import ButtonScreen from "../../../Components/ButtonScreen/ButtonScreen"
import HeaderScreen from "../../../Components/Header/Header"
import InputScreen from "../../../Components/InputScreen/InputScreen"
import { LeftBottom } from "../../../Components/LeftBottom/LeftBottom"
import Styles from "../Style"

export default function NameScreen(props) {

    const { navigation } = props




    return <View style={Styles.containerChildren}>
        <LeftBottom OnClickButtom={() => navigation.goBack()} />
        
        <HeaderScreen  Title='Name'  />

        <InputScreen />

        <InputScreen />


        <View style={Styles.ButtomClick} >
            <ButtonScreen Titel='Save' />
        </View>



    </View>
}