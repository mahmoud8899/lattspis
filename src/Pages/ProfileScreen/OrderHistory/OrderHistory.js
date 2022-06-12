import { Image, ScrollView, Text, View } from 'react-native'
import React, { Fragment, useState, useContext } from 'react'
import { LeftBottom } from '../../../Components/LeftBottom/LeftBottom'
import ButtonScreen from '../../../Components/ButtonScreen/ButtonScreen'
import ShowOrdersUser from './ShowOrders'
import FontsDefault from '../../../Assistant/FontDefault'
import { ChoseLanguageDatilas } from '../../../Components/UseContext/ChoseLanguage'
import ProfileLang from '../../../Language/Profile'
import Styles from '../Style'


export default function OrderHistory(props) {
   const { Language } = useContext(ChoseLanguageDatilas)

   const { navigation } = props

   // option
   const [order, setOrder] = useState(true)

   // this is navigation Home
   function HandelHome() {
      return navigation.navigate('Discovery')
   }

   // [1] no orders has image nd navigation Home.
   // [2] show orders screen ShowOrdersUser

   return (
      <Fragment>

         <View style={[FontsDefault.ContainerALLPadding,FontsDefault.fontBackgroundColoe]}>
            <LeftBottom   onPress={() => navigation.goBack()} Tilte={ProfileLang.orderHistory[Language]} />
         </View>

         <ScrollView>
         <View style={[FontsDefault.Cover,FontsDefault.fontBackgroundColoe]}>
            <View style={FontsDefault.ContainerALLPadding}>

            {order ? (
               <ShowOrdersUser navigation={navigation} />
            ) : (
               <Fragment>
                  <View style={[  Styles.marginTop, FontsDefault.containerImage,  Styles.marginTopStor,]}>
                     <Image  style={FontsDefault.containerImageChildren}  source={require('../../../../data/myimage/order.png')} />
                  </View>

                  <View>
                     <Text
                        style={[
                           FontsDefault.TitleFont,
                           FontsDefault.FontColor,
                           Styles.center,
                           Styles.marginTop,
                        ]}
                     >
                        {ProfileLang.noOrders[Language]}
                     </Text>
                  </View>

                  <View style={Styles.ButtomClick}>
                     <ButtonScreen
                        Titel={ProfileLang.browseRestaurants[Language]}
                        onPress={HandelHome}
                     />
                  </View>
               </Fragment>
            )}

         </View>
         </View>
         </ScrollView>



      </Fragment>
   )
}
