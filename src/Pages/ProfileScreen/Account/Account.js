import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Styles from '../Style'
import { LeftBottom } from '../../../Components/LeftBottom/LeftBottom'
import ButtonScreen from '../../../Components/ButtonScreen/ButtonScreen'
import FontsDefault from '../../../Assistant/FontDefault'

export default function AccountUser(props) {
   const { navigation } = props

   // testing console console.log(navigation.goBack)

   // this is bottom callback
   const OnClickButtom = () => {
      return navigation.goBack()
   }

   return (
      <View style={FontsDefault.containerChildren}>
         <LeftBottom onPress={OnClickButtom} Tilte='Account' />

      
        <View style={Styles.marginTopStor}>

        <TouchableOpacity
            style={[Styles.JustCenter, Styles.PaddingBorder, Styles.marginTopStor]}
            onPress={() => navigation.navigate('NameScreen')}
         >
            <View>
               <Text style={[Styles.fontOne, Styles.exstra]}>name</Text>
            </View>

            <View>
               <Icon name="chevron-forward-outline" style={[FontsDefault.IconsLeft,FontsDefault.FontColor]}  />
            </View>
         </TouchableOpacity>

         <View style={Styles.ButtomLine} />

         <TouchableOpacity
            style={[Styles.JustCenter, Styles.PaddingBorder]}
            onPress={() => navigation.navigate('MobileNumber')}
         >
            <View>
               <Text style={[Styles.fontOne, Styles.exstra]}>
                  mobile number
               </Text>
            </View>

            <View>
               <Icon name="chevron-forward-outline" style={[FontsDefault.IconsLeft,FontsDefault.FontColor]}  />
            </View>
         </TouchableOpacity>

         <View style={Styles.ButtomLine} />
        </View>


         <View style={Styles.ButtomClick}>
            <ButtonScreen Titel="log out" />
         </View>
      </View>
   )
}
