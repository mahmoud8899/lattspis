import React from 'react'
import { View, Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import COLORS from '../../Assistant/Color'
import FontsDefault from '../../Assistant/FontDefault'
export function ErrorComponent(props) {
    // params error
    const { Error } = props


    return Error && <View style={Styles.containerError} >
        <Text style={[
            FontsDefault.fontButtonCart,
            FontsDefault.fontColorWith,
        ]}>{Error}</Text>
    </View>
}


// ERROR INPUT 
export function InputError(props) {

    const { Error } = props

    return Error ?
        <Text style={[FontsDefault.fontDescription, FontsDefault.fontcolorerror]} >
            {Error}
        </Text>
        : null

}


const Styles = ScaledSheet.create({

    containerError: {
        padding: '10@s',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.firstRed,
        borderRadius: '10@s'

    }

})