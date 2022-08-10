import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import CarItem from './components/Car';
import InventoryPage from './components/InventoryPage';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={CarItem}
          options={{
            headerShown: false,
        }}
          />
        <Stack.Screen
          name="InventoryPage"
          component={InventoryPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carContainer:{
    width: '100%',
    height: '100%',
  },
  titles:{
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title:{
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 35,
    justifyContent: 'center',
  },
  subtitles:{
    fontFamily: 'Helvetica',
    fontSize: 15,
    color: '#404040',
    justifyContent: 'center',
  },
  image:{
    width:'100%',
    height:'100%',
    resizeMode: 'contain',
    position: 'absolute',
  },
});
