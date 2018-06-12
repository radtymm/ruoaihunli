import { Picker, List } from 'antd-mobile';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import area from '../constants/area.json';
import RButton from './RButton';
import s from '../Styles';

area.filter(v=>{
  v.value = v.value + '';
  v.children.filter(children=>{
    children.value = children.value + '';

  })
})

export default class Test extends React.Component {

  static defaultProps = {
    onOk:()=>{},
    onDismiss:()=>{},
    visible:false,
    value:['1', '2']
  }

  constructor(props){
    super(props);
    this.state = {

    };
  }



  render() {
    return (
      <View style={{opacity:0}}>
          <Picker extra=""
            data={area}
            cols={2}
            title='地区'
            value={this.props.value}
            visible={this.props.visible}
            cascade={true}
            onOk={e => {console.log('ok', e);this.props.onOk(e)}}
            onDismiss={e => {console.log('dismiss', e);this.props.onDismiss(e)}}
          >
              {this.props.children}
          </Picker>
      </View>
    );
  }
}
