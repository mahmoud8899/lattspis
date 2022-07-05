import { Modal, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import COLORS from '../../Assistant/Color'
import { ProductName } from '../../Assistant/ProductName'
import ButtonScreen from '../ButtonScreen/ButtonScreen'
import { ChoseLanguageDatilas } from '../UseContext/ChoseLanguage'
import ProfileLang from '../../Language/Profile'
import { RemoveOneAddress } from '../../Redux/Action/AuthAction'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

export default function DeletionAlert(props) {
   const { Language } = useContext(ChoseLanguageDatilas)

   const { setCloseShow, closeShow } = props


   const navigation = useNavigation()

   const dispatch = useDispatch()

   // console.log('closeShow', closeShow)

   // close 
   function TheClose() {
      setCloseShow({ value: false, object: '' })
   }


   // remove one address
   function RemoveAddress() {

      dispatch(RemoveOneAddress(closeShow?.object?.address))
      TheClose()
   }

   // edit Address 
   function EditAddress() {

      // console.log('add address...')
      navigation.navigate('CreateAddress', {
         params: closeShow?.object
      })
      TheClose()
   }
   return (
      <Modal
         animationType="slide"
         onRequestClose={() => setCloseShow({ value: false, object: '' })}
         visible={closeShow?.value}
         transparent={true}
      >
         <View style={Styles.modal}>
            <View style={Styles.background}>
               <View style={{ padding: 20 }}>
                  <View
                     style={Styles.INNE}
                  >
                     <Text style={Styles.Font}>{ProductName}</Text>
                  </View>

               </View>

               <View style={Styles.button}>
                  <ButtonScreen
                     Titel={ProfileLang.editAddressBtn[Language]}
                     style={Styles.flex}
                     onPress={EditAddress}
                  />
               </View>

               <View style={Styles.button}>
                  <ButtonScreen
                     Titel={ProfileLang.removeBtn[Language]}
                     style={Styles.flex}
                     onPress={RemoveAddress}
                  />
               </View>
               <View style={Styles.button}>
                  <ButtonScreen
                     Titel={ProfileLang.cancelBtn[Language]}
                     onPress={TheClose}
                     styleTouch={Styles.backgroun}
                  />
               </View>
            </View>
         </View>
      </Modal>
   )
}

const Styles = ScaledSheet.create({
   backgroun: {
      backgroundColor: COLORS.notClick,
      justifyContent: 'center',
      alignItems: 'center',
      height: '56@s',
      borderRadius: '4@s',
   },

   modal: {
      padding: '100@s',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.backgroundColor
   },

   INNE: {
      backgroundColor: COLORS.firstRed,
      padding: 10,
      borderRadius: 40
   },
   Font: {
      fontSize: '30@s',
      fontWeight: 'bold',
      color: COLORS.white,
      textAlign: 'center'

   },
   background: {
      backgroundColor: COLORS.white,
      width: '280@s',

      borderRadius: '5@s',
      padding: '10@s',
   },
   button: {
      marginTop: '4@s',
      flexDirection: 'column',
   },
   flex: {
      backgroundColor: COLORS.notClick,
      height: '40@s',
      alignItems: 'center',
      marginBottom: '5@s',
      borderRadius: '5@s',
      justifyContent: 'center',
   },
})
