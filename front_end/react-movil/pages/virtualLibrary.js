import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, ScrollView, Image } from 'react-native';
import MenuDrawer from 'react-native-side-drawer';
import { Card } from 'react-native-elements';
import { Link } from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class virtualLibrary extends Component {
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
        <Icon style={styles.closeButton} name="close" size={30} color="#fff" />
          <View>
          <Image
          style={{width: 100, height: 100, marginHorizontal: '15%', borderRadius: 100,}}
          source={require('../assets/book.jpg')}
        />
        <Text style={{color: '#fff', marginVertical: '10%', alignItems: 'center', paddingHorizontal: '5%'}}>Sistema de Biblioteca</Text>
            <TouchableHighlight>
              <Link to="/library" style={styles.menuButton}>
                  <Text style={{color: '#fff'}}>Biblioteca</Text>
              </Link>
            </TouchableHighlight>
          </View>
          <View>
            <TouchableHighlight>
              <Link to="/reserve" style={styles.menuButton}>
                  <Text style={{color: '#fff'}}>Reservaciones</Text>
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
              <Icon style={styles.openButton} name="navicon" size={30} color="#fff" />
            </TouchableOpacity>
              <View style={styles.header} >
                <Text style={styles.textHeader}>Sistema de biblioteca</Text>
              </View>
                <TouchableHighlight style={styles.menu}>
                  <Link to="/">
                    <Icon style={styles.openButton} name="arrow-circle-left" size={30} color="#fff" />
                  </Link>
                </TouchableHighlight>
          </View>
          <View style={styles.body}>
            <Text style={styles.text}>Bienvenido (Nombre).</Text>
            <Text style={{marginHorizontal: 5, marginTop: 5, color: '#1a202c', backgroundColor:'#fbb6ce', paddingHorizontal: 15, paddingVertical: 5,  borderColor: '#fff', borderWidth: 2,}}>Bienvenido al catálogo, selecciona el libro que deseas resrevar, para mas infromación has click en "DETALLE".</Text>
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
                        <Text style={{marginHorizontal: 20}} >
                        <Icon name="book" size={20} color="#fff" />Detalle
                        </Text>
                    </Link>
                </TouchableHighlight>
              </Card>
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
                      <Link to="/reserve">
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
  },
  header: {
    flex: 2, 
    height: 80, 
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
    height: 80, 
    backgroundColor: '#2c7a7b',
  },
  openButton: {
    marginTop: '50%',
    marginHorizontal: '15%',
  },  
  closeButton: {
    marginTop: '15%',
    marginBottom: '20%',
    marginLeft: '5%',
    marginRight: '60%',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  menuButton: {
    padding: 10,
    borderWidth: 2,
    color: '#fff',
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255, .1)',
  },
})