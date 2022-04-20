import React from 'react'
import { View} from 'react-native'
import Styles from './Styles'
import Icon from 'react-native-vector-icons/Ionicons'
import InputScreen from '../../Components/InputScreen/InputScreen'
export default function SearchScreen() {
   return (
      <View >
         <InputScreen
            StyleContainer={Styles.searchSection}
            StyleInput={Styles.input}
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



{/* <Icon
style={Styles.searchIcon}
name="ios-search"
size={20}
color="#000"
/>
<TextInput
style={Styles.input}
placeholder="Search Near Uppsala"
underlineColorAndroid="transparent"
/> */}