import React from 'react'
import { FlatList } from 'react-native'
import CardsFreeDelivery from './CardsFreeDelivery/CardsFreeDelivery'

function ListStoresDelivering({ dummyProducts }) {
   const renderStoresDelivering = ({ item }) => {
      return <CardsFreeDelivery data={item} />
   }

   return (
      <FlatList
         data={dummyProducts}
         renderItem={renderStoresDelivering}
         horizontal={true}
         showsHorizontalScrollIndicator={false}
      />
   )
}

export default ListStoresDelivering
