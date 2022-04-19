import React from "react"
import { View, Text, Image, } from 'react-native'
import FontsDefault from "../../Assistant/FontDefault"
import Styles from "./Style"
import InputScreen from '../../Components/InputScreen/InputScreen'
import { LeftBottom } from '../../Components/LeftBottom/LeftBottom'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ButtonScreen from "../../Components/ButtonScreen/ButtonScreen"



export default function LoginForm(props) {


  const { navigation } = props




  return <View style={FontsDefault.containerChildren}>

    <LeftBottom onPress={() => navigation.goBack()} />


    <KeyboardAwareScrollView extraHeight={120} enableOnAndroid>


      <View style={FontsDefault.containerImage}>
        <Image
          style={[FontsDefault.containerImageChildren, Styles.image]}
          source={require('../../../data/myimage/email.png')}
        />
      </View>

      <View style={Styles.marginTopFirst}>
        <Text style={[FontsDefault.fontDescription, Styles.colordes]}>
          We'll send you an email with a magic link that'll
          log you in right away.
        </Text>
      </View>

      <View style={Styles.marginTopFirst}>
        <InputScreen Title='Email' />
      </View>


      <View style={Styles.marginTopTop}>
        <ButtonScreen
          Titel='next'
        />
      </View>





    </KeyboardAwareScrollView>





  </View>



}


//   <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', }} behavior="padding" enabled keyboardVerticalOffset={100}>
//     </KeyboardAvoidingView>
{/* <View > */ }
{/* <LeftBottom onPress={() => navigation.goBack()} /> */ }