import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FontsDefault from '../../../Assistant/FontDefault'
import Styles from '../Style'
import ModelComponent from '../../../Components/Model/Model'
import COLORS from '../../../Assistant/Color'
import axios from 'axios'
const apiKey = 'AIzaSyAS-K00azKt-3LXt0yr6k8ymdlmiK6mH-4'
import { useSelector } from 'react-redux'

export default function SearchForAddress(props) {
    // params set address
    const { postData, setPostData } = props


    // oppen searching 
    const [oppenSearching, setOppenSearching] = useState(false)
    // show result 
    const [resultSearching, setResultSearching] = useState([])


    // GET location 
    // here fixa location from get location user or choose city
    const location = {
        lat: Number(59.858131),
        long: Number(17.644621)
    }




    // function close
    function theClose() {
        setOppenSearching(!oppenSearching)
    }







    // function remove searching
    function RemoveSearching() {

        setPostData({
            ...postData,
            address: ''
        })
    }



    // afer 4
    useEffect(() => {
        if (postData?.address?.length >= Number(4)) {

            async function TheRuning() {

                try {
                    const { data } = await axios.get(
                        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${postData?.address}&key=${apiKey}&location=${location.lat},${location.long}&radius=2000`

                    )

                    // console.log('result',data?.predictions)
                    setResultSearching(data?.predictions)
                } catch (error) {

                    return console.log(error.message)
                }

            }

            TheRuning()
        }
    }, [postData?.address])




    // choose address
    function CHooseAddress(data,ADD) {


        setPostData({
            ...postData,
             address : ADD,
            place_id: data,
            location : ''
        })
        theClose()

        return console.log('show address and close...')
    }



    return <View>
        {!oppenSearching
            ?

            <TouchableOpacity style={Styles.olika} onPress={theClose}>
                <Text style={[FontsDefault.fontCategory, Styles.fontLite]}>Street name and number</Text>
                <Text style={[FontsDefault.fontFamilyTitle, Styles.fontLite, { fontSize: 15 }]}>
                    {postData?.address ? `${postData?.address}, ${postData?.city}` : ''}

                </Text>
            </TouchableOpacity>

            :

            <ModelComponent

                closeShow={oppenSearching}
                setCloseShow={setOppenSearching}
                Data={
                    <View style={Styles.first} >

                        <TouchableOpacity style={{ height: 100 }} onPress={theClose} />



                        <View >
                            <View style={[FontsDefault.ContainerALLPadding]}>




                                <View style={Styles.containerInput} >

                                    <TouchableOpacity style={Styles.left} onPress={theClose} >
                                        <Icon name='arrow-back-outline' style={{ fontSize: 25 }} />
                                    </TouchableOpacity>

                                    <TextInput
                                        style={Styles.inputtext}
                                        onChangeText={(event) => setPostData({ ...postData, address: event })}
                                        value={postData?.address}
                                    />

                                    <TouchableOpacity style={[Styles.left, Styles.bac]} onPress={RemoveSearching}  >
                                        <Icon name='close-outline' style={{ fontSize: 25, color: 'white' }} />
                                    </TouchableOpacity>


                                </View>

                                <ScrollView style={Styles.scrollresult} >

                                    {resultSearching?.length === Number(0) ?

                                        <View style={Styles.loading}>
                                            <ActivityIndicator size="large" color={COLORS.firstRed} />
                                        </View>

                                        :
                                        resultSearching?.map((resu, Index) => (
                                            <TouchableOpacity
                                                style={Styles.box}
                                                key={Index}
                                                onPress={() => CHooseAddress(resu?.place_id,resu?.description)}
                                            >

                                                <View style={Styles.mapsicon} >
                                                    <Icon name='location-outline' style={{ fontSize: 25 }} />
                                                </View>

                                                <View style={{ marginLeft: 10 }}>
                                                    <Text style={[FontsDefault.fontFamilyTitle]}  >
                                                        {resu?.description}
                                                    </Text>

                                                </View>


                                            </TouchableOpacity>
                                        ))

                                    }











                                </ScrollView>


                            </View>
                        </View>

                    </View>
                }

            />

        }

    </View>
}

