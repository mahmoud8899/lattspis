import { View, TouchableOpacity, Text } from "react-native";
import React from "react";
import { ScaledSheet } from 'react-native-size-matters'
import COLOR from '../../Assistant/Color'


export default function ButtonScreen(props) {

    // params 
    const {Titel} = props



    return <TouchableOpacity style={Styles.onclick} >
        <Text style={[Styles.fontSizeLite, Styles.fontButtom]} >{Titel}</Text>
    </TouchableOpacity>

}






const Styles = ScaledSheet.create({

    onclick: {
      
        backgroundColor : COLOR.firstRed,
        height : '50@s',
        borderRadius : '5@s',
        position : 'absolute',
        width : '100%',
        bottom : '10@s',
        justifyContent : 'center',
        alignItems : 'center'
        
    },
    fontSizeLite: {
        fontSize: '20@s',
        textTransform: 'capitalize',
        color: COLOR.light,

    },
    fontButtom: {
        color: COLOR.white
    },

})