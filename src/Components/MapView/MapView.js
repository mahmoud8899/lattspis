// import Styles from '../../Pages/CheckoutScreen/Styles'
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Platform, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
// import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
// import Geolocation from 'react-native-geolocation-service';
import { customStyleMap } from './MapsStyle'
// import cd from '../../../data/order/3.png'
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../Assistant/Color';
export default function MapViewComponent(props) {

  const { HeightUt,
    setMapsChange,
    mapsChange,
    ChangeLocation,
    ZoomMaps,
    Point
  } = props


  // pass [1] height to maps
  // [2] setMapsChange change location
  // [3] mapsChange show location
  // [4] ChangeLocation click and not click from customer....
  // [5] ZoomMaps this is zoom to maps...
  // [6] Point this is size to icon


  // testing show lcation in maps
  // console.log('mapsChange', mapsChange)



  function TheChangeLocation(data) {

    // data?.coordinate?.latitude
    // data?.coordinate?.longitude
    if (ChangeLocation) {

      return setMapsChange({
        ...mapsChange,
        location: {
          ...location,
          type: "Point",
          coordinates:
            [data?.coordinate?.latitude, data?.coordinate?.longitude]
        }

      })
    }

  }

  return (
    <SafeAreaView style={{
      alignItems: 'center',
      height: HeightUt ? HeightUt : 350
    }}>
      <StatusBar barStyle="dark-content" />
      {mapsChange?.location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: mapsChange?.location?.coordinates[0],
            longitude: mapsChange?.location?.coordinates[1],
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121

          }}
          showsUserLocation={true}
          customMapStyle={customStyleMap}
          minZoomLevel={ZoomMaps ? ZoomMaps  : 16}
          onPress={(e) => TheChangeLocation(e.nativeEvent)}

        >

          {/* {mapsChange?.location?.map((Show, Index) => ( */}
          <Marker
            title='me Address'
            description={mapsChange?.address}
            coordinate={{
              latitude: mapsChange?.location?.coordinates[0],
              longitude: mapsChange?.location?.coordinates[1],
            }}

          >
            <Icon name='location-outline' style={{ fontSize: Point ? Point : 90, color: COLORS.firstRed }} />
          </Marker>





        </MapView>

      )}

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    //  ...StyleSheet.absoluteFillObject,

  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
