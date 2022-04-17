import React from 'react'
import { View, Image, Text } from 'react-native'
import Styles from './Styles'
import Icon from 'react-native-vector-icons/Ionicons'

function CardsStoresDelivering({ data }) {
   return (
      <View style={[Styles.cardsContainer, Styles.cardShadow]}>
         <Image source={{ uri: data.imageUrl }} style={Styles.imageCard} />
         <View style={Styles.contentContainer}>
            <Text style={Styles.textTitle}>{data.title}</Text>
            <Text style={Styles.textDescription}>{data.description}</Text>
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

export default CardsStoresDelivering