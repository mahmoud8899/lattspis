import React, { useContext } from 'react'
import { View, ScrollView } from 'react-native'
import Styles from './Styles'
import { dummyProducts } from '../../Assistant/DummyData'
import HeaderLocation from '../../Components/HeaderLocation/HeaderLocation'
import SliderImages from '../../Components/SliderImages/SliderImages'
import FontsDefault from '../../Assistant/FontDefault'
import HomeLang from '../../Language/Home'
import { ChoseLanguageDatilas } from '../../Components/UseContext/ChoseLanguage'
import { FlatListComponent, RenderItem, TitleName } from '../../Components/FlatlList/FlatList'



export default function HomeScreen({ navigation }) {
   const { Language } = useContext(ChoseLanguageDatilas)

     // rendem data...
   const ShowData = (option, category) => {
      return <RenderItem
         item={option}
         category={category}

      />
   }





   const category = true

   return (
      <View style={FontsDefault.containerChildren}>

         <View style={Styles.containerLocation}>
            <HeaderLocation navigation={navigation} />
         </View>


         <ScrollView>
            <SliderImages />



            <TitleName
               Tilte={HomeLang.freeDelivery[Language]}
               showBtn={true}
               onPress={()=>navigation.navigate('SeeAll', {item : 'Free Delivery'})}
               
            />

            <FlatListComponent
               data={dummyProducts}
               HandleItem={ShowData}
               horizontal
            />


            <TitleName
               Tilte={HomeLang.storesDelivery[Language]}
               showBtn={true}
            />

            <FlatListComponent
               data={dummyProducts}
               HandleItem={ShowData}
               horizontal
            />


            <TitleName
               Tilte={HomeLang.category[Language]}
               showBtn={true}
               onPress={()=> navigation.navigate('SeeAll', {item : 'category'})}
            />

            <FlatListComponent
               data={dummyProducts}
               HandleItem={(item) => ShowData(item, category)}
               horizontal
               category


            />


         </ScrollView>




      </View>
   )
}








