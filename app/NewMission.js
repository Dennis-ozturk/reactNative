import React from 'react';
import { StyleSheet, TextInput, View, Alert, Button, Text } from 'react-native';
import { StackNavigator } from 'react-navigation'; 

export default class NewMission extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            getEmail: this.props.navigation.state.params.email             
        }
    }

    InsertDataToServer = () => {
        const {InputMissionType} = this.state;
        const {InputMissionName} = this.state;
        const {InputMissionDescription} = this.state;
        const {InputMissionDate} = this.state;


        fetch('https://reactnativetest.000webhostapp.com/send_user_mission.php', {
            method: 'POST',
            headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json', 
            },
            body: JSON.stringify({

                
              email: this.props.navigation.state.params.email,
          
              missionType: InputMissionType,
          
              missionName: InputMissionName,
       
              missionDescription: InputMissionDescription,
       
              missionDate: InputMissionDate,

            })
          
          }).then((response) => response.json())
                .then((responseJson) => {
       
                   if(responseJson == 'Added'){
                     Alert.alert(responseJson);
                     this.props.navigation.navigate('Mission');
                   }else{
                     Alert.alert(responseJson);
                   }
             
                }).catch((error) => {
                  console.error(error);
                });
            }
          
    render(){

        return(
            <View>
                <Text>{ this.props.navigation.state.params.email }</Text>

                 <TextInput
             
                    placeholder="Mission type" 
   
                    keyboardType= {'default'}
    
                    onChangeText={InputMissionType => this.setState({InputMissionType})}
   
                    underlineColorAndroid='transparent'
    
                    style={styles.TextInputStyleClass}
                />

                 <TextInput
             
                    placeholder="Mission Name" 
   
                    keyboardType= {'default'}
    
                    onChangeText={InputMissionName => this.setState({InputMissionName})}
   
                    underlineColorAndroid='transparent'
    
                    style={styles.TextInputStyleClass}
                />

                <TextInput
             
                    placeholder="Mission Description" 

                    keyboardType= {'default'}

                    onChangeText={InputMissionDescription => this.setState({InputMissionDescription})}

                    underlineColorAndroid='transparent'

                    style={styles.TextInputStyleClass}
                />

                <TextInput
             
                    placeholder="What time to attend?" 

                    keyboardType= {'default'}

                    onChangeText={InputMissionDate => this.setState({InputMissionDate})}

                    underlineColorAndroid='transparent'

                    style={styles.TextInputStyleClass}
                />

                <Button title="Add mission" onPress={this.InsertDataToServer} color="#2196F3" />     


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
     
    