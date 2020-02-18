import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
import MenuDrawer from 'react-native-side-drawer';
import { Card } from 'react-native-elements';
import { Link } from 'react-router-native';

export default class detalleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  drawerContent = () => {
    return (
      <TouchableOpacity onPress={this.toggleOpen} style={styles.animatedBox}>
        <Text style={styles.closeButton}> -> </Text>
        <View>
          <TouchableHighlight>
            <Link to="/library" style={styles.menuButton}>
                <Text backgroundColor='white'>Biblioteca</Text>
            </Link>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight>
            <Link to="/reserve" style={styles.menuButton}>
                <Text backgroundColor='white'>Reservaciones</Text>
            </Link>
          </TouchableHighlight>
        </View>
      </TouchableOpacity>
      
    );
  };
  
  render() {
    return (
      <View style={styles.container}>
        <MenuDrawer 
          open={this.state.open} 
          drawerContent={this.drawerContent()}
          drawerPercentage={45}
          animationTime={250}
          overlay={true}
          opacity={0.4}
        >
          <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity onPress={this.toggleOpen} style={styles.menu}>
            <Text style={styles.openButton}>Menu</Text>
          </TouchableOpacity>
          <View style={styles.header} >
          <Text style={styles.textHeader}>Sistema de biblioteca</Text>
          </View>
          <TouchableHighlight style={styles.menu}>
                <Link to="/library" style={styles.openButton}>
                    <Text backgroundColor='white'>Volver</Text>
                </Link>
              </TouchableHighlight>
          </View>
          <View style={styles.body}>
          <Text style={styles.text}>Detalle de su Reservación.</Text>
          <Text style={{marginHorizontal: 5, marginTop: 5, color: '#1a202c', backgroundColor:'#fbb6ce', paddingHorizontal: 15, paddingVertical: 5,  borderColor: '#fff', borderWidth: 2,}}>Para poder realizar una reservación deberá de llenar los siguientes campos.</Text>
          <ScrollView vertical={true}>
              <Card
                title='Name Book'
                image={require('../assets/iconos-libros.png')}>
                <Text style={{marginBottom: 10}}>
                  Autor:
                </Text>
                <Text style={{marginBottom: 10}}>
                  Editorial:
                </Text>
                <Text style={{marginBottom: 10}}>
                  Pais:
                </Text>
                <Text style={{marginBottom: 10}}>
                  Año:
                </Text>
                <TouchableHighlight style={styles.button}>
                    <Link to="/detalle" >
                        <Text >Detalle</Text>
                    </Link>
                </TouchableHighlight>
              </Card>
            </ScrollView>
          </View>   
        </MenuDrawer> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    width: '100%', 
    height: '100%',
    backgroundColor: '#4fd1c5',
  },
  animatedBox: {
    flex: 1,
    backgroundColor: '#2c7a7b',
    padding: 10
  },
  header: {
    flex: 2, 
    height: 75, 
    backgroundColor: '#2c7a7b',
  },
  body: {
    flex: 6,
  },
  text:{
    color:'white',
    paddingLeft:'10%',
    paddingBottom: '5%',
    paddingTop: '8%',
    fontSize: 18,
  },
  textHeader:{
    color:'white',
    paddingLeft:'10%',
    paddingBottom: '5%',
    paddingTop: '15%',
    fontSize: 18,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  menu: {
    flex: 0.5, 
    height: 75, 
    backgroundColor: '#2c7a7b',
  },
  openButton: {
    color: '#000',
    marginTop: '50%',
    borderRadius: 100,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },  
  closeButton: {
    color: 'black',
    marginTop: '15%',
    marginBottom: '20%',
    marginLeft: '5%',
    marginRight: '60%',
    borderRadius: 100,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  menuButton: {
    color: 'black',
    marginTop: '5%',
    marginHorizontal: '5%',
    borderRadius: 100,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
})