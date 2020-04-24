var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?00c720dea894513dfe668ec6c6321868";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();



function web_selecter() {
    var web = document.getElementById("web");
    var value = web.options[web.selectedIndex].value.split("$");
    var url = value[0];
    var para = value[1];
    var txt = value[2];
    var flag = value[3];
    document.getElementById("f1").action = url;
    document.getElementById("search").name = para;
    document.getElementById("search").placeholder = txt;
}

function gobutton() {
    document.getElementById("f1").submit();
}