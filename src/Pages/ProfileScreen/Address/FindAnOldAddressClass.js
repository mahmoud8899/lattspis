import ModelComponent from '../../../Components/Model/Model'
import { View, Text, } from 'react-native'
import React, { useState } from 'react'
import FontsDefault from '../../../Assistant/FontDefault'
import ButtonScreen from '../../../Components/ButtonScreen/ButtonScreen'
import Styles from '../Style'
import { useSelector } from 'react-redux'



export default function FindAnOldAddressClass(props) {
 
    // params set address
    const {setPostData,postData} = props

    // oppen and close...
    const [closeShow, setCloseShow] = useState(true)

   // find an old address 
   const TheCheckOldAddress = useSelector((state) => state?.theCheckAddress?.oldAddress)


    // close location address...
    function TheClose() {
        setCloseShow(false)
    }


    // set address 
    function SetAddress(){

       setPostData(TheCheckOldAddress) 
       TheClose()
    }



    return <ModelComponent
        closeShow={closeShow}
        setCloseShow={setCloseShow}

        Data={
            <View style={Styles.first} >


                <View style={[FontsDefault.Cover]}>
                    <View style={{ padding: 10 }}>

                        <View style={Styles.body}>
                            <Text
                                style={[FontsDefault.fontDescription, { textAlign : 'center'}]}
                            >Based on your phone's location, it looks like you're here:</Text>
                            <Text
                                style={[
                                    FontsDefault.fontFamilyTitle,
                                    FontsDefault.TitlefontsSize
                                ,{ textAlign : 'center',marginTop : 5,marginBottom : 5}]}
                            >
                               {TheCheckOldAddress?.address},  {TheCheckOldAddress?.city}
                            </Text>

                            <View style={{ marginBottom: 10, marginTop: 10 }}>
                                <ButtonScreen Titel='Use this address' onPress={SetAddress} />
                            </View>
                            <ButtonScreen Titel='Enter another address' onPress={TheClose} />

                        </View>

                    </View>
                </View>
            </View>
        }





    />
}