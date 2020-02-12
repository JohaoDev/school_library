import * as React from 'react';
import { Text, TextInput, View, StyleSheet, TouchableHighlight } from 'react-native';
import { Icon,Button } from 'react-native-elements';
import { Link } from 'react-router-native';

export default class LoginScreen extends React.Component {
  static navigationOptions ={
    header: null
  }

  render() {
    return (
          <View style={styles.container}>
            <Text style={styles.text}>Correo Intitucional</Text>
            <View style={styles.containerEmail}>
              <Icon type="font-awesome" name="user" color="gray" containerStyle={styles.icon}/>
              <TextInput placeholder="@yavirac.edu.ec" placeholderTextColor="gray"
              style={styles.textInput}/> 
            </View>
            <Text style={styles.text}>Contraseña</Text>
            <View style={styles.containerPassword}>
              <Icon type="entypo" name="key" color="gray" containerStyle={styles.icon}/>
              <TextInput placeholder="*******" placeholderTextColor="gray"
              style={styles.textInput} secureTextEntry={true}/> 
            </View>

            <TouchableHighlight style={styles.containerIngresar}>
              <Link to="/library" style={ styles.button }>
                  <Text backgroundColor='#718096'>Ingresar</Text>
              </Link>
            </TouchableHighlight>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%', 
    height: '100%',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'stretch',
    backgroundColor: '#4fd1c5',
  },
  containerIngresar:{
    height: 60,
    marginLeft:'25%',
    marginRight:'25%',
    paddingTop:'10%',
  },
  containerEmail:{
    height: 60,
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#ffffff',
    marginLeft:'10%',
    marginRight:'10%',
  },
  containerPassword:{
    height: 60,
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#ffffff',
    marginLeft:'10%',
    marginRight:'10%',
  },
  icon:{
    flex:1,
    paddingTop: '5%',
  },
  text:{
    color:'#ffffff',
    paddingLeft:'25%',
    paddingBottom: '5%',
    paddingTop: '5%',
    fontSize: 17,
  },
  textInput:{
    backgroundColor:'transparent',
    flex:5,
    color:'black',
    paddingLeft:'15%',
  },
  button: {
    position: 'relative',
    bottom: '0%',
    marginBottom: 20,
    borderRadius: 100,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
})