# Js 表单验证方法

## 安装

```bash
npm install hj-validate -S
or
yarn add hj-validate -S
```

## 介绍
hj-validate 包括以下验证表单方法：
```javascript
import {vPhone, vTelephone, vUserName, vPassword, vChinese, vEmail, vIdCard, vPostCard, vURI } from hj-validate
```
1. 手机号 vPhone
2. 固定电话 vTelephone
3. 用户名 vUserName
4. 密码 vPassword
5. 中文 vChinese
6. 电子邮箱 vEmail
7. 中国大陆身份证 vIdCard
8. 中国大陆邮政编码 vPostCard
9. 合法uri vURI

表单验证通过时，方法返回的是null; 表单验证未通过时，方法返回验证错误的提示信息。

## 使用方法
#### 手机 验证
```javascript
/**
 * @description: 手机号 验证
 * @param {string || number}
 * @return {null || string}
 */
import { vPhone } from hj-validate
console.log(vPhone(139888877777)) // null
console.log(vPhone(672)) // '请输入正确的手机号码'
```

#### 固定电话(带区号) 验证
```javascript
/**
 * @description: 固定电话号码(带区号) 验证
 * @param {string || number}
 * @return {null || string}
 */
import { vTel } from hj-validate
console.log(vTel('021-2313423')) // null
console.log(vTel('2313423')) // '请输入正确的固定电话号码'
```

#### 用户名 验证
```javascript
/**
 * @description: 用户名验证 (5到24位,包括字母,数字,中划线,下划线)
 * @param {
 *  minLength: number || 5, // 用户名最小长度
 *  maxLength: number || 24, // 用户名最大长度
 * }
 * @return {boolean}
 */
import { vUserName } from hj-validate
console.log(vUserName('hj-validate')) // null
console.log(vUserName('hjvalid', {minLength: 10, maxLength:30})) // '字符需10～30个' 
```

#### 密码 验证
```javascript
/**
 * @description: 密码验证 (默认10到20位,包括大、小写字母，特殊字符)
 * @param {
 *  minLength: number || 10, // 密码最小长度
 *  maxLength: number || 20, // 密码最大长度
 *  closeSpecial: boolean || regExp, // 无需包含特殊字符
 *  closeUpperLetter: boolean || regExp // 无需包含大写字母
 * }
 * @return { null || string }
 */
import { vPassword } from hj-validate
console.log(vPassword('Hj@898923')) // null
console.log(vPassword('Hj12345678'), {
  minLength: 13,
  maxLength: 30,
  closeSpecial: true,
  closeUpperLetter: true
}) // null
console.log(vPassword('hj')) // 需包含数字,!@#*$ 特殊字符,大写字母,字符需10～20个
```

#### 中文 验证
```javascript
/**
 * @description: 中文验证 (必须全部都为中文)
 * @param {string}
 * @return {null || string}
 */
import { vChinese } from hj-validate
console.log(vChinese('王伟')) // null
console.log(vChinese('hj王')) // '请输入中文字符'
```

#### 电子邮箱 验证
```javascript
/**
 * @description: 电子邮箱
 * @param {string}
 * @return {null || string}
 */
import { vEmail } from hj-validate
console.log(vEmail('hj@126.com')) // null
console.log(vEmail('hj@126com')) // '请输入正确的电子邮箱格式'
```

#### 中国大陆身份证 验证
```javascript
/**
 * @description: 中国大陆身份证(18位)
 * @param {string}
 * @return {null || string}
 */
import { vIdCard } from hj-validate
console.log(vIdCard('310227198808073210')) // null
console.log(vIdCard('481293849123')) // '请输入正确的身份证号码'
```

#### 中国大陆邮政编码 验证
```javascript
/**
 * @description: 中国大陆邮政编码(6位)
 * @param {string}
 * @return {null || string}
 */
import { vPostCard } from hj-validate
console.log(vPostCard('201200')) // null
console.log(vPostCard('92009323')) // '请输入正确的邮政编码'
```

#### 合法uri 验证
```javascript
/**
 * @description: 合法uri
 * @param {string}
 * @return {null || string}
 */
import { vURI } from hj-validate
console.log(vURI('https://www.hihj.cn')) // null
console.log(vURI('http:dfda.com')) // '请输入正确的uri地址'
```

## 提问或建议

如在使用hj-validate中有疑问，可以将问题或建议发到github上，请点击 [github issues](https://github.com/hihjdotcn/hj-validate/issues).



