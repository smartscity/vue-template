var LOGIN_COOKIE_NAME = "ActivityLogin";

function setCookie(name,value)
{
  var exp = new Date();
  exp.setTime(exp.getTime() + (24 * 60 * 60 * 1000));
  document.cookie = name + "="+ encodeURIComponent(value) + ";expires=" + exp.toGMTString();
}

function getCookieValue(name) {
  var ck = document.cookie;
  var cookieValue = null;
  if (document.cookie && document.cookie != '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = jQuery.trim(cookies[i]);
      if (cookie.substring(0, name.length + 1) == (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

function delCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() + (-1 * 60 * 1000));
  var cval = getCookieValue(name);
  document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
}

function testCookie() {
  setCookie(LOGIN_COOKIE_NAME,"HELLO WORLD!");
  $.ajax({


    type: "POST",
    url: "/api/"+'turnover/indexModule',
    dataType: 'jsonp',
    xhrFields: {
      withCredentials: true
    },
    crossDomain: true,


    success:function(){


    },


    error:function() {

    }
  });
}

