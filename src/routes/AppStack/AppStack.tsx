import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from '@src/components/BottomTabs';
import CartScreen from '@src/screens/CartScreen';
import CategoriesScreen from '@src/screens/CategoriesScreen';
import HomeScreen from '@src/screens/HomeScreen';
import ProductScreen from '@src/screens/ProductScreen';
import ProductsScreen from '@src/screens/ProductsScreen';
import { TStackParamList } from '@src/types';
import * as React from 'react';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator<TStackParamList>();

const navigationRef = createNavigationContainerRef();

export default function AppStack() {
  const [routeName, setRouteName] = React.useState('Home');

  const navRouteNames = ['Home', 'Categories'];

  const showNavBar = navRouteNames.includes(routeName);

  const onReady = () => {
    setRouteName(navigationRef.getCurrentRoute().name);
  };

  const onStateChange = () => {
    const currentRouteName = navigationRef.getCurrentRoute().name;
    setRouteName(currentRouteName);
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={onReady}
      onStateChange={onStateChange}
      theme={{
        colors: {
          background: '#1c1c1c',
          text: '#fff',
        },
      }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={routeName}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
      <StatusBar backgroundColor={'#1c1c1c'} />
      {showNavBar ? <BottomTabs routeName={routeName} /> : null}
    </NavigationContainer>
  );
}
