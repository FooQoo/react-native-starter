import { MAPBOX_API_KEY } from '@env';
import MapboxGL, { Camera } from '@rnmapbox/maps';
import { useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'src/components/Themed';
import { getGist } from 'src/lib/fetch';
import { RootTabScreenProps } from 'src/types';

MapboxGL.setAccessToken(MAPBOX_API_KEY);

MapboxGL.setWellKnownTileServer('mapbox');

const TabOneScreen: React.FC<RootTabScreenProps<'TabOne'>> = ({
  navigation,
}) => {
  useEffect(() => {
    getGist();
    MapboxGL.setTelemetryEnabled(false);
  });

  return (
    <View style={styles.container}>
      <MapboxGL.MapView
        style={styles.map}
        zoomEnabled={true}
        compassEnabled={true}
        styleURL={'mapbox://styles/fooqoo/cl8dvv6ci000014mpi0qq5hca'}
      >
        <MapboxGL.Camera
          zoomLevel={5}
          centerCoordinate={[139.734547, 35.67104]}
          followUserLocation={true}
        />
        <MapboxGL.UserLocation showsUserHeadingIndicator={true} />
      </MapboxGL.MapView>
    </View>
  );
};

export default TabOneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  map: {
    flex: 1,
    height: '50%',
    width: '100%',
  },
});
