import React from "react"
import { ScrollView, Text, View } from "react-native";
import Styles from "../Style";
import Icon from 'react-native-vector-icons/Ionicons'


export default function ShowAddresses(props) {





    return <ScrollView>
        <View style={Styles.address}>
            <View>
                <Icon name='home-outline' style={Styles.iconaddress} />
            </View>
            <View style={Styles.addressText}>
                <Text style={Styles.FontDefult}>Uppsala</Text>
                <Text style={Styles.FontDefultlast} >lager homw 203d</Text>
            </View>

            <View style={Styles.removeScreen}>
                <Icon name="ellipsis-horizontal-outline" style={Styles.iconremove} />
            </View>

        </View>

        <View style={Styles.address}>
            <View>
                <Icon name='home-outline' style={Styles.iconaddress} />
            </View>
            <View style={Styles.addressText}>
                <Text style={Styles.FontDefult}>Uppsala</Text>
                <Text style={Styles.FontDefultlast} >lager homw 203d</Text>
            </View>

            <View style={Styles.removeScreen}>
                <Icon name="ellipsis-horizontal-outline" style={Styles.iconremove} />
            </View>

        </View>

    </ScrollView>
}