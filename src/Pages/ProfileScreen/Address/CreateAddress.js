import React, { Fragment, useRef, useState } from "react"
import { View, Image, Button, Text } from "react-native";
import Styles from "../Style";
import { LeftBottom } from "../../../Components/LeftBottom/LeftBottom";
import HeaderScreen from "../../../Components/Header/Header";
import ButtonScreen from "../../../Components/ButtonScreen/ButtonScreen";
import { Picker } from "@react-native-picker/picker";
import CreateAddressWrite from "./CreateAddressWrite";

export default function CreateAddress(props) {

    const { navigation } = props

    // select city 
    const [country, setCountry] = useState('');

    const [nextInput, setNextInput] = useState(false)






    // options 
    // [1] : button goback 
    //  [2] : header 
    //  [3] : select city 
    // [4] botton next input


    // this is handle bottom 
    const HandleAddaddress = () => {

        // oppen next input 
        if (!nextInput) return setNextInput(!nextInput)

    }


    return    <View style={Styles.containerChildren} >

        {
            nextInput ?

                <CreateAddressWrite setNextInput={setNextInput} />

                :
                <Fragment>
                 
                        <LeftBottom OnClickButtom={() => navigation.goBack()} />

                        <HeaderScreen Title='Add new Address' />
                        <View>
                            <Picker
                                selectedValue={country}
                                onValueChange={(value, index) => setCountry(value)}
                                mode="dropdown" // Android only
                                style={Styles.picker}
                            >
                                <Picker.Item label="Please select your country" value="Unknown" />
                                <Picker.Item label="Australia" value="Australia" />
                                <Picker.Item label="Belgium" value="Belgium" />
                                <Picker.Item label="Canada" value="Canada" />
                                <Picker.Item label="India" value="India" />
                                <Picker.Item label="Japan" value="Japan" />
                            </Picker>
                        </View>

                        <View style={Styles.containerImage} >
                            <Image
                                style={Styles.containerImageChildren}
                                source={require('../../../../data/myimage/add.png')}
                            />
                        </View>



           








                </Fragment>

        }


        <View style={Styles.ButtomClick} >
            <ButtonScreen
                Titel='next'
                onPress={HandleAddaddress}
            />
        </View>


    </View>

















}