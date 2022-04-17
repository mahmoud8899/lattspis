import React from 'react'
import { View, ScrollView } from 'react-native'
import Styles from './Styles'
import { dummyProducts } from '../../Assistant/DummyData'
import HeaderLocation from '../../Components/HeaderLocation/HeaderLocation'
import SliderImages from '../../Components/SliderImages/SliderImages'
import CartItems from '../../Components/CartItems/CartItems'

export default function HomeScreen({ navigation }) {
   const HandleNavigation = type => {
      if (type > Number(0)) return navigation.navigate('SeeAll')
      if (type > Number(1)) return navigation.navigate('SeeAll')
   }

   return (
      <View style={Styles.containerChildren}>
         <HeaderLocation />

         <ScrollView showsVerticalScrollIndicator={false}>
            <SliderImages />

            <CartItems
               Tilte="Free Delivery"
               onPress={() => HandleNavigation(1)}
               data={dummyProducts}
               name={true}
               Form={false}
            />

            <CartItems
               Tilte="Stors Delivery"
               onPress={() => HandleNavigation(2)}
               data={dummyProducts}
               name={true}
               Form={false}
            />
         </ScrollView>
      </View>
   )
}

{
   /* <ListStoresDelivering dummyProducts={dummyProducts} />
<TitleCategory title="Free Delivery" navigation={navigation} />
<ListFreeDelivery dummyProducts={} /> */
}
