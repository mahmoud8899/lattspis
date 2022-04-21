import { Modal, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import COLORS from '../../Assistant/Color'
import { ProductName } from '../../Assistant/ProductName'
import ButtonScreen from '../ButtonScreen/ButtonScreen'
import { ChoseLanguageDatilas } from '../UseContext/ChoseLanguage'
import ProfileLang from '../../Language/Profile'

export default function DeletionAlert(props) {
   const { Language } = useContext(ChoseLanguageDatilas)

   const { setCloseShow, closeShow } = props

   return (
      <Modal
         animationType="slide"
         onRequestClose={() => setCloseShow(!closeShow)}
         visible={closeShow}
         transparent={true}
      >
         <View style={Styles.modal}>
            <View style={Styles.background}>
               <View style={Styles.removeText}>
                  <Text style={Styles.Font}>{ProductName}</Text>
               </View>

               <View style={Styles.button}>
                  <ButtonScreen
                     Titel={ProfileLang.editAddressBtn[Language]}
                     style={Styles.flex}
                  />
               </View>

               <View style={Styles.button}>
                  <ButtonScreen
                     Titel={ProfileLang.removeBtn[Language]}
                     style={Styles.flex}
                  />
               </View>
               <View style={Styles.button}>
                  <ButtonScreen
                     Titel={ProfileLang.cancelBtn[Language]}
                     onPress={() => setCloseShow(!closeShow)}
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
   },

   removeText: {
      alignItems: 'center',
      marginBottom: '40@s',
   },
   Font: {
      fontSize: '30@s',
      fontWeight: 'bold',
   },
   background: {
      backgroundColor: COLORS.find,
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
