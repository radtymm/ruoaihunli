import {StyleSheet, Dimensions, PixelRatio, Platform} from 'react-native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
let isIOS = (Platform.OS === 'ios');
let fontScale = PixelRatio.getFontScale();
let pixelRatioGet = PixelRatio.get();
const defaultPixel = 2;
const w2 = 375 / defaultPixel;
const h2 = 667 / defaultPixel;
const scale = Math.min(HEIGHT / h2, WIDTH / w2);   //获取缩放比例

let setSize = (size)=>{
    size = Math.round(size * scale + 0.5);
    return size / defaultPixel;
}

const common = StyleSheet.create({
  topView:{width:WIDTH, height:setSize(20), backgroundColor:'#fff',},
  pageGe:{width:WIDTH, backgroundColor:'#f0f0f0', height:setSize(10),},
  justify:{flexDirection:'row', alignItems:"center"},
  flexCenter:{flex:1, justifyContent:"center", alignItems:"center"},
  header: {backgroundColor:'#fff', height:setSize(45), flexDirection:'row', width:WIDTH, alignItems:"center", justifyContent:"space-between", paddingHorizontal:setSize(10)},
  scroll:{height:(HEIGHT - setSize(65))},
  leftImg:{width:setSize(20), height:setSize(20), resizeMode:'contain'},
  titleView:{width:setSize(150),  alignItems:"center", justifyContent:"center", flexDirection:"row"},
  titleText:{color:"#f64f1b", fontSize:setSize(18)},
});

const wedding = StyleSheet.create({
  leftImg:{width:setSize(20), height:setSize(20), resizeMode:'contain'},
  tab:{width:setSize(150), height:setSize(30), borderRadius:setSize(4), borderColor:"#f64f1b", borderWidth:1, alignItems:"center", justifyContent:"center", flexDirection:"row"},
  tabBtn:{flex:1, justifyContent:"center", alignItems:"center"},
  seltabBtn:{backgroundColor:"#f64f1b", flex:1, justifyContent:"center", alignItems:"center"},
  tabBtnText:{color:"#f64f1b",},
  seltabBtnText:{color:"#fff"},
  listView:{backgroundColor:"#fff", width:WIDTH, height:setSize(140), padding:setSize(10), flexDirection:"row",},
  listViewPrice:{backgroundColor:"#fff", width:WIDTH, height:setSize(306),},
  listImage:{width:setSize(160), height:setSize(118), marginRight:setSize(10)},
  listImagePrice:{width:WIDTH, height:setSize(250),},
  listRightView:{justifyContent:'space-between', },
  listRightViewPrice:{justifyContent:'space-between', padding:setSize(10), flexDirection:"row"},
  shopName:{fontSize:setSize(16)},
  area:{color:"#999"},
  moneyView:{flexDirection:"row", },
  money:{color:'#FF5800'},
  moneyMore:{color:'#FF5800', backgroundColor:'#FFE8D7', marginLeft:setSize(3)},
});

const merchant = StyleSheet.create({
  leftImg:{width:setSize(20), height:setSize(20), },
  tab:{width:setSize(150),  alignItems:"center", justifyContent:"center", flexDirection:"row"},
  tabText:{color:"#f64f1b", fontSize:setSize(18)},
  listView:{backgroundColor:"#fff", width:WIDTH, height:setSize(140), padding:setSize(10), flexDirection:"row",},
  listImage:{width:setSize(160), height:setSize(118), marginRight:setSize(10)},
  listRightView:{justifyContent:'space-between', },
  shopName:{fontSize:setSize(16)},
  area:{color:"#999"},
  moneyView:{flexDirection:"row", },
  money:{color:'#FF5800'},
  moneyMore:{color:'#FF5800', backgroundColor:'#FFE8D7', marginLeft:setSize(3)},
});

const hotelDetail = StyleSheet.create({
  infoImg:{width:WIDTH, height:setSize(175)},
  infoView:{padding:setSize(20), backgroundColor:"#fff"},
  moneyView:{marginVertical:setSize(15), flexDirection:'row'},
  moneyText:{color:"#FF859A"},
  desk:{color:'#999'},
  deskTotle:{marginLeft:setSize(20), color:'#999'},
  contactView:{paddingHorizontal:setSize(20),backgroundColor:"#fff"},
  contactList:{flexDirection:'row', alignItems:"center", height:setSize(45), borderBottomWidth:1, borderBottomColor:"#e7e7e7"},
  contactText:{color:'#999', marginLeft:setSize(20)},
  banquetHall:{paddingHorizontal:setSize(20), backgroundColor:"#fff"},
  banquetHallTitle:{height:setSize(40), justifyContent:'center'},
  banquetHallView:{flexDirection:"row", borderWidth:1, borderColor:"#e7e7e7", borderRadius:setSize(4), marginBottom:setSize(10)},
  banImg:{width:setSize(85), height:setSize(85), },
  banInfoView:{padding:setSize(10), justifyContent:"space-between", },
  banInfoDesk:{fontSize:setSize(12), color:"#999"},
  minMoney:{marginLeft:setSize(30)},
  menuInfoView:{paddingHorizontal:setSize(20), backgroundColor:"#fff"},
  merryMenu:{justifyContent:'center', height:setSize(40)},
  menulist:{flexDirection:"row", alignItems:"center", justifyContent:'space-between', height:setSize(40), borderTopColor:"#e7e7e7", borderTopWidth:setSize(1)},
  phoneView:{backgroundColor:"#f65780", width:WIDTH, height:setSize(40), justifyContent:"center", alignItems:"center"},
  phoneText:{color:"#fff"},
});

