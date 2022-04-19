import React, { Fragment } from "react"
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { LeftBottom } from "../../../Components/LeftBottom/LeftBottom"
import InputScreen from '../../../Components/InputScreen/InputScreen'
import Icon from "react-native-vector-icons/Ionicons"
import { addresSelection } from '../../../Assistant/Selection'
import Styles from "../Style"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"


export default function CreateAddressWrite(props) {





    return <Fragment >
        <LeftBottom
            onPress={() => props.setNextInput(false)}
            Tilte='Uppsala'
        />

        <View style={Styles.borderbottom} />

     <KeyboardAwareScrollView extraHeight={120} enableOnAndroid>


            <View style={Styles.border} />

            <View style={Styles.containerInputText}>
                <Text style={[Styles.fontOne,Styles.fontOnew]}>Skriv adressen exakt, sä underlättar du för oss att leverera.</Text>
            </View>

            <View style={Styles.border} />








            <InputScreen Title='Gatuadress och byggnadsnummer' />
            <View style={Styles.border} />

            <InputScreen Title='Detaljer (dörrnummer, lägenhet)' />
            <View style={Styles.border} />
            <View style={[Styles.containerInputText,Styles.city]}>
                <Icon  name="location-outline" style={Styles.citychildren}  />
                <Text style={[Styles.fontOne,Styles.fontOnew]}>Uppsala</Text>
            </View>

            <View style={Styles.border} />

            <InputScreen Title='Postnummer' />
            <View style={Styles.border} />

            <View style={Styles.containerInputText}>
                <Text style={Styles.fontOne}>Um du anger din exakta plats pa kartan
                    hjälper du oss att hitta dig snabbt.</Text>
            </View>
            <View style={Styles.border} />

            <TouchableOpacity style={Styles.map}>
                <Icon name="location-outline" style={Styles.mapfont} />
                <Text style={[Styles.fontOne,Styles.fontOnew,Styles.color]} >Andra Entréns Placering Pä En Karta</Text>
            </TouchableOpacity>
            <View style={Styles.border} />


            <View style={Styles.containerInputText}>

                <Text style={[Styles.fontOne,Styles.fontOnew]}>Typ Av Adress</Text>
            </View>

         
            <View style={Styles.containerInputText}>

                <Text style={Styles.fontOne}>Genom att märka adresserna kan du
                    lättare välja mellan dem. Väli "Annan" för
                    att skapa en egen etikett.</Text>
            </View>
            <View style={Styles.border} />

            <View style={Styles.work}>

                {addresSelection?.map((select, Index) => (
                    <TouchableOpacity key={Index} style={Styles.boxwork}>
                        <Text style={[Styles.fontOne,Styles.fontOnew]} >{select.name}</Text>
                        <Icon name={select.image} style={Styles.iconswork} />
                    </TouchableOpacity>


                ))}
            </View>






        </KeyboardAwareScrollView>

    </Fragment>
}