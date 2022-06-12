// import Styles from '../../Pages/CheckoutScreen/Styles'
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Platform } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import { customStyleMap } from './MapsStyle'

export default function MapViewComponent(props) {
  const { HeightUt } = props


  return (
    <SafeAreaView style={{
      alignItems: 'center',
      height: HeightUt ? HeightUt : 350
    }}>
      <StatusBar barStyle="dark-content" />
      {location && (
        <MapView
          testID="map"
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,

          }}
          showsUserLocation={true}
          customMapStyle={customStyleMap}
          paddingAdjustmentBehavior="automatic"
          showsMyLocationButton={true}
          showsBuildings={true}
          maxZoomLevel={17.5}
          loadingEnabled={true}
          loadingIndicatorColor="#fcb103"
          loadingBackgroundColor="#242f3e"
        />
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