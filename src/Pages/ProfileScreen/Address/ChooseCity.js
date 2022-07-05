import { View, Text, TouchableOpacity } from 'react-native'
import Styles from '../Style'
import ModelComponent from '../../../Components/Model/Model'
import Icon from 'react-native-vector-icons/Ionicons'
import React from 'react'
import { Stand } from '../../../Assistant/ProductName'
import FontsDefault from '../../../Assistant/FontDefault'


export default function ChooseCity(props) {
    const { closeShow, setCloseShow, setPostData, postData } = props

    // options params 
    // [1] - setPostData and postData set data
    // [2] - closeShow, setCloseShow this is oppen and close choose city



    // close 
    function ChooseClose() {

        return setCloseShow(!closeShow)
    }

    // function choose city 
    function Choose(result) {

        // console.log('Mahmoud', result)

        // console.log('result',result)
        setPostData({
            ...postData,
            city: result?.address,
            location: {
                ...location,
                coordinates:
                    [result?.location?.lat, result?.location?.long]
            }

        })


        ChooseClose()
    }

    return <ModelComponent
        closeShow={closeShow}
        setCloseShow={setCloseShow}
        Data={
            <View style={[{ flex: 1 }, FontsDefault.fontBackgroundColoe]} >


                <View style={[{ marginTop: 100 }, FontsDefault.fontBackgroundColoe]}>
                    <View style={FontsDefault.ContainerALLPadding}>


                        <TouchableOpacity
                            style={[FontsDefault.ContainerIcon, Styles.MarginAuto]} onPress={ChooseClose} >
                            <Icon name='close-outline' style={[FontsDefault.iconCenter, FontsDefault.fontIcon, FontsDefault.fontColorWith, { fontSize: 40 }]} />
                        </TouchableOpacity>

                        <View style={Styles.choosecity} >

                            <Text style={[FontsDefault.fontBoldTitle, FontsDefault.fontColorBlack, Styles.fon]} >
                                Choose city
                            </Text>
                        </View>


                        <View style={Styles.MarginTopX}>
                            {Stand?.map((city, Index) => (
                                <TouchableOpacity
                                    key={Index} style={Styles.click}
                                    onPress={() => Choose(city)}
                                >
                                    <Text
                                        style={[FontsDefault.fontBoldTitle, FontsDefault.fontColorBlack, FontsDefault.iconSize, { lineHeight: 100 }]}
                                    >
                                        {city?.address}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                    </View>
                </View>







            </View>

        }
    />
}