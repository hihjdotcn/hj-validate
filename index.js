/**
 * description: 表单验证
 * author: hj
 * createDate: '2019-08-08'
 * lastEditDate: '2022-05-15'
 */

 "use strict";

 /**
  * @description: 手机号 验证
  * @param {string,number}
  * @return {null || string}
  */
 export function vPhone (stringOrNumber) {
   const reg = /^1[3456789]\d{9}$/
   return reg.test(stringOrNumber) ? null : '请输入正确的手机号码'
 }
 
 /**
  * @description: 固定电话 验证
  * @param {string}
  * @return {null || string}
  */
 export function vTelephone (str) {
   const reg = /^0\d{2,3}-?\d{7,8}$/
   return reg.test(str) ? null : '请输入正确的固定电话号码'
 }
 
 /**
  * @description: 用户名 验证
  * @param {
  *  minLength: number || 5, // 用户名最小长度
  *  maxLength: number || 24, // 用户名最大长度
  * }
  * @return {null || string}
  */
 export function vUserName (str, options) {
   let p = {
     minLength: options && options.minLength || 5,
     maxLength: options && options.maxLength || 24
   }
   let regType = /^[a-zA-Z0-9_-]*$/
   if (!regType.test(str)) {
     return '请使用字母、数字、中划线或下划线' 
   } else if (str.length < p.minLength || str.length > p.maxLength){
     return '字符需' + p.minLength + '～' + p.maxLength + '个'
   } else {
     return null
   }
 }
 
 /**
  * @description: 密码 验证 (默认10到20位,包括大、小写字母，特殊字符)
  * @param {
  *  minLength: number || 10, // 密码最小长度
  *  maxLength: number || 20, // 密码最大长度
  *  closeSpecial: boolean, // 关闭特殊字符的校验
  *  closeUpperLetter: boolean // 关闭大写字母的校验
  * }
  * @return { null || string }
  */
 export function vPassword(str, options) {
   let p = {
     minLength: options && options.minLength || 10,
     maxLength: options && options.maxLength || 20,
     closeSpecial: options && options.closeSpecial || false,
     closeUpperLetter: options && options.closeUpperLetter || false
   }
   let result = []
   let returnMsg = ''
   if (!/[0-9]/.test(str)) {
     result.push('数字')
   }
   if (!/[a-z]/.test(str)) {
     result.push('小写字母 ')
   }
   if (!p.closeUpperLetter && !/[A-Z]/.test(str)) {
     result.push('大写字母')
   }
   if (!p.closeSpecial && !/[@#!*$^%&]/.test(str)) {
     console.log(p.closeSpecial && !/[@#!*$^%&]/.test(str));
     result.push('特殊字符')
   } 
   if (str.length < p.minLength || str.length > p.maxLength) {
     result.push(p.minLength + '～' + p.maxLength + '个字符')
   }
   if (str.indexOf(' ') > -1) {
     result.push('不能包含空格')
   }
   if (result.length > 0 ) {
     if (result.length === 1 && result[0] === '不能包含空格') {
       returnMsg = '不能包含空格'
     } else {
       returnMsg = '需包含 ' + result.join(',')
     }
   }
   return returnMsg || null
 }
 
 /**
  * @description: 包含中文 验证
  * @param {string}
  * @return {null || string}
  */
  export function vChinese(str) {
   const reg = /^[\u4e00-\u9fa5]*$/
   return reg.test(str) ? null : '请输入中文字符'
 }
 
 /**
  * @description: 电子邮箱 验证
  * @param {string}
  * @return {null || string}
  */
 export function vEmail (str) {
   let reg = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/
   return reg.test(str) ? null : '请输入正确的电子邮件地址'
 }
 
 /**
  * @description: 中国大陆身份证(18位) 验证
  * @param {string}
  * @return {null || string}
  */
 export function vIdCard (str) {
   let reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/
   return reg.test(str) ? null : '请输入正确的身份证号码'
 }
 
 /**
  * @description: 中国大陆邮政编码 验证
  * @param {number}
  * @return {null || string}
  */
 export function vPostCard (num) {
   let reg = /^[1-9]\d{5}$/
   return reg.test(num) ? null : '请输入正确的邮政编码'
 }
 
 /**
  * @description: 合法uri 验证
  * @param {string}
  * @return {null || string}
  */
 export function vURI(str) {
   const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
   return reg.test(str) ? null : '请输入正确的uri地址'
 }
 