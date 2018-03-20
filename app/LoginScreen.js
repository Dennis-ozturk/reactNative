import React from 'react';
import { StyleSheet, TextInput, View, Alert, Button, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class LoginScreen extends React.Component {

    getDataFromServer = () => {

        const { TextInputEmail }  = this.state ;
        const { TextInputPassword }  = this.state ;
        
        fetch('https://reactnativetest.000webhostapp.com/send_user_info.php', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
    
            email: TextInputEmail,

            password: TextInputPassword,
    }),
  
  }).then((response) => response.json())
        .then((responseJson) => {
  
          if(responseJson === 'Data Matched'){
              this.props.navigation.navigate('Profile', {email: TextInputEmail});
          }else {
            Alert.alert(responseJson);
          }
  
        }).catch((error) => {
          console.error(error);
        });
    }
   


    render() {
        return (
     
    <View style={styles.MainContainer}>
    
            <TextInput
              
              placeholder="Enter Email" 
    
              keyboardType= {'email-address'}
     
              onChangeText={TextInputEmail => this.setState({TextInputEmail})}
    
              underlineColorAndroid='transparent'
     
              style={styles.TextInputStyleClass}
            />
 
            
            <TextInput
              
              placeholder="Enter Password" 
    
              keyboardType= {'default'}
     
              onChangeText={TextInputPassword => this.setState({TextInputPassword})}
    
              underlineColorAndroid='transparent'
     
              style={styles.TextInputStyleClass}

              secureTextEntry={true}
            />
    
            <Button title="Sign in" onPress={this.getDataFromServer} color="#2196F3" />     
     
    </View>
                
        );
      }
}

 

const styles = StyleSheet.create({
 
    MainContainer :{
      flex:1,
      margin: 10,
      marginTop: 50,  
    },
    
    TextInputStyleClass: {
      textAlign: 'left',
      marginBottom: 7,
      height: 50,
      borderBottomWidth: 1,
      borderStyle: 'solid',
     }
     
    });
     
