import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import FilterIcon from '../../Components/FilterIcon/FilterIcon'
import HeaderLocation from '../../Components/HeaderLocation/HeaderLocation'
import MapIcon from '../../Components/MapIcon/MapIcon'
import FontsDefault from '../../Assistant/FontDefault'
import { RenderItem, FlatListComponent } from '../../Components/FlatlList/FlatList'
import { GetCartInfoHomeRestranges } from '../../Redux/Action/HomeAction'
import { useDispatch, useSelector } from 'react-redux'
import Styles from './Styles'


export default function RestaurantScreen(props) {

   const {navigation} = props

   const dispatch = useDispatch()
   // get all restrange and stores....
   const PageHomeRestrange = useSelector((state) => state?.PageHomeRestrange)
   const { loading, error, stores, home } = PageHomeRestrange
   // location 
   const location = {
      latitude: Number(59.858131),
      longitude: Number(17.644621)
   }


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



   // fetch data 
   function onEndReached() {
      return dispatch(GetCartInfoHomeRestranges({
         lat: location?.latitude,
         long: location?.longitude,
         productType: 'restaurant'
      }))
   }



   // route one product
   function OneProduct(id) {

      return navigation.navigate('Restaurant', { item: id })
   }

   // rendem data...
   const ShowData = (option) => {


      return <RenderItem
         item={option}
         FullScrren
         onPress={() => OneProduct(option?.item?._id)}
      />
   }

   return (
      <View style={FontsDefault.containerChildren}>
         <View style={Styles.contentLocation}>
            <HeaderLocation />
            <View style={Styles.containerRightIcons}>
               <FilterIcon />
               <MapIcon />
            </View>
         </View>

         <View style={{ marginBottom: 20, marginTop: 10 }}>
            <Text style={FontsDefault.TitleFont} >Restaurants</Text>
         </View>


         <FlatListComponent
            data={home}
            HandleItem={ShowData}
            onEndReached={onEndReached}
         />

      </View>
   )
}
