import React from 'react';
import { StyleSheet, TextInput, View, Alert, Button, Text, ActivityIndicator, ListView, Platform, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation'; 


export default class Mission extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            getEmail: this.props.navigation.state.params.email,
            isLoading: true         
        }
    }

    
    GetItem (mission_name) {
 
        Alert.alert(mission_name);
    
    }

    
componentDidMount() {

    return fetch('http://reactnativetest.000webhostapp.com/getData_from_mission.php')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }


    ListViewItemSeparator = () => {
        return (
          <View
            style={{
      
              height: .5,
              width: "100%",
              backgroundColor: "#000",
      
            }}
          />
        );
      }
      
    

    render(){
        if (this.state.isLoading) {
            return (
              <View style={{flex: 1, paddingTop: 20}}>
                <ActivityIndicator />
              </View>
            );
          }
        
        return(
            <View>
                <Button
                    title="New Mission"
                    onPress={() => this.props.navigation.navigate('newMission', {email: this.state.getEmail})}
                />
                
                <Text>{ this.state.getEmail }</Text>
                <Text>Missions:</Text>

                <View>

                    <ListView

                        dataSource={this.state.dataSource}

                        renderSeparator= {this.ListViewItemSeparator}

                        renderRow={(rowData) =>

                        <View style={{flex:1, flexDirection: 'column'}} >

                        <TouchableOpacity onPress={this.GetItem.bind(this, rowData.mission_name)} >

                        <Text style={styles.textViewContainer} >{'Posted by = ' + rowData.email}</Text>

                        <Text style={styles.textViewContainer} >{'Mission Name = ' + rowData.mission_name}</Text>

                        <Text style={styles.textViewContainer} >{'Mission Type = ' + rowData.mission_type}</Text>

                        <Text style={styles.textViewContainer} >{'Description = ' + rowData.mission_description}</Text>

                        <Text style={styles.textViewContainer} >{'Date to do = ' + rowData.mission_date}</Text>

                        <Text style={styles.textViewContainer} >{'Date added = ' + rowData.date_added}</Text>

                        </TouchableOpacity>

                        </View>

                        }
                        />

                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({

MainContainer :{

justifyContent: 'center',
flex:1,
paddingTop: (Platform.OS === 'ios') ? 20 : 0,
backgroundColor: '#00BCD4',
padding: 5,

},

textViewContainer: {

 textAlignVertical:'center', 
 padding:10,
 fontSize: 20,
 color: '#000',

}

});
