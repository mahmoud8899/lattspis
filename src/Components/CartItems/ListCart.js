import React from 'react'
import { FlatList } from 'react-native'
import Cart from './Cart'

function ListCart({ dummyProducts, name, Form }) {
   const RenderList = ({ item }, Form) => {
      console.log('in', Form)
      return <Cart data={item} Form={Form} />
   }

   return (
      <FlatList
         data={dummyProducts}
         renderItem={dummyProducts => RenderList(dummyProducts, Form)}
         horizontal={name}
         showsHorizontalScrollIndicator={false}
         showsVerticalScrollIndicator={false}
      />
   )
}

export default ListCart
