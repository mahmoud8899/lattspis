import React, { Fragment, useState } from "react"
import { View, Text, Image, } from 'react-native'
import FontsDefault from "../../Assistant/FontDefault"
import Styles from "./Style"
import InputScreen from '../../Components/InputScreen/InputScreen'
import { LeftBottom } from '../../Components/LeftBottom/LeftBottom'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ButtonScreen from "../../Components/ButtonScreen/ButtonScreen"
import SingUp from "./SingUp"
import CheckUser from "./CheckUser"



export default function LoginForm(props) {


  const { navigation } = props



  const [nextStep, setNextStep] = useState(false)


  return <View style={FontsDefault.containerChildren}>

    <LeftBottom onPress={() => navigation.goBack()} />


    <KeyboardAwareScrollView extraHeight={120} enableOnAndroid>

      {nextStep ?
        < SingUp /> :
        <CheckUser />

      }


      <View style={Styles.marginTopTop}>
        <ButtonScreen
          Titel='next'
          onPress={() => setNextStep(!nextStep)}
        />
      </View>



    </KeyboardAwareScrollView>



  </View>



}





// <KeyboardAwareScrollView extraHeight={120} enableOnAndroid>




// <View style={Styles.marginTopTop}>
//   <ButtonScreen
//     Titel='next'
//   />
// </View>





// </KeyboardAwareScrollView>

