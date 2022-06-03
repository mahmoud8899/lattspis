import { View, Text, Modal, TouchableOpacity, Image, Fragment } from 'react-native'
import React from 'react'
import Styles from './Styles'
import FontsDefault from '../../Assistant/FontDefault'
import Icon from 'react-native-vector-icons/Ionicons'
import { TheImageCheck } from '../../Assistant/ImageUrl'
import LazyLoading from '../LazyLoading/LazyLoading'
import AddToCart from './AddToCart'



export default function OneProduct(props) {
   const {
      oppenProductCard,
      setOppenProductCard
   } = props



   // close all
   const CloseALL = () => {
      return setOppenProductCard({ value: false, object: '' })
   }




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
               style={[FontsDefault.fontCategory, FontsDefault.FontColor]}
            >
               {oppenProductCard?.object?.prices} Kr
            </Text>
            <Icon
               name="bookmark-outline"
               style={[FontsDefault.iconSize, Styles.colorIcon]}
            />
         </View>

         <View style={Styles.contentParagraph}>
            <Text style={FontsDefault.fontDescription}>
               {oppenProductCard?.object?.description}
            </Text>
         </View>

         <AddToCart  
          productId={oppenProductCard} 
          YourOrderClass
          />


      </View>
   </Modal>


}


