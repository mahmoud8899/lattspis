import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import styles from './Styles'
import Card from '../Card/Card'
import { useNavigation } from '@react-navigation/native'

function CardsItem({ category }) {
   const navigation = useNavigation()
   return (
      <TouchableOpacity
         style={styles.container}
         onPress={() => navigation.navigate('CategoryScreen')}
      >
         <Card>
            <Image source={{ uri: category.imageUrl }} style={styles.image} />
         </Card>
         <Text title={styles.title}>{category.title}</Text>
      </TouchableOpacity>
   )
}

export default CardsItem
