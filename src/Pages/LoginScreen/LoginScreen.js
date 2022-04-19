import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import FontsDefault from '../../Assistant/FontDefault'
import FontDefault from '../../Assistant/FontDefault'
import { ProductName } from '../../Assistant/ProductName'
import Styles from './Style'
import ButtonScreen from '../../Components/ButtonScreen/ButtonScreen'
export default function LoginScreen(props) {
const {navigation} = props




    return <View style={FontDefault.containerChildren}>
        <View style={Styles.marginTopFirst}>
            <Text style={[FontsDefault.TitleFont, FontDefault.FontColor]} >{ProductName}</Text>
        </View>


        <ScrollView contentContainerStyle={FontsDefault.scrollPaddingBottom}>
        <View style={Styles.marginTopFirst}>
            <Text style={[Styles.fontLogin]}>
                Get started with {ProductName}
            </Text>
        </View>

        <View style={Styles.marginTopFirst}>
            <Text style={[FontDefault.fontDescription, Styles.colordes]}>
                Please choose how you want to continue
                setting up your account 😍
            </Text>
        </View>


        <View style={Styles.marginTopTop} />
        
            <View style={[Styles.button]}>
                <ButtonScreen
                    Titel='Continue with Facebook'
                    ClassIcon
                    style={[Styles.ContainerButtom, Styles.FaceColor]}
                    NameIcon='logo-facebook'
                    StyleTitel={Styles.FaceColor}
                    StyleIcon={Styles.Icons}

                />
            </View>
            <View style={Styles.marginTop} />

            <View style={[Styles.button]}>
                <ButtonScreen
                    Titel='Continue with Google'
                    ClassIcon
                    style={[Styles.ContainerButtom, Styles.google]}
                    NameIcon='logo-google'
                    StyleTitel={Styles.GoogleBackground}
                    StyleIcon={Styles.GoogleIcon}

                />
            </View>

            <View style={Styles.marginTop} />
            <View style={[Styles.button]}>
                <ButtonScreen
                    Titel='Continue with email'
                    ClassIcon
                    style={[Styles.email]}
                    NameIcon='mail-outline'
                    StyleTitel={[Styles.GoogleBackground, Styles.color]}
                    StyleIcon={[Styles.GoogleIcon, Styles.color]}
                    // LoginForm
                    onPress={()=>navigation.navigate('LoginForm')}
                />
            </View>

            <View style={Styles.marginTop} />
            <View style={[Styles.button]}>
                <ButtonScreen
                    Titel='Continue as a guest'
                    ClassIcon
                    NameIcon='man-outline'
                    style={[Styles.email]}
                    StyleTitel={[Styles.GoogleBackground, Styles.color]}
                    StyleIcon={[Styles.GoogleIcon, Styles.color]}
                />
            </View>
        </ScrollView>






    </View>
}