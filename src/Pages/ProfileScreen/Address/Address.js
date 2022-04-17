import {  TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { LeftBottom } from '../../../Components/LeftBottom/LeftBottom'
import ButtonScreen from '../../../Components/ButtonScreen/ButtonScreen'
import Styles from "../Style";
import ShowAddresses from "./ShowAddresses";
import DeletionAlert from "../../../Components/DeletionAlert/DeletionAlert";

export default function AddressMethods(props) {

    const { navigation } = props

    // oppen remove address..
    const [closeShow, setCloseShow] = useState(false)



    return <View style={Styles.containerChildren}>

        <LeftBottom OnClickButtom={() => navigation.goBack()}  Tilte='saved addresses' />




        <TouchableOpacity onPress={() => setCloseShow(!closeShow)}  style={Styles.marginTopStor} >
            <ShowAddresses />
        </TouchableOpacity>



        <DeletionAlert
            closeShow={closeShow}
            setCloseShow={setCloseShow}
        />


        <View style={Styles.ButtomClick} >
            <ButtonScreen
                Titel='add new address'
                onPress={()=> navigation.navigate('CreateAddress')}

            />
        </View>

    </View>
}

