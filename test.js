



import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, TextInput, View, TouchableOpacity, Text } from 'react-native'
import Styles from './src/Pages/ProfileScreen/Style'
const apiKey = 'AIzaSyAS-K00azKt-3LXt0yr6k8ymdlmiK6mH-4'
import Icon from 'react-native-vector-icons/Ionicons'
import MapViewComponent from './src/Components/MapView/MapView'


export default function App() {


   const [input, setInput] = useState('')
   const [resultMaps, setResultMaps] = useState([])

   const Location = {

      lat: Number(59.858131),
      long: Number(17.644621)
   }





   useEffect(() => {

      if (input?.length >= 3) {

         Result()
      }

   }, [input])


   // fetch address
   async function Result() {


      try {
         const { data } = await axios.get(
            `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${apiKey}&location=${location.lat},${location.long}&radius=2000`

         )
         setResultMaps(data?.predictions)
      } catch (error) {

         return console.log(error.message)
      }



   }


   // show lat and long 
   function getRouteDirections(first, lat) {
      // https://maps.googleapis.com/maps/api/place/details/json?input=bar&placeid=EiBTeXNzbG9tYW5zZ2F0YW4sIFVwcHNhbGEsIFN3ZWRlbiIuKiwKFAoSCS-H1yD1y19GEa3-qnnrtYbrEhQKEgmPt1ViUS1eRhEYBGjhW-zDfQ&key=AIzaSyAS-K00azKt-3LXt0yr6k8ymdlmiK6mH-4
      return console.log(first, lat)
   }



   const FistMap = true


   return <SafeAreaView style={Styles.container}>

      {FistMap ?
         <View>
            <MapViewComponent  HeightUt='100%'   />
         </View>
         :


         <View style={{ padding: 10 }}>

            <TextInput
               placeholder='Enter'
               style={Styles.input}
               value={input}
               onChangeText={(data) => setInput(data)}
            />


            <View style={Styles.containerResult}  >
               {resultMaps?.map((prediction, Index) => (
                  <TouchableOpacity style={Styles.result} key={Index}  >
                     <View style={Styles.resultText}>
                        <Text style={Styles.resultch}>  {prediction?.description}</Text>
                     </View>

                     <View >
                        <Icon name='checkmark-outline' style={{ fontSize: 40 }} />
                     </View>


                  </TouchableOpacity>
               ))}

            </View>






         </View>
      }
   </SafeAreaView>


}

