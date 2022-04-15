import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import HomeScreen from '../Pages/HomeScreen/HomeScreen'
import RestaurantScreen from '../Pages/RestaurantScreen/RestaurantScreen'
import StoresScreen from '../Pages/StoresScreen/StoresScreen'
import SearchScreen from '../Pages/SearchScreen/SearchScreen'
import UserNavigation from './UserNavigation'
import COLORS from '../Assistant/Color'


const Tab = createBottomTabNavigator()





export default function TabBottom() {






    return <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: COLORS.firstRed,
            tabBarInactiveTintColor: 'black',

        }}
    >

        <Tab.Screen name='ProfileScreen' component={UserNavigation}
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="person-outline" color={color} size={40} />
                ),
                headerShown: false,
            }}
        />


        <Tab.Screen name='Discovery' component={HomeScreen}
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="home-outline" color={color} size={40} />
                ),
                headerShown: false,
            }}
        />
        <Tab.Screen name='restaurants' component={RestaurantScreen}
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="restaurant-outline" color={color} size={40} />
                ),
                headerShown: false,
            }}
        />
        <Tab.Screen name='stores' component={StoresScreen}
            options={{
                tabBarIcon: ({ color }) => (
                    <MIcon name="storefront-outline" color={color} size={40} />
                ),
                headerShown: false,
            }}
        />
        <Tab.Screen name='search' component={SearchScreen}
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="search-outline" color={color} size={40} />
                ),
                headerShown: false,
            }}
        />


    </Tab.Navigator>
}