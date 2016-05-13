/**
*  RT
*  unified client-side real-time communication using (xhr) polling / bosh / (web)sockets for Node/XPCOM/JS
*  RT WebSocket Client (w/ websocket shim)
*
*  @version: 1.0.1
*  https://github.com/foo123/RT
*
**/
!function(t,e){"use strict";"undefined"!=typeof Components&&"object"==typeof Components.classes&&"object"==typeof Components.classesByID&&Components.utils&&"function"==typeof Components.utils["import"]?e(t.RT):"object"==typeof exports?e(require("./RT.js")):e(t.RT)&&"function"==typeof define&&define.amd&&define(function(){return t.RT})}(this,function(t){"use strict";function e(t){var e,n,s=document.getElementsByTagName("scripts"),o=s[s.length-1].src.split("/").slice(0,-1).join("/"),a=document.getElementsByTagName("head")[0];window.swfobject||(e=document.createElement("script"),e.setAttribute("type","text/javascript"),e.setAttribute("language","javascript"),e.setAttribute("src",o+"/lib/ws/swfobject.js"),a.appendChild(e)),window.WEB_SOCKET_SWF_LOCATION=o+"/lib/ws/WebSocketMain.swf",window.WEB_SOCKET_FORCE_FLASH=!1,window.WEB_SOCKET_DEBUG=!1,n=document.createElement("script"),n.setAttribute("type","text/javascript"),n.setAttribute("language","javascript"),n.onload=n.onreadystatechange=function(){"loaded"!=n.readyState&&"complete"!=n.readyState||(n.onload=n.onreadystatechange=null,t&&t())},n.setAttribute("src",o+"/lib/ws/ws.js"),a.appendChild(n)}var n="prototype",s=(Object[n].toString,t.Client),o=s[n],a=t.Platform.XPCOM||t.Platform.Node?null:window.WebSocket||window.MozWebSocket||window.WebkitWebSocket;if(t.Platform.XPCOM){var r=Components.classes,i=Components.interfaces,c=Components.utils,l=Components.results;c["import"]("resource://gre/modules/Services.jsm"),a=function(t,e){var n=this;e=n._e={},n.readyState=a.CONNECTING,n._ws=r["@mozilla.org/network/protocol;1?name=wss"].createInstance(i.nsIWebSocketChannel),n._ws.initLoadInfo(null,Services.scriptSecurityManager.getSystemPrincipal(),null,i.nsILoadInfo.SEC_ALLOW_CROSS_ORIGIN_DATA_IS_NULL,i.nsIContentPolicy.TYPE_WEBSOCKET),"string"==typeof e&&(e=[e]),e&&(n._ws.protocol=e.join("; ")),n._ws.asyncOpen(Services.io.newURI(t,null,null),null,0,n,null)},a.CONNECTING=0,a.OPEN=1,a.CLOSING=2,a.CLOSED=3,a.prototype={constructor:a,readyState:0,_ws:null,_e:null,addEventListener:function(t,e){this._e[t]=e},removeEventListener:function(t,e){!this._e[t]||null!=e&&e!==this._e[t]||delete this._e[t]},dispatchEvent:function(t,e){this._e[t]&&this._e[t]({event:t,data:e,target:this})},onStart:function(){var t=this;a.CONNECTING===t.readyState&&(t.readyState=a.OPEN,t.dispatchEvent("open"))},onStop:function(t,e){var n=this;a.CLOSING!==n.readyState&&a.OPEN!==n.readyState||(n.readyState=a.CLOSED,n.dispatchEvent(l.NS_OK===e||n._ws.CLOSE_NORMAL===e?"close":"error",{status:e}))},onServerClose:function(t,e,n){var s=this;a.OPEN===s.readyState&&(s.readyState=a.CLOSED,s.dispatchEvent("close",{status:e,statusTxt:n}))},onMessageAvailable:function(t,e){var n=this;a.OPEN===n.readyState&&n.dispatchEvent("message",e)},onBinaryMessageAvailable:function(t,e){var n=this;a.OPEN===n.readyState&&n.dispatchEvent("message",e)},send:function(t){var e=this;if(a.OPEN===e.readyState){try{e._ws.sendMsg(t)}catch(n){return!1}return!0}return!1},close:function(){var t=this;if(a.CLOSING!==t.readyState&&a.CLOSED!==t.readyState){t.readyState=a.CLOSING;try{t._ws.close(t._ws.CLOSE_NORMAL),t.readyState=a.CLOSED}catch(e){t.readyState=a.CLOSED}}}}}else t.Platform.Node?a=require("ws"):a||e(function(){a=window.WebSocket});var u=s.WS=function d(t){var e=this;return e instanceof d?(o.constructor.call(e,t),void(e.$ws$=null)):new d(t)};return s.Impl.ws=s.Impl.websocket=s.Impl["web-socket"]=u,u[n]=Object.create(o),u[n].constructor=u,u[n].$ws$=null,u[n].dispose=function(){var t=this;return t.$ws$=null,o.dispose.call(t)},u[n].abort=function(){var t=this,e=t.$ws$;return e&&a.OPEN===e.readyState&&(e.close(),o.abort.call(t,!0)),t.$ws$=null,t},u[n].close=function(t){var e=this,n=e.$ws$;return n&&a.OPEN===n.readyState&&n.close(),o.close.call(e,t),e},u[n].send=function(t){var e=this,n=e.$ws$;return n&&a.OPEN===n.readyState&&n.send(String(t)),e},u[n].listen=function(){var e,n=this;return a||t.Platform.XPCOM||t.Platform.Node?(e=n.$ws$=new a(n.$cfg$.endpoint),e.addEventListener("open",function(t){n.open(t)}),e.addEventListener("close",function(t){n.close(t)}),e.addEventListener("error",function(t){n.emit("error",t)}),e.addEventListener("message",function(t){n.emit("receive",t.data)}),n):(setTimeout(function(){n.listen()},100),n)},t});