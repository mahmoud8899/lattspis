import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/Ionicons'
import Styles from "./Style";
import HeaderScreen from "../../Components/Header/Header";



export default function ProfileScreen(props) {

    const { navigation } = props



    return <ScrollView>

        <View style={Styles.containerChildren} >

        
            <HeaderScreen Title='Hi Mahmoud' />




            <TouchableOpacity style={Styles.JustCenter} onPress={() => navigation.navigate('Account')} >

                <View style={Styles.Radius}>
                    <Text style={Styles.RadiusText}>m s</Text>
                </View>
                <View >
                    <Text style={Styles.fontSizeLite} >Mahmoud Almadhoun</Text>
                    <Text style={Styles.fontSizeLite}>no Orders</Text>
                </View>

                <View>
                    <Icon name="chevron-forward-outline" style={Styles.Icons} />
                </View>

            </TouchableOpacity>

            <View style={Styles.ButtomLine} />


            <View style={Styles.MarginTop}>

                <Text style={Styles.titleFont} >your favourites</Text>

                <View style={Styles.ContainerFavouri} >

                    <View style={Styles.ContainerFavouritext}>
                        <Text style={Styles.fontOther} >
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


                </View>
            </View>





            <View style={Styles.ButtomLine} />




            <View style={Styles.MarginTop}>

                <Text style={Styles.titleFont} >settings</Text>

                <TouchableOpacity style={[Styles.JustCenter, Styles.PaddingBorder]} onPress={() => navigation.navigate('Account')}>

                    <Text style={[Styles.fontOne, Styles.exstra]} >Account</Text>
                    <View>
                        <Icon name="chevron-forward-outline" style={Styles.Icons} />
                    </View>
                </TouchableOpacity>


                <View style={Styles.ButtomLine} />

                <TouchableOpacity style={[Styles.JustCenter, Styles.PaddingBorder]} onPress={() => navigation.navigate('PaymentHome')} >

                    <Text style={[Styles.fontOne, Styles.exstra]} >Payment methods</Text>
                    <View>
                        <Icon name="chevron-forward-outline" style={Styles.Icons} />
                    </View>
                </TouchableOpacity>
                <View style={Styles.ButtomLine} />





                <TouchableOpacity style={[Styles.JustCenter, Styles.PaddingBorder]} onPress={() => navigation.navigate('Address')} >
                    <Text style={[Styles.fontOne, Styles.exstra]} >my addresses</Text>
                    <View>
                        <Icon name="chevron-forward-outline" style={Styles.Icons} />
                    </View>
                </TouchableOpacity>
                <View style={Styles.ButtomLine} />

                <TouchableOpacity style={[Styles.JustCenter, Styles.PaddingBorder]} onPress={() => navigation.navigate('OrderScreen')} >
                    <Text style={[Styles.fontOne, Styles.exstra]} >order history</Text>
                    <View>
                        <Icon name="chevron-forward-outline" style={Styles.Icons} />
                    </View>
                </TouchableOpacity>
                <View style={Styles.ButtomLine} />




            </View>
        </View>
    </ScrollView>





}







// <Text> Proile user...</Text>
// <Icon name='add-circle-outline' style={Styles.Icons}  color='red'  />