import { View, Text, Image } from 'react-native'
import React from 'react'
import Styles from './Styles'
import FontsDefault from '../../Assistant/FontDefault'
import HeaderLocation from '../../Components/HeaderLocation/HeaderLocation'
import ButtonScreen from '../../Components/ButtonScreen/ButtonScreen'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
export default function LocationScreen() {




    return <View style={FontsDefault.containerChildren}>
        <HeaderLocation />

        <KeyboardAwareScrollView extraHeight={120} enableOnAndroid>
        <View style={[Styles.marginTop, FontsDefault.containerImage]} >
            <Image
                style={FontsDefault.containerImageChildren}
                source={require('../../../data/myimage/location.png')}
            />
        </View>

        <View style={[Styles.center, FontsDefault.marginTopAndBottom]}>
            <Text style={[FontsDefault.TitleFont, FontsDefault.FontColor]}>We don't know where you are</Text>
        </View>

        <View style={[Styles.center, FontsDefault.marginTopAndBottom]}>
            <Text style={FontsDefault.fontDescription}>Please share your delivery location or enter the
                address manually below.</Text>
        </View>

        <View style={FontsDefault.marginTopAndBottom}>
            <ButtonScreen Titel='Share location' />
        </View>
        <View style={FontsDefault.marginTopAndBottom}>
            <ButtonScreen
                Titel='Enter address manually'
                styleTouch={Styles.ContainerButtom}
                StyleTitel={[Styles.color]}

            />
        </View>
        </KeyboardAwareScrollView>
    </View>
}