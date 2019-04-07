 /**
  * 将URL中的参数转换为对象
  * @author huhl
  * @param  {String}   url [请求的URL地址]
  * @return {Object}       [将请求的参数部分转换为一个对象]
  */
 export function param2Obj( url ) {
   const search = url.split('?')[1]
   if (!search) {
     return {}
   }
   return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
 }