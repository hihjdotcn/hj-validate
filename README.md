# A form validate package for china

## Install

```bash
npm install hj-validate
```

## Usage

This validate function can validate "Phone, Telephone, Password, UserName, IdentityCard, PostalCard, Email". Example for vue:

```javascript
// Resource Code

// 手机号  Phone
export function vPhone(str) {
  const reg = /^1[345678]\d{9}$/
  if (!reg.test(str)) {
    return '请输入正确的手机号码!'
  }
}

// 固定电话号码 Telephone
export function vTelephone(str) {
  const reg = /^0\d{2,3}-?\d{7,8}$/
  if (!reg.test(str)) {
    return '请输入正确的固定号码!'
  }
}

// 用户密码 Password
export function vPassword(str) {
  if (!(/[\@#\!*$!]/.test(str) && /[a-z]/.test(str) && /[0-9]/.test(str) && /[A-Z]/.test(str))) {
    return '!@#*$，小写字母，大写字母，数字，均必须有至少一个！'
  } else if (str.length > 20 || str.length < 10) {
    return '长度必须为10-20位!'
  } else if (str.indexOf(' ') > -1) {
    return '密码不能包含空格!'
  } else {
    return false
  }
}

// 用户名 UserName
export function vUserName (str) {
  let regType = /^[a-zA-Z0-9_]*$/
  let regLength = /^[a-zA-Z0-9_]{5,24}$/
  if (!regType.test(str)) {
    return '用户名需由字母、数字或下划线组成!'
  } else if (!regLength.test(str)){
    return '用户名长度需为6～24位!'
  } else {
    return false
  }
}

// 中国大陆身份证号  Identity Card
export function vIdentityCard (str) {
  let reg = /\d{15}(\d\d[0-9xX])?/
  if (!reg.test(str)) {
    return '请输入正确的身份证号码!'
  } else {
    return false
  }
}

// 中国大陆邮政编码  Postal Code
export function vPostalCard (str) {
  let reg = /[1-9]\d{5}/
  if (!reg.test(str)) {
    return '请输入正确的邮政编码!'
  } else {
    return false
  }
}

// 电子邮箱 Email
export function vEmail (str) {
  let reg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
  if (!reg.test(str)) {
    return '请输入正确的电子邮箱!'
  } else {
    return false
  }
}
```

```javascript
// Vue Code
<template>
  <div>
    <el-input v-model="userPhone"></el-input>
    <span>{{ msg }}</span>
  </div>
</template>
<script>
import {vPhone} from 'hj-validate'

export default {
  name: 'validatePage',
  data() {
    return {
      userPhone: '',
      msg: '' || '初始状态'
    }
  },
  watch: {
    userPhone(val) {
      if (vPhone(val)) {
        this.msg = vPhone(val)
      } else {
        this.msg = '验证通过！'
      }
    }
  }
}
</script>
```

## Issues

For questions and support please visit [github issues](https://github.com/hihjdotcn/hj-validate/issues).
