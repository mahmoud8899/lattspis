import { ActivityIndicator, View, Text } from 'react-native'
import COLORS from '../../Assistant/Color'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
export default function LoadingError(props) {
    const { loading, children, error } = props

    return loading ?
        <View style={Styles.loading}>
            <ActivityIndicator
                size="large"
                color={COLORS.firstColor}
                style={Styles.activit}
            />
        </View>
        : error ?
            <View style={Styles.loading}>
                <Text style={Styles.error} >{error}</Text>
            </View>
            :
            children


}


const Styles = ScaledSheet.create({
    container: {

        // backgroundColor : '#eee',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10@s',
        marginBottom: '10@s'

    },
    loading: {
        height: '100@s',
        justifyContent: 'center',
        alignItems: 'center'
    },

    error :{
        fontSize : '20@s',
        color : COLORS.firstColor
    }


})