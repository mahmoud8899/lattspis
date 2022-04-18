import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/Ionicons'
import Styles from "./Style";
import HeaderScreen from "../../Components/Header/Header";
import FontsDefault from "../../Assistant/FontDefault";
import CartItems from "../../Components/CartItems/CartItems";
import { dummyProducts } from "../../Assistant/DummyData";
import { Fragment } from "react/cjs/react.production.min";



export default function ProfileScreen(props) {

    const { navigation } = props

    const [yourFavourites, setYourFavourites] = useState(true)


    return <ScrollView>

        <View style={Styles.containerChildren} >


            <HeaderScreen Title='Hi Mahmoud' />




            <TouchableOpacity style={Styles.JustCenter} onPress={() => navigation.navigate('Account')} >

                <View style={Styles.Radius}>
                    <Text style={[Styles.RadiusText, Styles.fontOne, Styles.exstra, FontsDefault.fontColorWith]}>m s</Text>
                </View>
                <View >
                    <Text style={[Styles.fontOne, Styles.exstra]} >Mahmoud Almadhoun</Text>
                    <Text style={FontsDefault.fontDescription}>no Orders</Text>
                </View>

                <View>
                    <Icon name="chevron-forward-outline" style={[FontsDefault.IconsLeft, FontsDefault.FontColor]} />
                </View>

            </TouchableOpacity>

            <View style={Styles.ButtomLine} />


            <View style={Styles.MarginTop}>



                <View style={Styles.seeall}>
                    <Text style={[FontsDefault.TitleFont, FontsDefault.FontColor]} >your favourites</Text>
                    <TouchableOpacity style={Styles.fontseeall} onPress={() => navigation.navigate('CardLike')} >
                        <Text style={FontsDefault.fontColorWith}>See all</Text>
                    </TouchableOpacity>
                </View>

                <View style={Styles.ContainerFavouri} >
                    {yourFavourites ?
                        <CartItems data={dummyProducts} dir={true} />

                        :
                        <Fragment>


                            <View style={[Styles.ContainerFavouritext, Styles.marginTop]}>





                                <Text style={FontsDefault.fontDescription} >
                                    Add a restaurant to your
                                    favourites by tapping the
                                    heart icon in the menu view.
                                    Your favourites are displayed
                                    here!
                                </Text>


                            </View>


                            <View style={Styles.ContainerFavouriticon}>
                                <Icon name="heart-outline" style={Styles.iconStory} />
                            </View>
                        </Fragment>
                    }

                </View>
            </View>





            <View style={Styles.ButtomLine} />




            <View style={Styles.MarginTop}>

                <Text style={[FontsDefault.TitleFont, FontsDefault.FontColor]} >settings</Text>

                <TouchableOpacity style={[Styles.JustCenter, Styles.PaddingBorder, Styles.marginTop]} onPress={() => navigation.navigate('Account')}>

                    <Text style={[Styles.fontOne, Styles.exstra]} >Account</Text>
                    <View>
                        <Icon name="chevron-forward-outline" style={[FontsDefault.IconsLeft, FontsDefault.FontColor]} />
                    </View>
                </TouchableOpacity>


                <View style={Styles.ButtomLine} />

                <TouchableOpacity style={[Styles.JustCenter, Styles.PaddingBorder]} onPress={() => navigation.navigate('PaymentHome')} >

                    <Text style={[Styles.fontOne, Styles.exstra]} >Payment methods</Text>
                    <View>
                        <Icon name="chevron-forward-outline" style={[FontsDefault.IconsLeft, FontsDefault.FontColor]} />
                    </View>
                </TouchableOpacity>
                <View style={Styles.ButtomLine} />





                <TouchableOpacity style={[Styles.JustCenter, Styles.PaddingBorder]} onPress={() => navigation.navigate('Address')} >
                    <Text style={[Styles.fontOne, Styles.exstra]} >my addresses</Text>
                    <View>
                        <Icon name="chevron-forward-outline" style={[FontsDefault.IconsLeft, FontsDefault.FontColor]} />
                    </View>
                </TouchableOpacity>
                <View style={Styles.ButtomLine} />

                <TouchableOpacity style={[Styles.JustCenter, Styles.PaddingBorder]} onPress={() => navigation.navigate('OrderScreen')} >
                    <Text style={[Styles.fontOne, Styles.exstra]} >order history</Text>
                    <View>
                        <Icon name="chevron-forward-outline" style={[FontsDefault.IconsLeft, FontsDefault.FontColor]} />
                    </View>
                </TouchableOpacity>
                <View style={Styles.ButtomLine} />




            </View>
        </View>
    </ScrollView>





}







// <Text> Proile user...</Text>
// <Icon name='add-circle-outline' style={Styles.Icons}  color='red'  />