import { Text } from 'native-base';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import EditScreenInfo from 'src/components/EditScreenInfo';
import { View } from 'src/components/Themed';
import { getGist } from 'src/lib/fetch';
import { RootTabScreenProps } from 'src/types';

const TabOneScreen: React.FC<RootTabScreenProps<'TabOne'>> = ({
  navigation,
}) => {
  useEffect(() => {
    getGist();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        // darkColor="rgba(255,255,255,0.1)"
        darkColor="#eee"
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
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
});
