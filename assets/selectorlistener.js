// adapted from https://github.com/csuwildcat/SelectorListener
// https://github.com/foo123/SelectorListener
!function(){"use strict";if(!window.SelectorListener){var e={},t={},n="{from {outline-color:#fff;} to {outline-color:#000;}}",o="0.001s",r=/::?exists\b/gi,i=/::?added\b/gi,s=document.createElement("style"),c=document.createElement("style"),a=document.getElementsByTagName("head")[0],l=["animationstart","oAnimationStart","MSAnimationStart","webkitAnimationStart"],u=function(t){var n=t.target,o=t.animationName,r=e[o]||{};t.selector=r.selector,((this.selectorListeners||{})[o]||[]).forEach(function(e){e.call(n,t)}),n._decorateDom("__existing__",1)},f=function(){var e="animation-duration: "+o+";",t="animation-name: SelectorListener !important;",n=window.getComputedStyle(document.documentElement,""),r=(Array.prototype.slice.call(n).join("").match(/moz|webkit|ms/)||""===n.OLink&&["o"])[0];return{css:"-"+r+"-",properties:"{"+e+t+"-"+r+"-"+e+"-"+r+"-"+t+"}",keyframes:!(!window.CSSKeyframesRule&&!window["WebKit|Moz|MS|O".match(new RegExp("("+r+")","i"))[1]+"CSSKeyframesRule"])}}();s.type=c.type="text/css",a.appendChild(s),a.appendChild(c),HTMLDocument.prototype._decorateDom=function(e,t){var n,o,r,i,s=this;if(s=s.getElementsByTagName("body")[0],1!==s.nodeType)return s;if(n=s.getAttribute(e),!n||t!==n)for(s.setAttribute(e,t),o=s.childNodes,i=0,r=o.length;r>i;i++)1===o[i].nodeType&&o[i]._decorateDom(e,t);return s},HTMLElement.prototype._decorateDom=function(e,t){var n,o,r,i,s=this;if(1!==s.nodeType)return s;if(n=s.getAttribute(e),!n||t!==n)for(s.setAttribute(e,t),o=s.childNodes,i=0,r=o.length;r>i;i++)1===o[i].nodeType&&o[i]._decorateDom(e,t);return s},HTMLDocument.prototype.addSelectorListener=HTMLElement.prototype.addSelectorListener=function(o,a){if(o&&"function"==typeof a){var d=o.replace(r,"[__existing__]").replace(i,":not([__existing__])"),m=t[d],h=this.selectorListeners=this.selectorListeners||{};if(m)e[m].count++;else{m=t[d]="SelectorListener-"+(new Date).getTime();var p=document.createTextNode("@"+(f.keyframes?f.css:"")+"keyframes "+m+" "+n);c.appendChild(p),s.sheet.insertRule(d+f.properties.replace(/SelectorListener/g,m),0),e[m]={count:1,selector:o,keyframe:p,rule:s.sheet.cssRules[0]}}h.count?h.count++:(this._decorateDom("__existing__",1),h.count=1,l.forEach(function(e){this.addEventListener(e,u,!1)},this)),(h[m]=h[m]||[]).push(a)}},HTMLDocument.prototype.removeSelectorListener=HTMLElement.prototype.removeSelectorListener=function(n,o){if(n){var a=n.replace(r,"[__existing__]").replace(i,":not([__existing__])");if(t.hasOwnProperty(a)){var f=this.selectorListeners||{},d=t[a],m=f[d]||[],h=e[d];if("function"==typeof o){var p=m.indexOf(o);p>-1&&(h.count--,h.count||(s.sheet.deleteRule(s.sheet.cssRules.item(h.rule)),c.removeChild(h.keyframe),delete e[d],delete t[a],delete f[d]),f.count--,m.splice(p,1),f.count||l.forEach(function(e){this.removeEventListener(e,u,!1)},this))}else arguments.length<2&&(s.sheet.deleteRule(s.sheet.cssRules.item(h.rule)),c.removeChild(h.keyframe),delete e[d],delete t[a],f.hasOwnProperty(d)&&delete f[d],f.count--,f.count||l.forEach(function(e){this.removeEventListener(e,u,!1)},this))}}},window.SelectorListener={VERSION:"1.0",jquery:function(e){"function"!=typeof e.fn.onSelector&&(e.fn.onSelector=function(e,t){return e&&"function"==typeof t&&this.each(function(){this.addSelectorListener(e,t)}),this},e.fn.offSelector=function(e,t){return this.each("function"==typeof t?function(){this.removeSelectorListener(e,t)}:function(){this.removeSelectorListener(e)}),this})}},"undefined"!=typeof jQuery&&window.SelectorListener.jquery(jQuery)}}();