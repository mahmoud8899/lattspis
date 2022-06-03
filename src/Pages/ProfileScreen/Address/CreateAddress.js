import React, { Fragment, useState, useContext } from 'react'
import { View } from 'react-native'
import Styles from '../Style'
import { LeftBottom } from '../../../Components/LeftBottom/LeftBottom'
import HeaderScreen from '../../../Components/Header/Header'
import ButtonScreen from '../../../Components/ButtonScreen/ButtonScreen'
import { Picker } from '@react-native-picker/picker'
import CreateAddressWrite from './CreateAddressWrite'
import FontsDefault from '../../../Assistant/FontDefault'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Stand } from '../../../Assistant/ProductName'
import { ChoseLanguageDatilas } from '../../../Components/UseContext/ChoseLanguage'
import ProfileLang from '../../../Language/Profile'
import LazyLoading from '../../../Components/LazyLoading/LazyLoading'

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

   return (
      <View style={FontsDefault.containerChildren}>
         <KeyboardAwareScrollView extraHeight={120} enableOnAndroid>
            {nextInput ? (
               <CreateAddressWrite setNextInput={setNextInput} />
            ) : (
               <Fragment>
                  <LeftBottom onPress={() => navigation.goBack()} />

                  <HeaderScreen
                     Title={ProfileLang.addNewAddressBtn[Language]}
                  />
                  <View>
                     <Picker
                        selectedValue={country}
                        onValueChange={(value, index) => setCountry(value)}
                        // mode="dropdown" // Android only
                        style={Styles.picker}
                     >
                        {Stand?.map((city, Index) => (
                           <Picker.Item
                              key={Index}
                              label={city.address}
                              value={city.address}
                           />
                        ))}
                     </Picker>
                  </View>

                  <View style={FontsDefault.containerImage}>
                     {/* <LazyLoading
                        style={FontsDefault.containerImageChildren}
                        image={require('../../../../data/myimage/add.png')}
                     /> */}
                  </View>
               </Fragment>
            )}
         </KeyboardAwareScrollView>

         <View style={Styles.ButtomClick}>
            <ButtonScreen
               Titel={ProfileLang.nextBtn[Language]}
               onPress={HandleAddaddress}
            />
         </View>
      </View>
   )
}
