import request from 'utils/request';

export default class Test {
  static test(reqData) {
    return request.get('/test', reqData).then(res => {
      return res;
    }).catch(err => {
      return err;
    })
  }
}
