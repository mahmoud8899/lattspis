import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import FontsDefault from '../../Assistant/FontDefault'
import FontDefault from '../../Assistant/FontDefault'
import { ProductName } from '../../Assistant/ProductName'
import Styles from './Style'
import ButtonScreen from '../../Components/ButtonScreen/ButtonScreen'
export default function LoginScreen(props) {
    const { navigation } = props




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

            <View style={Styles.marginTop}>
                <ButtonScreen
                    Titel='Continue with Facebook'
                    NameIcon='logo-facebook'
                    styleTouch={Styles.FaceColor}
                />
            </View>


            <View style={Styles.marginTop}>
                <ButtonScreen
                    Titel='Continue with Google'
                    NameIcon='logo-google'
                    styleTouch={[Styles.FaceColor, Styles.colorwith]}
                    StyleTitel={Styles.color}
                    StyleIcon={Styles.Icon}

                />
            </View>


            <View style={Styles.marginTop}>
                <ButtonScreen
                    Titel='Continue with email'
                    NameIcon='mail-outline'
                    onPress={()=>navigation.navigate('LoginForm')}

                />
            </View>


            <View style={Styles.marginTop}>
                <ButtonScreen
                    Titel='Continue as a guest'
                    NameIcon='man-outline'
                    onPress={()=>navigation.navigate('Discovery')}
                />
            </View>




        </ScrollView>






    </View>
}



