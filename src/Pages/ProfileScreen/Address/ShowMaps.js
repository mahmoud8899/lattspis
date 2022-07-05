import { Modal, View, Text } from 'react-native'
import MapViewComponent from '../../../Components/MapView/MapView'
import FontsDefault from '../../../Assistant/FontDefault'
import Styles from '../Style'
import ButtonScreen from '../../../Components/ButtonScreen/ButtonScreen'
import NavBarTop from '../../../Components/LeftBottom/NavBarTop'
import React from 'react'


export default function ShowMaps(props) {
    const { oppenMaps,
        setOppenMaps,
        setMapsChange,
        mapsChange,
    } = props

    // params 
    //[1] --  oppenMpas and setOppenMaps this oppen and Close
    // [2] -- setMapsChange this is set location and change....
    // [3] -- MapViewComponent this is show maps --
    // pass to MapViewComponent [1] : HeightUt (height) onther setMapsChange, mapsChange change location
    // [4] -- NavBarTop close maps page 
    // [5] -- ButtonScreen this is save after then close
    // [5] --- setSelectMaps this select Point maps


    // function close and save change location 
    function TheClose() {


        console.log('close')
        setOppenMaps(!oppenMaps)
        setMapsChange({
            ...mapsChange,
            selectMaps : true
        })
    }


    return <Modal
        animationType="slide"
        onRequestClose={() => setOppenMaps(!oppenMaps)}
        visible={oppenMaps}
        transparent={true}
    >
        <View style={[FontsDefault.fontBackgroundColoe, { flex: 1 }]} >

            <View style={{ position: 'relative' }}  >
                <MapViewComponent
                    HeightUt='100%'
                    setMapsChange={setMapsChange}
                    mapsChange={mapsChange}
                    ChangeLocation
                />

                <View style={Styles.mapicon} >
                    <NavBarTop
                        IconName='close-outline'
                        onPress={() => setOppenMaps(!oppenMaps)}
                        ContainerStyle={[Styles.containerIcon, FontsDefault.MarginLeftx]}
                        IconStyle={[FontsDefault.fontColorWith, FontsDefault.fontIcon]}
                        Title={
                            <View style={{ backgroundColor: 'white', marginTop: 10, padding: 9, borderRadius: 20 }}>
                                <Text style={[FontsDefault.TitleFont,]}
                                >{mapsChange?.address}
                                </Text>
                                <Text style={[FontsDefault.TitleFont,]}>
                                    {mapsChange?.city}
                                </Text>
                            </View>
                        }
                    />
                </View>


                <View style={Styles.ButtonMaps}>
                    <ButtonScreen
                        Titel='save'
                        onPress={TheClose}


                    />
                </View>
            </View>



        </View>
    </Modal>
}