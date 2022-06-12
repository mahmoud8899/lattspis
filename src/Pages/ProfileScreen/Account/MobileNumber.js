import React, { useContext } from 'react'
import { View, Image, ScrollView } from 'react-native'
import { LeftBottom } from '../../../Components/LeftBottom/LeftBottom'
import HeaderScreen from '../../../Components/Header/Header'
import Styles from '../Style'
import Input from '../../../Components/InputScreen/Input'
import ButtonScreen from '../../../Components/ButtonScreen/ButtonScreen'
import FontsDefault from '../../../Assistant/FontDefault'
import { ChoseLanguageDatilas } from '../../../Components/UseContext/ChoseLanguage'
import ProfileLang from '../../../Language/Profile'
import LazyLoading from '../../../Components/LazyLoading/LazyLoading'
import { useSelector } from 'react-redux'

export default function MobileNumber(props) {
   const { Language } = useContext(ChoseLanguageDatilas)

   const { navigation } = props

   // user Info
   const TheCheckUserInfo = useSelector((state) => state?.userLogin?.userInfo)
   console.log('userLogin', TheCheckUserInfo)


   return (
      <ScrollView contentContainerStyle={[FontsDefault.Cover, FontsDefault.fontBackgroundColoe]}>
         <View style={FontsDefault.ContainerALLPadding}>
            <LeftBottom onPress={() => navigation.goBack()} />
            <HeaderScreen Title={ProfileLang.mobileNumber[Language]} />
         </View>


         <View style={[FontsDefault.Cover, FontsDefault.fontBackgroundColoe]}>
            <View style={FontsDefault.ContainerALLPadding}>

               <View style={Styles.parantBox}>
                  <View style={Styles.parantBoxfirst}>
                     <Input
                        Title={ProfileLang.country[Language]}
                        value='+46'
                     />
                  </View>
                  <View style={Styles.parantBoxLast}>
                     <Input
                        Title={ProfileLang.phoneNumber[Language]}
                        value={TheCheckUserInfo?.telephone}
                     />
                  </View>
               </View>
               <View style={[Styles.marginTop, FontsDefault.containerImage]}>
                  <Image
                     style={FontsDefault.containerImageChildren}
                     source={require('../../../../data/myimage/Mobile.png')}
                  />
               </View>

               <View style={{ marginTop: 10 }}>
                  <ButtonScreen Titel={ProfileLang.saveBtn[Language]} />
               </View>
            </View>
         </View>








      </ScrollView>
   )
}
