import React, { Component } from 'react';
import { View, Text, TextInput} from 'react-native';

export default class LoanForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      name : '',
      email:'',
      mobile: ''
    }
  }
  render(){
    return (
      <View style={{padding : 20}}>
        <TextInput
          style={{height: 50, color: '#fff', paddingLeft : 3, borderBottomColor : '#fff',  }}
          placeholder="Name"
          onChangeText={(name) => this.setState({name})}
        />
        <Text style={{padding: 10, fontSize: 22}}>
          {this.state.name}
        </Text>
        <TextInput
          style={{height: 50, color: '#fff', paddingLeft : 3, borderBottomColor : '#fff', }}
          placeholder="Email"
          onChangeText={(email) => this.setState({email})}
        />
        <Text style={{padding: 10, fontSize: 22}}>
          {this.state.email}
        </Text>
        <TextInput
          style={{height: 50, color: '#fff', paddingLeft : 3, borderBottomColor : '#fff', }}
          placeholder="Mobile"
          onChangeText={(mobile) => this.setState({mobile})}
        />
        <Text style={{padding: 10, fontSize: 22}}>
          {this.state.mobile}
        </Text>
      </View>
    )
  }
}