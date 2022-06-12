import { Modal, View, Text } from 'react-native'
import MapViewComponent from '../../../Components/MapView/MapView'
import FontsDefault from '../../../Assistant/FontDefault'
import Styles from '../Style'
import ButtonScreen from '../../../Components/ButtonScreen/ButtonScreen'
import NavBarTop from '../../../Components/LeftBottom/NavBarTop'
import React from 'react'


export default function ShowMaps(props) {
    const { oppenMaps, setOppenMaps } = props



    return <Modal   animationType="slide" onRequestClose={() => setOppenMaps(!oppenMaps)} visible={oppenMaps}
        transparent={true} >
        <View style={[FontsDefault.fontBackgroundColoe, { flex: 1 }]} >

            <View style={{ position: 'relative' }}  >
                <MapViewComponent HeightUt='100%' />

                <View style={Styles.mapicon} >
                    <NavBarTop
                        IconName='close-outline'
                        onPress={() => setOppenMaps(!oppenMaps)}
                        ContainerStyle={[Styles.containerIcon, FontsDefault.MarginLeftx]}
                        IconStyle={[FontsDefault.fontColorWith, FontsDefault.fontIcon]}
                    />
                </View>


                <View style={Styles.ButtonMaps}>
                    <ButtonScreen Titel='save'    onPress={() => setOppenMaps(!oppenMaps)}   />
                </View>
            </View>



        </View>
    </Modal>
}