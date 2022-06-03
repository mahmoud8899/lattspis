import React, { useContext, useEffect } from 'react'
import { View, ScrollView } from 'react-native'
import Styles from './Styles'
import { dummyProducts } from '../../Assistant/DummyData'
import HeaderLocation from '../../Components/HeaderLocation/HeaderLocation'
import SliderImages from '../../Components/SliderImages/SliderImages'
import FontsDefault from '../../Assistant/FontDefault'
import HomeLang from '../../Language/Home'
import { ChoseLanguageDatilas } from '../../Components/UseContext/ChoseLanguage'
import { FlatListComponent, RenderItem, TitleName } from '../../Components/FlatlList/FlatList'
import {
   BestRestaurantAction,
   FatchButik,
   FoodTypesAction,
   FreeDeliveryAction,
   GetCartInfoHomeRestranges
} from '../../Redux/Action/HomeAction'
import { useDispatch, useSelector } from 'react-redux'
import LoadingError from '../../Components/LoadingError/LoadingError'



export default function HomeScreen({ navigation }) {
   const { Language } = useContext(ChoseLanguageDatilas)




   const dispatch = useDispatch()
   const category = true



   // location 
   const location = {
      latitude: Number(59.858131),
      longitude: Number(17.644621)
   }
   // category all 
   const pageHomeCategory = useSelector((state) => state?.pageHomeCategory)
   const { loading: loadingCategory, category: CategoryAll, error: errorCategory } = pageHomeCategory


   // get all restrange and stores....
   const PageHomeRestrange = useSelector((state) => state?.PageHomeRestrange)
   const { loading, error, stores, home } = PageHomeRestrange


   // get free delivery from restrest and stores
   const pageHomeFreeDelivery = useSelector((state) => state?.pageHomeFreeDelivery)
   const { loading: loadingFreedelivery, freedelivery, error: errorFreedelivery } = pageHomeFreeDelivery




   //  free delivery
   useEffect(() => {

      if (location?.latitude) {
         freedelivery?.length === Number(0) && dispatch(FreeDeliveryAction({
            lat: location?.latitude,
            long: location?.longitude
         }))
      }
   }, [
      dispatch,
      freedelivery?.length,
      //   location?.latitude, 
      //   location?.longitude
   ])




   // category
   useEffect(() => {

      CategoryAll.length === Number(0) && dispatch(FoodTypesAction())

   }, [dispatch, CategoryAll.length])


   // get all restrant
   useEffect(() => {
      location?.latitude !== null && location?.longitude !== null && home?.length === Number(0) && dispatch(GetCartInfoHomeRestranges({
         lat: location?.latitude,
         long: location?.longitude,
         productType: 'restaurant'
      }))
   }, [
      dispatch,
      home?.length
   ])


   // get all butiker
   useEffect(() => {
      if (location?.latitude !== null && location?.longitude !== null) {
         stores?.length === Number(0) && dispatch(FatchButik({
            lat: location?.latitude,
            long: location?.longitude,
            productType: 'butiker'

         }))

         return
      }


   }, [dispatch, stores?.length])




   // [1]  LoadingErrorHandld this is check out error and loading if not error coming data  
   // [2]  Limit new restrange max 8 itmes. and Carousel some data
   // [3] : stores 
   // [4] : free category 
   // [5]   class name category ....>   CategoryScreen  
   // [6] driver resgstira 



      // route one product
      function OneProduct(id) {

         return navigation.navigate('Restaurant', { item: id })
      }
   

   // rendem data...
   const ShowData = (option, category) => {


      return <RenderItem
         item={option}
         category={category}
         onPress={() => OneProduct(option?.item?._id)}
      />
   }



   function HomeSeeAll(option) {

      if (option === 'Home') return navigation.navigate('SeeAll', { item: 'Resturant', name: 'restaurant' })
      if (option === 'store') return navigation.navigate('SeeAll', { item: 'store', name: 'store' })
      if (option === 'free') return navigation.navigate('SeeAll', { item: 'free delivery', name: 'free' })
      if (option === 'category') return navigation.navigate('SeeAll', { item: 'category', name: 'category' })



   }

   return (
      <View style={FontsDefault.containerChildren}>

         <View style={Styles.containerLocation}>
            <HeaderLocation navigation={navigation} />
         </View>


         <ScrollView>


            {/* // home resturant */}
            <LoadingError
               loading={loading}
               error={error}
            >
               <TitleName
                  Tilte={HomeLang.Home[Language]}
                  showBtn={true}
                  onPress={() => HomeSeeAll('Home')}

               />

               <FlatListComponent
                  data={home}
                  HandleItem={ShowData}
                  horizontal
               />

            </LoadingError>

            {/* store  */}
            <LoadingError
               loading={loading}
               error={error}
            >
               <TitleName
                  Tilte={HomeLang.storesDelivery[Language]}
                  showBtn={true}
                  onPress={() => HomeSeeAll('store')}

               />

               <FlatListComponent
                  data={stores}
                  HandleItem={ShowData}
                  horizontal
               />

            </LoadingError>


            {/* // free delivery */}
            <LoadingError
               loading={loadingFreedelivery}
               error={errorFreedelivery}
            >
               <TitleName
                  Tilte={HomeLang.freeDelivery[Language]}
                  showBtn={true}
                  onPress={() => HomeSeeAll('free')}
               />

               <FlatListComponent
                  data={freedelivery}
                  HandleItem={ShowData}
                  horizontal
               />

            </LoadingError>





            {/* cateogry  */}
            <LoadingError
               loading={loadingCategory}
               error={errorCategory}
            >
               <TitleName
                  Tilte={HomeLang.category[Language]}
                  showBtn={true}
                  onPress={() => HomeSeeAll('category')}

               />

               <FlatListComponent
                  data={CategoryAll}
                  HandleItem={(item) => ShowData(item, category)}
                  horizontal
                  category


               />

            </LoadingError>



         </ScrollView>




      </View>
   )
}




         //     {/* slider  */}
         //     <LoadingError
         //     loading={loading}
         //     error={error}
         //  >
         //     <SliderImages home={home} />
         //  </LoadingError>










