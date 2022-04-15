
import { Text, TouchableOpacity, View, } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/Ionicons'
import Styles from "../Style";
import { LeftBottom } from "../../../Components/LeftBottom/LeftBottom"
import ButtonScreen from "../../../Components/ButtonScreen/ButtonScreen";
import HeaderScreen from "../../../Components/Header/Header";


export default function AccountUser(props) {

    const { navigation } = props

    // testing console console.log(navigation.goBack)


    // this is bottom callback 
    const OnClickButtom = () => {

        return navigation.goBack()
    }

    return <View style={Styles.containerChildren}>


        <LeftBottom OnClickButtom={OnClickButtom} />

        <HeaderScreen  Title='Account'  />
        


        <TouchableOpacity style={[Styles.JustCenter, Styles.PaddingBorder]} onPress={()=> navigation.navigate('NameScreen')}  >
            <View >
                <Text style={Styles.fontSizeLite} >name</Text>

            </View>

            <View>
                <Icon name="chevron-forward-outline" style={Styles.Icons} />
            </View>

        </TouchableOpacity>

        <View style={Styles.ButtomLine} />


        <TouchableOpacity style={[Styles.JustCenter, Styles.PaddingBorder]} onPress={()=> navigation.navigate('MobileNumber')} >
            <View>
                <Text style={Styles.fontSizeLite} >mobile number</Text>

            </View>

            <View>
                <Icon name="chevron-forward-outline" style={Styles.Icons} />
            </View>

        </TouchableOpacity>

        <View style={Styles.ButtomLine} />



        <View style={Styles.ButtomClick} >
          

        <ButtonScreen  Titel='log out'  />

        </View>








    </View>
}



