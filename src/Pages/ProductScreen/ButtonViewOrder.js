import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import Styles from '../RestaurantScreen/Styles'
import ButtonScreen from '../../Components/ButtonScreen/ButtonScreen'
import FontsDefault from '../../Assistant/FontDefault'
import { FilterCartDetials } from '../../Components/OneProduct/FilterCardItem'
import { useNavigation } from '@react-navigation/native';
import {TotalPrice} from '../../Assistant/Total'
export default function ButtonViewOrder(props) {
    const { setOppenYourOrder  } = props

    // view how many has order
    const { filterCartProduct } = useContext(FilterCartDetials)
    const navigation = useNavigation();

    // show your card orders...
    const navigateToOrders = () => {
        //   console.log('here navigate')
        return setOppenYourOrder(true)
    }


    // console.log('FilterCartDetials',filterCartProduct)


    return filterCartProduct?.length >= 1 && <View style={Styles.buttom}>
        <ButtonScreen
            Titel="View Orders"
            onPress={navigateToOrders}
            styleTouch={Styles.viewOrder}
            ViewOrder={
                <View style={Styles.buttomchildren} >
                    <View style={Styles.number} >
                        <Text style={[FontsDefault.fontDescription, FontsDefault.fontBoldTitle]}>
                            {filterCartProduct?.length}
                        </Text>
                    </View>
                    <View>
                        <Text style={[
                            FontsDefault.fontDescription,
                            FontsDefault.fontBoldTitle,
                            FontsDefault.fontColorWith]}>view order</Text>
                    </View>

                    <View>
                        <Text style={[FontsDefault.fontDescription, FontsDefault.fontBoldTitle, FontsDefault.fontColorWith]}>
                            {TotalPrice(filterCartProduct)} kr
                        </Text>
                    </View>
                </View>
            }
        />
    </View>
}