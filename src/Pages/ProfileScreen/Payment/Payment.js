
import { Image, Text, View } from "react-native";
import React from "react";
import { LeftBottom } from '../../../Components/LeftBottom/LeftBottom'
import Styles from '../Style'
import ButtonScreen from '../../../Components/ButtonScreen/ButtonScreen'
export default function PaymentMethods(props) {

    // params 
    const { navigation } = props


    return <View style={Styles.containerChildren}  >
        <LeftBottom OnClickButtom={() => navigation.goBack()} Tilte='Payment Methods' />



        <View style={[Styles.marginTop,Styles.containerImage, Styles.marginTopStor]} >
            <Image
                style={Styles.containerImageChildren}
                source={require('../../../../data/myimage/payment.png')}
            />
        </View>



        <View>


            <Text style={[Styles.fontOne, Styles.marginTop]}>
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



