import React from 'react'
import { FlatList } from 'react-native'
import CardsStoresDelivering from '../CardsStoresDelivering/CardsStoresDelivering'

function ListStoresDelivering({ dummyProducts }) {
   const renderStoresDelivering = ({ item }) => {
      return <CardsStoresDelivering data={item} />
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