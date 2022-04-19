import { View, TouchableOpacity, Text } from "react-native";
import React from "react";
import { ScaledSheet } from 'react-native-size-matters'
import COLOR from '../../Assistant/Color'
import Icon from "react-native-vector-icons/Ionicons";


export default function ButtonScreen(props) {

    // params 
    const {
        styleTouch,
        StyleTitel,
        onPress,
        Titel,
        NameIcon,
        StyleIcon,


    } = props



    return <TouchableOpacity style={styleTouch ? styleTouch : !NameIcon ? [Styles.TouchaBle,Styles.center] :   Styles.TouchaBle} onPress={onPress} >

        {NameIcon &&
            <Icon name={NameIcon} style={StyleIcon ? StyleIcon : Styles.Icon} />
        }
   
            <Text style={
                StyleTitel ?
                    StyleTitel :
                    !NameIcon ? Styles.fontCenter :
                        Styles.fontTitle
            } >{Titel}</Text>

    </TouchableOpacity>

}






const Styles = ScaledSheet.create({

    TouchaBle: {
        flexDirection: 'row',
        height: '65@s',
        borderRadius: '5@s',
        backgroundColor: COLOR.firstRed,
        alignItems: 'center'
    },
    center: {

        justifyContent : 'center'

    },
    Icon: {
        marginLeft: '10@s',
        fontSize: '30@s',
        color: COLOR.white
    },
    fontTitle: {
        marginLeft: '20@s',
        fontSize: '18@s',
        fontWeight: 'bold',
        color: COLOR.white
    },
  
    fontCenter:{
        fontSize: '18@s',
        fontWeight: 'bold',
        color: COLOR.white,

        
    }



})