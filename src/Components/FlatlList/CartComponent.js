import React from 'react'
import { View, Text,  TouchableOpacity } from 'react-native'
import Styles from './style'
import Icon from 'react-native-vector-icons/Ionicons'
import FontsDefault from '../../Assistant/FontDefault'
import { TheSlice } from '../../Assistant/TheSlice'
import RatingScreen from '../RatingScreen/RatingScreen'
import {TheImageCheck} from '../../Assistant/ImageUrl'
import LazyLoading from '../LazyLoading/LazyLoading'

export default function CartComponent(props) {
    const { item, FullScrren,onPress } = props







    const FunctionTime = (item) => {
        return <View>
            <Text style={FontsDefault.FontColor}> {item?.item?.finishfood?.to}- {item?.item?.finishfood?.end} min </Text>
        </View>
    }






    // console.log('item?.item?.image',item?.item?.image)






    return <TouchableOpacity onPress={onPress} style={FullScrren ? Styles.FullScrren : Styles.CartContainer}>
        <View style={Styles.ImageContainer}>
        <LazyLoading 
        image={TheImageCheck(item?.item?.image)}
        style={FullScrren ? [Styles.image,Styles.extraWidth] : Styles.image}
        />
          
            <View style={Styles.loveIcon}>
            <Icon
               name="heart-outline"
               style={[
                  
                  FontsDefault.IconsLeft,
                  FontsDefault.FontColor,
               ]}
            />
            </View>
        </View>

        <View style={{ padding: 10 }} >

            <View style={Styles.TIME} >
                <View>
                    <Text style={FontsDefault.FontNameCart}  >{TheSlice(item?.item?.username)}</Text>
                    <Text style={[FontsDefault.fontDescriptionLight]} >{
                     TheSlice(item?.item?.description, 50)
                    }</Text>
                </View>
                {FullScrren &&
                    <View style={Styles.timeringth} >
                        {FunctionTime(item)}
                    </View>
                }
            </View>









            <View style={[Styles.border, Styles.MarginButton]} />

            <View style={FullScrren ? [Styles.button,]
                : [Styles.button, Styles.HomeScreen]} >

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
                        SEK{item?.item?.SEKNum}
                    </Text>



                </View>


                {FullScrren ?
                    <View style={Styles.containerRating}>
                        <RatingScreen value="2" />
                    </View>
                    :
                    <>
                        {
                            FunctionTime(item)
                        }
                    </>

                }








            </View>


        </View>


    </TouchableOpacity>
}




