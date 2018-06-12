import fetching from './fetching';

export default {
  // 首页
  homeReqUrl: (data, apiTail) => fetching({
    api: 'https://app.ruoaihunli.com/',
    apiTail: apiTail||'',
    data
  }),
  // 婚纱摄影详情
  stores: (data, apiTail) => fetching({
    api: 'https://app.ruoaihunli.com/stores/',
    apiTail: apiTail||'',
    data
  }),
}
