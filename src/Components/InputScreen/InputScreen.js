import React from 'react'
import { TextInput, View, Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import COLORS from '../../Assistant/Color'


export default function InputScreen() {






    return <View style={Styles.InputContainer} >
        <Text style={[Styles.fontLite, Styles.notMargin]} >first name</Text>
        <TextInput style={Styles.Input} />
    </View>
}




const Styles = ScaledSheet.create({
    InputContainer : {
        borderColor : COLORS.firstRed,
        marginTop  : '20@s',
        borderWidth : '1@s',
        borderRadius : '4@s',
        height: '55@s',
        padding : '5@s'
    },
    Input : {
        color : COLORS.firstRed,
        fontSize : '18@s',
        marginTop : '3@s',
        marginBottom: '0@s',
        padding : '0@s'
    },
    fontLite: {
        textTransform : 'capitalize',
        color : COLORS.light,
        width : '230@s',
    },

})