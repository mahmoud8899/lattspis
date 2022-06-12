import React from 'react'
import { TextInput, View, Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import COLORS from '../../Assistant/Color'
import FontsDefault from '../../Assistant/FontDefault'


export default function Input(props) {

    const {
        Title,
        placeholder,
        IconName,
        StyleContainer,
        StyleInput,
        value,
        onChangeText,
        CloseValue,
        secureTextEntry,
        onSubmitEditing,
        keyboardType
    } = props





    return <View style={StyleContainer ? StyleContainer : Styles.InputContainer} >
        {IconName ? IconName : <Text style={[FontsDefault.fontCategory, Styles.fontLite]} >{Title}</Text>}
        <TextInput
            style={StyleInput ? StyleInput : Styles.Input}
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            secureTextEntry={secureTextEntry}
            onSubmitEditing={onSubmitEditing}
            keyboardType={keyboardType}
        />
        {CloseValue}
        
    </View>
}




const Styles = ScaledSheet.create({
    InputContainer: {
        borderColor: COLORS.firstRed,
        borderWidth: '2@s',
        borderRadius: '10@s',
        height: '70@s',
        borderWidth : 2,
        padding : '10@s'
    },
    Input: {
        color: COLORS.firstRed,
        fontSize: '19@s',
        marginTop: '3@s',
        marginBottom: '0@s',
        padding: '0@s',
        // height : '90@s'
    },
    fontLite: {
        textTransform: 'capitalize',
        color: COLORS.light,
        fontSize: '16@s'


    },

})