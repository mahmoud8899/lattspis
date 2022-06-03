import Styles from "../RestaurantScreen/Styles"
import { View, Text,TouchableOpacity } from 'react-native'
import { LeftBottom } from "../../Components/LeftBottom/LeftBottom"
import FontsDefault from "../../Assistant/FontDefault"
import Icon from 'react-native-vector-icons/Ionicons'
import React from "react"

export default function HeaderProduct(props) {
    const {ShowIconSearch, OnClickButton,onClick, data,styleBackgroundScroll} = props





    return <View style={Styles.test}>
        <LeftBottom onPress={OnClickButton} />
       {styleBackgroundScroll &&<View style={Styles.contentRestaurantName}>
            <Text
                style={[
                    FontsDefault.iconSize,
                    FontsDefault.fontColorBlack,
                ]}
            >
                {data?.username}
            </Text>
            <Text
                style={[
                    FontsDefault.fontDescription,
                    FontsDefault.FontColor,
                ]}
            >
                Leverans om {data?.finishfood?.to}-{data?.finishfood?.end} min
            </Text>
        </View>} 

        <View style={Styles.containerSearchIcon}>
            {ShowIconSearch && (
                <TouchableOpacity
                    onPress={onClick}
                    style={FontsDefault.ContainerIcon}
                >
                    <Icon
                        name="search-outline"
                        style={[
                            FontsDefault.iconCenter,
                            FontsDefault.fontColorWith,
                            FontsDefault.iconSize,
                        ]}
                    />
                </TouchableOpacity>
            )}
        </View>
    </View>
}