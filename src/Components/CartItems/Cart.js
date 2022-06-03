import React from 'react'
import { View,  Text, Platform, TouchableOpacity,Fragment } from 'react-native'
import Styles from './Style'
import Icon from 'react-native-vector-icons/Ionicons'
import FontsDefault from '../../Assistant/FontDefault'
import RatingScreen from '../RatingScreen/RatingScreen'
import LazyLoading from '../LazyLoading/LazyLoading'
const StyleIOS = Platform.OS === 'android' ? Styles.shadowIOS : Styles.shadowIOS

function Cart({ data, Form, forCategory, showMin, navigation }) {
   const handleNavigate = () => {
      if (!forCategory) {
         navigation.navigate('Restaurant')
      }
   }

   return (
      <TouchableOpacity
         onPress={handleNavigate}
         style={
            Form
               ? [
                    Styles.cardsContainer,
                    Styles.cardShadow,
                    Styles.width,
                    StyleIOS,
                 ]
               : [Styles.cardsContainer, Styles.cardShadow]
         }
      >
         <View>
            <View>
            
               <LazyLoading
                  image={data.imageUrl}
                  style={
                     Form
                        ? [Styles.imageCard, Styles.imageHeight]
                        : [Styles.imageCard]
                  }
               />
            </View>

            <Icon
               name="heart-outline"
               style={[
                  Styles.loveIcon,
                  FontsDefault.IconsLeft,
                  FontsDefault.FontColor,
               ]}
            />
         </View>
         <View style={Styles.contentContainer}>
            <View style={Styles.ContainerTitleDesc}>
               <View>
                  {Form ? (
                     <Text style={FontsDefault.FontNameCart}>{data.title}</Text>
                  ) : (
                     <Text style={FontsDefault.FontNameCart}>
                        {data.title.length < 12
                           ? data.title
                           : data.title.slice(0, 10) + '...'}
                     </Text>
                  )}

                  <Text style={FontsDefault.fontDescriptionLight}>
                     {data.description}
                  </Text>
               </View>

               {showMin && (
                  <TouchableOpacity style={Styles.containerTime}>
                     <Text style={FontsDefault.FontColor}>{data.MINNUM}</Text>
                     <Text style={FontsDefault.FontColor}>min</Text>
                  </TouchableOpacity>
               )}
            </View>
            {!forCategory && (
               <Fragment>
                  <View style={Styles.dashedView}></View>
                  <View style={Styles.iconRunContainer}>
                     <View style={Styles.SEKContainer}>
                        <Icon
                           name="bicycle-outline"
                           style={[
                              FontsDefault.iconSize,
                              FontsDefault.FontColor,
                              Styles.iconRun,
                           ]}
                        />
                        <Text style={FontsDefault.FontColor}>
                           SEK{data.SEKNum}
                        </Text>
                        {Form && (
                           <View style={Styles.containerRating}>
                              <RatingScreen value="2" />
                           </View>
                        )}
                     </View>
                     {!showMin && (
                        <Text style={FontsDefault.FontColor}>
                           {data.MINNUM}min
                        </Text>
                     )}
                  </View>
               </Fragment>
            )}
         </View>
      </TouchableOpacity>
   )
}

export default Cart
