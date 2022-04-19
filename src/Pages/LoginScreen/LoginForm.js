import React, { useCallback } from "react"
import { View, Text, ScrollView, Image, TouchableOpacity, } from 'react-native'
import FontsDefault from "../../Assistant/FontDefault"
import Styles from "./Style"
import InputScreen from '../../Components/InputScreen/InputScreen'
import ButtonScreen from "../../Components/ButtonScreen/ButtonScreen"
import { LeftBottom } from '../../Components/LeftBottom/LeftBottom'
import KeyboardTop from "../../Components/KeyboardTop/KeyboardTop"


export default function LoginForm(props) {


  const { navigation } = props





  return <View style={FontsDefault.containerChildren}>
    <LeftBottom onPress={() => navigation.goBack()} />


    <KeyboardTop>
      <ScrollView>
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


        <View style={Styles.flex}>
          <ButtonScreen Titel='next' />
        </View>
      </ScrollView>


    </KeyboardTop>

  </View>








}



