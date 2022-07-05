import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { LeftBottom } from '../../../Components/LeftBottom/LeftBottom'
import ButtonScreen from '../../../Components/ButtonScreen/ButtonScreen'
import FontsDefault from '../../../Assistant/FontDefault'
import { ChoseLanguageDatilas } from '../../../Components/UseContext/ChoseLanguage'
import { SliceName, SliceNameNot } from '../../../Assistant/Slice'
import React, { useContext, useEffect } from 'react'
import ProfileLang from '../../../Language/Profile'
import { useSelector, useDispatch } from 'react-redux'
import Styles from '../Style'
import { Action_logout } from '../../../Redux/Action/AuthAction'


export default function AccountUser(props) {
   const { Language } = useContext(ChoseLanguageDatilas)
   const { navigation } = props

   const dispatch = useDispatch()

   // user Info
   const TheCheckUserInfo = useSelector((state) => state?.userLogin?.userInfo)








   // this is bottom callback
   const OnClickButtom = () => {
      return navigation.goBack()
   }



   // logo ut 
   function LogoUt() {
      // dispatch(Action_logout())
      navigation.navigate('LoginScreen')

   }

   return (
      <ScrollView contentContainerStyle={{ flex: 1 }} >

         <View style={[FontsDefault.ContainerALLPadding, FontsDefault.fontBackgroundColoe]}>
            <LeftBottom
               onPress={OnClickButtom}
               Tilte={ProfileLang.account[Language]}
            />
         </View>


         <View style={[FontsDefault.Cover, FontsDefault.fontBackgroundColoe]}>
            <View style={FontsDefault.ContainerALLPadding}>

               <TouchableOpacity style={[Styles.JustCenter]}
                  onPress={() => navigation.navigate('NameScreen')}
               >
                  <View>
                     <Text style={[FontsDefault.iconSize, Styles.exstra]}>
                        {ProfileLang.name[Language]}

                     </Text>
                     <Text style={[FontsDefault.fontDescription, FontsDefault.fontColorBlack]}>
                        {SliceNameNot(TheCheckUserInfo?.firstname, 10)} {SliceName(TheCheckUserInfo?.lastname, 20)}
                     </Text>

                  </View>

                  <View>
                     <Icon
                        name="chevron-forward-outline"
                        style={[FontsDefault.IconsLeft, FontsDefault.FontColor]}
                     />
                  </View>


               </TouchableOpacity>

               <View style={Styles.ButtomLine} />


               <TouchableOpacity
                  style={[Styles.JustCenter, Styles.PaddingBorder]}
                  onPress={() => navigation.navigate('MobileNumber')}
               >
                  <View>
                     <Text style={[FontsDefault.iconSize, Styles.exstra]}>
                        {ProfileLang.mobileNumber[Language]}
                     </Text>
                     <Text style={[FontsDefault.fontDescription, FontsDefault.fontColorBlack]}>
                        +46{TheCheckUserInfo?.telephone}
                     </Text>
                  </View>

                  <View>
                     <Icon
                        name="chevron-forward-outline"
                        style={[FontsDefault.IconsLeft, FontsDefault.FontColor]}
                     />
                  </View>
               </TouchableOpacity>
               <View style={Styles.ButtomLine} />




            </View>
         </View>

         <View style={[FontsDefault.Cover, FontsDefault.fontBackgroundColoe]}>
            <View style={FontsDefault.ContainerALLPadding}>
               <ButtonScreen
                  Titel={ProfileLang.logoutBtn[Language]}
                  onPress={LogoUt}
               />
            </View>
         </View>




      </ScrollView>
   )
}


