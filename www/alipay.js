/**
 * Created by Alben on 2017/4/19.
 */


var exec = require('cordova/exec');

exports.pay = function (paymentInfo, successCallback, errorCallback) {
    if(!paymentInfo){
        errorCallback && errorCallback("Please enter order information");
    }else{
        exec(successCallback, errorCallback, "AliPay", "pay", [paymentInfo]);
    }
};