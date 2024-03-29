import React from 'react'
import { FlatList } from 'react-native'
import Cart from './Cart'

function ListCart({
   dummyProducts,
   dir,
   Form,
   forCategory,
   showMin,
   navigation,
}) {
   const RenderList = ({ item }, Form) => {
      return (
         <Cart
            data={item}
            Form={Form}
            forCategory={forCategory}
            showMin={showMin}
            navigation={navigation}
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
