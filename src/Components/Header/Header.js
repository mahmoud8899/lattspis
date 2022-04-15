import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { ScaledSheet } from 'react-native-size-matters'
import COLOR from '../../Assistant/Color'






export default function HeaderScreen(props) {
    const { Title } = props


    return <View style={Styles.MarginTop}>
        <Text style={Styles.titleFont}>{Title}</Text>
    </View>

}




const Styles = ScaledSheet.create({
    MarginTop : {
        marginTop : '20@s',
        marginBottom : '20@s',
    },
    titleFont : {
        color : COLOR.firstRed,
        textTransform : 'capitalize',
        fontSize  : '30@s',
        marginBottom : '10@s',
       
    },
})

