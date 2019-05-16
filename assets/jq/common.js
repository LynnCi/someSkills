//接口地址
var urlstr = 'http://weihuiyi.zcgljg.com/',
    imgstr = 'http://weihuiyi.zcgljg.com/upload/',
    halfUrl = GetRequest(),
    Token = sessionStorage.getItem('token');

$(function(){
    
});

// 显示提示框
function showTips(str) {
    $('#tips').html(str).show();
    setTimeout(function () {
        $('#tips').hide();
    }, 1200);
}

//去除字符串,
function getString(str) {
    return str.slice(0,-1);
}

//截取url数据
function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

// 时间戳转时间（年月日时分秒）
function ZHDate(now) {
    var year = now.getYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    return "20" + year.toString().slice(1, 3) + "-" + getzf(month) + "-" + getzf(date) + " " + getzf(hour) + ":" + getzf(minute) +":"+ getzf(second);
}
// 时间戳转时间（年月日）
function formatDate(now) {
    var year = now.getYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    return "20" + year.toString().slice(1, 3) + "-" + getzf(month) + "-" + getzf(date);
}
//补0
function getzf(num) {
    if (parseInt(num) < 10) {
        num = '0' + num;
    }
    return num;
}


/**************************** 正则验证 *********************************/
//验证手机号
var PhoneCheck = /^1[3456789]\d{9}$/;
//邮箱
var MailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
