import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import useCachedResources from 'src/hooks/useCachedResources';
import useColorScheme from 'src/hooks/useColorScheme';
import Navigation from 'src/navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) return null;

  return (
    <NativeBaseProvider>
      <Navigation colorScheme={colorScheme} />
      <StatusBar />
    </NativeBaseProvider>
  );
}
