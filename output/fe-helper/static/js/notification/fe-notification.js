baidu.feNotification=(function(){var a=function(c){var d=encodeURIComponent;var e=webkitNotifications.createHTMLNotification(chrome.extension.getURL(c));e.show();return e};var b=function(c){if(!c.icon){c.icon="static/img/fe-48.png"}if(!c.title){c.title="\u5C0F\u63D0\u793A"}var d=webkitNotifications.createNotification(chrome.extension.getURL(c.icon),c.title,c.message);d.show();if(c.autoClose!==false){d.ondisplay=function(g){var f=localStorage.getItem("opt_item_notification");setTimeout(function(){d.cancel()},f||5000)}}return d};return{notifyHtml:a,notifyText:b}})();