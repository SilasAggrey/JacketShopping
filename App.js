import { StatusBar } from 'expo-status-bar';
import { StyleSheet,} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import ItemsJacket from './src/components/ItemJacket';
import JacketShopping from './src/components/JacketShopping';
import JacketShopping2 from './src/components/JacketShopping2';




const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
     {/* <JacketShopping2 /> */}
     {/* <JacketShopping /> */}
     <ItemsJacket />
   </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;