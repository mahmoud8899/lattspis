import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AccountUser from '../Pages/ProfileScreen/Account/Account'
import AddressMethods from '../Pages/ProfileScreen/Address/Address'
import CustomerSupport from '../Pages/ProfileScreen/CustomerSupport/CustomerSupport'
import OrderHistory from '../Pages/ProfileScreen/OrderHistory/OrderHistory'
import PaymentMethods from '../Pages/ProfileScreen/Payment/Payment'
import ProfileScreen from '../Pages/ProfileScreen/ProfileScreen'
import MobileNumber from '../Pages/ProfileScreen/Account/MobileNumber'
import NameScreen from '../Pages/ProfileScreen/Account/Name'

const Stack = createNativeStackNavigator()

export default function UserNavigation() {





    return <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Account" component={AccountScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Address" component={AddressMethods} options={{ headerShown: false }} />
        <Stack.Screen name="Support" component={CustomerSupport} options={{ headerShown: false }} />
        <Stack.Screen name="Orders" component={OrderHistory} options={{ headerShown: false }} />
        <Stack.Screen name="PaymentMethods" component={PaymentMethods} options={{ headerShown: false }} />


    </Stack.Navigator>
}





function AccountScreen() {


    return <Stack.Navigator>
        <Stack.Screen name="Profile" component={AccountUser} options={{ headerShown: false }} />
        <Stack.Screen name="MobileNumber" component={MobileNumber} options={{ headerShown: false }} />
        <Stack.Screen name="NameScreen" component={NameScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
}