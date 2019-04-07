/**
 * [校验是否是合法的URL]
 * @param  {String}   str      [待判断字符串]
 * @return {Boolean}           [true:满足规则，false:不满足]
 */
export function validateURL(str) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(str)
}

/** 
 * [校验登录名：只能输入5-20个以字母开头、可带数字、“_”、“.”的字串]
 * @param   {String}   str      [待判断字符串]
 * @returns {Boolean}           [true:满足规则，false:不满足]
 */
export function isRegisterUserName(str) {
  var patrn = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/;
  if (!patrn.exec(str)) return false
  return true
}

/** 
 * [校验密码：只能输入6-20个字母、数字、下划线]
 * @param   {String}   str      [待判断字符串]
 * @returns {Boolean}           [true:满足规则，false:不满足]
 */
export function isPasswd(str) {
  var patrn = /^(\w){6,20}$/;
  if (!patrn.exec(str)) return false
  return true
}

/** 
 * [验证时间]
 * @param   {String}   dateValue      [格式为：YYYY-MM-DD ]
 * @returns {Boolean}                 [true:满足规则，false:不满足]
 */
export function isDate(dateValue) {
  var result = dateValue.match(/((^((1[8-9]\d{2})|([2-9]\d{3}))(-)(10|12|0?[13578])(-)(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))(-)(11|0?[469])(-)(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))(-)(0?2)(-)(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)(-)(0?2)(-)(29)$)|(^([3579][26]00)(-)(0?2)(-)(29)$)|(^([1][89][0][48])(-)(0?2)(-)(29)$)|(^([2-9][0-9][0][48])(-)(0?2)(-)(29)$)|(^([1][89][2468][048])(-)(0?2)(-)(29)$)|(^([2-9][0-9][2468][048])(-)(0?2)(-)(29)$)|(^([1][89][13579][26])(-)(0?2)(-)(29)$)|(^([2-9][0-9][13579][26])(-)(0?2)(-)(29)$))/);
  if (result == null) {
    return false;
  }
  return true;
}


/** 
 * [验证电话号码]
 * @param   {String}   phoneValue       [要验证的电话号码]
 * @returns {Boolean}                   [true:满足规则，false:不满足]
 */
export function isPhone(phoneValue) {
  var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
  if (!myreg.test(phoneValue)) {
    return false;
  } else {
    return true;
  }  
}

/** 
 * [验证邮箱]
 * @param   {String}   emailValue       [要验证的邮箱]
 * @returns {Boolean}                   [true:满足规则，false:不满足]
 */
export function isEmail(emailValue) {
  var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  return reg.test(emailValue);
}

/** 
 * [判断是否是数字]
 * @param   {String}   numberValue      [要验证的数据]
 * @returns {Boolean}                   [true:满足规则，false:不满足]
 */
export function isNumber(numberValue) {
  var reg1 = /^[0-9]{0,}$/;
  var reg2 = /^[1-9]{1}[0-9]{0,}$/;
  if (numberValue == null || numberValue.length == 0) {
    return false;
  }
  numberValue = numberValue.replace(/(^\s*)|(\s*$)/g, "");
  //判断当数字只有1位时  
  if (numberValue.length < 2) {
    return reg1.test(numberValue);
  }
  return reg2.test(numberValue);;
}

/** 
 * [判断是否是汉字]
 * @param   {String}   charValue      [要验证的数据]
 * @returns {Boolean}                 [true:满足规则，false:不满足]
 */
export function isCharacter(charValue) {
  var reg = /^[\u4e00-\u9fa5]{0,}$/;
  return reg.test(charValue);
}

/** 
 * [验证座机号]
 * @param   {String}   telValue      [要验证的座机号]
 * @returns {Boolean}                 [true:满足规则，false:不满足]
 */
export function isTel(telValue) {
  var myreg = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
  if (!myreg.test(telValue)) {
    return false;
  } else {
    return true;
  }  
}
