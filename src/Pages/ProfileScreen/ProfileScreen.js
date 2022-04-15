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

                <Text style={Styles.Radius}>
                    M s
                </Text>
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

                <TouchableOpacity style={Styles.JustCenter} onPress={() => navigation.navigate('Account')}>

                    <Text style={Styles.fontSizeLite} >Account</Text>
                    <View>
                        <Icon name="chevron-forward-outline" style={Styles.Icons} />
                    </View>
                </TouchableOpacity>


                <View style={Styles.ButtomLine} />

                <TouchableOpacity style={Styles.JustCenter}onPress={() => navigation.navigate('PaymentHome')} >

                    <Text style={Styles.fontSizeLite} >Payment methods</Text>
                    <View>
                        <Icon name="chevron-forward-outline" style={Styles.Icons} />
                    </View>
                </TouchableOpacity>
                <View style={Styles.ButtomLine} />





                <TouchableOpacity style={Styles.JustCenter}  onPress={() => navigation.navigate('Address')} >
                    <Text style={Styles.fontSizeLite} >my addresses</Text>
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