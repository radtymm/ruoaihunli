import React from 'react';
import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';
import RButton from '../components/RButton';
import s from '../Styles';
const hotelDetail = s.hotelDetail;

export default class HotelDetail extends React.Component {
  static defaultProps = {

  }

  constructor(props){
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  renderBaseInfo(){
    return (
      <ScrollView style={s.common.scroll}>
        <Image
          style={s.hotelDetail.infoImg}
          source={require('../images/icon_08.png')}
        />
        <View style={s.hotelDetail.infoView}>
          <Text>北方温泉会议中心</Text>
          <View style={s.hotelDetail.moneyView}>
            <Text style={s.hotelDetail.moneyText}>￥1588-2388</Text>
            <Text style={s.hotelDetail.desk}>/桌</Text>
            <Text style={s.hotelDetail.deskTotle}>能容纳3-60桌</Text>
          </View>
          <Text style={s.hotelDetail.desk}>本店位于是什么打算打算本店位于是什么打算打算本店位于是什么打算打算本店位于是什么打算打算</Text>
        </View>
        <View style={s.common.pageGe}/>
        <View style={s.hotelDetail.contactView}>
          <View style={s.hotelDetail.contactList}>
            <Image
              source={require('../images/icon_08.png')}
              style={s.common.leftImg}
            />
            <Text style={s.hotelDetail.contactText}>拉开剑荡四方绿卡时间</Text>
          </View>
          <View style={s.hotelDetail.contactList}>
            <Image
              source={require('../images/icon_08.png')}
              style={s.common.leftImg}
            />
            <Text style={s.hotelDetail.contactText}>4006-808-333</Text>
          </View>
        </View>
        <View style={s.common.pageGe}/>
        <View style={hotelDetail.banquetHall}>
          <View style={hotelDetail.banquetHallTitle}>
            <Text>宴会厅</Text>
          </View>
          <View style={hotelDetail.banquetHallView}>
            <Image
              source={require('../images/icon_08.png')}
              style={hotelDetail.banImg}
            />
            <View style={hotelDetail.banInfoView}>
              <Text>草坪 1F</Text>
              <Text style={hotelDetail.banInfoDesk}>3-30桌</Text>
              <View style={s.common.justify}>
                <Text>面积1200m</Text>
                <Text style={hotelDetail.minMoney}>最低消费￥0</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={hotelDetail.banquetHall}>
          <View style={hotelDetail.banquetHallView}>
            <Image
              source={require('../images/icon_08.png')}
              style={hotelDetail.banImg}
            />
            <View style={hotelDetail.banInfoView}>
              <Text>草坪 1F</Text>
              <Text style={hotelDetail.banInfoDesk}>3-30桌</Text>
              <View style={s.common.justify}>
                <Text>面积1200m</Text>
                <Text style={hotelDetail.minMoney}>最低消费￥0</Text>
              </View>
            </View>
          </View>
          <View style={hotelDetail.banquetHallView}>
            <Image
              source={require('../images/icon_08.png')}
              style={hotelDetail.banImg}
            />
            <View style={hotelDetail.banInfoView}>
              <Text>草坪 1F</Text>
              <Text style={hotelDetail.banInfoDesk}>3-30桌</Text>
              <View style={s.common.justify}>
                <Text>面积1200m</Text>
                <Text style={hotelDetail.minMoney}>最低消费￥0</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={s.common.pageGe}/>
        <View style={s.common.pageGe}/>
        <View style={hotelDetail.menuInfoView}>
          <View style={hotelDetail.merryMenu}>
            <Text>婚宴菜单</Text>
          </View>
          <View style={hotelDetail.menulist}>
            <Text style={hotelDetail.desk}>婚宴套餐</Text>
            <Text style={hotelDetail.desk}>￥1588/桌</Text>
          </View>
          <View style={hotelDetail.menulist}>
            <Text style={hotelDetail.desk}>婚宴套餐</Text>
            <Text style={hotelDetail.desk}>￥1588/桌</Text>
          </View>
        </View>
        <RButton>
          <View style={hotelDetail.phoneView}>
            <Text style={hotelDetail.phoneText}>电话咨询</Text>
          </View>
        </RButton>
      </ScrollView>
    );
  }

  renderHead(){
    const {goBack} = this.props.navigation;
    return (
      <View style={s.common.header}>
        <RButton onPress={()=>{goBack()}}>
          <Image
            source={require('../images/left-icon.png')}
            style={s.common.leftImg}
          />
        </RButton>
        <View style={s.common.titleView}>
          <Text style={s.common.titleText}>婚宴商家</Text>
        </View>
        <View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View>
        <View style={s.common.topView}/>
        {this.renderHead()}
        {this.renderBaseInfo()}
      </View>
    );
  }
}
