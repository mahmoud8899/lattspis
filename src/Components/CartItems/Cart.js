import React from 'react'
import { View, Image, Text } from 'react-native'
import Styles from './Style'
import Icon from 'react-native-vector-icons/Ionicons'
import FontsDefault from '../../Assistant/FontDefault'

function Cart({ data, Form }) {
   return (
      <View
         style={
            Form
               ? [
                    Styles.cardsContainer,
                    Styles.cardShadow,
                    Styles.width,
                    Styles.heightContainer,
                 ]
               : [Styles.cardsContainer, Styles.cardShadow]
         }
      >
         <Image
            source={{ uri: data.imageUrl }}
            style={
               Form
                  ? [Styles.imageCard, Styles.imageHeight]
                  : [Styles.imageCard]
            }
         />
         <View style={Styles.contentContainer}>
            <Text style={FontsDefault.FontNameCart}>{data.title}</Text>
            <Text style={FontsDefault.fontDescription}>{data.description}</Text>
            <View style={Styles.dashedView}></View>
            <View style={Styles.iconRunContainer}>
               <View style={Styles.SEKContainer}>
                  <Icon name="bicycle-outline" style={Styles.iconRun} />
                  <Text style={Styles.TextColor}>SEK{data.SEKNum}</Text>
               </View>
               <Text style={Styles.TextColor}>{data.MINNUM}min</Text>
            </View>
         </View>
      </View>
   )
}

export default Cart
