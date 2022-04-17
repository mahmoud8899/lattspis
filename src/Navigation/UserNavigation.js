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
import AddPayment from '../Pages/ProfileScreen/Payment/AddPayment'
import CreateAddress from '../Pages/ProfileScreen/Address/CreateAddress'
import AllStoresDelivering from '../Pages/HomeScreen/AllStoresDelivering/AllStoresDelivering'

const Stack = createNativeStackNavigator()

export default function UserNavigation() {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ headerShown: false }}
         />
         <Stack.Screen
            name="Account"
            component={AccountScreen}
            options={{ headerShown: false }}
         />
         <Stack.Screen
            name="Address"
            component={AddressScreen}
            options={{ headerShown: false }}
         />
         <Stack.Screen
            name="Support"
            component={CustomerSupport}
            options={{ headerShown: false }}
         />
         <Stack.Screen
            name="Orders"
            component={OrderHistory}
            options={{ headerShown: false }}
         />
         <Stack.Screen
            name="PaymentHome"
            component={PaymentMethodsNavigation}
            options={{ headerShown: false }}
         />
         <Stack.Screen
            name="AllStores"
            component={HomeScreen}
            options={{ headerShown: false }}
         />
      </Stack.Navigator>
   )
}

// this is acount [1]: fullname screen [2] : change mobile number
function AccountScreen() {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="Profile"
            component={AccountUser}
            options={{ headerShown: false }}
         />
         <Stack.Screen
            name="MobileNumber"
            component={MobileNumber}
            options={{ headerShown: false }}
         />
         <Stack.Screen
            name="NameScreen"
            component={NameScreen}
            options={{ headerShown: false }}
         />
      </Stack.Navigator>
   )
}

// this is payment screen [1] : show your card number if you has [2] : add card number...
function PaymentMethodsNavigation() {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="PaymentMethods"
            component={PaymentMethods}
            options={{ headerShown: false }}
         />
         <Stack.Screen
            name="AddPayment"
            component={AddPayment}
            options={{ headerShown: false }}
         />
      </Stack.Navigator>
   )
}

// this is add address o
function AddressScreen() {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="AddressScreen"
            component={AddressMethods}
            options={{ headerShown: false }}
         />
         <Stack.Screen
            name="CreateAddress"
            component={CreateAddress}
            options={{ headerShown: false }}
         />
      </Stack.Navigator>
   )
}

function HomeScreen() {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="AllStoresDelivering"
            component={AllStoresDelivering}
            options={{ headerShown: false }}
         />
      </Stack.Navigator>
   )
}
