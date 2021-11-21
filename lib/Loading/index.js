/*! For license information please see index.js.LICENSE.txt */
var e={9899:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);function o(e){var t=e.width,r=e.height;return n.createElement("div",{className:"w-loading-component","data-width":t||"100%","data-height":r})}},2391:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);function o(e){return n.createElement("div",{className:"w-loading-list","data-height":e.height},n.createElement("div",null),n.createElement("div",null),n.createElement("div",null))}},8976:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);const o=function(e){var t=e.width,r=e.height,o=e.children,a=e.maxWidth;return n.createElement("div",{className:"w-loading-modal"},n.createElement("div",{className:"w-dialog",style:{width:t,maxWidth:a,height:r}},o))}},3491:(e,t,r)=>{e.exports=r.p+"image/logo.svg"},7418:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var u,i,l=o(e),c=1;c<arguments.length;c++){for(var s in u=Object(arguments[c]))r.call(u,s)&&(l[s]=u[s]);if(t){i=t(u);for(var f=0;f<i.length;f++)n.call(u,i[f])&&(l[i[f]]=u[i[f]])}}return l}},2408:(e,t,r)=>{var n=r(7418),o=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var u=60109,i=60110,l=60112;t.Suspense=60113;var c=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),a=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),u=f("react.provider"),i=f("react.context"),l=f("react.forward_ref"),t.Suspense=f("react.suspense"),c=f("react.memo"),s=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function v(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}function h(){}function g(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=v.prototype;var b=g.prototype=new h;b.constructor=g,n(b,v.prototype),b.isPureReactComponent=!0;var w={current:null},_=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var n,a={},u=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(u=""+t.key),t)_.call(t,n)&&!E.hasOwnProperty(n)&&(a[n]=t[n]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var c=Array(l),s=0;s<l;s++)c[s]=arguments[s+2];a.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===a[n]&&(a[n]=l[n]);return{$$typeof:o,type:e,key:u,ref:i,props:a,_owner:w.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var S=/\/+/g;function $(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function k(e,t,r,n,u){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case a:l=!0}}if(l)return u=u(l=e),e=""===n?"."+$(l,0):n,Array.isArray(u)?(r="",null!=e&&(r=e.replace(S,"$&/")+"/"),k(u,t,r,"",(function(e){return e}))):null!=u&&(O(u)&&(u=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,r+(!u.key||l&&l.key===u.key?"":(""+u.key).replace(S,"$&/")+"/")+e)),t.push(u)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var s=n+$(i=e[c],c);l+=k(i,t,r,s,u)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),c=0;!(i=e.next()).done;)l+=k(i=i.value,t,r,s=n+$(i,c++),u);else if("object"===i)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function C(e,t,r){if(null==e)return e;var n=[],o=0;return k(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function R(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function x(){var e=P.current;if(null===e)throw Error(d(321));return e}var N={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:C,forEach:function(e,t,r){C(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(d(143));return e}},t.Component=v,t.PureComponent=g,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,t.cloneElement=function(e,t,r){if(null==e)throw Error(d(267,e));var a=n({},e.props),u=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=w.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)_.call(t,s)&&!E.hasOwnProperty(s)&&(a[s]=void 0===t[s]&&void 0!==c?c[s]:t[s])}var s=arguments.length-2;if(1===s)a.children=r;else if(1<s){c=Array(s);for(var f=0;f<s;f++)c[f]=arguments[f+2];a.children=c}return{$$typeof:o,type:e.type,key:u,ref:i,props:a,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=O,t.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:c,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return x().useCallback(e,t)},t.useContext=function(e,t){return x().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return x().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return x().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return x().useLayoutEffect(e,t)},t.useMemo=function(e,t){return x().useMemo(e,t)},t.useReducer=function(e,t,r){return x().useReducer(e,t,r)},t.useRef=function(e){return x().useRef(e)},t.useState=function(e){return x().useState(e)},t.version="17.0.2"},7294:(e,t,r)=>{e.exports=r(2408)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;if("string"==typeof import.meta.url&&(e=import.meta.url),!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../"})();var n={};(()=>{r.d(n,{gb:()=>l,y2:()=>c,XG:()=>s,NF:()=>a.Z,DX:()=>u.Z,RZ:()=>i.Z});var e=r(7294),t=r(3491),o=r.n(t),a=r(9899),u=r(2391),i=r(8976);function l(t){return e.createElement("div",{className:"w-loading"},e.createElement("div",{className:"w-loading-eclipse ".concat(t.small?"small":"")},e.createElement("div",null)))}function c(){return e.createElement("div",{className:"w-loading-ball"},e.createElement("div",{className:"w-loading-ball-logo"},e.createElement("img",{src:o(),alt:"manage time"})),e.createElement("div",{className:"w-loading-ball-shadow"}))}function s(){return e.createElement("div",{className:"w-loading-typing"},e.createElement("div",null),e.createElement("div",null),e.createElement("div",null))}})();var o=n.gb,a=n.y2,u=n.NF,i=n.DX,l=n.RZ,c=n.XG;export{o as Loading,a as LoadingBall,u as LoadingComponent,i as LoadingList,l as LoadingModal,c as LoadingSomeoneTyping};