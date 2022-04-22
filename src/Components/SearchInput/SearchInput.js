import React, { useContext } from 'react'
import { View } from 'react-native'
import Styles from './Styles'
import Icon from 'react-native-vector-icons/Ionicons'
import InputScreen from '../../Components/InputScreen/InputScreen'
import SearchLang from '../../Language/Search'
import { ChoseLanguageDatilas } from '../UseContext/ChoseLanguage'

export default function SearchScreen() {
   const { Language } = useContext(ChoseLanguageDatilas)

   return (
      <View>
         <InputScreen
            StyleContainer={Styles.searchSection}
            StyleInput={Styles.input}
            placeholder={SearchLang.placeholder[Language]}
            IconName={
               <Icon
                  style={Styles.searchIcon}
                  name="ios-search"
                  size={20}
                  color="#000"
               />
            }
         />
      </View>
   )
}

{
   /* <Icon
style={Styles.searchIcon}
name="ios-search"
size={20}
color="#000"
/>
<TextInput
style={Styles.input}
placeholder="Search Near Uppsala"
underlineColorAndroid="transparent"
/> */
}
