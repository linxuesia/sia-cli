module.export = {
    getUrlQuery: function(name, Url) {

      //URL GET 获取值
      　　
      var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i"),
        url = Url || location.href;　　
      if (reg.test(url))　　 return unescape(RegExp.$2.replace(/\+/g, " "));　　
      return "";

    }
}
