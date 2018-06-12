import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Linking } from 'react-native';
import { Button, Carousel } from 'antd-mobile';
import RButton from '../components/RButton';
import fun from '../function';
import api from '../api';
import s from '../Styles';
import Citypicker from '../components/Citypicker';
import area from '../constants/area';

export default class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      banner: [],
      photo_sec: [],
    };
  }

  componentDidMount() {
    this.homeReqUrl();
  }

  homeReqUrl(tail = ''){

    api.homeReqUrl(null, tail).then(res=>{
      if (res.msg == 'ok') {
        this.setState({
          banner:res.data.banner,
          photo_sec:res.data.photo_sec
        })
      }
    })
  }

  handleReqUrl(e){
    this.setState({cityValue:e, visible:false});
    area.filter(province=>{
      if ((province.value + '') == e[0]) {
        province.children.filter(city=>{
          if ((city.value + '')== e[1]) {
            this.setState({areaName:city.label, });
          }
        })
      }
    });
    this.homeReqUrl(e[1] + '/');
  }

  renderListContent(title){
    const {navigate,goBack} = this.props.navigation;
    let state = this.state;
    return (
      <View style={s.home.listContent}>
        <View style={s.home.listTitleView}>
          <View style={s.common.justify}>
            <View style={s.home.listTitleGe}>
            </View>
            <Text style={s.home.listTitle}>{title}</Text>
          </View>
          <View style={s.common.justify}>
            <Text style={s.home.listTitle} onPress={()=>navigate("Wedding")}>全部</Text>
            <Image
              source={require('../images/arrowRight.png')}
              style={s.home.phoneImg}
            />
          </View>
        </View>
        <View style={s.home.oneView}>
          {
            state.photo_sec.map((item, index)=>{
              return (
                <RButton key={index} onPress={()=>{navigate('Wedding')}}>
                  <View style={s.home.listView}>
                    <Image
                      source={{uri:fun.getImgUrl(item.img)}}
                      style={s.home.listImg}
                    />
                    <Text style={s.home.textArea} numberOfLines={1}>{item.title}</Text>
                    <Text style={s.home.textMoney}>￥{item.price} / 桌</Text>
                  </View>
                </RButton>
              );
            })
          }
        </View>
      </View>
    );
  }

  render() {
    const {navigate,goBack} = this.props.navigation;
    const {state} = this;
    return (
      <View>
        <View style={s.common.topView}/>
        <Citypicker
          visible={state.visible}
          value={state.cityValue}
          onOk={(e)=>{this.handleReqUrl(e)}}
          onDismiss={()=>{this.setState({visible:false})}}
        />
        <View style={s.home.header}>
          <RButton onPress={()=>{this.setState({visible:true})}}>
            <View style={s.home.areaView}>
              <Text style={s.home.topArea}>{((state.areaName || '') == '') ? '全国' : state.areaName}</Text>
            </View>
          </RButton>
          <RButton onPress={()=>{fun.call('15611889944');}}>
            <Image
              source={require('../images/phone-icon.png')}
              style={s.home.phoneImg}
            />
          </RButton>
        </View>
        <ScrollView style={s.home.scroll}>
          <View style={s.home.container}>
            <Carousel
              autoplay={true}
              infinite
              beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
              afterChange={index => console.log('slide to', index)}
            >
              {this.state.banner.map((val, index) => (
                <View key={index}>
                  <Image
                    source={{uri: fun.getImgUrl(val.img)}}
                    style={s.home.carouselImg}
                  />
                </View>
              ))}
            </Carousel>
            <View style={s.home.contentLogo}>
              <RButton onPress={()=>navigate('Wedding')}>
                <View style={s.home.contentView}>
                  <Image
                    source={require('../images/pre-marry-icon.png')}
                    style={s.home.imgLogo}
                  />
                  <Text>订婚宴</Text>
                </View>
              </RButton>
              <RButton onPress={()=>navigate('Merchant')}>
                <View style={s.home.contentView}>
                  <Image
                    source={require('../images/hotel-icon.png')}
                    style={s.home.imgLogo}
                  />
                  <Text>一站式酒店</Text>
                </View>
              </RButton>
            </View>
            {this.renderListContent('婚纱摄影')}
            {/*this.renderListContent('婚宴酒店')*/}
          </View>
        </ScrollView>
      </View>

    );
  }
}
