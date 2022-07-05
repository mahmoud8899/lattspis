import React, { Fragment, useContext } from 'react'
import { View } from 'react-native'
import FontsDefault from '../../../Assistant/FontDefault'
import ButtonScreen from '../../../Components/ButtonScreen/ButtonScreen'
import HeaderScreen from '../../../Components/Header/Header'
import Input from '../../../Components/InputScreen/Input'
import { LeftBottom } from '../../../Components/LeftBottom/LeftBottom'
import { ChoseLanguageDatilas } from '../../../Components/UseContext/ChoseLanguage'
import ProfileLang from '../../../Language/Profile'
import Styles from '../Style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useSelector } from 'react-redux'

export default function NameScreen(props) {
   const { Language } = useContext(ChoseLanguageDatilas)

   const { navigation } = props

   // user Info
   const TheCheckUserInfo = useSelector((state) => state?.userLogin?.userInfo)
   // console.log('userLogin', TheCheckUserInfo)


   return (<View style={[FontsDefault.Conter, FontsDefault.fontBackgroundColoe]} >


      <KeyboardAwareScrollView extraHeight={400} enableOnAndroid>
         <View style={[FontsDefault.ContainerALLPadding, FontsDefault.fontBackgroundColoe]}>
            <LeftBottom onPress={() => navigation.goBack()} />
            <HeaderScreen Title={ProfileLang.name[Language]} />
         </View>



         <View style={[FontsDefault.Cover, FontsDefault.fontBackgroundColoe]}>
            <View style={FontsDefault.ContainerALLPadding}>

               <Input
                  Title={ProfileLang.firstName[Language]}
                  value={TheCheckUserInfo?.firstname}
               />

               <View style={Styles.border} />

               <Input
                  Title={ProfileLang.lastName[Language]}
                  value={TheCheckUserInfo?.lastname}
               />
            </View>
         </View>




         <View style={[FontsDefault.Cover, FontsDefault.fontBackgroundColoe]}>
            <View style={FontsDefault.ContainerALLPadding}>
               <ButtonScreen Titel={ProfileLang.saveBtn[Language]} />
            </View>
         </View>
      </KeyboardAwareScrollView>
   </View>
   )
}





// 
// 