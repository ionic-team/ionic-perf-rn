import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DetailsScreen from './src/components/Details';
import EmployeeDirectory from './src/components/EmployeeDirectory';
import Gallery from './src/components/Gallery';
import {fetchEmployees} from './src/store/EmployeeStore';

const DirectoryStack = createNativeStackNavigator();

function DirectoryStackScreen() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <DirectoryStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: isDarkMode ? 'black' : 'white',
        },
        headerTitleStyle: {
          color: isDarkMode ? 'white' : 'black',
        },
      }}>
      <DirectoryStack.Screen
        name="Employee Directory"
        component={EmployeeDirectory}
      />
      <DirectoryStack.Screen name="Details" component={DetailsScreen} />
    </DirectoryStack.Navigator>
  );
}

const GalleryStack = createNativeStackNavigator();

function GalleryStackScreen() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <GalleryStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: isDarkMode ? 'black' : 'white',
        },
        headerTitleStyle: {
          color: isDarkMode ? 'white' : 'black',
        },
      }}>
      <GalleryStack.Screen name="Gallery" component={Gallery} />
      <GalleryStack.Screen name="Details" component={DetailsScreen} />
    </GalleryStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  React.useEffect(() => {
    fetchEmployees(false);
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  const styles = StyleSheet.create({
    bkgStyle: {
      flex: 1,
    },
  });

  return (
    <SafeAreaView style={styles.bkgStyle}>
      <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarStyle: {backgroundColor: isDarkMode ? 'black' : 'white'},
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name === 'Directory Stack') {
                iconName = focused ? 'ios-people' : 'ios-people-outline';
              } else {
                iconName = focused ? 'ios-images' : 'ios-images-outline';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}>
          <Tab.Screen
            name="Directory Stack"
            component={DirectoryStackScreen}
            options={{
              tabBarLabel: 'Directory',
            }}
          />
          <Tab.Screen
            name="Gallery Stack"
            component={GalleryStackScreen}
            options={{
              tabBarLabel: 'Gallery',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
