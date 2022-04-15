import React from "react"
import { View, Text } from 'react-native'
import { LeftBottom } from '../../../Components/LeftBottom/LeftBottom'
import HeaderScreen from '../../../Components/Header/Header'
import Styles from '../Style'
import InputScreen from '../../../Components/InputScreen/InputScreen'
import ButtonScreen from "../../../Components/ButtonScreen/ButtonScreen"
export default function MobileNumber(props) {

    const { navigation } = props




    return <View style={Styles.containerChildren} >
        <LeftBottom OnClickButtom={() => navigation.goBack()} />

        <HeaderScreen Title='Mobile Number' />

        <View style={Styles.parantBox} >
           <View style={Styles.parantBoxfirst}>
           <InputScreen Title='country' />
           </View>
           <View style={Styles.parantBoxLast}>
           <InputScreen Title='Phone number' />
           </View>
        </View>


        <View style={Styles.ButtomClick} >
            <ButtonScreen Titel='Save' />
        </View>




    </View>
}