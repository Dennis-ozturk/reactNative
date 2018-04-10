import React from 'react';
import { Button, View, Text, StyleSheet, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

import RegisterScreen from './app/RegisterScreen';
import LoginScreen from './app/LoginScreen';
import ProfileActive from './app/ProfileActive';
import Missions from './app/Missions';
import NewMission from './app/NewMission';


var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <View style={styles.header} >
          <Text 
            style={styles.headerText}>
              GetGeek
          </Text>
        </View>
        <View style={styles.btns} >
          <View style={styles.links}>
            <Button
              style={styles.btn}
              title="Register"
              onPress={() => this.props.navigation.navigate('Register')}
            />
          </View>
          <View style={styles.links}>
            <Button
              style={styles.btn}
              title="Login"
              onPress={() => this.props.navigation.navigate('Login')}
            />
          </View>            
        </View>
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'GetGek - Home Page',
        headerTitleStyle: {
          color: '#FFF'
        },
        headerStyle: {
          backgroundColor: '#000'
        },
      },
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        title: 'GetGeek - Register Page',
        headerTintColor: 'white',
        headerTitleStyle: {
          color: '#FFF'
        },
        headerStyle: {
          backgroundColor: '#000'
        },
      },
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: 'GetGeek - Login Page'
      },
    },
    Profile: {
      screen: ProfileActive,
      navigationOptions: {
        title: 'GetGeek - Profile'
      },
    },
    Mission: {
      screen: Missions,
      navigationOptions: {
        title: 'GetGeek - Current Missions'
      },
    },
    newMission: {
      screen: NewMission,
      navigationOptions: {
        title: 'GetGeek - New Mission'
      },
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}


const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    alignItems: 'center', 
  },
  header: {
    width:width,
    height: 200,
  },
  headerText: {
    fontSize: 42,
    textAlign: 'center',
  },
  btns: {
    width: 120,
    height: 200,
  },
  links: {
    height: 50 
  }
}); 