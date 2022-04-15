
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { ScaledSheet } from 'react-native-size-matters'
import COLORS from '../../Assistant/Color'


export function LeftBottom(props) {

    const { OnClickButtom } = props



    return <TouchableOpacity onPress={OnClickButtom} >

        <Icon name="arrow-back-outline" style={Styles.IconsLeft} />

    </TouchableOpacity>

}




const Styles = ScaledSheet.create({
    IconsLeft: {
        width: '40@s',
        height: '40@s',
        borderRadius: '50@s',
        backgroundColor: COLORS.firstRed,
        color: '#eee',
        fontSize: '30@s',
        lineHeight: '40@s',
        textAlign: 'center'
    }

})