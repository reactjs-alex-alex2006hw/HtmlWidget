/**
* https://github.com/foo123/SelectorListener
* @VERSION: 1.2.0
* adapted from https://github.com/csuwildcat/SelectorListener
**/
!function(){"use strict";function e(e,t,r,o){var n=e.length,i=arguments.length;if(4>i&&(o=n-1),0>o&&(o+=n),3>i&&(r=0),r>o)return e;var s,l,_,c,d=o-r+1;for(_=15&d,c=1&_,c&&t(e[r],r,e),s=c;_>s;s+=2)l=r+s,t(e[l],l,e),t(e[++l],l,e);for(s=_;d>s;s+=16)l=r+s,t(e[l],l,e),t(e[++l],l,e),t(e[++l],l,e),t(e[++l],l,e),t(e[++l],l,e),t(e[++l],l,e),t(e[++l],l,e),t(e[++l],l,e),t(e[++l],l,e),t(e[++l],l,e),t(e[++l],l,e),t(e[++l],l,e),t(e[++l],l,e),t(e[++l],l,e),t(e[++l],l,e),t(e[++l],l,e);return e}function t(t){var n=t.target,s=t.animationName,l=i[s]||{};t.selector=l.selector,e((this.selectorListeners||{})[s]||[],function(e){e.call(n,t)}),l.removedMutation?(n.removeAttribute("sl__exist__"),n.sl__recycled__=0):n._decorateDom(l.attributeModified?o:r)}function r(e){return e.hasAttribute("sl__exist__")?!1:(e.setAttribute("sl__exist__",1),e.setAttribute("sl__class__"," "+e.className+" "),e.sl__removeChild=e.removeChild,e.removeChild=function(t){return 1===t.nodeType?(v.appendChild(t),t.sl__recycled__=1,t.setAttribute("sl__removed__",1)):e.sl__removeChild(t),t},e.sl__replaceChild=e.replaceChild,e.replaceChild=function(t,r){return e.sl__replaceChild(t,r),1===r.nodeType&&(v.appendChild(r),r.sl__recycled__=1,r.setAttribute("sl__removed__",1)),r},!0)}function o(e){return e.hasAttribute("sl__exist__")?(e.setAttribute("sl__class__"," "+e.className+" "),!1):(e.setAttribute("sl__exist__",1),e.setAttribute("sl__class__"," "+e.className+" "),e.sl__removeChild=e.removeChild,e.removeChild=function(t){return 1===t.nodeType?(v.appendChild(t),t.sl__recycled__=1,t.setAttribute("sl__removed__",1)):e.sl__removeChild(t),t},e.sl__replaceChild=e.replaceChild,e.replaceChild=function(t,r){return e.sl__replaceChild(t,r),1===r.nodeType&&(v.appendChild(r),r.sl__recycled__=1,r.setAttribute("sl__removed__",1)),r},!0)}function n(){for(var e=v.childNodes.length-1;e>=0;e--){var t=v.childNodes[e];t.sl__recycled__||v.removeChild(t)}}if("object"!=typeof window.SelectorListener){var i={},s={},l="{from {outline-color:#fff;} to {outline-color:#000;}}",_="0.001s",c=/SelectorListener/g,d=/::?exists\b/gi,a=/::?added\b/gi,u=/([^, ]+?)(::?removed)\b/gi,m=/::?class\-added\(([^\(\)]+)\)/gi,f=/::?class\-removed\(([^\(\)]+)\)/gi,h=document.createElement("style"),p=document.createElement("style"),y=document.getElementsByTagName("head")[0],v=document.createElement("div"),b=!1,C=1e3,L=["animationstart","oAnimationStart","MSAnimationStart","webkitAnimationStart"],S=function(){var e="animation-duration: "+_+";",t="animation-name: SelectorListener !important;",r=window.getComputedStyle(document.documentElement,""),o=(Array.prototype.slice.call(r).join("").match(/moz|webkit|ms/)||""===r.OLink&&["o"])[0];return{css:"-"+o+"-",properties:"{"+e+t+"-"+o+"-"+e+"-"+o+"-"+t+"}",keyframes:!(!window.CSSKeyframesRule&&!window["WebKit|Moz|MS|O".match(new RegExp("("+o+")","i"))[1]+"CSSKeyframesRule"])}}();h.type=p.type="text/css",h.setAttribute("sl__exist__",1),p.setAttribute("sl__exist__",1),y.appendChild(h),y.appendChild(p),v.setAttribute("sl__exist__",1),v.setAttribute("style","position:absolute;max-height:0;overflow:hidden;"),v.id="sl__recycle_bin__",HTMLDocument.prototype._decorateDom=function(e){var t,r,o,n=this;if(n=n.getElementsByTagName("body")[0],1!==n.nodeType)return n;if(e(n))for(t=n.childNodes,o=0,r=t.length;r>o;o++)1===t[o].nodeType&&t[o]._decorateDom(e);return n},HTMLElement.prototype._decorateDom=function(e){var t,r,o,n=this;if(1!==n.nodeType)return n;if(e(n))for(t=n.childNodes,o=0,r=t.length;r>o;o++)1===t[o].nodeType&&t[o]._decorateDom(e);return n},HTMLDocument.prototype.addSelectorListener=HTMLElement.prototype.addSelectorListener=function(e,o){if(e&&"function"==typeof o){b||(document.body.childNodes.length?document.body.insertBefore(v,document.body.firstChild):document.body.appendChild(v),b=!0,setTimeout(function w(){n(),setTimeout(w,C)},C));var _=!1,y=!1,g=e.replace(m,function(e,t){return _=!0,t="."===t.charAt(0)?t.slice(1):t,"[sl__exist__]:not([sl__removed__])."+t+":not([sl__class__~="+t+"])"}).replace(f,function(e,t){return _=!0,t="."===t.charAt(0)?t.slice(1):t,"[sl__exist__]:not([sl__removed__])[sl__class__~="+t+"]:not(."+t+")"}).replace(d,"[sl__exist__]:not([sl__removed__])").replace(u,function(e,t){return y=!0,"#sl__recycle_bin__>"+t+"[sl__exist__][sl__removed__]"}).replace(a,":not([sl__exist__]):not([sl__removed__])"),x=s[g],A=this.selectorListeners=this.selectorListeners||{};if(x)i[x].count++;else{x=s[g]="SelectorListener-"+(new Date).getTime();var T=document.createTextNode("@"+(S.keyframes?S.css:"")+"keyframes "+x+" "+l);p.appendChild(T),h.sheet.insertRule(g+S.properties.replace(c,x),0),i[x]={count:1,selector:e,removedMutation:y,attributeModified:_,keyframe:T,rule:h.sheet.cssRules[0]}}A.count?A.count++:(this._decorateDom(r),A.count=1,L.forEach(function(e){this.addEventListener(e,t,!1)},this)),(A[x]=A[x]||[]).push(o)}},HTMLDocument.prototype.removeSelectorListener=HTMLElement.prototype.removeSelectorListener=function(e,r){if(e){var o=e.replace(m,function(e,t){return t="."===t.charAt(0)?t.slice(1):t,"[sl__exist__]."+t+":not([sl__class__~="+t+"])"}).replace(f,function(e,t){return t="."===t.charAt(0)?t.slice(1):t,"[sl__exist__][sl__class__~="+t+"]:not(."+t+")"}).replace(d,"[sl__exist__]").replace(u,"[sl__exist__][sl__removed__]").replace(a,":not([sl__exist__])");if(s.hasOwnProperty(o)){var n=this.selectorListeners||{},l=s[o],_=n[l]||[],c=i[l];if("function"==typeof r){var y=_.indexOf(r);y>-1&&(c.count--,c.count||(h.sheet.deleteRule(h.sheet.cssRules.item(c.rule)),p.removeChild(c.keyframe),delete i[l],delete s[o],delete n[l]),n.count--,_.splice(y,1),n.count||L.forEach(function(e){this.removeEventListener(e,t,!1)},this))}else arguments.length<2&&(h.sheet.deleteRule(h.sheet.cssRules.item(c.rule)),p.removeChild(c.keyframe),delete i[l],delete s[o],n.hasOwnProperty(l)&&delete n[l],n.count--,n.count||L.forEach(function(e){this.removeEventListener(e,t,!1)},this))}}},window.SelectorListener={VERSION:"1.2.0",jquery:function(e){"function"!=typeof e.fn.onSelector&&(e.fn.onSelector=function(e,t){return e&&"function"==typeof t&&this.each(function(){this.addSelectorListener(e,t)}),this},e.fn.offSelector=function(e,t){return this.each("function"==typeof t?function(){this.removeSelectorListener(e,t)}:function(){this.removeSelectorListener(e)}),this})}},"undefined"!=typeof jQuery&&window.SelectorListener.jquery(jQuery)}}();