/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import Firebase from 'firebase';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  WebView,
  Dimensions,
  Modal,
  TouchableHighlight,
  Button
} from 'react-native';

import login from './src/Components/login';

const firebaseConfig = {
  apiKey: "AIzaSyAjcTEES1yLGNyW1keIoWvSPesIpqHofbA",
  authDomain: "datausers-432fe.firebaseapp.com",
  databaseURL: "https://datausers-432fe.firebaseio.com",
  storageBucket: "datausers-432fe.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class Login extends Component {
  constructor(props)
  {
    super(props);
    this.state =
    {
      componentSelected: 'One',
    };
  }

  changeComponent = (component) =>{
    this.setState({componentSelected: component});
  }

  renderComponent(component) {
      if(component == 'One') {
        return <ComponentOne changeComponent={this.changeComponent}/>
      }else if(component == 'Two') {
        return <ComponentTwo changeComponent={this.changeComponent}/>
      }else if(component == 'Three') {
        return <ComponentThree changeComponent={this.changeComponent}/>
      }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderComponent(this.state.componentSelected)}
      </View>
    );
  }
}


class ComponentOne extends Component {
    render() {
    return (
      <Image 
        source={require('./city.png')} 
        style={styles.container}>
        <View style={{alignItems: 'stretch', justifyContent: 'center',height: 150, padding: 50}}>
          <Button
            onPress={() => this.props.changeComponent('Two') } 
            style={styles.button}
            title="Inicia Sesión"
            color="#E598F8"
            accessibilityLabel="This sounds great!"
          />
          <Button
            onPress={() => this.props.changeComponent('Three') } 
            style={styles.button}
            title="Registrate"
            color="#FFC300"
            accessibilityLabel="Ok, Great!"
          />
        </View>
      </Image>
    )
  }
}

class ComponentTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '',password: ''};
  }																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																															
  render() {
    var limit = 16;
    var remainder = limit - this.state.text.length;
    return (
      <Image 
        source={require('./city.png')} 
        style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            KEEP ME SAFE
          </Text>
          <View style={{padding: 15}}>
            <Text style={styles.instructions}>
            Usuario: 
            </Text>
            <TextInput
              style={{height: 40}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            /> 
            <Text style={styles.instructions}>
            Contraseña: 
            </Text>
            <TextInput 
              secureTextEntry={true} 
              style={{height: 40}} 
              multiline={false}
              maxLength={limit}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}ue={this.state.text}
            />
          </View>
          
          <Button
            onPress={() => {
              //alert(JSON.stringify(this.state));
              firebaseApp.database().ref.on('comunidad/vicky',(snap) => {alert(snap)});

            }} 
            style={styles.button}
            title="Inicia Sesión"
            color="#E598F8"
            accessibilityLabel="This sounds great!"
          />
          
        </View>
      </Image>
    );
  }
}

class ComponentThree extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <Image
        source={require('./city.png')} 
        style={styles.container}>
        <View style={styles.container}>
          <View style={{padding: 15}}>
            <Text style={styles.instructions}>
              Bienvenido a KEEP ME SAFE, estás a sólo unos pasos de
              permitirnos mantenerte a salvo! Llena todos los campos
              sin excepción, para mantenerte en contacto con tus 
              familiares o amigos de manera rápida en caso de alguna
              emergencia.
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextInput
              style={{height: 40, width: 100}}
              placeholder="Nombre(s)"
              onChangeText={(text) => this.setState({text})}
            />
            <TextInput
              style={{height: 40, width: 120}}
              placeholder="Apellido Paterno"
              onChangeText={(text) => this.setState({text})}
            />
            <TextInput
              style={{height: 40, width: 120}}
              placeholder="Apellido Materno"
              onChangeText={(text) => this.setState({text})}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextInput
              style={{height: 40, width: 200}}
              placeholder="Correo Electrónico"
              onChangeText={(text) => this.setState({text})}
            />
            <TextInput
              style={{height: 40, width: 100}}
              placeholder="Telefono"
              onChangeText={(text) => this.setState({text})}
            />
          </View>
          <TextInput
            style={{height: 40, width: 200}}
            placeholder="Usuario"
            onChangeText={(text) => this.setState({text})}
          />
          <TextInput
            style={{height: 40, width: 200}}
            placeholder="Contraseña"
            onChangeText={(text) => this.setState({text})}
          />
          <TextInput
            style={{height: 40, width: 200}}
            placeholder="Verifica Contraseña"
            onChangeText={(text) => this.setState({text})}
          />
          <Button
            onPress={() => this.props.changeComponent('One') } 
            style={styles.button}
            title="Registrar"
            color="#FFC300"
            accessibilityLabel="This sounds great!"
          />
        </View>
      </Image>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
  instructions: {
    textAlign: 'justify',
    color: '#6E6D75',
    fontSize: 15,
    marginBottom: 5,
    //textshadowColor: 'white',
  },
  button: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ededed'
  }
});

AppRegistry.registerComponent('Login', () => Login);