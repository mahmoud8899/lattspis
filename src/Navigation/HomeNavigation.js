import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../Pages/HomeScreen/HomeScreen'
import SeeAllScreen from '../Pages/HomeScreen/SeeAllScreen/SeeAllScreen'
// import Restaurant from '../Pages/RestaurantScreen/restaurant/Restaurant'
import RestaurantDetails from '../Pages/ProductScreen/RestaurantDetails'
import YourOrders from '../Components/YourOrders/YourOrders'
import CheckoutScreen from '../Pages/CheckoutScreen/CheckoutScreen'
import AddPayment from '../Pages/ProfileScreen/Payment/AddPayment'
import LocationScreen from '../Pages/LocationScreen/LocationScreen'
import { useSelector } from 'react-redux'
// import RestaurantScreen from '../Pages/RestaurantScreen/RestaurantScreen'
import ProductScreen from '../Pages/ProductScreen/ProductScreen'

const Stack = createNativeStackNavigator()

export default function HomeNavigation() {

   const latitude = useSelector((state) => state.HomeLocation?.location?.latitude)

   return (
      <Stack.Navigator>

         {!latitude &&
            <Stack.Screen
               name="Location"
               component={LocationScreen}
               options={{ headerShown: false }}
            />
         }




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
            component={ProductScreen}
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
