import React, { Fragment } from "react"
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { LeftBottom } from "../../../Components/LeftBottom/LeftBottom"
import Styles from "../Style"
import InputScreen from '../../../Components/InputScreen/InputScreen'
import Icon from "react-native-vector-icons/Ionicons"
import { addresSelection } from '../../../Assistant/Selection'

export default function CreateAddressWrite(props) {




    return <Fragment >
        <LeftBottom
            OnClickButtom={() => props.setNextInput(false)}
            Tilte='Uppsala'
        />

        <View style={Styles.borderbottom} />

        <ScrollView>


            <View style={Styles.border} />

            <View style={Styles.containerInputText}>
                <Text style={Styles.fontSizeLite}>Skriv adressen exakt, sä underlättar du för oss att leverera.</Text>
            </View>










            <InputScreen Title='Gatuadress och byggnadsnummer' />
            <View style={Styles.border} />

            <InputScreen Title='Detaljer (dörrnummer, lägenhet)' />
            <View style={Styles.border} />
            <View style={Styles.containerInputText}>
                <Text style={Styles.fontSizeLite}>Uppsala</Text>
            </View>

            <InputScreen Title='Postnummer' />
            <View style={Styles.border} />

            <View style={Styles.containerInputText}>
                <Text style={Styles.fontSizeLite}>Um du anger din exakta plats pa kartan
                    hjälper du oss att hitta dig snabbt.</Text>
            </View>

            <TouchableOpacity style={Styles.map}>
                <Icon name="location-outline" style={Styles.mapfont} />
                <Text style={[Styles.mapfont, Styles.mapfontlite]} >Andra Entréns Placering Pä En Karta</Text>
            </TouchableOpacity>


            <View style={Styles.containerInputText}>

                <Text style={Styles.fontSizeLite}>Typ Av Adress</Text>
            </View>


            <View style={Styles.containerInputText}>

                <Text style={Styles.fontSizeLite}>Genom att märka adresserna kan du
                    lättare välja mellan dem. Väli "Annan" för
                    att skapa en egen etikett.</Text>
            </View>

            <View style={Styles.work}>

                {addresSelection?.map((select, Index) => (
                    <TouchableOpacity key={Index} style={Styles.boxwork}>
                        <Text style={[Styles.iconswork, Styles.name]} >{select.name}</Text>
                        <Icon name={select.image} style={Styles.iconswork} />
                    </TouchableOpacity>


                ))}
            </View>






        </ScrollView>

    </Fragment>
}