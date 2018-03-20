import React from 'react';
import { StyleSheet, TextInput, View, Alert, Button, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class RegisterScreen extends React.Component {
    
  InsertDataToServer = () =>{

 
    const { TextInputName }  = this.state ;
    const { TextInputEmail }  = this.state ;
    const { TextInputPassword }  = this.state ;
    const { TextInputPhoneNumber }  = this.state ;
    const { TextInputTitle } = this.state ;
   
    
   
   fetch('https://reactnativetest.000webhostapp.com/submit_user_info.php', {
     method: 'POST',
     headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json', 
     },
     body: JSON.stringify({
   
       name: TextInputName,
   
       email: TextInputEmail,

       password: TextInputPassword,

       title: TextInputTitle,
   
       phone_number: TextInputPhoneNumber
   
     })
   
   }).then((response) => response.json())
         .then((responseJson) => {

            if(responseJson == 'Registered'){
              Alert.alert(responseJson);
              this.props.navigation.navigate('Login');
            }else{
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
             
             placeholder="Enter Name"
   
             keyboardType = {'default'}
    
             onChangeText={TextInputName => this.setState({TextInputName})}
   
             underlineColorAndroid='transparent'
    
             style={styles.TextInputStyleClass}
           />
   
           <TextInput
             
             placeholder="Enter Email" 
   
             keyboardType= {'email-address'}
    
             onChangeText={TextInputEmail => this.setState({TextInputEmail})}
   
             underlineColorAndroid='transparent'
    
             style={styles.TextInputStyleClass}
           />


           <TextInput
             
             placeholder="Enter Title" 
   
             keyboardType= {'default'}
    
             onChangeText={TextInputTitle => this.setState({TextInputTitle})}
   
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
   
           <TextInput
             
             placeholder="Enter Phone Number"
   
             keyboardType = {'numeric'}
    
             onChangeText={TextInputPhoneNumber => this.setState({TextInputPhoneNumber})}
   
             underlineColorAndroid='transparent'
    
             style={styles.TextInputStyleClass}
           />
    
           <Button title="Register Account" onPress={this.InsertDataToServer} color="#2196F3" />     
    
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
     
    