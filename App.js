import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './screens/Header';
import HomeScreen from './screens/HomeScreen';
import StackNavigator from './screens/StackNavigator';
import { MovieContext } from './screens/Context';
import { StripeProvider } from '@stripe/stripe-react-native';

export default function App() {
  return (
    <>
    <MovieContext>
      <StripeProvider publishableKey='pk_test_51NXo4ASE1VtwdSoTIHGzfvPK2nIQhLoDagIJeqkCmr64pdMj1otkLFLIOaE8SJKxekTkv0wNxEZJWHmGHFn7Giwg003m8lX0In'>
      <StackNavigator>
      
      </StackNavigator>
     <StatusBar style="auto" />
    
      </StripeProvider>
    </MovieContext>
    
   </>
    // <HomeScreen></HomeScreen>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
