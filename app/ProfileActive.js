import React from 'react';
import { StyleSheet, TextInput, View, Alert, Button, Text } from 'react-native';
import { StackNavigator } from 'react-navigation'; 

export default class ProfileActive extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            getEmail: this.props.navigation.state.params.email             
        }
    }

    render() {
  
      const {goBack} = this.props.navigation;
  
       return(
          <View>

            <Button
              title="Mission"
              onPress={() => this.props.navigation.navigate('Mission', {email: this.state.getEmail})}
            />

             <Text> { this.props.navigation.state.params.email } </Text>
  
             <Button title="Click here to Logout" onPress={ () => goBack(null) } />
  
          </View>
       );
    }
 }