const home = StyleSheet.create({
  container: {flex:1},
  scroll:{height:(HEIGHT - setSize(65))},
  topArea: {color:'#f96500', marginRight:setSize(5), fontSize:setSize(14)},
  areaView: {flex:1, width:setSize(100), justifyContent:"center",},
  phoneImg: {width:setSize(18), height:setSize(18), resizeMode:'contain'},
  header: {backgroundColor:'#fff', height:setSize(45), flexDirection:'row', width:WIDTH, alignItems:"center", justifyContent:"space-between", paddingHorizontal:setSize(10)},
  carouselImg: {width:WIDTH, height:setSize(186)},
  imgLogo: {width:setSize(27), height: setSize(27), resizeMode:'center'},
  contentLogo: {backgroundColor:'#fff', width:WIDTH, flexDirection:'row', justifyContent:'flex-start', paddingTop:setSize(24), },
  contentView: {width:setSize(75), height: setSize(68),justifyContent:"center", alignItems:'center'},
  listContent:{backgroundColor:"#fff", paddingHorizontal:setSize(10), marginTop:setSize(10)},
  listTitleView:{flexDirection:'row', alignItems:'center', justifyContent:'space-between', height:setSize(40)},
  listTitleGe:{width:setSize(3), height:setSize(20), backgroundColor:"#f75781", marginRight:setSize(5)},
  listView:{borderColor:"#f2f2f2", borderWidth:1, borderRadius:setSize(2), alignItems:"center", marginBottom:setSize(10)},
  listImg:{width:setSize(165), height:setSize(90)},
  oneView:{flexDirection:"row", flexWrap:'wrap', justifyContent:'space-between'},
  textArea:{fontSize:setSize(16), color:"#777", width:setSize(165), marginTop:setSize(10), justifyContent:'center'},
  textMoney:{color:"#f75781", marginBottom:setSize(10)},
});

const storeDetail = StyleSheet.create({
  scroll:{backgroundColor:"#fff", height:setSize(HEIGHT - 45)},
  imgFirst:{width:setSize(375), height:setSize(290)},
  imgList:{width:setSize(108), height:setSize(80), margin:setSize(5)},
  title:{paddingLeft:setSize(10), fontSize:setSize(24), marginTop:setSize(20), marginBottom:setSize(20), fontWeight:'bold', color:"#333"},
  moneyView:{paddingLeft:setSize(10), flexDirection:'row', alignItems:"flex-end", marginBottom:setSize(40)},
  moneySymbol:{fontSize:setSize(24), color:'#F83244'},
  moneyDiscount:{fontSize:setSize(40), color:'#F83244'},
  moneyPrice:{fontSize: setSize(12), color: '#999', marginLeft: setSize(16), textDecorationLine: 'line-through'},
  detailLine:{width:WIDTH, borderColor:"#FA9A7B", borderBottomWidth:1, backgroundColor:"#FBFAFC", marginBottom:setSize(18)},
  detailView:{height:setSize(45), width:setSize(90), borderColor:"#FA9A7B", borderRightWidth:1, borderTopWidth:3, alignItems:"center", justifyContent:"center"},
  consultView:{height:setSize(45), width:WIDTH, flexDirection:"row"},
  consultOnline:{flex:1, backgroundColor:"#FF7D48", alignItems:"center", justifyContent:"center"},
  consultPhone:{flex:1, backgroundColor:"#372B2B", alignItems:"center", justifyContent:"center"},
  consultText:{color:"#fff", fontSize:setSize(18)},
  webView:{width:WIDTH, height:'auto', backgroundColor:"#fff", height:setSize(300)}
});

const styles = {
  home,
  common,
  hotelDetail,
  wedding,
  merchant,
  storeDetail,
  WIDTH,
  HEIGHT,
  setSize,
  isIOS,
};
export default styles;
