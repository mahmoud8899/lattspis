import React from "react"
import { ScrollView, Text, View } from "react-native";
import Styles from "../Style";
import Icon from 'react-native-vector-icons/Ionicons'
import { LeftBottom } from "../../../Components/LeftBottom/LeftBottom";
import HeaderScreen from "../../../Components/Header/Header";
import ButtonScreen from "../../../Components/ButtonScreen/ButtonScreen";


export default function CreateAddress(props) {

    const { navigation } = props




    return <View style={Styles.containerChildren}  >
        <LeftBottom OnClickButtom={() => navigation.goBack()} />

        <HeaderScreen   Title='Add new Address'  />


        <View>
            <Text>Select here....</Text>
        </View>



        <View>
            <Text>add Image....</Text>
        </View>



        <View style={Styles.ButtomClick} >
          

          <ButtonScreen  Titel='next'  />
  
          </View>
  

    </View>







}