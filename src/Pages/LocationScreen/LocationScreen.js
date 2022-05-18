import { View, Text, Image } from 'react-native'
import React, { useContext,useEffect } from 'react'
import Styles from './Styles'
import FontsDefault from '../../Assistant/FontDefault'
import HeaderLocation from '../../Components/HeaderLocation/HeaderLocation'
import ButtonScreen from '../../Components/ButtonScreen/ButtonScreen'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ChoseLanguageDatilas } from '../../Components/UseContext/ChoseLanguage'
import LocationLang from '../../Language/Location'
import GetLocation from 'react-native-get-location'



export default function LocationScreen() {
   const { Language } = useContext(ChoseLanguageDatilas)



   useEffect(()=>{
      GetLocation.getCurrentPosition({
         enableHighAccuracy: true,
         timeout: 15000,
     })
     .then(location => {
         console.log(location);
     })
     .catch(error => {
         const { code, message } = error;
         console.log(code, message);
     })
   },[])




   return (
      <View style={FontsDefault.containerChildren}>
         <HeaderLocation />

         <KeyboardAwareScrollView extraHeight={120} enableOnAndroid>
            <View style={[Styles.marginTop, FontsDefault.containerImage]}>
               <Image
                  style={FontsDefault.containerImageChildren}
                  source={require('../../../data/myimage/location.png')}
               />
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

            <View style={FontsDefault.marginTopAndBottom}>
               <ButtonScreen Titel={LocationLang.shareLocationBtn[Language]} />
            </View>
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
