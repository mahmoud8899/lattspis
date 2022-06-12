import { View, Text, Modal, TouchableOpacity } from 'react-native'
import FontsDefault from '../../Assistant/FontDefault'
import Icon from 'react-native-vector-icons/Ionicons'
import { TheImageCheck } from '../../Assistant/ImageUrl'
import LazyLoading from '../LazyLoading/LazyLoading'
import { ScrollView } from 'react-native-virtualized-view'
import Styles from './Styles'
import AddToCart from './AddToCart'
import React from 'react'



export default function OneProduct(props) {
   // params oppen and data and close one product....
   const { oppenProductCard, setOppenProductCard ,FixData } = props


   // close all
   const CloseALL = () => {
      // setIdProduct('')
      // setMapsFil('')
      return setOppenProductCard({ value: false, object: '' })
   }








   // options 
   // [1] -- first option close model
   // [2] -- AddToCart this is add to card...



   return oppenProductCard?.value && <Modal
      animationType="slide"
      onRequestClose={CloseALL}
      visible={oppenProductCard?.value}
      transparent={true}
   >
      <TouchableOpacity
         style={FontsDefault.FirstContainerForModal}
         onPress={CloseALL}
      ></TouchableOpacity>
      <View style={{ position: 'relative', borderRadius: 30 }}>

         <LazyLoading
            image={TheImageCheck(oppenProductCard?.object?.image)}
            style={Styles.styleImage}
         />

         <TouchableOpacity style={Styles.route} onPress={CloseALL}>
            <Icon name="close-outline" style={Styles.ICON} />
         </TouchableOpacity>
      </View>
      <View style={Styles.LastContainer}>
         <Text
            style={[FontsDefault.TitleFont, FontsDefault.fontColorBlack]}
         >
            {oppenProductCard?.object?.name}
         </Text>
         <View style={Styles.containerPrice}>
            <Text
               style={
               [FontsDefault.fontButtonCart,
                  FontsDefault.FontsColorall
               ]
               
               }
            >
               {oppenProductCard?.object?.prices} Kr
            </Text>
            <Icon
               name="bookmark-outline"
               style={[FontsDefault.iconSize, Styles.colorIcon]}
            />
         </View>

         <ScrollView>
            <View style={Styles.contentParagraph}>
               <Text style={FontsDefault.fontDescription}>
                  {oppenProductCard?.object?.description}
               </Text>
            </View>
         </ScrollView>

         <View style={Styles.bottomcard} >
            <AddToCart
               productId={oppenProductCard}
               YourOrderClass
               FixData={FixData}

            />
         </View>


      </View>
   </Modal>


}


