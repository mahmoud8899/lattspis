import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../Pages/HomeScreen/HomeScreen'
import SeeAllScreen from '../Pages/HomeScreen/SeeAllScreen/SeeAllScreen'
import Restaurant from '../Pages/RestaurantScreen/restaurant/Restaurant'
import RestaurantDetails from '../Pages/RestaurantScreen/restaurant/RestaurantDetails'
import YourOrders from '../Pages/RestaurantScreen/restaurant/YourOrders'
import CheckoutScreen from '../Pages/CheckoutScreen/CheckoutScreen'
import AddPayment from '../Pages/ProfileScreen/Payment/AddPayment'

const Stack = createNativeStackNavigator()

export default function HomeNavigation() {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
         />
         <Stack.Screen
            name="SeeAll"
            component={SeeAllScreen}
            options={{ headerShown: false }}
         />
         <Stack.Screen
            name="Restaurant"
            component={Restaurant}
            options={{ headerShown: false }}
         />
         <Stack.Screen
            name="RestaurantDetails"
            component={RestaurantDetails}
            options={{ headerShown: false }}
         />
         <Stack.Screen
            name="YourOrders"
            component={YourOrders}
            options={{ headerShown: false }}
         />
         <Stack.Screen
            name="CheckoutScreen"
            component={CheckoutScreen}
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
