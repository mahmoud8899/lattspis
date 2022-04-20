import { View, Text, Modal, TouchableOpacity } from "react-native";
import React from "react";
import Styles from "./Styles";
import FontsDefault from "../../Assistant/FontDefault";
import { ProductName } from '../../Assistant/ProductName'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';


// // show and select loction and add addresss.



export default function LocationModal(props) {
    const { setCloseShow, closeShow } = props

    const navigation = useNavigation()


    const NavigationAddAddress = () => {
        // navigation.push('CreateAddress')
        navigation.navigate('ProfileScreen',
            { 
                 screen: 'Address',
                params :{
                    screen : 'CreateAddress'
                }
                
            }
           
       
            

        )

        return setCloseShow(!closeShow)

      
    }

    return <Modal
        animationType="slide"
        onRequestClose={() => setCloseShow(!closeShow)}
        visible={closeShow}
        transparent={true}

    >

        <TouchableOpacity style={Styles.FirstContainer} onPress={() => setCloseShow(!closeShow)}>

        </TouchableOpacity>
        <View style={Styles.LastContainer}>
            <TouchableOpacity style={Styles.route} onPress={() => setCloseShow(!closeShow)}>
                <Icon name='close-outline' style={Styles.ICON} />
            </TouchableOpacity>
            <View>
                <Text style={FontsDefault.TitleFont} >location</Text>
            </View>

            <TouchableOpacity style={Styles.flexLocation}>
                <View style={[Styles.route, Styles.left]}>
                    <Icon name='navigate-outline' style={Styles.ICON} />
                </View>
                <View style={Styles.flexLocationText}>
                    <Text style={[FontsDefault.FontNameCart, Styles.MARGINB]}>Use my current location</Text>
                    <Text style={FontsDefault.fontDescription}>{ProductName} will use your location</Text>
                </View>
            </TouchableOpacity>


            <View style={Styles.Top} />

            <TouchableOpacity style={Styles.flexLocation} onPress={NavigationAddAddress}>
                <View style={[Styles.route, Styles.left, Styles.notColor]}>
                    <Icon name='add-outline' style={Styles.BALCK} />
                </View>

                <View style={Styles.flexLocationText}>
                    <Text style={[FontsDefault.FontNameCart, Styles.MARGINB]}>Add new address</Text>
                </View>
            </TouchableOpacity>

            <View style={Styles.Top} />

            <TouchableOpacity style={Styles.flexLocation}>
                <View style={[Styles.route, Styles.left, Styles.notColor]}>
                    <Icon name='apps-outline' style={Styles.BALCK} />
                </View>

                <View style={Styles.flexLocationText}>
                    <Text style={[FontsDefault.FontNameCart, Styles.MARGINB]}>Browse all Wolt cities</Text>
                </View>
            </TouchableOpacity>


        </View>

    </Modal>
}