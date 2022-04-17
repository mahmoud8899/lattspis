import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Styles from '../Style'
import ButtonScreen from '../../../Components/ButtonScreen/ButtonScreen'
import Icon from 'react-native-vector-icons/Ionicons'
import HeaderScreen from '../../../Components/Header/Header'

export default function ShowOrdersUser(props) {
    const { navigation } = props




    // navigation show datilas order 
    const NavigationOneOrder = () => {
        return  navigation.navigate('OneOrder')
        //
    }


    return <View style={Styles.marginTopStor} >
        <HeaderScreen Title='Order History' />
        <ScrollView contentContainerStyle={Styles.scrollPaddingBottom}>


            <TouchableOpacity style={[Styles.containerbox, Styles.marginTop]} >

                <View style={Styles.edit}>
                    <Icon name='create-outline' style={Styles.iconaddress} />
                </View>

                <Text style={[Styles.fontOne, Styles.marginFont]}>Beställningstid : 3 Days Ago</Text>
                <Text style={[Styles.fontOne, Styles.marginFont]}>order number : 3287482374234</Text>
                <Text style={[Styles.fontOne, Styles.marginFont]}>Orderstatus : Processing</Text>
                <Text style={[Styles.fontOne, Styles.marginFont]}>Betala Betalning : Cart Number </Text>
                <Text style={[Styles.fontOne, Styles.marginFont]}>Tidsbokning : 09:08:00 - Thursday - 14/04/2022 - sdg</Text>
                <Text style={[Styles.fontOne, Styles.marginFont]}>1x Föremal</Text>


                <ButtonScreen
                    Titel='Detali'
                    ClassStyle
                    style={[Styles.ButtomDetali, Styles.marginFont]}
                    onPress={NavigationOneOrder}
                />
                <ButtonScreen
                    Titel='3434 kr'
                    ClassStyle
                    style={[Styles.ButtomDetali, Styles.marginFont]}
                  

                />

            </TouchableOpacity>

            <TouchableOpacity style={[Styles.containerbox, Styles.marginTop]} >

                <View style={Styles.edit}>
                    <Icon name='create-outline' style={Styles.iconaddress} />
                </View>

                <Text style={[Styles.fontOne, Styles.marginFont]}>Beställningstid : 3 Days Ago</Text>
                <Text style={[Styles.fontOne, Styles.marginFont]}>order number : 3287482374234</Text>
                <Text style={[Styles.fontOne, Styles.marginFont]}>Orderstatus : Processing</Text>
                <Text style={[Styles.fontOne, Styles.marginFont]}>Betala Betalning : Cart Number </Text>
                <Text style={[Styles.fontOne, Styles.marginFont]}>Tidsbokning : 09:08:00 - Thursday - 14/04/2022 - sdg</Text>
                <Text style={[Styles.fontOne, Styles.marginFont]}>1x Föremal</Text>


                <ButtonScreen
                    Titel='Detali'
                    ClassStyle
                    style={[Styles.ButtomDetali, Styles.marginFont]}
                    onPress={NavigationOneOrder}
                />
                <ButtonScreen
                    Titel='3434 kr'
                    ClassStyle
                    style={[Styles.ButtomDetali, Styles.marginFont]}
                />

            </TouchableOpacity>

            <TouchableOpacity style={[Styles.containerbox, Styles.marginTop]} >

                <View style={Styles.edit}>
                    <Icon name='create-outline' style={Styles.iconaddress} />
                </View>

                <Text style={[Styles.fontOne, Styles.marginFont]}>Beställningstid : 3 Days Ago</Text>
                <Text style={[Styles.fontOne, Styles.marginFont]}>order number : 3287482374234</Text>
                <Text style={[Styles.fontOne, Styles.marginFont]}>Orderstatus : Processing</Text>
                <Text style={[Styles.fontOne, Styles.marginFont]}>Betala Betalning : Cart Number </Text>
                <Text style={[Styles.fontOne, Styles.marginFont]}>Tidsbokning : 09:08:00 - Thursday - 14/04/2022 - sdg</Text>
                <Text style={[Styles.fontOne, Styles.marginFont]}>1x Föremal</Text>


                <ButtonScreen
                    Titel='Detali'
                    ClassStyle
                    style={[Styles.ButtomDetali, Styles.marginFont]}
                    onPress={NavigationOneOrder}
                />
                <ButtonScreen
                    Titel='3434 kr'
                    ClassStyle
                    style={[Styles.ButtomDetali, Styles.marginFont]}
                />

            </TouchableOpacity>

            <TouchableOpacity style={[Styles.containerbox, Styles.marginTop]} >

                <View style={Styles.edit}>
                    <Icon name='create-outline' style={Styles.iconaddress} />
                </View>

                <Text style={[Styles.fontOne, Styles.marginFont]}>Beställningstid : 3 Days Ago</Text>
                <Text style={[Styles.fontOne, Styles.marginFont]}>order number : 3287482374234</Text>
                <Text style={[Styles.fontOne, Styles.marginFont]}>Orderstatus : Processing</Text>
                <Text style={[Styles.fontOne, Styles.marginFont]}>Betala Betalning : Cart Number </Text>
                <Text style={[Styles.fontOne, Styles.marginFont]}>Tidsbokning : 09:08:00 - Thursday - 14/04/2022 - sdg</Text>
                <Text style={[Styles.fontOne, Styles.marginFont]}>1x Föremal</Text>


                <ButtonScreen
                    Titel='Detali'
                    ClassStyle
                    style={[Styles.ButtomDetali, Styles.marginFont]}
                    onPress={NavigationOneOrder}
                />
                <ButtonScreen
                    Titel='3434 kr'
                    ClassStyle
                    style={[Styles.ButtomDetali, Styles.marginFont]}
                />

            </TouchableOpacity>

        </ScrollView>
    </View>
}