import React from 'react'
import { View, Text } from 'react-native'
import Styles from '../Styles'
import { LeftBottom } from '../../../Components/LeftBottom/LeftBottom'
import CartItems from '../../../Components/CartItems/CartItems'
import { dummyProducts } from '../../../Assistant/DummyData'
import HeaderLocation from '../../../Components/HeaderLocation/HeaderLocation'
import FilterIcon from '../../../Components/FilterIcon/FilterIcon'
import MapIcon from '../../../Components/MapIcon/MapIcon'
import FontsDefault from '../../../Assistant/FontDefault'
import { FlatListComponent, RenderItem, OtherFlatList } from '../../../Components/FlatlList/FlatList'
import ExtraStyle from '../../../Components/FlatlList/ExtraStyle'
import CategoryScreen from '../../CategoryScreen/CategoryScreen'
export default function SeeAllScreen(props) {
   const { navigation, route } = props

   // testing console console.log(navigation.goBack)

   const TheParams = route.params.item

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
            <CategoryScreen TheParams={TheParams} />
            :
            <FlatListComponent
               data={dummyProducts}
               HandleItem={ShowData}


            />
         }



      </View>
   )
}
