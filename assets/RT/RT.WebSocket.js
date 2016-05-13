/**
*  RT
*  unified client-side real-time communication using (xhr) polling / bosh / (web)sockets / webrtc for Node/XPCOM/JS
*  RT WebSocket Client (w/ websocket shim)
*
*  @version: 1.0.1
*  https://github.com/foo123/RT
*
**/
!function(t,e){"use strict";"undefined"!=typeof Components&&"object"==typeof Components.classes&&"object"==typeof Components.classesByID&&Components.utils&&"function"==typeof Components.utils["import"]?e(t,t.RT):"object"==typeof exports?e(t,require("./RT.js")):e(t,t.RT)&&"function"==typeof define&&define.amd&&define(function(){return t.RT})}(this,function(t,e){"use strict";function n(t,e,n){var o,s,r=document.getElementsByTagName("scripts"),i=r[r.length-1],c=i.src.split("/").slice(0,-1).join("/"),a=document.getElementsByTagName("head")[0];t=t||"./","."===t.charAt(0)&&(t=t.slice(1),t=c+("/"==t.charAt(0)?"":"/")+t),"/"!==t.charAt(t.length-1)&&(t+="/"),window.swfobject||(o=document.createElement("script"),o.setAttribute("type","text/javascript"),o.setAttribute("language","javascript"),o.setAttribute("src",i.hasAttribute("data-swfobject")?i.getAttribute("data-swfobject"):t+"swfobject.js"),a.appendChild(o)),window.WEB_SOCKET_SWF_LOCATION=t+"WebSocketMain.swf",window.WEB_SOCKET_FORCE_FLASH=!1,window.WEB_SOCKET_DEBUG=!1,s=document.createElement("script"),s.setAttribute("type","text/javascript"),s.setAttribute("language","javascript"),s.onload=s.onreadystatechange=function(){"loaded"!=s.readyState&&"complete"!=s.readyState||(s.onload=s.onreadystatechange=null,n&&n())},s.setAttribute("src",t+e),a.appendChild(s)}var o,s="prototype",r=(Object[s].toString,e.Client),i=r[s];e.Platform.XPCOM?(Components.utils["import"]("resource://gre/modules/XPCOMUtils.jsm"),XPCOMUtils.importRelative(t,"lib/ws/ws.xpcom.js"),o=t.WebSocket):e.Platform.Node?o=require("./lib/ws/ws.node.js"):(o=window.WebSocket||window.MozWebSocket||window.WebkitWebSocket,o||e.Platform.WebWorker||n("./lib/ws/","ws.flash.js",function(){o=window.WebSocket}));var c=r.WS=function a(t){var e=this;return e instanceof a?(i.constructor.call(e,t),void(e.$ws$=null)):new a(t)};return r.Impl.ws=r.Impl.websocket=r.Impl["web-socket"]=c,c[s]=Object.create(i),c[s].constructor=c,c[s].$ws$=null,c[s].dispose=function(){var t=this;return t.$ws$=null,i.dispose.call(t)},c[s].abort=function(){var t=this,e=t.$ws$;return e&&o.OPEN===e.readyState&&(e.close(),i.abort.call(t,!0)),t.$ws$=null,t},c[s].close=function(t){var e=this,n=e.$ws$;return n&&o.OPEN===n.readyState&&n.close(),i.close.call(e,t),e},c[s].send=function(t){var e=this,n=e.$ws$;return n&&o.OPEN===n.readyState&&n.send(String(t)),e},c[s].listen=function(){var t,n=this;return o||e.Platform.XPCOM||e.Platform.Node?(t=n.$ws$=new o(n.$cfg$.endpoint,n.$cfg$.protocol||null),t.addEventListener("open",function(t){n.open(t)}),t.addEventListener("close",function(t){n.close(t)}),t.addEventListener("error",function(t){n.emit("error",t)}),t.addEventListener("message",function(t){n.emit("receive",t.data)}),n):(setTimeout(function(){n.listen()},100),n)},e});