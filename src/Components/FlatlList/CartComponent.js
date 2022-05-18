import React from 'react'
import { View, Text, Image } from 'react-native'
import Styles from './style'
import Icon from 'react-native-vector-icons/Ionicons'
import FontsDefault from '../../Assistant/FontDefault'
import { TheSlice } from '../../Assistant/TheSlice'
import RatingScreen from '../RatingScreen/RatingScreen'

export default function CartComponent(props) {
    const { item, FullScrren } = props





    const FunctionTime = (item) => {
        return <View>
            <Text style={FontsDefault.FontColor}> {item?.item?.MINNUM}min </Text>
        </View>
    }





    return <View style={FullScrren ? Styles.FullScrren : Styles.CartContainer}>
        <View style={Styles.ImageContainer}>
            <Image
                source={{ uri: item?.item?.imageUrl }}
                style={FullScrren ? [Styles.image,Styles.extraWidth] : Styles.image}
            />
        </View>

        <View style={{ padding: 10 }} >

            <View style={Styles.TIME} >
                <View>
                    <Text style={FontsDefault.FontNameCart}  >{TheSlice(item?.item?.title)}</Text>
                    <Text style={[FontsDefault.fontDescriptionLight]} >{item?.item?.description}</Text>
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


    </View>
}


