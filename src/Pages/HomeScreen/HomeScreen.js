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
      if (type > Number(2)) return navigation.navigate('SeeAll')
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
               dir={true}
               Form={false}
            />

            <CartItems
               Tilte="Stors Delivery"
               onPress={() => HandleNavigation(2)}
               data={dummyProducts}
               dir={true}
               Form={false}
            />

            <CartItems
               Tilte="Category"
               onPress={() => HandleNavigation(3)}
               data={dummyProducts}
               dir={true}
               Form={false}
               forCategory={true}
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
