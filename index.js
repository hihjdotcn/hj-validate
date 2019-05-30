"use strict";
var hj_validate = function (val, type) {
	var result;
	var obj = [
		{
			vType: 'phone',
			reg:/^1[34578]\d{9}$/
		},
		{
			vType: 'telephone',
			reg: /^0\d{2,3}-?\d{7,8}$/
		},
		{
			vType: 'email',
			reg: /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/
		}
	];
	obj.forEach(function (item,index) {
		if(item.vType === type){
			result = item.reg.test(val);
		}
	})
	return result
}
module.exports = hj_validate
