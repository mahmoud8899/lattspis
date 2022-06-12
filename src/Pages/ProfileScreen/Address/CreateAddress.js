import React, { Fragment, useState, useContext } from 'react'
import { View, Image, Text } from 'react-native'
import { LeftBottom } from '../../../Components/LeftBottom/LeftBottom'
import HeaderScreen from '../../../Components/Header/Header'
import ButtonScreen from '../../../Components/ButtonScreen/ButtonScreen'
import CreateAddressWrite from './CreateAddressWrite'
import FontsDefault from '../../../Assistant/FontDefault'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Stand } from '../../../Assistant/ProductName'
import { ChoseLanguageDatilas } from '../../../Components/UseContext/ChoseLanguage'
import ProfileLang from '../../../Language/Profile'
import Input from '../../../Components/InputScreen/Input'
import Styles from '../Style'


export default function CreateAddress(props) {
   const { Language } = useContext(ChoseLanguageDatilas)

   const { navigation } = props

   // select city
   const [country, setCountry] = useState('')

   const [nextInput, setNextInput] = useState(false)

   // options
   // [1] : button goback
   //  [2] : header
   //  [3] : select city
   // [4] botton next input

   // this is handle bottom
   const HandleAddaddress = () => {
      // oppen next input
      if (!nextInput) return setNextInput(!nextInput)
   }

   function HandleClose() {


      nextInput ? setNextInput(!nextInput) : navigation.goBack()
   }

   return (
      <View style={[FontsDefault.Conter, FontsDefault.fontBackgroundColoe]}>




         <KeyboardAwareScrollView extraHeight={400} enableOnAndroid>
            <View style={[FontsDefault.ContainerALLPadding, FontsDefault.fontBackgroundColoe]}>
               <LeftBottom onPress={HandleClose} />
               <HeaderScreen Title={ProfileLang.addNewAddressBtn[Language]} />
            </View>

            {!nextInput ?
               <Fragment>


                  <View style={[FontsDefault.Cover, FontsDefault.fontBackgroundColoe]}>
                     <View style={FontsDefault.ContainerALLPadding}>
                        <View style={{ marginBottom: 10 }}>
                           <Input Title='Country' value='Sweden' />
                        </View>
                        <Input
                           Title='Street name and number'
                        />

                     </View>
                  </View>



               </Fragment>
               :
               <CreateAddressWrite setNextInput={setNextInput} />
            }


            <View style={[FontsDefault.Cover, FontsDefault.fontBackgroundColoe]}>
               <View style={FontsDefault.ContainerALLPadding}>
                  <ButtonScreen
                     Titel={ProfileLang.nextBtn[Language]}
                     onPress={HandleAddaddress}
                  />
               </View>
            </View>






         </KeyboardAwareScrollView>
      </View>
   )
}

// {nextInput ? (
//    
// ) : (

// import { Picker } from '@react-native-picker/picker'
// <View>
// <Picker
//    selectedValue={country}
//    onValueChange={(value, index) => setCountry(value)}
//    // mode="dropdown" // Android only
//    style={Styles.picker}
// >
//    {Stand?.map((city, Index) => (
//       <Picker.Item
//          key={Index}
//          label={city.address}
//          value={city.address}
//       />
//    ))}
// </Picker>
// </View>