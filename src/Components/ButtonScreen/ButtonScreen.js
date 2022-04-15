import { View, TouchableOpacity, Text } from "react-native";
import React from "react";
import { ScaledSheet } from 'react-native-size-matters'
import COLOR from '../../Assistant/Color'
import Icon from "react-native-vector-icons/Ionicons";


export default function ButtonScreen(props) {

    // params 
    const { Titel, ClassIcon, NameIcon, onPress, ClassStyle ,style } = props



    return <TouchableOpacity
        style={ClassIcon ?
            [Styles.onclick, Styles.withIcon]
            : ClassStyle ? style : Styles.onclick}
        onPress={onPress}

    >

        {ClassIcon && <Icon name={NameIcon} style={Styles.Icon} />}

        <View style={ClassIcon && Styles.ContainerText}>
            <Text style={[Styles.fontSizeLite, Styles.fontButtom]} >{Titel}</Text>
        </View>
    </TouchableOpacity>

}






const Styles = ScaledSheet.create({

    onclick: {

        backgroundColor: COLOR.firstRed,
        flexDirection: 'row',
        height: '50@s',
        borderRadius: '5@s',
        position: 'absolute',
        width: '100%',
        bottom: '10@s',
        justifyContent: 'center',
        alignItems: 'center'

    },
    withIcon: {
        justifyContent: 'flex-start',
    },
    fontSizeLite: {
        fontSize: '20@s',
        textTransform: 'capitalize',
        color: COLOR.light,

    },
    fontButtom: {
        color: COLOR.white,
        fontWeight: 'bold',
        fontSize: '17@s'
    },
    ContainerText: {

        marginLeft: '50@s'

    },
    Icon: {

        fontSize: '30@s',
        color: COLOR.white,
        marginLeft: '5@s'


    }

})