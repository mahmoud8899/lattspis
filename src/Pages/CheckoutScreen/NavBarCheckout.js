import { View, Text, TouchableOpacity } from 'react-native'
import { LeftBottom } from '../../Components/LeftBottom/LeftBottom'
import Icon from 'react-native-vector-icons/Ionicons'
import FontsDefault from '../../Assistant/FontDefault'
import Styles from './Styles'
import React from 'react'

export default function NavBarCheckout(props) {

    // params options
    // [1] - navigateToRestaurantDetails this is restaurant details 
    // [2] - OnClickButton return restaurant page...
    const { navigateToRestaurantDetails, OnClickButton} = props


    return <View style={FontsDefault.ContainerALLPadding}>
        <View style={[FontsDefault.containerChildren, Styles.FirstContainer]} >
            <View style={Styles.containerTop}>
                <LeftBottom onPress={OnClickButton} />
            </View>
            <View style={Styles.containerTextHeader}>
                <Text
                    style={[Styles.headerText, FontsDefault.fontColorBlack]}
                >
                    Gottis
                </Text>
            </View>
            <TouchableOpacity
                onPress={navigateToRestaurantDetails}
                style={FontsDefault.ContainerIcon}
            >
                <Icon
                    name="alert-outline"
                    style={[
                        FontsDefault.iconCenter,
                        FontsDefault.fontColorWith,
                        FontsDefault.iconSize,
                    ]}
                />
            </TouchableOpacity>
        </View>
    </View>

}