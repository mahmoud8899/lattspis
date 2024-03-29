import React from 'react'
import { Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import RestaurantScreen from '../Pages/RestaurantScreen/RestaurantScreen'
import StoresScreen from '../Pages/StoresScreen/StoresScreen'
import SearchScreen from '../Pages/SearchScreen/SearchScreen'
import UserNavigation from './UserNavigation'
import COLORS from '../Assistant/Color'
import HomeNavigation from './HomeNavigation'
import FontsDefault from '../Assistant/FontDefault'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginForm from '../Pages/LoginScreen/LoginForm'
import LocationScreen from '../Pages/LocationScreen/LocationScreen'
import ProductScreen from '../Pages/ProductScreen/ProductScreen'
const Stack = createNativeStackNavigator()
// Models login
// first screen has options

const Tab = createBottomTabNavigator()

export default function TabBottom() {
   return (
      <Tab.Navigator
         // tabBarActiveTintColor: COLORS.firstRed,
         // tabBarInactiveTintColor: 'black',



         screenOptions={({ route }) => {
            const iconName = {
               Discovery: 'home-outline',
               Location: 'location-outline',
               restaurants: 'restaurant-outline',
               stores: 'file-tray-stacked-outline',
               search: 'search-outline',
               ProfileStack: 'person-outline',
            }

            const label = {
               Discovery: 'Discovery',
               Location: 'Location',
               restaurants: 'restaurants',
               stores: 'stores',
               search: 'search',
               ProfileStack: 'Profile',
            }

            return {
               tabBarIcon: ({ focused }) => (
                  <Icon
                     name={iconName[route.name]}
                     style={{
                        color: focused ? COLORS.firstRed : 'black',
                        fontSize: 35,
                        // padding : 10,
                        // marginTop : 40,

                     }}
                  />
               ),
               tabBarLabel: ({ focused }) => (
                  <Text
                     style={{
                        color: focused ? COLORS.firstRed : 'black',
                        fontSize: 13,
                        fontFamily: 'Mitr-Regular',
                        // padding : 0
                     }}
                  >
                     {label[route.name]}
                  </Text>
               ),
            }
         }}
      >

         <Tab.Screen
            name="Discovery"
            component={HomeNavigation}
            options={{
               headerShown: false,
            }}
         />





         <Tab.Screen
            name="restaurants"
            component={RestaurantScreen}
            options={{
               headerShown: false,
            }}
         />


         <Tab.Screen
            name="stores"
            component={StoresScreen}
            options={{
               headerShown: false,
            }}
         />








         <Tab.Screen
            name="search"
            component={SearchScreen}
            options={{
               headerShown: false,
            }}
         />

         <Tab.Screen
            name="ProfileStack"
            component={UserNavigation}
            options={{
               headerShown: false,
            }}
         />
      </Tab.Navigator>
   )
}



// {/* <Tab.Screen
// name="Location"
// component={LocationScreen}
// options={{
//    headerShown: false,
// }}
//  />   */}