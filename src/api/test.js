import request from 'utils/request';

export default class Test {
  static test() {
    return request.get('/dev/test')
  }
}
