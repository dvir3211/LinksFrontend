
import React from 'react';
// import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';



export default function MapsScreen(props)
 {
    const position = {
        latitude: props.route.params.lat, longitude: props.route.params.lan, latitudeDelta: 0, longitudeDelta: 0
    }
    return (
      <View style={styles.container}>
        {/* <MapView style={styles.map} provider={PROVIDER_GOOGLE} initialRegion={position}> */}
        <MapView style={styles.map} initialRegion={position}>
        <Marker
            coordinate={{"latitude": props.route.params.lat,
            "longitude": props.route.params.lan}}
            title={props.route.params.tag}
            description={"UTC Time: " + props.route.params.time}
         />
        </MapView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });