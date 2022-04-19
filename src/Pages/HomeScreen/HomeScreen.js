import React from 'react'
import { View, ScrollView } from 'react-native'
import Styles from './Styles'
import { dummyProducts } from '../../Assistant/DummyData'
import HeaderLocation from '../../Components/HeaderLocation/HeaderLocation'
import SliderImages from '../../Components/SliderImages/SliderImages'
import CartItems from '../../Components/CartItems/CartItems'
import FontsDefault from '../../Assistant/FontDefault'
export default function HomeScreen({ navigation }) {
   const HandleNavigation = type => {
      if (type > Number(0)) return navigation.navigate('SeeAll')
      if (type > Number(1)) return navigation.navigate('SeeAll')
      if (type > Number(2)) return navigation.navigate('SeeAll')
   }

   return (
      <View style={FontsDefault.containerChildren}>
         <View style={Styles.containerLocation}>
            <HeaderLocation />
         </View>

         <ScrollView showsVerticalScrollIndicator={false}>
            <SliderImages />

            <CartItems
               Tilte="Free Delivery"
               showBtn={true}
               onPress={() => HandleNavigation(1)}
               data={dummyProducts}
               dir={true}
               Form={false}
               navigation={navigation}
            />

            <CartItems
               Tilte="Stors Delivery"
               showBtn={true}
               onPress={() => HandleNavigation(2)}
               data={dummyProducts}
               dir={true}
               Form={false}
               navigation={navigation}
            />

            <CartItems
               Tilte="Category"
               showBtn={true}
               onPress={() => HandleNavigation(3)}
               data={dummyProducts}
               dir={true}
               Form={false}
               forCategory={true}
               navigation={navigation}
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
