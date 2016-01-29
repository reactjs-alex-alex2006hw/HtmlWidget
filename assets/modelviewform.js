/**
*
*   ModelViewForm.js
*   Declarative MV Form building, rendering, validation 
*   @dependencies: jQuery, DateX, ModelView
*   @version: 1.0.0
*
*   https://github.com/foo123/modelview.js
*   https://github.com/foo123/modelview-form.js
*
**/
!function(e,t,r,i,a,o){"use strict";function l(e){return"data-mvform-"+e}function s(e){return!!e&&e.length}function d(e,t){t=t||[];var r,n,i,a,o,s,d,u="";for((r=e.attr(l("selected-multiple")))?(e.removeAttr(l("selected-multiple")),r=r.split(",")):(r=e.attr(l("selected")))?e.removeAttr(l("selected")):r=e.val(),n=0,i=t.length;i>n;n++)a=t[n],V(a)?(o=a.key,s=a.value):(o=a,s=a),u+='<option value="'+o+'">'+s+"</option>";return d=e.children("optgroup"),d=d.length?d.eq(0):e,d.children("option:not(.default,.placeholder)").remove(),d.append(u),e.val(r),e}function u(e,r){var n=r.$view.$model,i=n.id+".",a=!1,o={};e.each(function(){var e,r,n,s,d=t(this),u=d.attr("name");u&&(e=G(u),i===e.slice(0,i.length)&&(e=e.slice(i.length),s=d.attr(l("ajax-options")),r=d.attr(l("key")),n=d.attr(l("ajax-key")),n||(n=r),n&&r&&s&&(o[r]={key:n,model_key:r,options:s,$el:d},a=!0)))}),a&&(n.on("change",function(e,t){var i,a;t.key&&o[N](t.key)&&(a=o[t.key],i={},i[a.key]=n.get(a.model_key),a.$el.addClass("mvform-progress"),r.trigger("before-ajax-options",a),T.doGET(a.options,i,function(e,t){d(a.$el,t||[]).removeClass("mvform-progress").trigger("change"),r.trigger("after-ajax-options",a)}))}),n.notify(w(o),"change"))}function f(e,t){if("function"==typeof e)return e;if(t){var r=X("^"+Z(t)+"([\\.\\[].+)$");return function(t){var n,i=t[D](e);return i&&(n=i.match(r))?n[1]:null}}return function(t){return t[D](e)}}function c(e,r){return"function"==typeof e?e:!1!==r?function(r){var n=("value"===e?t(r).val():r[D](e))||"",i=(r[D]("type")||r.tagName||"").toLowerCase();return"file"===i?r.files.length?r.files:null:("checkbox"!==i&&"radio"!==i||r.checked)&&("select"!==i||n.length&&-1!==r.selectedIndex)&&("text"!==i&&"textarea"!==i||_(n).length)?n:o}:function(r){var n=("value"===e?t(r).val():r[D](e))||"",i=(r[D]("type")||r.tagName).toLowerCase();return"file"===i?r.files.length?r.files:null:"checkbox"!==i&&"radio"!==i||r.checked?n:o}}function m(e,r,i,a,o,d){a=f(a||"name",r.id),o=c(o||"value",!1),d=!0===d;for(var u=0,m=e.length;m>u;u++){var v,p,g,h,E,y,b,T,I,$,w,L,F,V,k,R,_,P,B,G=e[u],z=(t(G),!1);if(v=a(G)){if(z=U.test(v),w=(G[D]("type")||"")[S](),k="radio"===w||"checkbox"===w,R="file"===w,P=G[j]("data-else"),_=P?G[D]("data-else"):null,p=o(G),null==p){if(!R&&(z||"checkbox"!==w||G.checked||!P))continue;p=null}if(h=q(v),g=h.replace(H,""),b=p||"",T="",L=!!G[D]("required"),F=!!G[D](l("required")),G[j]("id")||G[D]("id",Q(g.split(".").join("_"))),$=G[D](l("type"))||w)switch($=$[A]()){case"NUMBER":case"INTEGER":case"INT":r.types[g]=Y.INT,b=Y.INT(b)||0,T=0,k&&!z&&P&&(T=Y.INT(_)||0);break;case"BOOLEAN":case"BOOL":r.types[g]=Y.BOOL,b=Y.BOOL(b)||!1,T=!b,k&&!z&&P&&(T=Y.BOOL(_));break;case"EMAIL":case"URL":case"TEXT":case"STRING":case"STR":r.types[g]=Y.STR,b=Y.STR(b)||"",T="",k&&!z&&P&&(T=Y.STR(_)||"");break;default:Y[N]($)&&(r.types[g]=Y[$],k&&!z&&P&&(T=Y[$](_)))}for(z||((I=G[D](l("validate")))||L||F||"email"===w||"url"===w||"datetime"===w||"date"===w||"time"===w)&&(I?(I=I[A](),"BETWEEN"===I?(B=[parseInt(G[D](l("min")),10),parseInt(G[D](l("max")),10)],isNaN(B[0])||isNaN(B[1])||(r.validators[g]=r.validators[N](g)?r.validators[g].AND(J.BETWEEN(B[0],B[1],!1)):J.BETWEEN(B[0],B[1],!1))):"GREATER_THAN"===I?(B=parseInt(G[D](l("min")),10),isNaN(B)||(r.validators[g]=r.validators[N](g)?r.validators[g].AND(J.GREATER_THAN(B,!0)):J.GREATER_THAN(B,!0))):"LESS_THAN"===I?(B=parseInt(G[D](l("max")),10),isNaN(B)||(r.validators[g]=r.validators[N](g)?r.validators[g].AND(J.LESS_THAN(B,!0)):J.LESS_THAN(B,!0))):"DATETIME"===I||"DATE"===I||"TIME"===I?(B=G[D](l("format"))||"Y-m-d H:i:s",r.validators[g]=r.validators[N](g)?r.validators[g].AND(J.DATETIME(B,i&&i.datetime?i.datetime:null)):J.DATETIME(B,i&&i.datetime?i.datetime:null)):"FILESIZE"===I?(B=parseInt(G[D](l("filesize")),10)||1048576,r.validators[g]=r.validators[N](g)?r.validators[g].AND(J.FILESIZE(G,B)):J.FILESIZE(G,B)):J[N](I)&&(r.validators[g]=r.validators[N](g)?r.validators[g].AND(J[I]):J[I])):"email"===w?r.validators[g]=r.validators[N](g)?r.validators[g].AND(J.EMAIL):J.EMAIL:"url"===w?r.validators[g]=r.validators[N](g)?r.validators[g].AND(J.URL):J.URL:("datetime"===w||"date"===w||"time"===w)&&(B=G[D](l("format"))||"Y-m-d H:i:s",r.validators[g]=r.validators[N](g)?r.validators[g].AND(J.DATETIME(B,i&&i.datetime?i.datetime:null)):J.DATETIME(B,i&&i.datetime?i.datetime:null)),G[j](l("bind"))||G[M](l("bind"),O({error:"error",change:"change"}))),L||F?(V=z?R?J.MIN_FILES(G,parseInt(G[D](l("leastrequired")),10)||1):J.MIN_ITEMS(parseInt(G[D](l("leastrequired")),10)||1,s):R?J.MIN_FILES(G,1):J.NOT_EMPTY,r.validators[g]=r.validators[N](g)?V.AND(r.validators[g]):V,r.validators[g].REQUIRED=1,L&&G[x]("required"),G[j](l("bind"))||G[M](l("bind"),O({error:"error",change:"change"}))):z||"function"!=typeof r.validators[g]||r.validators[g].REQUIRED||(r.validators[g]=J.EMPTY.OR(r.validators[g])),h=h.split("."),y=r.data;h.length;)if(E=h.shift(),h.length){if(y[N](E))!d&&C.test(h[0])&&y[E].length<=(n=parseInt(h[0],10))&&(y[E]=y[E].concat(new Array(n-y[E].length+1)));else if(z&&1===h.length){if(p instanceof FileList){y[E]=b;break}y[E]=[]}else y[E]=!d&&C.test(h[0])?new Array(parseInt(h[0],10)+1):{};y=y[E]}else z?y.push(b):y[E]=z||"checkbox"!==w||G.checked||!P?b:T}}}function v(e,t,r,n){var i,a,o;if(n)if(k(t))if(U.test(n))for(a=0,o=t.length;o>a;a++)r(e,n,t[a]);else for(a=0,o=t.length;o>a;a++)v(e,t[a],r,n+"["+("object"==typeof t[a]?a:"")+"]");else if(t instanceof FileList)for(a=0,o=t.length;o>a;a++)r(e,n,t[a]);else if(t instanceof File||t instanceof Blob)r(e,n,t);else if(t&&"object"==typeof t)for(i in t)t[N](i)&&v(e,t[i],r,n+"["+i+"]");else r(e,n,t);else if(k(t))for(a=0,o=t.length;o>a;a++)r(e,t[a].name,t[a].value);else if(t instanceof FileList)for(a=0,o=t.length;o>a;a++)r(e,n,t[a]);else if(t instanceof File||t instanceof Blob)r(e,n,t);else if(t&&"object"==typeof t)for(i in t)t[N](i)&&v(e,t[i],r,i);return e}function p(e,t,r){"function"==typeof r&&(r=r()),e.push(F(t)+"="+F(null==r?"":r))}function g(e,t,r){var n=v(t||[],e||{},p);return!0!==r&&(n=n.join("&").split("%20").join("+")),n}function h(e,t,r){if("function"==typeof r&&(r=r()),r instanceof FileList)for(var n=0,i=r.length;i>n;n++)e.append(t,r[n],r[n].name);else r instanceof File?e.append(t,r,r.name):e.append(t,null==r?"":r)}function E(e,t,r){return null==r&&"undefined"!=typeof FormData&&(r=FormData),r&&e instanceof r?e:v(t||new r,e||{},h)}function y(e){return O(e||{})}var b,T,I=Object.create,$="prototype",N="hasOwnProperty",A="toUpperCase",S="toLowerCase",w=Object.keys,L=Object[$].toString,D="getAttribute",M="setAttribute",j="hasAttribute",x="removeAttribute",O=JSON.stringify,F=(JSON.parse,encodeURIComponent),V=function(e){return"[object Object]"===L.call(e)},k=function(e){return"[object Array]"===L.call(e)},R=/^\s+|\s+$/g,_=String[$].trim?function(e){return e.trim()}:function(e){return e.replace(R,"")},C=/^\d+$/,P=/\[([^\]]*)\]/g,U=/\[\s*\]$/,B=/^\.+/g,H=/^\.+|\.+$/g,G=function(e){return e.replace(P,".$1").replace(H,"")},q=function(e){return e.replace(P,".$1").replace(B,"")},z=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,Z=function(e){return e.replace(z,"\\$&")},X=function(e,t){return new RegExp(e,t||"")},Y=i.Type.Cast,J=i.Validation.Validate,Q=i.UUID,W=i.Model;J[N]("DATETIME")||(J.DATETIME=function(e,t){if("function"==typeof r){var n=r.getParser(e,t||r.defaultLocale);return i.Validation.Validator(function(e){return!!e&&!1!==n(e)})}return i.Validation.Validator(function(){return!0})}),J[N]("MIN_FILES")||(J.MIN_FILES=function(e,t,r){return t=parseInt(t,10)||0,i.Validation.Validator("function"==typeof r?function(n){return n=n||e.files,n.length>0?Array.prototype.filter.call(n,r).length>=t:0>=t}:function(r){return r=r||e.files,r.length>=t})}),J[N]("MAX_FILES")||(J.MAX_FILES=function(e,t,r){return t=parseInt(t,10)||0,i.Validation.Validator("function"==typeof r?function(n){return n=n||e.files,n.length>0?Array.prototype.filter.call(n,r).length<=t:t>=0}:function(r){return r=r||e.files,r.length<=t})}),J[N]("FILESIZE")||(J.FILESIZE=function(e,t){return t=parseInt(t,10)||0,i.Validation.Validator(function(r){return r=r||e.files,!r.length||r[0].size<=t})}),b=function(){var e=this;i.View.apply(e,arguments)},b[$]=I(i.View[$]),b[$].do_change=function(e,r){var n=t(r);r.validity.valid||r.setCustomValidity(""),n.hasClass("mvform-error")&&n.removeClass("mvform-error")},b[$].do_error=function(e,r){var n=t(r);r.validity.valid||r.setCustomValidity(""),n.hasClass("mvform-error")||n.addClass("mvform-error")},T=e.ModelViewForm=function K(e){var r=this;return r instanceof K?(r.id=Q("mvform"),r.$options=t.extend({submit:!0,upload:!1,ajax:!1,notify:!0,model:!1,livebind:!1,prefixed:!1,locale:{},Model:K.Model,View:K.View},e||{}),void r.initPubSub()):new K(e)},T.VERSION="1.0.0",T.Model=W,T.View=b,T.doSubmit=function(r,n,i){return n=n||"json",!0===i?(r="POST",function(i,a,o){var l=function(e,t){"success"==t?o(!0,e):o(!1,e)};!a instanceof e.FormData&&(a=new e.FormData(a)),t.ajax({type:r,method:r,dataType:n,url:i,data:a||null,processData:!1,contentType:!1,success:l,error:l})}):function(i,a,o){var l=function(e,t){"success"==t?o(!0,e):o(!1,e)},s="undefined"!=typeof e.FormData&&a instanceof e.FormData;t.ajax({type:r,method:r,dataType:n,url:i,data:a||null,processData:!s,contentType:!s,success:l,error:l})}},T.doGET=T.doSubmit("GET","json"),T.doPOST=T.doSubmit("POST","json"),T.doUpload=T.doSubmit("POST","json",!0),T.getKey=f,T.getValue=c,T.toModel=m,T.toJSON=y,T.toFormData=E,T.toUrlEncoded=g,T[$]=i.Extend(I(Object[$]),i.PublishSubscribeInterface,{constructor:T,id:null,$form:null,$view:null,$messages:null,$options:null,dispose:function(){var e=this;return e.disposePubSub(),e.$form&&(e.$form.off("submit."+e.id),e.$form.modelview("dispose"),e.$form.removeClass("mvform")),e.$form=null,e.$view=null,e.$messages=null,e.$options=null,e.id=null,e},trigger:function(e,t,r){var n=this,a=i.PublishSubscribeInterface.trigger;return r=r||0,r>0?setTimeout(function(){a.call(n,e,t)},r):a.call(n,e,t),n},one:function(e,t){return this.on(e,t,!0)},dom:function(e){var r=this;return r.$form=t(e),r._render(),r},tpl:function(e,r){var n=this;return n.$form=t(e.innerHTML).appendTo(r),n._render(),n},serialize:function(){var e=this,t={};return t[e.$view.$model.id]=e.$view.$model.serialize(),t},validate:function(){{var e,t=this;t.$form,t.$options||{}}return t.trigger("before-validate"),e=t.$view.$model.validate(),t.trigger("after-validate",e),e},notify:function(e){var t,r=this,n=r.$form;return n&&n.length&&e&&e.length&&(r.$view.$model.notify(e,"error"),r.$messages&&r.$messages.length&&(r.$messages.hide(),t=l("error")+'="'+(r.$options.prefixed?r.$view.$model.id+".":""),n.find("["+t+e.join('"],['+t)+'"]').show())),r},_render:function(){var e,t=this,r=t.$options||{},n=r.Model||T.Model,i=r.View||T.View,a=t.$form,o={id:r.model?r.model:(e=a.attr(l("model")))?e:"model",data:{},types:{},validators:{},getters:{},setters:{},dependencies:{}};return a.addClass("mvform").prop("disabled",!1).attr("id",a[0].id||Q("mvform")),t.trigger("before-render"),t.$messages=a.find("["+l("error")+"]").hide(),m(a.find("input,textarea,select"),o,r.locale),a.modelview({autoSync:!0,autobind:!0,livebind:!!r.livebind,isomorphic:!1,autovalidate:!1,bindAttribute:l("bind"),events:["change","error","click"],model:o,modelClass:n,viewClass:i}),t.$view=a.modelview("view"),u(a.find("select["+l("ajax-options")+"]"),t),r.submit&&a.on("submit."+t.id,function(e){var r,n,i=t.$options;return e.preventDefault(),e.stopPropagation(),t.$messages.hide(),r=t.validate(),r.isValid?i.ajax?(t.trigger("before-send",n=t.serialize()),n&&i.ajax&&T[option.upload?"doUpload":"doPOST"](i.ajax,n,function(e,r){t.trigger("after-send",{success:e,response:r})})):t.trigger("submit",t.serialize()):i.notify&&t.notify(r.errors),!1}),t.trigger("after-render"),t}})}(window,jQuery,DateX,ModelView,null);