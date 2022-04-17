import React from 'react'
import { FlatList, View } from 'react-native'
import Cart from './Cart'
import Styles from './Style'

<<<<<<< HEAD
function ListCart({ dummyProducts, dir, Form, forCategory }) {
   const RenderList = ({ item }, Form) => {
      return <Cart data={item} Form={Form} forCategory={forCategory} />
=======

function ListCard({ dummyProducts, name, Form }) {




   const RenderList = ({ item,  },Form) => {

      //  console.log('in',Form)
      return <Cart data={item} Form={Form} />
>>>>>>> 99a5a1876a2af1797147f20b51ab2cb0002ec413
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
