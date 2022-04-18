import React from 'react'
import { FlatList, View } from 'react-native'
import Cart from './Cart'
import Styles from './Style'

function ListCart({ dummyProducts, dir, Form, forCategory, showMin }) {
   const RenderList = ({ item }, Form) => {
      return (
         <Cart
            data={item}
            Form={Form}
            forCategory={forCategory}
            showMin={showMin}
         />
      )
   }

   return (
      <FlatList
         data={dummyProducts}
         renderItem={dummyProducts => RenderList(dummyProducts, Form)}
         horizontal={dir}
         showsHorizontalScrollIndicator={false}
         showsVerticalScrollIndicator={false}
      />
   )
}

export default ListCart
