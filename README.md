# A form validate package for china

## Install

```bash
npm install hj-validate
```

## Usage

This validate function can validate "phone, telephone, email". For example:

```javascript
let _validate = require('hj-validate')
console.log(_validate('18956739821','phone'))
// > true  // return boolean
console.log(_validate('021-88869995','telephone'))
console.log(_validate('lennohj@126.com','email'))
```

## Issues

For questions and support please visit [github issues](https://github.com/hihjdotcn/hj-validate/issues).
