import React from 'react';
import { StyleSheet, Text, Image, View, FlatList } from 'react-native';
import s from '../Styles';
import RButton from '../components/RButton';

export default class Merchant extends React.Component {
  static defaultProps = {

  }

  constructor(props){
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

  }

  renderBusiness(){
    const {navigate} = this.props.navigation;
    return (
      <FlatList
        data={[{}, {}, {}]}
        extraData={this.state}
        ItemSeparatorComponent={()=><View style={s.common.pageGe}/>}
        keyExtractor={(item, index) => index + ''}
        renderItem={({item, separators}) =>(
          <RButton onPress={()=>navigate('HotelDetail')}>
            <View style={s.merchant.listView}>
              <Image
                style={s.merchant.listImage}
                source={require('../images/icon_08.png')}
              />
              <View style={s.merchant.listRightView}>
                <View style={s.merchant.areaView}>
                  <Text style={s.merchant.shopName}>27度罗马酒店</Text>
                  <Text style={s.merchant.area}>东城区</Text>
                </View>
                <View style={s.merchant.moneyView}>
                  <Text style={s.merchant.money}>￥4988/桌</Text>
                  <Text style={s.merchant.moneyMore}>起</Text>
                </View>
              </View>
            </View>
          </RButton>
        )}
      />
    );
  }

  render() {
    const {navigate, goBack} = this.props.navigation;
    return (
      <View>
        <View style={s.common.topView}/>
        <View style={s.common.header}>
          <RButton onPress={()=>{goBack()}}>
            <Image
              source={require('../images/icon_08.png')}
              style={s.merchant.leftImg}
            />
          </RButton>
          <View style={s.merchant.tab}>
            <Text style={s.merchant.tabText}>婚宴商家</Text>
          </View>
          <View>
          </View>
        </View>
        <View style={s.common.scroll}>
          {this.renderBusiness()}
        </View>
      </View>
    );
  }
}
