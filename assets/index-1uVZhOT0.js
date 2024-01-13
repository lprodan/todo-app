function HS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function t0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var n0={exports:{}},Bu={},r0={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var la=Symbol.for("react.element"),qS=Symbol.for("react.portal"),KS=Symbol.for("react.fragment"),GS=Symbol.for("react.strict_mode"),QS=Symbol.for("react.profiler"),YS=Symbol.for("react.provider"),XS=Symbol.for("react.context"),JS=Symbol.for("react.forward_ref"),ZS=Symbol.for("react.suspense"),eA=Symbol.for("react.memo"),tA=Symbol.for("react.lazy"),Rg=Symbol.iterator;function nA(t){return t===null||typeof t!="object"?null:(t=Rg&&t[Rg]||t["@@iterator"],typeof t=="function"?t:null)}var i0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},s0=Object.assign,o0={};function hs(t,e,n){this.props=t,this.context=e,this.refs=o0,this.updater=n||i0}hs.prototype.isReactComponent={};hs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};hs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function a0(){}a0.prototype=hs.prototype;function Zd(t,e,n){this.props=t,this.context=e,this.refs=o0,this.updater=n||i0}var ep=Zd.prototype=new a0;ep.constructor=Zd;s0(ep,hs.prototype);ep.isPureReactComponent=!0;var Cg=Array.isArray,l0=Object.prototype.hasOwnProperty,tp={current:null},u0={key:!0,ref:!0,__self:!0,__source:!0};function c0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)l0.call(e,r)&&!u0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:la,type:t,key:s,ref:o,props:i,_owner:tp.current}}function rA(t,e){return{$$typeof:la,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function np(t){return typeof t=="object"&&t!==null&&t.$$typeof===la}function iA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var bg=/\/+/g;function rf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?iA(""+t.key):e.toString(36)}function El(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case la:case qS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+rf(o,0):r,Cg(i)?(n="",t!=null&&(n=t.replace(bg,"$&/")+"/"),El(i,e,n,"",function(u){return u})):i!=null&&(np(i)&&(i=rA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(bg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Cg(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+rf(s,a);o+=El(s,e,n,l,i)}else if(l=nA(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+rf(s,a++),o+=El(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ua(t,e,n){if(t==null)return t;var r=[],i=0;return El(t,r,"","",function(s){return e.call(n,s,i++)}),r}function sA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var it={current:null},Il={transition:null},oA={ReactCurrentDispatcher:it,ReactCurrentBatchConfig:Il,ReactCurrentOwner:tp};G.Children={map:Ua,forEach:function(t,e,n){Ua(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ua(t,function(){e++}),e},toArray:function(t){return Ua(t,function(e){return e})||[]},only:function(t){if(!np(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};G.Component=hs;G.Fragment=KS;G.Profiler=QS;G.PureComponent=Zd;G.StrictMode=GS;G.Suspense=ZS;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oA;G.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=s0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=tp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)l0.call(e,l)&&!u0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:la,type:t.type,key:i,ref:s,props:r,_owner:o}};G.createContext=function(t){return t={$$typeof:XS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:YS,_context:t},t.Consumer=t};G.createElement=c0;G.createFactory=function(t){var e=c0.bind(null,t);return e.type=t,e};G.createRef=function(){return{current:null}};G.forwardRef=function(t){return{$$typeof:JS,render:t}};G.isValidElement=np;G.lazy=function(t){return{$$typeof:tA,_payload:{_status:-1,_result:t},_init:sA}};G.memo=function(t,e){return{$$typeof:eA,type:t,compare:e===void 0?null:e}};G.startTransition=function(t){var e=Il.transition;Il.transition={};try{t()}finally{Il.transition=e}};G.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};G.useCallback=function(t,e){return it.current.useCallback(t,e)};G.useContext=function(t){return it.current.useContext(t)};G.useDebugValue=function(){};G.useDeferredValue=function(t){return it.current.useDeferredValue(t)};G.useEffect=function(t,e){return it.current.useEffect(t,e)};G.useId=function(){return it.current.useId()};G.useImperativeHandle=function(t,e,n){return it.current.useImperativeHandle(t,e,n)};G.useInsertionEffect=function(t,e){return it.current.useInsertionEffect(t,e)};G.useLayoutEffect=function(t,e){return it.current.useLayoutEffect(t,e)};G.useMemo=function(t,e){return it.current.useMemo(t,e)};G.useReducer=function(t,e,n){return it.current.useReducer(t,e,n)};G.useRef=function(t){return it.current.useRef(t)};G.useState=function(t){return it.current.useState(t)};G.useSyncExternalStore=function(t,e,n){return it.current.useSyncExternalStore(t,e,n)};G.useTransition=function(){return it.current.useTransition()};G.version="18.2.0";r0.exports=G;var A=r0.exports;const Wu=t0(A),aA=HS({__proto__:null,default:Wu},[A]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lA=A,uA=Symbol.for("react.element"),cA=Symbol.for("react.fragment"),fA=Object.prototype.hasOwnProperty,hA=lA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dA={key:!0,ref:!0,__self:!0,__source:!0};function f0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)fA.call(e,r)&&!dA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:uA,type:t,key:s,ref:o,props:i,_owner:hA.current}}Bu.Fragment=cA;Bu.jsx=f0;Bu.jsxs=f0;n0.exports=Bu;var ce=n0.exports,lh={},h0={exports:{}},It={},d0={exports:{}},p0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(x,B){var H=x.length;x.push(B);e:for(;0<H;){var _e=H-1>>>1,be=x[_e];if(0<i(be,B))x[_e]=B,x[H]=be,H=_e;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var B=x[0],H=x.pop();if(H!==B){x[0]=H;e:for(var _e=0,be=x.length,Fa=be>>>1;_e<Fa;){var Ar=2*(_e+1)-1,nf=x[Ar],kr=Ar+1,$a=x[kr];if(0>i(nf,H))kr<be&&0>i($a,nf)?(x[_e]=$a,x[kr]=H,_e=kr):(x[_e]=nf,x[Ar]=H,_e=Ar);else if(kr<be&&0>i($a,H))x[_e]=$a,x[kr]=H,_e=kr;else break e}}return B}function i(x,B){var H=x.sortIndex-B.sortIndex;return H!==0?H:x.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,p=!1,y=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(x){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=x)r(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(u)}}function _(x){if(v=!1,g(x),!y)if(n(l)!==null)y=!0,ef(I);else{var B=n(u);B!==null&&tf(_,B.startTime-x)}}function I(x,B){y=!1,v&&(v=!1,m(O),O=-1),p=!0;var H=h;try{for(g(B),f=n(l);f!==null&&(!(f.expirationTime>B)||x&&!Dt());){var _e=f.callback;if(typeof _e=="function"){f.callback=null,h=f.priorityLevel;var be=_e(f.expirationTime<=B);B=t.unstable_now(),typeof be=="function"?f.callback=be:f===n(l)&&r(l),g(B)}else r(l);f=n(l)}if(f!==null)var Fa=!0;else{var Ar=n(u);Ar!==null&&tf(_,Ar.startTime-B),Fa=!1}return Fa}finally{f=null,h=H,p=!1}}var k=!1,P=null,O=-1,W=5,U=-1;function Dt(){return!(t.unstable_now()-U<W)}function Rs(){if(P!==null){var x=t.unstable_now();U=x;var B=!0;try{B=P(!0,x)}finally{B?Cs():(k=!1,P=null)}}else k=!1}var Cs;if(typeof d=="function")Cs=function(){d(Rs)};else if(typeof MessageChannel<"u"){var Pg=new MessageChannel,WS=Pg.port2;Pg.port1.onmessage=Rs,Cs=function(){WS.postMessage(null)}}else Cs=function(){w(Rs,0)};function ef(x){P=x,k||(k=!0,Cs())}function tf(x,B){O=w(function(){x(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(x){x.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,ef(I))},t.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<x?Math.floor(1e3/x):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(x){switch(h){case 1:case 2:case 3:var B=3;break;default:B=h}var H=h;h=B;try{return x()}finally{h=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(x,B){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var H=h;h=x;try{return B()}finally{h=H}},t.unstable_scheduleCallback=function(x,B,H){var _e=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?_e+H:_e):H=_e,x){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=H+be,x={id:c++,callback:B,priorityLevel:x,startTime:H,expirationTime:be,sortIndex:-1},H>_e?(x.sortIndex=H,e(u,x),n(l)===null&&x===n(u)&&(v?(m(O),O=-1):v=!0,tf(_,H-_e))):(x.sortIndex=be,e(l,x),y||p||(y=!0,ef(I))),x},t.unstable_shouldYield=Dt,t.unstable_wrapCallback=function(x){var B=h;return function(){var H=h;h=B;try{return x.apply(this,arguments)}finally{h=H}}}})(p0);d0.exports=p0;var pA=d0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0=A,wt=pA;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g0=new Set,vo={};function si(t,e){Qi(t,e),Qi(t+"Capture",e)}function Qi(t,e){for(vo[t]=e,t=0;t<e.length;t++)g0.add(e[t])}var wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uh=Object.prototype.hasOwnProperty,mA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ng={},xg={};function gA(t){return uh.call(xg,t)?!0:uh.call(Ng,t)?!1:mA.test(t)?xg[t]=!0:(Ng[t]=!0,!1)}function yA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function vA(t,e,n,r){if(e===null||typeof e>"u"||yA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function st(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Be[t]=new st(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Be[e]=new st(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Be[t]=new st(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Be[t]=new st(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Be[t]=new st(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Be[t]=new st(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Be[t]=new st(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Be[t]=new st(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Be[t]=new st(t,5,!1,t.toLowerCase(),null,!1,!1)});var rp=/[\-:]([a-z])/g;function ip(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(rp,ip);Be[e]=new st(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(rp,ip);Be[e]=new st(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(rp,ip);Be[e]=new st(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Be[t]=new st(t,1,!1,t.toLowerCase(),null,!1,!1)});Be.xlinkHref=new st("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Be[t]=new st(t,1,!1,t.toLowerCase(),null,!0,!0)});function sp(t,e,n,r){var i=Be.hasOwnProperty(e)?Be[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(vA(e,n,i,r)&&(n=null),r||i===null?gA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var xn=m0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,za=Symbol.for("react.element"),wi=Symbol.for("react.portal"),Ei=Symbol.for("react.fragment"),op=Symbol.for("react.strict_mode"),ch=Symbol.for("react.profiler"),y0=Symbol.for("react.provider"),v0=Symbol.for("react.context"),ap=Symbol.for("react.forward_ref"),fh=Symbol.for("react.suspense"),hh=Symbol.for("react.suspense_list"),lp=Symbol.for("react.memo"),Un=Symbol.for("react.lazy"),_0=Symbol.for("react.offscreen"),Og=Symbol.iterator;function bs(t){return t===null||typeof t!="object"?null:(t=Og&&t[Og]||t["@@iterator"],typeof t=="function"?t:null)}var de=Object.assign,sf;function zs(t){if(sf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sf=e&&e[1]||""}return`
`+sf+t}var of=!1;function af(t,e){if(!t||of)return"";of=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{of=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?zs(t):""}function _A(t){switch(t.tag){case 5:return zs(t.type);case 16:return zs("Lazy");case 13:return zs("Suspense");case 19:return zs("SuspenseList");case 0:case 2:case 15:return t=af(t.type,!1),t;case 11:return t=af(t.type.render,!1),t;case 1:return t=af(t.type,!0),t;default:return""}}function dh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ei:return"Fragment";case wi:return"Portal";case ch:return"Profiler";case op:return"StrictMode";case fh:return"Suspense";case hh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case v0:return(t.displayName||"Context")+".Consumer";case y0:return(t._context.displayName||"Context")+".Provider";case ap:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lp:return e=t.displayName||null,e!==null?e:dh(t.type)||"Memo";case Un:e=t._payload,t=t._init;try{return dh(t(e))}catch{}}return null}function wA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dh(e);case 8:return e===op?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function w0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function EA(t){var e=w0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ja(t){t._valueTracker||(t._valueTracker=EA(t))}function E0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=w0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Bl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ph(t,e){var n=e.checked;return de({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Dg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function I0(t,e){e=e.checked,e!=null&&sp(t,"checked",e,!1)}function mh(t,e){I0(t,e);var n=fr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?gh(t,e.type,n):e.hasOwnProperty("defaultValue")&&gh(t,e.type,fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Lg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function gh(t,e,n){(e!=="number"||Bl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var js=Array.isArray;function Vi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+fr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function yh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return de({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Mg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(js(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fr(n)}}function T0(t,e){var n=fr(e.value),r=fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Vg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function S0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?S0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ba,A0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ba=Ba||document.createElement("div"),Ba.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ba.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function _o(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Zs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},IA=["Webkit","ms","Moz","O"];Object.keys(Zs).forEach(function(t){IA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Zs[e]=Zs[t]})});function k0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Zs.hasOwnProperty(t)&&Zs[t]?(""+e).trim():e+"px"}function P0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=k0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var TA=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _h(t,e){if(e){if(TA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function wh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Eh=null;function up(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ih=null,Fi=null,$i=null;function Fg(t){if(t=fa(t)){if(typeof Ih!="function")throw Error(S(280));var e=t.stateNode;e&&(e=Qu(e),Ih(t.stateNode,t.type,e))}}function R0(t){Fi?$i?$i.push(t):$i=[t]:Fi=t}function C0(){if(Fi){var t=Fi,e=$i;if($i=Fi=null,Fg(t),e)for(t=0;t<e.length;t++)Fg(e[t])}}function b0(t,e){return t(e)}function N0(){}var lf=!1;function x0(t,e,n){if(lf)return t(e,n);lf=!0;try{return b0(t,e,n)}finally{lf=!1,(Fi!==null||$i!==null)&&(N0(),C0())}}function wo(t,e){var n=t.stateNode;if(n===null)return null;var r=Qu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var Th=!1;if(wn)try{var Ns={};Object.defineProperty(Ns,"passive",{get:function(){Th=!0}}),window.addEventListener("test",Ns,Ns),window.removeEventListener("test",Ns,Ns)}catch{Th=!1}function SA(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var eo=!1,Wl=null,Hl=!1,Sh=null,AA={onError:function(t){eo=!0,Wl=t}};function kA(t,e,n,r,i,s,o,a,l){eo=!1,Wl=null,SA.apply(AA,arguments)}function PA(t,e,n,r,i,s,o,a,l){if(kA.apply(this,arguments),eo){if(eo){var u=Wl;eo=!1,Wl=null}else throw Error(S(198));Hl||(Hl=!0,Sh=u)}}function oi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function O0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function $g(t){if(oi(t)!==t)throw Error(S(188))}function RA(t){var e=t.alternate;if(!e){if(e=oi(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return $g(i),t;if(s===r)return $g(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function D0(t){return t=RA(t),t!==null?L0(t):null}function L0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=L0(t);if(e!==null)return e;t=t.sibling}return null}var M0=wt.unstable_scheduleCallback,Ug=wt.unstable_cancelCallback,CA=wt.unstable_shouldYield,bA=wt.unstable_requestPaint,we=wt.unstable_now,NA=wt.unstable_getCurrentPriorityLevel,cp=wt.unstable_ImmediatePriority,V0=wt.unstable_UserBlockingPriority,ql=wt.unstable_NormalPriority,xA=wt.unstable_LowPriority,F0=wt.unstable_IdlePriority,Hu=null,en=null;function OA(t){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Hu,t,void 0,(t.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:MA,DA=Math.log,LA=Math.LN2;function MA(t){return t>>>=0,t===0?32:31-(DA(t)/LA|0)|0}var Wa=64,Ha=4194304;function Bs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Kl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Bs(a):(s&=o,s!==0&&(r=Bs(s)))}else o=n&~i,o!==0?r=Bs(o):s!==0&&(r=Bs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ut(e),i=1<<n,r|=t[n],e&=~i;return r}function VA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function FA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ut(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=VA(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ah(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $0(){var t=Wa;return Wa<<=1,!(Wa&4194240)&&(Wa=64),t}function uf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ua(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ut(e),t[e]=n}function $A(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ut(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function fp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ut(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Z=0;function U0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var z0,hp,j0,B0,W0,kh=!1,qa=[],Jn=null,Zn=null,er=null,Eo=new Map,Io=new Map,jn=[],UA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zg(t,e){switch(t){case"focusin":case"focusout":Jn=null;break;case"dragenter":case"dragleave":Zn=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":Eo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(e.pointerId)}}function xs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=fa(e),e!==null&&hp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function zA(t,e,n,r,i){switch(e){case"focusin":return Jn=xs(Jn,t,e,n,r,i),!0;case"dragenter":return Zn=xs(Zn,t,e,n,r,i),!0;case"mouseover":return er=xs(er,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Eo.set(s,xs(Eo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Io.set(s,xs(Io.get(s)||null,t,e,n,r,i)),!0}return!1}function H0(t){var e=br(t.target);if(e!==null){var n=oi(e);if(n!==null){if(e=n.tag,e===13){if(e=O0(n),e!==null){t.blockedOn=e,W0(t.priority,function(){j0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Tl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ph(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Eh=r,n.target.dispatchEvent(r),Eh=null}else return e=fa(n),e!==null&&hp(e),t.blockedOn=n,!1;e.shift()}return!0}function jg(t,e,n){Tl(t)&&n.delete(e)}function jA(){kh=!1,Jn!==null&&Tl(Jn)&&(Jn=null),Zn!==null&&Tl(Zn)&&(Zn=null),er!==null&&Tl(er)&&(er=null),Eo.forEach(jg),Io.forEach(jg)}function Os(t,e){t.blockedOn===e&&(t.blockedOn=null,kh||(kh=!0,wt.unstable_scheduleCallback(wt.unstable_NormalPriority,jA)))}function To(t){function e(i){return Os(i,t)}if(0<qa.length){Os(qa[0],t);for(var n=1;n<qa.length;n++){var r=qa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Jn!==null&&Os(Jn,t),Zn!==null&&Os(Zn,t),er!==null&&Os(er,t),Eo.forEach(e),Io.forEach(e),n=0;n<jn.length;n++)r=jn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<jn.length&&(n=jn[0],n.blockedOn===null);)H0(n),n.blockedOn===null&&jn.shift()}var Ui=xn.ReactCurrentBatchConfig,Gl=!0;function BA(t,e,n,r){var i=Z,s=Ui.transition;Ui.transition=null;try{Z=1,dp(t,e,n,r)}finally{Z=i,Ui.transition=s}}function WA(t,e,n,r){var i=Z,s=Ui.transition;Ui.transition=null;try{Z=4,dp(t,e,n,r)}finally{Z=i,Ui.transition=s}}function dp(t,e,n,r){if(Gl){var i=Ph(t,e,n,r);if(i===null)_f(t,e,r,Ql,n),zg(t,r);else if(zA(i,t,e,n,r))r.stopPropagation();else if(zg(t,r),e&4&&-1<UA.indexOf(t)){for(;i!==null;){var s=fa(i);if(s!==null&&z0(s),s=Ph(t,e,n,r),s===null&&_f(t,e,r,Ql,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else _f(t,e,r,null,n)}}var Ql=null;function Ph(t,e,n,r){if(Ql=null,t=up(r),t=br(t),t!==null)if(e=oi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=O0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ql=t,null}function q0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(NA()){case cp:return 1;case V0:return 4;case ql:case xA:return 16;case F0:return 536870912;default:return 16}default:return 16}}var Kn=null,pp=null,Sl=null;function K0(){if(Sl)return Sl;var t,e=pp,n=e.length,r,i="value"in Kn?Kn.value:Kn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Sl=i.slice(t,1<r?1-r:void 0)}function Al(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ka(){return!0}function Bg(){return!1}function Tt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ka:Bg,this.isPropagationStopped=Bg,this}return de(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ka)},persist:function(){},isPersistent:Ka}),e}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mp=Tt(ds),ca=de({},ds,{view:0,detail:0}),HA=Tt(ca),cf,ff,Ds,qu=de({},ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ds&&(Ds&&t.type==="mousemove"?(cf=t.screenX-Ds.screenX,ff=t.screenY-Ds.screenY):ff=cf=0,Ds=t),cf)},movementY:function(t){return"movementY"in t?t.movementY:ff}}),Wg=Tt(qu),qA=de({},qu,{dataTransfer:0}),KA=Tt(qA),GA=de({},ca,{relatedTarget:0}),hf=Tt(GA),QA=de({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),YA=Tt(QA),XA=de({},ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),JA=Tt(XA),ZA=de({},ds,{data:0}),Hg=Tt(ZA),ek={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=nk[t])?!!e[t]:!1}function gp(){return rk}var ik=de({},ca,{key:function(t){if(t.key){var e=ek[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?tk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gp,charCode:function(t){return t.type==="keypress"?Al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sk=Tt(ik),ok=de({},qu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qg=Tt(ok),ak=de({},ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gp}),lk=Tt(ak),uk=de({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),ck=Tt(uk),fk=de({},qu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hk=Tt(fk),dk=[9,13,27,32],yp=wn&&"CompositionEvent"in window,to=null;wn&&"documentMode"in document&&(to=document.documentMode);var pk=wn&&"TextEvent"in window&&!to,G0=wn&&(!yp||to&&8<to&&11>=to),Kg=" ",Gg=!1;function Q0(t,e){switch(t){case"keyup":return dk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Y0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ii=!1;function mk(t,e){switch(t){case"compositionend":return Y0(e);case"keypress":return e.which!==32?null:(Gg=!0,Kg);case"textInput":return t=e.data,t===Kg&&Gg?null:t;default:return null}}function gk(t,e){if(Ii)return t==="compositionend"||!yp&&Q0(t,e)?(t=K0(),Sl=pp=Kn=null,Ii=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return G0&&e.locale!=="ko"?null:e.data;default:return null}}var yk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!yk[t.type]:e==="textarea"}function X0(t,e,n,r){R0(r),e=Yl(e,"onChange"),0<e.length&&(n=new mp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var no=null,So=null;function vk(t){l1(t,0)}function Ku(t){var e=Ai(t);if(E0(e))return t}function _k(t,e){if(t==="change")return e}var J0=!1;if(wn){var df;if(wn){var pf="oninput"in document;if(!pf){var Yg=document.createElement("div");Yg.setAttribute("oninput","return;"),pf=typeof Yg.oninput=="function"}df=pf}else df=!1;J0=df&&(!document.documentMode||9<document.documentMode)}function Xg(){no&&(no.detachEvent("onpropertychange",Z0),So=no=null)}function Z0(t){if(t.propertyName==="value"&&Ku(So)){var e=[];X0(e,So,t,up(t)),x0(vk,e)}}function wk(t,e,n){t==="focusin"?(Xg(),no=e,So=n,no.attachEvent("onpropertychange",Z0)):t==="focusout"&&Xg()}function Ek(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ku(So)}function Ik(t,e){if(t==="click")return Ku(e)}function Tk(t,e){if(t==="input"||t==="change")return Ku(e)}function Sk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jt=typeof Object.is=="function"?Object.is:Sk;function Ao(t,e){if(jt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!uh.call(e,i)||!jt(t[i],e[i]))return!1}return!0}function Jg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zg(t,e){var n=Jg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jg(n)}}function e1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?e1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function t1(){for(var t=window,e=Bl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Bl(t.document)}return e}function vp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ak(t){var e=t1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&e1(n.ownerDocument.documentElement,n)){if(r!==null&&vp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Zg(n,s);var o=Zg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var kk=wn&&"documentMode"in document&&11>=document.documentMode,Ti=null,Rh=null,ro=null,Ch=!1;function ey(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ch||Ti==null||Ti!==Bl(r)||(r=Ti,"selectionStart"in r&&vp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ro&&Ao(ro,r)||(ro=r,r=Yl(Rh,"onSelect"),0<r.length&&(e=new mp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ti)))}function Ga(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Si={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionend:Ga("Transition","TransitionEnd")},mf={},n1={};wn&&(n1=document.createElement("div").style,"AnimationEvent"in window||(delete Si.animationend.animation,delete Si.animationiteration.animation,delete Si.animationstart.animation),"TransitionEvent"in window||delete Si.transitionend.transition);function Gu(t){if(mf[t])return mf[t];if(!Si[t])return t;var e=Si[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in n1)return mf[t]=e[n];return t}var r1=Gu("animationend"),i1=Gu("animationiteration"),s1=Gu("animationstart"),o1=Gu("transitionend"),a1=new Map,ty="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(t,e){a1.set(t,e),si(e,[t])}for(var gf=0;gf<ty.length;gf++){var yf=ty[gf],Pk=yf.toLowerCase(),Rk=yf[0].toUpperCase()+yf.slice(1);_r(Pk,"on"+Rk)}_r(r1,"onAnimationEnd");_r(i1,"onAnimationIteration");_r(s1,"onAnimationStart");_r("dblclick","onDoubleClick");_r("focusin","onFocus");_r("focusout","onBlur");_r(o1,"onTransitionEnd");Qi("onMouseEnter",["mouseout","mouseover"]);Qi("onMouseLeave",["mouseout","mouseover"]);Qi("onPointerEnter",["pointerout","pointerover"]);Qi("onPointerLeave",["pointerout","pointerover"]);si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));si("onBeforeInput",["compositionend","keypress","textInput","paste"]);si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ws="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ck=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ws));function ny(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,PA(r,e,void 0,t),t.currentTarget=null}function l1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;ny(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;ny(i,a,u),s=l}}}if(Hl)throw t=Sh,Hl=!1,Sh=null,t}function re(t,e){var n=e[Dh];n===void 0&&(n=e[Dh]=new Set);var r=t+"__bubble";n.has(r)||(u1(e,t,2,!1),n.add(r))}function vf(t,e,n){var r=0;e&&(r|=4),u1(n,t,r,e)}var Qa="_reactListening"+Math.random().toString(36).slice(2);function ko(t){if(!t[Qa]){t[Qa]=!0,g0.forEach(function(n){n!=="selectionchange"&&(Ck.has(n)||vf(n,!1,t),vf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qa]||(e[Qa]=!0,vf("selectionchange",!1,e))}}function u1(t,e,n,r){switch(q0(e)){case 1:var i=BA;break;case 4:i=WA;break;default:i=dp}n=i.bind(null,e,n,t),i=void 0,!Th||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function _f(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=br(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}x0(function(){var u=s,c=up(n),f=[];e:{var h=a1.get(t);if(h!==void 0){var p=mp,y=t;switch(t){case"keypress":if(Al(n)===0)break e;case"keydown":case"keyup":p=sk;break;case"focusin":y="focus",p=hf;break;case"focusout":y="blur",p=hf;break;case"beforeblur":case"afterblur":p=hf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Wg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=KA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=lk;break;case r1:case i1:case s1:p=YA;break;case o1:p=ck;break;case"scroll":p=HA;break;case"wheel":p=hk;break;case"copy":case"cut":case"paste":p=JA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=qg}var v=(e&4)!==0,w=!v&&t==="scroll",m=v?h!==null?h+"Capture":null:h;v=[];for(var d=u,g;d!==null;){g=d;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,m!==null&&(_=wo(d,m),_!=null&&v.push(Po(d,_,g)))),w)break;d=d.return}0<v.length&&(h=new p(h,y,null,n,c),f.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Eh&&(y=n.relatedTarget||n.fromElement)&&(br(y)||y[En]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?br(y):null,y!==null&&(w=oi(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(v=Wg,_="onMouseLeave",m="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(v=qg,_="onPointerLeave",m="onPointerEnter",d="pointer"),w=p==null?h:Ai(p),g=y==null?h:Ai(y),h=new v(_,d+"leave",p,n,c),h.target=w,h.relatedTarget=g,_=null,br(c)===u&&(v=new v(m,d+"enter",y,n,c),v.target=g,v.relatedTarget=w,_=v),w=_,p&&y)t:{for(v=p,m=y,d=0,g=v;g;g=mi(g))d++;for(g=0,_=m;_;_=mi(_))g++;for(;0<d-g;)v=mi(v),d--;for(;0<g-d;)m=mi(m),g--;for(;d--;){if(v===m||m!==null&&v===m.alternate)break t;v=mi(v),m=mi(m)}v=null}else v=null;p!==null&&ry(f,h,p,v,!1),y!==null&&w!==null&&ry(f,w,y,v,!0)}}e:{if(h=u?Ai(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var I=_k;else if(Qg(h))if(J0)I=Tk;else{I=Ek;var k=wk}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(I=Ik);if(I&&(I=I(t,u))){X0(f,I,n,c);break e}k&&k(t,h,u),t==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&gh(h,"number",h.value)}switch(k=u?Ai(u):window,t){case"focusin":(Qg(k)||k.contentEditable==="true")&&(Ti=k,Rh=u,ro=null);break;case"focusout":ro=Rh=Ti=null;break;case"mousedown":Ch=!0;break;case"contextmenu":case"mouseup":case"dragend":Ch=!1,ey(f,n,c);break;case"selectionchange":if(kk)break;case"keydown":case"keyup":ey(f,n,c)}var P;if(yp)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Ii?Q0(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(G0&&n.locale!=="ko"&&(Ii||O!=="onCompositionStart"?O==="onCompositionEnd"&&Ii&&(P=K0()):(Kn=c,pp="value"in Kn?Kn.value:Kn.textContent,Ii=!0)),k=Yl(u,O),0<k.length&&(O=new Hg(O,t,null,n,c),f.push({event:O,listeners:k}),P?O.data=P:(P=Y0(n),P!==null&&(O.data=P)))),(P=pk?mk(t,n):gk(t,n))&&(u=Yl(u,"onBeforeInput"),0<u.length&&(c=new Hg("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=P))}l1(f,e)})}function Po(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=wo(t,n),s!=null&&r.unshift(Po(t,s,i)),s=wo(t,e),s!=null&&r.push(Po(t,s,i))),t=t.return}return r}function mi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ry(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=wo(n,s),l!=null&&o.unshift(Po(n,l,a))):i||(l=wo(n,s),l!=null&&o.push(Po(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var bk=/\r\n?/g,Nk=/\u0000|\uFFFD/g;function iy(t){return(typeof t=="string"?t:""+t).replace(bk,`
`).replace(Nk,"")}function Ya(t,e,n){if(e=iy(e),iy(t)!==e&&n)throw Error(S(425))}function Xl(){}var bh=null,Nh=null;function xh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Oh=typeof setTimeout=="function"?setTimeout:void 0,xk=typeof clearTimeout=="function"?clearTimeout:void 0,sy=typeof Promise=="function"?Promise:void 0,Ok=typeof queueMicrotask=="function"?queueMicrotask:typeof sy<"u"?function(t){return sy.resolve(null).then(t).catch(Dk)}:Oh;function Dk(t){setTimeout(function(){throw t})}function wf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),To(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);To(e)}function tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function oy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ps=Math.random().toString(36).slice(2),Qt="__reactFiber$"+ps,Ro="__reactProps$"+ps,En="__reactContainer$"+ps,Dh="__reactEvents$"+ps,Lk="__reactListeners$"+ps,Mk="__reactHandles$"+ps;function br(t){var e=t[Qt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[En]||n[Qt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=oy(t);t!==null;){if(n=t[Qt])return n;t=oy(t)}return e}t=n,n=t.parentNode}return null}function fa(t){return t=t[Qt]||t[En],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ai(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function Qu(t){return t[Ro]||null}var Lh=[],ki=-1;function wr(t){return{current:t}}function ae(t){0>ki||(t.current=Lh[ki],Lh[ki]=null,ki--)}function te(t,e){ki++,Lh[ki]=t.current,t.current=e}var hr={},Je=wr(hr),ut=wr(!1),Wr=hr;function Yi(t,e){var n=t.type.contextTypes;if(!n)return hr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ct(t){return t=t.childContextTypes,t!=null}function Jl(){ae(ut),ae(Je)}function ay(t,e,n){if(Je.current!==hr)throw Error(S(168));te(Je,e),te(ut,n)}function c1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,wA(t)||"Unknown",i));return de({},n,r)}function Zl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hr,Wr=Je.current,te(Je,t),te(ut,ut.current),!0}function ly(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=c1(t,e,Wr),r.__reactInternalMemoizedMergedChildContext=t,ae(ut),ae(Je),te(Je,t)):ae(ut),te(ut,n)}var fn=null,Yu=!1,Ef=!1;function f1(t){fn===null?fn=[t]:fn.push(t)}function Vk(t){Yu=!0,f1(t)}function Er(){if(!Ef&&fn!==null){Ef=!0;var t=0,e=Z;try{var n=fn;for(Z=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}fn=null,Yu=!1}catch(i){throw fn!==null&&(fn=fn.slice(t+1)),M0(cp,Er),i}finally{Z=e,Ef=!1}}return null}var Pi=[],Ri=0,eu=null,tu=0,At=[],kt=0,Hr=null,dn=1,pn="";function Pr(t,e){Pi[Ri++]=tu,Pi[Ri++]=eu,eu=t,tu=e}function h1(t,e,n){At[kt++]=dn,At[kt++]=pn,At[kt++]=Hr,Hr=t;var r=dn;t=pn;var i=32-Ut(r)-1;r&=~(1<<i),n+=1;var s=32-Ut(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,dn=1<<32-Ut(e)+i|n<<i|r,pn=s+t}else dn=1<<s|n<<i|r,pn=t}function _p(t){t.return!==null&&(Pr(t,1),h1(t,1,0))}function wp(t){for(;t===eu;)eu=Pi[--Ri],Pi[Ri]=null,tu=Pi[--Ri],Pi[Ri]=null;for(;t===Hr;)Hr=At[--kt],At[kt]=null,pn=At[--kt],At[kt]=null,dn=At[--kt],At[kt]=null}var vt=null,gt=null,ue=!1,Ft=null;function d1(t,e){var n=Rt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function uy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vt=t,gt=tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vt=t,gt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hr!==null?{id:dn,overflow:pn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vt=t,gt=null,!0):!1;default:return!1}}function Mh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Vh(t){if(ue){var e=gt;if(e){var n=e;if(!uy(t,e)){if(Mh(t))throw Error(S(418));e=tr(n.nextSibling);var r=vt;e&&uy(t,e)?d1(r,n):(t.flags=t.flags&-4097|2,ue=!1,vt=t)}}else{if(Mh(t))throw Error(S(418));t.flags=t.flags&-4097|2,ue=!1,vt=t}}}function cy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vt=t}function Xa(t){if(t!==vt)return!1;if(!ue)return cy(t),ue=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!xh(t.type,t.memoizedProps)),e&&(e=gt)){if(Mh(t))throw p1(),Error(S(418));for(;e;)d1(t,e),e=tr(e.nextSibling)}if(cy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gt=tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gt=null}}else gt=vt?tr(t.stateNode.nextSibling):null;return!0}function p1(){for(var t=gt;t;)t=tr(t.nextSibling)}function Xi(){gt=vt=null,ue=!1}function Ep(t){Ft===null?Ft=[t]:Ft.push(t)}var Fk=xn.ReactCurrentBatchConfig;function Mt(t,e){if(t&&t.defaultProps){e=de({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var nu=wr(null),ru=null,Ci=null,Ip=null;function Tp(){Ip=Ci=ru=null}function Sp(t){var e=nu.current;ae(nu),t._currentValue=e}function Fh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function zi(t,e){ru=t,Ip=Ci=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(lt=!0),t.firstContext=null)}function Nt(t){var e=t._currentValue;if(Ip!==t)if(t={context:t,memoizedValue:e,next:null},Ci===null){if(ru===null)throw Error(S(308));Ci=t,ru.dependencies={lanes:0,firstContext:t}}else Ci=Ci.next=t;return e}var Nr=null;function Ap(t){Nr===null?Nr=[t]:Nr.push(t)}function m1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ap(e)):(n.next=i.next,i.next=n),e.interleaved=n,In(t,r)}function In(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zn=!1;function kp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function g1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function vn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function nr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,In(t,n)}return i=r.interleaved,i===null?(e.next=e,Ap(r)):(e.next=i.next,i.next=e),r.interleaved=e,In(t,n)}function kl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,fp(t,n)}}function fy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function iu(t,e,n,r){var i=t.updateQueue;zn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(h=e,p=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){f=y.call(p,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,h=typeof y=="function"?y.call(p,f,h):y,h==null)break e;f=de({},f,h);break e;case 2:zn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Kr|=o,t.lanes=o,t.memoizedState=f}}function hy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var y1=new m0.Component().refs;function $h(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:de({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xu={isMounted:function(t){return(t=t._reactInternals)?oi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=rt(),i=ir(t),s=vn(r,i);s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,i),e!==null&&(zt(e,t,i,r),kl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=rt(),i=ir(t),s=vn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,i),e!==null&&(zt(e,t,i,r),kl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rt(),r=ir(t),i=vn(n,r);i.tag=2,e!=null&&(i.callback=e),e=nr(t,i,r),e!==null&&(zt(e,t,r,n),kl(e,t,r))}};function dy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ao(n,r)||!Ao(i,s):!0}function v1(t,e,n){var r=!1,i=hr,s=e.contextType;return typeof s=="object"&&s!==null?s=Nt(s):(i=ct(e)?Wr:Je.current,r=e.contextTypes,s=(r=r!=null)?Yi(t,i):hr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function py(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Xu.enqueueReplaceState(e,e.state,null)}function Uh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=y1,kp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Nt(s):(s=ct(e)?Wr:Je.current,i.context=Yi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&($h(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Xu.enqueueReplaceState(i,i.state,null),iu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ls(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===y1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function Ja(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function my(t){var e=t._init;return e(t._payload)}function _1(t){function e(m,d){if(t){var g=m.deletions;g===null?(m.deletions=[d],m.flags|=16):g.push(d)}}function n(m,d){if(!t)return null;for(;d!==null;)e(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function i(m,d){return m=sr(m,d),m.index=0,m.sibling=null,m}function s(m,d,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<d?(m.flags|=2,d):g):(m.flags|=2,d)):(m.flags|=1048576,d)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,d,g,_){return d===null||d.tag!==6?(d=Rf(g,m.mode,_),d.return=m,d):(d=i(d,g),d.return=m,d)}function l(m,d,g,_){var I=g.type;return I===Ei?c(m,d,g.props.children,_,g.key):d!==null&&(d.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Un&&my(I)===d.type)?(_=i(d,g.props),_.ref=Ls(m,d,g),_.return=m,_):(_=xl(g.type,g.key,g.props,null,m.mode,_),_.ref=Ls(m,d,g),_.return=m,_)}function u(m,d,g,_){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=Cf(g,m.mode,_),d.return=m,d):(d=i(d,g.children||[]),d.return=m,d)}function c(m,d,g,_,I){return d===null||d.tag!==7?(d=Ur(g,m.mode,_,I),d.return=m,d):(d=i(d,g),d.return=m,d)}function f(m,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Rf(""+d,m.mode,g),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case za:return g=xl(d.type,d.key,d.props,null,m.mode,g),g.ref=Ls(m,null,d),g.return=m,g;case wi:return d=Cf(d,m.mode,g),d.return=m,d;case Un:var _=d._init;return f(m,_(d._payload),g)}if(js(d)||bs(d))return d=Ur(d,m.mode,g,null),d.return=m,d;Ja(m,d)}return null}function h(m,d,g,_){var I=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return I!==null?null:a(m,d,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case za:return g.key===I?l(m,d,g,_):null;case wi:return g.key===I?u(m,d,g,_):null;case Un:return I=g._init,h(m,d,I(g._payload),_)}if(js(g)||bs(g))return I!==null?null:c(m,d,g,_,null);Ja(m,g)}return null}function p(m,d,g,_,I){if(typeof _=="string"&&_!==""||typeof _=="number")return m=m.get(g)||null,a(d,m,""+_,I);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case za:return m=m.get(_.key===null?g:_.key)||null,l(d,m,_,I);case wi:return m=m.get(_.key===null?g:_.key)||null,u(d,m,_,I);case Un:var k=_._init;return p(m,d,g,k(_._payload),I)}if(js(_)||bs(_))return m=m.get(g)||null,c(d,m,_,I,null);Ja(d,_)}return null}function y(m,d,g,_){for(var I=null,k=null,P=d,O=d=0,W=null;P!==null&&O<g.length;O++){P.index>O?(W=P,P=null):W=P.sibling;var U=h(m,P,g[O],_);if(U===null){P===null&&(P=W);break}t&&P&&U.alternate===null&&e(m,P),d=s(U,d,O),k===null?I=U:k.sibling=U,k=U,P=W}if(O===g.length)return n(m,P),ue&&Pr(m,O),I;if(P===null){for(;O<g.length;O++)P=f(m,g[O],_),P!==null&&(d=s(P,d,O),k===null?I=P:k.sibling=P,k=P);return ue&&Pr(m,O),I}for(P=r(m,P);O<g.length;O++)W=p(P,m,O,g[O],_),W!==null&&(t&&W.alternate!==null&&P.delete(W.key===null?O:W.key),d=s(W,d,O),k===null?I=W:k.sibling=W,k=W);return t&&P.forEach(function(Dt){return e(m,Dt)}),ue&&Pr(m,O),I}function v(m,d,g,_){var I=bs(g);if(typeof I!="function")throw Error(S(150));if(g=I.call(g),g==null)throw Error(S(151));for(var k=I=null,P=d,O=d=0,W=null,U=g.next();P!==null&&!U.done;O++,U=g.next()){P.index>O?(W=P,P=null):W=P.sibling;var Dt=h(m,P,U.value,_);if(Dt===null){P===null&&(P=W);break}t&&P&&Dt.alternate===null&&e(m,P),d=s(Dt,d,O),k===null?I=Dt:k.sibling=Dt,k=Dt,P=W}if(U.done)return n(m,P),ue&&Pr(m,O),I;if(P===null){for(;!U.done;O++,U=g.next())U=f(m,U.value,_),U!==null&&(d=s(U,d,O),k===null?I=U:k.sibling=U,k=U);return ue&&Pr(m,O),I}for(P=r(m,P);!U.done;O++,U=g.next())U=p(P,m,O,U.value,_),U!==null&&(t&&U.alternate!==null&&P.delete(U.key===null?O:U.key),d=s(U,d,O),k===null?I=U:k.sibling=U,k=U);return t&&P.forEach(function(Rs){return e(m,Rs)}),ue&&Pr(m,O),I}function w(m,d,g,_){if(typeof g=="object"&&g!==null&&g.type===Ei&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case za:e:{for(var I=g.key,k=d;k!==null;){if(k.key===I){if(I=g.type,I===Ei){if(k.tag===7){n(m,k.sibling),d=i(k,g.props.children),d.return=m,m=d;break e}}else if(k.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Un&&my(I)===k.type){n(m,k.sibling),d=i(k,g.props),d.ref=Ls(m,k,g),d.return=m,m=d;break e}n(m,k);break}else e(m,k);k=k.sibling}g.type===Ei?(d=Ur(g.props.children,m.mode,_,g.key),d.return=m,m=d):(_=xl(g.type,g.key,g.props,null,m.mode,_),_.ref=Ls(m,d,g),_.return=m,m=_)}return o(m);case wi:e:{for(k=g.key;d!==null;){if(d.key===k)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(m,d.sibling),d=i(d,g.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else e(m,d);d=d.sibling}d=Cf(g,m.mode,_),d.return=m,m=d}return o(m);case Un:return k=g._init,w(m,d,k(g._payload),_)}if(js(g))return y(m,d,g,_);if(bs(g))return v(m,d,g,_);Ja(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(m,d.sibling),d=i(d,g),d.return=m,m=d):(n(m,d),d=Rf(g,m.mode,_),d.return=m,m=d),o(m)):n(m,d)}return w}var Ji=_1(!0),w1=_1(!1),ha={},tn=wr(ha),Co=wr(ha),bo=wr(ha);function xr(t){if(t===ha)throw Error(S(174));return t}function Pp(t,e){switch(te(bo,e),te(Co,t),te(tn,ha),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vh(e,t)}ae(tn),te(tn,e)}function Zi(){ae(tn),ae(Co),ae(bo)}function E1(t){xr(bo.current);var e=xr(tn.current),n=vh(e,t.type);e!==n&&(te(Co,t),te(tn,n))}function Rp(t){Co.current===t&&(ae(tn),ae(Co))}var fe=wr(0);function su(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var If=[];function Cp(){for(var t=0;t<If.length;t++)If[t]._workInProgressVersionPrimary=null;If.length=0}var Pl=xn.ReactCurrentDispatcher,Tf=xn.ReactCurrentBatchConfig,qr=0,he=null,ke=null,xe=null,ou=!1,io=!1,No=0,$k=0;function We(){throw Error(S(321))}function bp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jt(t[n],e[n]))return!1;return!0}function Np(t,e,n,r,i,s){if(qr=s,he=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pl.current=t===null||t.memoizedState===null?Bk:Wk,t=n(r,i),io){s=0;do{if(io=!1,No=0,25<=s)throw Error(S(301));s+=1,xe=ke=null,e.updateQueue=null,Pl.current=Hk,t=n(r,i)}while(io)}if(Pl.current=au,e=ke!==null&&ke.next!==null,qr=0,xe=ke=he=null,ou=!1,e)throw Error(S(300));return t}function xp(){var t=No!==0;return No=0,t}function Gt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?he.memoizedState=xe=t:xe=xe.next=t,xe}function xt(){if(ke===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=ke.next;var e=xe===null?he.memoizedState:xe.next;if(e!==null)xe=e,ke=t;else{if(t===null)throw Error(S(310));ke=t,t={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},xe===null?he.memoizedState=xe=t:xe=xe.next=t}return xe}function xo(t,e){return typeof e=="function"?e(t):e}function Sf(t){var e=xt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((qr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,he.lanes|=c,Kr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,jt(r,e.memoizedState)||(lt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,he.lanes|=s,Kr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Af(t){var e=xt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);jt(s,e.memoizedState)||(lt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function I1(){}function T1(t,e){var n=he,r=xt(),i=e(),s=!jt(r.memoizedState,i);if(s&&(r.memoizedState=i,lt=!0),r=r.queue,Op(k1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||xe!==null&&xe.memoizedState.tag&1){if(n.flags|=2048,Oo(9,A1.bind(null,n,r,i,e),void 0,null),Oe===null)throw Error(S(349));qr&30||S1(n,e,i)}return i}function S1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=he.updateQueue,e===null?(e={lastEffect:null,stores:null},he.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function A1(t,e,n,r){e.value=n,e.getSnapshot=r,P1(e)&&R1(t)}function k1(t,e,n){return n(function(){P1(e)&&R1(t)})}function P1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jt(t,n)}catch{return!0}}function R1(t){var e=In(t,1);e!==null&&zt(e,t,1,-1)}function gy(t){var e=Gt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:t},e.queue=t,t=t.dispatch=jk.bind(null,he,t),[e.memoizedState,t]}function Oo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=he.updateQueue,e===null?(e={lastEffect:null,stores:null},he.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function C1(){return xt().memoizedState}function Rl(t,e,n,r){var i=Gt();he.flags|=t,i.memoizedState=Oo(1|e,n,void 0,r===void 0?null:r)}function Ju(t,e,n,r){var i=xt();r=r===void 0?null:r;var s=void 0;if(ke!==null){var o=ke.memoizedState;if(s=o.destroy,r!==null&&bp(r,o.deps)){i.memoizedState=Oo(e,n,s,r);return}}he.flags|=t,i.memoizedState=Oo(1|e,n,s,r)}function yy(t,e){return Rl(8390656,8,t,e)}function Op(t,e){return Ju(2048,8,t,e)}function b1(t,e){return Ju(4,2,t,e)}function N1(t,e){return Ju(4,4,t,e)}function x1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function O1(t,e,n){return n=n!=null?n.concat([t]):null,Ju(4,4,x1.bind(null,e,t),n)}function Dp(){}function D1(t,e){var n=xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&bp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function L1(t,e){var n=xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&bp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function M1(t,e,n){return qr&21?(jt(n,e)||(n=$0(),he.lanes|=n,Kr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,lt=!0),t.memoizedState=n)}function Uk(t,e){var n=Z;Z=n!==0&&4>n?n:4,t(!0);var r=Tf.transition;Tf.transition={};try{t(!1),e()}finally{Z=n,Tf.transition=r}}function V1(){return xt().memoizedState}function zk(t,e,n){var r=ir(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},F1(t))$1(e,n);else if(n=m1(t,e,n,r),n!==null){var i=rt();zt(n,t,r,i),U1(n,e,r)}}function jk(t,e,n){var r=ir(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(F1(t))$1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,jt(a,o)){var l=e.interleaved;l===null?(i.next=i,Ap(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=m1(t,e,i,r),n!==null&&(i=rt(),zt(n,t,r,i),U1(n,e,r))}}function F1(t){var e=t.alternate;return t===he||e!==null&&e===he}function $1(t,e){io=ou=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function U1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,fp(t,n)}}var au={readContext:Nt,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},Bk={readContext:Nt,useCallback:function(t,e){return Gt().memoizedState=[t,e===void 0?null:e],t},useContext:Nt,useEffect:yy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Rl(4194308,4,x1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Rl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Rl(4,2,t,e)},useMemo:function(t,e){var n=Gt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Gt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=zk.bind(null,he,t),[r.memoizedState,t]},useRef:function(t){var e=Gt();return t={current:t},e.memoizedState=t},useState:gy,useDebugValue:Dp,useDeferredValue:function(t){return Gt().memoizedState=t},useTransition:function(){var t=gy(!1),e=t[0];return t=Uk.bind(null,t[1]),Gt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=he,i=Gt();if(ue){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),Oe===null)throw Error(S(349));qr&30||S1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,yy(k1.bind(null,r,s,t),[t]),r.flags|=2048,Oo(9,A1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Gt(),e=Oe.identifierPrefix;if(ue){var n=pn,r=dn;n=(r&~(1<<32-Ut(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=No++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=$k++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Wk={readContext:Nt,useCallback:D1,useContext:Nt,useEffect:Op,useImperativeHandle:O1,useInsertionEffect:b1,useLayoutEffect:N1,useMemo:L1,useReducer:Sf,useRef:C1,useState:function(){return Sf(xo)},useDebugValue:Dp,useDeferredValue:function(t){var e=xt();return M1(e,ke.memoizedState,t)},useTransition:function(){var t=Sf(xo)[0],e=xt().memoizedState;return[t,e]},useMutableSource:I1,useSyncExternalStore:T1,useId:V1,unstable_isNewReconciler:!1},Hk={readContext:Nt,useCallback:D1,useContext:Nt,useEffect:Op,useImperativeHandle:O1,useInsertionEffect:b1,useLayoutEffect:N1,useMemo:L1,useReducer:Af,useRef:C1,useState:function(){return Af(xo)},useDebugValue:Dp,useDeferredValue:function(t){var e=xt();return ke===null?e.memoizedState=t:M1(e,ke.memoizedState,t)},useTransition:function(){var t=Af(xo)[0],e=xt().memoizedState;return[t,e]},useMutableSource:I1,useSyncExternalStore:T1,useId:V1,unstable_isNewReconciler:!1};function es(t,e){try{var n="",r=e;do n+=_A(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function kf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function zh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var qk=typeof WeakMap=="function"?WeakMap:Map;function z1(t,e,n){n=vn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){uu||(uu=!0,Xh=r),zh(t,e)},n}function j1(t,e,n){n=vn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){zh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){zh(t,e),typeof r!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function vy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new qk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=oP.bind(null,t,e,n),e.then(t,t))}function _y(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function wy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=vn(-1,1),e.tag=2,nr(n,e,1))),n.lanes|=1),t)}var Kk=xn.ReactCurrentOwner,lt=!1;function tt(t,e,n,r){e.child=t===null?w1(e,null,n,r):Ji(e,t.child,n,r)}function Ey(t,e,n,r,i){n=n.render;var s=e.ref;return zi(e,i),r=Np(t,e,n,r,s,i),n=xp(),t!==null&&!lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tn(t,e,i)):(ue&&n&&_p(e),e.flags|=1,tt(t,e,r,i),e.child)}function Iy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!jp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,B1(t,e,s,r,i)):(t=xl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ao,n(o,r)&&t.ref===e.ref)return Tn(t,e,i)}return e.flags|=1,t=sr(s,r),t.ref=e.ref,t.return=e,e.child=t}function B1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ao(s,r)&&t.ref===e.ref)if(lt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(lt=!0);else return e.lanes=t.lanes,Tn(t,e,i)}return jh(t,e,n,r,i)}function W1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Ni,mt),mt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,te(Ni,mt),mt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,te(Ni,mt),mt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,te(Ni,mt),mt|=r;return tt(t,e,i,n),e.child}function H1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function jh(t,e,n,r,i){var s=ct(n)?Wr:Je.current;return s=Yi(e,s),zi(e,i),n=Np(t,e,n,r,s,i),r=xp(),t!==null&&!lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tn(t,e,i)):(ue&&r&&_p(e),e.flags|=1,tt(t,e,n,i),e.child)}function Ty(t,e,n,r,i){if(ct(n)){var s=!0;Zl(e)}else s=!1;if(zi(e,i),e.stateNode===null)Cl(t,e),v1(e,n,r),Uh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Nt(u):(u=ct(n)?Wr:Je.current,u=Yi(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&py(e,o,r,u),zn=!1;var h=e.memoizedState;o.state=h,iu(e,r,o,i),l=e.memoizedState,a!==r||h!==l||ut.current||zn?(typeof c=="function"&&($h(e,n,c,r),l=e.memoizedState),(a=zn||dy(e,n,a,r,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,g1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Mt(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Nt(l):(l=ct(n)?Wr:Je.current,l=Yi(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&py(e,o,r,l),zn=!1,h=e.memoizedState,o.state=h,iu(e,r,o,i);var y=e.memoizedState;a!==f||h!==y||ut.current||zn?(typeof p=="function"&&($h(e,n,p,r),y=e.memoizedState),(u=zn||dy(e,n,u,r,h,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Bh(t,e,n,r,s,i)}function Bh(t,e,n,r,i,s){H1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ly(e,n,!1),Tn(t,e,s);r=e.stateNode,Kk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ji(e,t.child,null,s),e.child=Ji(e,null,a,s)):tt(t,e,a,s),e.memoizedState=r.state,i&&ly(e,n,!0),e.child}function q1(t){var e=t.stateNode;e.pendingContext?ay(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ay(t,e.context,!1),Pp(t,e.containerInfo)}function Sy(t,e,n,r,i){return Xi(),Ep(i),e.flags|=256,tt(t,e,n,r),e.child}var Wh={dehydrated:null,treeContext:null,retryLane:0};function Hh(t){return{baseLanes:t,cachePool:null,transitions:null}}function K1(t,e,n){var r=e.pendingProps,i=fe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),te(fe,i&1),t===null)return Vh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=tc(o,r,0,null),t=Ur(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Hh(n),e.memoizedState=Wh,t):Lp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Gk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=sr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=sr(a,s):(s=Ur(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Hh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Wh,r}return s=t.child,t=s.sibling,r=sr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Lp(t,e){return e=tc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Za(t,e,n,r){return r!==null&&Ep(r),Ji(e,t.child,null,n),t=Lp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Gk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=kf(Error(S(422))),Za(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=tc({mode:"visible",children:r.children},i,0,null),s=Ur(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ji(e,t.child,null,o),e.child.memoizedState=Hh(o),e.memoizedState=Wh,s);if(!(e.mode&1))return Za(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=kf(s,r,void 0),Za(t,e,o,r)}if(a=(o&t.childLanes)!==0,lt||a){if(r=Oe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,In(t,i),zt(r,t,i,-1))}return zp(),r=kf(Error(S(421))),Za(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=aP.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,gt=tr(i.nextSibling),vt=e,ue=!0,Ft=null,t!==null&&(At[kt++]=dn,At[kt++]=pn,At[kt++]=Hr,dn=t.id,pn=t.overflow,Hr=e),e=Lp(e,r.children),e.flags|=4096,e)}function Ay(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Fh(t.return,e,n)}function Pf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function G1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(tt(t,e,r.children,n),r=fe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ay(t,n,e);else if(t.tag===19)Ay(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(te(fe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&su(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Pf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&su(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Pf(e,!0,n,null,s);break;case"together":Pf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Cl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Tn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Kr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Qk(t,e,n){switch(e.tag){case 3:q1(e),Xi();break;case 5:E1(e);break;case 1:ct(e.type)&&Zl(e);break;case 4:Pp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;te(nu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(te(fe,fe.current&1),e.flags|=128,null):n&e.child.childLanes?K1(t,e,n):(te(fe,fe.current&1),t=Tn(t,e,n),t!==null?t.sibling:null);te(fe,fe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return G1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),te(fe,fe.current),r)break;return null;case 22:case 23:return e.lanes=0,W1(t,e,n)}return Tn(t,e,n)}var Q1,qh,Y1,X1;Q1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qh=function(){};Y1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,xr(tn.current);var s=null;switch(n){case"input":i=ph(t,i),r=ph(t,r),s=[];break;case"select":i=de({},i,{value:void 0}),r=de({},r,{value:void 0}),s=[];break;case"textarea":i=yh(t,i),r=yh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Xl)}_h(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(vo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(vo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&re("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};X1=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ms(t,e){if(!ue)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function He(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Yk(t,e,n){var r=e.pendingProps;switch(wp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(e),null;case 1:return ct(e.type)&&Jl(),He(e),null;case 3:return r=e.stateNode,Zi(),ae(ut),ae(Je),Cp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Xa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ft!==null&&(ed(Ft),Ft=null))),qh(t,e),He(e),null;case 5:Rp(e);var i=xr(bo.current);if(n=e.type,t!==null&&e.stateNode!=null)Y1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return He(e),null}if(t=xr(tn.current),Xa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Qt]=e,r[Ro]=s,t=(e.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(i=0;i<Ws.length;i++)re(Ws[i],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":Dg(r,s),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},re("invalid",r);break;case"textarea":Mg(r,s),re("invalid",r)}_h(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ya(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ya(r.textContent,a,t),i=["children",""+a]):vo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&re("scroll",r)}switch(n){case"input":ja(r),Lg(r,s,!0);break;case"textarea":ja(r),Vg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Xl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=S0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Qt]=e,t[Ro]=r,Q1(t,e,!1,!1),e.stateNode=t;e:{switch(o=wh(n,r),n){case"dialog":re("cancel",t),re("close",t),i=r;break;case"iframe":case"object":case"embed":re("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ws.length;i++)re(Ws[i],t);i=r;break;case"source":re("error",t),i=r;break;case"img":case"image":case"link":re("error",t),re("load",t),i=r;break;case"details":re("toggle",t),i=r;break;case"input":Dg(t,r),i=ph(t,r),re("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=de({},r,{value:void 0}),re("invalid",t);break;case"textarea":Mg(t,r),i=yh(t,r),re("invalid",t);break;default:i=r}_h(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?P0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&A0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&_o(t,l):typeof l=="number"&&_o(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(vo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&re("scroll",t):l!=null&&sp(t,s,l,o))}switch(n){case"input":ja(t),Lg(t,r,!1);break;case"textarea":ja(t),Vg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+fr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Vi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Vi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Xl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return He(e),null;case 6:if(t&&e.stateNode!=null)X1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=xr(bo.current),xr(tn.current),Xa(e)){if(r=e.stateNode,n=e.memoizedProps,r[Qt]=e,(s=r.nodeValue!==n)&&(t=vt,t!==null))switch(t.tag){case 3:Ya(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ya(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qt]=e,e.stateNode=r}return He(e),null;case 13:if(ae(fe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ue&&gt!==null&&e.mode&1&&!(e.flags&128))p1(),Xi(),e.flags|=98560,s=!1;else if(s=Xa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[Qt]=e}else Xi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;He(e),s=!1}else Ft!==null&&(ed(Ft),Ft=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||fe.current&1?Pe===0&&(Pe=3):zp())),e.updateQueue!==null&&(e.flags|=4),He(e),null);case 4:return Zi(),qh(t,e),t===null&&ko(e.stateNode.containerInfo),He(e),null;case 10:return Sp(e.type._context),He(e),null;case 17:return ct(e.type)&&Jl(),He(e),null;case 19:if(ae(fe),s=e.memoizedState,s===null)return He(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ms(s,!1);else{if(Pe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=su(t),o!==null){for(e.flags|=128,Ms(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return te(fe,fe.current&1|2),e.child}t=t.sibling}s.tail!==null&&we()>ts&&(e.flags|=128,r=!0,Ms(s,!1),e.lanes=4194304)}else{if(!r)if(t=su(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ms(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ue)return He(e),null}else 2*we()-s.renderingStartTime>ts&&n!==1073741824&&(e.flags|=128,r=!0,Ms(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=we(),e.sibling=null,n=fe.current,te(fe,r?n&1|2:n&1),e):(He(e),null);case 22:case 23:return Up(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?mt&1073741824&&(He(e),e.subtreeFlags&6&&(e.flags|=8192)):He(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function Xk(t,e){switch(wp(e),e.tag){case 1:return ct(e.type)&&Jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zi(),ae(ut),ae(Je),Cp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Rp(e),null;case 13:if(ae(fe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));Xi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ae(fe),null;case 4:return Zi(),null;case 10:return Sp(e.type._context),null;case 22:case 23:return Up(),null;case 24:return null;default:return null}}var el=!1,Ge=!1,Jk=typeof WeakSet=="function"?WeakSet:Set,b=null;function bi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ge(t,e,r)}else n.current=null}function Kh(t,e,n){try{n()}catch(r){ge(t,e,r)}}var ky=!1;function Zk(t,e){if(bh=Gl,t=t1(),vp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,h=null;t:for(;;){for(var p;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nh={focusedElem:t,selectionRange:n},Gl=!1,b=e;b!==null;)if(e=b,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,b=t;else for(;b!==null;){e=b;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,w=y.memoizedState,m=e.stateNode,d=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:Mt(e.type,v),w);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(_){ge(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,b=t;break}b=e.return}return y=ky,ky=!1,y}function so(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Kh(e,n,s)}i=i.next}while(i!==r)}}function Zu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Gh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function J1(t){var e=t.alternate;e!==null&&(t.alternate=null,J1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qt],delete e[Ro],delete e[Dh],delete e[Lk],delete e[Mk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Z1(t){return t.tag===5||t.tag===3||t.tag===4}function Py(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Z1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xl));else if(r!==4&&(t=t.child,t!==null))for(Qh(t,e,n),t=t.sibling;t!==null;)Qh(t,e,n),t=t.sibling}function Yh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Yh(t,e,n),t=t.sibling;t!==null;)Yh(t,e,n),t=t.sibling}var Me=null,Vt=!1;function Vn(t,e,n){for(n=n.child;n!==null;)ew(t,e,n),n=n.sibling}function ew(t,e,n){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Hu,n)}catch{}switch(n.tag){case 5:Ge||bi(n,e);case 6:var r=Me,i=Vt;Me=null,Vn(t,e,n),Me=r,Vt=i,Me!==null&&(Vt?(t=Me,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(Vt?(t=Me,n=n.stateNode,t.nodeType===8?wf(t.parentNode,n):t.nodeType===1&&wf(t,n),To(t)):wf(Me,n.stateNode));break;case 4:r=Me,i=Vt,Me=n.stateNode.containerInfo,Vt=!0,Vn(t,e,n),Me=r,Vt=i;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Kh(n,e,o),i=i.next}while(i!==r)}Vn(t,e,n);break;case 1:if(!Ge&&(bi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ge(n,e,a)}Vn(t,e,n);break;case 21:Vn(t,e,n);break;case 22:n.mode&1?(Ge=(r=Ge)||n.memoizedState!==null,Vn(t,e,n),Ge=r):Vn(t,e,n);break;default:Vn(t,e,n)}}function Ry(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Jk),e.forEach(function(r){var i=lP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Lt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Me=a.stateNode,Vt=!1;break e;case 3:Me=a.stateNode.containerInfo,Vt=!0;break e;case 4:Me=a.stateNode.containerInfo,Vt=!0;break e}a=a.return}if(Me===null)throw Error(S(160));ew(s,o,i),Me=null,Vt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ge(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)tw(e,t),e=e.sibling}function tw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Lt(e,t),Kt(t),r&4){try{so(3,t,t.return),Zu(3,t)}catch(v){ge(t,t.return,v)}try{so(5,t,t.return)}catch(v){ge(t,t.return,v)}}break;case 1:Lt(e,t),Kt(t),r&512&&n!==null&&bi(n,n.return);break;case 5:if(Lt(e,t),Kt(t),r&512&&n!==null&&bi(n,n.return),t.flags&32){var i=t.stateNode;try{_o(i,"")}catch(v){ge(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&I0(i,s),wh(a,o);var u=wh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?P0(i,f):c==="dangerouslySetInnerHTML"?A0(i,f):c==="children"?_o(i,f):sp(i,c,f,u)}switch(a){case"input":mh(i,s);break;case"textarea":T0(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Vi(i,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Vi(i,!!s.multiple,s.defaultValue,!0):Vi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ro]=s}catch(v){ge(t,t.return,v)}}break;case 6:if(Lt(e,t),Kt(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ge(t,t.return,v)}}break;case 3:if(Lt(e,t),Kt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{To(e.containerInfo)}catch(v){ge(t,t.return,v)}break;case 4:Lt(e,t),Kt(t);break;case 13:Lt(e,t),Kt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Fp=we())),r&4&&Ry(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ge=(u=Ge)||c,Lt(e,t),Ge=u):Lt(e,t),Kt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(b=t,c=t.child;c!==null;){for(f=b=c;b!==null;){switch(h=b,p=h.child,h.tag){case 0:case 11:case 14:case 15:so(4,h,h.return);break;case 1:bi(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){ge(r,n,v)}}break;case 5:bi(h,h.return);break;case 22:if(h.memoizedState!==null){by(f);continue}}p!==null?(p.return=h,b=p):by(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=k0("display",o))}catch(v){ge(t,t.return,v)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){ge(t,t.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Lt(e,t),Kt(t),r&4&&Ry(t);break;case 21:break;default:Lt(e,t),Kt(t)}}function Kt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Z1(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(_o(i,""),r.flags&=-33);var s=Py(t);Yh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Py(t);Qh(t,a,o);break;default:throw Error(S(161))}}catch(l){ge(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function eP(t,e,n){b=t,nw(t)}function nw(t,e,n){for(var r=(t.mode&1)!==0;b!==null;){var i=b,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||el;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ge;a=el;var u=Ge;if(el=o,(Ge=l)&&!u)for(b=i;b!==null;)o=b,l=o.child,o.tag===22&&o.memoizedState!==null?Ny(i):l!==null?(l.return=o,b=l):Ny(i);for(;s!==null;)b=s,nw(s),s=s.sibling;b=i,el=a,Ge=u}Cy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,b=s):Cy(t)}}function Cy(t){for(;b!==null;){var e=b;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ge||Zu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ge)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Mt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&hy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}hy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&To(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Ge||e.flags&512&&Gh(e)}catch(h){ge(e,e.return,h)}}if(e===t){b=null;break}if(n=e.sibling,n!==null){n.return=e.return,b=n;break}b=e.return}}function by(t){for(;b!==null;){var e=b;if(e===t){b=null;break}var n=e.sibling;if(n!==null){n.return=e.return,b=n;break}b=e.return}}function Ny(t){for(;b!==null;){var e=b;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Zu(4,e)}catch(l){ge(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ge(e,i,l)}}var s=e.return;try{Gh(e)}catch(l){ge(e,s,l)}break;case 5:var o=e.return;try{Gh(e)}catch(l){ge(e,o,l)}}}catch(l){ge(e,e.return,l)}if(e===t){b=null;break}var a=e.sibling;if(a!==null){a.return=e.return,b=a;break}b=e.return}}var tP=Math.ceil,lu=xn.ReactCurrentDispatcher,Mp=xn.ReactCurrentOwner,Ct=xn.ReactCurrentBatchConfig,X=0,Oe=null,Te=null,Ue=0,mt=0,Ni=wr(0),Pe=0,Do=null,Kr=0,ec=0,Vp=0,oo=null,ot=null,Fp=0,ts=1/0,cn=null,uu=!1,Xh=null,rr=null,tl=!1,Gn=null,cu=0,ao=0,Jh=null,bl=-1,Nl=0;function rt(){return X&6?we():bl!==-1?bl:bl=we()}function ir(t){return t.mode&1?X&2&&Ue!==0?Ue&-Ue:Fk.transition!==null?(Nl===0&&(Nl=$0()),Nl):(t=Z,t!==0||(t=window.event,t=t===void 0?16:q0(t.type)),t):1}function zt(t,e,n,r){if(50<ao)throw ao=0,Jh=null,Error(S(185));ua(t,n,r),(!(X&2)||t!==Oe)&&(t===Oe&&(!(X&2)&&(ec|=n),Pe===4&&Bn(t,Ue)),ft(t,r),n===1&&X===0&&!(e.mode&1)&&(ts=we()+500,Yu&&Er()))}function ft(t,e){var n=t.callbackNode;FA(t,e);var r=Kl(t,t===Oe?Ue:0);if(r===0)n!==null&&Ug(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ug(n),e===1)t.tag===0?Vk(xy.bind(null,t)):f1(xy.bind(null,t)),Ok(function(){!(X&6)&&Er()}),n=null;else{switch(U0(r)){case 1:n=cp;break;case 4:n=V0;break;case 16:n=ql;break;case 536870912:n=F0;break;default:n=ql}n=cw(n,rw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function rw(t,e){if(bl=-1,Nl=0,X&6)throw Error(S(327));var n=t.callbackNode;if(ji()&&t.callbackNode!==n)return null;var r=Kl(t,t===Oe?Ue:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=fu(t,r);else{e=r;var i=X;X|=2;var s=sw();(Oe!==t||Ue!==e)&&(cn=null,ts=we()+500,$r(t,e));do try{iP();break}catch(a){iw(t,a)}while(!0);Tp(),lu.current=s,X=i,Te!==null?e=0:(Oe=null,Ue=0,e=Pe)}if(e!==0){if(e===2&&(i=Ah(t),i!==0&&(r=i,e=Zh(t,i))),e===1)throw n=Do,$r(t,0),Bn(t,r),ft(t,we()),n;if(e===6)Bn(t,r);else{if(i=t.current.alternate,!(r&30)&&!nP(i)&&(e=fu(t,r),e===2&&(s=Ah(t),s!==0&&(r=s,e=Zh(t,s))),e===1))throw n=Do,$r(t,0),Bn(t,r),ft(t,we()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:Rr(t,ot,cn);break;case 3:if(Bn(t,r),(r&130023424)===r&&(e=Fp+500-we(),10<e)){if(Kl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){rt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Oh(Rr.bind(null,t,ot,cn),e);break}Rr(t,ot,cn);break;case 4:if(Bn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ut(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*tP(r/1960))-r,10<r){t.timeoutHandle=Oh(Rr.bind(null,t,ot,cn),r);break}Rr(t,ot,cn);break;case 5:Rr(t,ot,cn);break;default:throw Error(S(329))}}}return ft(t,we()),t.callbackNode===n?rw.bind(null,t):null}function Zh(t,e){var n=oo;return t.current.memoizedState.isDehydrated&&($r(t,e).flags|=256),t=fu(t,e),t!==2&&(e=ot,ot=n,e!==null&&ed(e)),t}function ed(t){ot===null?ot=t:ot.push.apply(ot,t)}function nP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!jt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Bn(t,e){for(e&=~Vp,e&=~ec,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ut(e),r=1<<n;t[n]=-1,e&=~r}}function xy(t){if(X&6)throw Error(S(327));ji();var e=Kl(t,0);if(!(e&1))return ft(t,we()),null;var n=fu(t,e);if(t.tag!==0&&n===2){var r=Ah(t);r!==0&&(e=r,n=Zh(t,r))}if(n===1)throw n=Do,$r(t,0),Bn(t,e),ft(t,we()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rr(t,ot,cn),ft(t,we()),null}function $p(t,e){var n=X;X|=1;try{return t(e)}finally{X=n,X===0&&(ts=we()+500,Yu&&Er())}}function Gr(t){Gn!==null&&Gn.tag===0&&!(X&6)&&ji();var e=X;X|=1;var n=Ct.transition,r=Z;try{if(Ct.transition=null,Z=1,t)return t()}finally{Z=r,Ct.transition=n,X=e,!(X&6)&&Er()}}function Up(){mt=Ni.current,ae(Ni)}function $r(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,xk(n)),Te!==null)for(n=Te.return;n!==null;){var r=n;switch(wp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jl();break;case 3:Zi(),ae(ut),ae(Je),Cp();break;case 5:Rp(r);break;case 4:Zi();break;case 13:ae(fe);break;case 19:ae(fe);break;case 10:Sp(r.type._context);break;case 22:case 23:Up()}n=n.return}if(Oe=t,Te=t=sr(t.current,null),Ue=mt=e,Pe=0,Do=null,Vp=ec=Kr=0,ot=oo=null,Nr!==null){for(e=0;e<Nr.length;e++)if(n=Nr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Nr=null}return t}function iw(t,e){do{var n=Te;try{if(Tp(),Pl.current=au,ou){for(var r=he.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ou=!1}if(qr=0,xe=ke=he=null,io=!1,No=0,Mp.current=null,n===null||n.return===null){Pe=1,Do=e,Te=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ue,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=_y(o);if(p!==null){p.flags&=-257,wy(p,o,a,s,e),p.mode&1&&vy(s,u,e),e=p,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){vy(s,u,e),zp();break e}l=Error(S(426))}}else if(ue&&a.mode&1){var w=_y(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),wy(w,o,a,s,e),Ep(es(l,a));break e}}s=l=es(l,a),Pe!==4&&(Pe=2),oo===null?oo=[s]:oo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=z1(s,l,e);fy(s,m);break e;case 1:a=l;var d=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(rr===null||!rr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=j1(s,a,e);fy(s,_);break e}}s=s.return}while(s!==null)}aw(n)}catch(I){e=I,Te===n&&n!==null&&(Te=n=n.return);continue}break}while(!0)}function sw(){var t=lu.current;return lu.current=au,t===null?au:t}function zp(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Oe===null||!(Kr&268435455)&&!(ec&268435455)||Bn(Oe,Ue)}function fu(t,e){var n=X;X|=2;var r=sw();(Oe!==t||Ue!==e)&&(cn=null,$r(t,e));do try{rP();break}catch(i){iw(t,i)}while(!0);if(Tp(),X=n,lu.current=r,Te!==null)throw Error(S(261));return Oe=null,Ue=0,Pe}function rP(){for(;Te!==null;)ow(Te)}function iP(){for(;Te!==null&&!CA();)ow(Te)}function ow(t){var e=uw(t.alternate,t,mt);t.memoizedProps=t.pendingProps,e===null?aw(t):Te=e,Mp.current=null}function aw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Xk(n,e),n!==null){n.flags&=32767,Te=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pe=6,Te=null;return}}else if(n=Yk(n,e,mt),n!==null){Te=n;return}if(e=e.sibling,e!==null){Te=e;return}Te=e=t}while(e!==null);Pe===0&&(Pe=5)}function Rr(t,e,n){var r=Z,i=Ct.transition;try{Ct.transition=null,Z=1,sP(t,e,n,r)}finally{Ct.transition=i,Z=r}return null}function sP(t,e,n,r){do ji();while(Gn!==null);if(X&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if($A(t,s),t===Oe&&(Te=Oe=null,Ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||tl||(tl=!0,cw(ql,function(){return ji(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ct.transition,Ct.transition=null;var o=Z;Z=1;var a=X;X|=4,Mp.current=null,Zk(t,n),tw(n,t),Ak(Nh),Gl=!!bh,Nh=bh=null,t.current=n,eP(n),bA(),X=a,Z=o,Ct.transition=s}else t.current=n;if(tl&&(tl=!1,Gn=t,cu=i),s=t.pendingLanes,s===0&&(rr=null),OA(n.stateNode),ft(t,we()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(uu)throw uu=!1,t=Xh,Xh=null,t;return cu&1&&t.tag!==0&&ji(),s=t.pendingLanes,s&1?t===Jh?ao++:(ao=0,Jh=t):ao=0,Er(),null}function ji(){if(Gn!==null){var t=U0(cu),e=Ct.transition,n=Z;try{if(Ct.transition=null,Z=16>t?16:t,Gn===null)var r=!1;else{if(t=Gn,Gn=null,cu=0,X&6)throw Error(S(331));var i=X;for(X|=4,b=t.current;b!==null;){var s=b,o=s.child;if(b.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(b=u;b!==null;){var c=b;switch(c.tag){case 0:case 11:case 15:so(8,c,s)}var f=c.child;if(f!==null)f.return=c,b=f;else for(;b!==null;){c=b;var h=c.sibling,p=c.return;if(J1(c),c===u){b=null;break}if(h!==null){h.return=p,b=h;break}b=p}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}b=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,b=o;else e:for(;b!==null;){if(s=b,s.flags&2048)switch(s.tag){case 0:case 11:case 15:so(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,b=m;break e}b=s.return}}var d=t.current;for(b=d;b!==null;){o=b;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,b=g;else e:for(o=d;b!==null;){if(a=b,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Zu(9,a)}}catch(I){ge(a,a.return,I)}if(a===o){b=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,b=_;break e}b=a.return}}if(X=i,Er(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Hu,t)}catch{}r=!0}return r}finally{Z=n,Ct.transition=e}}return!1}function Oy(t,e,n){e=es(n,e),e=z1(t,e,1),t=nr(t,e,1),e=rt(),t!==null&&(ua(t,1,e),ft(t,e))}function ge(t,e,n){if(t.tag===3)Oy(t,t,n);else for(;e!==null;){if(e.tag===3){Oy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rr===null||!rr.has(r))){t=es(n,t),t=j1(e,t,1),e=nr(e,t,1),t=rt(),e!==null&&(ua(e,1,t),ft(e,t));break}}e=e.return}}function oP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=rt(),t.pingedLanes|=t.suspendedLanes&n,Oe===t&&(Ue&n)===n&&(Pe===4||Pe===3&&(Ue&130023424)===Ue&&500>we()-Fp?$r(t,0):Vp|=n),ft(t,e)}function lw(t,e){e===0&&(t.mode&1?(e=Ha,Ha<<=1,!(Ha&130023424)&&(Ha=4194304)):e=1);var n=rt();t=In(t,e),t!==null&&(ua(t,e,n),ft(t,n))}function aP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),lw(t,n)}function lP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),lw(t,n)}var uw;uw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ut.current)lt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return lt=!1,Qk(t,e,n);lt=!!(t.flags&131072)}else lt=!1,ue&&e.flags&1048576&&h1(e,tu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Cl(t,e),t=e.pendingProps;var i=Yi(e,Je.current);zi(e,n),i=Np(null,e,r,t,i,n);var s=xp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ct(r)?(s=!0,Zl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,kp(e),i.updater=Xu,e.stateNode=i,i._reactInternals=e,Uh(e,r,t,n),e=Bh(null,e,r,!0,s,n)):(e.tag=0,ue&&s&&_p(e),tt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Cl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=cP(r),t=Mt(r,t),i){case 0:e=jh(null,e,r,t,n);break e;case 1:e=Ty(null,e,r,t,n);break e;case 11:e=Ey(null,e,r,t,n);break e;case 14:e=Iy(null,e,r,Mt(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),jh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Ty(t,e,r,i,n);case 3:e:{if(q1(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,g1(t,e),iu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=es(Error(S(423)),e),e=Sy(t,e,r,n,i);break e}else if(r!==i){i=es(Error(S(424)),e),e=Sy(t,e,r,n,i);break e}else for(gt=tr(e.stateNode.containerInfo.firstChild),vt=e,ue=!0,Ft=null,n=w1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xi(),r===i){e=Tn(t,e,n);break e}tt(t,e,r,n)}e=e.child}return e;case 5:return E1(e),t===null&&Vh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,xh(r,i)?o=null:s!==null&&xh(r,s)&&(e.flags|=32),H1(t,e),tt(t,e,o,n),e.child;case 6:return t===null&&Vh(e),null;case 13:return K1(t,e,n);case 4:return Pp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ji(e,null,r,n):tt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Ey(t,e,r,i,n);case 7:return tt(t,e,e.pendingProps,n),e.child;case 8:return tt(t,e,e.pendingProps.children,n),e.child;case 12:return tt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,te(nu,r._currentValue),r._currentValue=o,s!==null)if(jt(s.value,o)){if(s.children===i.children&&!ut.current){e=Tn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=vn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Fh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Fh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}tt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,zi(e,n),i=Nt(i),r=r(i),e.flags|=1,tt(t,e,r,n),e.child;case 14:return r=e.type,i=Mt(r,e.pendingProps),i=Mt(r.type,i),Iy(t,e,r,i,n);case 15:return B1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Cl(t,e),e.tag=1,ct(r)?(t=!0,Zl(e)):t=!1,zi(e,n),v1(e,r,i),Uh(e,r,i,n),Bh(null,e,r,!0,t,n);case 19:return G1(t,e,n);case 22:return W1(t,e,n)}throw Error(S(156,e.tag))};function cw(t,e){return M0(t,e)}function uP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(t,e,n,r){return new uP(t,e,n,r)}function jp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cP(t){if(typeof t=="function")return jp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ap)return 11;if(t===lp)return 14}return 2}function sr(t,e){var n=t.alternate;return n===null?(n=Rt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")jp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ei:return Ur(n.children,i,s,e);case op:o=8,i|=8;break;case ch:return t=Rt(12,n,e,i|2),t.elementType=ch,t.lanes=s,t;case fh:return t=Rt(13,n,e,i),t.elementType=fh,t.lanes=s,t;case hh:return t=Rt(19,n,e,i),t.elementType=hh,t.lanes=s,t;case _0:return tc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case y0:o=10;break e;case v0:o=9;break e;case ap:o=11;break e;case lp:o=14;break e;case Un:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=Rt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ur(t,e,n,r){return t=Rt(7,t,r,e),t.lanes=n,t}function tc(t,e,n,r){return t=Rt(22,t,r,e),t.elementType=_0,t.lanes=n,t.stateNode={isHidden:!1},t}function Rf(t,e,n){return t=Rt(6,t,null,e),t.lanes=n,t}function Cf(t,e,n){return e=Rt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function fP(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=uf(0),this.expirationTimes=uf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bp(t,e,n,r,i,s,o,a,l){return t=new fP(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kp(s),t}function hP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function fw(t){if(!t)return hr;t=t._reactInternals;e:{if(oi(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ct(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(ct(n))return c1(t,n,e)}return e}function hw(t,e,n,r,i,s,o,a,l){return t=Bp(n,r,!0,t,i,s,o,a,l),t.context=fw(null),n=t.current,r=rt(),i=ir(n),s=vn(r,i),s.callback=e??null,nr(n,s,i),t.current.lanes=i,ua(t,i,r),ft(t,r),t}function nc(t,e,n,r){var i=e.current,s=rt(),o=ir(i);return n=fw(n),e.context===null?e.context=n:e.pendingContext=n,e=vn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=nr(i,e,o),t!==null&&(zt(t,i,o,s),kl(t,i,o)),o}function hu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Dy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Wp(t,e){Dy(t,e),(t=t.alternate)&&Dy(t,e)}function dP(){return null}var dw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Hp(t){this._internalRoot=t}rc.prototype.render=Hp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));nc(t,e,null,null)};rc.prototype.unmount=Hp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Gr(function(){nc(null,t,null,null)}),e[En]=null}};function rc(t){this._internalRoot=t}rc.prototype.unstable_scheduleHydration=function(t){if(t){var e=B0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<jn.length&&e!==0&&e<jn[n].priority;n++);jn.splice(n,0,t),n===0&&H0(t)}};function qp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ic(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ly(){}function pP(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=hu(o);s.call(u)}}var o=hw(e,r,t,0,null,!1,!1,"",Ly);return t._reactRootContainer=o,t[En]=o.current,ko(t.nodeType===8?t.parentNode:t),Gr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=hu(l);a.call(u)}}var l=Bp(t,0,!1,null,null,!1,!1,"",Ly);return t._reactRootContainer=l,t[En]=l.current,ko(t.nodeType===8?t.parentNode:t),Gr(function(){nc(e,l,n,r)}),l}function sc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=hu(o);a.call(l)}}nc(e,o,t,i)}else o=pP(n,e,t,i,r);return hu(o)}z0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Bs(e.pendingLanes);n!==0&&(fp(e,n|1),ft(e,we()),!(X&6)&&(ts=we()+500,Er()))}break;case 13:Gr(function(){var r=In(t,1);if(r!==null){var i=rt();zt(r,t,1,i)}}),Wp(t,1)}};hp=function(t){if(t.tag===13){var e=In(t,134217728);if(e!==null){var n=rt();zt(e,t,134217728,n)}Wp(t,134217728)}};j0=function(t){if(t.tag===13){var e=ir(t),n=In(t,e);if(n!==null){var r=rt();zt(n,t,e,r)}Wp(t,e)}};B0=function(){return Z};W0=function(t,e){var n=Z;try{return Z=t,e()}finally{Z=n}};Ih=function(t,e,n){switch(e){case"input":if(mh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Qu(r);if(!i)throw Error(S(90));E0(r),mh(r,i)}}}break;case"textarea":T0(t,n);break;case"select":e=n.value,e!=null&&Vi(t,!!n.multiple,e,!1)}};b0=$p;N0=Gr;var mP={usingClientEntryPoint:!1,Events:[fa,Ai,Qu,R0,C0,$p]},Vs={findFiberByHostInstance:br,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},gP={bundleType:Vs.bundleType,version:Vs.version,rendererPackageName:Vs.rendererPackageName,rendererConfig:Vs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=D0(t),t===null?null:t.stateNode},findFiberByHostInstance:Vs.findFiberByHostInstance||dP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{Hu=nl.inject(gP),en=nl}catch{}}It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mP;It.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qp(e))throw Error(S(200));return hP(t,e,null,n)};It.createRoot=function(t,e){if(!qp(t))throw Error(S(299));var n=!1,r="",i=dw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Bp(t,1,!1,null,null,n,!1,r,i),t[En]=e.current,ko(t.nodeType===8?t.parentNode:t),new Hp(e)};It.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=D0(e),t=t===null?null:t.stateNode,t};It.flushSync=function(t){return Gr(t)};It.hydrate=function(t,e,n){if(!ic(e))throw Error(S(200));return sc(null,t,e,!0,n)};It.hydrateRoot=function(t,e,n){if(!qp(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=dw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=hw(e,null,t,1,n??null,i,!1,s,o),t[En]=e.current,ko(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new rc(e)};It.render=function(t,e,n){if(!ic(e))throw Error(S(200));return sc(null,t,e,!1,n)};It.unmountComponentAtNode=function(t){if(!ic(t))throw Error(S(40));return t._reactRootContainer?(Gr(function(){sc(null,null,t,!1,function(){t._reactRootContainer=null,t[En]=null})}),!0):!1};It.unstable_batchedUpdates=$p;It.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ic(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return sc(t,e,n,!1,r)};It.version="18.2.0-next-9e3b772b8-20220608";function pw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pw)}catch(t){console.error(t)}}pw(),h0.exports=It;var yP=h0.exports,My=yP;lh.createRoot=My.createRoot,lh.hydrateRoot=My.hydrateRoot;/**
 * @remix-run/router v1.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ns(){return ns=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ns.apply(this,arguments)}var Qn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Qn||(Qn={}));const Vy="popstate";function vP(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return td("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:du(i)}return wP(e,n,null,t)}function Ae(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Kp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function _P(){return Math.random().toString(36).substr(2,8)}function Fy(t,e){return{usr:t.state,key:t.key,idx:e}}function td(t,e,n,r){return n===void 0&&(n=null),ns({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ms(e):e,{state:n,key:e&&e.key||r||_P()})}function du(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ms(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function wP(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Qn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(ns({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){a=Qn.Pop;let w=c(),m=w==null?null:w-u;u=w,l&&l({action:a,location:v.location,delta:m})}function h(w,m){a=Qn.Push;let d=td(v.location,w,m);n&&n(d,w),u=c()+1;let g=Fy(d,u),_=v.createHref(d);try{o.pushState(g,"",_)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(_)}s&&l&&l({action:a,location:v.location,delta:1})}function p(w,m){a=Qn.Replace;let d=td(v.location,w,m);n&&n(d,w),u=c();let g=Fy(d,u),_=v.createHref(d);o.replaceState(g,"",_),s&&l&&l({action:a,location:v.location,delta:0})}function y(w){let m=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof w=="string"?w:du(w);return Ae(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let v={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Vy,f),l=w,()=>{i.removeEventListener(Vy,f),l=null}},createHref(w){return e(i,w)},createURL:y,encodeLocation(w){let m=y(w);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:p,go(w){return o.go(w)}};return v}var $y;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})($y||($y={}));function EP(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ms(e):e,i=Lo(r.pathname||"/",n);if(i==null)return null;let s=mw(t);IP(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=NP(s[a],OP(i));return o}function mw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ae(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=or([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Ae(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),mw(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:CP(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of gw(s.path))i(s,o,l)}),e}function gw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=gw(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function IP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:bP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const TP=/^:\w+$/,SP=3,AP=2,kP=1,PP=10,RP=-2,Uy=t=>t==="*";function CP(t,e){let n=t.split("/"),r=n.length;return n.some(Uy)&&(r+=RP),e&&(r+=AP),n.filter(i=>!Uy(i)).reduce((i,s)=>i+(TP.test(s)?SP:s===""?kP:PP),r)}function bP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function NP(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=nd({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;s.push({params:r,pathname:or([i,c.pathname]),pathnameBase:VP(or([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=or([i,c.pathnameBase]))}return s}function nd(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=xP(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{let{paramName:h,isOptional:p}=c;if(h==="*"){let v=a[f]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const y=a[f];return p&&!y?u[h]=void 0:u[h]=DP(y||"",h),u},{}),pathname:s,pathnameBase:o,pattern:t}}function xP(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Kp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function OP(t){try{return decodeURI(t)}catch(e){return Kp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function DP(t,e){try{return decodeURIComponent(t)}catch(n){return Kp(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Lo(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function LP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ms(t):t;return{pathname:n?n.startsWith("/")?n:MP(n,e):e,search:FP(r),hash:$P(i)}}function MP(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function bf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Gp(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Qp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ms(t):(i=ns({},t),Ae(!i.pathname||!i.pathname.includes("?"),bf("?","pathname","search",i)),Ae(!i.pathname||!i.pathname.includes("#"),bf("#","pathname","hash",i)),Ae(!i.search||!i.search.includes("#"),bf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else if(r){let f=e[e.length-1].replace(/^\//,"").split("/");if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f.pop();i.pathname=h.join("/")}a="/"+f.join("/")}else{let f=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}a=f>=0?e[f]:"/"}let l=LP(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const or=t=>t.join("/").replace(/\/\/+/g,"/"),VP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),FP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,$P=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,UP=function(e,n){n===void 0&&(n=302);let r=n;typeof r=="number"?r={status:r}:typeof r.status>"u"&&(r.status=302);let i=new Headers(r.headers);return i.set("Location",e),new Response(null,ns({},r,{headers:i}))};function zP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const yw=["post","put","patch","delete"];new Set(yw);const jP=["get",...yw];new Set(jP);/**
 * React Router v6.20.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pu(){return pu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pu.apply(this,arguments)}const oc=A.createContext(null),vw=A.createContext(null),ai=A.createContext(null),ac=A.createContext(null),On=A.createContext({outlet:null,matches:[],isDataRoute:!1}),_w=A.createContext(null);function BP(t,e){let{relative:n}=e===void 0?{}:e;gs()||Ae(!1);let{basename:r,navigator:i}=A.useContext(ai),{hash:s,pathname:o,search:a}=lc(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:or([r,o])),i.createHref({pathname:l,search:a,hash:s})}function gs(){return A.useContext(ac)!=null}function ys(){return gs()||Ae(!1),A.useContext(ac).location}function ww(t){A.useContext(ai).static||A.useLayoutEffect(t)}function Ew(){let{isDataRoute:t}=A.useContext(On);return t?iR():WP()}function WP(){gs()||Ae(!1);let t=A.useContext(oc),{basename:e,navigator:n}=A.useContext(ai),{matches:r}=A.useContext(On),{pathname:i}=ys(),s=JSON.stringify(Gp(r).map(l=>l.pathnameBase)),o=A.useRef(!1);return ww(()=>{o.current=!0}),A.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Qp(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:or([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const HP=A.createContext(null);function qP(t){let e=A.useContext(On).outlet;return e&&A.createElement(HP.Provider,{value:t},e)}function lc(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=A.useContext(On),{pathname:i}=ys(),s=JSON.stringify(Gp(r).map(o=>o.pathnameBase));return A.useMemo(()=>Qp(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function KP(t,e){return GP(t,e)}function GP(t,e,n){gs()||Ae(!1);let{navigator:r}=A.useContext(ai),{matches:i}=A.useContext(On),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=ys(),u;if(e){var c;let v=typeof e=="string"?ms(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||Ae(!1),u=v}else u=l;let f=u.pathname||"/",h=a==="/"?f:f.slice(a.length)||"/",p=EP(t,{pathname:h}),y=ZP(p&&p.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:or([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:or([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&y?A.createElement(ac.Provider,{value:{location:pu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Qn.Pop}},y):y}function QP(){let t=rR(),e=zP(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},e),n?A.createElement("pre",{style:i},n):null,s)}const YP=A.createElement(QP,null);class XP extends A.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?A.createElement(On.Provider,{value:this.props.routeContext},A.createElement(_w.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function JP(t){let{routeContext:e,match:n,children:r}=t,i=A.useContext(oc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),A.createElement(On.Provider,{value:e},r)}function ZP(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Ae(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,f=null;n&&(f=l.route.errorElement||YP);let h=e.concat(s.slice(0,u+1)),p=()=>{let y;return c?y=f:l.route.Component?y=A.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,A.createElement(JP,{match:l,routeContext:{outlet:a,matches:h,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?A.createElement(XP,{location:n.location,revalidation:n.revalidation,component:f,error:c,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var Iw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Iw||{}),mu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(mu||{});function eR(t){let e=A.useContext(oc);return e||Ae(!1),e}function tR(t){let e=A.useContext(vw);return e||Ae(!1),e}function nR(t){let e=A.useContext(On);return e||Ae(!1),e}function Tw(t){let e=nR(),n=e.matches[e.matches.length-1];return n.route.id||Ae(!1),n.route.id}function rR(){var t;let e=A.useContext(_w),n=tR(mu.UseRouteError),r=Tw(mu.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function iR(){let{router:t}=eR(Iw.UseNavigateStable),e=Tw(mu.UseNavigateStable),n=A.useRef(!1);return ww(()=>{n.current=!0}),A.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,pu({fromRouteId:e},s)))},[t,e])}function sR(t){let{to:e,replace:n,state:r,relative:i}=t;gs()||Ae(!1);let{matches:s}=A.useContext(On),{pathname:o}=ys(),a=Ew(),l=Qp(e,Gp(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return A.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function y3(t){return qP(t.context)}function oR(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Qn.Pop,navigator:s,static:o=!1}=t;gs()&&Ae(!1);let a=e.replace(/^\/*/,"/"),l=A.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=ms(r));let{pathname:u="/",search:c="",hash:f="",state:h=null,key:p="default"}=r,y=A.useMemo(()=>{let v=Lo(u,a);return v==null?null:{location:{pathname:v,search:c,hash:f,state:h,key:p},navigationType:i}},[a,u,c,f,h,p,i]);return y==null?null:A.createElement(ai.Provider,{value:l},A.createElement(ac.Provider,{children:n,value:y}))}new Promise(()=>{});/**
 * React Router DOM v6.20.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gu(){return gu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},gu.apply(this,arguments)}function Sw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function aR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function lR(t,e){return t.button===0&&(!e||e==="_self")&&!aR(t)}const uR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],cR=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],fR=A.createContext({isTransitioning:!1}),hR="startTransition",zy=aA[hR];function dR(t){let{basename:e,children:n,future:r,window:i}=t,s=A.useRef();s.current==null&&(s.current=vP({window:i,v5Compat:!0}));let o=s.current,[a,l]=A.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=A.useCallback(f=>{u&&zy?zy(()=>l(f)):l(f)},[l,u]);return A.useLayoutEffect(()=>o.listen(c),[o,c]),A.createElement(oR,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const pR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gR=A.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:f}=e,h=Sw(e,uR),{basename:p}=A.useContext(ai),y,v=!1;if(typeof u=="string"&&mR.test(u)&&(y=u,pR))try{let g=new URL(window.location.href),_=u.startsWith("//")?new URL(g.protocol+u):new URL(u),I=Lo(_.pathname,p);_.origin===g.origin&&I!=null?u=I+_.search+_.hash:v=!0}catch{}let w=BP(u,{relative:i}),m=_R(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:f});function d(g){r&&r(g),g.defaultPrevented||m(g)}return A.createElement("a",gu({},h,{href:y||w,onClick:v||s?r:d,ref:n,target:l}))}),yR=A.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:c}=e,f=Sw(e,cR),h=lc(l,{relative:f.relative}),p=ys(),y=A.useContext(vw),{navigator:v}=A.useContext(ai),w=y!=null&&wR(h)&&u===!0,m=v.encodeLocation?v.encodeLocation(h).pathname:h.pathname,d=p.pathname,g=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(d=d.toLowerCase(),g=g?g.toLowerCase():null,m=m.toLowerCase());const _=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let I=d===m||!o&&d.startsWith(m)&&d.charAt(_)==="/",k=g!=null&&(g===m||!o&&g.startsWith(m)&&g.charAt(m.length)==="/"),P={isActive:I,isPending:k,isTransitioning:w},O=I?r:void 0,W;typeof s=="function"?W=s(P):W=[s,I?"active":null,k?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let U=typeof a=="function"?a(P):a;return A.createElement(gR,gu({},f,{"aria-current":O,className:W,ref:n,style:U,to:l,unstable_viewTransition:u}),typeof c=="function"?c(P):c)});var rd;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(rd||(rd={}));var jy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(jy||(jy={}));function vR(t){let e=A.useContext(oc);return e||Ae(!1),e}function _R(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=Ew(),u=ys(),c=lc(t,{relative:o});return A.useCallback(f=>{if(lR(f,n)){f.preventDefault();let h=r!==void 0?r:du(u)===du(c);l(t,{replace:h,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}function wR(t,e){e===void 0&&(e={});let n=A.useContext(fR);n==null&&Ae(!1);let{basename:r}=vR(rd.useViewTransitionState),i=lc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Lo(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Lo(n.nextLocation.pathname,r)||n.nextLocation.pathname;return nd(i.pathname,o)!=null||nd(i.pathname,s)!=null}var By={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ER=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},kw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(h=64)),r.push(n[c],n[f],n[h],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Aw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ER(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new IR;const h=s<<2|a>>4;if(r.push(h),u!==64){const p=a<<4&240|u>>2;if(r.push(p),f!==64){const y=u<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class IR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const TR=function(t){const e=Aw(t);return kw.encodeByteArray(e,!0)},yu=function(t){return TR(t).replace(/\./g,"")},Pw=function(t){try{return kw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR=()=>SR().__FIREBASE_DEFAULTS__,kR=()=>{if(typeof process>"u"||typeof By>"u")return;const t=By.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},PR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pw(t[1]);return e&&JSON.parse(e)},Yp=()=>{try{return AR()||kR()||PR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Rw=t=>{var e,n;return(n=(e=Yp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},RR=t=>{const e=Rw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Cw=()=>{var t;return(t=Yp())===null||t===void 0?void 0:t.config},bw=t=>{var e;return(e=Yp())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[yu(JSON.stringify(n)),yu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function NR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function Nw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function OR(){const t=Ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xw(){try{return typeof indexedDB=="object"}catch{return!1}}function Ow(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function DR(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR="FirebaseError";class qt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=LR,Object.setPrototypeOf(this,qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,li.prototype.create)}}class li{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?MR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new qt(i,a,r)}}function MR(t,e){return t.replace(VR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const VR=/\{\$([^}]+)}/g;function FR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Mo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Wy(s)&&Wy(o)){if(!Mo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Wy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Hs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function qs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function $R(t,e){const n=new UR(t,e);return n.subscribe.bind(n)}class UR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");zR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Nf),i.error===void 0&&(i.error=Nf),i.complete===void 0&&(i.complete=Nf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Nf(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=1e3,BR=2,WR=4*60*60*1e3,HR=.5;function Hy(t,e=jR,n=BR){const r=e*Math.pow(n,t),i=Math.round(HR*r*(Math.random()-.5)*2);return Math.min(WR,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(t){return t&&t._delegate?t._delegate:t}class Bt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new CR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(GR(e))try{this.getOrInitializeService({instanceIdentifier:Cr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Cr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cr){return this.instances.has(e)}getOptions(e=Cr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:KR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Cr){return this.component?this.component.multipleInstances?e:Cr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KR(t){return t===Cr?void 0:t}function GR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const YR={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},XR=Q.INFO,JR={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},ZR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=JR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uc{constructor(e){this.name=e,this._logLevel=XR,this._logHandler=ZR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?YR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const eC=(t,e)=>e.some(n=>t instanceof n);let qy,Ky;function tC(){return qy||(qy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nC(){return Ky||(Ky=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dw=new WeakMap,id=new WeakMap,Lw=new WeakMap,xf=new WeakMap,Xp=new WeakMap;function rC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ar(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Dw.set(n,t)}).catch(()=>{}),Xp.set(e,t),e}function iC(t){if(id.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});id.set(t,e)}let sd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return id.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Lw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ar(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sC(t){sd=t(sd)}function oC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Of(this),e,...n);return Lw.set(r,e.sort?e.sort():[e]),ar(r)}:nC().includes(t)?function(...e){return t.apply(Of(this),e),ar(Dw.get(this))}:function(...e){return ar(t.apply(Of(this),e))}}function aC(t){return typeof t=="function"?oC(t):(t instanceof IDBTransaction&&iC(t),eC(t,tC())?new Proxy(t,sd):t)}function ar(t){if(t instanceof IDBRequest)return rC(t);if(xf.has(t))return xf.get(t);const e=aC(t);return e!==t&&(xf.set(t,e),Xp.set(e,t)),e}const Of=t=>Xp.get(t);function lC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ar(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ar(o.result),l.oldVersion,l.newVersion,ar(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const uC=["get","getKey","getAll","getAllKeys","count"],cC=["put","add","delete","clear"],Df=new Map;function Gy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Df.get(e))return Df.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=cC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||uC.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Df.set(e,s),s}sC(t=>({...t,get:(e,n,r)=>Gy(e,n)||t.get(e,n,r),has:(e,n)=>!!Gy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const od="@firebase/app",Qy="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=new uc("@firebase/app"),dC="@firebase/app-compat",pC="@firebase/analytics-compat",mC="@firebase/analytics",gC="@firebase/app-check-compat",yC="@firebase/app-check",vC="@firebase/auth",_C="@firebase/auth-compat",wC="@firebase/database",EC="@firebase/database-compat",IC="@firebase/functions",TC="@firebase/functions-compat",SC="@firebase/installations",AC="@firebase/installations-compat",kC="@firebase/messaging",PC="@firebase/messaging-compat",RC="@firebase/performance",CC="@firebase/performance-compat",bC="@firebase/remote-config",NC="@firebase/remote-config-compat",xC="@firebase/storage",OC="@firebase/storage-compat",DC="@firebase/firestore",LC="@firebase/firestore-compat",MC="firebase",VC="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad="[DEFAULT]",FC={[od]:"fire-core",[dC]:"fire-core-compat",[mC]:"fire-analytics",[pC]:"fire-analytics-compat",[yC]:"fire-app-check",[gC]:"fire-app-check-compat",[vC]:"fire-auth",[_C]:"fire-auth-compat",[wC]:"fire-rtdb",[EC]:"fire-rtdb-compat",[IC]:"fire-fn",[TC]:"fire-fn-compat",[SC]:"fire-iid",[AC]:"fire-iid-compat",[kC]:"fire-fcm",[PC]:"fire-fcm-compat",[RC]:"fire-perf",[CC]:"fire-perf-compat",[bC]:"fire-rc",[NC]:"fire-rc-compat",[xC]:"fire-gcs",[OC]:"fire-gcs-compat",[DC]:"fire-fst",[LC]:"fire-fst-compat","fire-js":"fire-js",[MC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu=new Map,ld=new Map;function $C(t,e){try{t.container.addComponent(e)}catch(n){Qr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function an(t){const e=t.name;if(ld.has(e))return Qr.debug(`There were multiple attempts to register component ${e}.`),!1;ld.set(e,t);for(const n of vu.values())$C(n,t);return!0}function ui(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},lr=new li("app","Firebase",UC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw lr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=VC;function Mw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ad,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw lr.create("bad-app-name",{appName:String(i)});if(n||(n=Cw()),!n)throw lr.create("no-options");const s=vu.get(i);if(s){if(Mo(n,s.options)&&Mo(r,s.config))return s;throw lr.create("duplicate-app",{appName:i})}const o=new QR(i);for(const l of ld.values())o.addComponent(l);const a=new zC(n,r,o);return vu.set(i,a),a}function Jp(t=ad){const e=vu.get(t);if(!e&&t===ad&&Cw())return Mw();if(!e)throw lr.create("no-app",{appName:t});return e}function bt(t,e,n){var r;let i=(r=FC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qr.warn(a.join(" "));return}an(new Bt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC="firebase-heartbeat-database",BC=1,Vo="firebase-heartbeat-store";let Lf=null;function Vw(){return Lf||(Lf=lC(jC,BC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Vo)}}}).catch(t=>{throw lr.create("idb-open",{originalErrorMessage:t.message})})),Lf}async function WC(t){try{return await(await Vw()).transaction(Vo).objectStore(Vo).get(Fw(t))}catch(e){if(e instanceof qt)Qr.warn(e.message);else{const n=lr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qr.warn(n.message)}}}async function Yy(t,e){try{const r=(await Vw()).transaction(Vo,"readwrite");await r.objectStore(Vo).put(e,Fw(t)),await r.done}catch(n){if(n instanceof qt)Qr.warn(n.message);else{const r=lr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qr.warn(r.message)}}}function Fw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC=1024,qC=30*24*60*60*1e3;class KC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new QC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Xy();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=qC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Xy(),{heartbeatsToSend:r,unsentEntries:i}=GC(this._heartbeatsCache.heartbeats),s=yu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Xy(){return new Date().toISOString().substring(0,10)}function GC(t,e=HC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Jy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Jy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class QC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xw()?Ow().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await WC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Jy(t){return yu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(t){an(new Bt("platform-logger",e=>new fC(e),"PRIVATE")),an(new Bt("heartbeat",e=>new KC(e),"PRIVATE")),bt(od,Qy,t),bt(od,Qy,"esm2017"),bt("fire-js","")}YC("");function Zp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function $w(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const XC=$w,Uw=new li("auth","Firebase",$w());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=new uc("@firebase/auth");function JC(t,...e){_u.logLevel<=Q.WARN&&_u.warn(`Auth (${vs}): ${t}`,...e)}function Ol(t,...e){_u.logLevel<=Q.ERROR&&_u.error(`Auth (${vs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t,...e){throw em(t,...e)}function nn(t,...e){return em(t,...e)}function zw(t,e,n){const r=Object.assign(Object.assign({},XC()),{[e]:n});return new li("auth","Firebase",r).create(e,{appName:t.name})}function ZC(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ot(t,"argument-error"),zw(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function em(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Uw.create(t,...e)}function V(t,e,...n){if(!t)throw em(e,...n)}function mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ol(e),new Error(e)}function Sn(t,e){t||mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function e2(){return Zy()==="http:"||Zy()==="https:"}function Zy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(e2()||Nw()||"connection"in navigator)?navigator.onLine:!0}function n2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Sn(n>e,"Short delay should be less than long delay!"),this.isMobile=NR()||xR()}get(){return t2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(t,e){Sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i2=new pa(3e4,6e4);function Dn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ln(t,e,n,r,i={}){return Bw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=da(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),jw.fetch()(Ww(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Bw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},r2),e);try{const i=new o2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw rl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw rl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw rl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw rl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw zw(t,c,u);Ot(t,c)}}catch(i){if(i instanceof qt)throw i;Ot(t,"network-request-failed",{message:String(i)})}}async function ma(t,e,n,r,i={}){const s=await Ln(t,e,n,r,i);return"mfaPendingCredential"in s&&Ot(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ww(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?tm(t.config,i):`${t.config.apiScheme}://${i}`}function s2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class o2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nn(this.auth,"network-request-failed")),i2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function rl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=nn(t,e,r);return i.customData._tokenResponse=n,i}function ev(t){return t!==void 0&&t.enterprise!==void 0}class a2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return s2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function l2(t,e){return Ln(t,"GET","/v2/recaptchaConfig",Dn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u2(t,e){return Ln(t,"POST","/v1/accounts:delete",e)}async function c2(t,e){return Ln(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function f2(t,e=!1){const n=pe(t),r=await n.getIdToken(e),i=nm(r);V(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:lo(Mf(i.auth_time)),issuedAtTime:lo(Mf(i.iat)),expirationTime:lo(Mf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Mf(t){return Number(t)*1e3}function nm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ol("JWT malformed, contained fewer than 3 sections"),null;try{const i=Pw(n);return i?JSON.parse(i):(Ol("Failed to decode base64 JWT payload"),null)}catch(i){return Ol("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function h2(t){const e=nm(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof qt&&d2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function d2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=lo(this.lastLoginAt),this.creationTime=lo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Fo(t,c2(n,{idToken:r}));V(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?y2(s.providerUserInfo):[],a=g2(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Hw(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function m2(t){const e=pe(t);await wu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function g2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function y2(t){return t.map(e=>{var{providerId:n}=e,r=Zp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v2(t,e){const n=await Bw(t,{},async()=>{const r=da({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Ww(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",jw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function _2(t,e){return Ln(t,"POST","/v2/accounts:revokeToken",Dn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):h2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return V(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await v2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new $o;return r&&(V(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(V(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(V(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $o,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class zr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Zp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new p2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Hw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Fo(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return f2(this,e)}reload(){return m2(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new zr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await wu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Fo(this,u2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:_,isAnonymous:I,providerData:k,stsTokenManager:P}=n;V(g&&P,e,"internal-error");const O=$o.fromJSON(this.name,P);V(typeof g=="string",e,"internal-error"),Fn(f,e.name),Fn(h,e.name),V(typeof _=="boolean",e,"internal-error"),V(typeof I=="boolean",e,"internal-error"),Fn(p,e.name),Fn(y,e.name),Fn(v,e.name),Fn(w,e.name),Fn(m,e.name),Fn(d,e.name);const W=new zr({uid:g,auth:e,email:h,emailVerified:_,displayName:f,isAnonymous:I,photoURL:y,phoneNumber:p,tenantId:v,stsTokenManager:O,createdAt:m,lastLoginAt:d});return k&&Array.isArray(k)&&(W.providerData=k.map(U=>Object.assign({},U))),w&&(W._redirectEventId=w),W}static async _fromIdTokenResponse(e,n,r=!1){const i=new $o;i.updateFromServerResponse(n);const s=new zr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await wu(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv=new Map;function gn(t){Sn(t instanceof Function,"Expected a class definition");let e=tv.get(t);return e?(Sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,tv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qw.type="NONE";const nv=qw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(t,e,n){return`firebase:${t}:${e}:${n}`}class Bi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Dl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Dl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Bi(gn(nv),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||gn(nv);const o=Dl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const f=zr._fromJSON(e,c);u!==s&&(a=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Bi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Bi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Kw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xw(e))return"Blackberry";if(Jw(e))return"Webos";if(rm(e))return"Safari";if((e.includes("chrome/")||Gw(e))&&!e.includes("edge/"))return"Chrome";if(Yw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Kw(t=Ze()){return/firefox\//i.test(t)}function rm(t=Ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gw(t=Ze()){return/crios\//i.test(t)}function Qw(t=Ze()){return/iemobile/i.test(t)}function Yw(t=Ze()){return/android/i.test(t)}function Xw(t=Ze()){return/blackberry/i.test(t)}function Jw(t=Ze()){return/webos/i.test(t)}function cc(t=Ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function w2(t=Ze()){var e;return cc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function E2(){return OR()&&document.documentMode===10}function Zw(t=Ze()){return cc(t)||Yw(t)||Jw(t)||Xw(t)||/windows phone/i.test(t)||Qw(t)}function I2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(t,e=[]){let n;switch(t){case"Browser":n=rv(Ze());break;case"Worker":n=`${rv(Ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S2(t,e={}){return Ln(t,"GET","/v2/passwordPolicy",Dn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A2=6;class k2{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:A2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new iv(this),this.idTokenSubscription=new iv(this),this.beforeStateQueue=new T2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Uw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Bi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=n2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?pe(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await S2(this),n=new k2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new li("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await _2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gn(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await Bi.create(this,[gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=eE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&JC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function un(t){return pe(t)}class iv{constructor(e){this.auth=e,this.observer=null,this.addObserver=$R(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function tE(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=nn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",R2().appendChild(r)})}function C2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const b2="https://www.google.com/recaptcha/enterprise.js?render=",N2="recaptcha-enterprise",x2="NO_RECAPTCHA";class O2{constructor(e){this.type=N2,this.auth=un(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{l2(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new a2(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;ev(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(x2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&ev(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}tE(b2+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function sv(t,e,n,r=!1){const i=new O2(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Eu(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await sv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await sv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D2(t,e){const n=ui(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Mo(s,e??{}))return i;Ot(i,"already-initialized")}return n.initialize({options:e})}function L2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function M2(t,e,n){const r=un(t);V(r._canInitEmulator,r,"emulator-config-failed"),V(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=nE(e),{host:o,port:a}=V2(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||F2()}function nE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function V2(t){const e=nE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ov(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ov(o)}}}function ov(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function F2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,n){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}async function $2(t,e){return Ln(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U2(t,e){return ma(t,"POST","/v1/accounts:signInWithPassword",Dn(t,e))}async function z2(t,e){return Ln(t,"POST","/v1/accounts:sendOobCode",Dn(t,e))}async function j2(t,e){return z2(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B2(t,e){return ma(t,"POST","/v1/accounts:signInWithEmailLink",Dn(t,e))}async function W2(t,e){return ma(t,"POST","/v1/accounts:signInWithEmailLink",Dn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo extends im{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Uo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Uo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Eu(e,n,"signInWithPassword",U2);case"emailLink":return B2(e,{email:this._email,oobCode:this._password});default:Ot(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Eu(e,r,"signUpPassword",$2);case"emailLink":return W2(e,{idToken:n,email:this._email,oobCode:this._password});default:Ot(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(t,e){return ma(t,"POST","/v1/accounts:signInWithIdp",Dn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H2="http://localhost";class Yr extends im{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Zp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Yr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Wi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Wi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wi(e,n)}buildRequest(){const e={requestUri:H2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=da(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function K2(t){const e=Hs(qs(t)).link,n=e?Hs(qs(e)).deep_link_id:null,r=Hs(qs(t)).deep_link_id;return(r?Hs(qs(r)).link:null)||r||n||e||t}class sm{constructor(e){var n,r,i,s,o,a;const l=Hs(qs(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=q2((i=l.mode)!==null&&i!==void 0?i:null);V(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=K2(e);try{return new sm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(){this.providerId=_s.PROVIDER_ID}static credential(e,n){return Uo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=sm.parseLink(n);return V(r,"argument-error"),Uo._fromEmailAndCode(e,r.code,r.tenantId)}}_s.PROVIDER_ID="password";_s.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_s.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga extends om{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends ga{constructor(){super("facebook.com")}static credential(e){return Yr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends ga{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yr._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return hn.credential(n,r)}catch{return null}}}hn.GOOGLE_SIGN_IN_METHOD="google.com";hn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends ga{constructor(){super("github.com")}static credential(e){return Yr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.GITHUB_SIGN_IN_METHOD="github.com";Hn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends ga{constructor(){super("twitter.com")}static credential(e,n){return Yr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return qn.credential(n,r)}catch{return null}}}qn.TWITTER_SIGN_IN_METHOD="twitter.com";qn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rE(t,e){return ma(t,"POST","/v1/accounts:signUp",Dn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await zr._fromIdTokenResponse(e,r,i),o=av(r);return new An({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=av(r);return new An({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function av(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v3(t){var e;const n=un(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new An({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await rE(n,{returnSecureToken:!0}),i=await An._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu extends qt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Iu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Iu(e,n,r,i)}}function iE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Iu._fromErrorAndOperation(t,s,e,r):s})}async function G2(t,e,n=!1){const r=await Fo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return An._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q2(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Fo(t,iE(r,i,e,t),n);V(s.idToken,r,"internal-error");const o=nm(s.idToken);V(o,r,"internal-error");const{sub:a}=o;return V(t.uid===a,r,"user-mismatch"),An._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ot(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sE(t,e,n=!1){const r="signIn",i=await iE(t,r,e),s=await An._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Y2(t,e){return sE(un(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X2(t,e,n){var r;V(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),V(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(V(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(V(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oE(t){const e=un(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function _3(t,e,n){const r=un(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&X2(r,i,n),await Eu(r,i,"getOobCode",j2)}async function w3(t,e,n){const r=un(t),o=await Eu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",rE).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&oE(t),l}),a=await An._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function E3(t,e,n){return Y2(pe(t),_s.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&oE(t),r})}function J2(t,e,n,r){return pe(t).onIdTokenChanged(e,n,r)}function Z2(t,e,n){return pe(t).beforeAuthStateChanged(e,n)}function eb(t,e,n,r){return pe(t).onAuthStateChanged(e,n,r)}function tb(t){return pe(t).signOut()}const Tu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Tu,"1"),this.storage.removeItem(Tu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nb(){const t=Ze();return rm(t)||cc(t)}const rb=1e3,ib=10;class lE extends aE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=nb()&&I2(),this.fallbackToPolling=Zw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);E2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ib):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},rb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lE.type="LOCAL";const sb=lE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE extends aE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}uE.type="SESSION";const cE=uE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new fc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await ob(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=am("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){return window}function lb(t){rn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(){return typeof rn().WorkerGlobalScope<"u"&&typeof rn().importScripts=="function"}async function ub(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function fb(){return fE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE="firebaseLocalStorageDb",hb=1,Su="firebaseLocalStorage",dE="fbase_key";class ya{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function hc(t,e){return t.transaction([Su],e?"readwrite":"readonly").objectStore(Su)}function db(){const t=indexedDB.deleteDatabase(hE);return new ya(t).toPromise()}function cd(){const t=indexedDB.open(hE,hb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Su,{keyPath:dE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Su)?e(r):(r.close(),await db(),e(await cd()))})})}async function lv(t,e,n){const r=hc(t,!0).put({[dE]:e,value:n});return new ya(r).toPromise()}async function pb(t,e){const n=hc(t,!1).get(e),r=await new ya(n).toPromise();return r===void 0?null:r.value}function uv(t,e){const n=hc(t,!0).delete(e);return new ya(n).toPromise()}const mb=800,gb=3;class pE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>gb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fc._getInstance(fb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ub(),!this.activeServiceWorker)return;this.sender=new ab(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cd();return await lv(e,Tu,"1"),await uv(e,Tu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>lv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>pb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>uv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=hc(i,!1).getAll();return new ya(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pE.type="LOCAL";const yb=pE;new pa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(t,e){return e?gn(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm extends im{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function vb(t){return sE(t.auth,new lm(t),t.bypassAuthState)}function _b(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),Q2(n,new lm(t),t.bypassAuthState)}async function wb(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),G2(n,new lm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vb;case"linkViaPopup":case"linkViaRedirect":return wb;case"reauthViaPopup":case"reauthViaRedirect":return _b;default:Ot(this.auth,"internal-error")}}resolve(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb=new pa(2e3,1e4);class xi extends gE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,xi.currentPopupAction&&xi.currentPopupAction.cancel(),xi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){Sn(this.filter.length===1,"Popup operations only handle one event");const e=am();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Eb.get())};e()}}xi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib="pendingRedirect",Ll=new Map;class Tb extends gE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ll.get(this.auth._key());if(!e){try{const r=await Sb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ll.set(this.auth._key(),e)}return this.bypassAuthState||Ll.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Sb(t,e){const n=vE(e),r=yE(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Ab(t,e){return yE(t)._set(vE(e),"true")}function kb(t,e){Ll.set(t._key(),e)}function yE(t){return gn(t._redirectPersistence)}function vE(t){return Dl(Ib,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I3(t,e,n){return Pb(t,e,n)}async function Pb(t,e,n){const r=un(t);ZC(t,e,om),await r._initializationPromise;const i=mE(r,n);return await Ab(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function Rb(t,e,n=!1){const r=un(t),i=mE(r,e),o=await new Tb(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb=10*60*1e3;class bb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Nb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!_E(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Cb&&this.cachedEventUids.clear(),this.cachedEventUids.has(cv(e))}saveEventToCache(e){this.cachedEventUids.add(cv(e)),this.lastProcessedEventTime=Date.now()}}function cv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _E({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Nb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _E(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xb(t,e={}){return Ln(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Db=/^https?/;async function Lb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xb(t);for(const n of e)try{if(Mb(n))return}catch{}Ot(t,"unauthorized-domain")}function Mb(t){const e=ud(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Db.test(n))return!1;if(Ob.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb=new pa(3e4,6e4);function fv(){const t=rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Fb(t){return new Promise((e,n)=>{var r,i,s;function o(){fv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fv(),n(nn(t,"network-request-failed"))},timeout:Vb.get()})}if(!((i=(r=rn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=rn().gapi)===null||s===void 0)&&s.load)o();else{const a=C2("iframefcb");return rn()[a]=()=>{gapi.load?o():n(nn(t,"network-request-failed"))},tE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ml=null,e})}let Ml=null;function $b(t){return Ml=Ml||Fb(t),Ml}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub=new pa(5e3,15e3),zb="__/auth/iframe",jb="emulator/auth/iframe",Bb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Wb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Hb(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?tm(e,jb):`https://${t.config.authDomain}/${zb}`,r={apiKey:e.apiKey,appName:t.name,v:vs},i=Wb.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${da(r).slice(1)}`}async function qb(t){const e=await $b(t),n=rn().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:Hb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bb,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=nn(t,"network-request-failed"),a=rn().setTimeout(()=>{s(o)},Ub.get());function l(){rn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Gb=500,Qb=600,Yb="_blank",Xb="http://localhost";class hv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Jb(t,e,n,r=Gb,i=Qb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Kb),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ze().toLowerCase();n&&(a=Gw(u)?Yb:n),Kw(u)&&(e=e||Xb,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[p,y])=>`${h}${p}=${y},`,"");if(w2(u)&&a!=="_self")return Zb(e||"",a),new hv(null);const f=window.open(e||"",a,c);V(f,t,"popup-blocked");try{f.focus()}catch{}return new hv(f)}function Zb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN="__/auth/handler",tN="emulator/auth/handler",nN=encodeURIComponent("fac");async function dv(t,e,n,r,i,s){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:vs,eventId:i};if(e instanceof om){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",FR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,f]of Object.entries(s||{}))o[c]=f}if(e instanceof ga){const c=e.getScopes().filter(f=>f!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${nN}=${encodeURIComponent(l)}`:"";return`${rN(t)}?${da(a).slice(1)}${u}`}function rN({config:t}){return t.emulator?tm(t,tN):`https://${t.authDomain}/${eN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf="webStorageSupport";class iN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cE,this._completeRedirectFn=Rb,this._overrideRedirectResult=kb}async _openPopup(e,n,r,i){var s;Sn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await dv(e,n,r,ud(),i);return Jb(e,o,am())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await dv(e,n,r,ud(),i);return lb(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Sn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await qb(e),r=new bb(e);return n.register("authEvent",i=>(V(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vf,{type:Vf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Vf];o!==void 0&&n(!!o),Ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Lb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Zw()||rm()||cc()}}const sN=iN;var pv="@firebase/auth",mv="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function lN(t){an(new Bt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;V(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eE(t)},u=new P2(r,i,s,l);return L2(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),an(new Bt("auth-internal",e=>{const n=un(e.getProvider("auth").getImmediate());return(r=>new oN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bt(pv,mv,aN(t)),bt(pv,mv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN=5*60,cN=bw("authIdTokenMaxAge")||uN;let gv=null;const fN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>cN)return;const i=n==null?void 0:n.token;gv!==i&&(gv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function hN(t=Jp()){const e=ui(t,"auth");if(e.isInitialized())return e.getImmediate();const n=D2(t,{popupRedirectResolver:sN,persistence:[yb,sb,cE]}),r=bw("authTokenSyncURL");if(r){const s=fN(r);Z2(n,s,()=>s(n.currentUser)),J2(n,o=>s(o))}const i=Rw("auth");return i&&M2(n,`http://${i}`),n}lN("Browser");var dN="firebase",pN="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt(dN,pN,"app");var mN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R,um=um||{},$=mN||self;function dc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function va(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function gN(t){return Object.prototype.hasOwnProperty.call(t,Ff)&&t[Ff]||(t[Ff]=++yN)}var Ff="closure_uid_"+(1e9*Math.random()>>>0),yN=0;function vN(t,e,n){return t.call.apply(t.bind,arguments)}function _N(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ye(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ye=vN:Ye=_N,Ye.apply(null,arguments)}function il(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Le(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Ir(){this.s=this.s,this.o=this.o}var wN=0;Ir.prototype.s=!1;Ir.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),wN!=0)&&gN(this)};Ir.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const wE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function cm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function yv(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(dc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Xe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Xe.prototype.h=function(){this.defaultPrevented=!0};var EN=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};$.addEventListener("test",n,e),$.removeEventListener("test",n,e)}catch{}return t}();function zo(t){return/^[\s\xa0]*$/.test(t)}function pc(){var t=$.navigator;return t&&(t=t.userAgent)?t:""}function Yt(t){return pc().indexOf(t)!=-1}function fm(t){return fm[" "](t),t}fm[" "]=function(){};function IN(t,e){var n=px;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var TN=Yt("Opera"),rs=Yt("Trident")||Yt("MSIE"),EE=Yt("Edge"),fd=EE||rs,IE=Yt("Gecko")&&!(pc().toLowerCase().indexOf("webkit")!=-1&&!Yt("Edge"))&&!(Yt("Trident")||Yt("MSIE"))&&!Yt("Edge"),SN=pc().toLowerCase().indexOf("webkit")!=-1&&!Yt("Edge");function TE(){var t=$.document;return t?t.documentMode:void 0}var hd;e:{var $f="",Uf=function(){var t=pc();if(IE)return/rv:([^\);]+)(\)|;)/.exec(t);if(EE)return/Edge\/([\d\.]+)/.exec(t);if(rs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(SN)return/WebKit\/(\S+)/.exec(t);if(TN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Uf&&($f=Uf?Uf[1]:""),rs){var zf=TE();if(zf!=null&&zf>parseFloat($f)){hd=String(zf);break e}}hd=$f}var dd;if($.document&&rs){var vv=TE();dd=vv||parseInt(hd,10)||void 0}else dd=void 0;var AN=dd;function jo(t,e){if(Xe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(IE){e:{try{fm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:kN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&jo.$.h.call(this)}}Le(jo,Xe);var kN={2:"touch",3:"pen",4:"mouse"};jo.prototype.h=function(){jo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var _a="closure_listenable_"+(1e6*Math.random()|0),PN=0;function RN(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++PN,this.fa=this.ia=!1}function mc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function hm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function CN(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function SE(t){const e={};for(const n in t)e[n]=t[n];return e}const _v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function AE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<_v.length;s++)n=_v[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function gc(t){this.src=t,this.g={},this.h=0}gc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=md(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new RN(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function pd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=wE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(mc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function md(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var dm="closure_lm_"+(1e6*Math.random()|0),jf={};function kE(t,e,n,r,i){if(r&&r.once)return RE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)kE(t,e[s],n,r,i);return null}return n=gm(n),t&&t[_a]?t.O(e,n,va(r)?!!r.capture:!!r,i):PE(t,e,n,!1,r,i)}function PE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=va(i)?!!i.capture:!!i,a=mm(t);if(a||(t[dm]=a=new gc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=bN(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)EN||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(bE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function bN(){function t(n){return e.call(t.src,t.listener,n)}const e=NN;return t}function RE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)RE(t,e[s],n,r,i);return null}return n=gm(n),t&&t[_a]?t.P(e,n,va(r)?!!r.capture:!!r,i):PE(t,e,n,!0,r,i)}function CE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)CE(t,e[s],n,r,i);else r=va(r)?!!r.capture:!!r,n=gm(n),t&&t[_a]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=md(s,n,r,i),-1<n&&(mc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=mm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=md(e,n,r,i)),(n=-1<t?e[t]:null)&&pm(n))}function pm(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[_a])pd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(bE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=mm(e))?(pd(n,t),n.h==0&&(n.src=null,e[dm]=null)):mc(t)}}}function bE(t){return t in jf?jf[t]:jf[t]="on"+t}function NN(t,e){if(t.fa)t=!0;else{e=new jo(e,this);var n=t.listener,r=t.la||t.src;t.ia&&pm(t),t=n.call(r,e)}return t}function mm(t){return t=t[dm],t instanceof gc?t:null}var Bf="__closure_events_fn_"+(1e9*Math.random()>>>0);function gm(t){return typeof t=="function"?t:(t[Bf]||(t[Bf]=function(e){return t.handleEvent(e)}),t[Bf])}function De(){Ir.call(this),this.i=new gc(this),this.S=this,this.J=null}Le(De,Ir);De.prototype[_a]=!0;De.prototype.removeEventListener=function(t,e,n,r){CE(this,t,e,n,r)};function ze(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Xe(e,t);else if(e instanceof Xe)e.target=e.target||t;else{var i=e;e=new Xe(r,t),AE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=sl(o,r,!0,e)&&i}if(o=e.g=t,i=sl(o,r,!0,e)&&i,i=sl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=sl(o,r,!1,e)&&i}De.prototype.N=function(){if(De.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)mc(n[r]);delete t.g[e],t.h--}}this.J=null};De.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};De.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function sl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&pd(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var ym=$.JSON.stringify;class xN{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function ON(){var t=vm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class DN{constructor(){this.h=this.g=null}add(e,n){const r=NE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var NE=new xN(()=>new LN,t=>t.reset());class LN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function MN(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function VN(t){$.setTimeout(()=>{throw t},0)}let Bo,Wo=!1,vm=new DN,xE=()=>{const t=$.Promise.resolve(void 0);Bo=()=>{t.then(FN)}};var FN=()=>{for(var t;t=ON();){try{t.h.call(t.g)}catch(n){VN(n)}var e=NE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Wo=!1};function yc(t,e){De.call(this),this.h=t||1,this.g=e||$,this.j=Ye(this.qb,this),this.l=Date.now()}Le(yc,De);R=yc.prototype;R.ga=!1;R.T=null;R.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ze(this,"tick"),this.ga&&(_m(this),this.start()))}};R.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function _m(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}R.N=function(){yc.$.N.call(this),_m(this),delete this.g};function wm(t,e,n){if(typeof t=="function")n&&(t=Ye(t,n));else if(t&&typeof t.handleEvent=="function")t=Ye(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:$.setTimeout(t,e||0)}function OE(t){t.g=wm(()=>{t.g=null,t.i&&(t.i=!1,OE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class $N extends Ir{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:OE(this)}N(){super.N(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ho(t){Ir.call(this),this.h=t,this.g={}}Le(Ho,Ir);var wv=[];function DE(t,e,n,r){Array.isArray(n)||(n&&(wv[0]=n.toString()),n=wv);for(var i=0;i<n.length;i++){var s=kE(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function LE(t){hm(t.g,function(e,n){this.g.hasOwnProperty(n)&&pm(e)},t),t.g={}}Ho.prototype.N=function(){Ho.$.N.call(this),LE(this)};Ho.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function vc(){this.g=!0}vc.prototype.Ea=function(){this.g=!1};function UN(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");o=2<=f.length&&f[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function zN(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Oi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+BN(t,n)+(r?" "+r:"")})}function jN(t,e){t.info(function(){return"TIMEOUT: "+e})}vc.prototype.info=function(){};function BN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ym(n)}catch{return e}}var ci={},Ev=null;function _c(){return Ev=Ev||new De}ci.Ta="serverreachability";function ME(t){Xe.call(this,ci.Ta,t)}Le(ME,Xe);function qo(t){const e=_c();ze(e,new ME(e))}ci.STAT_EVENT="statevent";function VE(t,e){Xe.call(this,ci.STAT_EVENT,t),this.stat=e}Le(VE,Xe);function nt(t){const e=_c();ze(e,new VE(e,t))}ci.Ua="timingevent";function FE(t,e){Xe.call(this,ci.Ua,t),this.size=e}Le(FE,Xe);function wa(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){t()},e)}var wc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},$E={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Em(){}Em.prototype.h=null;function Iv(t){return t.h||(t.h=t.i())}function UE(){}var Ea={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Im(){Xe.call(this,"d")}Le(Im,Xe);function Tm(){Xe.call(this,"c")}Le(Tm,Xe);var gd;function Ec(){}Le(Ec,Em);Ec.prototype.g=function(){return new XMLHttpRequest};Ec.prototype.i=function(){return{}};gd=new Ec;function Ia(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ho(this),this.P=WN,t=fd?125:void 0,this.V=new yc(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new zE}function zE(){this.i=null,this.g="",this.h=!1}var WN=45e3,jE={},yd={};R=Ia.prototype;R.setTimeout=function(t){this.P=t};function vd(t,e,n){t.L=1,t.A=Tc(kn(e)),t.u=n,t.S=!0,BE(t,null)}function BE(t,e){t.G=Date.now(),Ta(t),t.B=kn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),XE(n.i,"t",r),t.o=0,n=t.l.J,t.h=new zE,t.g=vI(t.l,n?e:null,!t.u),0<t.O&&(t.M=new $N(Ye(t.Pa,t,t.g),t.O)),DE(t.U,t.g,"readystatechange",t.nb),e=t.I?SE(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),qo(),UN(t.j,t.v,t.B,t.m,t.W,t.u)}R.nb=function(t){t=t.target;const e=this.M;e&&Xt(t)==3?e.l():this.Pa(t)};R.Pa=function(t){try{if(t==this.g)e:{const c=Xt(this.g);var e=this.g.Ia();const f=this.g.da();if(!(3>c)&&(c!=3||fd||this.g&&(this.h.h||this.g.ja()||kv(this.g)))){this.J||c!=4||e==7||(e==8||0>=f?qo(3):qo(2)),Ic(this);var n=this.g.da();this.ca=n;t:if(WE(this)){var r=kv(this.g);t="";var i=r.length,s=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Or(this),uo(this);var o="";break t}this.h.i=new $.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,zN(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!zo(a)){var u=a;break t}}u=null}if(n=u)Oi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_d(this,n);else{this.i=!1,this.s=3,nt(12),Or(this),uo(this);break e}}this.S?(HE(this,c,o),fd&&this.i&&c==3&&(DE(this.U,this.V,"tick",this.mb),this.V.start())):(Oi(this.j,this.m,o,null),_d(this,o)),c==4&&Or(this),this.i&&!this.J&&(c==4?pI(this.l,this):(this.i=!1,Ta(this)))}else fx(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),Or(this),uo(this)}}}catch{}finally{}};function WE(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function HE(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=HN(t,n),i==yd){e==4&&(t.s=4,nt(14),r=!1),Oi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==jE){t.s=4,nt(15),Oi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Oi(t.j,t.m,i,null),_d(t,i);WE(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,nt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Cm(e),e.M=!0,nt(11))):(Oi(t.j,t.m,n,"[Invalid Chunked Response]"),Or(t),uo(t))}R.mb=function(){if(this.g){var t=Xt(this.g),e=this.g.ja();this.o<e.length&&(Ic(this),HE(this,t,e),this.i&&t!=4&&Ta(this))}};function HN(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?yd:(n=Number(e.substring(n,r)),isNaN(n)?jE:(r+=1,r+n>e.length?yd:(e=e.slice(r,r+n),t.o=r+n,e)))}R.cancel=function(){this.J=!0,Or(this)};function Ta(t){t.Y=Date.now()+t.P,qE(t,t.P)}function qE(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=wa(Ye(t.lb,t),e)}function Ic(t){t.C&&($.clearTimeout(t.C),t.C=null)}R.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(jN(this.j,this.B),this.L!=2&&(qo(),nt(17)),Or(this),this.s=2,uo(this)):qE(this,this.Y-t)};function uo(t){t.l.H==0||t.J||pI(t.l,t)}function Or(t){Ic(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,_m(t.V),LE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function _d(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||wd(n.i,t))){if(!t.K&&wd(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Pu(n),Pc(n);else break e;Rm(n),nt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=wa(Ye(n.ib,n),6e3));if(1>=eI(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Dr(n,11)}else if((t.K||n.g==t)&&Pu(n),!zo(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const f=u[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Sm(s,s.h),s.h=null))}if(r.F){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,se(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=yI(r,r.J?r.pa:null,r.Y),o.K){tI(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Ic(a),Ta(a)),r.g=o}else hI(r);0<n.j.length&&Rc(n)}else u[0]!="stop"&&u[0]!="close"||Dr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Dr(n,7):Pm(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}qo(4)}catch{}}function qN(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(dc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function KN(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(dc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function KE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(dc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=KN(t),r=qN(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var GE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function GN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function jr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof jr){this.h=t.h,Au(this,t.j),this.s=t.s,this.g=t.g,ku(this,t.m),this.l=t.l;var e=t.i,n=new Ko;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Tv(this,n),this.o=t.o}else t&&(e=String(t).match(GE))?(this.h=!1,Au(this,e[1]||"",!0),this.s=Ks(e[2]||""),this.g=Ks(e[3]||"",!0),ku(this,e[4]),this.l=Ks(e[5]||"",!0),Tv(this,e[6]||"",!0),this.o=Ks(e[7]||"")):(this.h=!1,this.i=new Ko(null,this.h))}jr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Gs(e,Sv,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Gs(e,Sv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Gs(n,n.charAt(0)=="/"?XN:YN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Gs(n,ZN)),t.join("")};function kn(t){return new jr(t)}function Au(t,e,n){t.j=n?Ks(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ku(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Tv(t,e,n){e instanceof Ko?(t.i=e,ex(t.i,t.h)):(n||(e=Gs(e,JN)),t.i=new Ko(e,t.h))}function se(t,e,n){t.i.set(e,n)}function Tc(t){return se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ks(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Gs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,QN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function QN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Sv=/[#\/\?@]/g,YN=/[#\?:]/g,XN=/[#\?]/g,JN=/[#\?@]/g,ZN=/#/g;function Ko(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Tr(t){t.g||(t.g=new Map,t.h=0,t.i&&GN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}R=Ko.prototype;R.add=function(t,e){Tr(this),this.i=null,t=ws(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function QE(t,e){Tr(t),e=ws(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function YE(t,e){return Tr(t),e=ws(t,e),t.g.has(e)}R.forEach=function(t,e){Tr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};R.ta=function(){Tr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};R.Z=function(t){Tr(this);let e=[];if(typeof t=="string")YE(this,t)&&(e=e.concat(this.g.get(ws(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};R.set=function(t,e){return Tr(this),this.i=null,t=ws(this,t),YE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};R.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function XE(t,e,n){QE(t,e),0<n.length&&(t.i=null,t.g.set(ws(t,e),cm(n)),t.h+=n.length)}R.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function ws(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ex(t,e){e&&!t.j&&(Tr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(QE(this,r),XE(this,i,n))},t)),t.j=e}var tx=class{constructor(t,e){this.g=t,this.map=e}};function JE(t){this.l=t||nx,$.PerformanceNavigationTiming?(t=$.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!($.g&&$.g.Ka&&$.g.Ka()&&$.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nx=10;function ZE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function eI(t){return t.h?1:t.g?t.g.size:0}function wd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Sm(t,e){t.g?t.g.add(e):t.h=e}function tI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}JE.prototype.cancel=function(){if(this.i=nI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function nI(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return cm(t.i)}var rx=class{stringify(t){return $.JSON.stringify(t,void 0)}parse(t){return $.JSON.parse(t,void 0)}};function ix(){this.g=new rx}function sx(t,e,n){const r=n||"";try{KE(t,function(i,s){let o=i;va(i)&&(o=ym(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function ox(t,e){const n=new vc;if($.Image){const r=new Image;r.onload=il(ol,n,r,"TestLoadImage: loaded",!0,e),r.onerror=il(ol,n,r,"TestLoadImage: error",!1,e),r.onabort=il(ol,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=il(ol,n,r,"TestLoadImage: timeout",!1,e),$.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ol(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Sc(t){this.l=t.ec||null,this.j=t.ob||!1}Le(Sc,Em);Sc.prototype.g=function(){return new Ac(this.l,this.j)};Sc.prototype.i=function(t){return function(){return t}}({});function Ac(t,e){De.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Am,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Le(Ac,De);var Am=0;R=Ac.prototype;R.open=function(t,e){if(this.readyState!=Am)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Go(this)};R.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||$).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};R.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sa(this)),this.readyState=Am};R.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Go(this)),this.g&&(this.readyState=3,Go(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof $.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;rI(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function rI(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}R.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Sa(this):Go(this),this.readyState==3&&rI(this)}};R.Za=function(t){this.g&&(this.response=this.responseText=t,Sa(this))};R.Ya=function(t){this.g&&(this.response=t,Sa(this))};R.ka=function(){this.g&&Sa(this)};function Sa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Go(t)}R.setRequestHeader=function(t,e){this.v.append(t,e)};R.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};R.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Go(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ac.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ax=$.JSON.parse;function ve(t){De.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=iI,this.L=this.M=!1}Le(ve,De);var iI="",lx=/^https?$/i,ux=["POST","PUT"];R=ve.prototype;R.Oa=function(t){this.M=t};R.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():gd.g(),this.C=this.u?Iv(this.u):Iv(gd),this.g.onreadystatechange=Ye(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Av(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=$.FormData&&t instanceof $.FormData,!(0<=wE(ux,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{aI(this),0<this.B&&((this.L=cx(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ye(this.ua,this)):this.A=wm(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Av(this,s)}};function cx(t){return rs&&typeof t.timeout=="number"&&t.ontimeout!==void 0}R.ua=function(){typeof um<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ze(this,"timeout"),this.abort(8))};function Av(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,sI(t),kc(t)}function sI(t){t.F||(t.F=!0,ze(t,"complete"),ze(t,"error"))}R.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ze(this,"complete"),ze(this,"abort"),kc(this))};R.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),kc(this,!0)),ve.$.N.call(this)};R.La=function(){this.s||(this.G||this.v||this.l?oI(this):this.kb())};R.kb=function(){oI(this)};function oI(t){if(t.h&&typeof um<"u"&&(!t.C[1]||Xt(t)!=4||t.da()!=2)){if(t.v&&Xt(t)==4)wm(t.La,0,t);else if(ze(t,"readystatechange"),Xt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(GE)[1]||null;!i&&$.self&&$.self.location&&(i=$.self.location.protocol.slice(0,-1)),r=!lx.test(i?i.toLowerCase():"")}n=r}if(n)ze(t,"complete"),ze(t,"success");else{t.m=6;try{var s=2<Xt(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",sI(t)}}finally{kc(t)}}}}function kc(t,e){if(t.g){aI(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ze(t,"ready");try{n.onreadystatechange=r}catch{}}}function aI(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&($.clearTimeout(t.A),t.A=null)}R.isActive=function(){return!!this.g};function Xt(t){return t.g?t.g.readyState:0}R.da=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}};R.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};R.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ax(e)}};function kv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case iI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function fx(t){const e={};t=(t.g&&2<=Xt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(zo(t[r]))continue;var n=MN(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}CN(e,function(r){return r.join(", ")})}R.Ia=function(){return this.m};R.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function lI(t){let e="";return hm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function km(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=lI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):se(t,e,n))}function Fs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function uI(t){this.Ga=0,this.j=[],this.l=new vc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Fs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Fs("baseRetryDelayMs",5e3,t),this.hb=Fs("retryDelaySeedMs",1e4,t),this.eb=Fs("forwardChannelMaxRetries",2,t),this.xa=Fs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new JE(t&&t.concurrentRequestLimit),this.Ja=new ix,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}R=uI.prototype;R.ra=8;R.H=1;function Pm(t){if(cI(t),t.H==3){var e=t.W++,n=kn(t.I);if(se(n,"SID",t.K),se(n,"RID",e),se(n,"TYPE","terminate"),Aa(t,n),e=new Ia(t,t.l,e),e.L=2,e.A=Tc(kn(n)),n=!1,$.navigator&&$.navigator.sendBeacon)try{n=$.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&$.Image&&(new Image().src=e.A,n=!0),n||(e.g=vI(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Ta(e)}gI(t)}function Pc(t){t.g&&(Cm(t),t.g.cancel(),t.g=null)}function cI(t){Pc(t),t.u&&($.clearTimeout(t.u),t.u=null),Pu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&$.clearTimeout(t.m),t.m=null)}function Rc(t){if(!ZE(t.i)&&!t.m){t.m=!0;var e=t.Na;Bo||xE(),Wo||(Bo(),Wo=!0),vm.add(e,t),t.C=0}}function hx(t,e){return eI(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=wa(Ye(t.Na,t,e),mI(t,t.C)),t.C++,!0)}R.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Ia(this,this.l,t);let s=this.s;if(this.U&&(s?(s=SE(s),AE(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=fI(this,i,e),n=kn(this.I),se(n,"RID",t),se(n,"CVER",22),this.F&&se(n,"X-HTTP-Session-Id",this.F),Aa(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(lI(s)))+"&"+e:this.o&&km(n,this.o,s)),Sm(this.i,i),this.bb&&se(n,"TYPE","init"),this.P?(se(n,"$req",e),se(n,"SID","null"),i.aa=!0,vd(i,n,null)):vd(i,n,e),this.H=2}}else this.H==3&&(t?Pv(this,t):this.j.length==0||ZE(this.i)||Pv(this))};function Pv(t,e){var n;e?n=e.m:n=t.W++;const r=kn(t.I);se(r,"SID",t.K),se(r,"RID",n),se(r,"AID",t.V),Aa(t,r),t.o&&t.s&&km(r,t.o,t.s),n=new Ia(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=fI(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Sm(t.i,n),vd(n,r,e)}function Aa(t,e){t.na&&hm(t.na,function(n,r){se(e,r,n)}),t.h&&KE({},function(n,r){se(e,r,n)})}function fI(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Ye(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{sx(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function hI(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Bo||xE(),Wo||(Bo(),Wo=!0),vm.add(e,t),t.A=0}}function Rm(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=wa(Ye(t.Ma,t),mI(t,t.A)),t.A++,!0)}R.Ma=function(){if(this.u=null,dI(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=wa(Ye(this.jb,this),t)}};R.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,nt(10),Pc(this),dI(this))};function Cm(t){t.B!=null&&($.clearTimeout(t.B),t.B=null)}function dI(t){t.g=new Ia(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=kn(t.wa);se(e,"RID","rpc"),se(e,"SID",t.K),se(e,"AID",t.V),se(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&se(e,"TO",t.qa),se(e,"TYPE","xmlhttp"),Aa(t,e),t.o&&t.s&&km(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Tc(kn(e)),n.u=null,n.S=!0,BE(n,t)}R.ib=function(){this.v!=null&&(this.v=null,Pc(this),Rm(this),nt(19))};function Pu(t){t.v!=null&&($.clearTimeout(t.v),t.v=null)}function pI(t,e){var n=null;if(t.g==e){Pu(t),Cm(t),t.g=null;var r=2}else if(wd(t.i,e))n=e.F,tI(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=_c(),ze(r,new FE(r,n)),Rc(t)}else hI(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&hx(t,e)||r==2&&Rm(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Dr(t,5);break;case 4:Dr(t,10);break;case 3:Dr(t,6);break;default:Dr(t,2)}}}function mI(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Dr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Ye(t.pb,t);n||(n=new jr("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||Au(n,"https"),Tc(n)),ox(n.toString(),r)}else nt(2);t.H=0,t.h&&t.h.za(e),gI(t),cI(t)}R.pb=function(t){t?(this.l.info("Successfully pinged google.com"),nt(2)):(this.l.info("Failed to ping google.com"),nt(1))};function gI(t){if(t.H=0,t.ma=[],t.h){const e=nI(t.i);(e.length!=0||t.j.length!=0)&&(yv(t.ma,e),yv(t.ma,t.j),t.i.i.length=0,cm(t.j),t.j.length=0),t.h.ya()}}function yI(t,e,n){var r=n instanceof jr?kn(n):new jr(n);if(r.g!="")e&&(r.g=e+"."+r.g),ku(r,r.m);else{var i=$.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new jr(null);r&&Au(s,r),e&&(s.g=e),i&&ku(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&se(r,n,e),se(r,"VER",t.ra),Aa(t,r),r}function vI(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new ve(new Sc({ob:n})):new ve(t.va),e.Oa(t.J),e}R.isActive=function(){return!!this.h&&this.h.isActive(this)};function _I(){}R=_I.prototype;R.Ba=function(){};R.Aa=function(){};R.za=function(){};R.ya=function(){};R.isActive=function(){return!0};R.Va=function(){};function Ru(){if(rs&&!(10<=Number(AN)))throw Error("Environmental error: no available transport.")}Ru.prototype.g=function(t,e){return new Et(t,e)};function Et(t,e){De.call(this),this.g=new uI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!zo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!zo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Es(this)}Le(Et,De);Et.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;nt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=yI(t,null,t.Y),Rc(t)};Et.prototype.close=function(){Pm(this.g)};Et.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ym(t),t=n);e.j.push(new tx(e.fb++,t)),e.H==3&&Rc(e)};Et.prototype.N=function(){this.g.h=null,delete this.j,Pm(this.g),delete this.g,Et.$.N.call(this)};function wI(t){Im.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Le(wI,Im);function EI(){Tm.call(this),this.status=1}Le(EI,Tm);function Es(t){this.g=t}Le(Es,_I);Es.prototype.Ba=function(){ze(this.g,"a")};Es.prototype.Aa=function(t){ze(this.g,new wI(t))};Es.prototype.za=function(t){ze(this.g,new EI)};Es.prototype.ya=function(){ze(this.g,"b")};function dx(){this.blockSize=-1}function Wt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Le(Wt,dx);Wt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Wf(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Wt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Wf(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Wf(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Wf(this,r),i=0;break}}this.h=i,this.i+=e};Wt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ee(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var px={};function bm(t){return-128<=t&&128>t?IN(t,function(e){return new ee([e|0],0>e?-1:0)}):new ee([t|0],0>t?-1:0)}function Jt(t){if(isNaN(t)||!isFinite(t))return Hi;if(0>t)return Fe(Jt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Ed;return new ee(e,0)}function II(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Fe(II(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Jt(Math.pow(e,8)),r=Hi,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Jt(Math.pow(e,s)),r=r.R(s).add(Jt(o))):(r=r.R(n),r=r.add(Jt(o)))}return r}var Ed=4294967296,Hi=bm(0),Id=bm(1),Rv=bm(16777216);R=ee.prototype;R.ea=function(){if(Pt(this))return-Fe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Ed+r)*e,e*=Ed}return t};R.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(yn(this))return"0";if(Pt(this))return"-"+Fe(this).toString(t);for(var e=Jt(Math.pow(t,6)),n=this,r="";;){var i=bu(n,e).g;n=Cu(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,yn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};R.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function yn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Pt(t){return t.h==-1}R.X=function(t){return t=Cu(this,t),Pt(t)?-1:yn(t)?0:1};function Fe(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ee(n,~t.h).add(Id)}R.abs=function(){return Pt(this)?Fe(this):this};R.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ee(n,n[n.length-1]&-2147483648?-1:0)};function Cu(t,e){return t.add(Fe(e))}R.R=function(t){if(yn(this)||yn(t))return Hi;if(Pt(this))return Pt(t)?Fe(this).R(Fe(t)):Fe(Fe(this).R(t));if(Pt(t))return Fe(this.R(Fe(t)));if(0>this.X(Rv)&&0>t.X(Rv))return Jt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,al(n,2*r+2*i),n[2*r+2*i+1]+=s*l,al(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,al(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,al(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ee(n,0)};function al(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function $s(t,e){this.g=t,this.h=e}function bu(t,e){if(yn(e))throw Error("division by zero");if(yn(t))return new $s(Hi,Hi);if(Pt(t))return e=bu(Fe(t),e),new $s(Fe(e.g),Fe(e.h));if(Pt(e))return e=bu(t,Fe(e)),new $s(Fe(e.g),e.h);if(30<t.g.length){if(Pt(t)||Pt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Id,r=e;0>=r.X(t);)n=Cv(n),r=Cv(r);var i=gi(n,1),s=gi(r,1);for(r=gi(r,2),n=gi(n,2);!yn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=gi(r,1),n=gi(n,1)}return e=Cu(t,i.R(e)),new $s(i,e)}for(i=Hi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Jt(n),o=s.R(e);Pt(o)||0<o.X(t);)n-=r,s=Jt(n),o=s.R(e);yn(s)&&(s=Id),i=i.add(s),t=Cu(t,o)}return new $s(i,t)}R.gb=function(t){return bu(this,t).h};R.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ee(n,this.h&t.h)};R.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ee(n,this.h|t.h)};R.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ee(n,this.h^t.h)};function Cv(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ee(n,t.h)}function gi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ee(i,t.h)}Ru.prototype.createWebChannel=Ru.prototype.g;Et.prototype.send=Et.prototype.u;Et.prototype.open=Et.prototype.m;Et.prototype.close=Et.prototype.close;wc.NO_ERROR=0;wc.TIMEOUT=8;wc.HTTP_ERROR=6;$E.COMPLETE="complete";UE.EventType=Ea;Ea.OPEN="a";Ea.CLOSE="b";Ea.ERROR="c";Ea.MESSAGE="d";De.prototype.listen=De.prototype.O;ve.prototype.listenOnce=ve.prototype.P;ve.prototype.getLastError=ve.prototype.Sa;ve.prototype.getLastErrorCode=ve.prototype.Ia;ve.prototype.getStatus=ve.prototype.da;ve.prototype.getResponseJson=ve.prototype.Wa;ve.prototype.getResponseText=ve.prototype.ja;ve.prototype.send=ve.prototype.ha;ve.prototype.setWithCredentials=ve.prototype.Oa;Wt.prototype.digest=Wt.prototype.l;Wt.prototype.reset=Wt.prototype.reset;Wt.prototype.update=Wt.prototype.j;ee.prototype.add=ee.prototype.add;ee.prototype.multiply=ee.prototype.R;ee.prototype.modulo=ee.prototype.gb;ee.prototype.compare=ee.prototype.X;ee.prototype.toNumber=ee.prototype.ea;ee.prototype.toString=ee.prototype.toString;ee.prototype.getBits=ee.prototype.D;ee.fromNumber=Jt;ee.fromString=II;var mx=function(){return new Ru},gx=function(){return _c()},Hf=wc,yx=$E,vx=ci,bv={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ll=UE,_x=ve,wx=Wt,qi=ee;const Nv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ke.UNAUTHENTICATED=new Ke(null),Ke.GOOGLE_CREDENTIALS=new Ke("google-credentials-uid"),Ke.FIRST_PARTY=new Ke("first-party-uid"),Ke.MOCK_USER=new Ke("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Is="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new uc("@firebase/firestore");function Us(){return Xr.logLevel}function D(t,...e){if(Xr.logLevel<=Q.DEBUG){const n=e.map(Nm);Xr.debug(`Firestore (${Is}): ${t}`,...n)}}function Pn(t,...e){if(Xr.logLevel<=Q.ERROR){const n=e.map(Nm);Xr.error(`Firestore (${Is}): ${t}`,...n)}}function is(t,...e){if(Xr.logLevel<=Q.WARN){const n=e.map(Nm);Xr.warn(`Firestore (${Is}): ${t}`,...n)}}function Nm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t="Unexpected state"){const e=`FIRESTORE (${Is}) INTERNAL ASSERTION FAILED: `+t;throw Pn(e),new Error(e)}function ne(t,e){t||F()}function j(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends qt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ex{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ke.UNAUTHENTICATED))}shutdown(){}}class Ix{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Tx{constructor(e){this.t=e,this.currentUser=Ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Br;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Br,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Br)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ne(typeof r.accessToken=="string"),new TI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ne(e===null||typeof e=="string"),new Ke(e)}}class Sx{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ke.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ax{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Sx(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Px{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ne(typeof n.token=="string"),this.R=n.token,new kx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Rx(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function J(t,e){return t<e?-1:t>e?1:0}function ss(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new N(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new N(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new N(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Re.fromMillis(Date.now())}static fromDate(e){return Re.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Re(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new z(e)}static min(){return new z(new Re(0,0))}static max(){return new z(new Re(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n,r){n===void 0?n=0:n>e.length&&F(),r===void 0?r=e.length-n:r>e.length-n&&F(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Qo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Qo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class oe extends Qo{construct(e,n,r){return new oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new N(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new oe(n)}static emptyPath(){return new oe([])}}const Cx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends Qo{construct(e,n,r){return new $e(e,n,r)}static isValidIdentifier(e){return Cx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $e(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new N(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new N(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new N(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new N(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(n)}static emptyPath(){return new $e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(oe.fromString(e))}static fromName(e){return new M(oe.fromString(e).popFirst(5))}static empty(){return new M(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new oe(e.slice()))}}function bx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=z.fromTimestamp(r===1e9?new Re(n+1,0):new Re(n,r));return new dr(i,M.empty(),e)}function Nx(t){return new dr(t.readTime,t.key,-1)}class dr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new dr(z.min(),M.empty(),-1)}static max(){return new dr(z.max(),M.empty(),-1)}}function xx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=M.comparator(t.documentKey,e.documentKey),n!==0?n:J(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ox="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Dx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ka(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==Ox)throw t;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,r)=>{n(e)})}static reject(e){return new T((n,r)=>{r(e)})}static waitFor(e){return new T((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=T.resolve(!1);for(const r of e)n=n.next(i=>i?T.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new T((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new T((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Pa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}xm._e=-1;function Cc(t){return t==null}function Nu(t){return t===0&&1/t==-1/0}function Lx(t){return typeof t=="number"&&Number.isInteger(t)&&!Nu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function AI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,n){this.comparator=e,this.root=n||Ve.EMPTY}insert(e,n){return new me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ve.BLACK,null,null))}remove(e){return new me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ve.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ul(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ul(this.root,e,this.comparator,!1)}getReverseIterator(){return new ul(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ul(this.root,e,this.comparator,!0)}}class ul{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ve{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ve.RED,this.left=i??Ve.EMPTY,this.right=s??Ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ve(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ve.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}Ve.EMPTY=null,Ve.RED=!0,Ve.BLACK=!1;Ve.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ve(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.comparator=e,this.data=new me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ov(this.data.getIterator())}getIteratorFrom(e){return new Ov(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new je(this.comparator);return n.data=e,n}}class Ov{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new yt([])}unionWith(e){let n=new je($e.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ss(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new kI("Invalid base64 string: "+s):s}}(e);return new et(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const Mx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pr(t){if(ne(!!t),typeof t=="string"){let e=0;const n=Mx.exec(t);if(ne(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ie(t.seconds),nanos:Ie(t.nanos)}}function Ie(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Jr(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Dm(t){const e=t.mapValue.fields.__previous_value__;return Om(e)?Dm(e):e}function Yo(t){const e=pr(t.mapValue.fields.__local_write_time__.timestampValue);return new Re(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Xo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Xo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Xo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Zr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Om(t)?4:Fx(t)?9007199254740991:10:F()}function ln(t,e){if(t===e)return!0;const n=Zr(t);if(n!==Zr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Yo(t).isEqual(Yo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=pr(i.timestampValue),a=pr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Jr(i.bytesValue).isEqual(Jr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ie(i.geoPointValue.latitude)===Ie(s.geoPointValue.latitude)&&Ie(i.geoPointValue.longitude)===Ie(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ie(i.integerValue)===Ie(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ie(i.doubleValue),a=Ie(s.doubleValue);return o===a?Nu(o)===Nu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ss(t.arrayValue.values||[],e.arrayValue.values||[],ln);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(xv(o)!==xv(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!ln(o[l],a[l])))return!1;return!0}(t,e);default:return F()}}function Jo(t,e){return(t.values||[]).find(n=>ln(n,e))!==void 0}function os(t,e){if(t===e)return 0;const n=Zr(t),r=Zr(e);if(n!==r)return J(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return J(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ie(s.integerValue||s.doubleValue),l=Ie(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Dv(t.timestampValue,e.timestampValue);case 4:return Dv(Yo(t),Yo(e));case 5:return J(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Jr(s),l=Jr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=J(a[u],l[u]);if(c!==0)return c}return J(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=J(Ie(s.latitude),Ie(o.latitude));return a!==0?a:J(Ie(s.longitude),Ie(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=os(a[u],l[u]);if(c)return c}return J(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===cl.mapValue&&o===cl.mapValue)return 0;if(s===cl.mapValue)return 1;if(o===cl.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let f=0;f<l.length&&f<c.length;++f){const h=J(l[f],c[f]);if(h!==0)return h;const p=os(a[l[f]],u[c[f]]);if(p!==0)return p}return J(l.length,c.length)}(t.mapValue,e.mapValue);default:throw F()}}function Dv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return J(t,e);const n=pr(t),r=pr(e),i=J(n.seconds,r.seconds);return i!==0?i:J(n.nanos,r.nanos)}function as(t){return Td(t)}function Td(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=pr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Jr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return M.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Td(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Td(n.fields[o])}`;return i+"}"}(t.mapValue):F()}function Lv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Sd(t){return!!t&&"integerValue"in t}function Lm(t){return!!t&&"arrayValue"in t}function Mv(t){return!!t&&"nullValue"in t}function Vv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Vl(t){return!!t&&"mapValue"in t}function co(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return fi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=co(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=co(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Fx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.value=e}static empty(){return new at({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Vl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=co(n)}setAll(e){let n=$e.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=co(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Vl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ln(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Vl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){fi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new at(co(this.value))}}function PI(t){const e=[];return fi(t.fields,(n,r)=>{const i=new $e([n]);if(Vl(r)){const s=PI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new yt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Qe(e,0,z.min(),z.min(),z.min(),at.empty(),0)}static newFoundDocument(e,n,r,i){return new Qe(e,1,n,z.min(),r,i,0)}static newNoDocument(e,n){return new Qe(e,2,n,z.min(),z.min(),at.empty(),0)}static newUnknownDocument(e,n){return new Qe(e,3,n,z.min(),z.min(),at.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=at.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=at.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n){this.position=e,this.inclusive=n}}function Fv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=M.comparator(M.fromName(o.referenceValue),n.key):r=os(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function $v(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ln(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,n="asc"){this.field=e,this.dir=n}}function $x(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{}class Se extends RI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new zx(e,n,r):n==="array-contains"?new Wx(e,r):n==="in"?new Hx(e,r):n==="not-in"?new qx(e,r):n==="array-contains-any"?new Kx(e,r):new Se(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new jx(e,r):new Bx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(os(n,this.value)):n!==null&&Zr(this.value)===Zr(n)&&this.matchesComparison(os(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ht extends RI{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Ht(e,n)}matches(e){return CI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function CI(t){return t.op==="and"}function bI(t){return Ux(t)&&CI(t)}function Ux(t){for(const e of t.filters)if(e instanceof Ht)return!1;return!0}function Ad(t){if(t instanceof Se)return t.field.canonicalString()+t.op.toString()+as(t.value);if(bI(t))return t.filters.map(e=>Ad(e)).join(",");{const e=t.filters.map(n=>Ad(n)).join(",");return`${t.op}(${e})`}}function NI(t,e){return t instanceof Se?function(r,i){return i instanceof Se&&r.op===i.op&&r.field.isEqual(i.field)&&ln(r.value,i.value)}(t,e):t instanceof Ht?function(r,i){return i instanceof Ht&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&NI(o,i.filters[a]),!0):!1}(t,e):void F()}function xI(t){return t instanceof Se?function(n){return`${n.field.canonicalString()} ${n.op} ${as(n.value)}`}(t):t instanceof Ht?function(n){return n.op.toString()+" {"+n.getFilters().map(xI).join(" ,")+"}"}(t):"Filter"}class zx extends Se{constructor(e,n,r){super(e,n,r),this.key=M.fromName(r.referenceValue)}matches(e){const n=M.comparator(e.key,this.key);return this.matchesComparison(n)}}class jx extends Se{constructor(e,n){super(e,"in",n),this.keys=OI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Bx extends Se{constructor(e,n){super(e,"not-in",n),this.keys=OI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function OI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>M.fromName(r.referenceValue))}class Wx extends Se{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Lm(n)&&Jo(n.arrayValue,this.value)}}class Hx extends Se{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Jo(this.value.arrayValue,n)}}class qx extends Se{constructor(e,n){super(e,"not-in",n)}matches(e){if(Jo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Jo(this.value.arrayValue,n)}}class Kx extends Se{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Lm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Jo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Uv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Gx(t,e,n,r,i,s,o)}function Mm(t){const e=j(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ad(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Cc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>as(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>as(r)).join(",")),e.ce=n}return e.ce}function Vm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!$x(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!NI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$v(t.startAt,e.startAt)&&$v(t.endAt,e.endAt)}function kd(t){return M.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Qx(t,e,n,r,i,s,o,a){return new Ts(t,e,n,r,i,s,o,a)}function Fm(t){return new Ts(t)}function zv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function DI(t){return t.collectionGroup!==null}function fo(t){const e=j(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new je($e.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new Zo(s,r))}),n.has($e.keyField().canonicalString())||e.le.push(new Zo($e.keyField(),r))}return e.le}function sn(t){const e=j(t);return e.he||(e.he=Yx(e,fo(t))),e.he}function Yx(t,e){if(t.limitType==="F")return Uv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Zo(i.field,s)});const n=t.endAt?new xu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new xu(t.startAt.position,t.startAt.inclusive):null;return Uv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Pd(t,e){const n=t.filters.concat([e]);return new Ts(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Rd(t,e,n){return new Ts(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function bc(t,e){return Vm(sn(t),sn(e))&&t.limitType===e.limitType}function LI(t){return`${Mm(sn(t))}|lt:${t.limitType}`}function yi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>xI(i)).join(", ")}]`),Cc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>as(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>as(i)).join(",")),`Target(${r})`}(sn(t))}; limitType=${t.limitType})`}function Nc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):M.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of fo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=Fv(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,fo(r),i)||r.endAt&&!function(o,a,l){const u=Fv(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,fo(r),i))}(t,e)}function Xx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function MI(t){return(e,n)=>{let r=!1;for(const i of fo(t)){const s=Jx(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Jx(t,e,n){const r=t.field.isKeyField()?M.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?os(l,u):F()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return F()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){fi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return AI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zx=new me(M.comparator);function Rn(){return Zx}const VI=new me(M.comparator);function Qs(...t){let e=VI;for(const n of t)e=e.insert(n.key,n);return e}function FI(t){let e=VI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Lr(){return ho()}function $I(){return ho()}function ho(){return new Ss(t=>t.toString(),(t,e)=>t.isEqual(e))}const eO=new me(M.comparator),tO=new je(M.comparator);function K(...t){let e=tO;for(const n of t)e=e.add(n);return e}const nO=new je(J);function rO(){return nO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nu(e)?"-0":e}}function zI(t){return{integerValue:""+t}}function iO(t,e){return Lx(e)?zI(e):UI(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(){this._=void 0}}function sO(t,e,n){return t instanceof ea?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Om(s)&&(s=Dm(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ta?BI(t,e):t instanceof na?WI(t,e):function(i,s){const o=jI(i,s),a=jv(o)+jv(i.Ie);return Sd(o)&&Sd(i.Ie)?zI(a):UI(i.serializer,a)}(t,e)}function oO(t,e,n){return t instanceof ta?BI(t,e):t instanceof na?WI(t,e):n}function jI(t,e){return t instanceof Ou?function(r){return Sd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ea extends xc{}class ta extends xc{constructor(e){super(),this.elements=e}}function BI(t,e){const n=HI(e);for(const r of t.elements)n.some(i=>ln(i,r))||n.push(r);return{arrayValue:{values:n}}}class na extends xc{constructor(e){super(),this.elements=e}}function WI(t,e){let n=HI(e);for(const r of t.elements)n=n.filter(i=>!ln(i,r));return{arrayValue:{values:n}}}class Ou extends xc{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function jv(t){return Ie(t.integerValue||t.doubleValue)}function HI(t){return Lm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e,n){this.field=e,this.transform=n}}function lO(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ta&&i instanceof ta||r instanceof na&&i instanceof na?ss(r.elements,i.elements,ln):r instanceof Ou&&i instanceof Ou?ln(r.Ie,i.Ie):r instanceof ea&&i instanceof ea}(t.transform,e.transform)}class uO{constructor(e,n){this.version=e,this.transformResults=n}}class ht{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ht}static exists(e){return new ht(void 0,e)}static updateTime(e){return new ht(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Oc{}function qI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Dc(t.key,ht.none()):new Ra(t.key,t.data,ht.none());{const n=t.data,r=at.empty();let i=new je($e.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Sr(t.key,r,new yt(i.toArray()),ht.none())}}function cO(t,e,n){t instanceof Ra?function(i,s,o){const a=i.value.clone(),l=Wv(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Sr?function(i,s,o){if(!Fl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Wv(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(KI(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function po(t,e,n,r){return t instanceof Ra?function(s,o,a,l){if(!Fl(s.precondition,o))return a;const u=s.value.clone(),c=Hv(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Sr?function(s,o,a,l){if(!Fl(s.precondition,o))return a;const u=Hv(s.fieldTransforms,l,o),c=o.data;return c.setAll(KI(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Fl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function fO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=jI(r.transform,i||null);s!=null&&(n===null&&(n=at.empty()),n.set(r.field,s))}return n||null}function Bv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ss(r,i,(s,o)=>lO(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ra extends Oc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Sr extends Oc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function KI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Wv(t,e,n){const r=new Map;ne(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,oO(o,a,n[i]))}return r}function Hv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,sO(s,o,e))}return r}class Dc extends Oc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hO extends Oc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&cO(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=po(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=po(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=$I();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=qI(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),K())}isEqual(e){return this.batchId===e.batchId&&ss(this.mutations,e.mutations,(n,r)=>Bv(n,r))&&ss(this.baseMutations,e.baseMutations,(n,r)=>Bv(n,r))}}class $m{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ne(e.mutations.length===r.length);let i=function(){return eO}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new $m(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee,Y;function gO(t){switch(t){default:return F();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function GI(t){if(t===void 0)return Pn("GRPC error has no .code"),E.UNKNOWN;switch(t){case Ee.OK:return E.OK;case Ee.CANCELLED:return E.CANCELLED;case Ee.UNKNOWN:return E.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return E.INTERNAL;case Ee.UNAVAILABLE:return E.UNAVAILABLE;case Ee.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Ee.NOT_FOUND:return E.NOT_FOUND;case Ee.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Ee.ABORTED:return E.ABORTED;case Ee.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Ee.DATA_LOSS:return E.DATA_LOSS;default:return F()}}(Y=Ee||(Ee={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yO(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO=new qi([4294967295,4294967295],0);function qv(t){const e=yO().encode(t),n=new wx;return n.update(e),new Uint8Array(n.digest())}function Kv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new qi([n,r],0),new qi([i,s],0)]}class Um{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ys(`Invalid padding: ${n}`);if(r<0)throw new Ys(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ys(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ys(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=qi.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(qi.fromNumber(r)));return i.compare(vO)===1&&(i=new qi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=qv(e),[r,i]=Kv(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Um(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=qv(e),[r,i]=Kv(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ys extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ca.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Lc(z.min(),i,new me(J),Rn(),K())}}class Ca{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ca(r,n,K(),K(),K())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class QI{constructor(e,n){this.targetId=e,this.fe=n}}class YI{constructor(e,n,r=et.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Gv{constructor(){this.ge=0,this.pe=Yv(),this.ye=et.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=K(),n=K(),r=K();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:F()}}),new Ca(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=Yv()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,ne(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class _O{constructor(e){this.Le=e,this.ke=new Map,this.qe=Rn(),this.Qe=Qv(),this.Ke=new me(J)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:F()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(kd(s))if(r===0){const o=new M(s.path);this.We(n,o,Qe.newNoDocument(o,z.min()))}else ne(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Jr(r).toUint8Array()}catch(l){if(l instanceof kI)return is("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Um(o,i,s)}catch(l){return is(l instanceof Ys?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&kd(a.target)){const l=new M(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,Qe.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=K();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new Lc(e,n,this.Ke,this.qe,r);return this.qe=Rn(),this.Qe=Qv(),this.Ke=new me(J),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Gv,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new je(J),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||D("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Gv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Qv(){return new me(M.comparator)}function Yv(){return new me(M.comparator)}const wO={asc:"ASCENDING",desc:"DESCENDING"},EO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},IO={and:"AND",or:"OR"};class TO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Cd(t,e){return t.useProto3Json||Cc(e)?e:{value:e}}function Du(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function XI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function SO(t,e){return Du(t,e.toTimestamp())}function on(t){return ne(!!t),z.fromTimestamp(function(n){const r=pr(n);return new Re(r.seconds,r.nanos)}(t))}function zm(t,e){return function(r){return new oe(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function JI(t){const e=oe.fromString(t);return ne(nT(e)),e}function bd(t,e){return zm(t.databaseId,e.path)}function qf(t,e){const n=JI(e);if(n.get(1)!==t.databaseId.projectId)throw new N(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new N(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new M(ZI(n))}function Nd(t,e){return zm(t.databaseId,e)}function AO(t){const e=JI(t);return e.length===4?oe.emptyPath():ZI(e)}function xd(t){return new oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ZI(t){return ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Xv(t,e,n){return{name:bd(t,e),fields:n.value.mapValue.fields}}function kO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(ne(c===void 0||typeof c=="string"),et.fromBase64String(c||"")):(ne(c===void 0||c instanceof Uint8Array),et.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?E.UNKNOWN:GI(u.code);return new N(c,u.message||"")}(o);n=new YI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=qf(t,r.document.name),s=on(r.document.updateTime),o=r.document.createTime?on(r.document.createTime):z.min(),a=new at({mapValue:{fields:r.document.fields}}),l=Qe.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new $l(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=qf(t,r.document),s=r.readTime?on(r.readTime):z.min(),o=Qe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new $l([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=qf(t,r.document),s=r.removedTargetIds||[];n=new $l([],s,i,null)}else{if(!("filter"in e))return F();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new mO(i,s),a=r.targetId;n=new QI(a,o)}}return n}function PO(t,e){let n;if(e instanceof Ra)n={update:Xv(t,e.key,e.value)};else if(e instanceof Dc)n={delete:bd(t,e.key)};else if(e instanceof Sr)n={update:Xv(t,e.key,e.data),updateMask:MO(e.fieldMask)};else{if(!(e instanceof hO))return F();n={verify:bd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof ea)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ta)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof na)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ou)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw F()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:SO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:F()}(t,e.precondition)),n}function RO(t,e){return t&&t.length>0?(ne(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?on(i.updateTime):on(s);return o.isEqual(z.min())&&(o=on(s)),new uO(o,i.transformResults||[])}(n,e))):[]}function CO(t,e){return{documents:[Nd(t,e.path)]}}function bO(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Nd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Nd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return tT(Ht.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(f){return{field:vi(f.field),direction:OO(f.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Cd(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function NO(t){let e=AO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ne(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(f){const h=eT(f);return h instanceof Ht&&bI(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(h=>function(y){return new Zo(_i(y.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(h))}(n.orderBy));let a=null;n.limit&&(a=function(f){let h;return h=typeof f=="object"?f.value:f,Cc(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(f){const h=!!f.before,p=f.values||[];return new xu(p,h)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const h=!f.before,p=f.values||[];return new xu(p,h)}(n.endAt)),Qx(e,i,o,s,a,"F",l,u)}function xO(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function eT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=_i(n.unaryFilter.field);return Se.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=_i(n.unaryFilter.field);return Se.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=_i(n.unaryFilter.field);return Se.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=_i(n.unaryFilter.field);return Se.create(o,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(t):t.fieldFilter!==void 0?function(n){return Se.create(_i(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ht.create(n.compositeFilter.filters.map(r=>eT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return F()}}(n.compositeFilter.op))}(t):F()}function OO(t){return wO[t]}function DO(t){return EO[t]}function LO(t){return IO[t]}function vi(t){return{fieldPath:t.canonicalString()}}function _i(t){return $e.fromServerFormat(t.fieldPath)}function tT(t){return t instanceof Se?function(n){if(n.op==="=="){if(Vv(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NAN"}};if(Mv(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Vv(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NOT_NAN"}};if(Mv(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vi(n.field),op:DO(n.op),value:n.value}}}(t):t instanceof Ht?function(n){const r=n.getFilters().map(i=>tT(i));return r.length===1?r[0]:{compositeFilter:{op:LO(n.op),filters:r}}}(t):F()}function MO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function nT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n,r,i,s=z.min(),o=z.min(),a=et.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Yn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(e){this.ut=e}}function FO(t){const e=NO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Rd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(){this.on=new UO}addToCollectionParentIndex(e,n){return this.on.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}deleteAllFieldIndexes(e){return T.resolve()}createTargetIndexes(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(dr.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(dr.min())}updateCollectionGroup(e,n,r){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class UO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new je(oe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new je(oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new ls(0)}static Nn(){return new ls(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(){this.changes=new Ss(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Qe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?T.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&po(r.mutation,i,yt.empty(),Re.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,K()).next(()=>r))}getLocalViewOfDocuments(e,n,r=K()){const i=Lr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Qs();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Lr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,K()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Rn();const o=ho(),a=function(){return ho()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Sr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),po(c.mutation,u,c.mutation.getFieldMask(),Re.now())):o.set(u.key,yt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var f;return a.set(u,new jO(c,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ho();let i=new me((o,a)=>o-a),s=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||yt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const f=(i.get(a.batchId)||K()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,f=$I();c.forEach(h=>{if(!s.has(h)){const p=qI(n.get(h),r.get(h));p!==null&&f.set(h,p),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return T.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return M.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):DI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):T.resolve(Lr());let a=-1,l=s;return o.next(u=>T.forEach(u,(c,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(c)?T.resolve():this.remoteDocumentCache.getEntry(e,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,K())).next(c=>({batchId:a,changes:FI(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new M(n)).next(r=>{let i=Qs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Qs();return this.indexManager.getCollectionParents(e,s).next(a=>T.forEach(a,l=>{const u=function(f,h){return new Ts(h,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((f,h)=>{o=o.insert(f,h)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,Qe.newInvalidDocument(c)))});let a=Qs();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&po(c.mutation,u,yt.empty(),Re.now()),Nc(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return T.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:on(i.createTime)}}(n)),T.resolve()}getNamedQuery(e,n){return T.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:FO(i.bundledQuery),readTime:on(i.readTime)}}(n)),T.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HO{constructor(){this.overlays=new me(M.comparator),this.lr=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Lr();return T.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.lt(e,n,s)}),T.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),T.resolve()}getOverlaysForCollection(e,n,r){const i=Lr(),s=n.length+1,o=new M(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return T.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new me((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Lr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Lr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return T.resolve(a)}lt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new pO(n,r));let s=this.lr.get(n);s===void 0&&(s=K(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(){this.hr=new je(Ne.Pr),this.Ir=new je(Ne.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new Ne(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new Ne(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new M(new oe([])),r=new Ne(n,e),i=new Ne(n,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new M(new oe([])),r=new Ne(n,e),i=new Ne(n,e+1);let s=K();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ne(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ne{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return M.comparator(e.key,n.key)||J(e.gr,n.gr)}static Tr(e,n){return J(e.gr,n.gr)||M.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new je(Ne.Pr)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new dO(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new Ne(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return T.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ne(n,0),i=new Ne(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),T.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new je(J);return n.forEach(i=>{const s=new Ne(i,0),o=new Ne(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),T.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;M.isDocumentKey(s)||(s=s.child(""));const o=new Ne(new M(s),0);let a=new je(J);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},o),T.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ne(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return T.forEach(n.mutations,i=>{const s=new Ne(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new Ne(n,0),i=this.yr.firstAfterOrEqual(r);return T.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO{constructor(e){this.Cr=e,this.docs=function(){return new me(M.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return T.resolve(r?r.document.mutableCopy():Qe.newInvalidDocument(n))}getEntries(e,n){let r=Rn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Qe.newInvalidDocument(i))}),T.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Rn();const o=n.path,a=new M(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||xx(Nx(c),r)<=0||(i.has(c.key)||Nc(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return T.resolve(s)}getAllFromCollectionGroup(e,n,r,i){F()}vr(e,n){return T.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new GO(this)}getSize(e){return T.resolve(this.size)}}class GO extends zO{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),T.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(e){this.persistence=e,this.Fr=new Ss(n=>Mm(n),Vm),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Mr=0,this.Or=new jm,this.targetCount=0,this.Nr=ls.On()}forEachTarget(e,n){return this.Fr.forEach((r,i)=>n(i)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),T.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new ls(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.kn(n),T.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),T.waitFor(s).next(()=>i)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return T.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),T.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),T.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),T.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return T.resolve(r)}containsKey(e,n){return T.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(e,n){this.Br={},this.overlays={},this.Lr=new xm(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new QO(this),this.indexManager=new $O,this.remoteDocumentCache=function(i){return new KO(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new VO(n),this.Kr=new WO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new HO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new qO(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){D("MemoryPersistence","Starting transaction:",e);const i=new XO(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,n){return T.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class XO extends Dx{constructor(e){super(),this.currentSequenceNumber=e}}class Bm{constructor(e){this.persistence=e,this.Gr=new jm,this.zr=null}static jr(e){return new Bm(e)}get Hr(){if(this.zr)return this.zr;throw F()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),T.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),T.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Hr,r=>{const i=M.fromPath(r);return this.Jr(e,i).next(s=>{s||n.removeEntry(i,z.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return T.or([()=>T.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=i}static Qi(e,n){let r=K(),i=K();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Wm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.zi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new JO;return this.Hi(e,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>s.result)}Ji(e,n,r,i){return r.documentReadCount<this.Ui?(Us()<=Q.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",yi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),T.resolve()):(Us()<=Q.DEBUG&&D("QueryEngine","Query:",yi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(Us()<=Q.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",yi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sn(n))):T.resolve())}zi(e,n){if(zv(n))return T.resolve(null);let r=sn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Rd(n,null,"F"),r=sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=K(...s);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,o,l.readTime)?this.zi(e,Rd(n,null,"F")):this.Xi(e,u,n,l)}))})))}ji(e,n,r,i){return zv(n)||i.isEqual(z.min())?T.resolve(null):this.Gi.getDocuments(e,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?T.resolve(null):(Us()<=Q.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),yi(n)),this.Xi(e,o,n,bx(i,-1)).next(a=>a))})}Yi(e,n){let r=new je(MI(e));return n.forEach((i,s)=>{Nc(e,s)&&(r=r.add(s))}),r}Zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(e,n,r){return Us()<=Q.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",yi(n)),this.Gi.getDocumentsMatchingQuery(e,n,dr.min(),r)}Xi(e,n,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e,n,r,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new me(J),this.ns=new Ss(s=>Mm(s),Vm),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BO(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function tD(t,e,n,r){return new eD(t,e,n,r)}async function rT(t,e){const n=j(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=K();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function nD(t,e){const n=j(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const f=u.batch,h=f.keys();let p=T.resolve();return h.forEach(y=>{p=p.next(()=>c.getEntry(l,y)).next(v=>{const w=u.docVersions.get(y);ne(w!==null),v.version.compareTo(w)<0&&(f.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),c.addEntry(v)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=K();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function iT(t){const e=j(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function rD(t,e){const n=j(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((c,f)=>{const h=i.get(f);if(!h)return;a.push(n.qr.removeMatchingKeys(s,c.removedDocuments,f).next(()=>n.qr.addMatchingKeys(s,c.addedDocuments,f)));let p=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?p=p.withResumeToken(et.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(f,p),function(v,w,m){return v.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(h,p,c)&&a.push(n.qr.updateTargetData(s,p))});let l=Rn(),u=K();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(iD(s,o,e.documentUpdates).next(c=>{l=c.us,u=c.cs})),!r.isEqual(z.min())){const c=n.qr.getLastRemoteSnapshotVersion(s).next(f=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return T.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ts=i,s))}function iD(t,e,n){let r=K(),i=K();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Rn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):D("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:o,cs:i}})}function sD(t,e){const n=j(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function oD(t,e){const n=j(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,e).next(s=>s?(i=s,T.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new Yn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function Od(t,e,n){const r=j(t),i=r.ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Pa(o))throw o;D("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function Jv(t,e,n){const r=j(t);let i=z.min(),s=K();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const f=j(l),h=f.ns.get(c);return h!==void 0?T.resolve(f.ts.get(h)):f.qr.getTargetData(u,c)}(r,o,sn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?i:z.min(),n?s:K())).next(a=>(aD(r,Xx(e),a),{documents:a,ls:s})))}function aD(t,e,n){let r=t.rs.get(e)||z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.rs.set(e,r)}class Zv{constructor(){this.activeTargetIds=rO()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lD{constructor(){this.eo=new Zv,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Zv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fl=null;function Kf(){return fl===null?fl=function(){return 268435456+Math.round(2147483648*Math.random())}():fl++,"0x"+fl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe="WebChannelConnection";class hD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(n,r,i,s,o){const a=Kf(),l=this.So(n,r);D("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,s,o),this.Do(n,l,u,i).then(c=>(D("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw is("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Co(n,r,i,s,o,a){return this.wo(n,r,i,s,o)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Is}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}So(n,r){const i=cD[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,i){const s=Kf();return new Promise((o,a)=>{const l=new _x;l.setWithCredentials(!0),l.listenOnce(yx.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Hf.NO_ERROR:const c=l.getResponseJson();D(qe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Hf.TIMEOUT:D(qe,`RPC '${e}' ${s} timed out`),a(new N(E.DEADLINE_EXCEEDED,"Request time out"));break;case Hf.HTTP_ERROR:const f=l.getStatus();if(D(qe,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const p=h==null?void 0:h.error;if(p&&p.status&&p.message){const y=function(w){const m=w.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(m)>=0?m:E.UNKNOWN}(p.status);a(new N(y,p.message))}else a(new N(E.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new N(E.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{D(qe,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);D(qe,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}vo(e,n,r){const i=Kf(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=mx(),a=gx(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");D(qe,`Creating RPC '${e}' stream ${i}: ${c}`,l);const f=o.createWebChannel(c,l);let h=!1,p=!1;const y=new fD({co:w=>{p?D(qe,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(h||(D(qe,`Opening RPC '${e}' stream ${i} transport.`),f.open(),h=!0),D(qe,`RPC '${e}' stream ${i} sending:`,w),f.send(w))},lo:()=>f.close()}),v=(w,m,d)=>{w.listen(m,g=>{try{d(g)}catch(_){setTimeout(()=>{throw _},0)}})};return v(f,ll.EventType.OPEN,()=>{p||D(qe,`RPC '${e}' stream ${i} transport opened.`)}),v(f,ll.EventType.CLOSE,()=>{p||(p=!0,D(qe,`RPC '${e}' stream ${i} transport closed`),y.Ro())}),v(f,ll.EventType.ERROR,w=>{p||(p=!0,is(qe,`RPC '${e}' stream ${i} transport errored:`,w),y.Ro(new N(E.UNAVAILABLE,"The operation could not be completed")))}),v(f,ll.EventType.MESSAGE,w=>{var m;if(!p){const d=w.data[0];ne(!!d);const g=d,_=g.error||((m=g[0])===null||m===void 0?void 0:m.error);if(_){D(qe,`RPC '${e}' stream ${i} received error:`,_);const I=_.status;let k=function(W){const U=Ee[W];if(U!==void 0)return GI(U)}(I),P=_.message;k===void 0&&(k=E.INTERNAL,P="Unknown error status: "+I+" with message "+_.message),p=!0,y.Ro(new N(k,P)),f.close()}else D(qe,`RPC '${e}' stream ${i} received:`,d),y.Vo(d)}}),v(a,vx.STAT_EVENT,w=>{w.stat===bv.PROXY?D(qe,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===bv.NOPROXY&&D(qe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Ao()},0),y}}function Gf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(t){return new TO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new sT(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(Pn(n.toString()),Pn("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{e(()=>{const i=new N(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return D("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dD extends oT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=kO(this.serializer,e),r=function(s){if(!("targetChange"in s))return z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?z.min():o.readTime?on(o.readTime):z.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=xd(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=kd(l)?{documents:CO(s,l)}:{query:bO(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=XI(s,o.resumeToken);const u=Cd(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(z.min())>0){a.readTime=Du(s,o.snapshotVersion.toTimestamp());const u=Cd(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=xO(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=xd(this.serializer),n.removeTarget=e,this.e_(n)}}class pD extends oT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=RO(e.writeResults,e.commitTime),r=on(e.commitTime);return this.listener.I_(r,n)}return ne(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=xd(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>PO(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new N(E.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new N(E.UNKNOWN,i.toString())})}Co(e,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new N(E.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class gD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Pn(n),this.f_=!1):D("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{hi(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=j(l);u.C_.add(4),await ba(u),u.M_.set("Unknown"),u.C_.delete(4),await Vc(u)}(this))})}),this.M_=new gD(r,i)}}async function Vc(t){if(hi(t))for(const e of t.v_)await e(!0)}async function ba(t){for(const e of t.v_)await e(!1)}function aT(t,e){const n=j(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),Km(n)?qm(n):As(n).Ho()&&Hm(n,e))}function lT(t,e){const n=j(t),r=As(n);n.D_.delete(e),r.Ho()&&uT(n,e),n.D_.size===0&&(r.Ho()?r.Zo():hi(n)&&n.M_.set("Unknown"))}function Hm(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}As(t).u_(e)}function uT(t,e){t.x_.Oe(e),As(t).c_(e)}function qm(t){t.x_=new _O({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),As(t).start(),t.M_.g_()}function Km(t){return hi(t)&&!As(t).jo()&&t.D_.size>0}function hi(t){return j(t).C_.size===0}function cT(t){t.x_=void 0}async function vD(t){t.D_.forEach((e,n)=>{Hm(t,e)})}async function _D(t,e){cT(t),Km(t)?(t.M_.w_(e),qm(t)):t.M_.set("Unknown")}async function wD(t,e,n){if(t.M_.set("Online"),e instanceof YI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(t,e)}catch(r){D("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Lu(t,r)}else if(e instanceof $l?t.x_.$e(e):e instanceof QI?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(z.min()))try{const r=await iT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.D_.get(u);c&&s.D_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.D_.get(l);if(!c)return;s.D_.set(l,c.withResumeToken(et.EMPTY_BYTE_STRING,c.snapshotVersion)),uT(s,l);const f=new Yn(c.target,l,u,c.sequenceNumber);Hm(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){D("RemoteStore","Failed to raise snapshot:",r),await Lu(t,r)}}async function Lu(t,e,n){if(!Pa(e))throw e;t.C_.add(1),await ba(t),t.M_.set("Offline"),n||(n=()=>iT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await Vc(t)})}function fT(t,e){return e().catch(n=>Lu(t,n,e))}async function Fc(t){const e=j(t),n=mr(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;ED(e);)try{const i=await sD(e.localStore,r);if(i===null){e.b_.length===0&&n.Zo();break}r=i.batchId,ID(e,i)}catch(i){await Lu(e,i)}hT(e)&&dT(e)}function ED(t){return hi(t)&&t.b_.length<10}function ID(t,e){t.b_.push(e);const n=mr(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function hT(t){return hi(t)&&!mr(t).jo()&&t.b_.length>0}function dT(t){mr(t).start()}async function TD(t){mr(t).E_()}async function SD(t){const e=mr(t);for(const n of t.b_)e.P_(n.mutations)}async function AD(t,e,n){const r=t.b_.shift(),i=$m.from(r,e,n);await fT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Fc(t)}async function kD(t,e){e&&mr(t).h_&&await async function(r,i){if(function(o){return gO(o)&&o!==E.ABORTED}(i.code)){const s=r.b_.shift();mr(r).Yo(),await fT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Fc(r)}}(t,e),hT(t)&&dT(t)}async function t_(t,e){const n=j(t);n.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const r=hi(n);n.C_.add(3),await ba(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await Vc(n)}async function PD(t,e){const n=j(t);e?(n.C_.delete(2),await Vc(n)):e||(n.C_.add(2),await ba(n),n.M_.set("Unknown"))}function As(t){return t.O_||(t.O_=function(n,r,i){const s=j(n);return s.A_(),new dD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:vD.bind(null,t),Io:_D.bind(null,t),a_:wD.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),Km(t)?qm(t):t.M_.set("Unknown")):(await t.O_.stop(),cT(t))})),t.O_}function mr(t){return t.N_||(t.N_=function(n,r,i){const s=j(n);return s.A_(),new pD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:TD.bind(null,t),Io:kD.bind(null,t),T_:SD.bind(null,t),I_:AD.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await Fc(t)):(await t.N_.stop(),t.b_.length>0&&(D("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Br,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Gm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qm(t,e){if(Pn("AsyncQueue",`${e}: ${t}`),Pa(t))return new N(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this.comparator=e?(n,r)=>e(n,r)||M.comparator(n.key,r.key):(n,r)=>M.comparator(n.key,r.key),this.keyedMap=Qs(),this.sortedSet=new me(this.comparator)}static emptySet(e){return new Ki(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ki)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ki;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(){this.B_=new me(M.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):F():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class us{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new us(e,n,Ki.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(){this.k_=void 0,this.listeners=[]}}class CD{constructor(){this.queries=new Ss(e=>LI(e),bc),this.onlineState="Unknown",this.q_=new Set}}async function bD(t,e){const n=j(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new RD),i)try{s.k_=await n.onListen(r)}catch(o){const a=Qm(o,`Initialization of query '${yi(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Q_(n.onlineState),s.k_&&e.K_(s.k_)&&Ym(n)}async function ND(t,e){const n=j(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function xD(t,e){const n=j(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&Ym(n)}function OD(t,e,n){const r=j(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Ym(t){t.q_.forEach(e=>{e.next()})}class DD{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new us(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=us.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e){this.key=e}}class mT{constructor(e){this.key=e}}class LD{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=K(),this.mutatedKeys=K(),this._a=MI(e),this.aa=new Ki(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new n_,i=n?n.aa:this.aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,f)=>{const h=i.get(c),p=Nc(this.query,f)?f:null,y=!!h&&this.mutatedKeys.has(h.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;h&&p?h.data.isEqual(p.data)?y!==v&&(r.track({type:3,doc:p}),w=!0):this.ha(h,p)||(r.track({type:2,doc:p}),w=!0,(l&&this._a(p,l)>0||u&&this._a(p,u)<0)&&(a=!0)):!h&&p?(r.track({type:0,doc:p}),w=!0):h&&!p&&(r.track({type:1,doc:h}),w=!0,(l||u)&&(a=!0)),w&&(p?(o=o.add(p),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((c,f)=>function(p,y){const v=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return v(p)-v(y)}(c.type,f.type)||this._a(c.doc,f.doc)),this.Pa(r),i=i!=null&&i;const a=n&&!i?this.Ia():[],l=this.oa.size===0&&this.current&&!i?1:0,u=l!==this.sa;return this.sa=l,o.length!==0||u?{snapshot:new us(this.query,e.aa,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new n_,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=K(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new mT(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new pT(r))}),n}da(e){this.ia=e.ls,this.oa=K();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return us.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class MD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class VD{constructor(e){this.key=e,this.Ra=!1}}class FD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Ss(a=>LI(a),bc),this.fa=new Map,this.ga=new Set,this.pa=new me(M.comparator),this.ya=new Map,this.wa=new jm,this.Sa={},this.ba=new Map,this.Da=ls.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function $D(t,e){const n=QD(t);let r,i;const s=n.ma.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await oD(n.localStore,sn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await UD(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&aT(n.remoteStore,o)}return i}async function UD(t,e,n,r,i){t.va=(f,h,p)=>async function(v,w,m,d){let g=w.view.ca(m);g.Zi&&(g=await Jv(v.localStore,w.query,!1).then(({documents:P})=>w.view.ca(P,g)));const _=d&&d.targetChanges.get(w.targetId),I=d&&d.targetMismatches.get(w.targetId)!=null,k=w.view.applyChanges(g,v.isPrimaryClient,_,I);return i_(v,w.targetId,k.Ta),k.snapshot}(t,f,h,p);const s=await Jv(t.localStore,e,!0),o=new LD(e,s.ls),a=o.ca(s.documents),l=Ca.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);i_(t,n,u.Ta);const c=new MD(e,n,o);return t.ma.set(e,c),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),u.snapshot}async function zD(t,e){const n=j(t),r=n.ma.get(e),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(s=>!bc(s,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Od(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),lT(n.remoteStore,r.targetId),Dd(n,r.targetId)}).catch(ka)):(Dd(n,r.targetId),await Od(n.localStore,r.targetId,!0))}async function jD(t,e,n){const r=YD(t);try{const i=await function(o,a){const l=j(o),u=Re.now(),c=a.reduce((p,y)=>p.add(y.key),K());let f,h;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let y=Rn(),v=K();return l.ss.getEntries(p,c).next(w=>{y=w,y.forEach((m,d)=>{d.isValidDocument()||(v=v.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,y)).next(w=>{f=w;const m=[];for(const d of a){const g=fO(d,f.get(d.key).overlayedDocument);g!=null&&m.push(new Sr(d.key,g,PI(g.value.mapValue),ht.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,m,a)}).next(w=>{h=w;const m=w.applyToLocalDocumentSet(f,v);return l.documentOverlayCache.saveOverlays(p,w.batchId,m)})}).then(()=>({batchId:h.batchId,changes:FI(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Sa[o.currentUser.toKey()];u||(u=new me(J)),u=u.insert(a,l),o.Sa[o.currentUser.toKey()]=u}(r,i.batchId,n),await Na(r,i.changes),await Fc(r.remoteStore)}catch(i){const s=Qm(i,"Failed to persist write");n.reject(s)}}async function gT(t,e){const n=j(t);try{const r=await rD(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ya.get(s);o&&(ne(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?ne(o.Ra):i.removedDocuments.size>0&&(ne(o.Ra),o.Ra=!1))}),await Na(n,r,e)}catch(r){await ka(r)}}function r_(t,e,n){const r=j(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=j(o);l.onlineState=a;let u=!1;l.queries.forEach((c,f)=>{for(const h of f.listeners)h.Q_(a)&&(u=!0)}),u&&Ym(l)}(r.eventManager,e),i.length&&r.Va.a_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BD(t,e,n){const r=j(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ya.get(e),s=i&&i.key;if(s){let o=new me(M.comparator);o=o.insert(s,Qe.newNoDocument(s,z.min()));const a=K().add(s),l=new Lc(z.min(),new Map,new me(J),o,a);await gT(r,l),r.pa=r.pa.remove(s),r.ya.delete(e),Xm(r)}else await Od(r.localStore,e,!1).then(()=>Dd(r,e,n)).catch(ka)}async function WD(t,e){const n=j(t),r=e.batch.batchId;try{const i=await nD(n.localStore,e);vT(n,r,null),yT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Na(n,i)}catch(i){await ka(i)}}async function HD(t,e,n){const r=j(t);try{const i=await function(o,a){const l=j(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(f=>(ne(f!==null),c=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);vT(r,e,n),yT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Na(r,i)}catch(i){await ka(i)}}function yT(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function vT(t,e,n){const r=j(t);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function Dd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||_T(t,r)})}function _T(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(lT(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Xm(t))}function i_(t,e,n){for(const r of n)r instanceof pT?(t.wa.addReference(r.key,e),qD(t,r)):r instanceof mT?(D("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||_T(t,r.key)):F()}function qD(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(D("SyncEngine","New document in limbo: "+n),t.ga.add(r),Xm(t))}function Xm(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new M(oe.fromString(e)),r=t.Da.next();t.ya.set(r,new VD(n)),t.pa=t.pa.insert(n,r),aT(t.remoteStore,new Yn(sn(Fm(n.path)),r,"TargetPurposeLimboResolution",xm._e))}}async function Na(t,e,n){const r=j(t),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Wm.Qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Va.a_(i),await async function(l,u){const c=j(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>T.forEach(u,h=>T.forEach(h.ki,p=>c.persistence.referenceDelegate.addReference(f,h.targetId,p)).next(()=>T.forEach(h.qi,p=>c.persistence.referenceDelegate.removeReference(f,h.targetId,p)))))}catch(f){if(!Pa(f))throw f;D("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const h=f.targetId;if(!f.fromCache){const p=c.ts.get(h),y=p.snapshotVersion,v=p.withLastLimboFreeSnapshotVersion(y);c.ts=c.ts.insert(h,v)}}}(r.localStore,s))}async function KD(t,e){const n=j(t);if(!n.currentUser.isEqual(e)){D("SyncEngine","User change. New user:",e.toKey());const r=await rT(n.localStore,e);n.currentUser=e,function(s,o){s.ba.forEach(a=>{a.forEach(l=>{l.reject(new N(E.CANCELLED,o))})}),s.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Na(n,r._s)}}function GD(t,e){const n=j(t),r=n.ya.get(e);if(r&&r.Ra)return K().add(r.key);{let i=K();const s=n.fa.get(e);if(!s)return i;for(const o of s){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function QD(t){const e=j(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=gT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=GD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BD.bind(null,e),e.Va.a_=xD.bind(null,e.eventManager),e.Va.Fa=OD.bind(null,e.eventManager),e}function YD(t){const e=j(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=WD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=HD.bind(null,e),e}class s_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Mc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return tD(this.persistence,new ZO,e.initialUser,this.serializer)}createPersistence(e){return new YO(Bm.jr,this.serializer)}createSharedClientState(e){return new lD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class XD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>r_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=KD.bind(null,this.syncEngine),await PD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new CD}()}createDatastore(e){const n=Mc(e.databaseInfo.databaseId),r=function(s){return new hD(s)}(e.databaseInfo);return function(s,o,a,l){return new mD(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new yD(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>r_(this.syncEngine,n,0),function(){return e_.D()?new e_:new uD}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const f=new FD(i,s,o,a,l,u);return c&&(f.Ca=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=j(n);D("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await ba(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):Pn("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ke.UNAUTHENTICATED,this.clientId=SI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{D("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(D("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Br;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Qm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Qf(t,e){t.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await rT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function o_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await t4(t);D("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>t_(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>t_(e.remoteStore,s)),t._onlineComponents=e}function e4(t){return t.name==="FirebaseError"?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function t4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await Qf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!e4(n))throw n;is("Error using user provided cache. Falling back to memory cache: "+n),await Qf(t,new s_)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await Qf(t,new s_);return t._offlineComponents}async function wT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await o_(t,t._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await o_(t,new XD))),t._onlineComponents}function n4(t){return wT(t).then(e=>e.syncEngine)}async function a_(t){const e=await wT(t),n=e.eventManager;return n.onListen=$D.bind(null,e.syncEngine),n.onUnlisten=zD.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ET(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(t,e,n){if(!n)throw new N(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function r4(t,e,n,r){if(e===!0&&r===!0)throw new N(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function u_(t){if(!M.isDocumentKey(t))throw new N(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function c_(t){if(M.isDocumentKey(t))throw new N(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $c(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":F()}function _n(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new N(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$c(t);throw new N(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new N(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new N(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}r4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ET((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new N(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new N(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new N(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Uc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new f_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new N(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new f_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ex;switch(r.type){case"firstParty":return new Ax(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=l_.get(n);r&&(D("ComponentProvider","Removing Datastore"),l_.delete(n),r.terminate())}(this),Promise.resolve()}}function i4(t,e,n,r={}){var i;const s=(t=_n(t,Uc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&is("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ke.MOCK_USER;else{a=bR(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new N(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ke(u)}t._authCredentials=new Ix(new TI(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new di(this.firestore,e,this._query)}}class dt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ur(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dt(this.firestore,e,this._key)}}class ur extends di{constructor(e,n,r){super(e,n,Fm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dt(this.firestore,null,new M(e))}withConverter(e){return new ur(this.firestore,e,this._path)}}function s4(t,e,...n){if(t=pe(t),IT("collection","path",e),t instanceof Uc){const r=oe.fromString(e,...n);return c_(r),new ur(t,null,r)}{if(!(t instanceof dt||t instanceof ur))throw new N(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(oe.fromString(e,...n));return c_(r),new ur(t.firestore,null,r)}}function zc(t,e,...n){if(t=pe(t),arguments.length===1&&(e=SI.newId()),IT("doc","path",e),t instanceof Uc){const r=oe.fromString(e,...n);return u_(r),new dt(t,null,new M(r))}{if(!(t instanceof dt||t instanceof ur))throw new N(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(oe.fromString(e,...n));return u_(r),new dt(t.firestore,t instanceof ur?t.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o4{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new sT(this,"async_queue_retry"),this.iu=()=>{const n=Gf();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=Gf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=Gf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new Br;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Pa(e))throw e;D("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Pn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const i=Gm.createAndSchedule(this,e,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&F()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}function h_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class ei extends Uc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new o4}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||TT(this),this._firestoreClient.terminate()}}function a4(t,e){const n=typeof t=="object"?t:Jp(),r=typeof t=="string"?t:e||"(default)",i=ui(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=RR("firestore");s&&i4(i,...s)}return i}function Jm(t){return t._firestoreClient||TT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function TT(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new Vx(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,ET(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new ZD(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cs(et.fromBase64String(e))}catch(n){throw new N(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new cs(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new N(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new N(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new N(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l4=/^__.*__$/;class u4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ra(e,this.data,n,this.fieldTransforms)}}class ST{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function AT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class eg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new eg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Au(e),i}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Mu(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(AT(this.Iu)&&l4.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class c4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Mc(e)}pu(e,n,r,i=!1){return new eg({Iu:e,methodName:n,gu:r,path:$e.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bc(t){const e=t._freezeSettings(),n=Mc(t._databaseId);return new c4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function kT(t,e,n,r,i,s={}){const o=t.pu(s.merge||s.mergeFields?2:0,e,n,i);ng("Data must be an object, but it was:",o,r);const a=CT(r,o);let l,u;if(s.merge)l=new yt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const f of s.mergeFields){const h=Ld(e,f,n);if(!o.contains(h))throw new N(E.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);NT(c,h)||c.push(h)}l=new yt(c),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new u4(new at(a),l,u)}class Wc extends jc{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wc}}class tg extends jc{_toFieldTransform(e){return new aO(e.path,new ea)}isEqual(e){return e instanceof tg}}function PT(t,e,n,r){const i=t.pu(1,e,n);ng("Data must be an object, but it was:",i,r);const s=[],o=at.empty();fi(r,(l,u)=>{const c=rg(e,l,n);u=pe(u);const f=i.Ru(c);if(u instanceof Wc)s.push(c);else{const h=Oa(u,f);h!=null&&(s.push(c),o.set(c,h))}});const a=new yt(s);return new ST(o,a,i.fieldTransforms)}function RT(t,e,n,r,i,s){const o=t.pu(1,e,n),a=[Ld(e,r,n)],l=[i];if(s.length%2!=0)throw new N(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(Ld(e,s[h])),l.push(s[h+1]);const u=[],c=at.empty();for(let h=a.length-1;h>=0;--h)if(!NT(u,a[h])){const p=a[h];let y=l[h];y=pe(y);const v=o.Ru(p);if(y instanceof Wc)u.push(p);else{const w=Oa(y,v);w!=null&&(u.push(p),c.set(p,w))}}const f=new yt(u);return new ST(c,f,o.fieldTransforms)}function f4(t,e,n,r=!1){return Oa(n,t.pu(r?4:3,e))}function Oa(t,e){if(bT(t=pe(t)))return ng("Unsupported field value:",e,t),CT(t,e);if(t instanceof jc)return function(r,i){if(!AT(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Oa(a,i.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return iO(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Re.fromDate(r);return{timestampValue:Du(i.serializer,s)}}if(r instanceof Re){const s=new Re(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Du(i.serializer,s)}}if(r instanceof Zm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cs)return{bytesValue:XI(i.serializer,r._byteString)};if(r instanceof dt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:zm(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${$c(r)}`)}(t,e)}function CT(t,e){const n={};return AI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fi(t,(r,i)=>{const s=Oa(i,e.Eu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function bT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Re||t instanceof Zm||t instanceof cs||t instanceof dt||t instanceof jc)}function ng(t,e,n){if(!bT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=$c(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function Ld(t,e,n){if((e=pe(e))instanceof xa)return e._internalPath;if(typeof e=="string")return rg(t,e);throw Mu("Field path arguments must be of type string or ",t,!1,void 0,n)}const h4=new RegExp("[~\\*/\\[\\]]");function rg(t,e,n){if(e.search(h4)>=0)throw Mu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xa(...e.split("."))._internalPath}catch{throw Mu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Mu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new N(E.INVALID_ARGUMENT,a+t+l)}function NT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new d4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Hc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class d4 extends xT{data(){return super.data()}}function Hc(t,e){return typeof e=="string"?rg(t,e):e instanceof xa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p4(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new N(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ig{}class OT extends ig{}function m4(t,e,...n){let r=[];e instanceof ig&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof sg).length,a=s.filter(l=>l instanceof qc).length;if(o>1||o>0&&a>0)throw new N(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class qc extends OT{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new qc(e,n,r)}_apply(e){const n=this._parse(e);return DT(e._query,n),new di(e.firestore,e.converter,Pd(e._query,n))}_parse(e){const n=Bc(e.firestore);return function(s,o,a,l,u,c,f){let h;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new N(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){p_(f,c);const p=[];for(const y of f)p.push(d_(l,s,y));h={arrayValue:{values:p}}}else h=d_(l,s,f)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||p_(f,c),h=f4(a,o,f,c==="in"||c==="not-in");return Se.create(u,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function g4(t,e,n){const r=e,i=Hc("where",t);return qc._create(i,r,n)}class sg extends ig{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new sg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ht.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)DT(o,l),o=Pd(o,l)}(e._query,n),new di(e.firestore,e.converter,Pd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class og extends OT{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new og(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new N(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new N(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Zo(s,o)}(e._query,this._field,this._direction);return new di(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Ts(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function y4(t,e="asc"){const n=e,r=Hc("orderBy",t);return og._create(r,n)}function d_(t,e,n){if(typeof(n=pe(n))=="string"){if(n==="")throw new N(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!DI(e)&&n.indexOf("/")!==-1)throw new N(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(oe.fromString(n));if(!M.isDocumentKey(r))throw new N(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Lv(t,new M(r))}if(n instanceof dt)return Lv(t,n._key);throw new N(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$c(n)}.`)}function p_(t,e){if(!Array.isArray(t)||t.length===0)throw new N(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function DT(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new N(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new N(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class v4{convertValue(e,n="none"){switch(Zr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw F()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return fi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Zm(Ie(e.latitude),Ie(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Dm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Yo(e));default:return null}}convertTimestamp(e){const n=pr(e);return new Re(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=oe.fromString(e);ne(nT(r));const i=new Xo(r.get(1),r.get(3)),s=new M(r.popFirst(5));return i.isEqual(n)||Pn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class MT extends xT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ul(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Hc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ul extends MT{data(e={}){return super.data(e)}}class _4{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Xs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ul(this._firestore,this._userDataWriter,r.key,r,new Xs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new N(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Ul(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Xs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Ul(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Xs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:w4(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function w4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}class VT extends v4{constructor(e){super(),this.firestore=e}convertBytes(e){return new cs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new dt(this.firestore,null,n)}}function E4(t,e,n,...r){t=_n(t,dt);const i=_n(t.firestore,ei),s=Bc(i);let o;return o=typeof(e=pe(e))=="string"||e instanceof xa?RT(s,"updateDoc",t._key,e,n,r):PT(s,"updateDoc",t._key,e),Kc(i,[o.toMutation(t._key,ht.exists(!0))])}function I4(t){return Kc(_n(t.firestore,ei),[new Dc(t._key,ht.none())])}function T4(t,e){const n=_n(t.firestore,ei),r=zc(t),i=LT(t.converter,e);return Kc(n,[kT(Bc(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,ht.exists(!1))]).then(()=>r)}function S4(t,...e){var n,r,i;t=pe(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||h_(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(h_(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,u,c;if(t instanceof dt)u=_n(t.firestore,ei),c=Fm(t._key.path),l={next:f=>{e[o]&&e[o](A4(u,t,f))},error:e[o+1],complete:e[o+2]};else{const f=_n(t,di);u=_n(f.firestore,ei),c=f._query;const h=new VT(u);l={next:p=>{e[o]&&e[o](new _4(u,h,f,p))},error:e[o+1],complete:e[o+2]},p4(t._query)}return function(h,p,y,v){const w=new JD(v),m=new DD(p,w,y);return h.asyncQueue.enqueueAndForget(async()=>bD(await a_(h),m)),()=>{w.Na(),h.asyncQueue.enqueueAndForget(async()=>ND(await a_(h),m))}}(Jm(u),c,a,l)}function Kc(t,e){return function(r,i){const s=new Br;return r.asyncQueue.enqueueAndForget(async()=>jD(await n4(r),i,s)),s.promise}(Jm(t),e)}function A4(t,e,n){const r=n.docs.get(e._key),i=new VT(t);return new MT(t,i,e._key,r,new Xs(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k4{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Bc(e)}set(e,n,r){this._verifyNotCommitted();const i=Yf(e,this._firestore),s=LT(i.converter,n,r),o=kT(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,ht.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Yf(e,this._firestore);let o;return o=typeof(n=pe(n))=="string"||n instanceof xa?RT(this._dataReader,"WriteBatch.update",s._key,n,r,i):PT(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,ht.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Yf(e,this._firestore);return this._mutations=this._mutations.concat(new Dc(n._key,ht.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new N(E.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Yf(t,e){if((t=pe(t)).firestore!==e)throw new N(E.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function FT(){return new tg("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P4(t){return Jm(t=_n(t,ei)),new k4(t,e=>Kc(t,e))}(function(e,n=!0){(function(i){Is=i})(vs),an(new Bt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new ei(new Tx(r.getProvider("auth-internal")),new Px(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new N(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xo(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),bt(Nv,"4.4.0",e),bt(Nv,"4.4.0","esm2017")})();const R4=(t,e)=>e.some(n=>t instanceof n);let m_,g_;function C4(){return m_||(m_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function b4(){return g_||(g_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $T=new WeakMap,Md=new WeakMap,UT=new WeakMap,Xf=new WeakMap,ag=new WeakMap;function N4(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(cr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&$T.set(n,t)}).catch(()=>{}),ag.set(e,t),e}function x4(t){if(Md.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Md.set(t,e)}let Vd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Md.get(t);if(e==="objectStoreNames")return t.objectStoreNames||UT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function O4(t){Vd=t(Vd)}function D4(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Jf(this),e,...n);return UT.set(r,e.sort?e.sort():[e]),cr(r)}:b4().includes(t)?function(...e){return t.apply(Jf(this),e),cr($T.get(this))}:function(...e){return cr(t.apply(Jf(this),e))}}function L4(t){return typeof t=="function"?D4(t):(t instanceof IDBTransaction&&x4(t),R4(t,C4())?new Proxy(t,Vd):t)}function cr(t){if(t instanceof IDBRequest)return N4(t);if(Xf.has(t))return Xf.get(t);const e=L4(t);return e!==t&&(Xf.set(t,e),ag.set(e,t)),e}const Jf=t=>ag.get(t);function M4(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=cr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(cr(o.result),l.oldVersion,l.newVersion,cr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const V4=["get","getKey","getAll","getAllKeys","count"],F4=["put","add","delete","clear"],Zf=new Map;function y_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zf.get(e))return Zf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=F4.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||V4.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Zf.set(e,s),s}O4(t=>({...t,get:(e,n,r)=>y_(e,n)||t.get(e,n,r),has:(e,n)=>!!y_(e,n)||t.has(e,n)}));const zT="@firebase/installations",lg="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT=1e4,BT=`w:${lg}`,WT="FIS_v2",$4="https://firebaseinstallations.googleapis.com/v1",U4=60*60*1e3,z4="installations",j4="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B4={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ti=new li(z4,j4,B4);function HT(t){return t instanceof qt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT({projectId:t}){return`${$4}/projects/${t}/installations`}function KT(t){return{token:t.token,requestStatus:2,expiresIn:H4(t.expiresIn),creationTime:Date.now()}}async function GT(t,e){const r=(await e.json()).error;return ti.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function QT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function W4(t,{refreshToken:e}){const n=QT(t);return n.append("Authorization",q4(e)),n}async function YT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function H4(t){return Number(t.replace("s","000"))}function q4(t){return`${WT} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K4({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=qT(t),i=QT(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:WT,appId:t.appId,sdkVersion:BT},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await YT(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:KT(u.authToken)}}else throw await GT("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G4(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q4=/^[cdef][\w-]{21}$/,Fd="";function Y4(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=X4(t);return Q4.test(n)?n:Fd}catch{return Fd}}function X4(t){return G4(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT=new Map;function ZT(t,e){const n=Gc(t);eS(n,e),J4(n,e)}function eS(t,e){const n=JT.get(t);if(n)for(const r of n)r(e)}function J4(t,e){const n=Z4();n&&n.postMessage({key:t,fid:e}),eL()}let Mr=null;function Z4(){return!Mr&&"BroadcastChannel"in self&&(Mr=new BroadcastChannel("[Firebase] FID Change"),Mr.onmessage=t=>{eS(t.data.key,t.data.fid)}),Mr}function eL(){JT.size===0&&Mr&&(Mr.close(),Mr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tL="firebase-installations-database",nL=1,ni="firebase-installations-store";let eh=null;function ug(){return eh||(eh=M4(tL,nL,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ni)}}})),eh}async function Vu(t,e){const n=Gc(t),i=(await ug()).transaction(ni,"readwrite"),s=i.objectStore(ni),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&ZT(t,e.fid),e}async function tS(t){const e=Gc(t),r=(await ug()).transaction(ni,"readwrite");await r.objectStore(ni).delete(e),await r.done}async function Qc(t,e){const n=Gc(t),i=(await ug()).transaction(ni,"readwrite"),s=i.objectStore(ni),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&ZT(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cg(t){let e;const n=await Qc(t.appConfig,r=>{const i=rL(r),s=iL(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Fd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function rL(t){const e=t||{fid:Y4(),registrationStatus:0};return nS(e)}function iL(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ti.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=sL(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:oL(t)}:{installationEntry:e}}async function sL(t,e){try{const n=await K4(t,e);return Vu(t.appConfig,n)}catch(n){throw HT(n)&&n.customData.serverCode===409?await tS(t.appConfig):await Vu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function oL(t){let e=await v_(t.appConfig);for(;e.registrationStatus===1;)await XT(100),e=await v_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await cg(t);return r||n}return e}function v_(t){return Qc(t,e=>{if(!e)throw ti.create("installation-not-found");return nS(e)})}function nS(t){return aL(t)?{fid:t.fid,registrationStatus:0}:t}function aL(t){return t.registrationStatus===1&&t.registrationTime+jT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lL({appConfig:t,heartbeatServiceProvider:e},n){const r=uL(t,n),i=W4(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:BT,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await YT(()=>fetch(r,a));if(l.ok){const u=await l.json();return KT(u)}else throw await GT("Generate Auth Token",l)}function uL(t,{fid:e}){return`${qT(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fg(t,e=!1){let n;const r=await Qc(t.appConfig,s=>{if(!rS(s))throw ti.create("not-registered");const o=s.authToken;if(!e&&hL(o))return s;if(o.requestStatus===1)return n=cL(t,e),s;{if(!navigator.onLine)throw ti.create("app-offline");const a=pL(s);return n=fL(t,a),a}});return n?await n:r.authToken}async function cL(t,e){let n=await __(t.appConfig);for(;n.authToken.requestStatus===1;)await XT(100),n=await __(t.appConfig);const r=n.authToken;return r.requestStatus===0?fg(t,e):r}function __(t){return Qc(t,e=>{if(!rS(e))throw ti.create("not-registered");const n=e.authToken;return mL(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function fL(t,e){try{const n=await lL(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Vu(t.appConfig,r),n}catch(n){if(HT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await tS(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Vu(t.appConfig,r)}throw n}}function rS(t){return t!==void 0&&t.registrationStatus===2}function hL(t){return t.requestStatus===2&&!dL(t)}function dL(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+U4}function pL(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function mL(t){return t.requestStatus===1&&t.requestTime+jT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gL(t){const e=t,{installationEntry:n,registrationPromise:r}=await cg(e);return r?r.catch(console.error):fg(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yL(t,e=!1){const n=t;return await vL(n),(await fg(n,e)).token}async function vL(t){const{registrationPromise:e}=await cg(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _L(t){if(!t||!t.options)throw th("App Configuration");if(!t.name)throw th("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw th(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function th(t){return ti.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS="installations",wL="installations-internal",EL=t=>{const e=t.getProvider("app").getImmediate(),n=_L(e),r=ui(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},IL=t=>{const e=t.getProvider("app").getImmediate(),n=ui(e,iS).getImmediate();return{getId:()=>gL(n),getToken:i=>yL(n,i)}};function TL(){an(new Bt(iS,EL,"PUBLIC")),an(new Bt(wL,IL,"PRIVATE"))}TL();bt(zT,lg);bt(zT,lg,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu="analytics",SL="firebase_id",AL="origin",kL=60*1e3,PL="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",hg="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=new uc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RL={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},_t=new li("analytics","Analytics",RL);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CL(t){if(!t.startsWith(hg)){const e=_t.create("invalid-gtag-resource",{gtagURL:t});return pt.warn(e.message),""}return t}function sS(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function bL(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function NL(t,e){const n=bL("firebase-js-sdk-policy",{createScriptURL:CL}),r=document.createElement("script"),i=`${hg}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function xL(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function OL(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await sS(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){pt.error(a)}t("config",i,s)}async function DL(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await sS(n);for(const l of o){const u=a.find(f=>f.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){pt.error(s)}}function LL(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await DL(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await OL(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){pt.error(a)}}return i}function ML(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=LL(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function VL(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(hg)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FL=30,$L=1e3;class UL{constructor(e={},n=$L){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const oS=new UL;function zL(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function jL(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:zL(r)},s=PL.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw _t.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function BL(t,e=oS,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw _t.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw _t.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new qL;return setTimeout(async()=>{a.abort()},n!==void 0?n:kL),aS({appId:r,apiKey:i,measurementId:s},o,a,e)}async function aS(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=oS){var s;const{appId:o,measurementId:a}=t;try{await WL(r,e)}catch(l){if(a)return pt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await jL(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!HL(u)){if(i.deleteThrottleMetadata(o),a)return pt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?Hy(n,i.intervalMillis,FL):Hy(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,f),pt.debug(`Calling attemptFetch again in ${c} millis`),aS(t,f,r,i)}}function WL(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(_t.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function HL(t){if(!(t instanceof qt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class qL{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function KL(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GL(){if(xw())try{await Ow()}catch(t){return pt.warn(_t.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return pt.warn(_t.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function QL(t,e,n,r,i,s,o){var a;const l=BL(t);l.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&pt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>pt.error(p)),e.push(l);const u=GL().then(p=>{if(p)return r.getId()}),[c,f]=await Promise.all([l,u]);VL(s)||NL(s,c.measurementId),i("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[AL]="firebase",h.update=!0,f!=null&&(h[SL]=f),i("config",c.measurementId,h),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(e){this.app=e}_delete(){return delete mo[this.app.options.appId],Promise.resolve()}}let mo={},w_=[];const E_={};let nh="dataLayer",XL="gtag",I_,lS,T_=!1;function JL(){const t=[];if(Nw()&&t.push("This is a browser extension environment."),DR()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=_t.create("invalid-analytics-context",{errorInfo:e});pt.warn(n.message)}}function ZL(t,e,n){JL();const r=t.options.appId;if(!r)throw _t.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)pt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw _t.create("no-api-key");if(mo[r]!=null)throw _t.create("already-exists",{id:r});if(!T_){xL(nh);const{wrappedGtag:s,gtagCore:o}=ML(mo,w_,E_,nh,XL);lS=s,I_=o,T_=!0}return mo[r]=QL(t,w_,E_,e,I_,nh,n),new YL(t)}function eM(t=Jp()){t=pe(t);const e=ui(t,Fu);return e.isInitialized()?e.getImmediate():tM(t)}function tM(t,e={}){const n=ui(t,Fu);if(n.isInitialized()){const i=n.getImmediate();if(Mo(e,n.getOptions()))return i;throw _t.create("already-initialized")}return n.initialize({options:e})}function uS(t,e,n,r){t=pe(t),KL(lS,mo[t.app.options.appId],e,n,r).catch(i=>pt.error(i))}const S_="@firebase/analytics",A_="0.10.0";function nM(){an(new Bt(Fu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return ZL(r,i,n)},"PUBLIC")),an(new Bt("analytics-internal",t,"PRIVATE")),bt(S_,A_),bt(S_,A_,"esm2017");function t(e){try{const n=e.getProvider(Fu).getImmediate();return{logEvent:(r,i,s)=>uS(n,r,i,s)}}catch(n){throw _t.create("interop-component-reg-failed",{reason:n})}}}nM();const rM={apiKey:"AIzaSyAY_q67aLfftzHWN5h-TLA_nlJMTxP_eeo",authDomain:"todo-list-3ee5b.firebaseapp.com",projectId:"todo-list-3ee5b",storageBucket:"todo-list-3ee5b.appspot.com",messagingSenderId:"771579337317",appId:"1:771579337317:web:75435ac17daa01fba2c48c",measurementId:"G-QGFYKQ5CZK"},dg=Mw(rM),cS=a4(dg),k_=hN(dg),k3=new hn,iM=eM(dg);uS(iM,"page_view");let ks;function sM(t){ks=s4(cS,`todos/${t}/docs`)}function P3(t){return I4(zc(ks,t))}function R3(t){const e=P4(cS);for(const n of t)e.delete(zc(ks,n));return e.commit()}function C3(t){return T4(ks,{value:t,checked:!1,createdAt:FT()})}function b3(t,e){const n=zc(ks,t);return E4(n,{...e,updatedAt:FT()})}function oM(t){return t.docs.map(e=>{const n=e.data(),r=n.createdAt?new Date(n.createdAt.seconds*1e3):new Date,i=r.getFullYear(),s=(r.getMonth()+1).toString().padStart(2,"0"),o=r.getDate().toString().padStart(2,"0");return{...n,id:e.id,date:`${i}-${s}-${o}`}})}function N3(t,e,n){const r=[];t!==void 0?r.push(g4("checked","==",t)):r.push(y4("checked"));const i=m4(ks,...r);return S4(i,{next:s=>{if(e){const o=oM(s);e(o)}},error:n})}var x3={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"]},aM={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},O3={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},D3={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},L3={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},M3={prefix:"fas",iconName:"angles-right",icon:[512,512,[187,"angle-double-right"],"f101","M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]},V3={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},F3={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},$3={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},U3={prefix:"fas",iconName:"angles-left",icon:[512,512,[171,"angle-double-left"],"f100","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"]},z3={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},j3={prefix:"fas",iconName:"angle-left",icon:[320,512,[8249],"f104","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]};function P_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?P_(Object(n),!0).forEach(function(r){Ce(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function $u(t){"@babel/helpers - typeof";return $u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$u(t)}function lM(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function R_(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function uM(t,e,n){return e&&R_(t.prototype,e),n&&R_(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ce(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function pg(t,e){return fM(t)||dM(t,e)||fS(t,e)||mM()}function Da(t){return cM(t)||hM(t)||fS(t)||pM()}function cM(t){if(Array.isArray(t))return $d(t)}function fM(t){if(Array.isArray(t))return t}function hM(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function dM(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function fS(t,e){if(t){if(typeof t=="string")return $d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $d(t,e)}}function $d(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function pM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mM(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var C_=function(){},mg={},hS={},dS=null,pS={mark:C_,measure:C_};try{typeof window<"u"&&(mg=window),typeof document<"u"&&(hS=document),typeof MutationObserver<"u"&&(dS=MutationObserver),typeof performance<"u"&&(pS=performance)}catch{}var gM=mg.navigator||{},b_=gM.userAgent,N_=b_===void 0?"":b_,gr=mg,le=hS,x_=dS,hl=pS;gr.document;var Mn=!!le.documentElement&&!!le.head&&typeof le.addEventListener=="function"&&typeof le.createElement=="function",mS=~N_.indexOf("MSIE")||~N_.indexOf("Trident/"),dl,pl,ml,gl,yl,Cn="___FONT_AWESOME___",Ud=16,gS="fa",yS="svg-inline--fa",ri="data-fa-i2svg",zd="data-fa-pseudo-element",yM="data-fa-pseudo-element-pending",gg="data-prefix",yg="data-icon",O_="fontawesome-i2svg",vM="async",_M=["HTML","HEAD","STYLE","SCRIPT"],vS=function(){try{return!0}catch{return!1}}(),ie="classic",ye="sharp",vg=[ie,ye];function La(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[ie]}})}var ra=La((dl={},Ce(dl,ie,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Ce(dl,ye,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),dl)),ia=La((pl={},Ce(pl,ie,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ce(pl,ye,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),pl)),sa=La((ml={},Ce(ml,ie,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ce(ml,ye,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),ml)),wM=La((gl={},Ce(gl,ie,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ce(gl,ye,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),gl)),EM=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,_S="fa-layers-text",IM=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,TM=La((yl={},Ce(yl,ie,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ce(yl,ye,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),yl)),wS=[1,2,3,4,5,6,7,8,9,10],SM=wS.concat([11,12,13,14,15,16,17,18,19,20]),AM=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Vr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},oa=new Set;Object.keys(ia[ie]).map(oa.add.bind(oa));Object.keys(ia[ye]).map(oa.add.bind(oa));var kM=[].concat(vg,Da(oa),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Vr.GROUP,Vr.SWAP_OPACITY,Vr.PRIMARY,Vr.SECONDARY]).concat(wS.map(function(t){return"".concat(t,"x")})).concat(SM.map(function(t){return"w-".concat(t)})),go=gr.FontAwesomeConfig||{};function PM(t){var e=le.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function RM(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(le&&typeof le.querySelector=="function"){var CM=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];CM.forEach(function(t){var e=pg(t,2),n=e[0],r=e[1],i=RM(PM(n));i!=null&&(go[r]=i)})}var ES={styleDefault:"solid",familyDefault:"classic",cssPrefix:gS,replacementClass:yS,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};go.familyPrefix&&(go.cssPrefix=go.familyPrefix);var fs=C(C({},ES),go);fs.autoReplaceSvg||(fs.observeMutations=!1);var L={};Object.keys(ES).forEach(function(t){Object.defineProperty(L,t,{enumerable:!0,set:function(n){fs[t]=n,yo.forEach(function(r){return r(L)})},get:function(){return fs[t]}})});Object.defineProperty(L,"familyPrefix",{enumerable:!0,set:function(e){fs.cssPrefix=e,yo.forEach(function(n){return n(L)})},get:function(){return fs.cssPrefix}});gr.FontAwesomeConfig=L;var yo=[];function bM(t){return yo.push(t),function(){yo.splice(yo.indexOf(t),1)}}var $n=Ud,Zt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function NM(t){if(!(!t||!Mn)){var e=le.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=le.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return le.head.insertBefore(e,r),t}}var xM="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function aa(){for(var t=12,e="";t-- >0;)e+=xM[Math.random()*62|0];return e}function Ps(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function _g(t){return t.classList?Ps(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function IS(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function OM(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(IS(t[n]),'" ')},"").trim()}function Yc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function wg(t){return t.size!==Zt.size||t.x!==Zt.x||t.y!==Zt.y||t.rotate!==Zt.rotate||t.flipX||t.flipY}function DM(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function LM(t){var e=t.transform,n=t.width,r=n===void 0?Ud:n,i=t.height,s=i===void 0?Ud:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&mS?l+="translate(".concat(e.x/$n-r/2,"em, ").concat(e.y/$n-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/$n,"em), calc(-50% + ").concat(e.y/$n,"em)) "):l+="translate(".concat(e.x/$n,"em, ").concat(e.y/$n,"em) "),l+="scale(".concat(e.size/$n*(e.flipX?-1:1),", ").concat(e.size/$n*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var MM=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function TS(){var t=gS,e=yS,n=L.cssPrefix,r=L.replacementClass,i=MM;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var D_=!1;function rh(){L.autoAddCss&&!D_&&(NM(TS()),D_=!0)}var VM={mixout:function(){return{dom:{css:TS,insertCss:rh}}},hooks:function(){return{beforeDOMElementCreation:function(){rh()},beforeI2svg:function(){rh()}}}},bn=gr||{};bn[Cn]||(bn[Cn]={});bn[Cn].styles||(bn[Cn].styles={});bn[Cn].hooks||(bn[Cn].hooks={});bn[Cn].shims||(bn[Cn].shims=[]);var $t=bn[Cn],SS=[],FM=function t(){le.removeEventListener("DOMContentLoaded",t),Uu=1,SS.map(function(e){return e()})},Uu=!1;Mn&&(Uu=(le.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(le.readyState),Uu||le.addEventListener("DOMContentLoaded",FM));function $M(t){Mn&&(Uu?setTimeout(t,0):SS.push(t))}function Ma(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?IS(t):"<".concat(e," ").concat(OM(r),">").concat(s.map(Ma).join(""),"</").concat(e,">")}function L_(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var UM=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},ih=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?UM(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function zM(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function jd(t){var e=zM(t);return e.length===1?e[0].toString(16):null}function jM(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function M_(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Bd(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=M_(e);typeof $t.hooks.addPack=="function"&&!i?$t.hooks.addPack(t,M_(e)):$t.styles[t]=C(C({},$t.styles[t]||{}),s),t==="fas"&&Bd("fa",e)}var vl,_l,wl,Di=$t.styles,BM=$t.shims,WM=(vl={},Ce(vl,ie,Object.values(sa[ie])),Ce(vl,ye,Object.values(sa[ye])),vl),Eg=null,AS={},kS={},PS={},RS={},CS={},HM=(_l={},Ce(_l,ie,Object.keys(ra[ie])),Ce(_l,ye,Object.keys(ra[ye])),_l);function qM(t){return~kM.indexOf(t)}function KM(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!qM(i)?i:null}var bS=function(){var e=function(s){return ih(Di,function(o,a,l){return o[l]=ih(a,s,{}),o},{})};AS=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),kS=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),CS=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Di||L.autoFetchSvg,r=ih(BM,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});PS=r.names,RS=r.unicodes,Eg=Xc(L.styleDefault,{family:L.familyDefault})};bM(function(t){Eg=Xc(t.styleDefault,{family:L.familyDefault})});bS();function Ig(t,e){return(AS[t]||{})[e]}function GM(t,e){return(kS[t]||{})[e]}function Fr(t,e){return(CS[t]||{})[e]}function NS(t){return PS[t]||{prefix:null,iconName:null}}function QM(t){var e=RS[t],n=Ig("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function yr(){return Eg}var Tg=function(){return{prefix:null,iconName:null,rest:[]}};function Xc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?ie:n,i=ra[r][t],s=ia[r][t]||ia[r][i],o=t in $t.styles?t:null;return s||o||null}var V_=(wl={},Ce(wl,ie,Object.keys(sa[ie])),Ce(wl,ye,Object.keys(sa[ye])),wl);function Jc(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Ce(e,ie,"".concat(L.cssPrefix,"-").concat(ie)),Ce(e,ye,"".concat(L.cssPrefix,"-").concat(ye)),e),o=null,a=ie;(t.includes(s[ie])||t.some(function(u){return V_[ie].includes(u)}))&&(a=ie),(t.includes(s[ye])||t.some(function(u){return V_[ye].includes(u)}))&&(a=ye);var l=t.reduce(function(u,c){var f=KM(L.cssPrefix,c);if(Di[c]?(c=WM[a].includes(c)?wM[a][c]:c,o=c,u.prefix=c):HM[a].indexOf(c)>-1?(o=c,u.prefix=Xc(c,{family:a})):f?u.iconName=f:c!==L.replacementClass&&c!==s[ie]&&c!==s[ye]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=o==="fa"?NS(u.iconName):{},p=Fr(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||p||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!Di.far&&Di.fas&&!L.autoFetchSvg&&(u.prefix="fas")}return u},Tg());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===ye&&(Di.fass||L.autoFetchSvg)&&(l.prefix="fass",l.iconName=Fr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=yr()||"fas"),l}var YM=function(){function t(){lM(this,t),this.definitions={}}return uM(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=C(C({},n.definitions[a]||{}),o[a]),Bd(a,o[a]);var l=sa[ie][a];l&&Bd(l,o[a]),bS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[a][f]=u)}),n[a][l]=u}),n}}]),t}(),F_=[],Li={},Gi={},XM=Object.keys(Gi);function JM(t,e){var n=e.mixoutsTo;return F_=t,Li={},Object.keys(Gi).forEach(function(r){XM.indexOf(r)===-1&&delete Gi[r]}),F_.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),$u(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Li[o]||(Li[o]=[]),Li[o].push(s[o])})}r.provides&&r.provides(Gi)}),n}function Wd(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Li[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function ii(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Li[t]||[];i.forEach(function(s){s.apply(null,n)})}function Nn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Gi[t]?Gi[t].apply(null,e):void 0}function Hd(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||yr();if(e)return e=Fr(n,e)||e,L_(xS.definitions,n,e)||L_($t.styles,n,e)}var xS=new YM,ZM=function(){L.autoReplaceSvg=!1,L.observeMutations=!1,ii("noAuto")},eV={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Mn?(ii("beforeI2svg",e),Nn("pseudoElements2svg",e),Nn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,$M(function(){nV({autoReplaceSvgRoot:n}),ii("watch",e)})}},tV={icon:function(e){if(e===null)return null;if($u(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Fr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Xc(e[0]);return{prefix:r,iconName:Fr(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(L.cssPrefix,"-"))>-1||e.match(EM))){var i=Jc(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||yr(),iconName:Fr(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=yr();return{prefix:s,iconName:Fr(s,e)||e}}}},St={noAuto:ZM,config:L,dom:eV,parse:tV,library:xS,findIconDefinition:Hd,toHtml:Ma},nV=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?le:n;(Object.keys($t.styles).length>0||L.autoFetchSvg)&&Mn&&L.autoReplaceSvg&&St.dom.i2svg({node:r})};function Zc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Ma(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Mn){var r=le.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function rV(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(wg(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Yc(C(C({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function iV(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(L.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(C({},i),{},{id:o}),children:r}]}]}function Sg(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,f=t.extra,h=t.watchable,p=h===void 0?!1:h,y=r.found?r:n,v=y.width,w=y.height,m=i==="fak",d=[L.replacementClass,s?"".concat(L.cssPrefix,"-").concat(s):""].filter(function(W){return f.classes.indexOf(W)===-1}).filter(function(W){return W!==""||!!W}).concat(f.classes).join(" "),g={children:[],attributes:C(C({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:d,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(w)})},_=m&&!~f.classes.indexOf("fa-fw")?{width:"".concat(v/w*16*.0625,"em")}:{};p&&(g.attributes[ri]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||aa())},children:[l]}),delete g.attributes.title);var I=C(C({},g),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:C(C({},_),f.styles)}),k=r.found&&n.found?Nn("generateAbstractMask",I)||{children:[],attributes:{}}:Nn("generateAbstractIcon",I)||{children:[],attributes:{}},P=k.children,O=k.attributes;return I.children=P,I.attributes=O,a?iV(I):rV(I)}function $_(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=C(C(C({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[ri]="");var c=C({},o.styles);wg(i)&&(c.transform=LM({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=Yc(c);f.length>0&&(u.style=f);var h=[];return h.push({tag:"span",attributes:u,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function sV(t){var e=t.content,n=t.title,r=t.extra,i=C(C(C({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Yc(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var sh=$t.styles;function qd(t){var e=t[0],n=t[1],r=t.slice(4),i=pg(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(L.cssPrefix,"-").concat(Vr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(Vr.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(Vr.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var oV={found:!1,width:512,height:512};function aV(t,e){!vS&&!L.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Kd(t,e){var n=e;return e==="fa"&&L.styleDefault!==null&&(e=yr()),new Promise(function(r,i){if(Nn("missingIconAbstract"),n==="fa"){var s=NS(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&sh[e]&&sh[e][t]){var o=sh[e][t];return r(qd(o))}aV(t,e),r(C(C({},oV),{},{icon:L.showMissingIcons&&t?Nn("missingIconAbstract")||{}:{}}))})}var U_=function(){},Gd=L.measurePerformance&&hl&&hl.mark&&hl.measure?hl:{mark:U_,measure:U_},Js='FA "6.5.1"',lV=function(e){return Gd.mark("".concat(Js," ").concat(e," begins")),function(){return OS(e)}},OS=function(e){Gd.mark("".concat(Js," ").concat(e," ends")),Gd.measure("".concat(Js," ").concat(e),"".concat(Js," ").concat(e," begins"),"".concat(Js," ").concat(e," ends"))},Ag={begin:lV,end:OS},zl=function(){};function z_(t){var e=t.getAttribute?t.getAttribute(ri):null;return typeof e=="string"}function uV(t){var e=t.getAttribute?t.getAttribute(gg):null,n=t.getAttribute?t.getAttribute(yg):null;return e&&n}function cV(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(L.replacementClass)}function fV(){if(L.autoReplaceSvg===!0)return jl.replace;var t=jl[L.autoReplaceSvg];return t||jl.replace}function hV(t){return le.createElementNS("http://www.w3.org/2000/svg",t)}function dV(t){return le.createElement(t)}function DS(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?hV:dV:n;if(typeof t=="string")return le.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(DS(o,{ceFn:r}))}),i}function pV(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var jl={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(DS(i),n)}),n.getAttribute(ri)===null&&L.keepOriginalSource){var r=le.createComment(pV(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~_g(n).indexOf(L.replacementClass))return jl.replace(e);var i=new RegExp("".concat(L.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===L.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Ma(a)}).join(`
`);n.setAttribute(ri,""),n.innerHTML=o}};function j_(t){t()}function LS(t,e){var n=typeof e=="function"?e:zl;if(t.length===0)n();else{var r=j_;L.mutateApproach===vM&&(r=gr.requestAnimationFrame||j_),r(function(){var i=fV(),s=Ag.begin("mutate");t.map(i),s(),n()})}}var kg=!1;function MS(){kg=!0}function Qd(){kg=!1}var zu=null;function B_(t){if(x_&&L.observeMutations){var e=t.treeCallback,n=e===void 0?zl:e,r=t.nodeCallback,i=r===void 0?zl:r,s=t.pseudoElementsCallback,o=s===void 0?zl:s,a=t.observeMutationsRoot,l=a===void 0?le:a;zu=new x_(function(u){if(!kg){var c=yr();Ps(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!z_(f.addedNodes[0])&&(L.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&L.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&z_(f.target)&&~AM.indexOf(f.attributeName))if(f.attributeName==="class"&&uV(f.target)){var h=Jc(_g(f.target)),p=h.prefix,y=h.iconName;f.target.setAttribute(gg,p||c),y&&f.target.setAttribute(yg,y)}else cV(f.target)&&i(f.target)})}}),Mn&&zu.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function mV(){zu&&zu.disconnect()}function gV(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function yV(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Jc(_g(t));return i.prefix||(i.prefix=yr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=GM(i.prefix,t.innerText)||Ig(i.prefix,jd(t.innerText))),!i.iconName&&L.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function vV(t){var e=Ps(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return L.autoA11y&&(n?e["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(r||aa()):(e["aria-hidden"]="true",e.focusable="false")),e}function _V(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Zt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function W_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=yV(t),r=n.iconName,i=n.prefix,s=n.rest,o=vV(t),a=Wd("parseNodeAttributes",{},t),l=e.styleParser?gV(t):[];return C({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Zt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var wV=$t.styles;function VS(t){var e=L.autoReplaceSvg==="nest"?W_(t,{styleParser:!1}):W_(t);return~e.extra.classes.indexOf(_S)?Nn("generateLayersText",t,e):Nn("generateSvgReplacementMutation",t,e)}var vr=new Set;vg.map(function(t){vr.add("fa-".concat(t))});Object.keys(ra[ie]).map(vr.add.bind(vr));Object.keys(ra[ye]).map(vr.add.bind(vr));vr=Da(vr);function H_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Mn)return Promise.resolve();var n=le.documentElement.classList,r=function(f){return n.add("".concat(O_,"-").concat(f))},i=function(f){return n.remove("".concat(O_,"-").concat(f))},s=L.autoFetchSvg?vr:vg.map(function(c){return"fa-".concat(c)}).concat(Object.keys(wV));s.includes("fa")||s.push("fa");var o=[".".concat(_S,":not([").concat(ri,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(ri,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Ps(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Ag.begin("onTree"),u=a.reduce(function(c,f){try{var h=VS(f);h&&c.push(h)}catch(p){vS||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(h){LS(h,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(h){l(),f(h)})})}function EV(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;VS(t).then(function(n){n&&LS([n],e)})}function IV(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Hd(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Hd(i||{})),t(r,C(C({},n),{},{mask:i}))}}var TV=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Zt:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,f=n.title,h=f===void 0?null:f,p=n.titleId,y=p===void 0?null:p,v=n.classes,w=v===void 0?[]:v,m=n.attributes,d=m===void 0?{}:m,g=n.styles,_=g===void 0?{}:g;if(e){var I=e.prefix,k=e.iconName,P=e.icon;return Zc(C({type:"icon"},e),function(){return ii("beforeDOMElementCreation",{iconDefinition:e,params:n}),L.autoA11y&&(h?d["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(y||aa()):(d["aria-hidden"]="true",d.focusable="false")),Sg({icons:{main:qd(P),mask:l?qd(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:I,iconName:k,transform:C(C({},Zt),i),symbol:o,title:h,maskId:c,titleId:y,extra:{attributes:d,styles:_,classes:w}})})}},SV={mixout:function(){return{icon:IV(TV)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=H_,n.nodeCallback=EV,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?le:r,s=n.callback,o=s===void 0?function(){}:s;return H_(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,h=r.extra;return new Promise(function(p,y){Promise.all([Kd(i,a),c.iconName?Kd(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var w=pg(v,2),m=w[0],d=w[1];p([n,Sg({icons:{main:m,mask:d},prefix:a,iconName:i,transform:l,symbol:u,maskId:f,title:s,titleId:o,extra:h,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Yc(a);l.length>0&&(i.style=l);var u;return wg(o)&&(u=Nn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},AV={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Zc({type:"layer"},function(){ii("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(L.cssPrefix,"-layers")].concat(Da(s)).join(" ")},children:o}]})}}}},kV={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return Zc({type:"counter",content:n},function(){return ii("beforeDOMElementCreation",{content:n,params:r}),sV({content:n.toString(),title:s,extra:{attributes:u,styles:f,classes:["".concat(L.cssPrefix,"-layers-counter")].concat(Da(a))}})})}}}},PV={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Zt:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,h=r.styles,p=h===void 0?{}:h;return Zc({type:"text",content:n},function(){return ii("beforeDOMElementCreation",{content:n,params:r}),$_({content:n,transform:C(C({},Zt),s),title:a,extra:{attributes:f,styles:p,classes:["".concat(L.cssPrefix,"-layers-text")].concat(Da(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(mS){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return L.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,$_({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},RV=new RegExp('"',"ug"),q_=[1105920,1112319];function CV(t){var e=t.replace(RV,""),n=jM(e,0),r=n>=q_[0]&&n<=q_[1],i=e.length===2?e[0]===e[1]:!1;return{value:jd(i?e[0]:e),isSecondary:r||i}}function K_(t,e){var n="".concat(yM).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Ps(t.children),o=s.filter(function(P){return P.getAttribute(zd)===e})[0],a=gr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(IM),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var f=a.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?ye:ie,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ia[h][l[2].toLowerCase()]:TM[h][u],y=CV(f),v=y.value,w=y.isSecondary,m=l[0].startsWith("FontAwesome"),d=Ig(p,v),g=d;if(m){var _=QM(v);_.iconName&&_.prefix&&(d=_.iconName,p=_.prefix)}if(d&&!w&&(!o||o.getAttribute(gg)!==p||o.getAttribute(yg)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);var I=_V(),k=I.extra;k.attributes[zd]=e,Kd(d,p).then(function(P){var O=Sg(C(C({},I),{},{icons:{main:P,mask:Tg()},prefix:p,iconName:g,extra:k,watchable:!0})),W=le.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(W,t.firstChild):t.appendChild(W),W.outerHTML=O.map(function(U){return Ma(U)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function bV(t){return Promise.all([K_(t,"::before"),K_(t,"::after")])}function NV(t){return t.parentNode!==document.head&&!~_M.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(zd)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function G_(t){if(Mn)return new Promise(function(e,n){var r=Ps(t.querySelectorAll("*")).filter(NV).map(bV),i=Ag.begin("searchPseudoElements");MS(),Promise.all(r).then(function(){i(),Qd(),e()}).catch(function(){i(),Qd(),n()})})}var xV={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=G_,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?le:r;L.searchPseudoElements&&G_(i)}}},Q_=!1,OV={mixout:function(){return{dom:{unwatch:function(){MS(),Q_=!0}}}},hooks:function(){return{bootstrap:function(){B_(Wd("mutationObserverCallbacks",{}))},noAuto:function(){mV()},watch:function(n){var r=n.observeMutationsRoot;Q_?Qd():B_(Wd("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Y_=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},DV={mixout:function(){return{parse:{transform:function(n){return Y_(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Y_(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:f,path:h};return{tag:"g",attributes:C({},p.outer),children:[{tag:"g",attributes:C({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:C(C({},r.icon.attributes),p.path)}]}]}}}},oh={x:0,y:0,width:"100%",height:"100%"};function X_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function LV(t){return t.tag==="g"?t.children:[t]}var MV={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Jc(i.split(" ").map(function(o){return o.trim()})):Tg();return s.prefix||(s.prefix=yr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,f=o.width,h=o.icon,p=DM({transform:l,containerWidth:f,iconWidth:u}),y={tag:"rect",attributes:C(C({},oh),{},{fill:"white"})},v=c.children?{children:c.children.map(X_)}:{},w={tag:"g",attributes:C({},p.inner),children:[X_(C({tag:c.tag,attributes:C(C({},c.attributes),p.path)},v))]},m={tag:"g",attributes:C({},p.outer),children:[w]},d="mask-".concat(a||aa()),g="clip-".concat(a||aa()),_={tag:"mask",attributes:C(C({},oh),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,m]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:LV(h)},_]};return r.push(I,{tag:"rect",attributes:C({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(d,")")},oh)}),{children:r,attributes:i}}}},VV={provides:function(e){var n=!1;gr.matchMedia&&(n=gr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:C(C({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=C(C({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:C(C({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:C(C({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:C(C({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:C(C({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:C(C({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:C(C({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:C(C({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},FV={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},$V=[VM,SV,AV,kV,PV,xV,OV,DV,MV,VV,FV];JM($V,{mixoutsTo:St});St.noAuto;St.config;St.library;St.dom;var Yd=St.parse;St.findIconDefinition;St.toHtml;var UV=St.icon;St.layer;St.text;St.counter;var FS={exports:{}},zV="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",jV=zV,BV=jV;function $S(){}function US(){}US.resetWarningCache=$S;var WV=function(){function t(r,i,s,o,a,l){if(l!==BV){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:US,resetWarningCache:$S};return n.PropTypes=n,n};FS.exports=WV();var HV=FS.exports;const q=t0(HV);function J_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Xn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?J_(Object(n),!0).forEach(function(r){Mi(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):J_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ju(t){"@babel/helpers - typeof";return ju=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ju(t)}function Mi(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function qV(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function KV(t,e){if(t==null)return{};var n=qV(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Xd(t){return GV(t)||QV(t)||YV(t)||XV()}function GV(t){if(Array.isArray(t))return Jd(t)}function QV(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function YV(t,e){if(t){if(typeof t=="string")return Jd(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Jd(t,e)}}function Jd(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function XV(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function JV(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,f=t.pulse,h=t.fixedWidth,p=t.inverse,y=t.border,v=t.listItem,w=t.flip,m=t.size,d=t.rotation,g=t.pull,_=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":h,"fa-inverse":p,"fa-border":y,"fa-li":v,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},Mi(e,"fa-".concat(m),typeof m<"u"&&m!==null),Mi(e,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),Mi(e,"fa-pull-".concat(g),typeof g<"u"&&g!==null),Mi(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(_).map(function(I){return _[I]?I:null}).filter(function(I){return I})}function ZV(t){return t=t-0,t===t}function zS(t){return ZV(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var e3=["style"];function t3(t){return t.charAt(0).toUpperCase()+t.slice(1)}function n3(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=zS(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[t3(i)]=s:e[i]=s,e},{})}function jS(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return jS(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=n3(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[zS(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=KV(n,e3);return i.attrs.style=Xn(Xn({},i.attrs.style),o),t.apply(void 0,[e.tag,Xn(Xn({},i.attrs),a)].concat(Xd(r)))}var BS=!1;try{BS=!0}catch{}function r3(){if(!BS&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Z_(t){if(t&&ju(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Yd.icon)return Yd.icon(t);if(t===null)return null;if(t&&ju(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function ah(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Mi({},t,e):{}}var Va=Wu.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=Z_(n),c=ah("classes",[].concat(Xd(JV(t)),Xd(s.split(" ")))),f=ah("transform",typeof t.transform=="string"?Yd.transform(t.transform):t.transform),h=ah("mask",Z_(r)),p=UV(u,Xn(Xn(Xn(Xn({},c),f),h),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!p)return r3("Could not find icon",u),null;var y=p.abstract,v={ref:e};return Object.keys(t).forEach(function(w){Va.defaultProps.hasOwnProperty(w)||(v[w]=t[w])}),i3(y[0],v)});Va.displayName="FontAwesomeIcon";Va.propTypes={beat:q.bool,border:q.bool,beatFade:q.bool,bounce:q.bool,className:q.string,fade:q.bool,flash:q.bool,mask:q.oneOfType([q.object,q.array,q.string]),maskId:q.string,fixedWidth:q.bool,inverse:q.bool,flip:q.oneOf([!0,!1,"horizontal","vertical","both"]),icon:q.oneOfType([q.object,q.array,q.string]),listItem:q.bool,pull:q.oneOf(["right","left"]),pulse:q.bool,rotation:q.oneOf([0,90,180,270]),shake:q.bool,size:q.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:q.bool,spinPulse:q.bool,spinReverse:q.bool,symbol:q.oneOfType([q.bool,q.string]),title:q.string,titleId:q.string,transform:q.oneOfType([q.string,q.object]),swapOpacity:q.bool};Va.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var i3=jS.bind(null,Wu.createElement);const s3="modulepreload",o3=function(t){return"/"+t},e0={},pi=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){const s=document.getElementsByTagName("link");i=Promise.all(n.map(o=>{if(o=o3(o),o in e0)return;e0[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let f=s.length-1;f>=0;f--){const h=s[f];if(h.href===o&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":s3,a||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),a)return new Promise((f,h)=>{c.addEventListener("load",f),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})}))}return i.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},a3=A.lazy(()=>pi(()=>import("./Home-T4cE2s7A.js"),__vite__mapDeps([0,1]))),l3=A.lazy(()=>pi(()=>import("./About-8V2ZVoa0.js"),__vite__mapDeps([2,3]))),u3=A.lazy(()=>pi(()=>import("./Auth-XdMjO_b1.js"),__vite__mapDeps([4,5]))),c3=A.lazy(()=>pi(()=>import("./Login--B13M6zn.js"),__vite__mapDeps([6,7,8,9]))),f3=A.lazy(()=>pi(()=>import("./SignUp-cUlEDyTX.js"),__vite__mapDeps([10,7,8,9]))),h3=A.lazy(()=>pi(()=>import("./ResetPassword-zIcU13cM.js"),__vite__mapDeps([11,7,8]))),d3=A.lazy(()=>pi(()=>import("./Todo-O59MepCZ.js"),__vite__mapDeps([12,7,13]))),p3=({isAuthenticated:t})=>{const e=[{path:"/",Component:a3},{path:"/about",Component:l3},{path:"*",element:ce.jsx(sR,{to:t?"/tasks":"/auth/login"})}];return t?e.push({path:"/tasks",Component:d3}):e.push({path:"/auth",Component:u3,children:[{path:"login",Component:c3},{path:"signup",Component:f3},{path:"reset-password",Component:h3}]}),KP(e)};function m3({isAuthenticated:t}){const e=[{label:"Home",link:"/"},{label:"Todo",link:"/tasks",auth:!0},{label:"Log In",link:"/auth/login",auth:!1},{label:"About",link:"/about"}];return ce.jsx("nav",{children:ce.jsx("ul",{children:e.filter(n=>n.auth===void 0||n.auth===t).map(n=>ce.jsx("li",{children:ce.jsx(yR,{to:n.link,children:n.label})},n.label))})})}function g3(){const[t,e]=A.useState(),[n,r]=A.useState("");A.useEffect(()=>{const s=eb(k_,o=>{e(!!o),o?(sM(o.uid),r(o.email??"Anonymous")):r("")});return()=>s()},[]);const i=()=>{tb(k_).then(()=>UP("/auth/login")).catch(s=>{console.log(s)})};return ce.jsx(ce.Fragment,{children:t!==void 0?ce.jsxs(ce.Fragment,{children:[ce.jsxs("header",{children:[ce.jsx(m3,{isAuthenticated:t}),t?ce.jsxs("div",{className:"user-email",children:[ce.jsx("span",{children:n}),ce.jsx("button",{type:"button",className:"btn btn-sign-out",onClick:i,title:"Sign Out",children:ce.jsx(Va,{icon:aM})})]}):""]}),ce.jsx("main",{children:ce.jsx(A.Suspense,{fallback:ce.jsx("div",{className:"message",children:"Loading..."}),children:ce.jsx(p3,{isAuthenticated:t})})})]}):ce.jsx("div",{className:"message",children:"Loading..."})})}lh.createRoot(document.getElementById("root")).render(ce.jsx(Wu.StrictMode,{children:ce.jsx(dR,{children:ce.jsx(g3,{})})}));export{R3 as A,t0 as B,Va as F,gR as L,y3 as O,Wu as R,k_ as a,D3 as b,w3 as c,I3 as d,v3 as e,V3 as f,k3 as g,ys as h,_3 as i,ce as j,O3 as k,z3 as l,$3 as m,U3 as n,j3 as o,L3 as p,M3 as q,A as r,E3 as s,b3 as t,Ew as u,P3 as v,N3 as w,F3 as x,x3 as y,C3 as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Home-T4cE2s7A.js","assets/Home-VZUa_-ft.css","assets/About-8V2ZVoa0.js","assets/About-7nqP-fEW.css","assets/Auth-XdMjO_b1.js","assets/Auth-HL6uKphG.css","assets/Login--B13M6zn.js","assets/index.esm-Th-CwHT1.js","assets/SignupSchema-AD2pP8Tl.js","assets/AlternativeAuth-qHr_5AGJ.js","assets/SignUp-cUlEDyTX.js","assets/ResetPassword-zIcU13cM.js","assets/Todo-O59MepCZ.js","assets/Todo-7LIQu-eH.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}