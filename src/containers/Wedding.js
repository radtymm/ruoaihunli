import React from 'react';
import { StyleSheet, Text, Image, View, FlatList, RefreshControl } from 'react-native';
import s from '../Styles';
import RButton from '../components/RButton';
import fun from '../function';
import api from '../api';

export default class Wedding extends React.Component {
  static defaultProps = {

  }

  constructor(props){
    super(props);
    this.state = {
      tab:1,
      priceData:[],
      refreshingBusiness:false,
      refreshingPrice:false,
      businessData:[],
    };
  }

  componentDidMount() {
    this.reqPriceData();
  }

  // isLoading是否是上拉加载
  reqPriceData(isLoading){
    let {priceData, refreshingPrice} = this.state;
    let params = {
      page:1
    };
    if (isLoading) {
      params = {
        page: Math.ceil(priceData.length / 6) + 1
      }
    }

    if (refreshingPrice) { return; }
    if (!isLoading) {this.setState({refreshingPrice:true});}

    api.homeReqUrl(params, 'photo/').then(res=>{
      if (!isLoading) {this.setState({refreshingPrice:false});}
      if (res.msg == 'ok') {
        let newPriceData = [];
        if (isLoading) {
          newPriceData = priceData.concat(res.data);
        }else {
          newPriceData = res.data;
        }
        this.setState({
          priceData:newPriceData
        })
      }
    });
  }

  // isLoading是否是上拉加载
  reqStoresData(isLoading){
    let {businessData, refreshingBusiness} = this.state;
    let params = {
      page:1
    };
    if (isLoading) {
      params = {
        page: Math.ceil(businessData.length / 6) + 1
      }
    }

    if (refreshingBusiness) { return; }
    if (!isLoading) {this.setState({refreshingBusiness:true});}

    api.homeReqUrl(params, 'stores/').then(res=>{
      if (!isLoading) {this.setState({refreshingBusiness:false});}
      if (res.msg == 'ok') {
        let newBusinessData = [];
        if (isLoading) {
          newBusinessData = businessData.concat(res.data);
        }else {
          newBusinessData = res.data;
        }
        this.setState({
          businessData:newBusinessData
        })
      }
    });
  }

  renderBusiness(){
    const {businessData} = this.state;
    const {navigate} = this.props.navigation;
    return (
      <FlatList
        data={businessData}
        extraData={this.state}
        ItemSeparatorComponent={()=><View style={s.common.pageGe}/>}
        keyExtractor={(item, index) => index + ''}
        onEndReachedThreshold={s.isIOS?(-0.1):0.1}
        onEndReached={(info) => {this.reqStoresData(true)}}
        onRefresh={()=>this.reqStoresData()}
        refreshing={this.state.refreshingBusiness}
        renderItem={({item, separators}) =>(
          <RButton onPress={()=>navigate('StoreDetail', {id: item.store_id})}>
            <View style={s.wedding.listView}>
              <Image
                style={s.wedding.listImage}
                source={{uri:fun.getImgUrl(item.store_lowitem)}}
              />
              <View style={s.wedding.listRightView}>
                <View style={s.wedding.areaView}>
                  <Text style={s.wedding.shopName} numberOfLines={1}>{item.store_name}</Text>
                  <Text style={s.wedding.area} numberOfLines={1}>{item.store_address}</Text>
                </View>
                <View style={s.wedding.moneyView}>
                  <Text style={s.wedding.money}>￥{item.store_lowprice}</Text>
                  <Text style={s.wedding.moneyMore}>起</Text>
                </View>
              </View>
            </View>
          </RButton>
        )}
      />
    );
  }

  renderPrice(){
    const priceData = this.state.priceData;
    const {navigate} = this.props.navigation;
    return (
      <FlatList
        data={priceData}
        extraData={this.state}
        ItemSeparatorComponent={()=><View style={s.common.pageGe}/>}
        keyExtractor={(item, index) => index + ''}
        onEndReachedThreshold={s.isIOS?(-0.1):0.1}
        onEndReached={(info) => {this.reqPriceData(true)}}
        onRefresh={()=>this.reqPriceData()}
        refreshing={this.state.refreshingPrice}
        renderItem={({item, separators}) =>(
          <RButton onPress={()=>navigate('StoreDetail', {id: item.item_id})}>
            <View style={s.wedding.listViewPrice}>
              <Image
                style={s.wedding.listImagePrice}
                source={{uri:fun.getImgUrl(item.item_poster)}}
              />
              <View style={s.wedding.listRightViewPrice}>
                <View style={s.wedding.areaView}>
                  <Text style={s.wedding.shopName} numberOfLines={1}>{item.item_title}</Text>
                  <Text style={s.wedding.area} numberOfLines={1}>{item.store_name}</Text>
                </View>
                <View style={s.wedding.moneyView}>
                  <Text style={s.wedding.money}>￥{item.item_price}</Text>
                  {/* <Text style={s.wedding.moneyMore}>起</Text> */}
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
    const {tab} = this.state;
    return (
      <View>
        <View style={s.common.topView}/>
        <View style={s.common.header}>
          <RButton onPress={()=>{goBack()}}>
            <Image
              source={require('../images/left-icon.png')}
              style={s.wedding.leftImg}
            />
          </RButton>
          <View style={s.wedding.tab}>
            <RButton
              style={!tab ? s.wedding.seltabBtn : s.wedding.tabBtn}
              onPress={()=>{this.setState({tab:0}, ()=>this.reqStoresData())}}>
              <View style={s.common.flexCenter}>
                <Text style={!tab ? s.wedding.seltabBtnText : s.wedding.tabBtnText}>商家</Text>
              </View>
            </RButton>
            <RButton
              style={tab ? s.wedding.seltabBtn : s.wedding.tabBtn}
              onPress={()=>{this.setState({tab:1}, ()=>this.reqPriceData())}}>
              <View style={s.common.flexCenter}>
                <Text style={tab ? s.wedding.seltabBtnText : s.wedding.tabBtnText}>套系</Text>
              </View>
            </RButton>
          </View>
          <View>
          </View>
        </View>
        <View style={s.common.scroll}>
          {tab ? this.renderPrice() : this.renderBusiness()}
        </View>
      </View>
    );
  }
}
