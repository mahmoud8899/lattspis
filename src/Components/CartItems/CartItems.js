import React, { Fragment } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ListCard from './ListCart'
import Styles from './Style'
import FontsDefault from '../../Assistant/FontDefault'




export default function CartItems(props) {

    const { Tilte, onPress, data, name ,Form } = props




    // options
    // [1] : title name
    // [2] :  fatch data 


    return <Fragment>
        {Tilte &&
            <View style={Styles.storesDelivering}>
                <Text style={[FontsDefault.TitleFont, FontsDefault.FontColor]}>{Tilte}</Text>
                <TouchableOpacity onPress={onPress}>
                    <Text style={Styles.seeAllButton}>See All</Text>
                </TouchableOpacity>
            </View>
        }


        <ListCard
            dummyProducts={data}
            name={name}
            Form={Form}
        />



    </Fragment>
}