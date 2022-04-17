import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../Pages/HomeScreen/HomeScreen"
import AllStoresDelivering from '../Pages/HomeScreen/AllStoresDelivering/AllStoresDelivering'
import React from "react"


const Stack = createNativeStackNavigator()

export default function HomeNavigation() {

    return <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="SeeAll"
            component={AllStoresDelivering}
            options={{ headerShown: false }}
        />


    </Stack.Navigator>

}






