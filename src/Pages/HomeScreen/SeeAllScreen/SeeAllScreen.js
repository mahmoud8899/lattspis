import { LeftBottom } from '../../../Components/LeftBottom/LeftBottom'
import HeaderLocation from '../../../Components/HeaderLocation/HeaderLocation'
import FilterIcon from '../../../Components/FilterIcon/FilterIcon'
import MapIcon from '../../../Components/MapIcon/MapIcon'
import FontsDefault from '../../../Assistant/FontDefault'
import { FlatListComponent, RenderItem } from '../../../Components/FlatlList/FlatList'
import CategoryScreen from '../../CategoryScreen/CategoryScreen'
import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import Styles from '../Styles'
import { useDispatch, useSelector } from 'react-redux'
import { FreeDeliveryAction, GetCartInfoHomeRestranges } from '../../../Redux/Action/HomeAction'
import LoadingError from '../../../Components/LoadingError/LoadingError'


export default function SeeAllScreen(props) {
   const { navigation, route } = props

   // testing console console.log(navigation.goBack)

   const TheParams = route.params.item

   const TheRqurest = route.params.name

   console.log('TheRqurest', TheRqurest)


   const dispatch = useDispatch()
   // location 
   const location = {
      latitude: Number(59.858131),
      longitude: Number(17.644621)
   }

   // get all restrange and stores....
   const PageHomeRestrange = useSelector((state) => state?.PageHomeRestrange)
   const { loading, error, stores, home } = PageHomeRestrange

   // get free delivery from restrest and stores
   const pageHomeFreeDelivery = useSelector((state) => state?.pageHomeFreeDelivery)
   const { loading: loadingFreedelivery, freedelivery, error: errorFreedelivery } = pageHomeFreeDelivery


   // category all 
   const pageHomeCategory = useSelector((state) => state?.pageHomeCategory)
   const { loading: loadingCategory, category: CategoryAll, error: errorCategory } = pageHomeCategory


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
   // category
   useEffect(() => {

      CategoryAll.length === Number(0) && dispatch(FoodTypesAction())

   }, [dispatch, CategoryAll.length])
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



   
   // this is bottom callback
   const OnClickButton = () => {
      return navigation.goBack()
   }








   // render data
   const ShowData = (option, TheParams) => {
      return <RenderItem
         item={option}
         category={TheParams}
         FullScrren

      />

   }

   return (
      <View style={FontsDefault.containerChildren}>

         <View style={Styles.containerHeaderLocation}>

            <View style={Styles.location}>
               <LeftBottom onPress={OnClickButton} />
               <HeaderLocation notImageMas />
            </View>


            <View style={Styles.filter}>
               <View style={{ marginLeft: 10 }}>
                  <FilterIcon />
               </View>

               <MapIcon />

            </View>

         </View>



         <View>
            <Text style={FontsDefault.TitleFont} >{TheParams}</Text>
         </View>

         {TheParams === 'category' ?
            <CategoryScreen
               TheParams={TheParams}
               Home={CategoryAll}

            />
            :
            <LoadingError loading={loading}>
               <FlatListComponent
                  data={
                     TheRqurest === 'restaurant' && home ||
                     TheRqurest === 'store' && stores ||
                     TheRqurest === 'free' && freedelivery
                  }
                  HandleItem={ShowData}
               />
            </LoadingError>

         }



      </View>
   )
}
