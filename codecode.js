; (function (createElement, getURLSearchParams) {
    createElement && createElement()
    var btnGetCode = document.getElementById('btnGetCode')
    var btnSendCode = document.getElementById('btnSendCode')
    btnGetCode.onclick = function () {
        location.href = 'https://open.95516.com/s/open/html/oauth.html?appId=deb6744ea6ef43409042931e47d3960f&redirectUri=https%3A%2F%2Fcater.95516.com%2Fweb1%2Ftest%2Fdemo%2F&responseType=code&scope=upapi_base&state=STATE'
    }
    btnSendCode.onclick = function () {
        var code = getURLSearchParams().code
        if (code) {
            var requestOptions = {
                method: 'POST',
                redirect: 'follow'
            };

            fetch("http://192.168.43.248:3001/user", requestOptions)
                .then(response => response.json())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
        }
    }
}(function (appendStyle) {
    appendStyle && appendStyle()
    var btnGetCode = document.createElement('button')
    btnGetCode.innerText = '获取Code'
    btnGetCode.id = 'btnGetCode'
    document.body.appendChild(btnGetCode)
    var btnSendCode = document.createElement('button')
    btnSendCode.innerText = '发送Code'
    btnSendCode.id = 'btnSendCode'
    document.body.appendChild(btnSendCode)

}.bind(null, function () {
    var style = document.createElement('style')
    style.innerText = `
    #btnGetCode, #btnSendCode {
        background: red;
        position: relative;
        z-index: 666;
    }
    `
    document.head.appendChild(style)
}), function getURLSearchParams() {
    return {
        code: new URLSearchParams(location.search).get('code')
    }
}))
