import React from 'react';
import { StyleSheet, Text, Image, View, ScrollView, WebView, TouchableOpacity, Platform } from 'react-native';
import RButton from '../components/RButton';
import s from '../Styles';
import api from '../api';
import fun from '../function';
const style = s.storeDetail;

export default class StoreDetail extends React.Component {
  static defaultProps = {

  }

  constructor(props){
    super(props);
    this.state = {
      imgIndex:0,
      detail:{
        imgs:[]
      }
    };
  }

  componentDidMount() {
    this.reqStores();
  }

  reqStores(){
    const id = this.props.navigation.state.params.id;
    api.stores(null, id).then(res=>{
      if (res.msg == 'ok') {
        console.log(res);
        this.setState({detail:res.data});
      }
    })
  }

  render() {
    const {detail, imgIndex} = this.state;
    console.log(detail.content);
    return (
      <View style={{flex:1}}>
        <View style={style.scroll}>
          <ScrollView style={style.scroll}>
            <Image source={{uri:fun.getImgUrl(detail.imgs[imgIndex])}} style={style.imgFirst}/>
            <ScrollView horizontal={true}>
              {
                detail.imgs.map((item, index)=>{
                  return (
                    <RButton onPress={()=>this.setState({imgIndex:index})} key={index}>
                      <Image source={{uri:fun.getImgUrl(item)}} style={style.imgList}/>
                    </RButton>
                  );
                })
              }
            </ScrollView>
            <Text style={style.title}>{detail.title}</Text>
            <View style={style.moneyView}>
              <Text style={style.moneySymbol}>￥</Text>
              <Text style={style.moneyDiscount}>{detail.discount}</Text>
              <Text style={style.moneyPrice}>原价{detail.price}</Text>
            </View>
            <View style={style.detailLine}>
              <View style={style.detailView}>
                <Text style={style.detailText}>详情</Text>
              </View>
            </View>
            <ScrollView>
              <WebView
                source={{html: `<!DOCTYPE html><html><body>${detail.content}
                <script>window.onload=function(){window.location.hash = 1;document.title = document.body.clientHeight;}</script>
                </body></html>`, baseUrl: ''}}
                style={{flex:1, height:this.state.height, width:s.WIDTH}}
                bounces={false}
                scrollEnabled={false}
                scalesPageToFit={true}
                automaticallyAdjustContentInsets={true}
                contentInset={{top:0,left:0}}
                onNavigationStateChange={(title)=>{
                  if(title.title != undefined) {
                     this.setState({
                       height:(parseInt(title.title)+20)
                     })
                  }
                }}
              />
            </ScrollView>
          </ScrollView>
        </View>
        <View style={style.consultView}>
          <RButton onPress={()=>fun.call(detail.tel)} style={style.consultOnline} styleText={style.consultText}>在线咨询</RButton>
          <RButton onPress={()=>fun.call(detail.tel)} style={style.consultPhone} styleText={style.consultText}>电话咨询</RButton>
        </View>
      </View>
    );
  }
}
