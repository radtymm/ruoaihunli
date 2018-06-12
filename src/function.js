import { Linking } from 'react-native';
// import {Toast} from 'antd-mobile';

export default fun = {
  call:(phoneNumber)=>{
    const url = `tel:${phoneNumber}`;
    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
          console.log('Can\'t handle url: ' + url);
      } else {
          return Linking.openURL(url);
      }
    }).catch(err => console.error('An error occurred', err));
  },

  getImgUrl:(url)=>{
     // + '?imageView2/1/w/400/h/400/interlace/1/q/100|imageslim'
    return 'http://cdn.ruoaihunli.com/' + url ;
  },

};
