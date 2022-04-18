import { View, Text } from 'react-native'
import React from 'react'
import { dummyProducts } from '../../../Assistant/DummyData'
import CartItems from '../../../Components/CartItems/CartItems'
import Styles from '../../../Components/CartItems/Style'
import HeaderScreen from '../../../Components/Header/Header'
import {LeftBottom} from '../../../Components/LeftBottom/LeftBottom'
export default function CardLike(props) {
 
    const {navigation} = props



    return <View style={Styles.contentContainer}>

        <LeftBottom  OnClickButtom={()=>navigation.goBack()} Tilte='Card Like'  />

        <HeaderScreen  Title='Card Like' />


        <CartItems  data={dummyProducts} dir={false} />



    </View>
}