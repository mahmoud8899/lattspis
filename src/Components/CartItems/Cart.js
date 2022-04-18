import React from 'react'
import { View, Image, Text, Platform } from 'react-native'
import Styles from './Style'
import Icon from 'react-native-vector-icons/Ionicons'
import FontsDefault from '../../Assistant/FontDefault'
import { Fragment } from 'react/cjs/react.production.min'
import RatingScreen from '../RatingScreen/RatingScreen'

const StyleIOS = Platform.OS === 'android' ? Styles.shadowIOS : Styles.shadowIOS

function Cart({ data, Form, forCategory }) {
   return (
      <View
         style={
            Form
               ? [
                    Styles.cardsContainer,
                    Styles.cardShadow,
                    Styles.width,
                    StyleIOS,
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
            {!forCategory && (
               <Fragment>
                  <View style={Styles.dashedView}></View>
                  <View style={Styles.iconRunContainer}>
                     <View style={Styles.SEKContainer}>
                        <Icon name="bicycle-outline" style={Styles.iconRun} />
                        <Text style={Styles.TextColor}>SEK{data.SEKNum}</Text>
                        <RatingScreen value="2" />
                     </View>
                     <Text style={Styles.TextColor}>{data.MINNUM}min</Text>
                  </View>
               </Fragment>
            )}
         </View>
      </View>
   )
}

export default Cart
