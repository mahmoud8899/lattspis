
import { Image, Text, View } from "react-native";
import React from "react";
import { LeftBottom } from '../../../Components/LeftBottom/LeftBottom'
import Styles from '../Style'
import ButtonScreen from '../../../Components/ButtonScreen/ButtonScreen'
import FontsDefault from "../../../Assistant/FontDefault";
export default function PaymentMethods(props) {

    // params 
    const { navigation } = props


    return <View style={FontsDefault.containerChildren}  >
        <LeftBottom onPress={() => navigation.goBack()} Tilte='Payment Methods' />



        <View style={[Styles.marginTop,FontsDefault.containerImage, Styles.marginTopStor]} >
            <Image
                style={FontsDefault.containerImageChildren}
                source={require('../../../../data/myimage/payment.png')}
            />
        </View>



        <View>


            <Text style={[FontsDefault.fontDescription, Styles.marginTop]}>
                No cards available.
                You can use your debit or credit card to order with
                Wolt. Your card will be charged only after the order is
                delivered.
            </Text>
        </View>



        <View style={Styles.ButtomClick} >
            <ButtonScreen
                Titel='Add new Card'
                NameIcon='add-outline'
                ClassIcon
                onPress={() => navigation.navigate('AddPayment')}

            />
        </View>


    </View>
}



