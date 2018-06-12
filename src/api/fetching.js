
export default fetching = (data)=>{
  let url = data.api + data.apiTail;
  let params = data.data;
  if (params) {
    let paramsArray = [];
    //拼接参数
    Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
    if (url.search(/\?/) === -1) {
      url += '?' + paramsArray.join('&')
    } else {
      url += '&' + paramsArray.join('&')
    }
  }
  console.log(url);
  return fetch(url).then((response) => {
    if (response.ok) {
      // console.log('response');
      // console.log(response);
      return response.json();
    }
  }).then((json) => {
    // console.log('json');
    // console.log(json)
    return json;
  }).catch((error) => {
    // console.log('error');
    // console.error(error);
    return error;
  });
}
