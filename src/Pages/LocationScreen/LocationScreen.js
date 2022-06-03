import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import Styles from './Styles'
import FontsDefault from '../../Assistant/FontDefault'
import HeaderLocation from '../../Components/HeaderLocation/HeaderLocation'
import ButtonScreen from '../../Components/ButtonScreen/ButtonScreen'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ChoseLanguageDatilas } from '../../Components/UseContext/ChoseLanguage'
import LocationLang from '../../Language/Location'
import GetLocation from 'react-native-get-location'
import { SetLocationAction } from '../../Redux/Action/LocationAction'
import { useDispatch } from 'react-redux'
import LazyLoading from '../../Components/LazyLoading/LazyLoading'

export default function LocationScreen() {
   const { Language } = useContext(ChoseLanguageDatilas)


   const dispatch = useDispatch()




   useEffect(() => {
      LoadingSetLocation()
   }, [])



   // set location...
   function LoadingSetLocation() {
      GetLocation.getCurrentPosition({
         enableHighAccuracy: true,
         timeout: 15000,
      })
         .then(location => {

             dispatch(SetLocationAction(location, false))
            // console.log(location);
         })
         .catch(error => {
            const { code, message } = error;
            dispatch(SetLocationAction(null, message))
            console.log(code, message);
         })
   }




   return (
      <View style={FontsDefault.containerChildren}>
         <HeaderLocation />

         <KeyboardAwareScrollView extraHeight={120} enableOnAndroid>
            <View style={[Styles.marginTop, FontsDefault.containerImage]}>
               {/* <LazyLoading
                  style={FontsDefault.containerImageChildren}
                  image={require('../../../data/myimage/location.png')}
               /> */}
            </View>

            <View style={[Styles.center, FontsDefault.marginTopAndBottom]}>
               <Text style={[FontsDefault.TitleFont, FontsDefault.FontColor]}>
                  {LocationLang.dontKnow[Language]}
               </Text>
            </View>

            <View style={[Styles.center, FontsDefault.marginTopAndBottom]}>
               <Text style={FontsDefault.fontDescription}>
                  {LocationLang.shareLocation[Language]}
               </Text>
            </View>

            <TouchableOpacity style={FontsDefault.marginTopAndBottom}>
               <ButtonScreen Titel={LocationLang.shareLocationBtn[Language]} onPress={LoadingSetLocation} />
            </TouchableOpacity>
            <View style={FontsDefault.marginTopAndBottom}>
               <ButtonScreen
                  Titel={LocationLang.enterAddress[Language]}
                  styleTouch={Styles.ContainerButtom}
                  StyleTitel={[Styles.color]}
               />
            </View>
         </KeyboardAwareScrollView>
      </View>
   )
}
