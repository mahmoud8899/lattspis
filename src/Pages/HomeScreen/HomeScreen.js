import React, { useContext } from 'react'
import { View, ScrollView } from 'react-native'
import Styles from './Styles'
import { dummyProducts } from '../../Assistant/DummyData'
import HeaderLocation from '../../Components/HeaderLocation/HeaderLocation'
import SliderImages from '../../Components/SliderImages/SliderImages'
import CartItems from '../../Components/CartItems/CartItems'
import FontsDefault from '../../Assistant/FontDefault'
import HomeLang from '../../Language/Home'
import { ChoseLanguageDatilas } from '../../Components/UseContext/ChoseLanguage'
import MapView from 'react-native-maps'

export default function HomeScreen({ navigation }) {
   const { Language } = useContext(ChoseLanguageDatilas)

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
               Tilte={HomeLang.freeDelivery[Language]}
               showBtn={true}
               onPress={() => HandleNavigation(1)}
               data={dummyProducts}
               dir={true}
               Form={false}
               navigation={navigation}
            />

            <CartItems
               Tilte={HomeLang.storesDelivery[Language]}
               showBtn={true}
               onPress={() => HandleNavigation(2)}
               data={dummyProducts}
               dir={true}
               Form={false}
               navigation={navigation}
            />

            <CartItems
               Tilte={HomeLang.category[Language]}
               showBtn={true}
               onPress={() => HandleNavigation(3)}
               data={dummyProducts}
               dir={true}
               Form={false}
               forCategory={true}
               navigation={navigation}
            />

            <View
               style={{
                  width: 500,
                  height: 500,
                  flex: 1,
               }}
            >
               <MapView
                  style={{ width: '100%', height: '100%' }}
                  initialRegion={{
                     latitude: 37.78825,
                     longitude: -122.4324,
                     latitudeDelta: 0.0922,
                     longitudeDelta: 0.0421,
                  }}
               />
            </View>
         </ScrollView>
      </View>
   )
}

{
   /* <ListStoresDelivering dummyProducts={dummyProducts} />
<TitleCategory title="Free Delivery" navigation={navigation} />
<ListFreeDelivery dummyProducts={} /> */
}
