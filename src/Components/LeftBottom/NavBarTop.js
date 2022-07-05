import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { ScaledSheet, scale } from 'react-native-size-matters'
import COLORS from '../../Assistant/Color'
import FontsDefault from '../../Assistant/FontDefault'


export default function NavBarTop(props) {

    const { IconName, IconStyle, Title, onPress, ContainerStyle ,Container } = props




    return <TouchableOpacity onPress={onPress}  style={Container} >

        <View style={ContainerStyle}>
            {IconName &&
                <Icon name={IconName} style={IconStyle} />

            }


        </View>

        {Title && Title}





    </TouchableOpacity>
}