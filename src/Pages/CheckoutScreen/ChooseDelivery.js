import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FontsDefault from '../../Assistant/FontDefault'
import Styles from './Styles'
import React from 'react'


export default function ChooseDelivery(props) {

    // params options .... 
    //showOrderDetailsModal  delivery and time 
    const {showOrderDetailsModal} = props





    return <View>
        <Text style={[FontsDefault.TitleFont, FontsDefault.fontColorBlack]} >
            Order Type
        </Text>
        <TouchableOpacity  onPress={showOrderDetailsModal} style={Styles.mainContent} >
            <Icon name="walk-outline" style={Styles.fontIcon} />
            <View>
                <Text style={[FontsDefault.fontDescription, FontsDefault.fontColorBlack]}>
                    Pickup in 10-30 min
                </Text>
                <Text style={[FontsDefault.fontDescription]}>
                    Drottninggatan 1B, 2, 6Km
                </Text>
            </View>
        </TouchableOpacity>
    </View>
}