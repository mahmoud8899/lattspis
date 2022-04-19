

import { Text, View } from "react-native";
import React from "react";
import { LeftBottom } from '../../../Components/LeftBottom/LeftBottom'
import Styles from '../Style'
import HeaderScreen from '../../../Components/Header/Header'
import ButtonScreen from '../../../Components/ButtonScreen/ButtonScreen'
import InputScreen from "../../../Components/InputScreen/InputScreen";
import FontsDefault from "../../../Assistant/FontDefault";
export default function AddPayment(props) {

    // params 
    const { navigation } = props


    return <View style={FontsDefault.containerChildren}  >
        <LeftBottom onPress={() => navigation.goBack()} />
        <HeaderScreen Title='Add Card' />


        <View style={Styles.cardContainer}>

            <View style={Styles.credit}>
                <Text style={Styles.FontDefultlast} >credit / debit</Text>
            </View>

            <InputScreen
                placeholder='0000 0000 0000 0000'
                Title='card number'
            />

            <View style={Styles.creditexpi}>
                <View style={Styles.creditexpichildren}>

                    <InputScreen
                        placeholder='MM/YY'
                        Title='Expiration date'
                    />

                </View>
                <View style={Styles.creditexpichildren}>
                    <InputScreen
                        placeholder='000'
                        Title='Security code'
                    />

                </View>
            </View>




        </View>




        <View style={Styles.ButtomClick} >
            <ButtonScreen
                Titel='Add new Card'
                NameIcon='add-outline'
                

            />
        </View>


    </View>
}




