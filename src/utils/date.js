export default class YNTimeUtil {
  /**       
  * 对Date的扩展，将 Date 转化为指定格式的String       
  * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q) 可以用 1-2 个占位符       
  * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)       
  * eg:       
  * (new Date()).pattern("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423       
  * (new Date()).patterns("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04       
  * (new Date()).pattern("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04       
  * (new Date()).pattern("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04       
  * (new Date()).pattern("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18       
  */
  static date2string(date, fmt) {
    var o = {
      "M+": date.getMonth() + 1, //月份           
      "d+": date.getDate(), //日           
      "h+": date.getHours() % 12 == 0 ? 12 : date.getHours() % 12, //小时           
      "H+": date.getHours(), //小时           
      "m+": date.getMinutes(), //分           
      "s+": date.getSeconds(), //秒           
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度           
      "S": date.getMilliseconds() //毫秒           
    };
    var week = {
      "0": "/u65e5",
      "1": "/u4e00",
      "2": "/u4e8c",
      "3": "/u4e09",
      "4": "/u56db",
      "5": "/u4e94",
      "6": "/u516d"
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    if (/(E+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[date.getDay() + ""]);
    }
    for (var k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      }
    }
    return fmt;
  }

  /**
   * 2016-09-03
   */
  static string2Date(dateStr) {
    let year = dateStr.substring(0, 4);
    let month = dateStr.substring(5, 7)
    let day = dateStr.substring(8, 10)
    month = parseInt(month) - 1
    return new Date(year, month, day)
  }
  /**
   * millionSeconds 返回 2016-09-14
   */
  static long2String(dateLong) {
    let date = new Date(dateLong)
    return date.Format('yyyy-MM-dd')
  }
  /**
   * millionSeconds 返回 2016-09-14
   */
  static long2StringFromat(dateLong) {
    let date = new Date(dateLong)
    return date.Format('yyyy-MM-dd hh:mm')
  }
  /**
   * 2016-09-03
   */
  static string2long(dateStr) {
    let date = this.string2Date(dateStr)
    return date.getTime()
  }
  /*根据出生日期算出年龄*/
  static getAge(strBirthday) {
    var returnAge;
    var strBirthdayArr = strBirthday.split("-");
    var birthYear = strBirthdayArr[0];
    var birthMonth = strBirthdayArr[1];
    var birthDay = strBirthdayArr[2];

    d = new Date();
    var nowYear = d.getFullYear();
    var nowMonth = d.getMonth() + 1;
    var nowDay = d.getDate();

    var ageDiff = nowYear - birthYear; //年之差  
    let todayLong = this.string2long(new Date().Format('yyyy-MM-dd'));
    let birthdayLong = this.string2long(strBirthday);

    if ((todayLong - birthdayLong) >= 0) {
      if (nowMonth == birthMonth) {
        var dayDiff = nowDay - birthDay;//日之差  
        if (dayDiff < 0) {
          returnAge = ageDiff - 1;
        }
        else {
          returnAge = ageDiff;
        }
      }
      else {
        var monthDiff = nowMonth - birthMonth;//月之差  
        if (monthDiff < 0) {
          returnAge = ageDiff - 1;
        }
        else {
          returnAge = ageDiff;
        }
      }
    } else {
      returnAge = -1;//返回-1 表示出生日期输入错误 晚于今天  
    }

    return returnAge;//返回周岁年龄  

  }
  /*根据出生日年份期算出年龄*/
  static getAgeWithYear(strBirthday) {
    let returnAge = -1;
    let strBirthdayArr = strBirthday.split("-");
    let birthYear = strBirthdayArr[0];

    d = new Date();
    let nowYear = d.getFullYear();
    returnAge = nowYear - birthYear; //年之差  

    return returnAge;//返回周岁年龄  

  }
  /**
   * @param  expireDate 时间字符串 eg '2016-08-09'
   */
  static isInvalid(expireDate) {
    if (expireDate === null || expireDate === undefined || expireDate === '')
      return false;
    let inValidTime = this.string2long(expireDate) + 24 * 60 * 60 * 1000
    let nowTime = new Date().getTime()

    if (nowTime >= inValidTime) {
      return true
    } else {
      return false
    }
  }
  static getTodayZeroTime() {
    let nowTodayStr = new Date().Format('yyyy-MM-dd')
    let time = this.string2Date(nowTodayStr).getTime()
    return time
  }

  static getDateZeroTime(timeLong) {
    let dateStr = new Date(timeLong).Format('yyyy-MM-dd');
    return this.string2long(dateStr);
  }

}