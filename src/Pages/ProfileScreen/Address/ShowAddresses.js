import { TouchableOpacity, Text, View, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FontsDefault from '../../../Assistant/FontDefault'
import { SelectIcon } from '../../../Assistant/Selection'
import DeletionAlert from '../../../Components/DeletionAlert/DeletionAlert'
import { useSelector } from 'react-redux'
import Styles from '../Style'
import React, { useState } from 'react'

export default function ShowAddresses(props) {


   // theck addres 
   const theCheckAddress = useSelector((state) => state?.locateAddress?.myAddressLocal)



   // remove Address
   const [classOppenRemoveAddress, setClassOppenRemoveAddress] = useState({ value: false, object: '' })



   console.log('theCheckAddress', theCheckAddress)


   // oppen remove or edit address...
   function ShowStateAddress(data) {
      setClassOppenRemoveAddress({
         value: true,
         object: data
      })

   }


   // console.log('classOppenRemoveAddress', classOppenRemoveAddress)

   // options 
   //[1] SHOW address
   // [2] remove address or edit....


   return <>

   <ScrollView   >
   {theCheckAddress?.map((item, Index) => (
         <TouchableOpacity
            key={Index}
            style={Styles.marginTop}
            onPress={() => ShowStateAddress(item)}
         >
         
            <View style={Styles.address} >
               <View>
                  <Icon name={SelectIcon(item?.work)} style={[FontsDefault.IconsLeft, FontsDefault.FontColor]} />
               </View>
               <View style={Styles.addressText}>
                  <Text style={item?.firstAddress === true ?
                   [FontsDefault.iconSize, Styles.exstra, FontsDefault.FontColor]:
                     
                     [FontsDefault.iconSize, Styles.exstra]}>
                     {item?.city}
                  </Text>
                  <Text style={FontsDefault.fontDescription}>{item?.address}, {item?.zipcode}</Text>
               </View>

               <View style={Styles.removeScreen}>
                  <Icon name="ellipsis-horizontal-outline" style={Styles.iconremove} />
               </View>
            </View>
         </TouchableOpacity>


      )).sort().reverse()}
   </ScrollView>


      {classOppenRemoveAddress?.value ?
         <DeletionAlert
            closeShow={classOppenRemoveAddress}
            setCloseShow={setClassOppenRemoveAddress}
         />
         : null

      }



   </>



}
