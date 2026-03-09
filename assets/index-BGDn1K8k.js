var Cm=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports);var IS=Cm((kS,_m)=>{(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();function tc(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const He={},po=[],An=()=>{},bh=()=>!1,Ba=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Cl=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,nc=e=>e.startsWith("onUpdate:"),xt=Object.assign,xh=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Em=Object.prototype.hasOwnProperty,Ve=(e,n)=>Em.call(e,n),ke=Array.isArray,vo=e=>La(e)==="[object Map]",wh=e=>La(e)==="[object Set]",Ne=e=>typeof e=="function",ut=e=>typeof e=="string",Rr=e=>typeof e=="symbol",Ke=e=>e!==null&&typeof e=="object",_h=e=>(Ke(e)||Ne(e))&&Ne(e.then)&&Ne(e.catch),Ch=Object.prototype.toString,La=e=>Ch.call(e),Rm=e=>La(e).slice(8,-1),Eh=e=>La(e)==="[object Object]",Wa=e=>ut(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Xo=tc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Va=e=>{const n=Object.create(null);return(t=>n[t]||(n[t]=e(t)))},Sm=/-(\w)/g,Im=(e,n)=>n?n.toUpperCase():"",wr=Va(e=>e.replace(Sm,Im)),Am=/\B([A-Z])/g,$r=Va(e=>e.replace(Am,"-$1").toLowerCase()),Rh=Va(e=>e.charAt(0).toUpperCase()+e.slice(1)),ms=Va(e=>e?`on${Rh(e)}`:""),km=e=>`${e==="modelValue"||e==="model-value"?"model":e}Modifiers${e==="model"?"$":""}`,Jn=(e,n)=>!Object.is(e,n),Qi=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},Sh=(e,n,t,r=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:r,value:t})},rc=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let El;const Ih=()=>El||(El=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Dm(e){return e!=="PROGRESS"&&!e.includes("-")}function Ua(e){if(ke(e)){const n={};for(let t=0;t<e.length;t++){const r=e[t],o=ut(r)?Pm(r):Ua(r);if(o)for(const i in o)n[i]=o[i]}return n}else if(ut(e)||Ke(e))return e}const Tm=/;(?![^(]*\))/g,Nm=/:([^]+)/,Fm=/\/\*[^]*?\*\//g;function Pm(e){const n={};return e.replace(Fm,"").split(Tm).forEach(t=>{if(t){const r=t.split(Nm);r.length>1&&(n[r[0].trim()]=r[1].trim())}}),n}function Ur(e){let n="";if(ut(e))n=e;else if(ke(e))for(let t=0;t<e.length;t++){const r=Ur(e[t]);r&&(n+=r+" ")}else if(Ke(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const Mm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Om=tc(Mm);function Ah(e){return!!e||e===""}function Bm(e,n){return n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="form"||n==="list"&&e==="INPUT"||n==="type"&&e==="TEXTAREA"||(n==="width"||n==="height")&&(e==="IMG"||e==="VIDEO"||e==="CANVAS"||e==="SOURCE")||n==="sandbox"&&e==="IFRAME"}const kh=e=>!!(e&&e.__v_isRef===!0),So=e=>{switch(typeof e){case"string":return e;case"object":if(e){if(kh(e))return So(e.value);if(ke(e)||e.toString===Ch||!Ne(e.toString))return JSON.stringify(e,Dh,2)}default:return e==null?"":String(e)}},Dh=(e,n)=>kh(n)?Dh(e,n.value):vo(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[r,o],i)=>(t[gs(r,i)+" =>"]=o,t),{})}:wh(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>gs(t))}:Rr(n)?gs(n):Ke(n)&&!ke(n)&&!Eh(n)?String(n):n,gs=(e,n="")=>{var t;return Rr(e)?`Symbol(${(t=e.description)!==null&&t!==void 0?t:n})`:e};function Lm(e){const n=e.slice(),t=[0];let r,o,i,a,s;const u=e.length;for(r=0;r<u;r++){const c=e[r];if(c!==0){if(o=t[t.length-1],e[o]<c){n[r]=o,t.push(r);continue}for(i=0,a=t.length-1;i<a;)s=i+a>>1,e[t[s]]<c?i=s+1:a=s;c<e[t[i]]&&(i>0&&(n[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=n[a];return t}const Qt={Mutable:1,Dirty:16,Pending:32},uu=[];let oc=0,Qn,Zi=0,Pi=0,aa=0;function it(e){try{return Qn}finally{Qn=e}}function Th(){++oc}function Nh(){!--oc&&aa&&Oh()}function Io(e,n){const t=n.depsTail;if(t!==void 0&&t.dep===e)return;const r=t!==void 0?t.nextDep:n.deps;if(r!==void 0&&r.dep===e){r.version=Zi,n.depsTail=r;return}const o=e.subsTail;if(o!==void 0&&o.version===Zi&&o.sub===n)return;const i=n.depsTail=e.subsTail={version:Zi,dep:e,sub:n,prevDep:t,nextDep:r,prevSub:o,nextSub:void 0};r!==void 0&&(r.prevDep=i),t!==void 0?t.nextDep=i:n.deps=i,o!==void 0?o.nextSub=i:e.subs=i}function Ao(e,n=e.sub){const t=e.dep,r=e.prevDep,o=e.nextDep,i=e.nextSub,a=e.prevSub;if(o!==void 0?o.prevDep=r:n.depsTail=r,r!==void 0?r.nextDep=o:n.deps=o,i!==void 0?i.prevSub=a:t.subsTail=a,a!==void 0)a.nextSub=i;else if((t.subs=i)===void 0){let s=t.deps;if(s!==void 0){do s=Ao(s,t);while(s!==void 0);t.flags|=16}}return o}function Fh(e){let n=e.nextSub,t;e:do{const r=e.sub;let o=r.flags;if(o&3&&(o&60?o&12?o&4?!(o&48)&&Wm(e,r)?(r.flags=o|40,o&=1):o=0:r.flags=o&-9|32:o=0:r.flags=o|32,o&2&&(uu[aa++]=r),o&1)){const i=r.subs;if(i!==void 0){e=i,i.nextSub!==void 0&&(t={value:n,prev:t},n=e.nextSub);continue}}if((e=n)!==void 0){n=e.nextSub;continue}for(;t!==void 0;)if(e=t.value,t=t.prev,e!==void 0){n=e.nextSub;continue e}break}while(!0)}function Ph(e){return++Zi,e.depsTail=void 0,e.flags=e.flags&-57|4,it(e)}function Mh(e,n){Qn=n;const t=e.depsTail;let r=t!==void 0?t.nextDep:e.deps;for(;r!==void 0;)r=Ao(r,e);e.flags&=-5}function Oh(){for(;Pi<aa;){const e=uu[Pi];uu[Pi++]=void 0,e.notify()}Pi=0,aa=0}function cu(e,n){let t,r=0;e:do{const o=e.dep,i=o.flags;let a=!1;if(n.flags&16)a=!0;else if((i&17)===17){if(o.update()){const s=o.subs;s.nextSub!==void 0&&ii(s),a=!0}}else if((i&33)===33){(e.nextSub!==void 0||e.prevSub!==void 0)&&(t={value:e,prev:t}),e=o.deps,n=o,++r;continue}if(!a&&e.nextDep!==void 0){e=e.nextDep;continue}for(;r;){--r;const s=n.subs,u=s.nextSub!==void 0;if(u?(e=t.value,t=t.prev):e=s,a){if(n.update()){u&&ii(s),n=e.sub;continue}}else n.flags&=-33;if(n=e.sub,e.nextDep!==void 0){e=e.nextDep;continue e}a=!1}return a}while(!0)}function ii(e){do{const n=e.sub,t=e.nextSub,r=n.flags;(r&48)===32&&(n.flags=r|16),e=t}while(e!==void 0)}function Wm(e,n){let t=n.depsTail;for(;t!==void 0;){if(t===e)return!0;t=t.prevDep}return!1}var Vm=class{constructor(e,n){this.map=e,this.key=n,this._subs=void 0,this.subsTail=void 0,this.flags=0}get subs(){return this._subs}set subs(e){this._subs=e,e===void 0&&this.map.delete(this.key)}};const sa=new WeakMap,zr=Symbol(""),lu=Symbol(""),ai=Symbol("");function _t(e,n,t){if(Qn!==void 0){let r=sa.get(e);r||sa.set(e,r=new Map);let o=r.get(t);o||r.set(t,o=new Vm(r,t)),Io(o,Qn)}}function qn(e,n,t,r,o,i){const a=sa.get(e);if(!a)return;const s=u=>{u!==void 0&&u.subs!==void 0&&(Fh(u.subs),ii(u.subs))};if(Th(),n==="clear")a.forEach(s);else{const u=ke(e),c=u&&Wa(t);if(u&&t==="length"){const l=Number(r);a.forEach((f,h)=>{(h==="length"||h===ai||!Rr(h)&&h>=l)&&s(f)})}else switch((t!==void 0||a.has(void 0))&&s(a.get(t)),c&&s(a.get(ai)),n){case"add":u?c&&s(a.get("length")):(s(a.get(zr)),vo(e)&&s(a.get(lu)));break;case"delete":u||(s(a.get(zr)),vo(e)&&s(a.get(lu)));break;case"set":vo(e)&&s(a.get(zr));break}}Nh()}function Um(e,n){const t=sa.get(e);return t&&t.get(n)}function to(e){const n=Le(e);return n===e?n:(_t(n,"iterate",ai),Yt(e)?n:n.map(Fn))}function za(e){return _t(e=Le(e),"iterate",ai),e}function fr(e,n){return Zn(e)?ko(kn(e)?Fn(n):n):Fn(n)}const zm={__proto__:null,[Symbol.iterator](){return ys(this,Symbol.iterator,e=>fr(this,e))},concat(...e){return to(this).concat(...e.map(n=>ke(n)?to(n):n))},entries(){return ys(this,"entries",e=>(e[1]=fr(this,e[1]),e))},every(e,n){return Wn(this,"every",e,n,void 0,arguments)},filter(e,n){return Wn(this,"filter",e,n,t=>t.map(r=>fr(this,r)),arguments)},find(e,n){return Wn(this,"find",e,n,t=>fr(this,t),arguments)},findIndex(e,n){return Wn(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return Wn(this,"findLast",e,n,t=>fr(this,t),arguments)},findLastIndex(e,n){return Wn(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return Wn(this,"forEach",e,n,void 0,arguments)},includes(...e){return bs(this,"includes",e)},indexOf(...e){return bs(this,"indexOf",e)},join(e){return to(this).join(e)},lastIndexOf(...e){return bs(this,"lastIndexOf",e)},map(e,n){return Wn(this,"map",e,n,void 0,arguments)},pop(){return Vo(this,"pop")},push(...e){return Vo(this,"push",e)},reduce(e,...n){return Rl(this,"reduce",e,n)},reduceRight(e,...n){return Rl(this,"reduceRight",e,n)},shift(){return Vo(this,"shift")},some(e,n){return Wn(this,"some",e,n,void 0,arguments)},splice(...e){return Vo(this,"splice",e)},toReversed(){return to(this).toReversed()},toSorted(e){return to(this).toSorted(e)},toSpliced(...e){return to(this).toSpliced(...e)},unshift(...e){return Vo(this,"unshift",e)},values(){return ys(this,"values",e=>fr(this,e))}};function ys(e,n,t){const r=za(e),o=r[n]();return r!==e&&!Yt(e)&&(o._next=o.next,o.next=()=>{const i=o._next();return i.done||(i.value=t(i.value)),i}),o}const Gm=Array.prototype;function Wn(e,n,t,r,o,i){const a=za(e),s=a!==e&&!Yt(e),u=a[n];if(u!==Gm[n]){const f=u.apply(e,i);return s?Fn(f):f}let c=t;a!==e&&(s?c=function(f,h){return t.call(this,fr(e,f),h,e)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,e)}));const l=u.call(a,c,r);return s&&o?o(l):l}function Rl(e,n,t,r){const o=za(e);let i=t;return o!==e&&(Yt(e)?t.length>3&&(i=function(a,s,u){return t.call(this,a,s,u,e)}):i=function(a,s,u){return t.call(this,a,fr(e,s),u,e)}),o[n](i,...r)}function bs(e,n,t){const r=Le(e);_t(r,"iterate",ai);const o=r[n](...t);return(o===-1||o===!1)&&Ga(t[0])?(t[0]=Le(t[0]),r[n](...t)):o}function Vo(e,n,t=[]){Th();const r=it(),o=Le(e)[n].apply(e,t);return it(r),Nh(),o}const Hm=tc("__proto__,__v_isRef,__isVue"),Bh=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Rr));function jm(e){Rr(e)||(e=String(e));const n=Le(this);return _t(n,"has",e),n.hasOwnProperty(e)}var Lh=class{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,t){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return o;if(n==="__v_raw")return t===(r?o?tg:zh:o?Uh:Vh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(t)?e:void 0;const i=ke(e);if(!r){let u;if(i&&(u=zm[n]))return u;if(n==="hasOwnProperty")return jm}const a=$e(e),s=Reflect.get(e,n,a?e:t);if(a&&n!=="value"||(Rr(n)?Bh.has(n):Hm(n))||(r||_t(e,"get",n),o))return s;if($e(s)){const u=i&&Wa(n)?s:s.value;return r&&Ke(u)?hu(u):u}return Ke(s)?r?hu(s):wi(s):s}},Wh=class extends Lh{constructor(e=!1){super(!1,e)}set(e,n,t,r){let o=e[n];const i=ke(e)&&Wa(n);if(!this._isShallow){const u=Zn(o);if(!Yt(t)&&!Zn(t)&&(o=Le(o),t=Le(t)),!i&&$e(o)&&!$e(t))return u||(o.value=t),!0}const a=i?Number(n)<e.length:Ve(e,n),s=Reflect.set(e,n,t,$e(e)?e:r);return e===Le(r)&&(a?Jn(t,o)&&qn(e,"set",n,t):qn(e,"add",n,t)),s}deleteProperty(e,n){const t=Ve(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&t&&qn(e,"delete",n,void 0),r}has(e,n){const t=Reflect.has(e,n);return(!Rr(n)||!Bh.has(n))&&_t(e,"has",n),t}ownKeys(e){return _t(e,"iterate",ke(e)?"length":zr),Reflect.ownKeys(e)}},qm=class extends Lh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}};const Km=new Wh,$m=new qm,Xm=new Wh(!0),fu=e=>e,Mi=e=>Reflect.getPrototypeOf(e);function Ym(e,n,t){return function(...r){const o=this.__v_raw,i=Le(o),a=vo(i),s=e==="entries"||e===Symbol.iterator&&a,u=e==="keys"&&a,c=o[e](...r),l=t?fu:n?ko:Fn;return!n&&_t(i,"iterate",u?lu:zr),xt(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:s?[l(f[0]),l(f[1])]:l(f),done:h}}})}}function Oi(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function Jm(e,n){const t={get(r){const o=this.__v_raw,i=Le(o),a=Le(r);e||(Jn(r,a)&&_t(i,"get",r),_t(i,"get",a));const{has:s}=Mi(i),u=n?fu:e?ko:Fn;if(s.call(i,r))return u(o.get(r));if(s.call(i,a))return u(o.get(a));o!==i&&o.get(r)},get size(){const r=this.__v_raw;return!e&&_t(Le(r),"iterate",zr),r.size},has(r){const o=this.__v_raw,i=Le(o),a=Le(r);return e||(Jn(r,a)&&_t(i,"has",r),_t(i,"has",a)),r===a?o.has(r):o.has(r)||o.has(a)},forEach(r,o){const i=this,a=i.__v_raw,s=Le(a),u=n?fu:e?ko:Fn;return!e&&_t(s,"iterate",zr),a.forEach((c,l)=>r.call(o,u(c),u(l),i))}};return xt(t,e?{add:Oi("add"),set:Oi("set"),delete:Oi("delete"),clear:Oi("clear")}:{add(r){!n&&!Yt(r)&&!Zn(r)&&(r=Le(r));const o=Le(this);return Mi(o).has.call(o,r)||(o.add(r),qn(o,"add",r,r)),this},set(r,o){!n&&!Yt(o)&&!Zn(o)&&(o=Le(o));const i=Le(this),{has:a,get:s}=Mi(i);let u=a.call(i,r);u||(r=Le(r),u=a.call(i,r));const c=s.call(i,r);return i.set(r,o),u?Jn(o,c)&&qn(i,"set",r,o):qn(i,"add",r,o),this},delete(r){const o=Le(this),{has:i,get:a}=Mi(o);let s=i.call(o,r);s||(r=Le(r),s=i.call(o,r)),a&&a.call(o,r);const u=o.delete(r);return s&&qn(o,"delete",r,void 0),u},clear(){const r=Le(this),o=r.size!==0,i=r.clear();return o&&qn(r,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ym(r,e,n)}),t}function ic(e,n){const t=Jm(e,n);return(r,o,i)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(Ve(t,o)&&o in r?t:r,o,i)}const Qm={get:ic(!1,!1)},Zm={get:ic(!1,!0)},eg={get:ic(!0,!1)},Vh=new WeakMap,Uh=new WeakMap,zh=new WeakMap,tg=new WeakMap;function ng(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rg(e){return e.__v_skip||!Object.isExtensible(e)?0:ng(Rm(e))}function wi(e){return Zn(e)?e:ac(e,!1,Km,Qm,Vh)}function Gh(e){return ac(e,!1,Xm,Zm,Uh)}function hu(e){return ac(e,!0,$m,eg,zh)}function ac(e,n,t,r,o){if(!Ke(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const i=rg(e);if(i===0)return e;const a=o.get(e);if(a)return a;const s=new Proxy(e,i===2?r:t);return o.set(e,s),s}function kn(e){return Zn(e)?kn(e.__v_raw):!!(e&&e.__v_isReactive)}function Zn(e){return!!(e&&e.__v_isReadonly)}function Yt(e){return!!(e&&e.__v_isShallow)}function Ga(e){return e?!!e.__v_raw:!1}function Le(e){const n=e&&e.__v_raw;return n?Le(n):e}function sc(e){return!Ve(e,"__v_skip")&&Object.isExtensible(e)&&Sh(e,"__v_skip",!0),e}const Fn=e=>Ke(e)?wi(e):e,ko=e=>Ke(e)?hu(e):e;function $e(e){return e?e.__v_isRef===!0:!1}function St(e){return Hh(e,Fn)}function og(e){return Hh(e)}function Hh(e,n){return $e(e)?e:new ig(e,n)}var ig=class{constructor(e,n){this.subs=void 0,this.subsTail=void 0,this.flags=Qt.Mutable,this.__v_isRef=!0,this.__v_isShallow=!1,this._oldValue=this._rawValue=n?Le(e):e,this._value=n?n(e):e,this._wrap=n,this.__v_isShallow=!n}get dep(){return this}get value(){if(ag(this),this.flags&Qt.Dirty&&this.update()){const e=this.subs;e!==void 0&&ii(e)}return this._value}set value(e){const n=this._rawValue,t=this.__v_isShallow||Yt(e)||Zn(e);if(e=t?e:Le(e),Jn(e,n)){this.flags|=Qt.Dirty,this._rawValue=e,this._value=!t&&this._wrap?this._wrap(e):e;const r=this.subs;r!==void 0&&(Fh(r),oc||Oh())}}update(){return this.flags&=-17,Jn(this._oldValue,this._oldValue=this._rawValue)}};function ag(e){Qn!==void 0&&Io(e,Qn)}function dt(e){return $e(e)?e.value:e}const sg={get:(e,n,t)=>n==="__v_raw"?e:dt(Reflect.get(e,n,t)),set:(e,n,t,r)=>{const o=e[n];return $e(o)&&!$e(t)?(o.value=t,!0):Reflect.set(e,n,t,r)}};function jh(e){return kn(e)?e:new Proxy(e,sg)}function ug(e){const n=ke(e)?new Array(e.length):{};for(const t in e)n[t]=qh(e,t);return n}var cg=class{constructor(e,n,t){this._object=e,this._key=n,this._defaultValue=t,this.__v_isRef=!0,this._value=void 0,this._raw=Le(e);let r=!0,o=e;if(!ke(e)||!Wa(String(n)))do r=!Ga(o)||Yt(o);while(r&&(o=o.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=dt(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&$e(this._raw[this._key])){const n=this._object[this._key];if($e(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return Um(this._raw,this._key)}},lg=class{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}};function fg(e,n,t){return $e(e)?e:Ne(e)?new lg(e):Ke(e)&&arguments.length>1?qh(e,n,t):St(e)}function qh(e,n,t){return new cg(e,n,t)}var Kh=class{fn(){}constructor(e){this.deps=void 0,this.depsTail=void 0,this.subs=void 0,this.subsTail=void 0,this.flags=18,this.cleanups=[],this.cleanupsLength=0,e!==void 0&&(this.fn=e),Nt&&Io(this,Nt)}get active(){return!(this.flags&1024)}pause(){this.flags|=256}resume(){(this.flags&=-257)&48&&this.notify()}notify(){!(this.flags&256)&&this.dirty&&this.run()}run(){if(!this.active)return this.fn();si(this);const e=Ph(this);try{return this.fn()}finally{Mh(this,e);const n=this.flags;(n&136)===136&&(this.flags=n&-9,this.notify())}}stop(){if(!this.active)return;this.flags=1024;let e=this.deps;for(;e!==void 0;)e=Ao(e,this);const n=this.subs;n!==void 0&&Ao(n),si(this)}get dirty(){const e=this.flags;if(e&16)return!0;if(e&32){if(cu(this.deps,this))return this.flags=e|16,!0;this.flags=e&-33}return!1}};function si(e){const n=e.cleanupsLength;if(n){for(let t=0;t<n;t++)e.cleanups[t]();e.cleanupsLength=0}}let Nt;var $h=class{constructor(e=!1){this.deps=void 0,this.depsTail=void 0,this.subs=void 0,this.subsTail=void 0,this.flags=0,this.cleanups=[],this.cleanupsLength=0,!e&&Nt&&Io(this,Nt)}get active(){return!(this.flags&1024)}pause(){if(!(this.flags&256)){this.flags|=256;for(let e=this.deps;e!==void 0;e=e.nextDep){const n=e.dep;"pause"in n&&n.pause()}}}resume(){const e=this.flags;if(e&256){this.flags=e&-257;for(let n=this.deps;n!==void 0;n=n.nextDep){const t=n.dep;"resume"in t&&t.resume()}}}run(e){const n=Nt;try{return Nt=this,e()}finally{Nt=n}}stop(){if(!this.active)return;this.flags=1024,this.reset();const e=this.subs;e!==void 0&&Ao(e)}reset(){let e=this.deps;for(;e!==void 0;){const n=e.dep;"stop"in n?(e=e.nextDep,n.stop()):e=Ao(e,this)}si(this)}};function Xh(e){return new $h(e)}function hg(){return Nt}function du(e){try{return Nt}finally{Nt=e}}function dg(e,n=!1){Nt!==void 0&&(Nt.cleanups[Nt.cleanupsLength++]=e)}var pg=class{get effect(){return this}get dep(){return this}get _dirty(){const e=this.flags;if(e&Qt.Dirty)return!0;if(e&Qt.Pending){if(cu(this.deps,this))return this.flags=e|Qt.Dirty,!0;this.flags=e&-33}return!1}set _dirty(e){e?this.flags|=Qt.Dirty:this.flags&=-49}constructor(e,n){this.fn=e,this.setter=n,this._value=void 0,this.subs=void 0,this.subsTail=void 0,this.deps=void 0,this.depsTail=void 0,this.flags=Qt.Mutable|Qt.Dirty,this.__v_isRef=!0,this.__v_isReadonly=!n}get value(){const e=this.flags;if(e&Qt.Dirty||e&Qt.Pending&&cu(this.deps,this)){if(this.update()){const n=this.subs;n!==void 0&&ii(n)}}else e&Qt.Pending&&(this.flags=e&-33);return Qn!==void 0?Io(this,Qn):Nt!==void 0&&Io(this,Nt),this._value}set value(e){this.setter&&this.setter(e)}update(){const e=Ph(this);try{const n=this._value,t=this.fn(n);return Jn(n,t)?(this._value=t,!0):!1}finally{Mh(this,e)}}};function vg(e,n,t=!1){let r,o;return Ne(e)?r=e:(r=e.get,o=e.set),new pg(r,o)}const Bi={};let Nr;function mg(e,n=!1,t=Nr){if(t){const{call:r}=t.options;r?t.cleanups[t.cleanupsLength++]=()=>r(e,4):t.cleanups[t.cleanupsLength++]=e}}var gg=class extends Kh{constructor(e,n,t=He){const{deep:r,once:o,call:i,onWarn:a}=t;let s,u=!1,c=!1;if($e(e)?(s=()=>e.value,u=Yt(e)):kn(e)?(s=()=>Sl(e,r),u=!0):ke(e)?(c=!0,u=e.some(l=>kn(l)||Yt(l)),s=()=>e.map(l=>{if($e(l))return l.value;if(kn(l))return Sl(l,r);if(Ne(l))return i?i(l,2):l()})):Ne(e)?n?s=i?()=>i(e,2):e:s=()=>{if(this.cleanupsLength){const f=it();try{si(this)}finally{it(f)}}const l=Nr;Nr=this;try{return i?i(e,3,[this.boundCleanup]):e(this.boundCleanup)}finally{Nr=l}}:s=An,n&&r){const l=s,f=r===!0?1/0:r;s=()=>Kn(l(),f)}if(super(s),this.cb=n,this.options=t,this.boundCleanup=l=>mg(l,!1,this),this.forceTrigger=u,this.isMultiSource=c,o&&n){const l=n;n=(...f)=>{l(...f),this.stop()}}this.cb=n,this.oldValue=c?new Array(e.length).fill(Bi):Bi}run(e=!1){const n=this.oldValue,t=this.oldValue=super.run();if(!this.cb)return;const{immediate:r,deep:o,call:i}=this.options;if(!(e&&!r)&&(o||this.forceTrigger||(this.isMultiSource?t.some((a,s)=>Jn(a,n[s])):Jn(t,n)))){si(this);const a=Nr;Nr=this;try{const s=[t,n===Bi?void 0:this.isMultiSource&&n[0]===Bi?[]:n,this.boundCleanup];i?i(this.cb,3,s):this.cb(...s)}finally{Nr=a}}}};function Sl(e,n){return n?e:Yt(e)||n===!1||n===0?Kn(e,1):Kn(e)}function Kn(e,n=1/0,t){if(n<=0||!Ke(e)||e.__v_skip||(t=t||new Map,(t.get(e)||0)>=n))return e;if(t.set(e,n),n--,$e(e))Kn(e.value,n,t);else if(ke(e))for(let r=0;r<e.length;r++)Kn(e[r],n,t);else if(wh(e)||vo(e))e.forEach(r=>{Kn(r,n,t)});else if(Eh(e)){for(const r in e)Kn(e[r],n,t);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Kn(e[r],n,t)}return e}function Ha(e,n,t,r){try{return r?e(...r):e()}catch(o){_i(o,n,t)}}function Pn(e,n,t,r){if(Ne(e)){const o=Ha(e,n,t,r);return o&&_h(o)&&o.catch(i=>{_i(i,n,t)}),o}if(ke(e)){const o=[];for(let i=0;i<e.length;i++)o.push(Pn(e[i],n,t,r));return o}}function _i(e,n,t,r=!0){const{errorHandler:o,throwUnhandledErrorInProduction:i}=n&&n.appContext.config||He;if(n){let a=n.parent;const s=n.proxy||n,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const c=a.ec;if(c){for(let l=0;l<c.length;l++)if(c[l](e,s,u)===!1)return}a=a.parent}if(o){const c=it();Ha(o,null,10,[e,s,u]),it(c);return}}yg(e,t,n,r,i)}function yg(e,n,t,r=!0,o=!1){if(o)throw e;console.error(e)}const Or=[];let En=[],hr=null,ui=null,vr=0,Hn=0,ea=0;const Yh=Promise.resolve();function uc(e){const n=ui||Yh;return e?n.then(this?e.bind(this):e):n}function bg(e,n,t,r){for(;t<r;){const o=t+r>>>1;n[o].order<=e?t=o+1:r=o}return t}function cc(e,n,t=!1){pu(e,n===void 0?t?-2:1/0:t?n*2:n*2+1,Or,vr,Hn)&&(vr++,Jh())}function pu(e,n,t,r,o){const i=e.flags;return i&1?!1:(e.flags=i|1,e.order=n,o===r||n>=t[r-1].order?t[r]=e:t.splice(bg(n,t,o,r),0,e),!0)}const xg=()=>{try{ed()}catch(e){throw ui=null,e}};function Jh(){ui||(ui=Yh.then(xg))}function wg(e,n=1/0){if(!ke(e))hr&&n===-1?hr.splice(ea,0,e):pu(e,n,En,En.length,0);else for(const t of e)pu(t,n,En,En.length,0);Jh()}function Qh(e,n){for(let t=Hn;t<vr;t++){const r=Or[t];r.order&1||r.order===1/0||e&&r.order!==e.uid*2||(Or.splice(t,1),t--,vr--,r.flags&2&&(r.flags&=-2),r(),r.flags&2||(r.flags&=-2))}}function Zh(e){if(En.length){if(hr){hr.push(...En),En.length=0;return}for(hr=En,En=[];ea<hr.length;){const n=hr[ea++];if(n.flags&2&&(n.flags&=-2),!(n.flags&4))try{n()}finally{n.flags&=-2}}hr=null,ea=0}}let xs=!1;function _g(e){xs||(xs=!0,Qh(e),Zh(),xs=!1)}function ed(e){try{for(;Hn<vr;){const n=Or[Hn];if(Or[Hn++]=void 0,!(n.flags&4)){n.flags&2&&(n.flags&=-2);try{n()}catch(t){_i(t,n.i,n.i?15:14)}finally{n.flags&2||(n.flags&=-2)}}}}finally{for(;Hn<vr;)Or[Hn].flags&=-2,Or[Hn++]=void 0;Hn=0,vr=0,Zh(),ui=null,(vr||En.length)&&ed()}}let nn=null,td=null;function ua(e){const n=nn;return nn=e,td=e&&e.type.__scopeId||null,n}function Cg(e,n=nn,t){if(!n||e._n)return e;const r=(...o)=>{r._d&&ha(-1);const i=ua(n);let a;try{a=e(...o)}finally{ua(i),r._d&&ha(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Eg(e,n){if(nn===null)return e;const t=$a(nn),r=e.dirs||(e.dirs=[]);for(let o=0;o<n.length;o++){let[i,a,s,u=He]=n[o];i&&(Ne(i)&&(i={mounted:i,updated:i}),i.deep&&Kn(a),r.push({dir:i,instance:t,value:a,oldValue:void 0,arg:s,modifiers:u}))}return e}function Ft(e,n,t,r){const o=e.dirs,i=n&&n.dirs;for(let a=0;a<o.length;a++){const s=o[a];i&&(s.oldValue=i[a].value);let u=s.dir[r];if(u){const c=it();Pn(u,t,8,[e.el,s,e,n]),it(c)}}}function ta(e,n){if(en){let t=en.provides;const r=en.parent&&en.parent.provides;r===t&&(t=en.provides=Object.create(r)),t[e]=n}}function fn(e,n,t=!1){const r=mc();if(r||Gr){let o=Gr?Gr._context.provides:r?r.parent==null||r.ce?r.appContext&&r.appContext.provides:r.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return t&&Ne(n)?n.call(r&&r.proxy):n}}function Rg(){return!!(mc()||Gr)}const Sg=Symbol.for("v-scx"),Ig=()=>fn(Sg);function mo(e,n,t){return nd(e,n,t)}var Ag=class extends gg{constructor(e,n,t,r,o){super(n,t,r),this.flush=o;const i=()=>{this.dirty&&this.run()};t&&(this.flags|=128,i.flags|=2),e&&(i.i=e),this.job=i}notify(){if(!(this.flags&256)){const e=this.flush,n=this.job;e==="post"?mt(n,void 0,n.i?n.i.suspense:null):e==="pre"?cc(n,n.i?n.i.uid:void 0,!0):n()}}};function nd(e,n,t=He){const{immediate:r,deep:o,flush:i="pre",once:a}=t,s=xt({},t),u=n&&r||!n&&i!=="post";let c;if(li){if(i==="sync"){const d=Ig();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!u){const d=()=>{};return d.stop=An,d.resume=An,d.pause=An,d}}const l=en;s.call=(d,p,v)=>Pn(d,l,p,v);const f=new Ag(l,e,n,s,i);n?f.run(!0):i==="post"?mt(f.job,void 0,l&&l.suspense):f.run(!0);const h=f.stop.bind(f);return h.pause=f.pause.bind(f),h.resume=f.resume.bind(f),h.stop=h,li&&(c?c.push(h):u&&h()),h}function kg(e,n,t){const r=this.proxy,o=ut(e)?e.includes(".")?rd(r,e):()=>r[e]:e.bind(r,r);let i;Ne(n)?i=n:(i=n.handler,t=n);const a=hn(this),s=nd(o,i.bind(r),t);return hn(...a),s}function rd(e,n){const t=n.split(".");return()=>{let r=e;for(let o=0;o<t.length&&r;o++)r=r[t[o]];return r}}const Dg=Symbol("_vte"),Tg=e=>e.__isTeleport,od=Symbol("_leaveCb");function lc(e,n){e.shapeFlag&6&&e.component?$o(e.type)?zn(e.component,e).setTransitionHooks(e.component,n):(e.transition=n,lc(e.component.subTree,n)):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function id(e,n){return Ne(e)?xt({name:e.name},n,{setup:e}):e}function ad(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const ca=new WeakMap;function Yo(e,n,t,r,o=!1){if(ke(e)){e.forEach((d,p)=>Yo(d,n&&(ke(n)?n[p]:n),t,r,o));return}if(Jo(r)&&!o){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Yo(e,n,t,r.component.subTree);return}const i=r.shapeFlag&4?$a(r.component):r.el,a=o?null:i,{i:s,r:u}=e,c=n&&n.r,l=s.refs===He?s.refs={}:s.refs,f=s.setupState,h=Ng(f);if(c!=null&&c!==u){if(Il(n),ut(c))l[c]=null,h(c)&&(f[c]=null);else if($e(c)){c.value=null;const d=n;d.k&&(l[d.k]=null)}}if(Ne(u))Ha(u,s,12,[a,l]);else{const d=ut(u),p=$e(u);if(d||p){const v=()=>{if(e.f){const m=d?h(u)?f[u]:l[u]:u.value;if(o)ke(m)&&xh(m,i);else if(ke(m))m.includes(i)||m.push(i);else if(d)l[u]=[i],h(u)&&(f[u]=l[u]);else{const g=[i];u.value=g,e.k&&(l[e.k]=g)}}else d?(l[u]=a,h(u)&&(f[u]=a)):p&&(u.value=a,e.k&&(l[e.k]=a))};if(a){const m=()=>{v(),ca.delete(e)};ca.set(e,m),mt(m,-1,t)}else Il(e),v()}}}function Ng(e){const n=Le(e);return e===void 0||e===He?bh:t=>Ve(n,t)}function Il(e){const n=ca.get(e);n&&(n.flags|=4,ca.delete(e))}const Jo=e=>!!e.type.__asyncLoader,sd=e=>e.type.__isKeepAlive;function Fg(e,n){ud(e,"a",n)}function Pg(e,n){ud(e,"da",n)}function ud(e,n,t=mc()){const r=e.__wdc||(e.__wdc=()=>{let o=t;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(ja(n,r,t),t){let o=t.parent;for(;o&&o.parent;){let i=o.parent;sd(i.vapor?i:i.vnode)&&Mg(r,n,t,o),o=o.parent}}}function Mg(e,n,t,r){const o=ja(n,e,r,!0);fc(()=>{xh(r[n],o)},t)}function ja(e,n,t=en,r=!1){if(t){const o=t[e]||(t[e]=[]),i=n.__weh||(n.__weh=(...a)=>{const s=it(),u=hn(t);try{return Pn(n,t,e,a)}finally{hn(...u),it(s)}});return r?o.unshift(i):o.push(i),i}}const er=e=>(n,t=en)=>{(!li||e==="sp")&&ja(e,(...r)=>n(...r),t)},Og=er("bm"),cd=er("m"),Bg=er("bu"),Lg=er("u"),Wg=er("bum"),fc=er("um"),Vg=er("sp"),Ug=er("rtg"),zg=er("rtc");function Gg(e,n=en){ja("ec",e,n)}const Hg=Symbol.for("v-ndc");function jg(e,n,t,r){let o;const i=t,a=ke(e);if(a||ut(e)){const s=a&&kn(e);let u=!1,c=!1;s&&(u=!Yt(e),c=Zn(e),e=za(e)),o=new Array(e.length);for(let l=0,f=e.length;l<f;l++)o[l]=n(u?c?ko(Fn(e[l])):Fn(e[l]):e[l],l,void 0,i)}else if(typeof e=="number"){o=new Array(e);for(let s=0;s<e;s++)o[s]=n(s+1,s,void 0,i)}else if(Ke(e))if(e[Symbol.iterator])o=Array.from(e,(s,u)=>n(s,u,void 0,i));else{const s=Object.keys(e);o=new Array(s.length);for(let u=0,c=s.length;u<c;u++){const l=s[u];o[u]=n(e[l],l,u,i)}}else o=[];return o}const vu=e=>!e||e.vapor?null:Td(e)?$a(e):vu(e.parent);let ws;const la=()=>(ws||(ws=xt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>vu(e.parent),$root:e=>vu(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>fd(e),$forceUpdate:e=>e.f||(e.f=()=>{cc(e.update)}),$nextTick:e=>e.n||(e.n=uc.bind(e.proxy)),$watch:e=>kg.bind(e)})),ws),_s=(e,n)=>e!==He&&!e.__isScriptSetup&&Ve(e,n),qg={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:r,data:o,props:i,accessCache:a,type:s,appContext:u}=e;if(n[0]!=="$"){const h=a[n];if(h!==void 0)switch(h){case 1:return r[n];case 2:return o[n];case 4:return t[n];case 3:return i[n]}else{if(_s(r,n))return a[n]=1,r[n];if(o!==He&&Ve(o,n))return a[n]=2,o[n];if(Ve(i,n))return a[n]=3,i[n];if(t!==He&&Ve(t,n))return a[n]=4,t[n];mu&&(a[n]=0)}}const c=la()[n];let l,f;if(c)return n==="$attrs"&&_t(e.attrs,"get",""),c(e);if((l=s.__cssModules)&&(l=l[n]))return l;if(t!==He&&Ve(t,n))return a[n]=4,t[n];if(f=u.config.globalProperties,Ve(f,n))return f[n]},set({_:e},n,t){const{data:r,setupState:o,ctx:i}=e;return _s(o,n)?(o[n]=t,!0):r!==He&&Ve(r,n)?(r[n]=t,!0):Ve(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(i[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:r,appContext:o,props:i,type:a}},s){let u;return!!(t[s]||e!==He&&s[0]!=="$"&&Ve(e,s)||_s(n,s)||Ve(i,s)||Ve(r,s)||Ve(la(),s)||Ve(o.config.globalProperties,s)||(u=a.__cssModules)&&u[s])},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:Ve(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function Al(e){return ke(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let mu=!0;function Kg(e){const n=fd(e),t=e.proxy,r=e.ctx;mu=!1,n.beforeCreate&&kl(n.beforeCreate,e,"bc");const{data:o,computed:i,methods:a,watch:s,provide:u,inject:c,created:l,beforeMount:f,mounted:h,beforeUpdate:d,updated:p,activated:v,deactivated:m,beforeDestroy:g,beforeUnmount:y,destroyed:x,unmounted:b,render:w,renderTracked:_,renderTriggered:A,errorCaptured:R,serverPrefetch:E,expose:S,inheritAttrs:F,components:N,directives:U,filters:z}=n;if(c&&$g(c,r,null),a)for(const O in a){const B=a[O];Ne(B)&&(r[O]=B.bind(t))}if(o){const O=o.call(t,t);Ke(O)&&(e.data=wi(O))}if(mu=!0,i)for(const O in i){const B=i[O],$=Ne(B)?B.bind(t,t):Ne(B.get)?B.get.bind(t,t):An,J=Gt({get:$,set:!Ne(B)&&Ne(B.set)?B.set.bind(t):An});Object.defineProperty(r,O,{enumerable:!0,configurable:!0,get:()=>J.value,set:oe=>J.value=oe})}if(s)for(const O in s)ld(s[O],r,t,O);if(u){const O=Ne(u)?u.call(t):u;Reflect.ownKeys(O).forEach(B=>{ta(B,O[B])})}l&&kl(l,e,"c");function H(O,B){ke(B)?B.forEach($=>O($.bind(t))):B&&O(B.bind(t))}if(H(Og,f),H(cd,h),H(Bg,d),H(Lg,p),H(Fg,v),H(Pg,m),H(Gg,R),H(zg,_),H(Ug,A),H(Wg,y),H(fc,b),H(Vg,E),ke(S))if(S.length){const O=e.exposed||(e.exposed={});S.forEach(B=>{Object.defineProperty(O,B,{get:()=>t[B],set:$=>t[B]=$,enumerable:!0})})}else e.exposed||(e.exposed={});w&&e.render===An&&(e.render=w),F!=null&&(e.inheritAttrs=F),N&&(e.components=N),U&&(e.directives=U),E&&ad(e)}function $g(e,n,t=An){ke(e)&&(e=gu(e));for(const r in e){const o=e[r];let i;Ke(o)?"default"in o?i=fn(o.from||r,o.default,!0):i=fn(o.from||r):i=fn(o),$e(i)?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):n[r]=i}}function kl(e,n,t){Pn(ke(e)?e.map(r=>r.bind(n.proxy)):e.bind(n.proxy),n,t)}function ld(e,n,t,r){let o=r.includes(".")?rd(t,r):()=>t[r];if(ut(e)){const i=n[e];Ne(i)&&mo(o,i)}else if(Ne(e))mo(o,e.bind(t));else if(Ke(e))if(ke(e))e.forEach(i=>ld(i,n,t,r));else{const i=Ne(e.handler)?e.handler.bind(t):n[e.handler];Ne(i)&&mo(o,i,e)}}function fd(e){const n=e.type,{mixins:t,extends:r}=n,{mixins:o,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,s=i.get(n);let u;return s?u=s:!o.length&&!t&&!r?u=n:(u={},o.length&&o.forEach(c=>fa(u,c,a,!0)),fa(u,n,a)),Ke(n)&&i.set(n,u),u}function fa(e,n,t,r=!1){const{mixins:o,extends:i}=n;i&&fa(e,i,t,!0),o&&o.forEach(a=>fa(e,a,t,!0));for(const a in n)if(!(r&&a==="expose")){const s=Xg[a]||t&&t[a];e[a]=s?s(e[a],n[a]):n[a]}return e}const Xg={data:Dl,props:Tl,emits:Tl,methods:Ko,computed:Ko,beforeCreate:Dt,created:Dt,beforeMount:Dt,mounted:Dt,beforeUpdate:Dt,updated:Dt,beforeDestroy:Dt,beforeUnmount:Dt,destroyed:Dt,unmounted:Dt,activated:Dt,deactivated:Dt,errorCaptured:Dt,serverPrefetch:Dt,components:Ko,directives:Ko,watch:Jg,provide:Dl,inject:Yg};function Dl(e,n){return n?e?function(){return xt(Ne(e)?e.call(this,this):e,Ne(n)?n.call(this,this):n)}:n:e}function Yg(e,n){return Ko(gu(e),gu(n))}function gu(e){if(ke(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function Dt(e,n){return e?[...new Set([].concat(e,n))]:n}function Ko(e,n){return e?xt(Object.create(null),e,n):n}function Tl(e,n){return e?ke(e)&&ke(n)?[...new Set([...e,...n])]:xt(Object.create(null),Al(e),Al(n??{})):n}function Jg(e,n){if(!e)return n;if(!n)return e;const t=xt(Object.create(null),e);for(const r in n)t[r]=Dt(e[r],n[r]);return t}function hd(){return{app:null,config:{isNativeTag:bh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qg=0;function Zg(e,n,t,r){return function(i,a=null){Ne(i)||(i=xt({},i)),a!=null&&!Ke(a)&&(a=null);const s=hd(),u=new WeakSet,c=[];let l=!1;const f=s.app={_uid:Qg++,_component:i,_props:a,_container:null,_context:s,_instance:null,version:Fy,get config(){return s.config},set config(h){},use(h,...d){return u.has(h)||(h&&Ne(h.install)?(u.add(h),h.install(f,...d)):Ne(h)&&(u.add(h),h(f,...d))),f},mixin(h){return s.mixins.includes(h)||s.mixins.push(h),f},component(h,d){return d?(s.components[h]=d,f):s.components[h]},directive(h,d){return d?(s.directives[h]=d,f):s.directives[h]},mount(h,d,p){if(!l){const v=e(f,h,d,p);return l=!0,f._container=h,h.__vue_app__=f,t(v)}},onUnmount(h){c.push(h)},unmount(){l&&(Pn(c,f._instance,16),n(f),delete f._container.__vue_app__)},provide(h,d){return s.provides[h]=d,f},runWithContext(h){const d=Gr;Gr=f;try{return h()}finally{Gr=d}}};return f}}let Gr=null;const ey=(e,n,t)=>t(e,km(n))||t(e,`${wr(n)}Modifiers`)||t(e,`${$r(n)}Modifiers`);function ty(e,n,...t){return ny(e,e.vnode.props||He,ry,n,...t)}function ny(e,n,t,r,...o){if(e.isUnmounted)return;let i=o;const a=r.startsWith("update:"),s=a&&ey(n,r.slice(7),t);s&&(s.trim&&(i=o.map(f=>ut(f)?f.trim():f)),s.number&&(i=o.map(rc)));let u,c=t(n,u=ms(r))||t(n,u=ms(wr(r)));!c&&a&&(c=t(n,u=ms($r(r)))),c&&Pn(c,e,6,i);const l=t(n,u+"Once");if(l){if(!e.emitted)e.emitted={};else if(e.emitted[u])return;e.emitted[u]=!0,Pn(l,e,6,i)}}function ry(e,n){return e[n]}const oy=new WeakMap;function dd(e,n,t=!1){const r=t?oy:n.emitsCache,o=r.get(e);if(o!==void 0)return o;const i=e.emits;let a={},s=!1;if(!Ne(e)){const u=c=>{const l=dd(c,n,!0);l&&(s=!0,xt(a,l))};!t&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!i&&!s?(Ke(e)&&r.set(e,null),null):(ke(i)?i.forEach(u=>a[u]=null):xt(a,i),Ke(e)&&r.set(e,a),a)}function qa(e,n){return!e||!Ba(n)?!1:(n=n.slice(2).replace(/Once$/,""),Ve(e,n[0].toLowerCase()+n.slice(1))||Ve(e,$r(n))||Ve(e,n))}function Nl(e){const{type:n,vnode:t,proxy:r,withProxy:o,propsOptions:[i],slots:a,attrs:s,emit:u,render:c,renderCache:l,props:f,data:h,setupState:d,ctx:p,inheritAttrs:v}=e,m=ua(e);let g,y;try{if(t.shapeFlag&4){const b=o||r,w=b;g=_n(c.call(w,b,l,f,d,h,p)),y=s}else{const b=n;g=_n(b.length>1?b(f,{attrs:s,slots:a,emit:u}):b(f,null)),y=n.props?s:iy(s)}}catch(b){Qo.length=0,_i(b,e,1),g=It(_r)}let x=g;if(y&&v!==!1){const b=Object.keys(y),{shapeFlag:w}=x;b.length&&w&7&&(i&&b.some(nc)&&(y=ay(y,i)),x=Do(x,y,!1,!0))}return t.dirs&&(x=Do(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&lc(x,t.transition),g=x,ua(m),g}const iy=e=>{let n;for(const t in e)(t==="class"||t==="style"||Ba(t))&&((n||(n={}))[t]=e[t]);return n},ay=(e,n)=>{const t={};for(const r in e)(!nc(r)||!(r.slice(9)in n))&&(t[r]=e[r]);return t};function Fl(e,n,t){const{props:r,children:o,component:i}=e,{props:a,children:s,patchFlag:u}=n,c=i.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&u>=0){if(u&1024)return!0;if(u&16)return r?Pl(r,a,c):!!a;if(u&8){const l=n.dynamicProps;for(let f=0;f<l.length;f++){const h=l[f];if(a[h]!==r[h]&&!qa(c,h))return!0}}}else return(o||s)&&(!s||!s.$stable)?!0:r===a?!1:r?a?Pl(r,a,c):!0:!!a;return!1}function Pl(e,n,t){const r=Object.keys(n);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(n[i]!==e[i]&&!qa(t,i))return!0}return!1}function Ml({vnode:e,parent:n},t){for(;n&&!n.vapor;){const r=n.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=n.vnode).el=t,n=n.parent;else break}}const pd={},vd=()=>Object.create(pd),md=e=>Object.getPrototypeOf(e)===pd;function sy(e,n,t,r=!1){const o=e.props={},i=vd();e.propsDefaults=Object.create(null),gd(e,n,o,i);for(const a in e.propsOptions[0])a in o||(o[a]=void 0);t?e.props=r?o:Gh(o):e.type.props?e.props=o:e.props=i,e.attrs=i}function uy(e,n,t,r){const{props:o,attrs:i,vnode:{patchFlag:a}}=e,s=Le(o),[u]=e.propsOptions;let c=!1;if((r||a>0)&&!(a&16)){if(a&8){const l=e.vnode.dynamicProps;for(let f=0;f<l.length;f++){let h=l[f];if(qa(e.emitsOptions,h))continue;const d=n[h];if(u)if(Ve(i,h))d!==i[h]&&(i[h]=d,c=!0);else{const p=wr(h);o[p]=yu(u,p,d,e,bu)}else d!==i[h]&&(i[h]=d,c=!0)}}}else{gd(e,n,o,i)&&(c=!0);let l;for(const f in s)(!n||!Ve(n,f)&&((l=$r(f))===f||!Ve(n,l)))&&(u?t&&(t[f]!==void 0||t[l]!==void 0)&&(o[f]=yu(u,f,void 0,e,bu,!0)):delete o[f]);if(i!==s)for(const f in i)(!n||!Ve(n,f))&&(delete i[f],c=!0)}c&&qn(e.attrs,"set","")}function gd(e,n,t,r){const[o,i]=e.propsOptions;let a=!1,s;if(n)for(let u in n){if(Xo(u))continue;const c=n[u];let l;o&&Ve(o,l=wr(u))?!i||!i.includes(l)?t[l]=c:(s||(s={}))[l]=c:qa(e.emitsOptions,u)||(!(u in r)||c!==r[u])&&(r[u]=c,a=!0)}if(i){const u=s||He;for(let c=0;c<i.length;c++){const l=i[c];t[l]=yu(o,l,u[l],e,bu,!Ve(u,l))}}return a}function yu(e,n,t,r,o,i=!1){const a=e[n];if(a!=null){const s=Ve(a,"default");if(s&&t===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&Ne(u)){const c=r.propsDefaults||(r.propsDefaults={});Ve(c,n)?t=c[n]:t=c[n]=o(u,r,n)}else t=u;r.ce&&r.ce._setProp(n,t)}a[0]&&(i&&!s?t=!1:a[1]&&(t===""||t===$r(n))&&(t=!0))}return t}function bu(e,n,t){let r;const o=hn(n),i=Le(n.props);return r=e.call(null,i),hn(...o),r}const cy=new WeakMap;function yd(e,n,t=!1){const r=t?cy:n.propsCache,o=r.get(e);if(o)return o;const i=e.props,a={},s=[];let u=!1;if(!Ne(e)){const l=f=>{u=!0;const[h,d]=yd(f,n,!0);xt(a,h),d&&s.push(...d)};!t&&n.mixins.length&&n.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}if(!i&&!u)return Ke(e)&&r.set(e,po),po;ly(i,a,s);const c=[a,s];return Ke(e)&&r.set(e,c),c}function ly(e,n,t){if(ke(e))for(let r=0;r<e.length;r++){const o=wr(e[r]);Ol(o)&&(n[o]=He)}else if(e)for(const r in e){const o=wr(r);if(Ol(o)){const i=e[r],a=n[o]=ke(i)||Ne(i)?{type:i}:xt({},i),s=a.type;let u=!1,c=!0;if(ke(s))for(let l=0;l<s.length;++l){const f=s[l],h=Ne(f)&&f.name;if(h==="Boolean"){u=!0;break}else h==="String"&&(c=!1)}else u=Ne(s)&&s.name==="Boolean";a[0]=u,a[1]=c,(u||Ve(a,"default"))&&t.push(o)}}}function Ol(e){return e[0]!=="$"&&!Xo(e)}const hc=e=>e==="_"||e==="_ctx"||e==="$stable",dc=e=>ke(e)?e.map(_n):[_n(e)],fy=(e,n,t)=>{if(n._n)return n;const r=Cg((...o)=>dc(n(...o)),t);return r._c=!1,r},bd=(e,n,t)=>{const r=e._ctx;for(const o in e){if(hc(o))continue;const i=e[o];if(Ne(i))n[o]=fy(o,i,r);else if(i!=null){const a=dc(i);n[o]=()=>a}}},xd=(e,n)=>{const t=dc(n);e.slots.default=()=>t},wd=(e,n,t)=>{for(const r in n)(t||!hc(r))&&(e[r]=n[r])},hy=(e,n,t)=>{const r=e.slots=vd();if(e.vnode.shapeFlag&32){const o=n._;o?(wd(r,n,t),t&&Sh(r,"_",o,!0)):bd(n,r)}else n&&xd(e,n)},dy=(e,n,t)=>{const{vnode:r,slots:o}=e;let i=!0,a=He;if(r.shapeFlag&32){const s=n._;s?t&&s===1?i=!1:wd(o,n,t):(i=!n.$stable,bd(n,o)),a=n}else n&&(xd(e,n),a={default:1});if(i)for(const s in o)!hc(s)&&a[s]==null&&delete o[s]},mt=by;function py(e){return vy(e)}function vy(e,n){const t=Ih();t.__VUE__=!0;const{insert:r,remove:o,patchProp:i,createElement:a,createText:s,createComment:u,setText:c,setElementText:l,parentNode:f,nextSibling:h,setScopeId:d=An,insertStaticContent:p}=e,v=(D,k,M,K=null,j=null,te=null,re=void 0,ne=null,X=!!k.dynamicChildren)=>{if(D===k)return;D&&!Uo(D,k)&&(K=ee(D),de(D,j,te,!0),D=null),k.patchFlag===-2&&(X=!1,k.dynamicChildren=null);const{type:Z,ref:ce,shapeFlag:ye}=k;switch(Z){case Ka:m(D,k,M,K);break;case _r:g(D,k,M,K);break;case Es:D==null&&y(k,M,K,re);break;case sn:N(D,k,M,K,j,te,re,ne,X);break;case Rs:zn(j,k).slot(D,k,M,K,j);break;default:ye&1?w(D,k,M,K,j,te,re,ne,X):ye&6?U(D,k,M,K,j,te,re,ne,X):(ye&64||ye&128)&&Z.process(D,k,M,K,j,te,re,ne,X,ie)}ce!=null&&j?Yo(ce,D&&D.ref,te,k||D,!k):ce==null&&D&&D.ref!=null&&Yo(D.ref,null,te,D,!0)},m=(D,k,M,K)=>{if(D==null)r(k.el=s(k.children),M,K);else{const j=k.el=D.el;k.children!==D.children&&c(j,k.children)}},g=(D,k,M,K)=>{D==null?r(k.el=u(k.children||""),M,K):k.el=D.el},y=(D,k,M,K)=>{[D.el,D.anchor]=p(D.children,k,M,K,D.el,D.anchor)},x=({el:D,anchor:k},M,K)=>{let j;for(;D&&D!==k;)j=h(D),r(D,M,K),D=j;r(k,M,K)},b=({el:D,anchor:k})=>{let M;for(;D&&D!==k;)M=h(D),o(D),D=M;o(k)},w=(D,k,M,K,j,te,re,ne,X)=>{if(k.type==="svg"?re="svg":k.type==="math"&&(re="mathml"),D==null)_(k,M,K,j,te,re,ne,X);else{const Z=D.el&&D.el._isVueCE?D.el:null;try{Z&&Z._beginPatch(),E(D,k,j,te,re,ne,X)}finally{Z&&Z._endPatch()}}},_=(D,k,M,K,j,te,re,ne)=>{let X,Z;const{props:ce,shapeFlag:ye,transition:ue,dirs:Ce}=D;if(X=D.el=a(D.type,te,ce&&ce.is,ce),ye&8?l(X,D.children):ye&16&&R(D.children,X,null,K,j,Cs(D,te),re,ne),Ce&&Ft(D,null,K,"created"),A(X,D,D.scopeId,re,K),ce){for(const Pe in ce)Pe!=="value"&&!Xo(Pe)&&i(X,Pe,null,ce[Pe],te,K);"value"in ce&&i(X,"value",null,ce.value,te),(Z=ce.onVnodeBeforeMount)&&bn(Z,K,D)}Ce&&Ft(D,null,K,"beforeMount"),ue?Ll(X,ue,()=>r(X,k,M),j):r(X,k,M),((Z=ce&&ce.onVnodeMounted)||Ce)&&mt(()=>{Z&&bn(Z,K,D),Ce&&Ft(D,null,K,"mounted")},void 0,j)},A=(D,k,M,K,j)=>{if(M&&d(D,M),K)for(let re=0;re<K.length;re++)d(D,K[re]);const te=yy(k,j);for(let re=0;re<te.length;re++)d(D,te[re])},R=(D,k,M,K,j,te,re,ne,X=0)=>{for(let Z=X;Z<D.length;Z++)v(null,D[Z]=ne?dr(D[Z]):_n(D[Z]),k,M,K,j,te,re,ne)},E=(D,k,M,K,j,te,re)=>{const ne=k.el=D.el;let{patchFlag:X,dynamicChildren:Z,dirs:ce}=k;X|=D.patchFlag&16;const ye=D.props||He,ue=k.props||He;let Ce;if(M&&Dr(M,!1),(Ce=ue.onVnodeBeforeUpdate)&&bn(Ce,M,k,D),ce&&Ft(k,D,M,"beforeUpdate"),M&&Dr(M,!0),(ye.innerHTML&&ue.innerHTML==null||ye.textContent&&ue.textContent==null)&&l(ne,""),Z?S(D.dynamicChildren,Z,ne,M,K,Cs(k,j),te):re||$(D,k,ne,null,M,K,Cs(k,j),te,!1),X>0){if(X&16)F(ne,ye,ue,M,j);else if(X&2&&ye.class!==ue.class&&i(ne,"class",null,ue.class,j),X&4&&i(ne,"style",ye.style,ue.style,j),X&8){const Pe=k.dynamicProps;for(let Qe=0;Qe<Pe.length;Qe++){const We=Pe[Qe],Jt=ye[We],an=ue[We];(an!==Jt||We==="value")&&i(ne,We,Jt,an,j,M)}}X&1&&D.children!==k.children&&l(ne,k.children)}else!re&&Z==null&&F(ne,ye,ue,M,j);((Ce=ue.onVnodeUpdated)||ce)&&mt(()=>{Ce&&bn(Ce,M,k,D),ce&&Ft(k,D,M,"updated")},void 0,K)},S=(D,k,M,K,j,te,re)=>{for(let ne=0;ne<k.length;ne++){const X=D[ne],Z=k[ne];v(X,Z,X.el&&(X.type===sn||!Uo(X,Z)||X.shapeFlag&198)?f(X.el):M,null,K,j,te,re,!0)}},F=(D,k,M,K,j)=>{if(k!==M){if(k!==He)for(const te in k)!Xo(te)&&!(te in M)&&i(D,te,k[te],null,j,K);for(const te in M){if(Xo(te))continue;const re=M[te],ne=k[te];re!==ne&&te!=="value"&&i(D,te,ne,re,j,K)}"value"in M&&i(D,"value",k.value,M.value,j)}},N=(D,k,M,K,j,te,re,ne,X)=>{const Z=k.el=D?D.el:s(""),ce=k.anchor=D?D.anchor:s("");let{patchFlag:ye,dynamicChildren:ue,slotScopeIds:Ce}=k;Ce&&(ne=ne?ne.concat(Ce):Ce),D==null?(r(Z,M,K),r(ce,M,K),R(k.children||[],M,ce,j,te,re,ne,X)):ye>0&&ye&64&&ue&&D.dynamicChildren&&D.dynamicChildren.length===ue.length?(S(D.dynamicChildren,ue,M,j,te,re,ne),(k.key!=null||j&&k===j.subTree)&&_d(D,k,!0)):$(D,k,M,ce,j,te,re,ne,X)},U=(D,k,M,K,j,te,re,ne,X)=>{k.slotScopeIds=ne,k.type.__vapor?D==null?k.shapeFlag&512?zn(j,k).activate(k,M,K,j):(zn(j,k).mount(k,M,K,j,te,()=>{k.dirs&&(Ft(k,null,j,"created"),Ft(k,null,j,"beforeMount"))}),k.dirs&&mt(()=>Ft(k,null,j,"mounted"),void 0,te)):(zn(j,k).update(D,k,Fl(D,k,X),()=>{k.dirs&&Ft(k,D,j,"beforeUpdate")}),k.dirs&&mt(()=>Ft(k,D,j,"updated"),void 0,te)):D==null?k.shapeFlag&512?j.ctx.activate(k,M,K,re,X):z(k,M,K,j,te,re,X):G(D,k,X)},z=(D,k,M,K,j,te,re)=>{const ne=D.component=Sy(D,K,j);if(sd(D)&&(ne.ctx.renderer=ie),Iy(ne,!1,re),ne.asyncDep){if(j){const X=ne.vnode.el;j.registerDep(ne,Z=>{const{vnode:ce}=ne;wu(ne,Z),X&&(ce.el=X);const ye=!X&&ne.subTree.el;O(ne,ce,f(X||ne.subTree.el),X?null:ee(ne.subTree),j,te,re),ye&&(ce.placeholder=null,o(ye)),Ml(ne,ce.el)})}if(!D.el){const X=ne.subTree=It(_r);g(null,X,k,M),D.placeholder=X.el}}else O(ne,D,k,M,j,te,re)},G=(D,k,M)=>{const K=k.component=D.component;if(Fl(D,k,M))if(K.asyncDep&&!K.asyncResolved){B(K,k,M);return}else K.next=k,K.effect.run();else k.el=D.el,K.vnode=k};class H extends Kh{constructor(k,M,K,j,te,re,ne){const X=du(k.scope);super(),this.instance=k,this.initialVNode=M,this.container=K,this.anchor=j,this.parentSuspense=te,this.namespace=re,this.optimized=ne,du(X),this.job=k.job=()=>{this.dirty&&this.run()},this.job.i=k}notify(){if(!(this.flags&256)){const k=this.job;cc(k,k.i.uid)}}fn(){const{instance:k,initialVNode:M,container:K,anchor:j,parentSuspense:te,namespace:re,optimized:ne}=this;if(k.isMounted){let{next:X,bu:Z,u:ce,parent:ye,vnode:ue}=k;{const Jt=Cd(k);if(Jt){X&&(X.el=ue.el,B(k,X,ne)),Jt.asyncDep.then(()=>{k.isUnmounted||this.fn()});return}}let Ce=X,Pe;Dr(k,!1),X?(X.el=ue.el,B(k,X,ne)):X=ue,Z&&Qi(Z),(Pe=X.props&&X.props.onVnodeBeforeUpdate)&&bn(Pe,ye,X,ue),Dr(k,!0);const Qe=Nl(k),We=k.subTree;k.subTree=Qe,v(We,Qe,f(We.el),ee(We),k,te,re),X.el=Qe.el,Ce===null&&Ml(k,Qe.el),ce&&mt(ce,void 0,te),(Pe=X.props&&X.props.onVnodeUpdated)&&mt(()=>bn(Pe,ye,X,ue),void 0,te)}else{let X;const{el:Z,props:ce}=M,{bm:ye,parent:ue,root:Ce,type:Pe}=k,Qe=Jo(M);Dr(k,!1),ye&&Qi(ye),!Qe&&(X=ce&&ce.onVnodeBeforeMount)&&bn(X,ue,M),Dr(k,!0);{Ce.ce&&Ce.ce._hasShadowRoot()&&Ce.ce._injectChildStyle(Pe);const We=k.subTree=Nl(k);v(null,We,K,j,k,te,re),M.el=We.el}if(k.m&&mt(k.m,void 0,te),!Qe&&(X=ce&&ce.onVnodeMounted)){const We=M;mt(()=>bn(X,ue,We),void 0,te)}(M.shapeFlag&256||ue&&ue.vnode&&Jo(ue.vnode)&&ue.vnode.shapeFlag&256)&&k.a&&mt(k.a,void 0,te),k.isMounted=!0,this.initialVNode=this.container=this.anchor=null}}}const O=(D,k,M,K,j,te,re)=>{const ne=D.effect=new H(D,k,M,K,j,te,re);D.update=ne.run.bind(ne),Dr(D,!0),ne.run()},B=(D,k,M)=>{k.component=D;const K=D.vnode.props;D.vnode=k,D.next=null,uy(D,k.props,K,M),dy(D,k.children,M);const j=it();Qh(D),it(j)},$=(D,k,M,K,j,te,re,ne,X=!1)=>{const Z=D&&D.children,ce=D?D.shapeFlag:0,ye=k.children,{patchFlag:ue,shapeFlag:Ce}=k;if(ue>0){if(ue&128){oe(Z,ye,M,K,j,te,re,ne,X);return}else if(ue&256){J(Z,ye,M,K,j,te,re,ne,X);return}}Ce&8?(ce&16&&L(Z,j,te),ye!==Z&&l(M,ye)):ce&16?Ce&16?oe(Z,ye,M,K,j,te,re,ne,X):L(Z,j,te,!0):(ce&8&&l(M,""),Ce&16&&R(ye,M,K,j,te,re,ne,X))},J=(D,k,M,K,j,te,re,ne,X)=>{D=D||po,k=k||po;const Z=D.length,ce=k.length,ye=Math.min(Z,ce);let ue;for(ue=0;ue<ye;ue++){const Ce=k[ue]=X?dr(k[ue]):_n(k[ue]);v(D[ue],Ce,M,null,j,te,re,ne,X)}Z>ce?L(D,j,te,!0,!1,ye):R(k,M,K,j,te,re,ne,X,ye)},oe=(D,k,M,K,j,te,re,ne,X)=>{let Z=0;const ce=k.length;let ye=D.length-1,ue=ce-1;for(;Z<=ye&&Z<=ue;){const Ce=D[Z],Pe=k[Z]=X?dr(k[Z]):_n(k[Z]);if(Uo(Ce,Pe))v(Ce,Pe,M,null,j,te,re,ne,X);else break;Z++}for(;Z<=ye&&Z<=ue;){const Ce=D[ye],Pe=k[ue]=X?dr(k[ue]):_n(k[ue]);if(Uo(Ce,Pe))v(Ce,Pe,M,null,j,te,re,ne,X);else break;ye--,ue--}if(Z>ye){if(Z<=ue){const Ce=ue+1,Pe=Ce<ce?k[Ce].el:K;for(;Z<=ue;)v(null,k[Z]=X?dr(k[Z]):_n(k[Z]),M,Pe,j,te,re,ne,X),Z++}}else if(Z>ue)for(;Z<=ye;)de(D[Z],j,te,!0),Z++;else{const Ce=Z,Pe=Z,Qe=new Map;for(Z=Pe;Z<=ue;Z++){const Vt=k[Z]=X?dr(k[Z]):_n(k[Z]);Vt.key!=null&&Qe.set(Vt.key,Z)}let We,Jt=0;const an=ue-Pe+1;let kr=!1,eo=0;const Wo=new Array(an);for(Z=0;Z<an;Z++)Wo[Z]=0;for(Z=Ce;Z<=ye;Z++){const Vt=D[Z];if(Jt>=an){de(Vt,j,te,!0);continue}let yn;if(Vt.key!=null)yn=Qe.get(Vt.key);else for(We=Pe;We<=ue;We++)if(Wo[We-Pe]===0&&Uo(Vt,k[We])){yn=We;break}yn===void 0?de(Vt,j,te,!0):(Wo[yn-Pe]=Z+1,yn>=eo?eo=yn:kr=!0,v(Vt,k[yn],M,null,j,te,re,ne,X),Jt++)}const xl=kr?Lm(Wo):po;for(We=xl.length-1,Z=an-1;Z>=0;Z--){const Vt=Pe+Z,yn=k[Vt],wl=k[Vt+1],_l=Vt+1<ce?wl.el||Ed(wl):K;Wo[Z]===0?v(null,yn,M,_l,j,te,re,ne,X):kr&&(We<0||Z!==xl[We]?le(yn,M,_l,2,j):We--)}}},le=(D,k,M,K,j,te=null)=>{const{el:re,type:ne,transition:X,children:Z,shapeFlag:ce}=D;if($o(ne)||ne===Rs){zn(j,D).move(D,k,M,K);return}if(ce&6){le(D.component.subTree,k,M,K,j);return}if(ce&128){D.suspense.move(k,M,K);return}if(ce&64){ne.move(D,k,M,ie,j);return}if(ne===sn){r(re,k,M);for(let ye=0;ye<Z.length;ye++)le(Z[ye],k,M,K,j);r(D.anchor,k,M);return}if(ne===Es){x(D,k,M);return}if(K!==2&&ce&1&&X)if(K===0)Ll(re,X,()=>r(re,k,M),te,!0);else{const{leave:ye,delayLeave:ue,afterLeave:Ce}=X,Pe=()=>{D.ctx.isUnmounted?o(re):r(re,k,M)},Qe=()=>{re._isLeaving&&re[od](!0),ye(re,()=>{Pe(),Ce&&Ce()})};ue?ue(re,Pe,Qe):Qe()}else r(re,k,M)},de=(D,k,M,K=!1,j=!1)=>{const{type:te,props:re,ref:ne,children:X,dynamicChildren:Z,shapeFlag:ce,patchFlag:ye,dirs:ue,cacheIndex:Ce}=D;if(ye===-2&&(j=!1),ne!=null){const Jt=it();Yo(ne,null,M,D,!0),it(Jt)}if(Ce!=null&&(k.renderCache[Ce]=void 0),ce&256){$o(D.type)?zn(k,D).deactivate(D,k.ctx.getStorageContainer()):k.ctx.deactivate(D);return}const Pe=ce&1&&ue,Qe=!Jo(D);let We;if(Qe&&(We=re&&re.onVnodeBeforeUnmount)&&bn(We,k,D),ce&6)if($o(te)){ue&&Ft(D,null,k,"beforeUnmount"),zn(k,D).unmount(D,K),ue&&mt(()=>Ft(D,null,k,"unmounted"),void 0,M);return}else Ie(D.component,M,K);else{if(ce&128){D.suspense.unmount(M,K);return}if(Pe&&Ft(D,null,k,"beforeUnmount"),ce&64?D.type.remove(D,k,M,ie,K):Z&&!Z.hasOnce&&(te!==sn||ye>0&&ye&64)?L(Z,k,M,!1,!0):(te===sn&&ye&384||!j&&ce&16)&&L(X,k,M),te===Rs){zn(k,D).unmount(D,K);return}K&&Re(D)}(Qe&&(We=re&&re.onVnodeUnmounted)||Pe)&&mt(()=>{We&&bn(We,k,D),Pe&&Ft(D,null,k,"unmounted")},void 0,M)},Re=D=>{const{type:k,el:M,anchor:K,transition:j}=D;if(k===sn){Se(M,K);return}if(k===Es){b(D);return}j?gy(M,j,()=>o(M),!!(D.shapeFlag&1)):o(M)},Se=(D,k)=>{let M;for(;D!==k;)M=h(D),o(D),D=M;o(k)},Ie=(D,k,M)=>{const{bum:K,scope:j,effect:te,subTree:re,um:ne,m:X,a:Z}=D;Bl(X),Bl(Z),K&&Qi(K),j.stop(),te&&(te.stop(),de(re,D,k,M)),ne&&mt(ne,void 0,k),mt(()=>D.isUnmounted=!0,void 0,k)},L=(D,k,M,K=!1,j=!1,te=0)=>{for(let re=te;re<D.length;re++)de(D[re],k,M,K,j)},ee=D=>{if(D.shapeFlag&6)return $o(D.type)?h(D.anchor):ee(D.component.subTree);if(D.shapeFlag&128)return D.suspense.next();const k=h(D.anchor||D.el),M=k&&k[Dg];return M?h(M):k},Q=(D,k,M)=>{let K;D==null?k._vnode&&(de(k._vnode,null,null,!0),K=k._vnode.component):v(k._vnode||null,D,k,null,null,null,M),k._vnode=D,_g(K)},ie={p:v,um:de,m:le,r:Re,mt:z,umt:Ie,mc:R,pc:$,pbc:S,n:ee,o:e};return{render:Q,hydrate:void 0,hydrateNode:void 0,internals:ie,createApp:Zg((D,k,M,K)=>{const j=D._ceVNode||It(D._component,D._props);return j.appContext=D._context,K===!0?K="svg":K===!1&&(K=void 0),Q(j,k,K),j.component},D=>{Q(null,D._container)},$a)}}function Cs({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function Dr({effect:e,job:n,vapor:t},r){t||(r?(e.flags|=128,n.flags|=2):(e.flags&=-129,n.flags&=-3))}function my(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function _d(e,n,t=!1){const r=e.children,o=n.children;if(ke(r)&&ke(o))for(let i=0;i<r.length;i++){const a=r[i];let s=o[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=o[i]=dr(o[i]),s.el=a.el),!t&&s.patchFlag!==-2&&_d(a,s)),s.type===Ka&&(s.patchFlag!==-1?s.el=a.el:s.__elIndex=i+(e.type===sn?1:0)),s.type===_r&&!s.el&&(s.el=a.el)}}function Cd(e){const n=e.subTree&&e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Cd(n)}function Bl(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=4}function Ll(e,n,t,r,o=!1){o||my(r,n)?(n.beforeEnter(e),t(),mt(()=>n.enter(e),void 0,r)):t()}function gy(e,n,t,r=!0,o=!1){const i=()=>{t(),n&&!n.persisted&&n.afterLeave&&n.afterLeave()};if(o||r&&n&&!n.persisted){const{leave:a,delayLeave:s}=n,u=()=>{e._isLeaving&&o&&e[od](!0),a(e,i)};s?s(e,i,u):u()}else i()}function zn(e,n){const t=e?e.appContext:n.appContext;return t&&t.vapor}function $o(e){return e.__vapor}function yy(e,n){const t=[];let r=n,o=e;for(;r;){let i=r.subTree;if(!i)break;if(o===i||Rd(i.type)&&(i.ssContent===o||i.ssFallback===o)){const a=r.vnode;a.scopeId&&t.push(a.scopeId),a.slotScopeIds&&t.push(...a.slotScopeIds),o=a,r=r.parent}else break}return t}function Ed(e){if(e.placeholder)return e.placeholder;const n=e.component;return n?Ed(n.subTree):null}const Rd=e=>e.__isSuspense;function by(e,n,t){t&&t.pendingBranch?ke(e)?t.effects.push(...e):t.effects.push(e):wg(e,n)}const sn=Symbol.for("v-fgt"),Ka=Symbol.for("v-txt"),_r=Symbol.for("v-cmt"),Es=Symbol.for("v-stc"),Rs=Symbol.for("v-vps"),Qo=[];let Ht=null;function jt(e=!1){Qo.push(Ht=e?null:[])}function xy(){Qo.pop(),Ht=Qo[Qo.length-1]||null}let ci=1;function ha(e,n=!1){ci+=e,e<0&&Ht&&n&&(Ht.hasOnce=!0)}function Sd(e){return e.dynamicChildren=ci>0?Ht||po:null,xy(),ci>0&&Ht&&Ht.push(e),e}function cn(e,n,t,r,o,i){return Sd(me(e,n,t,r,o,i,!0))}function Id(e,n,t,r,o){return Sd(It(e,n,t,r,o,!0))}function da(e){return e?e.__v_isVNode===!0:!1}function Uo(e,n){return e.type===n.type&&e.key===n.key}const Ad=({key:e})=>e??null,na=({ref:e,ref_key:n,ref_for:t},r=nn)=>(typeof e=="number"&&(e=""+e),e!=null?ut(e)||$e(e)||Ne(e)?{i:r,r:e,k:n,f:!!t}:e:null);function me(e,n=null,t=null,r=0,o=null,i=e===sn?0:1,a=!1,s=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Ad(n),ref:n&&na(n),scopeId:td,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:nn};return s?(vc(u,t),i&128&&e.normalize(u)):t&&(u.shapeFlag|=ut(t)?8:16),ci>0&&!a&&Ht&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&Ht.push(u),u}const It=wy;function wy(e,n=null,t=null,r=0,o=null,i=!1){if((!e||e===Hg)&&(e=_r),da(e)){const s=Do(e,n,!0);return t&&vc(s,t),ci>0&&!i&&Ht&&(s.shapeFlag&6?Ht[Ht.indexOf(e)]=s:Ht.push(s)),s.patchFlag=-2,s}if(Ny(e)&&(e=e.__vccOpts),n){n=_y(n);let{class:s,style:u}=n;s&&!ut(s)&&(n.class=Ur(s)),Ke(u)&&(Ga(u)&&!ke(u)&&(u=xt({},u)),n.style=Ua(u))}const a=ut(e)?1:Rd(e)?128:Tg(e)?64:Ke(e)?4:Ne(e)?2:0;return me(e,n,t,r,o,a,i,!0)}function _y(e){return e?Ga(e)||md(e)?xt({},e):e:null}function Do(e,n,t=!1,r=!1){const{props:o,ref:i,patchFlag:a,children:s,transition:u}=e,c=n?Cy(o||{},n):o,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Ad(c),ref:n&&n.ref?t&&i?ke(i)?i.concat(na(n)):[i,na(n)]:na(n):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==sn?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Do(e.ssContent),ssFallback:e.ssFallback&&Do(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&r&&lc(l,u.clone(l)),l}function pc(e=" ",n=0){return It(Ka,null,e,n)}function kd(e="",n=!1){return n?(jt(),Id(_r,null,e)):It(_r,null,e)}function _n(e){return e==null||typeof e=="boolean"?It(_r):ke(e)?It(sn,null,e.slice()):da(e)?dr(e):It(Ka,null,String(e))}function dr(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Do(e)}function vc(e,n){let t=0;const{shapeFlag:r}=e;if(n==null)n=null;else if(ke(n))t=16;else if(typeof n=="object")if(r&65){const o=n.default;o&&(o._c&&(o._d=!1),vc(e,o()),o._c&&(o._d=!0));return}else{t=32;const o=n._;!o&&!md(n)?n._ctx=nn:o===3&&nn&&(nn.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else Ne(n)?(n={default:n,_ctx:nn},t=32):(n=String(n),r&64?(t=16,n=[pc(n)]):t=8);e.children=n,e.shapeFlag|=t}function Cy(...e){const n={};for(let t=0;t<e.length;t++){const r=e[t];for(const o in r)if(o==="class")n.class!==r.class&&(n.class=Ur([n.class,r.class]));else if(o==="style")n.style=Ua([n.style,r.style]);else if(Ba(o)){const i=n[o],a=r[o];a&&i!==a&&!(ke(i)&&i.includes(a))&&(n[o]=i?[].concat(i,a):a)}else o!==""&&(n[o]=r[o])}return n}function bn(e,n,t,r=null){Pn(e,n,7,[t,r])}let en=null;const mc=()=>en||nn;let li=!1,xu,Dd;{const e=Ih(),n=(t,r)=>{let o;return(o=e[t])||(o=e[t]=[]),o.push(r),i=>{o.length>1?o.forEach(a=>a(i)):o[0](i)}};Dd=n("__VUE_INSTANCE_SETTERS__",t=>en=t),xu=n("__VUE_SSR_SETTERS__",t=>li=t)}const hn=(e,n=e!==null?e.scope:void 0)=>{try{return[en,du(n)]}finally{Dd(e)}},Ey=hd();let Ry=0;function Sy(e,n,t){const r=e.type,o=(n?n.appContext:e.appContext)||Ey,i={uid:Ry++,vnode:e,type:r,parent:n,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new $h(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(o.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yd(r,o),emitsOptions:dd(r,o),emit:null,emitted:null,propsDefaults:null,inheritAttrs:r.inheritAttrs,ctx:He,data:He,props:He,attrs:He,slots:He,refs:He,setupState:He,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=n?n.root:i,i.emit=ty.bind(null,i),e.ce&&e.ce(i),i}function Td(e){return e.vnode.shapeFlag&4}function Iy(e,n=!1,t=!1){n&&xu(n);const{props:r,children:o,vi:i}=e.vnode,a=Td(e);i?i(e):(sy(e,r,a,n),hy(e,o,t||n));const s=a?Ay(e,n):void 0;return n&&xu(!1),s}function Ay(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,qg);const{setup:r}=t;if(r){const o=it(),i=e.setupContext=r.length>1?Dy(e):null,a=hn(e),s=Ha(r,e,0,[e.props,i]),u=_h(s);if(it(o),hn(...a),(u||e.sp)&&!Jo(e)&&ad(e),u){const c=()=>{hn(null,void 0)};if(s.then(c,c),n)return s.then(l=>{wu(e,l)}).catch(l=>{_i(l,e,0)});e.asyncDep=s}else wu(e,s)}else Nd(e)}function wu(e,n,t){Ne(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Ke(n)&&(e.setupState=jh(n)),Nd(e)}function Nd(e,n,t){const r=e.type;e.render||(e.render=r.render||An);{const o=hn(e),i=it();try{Kg(e)}finally{it(i),hn(...o)}}}const ky={get(e,n){return _t(e,"get",""),e[n]}};function Dy(e){return{attrs:new Proxy(e.attrs,ky),slots:e.slots,emit:e.emit,expose:n=>Ty(e,n)}}function Ty(e,n){e.exposed=n||{}}function $a(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(jh(sc(e.exposed)),{get(n,t){if(t in n)return n[t];{const r=la();if(t in r)return r[t](e)}},has(n,t){const r=la();return t in n||t in r}})):e.proxy}function Ny(e){return Ne(e)&&"__vccOpts"in e}const Gt=(e,n)=>vg(e,n,li);function Fd(e,n,t){try{ha(-1);const r=arguments.length;return r===2?Ke(n)&&!ke(n)?da(n)?It(e,null,[n]):It(e,n):It(e,null,n):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&da(t)&&(t=[t]),It(e,n,t))}finally{ha(1)}}const Fy="3.6.0-beta.5";let _u;const Wl=typeof window<"u"&&window.trustedTypes;if(Wl)try{_u=Wl.createPolicy("vue",{createHTML:e=>e})}catch{}const Pd=_u?e=>_u.createHTML(e):e=>e,Py="http://www.w3.org/2000/svg",My="http://www.w3.org/1998/Math/MathML",jn=typeof document<"u"?document:null,Vl=jn&&jn.createElement("template"),Oy={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,r)=>{const o=n==="svg"?jn.createElementNS(Py,e):n==="mathml"?jn.createElementNS(My,e):t?jn.createElement(e,{is:t}):jn.createElement(e);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>jn.createTextNode(e),createComment:e=>jn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>jn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,r,o,i){const a=t?t.previousSibling:n.lastChild;if(o&&(o===i||o.nextSibling))for(;n.insertBefore(o.cloneNode(!0),t),!(o===i||!(o=o.nextSibling)););else{Vl.innerHTML=Pd(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const s=Vl.content;if(r==="svg"||r==="mathml"){const u=s.firstChild;for(;u.firstChild;)s.appendChild(u.firstChild);s.removeChild(u)}n.insertBefore(s,t)}return[a?a.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},By=Symbol("_vtc");function Ly(e,n,t){const r=e[By];r&&(n=(n?[n,...r]:[...r]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const Ul=Symbol("_vod"),Wy=Symbol("_vsh"),Vy=Symbol(""),Uy=/(?:^|;)\s*display\s*:/;function zy(e,n,t){const r=e.style,o=ut(t);let i=!1;if(t&&!o){if(n)if(ut(n))for(const a of n.split(";")){const s=a.slice(0,a.indexOf(":")).trim();t[s]==null&&ra(r,s,"")}else for(const a in n)t[a]==null&&ra(r,a,"");for(const a in t)a==="display"&&(i=!0),ra(r,a,t[a])}else if(o){if(n!==t){const a=r[Vy];a&&(t+=";"+a),r.cssText=t,i=Uy.test(t)}}else n&&e.removeAttribute("style");Ul in e&&(e[Ul]=i?r.display:"",e[Wy]&&(r.display="none"))}const zl=/\s*!important$/;function ra(e,n,t){if(ke(t))t.forEach(r=>ra(e,n,r));else{const r=t==null?"":String(t);if(n.startsWith("--"))e.setProperty(n,r);else{const o=Gy(e,n);zl.test(r)?e.setProperty($r(o),r.replace(zl,""),"important"):e[o]=r}}}const Gl=["Webkit","Moz","ms"],Ss={};function Gy(e,n){const t=Ss[n];if(t)return t;let r=wr(n);if(r!=="filter"&&r in e)return Ss[n]=r;r=Rh(r);for(let o=0;o<Gl.length;o++){const i=Gl[o]+r;if(i in e)return Ss[n]=i}return n}const Hl="http://www.w3.org/1999/xlink";function jl(e,n,t,r,o,i=Om(n)){r&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(Hl,n.slice(6,n.length)):e.setAttributeNS(Hl,n,t):t==null||i&&!Ah(t)?e.removeAttribute(n):e.setAttribute(n,i?"":Rr(t)?String(t):t)}function ql(e,n,t,r,o){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?Pd(t):t);return}const i=e.tagName;if(n==="value"&&Dm(i)){const s=i==="OPTION"?e.getAttribute("value")||"":e.value,u=t==null?e.type==="checkbox"?"on":"":String(t);(s!==u||!("_value"in e))&&(e.value=u),t==null&&e.removeAttribute(n),e._value=t;return}let a=!1;if(t===""||t==null){const s=typeof e[n];s==="boolean"?t=Ah(t):t==null&&s==="string"?(t="",a=!0):s==="number"&&(t=0,a=!0)}try{e[n]=t}catch{}a&&e.removeAttribute(o||n)}function so(e,n,t,r){e.addEventListener(n,t,r)}function Hy(e,n,t,r){e.removeEventListener(n,t,r)}const Kl=Symbol("_vei");function jy(e,n,t,r,o=null){const i=e[Kl]||(e[Kl]={}),a=i[n];if(r&&a)a.value=r;else{const[s,u]=qy(n);r?so(e,s,i[n]=Xy(r,o),u):a&&(Hy(e,s,a,u),i[n]=void 0)}}const $l=/(?:Once|Passive|Capture)$/;function qy(e){let n;if($l.test(e)){n={};let t;for(;t=e.match($l);)e=e.slice(0,e.length-t[0].length),n[t[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):$r(e.slice(2)),n]}let Is=0;const Ky=Promise.resolve(),$y=()=>Is||(Ky.then(()=>Is=0),Is=Date.now());function Xy(e,n){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Pn(Yy(r,t.value),n,5,[r])};return t.value=e,t.attached=$y(),t}function Yy(e,n){if(ke(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(r=>o=>!o._stopped&&r&&r(o))}else return n}const Jy=(e,n,t,r,o,i)=>{const a=o==="svg";n==="class"?Ly(e,r,a):n==="style"?zy(e,t,r):Ba(n)?nc(n)||jy(e,n,t,r,i):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Qy(e,n,r,a))?(ql(e,n,r),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&jl(e,n,r,a,i,n!=="value")):e._isVueCE&&(/[A-Z]/.test(n)||!ut(r))?ql(e,wr(n),r,i,n):(n==="true-value"?e._trueValue=r:n==="false-value"&&(e._falseValue=r),jl(e,n,r,a))};function Qy(e,n,t,r){return r?!!(n==="innerHTML"||n==="textContent"||n in e&&Cl(n)&&Ne(t)):Bm(e.tagName,n)||Cl(n)&&ut(t)?!1:n in e}const Xl=e=>{const n=e.props["onUpdate:modelValue"]||!1;return ke(n)?t=>Qi(n,t):n};function Zy(e){e.target.composing=!0}function Yl(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const Cu=Symbol("_assign"),e0={created(e,{modifiers:{lazy:n,trim:t,number:r}},o){e[Cu]=Xl(o),t0(e,t,r||!!(o.props&&o.props.type==="number"),n)},mounted(e,{value:n}){e.value=n??""},beforeUpdate(e,{value:n,oldValue:t,modifiers:{lazy:r,trim:o,number:i}},a){e[Cu]=Xl(a),n0(e,t,n,o,i,r)}};function Jl(e,n,t){return n&&(e=e.trim()),t&&(e=rc(e)),e}const t0=(e,n,t,r,o)=>{so(e,r?"change":"input",i=>{i.target.composing||(0,e[Cu])(Jl(e.value,n,t||e.type==="number"))}),(n||t)&&so(e,"change",()=>{e.value=Jl(e.value,n,t||e.type==="number")}),r||(so(e,"compositionstart",Zy),so(e,"compositionend",Yl),so(e,"change",Yl))},n0=(e,n,t,r,o,i)=>{if(e.composing)return;const a=(o||e.type==="number")&&!/^0\d/.test(e.value)?rc(e.value):e.value,s=t??"";a!==s&&(document.activeElement===e&&e.type!=="range"&&(i&&t===n||r&&e.value.trim()===s)||(e.value=s))},r0=xt({patchProp:Jy},Oy);let Ql;function o0(){return Ql||(Ql=py(r0))}const i0=((...e)=>{const n=o0().createApp(...e),{mount:t}=n;return n.mount=r=>{const o=s0(r);if(!o)return;const i=n._component;!Ne(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const a=t(o,!1,a0(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),a},n});function a0(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function s0(e){return ut(e)?document.querySelector(e):e}let Md;const Xa=e=>Md=e,Od=Symbol();function Eu(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Zo;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Zo||(Zo={}));function u0(){const e=Xh(!0),n=e.run(()=>St({}));let t=[],r=[];const o=sc({install(i){Xa(o),o._a=i,i.provide(Od,o),i.config.globalProperties.$pinia=o,r.forEach(a=>t.push(a)),r=[]},use(i){return this._a?t.push(i):r.push(i),this},_p:t,_a:null,_e:e,_s:new Map,state:n});return o}const Bd=()=>{};function Zl(e,n,t,r=Bd){e.add(n);const o=()=>{e.delete(n)&&r()};return!t&&hg()&&dg(o),o}function no(e,...n){e.forEach(t=>{t(...n)})}const c0=e=>e(),ef=Symbol(),As=Symbol();function Ru(e,n){e instanceof Map&&n instanceof Map?n.forEach((t,r)=>e.set(r,t)):e instanceof Set&&n instanceof Set&&n.forEach(e.add,e);for(const t in n){if(!n.hasOwnProperty(t))continue;const r=n[t],o=e[t];Eu(o)&&Eu(r)&&e.hasOwnProperty(t)&&!$e(r)&&!kn(r)?e[t]=Ru(o,r):e[t]=r}return e}const l0=Symbol();function f0(e){return!Eu(e)||!Object.prototype.hasOwnProperty.call(e,l0)}const{assign:lr}=Object;function h0(e){return!!($e(e)&&e.effect)}function d0(e,n,t,r){const{state:o,actions:i,getters:a}=n,s=t.state.value[e];let u;function c(){s||(t.state.value[e]=o?o():{});const l=ug(t.state.value[e]);return lr(l,i,Object.keys(a||{}).reduce((f,h)=>(f[h]=sc(Gt(()=>{Xa(t);const d=t._s.get(e);return a[h].call(d,d)})),f),{}))}return u=Ld(e,c,n,t,r,!0),u}function Ld(e,n,t={},r,o,i){let a;const s=lr({actions:{}},t),u={deep:!0};let c,l,f=new Set,h=new Set,d;const p=r.state.value[e];!i&&!p&&(r.state.value[e]={});let v;function m(R){let E;c=l=!1,typeof R=="function"?(R(r.state.value[e]),E={type:Zo.patchFunction,storeId:e,events:d}):(Ru(r.state.value[e],R),E={type:Zo.patchObject,payload:R,storeId:e,events:d});const S=v=Symbol();uc().then(()=>{v===S&&(c=!0)}),l=!0,no(f,E,r.state.value[e])}const g=i?function(){const{state:E}=t,S=E?E():{};this.$patch(F=>{lr(F,S)})}:Bd;function y(){a.stop(),f.clear(),h.clear(),r._s.delete(e)}const x=(R,E="")=>{if(ef in R)return R[As]=E,R;const S=function(){Xa(r);const F=Array.from(arguments),N=new Set,U=new Set;function z(O){N.add(O)}function G(O){U.add(O)}no(h,{args:F,name:S[As],store:w,after:z,onError:G});let H;try{H=R.apply(this&&this.$id===e?this:w,F)}catch(O){throw no(U,O),O}return H instanceof Promise?H.then(O=>(no(N,O),O)).catch(O=>(no(U,O),Promise.reject(O))):(no(N,H),H)};return S[ef]=!0,S[As]=E,S},b={_p:r,$id:e,$onAction:Zl.bind(null,h),$patch:m,$reset:g,$subscribe(R,E={}){const S=Zl(f,R,E.detached,()=>F()),F=a.run(()=>mo(()=>r.state.value[e],N=>{(E.flush==="sync"?l:c)&&R({storeId:e,type:Zo.direct,events:d},N)},lr({},u,E)));return S},$dispose:y},w=wi(b);r._s.set(e,w);const A=(r._a&&r._a.runWithContext||c0)(()=>r._e.run(()=>(a=Xh()).run(()=>n({action:x}))));for(const R in A){const E=A[R];if($e(E)&&!h0(E)||kn(E))i||(p&&f0(E)&&($e(E)?E.value=p[R]:Ru(E,p[R])),r.state.value[e][R]=E);else if(typeof E=="function"){const S=x(E,R);A[R]=S,s.actions[R]=E}}return lr(w,A),lr(Le(w),A),Object.defineProperty(w,"$state",{get:()=>r.state.value[e],set:R=>{m(E=>{lr(E,R)})}}),r._p.forEach(R=>{lr(w,a.run(()=>R({store:w,app:r._a,pinia:r,options:s})))}),p&&i&&t.hydrate&&t.hydrate(w.$state,p),c=!0,l=!0,w}function p0(e,n,t){let r;const o=typeof n=="function";r=o?t:n;function i(a,s){const u=Rg();return a=a||(u?fn(Od,null):null),a&&Xa(a),a=Md,a._s.has(e)||(o?Ld(e,n,r,a):d0(e,r,a)),a._s.get(e)}return i.$id=e,i}function Ya(e){const n=Le(e),t={};for(const r in n){const o=n[r];o.effect?t[r]=Gt({get:()=>e[r],set(i){e[r]=i}}):($e(o)||kn(o))&&(t[r]=fg(e,r))}return t}const uo=typeof document<"u";function Wd(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function v0(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Wd(e.default)}const ze=Object.assign;function ks(e,n){const t={};for(const r in n){const o=n[r];t[r]=pn(o)?o.map(e):e(o)}return t}const ei=()=>{},pn=Array.isArray;function tf(e,n){const t={};for(const r in e)t[r]=r in n?n[r]:e[r];return t}let et=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Vd=Symbol("");et.MATCHER_NOT_FOUND+"",et.NAVIGATION_GUARD_REDIRECT+"",et.NAVIGATION_ABORTED+"",et.NAVIGATION_CANCELLED+"",et.NAVIGATION_DUPLICATED+"";function To(e,n){return ze(new Error,{type:e,[Vd]:!0},n)}function Vn(e,n){return e instanceof Error&&Vd in e&&(n==null||!!(e.type&n))}const m0=["params","query","hash"];function g0(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const n={};for(const t of m0)t in e&&(n[t]=e[t]);return JSON.stringify(n,null,2)}const y0=Symbol(""),nf=Symbol(""),Ja=Symbol(""),Ud=Symbol(""),Su=Symbol("");function b0(){return fn(Ja)}const zd=/#/g,x0=/&/g,w0=/\//g,_0=/=/g,C0=/\?/g,Gd=/\+/g,E0=/%5B/g,R0=/%5D/g,Hd=/%5E/g,S0=/%60/g,jd=/%7B/g,I0=/%7C/g,qd=/%7D/g,A0=/%20/g;function gc(e){return e==null?"":encodeURI(""+e).replace(I0,"|").replace(E0,"[").replace(R0,"]")}function k0(e){return gc(e).replace(jd,"{").replace(qd,"}").replace(Hd,"^")}function Iu(e){return gc(e).replace(Gd,"%2B").replace(A0,"+").replace(zd,"%23").replace(x0,"%26").replace(S0,"`").replace(jd,"{").replace(qd,"}").replace(Hd,"^")}function D0(e){return Iu(e).replace(_0,"%3D")}function T0(e){return gc(e).replace(zd,"%23").replace(C0,"%3F")}function N0(e){return T0(e).replace(w0,"%2F")}function fi(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const F0=/\/$/,P0=e=>e.replace(F0,"");function Ds(e,n,t="/"){let r,o={},i="",a="";const s=n.indexOf("#");let u=n.indexOf("?");return u=s>=0&&u>s?-1:u,u>=0&&(r=n.slice(0,u),i=n.slice(u,s>0?s:n.length),o=e(i.slice(1))),s>=0&&(r=r||n.slice(0,s),a=n.slice(s,n.length)),r=L0(r??n,t),{fullPath:r+i+a,path:r,query:o,hash:fi(a)}}function M0(e,n){const t=n.query?e(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function rf(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function O0(e,n,t){const r=n.matched.length-1,o=t.matched.length-1;return r>-1&&r===o&&No(n.matched[r],t.matched[o])&&Kd(n.params,t.params)&&e(n.query)===e(t.query)&&n.hash===t.hash}function No(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Kd(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(var t in e)if(!B0(e[t],n[t]))return!1;return!0}function B0(e,n){return pn(e)?of(e,n):pn(n)?of(n,e):(e&&e.valueOf())===(n&&n.valueOf())}function of(e,n){return pn(n)?e.length===n.length&&e.every((t,r)=>t===n[r]):e.length===1&&e[0]===n}function L0(e,n){if(e.startsWith("/"))return e;if(!e)return n;const t=n.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let i=t.length-1,a,s;for(a=0;a<r.length;a++)if(s=r[a],s!==".")if(s==="..")i>1&&i--;else break;return t.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const sr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Au=(function(e){return e.pop="pop",e.push="push",e})({}),Ts=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function W0(e){if(!e)if(uo){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),P0(e)}const V0=/^[^#]+#/;function U0(e,n){return e.replace(V0,"#")+n}function z0(e,n){const t=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:n.behavior,left:r.left-t.left-(n.left||0),top:r.top-t.top-(n.top||0)}}const Qa=()=>({left:window.scrollX,top:window.scrollY});function G0(e){let n;if("el"in e){const t=e.el,r=typeof t=="string"&&t.startsWith("#"),o=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!o)return;n=z0(o,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function af(e,n){return(history.state?history.state.position-n:-1)+e}const ku=new Map;function H0(e,n){ku.set(e,n)}function j0(e){const n=ku.get(e);return ku.delete(e),n}function q0(e){return typeof e=="string"||e&&typeof e=="object"}function $d(e){return typeof e=="string"||typeof e=="symbol"}function K0(e){const n={};if(e===""||e==="?")return n;const t=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<t.length;++r){const o=t[r].replace(Gd," "),i=o.indexOf("="),a=fi(i<0?o:o.slice(0,i)),s=i<0?null:fi(o.slice(i+1));if(a in n){let u=n[a];pn(u)||(u=n[a]=[u]),u.push(s)}else n[a]=s}return n}function sf(e){let n="";for(let t in e){const r=e[t];if(t=D0(t),r==null){r!==void 0&&(n+=(n.length?"&":"")+t);continue}(pn(r)?r.map(o=>o&&Iu(o)):[r&&Iu(r)]).forEach(o=>{o!==void 0&&(n+=(n.length?"&":"")+t,o!=null&&(n+="="+o))})}return n}function $0(e){const n={};for(const t in e){const r=e[t];r!==void 0&&(n[t]=pn(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return n}function zo(){let e=[];function n(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function t(){e=[]}return{add:n,list:()=>e.slice(),reset:t}}function pr(e,n,t,r,o,i=a=>a()){const a=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((s,u)=>{const c=h=>{h===!1?u(To(et.NAVIGATION_ABORTED,{from:t,to:n})):h instanceof Error?u(h):q0(h)?u(To(et.NAVIGATION_GUARD_REDIRECT,{from:n,to:h})):(a&&r.enterCallbacks[o]===a&&typeof h=="function"&&a.push(h),s())},l=i(()=>e.call(r&&r.instances[o],n,t,c));let f=Promise.resolve(l);e.length<3&&(f=f.then(c)),f.catch(h=>u(h))})}function Ns(e,n,t,r,o=i=>i()){const i=[];for(const a of e)for(const s in a.components){let u=a.components[s];if(!(n!=="beforeRouteEnter"&&!a.instances[s]))if(Wd(u)){const c=(u.__vccOpts||u)[n];c&&i.push(pr(c,t,r,a,s,o))}else{let c=u();i.push(()=>c.then(l=>{if(!l)throw new Error(`Couldn't resolve component "${s}" at "${a.path}"`);const f=v0(l)?l.default:l;a.mods[s]=l,a.components[s]=f;const h=(f.__vccOpts||f)[n];return h&&pr(h,t,r,a,s,o)()}))}}return i}function X0(e,n){const t=[],r=[],o=[],i=Math.max(n.matched.length,e.matched.length);for(let a=0;a<i;a++){const s=n.matched[a];s&&(e.matched.find(c=>No(c,s))?r.push(s):t.push(s));const u=e.matched[a];u&&(n.matched.find(c=>No(c,u))||o.push(u))}return[t,r,o]}let Y0=()=>location.protocol+"//"+location.host;function Xd(e,n){const{pathname:t,search:r,hash:o}=n,i=e.indexOf("#");if(i>-1){let a=o.includes(e.slice(i))?e.slice(i).length:1,s=o.slice(a);return s[0]!=="/"&&(s="/"+s),rf(s,"")}return rf(t,e)+r+o}function J0(e,n,t,r){let o=[],i=[],a=null;const s=({state:h})=>{const d=Xd(e,location),p=t.value,v=n.value;let m=0;if(h){if(t.value=d,n.value=h,a&&a===p){a=null;return}m=v?h.position-v.position:0}else r(d);o.forEach(g=>{g(t.value,p,{delta:m,type:Au.pop,direction:m?m>0?Ts.forward:Ts.back:Ts.unknown})})};function u(){a=t.value}function c(h){o.push(h);const d=()=>{const p=o.indexOf(h);p>-1&&o.splice(p,1)};return i.push(d),d}function l(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(ze({},h.state,{scroll:Qa()}),"")}}function f(){for(const h of i)h();i=[],window.removeEventListener("popstate",s),window.removeEventListener("pagehide",l),document.removeEventListener("visibilitychange",l)}return window.addEventListener("popstate",s),window.addEventListener("pagehide",l),document.addEventListener("visibilitychange",l),{pauseListeners:u,listen:c,destroy:f}}function uf(e,n,t,r=!1,o=!1){return{back:e,current:n,forward:t,replaced:r,position:window.history.length,scroll:o?Qa():null}}function Q0(e){const{history:n,location:t}=window,r={value:Xd(e,t)},o={value:n.state};o.value||i(r.value,{back:null,current:r.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function i(u,c,l){const f=e.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?e:e.slice(f))+u:Y0()+e+u;try{n[l?"replaceState":"pushState"](c,"",h),o.value=c}catch(d){console.error(d),t[l?"replace":"assign"](h)}}function a(u,c){i(u,ze({},n.state,uf(o.value.back,u,o.value.forward,!0),c,{position:o.value.position}),!0),r.value=u}function s(u,c){const l=ze({},o.value,n.state,{forward:u,scroll:Qa()});i(l.current,l,!0),i(u,ze({},uf(r.value,u,null),{position:l.position+1},c),!1),r.value=u}return{location:r,state:o,push:s,replace:a}}function Z0(e){e=W0(e);const n=Q0(e),t=J0(e,n.state,n.location,n.replace);function r(i,a=!0){a||t.pauseListeners(),history.go(i)}const o=ze({location:"",base:e,go:r,createHref:U0.bind(null,e)},n,t);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>n.state.value}),o}let Br=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var rt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(rt||{});const eb={type:Br.Static,value:""},tb=/[a-zA-Z0-9_]/;function nb(e){if(!e)return[[]];if(e==="/")return[[eb]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=rt.Static,r=t;const o=[];let i;function a(){i&&o.push(i),i=[]}let s=0,u,c="",l="";function f(){c&&(t===rt.Static?i.push({type:Br.Static,value:c}):t===rt.Param||t===rt.ParamRegExp||t===rt.ParamRegExpEnd?(i.length>1&&(u==="*"||u==="+")&&n(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Br.Param,value:c,regexp:l,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):n("Invalid state to consume buffer"),c="")}function h(){c+=u}for(;s<e.length;){if(u=e[s++],u==="\\"&&t!==rt.ParamRegExp){r=t,t=rt.EscapeNext;continue}switch(t){case rt.Static:u==="/"?(c&&f(),a()):u===":"?(f(),t=rt.Param):h();break;case rt.EscapeNext:h(),t=r;break;case rt.Param:u==="("?t=rt.ParamRegExp:tb.test(u)?h():(f(),t=rt.Static,u!=="*"&&u!=="?"&&u!=="+"&&s--);break;case rt.ParamRegExp:u===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+u:t=rt.ParamRegExpEnd:l+=u;break;case rt.ParamRegExpEnd:f(),t=rt.Static,u!=="*"&&u!=="?"&&u!=="+"&&s--,l="";break;default:n("Unknown state");break}}return t===rt.ParamRegExp&&n(`Unfinished custom RegExp for param "${c}"`),f(),a(),o}const cf="[^/]+?",rb={sensitive:!1,strict:!1,start:!0,end:!0};var Tt=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Tt||{});const ob=/[.+*?^${}()[\]/\\]/g;function ib(e,n){const t=ze({},rb,n),r=[];let o=t.start?"^":"";const i=[];for(const c of e){const l=c.length?[]:[Tt.Root];t.strict&&!c.length&&(o+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=Tt.Segment+(t.sensitive?Tt.BonusCaseSensitive:0);if(h.type===Br.Static)f||(o+="/"),o+=h.value.replace(ob,"\\$&"),d+=Tt.Static;else if(h.type===Br.Param){const{value:p,repeatable:v,optional:m,regexp:g}=h;i.push({name:p,repeatable:v,optional:m});const y=g||cf;if(y!==cf){d+=Tt.BonusCustomRegExp;try{new RegExp(`(${y})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${p}" (${y}): `+b.message)}}let x=v?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(x=m&&c.length<2?`(?:/${x})`:"/"+x),m&&(x+="?"),o+=x,d+=Tt.Dynamic,m&&(d+=Tt.BonusOptional),v&&(d+=Tt.BonusRepeatable),y===".*"&&(d+=Tt.BonusWildcard)}l.push(d)}r.push(l)}if(t.strict&&t.end){const c=r.length-1;r[c][r[c].length-1]+=Tt.BonusStrict}t.strict||(o+="/?"),t.end?o+="$":t.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const a=new RegExp(o,t.sensitive?"":"i");function s(c){const l=c.match(a),f={};if(!l)return null;for(let h=1;h<l.length;h++){const d=l[h]||"",p=i[h-1];f[p.name]=d&&p.repeatable?d.split("/"):d}return f}function u(c){let l="",f=!1;for(const h of e){(!f||!l.endsWith("/"))&&(l+="/"),f=!1;for(const d of h)if(d.type===Br.Static)l+=d.value;else if(d.type===Br.Param){const{value:p,repeatable:v,optional:m}=d,g=p in c?c[p]:"";if(pn(g)&&!v)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const y=pn(g)?g.join("/"):g;if(!y)if(m)h.length<2&&(l.endsWith("/")?l=l.slice(0,-1):f=!0);else throw new Error(`Missing required param "${p}"`);l+=y}}return l||"/"}return{re:a,score:r,keys:i,parse:s,stringify:u}}function ab(e,n){let t=0;for(;t<e.length&&t<n.length;){const r=n[t]-e[t];if(r)return r;t++}return e.length<n.length?e.length===1&&e[0]===Tt.Static+Tt.Segment?-1:1:e.length>n.length?n.length===1&&n[0]===Tt.Static+Tt.Segment?1:-1:0}function Yd(e,n){let t=0;const r=e.score,o=n.score;for(;t<r.length&&t<o.length;){const i=ab(r[t],o[t]);if(i)return i;t++}if(Math.abs(o.length-r.length)===1){if(lf(r))return 1;if(lf(o))return-1}return o.length-r.length}function lf(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const sb={strict:!1,end:!0,sensitive:!1};function ub(e,n,t){const r=ib(nb(e.path),t),o=ze(r,{record:e,parent:n,children:[],alias:[]});return n&&!o.record.aliasOf==!n.record.aliasOf&&n.children.push(o),o}function cb(e,n){const t=[],r=new Map;n=tf(sb,n);function o(f){return r.get(f)}function i(f,h,d){const p=!d,v=hf(f);v.aliasOf=d&&d.record;const m=tf(n,f),g=[v];if("alias"in f){const b=typeof f.alias=="string"?[f.alias]:f.alias;for(const w of b)g.push(hf(ze({},v,{components:d?d.record.components:v.components,path:w,aliasOf:d?d.record:v})))}let y,x;for(const b of g){const{path:w}=b;if(h&&w[0]!=="/"){const _=h.record.path,A=_[_.length-1]==="/"?"":"/";b.path=h.record.path+(w&&A+w)}if(y=ub(b,h,m),d?d.alias.push(y):(x=x||y,x!==y&&x.alias.push(y),p&&f.name&&!df(y)&&a(f.name)),Jd(y)&&u(y),v.children){const _=v.children;for(let A=0;A<_.length;A++)i(_[A],y,d&&d.children[A])}d=d||y}return x?()=>{a(x)}:ei}function a(f){if($d(f)){const h=r.get(f);h&&(r.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(a),h.alias.forEach(a))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function s(){return t}function u(f){const h=hb(f,t);t.splice(h,0,f),f.record.name&&!df(f)&&r.set(f.record.name,f)}function c(f,h){let d,p={},v,m;if("name"in f&&f.name){if(d=r.get(f.name),!d)throw To(et.MATCHER_NOT_FOUND,{location:f});m=d.record.name,p=ze(ff(h.params,d.keys.filter(x=>!x.optional).concat(d.parent?d.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),f.params&&ff(f.params,d.keys.map(x=>x.name))),v=d.stringify(p)}else if(f.path!=null)v=f.path,d=t.find(x=>x.re.test(v)),d&&(p=d.parse(v),m=d.record.name);else{if(d=h.name?r.get(h.name):t.find(x=>x.re.test(h.path)),!d)throw To(et.MATCHER_NOT_FOUND,{location:f,currentLocation:h});m=d.record.name,p=ze({},h.params,f.params),v=d.stringify(p)}const g=[];let y=d;for(;y;)g.unshift(y.record),y=y.parent;return{name:m,path:v,params:p,matched:g,meta:fb(g)}}e.forEach(f=>i(f));function l(){t.length=0,r.clear()}return{addRoute:i,resolve:c,removeRoute:a,clearRoutes:l,getRoutes:s,getRecordMatcher:o}}function ff(e,n){const t={};for(const r of n)r in e&&(t[r]=e[r]);return t}function hf(e){const n={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:lb(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function lb(e){const n={},t=e.props||!1;if("component"in e)n.default=t;else for(const r in e.components)n[r]=typeof t=="object"?t[r]:t;return n}function df(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function fb(e){return e.reduce((n,t)=>ze(n,t.meta),{})}function hb(e,n){let t=0,r=n.length;for(;t!==r;){const i=t+r>>1;Yd(e,n[i])<0?r=i:t=i+1}const o=db(e);return o&&(r=n.lastIndexOf(o,r-1)),r}function db(e){let n=e;for(;n=n.parent;)if(Jd(n)&&Yd(e,n)===0)return n}function Jd({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function pf(e){const n=fn(Ja),t=fn(Ud),r=Gt(()=>{const u=dt(e.to);return n.resolve(u)}),o=Gt(()=>{const{matched:u}=r.value,{length:c}=u,l=u[c-1],f=t.matched;if(!l||!f.length)return-1;const h=f.findIndex(No.bind(null,l));if(h>-1)return h;const d=vf(u[c-2]);return c>1&&vf(l)===d&&f[f.length-1].path!==d?f.findIndex(No.bind(null,u[c-2])):h}),i=Gt(()=>o.value>-1&&yb(t.params,r.value.params)),a=Gt(()=>o.value>-1&&o.value===t.matched.length-1&&Kd(t.params,r.value.params));function s(u={}){if(gb(u)){const c=n[dt(e.replace)?"replace":"push"](dt(e.to)).catch(ei);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:r,href:Gt(()=>r.value.href),isActive:i,isExactActive:a,navigate:s}}function pb(e){return e.length===1?e[0]:e}const vb=id({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:pf,setup(e,{slots:n}){const t=wi(pf(e)),{options:r}=fn(Ja),o=Gt(()=>({[mf(e.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[mf(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=n.default&&pb(n.default(t));return e.custom?i:Fd("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:o.value},i)}}}),mb=vb;function gb(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function yb(e,n){for(const t in n){const r=n[t],o=e[t];if(typeof r=="string"){if(r!==o)return!1}else if(!pn(o)||o.length!==r.length||r.some((i,a)=>i.valueOf()!==o[a].valueOf()))return!1}return!0}function vf(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const mf=(e,n,t)=>e??n??t,bb=id({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:t}){const r=fn(Su),o=Gt(()=>e.route||r.value),i=fn(nf,0),a=Gt(()=>{let c=dt(i);const{matched:l}=o.value;let f;for(;(f=l[c])&&!f.components;)c++;return c}),s=Gt(()=>o.value.matched[a.value]);ta(nf,Gt(()=>a.value+1)),ta(y0,s),ta(Su,o);const u=St();return mo(()=>[u.value,s.value,e.name],([c,l,f],[h,d,p])=>{l&&(l.instances[f]=c,d&&d!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=d.leaveGuards),l.updateGuards.size||(l.updateGuards=d.updateGuards))),c&&l&&(!d||!No(l,d)||!h)&&(l.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=o.value,l=e.name,f=s.value,h=f&&f.components[l];if(!h)return gf(t.default,{Component:h,route:c});const d=f.props[l],p=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=Fd(h,ze({},p,n,{onVnodeUnmounted:g=>{g.component.isUnmounted&&(f.instances[l]=null)},ref:u}));return gf(t.default,{Component:m,route:c})||m}}});function gf(e,n){if(!e)return null;const t=e(n);return t.length===1?t[0]:t}const Qd=bb;function xb(e){const n=cb(e.routes,e),t=e.parseQuery||K0,r=e.stringifyQuery||sf,o=e.history,i=zo(),a=zo(),s=zo(),u=og(sr);let c=sr;uo&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=ks.bind(null,L=>""+L),f=ks.bind(null,N0),h=ks.bind(null,fi);function d(L,ee){let Q,ie;return $d(L)?(Q=n.getRecordMatcher(L),ie=ee):ie=L,n.addRoute(ie,Q)}function p(L){const ee=n.getRecordMatcher(L);ee&&n.removeRoute(ee)}function v(){return n.getRoutes().map(L=>L.record)}function m(L){return!!n.getRecordMatcher(L)}function g(L,ee){if(ee=ze({},ee||u.value),typeof L=="string"){const ge=Ds(t,L,ee.path),D=n.resolve({path:ge.path},ee),k=o.createHref(ge.fullPath);return ze(ge,D,{params:h(D.params),hash:fi(ge.hash),redirectedFrom:void 0,href:k})}let Q;if(L.path!=null)Q=ze({},L,{path:Ds(t,L.path,ee.path).path});else{const ge=ze({},L.params);for(const D in ge)ge[D]==null&&delete ge[D];Q=ze({},L,{params:f(ge)}),ee.params=f(ee.params)}const ie=n.resolve(Q,ee),se=L.hash||"";ie.params=l(h(ie.params));const Ee=M0(r,ze({},L,{hash:k0(se),path:ie.path})),he=o.createHref(Ee);return ze({fullPath:Ee,hash:se,query:r===sf?$0(L.query):L.query||{}},ie,{redirectedFrom:void 0,href:he})}function y(L){return typeof L=="string"?Ds(t,L,u.value.path):ze({},L)}function x(L,ee){if(c!==L)return To(et.NAVIGATION_CANCELLED,{from:ee,to:L})}function b(L){return A(L)}function w(L){return b(ze(y(L),{replace:!0}))}function _(L,ee){const Q=L.matched[L.matched.length-1];if(Q&&Q.redirect){const{redirect:ie}=Q;let se=typeof ie=="function"?ie(L,ee):ie;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=y(se):{path:se},se.params={}),ze({query:L.query,hash:L.hash,params:se.path!=null?{}:L.params},se)}}function A(L,ee){const Q=c=g(L),ie=u.value,se=L.state,Ee=L.force,he=L.replace===!0,ge=_(Q,ie);if(ge)return A(ze(y(ge),{state:typeof ge=="object"?ze({},se,ge.state):se,force:Ee,replace:he}),ee||Q);const D=Q;D.redirectedFrom=ee;let k;return!Ee&&O0(r,ie,Q)&&(k=To(et.NAVIGATION_DUPLICATED,{to:D,from:ie}),oe(ie,ie,!0,!1)),(k?Promise.resolve(k):S(D,ie)).catch(M=>Vn(M)?Vn(M,et.NAVIGATION_GUARD_REDIRECT)?M:J(M):B(M,D,ie)).then(M=>{if(M){if(Vn(M,et.NAVIGATION_GUARD_REDIRECT))return A(ze({replace:he},y(M.to),{state:typeof M.to=="object"?ze({},se,M.to.state):se,force:Ee}),ee||D)}else M=N(D,ie,!0,he,se);return F(D,ie,M),M})}function R(L,ee){const Q=x(L,ee);return Q?Promise.reject(Q):Promise.resolve()}function E(L){const ee=Re.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(L):L()}function S(L,ee){let Q;const[ie,se,Ee]=X0(L,ee);Q=Ns(ie.reverse(),"beforeRouteLeave",L,ee);for(const ge of ie)ge.leaveGuards.forEach(D=>{Q.push(pr(D,L,ee))});const he=R.bind(null,L,ee);return Q.push(he),Ie(Q).then(()=>{Q=[];for(const ge of i.list())Q.push(pr(ge,L,ee));return Q.push(he),Ie(Q)}).then(()=>{Q=Ns(se,"beforeRouteUpdate",L,ee);for(const ge of se)ge.updateGuards.forEach(D=>{Q.push(pr(D,L,ee))});return Q.push(he),Ie(Q)}).then(()=>{Q=[];for(const ge of Ee)if(ge.beforeEnter)if(pn(ge.beforeEnter))for(const D of ge.beforeEnter)Q.push(pr(D,L,ee));else Q.push(pr(ge.beforeEnter,L,ee));return Q.push(he),Ie(Q)}).then(()=>(L.matched.forEach(ge=>ge.enterCallbacks={}),Q=Ns(Ee,"beforeRouteEnter",L,ee,E),Q.push(he),Ie(Q))).then(()=>{Q=[];for(const ge of a.list())Q.push(pr(ge,L,ee));return Q.push(he),Ie(Q)}).catch(ge=>Vn(ge,et.NAVIGATION_CANCELLED)?ge:Promise.reject(ge))}function F(L,ee,Q){s.list().forEach(ie=>E(()=>ie(L,ee,Q)))}function N(L,ee,Q,ie,se){const Ee=x(L,ee);if(Ee)return Ee;const he=ee===sr,ge=uo?history.state:{};Q&&(ie||he?o.replace(L.fullPath,ze({scroll:he&&ge&&ge.scroll},se)):o.push(L.fullPath,se)),u.value=L,oe(L,ee,Q,he),J()}let U;function z(){U||(U=o.listen((L,ee,Q)=>{if(!Se.listening)return;const ie=g(L),se=_(ie,Se.currentRoute.value);if(se){A(ze(se,{replace:!0,force:!0}),ie).catch(ei);return}c=ie;const Ee=u.value;uo&&H0(af(Ee.fullPath,Q.delta),Qa()),S(ie,Ee).catch(he=>Vn(he,et.NAVIGATION_ABORTED|et.NAVIGATION_CANCELLED)?he:Vn(he,et.NAVIGATION_GUARD_REDIRECT)?(A(ze(y(he.to),{force:!0}),ie).then(ge=>{Vn(ge,et.NAVIGATION_ABORTED|et.NAVIGATION_DUPLICATED)&&!Q.delta&&Q.type===Au.pop&&o.go(-1,!1)}).catch(ei),Promise.reject()):(Q.delta&&o.go(-Q.delta,!1),B(he,ie,Ee))).then(he=>{he=he||N(ie,Ee,!1),he&&(Q.delta&&!Vn(he,et.NAVIGATION_CANCELLED)?o.go(-Q.delta,!1):Q.type===Au.pop&&Vn(he,et.NAVIGATION_ABORTED|et.NAVIGATION_DUPLICATED)&&o.go(-1,!1)),F(ie,Ee,he)}).catch(ei)}))}let G=zo(),H=zo(),O;function B(L,ee,Q){J(L);const ie=H.list();return ie.length?ie.forEach(se=>se(L,ee,Q)):console.error(L),Promise.reject(L)}function $(){return O&&u.value!==sr?Promise.resolve():new Promise((L,ee)=>{G.add([L,ee])})}function J(L){return O||(O=!L,z(),G.list().forEach(([ee,Q])=>L?Q(L):ee()),G.reset()),L}function oe(L,ee,Q,ie){const{scrollBehavior:se}=e;if(!uo||!se)return Promise.resolve();const Ee=!Q&&j0(af(L.fullPath,0))||(ie||!Q)&&history.state&&history.state.scroll||null;return uc().then(()=>se(L,ee,Ee)).then(he=>he&&G0(he)).catch(he=>B(he,L,ee))}const le=L=>o.go(L);let de;const Re=new Set,Se={currentRoute:u,listening:!0,addRoute:d,removeRoute:p,clearRoutes:n.clearRoutes,hasRoute:m,getRoutes:v,resolve:g,options:e,push:b,replace:w,go:le,back:()=>le(-1),forward:()=>le(1),beforeEach:i.add,beforeResolve:a.add,afterEach:s.add,onError:H.add,isReady:$,install(L){L.component("RouterLink",mb),L.component("RouterView",Qd),L.config.globalProperties.$router=Se,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>dt(u)}),uo&&!de&&u.value===sr&&(de=!0,b(o.location).catch(ie=>{}));const ee={};for(const ie in sr)Object.defineProperty(ee,ie,{get:()=>u.value[ie],enumerable:!0});L.provide(Ja,Se),L.provide(Ud,Gh(ee)),L.provide(Su,u);const Q=L.unmount;Re.add(L),L.unmount=function(){Re.delete(L),Re.size<1&&(c=sr,U&&U(),U=null,u.value=sr,de=!1,O=!1),Q()}}};function Ie(L){return L.reduce((ee,Q)=>ee.then(()=>E(Q)),Promise.resolve())}return Se}const wb={__name:"App",setup(e){return(n,t)=>(jt(),Id(dt(Qd)))}},Ci=p0("mask",()=>{const e=St([{id:"spiderman",name:"Web-Slinger",thumbnail:"https://lh3.googleusercontent.com/aida-public/AB6AXuANL-USBoI-J3A48wMau2jOA05AWKm5rR5HA2poeAFhR1XHMcuZUr4DzaP4mN8AEcyVxnzhQ_BInNgojKv5rHwcDjpFQkb15kX8ZfgSEL-NB91D8v9OALhMi93qqs7o6YKbKYhmLTF1du4Snp2fHTe1RZEvrhl1NfJ1DEIzCctC6NZAKl7eMEe1MdbvyCQyl0oG9Jj5nDwZsKxfZ49w8MG2sdibTUMVQdp6hfUs7uWUTEZnwL-0p2EZ9IelI67szsK3zjS0BAAvYJY",maskImage:"/masks/spiderman.png",active:!1},{id:"ironman",name:"Armored Avenger",thumbnail:"https://lh3.googleusercontent.com/aida-public/AB6AXuDLSEM5Gf5cCHAuQZFP994vHwBqyx6deGC0xEQFv-A5EmEArFGpLUasSJEBnZjJxohDWSVPifHAHtdJSroc4a4uZrw6FQNQAjI23w45efZ-pc9eX0KLSvqdyy9YMI_pb_b__BprX_mN9cmNyJfvYmVyBq8v7mda4Vnq7XRy3dVxlmiLlWOxeu3ofVG7D5QK-JoISyeDy4gnka1tKNu8YhzDTk3QfMbOiBxSCV_olx99SKLy2FVgSeLnHUjlgd6SwV7LUeIbQjTNzkc",maskImage:"/masks/ironman.png",active:!0},{id:"blackpanther",name:"Wakandan King",thumbnail:"https://lh3.googleusercontent.com/aida-public/AB6AXuAGCkS7_7e0NL2AfKxGsnkkW28XysSlDFbfM0ZiOYjmM3OBPImBoycWR3viJ6L1tZroznFl5JNBzhpJ0IlvFM-d34q0E8c1qUsPp0Q4BJyrpgR7-qen57bfSJwHRcRGMFwWYcDqEurJw85LFRCM_ZblWdZYI5zEPVb0Uchil_NYseBx8tYcHmm6AiNND6APrq8UKWy37AVGi9JHM_q4SrsiJzD5ac7k_XNdsLWM0d_qjZjGTYS0CuGWcIpcqCoJ5pPJuT4AQ9rAuak",maskImage:"/masks/blackpanther.png",active:!1},{id:"captainamerica",name:"First Avenger",thumbnail:"https://lh3.googleusercontent.com/aida-public/AB6AXuD6h7PSgmbFDYGJbpL4J0Zj5oPwQ1xLmv-kv25cGJ_WVlaiH5qY22yOEBmOEwYHN_O3LdCvVEMJbjO8Iv73EpjuhHctY4xItBOrB1N7S8wTVGltXPlz6oPEDwgrdDVIYOfRmlii1V-jEaTOOXqII8Sx6G7CrOyXrOnvQMyGV5mshmQ4_EW_bGTuuSCwPKThgOSlGnp6iD0qWCnRJ9gogmArf34YirJF45vemP0DMxMSik7i1iTJ8xhqEGRX1IhoKdCYKUxNGfux2Ig",maskImage:"/masks/captainamerica.png",active:!1}]),n=St(e.value[1]),t=St(null),r=St(!1);function o(s){e.value.forEach(u=>{u.active=u.id===s}),n.value=e.value.find(u=>u.id===s)}function i(s){t.value=s}function a(s){r.value=s}return{masks:e,selectedMask:n,capturedPhoto:t,isTracking:r,selectMask:o,capturePhoto:i,setTracking:a}});var Zd=function(e,n){return(Zd=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var o in r)r.hasOwnProperty(o)&&(t[o]=r[o])})(e,n)};function vn(e,n){function t(){this.constructor=e}Zd(e,n),e.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}function pe(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(c){try{u(r.next(c))}catch(l){i(l)}}function s(c){try{u(r.throw(c))}catch(l){i(l)}}function u(c){c.done?o(c.value):new t((function(l){l(c.value)})).then(a,s)}u((r=r.apply(e,[])).next())}))}function ve(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(u){return function(c){return(function(l){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&l[0]?r.return:l[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,l[1])).done)return o;switch(r=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,r=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){a=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){a.label=l[1];break}if(l[0]===6&&a.label<o[1]){a.label=o[1],o=l;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(l);break}o[2]&&a.ops.pop(),a.trys.pop();continue}l=n.call(e,a)}catch(f){l=[6,f],r=0}finally{t=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}})([u,c])}}}var _b=(function(){function e(n){this.global=n,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}return e.prototype.setPlatform=function(n,t){this.platform!=null&&console.warn("Platform "+this.platformName+" has already been set. Overwriting the platform with "+t+"."),this.platformName=n,this.platform=t},e.prototype.registerFlag=function(n,t,r){if(this.flagRegistry[n]={evaluationFn:t,setHook:r},this.urlFlags[n]!=null){var o=this.urlFlags[n];console.warn("Setting feature override from URL "+n+": "+o+"."),this.set(n,o)}},e.prototype.get=function(n){return n in this.flags?this.flags[n]:(this.flags[n]=this.evaluateFlag(n),this.flags[n])},e.prototype.getNumber=function(n){return this.get(n)},e.prototype.getBool=function(n){return this.get(n)},e.prototype.getFlags=function(){return this.flags},Object.defineProperty(e.prototype,"features",{get:function(){return this.flags},enumerable:!0,configurable:!0}),e.prototype.set=function(n,t){if(this.flagRegistry[n]==null)throw new Error("Cannot set flag "+n+" as it has not been registered.");this.flags[n]=t,this.flagRegistry[n].setHook!=null&&this.flagRegistry[n].setHook(t)},e.prototype.evaluateFlag=function(n){if(this.flagRegistry[n]==null)throw new Error("Cannot evaluate flag '"+n+"': no evaluation function found.");return this.flagRegistry[n].evaluationFn()},e.prototype.setFlags=function(n){this.flags=Object.assign({},n)},e.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags()},e.prototype.populateURLFlags=function(){var n=this;if(this.global!==void 0&&this.global.location!==void 0&&this.global.location.search!==void 0){var t,r,o=(t=this.global.location.search,r={},t.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(function(i){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];return Cb(r,a[0],a[1]),a.join("=")})),r);"tfjsflags"in o&&o.tfjsflags.split(",").forEach((function(i){var a=i.split(":"),s=a[0],u=a[1];n.urlFlags[s]=(function(c,l){if((l=l.toLowerCase())==="true"||l==="false")return l==="true";if(""+ +l===l)return+l;throw new Error("Could not parse value flag value "+l+" for flag "+c+".")})(s,u)}))}},e})();function Cb(e,n,t){e[decodeURIComponent(n)]=decodeURIComponent(t||"")}function q(){return ep}var ep=null,pa=new Map,Du=new Map;function tp(e,n){var t=rp(e,n);return pa.get(t)}function Eb(e){return Du.get(e)}function yf(e){for(var n=pa.entries(),t=[];;){var r=n.next(),o=r.done,i=r.value;if(o)break;var a=i[0],s=i[1];a.split("_")[0]===e&&t.push(s)}return t}function np(e){var n=e.kernelName,t=e.backendName,r=rp(n,t);if(pa.has(r))throw new Error("The kernel '"+n+"' for backend '"+t+"' is already registered");pa.set(r,e)}function Rb(e){var n=e.kernelName;Du.has(n)&&console.warn("Overriding the gradient for '"+n+"'"),Du.set(n,e)}function rp(e,n){return n+"_"+e}function Tu(e,n,t){return Math.max(e,Math.min(n,t))}function op(e){return e%2==0?e:e+1}function Sb(e){for(var n=0,t=0;t<e.length;t++)n+=e[t];return n}function I(e,n){if(!e)throw new Error(typeof n=="string"?n:n())}function Ge(e,n,t){t===void 0&&(t=""),I(pt(e,n),(function(){return t+" Shapes "+e+" and "+n+" must match"}))}function Bo(e){I(e!=null,(function(){return"The input to the tensor constructor must be a non-null value."}))}function Fo(e,n,t){if(n===void 0&&(n=[]),t===void 0&&(t=!1),n==null&&(n=[]),Array.isArray(e)||Dn(e)&&!t)for(var r=0;r<e.length;++r)Fo(e[r],n,t);else n.push(e);return n}function be(e){if(e.length===0)return 1;for(var n=e[0],t=1;t<e.length;t++)n*=e[t];return n}function pt(e,n){if(e===n)return!0;if(e==null||n==null||e.length!==n.length)return!1;for(var t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}function tt(e){return e%1==0}function Ib(e){if(Math.tanh!=null)return Math.tanh(e);if(e===1/0)return 1;if(e===-1/0)return-1;var n=Math.exp(2*e);return(n-1)/(n+1)}function Nu(e){var n=Math.ceil(Math.sqrt(e));return[n,Math.ceil(e/n)]}function go(e,n){return n<=e.length?e:e+" ".repeat(n-e.length)}function bf(e,n,t){return n===void 0&&(n=function(r){return 0}),new Promise((function(r,o){var i=0,a=function(){if(e())r();else{i++;var s=n(i);t!=null&&i>=t?o():setTimeout(a,s)}};a()}))}function Ab(e,n){for(var t=1,r=-1,o=0;o<e.length;++o)if(e[o]>=0)t*=e[o];else if(e[o]===-1){if(r!==-1)throw Error("Shapes can only have 1 implicit size. Found -1 at dim "+r+" and dim "+o);r=o}else if(e[o]<0)throw Error("Shapes can not be < 0. Found "+e[o]+" at dim "+o);if(r===-1){if(n>0&&n!==t)throw Error("Size("+n+") must match the product of shape "+e);return e}if(t===0)throw Error("Cannot infer the missing size in ["+e+"] when there are 0 elements");if(n%t!=0)throw Error("The implicit shape can't be a fractional number. Got "+n+" / "+t);var i=e.slice();return i[r]=n/t,i}function ft(e,n){var t=n.length;return I((e=e==null?n.map((function(r,o){return o})):[].concat(e)).every((function(r){return r>=-t&&r<t})),(function(){return"All values in axis param must be in range [-"+t+", "+t+") but got axis "+e})),I(e.every((function(r){return tt(r)})),(function(){return"All values in axis param must be integers but got axis "+e})),e.map((function(r){return r<0?t+r:r}))}function Mr(e,n){for(var t=[],r=[],o=n!=null&&Array.isArray(n)&&n.length===0,i=n==null||o?null:ft(n,e).sort(),a=0,s=0;s<e.length;++s){if(i!=null){if(i[a]===s&&e[s]!==1)throw new Error("Can't squeeze axis "+s+" since its dim '"+e[s]+"' is not 1");(i[a]==null||i[a]>s)&&e[s]===1&&(t.push(e[s]),r.push(s)),i[a]<=s&&a++}e[s]!==1&&(t.push(e[s]),r.push(s))}return{newShape:t,keptDims:r}}function hi(e,n){var t=null;if(e==null||e==="float32")t=new Float32Array(n);else if(e==="int32")t=new Int32Array(n);else{if(e!=="bool")throw new Error("Unknown data type "+e);t=new Uint8Array(n)}return t}function va(e,n){var t=null;if(e==null||e==="float32")t=new Float32Array(n);else if(e==="int32")t=new Int32Array(n);else if(e==="bool")t=new Uint8Array(n);else{if(e!=="string")throw new Error("Unknown data type "+e);t=new Array(n)}return t}function kb(e,n){for(var t=0;t<e.length;t++){var r=e[t];if(isNaN(r)||!isFinite(r))throw Error("A tensor of type "+n+" being uploaded contains "+r+".")}}function Db(e){return e==="bool"||e==="complex64"||e==="float32"||e==="int32"||e==="string"}function Tb(e,n){return n!=="complex64"&&(n!=="float32"||e==="complex64")&&(n!=="int32"||e==="float32"||e==="complex64")&&(n!=="bool"||e!=="bool")}function Dn(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array}function ip(e){if(e==="float32"||e==="int32")return 4;if(e==="complex64")return 8;if(e==="bool")return 1;throw new Error("Unknown dtype "+e)}function Nb(e){if(e==null)return 0;var n=0;return e.forEach((function(t){return n+=t.length})),n}function yc(e){return typeof e=="string"||e instanceof String}function Fb(e){return typeof e=="boolean"}function Pb(e){return typeof e=="number"}function Ei(e){return Array.isArray(e)?Ei(e[0]):e instanceof Float32Array?"float32":e instanceof Int32Array||e instanceof Uint8Array?"int32":Pb(e)?"float32":yc(e)?"string":Fb(e)?"bool":"float32"}function Fu(e){return!!(e&&e.constructor&&e.call&&e.apply)}function Pu(e,n){for(var t=n;t<e;++t)if(e%t==0)return t;return e}function Tn(e){var n=e.length;if(n<2)return[];var t=new Array(n-1);t[n-2]=e[n-1];for(var r=n-3;r>=0;--r)t[r]=t[r+1]*e[r+1];return t}function ap(e,n,t){if(n==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(e)&&(e=Fo(e)),t&&kb(e,n),(function(i,a){return i instanceof Float32Array&&a==="float32"||i instanceof Int32Array&&a==="int32"||i instanceof Uint8Array&&a==="bool"})(e,n))return e;if(n==null||n==="float32"||n==="complex64")return new Float32Array(e);if(n==="int32")return new Int32Array(e);if(n==="bool"){for(var r=new Uint8Array(e.length),o=0;o<r.length;++o)Math.round(e[o])!==0&&(r[o]=1);return r}throw new Error("Unknown data type "+n)}function xf(e,n){if(e.length===0)return n[0];var t=e.reduce((function(r,o){return r*o}));if(t===0)return[];if(t!==n.length)throw new Error("["+e+"] does not match the input size.");return(function r(o,i,a){var s=new Array;if(i.length===1)for(var u=i[0],c=0;c<u;c++)s[c]=a[o+c];else{u=i[0];var l=i.slice(1),f=l.reduce((function(h,d){return h*d}));for(c=0;c<u;c++)s[c]=r(o+c*f,l,a)}return s})(0,e,n)}function sp(e,n){for(var t=Ri(e,n),r=0;r<t.length;r++)t[r]=1;return t}function Ri(e,n){if(n==null||n==="float32"||n==="complex64")return new Float32Array(e);if(n==="int32")return new Int32Array(e);if(n==="bool")return new Uint8Array(e);throw new Error("Unknown data type "+n)}function Cn(){return q().platform.now()}function up(e){e.forEach((function(n){I(Number.isInteger(n)&&n>=0,(function(){return"Tensor must have a shape comprised of positive integers but got shape ["+e+"]."}))}))}function Mb(e,n){return n===void 0&&(n="utf-8"),n=n||"utf-8",q().platform.encode(e,n)}function ma(e,n){return n===void 0&&(n="utf-8"),n=n||"utf-8",q().platform.decode(e,n)}function wf(e,n,t){if(n===0)return 0;if(n===1)return e[0];for(var r=e[e.length-1],o=0;o<e.length-1;++o)r+=t[o]*e[o];return r}function Ob(e,n,t){if(n===0)return[];if(n===1)return[e];for(var r=new Array(n),o=0;o<r.length-1;++o)r[o]=Math.floor(e/t[o]),e-=r[o]*t[o];return r[r.length-1]=e,r}var Bb=(function(){function e(n,t){this.backendTimer=n,this.logger=t,t==null&&(this.logger=new Lb)}return e.prototype.profileKernel=function(n,t,r){var o,i=this,a=this.backendTimer.time((function(){o=r()}));return o.forEach((function(s){s.data().then((function(u){(function(c,l,f){if(l!=="float32")return!1;for(var h=0;h<c.length;h++){var d=c[h];if(isNaN(d)||!isFinite(d))return console.warn("Found "+d+" in the result of '"+f+"'"),!0}})(u,s.dtype,n),a.then((function(c){var l="";c.getExtraProfileInfo!=null&&(l=c.getExtraProfileInfo()),i.logger.logKernelProfile(n,s,u,c.kernelMs,t,l)}))}))})),o},e})(),Lb=(function(){function e(){}return e.prototype.logKernelProfile=function(n,t,r,o,i,a){var s=typeof o=="number"?go(o+"ms",9):o.error,u=go(n,25),c=t.rank,l=t.size,f=go(t.shape.toString(),14),h="";for(var d in i){var p=i[d].shape||t.shape,v=p.length;h+=d+": "+v+"D "+(v>0?p:"")+" "}console.log("%c"+u+"	%c"+s+"	%c"+c+"D "+f+"	%c"+l+"	%c"+h+"	%c"+a,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")},e})(),_f=20,Go=3,Fs=7;function Wb(e,n,t,r){var o=Tn(n),i=(function(c,l,f,h){var d=be(l),p=h[h.length-1],v=new Array(p).fill(0),m=l.length,g=f==="complex64"?jo(c):c;if(m>1)for(var y=0;y<d/p;y++)for(var x=y*p,b=0;b<p;b++)v[b]=Math.max(v[b],Ho(g[x+b],0,f).length);return v})(e,n,t,o),a=n.length,s=(function c(l,f,h,d,p,v){v===void 0&&(v=!0);var m=h==="complex64"?2:1,g=f[0],y=f.length;if(y===0)return h==="complex64"?[Ho(jo(l)[0],0,h)]:h==="bool"?[cp(l[0])]:[l[0].toString()];if(y===1){if(g>_f){var x=Go*m,b=Array.from(l.slice(0,x)),w=Array.from(l.slice((g-Go)*m,g*m));return h==="complex64"&&(b=jo(b),w=jo(w)),["["+b.map((function(G,H){return Ho(G,p[H],h)})).join(", ")+", ..., "+w.map((function(G,H){return Ho(G,p[g-Go+H],h)})).join(", ")+"]"]}return["["+(h==="complex64"?jo(l):Array.from(l)).map((function(G,H){return Ho(G,p[H],h)})).join(", ")+"]"]}var _=f.slice(1),A=d.slice(1),R=d[0]*m,E=[];if(g>_f){for(var S=0;S<Go;S++){var F=(N=S*R)+R;E.push.apply(E,c(l.slice(N,F),_,h,A,p,!1))}for(E.push("..."),S=g-Go;S<g;S++)F=(N=S*R)+R,E.push.apply(E,c(l.slice(N,F),_,h,A,p,S===g-1))}else for(S=0;S<g;S++){var N;F=(N=S*R)+R,E.push.apply(E,c(l.slice(N,F),_,h,A,p,S===g-1))}var U=y===2?",":"";for(E[0]="["+E[0]+U,S=1;S<E.length-1;S++)E[S]=" "+E[S]+U;var z=`,
`;for(S=2;S<y;S++)z+=`
`;return E[E.length-1]=" "+E[E.length-1]+"]"+(v?"":z),E})(e,n,t,o,i),u=["Tensor"];return r&&(u.push("  dtype: "+t),u.push("  rank: "+a),u.push("  shape: ["+n+"]"),u.push("  values:")),u.push(s.map((function(c){return"    "+c})).join(`
`)),u.join(`
`)}function Ho(e,n,t){return go(Array.isArray(e)?parseFloat(e[0].toFixed(Fs))+" + "+parseFloat(e[1].toFixed(Fs))+"j":yc(e)?"'"+e+"'":t==="bool"?cp(e):parseFloat(e.toFixed(Fs)).toString(),n)}function cp(e){return e===0?"false":"true"}function jo(e){for(var n=[],t=0;t<e.length;t+=2)n.push([e[t],e[t+1]]);return n}var di=(function(){function e(n,t,r){var o=this;if(this.dtype=t,this.shape=n.slice(),this.size=be(n),r!=null){var i=r.length;I(i===this.size,(function(){return"Length of values '"+i+"' does not match the size inferred by the shape '"+o.size+"'."}))}if(t==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||va(t,this.size),this.strides=Tn(n)}return e.prototype.set=function(n){for(var t=this,r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];r.length===0&&(r=[0]),I(r.length===this.rank,(function(){return"The number of provided coordinates ("+r.length+") must match the rank ("+t.rank+")"}));var i=this.locToIndex(r);this.values[i]=n},e.prototype.get=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];n.length===0&&(n=[0]);for(var r=0,o=0,i=n;o<i.length;o++){var a=i[o];if(a<0||a>=this.shape[r]){var s="Requested out of range element at "+n+".   Buffer shape="+this.shape;throw new Error(s)}r++}for(var u=n[n.length-1],c=0;c<n.length-1;++c)u+=this.strides[c]*n[c];return this.values[u]},e.prototype.locToIndex=function(n){if(this.rank===0)return 0;if(this.rank===1)return n[0];for(var t=n[n.length-1],r=0;r<n.length-1;++r)t+=this.strides[r]*n[r];return t},e.prototype.indexToLoc=function(n){if(this.rank===0)return[];if(this.rank===1)return[n];for(var t=new Array(this.shape.length),r=0;r<t.length-1;++r)t[r]=Math.floor(n/this.strides[r]),n-=t[r]*this.strides[r];return t[t.length-1]=n,t},Object.defineProperty(e.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),e.prototype.toTensor=function(){return Rn().makeTensor(this.values,this.shape,this.dtype)},e})(),Rn=null,V=null,lp=null,Xe=(function(){function e(n,t,r,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=n.slice(),this.dtype=t||"float32",this.size=be(n),this.strides=Tn(n),this.dataId=r,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}return e.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},e.prototype.asScalar=function(){return this.throwIfDisposed(),I(this.size===1,(function(){return"The array must have only 1 element."})),this.reshape([])},e.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},e.prototype.as2D=function(n,t){return this.throwIfDisposed(),this.reshape([n,t])},e.prototype.as3D=function(n,t,r){return this.throwIfDisposed(),this.reshape([n,t,r])},e.prototype.as4D=function(n,t,r,o){return this.throwIfDisposed(),this.reshape([n,t,r,o])},e.prototype.as5D=function(n,t,r,o,i){return this.throwIfDisposed(),this.reshape([n,t,r,o,i])},e.prototype.asType=function(n){return this.throwIfDisposed(),V.cast(this,n)},Object.defineProperty(e.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),e.prototype.buffer=function(){return pe(this,void 0,void 0,(function(){var n;return ve(this,(function(t){switch(t.label){case 0:return[4,this.data()];case 1:return n=t.sent(),[2,V.buffer(this.shape,this.dtype,n)]}}))}))},e.prototype.bufferSync=function(){return V.buffer(this.shape,this.dtype,this.dataSync())},e.prototype.array=function(){return pe(this,void 0,void 0,(function(){var n;return ve(this,(function(t){switch(t.label){case 0:return[4,this.data()];case 1:return n=t.sent(),[2,xf(this.shape,n)]}}))}))},e.prototype.arraySync=function(){return xf(this.shape,this.dataSync())},e.prototype.data=function(){return pe(this,void 0,void 0,(function(){var n,t;return ve(this,(function(r){switch(r.label){case 0:return this.throwIfDisposed(),n=Rn().read(this.dataId),this.dtype!=="string"?[3,2]:[4,n];case 1:t=r.sent();try{return[2,t.map((function(o){return ma(o)}))]}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}r.label=2;case 2:return[2,n]}}))}))},e.prototype.dataSync=function(){this.throwIfDisposed();var n=Rn().readSync(this.dataId);if(this.dtype==="string")try{return n.map((function(t){return ma(t)}))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return n},e.prototype.bytes=function(){return pe(this,void 0,void 0,(function(){var n;return ve(this,(function(t){switch(t.label){case 0:return this.throwIfDisposed(),[4,Rn().read(this.dataId)];case 1:return n=t.sent(),this.dtype==="string"?[2,n]:[2,new Uint8Array(n.buffer)]}}))}))},e.prototype.dispose=function(){this.isDisposed||(Rn().disposeTensor(this),this.isDisposedInternal=!0)},Object.defineProperty(e.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),e.prototype.throwIfDisposed=function(){if(this.isDisposed)throw new Error("Tensor is disposed.")},e.prototype.toFloat=function(){return this.asType("float32")},e.prototype.toInt=function(){return this.asType("int32")},e.prototype.toBool=function(){return this.asType("bool")},e.prototype.print=function(n){return n===void 0&&(n=!1),V.print(this,n)},e.prototype.reshape=function(n){return this.throwIfDisposed(),V.reshape(this,n)},e.prototype.reshapeAs=function(n){return this.throwIfDisposed(),this.reshape(n.shape)},e.prototype.expandDims=function(n){return n===void 0&&(n=0),V.expandDims(this,n)},e.prototype.cumsum=function(n,t,r){return n===void 0&&(n=0),t===void 0&&(t=!1),r===void 0&&(r=!1),V.cumsum(this,n,t,r)},e.prototype.squeeze=function(n){return this.throwIfDisposed(),V.squeeze(this,n)},e.prototype.clone=function(){return this.throwIfDisposed(),V.clone(this)},e.prototype.oneHot=function(n,t,r){return this.throwIfDisposed(),V.oneHot(this,n,t,r)},e.prototype.toString=function(n){return n===void 0&&(n=!1),Wb(this.dataSync(),this.shape,this.dtype,n)},e.prototype.tile=function(n){return this.throwIfDisposed(),V.tile(this,n)},e.prototype.gather=function(n,t){return t===void 0&&(t=0),this.throwIfDisposed(),V.gather(this,n,t)},e.prototype.matMul=function(n,t,r){return t===void 0&&(t=!1),r===void 0&&(r=!1),this.throwIfDisposed(),V.matMul(this,n,t,r)},e.prototype.dot=function(n){return this.throwIfDisposed(),V.dot(this,n)},e.prototype.norm=function(n,t,r){return n===void 0&&(n="euclidean"),t===void 0&&(t=null),r===void 0&&(r=!1),this.throwIfDisposed(),V.norm(this,n,t,r)},e.prototype.slice=function(n,t){return this.throwIfDisposed(),V.slice(this,n,t)},e.prototype.reverse=function(n){return this.throwIfDisposed(),V.reverse(this,n)},e.prototype.concat=function(n,t){return t===void 0&&(t=0),this.throwIfDisposed(),n instanceof e&&(n=[n]),V.concat([this].concat(n),t)},e.prototype.split=function(n,t){return t===void 0&&(t=0),this.throwIfDisposed(),V.split(this,n,t)},e.prototype.stack=function(n,t){return t===void 0&&(t=0),V.stack([this,n],t)},e.prototype.unstack=function(n){return n===void 0&&(n=0),V.unstack(this,n)},e.prototype.pad=function(n,t){return t===void 0&&(t=0),V.pad(this,n,t)},e.prototype.batchNormalization=function(n,t,r,o,i){return r===void 0&&(r=.001),lp("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"),this.batchNorm(n,t,i,o,r)},e.prototype.batchNorm=function(n,t,r,o,i){return i===void 0&&(i=.001),this.throwIfDisposed(),V.batchNorm(this,n,t,r,o,i)},e.prototype.all=function(n,t){return n===void 0&&(n=null),t===void 0&&(t=!1),this.throwIfDisposed(),V.all(this,n,t)},e.prototype.any=function(n,t){return n===void 0&&(n=null),t===void 0&&(t=!1),this.throwIfDisposed(),V.any(this,n,t)},e.prototype.logSumExp=function(n,t){return n===void 0&&(n=null),t===void 0&&(t=!1),this.throwIfDisposed(),V.logSumExp(this,n,t)},e.prototype.sum=function(n,t){return n===void 0&&(n=null),t===void 0&&(t=!1),this.throwIfDisposed(),V.sum(this,n,t)},e.prototype.prod=function(n,t){return n===void 0&&(n=null),t===void 0&&(t=!1),this.throwIfDisposed(),V.prod(this,n,t)},e.prototype.mean=function(n,t){return n===void 0&&(n=null),t===void 0&&(t=!1),this.throwIfDisposed(),V.mean(this,n,t)},e.prototype.min=function(n,t){return n===void 0&&(n=null),t===void 0&&(t=!1),this.throwIfDisposed(),V.min(this,n,t)},e.prototype.max=function(n,t){return n===void 0&&(n=null),t===void 0&&(t=!1),this.throwIfDisposed(),V.max(this,n,t)},e.prototype.argMin=function(n){return n===void 0&&(n=null),this.throwIfDisposed(),V.argMin(this,n)},e.prototype.argMax=function(n){return n===void 0&&(n=null),this.throwIfDisposed(),V.argMax(this,n)},e.prototype.cast=function(n){return this.throwIfDisposed(),V.cast(this,n)},e.prototype.add=function(n){return this.throwIfDisposed(),V.add(this,n)},e.prototype.addStrict=function(n){return this.throwIfDisposed(),V.addStrict(this,n)},e.prototype.atan2=function(n){return this.throwIfDisposed(),V.atan2(this,n)},e.prototype.sub=function(n){return this.throwIfDisposed(),V.sub(this,n)},e.prototype.subStrict=function(n){return this.throwIfDisposed(),V.subStrict(this,n)},e.prototype.pow=function(n){return this.throwIfDisposed(),V.pow(this,n)},e.prototype.powStrict=function(n){return this.throwIfDisposed(),V.powStrict(this,n)},e.prototype.mul=function(n){return this.throwIfDisposed(),V.mul(this,n)},e.prototype.mulStrict=function(n){return this.throwIfDisposed(),V.mulStrict(this,n)},e.prototype.div=function(n){return this.throwIfDisposed(),V.div(this,n)},e.prototype.divNoNan=function(n){return this.throwIfDisposed(),V.divNoNan(this,n)},e.prototype.floorDiv=function(n){return this.throwIfDisposed(),V.floorDiv(this,n)},e.prototype.divStrict=function(n){return this.throwIfDisposed(),V.divStrict(this,n)},e.prototype.minimum=function(n){return this.throwIfDisposed(),V.minimum(this,n)},e.prototype.minimumStrict=function(n){return this.throwIfDisposed(),V.minimumStrict(this,n)},e.prototype.maximum=function(n){return this.throwIfDisposed(),V.maximum(this,n)},e.prototype.maximumStrict=function(n){return this.throwIfDisposed(),V.maximumStrict(this,n)},e.prototype.mod=function(n){return this.throwIfDisposed(),V.mod(this,n)},e.prototype.modStrict=function(n){return this.throwIfDisposed(),V.modStrict(this,n)},e.prototype.squaredDifferenceStrict=function(n){return this.throwIfDisposed(),V.squaredDifferenceStrict(this,n)},e.prototype.transpose=function(n){return this.throwIfDisposed(),V.transpose(this,n)},e.prototype.notEqual=function(n){return this.throwIfDisposed(),V.notEqual(this,n)},e.prototype.notEqualStrict=function(n){return this.throwIfDisposed(),V.notEqualStrict(this,n)},e.prototype.less=function(n){return this.throwIfDisposed(),V.less(this,n)},e.prototype.lessStrict=function(n){return this.throwIfDisposed(),V.lessStrict(this,n)},e.prototype.equal=function(n){return this.throwIfDisposed(),V.equal(this,n)},e.prototype.equalStrict=function(n){return this.throwIfDisposed(),V.equalStrict(this,n)},e.prototype.lessEqual=function(n){return this.throwIfDisposed(),V.lessEqual(this,n)},e.prototype.lessEqualStrict=function(n){return this.throwIfDisposed(),V.lessEqualStrict(this,n)},e.prototype.greater=function(n){return this.throwIfDisposed(),V.greater(this,n)},e.prototype.greaterStrict=function(n){return this.throwIfDisposed(),V.greaterStrict(this,n)},e.prototype.greaterEqual=function(n){return this.throwIfDisposed(),V.greaterEqual(this,n)},e.prototype.greaterEqualStrict=function(n){return this.throwIfDisposed(),V.greaterEqualStrict(this,n)},e.prototype.logicalAnd=function(n){return this.throwIfDisposed(),V.logicalAnd(this,n)},e.prototype.logicalOr=function(n){return this.throwIfDisposed(),V.logicalOr(this,n)},e.prototype.logicalNot=function(){return this.throwIfDisposed(),V.logicalNot(this)},e.prototype.logicalXor=function(n){return this.throwIfDisposed(),V.logicalXor(this,n)},e.prototype.where=function(n,t){return this.throwIfDisposed(),V.where(n,this,t)},e.prototype.neg=function(){return this.throwIfDisposed(),V.neg(this)},e.prototype.ceil=function(){return this.throwIfDisposed(),V.ceil(this)},e.prototype.floor=function(){return this.throwIfDisposed(),V.floor(this)},e.prototype.sign=function(){return this.throwIfDisposed(),V.sign(this)},e.prototype.isNaN=function(){return this.throwIfDisposed(),V.isNaN(this)},e.prototype.isInf=function(){return this.throwIfDisposed(),V.isInf(this)},e.prototype.isFinite=function(){return this.throwIfDisposed(),V.isFinite(this)},e.prototype.exp=function(){return this.throwIfDisposed(),V.exp(this)},e.prototype.expm1=function(){return this.throwIfDisposed(),V.expm1(this)},e.prototype.log=function(){return this.throwIfDisposed(),V.log(this)},e.prototype.log1p=function(){return this.throwIfDisposed(),V.log1p(this)},e.prototype.sqrt=function(){return this.throwIfDisposed(),V.sqrt(this)},e.prototype.rsqrt=function(){return this.throwIfDisposed(),V.rsqrt(this)},e.prototype.square=function(){return this.throwIfDisposed(),V.square(this)},e.prototype.reciprocal=function(){return this.throwIfDisposed(),V.reciprocal(this)},e.prototype.abs=function(){return this.throwIfDisposed(),V.abs(this)},e.prototype.clipByValue=function(n,t){return this.throwIfDisposed(),V.clipByValue(this,n,t)},e.prototype.relu=function(){return this.throwIfDisposed(),V.relu(this)},e.prototype.relu6=function(){return this.throwIfDisposed(),V.relu6(this)},e.prototype.elu=function(){return this.throwIfDisposed(),V.elu(this)},e.prototype.selu=function(){return this.throwIfDisposed(),V.selu(this)},e.prototype.leakyRelu=function(n){return n===void 0&&(n=.2),this.throwIfDisposed(),V.leakyRelu(this,n)},e.prototype.prelu=function(n){return this.throwIfDisposed(),V.prelu(this,n)},e.prototype.sigmoid=function(){return this.throwIfDisposed(),V.sigmoid(this)},e.prototype.logSigmoid=function(){return this.throwIfDisposed(),V.logSigmoid(this)},e.prototype.softplus=function(){return this.throwIfDisposed(),V.softplus(this)},e.prototype.zerosLike=function(){return this.throwIfDisposed(),V.zerosLike(this)},e.prototype.onesLike=function(){return this.throwIfDisposed(),V.onesLike(this)},e.prototype.sin=function(){return this.throwIfDisposed(),V.sin(this)},e.prototype.cos=function(){return this.throwIfDisposed(),V.cos(this)},e.prototype.tan=function(){return this.throwIfDisposed(),V.tan(this)},e.prototype.asin=function(){return this.throwIfDisposed(),V.asin(this)},e.prototype.acos=function(){return this.throwIfDisposed(),V.acos(this)},e.prototype.atan=function(){return this.throwIfDisposed(),V.atan(this)},e.prototype.sinh=function(){return this.throwIfDisposed(),V.sinh(this)},e.prototype.cosh=function(){return this.throwIfDisposed(),V.cosh(this)},e.prototype.tanh=function(){return this.throwIfDisposed(),V.tanh(this)},e.prototype.asinh=function(){return this.throwIfDisposed(),V.asinh(this)},e.prototype.acosh=function(){return this.throwIfDisposed(),V.acosh(this)},e.prototype.atanh=function(){return this.throwIfDisposed(),V.atanh(this)},e.prototype.erf=function(){return this.throwIfDisposed(),V.erf(this)},e.prototype.round=function(){return this.throwIfDisposed(),V.round(this)},e.prototype.step=function(n){return n===void 0&&(n=0),this.throwIfDisposed(),V.step(this,n)},e.prototype.softmax=function(n){return n===void 0&&(n=-1),this.throwIfDisposed(),V.softmax(this,n)},e.prototype.logSoftmax=function(n){return n===void 0&&(n=-1),this.throwIfDisposed(),V.logSoftmax(this,n)},e.prototype.resizeBilinear=function(n,t){return t===void 0&&(t=!1),this.throwIfDisposed(),V.image.resizeBilinear(this,n,t)},e.prototype.resizeNearestNeighbor=function(n,t){return t===void 0&&(t=!1),this.throwIfDisposed(),V.image.resizeNearestNeighbor(this,n,t)},e.prototype.conv1d=function(n,t,r,o,i,a){return o===void 0&&(o="NWC"),i===void 0&&(i=1),this.throwIfDisposed(),V.conv1d(this,n,t,r,o,i,a)},e.prototype.conv2d=function(n,t,r,o,i,a){return o===void 0&&(o="NHWC"),i===void 0&&(i=[1,1]),this.throwIfDisposed(),V.conv2d(this,n,t,r,o,i,a)},e.prototype.conv2dTranspose=function(n,t,r,o,i){return this.throwIfDisposed(),V.conv2dTranspose(this,n,t,r,o,i)},e.prototype.depthwiseConv2D=function(n,t,r,o,i,a){return o===void 0&&(o="NHWC"),i===void 0&&(i=[1,1]),this.throwIfDisposed(),V.depthwiseConv2d(this,n,t,r,o,i,a)},e.prototype.separableConv2d=function(n,t,r,o,i,a){return i===void 0&&(i=[1,1]),a===void 0&&(a="NHWC"),this.throwIfDisposed(),V.separableConv2d(this,n,t,r,o,i,a)},e.prototype.avgPool=function(n,t,r,o){return this.throwIfDisposed(),V.avgPool(this,n,t,r,o)},e.prototype.maxPool=function(n,t,r,o){return this.throwIfDisposed(),V.maxPool(this,n,t,r,o)},e.prototype.localResponseNormalization=function(n,t,r,o){return n===void 0&&(n=5),t===void 0&&(t=1),r===void 0&&(r=1),o===void 0&&(o=.5),V.localResponseNormalization(this,n,t,r,o)},e.prototype.pool=function(n,t,r,o,i){return this.throwIfDisposed(),V.pool(this,n,t,r,o,i)},e.prototype.variable=function(n,t,r){return n===void 0&&(n=!0),this.throwIfDisposed(),Rn().makeVariable(this,n,t,r)},e.prototype.unsortedSegmentSum=function(n,t){return this.throwIfDisposed(),V.unsortedSegmentSum(this,n,t)},e.prototype.batchToSpaceND=function(n,t){return this.throwIfDisposed(),V.batchToSpaceND(this,n,t)},e.prototype.spaceToBatchND=function(n,t){return this.throwIfDisposed(),V.spaceToBatchND(this,n,t)},e.prototype.topk=function(n,t){return n===void 0&&(n=1),t===void 0&&(t=!0),this.throwIfDisposed(),V.topk(this,n,t)},e.prototype.stridedSlice=function(n,t,r,o,i,a,s,u){return o===void 0&&(o=0),i===void 0&&(i=0),a===void 0&&(a=0),s===void 0&&(s=0),u===void 0&&(u=0),this.throwIfDisposed(),V.stridedSlice(this,n,t,r,o,i,a,s,u)},e.prototype.depthToSpace=function(n,t){return this.throwIfDisposed(),V.depthToSpace(this,n,t)},e.prototype.fft=function(){return this.throwIfDisposed(),V.spectral.fft(this)},e.prototype.ifft=function(){return this.throwIfDisposed(),V.spectral.ifft(this)},e.prototype.rfft=function(){return this.throwIfDisposed(),V.spectral.rfft(this)},e.prototype.irfft=function(){return this.throwIfDisposed(),V.spectral.irfft(this)},e})();Object.defineProperty(Xe,Symbol.hasInstance,{value:function(e){return!!e&&e.dataId!=null&&e.shape!=null&&e.dtype!=null}});var Cf,Mu,Ou,Bu,Lu,Po=(function(e){function n(t,r,o,i){var a=e.call(this,t.shape,t.dtype,t.dataId,i)||this;return a.trainable=r,a.name=o,a}return vn(n,e),n.prototype.assign=function(t){if(t.dtype!==this.dtype)throw new Error("dtype of the new value ("+t.dtype+") and previous value ("+this.dtype+") must match");if(!pt(t.shape,this.shape))throw new Error("shape of the new value ("+t.shape+") and previous value ("+this.shape+") must match");Rn().disposeTensor(this),this.dataId=t.dataId,Rn().incRef(this,null)},n.prototype.dispose=function(){Rn().disposeVariable(this),this.isDisposedInternal=!0},n})(Xe);Object.defineProperty(Po,Symbol.hasInstance,{value:function(e){return e instanceof Xe&&e.assign!=null&&e.assign instanceof Function}}),(function(e){e.R0="R0",e.R1="R1",e.R2="R2",e.R3="R3",e.R4="R4",e.R5="R5",e.R6="R6"})(Cf||(Cf={})),(function(e){e.float32="float32",e.int32="int32",e.bool="int32",e.complex64="complex64"})(Mu||(Mu={})),(function(e){e.float32="float32",e.int32="int32",e.bool="bool",e.complex64="complex64"})(Ou||(Ou={})),(function(e){e.float32="float32",e.int32="float32",e.bool="float32",e.complex64="complex64"})(Bu||(Bu={})),(function(e){e.float32="complex64",e.int32="complex64",e.bool="complex64",e.complex64="complex64"})(Lu||(Lu={}));var Vb={float32:Bu,int32:Mu,bool:Ou,complex64:Lu};function yt(e,n){if(e==="string"||n==="string"){if(e==="string"&&n==="string")return"string";throw new Error("Can not upcast "+e+" with "+n)}return Vb[e][n]}function Ps(e){return yt(e,"int32")}function Je(e,n){if(e.dtype===n.dtype)return[e,n];var t=yt(e.dtype,n.dtype);return[e.cast(t),n.cast(t)]}function Ub(e,n){I(e.dtype===n.dtype,(function(){return"The dtypes of the first("+e.dtype+") and second("+n.dtype+") input must match"}))}function fp(e){var n=[];return(function t(r,o,i){if(r!=null){if(r instanceof Xe)return void o.push(r);if(a=r,!(!Array.isArray(a)&&typeof a!="object")){var a,s=r;for(var u in s){var c=s[u];i.has(c)||(i.add(c),t(c,o,i))}}}})(e,n,new Set),n}var Ms,Ef=(function(){function e(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null}}return e.prototype.dispose=function(){for(var n in this.registeredVariables)this.registeredVariables[n].dispose()},e})(),zb=(function(){function e(n){this.ENV=n,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Ef}return e.prototype.ready=function(){return pe(this,void 0,void 0,(function(){var n,t,r;return ve(this,(function(o){switch(o.label){case 0:if(this.pendingBackendInit!=null)return[2,this.pendingBackendInit.then((function(){}))];if(this.backendInstance!=null)return[2];n=this.getSortedBackends(),t=0,o.label=1;case 1:return t<n.length?(r=n[t],[4,this.initializeBackend(r).success]):[3,5];case 2:return o.sent()?[4,this.setBackend(r)]:[3,4];case 3:return o.sent(),[2];case 4:return t++,[3,1];case 5:throw new Error("Could not initialize any backends, all backend initializations failed.")}}))}))},Object.defineProperty(e.prototype,"backend",{get:function(){if(this.pendingBackendInit!=null)throw new Error("Backend '"+this.backendName+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");if(this.backendInstance==null){var n=this.initializeBackendsAndReturnBest(),t=n.name;if(n.asyncInit)throw new Error("The highest priority backend '"+t+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");this.setBackend(t)}return this.backendInstance},enumerable:!0,configurable:!0}),e.prototype.backendNames=function(){return Object.keys(this.registryFactory)},e.prototype.findBackend=function(n){return!(n in this.registry)&&(!(n in this.registryFactory)||this.initializeBackend(n).asyncInit)?null:this.registry[n]},e.prototype.findBackendFactory=function(n){return n in this.registryFactory?this.registryFactory[n].factory:null},e.prototype.registerBackend=function(n,t,r){return r===void 0&&(r=1),n in this.registryFactory?(console.warn(n+" backend was already registered. Reusing existing backend factory."),!1):(this.registryFactory[n]={factory:t,priority:r},!0)},e.prototype.setBackend=function(n){return pe(this,void 0,void 0,(function(){var t,r,o;return ve(this,(function(i){switch(i.label){case 0:if(this.registryFactory[n]==null)throw new Error("Backend name '"+n+"' not found in registry");return this.backendName=n,this.registry[n]!=null?[3,4]:(this.backendInstance=null,t=this.initializeBackend(n),r=t.success,t.asyncInit?[4,r]:[3,2]);case 1:return o=i.sent(),[3,3];case 2:o=r,i.label=3;case 3:if(!o)return[2,!1];i.label=4;case 4:return this.backendInstance=this.registry[n],this.setupRegisteredKernels(),this.profiler=new Bb(this.backendInstance),[2,!0]}}))}))},e.prototype.setupRegisteredKernels=function(){var n=this;yf(this.backendName).forEach((function(t){t.setupFunc!=null&&t.setupFunc(n.backendInstance)}))},e.prototype.disposeRegisteredKernels=function(n){var t=this;yf(n).forEach((function(r){r.disposeFunc!=null&&r.disposeFunc(t.registry[n])}))},e.prototype.initializeBackend=function(n){var t=this,r=this.registryFactory[n];if(r==null)throw new Error("Cannot initialize backend "+n+", no registration found.");try{var o=r.factory();if(Promise.resolve(o)===o){var i=++this.pendingBackendInitId,a=o.then((function(s){return!(i<t.pendingBackendInitId)&&(t.registry[n]=s,t.pendingBackendInit=null,!0)})).catch((function(s){return!(i<t.pendingBackendInitId)&&(t.pendingBackendInit=null,console.warn("Initialization of backend "+n+" failed"),console.warn(s.stack||s.message),!1)}));return this.pendingBackendInit=a,{success:a,asyncInit:!0}}return this.registry[n]=o,{success:!0,asyncInit:!1}}catch(s){return console.warn("Initialization of backend "+n+" failed"),console.warn(s.stack||s.message),{success:!1,asyncInit:!1}}},e.prototype.removeBackend=function(n){if(!(n in this.registryFactory))throw new Error(n+" backend not found in registry");this.backendName===n&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,n in this.registry&&(this.disposeRegisteredKernels(n),this.registry[n].dispose(),delete this.registry[n]),delete this.registryFactory[n],this.backendName===n&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)},e.prototype.getSortedBackends=function(){var n=this;if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((function(t,r){return n.registryFactory[r].priority-n.registryFactory[t].priority}))},e.prototype.initializeBackendsAndReturnBest=function(){for(var n=this.getSortedBackends(),t=0;t<n.length;t++){var r=n[t],o=this.initializeBackend(r),i=o.success,a=o.asyncInit;if(a||i)return{name:r,asyncInit:a}}throw new Error("Could not initialize any backends, all backend initializations failed.")},e.prototype.moveData=function(n,t){var r=this.state.tensorInfo.get(t),o=r.backend,i=this.readSync(t);o.disposeData(t),r.backend=n,n.move(t,i,r.shape,r.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++},e.prototype.tidy=function(n,t){var r,o=this,i=null;if(t==null){if(typeof n!="function")throw new Error("Please provide a function to tidy()");t=n}else{if(typeof n!="string"&&!(n instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof t!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");i=n}return this.scopedRun((function(){return o.startScope(i)}),(function(){return o.endScope(r)}),(function(){return(r=t())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),r}))},e.prototype.scopedRun=function(n,t,r){n();try{var o=r();return t(),o}catch(i){throw t(),i}},e.prototype.nextTensorId=function(){return e.nextTensorId++},e.prototype.nextVariableId=function(){return e.nextVariableId++},e.prototype.clone=function(n){var t=this.makeTensorFromDataId(n.dataId,n.shape,n.dtype),r={x:n};return this.addTapeNode(this.state.activeScope.name,r,[t],(function(o){return{x:function(){return o.toFloat()}}}),[]),t},e.prototype.runKernel=function(n,t,r,o,i){return this.runKernelFunc(null,t,null,n,r,o,i)},e.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool("IS_TEST")},e.prototype.checkKernelForMemLeak=function(n,t,r){var o=this.backend.numDataIds(),i=0;r.forEach((function(u){i+=u.dtype==="complex64"?3:1}));var a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],s=o-t-i-a;if(s>0)throw new Error("Backend '"+this.backendName+"' has an internal memory leak ("+s+" data ids) after running '"+n+"'")},e.prototype.runKernelFunc=function(n,t,r,o,i,a,s){var u,c=this;a===void 0&&(a=[]),s===void 0&&(s=[]);var l=[],f=this.isTapeOn();o==null&&(o=this.state.activeScope!=null?this.state.activeScope.name:"");var h,d=function(y){f&&(l=y.map((function(x){return c.keep(c.clone(x))})))},p=this.state.numBytes,v=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);var m,g=tp(o,this.backendName);return h=g!=null?function(){var y=c.backend.numDataIds();m=g.kernelFunc({inputs:t,attrs:i,backend:c.backend});var x=Array.isArray(m)?m:[m];c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,y,x);var b=x.map((function(_){var A=_.dataId,R=_.shape,E=_.dtype;return c.makeTensorFromDataId(A,R,E)})),w=b.filter((function(_,A){return s[A]}));return d((a||[]).slice().concat(w)),b}:function(){var y=c.backend.numDataIds();m=c.tidy((function(){return n(c.backend,d)}));var x=Array.isArray(m)?m:[m];return c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,y,x),x},this.scopedRun((function(){return c.state.kernelDepth++}),(function(){return c.state.kernelDepth--}),(function(){u=c.ENV.getBool("DEBUG")?c.profiler.profileKernel(o,t,(function(){return h()})):h()})),f&&this.addTapeNode(o,t,u,r,l),this.state.profiling&&this.state.activeProfile.kernels.push({name:o,bytesAdded:this.state.numBytes-p,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-v,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(t).map((function(y){return t[y].shape})),outputShapes:u.map((function(y){return y.shape}))}),Array.isArray(m)?u:u[0]},e.prototype.makeTensor=function(n,t,r,o){if(n==null)throw new Error("Values passed to engine.makeTensor() are null");r=r||"float32",o=o||this.backend;var i=n;r==="string"&&yc(n[0])&&(i=n.map((function(l){return Mb(l)})));var a=o.write(i,t,r),s=new Xe(t,r,a,this.nextTensorId());if(this.incRef(s,o),r==="string"){var u=this.state.tensorInfo.get(a),c=Nb(i);this.state.numBytes+=c-u.bytes,u.bytes=c}return s},e.prototype.makeTensorFromDataId=function(n,t,r,o){var i=new Xe(t,r=r||"float32",n,this.nextTensorId());return this.incRef(i,o),i},e.prototype.makeVariable=function(n,t,r,o){t===void 0&&(t=!0),r=r||this.nextVariableId().toString(),o!=null&&o!==n.dtype&&(n=n.asType(o));var i=new Po(n,t,r,this.nextTensorId());if(this.state.registeredVariables[i.name]!=null)throw new Error("Variable with name "+i.name+" was already registered");return this.state.registeredVariables[i.name]=i,this.incRef(i,this.backend),i},e.prototype.incRef=function(n,t){var r=this.state.tensorInfo.has(n.dataId)?this.state.tensorInfo.get(n.dataId).refCount:0;if(this.state.numTensors++,n.dtype==="string"&&this.state.numStringTensors++,r===0){this.state.numDataBuffers++;var o=0;n.dtype!=="complex64"&&n.dtype!=="string"&&(o=n.size*ip(n.dtype)),this.state.tensorInfo.set(n.dataId,{backend:t||this.backend,dtype:n.dtype,shape:n.shape,bytes:o,refCount:0}),this.state.numBytes+=o}this.state.tensorInfo.get(n.dataId).refCount++,n instanceof Po||this.track(n)},e.prototype.disposeTensor=function(n){if(this.state.tensorInfo.has(n.dataId)){this.state.numTensors--,n.dtype==="string"&&this.state.numStringTensors--;var t=this.state.tensorInfo.get(n.dataId);t.refCount<=1?(n.dtype!=="complex64"&&(this.state.numBytes-=t.bytes),this.state.numDataBuffers--,t.backend.disposeData(n.dataId),this.state.tensorInfo.delete(n.dataId)):this.state.tensorInfo.get(n.dataId).refCount--}},e.prototype.disposeVariables=function(){for(var n in this.state.registeredVariables){var t=this.state.registeredVariables[n];this.disposeVariable(t)}},e.prototype.disposeVariable=function(n){this.disposeTensor(n),this.state.registeredVariables[n.name]!=null&&delete this.state.registeredVariables[n.name]},e.prototype.memory=function(){var n=this.backend.memory();return n.numTensors=this.state.numTensors,n.numDataBuffers=this.state.numDataBuffers,n.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(n.unreliable=!0,n.reasons==null&&(n.reasons=[]),n.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),n},e.prototype.profile=function(n){return pe(this,void 0,void 0,(function(){var t,r;return ve(this,(function(o){return this.state.profiling=!0,t=this.state.numBytes,r=this.state.numTensors,this.state.activeProfile.kernels=[],this.state.activeProfile.result=n(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,this.state.activeProfile.kernels.map((function(i){return i.totalBytesSnapshot}))),this.state.activeProfile.newBytes=this.state.numBytes-t,this.state.activeProfile.newTensors=this.state.numTensors-r,[2,this.state.activeProfile]}))}))},e.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&this.state.kernelDepth===0},e.prototype.addTapeNode=function(n,t,r,o,i){var a=this,s={id:this.state.nextTapeNodeId++,kernelName:n,inputs:t,outputs:r,saved:i},u=Eb(n);u!=null&&(o=u.gradFunc),o!=null&&(s.gradient=function(c){return c=c.map((function(l,f){if(l==null){var h=r[f],d=Ri(h.size,h.dtype);return a.makeTensor(d,h.shape,h.dtype)}return l})),o(c.length>1?c:c[0],i)}),this.state.activeTape.push(s)},e.prototype.keep=function(n){return n.kept=!0,n},e.prototype.startTape=function(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++},e.prototype.endTape=function(){this.state.gradientDepth--},e.prototype.startScope=function(n){var t={track:[],name:"unnamed scope",id:this.state.nextScopeId++};n&&(t.name=n),this.state.scopeStack.push(t),this.state.activeScope=t},e.prototype.endScope=function(n){for(var t=this,r=fp(n),o=new Set(r.map((function(u){return u.id}))),i=0;i<this.state.activeScope.track.length;i++){var a=this.state.activeScope.track[i];a.kept||o.has(a.id)||a.dispose()}var s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],r.forEach((function(u){u.kept||u.scopeId!==s.id||t.track(u)}))},e.prototype.gradients=function(n,t,r,o){var i=this;if(o===void 0&&(o=!1),I(t.length>0,(function(){return"gradients() received an empty list of xs."})),r!=null&&r.dtype!=="float32")throw new Error("dy must have 'float32' dtype, but has '"+r.dtype+"'");var a=this.scopedRun((function(){return i.startTape()}),(function(){return i.endTape()}),(function(){return i.tidy("forward",n)}));I(a instanceof Xe,(function(){return"The result y returned by f() must be a tensor."}));var s=(function(u,c,l){for(var f={},h={},d=0;d<c.length;d++)f[c[d].id]=!0;for(d=0;d<u.length;d++){var p=(_=u[d]).inputs;for(var v in p){for(var m=p[v],g=!1,y=0;y<c.length;y++)if(f[m.id]){_.outputs.forEach((function(S){return f[S.id]=!0})),g=!0,h[_.id]=!0;break}if(g)break}}var x={};x[l.id]=!0;var b={};for(d=u.length-1;d>=0;d--)for(p=(_=u[d]).inputs,y=0;y<_.outputs.length;y++)if(x[_.outputs[y].id]){for(var v in p)x[p[v].id]=!0,b[_.id]=!0;break}var w=[];for(d=0;d<u.length;d++){var _;if(h[(_=u[d]).id]&&b[_.id]){var A={};for(var v in _.inputs){var R=_.inputs[v];f[R.id]&&(A[v]=R)}var E=Object.assign({},_);E.inputs=A,E.outputs=_.outputs,w.push(E)}}return w})(this.state.activeTape,t,a);if(!o&&s.length===0&&t.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",(function(){var u,c,l={};l[a.id]=r??(u=a.shape,c=sp(be(u),"float32"),P.makeTensor(c,u,"float32")),(function(h,d,p){for(var v=function(g){var y=d[g],x=[];if(y.outputs.forEach((function(A){var R=h[A.id];R!=null?x.push(R):x.push(null)})),y.gradient==null)throw new Error("Cannot compute gradient: gradient function not found for "+y.kernelName+".");var b=y.gradient(x),w=function(A){if(!(A in b))throw new Error("Cannot backprop through input "+A+". Available gradients found: "+Object.keys(b)+".");var R=p((function(){return b[A]()}));if(R.dtype!=="float32")throw new Error("Error in gradient for op "+y.kernelName+". The gradient of input "+A+" must have 'float32' dtype, but has '"+R.dtype+"'");var E=y.inputs[A];if(!pt(R.shape,E.shape))throw new Error("Error in gradient for op "+y.kernelName+". The gradient of input '"+A+"' has shape '"+R.shape+"', which does not match the shape of the input '"+E.shape+"'");if(h[E.id]==null)h[E.id]=R;else{var S=h[E.id];h[E.id]=S.add(R),S.dispose()}};for(var _ in y.inputs)w(_)},m=d.length-1;m>=0;m--)v(m)})(l,s,(function(h){return i.tidy(h)}));var f=t.map((function(h){return l[h.id]}));return i.state.gradientDepth===0&&(i.state.activeTape.forEach((function(h){for(var d=0,p=h.saved;d<p.length;d++)p[d].dispose()})),i.state.activeTape=null),{value:a,grads:f}}))},e.prototype.customGrad=function(n){var t=this;return I(Fu(n),(function(){return"The f passed in customGrad(f) must be a function."})),function(){for(var r,o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];I(o.every((function(s){return s instanceof Xe})),(function(){return"The args passed in customGrad(f)(x1, x2,...) must all be tensors"}));var a={};return o.forEach((function(s,u){a[u]=s})),t.runKernelFunc((function(s,u){return I((r=n.apply(void 0,o.concat([u]))).value instanceof Xe,(function(){return"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"})),I(Fu(r.gradFunc),(function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."})),r.value}),a,(function(s,u){var c=r.gradFunc(s,u),l=Array.isArray(c)?c:[c];I(l.length===o.length,(function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."})),I(l.every((function(h){return h instanceof Xe})),(function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."}));var f={};return l.forEach((function(h,d){f[d]=function(){return h}})),f}))}},e.prototype.readSync=function(n){return this.state.tensorInfo.get(n).backend.readSync(n)},e.prototype.read=function(n){return this.state.tensorInfo.get(n).backend.read(n)},e.prototype.time=function(n){return pe(this,void 0,void 0,(function(){var t,r;return ve(this,(function(o){switch(o.label){case 0:return t=Cn(),[4,this.backend.time(n)];case 1:return(r=o.sent()).wallMs=Cn()-t,[2,r]}}))}))},e.prototype.track=function(n){return this.state.activeScope!=null&&(n.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(n)),n},Object.defineProperty(e.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!0,configurable:!0}),e.prototype.reset=function(){for(var n in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Ef,this.registry)this.disposeRegisteredKernels(n),this.registry[n].dispose(),delete this.registry[n];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null},e.nextTensorId=0,e.nextVariableId=0,e})(),P=(function(){var e=(function(){if(Ms==null){var t=void 0;if(typeof window<"u")t=window;else if(typeof global<"u")t=global;else if(typeof process<"u")t=process;else{if(typeof self>"u")throw new Error("Could not find a global object");t=self}Ms=t}return Ms})();if(e._tfengine==null){var n=new _b(e);e._tfengine=new zb(n)}return(function(t){ep=t})(e._tfengine.ENV),Rn=function(){return e._tfengine},e._tfengine})();function hp(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var Un=q();Un.registerFlag("DEBUG",(function(){return!1}),(function(e){e&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")})),Un.registerFlag("IS_BROWSER",(function(){return hp()})),Un.registerFlag("IS_NODE",(function(){return typeof process<"u"&&process.versions!==void 0&&process.versions.node!==void 0})),Un.registerFlag("IS_CHROME",(function(){return typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)})),Un.registerFlag("PROD",(function(){return!1})),Un.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",(function(){return Un.getBool("DEBUG")})),Un.registerFlag("DEPRECATION_WARNINGS_ENABLED",(function(){return!0})),Un.registerFlag("IS_TEST",(function(){return!1}));var pi,qt,zt,Fr={},Os={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function Gb(e,n){Fr[e]=n}function On(e){e in Fr||(Fr[e]=(function(t){if(t!==1&&t!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");var r=(function(o){if(typeof OffscreenCanvas<"u"&&o===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")})(t);return r.addEventListener("webglcontextlost",(function(o){o.preventDefault(),delete Fr[t]}),!1),t===1?r.getContext("webgl",Os)||r.getContext("experimental-webgl",Os):r.getContext("webgl2",Os)})(e));var n=Fr[e];return n.isContextLost()?(delete Fr[e],On(e)):(n.disable(n.DEPTH_TEST),n.disable(n.STENCIL_TEST),n.disable(n.BLEND),n.disable(n.DITHER),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SAMPLE_COVERAGE),n.enable(n.SCISSOR_TEST),n.enable(n.CULL_FACE),n.cullFace(n.BACK),Fr[e])}function Za(e,n){return[n,e]}function ti(e){var n=be(e);return Nu(Math.ceil(n/4))}function Si(e,n){return[Math.max(1,Math.ceil(n/2)),Math.max(1,Math.ceil(e/2))]}function bc(e,n){var t,r,o,i,a,s,u,c,l,f=e;return q().getNumber("WEBGL_VERSION")===2?(t=f.R32F,r=f.R16F,o=f.RGBA16F,i=f.RGBA32F,a=f.RED,s=4,u=1,c=f.HALF_FLOAT,l=f.FLOAT):(t=e.RGBA,r=e.RGBA,o=e.RGBA,i=f.RGBA,a=e.RGBA,s=4,u=4,c=n!=null?n.HALF_FLOAT_OES:null,l=e.FLOAT),{internalFormatFloat:t,internalFormatHalfFloat:r,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:i,textureFormatFloat:a,downloadTextureFormat:e.RGBA,downloadUnpackNumChannels:s,defaultNumChannels:u,textureTypeHalfFloat:c,textureTypeFloat:l}}function xe(e,n,t){var r=t();return n&&(function(o){var i=o.getError();if(i!==o.NO_ERROR)throw new Error("WebGL Error: "+Kb(o,i))})(e),r}(function(e){e[e.DENSE=0]="DENSE",e[e.SHARED_BATCH=1]="SHARED_BATCH"})(pi||(pi={})),(function(e){e[e.RENDER=0]="RENDER",e[e.UPLOAD=1]="UPLOAD",e[e.PIXELS=2]="PIXELS",e[e.DOWNLOAD=3]="DOWNLOAD"})(qt||(qt={})),(function(e){e[e.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",e[e.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",e[e.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",e[e.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",e[e.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"})(zt||(zt={}));var Hb=596e-10,jb=65504;function qb(e){return!!(q().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||e===0||Hb<Math.abs(e)&&Math.abs(e)<jb)}function Kb(e,n){switch(n){case e.NO_ERROR:return"NO_ERROR";case e.INVALID_ENUM:return"INVALID_ENUM";case e.INVALID_VALUE:return"INVALID_VALUE";case e.INVALID_OPERATION:return"INVALID_OPERATION";case e.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case e.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case e.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return"Unknown error code "+n}}function Li(e,n,t){return tr(e,n,(function(){return e.getExtension(t)}),'Extension "'+t+'" not supported on this browser.')}function $b(e,n,t){var r=tr(e,n,(function(){return e.createShader(e.VERTEX_SHADER)}),"Unable to create vertex WebGLShader.");if(xe(e,n,(function(){return e.shaderSource(r,t)})),xe(e,n,(function(){return e.compileShader(r)})),e.getShaderParameter(r,e.COMPILE_STATUS)===!1)throw console.log(e.getShaderInfoLog(r)),new Error("Failed to compile vertex shader.");return r}function Xb(e,n,t){var r=tr(e,n,(function(){return e.createShader(e.FRAGMENT_SHADER)}),"Unable to create fragment WebGLShader.");if(xe(e,n,(function(){return e.shaderSource(r,t)})),xe(e,n,(function(){return e.compileShader(r)})),e.getShaderParameter(r,e.COMPILE_STATUS)===!1)throw(function(o,i){var a=Yb.exec(i);if(a==null)return console.log("Couldn't parse line number in error: "+i),void console.log(o);for(var s=+a[1],u=o.split(`
`),c=u.length.toString().length+2,l=u.map((function(m,g){return go((g+1).toString(),c)+m})),f=0,h=0;h<l.length;h++)f=Math.max(l[h].length,f);var d=l.slice(0,s-1),p=l.slice(s-1,s),v=l.slice(s);console.log(d.join(`
`)),console.log(i.split(`
`)[0]),console.log("%c "+go(p[0],f),"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(v.join(`
`))})(t,e.getShaderInfoLog(r)),new Error("Failed to compile fragment shader.");return r}var Bs,Ls,Yb=/ERROR: [0-9]+:([0-9]+):/g;function Jb(e,n){return tr(e,n,(function(){return e.createProgram()}),"Unable to create WebGLProgram.")}function Qb(e,n,t){if(xe(e,n,(function(){return e.linkProgram(t)})),e.getProgramParameter(t,e.LINK_STATUS)===!1)throw console.log(e.getProgramInfoLog(t)),new Error("Failed to link vertex and fragment shaders.")}function Ws(e,n,t){if(xe(e,n,(function(){return e.validateProgram(t)})),e.getProgramParameter(t,e.VALIDATE_STATUS)===!1)throw console.log(e.getProgramInfoLog(t)),new Error("Shader program validation failed.")}function Zb(e,n,t){var r=tr(e,n,(function(){return e.createBuffer()}),"Unable to create WebGLBuffer");return xe(e,n,(function(){return e.bindBuffer(e.ARRAY_BUFFER,r)})),xe(e,n,(function(){return e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW)})),r}function ex(e,n,t){var r=tr(e,n,(function(){return e.createBuffer()}),"Unable to create WebGLBuffer");return xe(e,n,(function(){return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,r)})),xe(e,n,(function(){return e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW)})),r}function tx(e,n){return tr(e,n,(function(){return e.createTexture()}),"Unable to create WebGLTexture.")}function nx(e,n){var t=q().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(e<=0||n<=0){var r="["+e+"x"+n+"]";throw new Error("Requested texture size "+r+" is invalid.")}if(e>t||n>t)throw r="["+e+"x"+n+"]",new Error("Requested texture size "+r+" greater than WebGL maximum on this browser / GPU "+("["+t+"x"+t+"]")+".")}function rx(e,n){return tr(e,n,(function(){return e.createFramebuffer()}),"Unable to create WebGLFramebuffer.")}function Rf(e,n,t,r,o,i,a,s){var u=e.getAttribLocation(t,r);return u!==-1&&(xe(e,n,(function(){return e.bindBuffer(e.ARRAY_BUFFER,o)})),xe(e,n,(function(){return e.vertexAttribPointer(u,i,e.FLOAT,!1,a,s)})),xe(e,n,(function(){return e.enableVertexAttribArray(u)})),!0)}function ox(e,n,t,r){cx(e,r),xe(e,n,(function(){return e.activeTexture(e.TEXTURE0+r)})),xe(e,n,(function(){return e.bindTexture(e.TEXTURE_2D,t)}))}function ix(e,n,t,r){return tr(e,n,(function(){return e.getUniformLocation(t,r)}),'uniform "'+r+'" not present in program.')}function ax(e,n,t){return e.getUniformLocation(n,t)}function sx(e,n,t,r,o,i){xe(e,n,(function(){return ox(e,n,r,i)})),xe(e,n,(function(){return e.uniform1i(o,i)}))}function Vs(e,n,t,r){xe(e,n,(function(){return e.bindFramebuffer(e.FRAMEBUFFER,r)})),xe(e,n,(function(){return e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}))}function Sf(e,n,t){xe(e,n,(function(){return e.bindFramebuffer(e.FRAMEBUFFER,t)})),xe(e,n,(function(){return e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,null,0)}))}function Wi(e){var n=e.checkFramebufferStatus(e.FRAMEBUFFER);if(n!==e.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+ux(e,n))}function ux(e,n){switch(n){case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case e.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return"unknown error "+n}}function tr(e,n,t,r){var o=xe(e,n,(function(){return t()}));if(o==null)throw new Error(r);return o}function cx(e,n){var t=e.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,r=n+e.TEXTURE0;if(r<e.TEXTURE0||r>t)throw new Error("textureUnit must be in "+("[gl.TEXTURE0, gl.TEXTURE"+t+"]")+".")}function ga(e,n){return n===void 0&&(n=2),be(e.slice(0,e.length-n))}function ya(e){if(e.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[e.length>1?e[e.length-2]:1,e[e.length-1]]}function Us(e){var n=[1,1,1];return e.length===0||e.length===1&&e[0]===1||(n=[ga(e)].concat(ya(e))),n}function lx(e,n){var t;n===void 0&&(n=!1);var r=q().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(n&&(r*=2,(e=e.map((function(c,l){return l>=e.length-2?op(e[l]):e[l]}))).length===1&&(e=[2,e[0]])),e.length!==2){var o=Mr(e);e=o.newShape}var i=be(e);if(e.length<=1&&i<=r)return[1,i];if(e.length===2&&e[0]<=r&&e[1]<=r)return e;if(e.length===3&&e[0]*e[1]<=r&&e[2]<=r)return[e[0]*e[1],e[2]];if(e.length===3&&e[0]<=r&&e[1]*e[2]<=r)return[e[0],e[1]*e[2]];if(e.length===4&&e[0]*e[1]*e[2]<=r&&e[3]<=r)return[e[0]*e[1]*e[2],e[3]];if(e.length===4&&e[0]<=r&&e[1]*e[2]*e[3]<=r)return[e[0],e[1]*e[2]*e[3]];if(n){var a=ga(e),s=2,u=2;return e.length&&(s=(t=ya(e))[0],u=t[1]),Nu(i=a*(s/2)*(u/2)).map((function(c){return 2*c}))}return Nu(i)}function Vi(e){return e%2==0}function Ui(e,n){if(pt(e=e.slice(-2),n=n.slice(-2))||!e.length||!n.length||e[0]===0||e[1]===0||n[0]===0||n[1]===0)return!0;if(e.length!==n.length){var t=e.slice(-1)[0],r=n.slice(-1)[0];if(t===r||Vi(t)&&Vi(r)&&(e[0]===1||n[0]===1))return!0}return e[1]===n[1]&&Vi(e[0])&&Vi(n[0])}function fx(e){if(Bs==null){var n=On(e);Bs=n.getParameter(n.MAX_TEXTURE_SIZE)}return Bs}function hx(e){if(Ls==null){var n=On(e);Ls=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,Ls)}function dx(e){if(e===0)return 0;var n=On(e);return rn(n,"EXT_disjoint_timer_query_webgl2")&&e===2?2:rn(n,"EXT_disjoint_timer_query")?1:0}function rn(e,n){return e.getExtension(n)!=null}function If(e){try{if(On(e)!=null)return!0}catch{return!1}return!1}function px(e){if(e===0)return!1;var n=On(e);if(e===1){if(!rn(n,"OES_texture_float"))return!1}else if(!rn(n,"EXT_color_buffer_float"))return!1;return Wu(n)}function vx(e){if(e===0)return!1;var n=On(e);if(e!==1){if(rn(n,"EXT_color_buffer_float"))return Wu(n);if(rn(n,"EXT_color_buffer_half_float")){var t=n.getExtension("EXT_color_buffer_half_float");return(function(r,o){var i=bc(r,o),a=r.createTexture();r.bindTexture(r.TEXTURE_2D,a),r.texImage2D(r.TEXTURE_2D,0,i.internalFormatHalfFloat,1,1,0,i.textureFormatFloat,i.textureTypeHalfFloat,null);var s=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,s),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,a,0);var u=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(a),r.deleteFramebuffer(s),u})(n,t)}return!1}return!!rn(n,"OES_texture_float")&&!!rn(n,"WEBGL_color_buffer_float")&&Wu(n)}function Wu(e){var n=bc(e),t=e.createTexture();e.bindTexture(e.TEXTURE_2D,t),e.texImage2D(e.TEXTURE_2D,0,n.internalFormatFloat,1,1,0,n.textureFormatFloat,n.textureTypeFloat,null);var r=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,r),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0);var o=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(t),e.deleteFramebuffer(r),o}function mx(e){return e===2&&On(e).fenceSync!=null}var Ae=q();function dp(e){q().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(e+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function fe(e,n){return P.tidy(e,n)}function Bt(e){fp(e).forEach((function(n){return n.dispose()}))}function gx(e){return P.keep(e)}function ba(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];q().getBool("IS_TEST")||console.warn.apply(console,e)}function Sr(e,n){var t=e;if(Dn(e))return n==="string"?[]:[e.length];if(!Array.isArray(e))return[];for(var r=[];Array.isArray(t)||Dn(t)&&n!=="string";)r.push(t.length),t=t[0];return Array.isArray(e)&&q().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&(function o(i,a,s){if(s=s||[],!Array.isArray(i)&&!Dn(i))return void I(a.length===0,(function(){return"Element arr["+s.join("][")+"] is a primitive, but should be an array/TypedArray of "+a[0]+" elements"}));I(a.length>0,(function(){return"Element arr["+s.join("][")+"] should be a primitive, but is an array of "+i.length+" elements"})),I(i.length===a[0],(function(){return"Element arr["+s.join("][")+"] should have "+a[0]+" elements, but has "+i.length+" elements"}));for(var u=a.slice(1),c=0;c<i.length;++c)o(i[c],u,s.concat(c))})(e,r,[]),r}function Af(e,n,t,r){if(e!=null&&(e!=="numeric"&&e!==n||e==="numeric"&&n==="string"))throw new Error("Argument '"+t+"' passed to '"+r+"' must be "+e+" tensor, but got "+n+" tensor")}function C(e,n,t,r){if(r===void 0&&(r="numeric"),e instanceof Xe)return Af(r,e.dtype,n,t),e;var o=Ei(e);if(o!=="string"&&["bool","int32","float32"].indexOf(r)>=0&&(o=r),Af(r,o,n,t),e==null||!Dn(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string"){var i=e==null?"null":e.constructor.name;throw new Error("Argument '"+n+"' passed to '"+t+"' must be a Tensor or TensorLike, but got '"+i+"'")}var a=Sr(e,o);Dn(e)||Array.isArray(e)||(e=[e]);var s=o!=="string"?ap(e,o,q().getBool("DEBUG")):Fo(e,[],!0);return P.makeTensor(s,a,o)}function xa(e,n,t,r){if(r===void 0&&(r="numeric"),!Array.isArray(e))throw new Error("Argument "+n+" passed to "+t+" must be a `Tensor[]` or `TensorLike[]`");return e.map((function(o,i){return C(o,n+"["+i+"]",t)}),r)}function pp(e,n){for(var t=0;t<e.length;++t)if(e[e.length-t-1]!==n-1-t)return!1;return!0}function yx(e,n,t){for(var r=e.length+n.length,o=[],i=0,a=0,s=0;s<r;s++)t.indexOf(s)===-1?o.push(e[i++]):o.push(n[a++]);return o}function wt(e,n){for(var t=[],r=e.length,o=0;o<r;o++)n.indexOf(o)===-1&&t.push(e[o]);return[t,n.map((function(i){return e[i]}))]}function Lt(e,n){return yx(e,n.map((function(t){return 1})),n)}function Ut(e,n,t){I(pp(n,t),(function(){return e+" supports only inner-most axes for now. Got axes "+n+" and rank-"+t+" input."}))}function Bn(e,n){if(pp(e,n))return null;for(var t=[],r=0;r<n;++r)e.indexOf(r)===-1&&t.push(r);return e.forEach((function(o){return t.push(o)})),t}function xc(e){return e.map((function(n,t){return[t,n]})).sort((function(n,t){return n[1]-t[1]})).map((function(n){return n[0]}))}function Ln(e,n){for(var t=[],r=n-e;r<n;++r)t.push(r);return t}function bx(e,n){var t=e[0].length;e.forEach((function(o,i){I(o.length===t,(function(){return"Error in concat"+t+"D: rank of tensors["+i+"] must be the same as the rank of the rest ("+t+")"}))})),I(n>=0&&n<t,(function(){return"Error in concat"+t+"D: axis must be between 0 and "+(t-1)+"."}));var r=e[0];e.forEach((function(o,i){for(var a=0;a<t;a++)I(a===n||o[a]===r[a],(function(){return"Error in concat"+t+"D: Shape of tensors["+i+"] ("+o+") does not match the shape of the rest ("+r+") along the non-concatenated axis "+i+"."}))}))}function Mo(e,n){for(var t=e[0].slice(),r=1;r<e.length;r++)t[n]+=e[r][n];return t}function T(e){var n=Object.keys(e);if(n.length!==1)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+n.length+" keys.");var t=n[0],r=e[t];t.endsWith("_")&&(t=t.substring(0,t.length-1));var o=function(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];P.startScope(t);try{var s=r.apply(void 0,i);return s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),P.endScope(s),s}catch(u){throw P.endScope(null),u}};return Object.defineProperty(o,"name",{value:t,configurable:!0}),o}Ae.registerFlag("HAS_WEBGL",(function(){return Ae.getNumber("WEBGL_VERSION")>0})),Ae.registerFlag("WEBGL_VERSION",(function(){return If(2)?2:If(1)?1:0})),Ae.registerFlag("WEBGL_BUFFER_SUPPORTED",(function(){return Ae.get("WEBGL_VERSION")===2})),Ae.registerFlag("WEBGL_CPU_FORWARD",(function(){return!0})),Ae.registerFlag("WEBGL_FORCE_F16_TEXTURES",(function(){return!1})),Ae.registerFlag("WEBGL_PACK",(function(){return Ae.getBool("HAS_WEBGL")})),Ae.registerFlag("WEBGL_PACK_NORMALIZATION",(function(){return Ae.getBool("WEBGL_PACK")})),Ae.registerFlag("WEBGL_PACK_CLIP",(function(){return Ae.getBool("WEBGL_PACK")})),Ae.registerFlag("WEBGL_PACK_DEPTHWISECONV",(function(){return!1})),Ae.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",(function(){return Ae.getBool("WEBGL_PACK")})),Ae.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",(function(){return Ae.getBool("WEBGL_PACK")})),Ae.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",(function(){return Ae.getBool("WEBGL_PACK")})),Ae.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",(function(){return Ae.getBool("WEBGL_PACK")})),Ae.registerFlag("WEBGL_PACK_REDUCE",(function(){return Ae.getBool("WEBGL_PACK")})),Ae.registerFlag("WEBGL_LAZILY_UNPACK",(function(){return Ae.getBool("WEBGL_PACK")})),Ae.registerFlag("WEBGL_CONV_IM2COL",(function(){return Ae.getBool("WEBGL_PACK")})),Ae.registerFlag("WEBGL_MAX_TEXTURE_SIZE",(function(){return fx(Ae.getNumber("WEBGL_VERSION"))})),Ae.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",(function(){return hx(Ae.getNumber("WEBGL_VERSION"))})),Ae.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",(function(){var e=Ae.getNumber("WEBGL_VERSION");return e===0?0:dx(e)})),Ae.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",(function(){return Ae.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&(e=navigator.userAgent||navigator.vendor||window.opera,!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))));var e})),Ae.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",(function(){return px(Ae.getNumber("WEBGL_VERSION"))})),Ae.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",(function(){return!Ae.getBool("WEBGL_FORCE_F16_TEXTURES")&&Ae.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")})),Ae.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",(function(){return vx(Ae.getNumber("WEBGL_VERSION"))})),Ae.registerFlag("WEBGL_FENCE_API_ENABLED",(function(){return mx(Ae.getNumber("WEBGL_VERSION"))})),Ae.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",(function(){return Ae.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0})),lp=dp;var gt=T({complex_:function(e,n){var t=C(e,"real","complex"),r=C(n,"imag","complex");return Ge(t.shape,r.shape,"real and imag shapes, "+t.shape+" and "+r.shape+", must match in call to tf.complex()."),P.runKernelFunc((function(o){return o.complex(t,r)}),{$real:t,$imag:r})}}),tn=T({real_:function(e){var n=C(e,"input","real");return P.runKernelFunc((function(t){return t.real(n)}),{$input:n})}}),Sn=T({imag_:function(e){var n=C(e,"input","imag");return P.runKernelFunc((function(t){return t.imag(n)}),{$input:n})}});function bt(e,n,t){return Ir(e,n,Sr(e,t),t)}function Ir(e,n,t,r){if(r==null&&(r=Ei(e)),r==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!Dn(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(n!=null){up(n);var o=be(n),i=be(t);I(o===i,(function(){return"Based on the provided shape, ["+n+"], the tensor should have "+o+" values but has "+i}));for(var a=0;a<t.length;++a){var s=t[a],u=a!==t.length-1||s!==be(n.slice(a));I(t[a]===n[a]||!u,(function(){return"Error creating a new Tensor. Inferred shape ("+t+") does not match the provided shape ("+n+"). "}))}}return Dn(e)||Array.isArray(e)||(e=[e]),n=n||t,e=r!=="string"?ap(e,r,q().getBool("DEBUG")):Fo(e,[],!0),P.makeTensor(e,n,r)}function ae(e,n){if((Dn(e)&&n!=="string"||Array.isArray(e))&&n!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(n==="string"&&Dn(e)&&!(e instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Ir(e,[],[],n)}function nt(e,n){Bo(e);var t=Sr(e,n);if(t.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Ir(e,null,t,n)}function yr(e,n,t){if(Bo(e),n!=null&&n.length!==2)throw new Error("tensor2d() requires shape to have two numbers");var r=Sr(e,t);if(r.length!==2&&r.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(r.length===1&&n==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Ir(e,n,r,t)}function wc(e,n,t){if(Bo(e),n!=null&&n.length!==3)throw new Error("tensor3d() requires shape to have three numbers");var r=Sr(e,t);if(r.length!==3&&r.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(r.length===1&&n==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return Ir(e,n,r,t)}function Pt(e,n,t){if(Bo(e),n!=null&&n.length!==4)throw new Error("tensor4d() requires shape to have four numbers");var r=Sr(e,t);if(r.length!==4&&r.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(r.length===1&&n==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return Ir(e,n,r,t)}function xx(e,n,t){if(Bo(e),n!=null&&n.length!==5)throw new Error("tensor5d() requires shape to have five numbers");var r=Sr(e,t);if(r.length!==5&&r.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(r.length===1&&n==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return Ir(e,n,r,t)}function wx(e,n,t){if(Bo(e),n!=null&&n.length!==6)throw new Error("tensor6d() requires shape to have six numbers");var r=Sr(e,t);if(r.length!==6&&r.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(r.length===1&&n==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return Ir(e,n=n||r,r,t)}function _x(e,n,t,r){return n===void 0&&(n=!0),P.makeVariable(e,n,t,r)}function Lo(e,n){if(n===void 0&&(n="float32"),n==="complex64"){var t=Lo(e,"float32"),r=qe(e,"float32");return gt(t,r)}var o=sp(be(e),n);return P.makeTensor(o,e,n)}function qe(e,n){if(n===void 0&&(n="float32"),n==="complex64"){var t=qe(e,"float32"),r=qe(e,"float32");return gt(t,r)}var o=Ri(be(e),n);return P.makeTensor(o,e,n)}function Nn(e,n,t){return P.runKernelFunc((function(r){return r.fill(e,n,t)}),{})}function Cx(e,n,t){if(t<=0)throw new Error("The number of values should be positive.");return P.runKernelFunc((function(r){return r.linspace(e,n,t)}),{})}function wa(e,n,t,r){if(t===void 0&&(t=1),r===void 0&&(r="float32"),t===0)throw new Error("Cannot have a step of zero");if(e===n||e<n&&t<0||n<e&&t>1)return qe([0],r);var o=Ri(Math.abs(Math.ceil((n-e)/t)),r);n<e&&t===1&&(t=-1),o[0]=e;for(var i=1;i<o.length;i++)o[i]=o[i-1]+t;return nt(o,r)}var vp=T({onesLike_:function(e){var n=C(e,"x","onesLike");if(n.dtype==="complex64"){var t=vp(tn(n)),r=Be(Sn(n));return gt(t,r)}return P.runKernelFunc((function(o){return o.onesLike(n)}),{$x:n},(function(o,i){return{$x:function(){return Be(o)}}}))}}),Be=T({zerosLike_:function(e){var n=C(e,"x","zerosLike");return P.runKernelFunc((function(t){return t.zerosLike(n)}),{$x:n},(function(t,r){return{$x:function(){return Be(t)}}}))}}),at=T({concat_:function(e,n){n===void 0&&(n=0),I(e.length>=1,(function(){return"Pass at least one tensor to concat"}));var t=xa(e,"tensors","concat");t[0].dtype==="complex64"&&t.forEach((function(s){if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype `+s.dtype+". ")})),n=ft(n,t[0].shape)[0];var r=Mo(t.map((function(s){return s.shape})),n);if(be(r)===0)return bt([],r);if((t=t.filter((function(s){return s.size>0}))).length===1)return t[0];var o=t.map((function(s){return s.shape}));bx(o,n);var i=t,a={axis:n};return P.runKernelFunc((function(s){return s.concat(t,n)}),i,(function(s){var u=o.map((function(c){return c[n]}));return _c(s,u,n).map((function(c){return function(){return c}}))}),"Concat",a)}}),Ex=T({concat1d_:function(e){return at(e,0)}}),Rx=T({concat2d_:function(e,n){return at(e,n)}}),Sx=T({concat3d_:function(e,n){return at(e,n)}}),Ix=T({concat4d_:function(e,n){return at(e,n)}}),_c=T({split_:function(e,n,t){t===void 0&&(t=0);var r,o=C(e,"x","split");return t=ft(t,o.shape)[0],typeof n=="number"?(I(o.shape[t]%n==0,(function(){return"Number of splits must evenly divide the axis."})),r=new Array(n).fill(o.shape[t]/n)):(I(o.shape[t]===n.reduce((function(i,a){return i+a})),(function(){return"The sum of sizes must match the size of the axis dimension."})),r=n),P.runKernelFunc((function(i){return i.split(o,r,t)}),{$x:o},(function(i){return{$x:function(){return at(i,t)}}}))}});function Xr(e,n){return e(n={exports:{}},n.exports),n.exports}var Ax=Xr((function(e){(function(n,t,r){function o(s){var u,c=this,l=(u=4022871197,function(f){f=f.toString();for(var h=0;h<f.length;h++){var d=.02519603282416938*(u+=f.charCodeAt(h));d-=u=d>>>0,u=(d*=u)>>>0,u+=4294967296*(d-=u)}return 23283064365386963e-26*(u>>>0)});c.next=function(){var f=2091639*c.s0+23283064365386963e-26*c.c;return c.s0=c.s1,c.s1=c.s2,c.s2=f-(c.c=0|f)},c.c=1,c.s0=l(" "),c.s1=l(" "),c.s2=l(" "),c.s0-=l(s),c.s0<0&&(c.s0+=1),c.s1-=l(s),c.s1<0&&(c.s1+=1),c.s2-=l(s),c.s2<0&&(c.s2+=1),l=null}function i(s,u){return u.c=s.c,u.s0=s.s0,u.s1=s.s1,u.s2=s.s2,u}function a(s,u){var c=new o(s),l=u&&u.state,f=c.next;return f.int32=function(){return 4294967296*c.next()|0},f.double=function(){return f()+11102230246251565e-32*(2097152*f()|0)},f.quick=f,l&&(typeof l=="object"&&i(l,c),f.state=function(){return i(c,{})}),f}t&&t.exports?t.exports=a:this.alea=a})(0,e)})),kx=Xr((function(e){(function(n,t,r){function o(s){var u=this,c="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var f=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^f^f>>>8},s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),u.next()}function i(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u}function a(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&i(l,c),f.state=function(){return i(c,{})}),f}t&&t.exports?t.exports=a:this.xor128=a})(0,e)})),Dx=Xr((function(e){(function(n,t,r){function o(s){var u=this,c="";u.next=function(){var f=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^f^f<<1)|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),l==c.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function i(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u.v=s.v,u.d=s.d,u}function a(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&i(l,c),f.state=function(){return i(c,{})}),f}t&&t.exports?t.exports=a:this.xorwow=a})(0,e)})),Tx=Xr((function(e){(function(n,t,r){function o(s){var u=this;u.next=function(){var c,l,f=u.x,h=u.i;return c=f[h],l=(c^=c>>>7)^c<<24,l^=(c=f[h+1&7])^c>>>10,l^=(c=f[h+3&7])^c>>>3,l^=(c=f[h+4&7])^c<<7,c=f[h+7&7],l^=(c^=c<<13)^c<<9,f[h]=l,u.i=h+1&7,l},(function(c,l){var f,h=[];if(l===(0|l))h[0]=l;else for(l=""+l,f=0;f<l.length;++f)h[7&f]=h[7&f]<<15^l.charCodeAt(f)+h[f+1&7]<<13;for(;h.length<8;)h.push(0);for(f=0;f<8&&h[f]===0;++f);for(f==8?h[7]=-1:h[f],c.x=h,c.i=0,f=256;f>0;--f)c.next()})(u,s)}function i(s,u){return u.x=s.x.slice(),u.i=s.i,u}function a(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(l.x&&i(l,c),f.state=function(){return i(c,{})}),f}t&&t.exports?t.exports=a:this.xorshift7=a})(0,e)})),Nx=Xr((function(e){(function(n,t,r){function o(s){var u=this;u.next=function(){var c,l,f=u.w,h=u.X,d=u.i;return u.w=f=f+1640531527|0,l=h[d+34&127],c=h[d=d+1&127],l^=l<<13,c^=c<<17,l^=l>>>15,c^=c>>>12,l=h[d]=l^c,u.i=d,l+(f^f>>>16)|0},(function(c,l){var f,h,d,p,v,m=[],g=128;for(l===(0|l)?(h=l,l=null):(l+="\0",h=0,g=Math.max(g,l.length)),d=0,p=-32;p<g;++p)l&&(h^=l.charCodeAt((p+32)%l.length)),p===0&&(v=h),h^=h<<10,h^=h>>>15,h^=h<<4,h^=h>>>13,p>=0&&(v=v+1640531527|0,d=(f=m[127&p]^=h+v)==0?d+1:0);for(d>=128&&(m[127&(l&&l.length||0)]=-1),d=127,p=512;p>0;--p)h=m[d+34&127],f=m[d=d+1&127],h^=h<<13,f^=f<<17,h^=h>>>15,f^=f>>>12,m[d]=h^f;c.w=v,c.X=m,c.i=d})(u,s)}function i(s,u){return u.i=s.i,u.w=s.w,u.X=s.X.slice(),u}function a(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(l.X&&i(l,c),f.state=function(){return i(c,{})}),f}t&&t.exports?t.exports=a:this.xor4096=a})(0,e)})),Fx=Xr((function(e){(function(n,t,r){function o(s){var u=this,c="";u.next=function(){var f=u.b,h=u.c,d=u.d,p=u.a;return f=f<<25^f>>>7^h,h=h-d|0,d=d<<24^d>>>8^p,p=p-f|0,u.b=f=f<<20^f>>>12^h,u.c=h=h-d|0,u.d=d<<16^h>>>16^p,u.a=p-f|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,s===Math.floor(s)?(u.a=s/4294967296|0,u.b=0|s):c+=s;for(var l=0;l<c.length+20;l++)u.b^=0|c.charCodeAt(l),u.next()}function i(s,u){return u.a=s.a,u.b=s.b,u.c=s.c,u.d=s.d,u}function a(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&i(l,c),f.state=function(){return i(c,{})}),f}t&&t.exports?t.exports=a:this.tychei=a})(0,e)})),Pr=Xr((function(e){(function(n,t){var r,o=this,i=256,a=6,s="random",u=t.pow(i,a),c=t.pow(2,52),l=2*c,f=i-1;function h(g,y,x){var b=[],w=v((function R(E,S){var F,N=[],U=typeof E;if(S&&U=="object")for(F in E)try{N.push(R(E[F],S-1))}catch{}return N.length?N:U=="string"?E:E+"\0"})((y=y==1?{entropy:!0}:y||{}).entropy?[g,m(n)]:g??(function(){try{var R;return r&&(R=r.randomBytes)?R=R(i):(R=new Uint8Array(i),(o.crypto||o.msCrypto).getRandomValues(R)),m(R)}catch{var E=o.navigator,S=E&&E.plugins;return[+new Date,o,S,o.screen,m(n)]}})(),3),b),_=new d(b),A=function(){for(var R=_.g(a),E=u,S=0;R<c;)R=(R+S)*i,E*=i,S=_.g(1);for(;R>=l;)R/=2,E/=2,S>>>=1;return(R+S)/E};return A.int32=function(){return 0|_.g(4)},A.quick=function(){return _.g(4)/4294967296},A.double=A,v(m(_.S),n),(y.pass||x||function(R,E,S,F){return F&&(F.S&&p(F,_),R.state=function(){return p(_,{})}),S?(t[s]=R,E):R})(A,w,"global"in y?y.global:this==t,y.state)}function d(g){var y,x=g.length,b=this,w=0,_=b.i=b.j=0,A=b.S=[];for(x||(g=[x++]);w<i;)A[w]=w++;for(w=0;w<i;w++)A[w]=A[_=f&_+g[w%x]+(y=A[w])],A[_]=y;(b.g=function(R){for(var E,S=0,F=b.i,N=b.j,U=b.S;R--;)E=U[F=f&F+1],S=S*i+U[f&(U[F]=U[N=f&N+E])+(U[N]=E)];return b.i=F,b.j=N,S})(i)}function p(g,y){return y.i=g.i,y.j=g.j,y.S=g.S.slice(),y}function v(g,y){for(var x,b=g+"",w=0;w<b.length;)y[f&w]=f&(x^=19*y[f&w])+b.charCodeAt(w++);return m(y)}function m(g){return String.fromCharCode.apply(0,g)}if(t["seed"+s]=h,v(t.random(),n),e.exports){e.exports=h;try{r=require("crypto")}catch{}}})([],Math)}));Pr.alea=Ax,Pr.xor128=kx,Pr.xorwow=Dx,Pr.xorshift7=Tx,Pr.xor4096=Nx,Pr.tychei=Fx;var es=Pr.alea,Cc=(function(){function e(n,t,r,o,i){this.mean=n,this.stdDev=t,this.dtype=r,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var a=i||Math.random();this.random=es(a.toString())}return e.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var n=this.nextVal;return this.nextVal=NaN,n}for(var t,r,o=!1;!o;){var i=void 0,a=void 0,s=void 0;do s=(i=2*this.random()-1)*i+(a=2*this.random()-1)*a;while(s>=1||s===0);var u=Math.sqrt(-2*Math.log(s)/s);t=this.mean+this.stdDev*i*u,r=this.mean+this.stdDev*a*u,this.truncated&&!this.isValidTruncated(t)||(o=!0)}return this.truncated&&!this.isValidTruncated(r)||(this.nextVal=this.convertValue(r)),this.convertValue(t)},e.prototype.convertValue=function(n){return this.dtype==null||this.dtype==="float32"?n:Math.round(n)},e.prototype.isValidTruncated=function(n){return n<=this.upper&&n>=this.lower},e})(),Px=(function(){function e(n,t,r,o){this.alpha=n,this.beta=1/t,this.dtype=r;var i=o||Math.random();this.randu=es(i.toString()),this.randn=new Cc(0,1,r,!1,this.randu()),this.d=n<1?n+2/3:n-1/3,this.c=1/Math.sqrt(9*this.d)}return e.prototype.nextValue=function(){for(var n,t,r,o,i,a;;){do o=this.randn.nextValue(),a=1+this.c*o;while(a<=0);if(a*=a*a,t=1-.331*(n=o*o)*n,r=.5*n+this.d*(1-a+Math.log(a)),(i=this.randu())<t||Math.log(i)<r)break}return a=1/this.beta*this.d*a,this.alpha<1&&(a*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(a)},e.prototype.convertValue=function(n){return this.dtype==="float32"?n:Math.round(n)},e})(),Mx=(function(){function e(n,t,r,o){var i=this;if(n===void 0&&(n=0),t===void 0&&(t=1),this.canReturnFloat=function(){return i.dtype==null||i.dtype==="float32"},this.min=n,this.range=t-n,this.dtype=r,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error("The difference between "+n+" - "+t+" <= 1 and dtype is not float");this.random=es(o)}return e.prototype.convertValue=function(n){return this.canReturnFloat()?n:Math.round(n)},e.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},e})();function Te(e,n,t){return n===void 0&&(n="float32"),n=n||"float32",up(e),new di(e,n,t)}function Ox(e,n){n===void 0&&(n=!1),console.log(e.toString(n))}var mp=T({batchToSpaceND_:function(e,n,t){var r=C(e,"x","batchToSpaceND"),o=n.reduce((function(i,a){return i*a}));return I(r.rank>=1+n.length,(function(){return"input rank is "+r.rank+" but should be > than blockShape.length "+n.length})),I(t.length===n.length,(function(){return"crops.length is "+t.length+" but should be equal to blockShape.length  "+n.length})),I(r.shape[0]%o==0,(function(){return"input tensor batch is "+r.shape[0]+" but is not divisible by the product of the elements of blockShape "+n.join(" * ")+" === "+o})),P.runKernelFunc((function(i){return i.batchToSpaceND(r,n,t)}),{$x:r},(function(i){return{$x:function(){return i.spaceToBatchND(n,t)}}}))}}),Bx=T({broadcastTo_:function(e,n){var t=C(e,"broadcastTo","x"),r=t.shape;if(n.some((function(u){return!(u>0)||u%1!=0})))throw new Error("broadcastTo(): Invalid broadcast shape ["+n+"].");if(n.length<t.rank)throw new Error("broadcastTo(): shape.length="+n.length+" < input.rank="+t.rank+".");if(n.length>t.rank){for(var o=t.shape.slice();o.length<n.length;)o.unshift(1);t=t.reshape(o)}for(var i=Array.from(n),a=n.length-1;a>=0;a--)if(t.shape[a]===n[a])i[a]=1;else if(t.shape[a]!==1)throw new Error("broadcastTo(): ["+r+"] cannot be broadcast to ["+n+"].");var s=i.map((function(u,c){return u>1?c:-1})).filter((function(u){return u>=0}));return s.length===0?t.clone():P.runKernelFunc((function(u){return u.tile(t,i)}),{input:t},(function(u){return{input:function(){return u.sum(s,!0)}}}))}}),Lx=T({cast_:function(e,n){var t=C(e,"x","cast");if(!Db(n))throw new Error("Failed to cast to unknown dtype "+n);if(n==="string"&&t.dtype!=="string"||n!=="string"&&t.dtype==="string")throw new Error("Only strings can be casted to strings");var r={dtype:n};return P.runKernelFunc((function(o){return o.cast(t,n)}),{x:t},(function(o){return{x:function(){return o.clone()}}}),"Cast",r)}}),Wx=T({clone_:function(e){var n=C(e,"x","clone",null);return P.runKernelFunc((function(){return P.makeTensorFromDataId(n.dataId,n.shape,n.dtype)}),{$x:n},(function(t){return{$x:function(){return t.toFloat()}}}))}}),Vx=T({cumsum_:function(e,n,t,r){n===void 0&&(n=0),t===void 0&&(t=!1),r===void 0&&(r=!1);var o=C(e,"x","cumsum"),i=Bn([n|=0],o.rank),a=o;i!=null&&(a=o.transpose(i));var s=Ln(1,o.rank)[0],u=P.runKernelFunc((function(c){return c.cumsum(a,s,t,r)}),{permutedX:a},(function(c){return{permutedX:function(){return c.cumsum(n,t,!r)}}}));return i!=null&&(u=u.transpose(i)),u}}),Ux=T({depthToSpace_:function(e,n,t){t===void 0&&(t="NHWC");var r=C(e,"x","depthToSpace"),o=t==="NHWC"?r.shape[1]:r.shape[2],i=t==="NHWC"?r.shape[2]:r.shape[3],a=t==="NHWC"?r.shape[3]:r.shape[1];return I(o*n>=0,(function(){return`Negative dimension size caused by overflow when multiplying
      `+o+" and "+n+`  for depthToSpace with input shape
      `+r.shape})),I(i*n>=0,(function(){return`Negative dimension size caused by overflow when multiplying
      `+i+" and "+n+` for depthToSpace with input shape
          `+r.shape})),I(a%(n*n)==0,(function(){return"Dimension size must be evenly divisible by "+n*n+" but is "+a+" for depthToSpace with input shape "+r.shape})),P.runKernelFunc((function(s){return s.depthToSpace(r,n,t)}),{$x:r})}}),Zt=T({expandDims_:function(e,n){n===void 0&&(n=0);var t=C(e,"x","expandDims",null);I(n<=t.rank,(function(){return"Axis must be <= rank of the tensor"}));var r=t.shape.slice();return n<0&&(I(-(t.rank+1)<=n,(function(){return"Axis must be in the interval ["+-(t.rank+1)+", "+t.rank+"]"})),n=t.rank+n+1),r.splice(n,0,1),ln(t,r)}}),gp=T({eye_:function(e,n,t,r){r===void 0&&(r="float32"),n==null&&(n=e);for(var o=Te([e,n],r),i=e<=n?e:n,a=0;a<i;++a)o.set(1,a,a);var s=o.toTensor().as2D(e,n);if(t==null)return s;if(t.length===1)return yo(Zt(s,0),[t[0],1,1]);if(t.length===2)return yo(Zt(Zt(s,0),0),[t[0],t[1],1,1]);if(t.length===3)return yo(Zt(Zt(Zt(s,0),0),0),[t[0],t[1],t[2],1,1]);throw new Error("eye() currently supports only 1D and 2D batchShapes, but received "+t.length+"D.")}}),zx=T({multinomial_:function(e,n,t,r){r===void 0&&(r=!1);var o=C(e,"logits","multinomial"),i=o.size,a=o.rank;if(i<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+i+".");if(a>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+a);t=t||Math.random();var s=a===1?o.as2D(1,-1):o,u=P.runKernelFunc((function(c){return c.multinomial(s,r,n,t)}),{logits2D:s});return a===1?u.as1D():u}}),Vu=T({oneHot_:function(e,n,t,r){if(t===void 0&&(t=1),r===void 0&&(r=0),n<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+n);var o=C(e,"indices","oneHot","int32"),i=o.shape.concat([n]);return o=o.flatten(),P.runKernelFunc((function(a){return a.oneHot(o,n,t,r)}),{$indices:o},(function(a){return{$indices:function(){return qe(o.shape,"float32")}}})).reshape(i)}}),Yr=T({pad_:function(e,n,t){t===void 0&&(t=0);var r=C(e,"x","pad");if(r.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");var o={paddings:n,constantValue:t};return P.runKernelFunc((function(i){return i.pad(r,n,t)}),{x:r},(function(i){var a=n.map((function(s){return s[0]}));return{x:function(){return i.slice(a,r.shape)}}}),"PadV2",o)}}),Gx=T({pad1d_:function(e,n,t){return t===void 0&&(t=0),I(n.length===2,(function(){return"Invalid number of paddings. Must be length of 2."})),Yr(e,[n],t)}}),Hx=T({pad2d_:function(e,n,t){return t===void 0&&(t=0),I(n.length===2&&n[0].length===2&&n[1].length===2,(function(){return"Invalid number of paddings. Must be length of 2 each."})),Yr(e,n,t)}}),jx=T({pad3d_:function(e,n,t){return t===void 0&&(t=0),I(n.length===3&&n[0].length===2&&n[1].length===2&&n[2].length===2,(function(){return"Invalid number of paddings. Must be length of 2 each."})),Yr(e,n,t)}}),qx=T({pad4d_:function(e,n,t){return t===void 0&&(t=0),I(n.length===4&&n[0].length===2&&n[1].length===2&&n[2].length===2&&n[3].length===2,(function(){return"Invalid number of paddings. Must be length of 2 each."})),Yr(e,n,t)}}),Kx=T({rand_:function(e,n,t){var r=be(e),o=null;if(t==null||t==="float32")o=new Float32Array(r);else if(t==="int32")o=new Int32Array(r);else{if(t!=="bool")throw new Error("Unknown data type "+t);o=new Uint8Array(r)}for(var i=0;i<r;i++)o[i]=n();return P.makeTensor(o,e,t)}}),$x=T({randomNormal_:function(e,n,t,r,o){if(n===void 0&&(n=0),t===void 0&&(t=1),r!=null&&r==="bool")throw new Error("Unsupported data type "+r);for(var i=new Cc(n,t,r,!1,o),a=Te(e,r),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),Xx=T({randomGamma_:function(e,n,t,r,o){if(t===void 0&&(t=1),r===void 0&&(r="float32"),t==null&&(t=1),r==null&&(r="float32"),r!=="float32"&&r!=="int32")throw new Error("Unsupported data type "+r);for(var i=new Px(n,t,r,o),a=Te(e,r),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),yp=T({randomUniform_:function(e,n,t,r,o){n===void 0&&(n=0),t===void 0&&(t=1),r===void 0&&(r="float32");for(var i=Te(e,r),a=new Mx(n,t,null,o),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),ln=T({reshape_:function(e,n){var t=C(e,"x","reshape",null);n=Ab(n,t.size),I(t.size===be(n),(function(){return"new shape and old shape must have the same number of elements."}));var r={shape:n};return P.runKernelFunc((function(o){return o.reshape(t,n)}),{x:t},(function(o){return{x:function(){return o.reshape(t.shape)}}}),"Reshape",r)}}),bp=T({spaceToBatchND_:function(e,n,t){var r=C(e,"x","spaceToBatchND");return I(r.rank>=1+n.length,(function(){return"input rank "+r.rank+" should be > than [blockShape] "+n.length})),I(t.length===n.length,(function(){return"paddings.shape[0] "+t.length+" must be equal to [blockShape] "+n.length})),I(r.shape.reduce((function(o,i,a){return a>0&&a<=n.length?o&&(i+t[a-1][0]+t[a-1][1])%n[a-1]==0:o}),!0),(function(){return"input spatial dimensions "+r.shape.slice(1)+" with paddings "+t.toString()+" must be divisible by blockShapes "+n.toString()})),P.runKernelFunc((function(o){return o.spaceToBatchND(r,n,t)}),{$x:r},(function(o){return{$x:function(){return o.batchToSpaceND(n,t)}}}))}}),xp=T({squeeze_:function(e,n){var t=C(e,"x","squeeze");return ln(t,Mr(t.shape,n).newShape)}}),Xt=T({stack_:function(e,n){n===void 0&&(n=0);var t=xa(e,"tensors","stack");if(I(t.length>=1,(function(){return"Pass at least one tensor to tf.stack"})),t.length===1)return t[0].expandDims(n);var r=t[0].rank,o=t[0].shape,i=t[0].dtype;I(n<=r,(function(){return"Axis must be <= rank of the tensor"})),t.forEach((function(s){Ge(o,s.shape,"All tensors passed to stack must have matching shapes")})),t.forEach((function(s){I(i===s.dtype,(function(){return"All tensors passed to stack must have matching dtypes"}))}));var a=t.map((function(s){return s.expandDims(n)}));return at(a,n)}}),yo=T({tile_:function(e,n){var t=C(e,"x","tile",null);I(t.rank===n.length,(function(){return"Error in transpose: rank of input "+t.rank+" must match length of reps "+n+"."}));var r=[t],o={reps:n};return P.runKernelFunc((function(i,a){var s=i.tile(t,n);return a([t]),s}),{x:t},(function(i,a){var s=a[0];return{x:function(){var u=Be(s);if(s.rank===1)for(var c=0;c<n[0];++c)u=u.add(i.slice([c*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(c=0;c<n[0];++c)for(var l=0;l<n[1];++l)u=u.add(i.slice([c*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(c=0;c<n[0];++c)for(l=0;l<n[1];++l)for(var f=0;f<n[2];++f)u=u.add(i.slice([c*s.shape[0],l*s.shape[1],f*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else{if(s.rank!==4)throw new Error("Gradient for tile operation is not implemented for rank-"+s.rank+" tensors yet.");for(c=0;c<n[0];++c)for(l=0;l<n[1];++l)for(f=0;f<n[2];++f)for(var h=0;h<n[3];++h)u=u.add(i.slice([c*s.shape[0],l*s.shape[1],f*s.shape[2],h*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]))}return u}}}),"Tile",o,r)}}),Yx=T({truncatedNormal_:function(e,n,t,r,o){if(n===void 0&&(n=0),t===void 0&&(t=1),r!=null&&r==="bool")throw new Error("Unsupported data type "+r);for(var i=new Cc(n,t,r,!0,o),a=Te(e,r),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),st=T({unstack_:function(e,n){n===void 0&&(n=0),n=n||0;var t=C(e,"x","unstack");I(n>=-t.shape.length&&n<t.shape.length,(function(){return"Axis = "+n+" is not in [-"+t.shape.length+", "+t.shape.length+")"})),n<0&&(n+=t.shape.length);var r={axis:n};return P.runKernelFunc((function(o){return o.unstack(t,n)}),{x:t},(function(o){return{x:function(){return Xt(o,n)}}}),"Unpack",r)}}),Jx=function(e,n){return pe(this,void 0,void 0,(function(){var t,r,o,i,a,s,u,c,l,f;return ve(this,(function(h){switch(h.label){case 0:return t=C(e,"x","setdiff1d"),r=C(n,"y","setdiff1d"),I(t.dtype===r.dtype,(function(){return"x and y should have the same dtype, but got x ("+t.dtype+") and y ("+r.dtype+")."})),I(t.rank===1,(function(){return"x should be 1D tensor, but got x ("+t.shape+")."})),I(r.rank===1,(function(){return"y should be 1D tensor, but got y ("+r.shape+")."})),[4,t.data()];case 1:return o=h.sent(),[4,r.data()];case 2:for(i=h.sent(),a=new Set(i),s=0,l=0;l<o.length;l++)a.has(o[l])||s++;for(u=new di([s],t.dtype),c=new di([s],"int32"),l=0,f=0;l<o.length;l++)a.has(o[l])||(u.values[f]=o[l],c.values[f]=l,f++);return[2,[u.toTensor(),c.toTensor()]]}}))}))};function _a(e,n,t,r){r===void 0&&(r=!0);var o=[];if(r)(o=o.concat(n.slice(0))).push(e[0]/t),o=o.concat(e.slice(1));else{o=o.concat(e[0]);for(var i=n.length,a=0;a<i;++a)o=o.concat([e[a+1]/n[a],n[a]]);o=o.concat(e.slice(i+1))}return o}function Ca(e,n,t){t===void 0&&(t=!0);var r=[];if(t){r.push(n);for(var o=n+1;o<e;++o)o<=2*n?(r.push(o),r.push(o-(n+1))):r.push(o)}else{var i=[],a=[];for(o=1;o<e;++o)o>=2*n+1||o%2==1?a.push(o):i.push(o);r.push.apply(r,i),r.push(0),r.push.apply(r,a)}return r}function Ea(e,n,t,r){r===void 0&&(r=!0);var o=[];r?o.push(e[0]/t):o.push(e[0]*t);for(var i=1;i<e.length;++i)i<=n.length?r?o.push(n[i-1]*e[i]):o.push(e[i]/n[i-1]):o.push(e[i]);return o}function wp(e,n){for(var t=[0],r=0;r<n;++r)t.push(e[r][0]);return t}function _p(e,n,t){for(var r=e.slice(0,1),o=0;o<t;++o)r.push(e[o+1]-n[o][0]-n[o][1]);return r}function Cp(e,n){if(e.rank<1)throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was "+e.rank+".");if(n.rank<1)throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was "+n.rank+".");if(n.dtype!=="int32")throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was "+n.dtype+".");if(n.shape[n.rank-1]>e.rank)throw new Error("index innermost dimension length must be <= tensor rank; saw: "+n.shape[n.rank-1]+" vs. "+e.rank);if(e.size===0)throw new Error("Requested more than 0 entries, but input is empty. Input shape: "+e.shape+".");for(var t=n.shape,r=t[t.length-1],o=1,i=0;i<t.length-1;++i)o*=t[i];var a=e.shape,s=t.slice();s.pop();var u=1;for(i=r;i<e.rank;++i)u*=a[i],s.push(a[i]);var c=Tn(e.shape).map((function(l){return l/u})).concat([1]).slice(0,r);return[s,o,u,c]}var Ep=30;function zs(e){return e<=Ep?e:Pu(e,Math.floor(Math.sqrt(e)))}function Qx(e,n,t){var r=n.rank>1?n.shape[n.rank-1]:1,o=n.rank>1?n.rank-1:1,i="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+t.shape+", indices.shape: "+n.shape+", shape: "+e+", sliceDim: "+r+", and batchDim: "+o+".";if(t.rank<o)throw new Error(i+" update.rank < "+o+". ");if(e.length<r+(t.rank-o))throw new Error(i+" Output shape length < "+(r+(t.rank-o)));if(t.rank!==o+e.length-r)throw new Error(i+" update.rank != "+(o+e.length-r));for(var a=0;a<o;++a)if(t.shape[a]!==n.shape[a])throw new Error(i+" updates.shape["+a+"] ("+t.shape[a]+") != indices.shape["+a+"] ("+n.shape[a]+").");for(a=0;a<t.rank-o;++a)if(t.shape[a+o]!==e[a+r])throw new Error(i+" updates.shape["+(a+o)+"] ("+t.shape[a+o]+") != shape["+(a+o)+"] ("+e[a+o]+")")}function Zx(e,n,t){if(n.rank<1)throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was "+n.rank+".");if(e.rank<1)throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was "+e.rank+".");if(n.dtype!=="int32")throw new Error("The dtype of 'indices' should be int32, but got dtype: "+n.dtype);if(t.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+t);if(t.length===0){if(n.size===0)throw new Error("Indices specified for empty output. indices shape: "+n.shape);if(e.size===0)throw new Error("Updates specified for empty output. updates shape: "+e.shape)}Qx(t,n,e)}function Ra(e,n,t){for(var r=n.shape.length,o=r>1?n.shape[r-1]:1,i=t.length,a=1,s=o;s<i;++s)a*=t[s];var u=o<1?1:o;return{sliceRank:o,numUpdates:be(n.shape)/u,sliceSize:a,strides:Tn(t.slice(0,o)).concat([1]),outputSize:be(t)}}function e1(e,n,t){I(e.rank===n.length,(function(){return"Error in slice"+e.rank+"D: Length of begin "+n+" must match the rank of the array ("+e.rank+")."})),I(e.rank===t.length,(function(){return"Error in slice"+e.rank+"D: Length of size "+t+" must match the rank of the array ("+e.rank+")."}));for(var r=function(i){I(n[i]+t[i]<=e.shape[i],(function(){return"Error in slice"+e.rank+"D: begin["+i+"] + size["+i+"] ("+(n[i]+t[i])+") would overflow input.shape["+i+"] ("+e.shape[i]+")"}))},o=0;o<e.rank;++o)r(o)}function kf(e){for(var n=[],t=0;e>0;)1&e&&n.push(t),e/=2,t++;return n}function Ec(e,n,t){for(var r=[],o=0;o<e.length;o++)r[o]=Math.ceil((n[o]-e[o])/t[o]);return r}function t1(e,n,t,r,o){var i=n[o],a=t[o]||1;(e&1<<o||i==null)&&(i=a>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);var s=r[o];return i<0&&(i+=s),i=Tu(0,i,s-1)}function n1(e,n,t,r,o){var i=n[o],a=t[o]||1;(e&1<<o||i==null)&&(i=a>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);var s=r[o];return i<0&&(i+=s),i=a>0?Tu(0,i,s):Tu(-1,i,s-1)}function Rp(e,n,t){for(var r=t.length,o=0;o<t.length;o++)if(t[o]>1){r=o;break}for(o=r+1;o<t.length;o++)if(n[o]>0||t[o]!==e[o])return!1;return!0}function Sp(e,n){for(var t=e.length>0?e[e.length-1]:1,r=0;r<e.length-1;r++)t+=e[r]*n[r];return t}function r1(e,n){I(Fu(e),(function(){return"The f passed in variableGrads(f) must be a function"})),I(n==null||Array.isArray(n)&&n.every((function(l){return l instanceof Po})),(function(){return"The varList passed in variableGrads(f, varList) must be an array of variables"}));var t=n!=null;if(!t)for(var r in n=[],P.registeredVariables)n.push(P.registeredVariables[r]);var o=t?n.filter((function(l){return!l.trainable})):null,i=n.length;I((n=n.filter((function(l){return l.trainable}))).length>0,(function(){return"variableGrads() expects at least one of the input variables to be trainable, but none of the "+i+" variables is trainable."}));var a=P.gradients(e,n,null,!0),s=a.value,u=a.grads;I(u.some((function(l){return l!=null})),(function(){return"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."})),I(s.rank===0,(function(){return"The f passed in variableGrads(f) must return a scalar, but it returned a rank-"+s.rank+" tensor"}));var c={};return n.forEach((function(l,f){u[f]!=null&&(c[l.name]=u[f])})),o?.forEach((function(l){return c[l.name]=null})),{value:s,grads:c}}function ts(e){return P.customGrad(e)}var nr=T({softmax_:function(e,n){n===void 0&&(n=-1);var t=C(e,"logits","softmax","float32");if(n===-1&&(n=t.rank-1),n!==t.rank-1)throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank "+t.rank+" and dim was "+n);return P.runKernelFunc((function(r,o){var i=r.softmax(t,n);return o([i]),i}),{logits:t},(function(r,o){var i=o[0],a=r.mul(i);return{logits:function(){return a.sub(a.sum([n],!0).mul(i))}}}),"Softmax",{dim:n},[],[!0])}}),o1=T({logSoftmax_:function(e,n){n===void 0&&(n=-1);var t=C(e,"logits","logSoftmax");if(n===-1&&(n=t.rank-1),n!==t.rank-1)throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank "+t.rank+" and axis was "+n);return ts((function(r,o){var i=r.max(n,!0),a=r.sub(i),s=a.toFloat().sub(a.exp().sum(n,!0).log());return o([s]),{value:s,gradFunc:function(u,c){var l=c[0].exp();return u.sub(u.sum(n,!0).mul(l))}}}))(t)}}),Ip=(function(){function e(n,t){this.backend=n,this.dataMover=t,this.data=new WeakMap,this.dataIdsCount=0}return e.prototype.get=function(n){return this.data.has(n)||this.dataMover.moveData(this.backend,n),this.data.get(n)},e.prototype.set=function(n,t){this.dataIdsCount++,this.data.set(n,t)},e.prototype.has=function(n){return this.data.has(n)},e.prototype.delete=function(n){return this.dataIdsCount--,this.data.delete(n)},e.prototype.numDataIds=function(){return this.dataIdsCount},e})(),Ap=(function(){function e(){}return e.prototype.time=function(n){return W("time")},e.prototype.read=function(n){return W("read")},e.prototype.readSync=function(n){return W("readSync")},e.prototype.numDataIds=function(){return W("numDataIds")},e.prototype.disposeData=function(n){return W("disposeData")},e.prototype.write=function(n,t,r){return W("write")},e.prototype.move=function(n,t,r,o){return W("move")},e.prototype.memory=function(){return W("memory")},e.prototype.floatPrecision=function(){return W("floatPrecision")},e.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},e.prototype.batchMatMul=function(n,t,r,o){return W("batchMatMul")},e.prototype.fusedBatchMatMul=function(n){return n.a,n.b,n.transposeA,n.transposeB,n.bias,n.activation,n.preluActivationWeights,W("fusedBatchMatMul")},e.prototype.slice=function(n,t,r){return W("slice")},e.prototype.stridedSlice=function(n,t,r,o){return W("stridedSlice")},e.prototype.unstack=function(n,t){return W("unstack")},e.prototype.reverse=function(n,t){return W("reverse")},e.prototype.concat=function(n,t){return W("concat")},e.prototype.neg=function(n){return W("neg")},e.prototype.add=function(n,t){return W("add")},e.prototype.addN=function(n){return W("addN")},e.prototype.subtract=function(n,t){return W("subtract")},e.prototype.multiply=function(n,t){return W("multiply")},e.prototype.realDivide=function(n,t){return W("realDivide")},e.prototype.floorDiv=function(n,t){return W("floorDiv")},e.prototype.sum=function(n,t){return W("sum")},e.prototype.prod=function(n,t){return W("prod")},e.prototype.unsortedSegmentSum=function(n,t,r){return W("unsortedSegmentSum")},e.prototype.argMin=function(n,t){return W("argMin")},e.prototype.argMax=function(n,t){return W("argMax")},e.prototype.equal=function(n,t){return W("equal")},e.prototype.notEqual=function(n,t){return W("notEqual")},e.prototype.less=function(n,t){return W("less")},e.prototype.lessEqual=function(n,t){return W("lessEqual")},e.prototype.greater=function(n,t){return W("greater")},e.prototype.greaterEqual=function(n,t){return W("greaterEqual")},e.prototype.logicalNot=function(n){return W("logicalNot")},e.prototype.logicalAnd=function(n,t){return W("logicalAnd")},e.prototype.logicalOr=function(n,t){return W("logicalOr")},e.prototype.where=function(n){return W("where")},e.prototype.select=function(n,t,r){return W("select")},e.prototype.topk=function(n,t,r){return W("topk")},e.prototype.min=function(n,t){return W("min")},e.prototype.minimum=function(n,t){return W("minimum")},e.prototype.mod=function(n,t){return W("mod")},e.prototype.max=function(n,t){return W("max")},e.prototype.maximum=function(n,t){return W("maximum")},e.prototype.all=function(n,t){return W("all")},e.prototype.any=function(n,t){return W("any")},e.prototype.squaredDifference=function(n,t){return W("squaredDifference")},e.prototype.ceil=function(n){return W("ceil")},e.prototype.floor=function(n){return W("floor")},e.prototype.round=function(n){return W("round")},e.prototype.sign=function(n){return W("sign")},e.prototype.isNaN=function(n){return W("isNaN")},e.prototype.isInf=function(n){return W("isInf")},e.prototype.isFinite=function(n){return W("isFinite")},e.prototype.pow=function(n,t){return W("pow")},e.prototype.exp=function(n){return W("exp")},e.prototype.expm1=function(n){return W("expm1")},e.prototype.softmax=function(n,t){return W("softmax")},e.prototype.log=function(n){return W("log")},e.prototype.log1p=function(n){return W("log1p")},e.prototype.sqrt=function(n){return W("sqrt")},e.prototype.rsqrt=function(n){return W("rsqrt")},e.prototype.square=function(n){return W("square")},e.prototype.reciprocal=function(n){return W("reciprocal")},e.prototype.relu=function(n){return W("relu")},e.prototype.relu6=function(n){return W("relu6")},e.prototype.prelu=function(n,t){return W("prelu")},e.prototype.elu=function(n){return W("elu")},e.prototype.eluDer=function(n,t){return W("eluDer")},e.prototype.selu=function(n){return W("selu")},e.prototype.int=function(n){return W("int")},e.prototype.clip=function(n,t,r){return W("clip")},e.prototype.abs=function(n){return W("abs")},e.prototype.complexAbs=function(n){return W("complexAbs")},e.prototype.sigmoid=function(n){return W("sigmoid")},e.prototype.softplus=function(n){return W("softplus")},e.prototype.sin=function(n){return W("sin")},e.prototype.cos=function(n){return W("cos")},e.prototype.tan=function(n){return W("tan")},e.prototype.asin=function(n){return W("asin")},e.prototype.acos=function(n){return W("acos")},e.prototype.atan=function(n){return W("atan")},e.prototype.atan2=function(n,t){return W("atan2")},e.prototype.sinh=function(n){return W("sinh")},e.prototype.cosh=function(n){return W("cosh")},e.prototype.tanh=function(n){return W("tanh")},e.prototype.asinh=function(n){return W("asinh")},e.prototype.acosh=function(n){return W("acosh")},e.prototype.atanh=function(n){return W("atanh")},e.prototype.erf=function(n){return W("erf")},e.prototype.step=function(n,t){return W("step")},e.prototype.fusedConv2d=function(n){return n.input,n.filter,n.convInfo,n.bias,n.activation,n.preluActivationWeights,W("fusedConv2d")},e.prototype.conv2d=function(n,t,r){return W("conv2d")},e.prototype.conv2dDerInput=function(n,t,r){return W("conv2dDerInput")},e.prototype.conv2dDerFilter=function(n,t,r){return W("conv2dDerFilter")},e.prototype.fusedDepthwiseConv2D=function(n){return n.input,n.filter,n.convInfo,n.bias,n.activation,n.preluActivationWeights,W("fusedDepthwiseConv2D")},e.prototype.depthwiseConv2D=function(n,t,r){return W("depthwiseConv2D")},e.prototype.depthwiseConv2DDerInput=function(n,t,r){return W("depthwiseConv2DDerInput")},e.prototype.depthwiseConv2DDerFilter=function(n,t,r){return W("depthwiseConv2DDerFilter")},e.prototype.conv3d=function(n,t,r){return W("conv3d")},e.prototype.conv3dDerInput=function(n,t,r){return W("conv3dDerInput")},e.prototype.conv3dDerFilter=function(n,t,r){return W("conv3dDerFilter")},e.prototype.maxPool=function(n,t){return W("maxPool")},e.prototype.maxPoolBackprop=function(n,t,r,o){return W("maxPoolBackprop")},e.prototype.avgPool=function(n,t){return W("avgPool")},e.prototype.avgPoolBackprop=function(n,t,r){return W("avgPoolBackprop")},e.prototype.avgPool3d=function(n,t){return W("avgPool3d")},e.prototype.avgPool3dBackprop=function(n,t,r){return W("avgPool3dBackprop")},e.prototype.maxPool3d=function(n,t){return W("maxPool3d")},e.prototype.maxPool3dBackprop=function(n,t,r,o){return W("maxPool3dBackprop")},e.prototype.reshape=function(n,t){return W("reshape")},e.prototype.cast=function(n,t){return W("cast")},e.prototype.tile=function(n,t){return W("tile")},e.prototype.pad=function(n,t,r){return W("pad")},e.prototype.transpose=function(n,t){return W("transpose")},e.prototype.gather=function(n,t,r){return W("gather")},e.prototype.gatherND=function(n,t){return W("gatherND")},e.prototype.scatterND=function(n,t,r){return W("scatterND")},e.prototype.batchToSpaceND=function(n,t,r){return W("batchToSpaceND")},e.prototype.spaceToBatchND=function(n,t,r){return W("spaceToBatchND")},e.prototype.resizeBilinear=function(n,t,r,o){return W("resizeBilinear")},e.prototype.resizeBilinearBackprop=function(n,t,r){return W("resizeBilinearBackprop")},e.prototype.resizeNearestNeighbor=function(n,t,r,o){return W("resizeNearestNeighbor")},e.prototype.resizeNearestNeighborBackprop=function(n,t,r){return W("resizeNearestNeighborBackprop")},e.prototype.batchNormalization=function(n,t,r,o,i,a){return W("batchNormalization")},e.prototype.localResponseNormalization4D=function(n,t,r,o,i){return W("localResponseNormalization4D")},e.prototype.LRNGrad=function(n,t,r,o,i,a,s){return W("LRNGrad")},e.prototype.multinomial=function(n,t,r,o){return W("multinomial")},e.prototype.oneHot=function(n,t,r,o){return W("oneHot")},e.prototype.cumsum=function(n,t,r,o){return W("cumsum")},e.prototype.nonMaxSuppression=function(n,t,r,o,i){return W("nonMaxSuppression")},e.prototype.fft=function(n){return W("fft")},e.prototype.ifft=function(n){return W("ifft")},e.prototype.complex=function(n,t){return W("complex")},e.prototype.real=function(n){return W("real")},e.prototype.imag=function(n){return W("imag")},e.prototype.cropAndResize=function(n,t,r,o,i,a){return W("cropAndResize")},e.prototype.depthToSpace=function(n,t,r){return W("depthToSpace")},e.prototype.split=function(n,t,r){return W("split")},e.prototype.sparseToDense=function(n,t,r,o){return W("sparseToDense")},e.prototype.diag=function(n){return W("diag")},e.prototype.fill=function(n,t,r){return W("fill")},e.prototype.onesLike=function(n){return W("onesLike")},e.prototype.zerosLike=function(n){return W("zerosLike")},e.prototype.linspace=function(n,t,r){return W("linspace")},e.prototype.dispose=function(){return W("dispose")},e})();function W(e){throw new Error("'"+e+"' not yet implemented or not found in the registry. Did you forget to import the kernel?")}function mr(e,n){for(var t=e.length,r=[],o=0;o<t;o++){var i=t-1-o,a=e[i]||1;(n[n.length-1-o]||1)>1&&a===1&&r.unshift(i)}return r}function ct(e,n){for(var t=[],r=0;r<n.length;r++){var o=e[e.length-r-1],i=n.length-r-1,a=n[i];(o==null||o===1&&a>1)&&t.unshift(i)}return t}function Oe(e,n){for(var t=[],r=Math.max(e.length,n.length),o=0;o<r;o++){var i=e[e.length-o-1];i==null&&(i=1);var a=n[n.length-o-1];if(a==null&&(a=1),i===1)t.unshift(a);else if(a===1)t.unshift(i);else{if(i!==a)throw Error("Operands could not be broadcast together with shapes "+e+" and "+n+".");t.unshift(i)}}return t}function vi(e,n,t,r,o,i,a){a===void 0&&(a="channelsLast");var s,u=Aa(n),c=u[0],l=u[1];if(a==="channelsLast")s=[c,l,e[3],e[3]];else{if(a!=="channelsFirst")throw new Error("Unknown dataFormat "+a);s=[c,l,e[1],e[1]]}return Jr(e,s,t,r,o,i,!1,a)}function Sa(e,n,t,r,o,i,a){a===void 0&&(a="NDHWC");var s,u,c=Uu(n),l=c[0],f=c[1],h=c[2];if(a==="NDHWC")u="channelsLast",s=[l,f,h,e[4],e[4]];else{if(a!=="NCDHW")throw new Error("Unknown dataFormat "+a);u="channelsFirst",s=[l,f,h,e[1],e[1]]}return Ia(e,s,t,r,o,!1,u,i)}function Jr(e,n,t,r,o,i,a,s){a===void 0&&(a=!1),s===void 0&&(s="channelsLast");var u=[-1,-1,-1,-1],c=u[0],l=u[1],f=u[2],h=u[3];if(s==="channelsLast")c=e[0],l=e[1],f=e[2],h=e[3];else{if(s!=="channelsFirst")throw new Error("Unknown dataFormat "+s);c=e[0],h=e[1],l=e[2],f=e[3]}var d,p=n[0],v=n[1],m=n[3],g=Aa(t),y=g[0],x=g[1],b=Aa(r),w=b[0],_=b[1],A=bo(p,w),R=bo(v,_),E=(function(z,G,H,O,B,$,J,oe){var le,de,Re;if(typeof z=="number"){le={top:z,bottom:z,left:z,right:z,type:z===0?"VALID":"NUMBER"};var Se=(function(se,Ee,he,ge,D){ge==null&&(ge=kp(se,Ee,he));var k=se[0],M=se[1],K=ni((k-Ee+2*ge)/he+1,D);I(tt(K),(function(){return"The output # of rows ("+K+") must be an integer. Change the stride and/or zero pad parameters"}));var j=ni((M-Ee+2*ge)/he+1,D);return I(tt(j),(function(){return"The output # of columns ("+j+") must be an integer. Change the stride and/or zero pad parameters"})),[K,j]})([G,H],$,O,z,oe);de=Se[0],Re=Se[1]}else if(z==="same"){de=Math.ceil(G/O),Re=Math.ceil(H/B);var Ie=Math.max(0,(de-1)*O+$-G),L=Math.max(0,(Re-1)*B+J-H),ee=Math.floor(Ie/2),Q=Ie-ee,ie=Math.floor(L/2);le={top:ee,bottom:Q,left:ie,right:L-ie,type:"SAME"}}else{if(z!=="valid")throw Error("Unknown padding parameter: "+z);le={top:0,bottom:0,left:0,right:0,type:"VALID"},de=Math.ceil((G-$+1)/O),Re=Math.ceil((H-J+1)/B)}return{padInfo:le,outHeight:de,outWidth:Re}})(o,l,f,y,x,A,R,i),S=E.padInfo,F=E.outHeight,N=E.outWidth,U=a?m*h:m;return s==="channelsFirst"?d=[c,U,F,N]:s==="channelsLast"&&(d=[c,F,N,U]),{batchSize:c,dataFormat:s,inHeight:l,inWidth:f,inChannels:h,outHeight:F,outWidth:N,outChannels:U,padInfo:S,strideHeight:y,strideWidth:x,filterHeight:p,filterWidth:v,effectiveFilterHeight:A,effectiveFilterWidth:R,dilationHeight:w,dilationWidth:_,inShape:e,outShape:d,filterShape:n}}function Ia(e,n,t,r,o,i,a,s){i===void 0&&(i=!1),a===void 0&&(a="channelsLast");var u=[-1,-1,-1,-1,-1],c=u[0],l=u[1],f=u[2],h=u[3],d=u[4];if(a==="channelsLast")c=e[0],l=e[1],f=e[2],h=e[3],d=e[4];else{if(a!=="channelsFirst")throw new Error("Unknown dataFormat "+a);c=e[0],d=e[1],l=e[2],f=e[3],h=e[4]}var p,v=n[0],m=n[1],g=n[2],y=n[4],x=Uu(t),b=x[0],w=x[1],_=x[2],A=Uu(r),R=A[0],E=A[1],S=A[2],F=bo(v,R),N=bo(m,E),U=bo(g,S),z=(function(J,oe,le,de,Re,Se,Ie,L,ee,Q,ie){var se,Ee,he,ge;if(typeof J=="number"){se={top:J,bottom:J,left:J,right:J,front:J,back:J,type:J===0?"VALID":"NUMBER"};var D=(function(Z,ce,ye,ue,Ce,Pe){Ce==null&&(Ce=kp(Z,ce,ue));var Qe=Z[0],We=Z[1],Jt=Z[2],an=ni((Qe-ce+2*Ce)/ue+1,Pe);I(tt(an),(function(){return"The output # of depths ("+an+") must be an integer. Change the stride and/or zero pad parameters"}));var kr=ni((We-ce+2*Ce)/ue+1,Pe);I(tt(kr),(function(){return"The output # of rows ("+kr+") must be an integer. Change the stride and/or zero pad parameters"}));var eo=ni((Jt-ce+2*Ce)/ue+1,Pe);return I(tt(eo),(function(){return"The output # of columns ("+eo+") must be an integer. Change the stride and/or zero pad parameters"})),[an,kr,eo,ye]})([oe,le,de,1],L,1,Re,J,ie);Ee=D[0],he=D[1],ge=D[2]}else if(J==="same"){Ee=Math.ceil(oe/Re),he=Math.ceil(le/Se),ge=Math.ceil(de/Ie);var k=(Ee-1)*Re+L-oe,M=(he-1)*Se+ee-le,K=(ge-1)*Ie+Q-de,j=Math.floor(k/2),te=k-j,re=Math.floor(M/2),ne=M-re,X=Math.floor(K/2);se={top:re,bottom:ne,left:X,right:K-X,front:j,back:te,type:"SAME"}}else{if(J!=="valid")throw Error("Unknown padding parameter: "+J);se={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},Ee=Math.ceil((oe-L+1)/Re),he=Math.ceil((le-ee+1)/Se),ge=Math.ceil((de-Q+1)/Ie)}return{padInfo:se,outDepth:Ee,outHeight:he,outWidth:ge}})(o,l,f,h,b,w,_,F,N,U,s),G=z.padInfo,H=z.outDepth,O=z.outHeight,B=z.outWidth,$=i?y*d:y;return a==="channelsFirst"?p=[c,$,H,O,B]:a==="channelsLast"&&(p=[c,H,O,B,$]),{batchSize:c,dataFormat:a,inDepth:l,inHeight:f,inWidth:h,inChannels:d,outDepth:H,outHeight:O,outWidth:B,outChannels:$,padInfo:G,strideDepth:b,strideHeight:w,strideWidth:_,filterDepth:v,filterHeight:m,filterWidth:g,effectiveFilterDepth:F,effectiveFilterHeight:N,effectiveFilterWidth:U,dilationDepth:R,dilationHeight:E,dilationWidth:S,inShape:e,outShape:p,filterShape:n}}function kp(e,n,t,r){r===void 0&&(r=1);var o=bo(n,r);return Math.floor((e[0]*(t-1)-t+o)/2)}function Aa(e){return typeof e=="number"?[e,e,e]:e.length===2?[e[0],e[1],1]:e}function Uu(e){return typeof e=="number"?[e,e,e]:e}function bo(e,n){return n<=1?e:e+(e-1)*(n-1)}function ni(e,n){if(!n)return e;switch(n){case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"floor":return Math.floor(e);default:throw new Error("Unknown roundingMode "+n)}}function Oo(e){var n=Aa(e),t=n[0],r=n[1],o=n[2];return t===1&&r===1&&o===1}function Wt(e,n){return Oo(e)||Oo(n)}function Rc(e){if(e==="NHWC")return"channelsLast";if(e==="NCHW")return"channelsFirst";throw new Error("Unknown dataFormat "+e)}function Dp(e,n,t){if(n==="complex64"){if(e.dtype==="complex64")return e.clone();var r=qe(e.shape),o=e.toFloat(),i=t.complex(o,r);return r.dispose(),o.dispose(),i}if(!Tb(e.dtype,n))return P.makeTensorFromDataId(e.dataId,e.shape,n);if(e.dtype==="complex64"){var a=t.real(e);return i=a.cast(n),a.dispose(),i}if(n==="int32")return t.int(e);if(n==="bool"){var s=ae(0,e.dtype);return i=t.notEqual(e,s),s.dispose(),i}throw new Error("Error in Cast: failed to cast "+e.dtype+" to "+n)}function zu(e,n){return P.makeTensorFromDataId(e.dataId,n,e.dtype)}function Tp(e,n,t){var r=(n-e)/(t-1),o=Ri(t,"float32");o[0]=e;for(var i=1;i<o.length;i++)o[i]=o[i-1]+r;return nt(o,"float32")}function Gu(e,n){if(e.length!==n.length)throw new Error("Cannot merge real and imag arrays of different lengths. real:"+e.length+", imag: "+n.length+".");for(var t=new Float32Array(2*e.length),r=0;r<t.length;r+=2)t[r]=e[r/2],t[r+1]=n[r/2];return t}function Df(e,n){return{real:e[2*n],imag:e[2*n+1]}}function i1(e,n,t,r){e[2*r]=n,e[2*r+1]=t}function a1(e,n,t){var r=(t?2:-2)*Math.PI*(e/n);return{real:Math.cos(r),imag:Math.sin(r)}}function s1(e,n,t){var r=(function(i,a,s){return(function(u,c,l){for(var f=0,h=u.length,d=0,p=!1;f<h;){var v=l(c,u[d=f+(h-f>>>1)]);v>0?f=d+1:(h=d,p=!v)}return p?f:-f-1})(i,a,s||u1)})(e,n,t),o=r<0?-(r+1):r;e.splice(o,0,n)}function u1(e,n){return e>n?1:e<n?-1:0}function Sc(e,n,t,r,o){return Np(e,n,t,r,o,0).selectedIndices}function Ic(e,n,t,r,o,i){var a=Np(e,n,t,r,o,i);return a.numValidOutputs.dispose(),{selectedIndices:a.selectedIndices,selectedScores:a.selectedScores}}function Np(e,n,t,r,o,i,a,s){s===void 0&&(s=!1);for(var u=Array.from(n).map((function(b,w){return{score:b,boxIndex:w,suppressBeginIndex:0}})).filter((function(b){return b.score>o})).sort(Tf),c=i>0?-.5/i:0,l=[],f=[];l.length<t&&u.length>0;){var h=u.pop(),d=h.score,p=h.boxIndex,v=h.suppressBeginIndex;if(d<o)break;for(var m=!1,g=l.length-1;g>=v;--g){var y=c1(e,p,l[g]);if(y>=r){m=!0;break}if(h.score=h.score*l1(r,c,y),h.score<=o)break}h.suppressBeginIndex=l.length,m||(h.score===d?(l.push(p),f.push(h.score)):h.score>o&&s1(u,h,Tf))}var x=l.length;return s&&(l.fill(0,x),f.fill(0,x)),{selectedIndices:nt(l,"int32"),selectedScores:nt(f,"float32"),numValidOutputs:ae(x,"int32")}}function c1(e,n,t){var r=e.subarray(4*n,4*n+4),o=e.subarray(4*t,4*t+4),i=Math.min(r[0],r[2]),a=Math.min(r[1],r[3]),s=Math.max(r[0],r[2]),u=Math.max(r[1],r[3]),c=Math.min(o[0],o[2]),l=Math.min(o[1],o[3]),f=Math.max(o[0],o[2]),h=Math.max(o[1],o[3]),d=(s-i)*(u-a),p=(f-c)*(h-l);if(d<=0||p<=0)return 0;var v=Math.max(i,c),m=Math.max(a,l),g=Math.min(s,f),y=Math.min(u,h),x=Math.max(g-v,0)*Math.max(y-m,0);return x/(d+p-x)}function l1(e,n,t){var r=Math.exp(n*t*t);return t<=e?r:0}function Tf(e,n){return e.score-n.score||e.score===n.score&&n.boxIndex-e.boxIndex}function Fp(e,n,t){var r=new Array(e.rank).fill(0),o=e.shape.slice();return n.map((function(i){o[t]=i;var a=e.slice(r,o);return r[t]+=i,a}))}function Pp(e,n){for(var t=new Array(e.rank),r=0;r<t.length;r++)t[r]=e.shape[r]*n[r];var o=Te(t,e.dtype);for(r=0;r<o.values.length;++r){for(var i=o.indexToLoc(r),a=new Array(e.rank),s=0;s<a.length;s++)a[s]=i[s]%e.shape[s];var u=e.locToIndex(a);o.values[r]=e.values[u]}return o.toTensor()}function Mp(e,n,t,r,o){for(var i=n[n.length-1],a=[e.length/i,i],s=a[0],u=a[1],c=hi(t,s*r),l=hi("int32",s*r),f=0;f<s;f++){for(var h=f*u,d=e.subarray(h,h+u),p=[],v=0;v<d.length;v++)p.push({value:d[v],index:v});p.sort((function(b,w){return w.value-b.value}));var m=f*r,g=c.subarray(m,m+r),y=l.subarray(m,m+r);for(v=0;v<r;v++)g[v]=p[v].value,y[v]=p[v].index}var x=n.slice();return x[x.length-1]=r,[bt(c,x,t),bt(l,x,"int32")]}function Ac(e,n){for(var t=[],r=0;r<n.length;r++)n[r]&&t.push(r);var o=Te(e,"int32"),i=Te([t.length,e.length],"int32");for(r=0;r<t.length;r++){var a=o.indexToLoc(t[r]),s=r*e.length;i.values.set(a,s)}return i.toTensor()}var f1=function(e,n){this.outputShape=[],this.outputShape=e,this.variableNames=n.map((function(o,i){return"T"+i}));var t=[];this.variableNames.forEach((function(o){t.push("float v"+o+" = get"+o+"AtOutCoords();")}));var r=this.variableNames.map((function(o){return"v"+o})).join(" + ");this.userCode=`
      void main() {
        `+t.join(`
        `)+`

        float result = `+r+`;
        setOutput(result);
      }
    `},h1=function(e,n){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.variableNames=n.map((function(o,i){return"T"+i}));var t=[];this.variableNames.forEach((function(o){t.push("vec4 v"+o+" = get"+o+"AtOutCoords();")}));var r=this.variableNames.map((function(o){return"v"+o})).join(" + ");this.userCode=`
      void main() {
        `+t.join(`
        `)+`

        vec4 result = `+r+`;
        setOutput(result);
      }
    `},d1=function(e,n,t){this.variableNames=["A"];var r=e.windowSize,o=e.batchSize,i=e.inSize,a=Math.ceil(i/r);t||this.variableNames.push("bestIndicesA"),this.outputShape=[o,a];var s=n==="max"?">":"<",u=t?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+r+`;

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < `+r+`; i++) {
          int inIdx = `+u+`;
          float candidate = getA(batch, inIdx);
          if (candidate `+s+` bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `};function Op(e,n){return["x","y","z","w","u","v"].slice(0,n).map((function(t){return e+"."+t}))}function Mt(e,n){return n===1?[e]:Op(e,n)}function Et(){var e,n,t,r,o,i,a,s,u,c;return q().getNumber("WEBGL_VERSION")===2?(e="#version 300 es",n="in",t="out",r="in",o="texture",i="outputColor",a="out vec4 outputColor;",s=`
      bool isnan_custom(float val) {
        return (val > 0.0 || val < 0.0) ? false : val != 0.0;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `,u="",c=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(e="",n="attribute",t="varying",r="varying",o="texture2D",i="gl_FragColor",a="",s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,u=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,c=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:e,attribute:n,varyingVs:t,varyingFs:r,texture2D:o,output:i,defineOutput:a,defineSpecialNaN:s,defineSpecialInf:u,defineRound:c}}function Lr(e,n,t){t===void 0&&(t="index");var r=Tn(n);return r.map((function(o,i){return"int "+e[i]+" = "+t+" / "+o+"; "+(i===r.length-1?"int "+e[i+1]+" = "+t+" - "+e[i]+" * "+o:"index -= "+e[i]+" * "+o)+";"})).join("")}function kc(e){var n=Tn(e).map((function(t){return t.toString()}));return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * `+n[0]+" + coords.y * "+n[1]+` + coords.z;
  }
`}var Bp=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;function p1(e,n,t,r){var o=[];e.forEach((function(d){var p=be(d.shapeInfo.logicalShape);d.shapeInfo.isUniform?o.push("uniform float "+d.name+(p>1?"["+p+"]":"")+";"):(o.push("uniform sampler2D "+d.name+";"),o.push("uniform int offset"+d.name+";"))}));var i,a,s=o.join(`
`),u=e.map((function(d){return(function(p,v,m){m===void 0&&(m=!1);var g="";g+=m?Lp(p):co(p);var y=p.shapeInfo.logicalShape,x=v.logicalShape;return y.length<=x.length&&(g+=m?(function(b,w){var _,A=b.name,R=A.charAt(0).toUpperCase()+A.slice(1),E="get"+R+"AtOutCoords",S=b.shapeInfo.logicalShape.length,F=w.logicalShape.length,N=mr(b.shapeInfo.logicalShape,w.logicalShape),U=je(F),z=F-S,G=["x","y","z","w","u","v"];_=S===0?"":F<2&&N.length>=1?"coords = 0;":N.map((function(le){return"coords."+G[le+z]+" = 0;"})).join(`
`);var H="";H=F<2&&S>0?"coords":b.shapeInfo.logicalShape.map((function(le,de){return"coords."+G[de+z]})).join(", ");var O="return outputValue;",B=be(b.shapeInfo.logicalShape)===1,$=be(w.logicalShape)===1;if(S!==1||B||$){if(B&&!$)O=F===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(N.length){var J=S-2,oe=S-1;N.indexOf(J)>-1&&N.indexOf(oe)>-1?O="return vec4(outputValue.x);":N.indexOf(J)>-1?O="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":N.indexOf(oe)>-1&&(O="return vec4(outputValue.xx, outputValue.zz);")}}else O=`
      return vec4(outputValue.xy, outputValue.xy);
    `;return`
    vec4 `+E+`() {
      `+U+` coords = getOutputCoords();
      `+_+`
      vec4 outputValue = get`+R+"("+H+`);
      `+O+`
    }
  `})(p,v):(function(b,w){var _=b.name,A=_.charAt(0).toUpperCase()+_.slice(1),R="get"+A+"AtOutCoords",E=w.texShape,S=b.shapeInfo.texShape,F=b.shapeInfo.logicalShape.length,N=w.logicalShape.length;if(!b.shapeInfo.isUniform&&F===N&&b.shapeInfo.flatOffset==null&&pt(S,E))return`
      float `+R+`() {
        return sampleTexture(`+_+`, resultUV);
      }
    `;var U,z=je(N),G=mr(b.shapeInfo.logicalShape,w.logicalShape),H=N-F,O=["x","y","z","w","u","v"];U=F===0?"":N<2&&G.length>=1?"coords = 0;":G.map((function($){return"coords."+O[$+H]+" = 0;"})).join(`
`);var B="";return B=N<2&&F>0?"coords":b.shapeInfo.logicalShape.map((function($,J){return"coords."+O[J+H]})).join(", "),`
    float `+R+`() {
      `+z+` coords = getOutputCoords();
      `+U+`
      return get`+A+"("+B+`);
    }
  `})(p,v)),g})(d,n,r)})).join(`
`),c=n.texShape,l=Et(),f=(function(d){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return `+d.texture2D+`(textureSampler, uv).r;
    }
  `})(l),h=(function(d){return d.version+`
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    `+d.varyingFs+` vec2 resultUV;
    `+d.defineOutput+`
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    `+d.defineSpecialNaN+`
    `+d.defineSpecialInf+`
    `+d.defineRound+`

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    `+v1+`
    `+m1+`
    `+g1+`
  `})(l);return n.isPacked?(i=(function(d,p){switch(d.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return(function(b,w){var _=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];return _[0]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * `+_[1]+`.0);
      }
    `:_[1]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * `+_[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+_[0]+", "+_[1]+`));
      return 2 * (resTexRC.x * `+_[1]+` + resTexRC.y);
    }
  `})(0,p);case 2:return(function(b,w){var _=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];if(pt(b,w))return`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(`+_[0]+", "+_[1]+`));
      }
    `;var A=Math.ceil(b[1]/2);return`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+_[0]+", "+_[1]+`));

      int index = resTexRC.x * `+_[1]+` + resTexRC.y;
      int r = 2 * (index / `+A+`);
      int c = imod(index, `+A+`) * 2;

      return ivec2(r, c);
    }
  `})(d,p);case 3:return v=d,m=p,g=[Math.ceil(m[0]/2),Math.ceil(m[1]/2)],y=Math.ceil(v[2]/2),x=y*Math.ceil(v[1]/2),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+g[0]+", "+g[1]+`));
      int index = resTexRC.x * `+g[1]+` + resTexRC.y;

      int b = index / `+x+`;
      index -= b * `+x+`;

      int r = 2 * (index / `+y+`);
      int c = imod(index, `+y+`) * 2;

      return ivec3(b, r, c);
    }
  `;default:return(function(b,w){for(var _=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)],A=Math.ceil(b[b.length-1]/2),R=A*Math.ceil(b[b.length-2]/2),E=R,S="",F="b, r, c",N=2;N<b.length-1;N++)E*=b[b.length-N-1],S=`
      int b`+N+" = index / "+E+`;
      index -= b`+N+" * "+E+`;
    `+S,F="b"+N+", "+F;return`
    ivec`+b.length+` getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+_[0]+", "+_[1]+`));
      int index = resTexRC.x * `+_[1]+` + resTexRC.y;

      `+S+`

      int b = index / `+R+`;
      index -= b * `+R+`;

      int r = 2 * (index / `+A+`);
      int c = imod(index, `+A+`) * 2;

      return ivec`+b.length+"("+F+`);
    }
  `})(d,p)}var v,m,g,y,x})(n.logicalShape,c),a=(function(d){return`
    void setOutput(vec4 val) {
      `+d.output+` = val;
    }
  `})(l)):(i=(function(d,p){switch(d.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return(function(g,y){return y[0]===1?`
      int getOutputCoords() {
        return int(resultUV.x * `+y[1]+`.0);
      }
    `:y[1]===1?`
      int getOutputCoords() {
        return int(resultUV.y * `+y[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+y[0]+", "+y[1]+`));
      return resTexRC.x * `+y[1]+` + resTexRC.y;
    }
  `})(0,p);case 2:return(function(g,y){return pt(g,y)?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(`+y[0]+", "+y[1]+`));
      }
    `:g[1]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+y[0]+", "+y[1]+`));
        int index = resTexRC.x * `+y[1]+` + resTexRC.y;
        return ivec2(index, 0);
      }
    `:g[0]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+y[0]+", "+y[1]+`));
        int index = resTexRC.x * `+y[1]+` + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+y[0]+", "+y[1]+`));
      int index = resTexRC.x * `+y[1]+` + resTexRC.y;
      int r = index / `+g[1]+`;
      int c = index - r * `+g[1]+`;
      return ivec2(r, c);
    }
  `})(d,p);case 3:return v=p,m=Lr(["r","c","d"],d),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+v[0]+", "+v[1]+`));
      int index = resTexRC.x * `+v[1]+` + resTexRC.y;
      `+m+`
      return ivec3(r, c, d);
    }
  `;case 4:return(function(g,y){var x=Lr(["r","c","d","d2"],g);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+y[0]+", "+y[1]+`));
      int index = resTexRC.x * `+y[1]+` + resTexRC.y;
      `+x+`
      return ivec4(r, c, d, d2);
    }
  `})(d,p);case 5:return(function(g,y){var x=Lr(["r","c","d","d2","d3"],g);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(`+y[0]+`,
                             `+y[1]+`));

      int index = resTexRC.x * `+y[1]+` + resTexRC.y;

      `+x+`

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `})(d,p);case 6:return(function(g,y){var x=Lr(["r","c","d","d2","d3","d4"],g);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+y[0]+", "+y[1]+`));
      int index = resTexRC.x * `+y[1]+` + resTexRC.y;

      `+x+`

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `})(d,p);default:throw new Error(d.length+"-D output sampling is not yet supported")}var v,m})(n.logicalShape,c),a=(function(d){return`
    void setOutput(float val) {
      `+d.output+` = vec4(val, 0, 0, 0);
    }
  `})(l)),r&&(h+=y1),[h,f,a,s,i,u,t].join(`
`)}function co(e){var n=e.shapeInfo.logicalShape;switch(n.length){case 0:return(function(t){var r=t.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1);if(t.shapeInfo.isUniform)return"float "+o+"() {return "+r+";}";var i=t.shapeInfo.texShape,a=i[0],s=i[1];if(a===1&&s===1)return`
      float `+o+`() {
        return sampleTexture(`+r+`, halfCR);
      }
    `;var u=t.shapeInfo.texShape,c=u[0],l=u[1],f=Tr(r);return`
    float `+o+`() {
      vec2 uv = uvFromFlat(`+c+", "+l+", "+f+`);
      return sampleTexture(`+r+`, uv);
    }
  `})(e);case 1:return(function(t){var r=t.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1);if(t.shapeInfo.isUniform)return`
      float `+o+`(int index) {
        `+ro(t)+`
      }
    `;var i=t.shapeInfo.texShape,a=i[0],s=i[1];if(s===1&&a===1)return`
      float `+o+`(int index) {
        return sampleTexture(`+r+`, halfCR);
      }
    `;var u=Tr(r);return s===1?`
      float `+o+`(int index) {
        vec2 uv = vec2(0.5, (float(index + `+u+") + 0.5) / "+a+`.0);
        return sampleTexture(`+r+`, uv);
      }
    `:a===1?`
      float `+o+`(int index) {
        vec2 uv = vec2((float(index + `+u+") + 0.5) / "+s+`.0, 0.5);
        return sampleTexture(`+r+`, uv);
      }
    `:`
    float `+o+`(int index) {
      vec2 uv = uvFromFlat(`+a+", "+s+", index + "+u+`);
      return sampleTexture(`+r+`, uv);
    }
  `})(e);case 2:return(function(t){var r=t.shapeInfo.logicalShape,o=t.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=t.shapeInfo.texShape;if(a!=null&&pt(r,a)){var s=a[0],u=a[1];return`
    float `+i+`(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(`+u+".0, "+s+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `}var c=Mr(r),l=c.newShape,f=c.keptDims,h=l;if(h.length<r.length){var d=lo(t,h);return`
      `+co(d)+`
      float `+i+`(int row, int col) {
        return `+i+"("+fo(["row","col"],f)+`);
      }
    `}if(t.shapeInfo.isUniform)return`
      float `+i+`(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(`+r[1]+`, 1)));
        `+ro(t)+`
      }
    `;var p=a[0],v=a[1],m=Tr(o);return v===1?`
    float `+i+`(int row, int col) {
      float index = dot(vec3(row, col, `+m+"), vec3("+r[1]+`, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / `+p+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `:p===1?`
    float `+i+`(int row, int col) {
      float index = dot(vec3(row, col, `+m+"), vec3("+r[1]+`, 1, 1));
      vec2 uv = vec2((index + 0.5) / `+v+`.0, 0.5);
      return sampleTexture(`+o+`, uv);
    }
  `:`
  float `+i+`(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * `+r[1]+" + col + "+m+`;
    vec2 uv = uvFromFlat(`+p+", "+v+`, index);
    return sampleTexture(`+o+`, uv);
  }
`})(e);case 3:return(function(t){var r=t.shapeInfo.logicalShape,o=t.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=r[1]*r[2],s=r[2],u=Mr(r),c=u.newShape,l=u.keptDims,f=c;if(f.length<r.length){var h=lo(t,f);return`
        `+co(h)+`
        float `+i+`(int row, int col, int depth) {
          return `+i+"("+fo(["row","col","depth"],l)+`);
        }
      `}if(t.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(`+a+", "+s+`, 1)));
        `+ro(t)+`
      }
    `;var d=t.shapeInfo.texShape,p=d[0],v=d[1],m=t.shapeInfo.flatOffset;if(v===a&&m==null)return`
        float `+i+`(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(`+s+`, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(`+v+".0, "+p+`.0);
          return sampleTexture(`+o+`, uv);
        }
      `;if(v===s&&m==null)return`
    float `+i+`(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(`+r[1]+`, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+v+".0, "+p+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `;var g=Tr(o);return`
      float `+i+`(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * `+a+" + col * "+s+" + depth + "+g+`;
        vec2 uv = uvFromFlat(`+p+", "+v+`, index);
        return sampleTexture(`+o+`, uv);
      }
  `})(e);case 4:return(function(t){var r=t.shapeInfo.logicalShape,o=t.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=r[3],s=r[2]*a,u=r[1]*s,c=Mr(r),l=c.newShape,f=c.keptDims;if(l.length<r.length){var h=lo(t,l);return`
      `+co(h)+`
      float `+i+`(int row, int col, int depth, int depth2) {
        return `+i+"("+fo(["row","col","depth","depth2"],f)+`);
      }
    `}if(t.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(`+u+", "+s+", "+a+`, 1)));
        `+ro(t)+`
      }
    `;var d=t.shapeInfo.flatOffset,p=t.shapeInfo.texShape,v=p[0],m=p[1];if(m===u&&d==null)return`
      float `+i+`(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(`+s+", "+a+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+m+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(m===a&&d==null)return`
      float `+i+`(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(`+r[1]*r[2]+", "+r[2]+`, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+m+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var g=Tr(o);return`
    float `+i+`(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+u+" + col * "+s+` +
          depth * `+a+` + depth2;
      vec2 uv = uvFromFlat(`+v+", "+m+", index + "+g+`);
      return sampleTexture(`+o+`, uv);
    }
  `})(e);case 5:return(function(t){var r=t.shapeInfo.logicalShape,o=t.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=r[4],s=r[3]*a,u=r[2]*s,c=r[1]*u,l=Mr(r),f=l.newShape,h=l.keptDims;if(f.length<r.length){var d=lo(t,f);return`
      `+co(d)+`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        return `+i+"("+fo(["row","col","depth","depth2","depth3"],h)+`);
      }
    `}if(t.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(`+c+", "+u+", "+s+", "+a+`)) +
          depth3;
        `+ro(t)+`
      }
    `;var p=t.shapeInfo.flatOffset,v=t.shapeInfo.texShape,m=v[0],g=v[1];if(g===c&&p==null)return`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(`+u+", "+s+", "+a+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+g+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(g===a&&p==null)return`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(`+r[1]*r[2]*r[3]+`,
               `+r[2]*r[3]+", "+r[3]+`, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+g+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var y=Tr(o);return`
    float `+i+`(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+c+" + col * "+u+" + depth * "+s+` +
          depth2 * `+a+" + depth3 + "+y+`;
      vec2 uv = uvFromFlat(`+m+", "+g+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `})(e);case 6:return(function(t){var r=t.shapeInfo.logicalShape,o=t.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=Mr(r),s=a.newShape,u=a.keptDims;if(s.length<r.length){var c=lo(t,s);return`
      `+co(c)+`
      float `+i+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return `+i+"("+fo(["row","col","depth","depth2","depth3","depth4"],u)+`);
      }
    `}var l=r[5],f=r[4]*l,h=r[3]*f,d=r[2]*h,p=r[1]*d;if(t.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(`+p+", "+d+", "+h+", "+f+`)) +
          dot(
            vec2(depth3, depth4),
            vec2(`+l+`, 1)));
        `+ro(t)+`
      }
    `;var v=t.shapeInfo.flatOffset,m=t.shapeInfo.texShape,g=m[0],y=m[1];if(y===p&&v==null)return`
      float `+i+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(`+d+", "+h+", "+f+", "+l+`)) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+y+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(y===l&&v==null)return`
      float `+i+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(`+r[1]*r[2]*r[3]*r[4]+`,
               `+r[2]*r[3]*r[4]+`,
               `+r[3]*r[4]+`,
               `+r[4]+`)) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+y+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var x=Tr(o);return`
    float `+i+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+p+" + col * "+d+" + depth * "+h+` +
          depth2 * `+f+" + depth3 * "+l+" + depth4 + "+x+`;
      vec2 uv = uvFromFlat(`+g+", "+y+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `})(e);default:throw new Error(n.length+"-D input sampling is not yet supported")}}function Lp(e){var n,t,r;switch(e.shapeInfo.logicalShape.length){case 0:return n=e.name,t="get"+n.charAt(0).toUpperCase()+n.slice(1),r=Et(),`
    vec4 `+t+`() {
      return `+r.texture2D+"("+n+`, halfCR);
    }
  `;case 1:return(function(o){var i=o.name,a="get"+i.charAt(0).toUpperCase()+i.slice(1),s=o.shapeInfo.texShape,u=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],c=Et();return`
    vec4 `+a+`(int index) {
      vec2 uv = packedUVfrom1D(
        `+u[0]+", "+u[1]+`, index);
      return `+c.texture2D+"("+i+`, uv);
    }
  `})(e);case 2:return(function(o){var i=o.shapeInfo.logicalShape,a=o.name,s="get"+a.charAt(0).toUpperCase()+a.slice(1),u=o.shapeInfo.texShape,c=u[0],l=u[1],f=Et();if(u!=null&&pt(i,u))return`
      vec4 `+s+`(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(`+l+".0, "+c+`.0);

        return `+f.texture2D+"("+a+`, uv);
      }
    `;var h=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)],d=Math.ceil(i[1]/2);return`
    vec4 `+s+`(int row, int col) {
      vec2 uv = packedUVfrom2D(`+d+", "+h[0]+", "+h[1]+`, row, col);
      return `+f.texture2D+"("+a+`, uv);
    }
  `})(e);case 3:return(function(o){var i=o.shapeInfo.logicalShape,a=o.name,s="get"+a.charAt(0).toUpperCase()+a.slice(1),u=o.shapeInfo.texShape,c=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)];if(i[0]===1){var l=i.slice(1),f=lo(o,l);return`
        `+Lp(f)+`
        vec4 `+s+`(int b, int row, int col) {
          return `+s+"("+fo(["b","row","col"],[1,2])+`);
        }
      `}var h=c[0],d=c[1],p=Math.ceil(i[2]/2),v=p*Math.ceil(i[1]/2),m=Et();return`
    vec4 `+s+`(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        `+h+", "+d+", "+v+", "+p+`, b, row, col);
      return `+m.texture2D+"("+a+`, uv);
    }
  `})(e);default:return(function(o){for(var i=o.shapeInfo.logicalShape,a=i.length,s=o.name,u="get"+s.charAt(0).toUpperCase()+s.slice(1),c=o.shapeInfo.texShape,l=[Math.ceil(c[0]/2),Math.ceil(c[1]/2)],f=l[0],h=l[1],d=Math.ceil(i[a-1]/2),p=d*Math.ceil(i[a-2]/2),v="int b, int row, int col",m="b * "+p+" + (row / 2) * "+d+" + (col / 2)",g=2;g<a-1;g++)v="int b"+g+", "+v,p*=i[a-g-1],m="b"+g+" * "+p+" + "+m;var y=Et();return`
    vec4 `+u+"("+v+`) {
      int index = `+m+`;
      int texR = index / `+h+`;
      int texC = index - texR * `+h+`;
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+h+", "+f+`);
      return `+y.texture2D+"("+s+`, uv);
    }
  `})(e)}}var v1=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,m1=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,g1=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,y1=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function Tr(e){return"offset"+e}function ro(e){var n=e.name,t=be(e.shapeInfo.logicalShape);return t<2?"return "+n+";":`
    for (int i = 0; i < `+t+`; i++) {
      if (i == index) {
        return `+n+`[i];
      }
    }
  `}function je(e){if(e<=1)return"int";if(e===2)return"ivec2";if(e===3)return"ivec3";if(e===4)return"ivec4";if(e===5)return"ivec5";if(e===6)return"ivec6";throw Error("GPU for rank "+e+" is not yet supported")}function lo(e,n){var t=JSON.parse(JSON.stringify(e));return t.shapeInfo.logicalShape=n,t}function fo(e,n){return n.map((function(t){return e[t]})).join(", ")}var b1=function(e,n,t,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,I(e.length>2,(function(){return"Packed arg"+(t.charAt(0).toUpperCase()+t.slice(1))+" supports only inputs with rank above 2."}));var o=e[e.length-1],i=Math.ceil(o/n);this.outputShape=e.slice(0,-1),i>1&&this.outputShape.push(i),r||this.variableNames.push("bestIndicesA");var a,s,u=this.outputShape,c=u.length,l=je(c),f=Mt("coords",c);if(i===1){var h=je(s=c+1);a=`
        `+h+" sourceLocR = "+h+"("+f.join()+`, 0);
        ++`+f[c-1]+`;
        `+h+" sourceLocG = "+h+"("+f.join()+`, 0);
        ++`+f[c-2]+`;
        `+h+" sourceLocA = "+h+"("+f.join()+`, 0);
        --`+f[c-1]+`;
        `+h+" sourceLocB = "+h+"("+f.join()+`, 0);
        --`+f[c-2]+";"}else s=c,a=`
        `+l+` sourceLocR = coords;
        ++`+f[c-1]+`;
        `+l+` sourceLocG = coords;
        ++`+f[c-2]+`;
        `+l+` sourceLocA = coords;
        --`+f[c-1]+`;
        `+l+` sourceLocB = coords;
        --`+f[c-2]+";";var d=["x","y","z","w","u","v"].slice(0,s),p="."+d[s-1],v=d.map((function(R){return"int "+R})),m=Mt("sourceLocR",s-1).concat("inIdx.r"),g=Mt("sourceLocG",s-1).concat("inIdx.g"),y=Mt("sourceLocB",s-1).concat("inIdx.b"),x=Mt("sourceLocA",s-1).concat("inIdx.a"),b=t==="max"?"greaterThan":"lessThan",w=r?"":`
          inIdx = round(vec4(getBestIndicesAChannel(`+m.join()+`),
                             getBestIndicesAChannel(`+g.join()+`),
                             getBestIndicesAChannel(`+y.join()+`),
                             getBestIndicesAChannel(`+x.join()+")));",_=`vec4(
            getAChannel(`+m.join()+`),
            hasNextCol ? getAChannel(`+g.join()+`) : 0.,
            hasNextRow ? getAChannel(`+y.join()+`) : 0.,
            hasNextRow && hasNextCol ? getAChannel(`+x.join()+") : 0.)",A=r?"":`
      float getBestIndicesAChannel(`+v.join()+`) {
        return getChannel(getBestIndicesA(`+d.join()+`),
                                          vec2(`+d.slice(-2).join()+`));
      }`;this.userCode=`
      float getAChannel(`+v.join()+`) {
        return getChannel(getA(`+d.join()+`),
                               vec2(`+d.slice(-2).join()+`));
      }
      `+A+`
      void main() {
        `+l+` coords = getOutputCoords();
        bool hasNextCol = `+f[c-1]+" < "+(u[c-1]-1)+`;
        bool hasNextRow = `+f[c-2]+" < "+(u[c-2]-1)+`;
        `+a+`
        ivec4 srcIdx = ivec4(sourceLocR`+p+", sourceLocG"+p+`,
          sourceLocB`+p+", sourceLocA"+p+") * "+n+`;
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = `+_+`;

        for (int i = 0; i < `+n+`; i++) {
          inIdx = srcIdx;
          `+w+`
          vec4 candidate = `+_+`;
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(`+b+`(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `},x1=function(e){this.variableNames=["dy"],this.outputShape=e.inShape;var n=e.filterHeight,t=e.filterWidth,r=e.strideHeight,o=e.strideWidth,i=e.dilationHeight,a=e.dilationWidth,s=e.effectiveFilterHeight,u=e.effectiveFilterWidth,c=s-1-e.padInfo.top,l=u-1-e.padInfo.left,f=1/(n*t);this.userCode=`
      const ivec2 pads = ivec2(`+c+", "+l+`);
      const float avgMultiplier = float(`+f+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+s+`;
            wR += `+i+`) {
          float dyR = float(dyRCorner + wR) / `+r+`.0;

          if (dyR < 0.0 || dyR >= `+e.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+u+`;
            wC+= `+a+`) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+e.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `},w1=function(e){this.variableNames=["dy"],this.outputShape=e.inShape;var n=e.filterDepth,t=e.filterHeight,r=e.filterWidth,o=e.strideDepth,i=e.strideHeight,a=e.strideWidth,s=e.dilationDepth,u=e.dilationHeight,c=e.dilationWidth,l=e.effectiveFilterDepth,f=e.effectiveFilterHeight,h=e.effectiveFilterWidth,d=l-1-e.padInfo.front,p=f-1-e.padInfo.top,v=h-1-e.padInfo.left,m=1/(n*t*r);this.userCode=`
      const ivec3 pads = ivec3(`+d+", "+p+", "+v+`);
      const float avgMultiplier = float(`+m+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          float dyD = float(dyDCorner + wD) / `+o+`.0;

          if (dyD < 0.0 || dyD >= `+e.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+f+`;
              wR += `+u+`) {
            float dyR = float(dyRCorner + wR) / `+i+`.0;

            if (dyR < 0.0 || dyR >= `+e.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+h+`;
                wC += `+c+`) {
              float dyC = float(dyCCorner + wC) / `+a+`.0;

              if (dyC < 0.0 || dyC >= `+e.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `},_1=function(e,n,t,r,o,i){this.outputShape=[],this.variableNames=["x","mean","variance"],Oe(e,n),Oe(e,t);var a="0.0";r!=null&&(Oe(e,r),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");var s="1.0";o!=null&&(Oe(e,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = `+a+`;
        float scale = `+s+`;
        float inv = scale * inversesqrt(variance + float(`+i+`));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `},C1=function(e,n,t,r,o,i){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],Oe(e,n),Oe(e,t);var a="vec4(0.0)";r!=null&&(Oe(e,r),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");var s="vec4(1.0)";o!=null&&(Oe(e,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        vec4 offset = `+a+`;
        vec4 scale = `+s+`;

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(`+i+`));

        setOutput((x - mean) * inv + offset);
      }
    `},E1="return areal * breal - aimag * bimag;",R1="return areal * bimag + aimag * breal;",Nf=function(e,n,t){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=Oe(n,t),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        `+e+`
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `},Gs="return a + b;",Hs="return a - b;",Ff="return a * b;",Wp="return (a < 0.) ? b * a : a;",Ze=function(e,n,t){this.variableNames=["A","B"],this.outputShape=Oe(n,t),this.userCode=`
      float binaryOperation(float a, float b) {
        `+e+`
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `},Vp=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,Gn=function(e,n,t,r){r===void 0&&(r=!1),this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=Oe(n,t);var o=this.outputShape.length,i="";if(r)if(o===0||be(this.outputShape)===1)i=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(i=`
          `+je(o)+` coords = getOutputCoords();
        `,o===1)i+=`
            result.y = (coords + 1) >= `+this.outputShape[0]+` ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{var a=Mt("coords",o);i+=`
            bool nextRowOutOfBounds =
              (`+a[o-2]+" + 1) >= "+this.outputShape[o-2]+`;
            bool nextColOutOfBounds =
              (`+a[o-1]+" + 1) >= "+this.outputShape[o-1]+`;
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        `+e+`
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        `+i+`

        setOutput(result);
      }
    `},S1=(function(){function e(n){this.variableNames=["A"],this.outputShape=n,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}return e.prototype.getCustomSetupFunc=function(n,t){var r=this;return function(o,i){r.minLoc==null&&(r.minLoc=o.getUniformLocationNoThrow(i,"minVal"),r.maxLoc=o.getUniformLocationNoThrow(i,"maxVal")),o.gl.uniform1f(r.minLoc,n),o.gl.uniform1f(r.maxLoc,t)}},e})(),I1=(function(){function e(n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}return e.prototype.getCustomSetupFunc=function(n,t){var r=this;return function(o,i){r.minLoc==null&&(r.minLoc=o.getUniformLocationNoThrow(i,"minVal"),r.maxLoc=o.getUniformLocationNoThrow(i,"maxVal")),o.gl.uniform1f(r.minLoc,n),o.gl.uniform1f(r.maxLoc,t)}},e})(),A1=function(e){this.variableNames=["real","imag"],this.outputShape=e,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `},k1=function(e){this.outputShape=[],this.outputShape=Mo(e,1),this.variableNames=e.map((function(s,u){return"T"+u}));var n=new Array(e.length-1);n[0]=e[0][1];for(var t=1;t<n.length;t++)n[t]=n[t-1]+e[t][1];var r=["if (yC < "+n[0]+") setOutput(getT0(yR, yC));"];for(t=1;t<n.length;t++){var o=n[t-1];r.push("else if (yC < "+n[t]+") setOutput(getT"+t+"(yR, yC-"+o+"));")}var i=n.length,a=n[n.length-1];r.push("else setOutput(getT"+i+"(yR, yC-"+a+"));"),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        `+r.join(`
        `)+`
      }
    `},D1=function(e,n){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=Mo(e,n);var t=this.outputShape,r=t.length,o=je(r),i=Mt("coords",r),a=["x","y","z","w","u","v"].slice(0,r);this.variableNames=e.map((function(m,g){return"T"+g}));var s=new Array(e.length-1);s[0]=e[0][n];for(var u=1;u<s.length;u++)s[u]=s[u-1]+e[u][n];var c=a[n],l=a.slice(-2),f=a.join(),h="if ("+c+" < "+s[0]+`) {
        return getChannel(
            getT0(`+f+"), vec2("+l.join()+`));
        }`;for(u=1;u<s.length;u++){var d=s[u-1];h+=`
        if (`+c+" < "+s[u]+"  && "+c+" >= "+s[u-1]+`) {
          return getChannel(
            getT`+u+"("+zi(a,c,d)+`),
            vec2(`+zi(l,c,d)+`));
        }`}var p=s.length,v=s[s.length-1];h+=`
        return getChannel(
          getT`+p+"("+zi(a,c,v)+`),
          vec2(`+zi(l,c,v)+"));",this.userCode=`
      float getValue(`+a.map((function(m){return"int "+m}))+`) {
        `+h+`
      }

      void main() {
        `+o+` coords = getOutputCoords();
        vec4 result = vec4(getValue(`+i+`), 0., 0., 0.);

        `+i[r-1]+" = "+i[r-1]+` + 1;
        if (`+i[r-1]+" < "+t[r-1]+`) {
          result.g = getValue(`+i+`);
        }

        `+i[r-2]+" = "+i[r-2]+` + 1;
        if (`+i[r-2]+" < "+t[r-2]+`) {
          result.a = getValue(`+i+`);
        }

        `+i[r-1]+" = "+i[r-1]+` - 1;
        if (`+i[r-2]+" < "+t[r-2]+` &&
            `+i[r-1]+" < "+t[r-1]+`) {
          result.b = getValue(`+i+`);
        }
        setOutput(result);
      }
    `};function zi(e,n,t){var r=e.indexOf(n);return e.map((function(o,i){return i===r?o+" - "+t:o})).join()}var T1=function(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;var n=e.strideHeight,t=e.strideWidth,r=e.padInfo.top,o=e.padInfo.left,i=e.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < `+e.batchSize+`; b++) {
          for (int yR = 0; yR < `+e.outHeight+`; yR++) {
            int xR = wR + yR * `+n+" - "+r+`;

            if (xR < 0 || xR >= `+e.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+e.outWidth+`; yC++) {
              int xC = wC + yC * `+t+" - "+o+`;

              if (xC < 0 || xC >= `+e.inWidth+`) {
                continue;
              }

              if (`+i+`) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},N1=function(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;var n=e.filterHeight,t=e.filterWidth,r=e.strideHeight,o=e.strideWidth,i=e.dataFormat==="channelsLast",a=n-1-e.padInfo.top,s=t-1-e.padInfo.left,u=i?1:2,c=i?2:3,l=i?3:1;this.userCode=`
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[`+l+`];

        ivec2 dyCorner = ivec2(coords[`+u+"], coords["+c+`]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+n+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+r+`.0;

          if (dyR < 0.0 || dyR >= `+e.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+n+` - 1 - wR;

          for (int wC = 0; wC < `+t+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+e.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+t+` - 1 - wC;

            for (int d2 = 0; d2 < `+e.outChannels+`; d2++) {

              if (`+i+`) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},F1=function(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;var n=e.strideDepth,t=e.strideHeight,r=e.strideWidth,o=e.padInfo.front,i=e.padInfo.top,a=e.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < `+e.batchSize+`; b++) {
          for (int yF = 0; yF < `+e.outDepth+`; yF++) {
            int xF = wF + yF * `+n+" - "+o+`;

            if (xF < 0 || xF >= `+e.inDepth+`) {
              continue;
            }

            for (int yR = 0; yR < `+e.outHeight+`; yR++) {
              int xR = wR + yR * `+t+" - "+i+`;

              if (xR < 0 || xR >= `+e.inHeight+`) {
                continue;
              }

              for (int yC = 0; yC < `+e.outWidth+`; yC++) {
                int xC = wC + yC * `+r+" - "+a+`;

                if (xC < 0 || xC >= `+e.inWidth+`) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},P1=function(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;var n=e.filterDepth,t=e.filterHeight,r=e.filterWidth,o=e.strideDepth,i=e.strideHeight,a=e.strideWidth,s=n-1-e.padInfo.front,u=t-1-e.padInfo.top,c=r-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(`+s+", "+u+", "+c+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < `+n+`; wF++) {
          float dyF = float(dyFCorner + wF) / `+o+`.0;

          if (dyF < 0.0 || dyF >= `+e.outDepth+`.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = `+n+` - 1 - wF;

          for (int wR = 0; wR < `+t+`; wR++) {
            float dyR = float(dyRCorner + wR) / `+i+`.0;

            if (dyR < 0.0 || dyR >= `+e.outHeight+`.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = `+t+` - 1 - wR;

            for (int wC = 0; wC < `+r+`; wC++) {
              float dyC = float(dyCCorner + wC) / `+a+`.0;

              if (dyC < 0.0 || dyC >= `+e.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = `+r+` - 1 - wC;

              for (int d2 = 0; d2 < `+e.outChannels+`; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},M1=function(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;var n=e.strideHeight,t=e.strideWidth,r=e.padInfo.top,o=e.padInfo.left,i=e.outChannels/e.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * `+i+` + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < `+e.batchSize+`; b++) {
          for (int yR = 0; yR < `+e.outHeight+`; yR++) {
            int xR = wR + yR * `+n+" - "+r+`;

            if (xR < 0 || xR >= `+e.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+e.outWidth+`; yC++) {
              int xC = wC + yC * `+t+" - "+o+`;

              if (xC < 0 || xC >= `+e.inWidth+`) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `},O1=function(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;var n=e.filterHeight,t=e.filterWidth,r=e.strideHeight,o=e.strideWidth,i=n-1-e.padInfo.top,a=t-1-e.padInfo.left,s=e.outChannels/e.inChannels;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+a+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < `+n+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+r+`.0;

          if (dyR < 0.0 || dyR >= `+e.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+n+` - 1 - wR;

          for (int wC = 0; wC < `+t+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+e.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+t+` - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < `+s+`; dm++) {
              int d2 = d1 * `+s+` + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `},Pf=function(e,n,t,r){n===void 0&&(n=!1),t===void 0&&(t=null),r===void 0&&(r=!1),this.variableNames=["x","W"],this.outputShape=e.outShape;var o=e.padInfo.top,i=e.padInfo.left,a=e.strideHeight,s=e.strideWidth,u=e.dilationHeight,c=e.dilationWidth,l=e.filterHeight,f=e.filterWidth,h=4*Math.floor(e.inChannels/4),d=e.inChannels%4,p=e.dataFormat==="channelsLast",v=p?1:2,m=p?2:3,g=p?3:1,y="",x="";t&&(y=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+t+`
        }`:`
          float activation(float x) {
            `+t+`
          }
        `,x="result = activation(result);");var b=n?"result += getBiasAtOutCoords();":"";n&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+y+`

      const ivec2 strides = ivec2(`+a+", "+s+`);
      const ivec2 pads = ivec2(`+o+", "+i+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[`+g+`];

        ivec2 xRCCorner =
            ivec2(coords[`+v+"], coords["+m+`]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+l+`; wR++) {
          int xR = xRCorner + wR * `+u+`;

          if (xR < 0 || xR >= `+e.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+f+`; wC++) {
            int xC = xCCorner + wC * `+c+`;

            if (xC < 0 || xC >= `+e.inWidth+`) {
              continue;
            }

            for (int d1 = 0; d1 < `+h+`; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (`+p+`) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (`+(d===1)+`) {

              if (`+p+`) {
                dotProd +=
                    getX(batch, xR, xC, `+h+`) *
                    getW(wR, wC, `+h+`, d2);
              } else {
                dotProd +=
                    getX(batch, `+h+`, xR, xC) *
                    getW(wR, wC, `+h+`, d2);
              }

            } else if (`+(d===2)+`) {
              vec2 wValues = vec2(
                getW(wR, wC, `+h+`, d2),
                getW(wR, wC, `+h+` + 1, d2)
              );

              if (`+p+`) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, `+h+`),
                  getX(batch, xR, xC, `+h+` + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, `+h+`, xR, xC),
                  getX(batch, `+h+` + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (`+(d===3)+`) {
              vec3 wValues = vec3(
                getW(wR, wC, `+h+`, d2),
                getW(wR, wC, `+h+` + 1, d2),
                getW(wR, wC, `+h+` + 2, d2)
              );

              if (`+p+`) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, `+h+`),
                  getX(batch, xR, xC, `+h+` + 1),
                  getX(batch, xR, xC, `+h+` + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, `+h+`, xR, xC),
                  getX(batch, `+h+` + 1, xR, xC),
                  getX(batch, `+h+` + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        `+b+`
        `+x+`
        setOutput(result);
      }
    `},B1=function(e){this.variableNames=["x","W"],this.outputShape=e.outShape;var n=e.padInfo.front,t=e.padInfo.top,r=e.padInfo.left,o=e.strideDepth,i=e.strideHeight,a=e.strideWidth,s=e.dilationDepth,u=e.dilationHeight,c=e.dilationWidth,l=e.filterDepth,f=e.filterHeight,h=e.filterWidth,d=4*Math.floor(e.inChannels/4),p=e.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(`+o+", "+i+", "+a+`);
      const ivec3 pads = ivec3(`+n+", "+t+", "+r+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < `+l+`; wF++) {
          int xF = xFCorner + wF * `+s+`;

          if (xF < 0 || xF >= `+e.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+f+`; wR++) {
            int xR = xRCorner + wR * `+u+`;

            if (xR < 0 || xR >= `+e.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+h+`; wC++) {
              int xC = xCCorner + wC * `+c+`;

              if (xC < 0 || xC >= `+e.inWidth+`) {
                continue;
              }

              for (int d1 = 0; d1 < `+d+`; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (`+(p===1)+`) {
                dotProd +=
                  getX(batch, xF, xR, xC, `+d+`) *
                  getW(wF, wR, wC, `+d+`, d2);
              } else if (`+(p===2)+`) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, `+d+`),
                  getX(batch, xF, xR, xC, `+d+` + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, `+d+`, d2),
                  getW(wF, wR, wC, `+d+` + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (`+(p===3)+`) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, `+d+`),
                  getX(batch, xF, xR, xC, `+d+` + 1),
                  getX(batch, xF, xR, xC, `+d+` + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, `+d+`, d2),
                  getW(wF, wR, wC, `+d+` + 1, d2),
                  getW(wF, wR, wC, `+d+` + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},Mf=function(e,n,t,r){n===void 0&&(n=!1),t===void 0&&(t=null),r===void 0&&(r=!1),this.variableNames=["x","W"],this.outputShape=e.outShape;var o=e.inHeight,i=e.inWidth,a=e.padInfo.top,s=e.padInfo.left,u=e.strideHeight,c=e.strideWidth,l=e.dilationHeight,f=e.dilationWidth,h=e.filterHeight,d=e.filterWidth,p=e.outChannels/e.inChannels,v="",m="";t&&(v=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+t+`
        }`:`
          float activation(float x) {
            `+t+`
          }
        `,m="result = activation(result);");var g=n?"result += getBiasAtOutCoords();":"";n&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+v+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / `+p+`;
        int q = d2 - d1 * `+p+`;

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < `+h+`; wR++) {
          int xR = xRCorner + wR * `+l+`;

          if (xR < 0 || xR >= `+o+`) {
            continue;
          }

          for (int wC = 0; wC < `+d+`; wC++) {
            int xC = xCCorner + wC * `+f+`;

            if (xC < 0 || xC >= `+i+`) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        `+g+`
        `+m+`
        setOutput(result);
      }
    `},Of=function(e,n,t,r){n===void 0&&(n=!1),t===void 0&&(t=null),r===void 0&&(r=!1),this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e.outShape;for(var o=e.inHeight,i=e.inWidth,a=e.padInfo.top,s=e.padInfo.left,u=e.strideHeight,c=e.strideWidth,l=e.dilationHeight,f=e.dilationWidth,h=e.filterHeight,d=e.filterWidth,p=d,v="int xR; int xC; int xCOffset;",m=0;m<h;m++)for(var g=0;g<d;g++)v+=`
          vec4 xTexelR`+m+"C"+2*g+` = vec4(0.);
          vec4 wR`+m+"C"+g+` = vec4(0.);
          vec4 xR`+m+"C"+g+" = vec4(0.);";for(m=0;m<h;m++)for(var y=0;y<p;y++){if(v+=`
          xR = xRCorner + `+m*l+`;
          xC = xCCorner + `+(g=2*y)*f+`;
        `,c===1){if(g<d&&(v+=s%2==1?`
                xCOffset = xC + 1;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+i+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+i+`) {
                    xTexelR`+m+"C"+g+`.zw = vec2(0.);
                  }
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + 1 - 2;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+i+`) {
                  vec4 previous = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+i+`) {
                    previous.zw = vec2(0.);
                  }

                  xR`+m+"C"+g+" = vec4(previous.zw, xTexelR"+m+"C"+g+`.xy);
                } else {
                  xR`+m+"C"+g+" = vec4(0, 0, xTexelR"+m+"C"+g+`.xy);
                }
              `:`
                if(xR >= 0 && xR < `+o+" && xC >= 0 && xC < "+i+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                xR`+m+"C"+g+" = xTexelR"+m+"C"+g+`;
              `,g+1<d)){var x=s%2==0?op(f):f;f%2==0&&s%2==1||f%2!=0&&s%2!=1?(v+=`
                  xCOffset = xC + `+s%2+" + "+x+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+i+`) {
                    xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }
                `,f>1&&(v+=`
                    xCOffset -= 2;
                    if(xR >= 0 && xR < `+o+` &&
                      xCOffset >= 0 && xCOffset < `+i+`) {
                      xTexelR`+m+"C"+g+` = getX(batch, xR, xCOffset, d1);
                    } else {
                      xTexelR`+m+"C"+g+` = vec4(0.);
                    }
                  `),v+=`
                  xR`+m+"C"+(g+1)+` = vec4(
                    xTexelR`+m+"C"+g+".zw, xTexelR"+m+"C"+(g+2)+`.xy);
                `):v+=`
                  xCOffset = xC + `+x+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+i+`) {
                    xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }

                  xR`+m+"C"+(g+1)+" = xTexelR"+m+"C"+(g+2)+`;
                `}}else g<d&&(v+=`
              if(xR >= 0 && xR < `+o+`) {
            `,s%2==1?(v+=`
                xCOffset = xC + 1 - `+c+`;
                if(xCOffset >= 0 && xCOffset < `+i+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                if(xC + 1 >= 0 && xC + 1 < `+i+`) {
                  xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xC + 1, d1);
                } else {
                  xTexelR`+m+"C"+(g+2)+` = vec4(0.);
                }

                xR`+m+"C"+g+` = vec4(
                  xTexelR`+m+"C"+g+".zw, xTexelR"+m+"C"+(g+2)+`.zw);
              `,g+1<d&&(v+=`
                  vec4 final = vec4(0.);
                  xCOffset = xC + 1 + `+c+`;
                  if(xCOffset >= 0 && xCOffset < `+i+`) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xR`+m+"C"+(g+1)+" = vec4(xTexelR"+m+"C"+(g+2)+`.xy, final.xy);
                `)):(v+=`
                if(xC >= 0 && xC < `+i+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + `+c+`;
                if(xCOffset >= 0 && xCOffset < `+i+`) {
                  xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+m+"C"+(g+2)+` = vec4(0.);
                }

                xR`+m+"C"+g+` = vec4(
                  xTexelR`+m+"C"+g+".xy, xTexelR"+m+"C"+(g+2)+`.xy);
              `,g+1<d&&(v+=`
                  xR`+m+"C"+(g+1)+` = vec4(
                    xTexelR`+m+"C"+g+".zw, xTexelR"+m+"C"+(g+2)+`.zw);
                `)),v+="}");g<d&&(v+=`
            vec4 wTexelR`+m+"C"+g+" = getW("+m+", "+g+`, d1, q);
            wR`+m+"C"+g+" = vec4(wTexelR"+m+"C"+g+".xz, wTexelR"+m+"C"+g+`.xz);
          `,g+1<d&&(v+=`
              vec4 wTexelR`+m+"C"+(g+1)+" = getW("+m+", "+(g+1)+`, d1, q);
              wR`+m+"C"+(g+1)+` =
                vec4(wTexelR`+m+"C"+(g+1)+".xz, wTexelR"+m+"C"+(g+1)+".xz);"))}for(m=0;m<h;m++)for(g=0;g<d;g++)v+="dotProd += xR"+m+"C"+g+" * wR"+m+"C"+g+";";var b="",w="";t&&(b=r?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+t+`
        }`:`vec4 activation(vec4 x) {
          `+t+`
        }`,w="result = activation(result);");var _=n?"result += getBiasAtOutCoords();":"";n&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+b+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {

        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2;
        int q = 0;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        vec4 dotProd = vec4(0.);

        `+v+`

        vec4 result = dotProd;
        `+_+`
        `+w+`
        setOutput(result);
      }
    `},L1=function(e,n,t,r,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];var i=e[0],a=e[1],s=e[2],u=e[3],c=n[0],l=t[0],f=t[1];this.outputShape=[c,l,f,u];var h=r==="bilinear"?1:0,d=[a-1+".0",s-1+".0"],p=d[0],v=d[1],m=l>1?[""+(a-1)/(l-1),"(y2-y1) * height_ratio","y1*"+p+" + float(y)*(height_scale)"]:["0.0","0.0","0.5 * (y1+y2) * "+p],g=m[0],y=m[1],x=m[2],b=f>1?[""+(s-1)/(f-1),"(x2-x1) * width_ratio","x1*"+v+" + float(x)*(width_scale)"]:["0.0","0.0","0.5 * (x1+x2) * "+v],w=b[0],_=b[1],A=b[2];this.userCode=`
      const float height_ratio = float(`+g+`);
      const float width_ratio = float(`+w+`);
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= `+i+`) {
          return;
        }

        float height_scale = `+y+`;
        float width_scale = `+_+`;

        float in_y = `+x+`;
        if( in_y < 0.0 || in_y > `+p+` ) {
          setOutput(float(`+o+`));
          return;
        }
        float in_x = `+A+`;
        if( in_x < 0.0 || in_x > `+v+` ) {
          setOutput(float(`+o+`));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(`+h+` == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `},W1=function(e,n,t){this.variableNames=["x"],this.outputShape=e;var r=e.length,o=e[e.length-1],i=t?"<":">";this.userCode=`
      int getIndex(int i) {
        `+(t?"return "+o+" -i - 1;":"return i;")+`
      }

      void main() {
        `+je(r)+` coords = getOutputCoords();
        int end = `+Bf(r,"coords")+`;
        float val = 0.0;
        for (int i = `+o+` - 1; i >= 0; i -= 1) {
          int idx = getIndex(i);
          if (idx `+i+` end) {
            continue;
          }
          if (idx == end && `+n+`) {
            continue;
          }
          `+Bf(r,"coords")+` = idx;
          val += getX(`+(function(a,s){if(a===1)return""+s;if(a===2)return s+".x, "+s+".y";if(a===3)return s+".x, "+s+".y, "+s+".z";if(a===4)return s+".x, "+s+".y, "+s+".z, "+s+".w";throw Error("Cumulative sum for rank "+a+" is not yet supported")})(r,"coords")+`);
        }
        setOutput(val);
      }
    `};function Bf(e,n){if(e===1)return""+n;if(e===2)return n+".y";if(e===3)return n+".z";if(e===4)return n+".w";throw Error("Cumulative sum for rank "+e+" is not yet supported")}var V1=function(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=pi.DENSE;var n=ti(e),t=Et();this.outputShape=e,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+Lr(["r","c","d"],e)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+n[0]+", "+n[1]+`));
        int index = 4 * (resTexRC.x * `+n[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        `+t.output+` = result;
      }
    `},U1=function(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=pi.DENSE;var n=ti(e),t=Et();this.outputShape=e,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+Lr(["r","c","d"],e)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+n[0]+", "+n[1]+`));
        int index = 4 * (resTexRC.x * `+n[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        `+t.output+` = result;
      }
    `},z1=(function(){function e(n,t,r){this.variableNames=["x"],this.outputShape=[],this.outputShape=n,this.blockSize=t,this.dataFormat=r,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = `+this.getHeightCoordString()+`;
      int w = `+this.getWidthCoordString()+`;
      int d = `+this.getDepthCoordString()+`;

      int in_h = h / `+t+`;
      int offset_h = imod(h, `+t+`);
      int in_w = w / `+t+`;
      int offset_w = imod(w, `+t+`);
      int offset_d = (offset_h * `+t+` + offset_w) *
        `+this.getOutputDepthSize()+`;
      int in_d = d + offset_d;

      float result = `+this.getInputSamplingString()+`;
      setOutput(result);
    }
  `}return e.prototype.getHeightCoordString=function(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"},e.prototype.getWidthCoordString=function(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"},e.prototype.getDepthCoordString=function(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"},e.prototype.getOutputDepthSize=function(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]},e.prototype.getInputSamplingString=function(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"},e})(),G1=function(e){this.variableNames=["X"],this.outputShape=[e,e],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `},H1=function(e){this.variableNames=["A"],this.outTexUsage=qt.DOWNLOAD;var n=Et();this.outputShape=e,this.userCode=`
      `+Bp+`

      void main() {
        float x = getAAtOutCoords();
        `+n.output+` = encode_float(x);
      }
    `},j1=function(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=qt.DOWNLOAD;var n=Et();this.outputShape=e,this.userCode=`
      `+Bp+`

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        `+n.output+` = encode_float(x);
      }
    `},q1=function(e,n,t){t===void 0&&(t=!1),this.variableNames=["A"];var r=Et(),o=n[0],i=n[1];this.outputShape=e;var a="result";t&&(a="floor(result * 255. + 0.5)"),this.userCode=`
      `+kc(e)+`

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);
        
        int r = flatIndex / `+i+`;
        int c = imod(flatIndex, `+i+`);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(`+i+".0, "+o+`.0);
        vec4 values = `+r.texture2D+`(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        `+r.output+" = vec4("+a+`, 0., 0., 0.);
      }
    `},K1=function(e,n,t){t===void 0&&(t=!1),this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var r=Et(),o=n[0],i=n[1];this.outputShape=e;var a="",s="result";t&&(s="floor(result * 255. + 0.5)");for(var u=0;u<=1;u++)for(var c=0;c<=1;c++){var l=2*u+c;a+=`
          localCoords = coords;
          if(localCoords[2] + `+c+" < "+e[2]+`) {
            localCoords[2] += `+c+`;
            if(localCoords[1] + `+u+" < "+e[1]+`) {
              localCoords[1] += `+u+`;

              flatIndex = getFlatIndex(localCoords);
              offset = imod(flatIndex, 4);

              flatIndex = idiv(flatIndex, 4, 1.);

              r = flatIndex / `+i+`;
              c = imod(flatIndex, `+i+`);
              uv = (vec2(c, r) + halfCR) / vec2(`+i+".0, "+o+`.0);
              values = `+r.texture2D+`(A, uv);

              if(offset == 0) {
                result[`+l+`] = values[0];
              } else if(offset == 1) {
                result[`+l+`] = values[1];
              } else if(offset == 2) {
                result[`+l+`] = values[2];
              } else {
                result[`+l+`] = values[3];
              }
            }
          }
        `}this.userCode=`
      `+kc(e)+`

      void main() {
        ivec3 coords = getOutputCoords();

        vec4 result = vec4(0.);
        int flatIndex, r, c, offset;
        ivec3 localCoords;
        vec2 uv;
        vec4 values;

        `+a+`

        `+r.output+" = "+s+`;
      }
    `},$1="return real * expR - imag * expI;",X1="return real * expI + imag * expR;",Lf=function(e,n,t){this.variableNames=["real","imag"];var r=n[1];this.outputShape=n;var o=t?"2.0 * "+Math.PI:"-2.0 * "+Math.PI,i=t?r+".0":"1.0";this.userCode=`
      const float exponentMultiplier = `+o+`;

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        `+e+`
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(`+r+`);
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < `+r+`; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / `+i+`;
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `},Y1=(function(){function e(n,t){this.outputShape=[],this.variableNames=["x"],this.outputShape=n,this.userCode=`
      uniform float value;
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}return e.prototype.getCustomSetupFunc=function(n){var t=this;return function(r,o){t.valueLoc==null&&(t.valueLoc=r.getUniformLocationNoThrow(o,"value")),r.gl.uniform1f(t.valueLoc,n)}},e})(),J1=function(e,n,t){this.variableNames=["A","indices"];var r=e.slice();r[t]=n,this.outputShape=r,this.rank=r.length;var o=je(this.rank),i=(function(a,s){var u=a.length;if(u>4)throw Error("Gather for rank "+u+" is not yet supported");if(u===1)return"int(getIndices(resRC))";for(var c=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],f=0;f<a.length;f++)f===s?l.push("int(getIndices("+c[f]+"))"):l.push(""+c[f]);return l.join()})(e,t);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+i+`));
      }
    `},Q1=function(e,n,t){this.sliceDim=e,this.strides=n,this.variableNames=["x","indices"],this.outputShape=t;var r=je(n.length),o=je(t.length),i=this.sliceDim>1?"strides[j]":"strides";this.userCode=`
        `+r+" strides = "+r+"("+this.strides+`);
         void main() {
          `+o+` coords = getOutputCoords();
          int flattenIndex = 0;
          for (int j = 0; j < `+this.sliceDim+`; j++) {
            int index = round(getIndices(coords[0], j));
            flattenIndex += index * `+i+`;
          }
          setOutput(getX(flattenIndex, coords[1]));
        }
      `};function Z1(e,n){var t=Et();return $b(e,n,t.version+`
    precision highp float;
    `+t.attribute+` vec3 clipSpacePos;
    `+t.attribute+` vec2 uv;
    `+t.varyingVs+` vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function ew(e,n){return Zb(e,n,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function tw(e,n){return ex(e,n,new Uint16Array([0,1,2,2,1,3]))}function Ii(e,n,t,r,o,i,a){nx(t,r);var s=tx(e,n),u=e.TEXTURE_2D;return xe(e,n,(function(){return e.bindTexture(u,s)})),xe(e,n,(function(){return e.texParameteri(u,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE)})),xe(e,n,(function(){return e.texParameteri(u,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)})),xe(e,n,(function(){return e.texParameteri(u,e.TEXTURE_MIN_FILTER,e.NEAREST)})),xe(e,n,(function(){return e.texParameteri(u,e.TEXTURE_MAG_FILTER,e.NEAREST)})),xe(e,n,(function(){return e.texImage2D(u,0,o,t,r,0,i,a,null)})),xe(e,n,(function(){return e.bindTexture(e.TEXTURE_2D,null)})),s}function nw(e,n,t,r,o){var i=Za(t,r);return Ii(e,n,i[0],i[1],o.internalFormatFloat,o.textureFormatFloat,e.FLOAT)}function rw(e,n,t,r,o){var i=Za(t,r);return Ii(e,n,i[0],i[1],o.internalFormatHalfFloat,o.textureFormatFloat,o.textureTypeHalfFloat)}function ow(e,n,t,r,o){var i=Za(t,r);return Ii(e,n,i[0],i[1],e.RGBA,e.RGBA,e.UNSIGNED_BYTE)}function iw(e,n,t,r,o){var i=Si(t,r);return Ii(e,n,i[0],i[1],o.internalFormatPackedFloat,e.RGBA,e.FLOAT)}function aw(e,n,t,r,o){var i=Si(t,r);return Ii(e,n,i[0],i[1],o.internalFormatPackedHalfFloat,e.RGBA,o.textureTypeHalfFloat)}function sw(e,n,t,r){return xe(e,n,(function(){return e.bindBuffer(e.ARRAY_BUFFER,r)})),Rf(e,n,t,"clipSpacePos",r,3,20,0)&&Rf(e,n,t,"uv",r,2,20,12)}function uw(e,n,t,r,o,i,a){var s,u,c;xe(e,n,(function(){return e.bindTexture(e.TEXTURE_2D,t)})),i instanceof Uint8Array?(s=new Uint8Array(r*o*4),u=e.UNSIGNED_BYTE,c=e.RGBA):(s=new Float32Array(r*o*4),u=e.FLOAT,c=a.internalFormatPackedFloat),s.set(i),xe(e,n,(function(){return e.texImage2D(e.TEXTURE_2D,0,c,r,o,0,e.RGBA,u,s)})),xe(e,n,(function(){return e.bindTexture(e.TEXTURE_2D,null)}))}function cw(e,n,t,r){xe(e,n,(function(){return e.bindTexture(e.TEXTURE_2D,t)})),r.data instanceof Uint8Array?xe(e,n,(function(){return e.texImage2D(e.TEXTURE_2D,0,e.RGBA,r.width,r.height,0,e.RGBA,e.UNSIGNED_BYTE,r.data)})):xe(e,n,(function(){return e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,r)})),xe(e,n,(function(){return e.bindTexture(e.TEXTURE_2D,null)}))}function lw(e,n,t,r,o){var i=e.createBuffer();xe(e,n,(function(){return e.bindBuffer(e.PIXEL_PACK_BUFFER,i)}));var a=16*t*r;return xe(e,n,(function(){return e.bufferData(e.PIXEL_PACK_BUFFER,a,e.STREAM_READ)})),xe(e,n,(function(){return e.readPixels(0,0,r,t,e.RGBA,e.FLOAT,0)})),xe(e,n,(function(){return e.bindBuffer(e.PIXEL_PACK_BUFFER,null)})),i}function fw(e,n,t){var r=e,o=new Float32Array(t);return r.bindBuffer(r.PIXEL_PACK_BUFFER,n),r.getBufferSubData(r.PIXEL_PACK_BUFFER,0,o),r.bindBuffer(r.PIXEL_PACK_BUFFER,null),o}function hw(e,n,t,r,o){var i=Za(t,r),a=i[0],s=i[1],u=new Uint8Array(t*r*4);return xe(e,n,(function(){return e.readPixels(0,0,a,s,o.downloadTextureFormat,e.UNSIGNED_BYTE,u)})),new Float32Array(u.buffer)}function dw(e,n,t,r,o,i,a,s){var u=e,c=new Float32Array((function(l,f){var h=Si(l,f);return h[0]*h[1]*4})(i,a));return u.bindBuffer(u.PIXEL_PACK_BUFFER,n),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,c),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),c}function pw(e,n,t,r){var o=new Float32Array(t*r*4);return xe(e,n,(function(){return e.readPixels(0,0,r,t,e.RGBA,e.FLOAT,o)})),o}var vw=(function(){function e(n){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];var t=q().getNumber("WEBGL_VERSION");n!=null?(this.gl=n,Gb(t,n)):this.gl=On(t);var r="WEBGL_color_buffer_float";if(q().getNumber("WEBGL_VERSION")===1){if(this.textureFloatExtension=Li(this.gl,this.debug,"OES_texture_float"),rn(this.gl,"OES_texture_half_float"))this.textureHalfFloatExtension=Li(this.gl,this.debug,"OES_texture_half_float");else if(q().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(r),rn(this.gl,"EXT_color_buffer_half_float"))this.colorBufferHalfFloatExtension=Li(this.gl,this.debug,"EXT_color_buffer_half_float");else if(q().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(r="EXT_color_buffer_float",rn(this.gl,r))this.colorBufferFloatExtension=this.gl.getExtension(r);else{if(!rn(this.gl,"EXT_color_buffer_half_float"))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension("EXT_color_buffer_half_float")}this.vertexBuffer=ew(this.gl,this.debug),this.indexBuffer=tw(this.gl,this.debug),this.framebuffer=rx(this.gl,this.debug),this.textureConfig=bc(this.gl,this.textureHalfFloatExtension)}return Object.defineProperty(e.prototype,"debug",{get:function(){return q().getBool("DEBUG")},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){var n=this;if(!this.disposed){this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");var t=this.gl;xe(t,this.debug,(function(){return t.finish()})),xe(t,this.debug,(function(){return t.bindFramebuffer(t.FRAMEBUFFER,null)})),xe(t,this.debug,(function(){return t.deleteFramebuffer(n.framebuffer)})),xe(t,this.debug,(function(){return t.bindBuffer(t.ARRAY_BUFFER,null)})),xe(t,this.debug,(function(){return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null)})),xe(t,this.debug,(function(){return t.deleteBuffer(n.indexBuffer)})),this.disposed=!0}},e.prototype.createFloat32MatrixTexture=function(n,t){return this.throwIfDisposed(),nw(this.gl,this.debug,n,t,this.textureConfig)},e.prototype.createFloat16MatrixTexture=function(n,t){return this.throwIfDisposed(),rw(this.gl,this.debug,n,t,this.textureConfig)},e.prototype.createUnsignedBytesMatrixTexture=function(n,t){return this.throwIfDisposed(),ow(this.gl,this.debug,n,t,this.textureConfig)},e.prototype.uploadPixelDataToTexture=function(n,t){this.throwIfDisposed(),cw(this.gl,this.debug,n,t)},e.prototype.uploadDenseMatrixToTexture=function(n,t,r,o){this.throwIfDisposed(),uw(this.gl,this.debug,n,t,r,o,this.textureConfig)},e.prototype.createFloat16PackedMatrixTexture=function(n,t){return this.throwIfDisposed(),aw(this.gl,this.debug,n,t,this.textureConfig)},e.prototype.createPackedMatrixTexture=function(n,t){return this.throwIfDisposed(),iw(this.gl,this.debug,n,t,this.textureConfig)},e.prototype.deleteMatrixTexture=function(n){var t=this;this.throwIfDisposed(),this.outputTexture===n&&(Sf(this.gl,this.debug,this.framebuffer),this.outputTexture=null),xe(this.gl,this.debug,(function(){return t.gl.deleteTexture(n)}))},e.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(n,t,r){var o=this;return this.downloadMatrixDriver(n,(function(){return hw(o.gl,o.debug,t,r,o.textureConfig)}))},e.prototype.downloadPackedMatrixFromBuffer=function(n,t,r,o,i,a){return dw(this.gl,n,0,0,0,i,a,this.textureConfig)},e.prototype.downloadFloat32MatrixFromBuffer=function(n,t){return fw(this.gl,n,t)},e.prototype.createBufferFromTexture=function(n,t,r){this.bindTextureToFrameBuffer(n);var o=lw(this.gl,this.debug,t,r,this.textureConfig);return this.unbindTextureToFrameBuffer(),o},e.prototype.createAndWaitForFence=function(){var n=this.createFence(this.gl);return this.pollFence(n)},e.prototype.createFence=function(n){var t,r,o=this;if(q().getBool("WEBGL_FENCE_API_ENABLED")){var i=n,a=i.fenceSync(i.SYNC_GPU_COMMANDS_COMPLETE,0);n.flush(),r=function(){var s=i.clientWaitSync(a,0,0);return s===i.ALREADY_SIGNALED||s===i.CONDITION_SATISFIED},t=a}else q().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(t=this.beginQuery(),this.endQuery(),r=function(){return o.isQueryAvailable(t,q().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}):r=function(){return!0};return{query:t,isFencePassed:r}},e.prototype.downloadMatrixFromPackedTexture=function(n,t,r){var o=this;return this.downloadMatrixDriver(n,(function(){return pw(o.gl,o.debug,t,r)}))},e.prototype.createProgram=function(n){this.throwIfDisposed();var t=this.gl,r=Xb(t,this.debug,n),o=Z1(t,this.debug),i=Jb(t,this.debug);return xe(t,this.debug,(function(){return t.attachShader(i,o)})),xe(t,this.debug,(function(){return t.attachShader(i,r)})),Qb(t,this.debug,i),this.debug&&Ws(t,this.debug,i),this.vertexAttrsAreBound||(this.setProgram(i),this.vertexAttrsAreBound=sw(t,this.debug,this.program,this.vertexBuffer)),i},e.prototype.deleteProgram=function(n){var t=this;this.throwIfDisposed(),n===this.program&&(this.program=null),n!=null&&xe(this.gl,this.debug,(function(){return t.gl.deleteProgram(n)}))},e.prototype.setProgram=function(n){var t=this;this.throwIfDisposed(),this.program=n,this.program!=null&&this.debug&&Ws(this.gl,this.debug,this.program),xe(this.gl,this.debug,(function(){return t.gl.useProgram(n)}))},e.prototype.getUniformLocation=function(n,t,r){return r===void 0&&(r=!0),this.throwIfDisposed(),r?ix(this.gl,this.debug,n,t):ax(this.gl,n,t)},e.prototype.getAttributeLocation=function(n,t){var r=this;return this.throwIfDisposed(),xe(this.gl,this.debug,(function(){return r.gl.getAttribLocation(n,t)}))},e.prototype.getUniformLocationNoThrow=function(n,t){return this.throwIfDisposed(),this.gl.getUniformLocation(n,t)},e.prototype.setInputMatrixTexture=function(n,t,r){this.throwIfDisposed(),this.throwIfNoProgram(),sx(this.gl,this.debug,this.program,n,t,r)},e.prototype.setOutputMatrixTexture=function(n,t,r){this.setOutputMatrixTextureDriver(n,r,t)},e.prototype.setOutputPackedMatrixTexture=function(n,t,r){this.throwIfDisposed();var o=Si(t,r),i=o[0],a=o[1];this.setOutputMatrixTextureDriver(n,i,a)},e.prototype.setOutputMatrixWriteRegion=function(n,t,r,o){this.setOutputMatrixWriteRegionDriver(r,n,o,t)},e.prototype.setOutputPackedMatrixWriteRegion=function(n,t,r,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")},e.prototype.debugValidate=function(){this.program!=null&&Ws(this.gl,this.debug,this.program),Wi(this.gl)},e.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var n=this.gl;this.debug&&this.debugValidate(),xe(n,this.debug,(function(){return n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0)}))},e.prototype.blockUntilAllProgramsCompleted=function(){var n=this;this.throwIfDisposed(),xe(this.gl,this.debug,(function(){return n.gl.finish()}))},e.prototype.getQueryTimerExtension=function(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=Li(this.gl,this.debug,q().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension},e.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},e.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},e.prototype.beginQuery=function(){if(q().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){var n=this.gl,t=this.getQueryTimerExtensionWebGL2(),r=n.createQuery();return n.beginQuery(t.TIME_ELAPSED_EXT,r),r}var o=this.getQueryTimerExtensionWebGL1(),i=o.createQueryEXT();return o.beginQueryEXT(o.TIME_ELAPSED_EXT,i),i},e.prototype.endQuery=function(){if(q().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")!==2){var n=this.getQueryTimerExtensionWebGL1();n.endQueryEXT(n.TIME_ELAPSED_EXT)}else{var t=this.gl,r=this.getQueryTimerExtensionWebGL2();t.endQuery(r.TIME_ELAPSED_EXT)}},e.prototype.waitForQueryAndGetTime=function(n){return pe(this,void 0,void 0,(function(){var t=this;return ve(this,(function(r){switch(r.label){case 0:return[4,bf((function(){return t.disposed||t.isQueryAvailable(n,q().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}))];case 1:return r.sent(),[2,this.getQueryTime(n,q().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]}}))}))},e.prototype.getQueryTime=function(n,t){if(t===0)return null;if(t===2){var r=this.gl;return r.getQueryParameter(n,r.QUERY_RESULT)/1e6}var o=this.getQueryTimerExtensionWebGL1();return o.getQueryObjectEXT(n,o.QUERY_RESULT_EXT)/1e6},e.prototype.isQueryAvailable=function(n,t){if(t===0)return!0;if(t===2){var r=this.gl,o=this.getQueryTimerExtensionWebGL2(),i=r.getQueryParameter(n,r.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),i&&!this.disjoint}return i=(o=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(n,o.QUERY_RESULT_AVAILABLE_EXT),this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),i&&!this.disjoint},e.prototype.pollFence=function(n){var t=this;return new Promise((function(r){t.addItemToPoll((function(){return n.isFencePassed()}),(function(){return r()}))}))},e.prototype.pollItems=function(){for(var n=(function(r){for(var o=0;o<r.length&&r[o]();++o);return o-1})(this.itemsToPoll.map((function(r){return r.isDoneFn}))),t=0;t<=n;++t)(0,this.itemsToPoll[t].resolveFn)();this.itemsToPoll=this.itemsToPoll.slice(n+1)},e.prototype.addItemToPoll=function(n,t){var r=this;this.itemsToPoll.push({isDoneFn:n,resolveFn:t}),this.itemsToPoll.length>1||bf((function(){return r.pollItems(),r.itemsToPoll.length===0}))},e.prototype.bindTextureToFrameBuffer=function(n){this.throwIfDisposed(),Vs(this.gl,this.debug,n,this.framebuffer),this.debug&&Wi(this.gl)},e.prototype.unbindTextureToFrameBuffer=function(){this.outputTexture!=null?(Vs(this.gl,this.debug,this.outputTexture,this.framebuffer),this.debug&&Wi(this.gl)):Sf(this.gl,this.debug,this.framebuffer)},e.prototype.downloadMatrixDriver=function(n,t){this.bindTextureToFrameBuffer(n);var r=t();return this.unbindTextureToFrameBuffer(),r},e.prototype.setOutputMatrixTextureDriver=function(n,t,r){this.throwIfDisposed();var o=this.gl;Vs(o,this.debug,n,this.framebuffer),this.debug&&Wi(o),this.outputTexture=n,xe(o,this.debug,(function(){return o.viewport(0,0,t,r)})),xe(o,this.debug,(function(){return o.scissor(0,0,t,r)}))},e.prototype.setOutputMatrixWriteRegionDriver=function(n,t,r,o){var i=this;this.throwIfDisposed(),xe(this.gl,this.debug,(function(){return i.gl.scissor(n,t,r,o)}))},e.prototype.throwIfDisposed=function(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")},e.prototype.throwIfNoProgram=function(){if(this.program==null)throw new Error("No GPU program is currently set.")},e})();function Wf(e,n){if(e.length!==n.length)throw Error("Binary was compiled with "+e.length+" inputs, but was executed with "+n.length+" inputs");e.forEach((function(t,r){var o=t.logicalShape,i=n[r],a=i.shape;if(!pt(o,a))throw Error("Binary was compiled with different shapes than the current args. Shapes "+o+" and "+a+" must match");if(!t.isUniform||!i.isUniform){var s=t.texShape,u=i.isUniform?null:i.texData.texShape;if(!pt(s,u))throw Error("Binary was compiled with different texture shapes than the current args. Shape "+s+" and "+u+" must match")}}))}var mw=function(e,n,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e;for(var r=t.filterWidth,o=t.inChannels,i=t.strideWidth,a=t.strideHeight,s=t.padInfo,u=t.outWidth,c=t.dilationWidth,l=t.dilationHeight,f=t.dataFormat,h=s.left,d=s.top,p=o*r,v=Et(),m=f==="channelsLast",g=m?0:1,y=m?1:2,x="",b=0;b<=1;b++)for(var w=0;w<=1;w++)x+=`
          blockIndex = rc.y + `+w+`;
          pos = rc.x + `+b+`;

          if(blockIndex < `+e[1]+" && pos < "+e[0]+`) {
            offsetY = int(blockIndex / (`+u+")) * "+a+" - "+d+`;
            d0 = offsetY + `+l+" * (pos / "+p+`);

            if(d0 < `+n[g]+` && d0 >= 0) {

              offsetX = int(mod(float(blockIndex), `+u+".) * "+i+". - "+h+`.);
              d1 = offsetX + `+c+" * (int(mod(float(pos), "+p+".) / "+o+`.));

              if(d1 < `+n[y]+` && d1 >= 0) {

                ch = int(mod(float(pos), `+o+`.));

                if (`+m+`) {
                  innerDims = vec2(d1, ch);
                  result[`+(2*b+w)+`] = getChannel(
                    getA(d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[`+(2*b+w)+`] = getChannel(
                    getA(ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec2 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        `+x+`

        `+v.output+` = result;
      }
    `},gw=function(e,n,t,r,o){this.variableNames=["x"],this.outputShape=[];var i,a=n,s=e[3]-1;this.outputShape=e;var u="float("+t+") + float("+r+") * sum";i=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -`+a+"; j <= "+a+`; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  `+s+`) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * `+i+`;
        setOutput(val);
      }
    `},yw=function(e,n,t,r,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=e,this.depth=e[3],this.depthRadius=n,this.bias=t,this.alpha=r,this.beta=o,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < `+this.depth+`; ++d) {
          int depthBegin = int(max(0.0, float(d - `+n+`)));
          int depthEnd = int(min(float(`+this.depth+`),
              float(d + `+n+` + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = `+this.depth+`;

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(`+r+") * norm + float("+t+`);

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(`+r+`)
                * float(`+o+`)
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * `+o+`);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `},bw=function(e,n,t,r,o){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;var i,a=n,s=e[3]-1;this.outputShape=e;var u="float("+t+") + float("+r+") * sum";i=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < `+this.outputShape[3]+`;
        bool hasNextRow = c < `+this.outputShape[2]+`;

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - `+a+`;
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - `+a+"; j <= "+a+`; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(`+s+`));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * `+i+`;
        setOutput(result);
      }
    `},xw=function(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;var n=e.strideHeight,t=e.strideWidth,r=e.dilationHeight,o=e.effectiveFilterHeight,i=e.effectiveFilterWidth,a=o-1-e.padInfo.top,s=i-1-e.padInfo.left,u=o*i-1;this.userCode=`
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+o+`;
          wR += `+r+`) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+e.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+i+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+t+`.0;

            if (dyC < 0.0 || dyC >= `+e.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = `+u+` - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * `+i+` + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `},ww=function(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;var n=e.strideDepth,t=e.strideHeight,r=e.strideWidth,o=e.dilationDepth,i=e.dilationHeight,a=e.dilationWidth,s=e.effectiveFilterDepth,u=e.effectiveFilterHeight,c=e.effectiveFilterWidth,l=s-1-e.padInfo.front,f=u-1-e.padInfo.top,h=c-1-e.padInfo.left,d=s*u*c-1;this.userCode=`
      const ivec3 pads = ivec3(`+l+", "+f+", "+h+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+s+`;
           wD += `+o+`) {
          float dyD = float(dyDCorner + wD) / `+n+`.0;

          if (dyD < 0.0 || dyD >= `+e.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+u+`;
              wR += `+i+`) {
            float dyR = float(dyRCorner + wR) / `+t+`.0;

            if (dyR < 0.0 || dyR >= `+e.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+c+`;
                wC += `+a+`) {
              float dyC = float(dyCCorner + wC) / `+r+`.0;

              if (dyC < 0.0 || dyC >= `+e.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = `+d+` -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * `+u+" * "+c+` +
                  wR * `+c+` + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `},js=function(e,n,t,r,o,i,a){t===void 0&&(t=!1),r===void 0&&(r=!1),o===void 0&&(o=!1),i===void 0&&(i=null),a===void 0&&(a=!1),this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n;var s=t?e[1]:e[2],u=Math.ceil(s/2),c=t?"i * 2, rc.y":"rc.y, i * 2",l=r?"rc.z, i * 2":"i * 2, rc.z",f=t?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],h=r?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],d="",p="";i&&(d=a?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+i+`
        }`:`vec4 activation(vec4 x) {
          `+i+`
        }`,p="result = activation(result);");var v=o?"result += getBiasAtOutCoords();":"";o&&this.variableNames.push("bias"),a&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+d+`

      const float sharedDimension = `+u+`.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < `+u+`; i++) {
          vec4 a = getMatrixA(rc.x, `+c+`);
          vec4 b = getMatrixB(rc.x, `+l+`);

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (`+f[0]+" * "+h[0]+`);
          result += (`+f[1]+" * "+h[1]+`);
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        `+v+`

        `+p+`

        setOutput(result);
      }
    `},_w=(function(){function e(n,t,r){this.variableNames=["probs"],this.outputShape=[n,r],this.userCode=`
      uniform float seed;

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < `+(t-1)+`; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(`+(t-1)+`));
      }
    `}return e.prototype.getCustomSetupFunc=function(n){var t=this;return function(r,o){t.seedLoc==null&&(t.seedLoc=r.getUniformLocation(o,"seed")),r.gl.uniform1f(t.seedLoc,n)}},e})(),Cw=function(e,n,t,r){this.variableNames=["indices"],this.outputShape=[e,n],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(`+r+"), float("+t+`),
                      float(index == coords.y)));
      }
    `},Ew=function(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=e;var n=e.length;if(n===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{var t=Mt("rc",n),r=je(n),o=(function(s,u,c){if(s===1)return"rc > "+u[0];for(var l="",f=s-2;f<s;f++)l+=c[f]+" >= "+u[f],f<s-1&&(l+="||");return l})(n,e,t),i=(function(s,u,c,l){if(s===1)return"";var f=l.slice(-2);return`
    int r = `+f[0]+`;
    int c = `+f[1]+`;
    int rp1 = r + 1;
    int cp1 = c + 1;

    bool cEdge = cp1 >= `+u+`;
    bool rEdge = rp1 >= `+c+`;
  `})(n,e[e.length-1],e[e.length-2],t),a=(function(s,u){var c=s.length,l=(function(f,h){for(var d=[],p=0;p<=1;p++)for(var v=0;v<=1;v++){for(var m=(p===0?"r":"rp1")+", "+(v===0?"c":"cp1"),g=2;g<f;g++)m=h[h.length-1-g]+","+m;d.push(m)}return d})(c,u);return c===1?`getA(rc),
            rc + 1 >= `+s[0]+` ? 0. : getA(rc + 1),
            0, 0`:"getA("+l[0]+`),
          cEdge ? 0. : getA(`+l[1]+`),
          rEdge ? 0. : getA(`+l[2]+`),
          rEdge || cEdge ? 0. : getA(`+l[3]+")"})(e,t);this.userCode=`
        void main() {
          `+r+` rc = getOutputCoords();

          if(`+o+`) {
            setOutput(vec4(0));
          } else {
            `+i+`

            setOutput(vec4(`+a+`));
          }
        }
      `}},Rw=function(e,n,t){this.variableNames=["x"],this.outputShape=n.map((function(u,c){return u[0]+e[c]+u[1]}));var r=e.length,o=je(r),i=n.map((function(u){return u[0]})).join(","),a=n.map((function(u,c){return u[0]+e[c]})).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r);this.userCode=r!==1?`
      `+o+" start = "+o+"("+i+`);
      `+o+" end = "+o+"("+a+`);

      void main() {
        `+o+` outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(float(`+t+`));
        } else {
          `+o+` coords = outC - start;
          setOutput(getX(`+s+`));
        }
      }
    `:`
        int start = `+i+`;
        int end = `+a+`;

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(float(`+t+`));
          } else {
            setOutput(getX(outC - start));
          }
        }
      `},Sw=function(e,n,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n.map((function(m,g){return m[0]+e[g]+m[1]}));for(var r=e.length,o=je(r),i=n.map((function(m){return m[0]})).join(","),a=n.map((function(m,g){return m[0]+e[g]})).join(","),s=Mt("rc",r),u=Mt("source",r),c=s[r-1]+" < "+this.outputShape[r-1],l=r===1?"source":"vec2("+u.slice(-2).join()+")",f=[o+" rc = outputLoc;",s[r-1]+` += 1;
       if(`+c+`) {
      `,r===1?"":`}
       rc = outputLoc;
       `+s[r-2]+` += 1;
       if(`+s[r-2]+" < "+this.outputShape[r-2]+") {",r===1?"":"  "+s[r-1]+` += 1;
         if(`+c+") {"],h=r===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",d="",p=0,v=r===1?2:4;p<v;p++)d+=`
        `+f[p]+`
        if (`+h+`) {
          result[`+p+"] = float("+t+`);
        } else {
          `+o+` source = rc - start;
          result[`+p+"] = getChannel(getX("+u.join()+"), "+l+`);
        }
      `;d+=r===1?"} ":"}}",this.userCode=`
      const `+o+" start = "+o+"("+i+`);
      const `+o+" end = "+o+"("+a+`);

      void main() {
        `+o+` outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        `+d+`
        setOutput(result);
      }
    `},qs=function(e,n,t){if(this.variableNames=["x"],n==="avg"&&t)throw new Error("Cannot compute positions for average pool.");var r=e.filterWidth,o=e.strideHeight,i=e.strideWidth,a=e.dilationHeight,s=e.dilationWidth,u=e.effectiveFilterHeight,c=e.effectiveFilterWidth,l=e.padInfo.top,f=e.padInfo.left;this.outputShape=e.outShape;var h=n==="avg",d="0.0";if(h||(d="-1.0 / 1e-20"),t)this.userCode=`
        const ivec2 strides = ivec2(`+o+", "+i+`);
        const ivec2 pads = ivec2(`+l+", "+f+`);

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < `+u+`;
              wR += `+a+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+e.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+c+`;
                wC += `+s+`) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= `+e.inWidth+`) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = wR * `+c+` + wC;
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var p=n+"("+n+"("+n+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";n==="avg"&&(p="avgValue / count");var v=4*Math.floor(r/4),m=r%4,g=`
      if (`+h+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(`+o+", "+i+`);
      const ivec2 pads = ivec2(`+l+", "+f+`);
      const float initializationValue = `+d+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= `+e.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+d+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < `+u+`;
            wR += `+a+`) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= `+e.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+v+`; wC += 4) {
            int xC = xCCorner + wC * `+s+`;

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              getValue(batch, xR, xC + 3 * `+s+`, d)
            );

            `+g+`
          }

          int xC = xCCorner + `+v+`;
          if (`+(m===1)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(m===2)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(m===3)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              initializationValue
            );

            `+g+`
          }
        }
        setOutput(`+p+`);
      }
    `}},Ks=function(e,n,t){if(this.variableNames=["x"],n==="avg"&&t)throw new Error("Cannot compute positions for average pool.");var r=e.filterWidth,o=e.strideDepth,i=e.strideHeight,a=e.strideWidth,s=e.dilationDepth,u=e.dilationHeight,c=e.dilationWidth,l=e.effectiveFilterDepth,f=e.effectiveFilterHeight,h=e.effectiveFilterWidth,d=e.padInfo.front,p=e.padInfo.top,v=e.padInfo.left;this.outputShape=e.outShape;var m=n==="avg",g="0.0";if(m||(g="-1.0 / 1e-20"),t)this.userCode=`
        const ivec3 strides =
            ivec3(`+o+", "+i+", "+a+`);
        const ivec3 pads = ivec3(`+d+", "+p+", "+v+`);

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < `+l+`;
              wD += `+s+`) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= `+e.inDepth+`) {
              continue;
            }

            for (int wR = 0; wR < `+f+`;
                wR += `+u+`) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= `+e.inHeight+`) {
                continue;
              }

              for (int wC = 0; wC < `+h+`;
                  wC += `+c+`) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= `+e.inWidth+`) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition =
                      wD * `+f+" * "+h+` +
                      wR * `+h+` + wC;;
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var y=n+"("+n+"("+n+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";n==="avg"&&(y="avgValue / count");var x=4*Math.floor(r/4),b=r%4,w=`
      if (`+m+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(`+o+", "+i+", "+a+`);
      const ivec3 pads = ivec3(`+d+", "+p+", "+v+`);
      const float initializationValue = `+g+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= `+e.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+g+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= `+e.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+f+`;
            wR += `+u+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+e.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+x+`; wC += 4) {
              int xC = xCCorner + wC * `+c+`;

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                getValue(batch, xD, xR, xC + 3 * `+c+`, ch)
              );

              `+w+`
            }

            int xC = xCCorner + `+x+`;
            if (`+(b===1)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(b===2)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(b===3)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                initializationValue
              );

              `+w+`
            }
          }
          setOutput(`+y+`);
        }
      }
    `}},Iw=function(e,n){this.variableNames=["x"];var t=e.windowSize,r=e.batchSize,o=e.inSize,i=Math.ceil(o/t);this.outputShape=[r,i];var a="0.0",s="";n==="prod"?a="1.0":n==="min"?(a="1.0 / 1e-20",s="min"):n==="max"&&(a="-1.0 / 1e-20",s="max");var u=n+"("+n+"("+n+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";n==="sum"?u="sumValue":n==="prod"?u="prodValue":n==="all"?u="allValue":n==="any"&&(u="anyValue");var c=4*Math.floor(t/4),l=t%4,f=`
      if (`+(n==="sum")+`) {
        sumValue += dot(values, ones);
      } else if (`+(n==="prod")+`) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = `+s+`(values, minMaxValue);
      }
    `,h="vec4";n==="all"?(a="1.0",f=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,h="bvec4"):n==="any"&&(a="0.0",f=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,h="bvec4");var d="";o%t>0&&(d=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = `+a+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        `+d+`
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+t+`;

        vec4 minMaxValue = vec4(`+a+`);
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < `+c+`; i += 4) {
          int inIdx = inOffset + i;
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          `+f+`
        }

        int inIdx = inOffset + `+c+`;
        if (`+(l===1)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          `+f+`
        } else if (`+(l===2)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          `+f+`
        } else if (`+(l===3)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          `+f+`
        }
        setOutput(`+u+`);
      }
    `},Aw=function(e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e;for(var t="",r=0;r<4;r++){var o="thisRC = rc;";r%2==1&&(o+="thisRC.z += 1;"),r>1&&(o+="thisRC.y += 1;"),t+=`
        `+o+`
        `+(r>0?"if(thisRC.y < rows && thisRC.z < cols){":"")+`
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[`+r+`] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        `+(r>0?"}":"")+`
      `}this.userCode=`
      
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      `+Lr(["r","c","d"],n)+`
      return ivec3(r, c, d);
    }
  
      `+kc(e)+`

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = `+e[1]+`;
        int cols = `+e[2]+`;

        `+t+`

        setOutput(result);
      }
    `},kw=function(e,n,t){this.variableNames=["dy"],this.outputShape=[],this.outputShape=n.shape;var r=n.shape,o=r[1],i=r[2],a=e.shape,s=a[1],u=a[2],c=[t&&s>1?o-1:o,t&&u>1?i-1:i],l=[t&&s>1?s-1:s,t&&u>1?u-1:u],f=c[0]/l[0],h=c[1]/l[1],d=1/f,p=1/h,v=2*Math.ceil(d)+2,m=2*Math.ceil(p)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+f+`);
        const float widthScale = float(`+h+`);

        const float invHeightScale = float(`+d+`);
        const float invWidthScale = float(`+p+`);

        const int winHeight = int(`+v+`);
        const int winWidth = int(`+m+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), `+(o-1)+`.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), `+(i-1)+`.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},Dw=function(e,n,t,r){this.variableNames=["A"],this.outputShape=[];var o=e[0],i=e[1],a=e[2],s=e[3];this.outputShape=[o,n,t,s];var u=[r&&n>1?i-1:i,r&&t>1?a-1:a],c=[r&&n>1?n-1:n,r&&t>1?t-1:t];this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+i+".0, "+a+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `},Tw=function(e,n,t,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];var o=e[0],i=e[1],a=e[2],s=e[3];this.outputShape=[o,n,t,s];var u=[r&&n>1?i-1:i,r&&t>1?a-1:a],c=[r&&n>1?n-1:n,r&&t>1?t-1:t];this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`,
          `+u[1]/c[1]+`);
      const vec3 inputShapeRC = vec3(`+i+".0, "+a+`.0,
                                     `+a+`.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < `+(s-1)+`;
        bool hasNextRow = coords.z < `+(t-1)+`;

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `},Nw=function(e,n,t){this.variableNames=["dy"],this.outputShape=[],this.outputShape=n.shape;var r=n.shape,o=r[1],i=r[2],a=e.shape,s=a[1],u=a[2],c=[t&&s>1?o-1:o,t&&u>1?i-1:i],l=[t&&s>1?s-1:s,t&&u>1?u-1:u],f=c[0]/l[0],h=c[1]/l[1],d=1/f,p=1/h,v=2*Math.ceil(d)+2,m=2*Math.ceil(p)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+f+`);
        const float widthScale = float(`+h+`);

        const float invHeightScale = float(`+d+`);
        const float invWidthScale = float(`+p+`);

        const int winHeight = int(`+v+`);
        const int winWidth = int(`+m+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float sourceFracRow =
              float(`+c[0]+`) *
                (float(dyR) / float(`+l[0]+`));

            float sourceFracCol =
                float(`+c[1]+`) *
                  (float(dyC) / float(`+l[1]+`));

            int sourceNearestRow = int(min(
                float(int(`+o+`) - 1),
                `+t+` ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(`+i+`) - 1),
                `+t+` ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},Fw=function(e,n,t,r){this.variableNames=["A"],this.outputShape=[];var o=e[0],i=e[1],a=e[2],s=e[3];this.outputShape=[o,n,t,s];var u=[r&&n>1?i-1:i,r&&t>1?a-1:a],c=[r&&n>1?n-1:n,r&&t>1?t-1:t],l=r?"0.5":"0.0";this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+i+".0, "+a+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + `+l+`)));

        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `},Pw=function(e,n){this.variableNames=["x"];var t=e.length;if(t>4)throw new Error("WebGL backend: Reverse of rank-"+t+" tensor is not yet supported");if(this.outputShape=e,t!==1){var r=e.map((function(i,a){return(function(s){return n.indexOf(s)!==-1&&e[s]!==1?e[s]+" - coords["+s+"] - 1":"coords["+s+"]"})(a)})).join(","),o=je(t);this.userCode=`
      void main() {
        `+o+` coords = getOutputCoords();
        setOutput(getX(`+r+`));
      }
    `}else this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(`+e[0]+` - coord - 1));
        }
      `},Mw=function(e,n){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;var t=e.length;if(t>4)throw new Error("WebGL backend: Reverse of rank-"+t+" tensor is not yet supported");this.outputShape=e;var r=Mt("rc",t),o=r[t-1]+" + 1 < "+this.outputShape[t-1],i=r[t-2]+" + 1 < "+this.outputShape[t-2],a=je(t);function s(u){var c=e.map((function(l,f){return(function(h,d){return n.indexOf(h)!==-1&&e[h]!==1?e[h]+" - "+d[h]+" - 1":""+d[h]})(f,u)}));return"getChannel(getX("+c.join(",")+"), vec2("+c.slice(-2).join(",")+"))"}this.userCode=t===1?`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(`+e[0]+` - rc - 1),
            `+e[0]+` - rc - 1);
          if(`+o+`){
              result.g = getChannel(getX(`+e[0]+` - (rc  + 1) - 1),
                `+e[0]+` - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:`
        void main() {
          `+a+` rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = `+(function(u){return s(u)})(r.slice())+`;
          if(`+o+`){
            result.g = `+(function(u){return u[t-1]="("+u[t-1]+" + 1)",s(u)})(r.slice())+`;
          }
          if(`+i+`) {
            result.b = `+(function(u){return u[t-2]="("+u[t-2]+" + 1)",s(u)})(r.slice())+`;
            if(`+o+`) {
              result.a = `+(function(u){return u[t-1]="("+u[t-1]+" + 1)",u[t-2]="("+u[t-2]+" + 1)",s(u)})(r.slice())+`;
            }
          }
          setOutput(result);
        }
    `},Vf=function(e,n,t,r,o,i,a){this.variableNames=["updates","indices","defaultValue"],this.outputShape=i;var s=je(o.length),u=je(i.length),c="";t===1?c="i":t===2&&(c="i, j");var l="getIndices("+c+")",f="";r===1?f="i":r===2&&(f="i, coords[1]");var h="getUpdates("+f+")",d=n>1?"strides[j]":"strides";this.userCode=`
        `+s+" strides = "+s+"("+o+`);

        void main() {
          `+u+` coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < `+e+`; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < `+n+`; j++) {
              int index = round(`+l+`);
              flattenedIndex += index * `+d+`;
            }
            if (flattenedIndex == coords[0]) {
              sum += `+h+`;
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `},Ow=function(e,n){this.variableNames=["x","segmentIds"];var t=e.windowSize,r=e.batchSize,o=e.inSize,i=e.numSegments,a=i*Math.ceil(o/t);this.outputShape=[r,a];var s=4*Math.floor(t/4),u=t%4,c=`
        sumValue += dot(values, segFilter);
    `,l="";o%t>0&&(l=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `);var f="";o%t>0&&(f=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        `+l+`
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        `+f+`
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          `+i+")) * float("+t+`));
        int currentSeg = int(mod(float(outIdx), float(`+i+`)));

        float sumValue = 0.0;

        for (int i = 0; i < `+s+`; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          `+c+`
        }

        int inIdx = inOffset + `+s+`;
        if (`+(u===1)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          `+c+`
        } else if (`+(u===2)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          `+c+`
        } else if (`+(u===3)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          `+c+`
        }
        setOutput(sumValue);
      }
    `},Bw=function(e,n,t){var r,o;if(this.variableNames=["c","a","b"],this.outputShape=n,t>4)throw Error("Where for rank "+t+" is not yet supported");if(t===1)o="resRC",r="resRC";else{for(var i=["resRC.x","resRC.y","resRC.z","resRC.w"],a=[],s=[],u=0;u<n.length;u++)s.push(""+i[u]),u<e&&a.push(""+i[u]);r=a.join(),o=s.join()}var c=je(t);this.userCode=`
      void main() {
        `+c+` resRC = getOutputCoords();
        float cVal = getC(`+r+`);
        if (cVal >= 1.0) {
          setOutput(getA(`+o+`));
        } else {
          setOutput(getB(`+o+`));
        }
      }
    `},Lw=(function(){function e(n){this.variableNames=["source"],this.outputShape=n,this.rank=n.length;var t,r=je(this.rank),o="uniform int start["+this.rank+"];",i=(function(a){if(a===1)return"sourceLoc";if(a<=6)return $s.slice(0,a).map((function(s){return"sourceLoc."+s})).join(",");throw Error("Slicing for rank "+a+" is not yet supported")})(this.rank);t=`
        `+r+` sourceLoc;
        `+r+` coords = getOutputCoords();
        `+n.map((function(a,s){return"sourceLoc."+$s[s]+" = start["+s+"] + coords."+$s[s]+";"})).join(`
`)+`
      `,this.userCode=`
      `+o+`
      void main() {
        `+t+`
        setOutput(getSource(`+i+`));
      }
    `}return e.prototype.getCustomSetupFunc=function(n){var t=this;if(n.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+n.length+")");return function(r,o){t.startLoc==null&&(t.startLoc=r.getUniformLocationNoThrow(o,"start"),t.startLoc==null)||r.gl.uniform1iv(t.startLoc,n)}},e})(),$s=["x","y","z","w","u","v"],Ww=(function(){function e(n){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n,this.rank=n.length;var t=je(this.rank),r=Mt("coords",this.rank),o=Mt("sourceLoc",this.rank),i=this.rank===1?"sourceLoc":"vec2("+o.slice(-2).join()+")",a="getChannel(getSource("+o.join()+"), "+i+")",s=`
      result.x = `+a+`;
      if (++`+r[this.rank-1]+" < "+n[this.rank-1]+`) {
        ++`+o[this.rank-1]+`;
        result.y = `+a+`;
        --`+o[this.rank-1]+`;
      }
    `,u=this.rank===1?"":`
      --`+r[this.rank-1]+`;
      if (++`+r[this.rank-2]+" < "+n[this.rank-2]+`) {
        ++`+o[this.rank-2]+`;
        result.z = `+a+`;
        if (++`+r[this.rank-1]+" < "+n[this.rank-1]+`) {
          ++`+o[this.rank-1]+`;
          result.w = `+a+`;
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            `+t+"("+n.map((function(l,f){return"start["+f+"]"})).join()+");":n.map((function(l,f){return o[f]+" = "+r[f]+" + start["+f+"];"})).join(`
`);this.userCode=`
      uniform int start[`+this.rank+`];
      void main() {
        `+t+` coords = getOutputCoords();
        `+t+` sourceLoc;
        `+c+`
        vec4 result = vec4(0.);
        `+s+`
        `+u+`
        setOutput(result);
      }
    `}return e.prototype.getCustomSetupFunc=function(n){var t=this;if(n.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+n.length+")");return function(r,o){t.startLoc==null&&(t.startLoc=r.getUniformLocationNoThrow(o,"start"),t.startLoc==null)||r.gl.uniform1iv(t.startLoc,n)}},e})(),Vw=function(e,n,t){this.variableNames=["x"],this.outputShape=t;var r=t.length,o=je(t.length),i=je(t.length),a="";if(r===1)a="coords * strides + begin";else{var s=0;a=t.map((function(u,c){return s++,t.length===1?"coords * strides["+c+"] + begin["+c+"]":"coords["+(s-1)+"] * strides["+c+"] + begin["+c+"]"})).join(",")}this.userCode=`
      `+o+" begin = "+o+"("+e+`);
      `+o+" strides = "+o+"("+n+`);

      void main() {
        `+i+` coords = getOutputCoords();
        setOutput(getX(`+a+`));
      }
    `},Uw=(function(){function e(n){this.gpgpu=n,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}return e.prototype.acquireTexture=function(n,t,r){var o,i=Uf(t,r),a=zf(n,i,r);if(a in this.freeTextures||(this.freeTextures[a]=[]),a in this.usedTextures||(this.usedTextures[a]=[]),this.freeTextures[a].length>0){this.numFreeTextures--,this.numUsedTextures++,this.log();var s=this.freeTextures[a].shift();return this.usedTextures[a].push(s),s}return this.numUsedTextures++,this.log(),i===zt.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(n[0],n[1]):i===zt.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(n[0],n[1]):i===zt.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(n[0],n[1]):i===zt.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(n[0],n[1]):i===zt.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(n[0],n[1])),this.usedTextures[a].push(o),o},e.prototype.releaseTexture=function(n,t,r,o){if(this.freeTextures!=null){var i=zf(t,Uf(r,o),o);i in this.freeTextures||(this.freeTextures[i]=[]),this.freeTextures[i].push(n),this.numFreeTextures++,this.numUsedTextures--;var a=this.usedTextures[i],s=a.indexOf(n);if(s<0)throw new Error("Cannot release a texture that was never provided by this texture manager");a.splice(s,1),this.log()}},e.prototype.log=function(){if(this.logEnabled){var n=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",this.numFreeTextures+" / "+this.numUsedTextures,"("+n+")")}},e.prototype.getNumUsedTextures=function(){return this.numUsedTextures},e.prototype.getNumFreeTextures=function(){return this.numFreeTextures},e.prototype.dispose=function(){var n=this;if(this.freeTextures!=null){for(var t in this.freeTextures)this.freeTextures[t].forEach((function(r){n.gpgpu.deleteMatrixTexture(r)}));for(var t in this.usedTextures)this.usedTextures[t].forEach((function(o){n.gpgpu.deleteMatrixTexture(o)}));this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0}},e})();function Uf(e,n){if(e===qt.UPLOAD)return zt.PACKED_2X2_FLOAT32;if(e===qt.RENDER||e==null)return(function(t){return q().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?t?zt.PACKED_2X2_FLOAT32:zt.UNPACKED_FLOAT32:t?zt.PACKED_2X2_FLOAT16:zt.UNPACKED_FLOAT16})(n);if(e===qt.DOWNLOAD||e===qt.PIXELS)return zt.PACKED_4X1_UNSIGNED_BYTE;throw new Error("Unknown logical texture type "+e)}function zf(e,n,t){return e[0]+"_"+e[1]+"_"+n+"_"+t}var zw=function(e,n){this.variableNames=["A"];for(var t=new Array(e.length),r=0;r<t.length;r++)t[r]=e[r]*n[r];this.outputShape=t,this.rank=t.length;var o=je(this.rank),i=(function(a){var s=a.length;if(s>5)throw Error("Tile for rank "+s+" is not yet supported");if(s===1)return"imod(resRC, "+a[0]+")";for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],c=[],l=0;l<a.length;l++)c.push("imod("+u[l]+", "+a[l]+")");return c.join()})(e);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+i+`));
      }
    `},Gw=function(e,n){this.variableNames=["A"];for(var t=new Array(e.length),r=0;r<t.length;r++)t[r]=e[n[r]];this.outputShape=t,this.rank=t.length;var o=je(this.rank),i=(function(a){var s=a.length;if(s>6)throw Error("Transpose for rank "+s+" is not yet supported");for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],c=new Array(s),l=0;l<a.length;l++)c[a[l]]=u[l];return c.join()})(n);this.userCode=`
    void main() {
      `+o+` resRC = getOutputCoords();
      setOutput(getA(`+i+`));
    }
    `},Hw=function(e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;for(var t=new Array(e.length),r=0;r<t.length;r++)t[r]=e[n[r]];if(this.outputShape=t,this.rank=t.length,this.rank>6)throw Error("Packed transpose for rank "+this.rank+" is not yet supported.");var o=je(this.rank),i=Op("rc",this.rank),a=new Array(this.rank);for(r=0;r<n.length;r++)a[n[r]]=i[r];var s="vec2("+a.slice(-2).join()+")",u="++"+i[this.rank-1]+" < "+t[this.rank-1],c="getChannel(getA("+a.join()+"), "+s+")";this.userCode=`
    void main() {
      `+o+` rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = `+c+`;
      if(`+u+`) {
        result[1] = `+c+`;
      }
      --`+i[this.rank-1]+`;
      if(++`+i[this.rank-2]+" < "+t[this.rank-2]+`) {
        result[2] = `+c+`;
        if(`+u+`) {
          result[3] = `+c+`;
        }
      }
      setOutput(result);
    }
    `},Dc=1.7580993408473768,Tc=1.0507009873554805,Fe=function(e,n){this.variableNames=["A"],this.outputShape=e,this.userCode=`
      float unaryOperation(float x) {
        `+n+`
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `},mn="if (isnan(x)) return x;",jw="return x;",Gf="return abs(x);",Up=mn+`
  return (x < 0.0) ? 0.0 : x;
`,zp=mn+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,Gp="return (x >= 0.0) ? x : (exp(x) - 1.0);",qw=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = `+Dc+`;
  float scale = `+Tc+`;
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,Hf="return -x;",jf="return ceil(x);",qf="return floor(x);",Kf="return exp(x);",$f="return exp(x) - 1.0;",Kw=mn+`
  return sin(x);
`,$w=mn+`
  return cos(x);
`,Xw=mn+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,Yw=mn+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,Jw=mn+`
  return atan(x);
`,Qw=mn+"return log(x + sqrt(x * x + 1.0));",Zw=mn+`
  if (x < 1.0) return NAN;
  return log(x + sqrt(x * x - 1.0));`,e2=mn+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
  return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,Gi="return x;",t2="return x;",Hp=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,jp=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,qp=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,qo=function(e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.userCode=`
      vec4 unaryOperation(vec4 x) {
        `+n+`
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `},n2=function(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=e;var n=e.length,t=Mt("rc",n),r=je(n),o=(function(s,u){if(s===1)return"rc";for(var c="",l=0;l<s;l++)c+=u[l],l<s-1&&(c+=",");return c})(n,t),i=t.slice(-2),a=n<=1?"rc":"vec2("+i.join(",")+")";this.userCode=`
      void main() {
        `+r+` rc = getOutputCoords();
        vec4 packedInput = getA(`+o+`);

        setOutput(getChannel(packedInput, `+a+`));
      }
    `},Hi={};function ji(e,n){if(n===void 0&&(n=!1),e==="linear")return n?t2:jw;if(e==="relu")return n?Hp:Up;if(e==="elu")return n?qp:Gp;if(e==="relu6")return n?jp:zp;if(e==="prelu")return n?Vp:Wp;throw new Error("Activation "+e+" has not been implemented for the WebGL backend.")}var r2=600,o2=(function(e){function n(t){var r,o=e.call(this)||this;if(o.pendingRead=new WeakMap,o.pendingDisposal=new WeakSet,o.dataRefCount=new WeakMap,o.numBytesInGPU=0,o.uploadWaitMs=0,o.downloadWaitMs=0,o.warnedAboutMemory=!1,o.pendingDeletes=0,o.disposed=!1,!q().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");if(t==null){var i=On(q().getNumber("WEBGL_VERSION"));o.binaryCache=((r=q().getNumber("WEBGL_VERSION"))in Hi||(Hi[r]={}),Hi[r]),o.gpgpu=new vw(i),o.canvas=i.canvas,o.gpgpuCreatedLocally=!0}else o.gpgpu=t,o.binaryCache={},o.gpgpuCreatedLocally=!1,o.canvas=t.gl.canvas;return o.textureManager=new Uw(o.gpgpu),o.numMBBeforeWarning=q().global.screen==null?1024:q().global.screen.height*q().global.screen.width*window.devicePixelRatio*r2/1024/1024,o.texData=new Ip(o,P),o}return vn(n,e),n.prototype.numDataIds=function(){return this.texData.numDataIds()+(this.cpuBackend?this.cpuBackend.numDataIds():0)-this.pendingDeletes},n.prototype.write=function(t,r,o){if(q().getBool("DEBUG")&&this.checkNumericalProblems(t),o==="complex64"&&t!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");var i={};return this.texData.set(i,{shape:r,dtype:o,values:t,usage:qt.UPLOAD}),i},n.prototype.move=function(t,r,o,i){if(q().getBool("DEBUG")&&this.checkNumericalProblems(r),i==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(t,{shape:o,dtype:i,values:r,usage:qt.UPLOAD})},n.prototype.readSync=function(t){var r=this.texData.get(t),o=r.values,i=r.dtype,a=r.complexTensors,s=r.slice,u=r.shape,c=r.isPacked;if(s!=null){var l=void 0;l=c?new qo(u,Gi):new Fe(u,Gi);var f=this.runWebGLProgram(l,[{dataId:t,shape:u,dtype:i}],i),h=this.readSync(f.dataId);return this.disposeData(f.dataId),h}if(o!=null)return this.convertAndCacheOnCPU(t);if(i==="string")return o;var d,p,v=this.activeTimers!=null;return v&&(d=Cn()),i==="complex64"?p=Gu(a.real.dataSync(),a.imag.dataSync()):p=this.getValuesFromTexture(t),v&&(this.downloadWaitMs+=Cn()-d),this.convertAndCacheOnCPU(t,p)},n.prototype.read=function(t){return pe(this,void 0,void 0,(function(){var r,o,i,a,s,u,c,l,f,h,d,p,v,m,g,y,x,b,w,_,A,R;return ve(this,(function(E){switch(E.label){case 0:if(this.pendingRead.has(t))return r=this.pendingRead.get(t),[2,new Promise((function(S){return r.push(S)}))];if(o=this.texData.get(t),i=o.values,a=o.shape,s=o.slice,u=o.dtype,c=o.complexTensors,l=o.isPacked,s!=null)return f=void 0,f=l?new qo(a,Gi):new Fe(a,Gi),h=this.runWebGLProgram(f,[{dataId:t,shape:a,dtype:u}],u),d=this.read(h.dataId),this.disposeData(h.dataId),[2,d];if(i!=null)return[2,this.convertAndCacheOnCPU(t)];if(!q().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&q().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");return p=null,u!=="complex64"&&q().get("WEBGL_BUFFER_SUPPORTED")&&(v=this.decode(t),m=this.texData.get(v.dataId),p=(R=this.gpgpu).createBufferFromTexture.apply(R,[m.texture].concat(ti(a)))),this.pendingRead.set(t,[]),u==="complex64"?[3,2]:[4,this.gpgpu.createAndWaitForFence()];case 1:E.sent(),E.label=2;case 2:return u!=="complex64"?[3,4]:[4,Promise.all([c.real.data(),c.imag.data()])];case 3:return y=E.sent(),x=y[0],b=y[1],g=Gu(x,b),[3,5];case 4:p==null?g=this.getValuesFromTexture(t):(w=be(a),g=this.gpgpu.downloadFloat32MatrixFromBuffer(p,w)),E.label=5;case 5:return v!=null&&this.disposeData(v.dataId),_=this.convertAndCacheOnCPU(t,g),A=this.pendingRead.get(t),this.pendingRead.delete(t),A.forEach((function(S){return S(_)})),this.pendingDisposal.has(t)&&(this.pendingDisposal.delete(t),this.disposeData(t),this.pendingDeletes--),[2,_]}}))}))},n.prototype.checkNumericalProblems=function(t){if(t!=null)for(var r=0;r<t.length;r++){var o=t[r];if(!qb(o))throw q().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error("The value "+o+" cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'"):Error("The value "+o+" cannot be represented on this device.")}},n.prototype.getValuesFromTexture=function(t){var r,o=this.texData.get(t),i=o.shape,a=o.dtype,s=o.isPacked,u=be(i);if(q().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){var c=this.decode(t),l=this.texData.get(c.dataId),f=(r=this.gpgpu).downloadMatrixFromPackedTexture.apply(r,[l.texture].concat(ti(i))).subarray(0,u);return this.disposeData(c.dataId),f}var h=q().getBool("WEBGL_PACK")&&s===!0,d=h?Us(i):i,p=h?new j1(d):new H1(d),v=this.runWebGLProgram(p,[{shape:d,dtype:a,dataId:t}],"float32"),m=this.texData.get(v.dataId),g=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(m.texture,m.texShape[0],m.texShape[1]).subarray(0,u);return this.disposeData(v.dataId),g},n.prototype.time=function(t){return pe(this,void 0,void 0,(function(){var r,o,i,a,s,u,c;return ve(this,(function(l){switch(l.label){case 0:return r=this.activeTimers,o=[],i=!1,this.programTimersStack==null?(this.programTimersStack=o,i=!0):this.activeTimers.push(o),this.activeTimers=o,t(),a=Fo(this.activeTimers.map((function(f){return f.query}))).filter((function(f){return f!=null})),s=Fo(this.activeTimers.map((function(f){return f.name}))).filter((function(f){return f!=null})),this.activeTimers=r,i&&(this.programTimersStack=null),u={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},q().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[4,Promise.all(a)]:[3,2];case 1:return c=l.sent(),u.kernelMs=Sb(c),u.getExtraProfileInfo=function(){return c.map((function(f,h){return{name:s[h],ms:f}})).map((function(f){return f.name+": "+f.ms})).join(", ")},[3,3];case 2:u.kernelMs={error:"WebGL query timers are not supported in this environment."},l.label=3;case 3:return this.uploadWaitMs=0,this.downloadWaitMs=0,[2,u]}}))}))},n.prototype.memory=function(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU}},n.prototype.startTimer=function(){return q().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:Cn(),endMs:null}},n.prototype.endTimer=function(t){return q().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),t):(t.endMs=Cn(),t)},n.prototype.getQueryTime=function(t){return pe(this,void 0,void 0,(function(){var r;return ve(this,(function(o){return q().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[2,this.gpgpu.waitForQueryAndGetTime(t)]:[2,(r=t).endMs-r.startMs]}))}))},n.prototype.disposeData=function(t){if(!this.pendingDisposal.has(t)){if(this.pendingRead.has(t))return this.pendingDisposal.add(t),void this.pendingDeletes++;if(this.texData.has(t)){this.releaseGPUData(t);var r=this.texData.get(t).complexTensors;r!=null&&(r.real.dispose(),r.imag.dispose()),this.texData.delete(t)}}},n.prototype.releaseGPUData=function(t){var r=this.texData.get(t),o=r.texture,i=r.dtype,a=r.texShape,s=r.usage,u=r.isPacked,c=r.slice,l=c&&c.origDataId||t,f=this.dataRefCount.get(l);f>1?this.dataRefCount.set(l,f-1):(this.dataRefCount.delete(l),o!=null&&(this.numBytesInGPU-=this.computeBytes(a,i),this.textureManager.releaseTexture(o,a,s,u)));var h=this.texData.get(t);h.texture=null,h.texShape=null,h.isPacked=!1,h.slice=null},n.prototype.getTexture=function(t){return this.uploadToGPU(t),this.texData.get(t).texture},n.prototype.getDataInfo=function(t){return this.texData.get(t)},n.prototype.getCPUBackend=function(){return q().getBool("WEBGL_CPU_FORWARD")?(this.cpuBackend==null&&(this.cpuBackend=P.findBackend("cpu")),this.cpuBackend):null},n.prototype.shouldExecuteOnCPU=function(t,r){var o=this;return r===void 0&&(r=128),this.getCPUBackend()!=null&&t.every((function(i){return o.texData.get(i.dataId).texture==null&&i.size<r}))},n.prototype.getGPGPUContext=function(){return this.gpgpu},n.prototype.complex=function(t,r){var o=this.makeOutput(t.shape,"complex64");return this.texData.get(o.dataId).complexTensors={real:P.keep(t.clone()),imag:P.keep(r.clone())},o},n.prototype.real=function(t){return this.texData.get(t.dataId).complexTensors.real.clone()},n.prototype.imag=function(t){return this.texData.get(t.dataId).complexTensors.imag.clone()},n.prototype.slice=function(t,r,o){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.slice(t,r,o);if(be(o)===0)return bt([],o,t.dtype);var i=this.texData.get(t.dataId).isPacked,a=Rp(t.shape,r,o);if(i||!a){var s=q().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Ww(o):new Lw(o),u=s.getCustomSetupFunc(r);return this.compileAndRun(s,[t],null,u)}return this.uploadToGPU(t.dataId),this.shallowSlice(t,r,o)},n.prototype.shallowSlice=function(t,r,o){var i=this.texData.get(t.dataId),a=this.makeOutput(o,t.dtype),s=this.texData.get(a.dataId);Object.assign(s,i),s.shape=o,s.dtype=t.dtype;var u=Sp(r,t.strides);i.slice&&(u+=i.slice.flatOffset),s.slice={flatOffset:u,origDataId:i.slice&&i.slice.origDataId||t.dataId};var c=this.dataRefCount.get(s.slice.origDataId)||1;return this.dataRefCount.set(s.slice.origDataId,c+1),a},n.prototype.stridedSlice=function(t,r,o,i){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.stridedSlice(t,r,o,i);var a=Ec(r,o,i);if(a.some((function(u){return u===0})))return bt([],a);var s=new Vw(r,i,a);return this.compileAndRun(s,[t])},n.prototype.reverse=function(t,r){var o=q().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Mw(t.shape,r):new Pw(t.shape,r);return this.compileAndRun(o,[t])},n.prototype.concat=function(t,r){if(t[0].dtype==="complex64"){var o=t.map((function(d){return tn(d)})),i=t.map((function(d){return Sn(d)}));return gt(this.concat(o,r),this.concat(i,r))}if(this.shouldExecuteOnCPU(t))return this.cpuBackend.concat(t,r);if(t.length===1)return t[0];if(t.length>q().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){var a=Math.floor(t.length/2),s=this.concat(t.slice(0,a),r),u=this.concat(t.slice(a),r);return this.concat([s,u],r)}if(q().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&t[0].rank>1){var c=new D1(t.map((function(d){return d.shape})),r);return this.compileAndRun(c,t)}var l=Mo(t.map((function(d){return d.shape})),r),f=t.map((function(d){return d.as2D(-1,be(d.shape.slice(r)))})),h=new k1(f.map((function(d){return d.shape})));return this.compileAndRun(h,f).reshape(l)},n.prototype.neg=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.neg(t);if(q().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,Hf,t.dtype);var r=new Fe(t.shape,Hf);return this.compileAndRun(r,[t])},n.prototype.batchMatMul=function(t,r,o,i){var a=o?t.shape[2]:t.shape[1],s=i?r.shape[1]:r.shape[2],u=o?t.shape[1]:t.shape[2],c=t.shape[0];if((a===1||s===1)&&u>1e3){o&&(t=t.transpose([0,2,1])),i&&(r=r.transpose([0,2,1]));var l=s===1?t:t.as3D(c,u,1),f=s===1?2:1,h=s===1?r.as3D(c,1,u):r;return this.multiply(l,h).sum(f,!0)}var d=yt(t.dtype,r.dtype),p=new js(t.shape,[c,a,s],o,i);return this.compileAndRun(p,[t,r],d)},n.prototype.fusedBatchMatMul=function(t){var r=t.a,o=t.b,i=t.transposeA,a=t.transposeB,s=t.bias,u=t.activation,c=t.preluActivationWeights,l=i?r.shape[2]:r.shape[1],f=a?o.shape[1]:o.shape[2],h=r.shape[0],d=yt(r.dtype,o.dtype),p=s!=null,v=c!=null,m=u?ji(u,!0):null,g=new js(r.shape,[h,l,f],i,a,p,m,v),y=[r,o];return s&&y.push(s),c&&y.push(c),this.compileAndRun(g,y,d)},n.prototype.multiply=function(t,r){if(t.dtype==="complex64"){var o=this.texData.get(t.dataId),i=this.texData.get(r.dataId),a=new Nf(E1,t.shape,r.shape),s=new Nf(R1,t.shape,r.shape),u=[this.makeComplexComponentTensorInfo(t,o.complexTensors.real),this.makeComplexComponentTensorInfo(t,o.complexTensors.imag),this.makeComplexComponentTensorInfo(r,i.complexTensors.real),this.makeComplexComponentTensorInfo(r,i.complexTensors.imag)],c=this.compileAndRun(a,u),l=this.compileAndRun(s,u),f=this.complex(c,l);return c.dispose(),l.dispose(),f}if(this.shouldExecuteOnCPU([t,r]))return this.cpuBackend.multiply(t,r);if(q().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,r,Ff,t.dtype);var h=new Ze(Ff,t.shape,r.shape);return this.compileAndRun(h,[t,r],t.dtype)},n.prototype.batchNormalization=function(t,r,o,i,a,s){var u=[t,r,o],c=null;s!=null&&(c=s.shape,u.push(s));var l=null;if(a!=null&&(l=a.shape,u.push(a)),q().getBool("WEBGL_PACK_NORMALIZATION")){var f=new C1(t.shape,r.shape,o.shape,c,l,i);return this.compileAndRun(f,u)}var h=new _1(t.shape,r.shape,o.shape,c,l,i);return this.compileAndRun(h,u)},n.prototype.localResponseNormalization4D=function(t,r,o,i,a){var s=q().getBool("WEBGL_PACK_NORMALIZATION")?new bw(t.shape,r,o,i,a):new gw(t.shape,r,o,i,a);return this.compileAndRun(s,[t])},n.prototype.LRNGrad=function(t,r,o,i,a,s,u){var c=new yw(r.shape,i,a,s,u);return this.compileAndRun(c,[r,o,t])},n.prototype.tile=function(t,r){if(t.dtype==="string"){var o=this.readSync(t.dataId).map((function(a){return ma(a)}));return Pp(Te(t.shape,t.dtype,o),r)}var i=new zw(t.shape,r);return this.compileAndRun(i,[t])},n.prototype.pad=function(t,r,o){var i=q().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Sw(t.shape,r,o):new Rw(t.shape,r,o);return this.compileAndRun(i,[t])},n.prototype.transpose=function(t,r){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.transpose(t,r);var o=q().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Hw(t.shape,r):new Gw(t.shape,r);return this.compileAndRun(o,[t])},n.prototype.gather=function(t,r,o){if(this.shouldExecuteOnCPU([t,r]))return this.cpuBackend.gather(t,r,o);var i=new J1(t.shape,r.size,o);return this.compileAndRun(i,[t,r])},n.prototype.batchToSpaceND=function(t,r,o){I(t.rank<=4,(function(){return"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"}));var i=r.reduce((function(f,h){return f*h})),a=_a(t.shape,r,i),s=Ca(a.length,r.length),u=Ea(t.shape,r,i),c=wp(o,r.length),l=_p(u,o,r.length);return t.reshape(a).transpose(s).reshape(u).slice(c,l)},n.prototype.spaceToBatchND=function(t,r,o){I(t.rank<=4,(function(){return"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"}));var i=r.reduce((function(h,d){return h*d})),a=[[0,0]];a.push.apply(a,o);for(var s=1+r.length;s<t.shape.length;++s)a.push([0,0]);var u=t.pad(a),c=_a(u.shape,r,i,!1),l=Ca(c.length,r.length,!1),f=Ea(u.shape,r,i,!1);return u.reshape(c).transpose(l).reshape(f)},n.prototype.reduce=function(t,r,o){var i=t.shape[0],a=t.shape[1],s=zs(a),u=new Iw({windowSize:s,inSize:a,batchSize:i},r),c=this.compileAndRun(u,[t],o);return c.shape[1]===1?c:this.reduce(c,r,o)},n.prototype.argReduce=function(t,r,o){o===void 0&&(o=null);var i=t.shape[0],a=t.shape[1];o!=null&&(i=o.shape[0],a=o.shape[1]);var s=zs(a),u=new d1({windowSize:s,inSize:a,batchSize:i},r,o==null),c=[t];o!=null&&c.push(o);var l=this.compileAndRun(u,c,"int32");return l.shape[1]===1?l:this.argReduce(t,r,l)},n.prototype.argReducePacked=function(t,r,o){o===void 0&&(o=null);var i=o!=null?o.shape:t.shape,a=zs(i[i.length-1]),s=new b1(i,a,r,o==null),u=o==null?[t]:[t,o],c=this.compileAndRun(s,u,"int32");return c.rank===t.rank?this.argReducePacked(t,r,c):c},n.prototype.sum=function(t,r){Ut("sum",r,t.rank);var o=wt(t.shape,r),i=o[0],a=be(o[1]),s=t.as2D(-1,a),u=Ps(t.dtype);return this.reduce(s,"sum",u).reshape(i)},n.prototype.prod=function(t,r){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.prod(t,r);var o=wt(t.shape,r),i=o[0],a=be(o[1]),s=t.as2D(-1,a),u=Ps(t.dtype);return this.reduce(s,"prod",u).reshape(i)},n.prototype.unsortedSegmentSum=function(t,r,o){var i=0,a=Bn([i],t.rank),s=t;a!=null&&(s=t.transpose(a),i=Ln(1,t.rank)[0]);var u=(function(d,p,v){for(var m=[],g=d.length,y=0;y<g;y++)y!==p?m.push(d[y]):m.push(v);return m})(s.shape,i,o),c=be([s.shape[i]]),l=s.as2D(-1,c),f=Ps(t.dtype),h=this.segOpCompute(l,"unsortedSegmentSum",r,f,o).reshape(u);return a!=null&&(h=h.transpose(xc(a))),h},n.prototype.segOpCompute=function(t,r,o,i,a){var s=t.shape[0],u=t.shape[1],c=(function(h,d){var p,v=!1;for(h<=Ep?(p=h,v=!0):p=Pu(h,Math.floor(Math.sqrt(h)));!v;)p>d||p===h?v=!0:p=Pu(h,p+1);return p})(u,a),l=new Ow({windowSize:c,inSize:u,batchSize:s,numSegments:a}),f=this.compileAndRun(l,[t,o],i);return f.shape[1]===a?f:(o=wa(0,a).tile([u/c]),this.segOpCompute(f,r,o,i,a))},n.prototype.argMinMaxReduce=function(t,r,o){var i=[r];if(Ut("arg"+o.charAt(0).toUpperCase()+o.slice(1),i,t.rank),!q().getBool("WEBGL_PACK_REDUCE")||t.rank<=2){var a=wt(t.shape,i),s=a[0],u=be(a[1]),c=t.as2D(-1,u);return this.argReduce(c,o).reshape(s)}return this.argReducePacked(t,o)},n.prototype.argMin=function(t,r){return this.argMinMaxReduce(t,r,"min")},n.prototype.argMax=function(t,r){return this.argMinMaxReduce(t,r,"max")},n.prototype.cumsum=function(t,r,o,i){if(r!==t.rank-1)throw new Error("WebGL cumsum shader expects an inner-most axis="+(t.rank-1)+" but got axis="+r);var a=new W1(t.shape,o,i);return this.compileAndRun(a,[t])},n.prototype.equal=function(t,r){if(q().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,r,`
  return vec4(equal(a, b));
`,"bool");var o=new Ze("return float(a == b);",t.shape,r.shape);return this.compileAndRun(o,[t,r],"bool")},n.prototype.notEqual=function(t,r){if(q().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,r,`
  return vec4(notEqual(a, b));
`,"bool");var o=new Ze("return float(a != b);",t.shape,r.shape);return this.compileAndRun(o,[t,r],"bool")},n.prototype.less=function(t,r){if(this.shouldExecuteOnCPU([t,r]))return this.cpuBackend.less(t,r);if(q().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,r,`
  return vec4(lessThan(a, b));
`,"bool");var o=new Ze("return float(a < b);",t.shape,r.shape);return this.compileAndRun(o,[t,r],"bool")},n.prototype.lessEqual=function(t,r){if(q().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,r,`
  return vec4(lessThanEqual(a, b));
`,"bool");var o=new Ze("return float(a <= b);",t.shape,r.shape);return this.compileAndRun(o,[t,r],"bool")},n.prototype.greater=function(t,r){if(this.shouldExecuteOnCPU([t,r]))return this.cpuBackend.greater(t,r);if(q().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,r,`
  return vec4(greaterThan(a, b));
`,"bool");var o=new Ze("return float(a > b);",t.shape,r.shape);return this.compileAndRun(o,[t,r],"bool")},n.prototype.greaterEqual=function(t,r){if(q().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,r,`
  return vec4(greaterThanEqual(a, b));
`,"bool");var o=new Ze("return float(a >= b);",t.shape,r.shape);return this.compileAndRun(o,[t,r],"bool")},n.prototype.logicalNot=function(t){var r=new Fe(t.shape,"return float(!(x >= 1.0));");return this.compileAndRun(r,[t])},n.prototype.logicalAnd=function(t,r){if(q().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,r,`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,"bool");var o=new Ze("return float(a >= 1.0 && b >= 1.0);",t.shape,r.shape);return this.compileAndRun(o,[t,r],"bool")},n.prototype.logicalOr=function(t,r){if(q().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,r,`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,"bool");var o=new Ze("return float(a >= 1.0 || b >= 1.0);",t.shape,r.shape);return this.compileAndRun(o,[t,r],"bool")},n.prototype.select=function(t,r,o){var i=new Bw(t.rank,r.shape,r.rank);return this.compileAndRun(i,[t,r,o],yt(r.dtype,o.dtype))},n.prototype.where=function(t){ba("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");var r=t.dataSync();return Ac(t.shape,r)},n.prototype.topk=function(t,r,o){return Mp(t.dataSync(),t.shape,t.dtype,r)},n.prototype.min=function(t,r){Ut("min",r,t.rank);var o=wt(t.shape,r),i=o[0],a=be(o[1]),s=t.as2D(-1,a);return this.reduce(s,"min",s.dtype).reshape(i)},n.prototype.minimum=function(t,r){if(this.shouldExecuteOnCPU([t,r]))return this.cpuBackend.minimum(t,r);var o=q().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Gn(`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,t.shape,r.shape):new Ze(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return min(a, b);
`,t.shape,r.shape);return this.compileAndRun(o,[t,r])},n.prototype.mod=function(t,r){var o=q().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Gn(`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,t.shape,r.shape):new Ze(`if (b == 0.0) return NAN;
  return mod(a, b);`,t.shape,r.shape);return this.compileAndRun(o,[t,r])},n.prototype.max=function(t,r){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.max(t,r);Ut("max",r,t.rank);var o=wt(t.shape,r),i=o[0],a=be(o[1]),s=t.as2D(-1,a);return this.reduce(s,"max",s.dtype).reshape(i)},n.prototype.maximum=function(t,r){if(this.shouldExecuteOnCPU([t,r]))return this.cpuBackend.maximum(t,r);var o=q().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Gn(`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,t.shape,r.shape):new Ze(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return max(a, b);
`,t.shape,r.shape);return this.compileAndRun(o,[t,r])},n.prototype.all=function(t,r){Ut("all",r,t.rank);var o=wt(t.shape,r),i=o[0],a=be(o[1]),s=t.as2D(-1,a);return this.reduce(s,"all",s.dtype).reshape(i)},n.prototype.any=function(t,r){Ut("any",r,t.rank);var o=wt(t.shape,r),i=o[0],a=be(o[1]),s=t.as2D(-1,a);return this.reduce(s,"any",s.dtype).reshape(i)},n.prototype.realDivide=function(t,r){if(q().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,r,`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,"float32",!0);var o=new Ze(`
if (a == b) {
  return 1.0;
};
return a / b;`,t.shape,r.shape);return this.compileAndRun(o,[t,r],"float32")},n.prototype.floorDiv=function(t,r){if(q().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,r,`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,"int32");var o=new Ze(`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,t.shape,r.shape);return this.compileAndRun(o,[t,r],"int32")},n.prototype.add=function(t,r){if(t.dtype==="complex64"&&r.dtype==="complex64")return this.complexSeparableBinaryOp(t,r,Gs);if(this.shouldExecuteOnCPU([t,r]))return this.cpuBackend.add(t,r);var o=yt(t.dtype,r.dtype);if(q().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,r,Gs,o);var i=new Ze(Gs,t.shape,r.shape);return this.compileAndRun(i,[t,r],o)},n.prototype.packedUnaryOp=function(t,r,o){var i=new qo(t.shape,r);return this.compileAndRun(i,[t],o)},n.prototype.packedBinaryOp=function(t,r,o,i,a){a===void 0&&(a=!1);var s=new Gn(o,t.shape,r.shape,a);return this.compileAndRun(s,[t,r],i)},n.prototype.complexSeparableBinaryOp=function(t,r,o){var i=this,a=this.texData.get(t.dataId),s=this.texData.get(r.dataId),u=[[a.complexTensors.real,s.complexTensors.real],[a.complexTensors.imag,s.complexTensors.imag]].map((function(h){var d=h[0],p=h[1],v=i.makeComplexComponentTensorInfo(t,d),m=i.makeComplexComponentTensorInfo(r,p),g=new Ze(o,t.shape,r.shape);return i.compileAndRun(g,[v,m],yt(d.dtype,p.dtype))})),c=u[0],l=u[1],f=this.complex(c,l);return c.dispose(),l.dispose(),f},n.prototype.makeComplexComponentTensorInfo=function(t,r){return{dataId:r.dataId,dtype:r.dtype,shape:t.shape}},n.prototype.addN=function(t){if(t.length===1)return t[0];if(t.length>q().get("WEBGL_MAX_TEXTURES_IN_SHADER")){var r=Math.floor(t.length/2),o=this.addN(t.slice(0,r)),i=this.addN(t.slice(r));return this.addN([o,i])}var a=t.map((function(c){return c.dtype})).reduce((function(c,l){return yt(c,l)})),s=t.map((function(c){return c.shape})),u=q().getBool("WEBGL_PACK")?new h1(t[0].shape,s):new f1(t[0].shape,s);return this.compileAndRun(u,t,a)},n.prototype.subtract=function(t,r){if(t.dtype==="complex64"&&r.dtype==="complex64")return this.complexSeparableBinaryOp(t,r,Hs);if(this.shouldExecuteOnCPU([t,r]))return this.cpuBackend.subtract(t,r);var o=yt(t.dtype,r.dtype);if(q().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,r,Hs,t.dtype);var i=new Ze(Hs,t.shape,r.shape);return this.compileAndRun(i,[t,r],o)},n.prototype.pow=function(t,r){var o=q().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Gn(`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,t.shape,r.shape):new Ze(`
if(a < 0.0 && floor(b) < b){
  return NAN;
}
if (b == 0.0) {
  return 1.0;
}
return (round(mod(b, 2.0)) != 1) ?
    pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,t.shape,r.shape),i=yt(t.dtype,r.dtype);return this.compileAndRun(o,[t,r],i)},n.prototype.ceil=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.ceil(t);if(q().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,jf,t.dtype);var r=new Fe(t.shape,jf);return this.compileAndRun(r,[t])},n.prototype.floor=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.floor(t);if(q().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,qf,t.dtype);var r=new Fe(t.shape,qf);return this.compileAndRun(r,[t])},n.prototype.sign=function(t){var r=new Fe(t.shape,`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`);return this.compileAndRun(r,[t])},n.prototype.isNaN=function(t){var r=new Fe(t.shape,"return float(isnan(x));");return this.compileAndRun(r,[t],"bool")},n.prototype.isInf=function(t){var r=new Fe(t.shape,"return float(isinf(x));");return this.compileAndRun(r,[t],"bool")},n.prototype.isFinite=function(t){var r=new Fe(t.shape,"return float(!isnan(x) && !isinf(x));");return this.compileAndRun(r,[t],"bool")},n.prototype.round=function(t){var r=new Fe(t.shape,`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`);return this.compileAndRun(r,[t])},n.prototype.exp=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.exp(t);if(q().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,Kf,t.dtype);var r=new Fe(t.shape,Kf);return this.compileAndRun(r,[t])},n.prototype.expm1=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.expm1(t);if(q().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,$f,t.dtype);var r=new Fe(t.shape,$f);return this.compileAndRun(r,[t])},n.prototype.softmax=function(t,r){var o=ft([r],t.shape),i=this.max(t,o),a=Lt(i.shape,o),s=this.subtract(t,i.reshape(a)),u=this.exp(s),c=this.sum(u,o).reshape(a);return this.realDivide(u,c)},n.prototype.log=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.log(t);if(q().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,`
  vec4 result = log(x);
  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));
  result.r = isNaN.r == 1.0 ? NAN : result.r;
  result.g = isNaN.g == 1.0 ? NAN : result.g;
  result.b = isNaN.b == 1.0 ? NAN : result.b;
  result.a = isNaN.a == 1.0 ? NAN : result.a;

  return result;
`,t.dtype);var r=new Fe(t.shape,`if (x < 0.0) return NAN;
  return log(x);`);return this.compileAndRun(r,[t])},n.prototype.log1p=function(t){var r=new Fe(t.shape,"return log(1.0 + x);");return this.compileAndRun(r,[t])},n.prototype.sqrt=function(t){var r=new Fe(t.shape,"return sqrt(x);");return this.compileAndRun(r,[t])},n.prototype.rsqrt=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.rsqrt(t);var r=new Fe(t.shape,"return inversesqrt(x);");return this.compileAndRun(r,[t])},n.prototype.reciprocal=function(t){var r=new Fe(t.shape,"return 1.0 / x;");return this.compileAndRun(r,[t])},n.prototype.relu=function(t){var r;return r=q().getBool("WEBGL_PACK")?new qo(t.shape,Hp):new Fe(t.shape,Up),this.compileAndRun(r,[t])},n.prototype.relu6=function(t){var r;return r=q().getBool("WEBGL_PACK")?new qo(t.shape,jp):new Fe(t.shape,zp),this.compileAndRun(r,[t])},n.prototype.prelu=function(t,r){var o=q().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Gn(Vp,t.shape,r.shape):new Ze(Wp,t.shape,r.shape);return this.compileAndRun(o,[t,r])},n.prototype.elu=function(t){if(q().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,qp,t.dtype);var r=new Fe(t.shape,Gp);return this.compileAndRun(r,[t])},n.prototype.eluDer=function(t,r){var o=q().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Gn(`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,t.shape,r.shape):new Ze("return (b >= 1.0) ? a : a * (b + 1.0);",t.shape,r.shape);return this.compileAndRun(o,[t,r])},n.prototype.selu=function(t){var r=new Fe(t.shape,qw);return this.compileAndRun(r,[t])},n.prototype.int=function(t){var r=new Fe(t.shape,"return float(int(x));");return this.compileAndRun(r,[t],"int32")},n.prototype.clip=function(t,r,o){var i,a=(i=q().getBool("WEBGL_PACK_CLIP")?new I1(t.shape):new S1(t.shape)).getCustomSetupFunc(r,o);return this.compileAndRun(i,[t],null,a)},n.prototype.abs=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.abs(t);if(q().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,Gf,t.dtype);var r=new Fe(t.shape,Gf);return this.compileAndRun(r,[t])},n.prototype.complexAbs=function(t){var r=this.texData.get(t.dataId),o=new A1(t.shape),i=[this.makeComplexComponentTensorInfo(t,r.complexTensors.real),this.makeComplexComponentTensorInfo(t,r.complexTensors.imag)];return this.compileAndRun(o,i)},n.prototype.sigmoid=function(t){var r=new Fe(t.shape,"return 1.0 / (1.0 + exp(-1.0 * x));");return this.compileAndRun(r,[t])},n.prototype.softplus=function(t){var r=new Fe(t.shape,`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`);return this.compileAndRun(r,[t])},n.prototype.sin=function(t){var r=new Fe(t.shape,Kw);return this.compileAndRun(r,[t])},n.prototype.cos=function(t){var r=new Fe(t.shape,$w);return this.compileAndRun(r,[t])},n.prototype.tan=function(t){var r=new Fe(t.shape,"return tan(x);");return this.compileAndRun(r,[t])},n.prototype.asin=function(t){var r=new Fe(t.shape,Xw);return this.compileAndRun(r,[t])},n.prototype.acos=function(t){var r=new Fe(t.shape,Yw);return this.compileAndRun(r,[t])},n.prototype.atan=function(t){var r=new Fe(t.shape,Jw);return this.compileAndRun(r,[t])},n.prototype.atan2=function(t,r){var o=q().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Gn(`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,t.shape,r.shape):new Ze(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return atan(a, b);
`,t.shape,r.shape);return this.compileAndRun(o,[t,r])},n.prototype.sinh=function(t){var r=new Fe(t.shape,`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`);return this.compileAndRun(r,[t])},n.prototype.cosh=function(t){var r=new Fe(t.shape,`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`);return this.compileAndRun(r,[t])},n.prototype.tanh=function(t){var r=new Fe(t.shape,`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`);return this.compileAndRun(r,[t])},n.prototype.asinh=function(t){var r=new Fe(t.shape,Qw);return this.compileAndRun(r,[t])},n.prototype.acosh=function(t){var r=new Fe(t.shape,Zw);return this.compileAndRun(r,[t])},n.prototype.atanh=function(t){var r=new Fe(t.shape,e2);return this.compileAndRun(r,[t])},n.prototype.erf=function(t){var r=new Fe(t.shape,`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = 0.3275911;
  float a1 = 0.254829592;
  float a2 = -0.284496736;
  float a3 = 1.421413741;
  float a4 = -1.453152027;
  float a5 = 1.061405429;

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`);return this.compileAndRun(r,[t])},n.prototype.step=function(t,r){var o=new Fe(t.shape,(function(i){return i===void 0&&(i=0),mn+`
    return x > 0.0 ? 1.0 : float(`+i+`);
  `})(r));return this.compileAndRun(o,[t])},n.prototype.conv2dByMatMul=function(t,r,o,i,a,s){var u=t.shape,c=this.texData.get(t.dataId),l=o.inChannels,f=u[0]*u[1]*u[2],h=o.outChannels,d=o.dataFormat==="channelsLast",p=(f===1||h===1)&&l>1e3,v=u[2]%2!=0&&!!c.isPacked;if(p||!q().getBool("WEBGL_LAZILY_UNPACK")||!q().getBool("WEBGL_PACK_BINARY_OPERATIONS")||!v){var m=d?u[0]*u[1]*u[2]:u[0]*u[2]*u[3],g=this.reshape(t,[1,m,o.inChannels]),y=this.reshape(r,[1,o.inChannels,o.outChannels]);return this.reshape(this.fusedBatchMatMul({a:g,b:y,transposeA:!1,transposeB:!1,bias:i,activation:a,preluActivationWeights:s}),o.outShape)}var x=d?u[0]*u[1]*(u[2]+1):u[0]*u[2]*(u[3]+1),b={dataId:t.dataId,shape:[1,x,o.inChannels],dtype:t.dtype},w=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,I(Ui(c.shape,b.shape),(function(){return"packed reshape "+c.shape+" to "+b.shape+" isn't free"}));var _=this.reshape(r,[1,o.inChannels,o.outChannels]),A=this.fusedBatchMatMul({a:b,b:_,transposeA:!1,transposeB:!1,bias:i,activation:a,preluActivationWeights:s}),R=this.texData.get(A.dataId);return I(R.isPacked,(function(){return"batchMatMul result is expected to be packed"})),c.shape=w,R.shape=o.outShape,P.makeTensorFromDataId(A.dataId,o.outShape,A.dtype)},n.prototype.conv2dWithIm2Row=function(t,r,o,i,a,s){var u=o.filterWidth,c=o.filterHeight,l=o.inChannels,f=o.outWidth,h=o.outHeight,d=o.dataFormat==="channelsLast",p=u*c*l,v=h*f,m=[p,v],g=t.squeeze([0]),y=r.reshape([1,p,-1]),x=new mw(m,g.shape,o),b=this.compileAndRun(x,[g]).reshape([1,m[0],m[1]]),w=i!=null,_=s!=null,A=a?ji(a,!0):null,R=new js(b.shape,[1,v,o.outChannels],!0,!1,w,A,_),E=[b,y];i&&E.push(i),_&&E.push(s);var S=this.compileAndRun(R,E);return d?S.reshape([1,h,f,o.outChannels]):S.reshape([1,o.outChannels,h,f])},n.prototype.fusedConv2d=function(t){var r=t.input,o=t.filter,i=t.convInfo,a=t.bias,s=t.activation,u=t.preluActivationWeights;if(i.filterHeight===1&&i.filterWidth===1&&i.dilationHeight===1&&i.dilationWidth===1&&i.strideHeight===1&&i.strideWidth===1&&(i.padInfo.type==="SAME"||i.padInfo.type==="VALID"))return this.conv2dByMatMul(r,o,i,a,s,u);if(q().getBool("WEBGL_CONV_IM2COL")&&r.shape[0]===1)return this.conv2dWithIm2Row(r,o,i,a,s,u);var c=a!=null,l=u!=null,f=s?ji(s,!1):null,h=new Pf(i,c,f,l),d=[r,o];return a&&d.push(a),u&&d.push(u),this.compileAndRun(h,d)},n.prototype.conv2d=function(t,r,o){if(o.filterHeight===1&&o.filterWidth===1&&o.dilationHeight===1&&o.dilationWidth===1&&o.strideHeight===1&&o.strideWidth===1&&(o.padInfo.type==="SAME"||o.padInfo.type==="VALID"))return this.conv2dByMatMul(t,r,o);if(q().getBool("WEBGL_CONV_IM2COL")&&t.shape[0]===1)return this.conv2dWithIm2Row(t,r,o);var i=new Pf(o);return this.compileAndRun(i,[t,r])},n.prototype.conv2dDerInput=function(t,r,o){var i=new N1(o);return this.compileAndRun(i,[t,r])},n.prototype.conv2dDerFilter=function(t,r,o){var i=new T1(o);return this.compileAndRun(i,[t,r])},n.prototype.fusedDepthwiseConv2D=function(t){var r,o=t.input,i=t.filter,a=t.convInfo,s=t.bias,u=t.activation,c=t.preluActivationWeights,l=q().getBool("WEBGL_PACK_DEPTHWISECONV")&&a.strideWidth<=2&&a.outChannels/a.inChannels==1,f=u?ji(u,l):null,h=[o,i],d=s!=null,p=c!=null;return d&&h.push(s),p&&h.push(c),l?(r=new Of(a,d,f,p),this.compileAndRun(r,h)):(r=new Mf(a,d,f,p),this.compileAndRun(r,h))},n.prototype.depthwiseConv2D=function(t,r,o){var i;return q().getBool("WEBGL_PACK_DEPTHWISECONV")&&o.strideWidth<=2&&o.outChannels/o.inChannels==1?(i=new Of(o),this.compileAndRun(i,[t,r])):(i=new Mf(o),this.compileAndRun(i,[t,r]))},n.prototype.depthwiseConv2DDerInput=function(t,r,o){var i=new O1(o);return this.compileAndRun(i,[t,r])},n.prototype.depthwiseConv2DDerFilter=function(t,r,o){var i=new M1(o);return this.compileAndRun(i,[t,r])},n.prototype.conv3d=function(t,r,o){var i=new B1(o);return this.compileAndRun(i,[t,r])},n.prototype.conv3dDerInput=function(t,r,o){var i=new P1(o);return this.compileAndRun(i,[t,r])},n.prototype.conv3dDerFilter=function(t,r,o){var i=new F1(o);return this.compileAndRun(i,[t,r])},n.prototype.maxPool=function(t,r){var o=new qs(r,"max",!1);return this.compileAndRun(o,[t])},n.prototype.avgPool=function(t,r){var o=new qs(r,"avg",!1);return this.compileAndRun(o,[t],"float32")},n.prototype.maxPoolBackprop=function(t,r,o,i){var a=new qs(i,"max",!0),s=this.compileAndRun(a,[r]),u=new xw(i),c=this.compileAndRun(u,[t,s],r.dtype);return s.dispose(),c},n.prototype.avgPoolBackprop=function(t,r,o){var i=new x1(o);return this.compileAndRun(i,[t],r.dtype)},n.prototype.cast=function(t,r){return Dp(t,r,this)},n.prototype.unstack=function(t,r){for(var o=t.shape[r],i=new Array(t.rank-1),a=0,s=0;s<t.rank;s++)s!==r&&(i[a++]=t.shape[s]);var u=new Array(t.rank).fill(0),c=t.shape.slice();c[r]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[r]=s,l[s]=this.slice(t,u,c).reshape(i);return l},n.prototype.avgPool3d=function(t,r){var o=new Ks(r,"avg",!1);return this.compileAndRun(o,[t],"float32")},n.prototype.avgPool3dBackprop=function(t,r,o){var i=new w1(o);return this.compileAndRun(i,[t],r.dtype)},n.prototype.maxPool3d=function(t,r){var o=new Ks(r,"max",!1);return this.compileAndRun(o,[t],"float32")},n.prototype.maxPool3dBackprop=function(t,r,o,i){var a=new Ks(i,"max",!0),s=this.compileAndRun(a,[r]),u=new ww(i),c=this.compileAndRun(u,[t,s],r.dtype);return s.dispose(),c},n.prototype.reshape=function(t,r){var o=this.texData.get(t.dataId);if(o.isPacked&&!Ui(t.shape,r)&&(o.texture===null||!Ui(o.shape,r))){var i=this.packedReshape(t,r);return P.makeTensorFromDataId(i.dataId,i.shape,i.dtype)}return zu(t,r)},n.prototype.resizeBilinear=function(t,r,o,i){var a=q().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new Tw(t.shape,r,o,i):new Dw(t.shape,r,o,i);return this.compileAndRun(a,[t],"float32")},n.prototype.resizeBilinearBackprop=function(t,r,o){var i=new kw(t,r,o);return this.compileAndRun(i,[t])},n.prototype.resizeNearestNeighbor=function(t,r,o,i){var a=new Fw(t.shape,r,o,i);return this.compileAndRun(a,[t])},n.prototype.resizeNearestNeighborBackprop=function(t,r,o){var i=new Nw(t,r,o);return this.compileAndRun(i,[t])},n.prototype.multinomial=function(t,r,o,i){var a=r?t:nr(t),s=a.shape[0],u=a.shape[1],c=new _w(s,u,o),l=c.getCustomSetupFunc(i);return this.compileAndRun(c,[a],"int32",l)},n.prototype.oneHot=function(t,r,o,i){var a=new Cw(t.size,r,o,i);return this.compileAndRun(a,[t])},n.prototype.diag=function(t){var r=new G1(t.size);return this.compileAndRun(r,[t])},n.prototype.nonMaxSuppression=function(t,r,o,i,a){return ba("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"),Sc(t.dataSync(),r.dataSync(),o,i,a)},n.prototype.cropAndResize=function(t,r,o,i,a,s){var u=new L1(t.shape,r.shape,i,a,s);return this.compileAndRun(u,[t,r,o],"float32")},n.prototype.depthToSpace=function(t,r,o){I(r>1,(function(){return"blockSize should be > 1 for depthToSpace, but was: "+r}));var i=t.shape[0],a=o==="NHWC"?t.shape[1]:t.shape[2],s=o==="NHWC"?t.shape[2]:t.shape[3],u=o==="NHWC"?t.shape[3]:t.shape[1],c=a*r,l=s*r,f=u/(r*r),h=new z1(o==="NHWC"?[i,c,l,f]:[i,f,c,l],r,o);return this.compileAndRun(h,[t])},n.prototype.split=function(t,r,o){return Fp(t,r,o)},n.prototype.scatterND=function(t,r,o){var i=Ra(0,t,o),a=i.sliceRank,s=i.numUpdates,u=i.sliceSize,c=i.strides,l=i.outputSize,f=[l/u,u],h=t.reshape([s,a]),d=r.reshape([s,u]);if(l===0)return zu(bt([]),o);var p=ae(0),v=new Vf(s,a,h.rank,d.rank,c,f);return this.compileAndRun(v,[d,h,p]).reshape(o)},n.prototype.sparseToDense=function(t,r,o,i){var a=Ra(0,t,o),s=a.sliceRank,u=a.numUpdates,c=a.strides,l=a.outputSize,f=new Vf(u,s,t.rank,r.rank,c,[l,1]);return this.compileAndRun(f,[r,t,i]).reshape(o)},n.prototype.fft=function(t){return this.fftImpl(t,!1)},n.prototype.ifft=function(t){return this.fftImpl(t,!0)},n.prototype.fftImpl=function(t,r){var o=this.texData.get(t.dataId),i=new Lf($1,t.shape,r),a=new Lf(X1,t.shape,r),s=[this.makeComplexComponentTensorInfo(t,o.complexTensors.real),this.makeComplexComponentTensorInfo(t,o.complexTensors.imag)],u=this.compileAndRun(i,s),c=this.compileAndRun(a,s),l=this.complex(u,c).as2D(t.shape[0],t.shape[1]);return u.dispose(),c.dispose(),l},n.prototype.gatherND=function(t,r){var o=r.shape,i=o[o.length-1],a=Cp(t,r),s=a[0],u=a[1],c=a[2],l=a[3],f=r.reshape([u,i]),h=t.reshape([t.size/c,c]),d=new Q1(i,l,[u,c]);return this.compileAndRun(d,[h,f]).reshape(s)},n.prototype.fill=function(t,r,o){if((o=o||Ei(r))==="string"){var i=va(o,be(t));return i.fill(r),P.makeTensor(i,t,o,this)}var a=new Y1(t,r),s=a.getCustomSetupFunc(r);return this.compileAndRun(a,[],o,s)},n.prototype.onesLike=function(t){if(t.dtype==="string")throw new Error("onesLike is not supported under string dtype");return this.fill(t.shape,1,t.dtype)},n.prototype.zerosLike=function(t){return this.fill(t.shape,t.dtype==="string"?"":0,t.dtype)},n.prototype.linspace=function(t,r,o){return Tp(t,r,o)},n.prototype.makeTensorInfo=function(t,r){var o=this.write(null,t,r);return this.texData.get(o).usage=null,{dataId:o,shape:t,dtype:r}},n.prototype.makeOutput=function(t,r){var o=this.makeTensorInfo(t,r).dataId;return P.makeTensorFromDataId(o,t,r,this)},n.prototype.unpackTensor=function(t){var r=new n2(t.shape);return this.runWebGLProgram(r,[t],t.dtype)},n.prototype.packTensor=function(t){var r=new Ew(t.shape);return this.runWebGLProgram(r,[t],t.dtype,null,!0)},n.prototype.packedReshape=function(t,r){var o=[ga(t.shape)].concat(ya(t.shape)),i={dtype:t.dtype,shape:o,dataId:t.dataId},a=[ga(r)].concat(ya(r)),s=new Aw(a,o),u=this.runWebGLProgram(s,[i],t.dtype,null,!0);return{dataId:u.dataId,shape:r,dtype:u.dtype}},n.prototype.decode=function(t){var r,o=this.texData.get(t),i=o.isPacked,a=o.shape,s=o.dtype,u=Us(a);return r=i?new U1(u):new V1(u),{dtype:s,shape:a,dataId:this.runWebGLProgram(r,[{shape:u,dtype:s,dataId:t}],s,null,!0).dataId}},n.prototype.runWebGLProgram=function(t,r,o,i,a){var s=this;a===void 0&&(a=!1);var u=this.makeTensorInfo(t.outputShape,o),c=this.texData.get(u.dataId);if(t.packedOutput&&(c.isPacked=!0),t.outPackingScheme===pi.DENSE){var l=ti(t.outputShape);c.texShape=l.map((function(x){return 2*x}))}if(t.outTexUsage!=null&&(c.usage=t.outTexUsage),be(u.shape)===0)return c.values=hi(u.dtype,0),u;var f=[],h=r.map((function(x){if(x.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");var b=s.texData.get(x.dataId);if(b.texture==null){if(!t.packedInputs&&be(x.shape)<=q().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:x.shape,texData:null,isUniform:!0,uniformValues:b.values};t.packedInputs&&(b.isPacked=!0,b.shape=x.shape)}else if(!!b.isPacked!=!!t.packedInputs)x=b.isPacked?s.unpackTensor(x):s.packTensor(x),f.push(x),b=s.texData.get(x.dataId);else if(b.isPacked&&!Ui(b.shape,x.shape)){var w=x,_=x.shape;x.shape=b.shape,x=s.packedReshape(x,_),f.push(x),b=s.texData.get(x.dataId),w.shape=_}return s.uploadToGPU(x.dataId),{shape:x.shape,texData:b,isUniform:!1}}));this.uploadToGPU(u.dataId);var d,p={shape:u.shape,texData:c,isUniform:!1},v=(function(x,b,w){var _="";b.concat(w).forEach((function(E){var S=E.texData!=null&&E.texData.slice!=null&&E.texData.slice.flatOffset>0,F=E.isUniform?"uniform":E.texData.texShape;_+=E.shape+"_"+F+"_"+S}));var A=x.userCode,R=x.constructor.name;return R+="_"+_+"_"+A})(t,h,p),m=this.getAndSaveBinary(v,(function(){return(function(x,b,w,_){var A=b.userCode,R=w.map((function(B,$){var J={logicalShape:B.shape,texShape:B.isUniform?null:B.texData.texShape,isUniform:B.isUniform,isPacked:!B.isUniform&&B.texData.isPacked,flatOffset:null};return B.texData!=null&&B.texData.slice!=null&&B.texData.slice.flatOffset>0&&(J.flatOffset=B.texData.slice.flatOffset),{name:b.variableNames[$],shapeInfo:J}})),E=R.map((function(B){return B.shapeInfo})),S={logicalShape:_.shape,texShape:_.texData.texShape,isUniform:!1,isPacked:_.texData.isPacked,flatOffset:null},F=p1(R,S,A,b.packedInputs),N=x.createProgram(F),U=null,z=x.getUniformLocation(N,"NAN",!1);q().getNumber("WEBGL_VERSION")===1&&(U=x.getUniformLocation(N,"INFINITY",!1));for(var G={},H=0;H<b.variableNames.length;H++){var O=b.variableNames[H];G[O]=x.getUniformLocation(N,O,!1),G["offset"+O]=x.getUniformLocation(N,"offset"+O,!1)}return{program:b,source:F,webGLProgram:N,uniformLocations:G,inShapeInfos:E,outShapeInfo:S,infLoc:U,nanLoc:z}})(s.gpgpu,t,h,p)})),g=this.activeTimers!=null;if(g&&(d=this.startTimer()),(function(x,b,w,_,A){Wf(b.inShapeInfos,w),Wf([b.outShapeInfo],[_]);var R=_.texData.texture,E=_.texData.texShape;_.texData.isPacked?x.setOutputPackedMatrixTexture(R,E[0],E[1]):x.setOutputMatrixTexture(R,E[0],E[1]),x.setProgram(b.webGLProgram),q().getNumber("WEBGL_VERSION")===1&&b.infLoc!==null&&x.gl.uniform1f(b.infLoc,1/0),b.nanLoc!==null&&x.gl.uniform1f(b.nanLoc,NaN),w.forEach((function(S,F){var N=b.program.variableNames[F],U=b.uniformLocations[N],z=b.uniformLocations["offset"+N];if(U!=null)if(S.isUniform)if(be(S.shape)<2)x.gl.uniform1f(U,S.uniformValues[0]);else{var G=S.uniformValues;G instanceof Float32Array||(G=new Float32Array(G)),x.gl.uniform1fv(U,G)}else S.texData.slice!=null&&z!=null&&x.gl.uniform1i(z,S.texData.slice.flatOffset),x.setInputMatrixTexture(S.texData.texture,U,F)})),A?.(x,b.webGLProgram),x.executeProgram()})(this.gpgpu,m,h,p,i),f.forEach((function(x){return s.disposeData(x.dataId)})),g&&(d=this.endTimer(d),this.activeTimers.push({name:t.constructor.name,query:this.getQueryTime(d)})),!q().getBool("WEBGL_LAZILY_UNPACK")&&c.isPacked&&a===!1){var y=this.unpackTensor(u);return this.disposeData(u.dataId),y}return u},n.prototype.compileAndRun=function(t,r,o,i,a){a===void 0&&(a=!1),o=o||r[0].dtype;var s=this.runWebGLProgram(t,r,o,i,a);return P.makeTensorFromDataId(s.dataId,s.shape,s.dtype)},n.prototype.getAndSaveBinary=function(t,r){return t in this.binaryCache||(this.binaryCache[t]=r()),this.binaryCache[t]},n.prototype.getTextureManager=function(){return this.textureManager},n.prototype.dispose=function(){var t=this;this.disposed||(q().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach((function(r){t.gpgpu.deleteProgram(t.binaryCache[r].webGLProgram),delete t.binaryCache[r]})),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)},n.prototype.floatPrecision=function(){var t=this;return this.floatPrecisionValue==null&&(this.floatPrecisionValue=fe((function(){if(!q().get("WEBGL_RENDER_FLOAT32_ENABLED")){var r=q().getBool("DEBUG");q().set("DEBUG",!1);var o=t.abs(ae(1e-8)).dataSync()[0];if(q().set("DEBUG",r),o>0)return 32}return 16}))),this.floatPrecisionValue},n.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},n.prototype.uploadToGPU=function(t){var r,o=this.texData.get(t),i=o.shape,a=o.dtype,s=o.values,u=o.texture,c=o.usage,l=o.isPacked;if(u==null){var f,h=this.activeTimers!=null;h&&(f=Cn());var d=o.texShape;if(d==null&&(d=lx(i,l),o.texShape=d),s!=null){var p=Us(i),v=void 0,m=d[1],g=d[0],y=s instanceof Uint8Array;l?(m=(r=Si(d[0],d[1]))[0],g=r[1],v=new K1(p,[g,m],y)):v=new q1(p,[g,m],y);var x=this.makeTensorInfo([g,m],a);this.texData.get(x.dataId).usage=y?qt.PIXELS:qt.UPLOAD,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(x.dataId),m,g,s);var b=this.runWebGLProgram(v,[x],a,null,!0),w=this.texData.get(b.dataId);o.texture=w.texture,o.texShape=w.texShape,o.isPacked=w.isPacked,o.usage=w.usage,this.disposeData(x.dataId),this.texData.delete(b.dataId),o.values=null,h&&(this.uploadWaitMs+=Cn()-f)}else{var _=this.acquireTexture(d,c,a,l);o.texture=_}}},n.prototype.convertAndCacheOnCPU=function(t,r){var o=this.texData.get(t),i=o.dtype;return this.releaseGPUData(t),r!=null&&(o.values=(function(a,s){if(s==="float32"||s==="complex64")return a;if(s==="int32"||s==="bool"){for(var u=s==="int32"?new Int32Array(a.length):new Uint8Array(a.length),c=0;c<u.length;++c)u[c]=Math.round(a[c]);return u}throw new Error("Unknown dtype "+s)})(r,i)),o.values},n.prototype.acquireTexture=function(t,r,o,i){if(this.numBytesInGPU+=this.computeBytes(t,o),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){var a=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn("High memory usage in GPU: "+a+" MB, most likely due to a memory leak")}return this.textureManager.acquireTexture(t,r,i)},n.prototype.computeBytes=function(t,r){return t[0]*t[1]*ip(r)},n})(Ap);hp()&&P.registerBackend("webgl",(function(){return new o2}),2);var i2=T({square_:function(e){var n=C(e,"x","square"),t=[n];return P.runKernelFunc((function(r,o){return o([n]),r.square(n)}),{x:n},null,"Square",{},t,[])}}),mi="SquaredDifference",Kp=T({squaredDifference_:function(e,n){var t,r=C(e,"a","squaredDifference"),o=C(n,"b","squaredDifference");t=Je(r,o),r=t[0],o=t[1],Oe(r.shape,o.shape);var i={a:r,b:o},a=[r,o];return P.runKernelFunc((function(s,u){var c=s.squaredDifference(r,o);return u([r,o]),c}),i,(function(s,u){var c=u[0],l=u[1],f=ae(2);return{a:function(){return s.mul(c.sub(l).mul(f))},b:function(){return s.mul(l.sub(c).mul(f))}}}),mi,{},a,[])}}),a2=T({abs_:function(e){var n=C(e,"x","abs");return n.dtype==="complex64"?P.runKernelFunc((function(t){return t.complexAbs(n)}),{$x:n}):P.runKernelFunc((function(t,r){var o=t.abs(n);return r([n]),o}),{x:n},(function(t,r){var o=r[0];return{x:function(){return t.mul(o.toFloat().step(-1))}}}),"Abs")}}),s2=T({acos_:function(e){var n=C(e,"x","acos");return P.runKernelFunc((function(t,r){var o=t.acos(n);return r([n]),o}),{$x:n},(function(t,r){var o=r[0];return{$x:function(){return t.divStrict(ae(1).sub(o.toFloat().square()).sqrt()).neg()}}}))}}),u2=T({acosh_:function(e){var n=C(e,"x","acosh");return P.runKernelFunc((function(t,r){var o=t.acosh(n);return r([n]),o}),{$x:n},(function(t,r){var o=r[0];return{$x:function(){return t.divStrict(o.toFloat().square().sub(1).sqrt())}}}))}}),c2=T({asin_:function(e){var n=C(e,"x","asin");return P.runKernelFunc((function(t,r){var o=t.asin(n);return r([n]),o}),{$x:n},(function(t,r){var o=r[0];return{$x:function(){return t.divStrict(ae(1).sub(o.toFloat().square()).sqrt())}}}))}}),l2=T({asinh_:function(e){var n=C(e,"x","asinh");return P.runKernelFunc((function(t,r){var o=t.asinh(n);return r([n]),o}),{$x:n},(function(t,r){var o=r[0];return{$x:function(){return t.divStrict(ae(1).add(o.toFloat().square()).sqrt())}}}))}}),f2=T({atan_:function(e){var n=C(e,"x","atan");return P.runKernelFunc((function(t,r){var o=t.atan(n);return r([n]),o}),{$x:n},(function(t,r){var o=r[0];return{$x:function(){return t.div(o.toFloat().square().add(1))}}}))}}),h2=T({atanh_:function(e){var n=C(e,"x","atanh");return P.runKernelFunc((function(t,r){var o=t.atanh(n);return r([n]),o}),{$x:n},(function(t,r){var o=r[0];return{$x:function(){return t.div(ae(1).sub(o.toFloat().square()))}}}))}}),d2=T({ceil_:function(e){var n=C(e,"x","ceil");return P.runKernelFunc((function(t){return t.ceil(n)}),{$x:n},(function(t){return{$x:function(){return Be(t)}}}))}}),Nc=T({clipByValue_:function(e,n,t){var r=C(e,"x","clipByValue");I(n<=t,(function(){return"Error in clip: min ("+n+") must be less than or equal to max ("+t+")."}));var o=[r],i={min:n,max:t};return P.runKernelFunc((function(a,s){var u=a.clip(r,n,t);return s([r]),u}),{x:r},(function(a,s){var u=s[0];return{x:function(){return a.where(u.greaterEqual(n).logicalAnd(u.lessEqual(t)),Be(a))}}}),"ClipByValue",i,o)}}),p2=T({cos_:function(e){var n=C(e,"x","cos"),t=[n];return P.runKernelFunc((function(r,o){var i=r.cos(n);return o([n]),i}),{x:n},(function(r,o){var i=o[0];return{x:function(){return i.toFloat().sin().neg().mul(r)}}}),"Cos",{},t)}}),v2=T({cosh_:function(e){var n=C(e,"x","cosh");return P.runKernelFunc((function(t,r){var o=t.cosh(n);return r([n]),o}),{$x:n},(function(t,r){var o=r[0];return{$x:function(){return o.toFloat().sinh().mulStrict(t)}}}))}}),m2=T({erf_:function(e){var n=C(e,"x","erf");return I(n.dtype==="int32"||n.dtype==="float32",(function(){return"Input dtype must be `int32` or `float32`."})),n.dtype==="int32"&&(n=n.toFloat()),P.runKernelFunc((function(t,r){var o=t.erf(n);return r([n]),o}),{$x:n},(function(t,r){var o=r[0];return{$x:function(){return t.mul(o.square().neg().exp().mul(2/Math.sqrt(Math.PI)))}}}))}}),Hu=T({exp_:function(e){var n=C(e,"x","exp");return P.runKernelFunc((function(t,r){var o=t.exp(n);return r([o]),o}),{x:n},(function(t,r){return{x:function(){return t.mulStrict(r[0])}}}),"Exp",{},[],[!0])}}),g2=T({expm1_:function(e){var n=C(e,"x","expm1");return P.runKernelFunc((function(t,r){var o=t.expm1(n);return r([n]),o}),{$x:n},(function(t,r){var o=r[0];return{$x:function(){return t.mul(o.exp())}}}))}}),y2=T({floor_:function(e){var n=C(e,"x","floor");return P.runKernelFunc((function(t){return t.floor(n)}),{$x:n},(function(t){return{$x:function(){return Be(t)}}}))}}),b2=T({log_:function(e){var n=C(e,"x","log"),t=[n];return P.runKernelFunc((function(r,o){var i=r.log(n);return o([n]),i}),{x:n},(function(r,o){var i=o[0];return{x:function(){return r.div(i.toFloat())}}}),"Log",{},t)}}),x2=T({log1p_:function(e){var n=C(e,"x","log1p");return P.runKernelFunc((function(t,r){var o=t.log1p(n);return r([n]),o}),{$x:n},(function(t,r){var o=r[0];return{$x:function(){return t.div(o.add(1))}}}))}}),w2=T({logSigmoid_:function(e){var n=C(e,"x","logSigmoid");return P.runKernelFunc((function(t,r){var o=t.softplus(n.neg()).neg();return r([n]),o}),{$x:n},(function(t,r){var o=r[0];return{$x:function(){return t.mul(o.neg().sigmoid())}}}))}}),ka=T({neg_:function(e){var n=C(e,"x","neg"),t=[n];return P.runKernelFunc((function(r){return r.neg(n)}),{x:n},(function(r){return{x:function(){return r.neg()}}}),"Neg",{},t)}}),_2=T({reciprocal_:function(e){var n=C(e,"x","reciprocal");return P.runKernelFunc((function(t,r){var o=t.reciprocal(n);return r([n]),o}),{$x:n},(function(t,r){var o=r[0];return{$x:function(){return t.div(o.square().neg())}}}))}}),C2=T({round_:function(e){var n=C(e,"x","round");return P.runKernelFunc((function(t){return t.round(n)}),{$x:n},(function(t){return{$x:function(){return Be(t)}}}))}}),$p=T({rsqrt_:function(e){var n=C(e,"x","rsqrt"),t=[n];return P.runKernelFunc((function(r,o){var i=r.rsqrt(n);return o([n]),i}),{x:n},(function(r,o){var i=o[0];return{x:function(){return r.div(i.pow(1.5).mul(2)).neg()}}}),"Rsqrt",{},t)}}),Xp=T({sigmoid_:function(e){var n=C(e,"x","sigmoid");return P.runKernelFunc((function(t,r){var o=t.sigmoid(n);return r([o]),o}),{x:n},(function(t,r){var o=r[0];return{x:function(){return t.mul(o.mul(ae(1).sub(o)))}}}),"Sigmoid")}}),E2=T({sign_:function(e){var n=C(e,"x","sign");return P.runKernelFunc((function(t){return t.sign(n)}),{$x:n},(function(t){return{$x:function(){return Be(t)}}}))}}),R2=T({isNaN_:function(e){var n=C(e,"x","isNaN");return P.runKernelFunc((function(t){return t.isNaN(n)}),{$x:n},(function(t){return{$x:function(){return Be(t)}}}))}}),S2=T({isInf_:function(e){var n=C(e,"x","isInf");return P.runKernelFunc((function(t){return t.isInf(n)}),{$x:n},(function(t){return{$x:function(){return Be(t)}}}))}}),I2=T({isFinite_:function(e){var n=C(e,"x","isFinite");return P.runKernelFunc((function(t){return t.isFinite(n)}),{$x:n},(function(t){return{$x:function(){return Be(t)}}}))}}),A2=T({sin_:function(e){var n=C(e,"x","sin"),t=[n];return P.runKernelFunc((function(r,o){var i=r.sin(n);return o([n]),i}),{x:n},(function(r,o){var i=o[0];return{x:function(){return i.toFloat().cos().mul(r)}}}),"Sin",{},t)}}),k2=T({sinh_:function(e){var n=C(e,"x","sinh");return P.runKernelFunc((function(t,r){var o=t.sinh(n);return r([n]),o}),{$x:n},(function(t,r){var o=r[0];return{$x:function(){return o.toFloat().cosh().mulStrict(t)}}}))}}),D2=T({softplus_:function(e){var n=C(e,"x","softplus");return P.runKernelFunc((function(t,r){var o=t.softplus(n);return r([n]),o}),{$x:n},(function(t,r){var o=r[0];return{$x:function(){return t.mul(o.sigmoid())}}}))}}),T2=T({sqrt_:function(e){var n=C(e,"x","sqrt");return P.runKernelFunc((function(t,r){var o=t.sqrt(n);return r([n]),o}),{$x:n},(function(t,r){var o=r[0];return{$x:function(){return t.div(o.toFloat().sqrt().mul(2))}}}))}}),N2=T({step_:function(e,n){n===void 0&&(n=0);var t=C(e,"x","step");return P.runKernelFunc((function(r){return r.step(t,n)}),{$x:t},(function(r){return{$x:function(){return Be(r)}}}))}}),F2=T({tan_:function(e){var n=C(e,"x","tan");return P.runKernelFunc((function(t,r){var o=t.tan(n);return r([n]),o}),{$x:n},(function(t,r){var o=r[0];return{$x:function(){return t.div(o.cos().square())}}}))}}),P2=T({tanh_:function(e){var n=C(e,"x","tanh");return P.runKernelFunc((function(t,r){var o=t.tanh(n);return r([o]),o}),{x:n},(function(t,r){var o=r[0];return{x:function(){return ae(1).sub(o.square()).mulStrict(t)}}}),"Tanh",{},null,[!0])}});function Yp(e,n,t,r,o,i){var a,s,u=C(e,"x","batchNorm"),c=C(n,"mean","batchNorm"),l=C(t,"variance","batchNorm");return o!=null&&(a=C(o,"scale","batchNorm")),r!=null&&(s=C(r,"offset","batchNorm")),I(u.rank===2,(function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."})),I(c.rank===2||c.rank===1,(function(){return"Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank "+c.rank+"."})),I(l.rank===2||l.rank===1,(function(){return"Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank "+l.rank+"."})),a!=null&&I(a.rank===2||a.rank===1,(function(){return"Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank "+a.rank+"."})),s!=null&&I(s.rank===2||s.rank===1,(function(){return"Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank "+s.rank+"."})),Ai(u,c,l,s,a,i)}function Jp(e,n,t,r,o,i){var a,s,u=C(e,"x","batchNorm"),c=C(n,"mean","batchNorm"),l=C(t,"variance","batchNorm");return o!=null&&(a=C(o,"scale","batchNorm")),r!=null&&(s=C(r,"offset","batchNorm")),I(u.rank===3,(function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."})),I(c.rank===3||c.rank===1,(function(){return"Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank "+c.rank+"."})),I(l.rank===3||l.rank===1,(function(){return"Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank "+l.rank+"."})),a!=null&&I(a.rank===3||a.rank===1,(function(){return"Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank "+a.rank+"."})),s!=null&&I(s.rank===3||s.rank===1,(function(){return"Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank "+s.rank+"."})),Ai(u,c,l,s,a,i)}function Qp(e,n,t,r,o,i){var a,s,u=C(e,"x","batchNorm"),c=C(n,"mean","batchNorm"),l=C(t,"variance","batchNorm");return o!=null&&(a=C(o,"scale","batchNorm")),r!=null&&(s=C(r,"offset","batchNorm")),I(u.rank===4,(function(){return"Error in batchNorm4D: x must be rank 4 but got rank "+u.rank+"."})),I(c.rank===4||c.rank===1,(function(){return"Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank "+c.rank+"."})),I(l.rank===4||l.rank===1,(function(){return"Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank "+l.rank+"."})),a!=null&&I(a.rank===4||a.rank===1,(function(){return"Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank "+a.rank+"."})),s!=null&&I(s.rank===4||s.rank===1,(function(){return"Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank "+s.rank+"."})),Ai(u,c,l,s,a,i)}function Ai(e,n,t,r,o,i){i==null&&(i=.001);var a,s,u,c=C(e,"x","batchNorm"),l=C(n,"mean","batchNorm"),f=C(t,"variance","batchNorm");o!=null&&(a=C(o,"scale","batchNorm")),r!=null&&(s=C(r,"offset","batchNorm")),I(l.rank===f.rank,(function(){return"Batch normalization gradient requires mean and variance to have equal ranks."})),I(s==null||l.rank===s.rank,(function(){return"Batch normalization gradient requires mean and offset to have equal ranks."})),I(a==null||l.rank===a.rank,(function(){return"Batch normalization gradient requires mean and scale to have equal ranks."})),u=c.rank===0||c.rank===1?c.as4D(1,1,1,c.size):c.rank===2?c.as4D(1,1,c.shape[0],c.shape[1]):c.rank===3?c.as4D(1,c.shape[0],c.shape[1],c.shape[2]):c;var h=[c,l,f,a];return P.runKernelFunc((function(d,p){var v=d.batchNormalization(u,qi(l),qi(f),i,qi(a),qi(s));return p([c,l,f,a]),v}),{x:c,mean:l,variance:f,scale:a,offset:s},(function(d,p){var v=p,m=v[0],g=v[1],y=v[2],x=v[3],b=x??ae(1),w=ct(g.shape,u.shape),_=[];if(g.rank===1){for(var A=0;A<u.shape.length-1;++A)_.push(u.shape[A]);_.push(1)}var R=m.sub(g),E=d.mul(b),S=$p(y.add(ae(i))),F=S.mul(S).mul(S).mul(ae(-.5));return{x:function(){return g.rank===1?d.mul(yo(S.as4D(1,1,1,g.shape[0]),_)).mul(b).reshape(m.shape):d.mul(S).mul(b).reshape(m.shape)},mean:function(){var N=S.mul(ae(-1)).mul(E);return g.rank===1&&(N=N.sum(w)),N.reshape(g.shape)},variance:function(){var N=F.mul(R).mul(E);return g.rank===1&&(N=N.sum(w)),N.reshape(g.shape)},scale:function(){var N=R.mul(S),U=d.mul(N);return g.rank===1&&(U=U.sum(w)),U.reshape(g.shape)},offset:function(){var N=d;return g.rank===1&&(N=N.sum(w)),N.reshape(g.shape)}}}),"BatchNormalization",{varianceEpsilon:i},h).reshape(c.shape)}function qi(e){return e==null?null:e.rank===0?e.as1D():e.rank===1?e:e.rank===2?e.as4D(1,1,e.shape[0],e.shape[1]):e.rank===3?e.as4D(1,e.shape[0],e.shape[1],e.shape[2]):e}function ns(){dp("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon")}var M2=T({batchNormalization2d_:function(e,n,t,r,o,i){return r===void 0&&(r=.001),ns(),Yp(e,n,t,i,o,r)}}),O2=T({batchNormalization3d_:function(e,n,t,r,o,i){return r===void 0&&(r=.001),ns(),Jp(e,n,t,i,o,r)}}),B2=T({batchNormalization4d_:function(e,n,t,r,o,i){return r===void 0&&(r=.001),ns(),Qp(e,n,t,i,o,r)}}),L2=T({batchNormalization_:function(e,n,t,r,o,i){return r===void 0&&(r=.001),ns(),Ai(e,n,t,i,o,r)}}),Zp=T({batchNorm_:Ai}),W2=T({batchNorm2d_:Yp}),V2=T({batchNorm3d_:Jp}),U2=T({batchNorm4d_:Qp}),rs=T({logicalAnd_:function(e,n){var t=C(e,"a","logicalAnd","bool"),r=C(n,"b","logicalAnd","bool");return Oe(t.shape,r.shape),P.runKernelFunc((function(o){return o.logicalAnd(t,r)}),{a:t,b:r},null,"LogicalAnd")}}),z2=T({logicalNot_:function(e){var n=C(e,"x","logicalNot","bool");return P.runKernelFunc((function(t){return t.logicalNot(n)}),{$x:n})}}),ev=T({logicalOr_:function(e,n){var t=C(e,"a","logicalOr","bool"),r=C(n,"b","logicalOr","bool");return Oe(t.shape,r.shape),P.runKernelFunc((function(o){return o.logicalOr(t,r)}),{$a:t,$b:r})}}),G2=T({logicalXor_:function(e,n){var t=C(e,"a","logicalXor","bool"),r=C(n,"b","logicalXor","bool");return Oe(t.shape,r.shape),ev(e,n).logicalAnd(rs(e,n).logicalNot())}}),qr=T({where_:function(e,n,t){var r=C(n,"a","where"),o=C(t,"b","where"),i=C(e,"condition","where","bool");return Ge(r.shape,o.shape,"Error in where: "),i.rank===1?I(i.shape[0]===r.shape[0],(function(){return"The first dimension of `a` must match the size of `condition`."})):Ge(i.shape,o.shape,"Error in where: "),P.runKernelFunc((function(a,s){var u=a.select(i,r,o);return s([i]),u}),{$condition:i,$a:r,$b:o},(function(a,s){var u=s[0];return{$condition:function(){return Be(u).toFloat()},$a:function(){return a.mul(u.cast(a.dtype))},$b:function(){return a.mul(u.logicalNot().cast(a.dtype))}}}))}}),tv=function(e){return pe(this,void 0,void 0,(function(){var n,t,r;return ve(this,(function(o){switch(o.label){case 0:return[4,(n=C(e,"condition","whereAsync","bool")).data()];case 1:return t=o.sent(),r=Ac(n.shape,t),e!==n&&n.dispose(),[2,r]}}))}))},Me=T({add_:function(e,n){var t,r=C(e,"a","add"),o=C(n,"b","add");t=Je(r,o),r=t[0],o=t[1];var i=Oe(r.shape,o.shape);return P.runKernelFunc((function(a){return a.add(r,o)}),{a:r,b:o},(function(a){return{a:function(){var s=a,u=ct(r.shape,i);return u.length>0&&(s=s.sum(u)),s.reshape(r.shape)},b:function(){var s=a,u=ct(o.shape,i);return u.length>0&&(s=s.sum(u)),s.reshape(o.shape)}}}),"Add")}}),H2=T({addN_:function(e){I(Array.isArray(e),(function(){return"The argument passed to tf.addN() must be a list of tensors"})),I(e.length>=1,(function(){return"Must pass at least one tensor to tf.addN(), but got "+e.length}));var n=e.map((function(o,i){return C(o,"tensors"+i,"addN")})),t=n[0];n.forEach((function(o){if(o.dtype!==t.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")})),n.forEach((function(o){if(!pt(o.shape,t.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")}));var r=n;return P.runKernelFunc((function(o){return o.addN(n)}),r,(function(o){var i={};return n.forEach((function(a,s){i[s]=function(){return o.clone()}})),i}),"AddN")}}),j2=T({addStrict_:function(e,n){var t=C(e,"a","addStrict"),r=C(n,"b","addStrict");return Ge(t.shape,r.shape,"Error in addStrict: "),t.add(r)}}),q2=T({atan2_:function(e,n){var t,r=C(e,"a","atan2"),o=C(n,"b","atan2");t=Je(r,o),r=t[0],o=t[1];var i=Oe(r.shape,o.shape);return P.runKernelFunc((function(a,s){var u=a.atan2(r,o);return s([r,o]),u}),{$a:r,$b:o},(function(a,s){var u=s[0],c=s[1];return{$a:function(){var l=Me(u.square(),c.square()),f=a.mul(c.div(l)),h=ct(u.shape,i);return h.length>0&&(f=f.sum(h)),f.reshape(u.shape)},$b:function(){var l=Me(u.square(),c.square()),f=ka(a.mul(u.div(l))),h=ct(c.shape,i);return h.length>0&&(f=f.sum(h)),f.reshape(c.shape)}}}))}}),un=T({div_:function(e,n){var t,r=C(e,"a","div"),o=C(n,"b","div");if(t=Je(r,o),r=t[0],o=t[1],r.dtype==="int32"&&o.dtype==="int32")return nv(r,o);var i=Oe(r.shape,o.shape);return P.runKernelFunc((function(a,s){var u=a.realDivide(r,o);return s([r,o]),u}),{a:r,b:o},(function(a,s){var u=s[0],c=s[1];return{a:function(){var l=a.div(c.toFloat()),f=ct(u.shape,i);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=a.mul(u.toFloat()),f=ct(c.shape,i);f.length>0&&(l=l.sum(f).reshape(c.shape));var h=c.square();return l.div(h.toFloat()).neg()}}}),"Div")}}),K2=T({divNoNan_:function(e,n){var t,r=C(e,"a","div"),o=C(n,"b","div");r=(t=Je(r,o))[0],o=t[1];var i=un(r,o),a=Be(i),s=o.equal(a);return qr(s,a,i)}}),$2=T({divStrict_:function(e,n){var t=C(e,"a","div"),r=C(n,"b","div");return Ge(t.shape,r.shape,"Error in divideStrict: "),t.div(r)}}),nv=T({floorDiv_:function(e,n){var t,r=C(e,"a","floorDiv"),o=C(n,"b","floorDiv");t=Je(r,o),r=t[0],o=t[1];var i=Oe(r.shape,o.shape);return P.runKernelFunc((function(a,s){var u=a.floorDiv(r,o);return s([r,o]),u}),{a:r,b:o},(function(a,s){var u=s[0],c=s[1];return{a:function(){var l=a.div(c.toFloat()),f=ct(u.shape,i);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=a.mul(u.toFloat()),f=ct(c.shape,i);f.length>0&&(l=l.sum(f).reshape(c.shape));var h=c.square();return l.div(h.toFloat()).neg()}}}),"FloorDiv")}}),Fc=T({maximum_:function(e,n){var t,r=C(e,"a","maximum"),o=C(n,"b","maximum");return t=Je(r,o),r=t[0],o=t[1],r.dtype==="bool"&&(r=r.toInt(),o=o.toInt()),Oe(r.shape,o.shape),P.runKernelFunc((function(i,a){var s=i.maximum(r,o);return a([r,o]),s}),{a:r,b:o},(function(i,a){var s=a[0],u=a[1];return{a:function(){return i.mul(s.greaterEqual(u).toFloat())},b:function(){return i.mul(s.less(u).toFloat())}}}),"Maximum")}}),X2=T({maximumStrict_:function(e,n){var t=C(e,"a","maximumStrict"),r=C(n,"b","maximumStrict");return Ge(t.shape,r.shape,"Error in maximumStrict: "),t.maximum(r)}}),rv=T({minimum_:function(e,n){var t,r=C(e,"a","minimum"),o=C(n,"b","minimum");return t=Je(r,o),r=t[0],o=t[1],r.dtype==="bool"&&(r=r.toInt(),o=o.toInt()),Oe(r.shape,o.shape),P.runKernelFunc((function(i,a){var s=i.minimum(r,o);return a([r,o]),s}),{a:r,b:o},(function(i,a){var s=a[0],u=a[1];return{a:function(){return i.mul(s.lessEqual(u).toFloat())},b:function(){return i.mul(s.greater(u).toFloat())}}}),"Minimum")}}),Y2=T({minimumStrict_:function(e,n){var t=C(e,"a","minimumStrict"),r=C(n,"b","minimumStrict");return Ge(t.shape,r.shape,"Error in minimumStrict: "),t.minimum(r)}}),J2=T({mod_:function(e,n){var t,r=C(e,"a","mod"),o=C(n,"b","mod");t=Je(r,o),r=t[0],o=t[1];var i=Oe(r.shape,o.shape);return P.runKernelFunc((function(a,s){var u=a.mod(r,o);return s([r,o]),u}),{$a:r,$b:o},(function(a,s){var u=s[0],c=s[1];return{$a:function(){var l=ct(u.shape,i);return l.length>0?a.sum(l).reshape(u.shape):a},$b:function(){var l=a.mul(u.div(c).floor().neg()),f=ct(c.shape,i);return f.length>0?l.sum(f).reshape(c.shape):l}}}))}}),Q2=T({modStrict_:function(e,n){var t=C(e,"a","modStrict"),r=C(n,"b","modStrict");return Ge(t.shape,r.shape,"Error in modStrict: "),t.mod(r)}}),At=T({mul_:function(e,n){var t,r=C(e,"a","mul"),o=C(n,"b","mul");t=Je(r,o),r=t[0],o=t[1];var i=Oe(r.shape,o.shape);return P.runKernelFunc((function(a,s){var u=a.multiply(r,o);return s([r,o]),u}),{a:r,b:o},(function(a,s){var u=s[0],c=s[1];return{a:function(){var l=a.mul(c.toFloat()),f=ct(u.shape,i);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=a.mul(u.toFloat()),f=ct(c.shape,i);return f.length>0?l.sum(f).reshape(c.shape):l}}}),"Mul")}}),Z2=T({mulStrict_:function(e,n){var t=C(e,"a","mul"),r=C(n,"b","mul");return Ge(t.shape,r.shape,"Error in multiplyStrict: "),t.mul(r)}}),Da=T({pow_:function(e,n){var t,r=C(e,"base","pow"),o=C(n,"exp","pow");t=Je(r,o),r=t[0],o=t[1];var i=Oe(r.shape,o.shape),a=[r,o];return P.runKernelFunc((function(s,u){var c=s.pow(r,o);return u([r,o,c]),c}),{a:r,b:o},(function(s,u){var c=u[0],l=u[1],f=u[2];return{a:function(){var h=l.toFloat(),d=s.mul(h.mul(c.pow(h.sub(ae(1))))),p=ct(c.shape,i);return p.length>0&&(d=d.sum(p)),d.reshape(c.shape)},b:function(){var h=c.greater(0),d=c.log().where(h,Be(c)),p=s.mul(f.mul(d)),v=ct(l.shape,i);return v.length>0&&(p=p.sum(v)),p.reshape(l.shape)}}}),"Pow",{},a,[!0])}}),e_=T({powStrict_:function(e,n){return Ge(e.shape,n.shape,"Error in powStrict: "),e.pow(n)}}),t_=T({squaredDifferenceStrict_:function(e,n){var t=C(e,"a","squaredDifferenceStrict"),r=C(n,"b","squaredDifferenceStrict");return Ge(t.shape,r.shape,"Error in squaredDifferenceStrict: "),t.squaredDifference(r)}}),lt=T({sub_:function(e,n){var t,r=C(e,"a","sub"),o=C(n,"b","sub");t=Je(r,o),r=t[0],o=t[1];var i=Oe(r.shape,o.shape);return P.runKernelFunc((function(a){return a.subtract(r,o)}),{a:r,b:o},(function(a){return{a:function(){var s=a,u=ct(r.shape,i);return u.length>0&&(s=s.sum(u)),s.reshape(r.shape)},b:function(){var s=a,u=ct(o.shape,i);return u.length>0&&(s=s.sum(u)),s.neg().reshape(o.shape)}}}),"Sub")}}),n_=T({subStrict_:function(e,n){var t=C(e,"a","subStrict"),r=C(n,"b","subStrict");return Ge(t.shape,r.shape,"Error in subStrict: "),t.sub(r)}}),ov=T({equal_:function(e,n){var t,r=C(e,"a","equal"),o=C(n,"b","equal");return t=Je(r,o),r=t[0],o=t[1],Oe(r.shape,o.shape),P.runKernelFunc((function(i){return i.equal(r,o)}),{$a:r,$b:o})}}),r_=T({equalStrict_:function(e,n){var t=C(e,"a","equalStrict"),r=C(n,"b","equalStrict");return Ge(t.shape,r.shape,"Error in equalStrict: "),t.equal(r)}}),o_=T({greater_:function(e,n){var t,r=C(e,"a","greater"),o=C(n,"b","greater");return t=Je(r,o),r=t[0],o=t[1],Oe(r.shape,o.shape),P.runKernelFunc((function(i){return i.greater(r,o)}),{a:r,b:o},null,"Greater")}}),iv=T({greaterEqual_:function(e,n){var t,r=C(e,"a","greaterEqual"),o=C(n,"b","greaterEqual");return t=Je(r,o),r=t[0],o=t[1],Oe(r.shape,o.shape),P.runKernelFunc((function(i,a){var s=i.greaterEqual(r,o);return a([r,o]),s}),{a:r,b:o},(function(i,a){var s=a[0],u=a[1];return{a:function(){return Be(s)},b:function(){return Be(u)}}}),"GreaterEqual")}}),i_=T({greaterEqualStrict_:function(e,n){var t=C(e,"a","greaterEqualStrict"),r=C(n,"b","greaterEqualStrict");return Ge(t.shape,r.shape,"Error in greaterEqualStrict: "),t.greaterEqual(r)}}),a_=T({greaterStrict_:function(e,n){var t=C(e,"a","greaterStrict"),r=C(n,"b","greaterStrict");return Ge(t.shape,r.shape,"Error in greaterStrict: "),t.greater(r)}}),s_=T({less_:function(e,n){var t,r=C(e,"a","less"),o=C(n,"b","less");return t=Je(r,o),r=t[0],o=t[1],Oe(r.shape,o.shape),P.runKernelFunc((function(i){return i.less(r,o)}),{a:r,b:o},null,"Less")}}),u_=T({lessEqual_:function(e,n){var t,r=C(e,"a","lessEqual"),o=C(n,"b","lessEqual");return t=Je(r,o),r=t[0],o=t[1],Oe(r.shape,o.shape),P.runKernelFunc((function(i,a){var s=i.lessEqual(r,o);return a([r,o]),s}),{a:r,b:o},null,"LessEqual")}}),c_=T({lessEqualStrict_:function(e,n){var t=C(e,"a","lessEqualStrict"),r=C(n,"b","lessEqualStrict");return Ge(t.shape,r.shape,"Error in lessEqualStrict: "),t.lessEqual(r)}}),l_=T({lessStrict_:function(e,n){var t=C(e,"a","lessStrict"),r=C(n,"b","lessStrict");return Ge(t.shape,r.shape,"Error in lessStrict: "),t.less(r)}}),f_=T({notEqual_:function(e,n){var t,r=C(e,"a","notEqual"),o=C(n,"b","notEqual");return t=Je(r,o),r=t[0],o=t[1],Oe(r.shape,o.shape),P.runKernelFunc((function(i){return i.notEqual(r,o)}),{a:r,b:o},null,"NotEqual")}}),h_=T({notEqualStrict_:function(e,n){var t=C(e,"a","notEqualStrict"),r=C(n,"b","notEqualStrict");return Ge(t.shape,r.shape,"Error in notEqualStrict: "),t.notEqual(r)}});function Xf(e,n){for(var t=[],r=e;r<n;++r)t.push(r);return t}function Yf(e){for(var n=[],t=0;t<e.length;++t)for(var r=0;r<e[t].length;++r)n.push(e[t][r]);return n}var Pc=T({gather_:function(e,n,t){t===void 0&&(t=0);var r=C(e,"x","gather"),o=C(n,"indices","gather","int32");t=ft(t,r.shape)[0];var i=(function(a,s,u){for(var c=a.shape[u],l=[],f=1,h=1,d=0;d<u;d++)l.push(a.shape[d]),f*=a.shape[d];for(d=0;d<s.rank;d++)l.push(s.shape[d]);for(d=u+1;d<a.rank;d++)l.push(a.shape[d]),h*=a.shape[d];return{batchSize:f,sliceSize:h,dimSize:c,outputShape:l}})(r,o,t);return P.runKernelFunc((function(a,s){var u=a.gather(r,o.flatten(),t);return s([o]),u}),{x:r,indices:o},(function(a,s){var u=s[0];return{x:function(){var c=r.shape,l=u.size,f=c.slice(0,t),h=f.length,d=c.slice(t,c.length).slice(1),p=d.length,v=Xf(0,h),m=Xf(h+1,h+1+p),g=Yf([f,[l],d]),y=a.reshape(g),x=u.reshape([l]),b=Yf([[h],v,m]),w=y.transpose(b),_=av(w,x,r.shape[t]),A=xc(b);return _=_.transpose(A)},indices:function(){return u}}}),"Gather",{axis:t}).reshape(i.outputShape)}}),av=T({unsortedSegmentSum_:function(e,n,t){var r=C(e,"x","unsortedSegmentSum"),o=C(n,"segmentIds","unsortedSegmentSum","int32");return I(tt(t),(function(){return"numSegments must be of dtype int"})),P.runKernelFunc((function(i,a){var s=i.unsortedSegmentSum(r,o,t);return a([o]),s}),{$x:r},(function(i,a){var s=a[0];return{$x:function(){return(function(u,c){for(var l=Fc(c,Be(c)),f=Pc(u,l),h=iv(c,ae(0,"int32")),d=f.rank-h.rank,p=0;p<d;++p)h=Zt(h,p+1);h=rs(h,Lo(f.shape,"bool"));var v=Be(f);return qr(h,f,v)})(i,s)}}}))}}),d_=function(e,n,t){return pe(this,void 0,void 0,(function(){var r,o,i,a,s,u,c,l,f,h,d,p,v;return ve(this,(function(m){switch(m.label){case 0:for(r=C(e,"tensor","boolMask"),o=C(n,"mask","boolMask","bool"),i=t??0,a=o.rank,s=r.shape,I(a>0,(function(){return"mask cannot be scalar"})),Ge(s.slice(i,i+a),o.shape,"mask's shape must match the first K dimensions of tensor's shape,"),u=1,c=i;c<i+a;c++)u*=s[c];return l=s.slice(0,i).concat([u],s.slice(i+a)),f=r.reshape(l),h=o.reshape([-1]),[4,tv(h)];case 1:return d=m.sent(),p=d.squeeze([1]),v=Pc(f,p,i),e!==r&&r.dispose(),n!==o&&o.dispose(),p.dispose(),f.dispose(),h.dispose(),d.dispose(),[2,v]}}))}))};function sv(e,n,t,r,o,i,a){i===void 0&&(i="NHWC"),I(e.length===n.rank,(function(){return"Length of inShape ("+e.length+") and rank of dy ("+n.rank+") must match"}));var s=e,u=n,c=!1;n.rank===3&&(c=!0,u=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]),s=[1,e[0],e[1],e[2]]),I(s.length===4,(function(){return"Error in conv2dDerInput: inShape must be length 4, but got length "+s.length+"."})),I(u.rank===4,(function(){return"Error in conv2dDerInput: dy must be rank 4, but got rank "+u.rank})),I(t.rank===4,(function(){return"Error in conv2dDerInput: filter must be rank 4, but got rank "+t.rank}));var l=i==="NHWC"?s[3]:s[1],f=i==="NHWC"?u.shape[3]:u.shape[1];I(l===t.shape[2],(function(){return"Error in conv2dDerInput: depth of input ("+l+") must match input depth for filter "+t.shape[2]+"."})),I(f===t.shape[3],(function(){return"Error in conv2dDerInput: depth of output ("+f+") must match output depth for filter "+t.shape[3]+"."})),a!=null&&I(tt(o),(function(){return"Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."}));var h=Rc(i),d=Jr(s,t.shape,r,1,o,a,!1,h),p=P.runKernelFunc((function(v,m){var g=v.conv2dDerInput(u,t,d);return m([t,u]),g}),{dy4D:u,filter:t},(function(v,m){var g=m[0],y=m[1];return{dy4D:function(){return on(v,g,r,o,i,1,a)},filter:function(){return Mc(v,y,g.shape,r,o,i,a)}}}));return c?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p}function Xs(e){var n=(function(i){return typeof i=="number"?[i,i,i]:i.length===2?[i[0],i[1],1]:i})(e),t=n[0],r=n[1],o=n[2];return t===1&&r===1&&o===1}function uv(e,n,t,r,o){I(e.length===n.rank,(function(){return"Length of inShape ("+e.length+") and rank of dy ("+n.rank+") must match"}));var i=e,a=n,s=!1;n.rank===4&&(s=!0,a=n.as5D(1,n.shape[0],n.shape[1],n.shape[2],n.shape[3]),i=[1,e[0],e[1],e[2],e[3]]);var u=i[4],c=a.shape[4];I(i.length===5,(function(){return"Error in conv3dDerInput: inShape must be length 5, but got length "+i.length+"."})),I(a.rank===5,(function(){return"Error in conv3dDerInput: dy must be rank 5, but got rank "+a.rank})),I(t.rank===5,(function(){return"Error in conv3dDerInput: filter must be rank 5, but got rank "+t.rank})),I(u===t.shape[3],(function(){return"Error in conv3dDerInput: depth of input ("+u+") must match input depth for filter "+t.shape[3]+"."})),I(c===t.shape[4],(function(){return"Error in conv3dDerInput: depth of output ("+c+") must match output depth for filter "+t.shape[4]+"."}));var l=Ia(i,t.shape,r,1,o),f=P.runKernelFunc((function(h){return h.conv3dDerInput(a,t,l)}),{dy5D:a});return s?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}var p_=T({conv1d_:function(e,n,t,r,o,i,a){o===void 0&&(o="NWC"),i===void 0&&(i=1);var s=C(e,"x","conv1d"),u=C(n,"filter","conv1d"),c=s,l=!1;s.rank===2&&(l=!0,c=s.as3D(1,s.shape[0],s.shape[1])),I(c.rank===3,(function(){return"Error in conv1d: input must be rank 3, but got rank "+c.rank+"."})),I(u.rank===3,(function(){return"Error in conv1d: filter must be rank 3, but got rank "+u.rank+"."})),a!=null&&I(tt(r),(function(){return"Error in conv1d: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+r+"."})),I(c.shape[2]===u.shape[1],(function(){return"Error in conv1d: depth of input ("+c.shape[2]+") must match input depth for filter "+u.shape[1]+"."})),I(Wt(t,i),(function(){return"Error in conv1D: Either stride or dilation must be 1. Got stride "+t+" and dilation '"+i+"'"})),I(o==="NWC",(function(){return"Error in conv1d: got dataFormat of "+o+" but only NWC is currently supported."}));var f=u.as4D(1,u.shape[0],u.shape[1],u.shape[2]),h=c.as4D(c.shape[0],1,c.shape[1],c.shape[2]),d=on(h,f,[1,t],r,"NHWC",[1,i],a);return l?d.as2D(d.shape[2],d.shape[3]):d.as3D(d.shape[0],d.shape[2],d.shape[3])}}),on=T({conv2d_:function(e,n,t,r,o,i,a){o===void 0&&(o="NHWC"),i===void 0&&(i=[1,1]);var s=C(e,"x","conv2d"),u=C(n,"filter","conv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),I(c.rank===4,(function(){return"Error in conv2d: input must be rank 4, but got rank "+c.rank+"."})),I(u.rank===4,(function(){return"Error in conv2d: filter must be rank 4, but got rank "+u.rank+"."})),a!=null&&I(tt(r),(function(){return"Error in conv2d: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+r+"."}));var f=o==="NHWC"?c.shape[3]:c.shape[1];I(f===u.shape[2],(function(){return"Error in conv2d: depth of input ("+f+") must match input depth for filter "+u.shape[2]+"."})),I(Wt(t,i),(function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+t+" and dilations '"+i+"'"}));var h=Rc(o),d=Jr(c.shape,u.shape,t,i,r,a,!1,h),p=[u,c],v=P.runKernelFunc((function(m,g){var y=m.conv2d(c,u,d);return g([u,c]),y}),{x:c,filter:u},(function(m,g){var y=g,x=y[0],b=y[1];return I(Oo(i),(function(){return"Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+i+"'"})),{x:function(){return cv(b.shape,m,x,t,r,o)},filter:function(){return Mc(b,m,x.shape,t,r,o)}}}),"Conv2D",d,p);return l?v.as3D(v.shape[1],v.shape[2],v.shape[3]):v}}),v_=T({conv3d_:function(e,n,t,r,o,i){o===void 0&&(o="NDHWC"),i===void 0&&(i=[1,1,1]);var a=C(e,"x","conv3d"),s=C(n,"filter","conv3d"),u=a,c=!1;a.rank===4&&(c=!0,u=a.as5D(1,a.shape[0],a.shape[1],a.shape[2],a.shape[3])),I(u.rank===5,(function(){return"Error in conv3d: input must be rank 5, but got rank "+u.rank+"."})),I(s.rank===5,(function(){return"Error in conv3d: filter must be rank 5, but got rank "+s.rank+"."})),I(u.shape[4]===s.shape[3],(function(){return"Error in conv3d: depth of input ("+u.shape[4]+") must match input depth for filter "+s.shape[3]+"."})),I((function(h,d){return Xs(h)||Xs(d)})(t,i),(function(){return"Error in conv3D: Either strides or dilations must be 1. Got strides "+t+" and dilations '"+i+"'"})),I(o==="NDHWC",(function(){return"Error in conv3d: got dataFormat of "+o+" but only NDHWC is currently supported."}));var l=Ia(u.shape,s.shape,t,i,r),f=P.runKernelFunc((function(h,d){var p=h.conv3d(u,s,l);return d([u,s]),p}),{x:u,$filter:s},(function(h,d){I(Xs(i),(function(){return"Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+i+"'"}));var p=d[0],v=d[1];return{x:function(){return uv(p.shape,h,v,t,r)},$filter:function(){return(function(m,g,y,x,b){var w=m;m.rank===4&&(w=m.as5D(1,m.shape[0],m.shape[1],m.shape[2],m.shape[3]));var _=g;_.rank===4&&(_=g.as5D(1,g.shape[0],g.shape[1],g.shape[2],g.shape[3])),I(w.rank===5,(function(){return"Error in conv3dDerFilter: input must be rank 5, but got shape "+w.shape+"."})),I(_.rank===5,(function(){return"Error in conv3dDerFilter: dy must be rank 5, but got shape "+_.shape+"."})),I(y.length===5,(function(){return"Error in conv3dDerFilter: filterShape must be length 5, but got "+y+"."})),I(w.shape[4]===y[3],(function(){return"Error in conv3dDerFilter: depth of input "+w.shape[4]+") must match input depth in filter ("+y[3]+"."})),I(_.shape[4]===y[4],(function(){return"Error in conv3dDerFilter: depth of dy ("+_.shape[4]+") must match output depth for filter ("+y[4]+")."}));var A=Ia(w.shape,y,x,1,b);return P.runKernelFunc((function(R){return R.conv3dDerFilter(w,_,A)}),{x5D:w,dy5D:_})})(p,h,v.shape,t,r)}}}));return c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),Mc=T({conv2dDerFilter_:function(e,n,t,r,o,i,a){i===void 0&&(i="NHWC");var s=e;e.rank===3&&(s=e.as4D(1,e.shape[0],e.shape[1],e.shape[2]));var u=n;u.rank===3&&(u=n.as4D(1,n.shape[0],n.shape[1],n.shape[2])),I(s.rank===4,(function(){return"Error in conv2dDerFilter: input must be rank 4, but got shape "+s.shape+"."})),I(u.rank===4,(function(){return"Error in conv2dDerFilter: dy must be rank 4, but got shape "+u.shape+"."})),I(t.length===4,(function(){return"Error in conv2dDerFilter: filterShape must be length 4, but got "+t+"."}));var c=i==="NHWC"?s.shape[3]:s.shape[1],l=i==="NHWC"?u.shape[3]:u.shape[1];I(c===t[2],(function(){return"Error in conv2dDerFilter: depth of input "+c+") must match input depth in filter ("+t[2]+"."})),I(l===t[3],(function(){return"Error in conv2dDerFilter: depth of dy ("+l+") must match output depth for filter ("+t[3]+")."})),a!=null&&I(tt(o),(function(){return"Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."}));var f=Rc(i),h=Jr(s.shape,t,r,1,o,a,!1,f);return P.runKernelFunc((function(d){return d.conv2dDerFilter(s,u,h)}),{x4D:s,dy4D:u})}}),cv=T({conv2dDerInput_:sv}),os=T({depthwiseConv2d_:function(e,n,t,r,o,i,a){i===void 0&&(i=[1,1]);var s=C(e,"x","depthwiseConv2d"),u=C(n,"filter","depthwiseConv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),I(c.rank===4,(function(){return"Error in depthwiseConv2d: input must be rank 4, but got rank "+c.rank+"."})),I(u.rank===4,(function(){return"Error in depthwiseConv2d: filter must be rank 4, but got rank "+u.rank+"."})),I(c.shape[3]===u.shape[2],(function(){return"Error in depthwiseConv2d: number of input channels ("+c.shape[3]+") must match the inChannels dimension in filter "+u.shape[2]+"."})),i==null&&(i=[1,1]),I(Wt(t,i),(function(){return"Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides "+t+" and dilations '"+i+"'"})),a!=null&&I(tt(r),(function(){return"Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+r+"."}));var f=Jr(c.shape,u.shape,t,i,r,a,!0),h=[c,u],d=P.runKernelFunc((function(p,v){var m=p.depthwiseConv2D(c,u,f);return v([c,u]),m}),{x:c,filter:u},(function(p,v){I(Oo(i),(function(){return"Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+i+"'"}));var m=v[0],g=v[1];return{x:function(){return lv(m.shape,p,g,f)},filter:function(){return fv(m,p,g.shape,f)}}}),"DepthwiseConv2dNative",f,h);return l?d.as3D(d.shape[1],d.shape[2],d.shape[3]):d}}),lv=T({depthwiseConv2dDerInput_:function(e,n,t,r){var o=n,i=!1;n.rank===3&&(i=!0,o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var a=P.runKernelFunc((function(s){return s.depthwiseConv2DDerInput(o,t,r)}),{dy4D:o});return i?a.as3D(a.shape[1],a.shape[2],a.shape[3]):a}}),fv=T({depthwiseConv2dDerFilter_:function(e,n,t,r){var o=e;e.rank===3&&(o=e.as4D(1,e.shape[0],e.shape[1],e.shape[2]));var i=n;return i.rank===3&&(i=n.as4D(1,n.shape[0],n.shape[1],n.shape[2])),P.runKernelFunc((function(a){return a.depthwiseConv2DDerFilter(o,i,r)}),{x4D:o,dy4D:i})}}),Oc=T({separableConv2d_:function(e,n,t,r,o,i,a){i===void 0&&(i=[1,1]),a===void 0&&(a="NHWC");var s=C(e,"x","separableConv2d"),u=C(n,"depthwiseFilter","separableConv2d"),c=C(t,"pointwiseFilter","separableConv2d"),l=s,f=!1;if(s.rank===3&&(f=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),a==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");I(l.rank===4,(function(){return"Error in separableConv2d: input must be rank 4, but got rank "+l.rank+"."})),I(u.rank===4,(function(){return"Error in separableConv2d: depthwise filter must be rank 4, but got rank "+u.rank+"."})),I(c.rank===4,(function(){return"Error in separableConv2d: pointwise filter must be rank 4, but got rank "+u.rank+"."})),I(c.shape[0]===1,(function(){return"Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got "+c.shape[0]+"."})),I(c.shape[1]===1,(function(){return"Error in separableConv2d: the second dimension of pointwise filter must be 1, but got "+c.shape[1]+"."}));var h=u.shape[2],d=u.shape[3];I(c.shape[2]===h*d,(function(){return"Error in separableConv2d: the third dimension of pointwise filter must be "+h*d+", but got "+c.shape[2]+"."}));var p=os(l,u,r,o,a,i),v=on(p,c,1,"valid",a);return f?v.as3D(v.shape[1],v.shape[2],v.shape[3]):v}}),m_=T({conv2dTranspose_:function(e,n,t,r,o,i){return sv(t,C(e,"x","conv2dTranspose"),C(n,"filter","conv2dTranspose"),r,o,"NHWC",i)}}),g_=T({conv3dTranspose_:function(e,n,t,r,o){return uv(t,C(e,"x","conv3dTranspose"),C(n,"filter","conv3dTranspose"),r,o)}}),is=T({matMul_:function(e,n,t,r){var o;t===void 0&&(t=!1),r===void 0&&(r=!1);var i=C(e,"a","matMul"),a=C(n,"b","matMul");o=Je(i,a),i=o[0],a=o[1];var s=t?i.shape[i.rank-2]:i.shape[i.rank-1],u=r?a.shape[a.rank-1]:a.shape[a.rank-2],c=t?i.shape[i.rank-1]:i.shape[i.rank-2],l=r?a.shape[a.rank-2]:a.shape[a.rank-1],f=i.shape.slice(0,-2),h=a.shape.slice(0,-2),d=be(f),p=be(h);I(i.rank>=2&&a.rank>=2&&i.rank===a.rank,(function(){return"Error in matMul: inputs must have the same rank of at least 2, got ranks "+i.rank+" and "+a.rank+"."})),I(pt(f,h),(function(){return"Error in matMul: outer dimensions ("+f+") and ("+h+") of Tensors with shapes "+i.shape+" and "+a.shape+" must match."})),I(s===u,(function(){return"Error in matMul: inner shapes ("+s+") and ("+u+") of Tensors with shapes "+i.shape+" and "+a.shape+" and transposeA="+t+" and transposeB="+r+" must match."}));var v=i.shape.slice(0,-2).concat([c,l]),m=t?i.as3D(d,s,c):i.as3D(d,c,s),g=r?a.as3D(p,l,u):a.as3D(p,u,l),y={transposeA:t,transposeB:r};return P.runKernelFunc((function(x,b){var w=x.batchMatMul(m,g,t,r);return b([m,g]),w}),{a:m,b:g},(function(x,b){var w=b,_=w[0],A=w[1];return t||r?!t&&r?{a:function(){return x.matMul(A,!1,!1)},b:function(){return x.matMul(_,!0,!1)}}:t&&!r?{a:function(){return A.matMul(x,!1,!0)},b:function(){return _.matMul(x,!1,!1)}}:{a:function(){return A.matMul(x,!0,!0)},b:function(){return x.matMul(_,!0,!0)}}:{a:function(){return x.matMul(A,!1,!0)},b:function(){return _.matMul(x,!0,!1)}}}),"BatchMatMul",y).reshape(v)}}),y_=T({dot_:function(e,n){var t=C(e,"t1","dot"),r=C(n,"t2","dot");I(!(t.rank!==1&&t.rank!==2||r.rank!==1&&r.rank!==2),(function(){return"Error in dot: inputs must all be rank 1 or 2, but got ranks "+t.rank+" and "+r.rank+"."}));var o=t.rank===1?t.size:t.shape[1],i=r.rank===1?r.size:r.shape[0];return I(o===i,(function(){return"Error in dot: inner dimensions of inputs must match, but got "+o+" and "+i+"."})),t.rank===1&&r.rank===1?t.as2D(1,-1).matMul(r.as2D(-1,1)).asScalar():t.rank===1&&r.rank===2?t.as2D(1,-1).matMul(r.as2D(r.shape[0],r.shape[1])).as1D():t.rank===2&&r.rank===1?t.matMul(r.as2D(-1,1)).as1D():t.matMul(r.as2D(r.shape[0],r.shape[1]))}}),b_=T({outerProduct_:function(e,n){var t=C(e,"v1","outerProduct"),r=C(n,"v2","outerProduct");return I(t.rank===1&&r.rank===1,(function(){return"Error in outerProduct: inputs must be rank 1, but got ranks "+t.rank+" and "+r.rank+"."})),t.as2D(-1,1).matMul(r.as2D(1,-1))}}),ki=T({reverse_:function(e,n){var t=C(e,"x","reverse");if(t.rank===0)return t.clone();var r=ft(n,t.shape);return P.runKernelFunc((function(o){return o.reverse(t,r)}),{$x:t},(function(o){return{$x:function(){return o.reverse(r)}}})).reshapeAs(t)}}),x_=T({reverse1d_:function(e){var n=C(e,"x","reverse");return I(n.rank===1,(function(){return"Error in reverse1D: x must be rank 1 but got rank "+n.rank+"."})),ki(n,0)}}),w_=T({reverse2d_:function(e,n){var t=C(e,"x","reverse");return I(t.rank===2,(function(){return"Error in reverse2D: x must be rank 2 but got rank "+t.rank+"."})),ki(t,n)}}),__=T({reverse3d_:function(e,n){var t=C(e,"x","reverse");return I(t.rank===3,(function(){return"Error in reverse3D: x must be rank 3 but got rank "+t.rank+"."})),ki(t,n)}}),C_=T({reverse4d_:function(e,n){var t=C(e,"x","reverse");return I(t.rank===4,(function(){return"Error in reverse4D: x must be rank 4 but got rank "+t.rank+"."})),ki(t,n)}});function hv(e,n,t,r,o,i){var a=C(e,"x","maxPool"),s=a,u=!1;a.rank===3&&(u=!0,s=a.as4D(1,a.shape[0],a.shape[1],a.shape[2])),I(s.rank===4,(function(){return"Error in maxPool: input must be rank 4 but got rank "+s.rank+"."})),I(Wt(t,r),(function(){return"Error in maxPool: Either strides or dilations must be 1. Got strides "+t+" and dilations '"+r+"'"})),i!=null&&I(tt(o),(function(){return"Error in maxPool: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."}));var c=vi(s.shape,n,t,r,o,i);if(c.filterWidth===1&&c.filterHeight===1&&pt(c.inShape,c.outShape))return a.clone();var l=[s],f=P.runKernelFunc((function(h,d){var p=h.maxPool(s,c);return d([s,p]),p}),{x:s},(function(h,d){var p=d[0],v=d[1];return{x:function(){return(function(m,g,y,x,b,w,_,A){var R=C(m,"dy","maxPoolBackprop"),E=C(g,"input","maxPoolBackprop"),S=C(y,"output","maxPoolBackprop");I(E.rank===R.rank,(function(){return"Rank of input ("+E.rank+") does not match rank of dy ("+R.rank+")"})),I(Wt(b,w),(function(){return"Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides "+b+" and dilations '"+w+"'"})),I(R.rank===4,(function(){return"Error in maxPoolBackprop: dy must be rank 4 but got rank "+R.rank+"."})),I(E.rank===4,(function(){return"Error in maxPoolBackprop: input must be rank 4 but got rank "+E.rank+"."}));var F=vi(E.shape,x,b,w,_,A);return P.runKernelFunc((function(N){return N.maxPoolBackprop(R,E,S,F)}),{$dy:R,$input:E})})(h,p,v,n,t,r,o)}}}),"MaxPool",c,l);return u?f.as3D(f.shape[1],f.shape[2],f.shape[3]):f}function dv(e,n,t,r,o,i){var a=C(e,"x","avgPool","float32");I(Wt(t,r),(function(){return"Error in avgPool: Either strides or dilations must be 1. Got strides "+t+" and dilations '"+r+"'"}));var s=a,u=!1;a.rank===3&&(u=!0,s=a.as4D(1,a.shape[0],a.shape[1],a.shape[2])),I(s.rank===4,(function(){return"Error in avgPool: x must be rank 4 but got rank "+s.rank+"."})),i!=null&&I(tt(o),(function(){return"Error in avgPool: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."}));var c=vi(s.shape,n,t,r,o,i);if(c.filterWidth===1&&c.filterHeight===1&&pt(c.inShape,c.outShape))return a.clone();var l=P.runKernelFunc((function(f){return f.avgPool(s,c)}),{x:s},(function(f){return{x:function(){return(function(h,d,p,v,m,g){var y=C(h,"dy","avgPoolBackprop"),x=C(d,"input","avgPoolBackprop");I(x.rank===y.rank,(function(){return"Rank of input ("+x.rank+") does not match rank of dy ("+y.rank+")"})),I(Wt(v,m),(function(){return"Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides "+v+" and dilations '"+m+"'"}));var b=x,w=y,_=!1;x.rank===3&&(_=!0,b=x.as4D(1,x.shape[0],x.shape[1],x.shape[2]),w=y.as4D(1,y.shape[0],y.shape[1],y.shape[2])),I(w.rank===4,(function(){return"Error in avgPoolBackprop: dy must be rank 4 but got rank "+w.rank+"."})),I(b.rank===4,(function(){return"Error in avgPoolBackprop: input must be rank 4 but got rank "+b.rank+"."}));var A=vi(b.shape,p,v,m,g),R=P.runKernelFunc((function(E){return E.avgPoolBackprop(w,b,A)}),{dy4D:w,input4D:b});return _?R.as3D(R.shape[1],R.shape[2],R.shape[3]):R})(f,s,n,t,r,o)}}}),"AvgPool",c);return l=l.cast(a.dtype),u?l.as3D(l.shape[1],l.shape[2],l.shape[3]):l}var ht=T({maxPool_:function(e,n,t,r,o){return hv(e,n,t,1,r,o)}}),Di=T({avgPool_:function(e,n,t,r,o){return dv(e,n,t,1,r,o)}}),E_=T({pool_:function(e,n,t,r,o,i){o==null&&(o=[1,1]),i==null&&(i=1),r===0&&(r="valid");var a=C(e,"x","maxPool"),s=a,u=!1;a.rank===3&&(u=!0,s=a.as4D(1,a.shape[0],a.shape[1],a.shape[2])),I(Wt(i,o),(function(){return"Error in pool: Either strides or dilations must be 1. Got strides "+i+" and dilations '"+o+"'"}));var c,l=vi(s.shape,n,i,o,r),f=[l.dilationHeight,l.dilationWidth];c=r==="same"?(function(b,w){var _=b.map((function(E,S){return E+(E-1)*(w[S]-1)})).map((function(E){return E-1})),A=_.map((function(E){return Math.floor(E/2)})),R=_.map((function(E,S){return E-A[S]}));return _.map((function(E,S){return[A[S],R[S]]}))})([l.filterHeight,l.filterWidth],f):[[0,0],[0,0]];var h=f[0]===1&&f[1]===1,d=(function(b,w,_){var A=_.map((function(z){return z[0]})),R=_.map((function(z){return z[1]})),E=b.concat(A,R),S=w.map((function(z,G){return(z-E[G]%z)%z})),F=R.map((function(z,G){return z+S[G]})),N=w.map((function(z,G){return[A[G],F[G]]})),U=w.map((function(z,G){return[0,S[G]]}));return[N,U]})([l.inHeight,l.inWidth],f,c),p=d[0],v=d[1],m=h?r:"valid",g=h?s:bp(s,f,p),y=(t==="avg"?function(){return dv(g,n,i,1,m)}:function(){return hv(g,n,i,1,m)})(),x=h?y:mp(y,f,v);return u?x.as3D(x.shape[1],x.shape[2],x.shape[3]):x}}),R_=T({maxPool3d_:function(e,n,t,r,o,i,a){i===void 0&&(i="NDHWC");var s=C(e,"x","maxPool3d"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),a==null&&(a=[1,1,1]),I(u.rank===5,(function(){return"Error in maxPool3d: x must be rank 5 but got rank "+u.rank+"."})),I(i==="NDHWC",(function(){return"Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+i})),I(Wt(t,a),(function(){return"Error in maxPool3d: Either strides or dilations must be 1. Got strides "+t+" and dilations '"+a+"'"})),o!=null&&I(tt(r),(function(){return"Error in maxPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+r+"."}));var l=Sa(u.shape,n,t,a,r,o,i),f=P.runKernelFunc((function(h,d){var p=h.maxPool3d(u,l);return d([u,p]),p}),{x:u},(function(h,d){var p=d[0],v=d[1];return{x:function(){return(function(m,g,y,x,b,w,_,A){var R=C(m,"dy","maxPool3dBackprop"),E=C(g,"input","maxPool3dBackprop"),S=C(y,"output","maxPool3dBackprop"),F=R,N=E,U=S,z=!1;E.rank===4&&(z=!0,F=R.as5D(1,R.shape[0],R.shape[1],R.shape[2],R.shape[3]),N=E.as5D(1,E.shape[0],E.shape[1],E.shape[2],E.shape[3]),U=S.as5D(1,S.shape[0],S.shape[1],S.shape[2],S.shape[3])),I(F.rank===5,(function(){return"Error in maxPool3dBackprop: dy must be rank 5 but got rank "+F.rank+"."})),I(N.rank===5,(function(){return"Error in maxPool3dBackprop: input must be rank 5 but got rank "+N.rank+"."})),I(U.rank===5,(function(){return"Error in maxPool3dBackprop: output must be rank 5 but got rank "+U.rank+"."})),w==null&&(w=[1,1,1]),I(Wt(b,w),(function(){return"Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides "+b+" and dilations '"+w+"'"})),A!=null&&I(tt(_),(function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+A+" but got pad "+_+"."}));var G=Sa(N.shape,x,b,w,_,A),H=P.runKernelFunc((function(O){return O.maxPool3dBackprop(F,N,U,G)}),{dy5D:F,input5D:N});return z?H.as4D(H.shape[1],H.shape[2],H.shape[3],H.shape[4]):H})(h,p,v,n,t,a,r,o)}}}));return c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),S_=T({avgPool3d_:function(e,n,t,r,o,i,a){i===void 0&&(i="NDHWC");var s=C(e,"x","avgPool3d","float32"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),a==null&&(a=[1,1,1]),I(u.rank===5,(function(){return"Error in avgPool3d: x must be rank 5 but got rank "+u.rank+"."})),I(i==="NDHWC",(function(){return"Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+i})),I(Wt(t,a),(function(){return"Error in avgPool3d: Either strides or dilations must be 1. Got strides "+t+" and dilations '"+a+"'"})),o!=null&&I(tt(r),(function(){return"Error in avgPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+r+"."}));var l=Sa(u.shape,n,t,a,r,o,i),f=P.runKernelFunc((function(h){return h.avgPool3d(u,l)}),{x:u},(function(h){return{x:function(){return(function(d,p,v,m,g,y,x){var b=C(d,"dy","avgPool3dBackprop"),w=C(p,"input","avgPool3dBackprop"),_=b,A=w,R=!1;w.rank===4&&(R=!0,_=b.as5D(1,b.shape[0],b.shape[1],b.shape[2],b.shape[3]),A=w.as5D(1,w.shape[0],w.shape[1],w.shape[2],w.shape[3])),I(_.rank===5,(function(){return"Error in avgPool3dBackprop: dy must be rank 5 but got rank "+_.rank+"."})),I(A.rank===5,(function(){return"Error in avgPool3dBackprop: input must be rank 5 but got rank "+A.rank+"."})),g==null&&(g=[1,1,1]),I(Wt(m,g),(function(){return"Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides "+m+" and dilations '"+g+"'"})),x!=null&&I(tt(y),(function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+x+" but got pad "+y+"."}));var E=Sa(A.shape,v,m,g,y,x),S=P.runKernelFunc((function(F){return F.avgPool3dBackprop(_,A,E)}),{dy5D:_,input5D:A});return R?S.as4D(S.shape[1],S.shape[2],S.shape[3],S.shape[4]):S})(h,u,n,t,a,r,o)}}}));return f=f.cast(u.dtype),c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),Mn=T({slice_:function(e,n,t){var r,o,i=C(e,"x","slice");if(i.rank===0)throw new Error("Slicing scalar is not possible");(r=typeof n=="number"?[n].concat(new Array(i.rank-1).fill(0)):n.length<i.rank?n.concat(new Array(i.rank-n.length).fill(0)):n.slice()).forEach((function(u){I(u!==-1,(function(){return"slice() does not support negative begin indexing."}))})),o=(o=t==null?new Array(i.rank).fill(-1):typeof t=="number"?[t].concat(new Array(i.rank-1).fill(-1)):t.length<i.rank?t.concat(new Array(i.rank-t.length).fill(-1)):t).map((function(u,c){return u>=0?u:(I(u===-1,(function(){return"Negative size values should be exactly -1 but got "+u+" for the slice() size at index "+c+"."})),i.shape[c]-r[c])})),e1(i,r,o);var a=i.shape,s={begin:r,size:o};return P.runKernelFunc((function(u){return u.slice(i,r,o)}),{x:i},(function(u){for(var c=[],l=0;l<u.rank;l++)c.push([r[l],a[l]-r[l]-o[l]]);return{x:function(){return u.pad(c)}}}),"Slice",s)}}),I_=T({slice1d_:function(e,n,t){var r=C(e,"x","slice1d");return I(r.rank===1,(function(){return"slice1d expects a rank-1 tensor, but got a rank-"+r.rank+" tensor"})),Mn(r,[n],[t])}}),A_=T({slice2d_:function(e,n,t){var r=C(e,"x","slice2d");return I(r.rank===2,(function(){return"slice2d expects a rank-2 tensor, but got a rank-"+r.rank+" tensor"})),Mn(r,n,t)}}),pv=T({slice3d_:function(e,n,t){var r=C(e,"x","slice3d");return I(r.rank===3,(function(){return"slice3d expects a rank-3 tensor, but got a rank-"+r.rank+" tensor"})),Mn(r,n,t)}}),k_=T({slice4d_:function(e,n,t){var r=C(e,"x","slice4d");return I(r.rank===4,(function(){return"slice4d expects a rank-4 tensor, but got a rank-"+r.rank+" tensor"})),Mn(r,n,t)}});function vv(e,n,t,r,o){return n.rank<t.rank&&(n=n.reshape(Lt(n.shape,r))),e.rank<t.rank&&(e=e.reshape(Lt(e.shape,r))),{x:function(){var i=e.mul(t.equal(n).cast(e.dtype));return o==null?i:i.transpose(o)}}}var D_=T({all_:function(e,n,t){n===void 0&&(n=null),t===void 0&&(t=!1);var r=C(e,"x","all","bool"),o=ft(n,r.shape),i=o,a=Bn(i,r.rank);a!=null&&(r=r.transpose(a),i=Ln(i.length,r.rank));var s=P.runKernelFunc((function(c){return c.all(r,i)}),{$x:r});if(t){var u=Lt(s.shape,o);return s.reshape(u)}return s}}),T_=T({any_:function(e,n,t){n===void 0&&(n=null),t===void 0&&(t=!1);var r=C(e,"x","any","bool"),o=ft(n,r.shape),i=o,a=Bn(i,r.rank);a!=null&&(r=r.transpose(a),i=Ln(i.length,r.rank));var s=P.runKernelFunc((function(c){return c.any(r,i)}),{$x:r});if(t){var u=Lt(s.shape,o);return s.reshape(u)}return s}}),N_=T({argMax_:function(e,n){n===void 0&&(n=0);var t=C(e,"x","argMax");n==null&&(n=0);var r=ft(n,t.shape),o=Bn(r,t.rank);o!=null&&(t=t.transpose(o),r=Ln(r.length,t.rank));var i={axis:r[0]},a=[t];return P.runKernelFunc((function(s,u){var c=s.argMax(t,r[0]);return u([t]),c}),{x:t},(function(s,u){var c=u[0];return{x:function(){return Be(c)}}}),"ArgMax",i,a)}}),F_=T({argMin_:function(e,n){n===void 0&&(n=0);var t=C(e,"x","argMin");n==null&&(n=0);var r=ft(n,t.shape),o=Bn(r,t.rank);return o!=null&&(t=t.transpose(o),r=Ln(r.length,t.rank)),P.runKernelFunc((function(i,a){var s=i.argMin(t,r[0]);return a([t]),s}),{$x:t},(function(i,a){var s=a[0];return{$x:function(){return Be(s)}}}))}}),P_=T({logSumExp_:function(e,n,t){n===void 0&&(n=null),t===void 0&&(t=!1);var r=C(e,"x","logSumExp"),o=ft(n,r.shape),i=r.max(o,!0),a=r.sub(i).exp().sum(o).log(),s=i.reshape(a.shape).add(a);if(t){var u=Lt(s.shape,o);return s.reshape(u)}return s}}),as=T({max_:function(e,n,t){n===void 0&&(n=null),t===void 0&&(t=!1);var r=C(e,"x","max"),o=r,i=ft(n,r.shape),a=i,s=Bn(a,r.rank);s!=null&&(r=r.transpose(s),a=Ln(a.length,r.rank));var u=[r],c=P.runKernelFunc((function(f,h){var d=f.max(r,a);return h([o,d]),d}),{x:r},(function(f,h){return vv(f,h[1],h[0],i,s)}),"Max",{axes:a},u,[!0]);if(t){var l=Lt(c.shape,i);c=c.reshape(l)}return c}}),M_=T({mean_:function(e,n,t){n===void 0&&(n=null),t===void 0&&(t=!1);var r=C(e,"x","mean"),o=ft(n,r.shape),i=be(wt(r.shape,o)[1]);return ts((function(a){var s=ae(i);return{value:(s.dtype===a.dtype?a:a.cast(s.dtype)).div(s).sum(n,t),gradFunc:function(u){var c=a.shape.slice();return o.forEach((function(l){c[l]=1})),u.reshape(c).mul(Lo(a.shape,"float32")).div(i)}}}))(r)}}),O_=T({min_:function(e,n,t){n===void 0&&(n=null),t===void 0&&(t=!1);var r=C(e,"x","min"),o=r,i=ft(n,r.shape),a=i,s=Bn(a,r.rank);s!=null&&(r=r.transpose(s),a=Ln(a.length,r.rank));var u=[r],c=P.runKernelFunc((function(f,h){var d=f.min(r,a);return h([o,d]),d}),{x:r},(function(f,h){return vv(f,h[1],h[0],i,s)}),"Min",{axes:a},u,[!0]);if(t){var l=Lt(c.shape,i);c=c.reshape(l)}return c}}),B_=T({moments_:function(e,n,t){n===void 0&&(n=null),t===void 0&&(t=!1);var r=ft(n,(e=C(e,"x","moments")).shape),o=e.mean(r,t),i=o.shape;t||(i=Lt(o.shape,r));var a=e.toFloat().sub(o.reshape(i)).square();return{mean:o,variance:a.mean(r,t)}}}),mv=T({sum_:function(e,n,t){n===void 0&&(n=null),t===void 0&&(t=!1);var r=C(e,"x","sum");r.dtype==="bool"&&(r=r.toInt());var o=ft(n,r.shape);return ts((function(i){var a=Bn(o,i.rank),s=o,u=i;a!=null&&(u=i.transpose(a),s=Ln(s.length,i.rank));var c=function(d){var p=i.shape.slice();return o.forEach((function(v){p[v]=1})),d.reshape(p).mul(Lo(i.shape,"float32"))},l={axes:s},f=P.runKernelFunc((function(d){return d.sum(u,s)}),{x:u},(function(d){return{x:function(){return c(d)}}}),"Sum",l);if(t){var h=Lt(f.shape,o);f=f.reshape(h)}return{value:f,gradFunc:c}}))(r)}}),L_=T({prod_:function(e,n,t){n===void 0&&(n=null),t===void 0&&(t=!1);var r=C(e,"x","prod");r.dtype==="bool"&&(r=r.toInt());var o=ft(n,r.shape),i=Bn(o,r.rank),a=o,s=r;i!=null&&(s=r.transpose(i),a=Ln(a.length,r.rank));var u=P.runKernelFunc((function(l){return l.prod(s,a)}),{permutedX:s});if(t){var c=Lt(u.shape,o);u=u.reshape(c)}return u}}),gv=T({elu_:function(e){var n=C(e,"x","elu");return P.runKernelFunc((function(t,r){var o=t.elu(n);return r([o]),o}),{$x:n},(function(t,r){var o=r[0];return{$x:function(){return P.runKernelFunc((function(i){return i.eluDer(t,o)}),{dy:t,y:o})}}}))}}),W_=T({leakyRelu_:function(e,n){n===void 0&&(n=.2);var t=C(e,"x","leakyRelu");return Fc(ae(n).mul(t),t)}}),yv=T({prelu_:function(e,n){var t=C(e,"x","prelu"),r=C(n,"alpha","prelu");return P.runKernelFunc((function(o,i){var a=o.prelu(t,r);return i([t,r]),a}),{x:t,alpha:r},(function(o,i){var a=i[0],s=i[1],u=a.greater(0);return{x:function(){return qr(u,o,o.mul(s))},alpha:function(){var c=qr(u,Be(o),o.mul(a)),l=ct(s.shape,o.shape);return l.length>0&&(c=c.sum(l)),c.reshape(s.shape)}}}),"Prelu")}}),Ye=T({relu_:function(e){var n=C(e,"x","relu");return n.dtype==="bool"?n.toInt():P.runKernelFunc((function(t,r){var o=t.relu(n);return r([n]),o}),{x:n},(function(t,r){var o=r[0];return{x:function(){return t.mulStrict(o.step().toFloat())}}}),"Relu")}}),bv=T({relu6_:function(e){var n=C(e,"x","relu6");return n.dtype==="bool"?n.toInt():P.runKernelFunc((function(t,r){var o=t.relu6(n);return r([n]),o}),{x:n},(function(t,r){var o=r[0],i=o.lessEqual(6).mul(o.step());return{x:function(){return t.mulStrict(i.toFloat())}}}),"Relu6")}}),V_=T({selu_:function(e){var n=C(e,"x","selu");return P.runKernelFunc((function(t,r){var o=t.selu(n);return r([n]),o}),{$x:n},(function(t,r){var o=r[0];return{$x:function(){var i=o.greater(ae(0)),a=ae(Dc),s=ae(Tc),u=t.mul(s),c=t.mul(a).mul(o.toFloat().exp());return qr(i,u,c)}}}))}}),Cr=T({transpose_:function(e,n){var t=C(e,"x","transpose");if(n==null&&(n=t.shape.map((function(o,i){return i})).reverse()),I(t.rank===n.length,(function(){return"Error in transpose: rank of input "+t.rank+" must match length of perm "+n+"."})),n.forEach((function(o){I(o>=0&&o<t.rank,(function(){return"All entries in 'perm' must be between 0 and "+(t.rank-1)+" but got "+n}))})),t.rank<=1)return t.clone();var r={perm:n};return P.runKernelFunc((function(o){return o.transpose(t,n)}),{x:t},(function(o){var i=xc(n);return{x:function(){return o.transpose(i)}}}),"Transpose",r)}}),U_=T({localResponseNormalization_:function(e,n,t,r,o){n===void 0&&(n=5),t===void 0&&(t=1),r===void 0&&(r=1),o===void 0&&(o=.5);var i=C(e,"x","localResponseNormalization");I(i.rank===4||i.rank===3,(function(){return`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank `+i.rank+"."})),I(tt(n),(function(){return"Error in localResponseNormalization: depthRadius must be an integer but got depthRadius "+n+"."}));var a=i,s=!1;i.rank===3&&(s=!0,a=i.as4D(1,i.shape[0],i.shape[1],i.shape[2]));var u=P.runKernelFunc((function(c,l){var f=c.localResponseNormalization4D(a,n,t,r,o);return l([a,f]),f}),{x4D:a},(function(c,l){var f=l[0],h=l[1];return{x4D:function(){return P.runKernelFunc((function(d){return d.LRNGrad(c,f,h,n,t,r,o)}),{})}}}));return s?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),xv=T({norm_:function(e,n,t,r){n===void 0&&(n="euclidean"),t===void 0&&(t=null),r===void 0&&(r=!1);var o=(function s(u,c,l){if(l===void 0&&(l=null),u.rank===0)return u.abs();if(u.rank!==1&&l===null)return s(u.reshape([-1]),c,l);if(u.rank===1||typeof l=="number"||Array.isArray(l)&&l.length===1){if(c===1)return u.abs().sum(l);if(c===1/0)return u.abs().max(l);if(c===-1/0)return u.abs().min(l);if(c==="euclidean"||c===2)return u.abs().pow(ae(2,"int32")).sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}if(Array.isArray(l)&&l.length===2){if(c===1)return u.abs().sum(l[0]).max(l[1]-1);if(c===1/0)return u.abs().sum(l[1]).max(l[0]);if(c===-1/0)return u.abs().sum(l[1]).min(l[0]);if(c==="fro"||c==="euclidean")return u.square().sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}throw new Error("Error in norm: invalid axis: "+l)})(e=C(e,"x","norm"),n,t),i=o.shape;if(r){var a=ft(t,e.shape);i=Lt(o.shape,a)}return o.reshape(i)}}),z_=T({basicLSTMCell_:function(e,n,t,r,o,i){var a=C(e,"forgetBias","basicLSTMCell"),s=C(n,"lstmKernel","basicLSTMCell"),u=C(t,"lstmBias","basicLSTMCell"),c=C(r,"data","basicLSTMCell"),l=C(o,"c","basicLSTMCell"),f=C(i,"h","basicLSTMCell"),h=c.concat(f,1).matMul(s).add(u),d=h.shape[0],p=h.shape[1]/4,v=[d,p],m=h.slice([0,0],v),g=h.slice([0,p],v),y=h.slice([0,2*p],v),x=h.slice([0,3*p],v),b=m.sigmoid().mulStrict(g.tanh()).addStrict(l.mulStrict(a.add(y).sigmoid())),w=b.tanh().mulStrict(x.sigmoid());return[b,w]}}),G_=T({multiRNNCell_:function(e,n,t,r){for(var o=C(n,"data","multiRNNCell"),i=xa(t,"c","multiRNNCell"),a=xa(r,"h","multiRNNCell"),s=o,u=[],c=0;c<e.length;c++){var l=e[c](s,i[c],a[c]);u.push(l[0]),u.push(l[1]),s=l[1]}var f=[],h=[];for(c=0;c<u.length;c+=2)f.push(u[c]),h.push(u[c+1]);return[f,h]}}),H_=T({movingAverage_:function(e,n,t,r,o){o===void 0&&(o=!0);var i=C(e,"v","movingAverage"),a=C(n,"x","movingAverage"),s=C(t,"decay","movingAverage");Ub(i,a),I(pt(i.shape,a.shape),(function(){return"Shape mismatch in v and x"}));var u=ae(1),c=u.sub(s),l=a.sub(i).mul(c);if(o){I(r!=null,(function(){return"When using zeroDebias: true, step is required."}));var f=C(r,"step","movingAverage");l=l.div(u.sub(Da(s,f)))}return i.add(l)}}),j_=T({stridedSlice_:function(e,n,t,r,o,i,a,s,u){if(o===void 0&&(o=0),i===void 0&&(i=0),a===void 0&&(a=0),s===void 0&&(s=0),u===void 0&&(u=0),r==null&&(r=new Array(n.length)),a!==0)throw new Error("ellipsis mask is not yet supported");var c=C(e,"x","stridedSlice"),l=kf(s),f=c.shape.slice();l.forEach((function(m){n[m]=0,t[m]=1,f.splice(m,0,1)})),c=c.reshape(f);for(var h=0;h<c.rank;h++)n[h]=t1(o,n,r,c.shape,h),t[h]=n1(i,t,r,c.shape,h),r[h]=r[h]||1;var d=kf(u);d.forEach((function(m){t[m]=n[m]+1,r[m]=1}));var p=Ec(n,t,r),v=p.filter((function(m,g){return d.indexOf(g)===-1}));return r.every((function(m){return m===1}))?Mn(c,n,p).reshape(v):P.runKernelFunc((function(m){return m.stridedSlice(c,n,t,r)}),{$x:c}).reshape(v)}}),q_=T({topk_:function(e,n,t){n===void 0&&(n=1),t===void 0&&(t=!0);var r=C(e,"x","topk");if(r.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");var o=r.shape[r.shape.length-1];if(n>o)throw new Error("'k' passed to topk() must be <= the last dimension ("+o+") but got "+n);var i=P.runKernelFunc((function(a){return a.topk(r,n,t)}),{$x:r});return{values:i[0],indices:i[1]}}}),K_=T({scatterND_:function(e,n,t){var r=C(e,"indices","scatterND","int32"),o=C(n,"updates","scatterND");return Zx(o,r,t),P.runKernelFunc((function(i){return i.scatterND(r,o,t)}),{indices:r,updates:o},null,"ScatterNd",{shape:t})}}),Bc=T({fft_:function(e){I(e.dtype==="complex64",(function(){return"The dtype for tf.spectral.fft() must be complex64 but got "+e.dtype+"."}));var n=e.shape[e.shape.length-1],t=e.size/n,r=e.as2D(t,n);return P.runKernelFunc((function(o){return o.fft(r)}),{input:e}).reshape(e.shape)}}),Ta=T({ifft_:function(e){I(e.dtype==="complex64",(function(){return"The dtype for tf.spectral.ifft() must be complex64 but got "+e.dtype+"."}));var n=e.shape[e.shape.length-1],t=e.size/n,r=e.as2D(t,n);return P.runKernelFunc((function(o){return o.ifft(r)}),{input:e}).reshape(e.shape)}}),Lc=T({rfft_:function(e,n){I(e.dtype==="float32",(function(){return"The dtype for rfft() must be real value but got "+e.dtype}));var t,r=e.shape[e.shape.length-1],o=e.size/r;if(n!=null&&n<r){var i=e.shape.map((function(g){return 0})),a=e.shape.map((function(g){return g}));a[e.shape.length-1]=n,t=e.slice(i,a),r=n}else if(n!=null&&n>r){var s=e.shape.map((function(g){return g}));s[e.shape.length-1]=n-r,t=e.concat(qe(s),e.shape.length-1),r=n}else t=e;var u=t.zerosLike(),c=gt(t,u).as2D(o,r),l=Bc(c),f=Math.floor(r/2)+1,h=tn(l),d=Sn(l),p=h.split([f,r-f],h.shape.length-1),v=d.split([f,r-f],d.shape.length-1),m=t.shape.slice();return m[t.shape.length-1]=f,gt(p[0],v[0]).reshape(m)}}),wv=T({irfft_:function(e){var n=e.shape[e.shape.length-1],t=e.size/n;if(n<=2){var r=e.as2D(t,n),o=Ta(r);return tn(o)}var i=[t,2*(n-1)],a=tn(e).as2D(t,n),s=Sn(e).as2D(t,n),u=a.slice([0,1],[t,n-2]).reverse(1),c=s.slice([0,1],[t,n-2]).reverse(1).mul(ae(-1)),l=a.concat(u,1),f=s.concat(c,1);return r=gt(l,f).as2D(i[0],i[1]),o=Ta(r),tn(o)}}),$_=Object.freeze({fft:Bc,ifft:Ta,rfft:Lc,irfft:wv}),X_=T({sparseToDense_:function(e,n,t,r){r===void 0&&(r=0);var o=C(e,"sparseIndices","sparseToDense","int32"),i=C(n,"sparseValues","sparseToDense"),a=C(r,"defaultValue","sparseToDense",i.dtype);return(function(s,u,c,l){if(s.dtype!=="int32")throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was "+s.dtype+".");if(s.rank>2)throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape "+s.shape+".");var f=s.rank>0?s.shape[0]:1,h=s.rank>1?s.shape[1]:1;if(c.length!==h)throw new Error("outputShape has incorrect number of elements:, "+c.length+", should be: "+h+".");var d=u.size;if(u.rank!==0&&(u.rank!==1||d!==f))throw new Error("sparseValues has incorrect shape "+u.shape+", should be [] or ["+f+"]");if(u.dtype!==l.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")})(o,i,t,a),P.runKernelFunc((function(s){return s.sparseToDense(o,i,t,a)}),{$sparseIndices:o,$sparseValues:i,$defaultValue:a})}}),Y_=T({gatherND_:function(e,n){var t=C(n,"indices","gatherND","int32"),r=C(e,"x","gatherND");return P.runKernelFunc((function(o){return o.gatherND(r,t)}),{x:r,indices:t},null,"GatherNd")}}),J_=T({diag_:function(e){var n=C(e,"x","diag").flatten(),t=e.shape.concat(e.shape);return P.runKernelFunc((function(r){return r.diag(n)}),{$x:n}).reshape(t)}}),Q_=T({dropout_:function(e,n,t,r){var o=C(e,"x","dropout");if(I(o.dtype==="float32",(function(){return"x has to be a floating point tensor since it's going to be scaled, but got a "+o.dtype+" tensor instead."})),I(n>=0&&n<1,(function(){return"rate must be a float in the range [0, 1), but got "+n+"."})),n===0)return e instanceof Xe?o.clone():o;var i=(function(u,c){if(c==null)return u.shape.slice();if(pt(u.shape,c))return c;if(u.shape.length===c.length){for(var l=[],f=0;f<u.shape.length;f++)c[f]==null&&u.shape[f]!=null?l.push(u.shape[f]):l.push(c[f]);return l}return c})(o,t),a=1-n,s=yp(i,0,1,"float32",r).add(a).floor().div(a);return o.mul(s)}});function _v(e,n,t){for(var r=1-e%2,o=new Float32Array(e),i=0;i<e;++i){var a=2*Math.PI*i/(e+r-1);o[i]=n-t*Math.cos(a)}return nt(o,"float32")}var Wc=T({hannWindow_:function(e){return _v(e,.5,.5)}}),Cv=T({hammingWindow_:function(e){return _v(e,.54,.46)}}),Vc=T({frame_:function(e,n,t,r,o){r===void 0&&(r=!1),o===void 0&&(o=0);for(var i=0,a=[];i+n<=e.size;)a.push(Mn(e,i,n)),i+=t;if(r)for(;i<e.size;){var s=i+n-e.size,u=at([Mn(e,i,n-s),Nn([s],o)]);a.push(u),i+=t}return a.length===0?yr([],[0,n]):at(a).as2D(a.length,n)}}),Ev=T({stft_:function(e,n,t,r,o){var i;o===void 0&&(o=Wc),r==null&&(i=n,r=Math.floor(Math.pow(2,Math.ceil(Math.log(i)/Math.log(2)))));for(var a=Vc(e,n,t),s=At(a,o(n)),u=[],c=0;c<a.shape[0];c++)u.push(Lc(s.slice([c,0],[1,n]),r));return at(u)}}),Z_=Object.freeze({hannWindow:Wc,hammingWindow:Cv,frame:Vc,stft:Ev}),Rt,eC=function(e,n,t){return t===void 0&&(t=1),pe(this,void 0,void 0,(function(){var r,o,i,a,s,u,c,l,f,h,d,p,v,m;return ve(this,(function(g){switch(g.label){case 0:return r=C(e,"predictions","inTopK"),o=C(n,"targets","inTopK"),I(r.rank>1,(function(){return"inTopK() expects the predictions to be of rank 2 or higher, but got "+r.rank})),I(r.rank-1===o.rank,(function(){return"predictions rank should be 1 larger than targets rank, but got predictions rank "+r.rank+" and targets rank "+o.rank})),Ge(r.shape.slice(0,r.shape.length-1),o.shape,"predictions's shape should be align with the targets' shape, except the last dimension."),i=r.shape[r.shape.length-1],I(t>0&&t<=i,(function(){return"'k' passed to inTopK() must be > 0 && <= the predictions last dimension ("+i+"), but got "+t})),[4,r.data()];case 1:return a=g.sent(),[4,o.data()];case 2:for(s=g.sent(),u=[a.length/i,i],l=u[1],f=hi("bool",c=u[0]),h=0;h<c;h++){for(d=h*l,p=a.subarray(d,d+l),v=[],m=0;m<p.length;m++)v.push({value:p[m],index:m});for(v.sort((function(y,x){return x.value-y.value})),f[h]=0,m=0;m<t;m++)if(v[m].index===s[h]){f[h]=1;break}}return e!==r&&r.dispose(),n!==o&&o.dispose(),[2,bt(f,o.shape,"bool")]}}))}))};(function(e){e[e.NONE=0]="NONE",e[e.MEAN=1]="MEAN",e[e.SUM=2]="SUM",e[e.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(Rt||(Rt={}));var tC=T({absoluteDifference_:function(e,n,t,r){r===void 0&&(r=Rt.SUM_BY_NONZERO_WEIGHTS);var o=C(e,"labels","absoluteDifference"),i=C(n,"predictions","absoluteDifference"),a=null;t!=null&&(a=C(t,"weights","absoluteDifference")),Ge(o.shape,i.shape,"Error in absoluteDifference: ");var s=o.sub(i).abs();return rr(s,a,r)}}),rr=T({computeWeightedLoss_:function(e,n,t){t===void 0&&(t=Rt.SUM_BY_NONZERO_WEIGHTS);var r=C(e,"losses","computeWeightedLoss"),o=null;n!=null&&(o=C(n,"weights","computeWeightedLoss"));var i=o==null?r:r.mul(o);if(t===Rt.NONE)return i;if(t===Rt.SUM)return i.sum();if(t===Rt.MEAN){if(o==null)return i.mean();var a=r.size/o.size,s=i.sum().div(o.sum());return a>1?s.div(ae(a)):s}if(t===Rt.SUM_BY_NONZERO_WEIGHTS){if(o==null)return i.sum().div(ae(r.size));var u=o.mul(Lo(r.shape)).notEqual(ae(0)).sum().toFloat();return i.sum().div(u)}throw Error("Unknown reduction: "+t)}}),nC=T({cosineDistance_:function(e,n,t,r,o){o===void 0&&(o=Rt.SUM_BY_NONZERO_WEIGHTS);var i=C(e,"labels","cosineDistance"),a=C(n,"predictions","cosineDistance"),s=null;r!=null&&(s=C(r,"weights","cosineDistance")),Ge(i.shape,a.shape,"Error in cosineDistance: ");var u=ae(1).sub(i.mul(a).sum(t,!0));return rr(u,s,o)}}),rC=T({hingeLoss_:function(e,n,t,r){r===void 0&&(r=Rt.SUM_BY_NONZERO_WEIGHTS);var o=C(e,"labels","hingeLoss"),i=C(n,"predictions","hingeLoss"),a=null;t!=null&&(a=C(t,"weights","hingeLoss")),Ge(o.shape,i.shape,"Error in hingeLoss: ");var s=ae(1);o=ae(2).mul(o).sub(s);var u=s.sub(o.mul(i)).relu();return rr(u,a,r)}}),oC=T({huberLoss_:function(e,n,t,r,o){r===void 0&&(r=1),o===void 0&&(o=Rt.SUM_BY_NONZERO_WEIGHTS);var i=C(e,"labels","huberLoss"),a=C(n,"predictions","huberLoss"),s=null;t!=null&&(s=C(t,"weights","huberLoss")),Ge(i.shape,a.shape,"Error in huberLoss: ");var u=ae(r),c=a.sub(i).abs(),l=rv(c,u),f=c.sub(l),h=ae(.5).mul(l.square()).add(u.mul(f));return rr(h,s,o)}}),iC=T({logLoss_:function(e,n,t,r,o){r===void 0&&(r=1e-7),o===void 0&&(o=Rt.SUM_BY_NONZERO_WEIGHTS);var i=C(e,"labels","logLoss"),a=C(n,"predictions","logLoss"),s=null;t!=null&&(s=C(t,"weights","logLoss")),Ge(i.shape,a.shape,"Error in logLoss: ");var u=ae(1),c=ae(r),l=i.mul(a.add(c).log()).neg().sub(u.sub(i).mul(u.sub(a).add(c).log()));return rr(l,s,o)}}),aC=T({meanSquaredError_:function(e,n,t,r){r===void 0&&(r=Rt.SUM_BY_NONZERO_WEIGHTS);var o=C(e,"labels","meanSquaredError"),i=C(n,"predictions","meanSquaredError"),a=null;t!=null&&(a=C(t,"weights","meanSquaredError")),Ge(o.shape,i.shape,"Error in meanSquaredError: ");var s=o.squaredDifference(i);return rr(s,a,r)}}),sC=T({sigmoidCrossEntropy_:function(e,n,t,r,o){r===void 0&&(r=0),o===void 0&&(o=Rt.SUM_BY_NONZERO_WEIGHTS);var i=C(e,"multiClassLabels","sigmoidCrossEntropy"),a=C(n,"logits","sigmoidCrossEntropy"),s=null;if(t!=null&&(s=C(t,"weights","sigmoidCrossEntropy")),Ge(i.shape,a.shape,"Error in sigmoidCrossEntropy: "),r>0){var u=ae(r),c=ae(1),l=ae(.5);i=i.mul(c.sub(u)).add(l.mul(u))}var f=(function(h,d){var p=C(h,"labels","sigmoidCrossEntropyWithLogits"),v=C(d,"logits","sigmoidCrossEntropyWithLogits");Ge(p.shape,v.shape,"Error in sigmoidCrossEntropyWithLogits: ");var m=v.relu(),g=v.mul(p),y=v.abs().neg().exp().log1p();return m.sub(g).add(y)})(i,a);return rr(f,s,o)}}),uC=T({softmaxCrossEntropy_:function(e,n,t,r,o){r===void 0&&(r=0),o===void 0&&(o=Rt.SUM_BY_NONZERO_WEIGHTS);var i=C(e,"onehotLabels","softmaxCrossEntropy"),a=C(n,"logits","softmaxCrossEntropy"),s=null;if(t!=null&&(s=C(t,"weights","softmaxCrossEntropy")),Ge(i.shape,a.shape,"Error in softmaxCrossEntropy: "),r>0){var u=ae(r),c=ae(1),l=ae(i.shape[1]);i=i.mul(c.sub(u)).add(u.div(l))}var f=(function(h,d,p){if(p===void 0&&(p=-1),p===-1&&(p=d.rank-1),p!==d.rank-1)throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank "+d.rank+" and dim was "+p);return ts((function(v,m,g){var y=m.logSumExp([p],!0),x=m.toFloat().sub(y);return g([v,x]),{value:x.mul(v).neg().sum([p]),gradFunc:function(b,w){var _=w[0],A=w[1],R=Lt(b.shape,[p]);return[b.reshape(R).mul(_.toFloat().sub(A.exp())),b.reshape(R).mul(A.exp().sub(_.toFloat()))]}}}))(h,d)})(i,a);return rr(f,s,o)}}),cC=Object.freeze({get Reduction(){return Rt},absoluteDifference:tC,computeWeightedLoss:rr,cosineDistance:nC,hingeLoss:rC,huberLoss:oC,logLoss:iC,meanSquaredError:aC,sigmoidCrossEntropy:sC,softmaxCrossEntropy:uC});function Jf(e,n){return n===void 0&&(n=!1),P.tidy((function(){if(e.shape.length!==2)throw new Error("qr2d() requires a 2D Tensor, but got a "+e.shape.length+"D Tensor.");for(var t=e.shape[0],r=e.shape[1],o=gp(t),i=e.clone(),a=yr([[1]],[1,1]),s=a.clone(),u=t>=r?r:t,c=function(f){var h,d=i,p=s,v=o;h=P.tidy((function(){var m=i.slice([f,f],[t-f,1]),g=m.norm(),y=i.slice([f,f],[1,1]),x=yr([[-1]]).where(y.greater(0),yr([[1]])),b=y.sub(x.mul(g)),w=m.div(b);s=w.shape[0]===1?a.clone():a.concat(w.slice([1,0],[w.shape[0]-1,w.shape[1]]),0);var _=x.matMul(b).div(g).neg(),A=i.slice([f,0],[t-f,r]),R=_.mul(s);if(f===0)i=A.sub(R.matMul(s.transpose().matMul(A)));else{var E=A.sub(R.matMul(s.transpose().matMul(A)));i=i.slice([0,0],[f,r]).concat(E,0)}var S=o.slice([0,f],[t,o.shape[1]-f]);if(f===0)o=S.sub(S.matMul(s).matMul(R.transpose()));else{var F=S.sub(S.matMul(s).matMul(R.transpose()));o=o.slice([0,0],[t,f]).concat(F,1)}return[s,i,o]})),s=h[0],i=h[1],o=h[2],Bt([d,p,v])},l=0;l<u;++l)c(l);return!n&&t>r&&(o=o.slice([0,0],[t,r]),i=i.slice([0,0],[r,r])),[o,i]}))}var lC=T({bandPart_:function(e,n,t){if(n%1!=0)throw new Error("bandPart(): numLower must be an integer, got "+n+".");if(t%1!=0)throw new Error("bandPart(): numUpper must be an integer, got "+t+".");var r=C(e,"a","bandPart");if(r.rank<2)throw new Error("bandPart(): Rank must be at least 2, got "+r.rank+".");var o=r.shape,i=r.shape.slice(-2),a=i[0],s=i[1];if(!(n<=a))throw new Error("bandPart(): numLower ("+n+") must not be greater than the number of rows ("+a+").");if(!(t<=s))throw new Error("bandPart(): numUpper ("+t+") must not be greater than the number of columns ("+s+").");n<0&&(n=a),t<0&&(t=s);var u=wa(0,a,1,"int32").reshape([-1,1]),c=wa(0,s,1,"int32"),l=lt(u,c),f=rs(l.lessEqual(ae(+n,"int32")),l.greaterEqual(ae(-t,"int32"))),h=qe([a,s],r.dtype);return Xt(st(r.reshape([-1,a,s])).map((function(d){return qr(f,d,h)}))).reshape(o)}}),fC=T({gramSchmidt_:function(e){var n;if(Array.isArray(e)){n=!1,I(e!=null&&e.length>0,(function(){return"Gram-Schmidt process: input must not be null, undefined, or empty"}));for(var t=e[0].shape[0],r=function(u){I(e[u].shape[0]===t,(function(){return"Gram-Schmidt: Non-unique lengths found in the input vectors: ("+e[u].shape[0]+" vs. "+t+")"}))},o=1;o<e.length;++o)r(o)}else n=!0,e=_c(e,e.shape[0],0).map((function(u){return xp(u,[0])}));I(e.length<=e[0].shape[0],(function(){return"Gram-Schmidt: Number of vectors ("+e.length+") exceeds number of dimensions ("+e[0].shape[0]+")."}));var i=[],a=e,s=function(u){i.push(P.tidy((function(){var c=a[u];if(u>0)for(var l=0;l<u;++l){var f=mv(i[l].mulStrict(c)).mul(i[l]);c=c.sub(f)}return c.div(xv(c,"euclidean"))})))};for(o=0;o<e.length;++o)s(o);return n?Xt(i,0):i}}),hC=T({qr_:function(e,n){if(n===void 0&&(n=!1),e.rank<2)throw new Error("qr() requires input tensor to have a rank >= 2, but got rank "+e.rank);if(e.rank===2)return Jf(e,n);var t=e.shape.slice(0,e.shape.length-2).reduce((function(a,s){return a*s})),r=st(e.reshape([t,e.shape[e.shape.length-2],e.shape[e.shape.length-1]]),0),o=[],i=[];return r.forEach((function(a){var s=Jf(a,n),u=s[0],c=s[1];o.push(u),i.push(c)})),[Xt(o,0).reshape(e.shape),Xt(i,0).reshape(e.shape)]}}),dC=Object.freeze({bandPart:lC,gramSchmidt:fC,qr:hC});function ss(e,n,t,r,o,i){r==null&&(r=.5),o==null&&(o=Number.NEGATIVE_INFINITY),i==null&&(i=0);var a=e.shape[0];return t=Math.min(t,a),I(0<=r&&r<=1,(function(){return"iouThreshold must be in [0, 1], but was '"+r+"'"})),I(e.rank===2,(function(){return"boxes must be a 2D tensor, but was of rank '"+e.rank+"'"})),I(e.shape[1]===4,(function(){return"boxes must have 4 columns, but 2nd dimension was "+e.shape[1]})),I(n.rank===1,(function(){return"scores must be a 1D tensor"})),I(n.shape[0]===a,(function(){return"scores has incompatible shape with boxes. Expected "+a+", but was "+n.shape[0]})),I(0<=i&&i<=1,(function(){return"softNmsSigma must be in [0, 1], but was '"+i+"'"})),{maxOutputSize:t,iouThreshold:r,scoreThreshold:o,softNmsSigma:i}}var pC=T({resizeBilinear_:function(e,n,t){t===void 0&&(t=!1);var r=C(e,"images","resizeBilinear");I(r.rank===3||r.rank===4,(function(){return"Error in resizeBilinear: x must be rank 3 or 4, but got rank "+r.rank+"."})),I(n.length===2,(function(){return"Error in resizeBilinear: new shape must 2D, but got shape "+n+"."}));var o=r,i=!1;r.rank===3&&(i=!0,o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var a=n[0],s=n[1],u=P.runKernelFunc((function(c,l){return l([o]),c.resizeBilinear(o,a,s,t)}),{x:o},(function(c,l){return{x:function(){return P.runKernelFunc((function(f){return f.resizeBilinearBackprop(c,l[0],t)}),{})}}}),"ResizeBilinear",{alignCorners:t,newHeight:a,newWidth:s});return i?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),vC=T({resizeNearestNeighbor_:function(e,n,t){t===void 0&&(t=!1);var r=C(e,"images","resizeNearestNeighbor");I(r.rank===3||r.rank===4,(function(){return"Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank "+r.rank+"."})),I(n.length===2,(function(){return"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+n+"."})),I(r.dtype==="float32"||r.dtype==="int32",(function(){return"`images` must have `int32` or `float32` as dtype"}));var o=r,i=!1;r.rank===3&&(i=!0,o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var a=n[0],s=n[1],u=P.runKernelFunc((function(c,l){return l([o]),c.resizeNearestNeighbor(o,a,s,t)}),{batchImages:o},(function(c,l){return{batchImages:function(){return P.runKernelFunc((function(f){return f.resizeNearestNeighborBackprop(c,l[0],t)}),{})}}}));return i?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),mC=T({nonMaxSuppression_:function(e,n,t,r,o){r===void 0&&(r=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY);var i=C(e,"boxes","nonMaxSuppression"),a=C(n,"scores","nonMaxSuppression"),s=ss(i,a,t,r,o);t=s.maxOutputSize,r=s.iouThreshold,o=s.scoreThreshold;var u={maxOutputSize:t,iouThreshold:r,scoreThreshold:o};return P.runKernelFunc((function(c){return c.nonMaxSuppression(i,a,t,r,o)}),{boxes:i,scores:a},null,"NonMaxSuppressionV3",u)}}),gC=function(e,n,t,r,o){return r===void 0&&(r=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),pe(this,void 0,void 0,(function(){var i,a,s,u,c,l,f;return ve(this,(function(h){switch(h.label){case 0:return i=C(e,"boxes","nonMaxSuppressionAsync"),a=C(n,"scores","nonMaxSuppressionAsync"),s=ss(i,a,t,r,o),t=s.maxOutputSize,r=s.iouThreshold,o=s.scoreThreshold,[4,Promise.all([i.data(),a.data()])];case 1:return u=h.sent(),c=u[0],l=u[1],f=Sc(c,l,t,r,o),i!==e&&i.dispose(),a!==n&&a.dispose(),[2,f]}}))}))},yC=T({nonMaxSuppressionWithScore_:function(e,n,t,r,o,i){r===void 0&&(r=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),i===void 0&&(i=0);var a=C(e,"boxes","nonMaxSuppression"),s=C(n,"scores","nonMaxSuppression"),u=ss(a,s,t,r,o,i),c={maxOutputSize:t=u.maxOutputSize,iouThreshold:r=u.iouThreshold,scoreThreshold:o=u.scoreThreshold,softNmsSigma:i=u.softNmsSigma},l=P.runKernel("NonMaxSuppressionV5",{boxes:a,scores:s},c);return{selectedIndices:l[0],selectedScores:l[1]}}}),bC=function(e,n,t,r,o,i){return r===void 0&&(r=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),i===void 0&&(i=0),pe(this,void 0,void 0,(function(){var a,s,u,c,l,f,h;return ve(this,(function(d){switch(d.label){case 0:return a=C(e,"boxes","nonMaxSuppressionAsync"),s=C(n,"scores","nonMaxSuppressionAsync"),u=ss(a,s,t,r,o,i),t=u.maxOutputSize,r=u.iouThreshold,o=u.scoreThreshold,i=u.softNmsSigma,[4,Promise.all([a.data(),s.data()])];case 1:return c=d.sent(),l=c[0],f=c[1],h=Ic(l,f,t,r,o,i),a!==e&&a.dispose(),s!==n&&s.dispose(),[2,h]}}))}))},xC=T({cropAndResize_:function(e,n,t,r,o,i){var a=C(e,"image","cropAndResize"),s=C(n,"boxes","cropAndResize","float32"),u=C(t,"boxInd","cropAndResize","int32");o=o||"bilinear",i=i||0;var c=s.shape[0];return I(a.rank===4,(function(){return"Error in cropAndResize: image must be rank 4,but got rank "+a.rank+"."})),I(s.rank===2&&s.shape[1]===4,(function(){return"Error in cropAndResize: boxes must be have size ["+c+",4] but had shape "+s.shape+"."})),I(u.rank===1&&u.shape[0]===c,(function(){return"Error in cropAndResize: boxInd must be have size ["+c+"] but had shape "+s.shape+"."})),I(r.length===2,(function(){return"Error in cropAndResize: cropSize must be of length 2, but got length "+r.length+"."})),I(r[0]>=1&&r[1]>=1,(function(){return"cropSize must be atleast [1,1], but was "+r})),I(o==="bilinear"||o==="nearest",(function(){return"method must be bilinear or nearest, but was "+o})),P.runKernelFunc((function(l,f){return l.cropAndResize(a,s,u,r,o,i)}),{images:a,boxes:s,boxInd:u},null,"CropAndResize",{method:o,extrapolationValue:i,cropSize:r})}}),Uc=Object.freeze({resizeBilinear:pC,resizeNearestNeighbor:vC,nonMaxSuppression:mC,nonMaxSuppressionAsync:gC,nonMaxSuppressionWithScore:yC,nonMaxSuppressionWithScoreAsync:bC,cropAndResize:xC}),zc=function(e,n){return!(e>0)||n==="linear"},Gc=function(e,n,t){if(t==null||t==="linear")return e;if(t==="relu")return e.mul(n.step());throw new Error("Gradient for activation "+t+" has not been implemented yet.")},Hc=function(e,n){var t=n,r=ct(e.shape,n.shape);return r.length>0&&(t=t.sum(r)),t.reshape(e.shape)},jc=function(e,n,t){if(n==="linear")return e;if(n==="relu")return Ye(e);if(n==="elu")return gv(e);if(n==="relu6")return bv(e);if(n==="prelu")return yv(e,t);throw new Error("Unknown fused activation "+n+".")},wC=T({fusedMatMul_:function(e){var n,t=e.a,r=e.b,o=e.transposeA,i=o!==void 0&&o,a=e.transposeB,s=a!==void 0&&a,u=e.bias,c=e.activation,l=c===void 0?"linear":c,f=e.preluActivationWeights;if(zc(P.state.gradientDepth,l)===!1){var h=is(t,r,i,s);return u!=null&&(h=Me(h,u)),jc(h,l,f)}var d=C(t,"a","fused matMul"),p=C(r,"b","fused matMul");n=Je(d,p),d=n[0],p=n[1];var v=i?d.shape[d.rank-2]:d.shape[d.rank-1],m=s?p.shape[p.rank-1]:p.shape[p.rank-2],g=i?d.shape[d.rank-1]:d.shape[d.rank-2],y=s?p.shape[p.rank-2]:p.shape[p.rank-1],x=d.shape.slice(0,-2),b=p.shape.slice(0,-2),w=be(x),_=be(b);I(d.rank>=2&&p.rank>=2&&d.rank===p.rank,(function(){return"Error in fused matMul: inputs must have the same rank of at least 2, got ranks "+d.rank+" and "+p.rank+"."})),I(pt(x,b),(function(){return"Error in fused matMul: outer dimensions ("+x+") and ("+b+") of Tensors with shapes "+d.shape+" and "+p.shape+" must match."})),I(v===m,(function(){return"Error in fused matMul: inner shapes ("+v+") and ("+m+") of Tensors with shapes "+d.shape+" and "+p.shape+" and transposeA="+i+" and transposeB="+s+" must match."}));var A,R,E=d.shape.slice(0,-2).concat([g,y]),S=i?d.as3D(w,v,g):d.as3D(w,g,v),F=s?p.as3D(_,y,m):p.as3D(_,m,y);u!=null&&Oe(E,(A=Je(A=C(u,"bias","fused matMul"),d)[0]).shape),f!=null&&(R=C(f,"prelu weights","fused matMul"));var N={a:S,b:F};u!=null&&(N.bias=A),f!=null&&(N.preluActivationWeights=R);var U=[S,F];return P.runKernelFunc((function(z,G){var H=z.fusedBatchMatMul({a:S,b:F,transposeA:i,transposeB:s,bias:A,activation:l,preluActivationWeights:R});return G([S,F,H]),H}),N,(function(z,G){var H=G[0],O=G[1],B=G[2],$=Gc(z,B,l),J={};return u!=null&&(J={bias:function(){return Hc(A,$)}}),Object.assign(i||s?!i&&s?{a:function(){return $.matMul(O,!1,!1)},b:function(){return $.matMul(H,!0,!1)}}:i&&!s?{a:function(){return O.matMul($,!1,!0)},b:function(){return H.matMul($,!1,!1)}}:{a:function(){return O.matMul($,!0,!0)},b:function(){return $.matMul(H,!0,!0)}}:{a:function(){return $.matMul(O,!1,!0)},b:function(){return H.matMul($,!0,!1)}},J)}),"_FusedMatMul",{transposeA:i,transposeB:s,activation:l},U,[!0]).reshape(E)}}),_C=T({fusedConv2d_:function(e){var n=e.x,t=e.filter,r=e.strides,o=e.pad,i=e.dataFormat,a=i===void 0?"NHWC":i,s=e.dilations,u=s===void 0?[1,1]:s,c=e.dimRoundingMode,l=e.bias,f=e.activation,h=f===void 0?"linear":f,d=e.preluActivationWeights;if(h=h||"linear",zc(P.state.gradientDepth,h)===!1){var p=on(n,t,r,o,a,u,c);return l!=null&&(p=Me(p,l)),jc(p,h,d)}var v=C(n,"x","conv2d"),m=C(t,"filter","conv2d"),g=v,y=!1;v.rank===3&&(y=!0,g=v.as4D(1,v.shape[0],v.shape[1],v.shape[2])),I(g.rank===4,(function(){return"Error in fused conv2d: input must be rank 4, but got rank "+g.rank+"."})),I(m.rank===4,(function(){return"Error in fused conv2d: filter must be rank 4, but got rank "+m.rank+"."})),c!=null&&I(tt(o),(function(){return"Error in fused conv2d: pad must be an integer when using, dimRoundingMode "+c+" but got pad "+o+"."})),I(g.shape[3]===m.shape[2],(function(){return"Error in conv2d: depth of input ("+g.shape[3]+") must match input depth for filter "+m.shape[2]+"."})),I(Wt(r,u),(function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+r+" and dilations '"+u+"'"})),I(a==="NHWC",(function(){return"Error in conv2d: got dataFormat of "+a+" but only NHWC is currently supported."}));var x,b,w=Jr(g.shape,m.shape,r,u,o,c);l!=null&&(x=Je(x=C(l,"bias","fused conv2d"),v)[0],Oe(w.outShape,x.shape)),d!=null&&(b=C(d,"prelu weights","fused conv2d"));var _={x:g,filter:m};l!=null&&(_.bias=x),d!=null&&(_.preluActivationWeights=b);var A=[m,g],R=P.runKernelFunc((function(E,S){var F=E.fusedConv2d({input:g,filter:m,convInfo:w,bias:x,activation:h,preluActivationWeights:b});return S([m,g,F]),F}),_,(function(E,S){var F=S,N=F[0],U=F[1],z=F[2],G=Gc(E,z,h);I(Oo(u),(function(){return"Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+u+"'"}));var H={};return l!=null&&(H={bias:function(){return Hc(x,G)}}),Object.assign({x:function(){return cv(U.shape,G,N,r,o)},filter:function(){return Mc(U,G,N.shape,r,o)}},H)}),"FusedConv2D",{convInfo:w,activation:h},A,[!0]);return y?R.as3D(R.shape[1],R.shape[2],R.shape[3]):R}}),CC=T({fusedDepthwiseConv2d_:function(e){var n=e.x,t=e.filter,r=e.strides,o=e.pad,i=e.dataFormat,a=i===void 0?"NHWC":i,s=e.dilations,u=s===void 0?[1,1]:s,c=e.dimRoundingMode,l=e.bias,f=e.activation,h=f===void 0?"linear":f,d=e.preluActivationWeights;if(zc(P.state.gradientDepth,h)===!1){var p=os(n,t,r,o,a,u,c);return l!=null&&(p=Me(p,l)),jc(p,h,d)}var v=C(n,"x","depthwiseConv2d"),m=C(t,"filter","depthwiseConv2d"),g=v,y=!1;v.rank===3&&(y=!0,g=v.as4D(1,v.shape[0],v.shape[1],v.shape[2])),I(g.rank===4,(function(){return"Error in fused depthwiseConv2d: input must be rank 4, but got rank "+g.rank+"."})),I(m.rank===4,(function(){return"Error in fused depthwiseConv2d: filter must be rank 4, but got rank "+m.rank+"."})),I(g.shape[3]===m.shape[2],(function(){return"Error in fused depthwiseConv2d: number of input channels ("+g.shape[3]+") must match the inChannels dimension in filter "+m.shape[2]+"."})),u==null&&(u=[1,1]),I(Wt(r,u),(function(){return"Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides "+r+" and dilations '"+u+"'"})),c!=null&&I(tt(o),(function(){return"Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode "+c+" but got pad "+o+"."}));var x,b,w=Jr(g.shape,m.shape,r,u,o,c,!0);l!=null&&(x=Je(x=C(l,"bias","fused conv2d"),v)[0],Oe(w.outShape,x.shape)),d!=null&&(b=C(d,"prelu weights","fused depthwiseConv2d"));var _={x:g,filter:m};l!=null&&(_.bias=x),d!=null&&(_.preluActivationWeights=b);var A=[m,g],R=P.runKernelFunc((function(E,S){var F=E.fusedDepthwiseConv2D({input:g,filter:m,convInfo:w,bias:x,activation:h,preluActivationWeights:b});return S([m,g,F]),F}),_,(function(E,S){I(Oo(u),(function(){return"Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+u+"'"}));var F=S[0],N=S[1],U=S[2],z=Gc(E,U,h),G={};return l!=null&&(G={bias:function(){return Hc(x,z)}}),Object.assign({x:function(){return lv(N.shape,z,F,w)},filter:function(){return fv(N,z,F.shape,w)}},G)}),"FusedDepthwiseConv2D",{convInfo:w,activation:h},A,[!0]);return y?R.as3D(R.shape[1],R.shape[2],R.shape[3]):R}}),EC=Object.freeze({matMul:wC,conv2d:_C,depthwiseConv2d:CC}),RC=Object.freeze({image:Uc,linalg:dC,losses:cC,spectral:$_,fused:EC,signal:Z_,square:i2,squaredDifference:Kp,conv1d:p_,conv2d:on,conv3d:v_,depthwiseConv2d:os,separableConv2d:Oc,conv2dTranspose:m_,conv3dTranspose:g_,op:T,batchNormalization2d:M2,batchNormalization3d:O2,batchNormalization4d:B2,batchNormalization:L2,batchNorm:Zp,batchNorm2d:W2,batchNorm3d:V2,batchNorm4d:U2,booleanMaskAsync:d_,complex:gt,real:tn,imag:Sn,concat:at,concat1d:Ex,concat2d:Rx,concat3d:Sx,concat4d:Ix,split:_c,matMul:is,dot:y_,outerProduct:b_,reverse:ki,reverse1d:x_,reverse2d:w_,reverse3d:__,reverse4d:C_,maxPool:ht,avgPool:Di,pool:E_,maxPool3d:R_,avgPool3d:S_,slice:Mn,slice1d:I_,slice2d:A_,slice3d:pv,slice4d:k_,abs:a2,acos:s2,acosh:u2,asin:c2,asinh:l2,atan:f2,atanh:h2,ceil:d2,clipByValue:Nc,cos:p2,cosh:v2,erf:m2,exp:Hu,expm1:g2,floor:y2,log:b2,log1p:x2,logSigmoid:w2,neg:ka,reciprocal:_2,round:C2,rsqrt:$p,sigmoid:Xp,sign:E2,isNaN:R2,isInf:S2,isFinite:I2,sin:A2,sinh:k2,softplus:D2,sqrt:T2,step:N2,tan:F2,tanh:P2,all:D_,any:T_,argMax:N_,argMin:F_,logSumExp:P_,max:as,mean:M_,min:O_,moments:B_,sum:mv,prod:L_,equal:ov,equalStrict:r_,greater:o_,greaterEqual:iv,greaterEqualStrict:i_,greaterStrict:a_,less:s_,lessEqual:u_,lessEqualStrict:c_,lessStrict:l_,notEqual:f_,notEqualStrict:h_,add:Me,addN:H2,addStrict:j2,atan2:q2,div:un,divNoNan:K2,divStrict:$2,floorDiv:nv,maximum:Fc,maximumStrict:X2,minimum:rv,minimumStrict:Y2,mod:J2,modStrict:Q2,mul:At,mulStrict:Z2,pow:Da,powStrict:e_,squaredDifferenceStrict:t_,sub:lt,subStrict:n_,elu:gv,leakyRelu:W_,prelu:yv,relu:Ye,relu6:bv,selu:V_,logicalAnd:rs,logicalNot:z2,logicalOr:ev,logicalXor:G2,where:qr,whereAsync:tv,buffer:Te,print:Ox,batchToSpaceND:mp,broadcastTo:Bx,cast:Lx,clone:Wx,cumsum:Vx,depthToSpace:Ux,expandDims:Zt,eye:gp,multinomial:zx,oneHot:Vu,pad:Yr,pad1d:Gx,pad2d:Hx,pad3d:jx,pad4d:qx,rand:Kx,randomNormal:$x,randomGamma:Xx,randomUniform:yp,reshape:ln,spaceToBatchND:bp,squeeze:xp,stack:Xt,tile:yo,truncatedNormal:Yx,unstack:st,setdiff1dAsync:Jx,fill:Nn,linspace:Cx,ones:Lo,range:wa,scalar:ae,tensor:bt,tensor1d:nt,tensor2d:yr,tensor3d:wc,tensor4d:Pt,tensor5d:xx,tensor6d:wx,variable:_x,zeros:qe,onesLike:vp,zerosLike:Be,transpose:Cr,softmax:nr,logSoftmax:o1,localResponseNormalization:U_,norm:xv,gather:Pc,unsortedSegmentSum:av,basicLSTMCell:z_,multiRNNCell:G_,movingAverage:H_,stridedSlice:j_,topk:q_,scatterND:K_,fft:Bc,ifft:Ta,rfft:Lc,irfft:wv,sparseToDense:X_,gatherND:Y_,diag:J_,dropout:Q_,hannWindow:Wc,hammingWindow:Cv,frame:Vc,stft:Ev,inTopKAsync:eC});function Y(e,n){Array.isArray(e)||(e=[e]),e.forEach((function(t){t!=null&&I(t.dtype!=="complex64",(function(){return n+" does not support complex64 tensors."}))}))}function Ys(e,n,t,r){if(t==="linear")return e.linear(n);if(t==="relu")return e.relu(n);if(t==="elu")return e.elu(n);if(t==="relu6")return e.relu6(n);if(t==="prelu")return e.prelu(n,r);throw new Error("Activation "+t+" has not been implemented for the CPU backend.")}var SC=(function(e){function n(){var t=e.call(this)||this;return t.blockSize=48,t.firstUse=!0,t.data=new Ip(t,P),t}return vn(n,e),n.prototype.write=function(t,r,o){this.firstUse&&(this.firstUse=!1,q().get("IS_NODE")&&ba(`
============================
Hi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.
============================`));var i={};return this.data.set(i,{values:t,dtype:o}),i},n.prototype.move=function(t,r,o,i){this.data.set(t,{values:r,dtype:i})},n.prototype.numDataIds=function(){return this.data.numDataIds()},n.prototype.read=function(t){return pe(this,void 0,void 0,(function(){return ve(this,(function(r){return[2,this.readSync(t)]}))}))},n.prototype.readSync=function(t){var r=this.data.get(t),o=r.dtype,i=r.complexTensors;return o==="complex64"?Gu(this.readSync(i.real.dataId),this.readSync(i.imag.dataId)):this.data.get(t).values},n.prototype.bufferSync=function(t){var r=this.readSync(t.dataId),o=r;if(t.dtype==="string")try{o=r.map((function(i){return ma(i)}))}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return Te(t.shape,t.dtype,o)},n.prototype.makeOutput=function(t,r,o){var i=this.write(t,r,o);return P.makeTensorFromDataId(i,r,o,this)},n.prototype.disposeData=function(t){if(this.data.has(t)){var r=this.data.get(t).complexTensors;r!=null&&(r.real.dispose(),r.imag.dispose()),this.data.delete(t)}},n.prototype.time=function(t){return pe(this,void 0,void 0,(function(){var r;return ve(this,(function(o){return r=Cn(),t(),[2,{kernelMs:Cn()-r}]}))}))},n.prototype.memory=function(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}},n.prototype.complex=function(t,r){var o=this.makeOutput(null,t.shape,"complex64");return this.data.get(o.dataId).complexTensors={real:P.keep(t.clone()),imag:P.keep(r.clone())},o},n.prototype.real=function(t){return this.data.get(t.dataId).complexTensors.real.clone()},n.prototype.imag=function(t){return this.data.get(t.dataId).complexTensors.imag.clone()},n.prototype.slice=function(t,r,o){if(Y(t,"slice"),Rp(t.shape,r,o)){var i=Sp(r,t.strides),a=be(o);return bt(this.readSync(t.dataId).subarray(i,i+a),o,t.dtype)}for(var s=Te(o,t.dtype),u=this.bufferSync(t),c=0;c<s.size;++c){var l=s.indexToLoc(c).map((function(f,h){return f+r[h]}));s.values[c]=u.get.apply(u,l)}return s.toTensor()},n.prototype.stridedSlice=function(t,r,o,i){Y(t,"stridedSlice");var a=Ec(r,o,i);if(a.some((function(d){return d===0})))return bt([],a);for(var s=Te(a,t.dtype),u=this.bufferSync(t),c=0;c<s.size;c++){for(var l=s.indexToLoc(c),f=new Array(l.length),h=0;h<f.length;h++)f[h]=l[h]*i[h]+r[h];s.set.apply(s,[u.get.apply(u,f)].concat(l))}return s.toTensor()},n.prototype.diag=function(t){for(var r=this.readSync(t.dataId),o=Te([t.size,t.size],t.dtype),i=o.values,a=0;a<r.length;a++)i[a*t.size+a]=r[a];return o.toTensor()},n.prototype.unstack=function(t,r){for(var o=t.shape[r],i=new Array(t.rank-1),a=0,s=0;s<t.rank;s++)s!==r&&(i[a++]=t.shape[s]);var u=new Array(t.rank).fill(0),c=t.shape.slice();c[r]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[r]=s,l[s]=this.slice(t,u,c).reshape(i);return l},n.prototype.reverse=function(t,r){Y(t,"reverse");for(var o=Te(t.shape,t.dtype),i=this.bufferSync(t),a=function(u){var c=o.indexToLoc(u),l=c.slice();r.forEach((function(f){return l[f]=t.shape[f]-1-l[f]})),o.set.apply(o,[i.get.apply(i,l)].concat(c))},s=0;s<o.size;s++)a(s);return o.toTensor()},n.prototype.concat=function(t,r){var o=this;if(t[0].dtype==="complex64"){var i=t.map((function(d){return tn(d)})),a=t.map((function(d){return Sn(d)}));return gt(this.concat(i,r),this.concat(a,r))}var s=t.map((function(d){var p=be(d.shape.slice(r));return d.as2D(-1,p)})),u=Mo(s.map((function(d){return d.shape})),1),c=Te(u,t[0].dtype).values;if(s[0].shape[0]===1){var l=0;s.forEach((function(d){c.set(o.readSync(d.dataId),l),l+=d.size}))}else{var f=0;s.forEach((function(d){for(var p=o.readSync(d.dataId),v=0,m=0;m<d.shape[0];++m)for(var g=m*u[1]+f,y=0;y<d.shape[1];++y)c[g+y]=p[v++];f+=d.shape[1]}))}var h=Mo(t.map((function(d){return d.shape})),r);return bt(c,h,t[0].dtype)},n.prototype.neg=function(t){return Y(t,"neg"),this.multiply(ae(-1),t)},n.prototype.add=function(t,r){return t.dtype==="complex64"||r.dtype==="complex64"?this.broadcastedBinaryComplexOp(t.cast("complex64"),r.cast("complex64"),(function(o,i,a,s){return{real:o+a,imag:i+s}})):this.broadcastedBinaryOp(t,r,yt(t.dtype,r.dtype),(function(o,i){return o+i}))},n.prototype.addN=function(t){var r=this;Y(t,"addN");for(var o=t.map((function(l){return r.readSync(l.dataId)})),i=Te(t[0].shape,t[0].dtype),a=i.values,s=0;s<t.length;s++)for(var u=o[s],c=0;c<a.length;c++)a[c]+=u[c];return i.toTensor()},n.prototype.softmax=function(t,r){var o=ft([r],t.shape),i=this.max(t,o),a=Lt(i.shape,o),s=this.subtract(t,i.reshape(a)),u=this.exp(s),c=this.sum(u,o).reshape(a);return this.realDivide(u,c)},n.prototype.subtract=function(t,r){return t.dtype==="complex64"||r.dtype==="complex64"?this.broadcastedBinaryComplexOp(t.cast("complex64"),r.cast("complex64"),(function(o,i,a,s){return{real:o-a,imag:i-s}})):this.broadcastedBinaryOp(t,r,yt(t.dtype,r.dtype),(function(o,i){return o-i}))},n.prototype.pow=function(t,r){return Y([t,r],"pow"),this.broadcastedBinaryOp(t,r,t.dtype,(function(o,i){return Math.pow(o,i)}))},n.prototype.batchMatMul=function(t,r,o,i){Y([t,r],"matMul");for(var a=o?t.shape[1]:t.shape[2],s=o?t.shape[2]:t.shape[1],u=i?r.shape[1]:r.shape[2],c=t.shape[0],l=this.readSync(t.dataId),f=this.readSync(r.dataId),h=o?[t.strides[0],1,t.strides[1]]:[t.strides[0],t.strides[1],1],d=h[0],p=h[1],v=h[2],m=i?[1,r.strides[1],r.strides[0]]:[r.strides[1],1,r.strides[0]],g=m[0],y=m[1],x=m[2],b=s*u,w=Te([c,s,u],t.dtype),_=w.values,A=this.blockSize,R=0;R<c;R++)for(var E=0;E<s;E+=A)for(var S=0;S<u;S+=A)for(var F=0;F<a;F+=A)for(var N=Math.min(E+A,s),U=Math.min(S+A,u),z=Math.min(F+A,a),G=E;G<N;G++)for(var H=S;H<U;H++){for(var O=0,B=F;B<z;B++)O+=l[R*d+G*p+B*v]*f[B*g+H*y+R*x];_[R*b+(G*u+H)]+=O}return w.toTensor()},n.prototype.fusedBatchMatMul=function(t){var r=t.a,o=t.b,i=t.transposeA,a=t.transposeB,s=t.bias,u=t.activation,c=t.preluActivationWeights,l=this.batchMatMul(r,o,i,a);return s&&(l=this.add(l,s)),u&&(l=Ys(this,l,u,c)),l},n.prototype.multiply=function(t,r){return t.dtype==="complex64"||r.dtype==="complex64"?this.broadcastedBinaryComplexOp(t.cast("complex64"),r.cast("complex64"),(function(o,i,a,s){return{real:o*a-i*s,imag:o*s+i*a}})):this.broadcastedBinaryOp(t,r,yt(t.dtype,r.dtype),(function(o,i){return o*i}))},n.prototype.realDivide=function(t,r){return Y([t,r],"realDivide"),this.broadcastedBinaryOp(t,r,"float32",(function(o,i){return o/i}))},n.prototype.floorDiv=function(t,r){return Y([t,r],"floorDiv"),this.broadcastedBinaryOp(t,r,"int32",(function(o,i){return Math.floor(o/i)}))},n.prototype.sum=function(t,r){Y(t,"sum"),Ut("sum",r,t.rank);for(var o=wt(t.shape,r),i=o[0],a=o[1],s=qe(i,yt(t.dtype,"int32")),u=be(a),c=this.readSync(s.dataId),l=this.readSync(t.dataId),f=0;f<c.length;++f){for(var h=f*u,d=0,p=0;p<u;++p)d+=l[h+p];c[f]=d}return s},n.prototype.prod=function(t,r){Y(t,"sum");for(var o=wt(t.shape,r),i=o[0],a=o[1],s=qe(i,yt(t.dtype,"int32")),u=be(a),c=this.readSync(s.dataId),l=this.readSync(t.dataId),f=0;f<c.length;++f){for(var h=f*u,d=1,p=0;p<u;++p)d*=l[h+p];c[f]=d}return s},n.prototype.unsortedSegmentSum=function(t,r,o){Y(t,"unsortedSegmentSum");for(var i=[],a=t.rank-r.rank,s=0;s<a;++s)r=r.expandDims(s+1);for(s=0;s<o;++s){var u=ae(s,"int32"),c=ov(u,r).asType("float32").mul(t).sum(0);i.push(c)}return Xt(i)},n.prototype.argMin=function(t,r){Y(t,"argMin");var o=[r];Ut("argMin",o,t.rank);for(var i=wt(t.shape,o),a=i[0],s=i[1],u=qe(a,"int32"),c=be(s),l=this.readSync(u.dataId),f=this.readSync(t.dataId),h=0;h<l.length;++h){for(var d=h*c,p=f[d],v=0,m=0;m<c;++m){var g=f[d+m];g<p&&(p=g,v=m)}l[h]=v}return u},n.prototype.argMax=function(t,r){Y(t,"argMax");var o=[r];Ut("argMax",o,t.rank);for(var i=wt(t.shape,o),a=i[0],s=i[1],u=qe(a,"int32"),c=be(s),l=this.readSync(u.dataId),f=this.readSync(t.dataId),h=0;h<l.length;++h){for(var d=h*c,p=f[d],v=0,m=0;m<c;++m){var g=f[d+m];g>p&&(p=g,v=m)}l[h]=v}return u},n.prototype.cumsum=function(t,r,o,i){if(Y(t,"cumsum"),r!==t.rank-1)throw new Error("backend.cumsum in CPU expects an inner-most axis="+(t.rank-1)+" but got axis="+r);for(var a=yt(t.dtype,"int32"),s=qe(t.shape,a),u=this.readSync(s.dataId),c=this.readSync(t.dataId),l=t.shape[t.rank-1],f=i?function(m,g){return m+l-g-1}:function(m,g){return m+g},h=0;h<c.length;h+=l)for(var d=0;d<l;d++){var p=f(h,d);if(d===0)u[p]=o?0:c[p];else{var v=f(h,d-1);u[p]=o?c[v]+u[v]:c[p]+u[v]}}return s},n.prototype.equal=function(t,r){return Y([t,r],"equal"),this.broadcastedBinaryOp(t,r,"bool",(function(o,i){return o===i?1:0}))},n.prototype.notEqual=function(t,r){return Y([t,r],"notEqual"),this.broadcastedBinaryOp(t,r,"bool",(function(o,i){return o!==i?1:0}))},n.prototype.less=function(t,r){return Y([t,r],"less"),this.broadcastedBinaryOp(t,r,"bool",(function(o,i){return o<i?1:0}))},n.prototype.lessEqual=function(t,r){return Y([t,r],"lessEqual"),this.broadcastedBinaryOp(t,r,"bool",(function(o,i){return o<=i?1:0}))},n.prototype.greater=function(t,r){return Y([t,r],"greater"),this.broadcastedBinaryOp(t,r,"bool",(function(o,i){return o>i?1:0}))},n.prototype.greaterEqual=function(t,r){return Y([t,r],"greaterEqual"),this.broadcastedBinaryOp(t,r,"bool",(function(o,i){return o>=i?1:0}))},n.prototype.logicalNot=function(t){Y(t,"logicalNot");for(var r=this.readSync(t.dataId),o=new Uint8Array(r.length),i=0;i<r.length;++i)o[i]=r[i]?0:1;return this.makeOutput(o,t.shape,"bool")},n.prototype.logicalAnd=function(t,r){return Y([t,r],"logicalAnd"),this.broadcastedBinaryOp(t,r,"bool",(function(o,i){return o&&i}))},n.prototype.logicalOr=function(t,r){return Y([t,r],"logicalOr"),this.broadcastedBinaryOp(t,r,"bool",(function(o,i){return o||i}))},n.prototype.select=function(t,r,o){Y([t,r,o],"select");for(var i=this.readSync(t.dataId),a=this.readSync(r.dataId),s=this.readSync(o.dataId),u=qe(r.shape,yt(r.dtype,o.dtype)),c=this.readSync(u.dataId),l=0,f=t.rank===0||t.rank>1||r.rank===1?1:be(r.shape.slice(1)),h=0;h<i.length;h++)for(var d=0;d<f;d++)i[h]===1?c[l++]=a[h]:c[l++]=s[h];return u},n.prototype.where=function(t){Y([t],"where");var r=this.readSync(t.dataId);return Ac(t.shape,r)},n.prototype.topk=function(t,r,o){return Y(t,"topk"),Mp(this.readSync(t.dataId),t.shape,t.dtype,r)},n.prototype.min=function(t,r){Y(t,"min"),Ut("min",r,t.rank);for(var o=wt(t.shape,r),i=o[0],a=o[1],s=qe(i,t.dtype),u=be(a),c=this.readSync(s.dataId),l=this.readSync(t.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var v=l[h+p];v<d&&(d=v)}c[f]=d}return s},n.prototype.minimum=function(t,r){return Y([t,r],"minimum"),this.broadcastedBinaryOp(t,r,t.dtype,(function(o,i){return Math.min(o,i)}))},n.prototype.mod=function(t,r){return Y([t,r],"mod"),this.broadcastedBinaryOp(t,r,t.dtype,(function(o,i){var a=o%i;return o<0&&i<0||o>=0&&i>=0?a:(a+i)%i}))},n.prototype.max=function(t,r){Y(t,"max"),Ut("max",r,t.rank);for(var o=wt(t.shape,r),i=o[0],a=o[1],s=qe(i,t.dtype),u=be(a),c=this.readSync(s.dataId),l=this.readSync(t.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var v=l[h+p];v>d&&(d=v)}c[f]=d}return s},n.prototype.maximum=function(t,r){return Y([t,r],"maximum"),this.broadcastedBinaryOp(t,r,t.dtype,(function(o,i){return Math.max(o,i)}))},n.prototype.all=function(t,r){Y(t,"all"),Ut("all",r,t.rank);for(var o=wt(t.shape,r),i=o[0],a=o[1],s=qe(i,t.dtype),u=be(a),c=this.readSync(s.dataId),l=this.readSync(t.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var v=l[h+p];d=d&&v}c[f]=d}return s},n.prototype.any=function(t,r){Y(t,"any"),Ut("any",r,t.rank);for(var o=wt(t.shape,r),i=o[0],a=o[1],s=qe(i,t.dtype),u=be(a),c=this.readSync(s.dataId),l=this.readSync(t.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var v=l[h+p];d=d||v}c[f]=d}return s},n.prototype.squaredDifference=function(t,r){return Y([t,r],"squaredDifference"),this.broadcastedBinaryOp(t,r,t.dtype,(function(o,i){var a=o-i;return a*a}))},n.prototype.ceil=function(t){Y(t,"ceil");for(var r=this.readSync(t.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)o[i]=Math.ceil(r[i]);return this.makeOutput(o,t.shape,"float32")},n.prototype.floor=function(t){Y(t,"floor");for(var r=this.readSync(t.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)o[i]=Math.floor(r[i]);return this.makeOutput(o,t.shape,"float32")},n.prototype.sign=function(t){Y(t,"x");for(var r=this.readSync(t.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)r[i]<0?o[i]=-1:r[i]>0?o[i]=1:o[i]=0;return this.makeOutput(o,t.shape,"float32")},n.prototype.isNaN=function(t){Y(t,"x");for(var r=this.readSync(t.dataId),o=new Uint8Array(r.length),i=0;i<r.length;++i)Number.isNaN(r[i])&&(o[i]=1);return this.makeOutput(o,t.shape,"bool")},n.prototype.isInf=function(t){Y(t,"x");for(var r=this.readSync(t.dataId),o=new Uint8Array(r.length),i=0;i<r.length;++i)Math.abs(r[i])===1/0&&(o[i]=1);return this.makeOutput(o,t.shape,"bool")},n.prototype.isFinite=function(t){Y(t,"x");for(var r=this.readSync(t.dataId),o=new Uint8Array(r.length),i=0;i<r.length;++i)Number.isFinite(r[i])&&(o[i]=1);return this.makeOutput(o,t.shape,"bool")},n.prototype.round=function(t){Y(t,"round");for(var r=this.readSync(t.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i){var a=Math.floor(r[i]);r[i]-a<.5?o[i]=Math.floor(r[i]):r[i]-a>.5?o[i]=Math.ceil(r[i]):o[i]=a%2==0?a:a+1}return this.makeOutput(o,t.shape,"float32")},n.prototype.exp=function(t){Y(t,"exp");for(var r=this.readSync(t.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)o[i]=Math.exp(r[i]);return this.makeOutput(o,t.shape,"float32")},n.prototype.expm1=function(t){Y(t,"expm1");for(var r=this.readSync(t.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)o[i]=Math.expm1(r[i]);return this.makeOutput(o,t.shape,"float32")},n.prototype.log=function(t){Y(t,"log");for(var r=this.readSync(t.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i){var a=r[i];o[i]=Math.log(a)}return this.makeOutput(o,t.shape,"float32")},n.prototype.log1p=function(t){Y(t,"log1p");for(var r=this.readSync(t.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i){var a=r[i];o[i]=Math.log1p(a)}return this.makeOutput(o,t.shape,"float32")},n.prototype.sqrt=function(t){Y(t,"sqrt");for(var r=this.readSync(t.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i){var a=r[i];o[i]=Math.sqrt(a)}return this.makeOutput(o,t.shape,"float32")},n.prototype.rsqrt=function(t){Y(t,"rsqrt");for(var r=this.readSync(t.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i){var a=r[i];o[i]=1/Math.sqrt(a)}return this.makeOutput(o,t.shape,"float32")},n.prototype.reciprocal=function(t){Y(t,"reciprocal");for(var r=this.readSync(t.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)o[i]=1/r[i];return this.makeOutput(o,t.shape,"float32")},n.prototype.linear=function(t){return t},n.prototype.relu=function(t){Y(t,"relu");for(var r=qe(t.shape,t.dtype),o=this.readSync(r.dataId),i=this.readSync(t.dataId),a=0;a<i.length;++a)o[a]=Math.max(0,i[a]);return r},n.prototype.relu6=function(t){Y(t,"relu");for(var r=qe(t.shape,t.dtype),o=this.readSync(r.dataId),i=this.readSync(t.dataId),a=0;a<i.length;++a)o[a]=Math.min(Math.max(0,i[a]),6);return r},n.prototype.prelu=function(t,r){return Y([t,r],"prelu"),this.broadcastedBinaryOp(t,r,t.dtype,(function(o,i){return o<0?i*o:o}))},n.prototype.elu=function(t){Y(t,"elu");for(var r=new Float32Array(t.size),o=this.readSync(t.dataId),i=0;i<o.length;++i){var a=o[i];r[i]=a>=0?a:Math.exp(a)-1}return this.makeOutput(r,t.shape,"float32")},n.prototype.eluDer=function(t,r){Y([t,r],"eluDer");for(var o=new Float32Array(r.size),i=this.readSync(r.dataId),a=this.readSync(t.dataId),s=0;s<i.length;++s){var u=i[s];o[s]=u>=1?a[s]:a[s]*(u+1)}return this.makeOutput(o,r.shape,"float32")},n.prototype.selu=function(t){Y(t,"selu");for(var r=Dc,o=Tc,i=new Float32Array(t.size),a=this.readSync(t.dataId),s=0;s<a.length;++s){var u=a[s];i[s]=u>=0?o*u:r*(Math.exp(u)-1)}return this.makeOutput(i,t.shape,"float32")},n.prototype.clip=function(t,r,o){Y(t,"clip");for(var i=new Float32Array(t.size),a=this.readSync(t.dataId),s=0;s<a.length;++s){var u=a[s];i[s]=u>o?o:u<r?r:u}return this.makeOutput(i,t.shape,"float32")},n.prototype.abs=function(t){for(var r=new Float32Array(t.size),o=this.readSync(t.dataId),i=0;i<o.length;++i)r[i]=Math.abs(o[i]);return this.makeOutput(r,t.shape,"float32")},n.prototype.complexAbs=function(t){for(var r=new Float32Array(t.size),o=this.readSync(t.dataId),i=0;i<t.size;++i){var a=o[2*i],s=o[2*i+1];r[i]=Math.hypot(a,s)}return this.makeOutput(r,t.shape,"float32")},n.prototype.int=function(t){Y(t,"int");for(var r=new Int32Array(t.size),o=this.readSync(t.dataId),i=0;i<o.length;++i)r[i]=o[i];return this.makeOutput(r,t.shape,"int32")},n.prototype.sigmoid=function(t){Y(t,"sigmoid");for(var r=new Float32Array(t.size),o=this.readSync(t.dataId),i=0;i<o.length;++i)r[i]=1/(1+Math.exp(-o[i]));return this.makeOutput(r,t.shape,"float32")},n.prototype.softplus=function(t){Y(t,"softplus");for(var r=Math.log(11920928955078125e-23)+2,o=new Float32Array(t.size),i=this.readSync(t.dataId),a=0;a<i.length;++a){var s=i[a]>-r,u=i[a]<r,c=Math.exp(i[a]),l=void 0;l=u?c:s?i[a]:Math.log(1+c),o[a]=l}return this.makeOutput(o,t.shape,"float32")},n.prototype.sin=function(t){Y(t,"sin");for(var r=new Float32Array(t.size),o=this.readSync(t.dataId),i=0;i<o.length;++i)r[i]=Math.sin(o[i]);return this.makeOutput(r,t.shape,"float32")},n.prototype.cos=function(t){Y(t,"cos");for(var r=new Float32Array(t.size),o=this.readSync(t.dataId),i=0;i<o.length;++i)r[i]=Math.cos(o[i]);return this.makeOutput(r,t.shape,"float32")},n.prototype.tan=function(t){Y(t,"tan");for(var r=new Float32Array(t.size),o=this.readSync(t.dataId),i=0;i<o.length;++i)r[i]=Math.tan(o[i]);return this.makeOutput(r,t.shape,"float32")},n.prototype.asin=function(t){Y(t,"asin");for(var r=new Float32Array(t.size),o=this.readSync(t.dataId),i=0;i<o.length;++i)r[i]=Math.asin(o[i]);return this.makeOutput(r,t.shape,"float32")},n.prototype.acos=function(t){Y(t,"acos");for(var r=new Float32Array(t.size),o=this.readSync(t.dataId),i=0;i<o.length;++i)r[i]=Math.acos(o[i]);return this.makeOutput(r,t.shape,"float32")},n.prototype.atan=function(t){Y(t,"atan");for(var r=new Float32Array(t.size),o=this.readSync(t.dataId),i=0;i<o.length;++i)r[i]=Math.atan(o[i]);return this.makeOutput(r,t.shape,"float32")},n.prototype.atan2=function(t,r){return Y([t,r],"atan2"),this.broadcastedBinaryOp(t,r,t.dtype,(function(o,i){return Math.atan2(o,i)}))},n.prototype.sinh=function(t){Y(t,"sinh");for(var r=new Float32Array(t.size),o=this.readSync(t.dataId),i=0;i<o.length;++i)r[i]=Math.sinh(o[i]);return this.makeOutput(r,t.shape,"float32")},n.prototype.cosh=function(t){Y(t,"cosh");for(var r=new Float32Array(t.size),o=this.readSync(t.dataId),i=0;i<o.length;++i)r[i]=Math.cosh(o[i]);return this.makeOutput(r,t.shape,"float32")},n.prototype.tanh=function(t){Y(t,"tanh");for(var r=new Float32Array(t.size),o=this.readSync(t.dataId),i=0;i<o.length;++i)r[i]=Ib(o[i]);return this.makeOutput(r,t.shape,"float32")},n.prototype.asinh=function(t){Y(t,"asinh");for(var r=new Float32Array(t.size),o=this.readSync(t.dataId),i=0;i<o.length;++i)r[i]=Math.asinh(o[i]);return this.makeOutput(r,t.shape,"float32")},n.prototype.acosh=function(t){Y(t,"acosh");for(var r=new Float32Array(t.size),o=this.readSync(t.dataId),i=0;i<o.length;++i)r[i]=Math.acosh(o[i]);return this.makeOutput(r,t.shape,"float32")},n.prototype.atanh=function(t){Y(t,"atanh");for(var r=new Float32Array(t.size),o=this.readSync(t.dataId),i=0;i<o.length;++i)r[i]=Math.atanh(o[i]);return this.makeOutput(r,t.shape,"float32")},n.prototype.erf=function(t){Y(t,"erf");for(var r=new Float32Array(t.size),o=this.readSync(t.dataId),i=0;i<o.length;++i){var a=Math.sign(o[i]),s=Math.abs(o[i]),u=1/(1+.3275911*s);r[i]=a*(1-((((1.061405429*u-1.453152027)*u+1.421413741)*u-.284496736)*u+.254829592)*u*Math.exp(-s*s))}return this.makeOutput(r,t.shape,"float32")},n.prototype.step=function(t,r){r===void 0&&(r=0),Y(t,"step");for(var o=new Float32Array(t.size),i=this.readSync(t.dataId),a=0;a<i.length;++a){var s=i[a];isNaN(s)?o[a]=NaN:o[a]=s>0?1:r}return this.makeOutput(o,t.shape,"float32")},n.prototype.fusedConv2d=function(t){var r=t.input,o=t.filter,i=t.convInfo,a=t.bias,s=t.activation,u=t.preluActivationWeights,c=this.conv2d(r,o,i);return a&&(c=this.add(c,a)),s&&(c=Ys(this,c,s,u)),c},n.prototype.conv2d=function(t,r,o){Y([t,r],"conv2d");for(var i=o.filterHeight,a=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,f=o.dataFormat==="channelsLast",h=Te(o.outShape,t.dtype),d=t.strides[0],p=f?t.strides[1]:t.strides[2],v=f?t.strides[2]:1,m=f?1:t.strides[1],g=h.strides[0],y=f?h.strides[1]:h.strides[2],x=f?h.strides[2]:1,b=f?1:h.strides[1],w=this.readSync(t.dataId),_=this.readSync(r.dataId),A=h.values,R=0;R<o.batchSize;++R)for(var E=R*d,S=R*g,F=0;F<o.outHeight;++F)for(var N=S+F*y,U=F*o.strideHeight-l,z=0;z<i;z++){var G=U+z*s;if(!(G<0||G>=o.inHeight))for(var H=z*r.strides[0],O=E+G*p,B=0;B<o.outWidth;++B)for(var $=N+B*x,J=B*o.strideWidth-c,oe=0;oe<a;oe++){var le=J+oe*u;if(!(le<0||le>=o.inWidth))for(var de=O+le*v,Re=H+oe*r.strides[1],Se=0;Se<o.inChannels;++Se){for(var Ie=w[de+Se*m],L=0;L<o.outChannels;++L)A[$+L*b]+=Ie*_[Re+L];Re+=o.outChannels}}}return h.toTensor()},n.prototype.conv3d=function(t,r,o){for(var i=o.filterDepth,a=o.filterHeight,s=o.filterWidth,u=o.dilationDepth,c=o.dilationHeight,l=o.dilationWidth,f=o.padInfo.front,h=o.padInfo.left,d=o.padInfo.top,p=Te(o.outShape,t.dtype),v=this.readSync(t.dataId),m=this.readSync(r.dataId),g=p.values,y=0;y<o.batchSize;++y)for(var x=y*t.strides[0],b=y*p.strides[0],w=0;w<o.outDepth;++w)for(var _=b+w*p.strides[1],A=w*o.strideDepth-f,R=0;R<i;R++){var E=A+R*u;if(!(E<0||E>=o.inDepth))for(var S=R*r.strides[0],F=x+E*t.strides[1],N=0;N<o.outHeight;++N)for(var U=_+N*p.strides[2],z=N*o.strideHeight-d,G=0;G<a;G++){var H=z+G*c;if(!(H<0||H>=o.inHeight))for(var O=S+G*r.strides[1],B=F+H*t.strides[2],$=0;$<o.outWidth;++$)for(var J=U+$*o.outChannels,oe=$*o.strideWidth-h,le=0;le<s;le++){var de=oe+le*l;if(!(de<0||de>=o.inWidth))for(var Re=O+le*r.strides[2],Se=B+de*o.inChannels,Ie=Re,L=0;L<o.inChannels;++L){for(var ee=v[Se+L],Q=0;Q<o.outChannels;++Q)g[J+Q]+=ee*m[Ie+Q];Ie+=o.outChannels}}}}return p.toTensor()},n.prototype.conv2dDerInput=function(t,r,o){Y([t,r],"conv2dDerInput");for(var i=Te(o.inShape,"float32"),a=i.values,s=this.readSync(t.dataId),u=this.readSync(r.dataId),c=r.strides,l=c[0],f=c[1],h=c[2],d=o.batchSize,p=o.filterHeight,v=o.filterWidth,m=o.inChannels,g=o.inHeight,y=o.inWidth,x=o.outChannels,b=o.outHeight,w=o.outWidth,_=o.strideHeight,A=o.strideWidth,R=o.dataFormat,E=p-1-o.padInfo.top,S=v-1-o.padInfo.left,F=R==="channelsLast",N=i.strides[0],U=F?i.strides[1]:i.strides[2],z=F?i.strides[2]:1,G=F?1:i.strides[1],H=t.strides[0],O=F?t.strides[1]:t.strides[2],B=F?t.strides[2]:1,$=F?1:t.strides[1],J=0;J<d;++J)for(var oe=0;oe<m;++oe)for(var le=0;le<g;++le)for(var de=le-E,Re=Math.max(0,Math.ceil(de/_)),Se=Math.min(b,(p+de)/_),Ie=0;Ie<y;++Ie){for(var L=Ie-S,ee=Math.max(0,Math.ceil(L/A)),Q=Math.min(w,(v+L)/A),ie=0,se=Re;se<Se;++se)for(var Ee=se*_-de,he=ee;he<Q;++he)for(var ge=H*J+O*se+B*he,D=l*(p-1-Ee)+f*(v-1-(he*A-L))+h*oe,k=0;k<x;++k)ie+=s[ge+$*k]*u[D+k];a[N*J+U*le+z*Ie+G*oe]=ie}return i.toTensor()},n.prototype.conv3dDerInput=function(t,r,o){for(var i=Te(o.inShape,"float32"),a=i.values,s=i.strides,u=s[0],c=s[1],l=s[2],f=s[3],h=this.readSync(t.dataId),d=t.strides,p=d[0],v=d[1],m=d[2],g=d[3],y=this.readSync(r.dataId),x=r.strides,b=x[0],w=x[1],_=x[2],A=x[3],R=o.batchSize,E=o.filterDepth,S=o.filterHeight,F=o.filterWidth,N=o.inChannels,U=o.inDepth,z=o.inHeight,G=o.inWidth,H=o.outChannels,O=o.outDepth,B=o.outHeight,$=o.outWidth,J=o.strideDepth,oe=o.strideHeight,le=o.strideWidth,de=E-1-o.padInfo.front,Re=S-1-o.padInfo.top,Se=F-1-o.padInfo.left,Ie=0;Ie<R;++Ie)for(var L=0;L<N;++L)for(var ee=0;ee<U;++ee)for(var Q=ee-de,ie=Math.max(0,Math.ceil(Q/J)),se=Math.min(O,(E+Q)/J),Ee=0;Ee<z;++Ee)for(var he=Ee-Re,ge=Math.max(0,Math.ceil(he/oe)),D=Math.min(B,(S+he)/oe),k=0;k<G;++k){for(var M=k-Se,K=Math.max(0,Math.ceil(M/le)),j=Math.min($,(F+M)/le),te=0,re=ie;re<se;++re)for(var ne=re*J-Q,X=ge;X<D;++X)for(var Z=X*oe-he,ce=K;ce<j;++ce)for(var ye=p*Ie+v*re+m*X+g*ce,ue=b*(E-1-ne)+w*(S-1-Z)+_*(F-1-(ce*le-M))+A*L,Ce=0;Ce<H;++Ce)te+=h[ye+Ce]*y[ue+Ce];a[u*Ie+c*ee+l*Ee+f*k+L]=te}return i.toTensor()},n.prototype.conv2dDerFilter=function(t,r,o){Y([t,r],"conv2dDerFilter");for(var i=o.strideHeight,a=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dataFormat==="channelsLast",l=Te(o.filterShape,"float32"),f=o.padInfo.left,h=o.padInfo.top,d=this.bufferSync(t),p=this.bufferSync(r),v=0;v<s;++v)for(var m=Math.max(0,Math.ceil((h-v)/i)),g=Math.min(o.outHeight,(o.inHeight+h-v)/i),y=0;y<u;++y)for(var x=Math.max(0,Math.ceil((f-y)/a)),b=Math.min(o.outWidth,(o.inWidth+f-y)/a),w=0;w<o.inChannels;++w)for(var _=0;_<o.outChannels;++_){for(var A=0,R=0;R<o.batchSize;++R)for(var E=m;E<g;++E)for(var S=v+E*i-h,F=x;F<b;++F){var N=y+F*a-f;A+=c?d.get(R,S,N,w)*p.get(R,E,F,_):d.get(R,w,S,N)*p.get(R,_,E,F)}l.set(A,v,y,w,_)}return l.toTensor()},n.prototype.conv3dDerFilter=function(t,r,o){for(var i=o.strideDepth,a=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,f=Te(o.filterShape,"float32"),h=f.values,d=f.strides,p=d[0],v=d[1],m=d[2],g=d[3],y=this.readSync(r.dataId),x=r.strides,b=x[0],w=x[1],_=x[2],A=x[3],R=this.readSync(t.dataId),E=t.strides,S=E[0],F=E[1],N=E[2],U=E[3],z=o.padInfo.front,G=o.padInfo.left,H=o.padInfo.top,O=0;O<u;++O)for(var B=Math.max(0,Math.ceil((z-O)/i)),$=Math.min(o.outDepth,(o.inDepth+z-O)/i),J=O*p,oe=0;oe<c;++oe)for(var le=Math.max(0,Math.ceil((H-oe)/a)),de=Math.min(o.outHeight,(o.inHeight+H-oe)/a),Re=oe*v+J,Se=0;Se<l;++Se)for(var Ie=Math.max(0,Math.ceil((G-Se)/s)),L=Math.min(o.outWidth,(o.inWidth+G-Se)/s),ee=Se*m+Re,Q=0;Q<o.inChannels;++Q)for(var ie=Q*g+ee,se=0;se<o.outChannels;++se){for(var Ee=0,he=0;he<o.batchSize;++he)for(var ge=he*S,D=he*b,k=B;k<$;++k)for(var M=(O+k*i-z)*F+ge,K=k*w+D,j=le;j<de;++j)for(var te=(oe+j*a-H)*N+M,re=j*_+K,ne=Ie;ne<L;++ne){var X=ne*A+re;Ee+=R[(Se+ne*s-G)*U+te+Q]*y[X+se]}h[ie+se]=Ee}return f.toTensor()},n.prototype.fusedDepthwiseConv2D=function(t){var r=t.input,o=t.filter,i=t.convInfo,a=t.bias,s=t.activation,u=t.preluActivationWeights,c=this.depthwiseConv2D(r,o,i);return a&&(c=this.add(c,a)),s&&(c=Ys(this,c,s,u)),c},n.prototype.depthwiseConv2D=function(t,r,o){Y([t,r],"depthwiseConv2D");for(var i=o.filterHeight,a=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,f=o.outChannels/o.inChannels,h=Te(o.outShape,t.dtype),d=this.readSync(t.dataId),p=this.readSync(r.dataId),v=h.values,m=0;m<o.batchSize;++m)for(var g=m*t.strides[0],y=m*h.strides[0],x=0;x<o.outHeight;++x)for(var b=y+x*h.strides[1],w=x*o.strideHeight-c,_=0;_<i;++_){var A=w+_*s;if(!(A<0||A>=o.inHeight))for(var R=_*r.strides[0],E=g+A*t.strides[1],S=0;S<o.outWidth;++S)for(var F=b+S*h.strides[2],N=S*o.strideWidth-l,U=0;U<a;++U){var z=N+U*u;if(!(z<0||z>=o.inWidth))for(var G=R+U*r.strides[1],H=E+z*o.inChannels,O=F,B=G,$=0;$<o.inChannels;++$){for(var J=d[H+$],oe=0;oe<f;++oe)v[O+oe]+=J*p[B+oe];O+=f,B+=f}}}return h.toTensor()},n.prototype.depthwiseConv2DDerInput=function(t,r,o){Y([t,r],"depthwiseConv2DDerInput");for(var i=Te(o.inShape,"float32"),a=i.values,s=i.strides,u=s[0],c=s[1],l=s[2],f=this.readSync(t.dataId),h=t.strides,d=h[0],p=h[1],v=h[2],m=this.readSync(r.dataId),g=r.strides,y=g[0],x=g[1],b=g[2],w=o.batchSize,_=o.filterHeight,A=o.filterWidth,R=o.inChannels,E=o.inHeight,S=o.inWidth,F=o.outChannels,N=o.outHeight,U=o.outWidth,z=o.strideHeight,G=o.strideWidth,H=_-1-o.padInfo.top,O=A-1-o.padInfo.left,B=F/R,$=0;$<w;++$)for(var J=0;J<R;++J)for(var oe=0;oe<E;++oe)for(var le=oe-H,de=Math.max(0,Math.ceil(le/z)),Re=Math.min(N,(_+le)/z),Se=0;Se<S;++Se){for(var Ie=Se-O,L=Math.max(0,Math.ceil(Ie/G)),ee=Math.min(U,(A+Ie)/G),Q=0,ie=de;ie<Re;++ie)for(var se=ie*z-le,Ee=L;Ee<ee;++Ee)for(var he=d*$+p*ie+v*Ee,ge=y*(_-1-se)+x*(A-1-(Ee*G-Ie))+b*J,D=0;D<B;++D)Q+=f[he+(J*B+D)]*m[ge+D];a[u*$+c*oe+l*Se+J]=Q}return i.toTensor()},n.prototype.depthwiseConv2DDerFilter=function(t,r,o){Y([t,r],"depthwiseConv2DDerFilter");for(var i=o.strideHeight,a=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=Te(o.filterShape,"float32"),l=o.padInfo.left,f=o.padInfo.top,h=o.outChannels/o.inChannels,d=this.bufferSync(t),p=this.bufferSync(r),v=0;v<s;++v)for(var m=Math.max(0,Math.ceil((f-v)/i)),g=Math.min(o.outHeight,(o.inHeight+f-v)/i),y=0;y<u;++y)for(var x=Math.max(0,Math.ceil((l-y)/a)),b=Math.min(o.outWidth,(o.inWidth+l-y)/a),w=0;w<o.outChannels;++w){for(var _=Math.trunc(w/h),A=w%h,R=0,E=0;E<o.batchSize;++E)for(var S=m;S<g;++S)for(var F=v+S*i-f,N=x;N<b;++N){var U=y+N*a-l;R+=d.get(E,F,U,_)*p.get(E,S,N,w)}c.set(R,v,y,_,A)}return c.toTensor()},n.prototype.tile=function(t,r){return Y(t,"tile"),Pp(this.bufferSync(t),r)},n.prototype.pad=function(t,r,o){Y(t,"pad");var i=r.map((function(h,d){return h[0]+t.shape[d]+h[1]})),a=r.map((function(h){return h[0]})),s=this.bufferSync(t),u=Te(i,t.dtype);o!==0&&u.values.fill(o);for(var c=0;c<t.size;c++){var l=s.indexToLoc(c),f=l.map((function(h,d){return h+a[d]}));u.set.apply(u,[s.get.apply(s,l)].concat(f))}return u.toTensor()},n.prototype.transpose=function(t,r){Y(t,"transpose");for(var o=new Array(t.rank),i=0;i<o.length;i++)o[i]=t.shape[r[i]];var a=this.readSync(t.dataId),s=Te(o,t.dtype),u=this.bufferSync(t);for(i=0;i<t.size;++i){for(var c=u.indexToLoc(i),l=new Array(c.length),f=0;f<l.length;f++)l[f]=c[r[f]];var h=s.locToIndex(l);s.values[h]=a[i]}return s.toTensor()},n.prototype.gather=function(t,r,o){Y([t,r],"gather");var i=t.shape.slice(),a=this.readSync(r.dataId);i[o]=a.length;for(var s=Te(i,t.dtype),u=this.bufferSync(t),c=0;c<s.size;++c){var l=s.indexToLoc(c),f=l.slice();f[o]=a[l[o]];var h=u.locToIndex(f);s.values[c]=u.values[h]}return s.toTensor()},n.prototype.batchToSpaceND=function(t,r,o){Y([t],"batchToSpaceND");var i=r.reduce((function(f,h){return f*h})),a=_a(t.shape,r,i),s=Ca(a.length,r.length),u=Ea(t.shape,r,i),c=wp(o,r.length),l=_p(u,o,r.length);return t.reshape(a).transpose(s).reshape(u).slice(c,l)},n.prototype.spaceToBatchND=function(t,r,o){Y([t],"spaceToBatchND");var i=r.reduce((function(h,d){return h*d})),a=[[0,0]];a.push.apply(a,o);for(var s=1+r.length;s<t.shape.length;++s)a.push([0,0]);var u=t.pad(a),c=_a(u.shape,r,i,!1),l=Ca(c.length,r.length,!1),f=Ea(u.shape,r,i,!1);return u.reshape(c).transpose(l).reshape(f)},n.prototype.pool=function(t,r,o){Y(t,"pool");for(var i=r.strideHeight,a=r.strideWidth,s=r.dilationHeight,u=r.dilationWidth,c=r.effectiveFilterHeight,l=r.effectiveFilterWidth,f=r.padInfo.top,h=r.padInfo.left,d=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,p=this.readSync(t.dataId),v=Te(r.outShape,t.dtype),m=v.values,g=r.outShape[1]*r.outShape[2]*r.outShape[3],y=r.outShape[2]*r.outShape[3],x=r.outShape[3],b=0;b<r.batchSize;++b)for(var w=b*g,_=b*t.strides[0],A=0;A<r.inChannels;++A)for(var R=0;R<r.outHeight;++R)for(var E=R*i-f,S=Math.max(0,E),F=Math.min(r.inHeight,c+E),N=w+R*y,U=0;U<r.outWidth;++U){for(var z=U*a-h,G=Math.max(0,z),H=Math.min(r.inWidth,l+z),O=d,B=0,$=0,J=S;J<F;J+=s){for(var oe=_+J*t.strides[1],le=G;le<H;le+=u){var de=p[oe+le*t.strides[2]+A];o==="max"&&de>O?O=de:o==="avg"&&(B+=de,$++)}if(isNaN(O))break}m[N+U*x+A]=o==="avg"?B/$:O}return v.toTensor()},n.prototype.maxPool=function(t,r){return this.pool(t,r,"max")},n.prototype.maxPoolPositions=function(t,r){for(var o=Te(r.outShape,"int32"),i=r.strideHeight,a=r.strideWidth,s=r.dilationHeight,u=r.dilationWidth,c=r.effectiveFilterHeight,l=r.effectiveFilterWidth,f=r.padInfo.top,h=r.padInfo.left,d=this.bufferSync(t),p=0;p<r.batchSize;++p)for(var v=0;v<r.inChannels;++v)for(var m=0;m<r.outHeight;++m){for(var g=m*i-f,y=g;y<0;)y+=s;for(var x=Math.min(r.inHeight,c+g),b=0;b<r.outWidth;++b){for(var w=b*a-h,_=w;_<0;)_+=u;for(var A=Math.min(r.inWidth,l+w),R=Number.NEGATIVE_INFINITY,E=-1,S=y;S<x;S+=s)for(var F=S-g,N=_;N<A;N+=u){var U=N-w,z=d.get(p,S,N,v);z>R&&(R=z,E=F*l+U)}o.set(E,p,m,b,v)}}return o.toTensor()},n.prototype.maxPoolBackprop=function(t,r,o,i){Y([r,o],"maxPoolBackprop");for(var a=this.maxPoolPositions(r,i),s=i.strideHeight,u=i.strideWidth,c=i.dilationHeight,l=i.dilationWidth,f=i.effectiveFilterHeight,h=i.effectiveFilterWidth,d=h-1-i.padInfo.left,p=f-1-i.padInfo.top,v=Te(r.shape,"float32"),m=this.bufferSync(a),g=this.bufferSync(t),y=0;y<i.batchSize;++y)for(var x=0;x<i.inChannels;++x)for(var b=0;b<i.inHeight;++b)for(var w=0;w<i.inWidth;++w){for(var _=b-p,A=w-d,R=0,E=0;E<f;E+=c){var S=(_+E)/s;if(!(S<0||S>=i.outHeight||Math.floor(S)!==S))for(var F=0;F<h;F+=l){var N=(A+F)/u;if(!(N<0||N>=i.outWidth||Math.floor(N)!==N)){var U=f*h-1-m.get(y,S,N,x)===E*h+F?1:0;U!==0&&(R+=g.get(y,S,N,x)*U)}}}v.set(R,y,b,w,x)}return v.toTensor()},n.prototype.avgPoolBackprop=function(t,r,o){Y([t,r],"avgPoolBackprop");for(var i=o.strideHeight,a=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dilationHeight,l=o.dilationWidth,f=o.effectiveFilterHeight,h=o.effectiveFilterWidth,d=h-1-o.padInfo.left,p=f-1-o.padInfo.top,v=Te(r.shape,"float32"),m=1/(s*u),g=this.bufferSync(t),y=0;y<o.batchSize;++y)for(var x=0;x<o.inChannels;++x)for(var b=0;b<o.inHeight;++b)for(var w=0;w<o.inWidth;++w){for(var _=b-p,A=w-d,R=0,E=0;E<f;E+=c){var S=(_+E)/i;if(!(S<0||S>=o.outHeight||Math.floor(S)!==S))for(var F=0;F<h;F+=l){var N=(A+F)/a;N<0||N>=o.outWidth||Math.floor(N)!==N||(R+=g.get(y,S,N,x))}}v.set(R*m,y,b,w,x)}return v.toTensor()},n.prototype.pool3d=function(t,r,o){Y(t,"pool3d");for(var i=r.strideDepth,a=r.strideHeight,s=r.strideWidth,u=r.dilationDepth,c=r.dilationHeight,l=r.dilationWidth,f=r.effectiveFilterDepth,h=r.effectiveFilterHeight,d=r.effectiveFilterWidth,p=r.padInfo.front,v=r.padInfo.top,m=r.padInfo.left,g=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,y=this.readSync(t.dataId),x=Te(r.outShape,t.dtype),b=x.values,w=r.outShape[1]*r.outShape[2]*r.outShape[3]*r.outShape[4],_=r.outShape[2]*r.outShape[3]*r.outShape[4],A=r.outShape[3]*r.outShape[4],R=r.outShape[4],E=0;E<r.batchSize;++E)for(var S=E*w,F=E*t.strides[0],N=0;N<r.inChannels;++N)for(var U=0;U<r.outDepth;++U){for(var z=U*i-p,G=z;G<0;)G+=u;for(var H=Math.min(r.inDepth,f+z),O=S+U*_,B=0;B<r.outHeight;++B){for(var $=B*a-v,J=$;J<0;)J+=c;for(var oe=Math.min(r.inHeight,h+$),le=O+B*A,de=0;de<r.outWidth;++de){for(var Re=de*s-m,Se=Re;Se<0;)Se+=l;for(var Ie=Math.min(r.inWidth,d+Re),L=le+de*R,ee=g,Q=0,ie=0,se=G;se<H;se+=u){for(var Ee=F+se*t.strides[1],he=J;he<oe;he+=c){for(var ge=Ee+he*t.strides[2],D=Se;D<Ie;D+=l){var k=y[ge+D*t.strides[3]+N];if(o==="max"&&k>ee?ee=k:o==="avg"&&(Q+=k,ie++),isNaN(ee))break}if(isNaN(ee))break}if(isNaN(ee))break}b[L+N]=o==="avg"?Q/ie:ee}}}return x.toTensor()},n.prototype.avgPool3d=function(t,r){return Y(t,"avgPool3d"),this.pool3d(t,r,"avg").toFloat()},n.prototype.avgPool3dBackprop=function(t,r,o){Y([t,r],"avgPool3dBackprop");for(var i=o.strideDepth,a=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,f=o.dilationDepth,h=o.dilationHeight,d=o.dilationWidth,p=o.effectiveFilterDepth,v=o.effectiveFilterHeight,m=o.effectiveFilterWidth,g=p-1-o.padInfo.front,y=m-1-o.padInfo.left,x=v-1-o.padInfo.top,b=Te(r.shape,"float32"),w=1/(u*c*l),_=this.bufferSync(t),A=0;A<o.batchSize;++A)for(var R=0;R<o.inChannels;++R)for(var E=0;E<o.inDepth;++E)for(var S=0;S<o.inHeight;++S)for(var F=0;F<o.inWidth;++F){for(var N=E-g,U=S-x,z=F-y,G=0,H=0;H<p;H+=f){var O=(N+H)/i;if(!(O<0||O>=o.outDepth||Math.floor(O)!==O))for(var B=0;B<v;B+=h){var $=(U+B)/a;if(!($<0||$>=o.outHeight||Math.floor($)!==$))for(var J=0;J<m;J+=d){var oe=(z+J)/s;oe<0||oe>=o.outWidth||Math.floor(oe)!==oe||(G+=_.get(A,O,$,oe,R))}}}b.set(G*w,A,E,S,F,R)}return b.toTensor()},n.prototype.maxPool3d=function(t,r){return Y(t,"maxPool3d"),this.pool3d(t,r,"max").toFloat()},n.prototype.maxPool3dPositions=function(t,r){for(var o=Te(r.outShape,"int32"),i=r.strideDepth,a=r.strideHeight,s=r.strideWidth,u=r.dilationDepth,c=r.dilationHeight,l=r.dilationWidth,f=r.effectiveFilterDepth,h=r.effectiveFilterHeight,d=r.effectiveFilterWidth,p=r.padInfo.front,v=r.padInfo.top,m=r.padInfo.left,g=this.bufferSync(t),y=0;y<r.batchSize;++y)for(var x=0;x<r.inChannels;++x)for(var b=0;b<r.outDepth;++b){for(var w=b*i-p,_=w;_<0;)_+=u;for(var A=Math.min(r.inDepth,f+w),R=0;R<r.outHeight;++R){for(var E=R*a-v,S=E;S<0;)S+=c;for(var F=Math.min(r.inHeight,h+E),N=0;N<r.outWidth;++N){for(var U=N*s-m,z=U;z<0;)z+=l;for(var G=Math.min(r.inWidth,d+U),H=Number.NEGATIVE_INFINITY,O=-1,B=_;B<A;B+=u)for(var $=B-w,J=S;J<F;J+=c)for(var oe=J-E,le=z;le<G;le+=l){var de=le-U,Re=g.get(y,B,J,le,x);Re>=H&&(H=Re,O=$*h*d+oe*h+de)}o.set(O,y,b,R,N,x)}}}return o.toTensor()},n.prototype.maxPool3dBackprop=function(t,r,o,i){Y([r,o],"maxPool3dBackprop");for(var a=this.maxPool3dPositions(r,i),s=i.strideDepth,u=i.strideHeight,c=i.strideWidth,l=i.dilationDepth,f=i.dilationHeight,h=i.dilationWidth,d=i.effectiveFilterDepth,p=i.effectiveFilterHeight,v=i.effectiveFilterWidth,m=d-1-i.padInfo.front,g=v-1-i.padInfo.left,y=p-1-i.padInfo.top,x=Te(r.shape,"float32"),b=this.bufferSync(a),w=this.bufferSync(t),_=0;_<i.batchSize;++_)for(var A=0;A<i.inChannels;++A)for(var R=0;R<i.inDepth;++R)for(var E=0;E<i.inHeight;++E)for(var S=0;S<i.inWidth;++S){for(var F=R-m,N=E-y,U=S-g,z=0,G=0;G<d;G+=l){var H=(F+G)/s;if(!(H<0||H>=i.outDepth||Math.floor(H)!==H))for(var O=0;O<p;O+=f){var B=(N+O)/u;if(!(B<0||B>=i.outHeight||Math.floor(B)!==B))for(var $=0;$<v;$+=h){var J=(U+$)/c;if(!(J<0||J>=i.outWidth||Math.floor(J)!==J)){var oe=d*p*v-1-b.get(_,H,B,J,A)===G*p*v+O*v+$?1:0;oe!==0&&(z+=w.get(_,H,B,J,A)*oe)}}}}x.set(z,_,R,E,S,A)}return x.toTensor()},n.prototype.cast=function(t,r){return Dp(t,r,this)},n.prototype.reshape=function(t,r){return zu(t,r)},n.prototype.avgPool=function(t,r){return Y(t,"avgPool"),this.pool(t,r,"avg").toFloat()},n.prototype.resizeBilinear=function(t,r,o,i){Y(t,"resizeBilinear");for(var a=t.shape,s=a[0],u=a[1],c=a[2],l=a[3],f=this.readSync(t.dataId),h=new Float32Array(be([s,r,o,l])),d=[i&&r>1?u-1:u,i&&o>1?c-1:c],p=[i&&r>1?r-1:r,i&&o>1?o-1:o],v=0,m=d[0]/p[0],g=d[1]/p[1],y=0;y<s;y++)for(var x=0;x<r;x++)for(var b=m*x,w=Math.floor(b),_=b-w,A=Math.min(u-1,Math.ceil(b)),R=y*t.strides[0]+w*t.strides[1],E=y*t.strides[0]+A*t.strides[1],S=0;S<o;S++)for(var F=g*S,N=Math.floor(F),U=F-N,z=Math.min(c-1,Math.ceil(F)),G=R+N*t.strides[2],H=E+N*t.strides[2],O=R+z*t.strides[2],B=E+z*t.strides[2],$=0;$<l;$++){var J=f[G+$],oe=f[H+$],le=J+(f[O+$]-J)*U,de=le+(oe+(f[B+$]-oe)*U-le)*_;h[v++]=de}return bt(h,[s,r,o,l])},n.prototype.resizeBilinearBackprop=function(t,r,o){Y([t,r],"resizeBilinearBackprop");for(var i=r.shape,a=i[0],s=i[1],u=i[2],c=i[3],l=t.shape,f=l[1],h=l[2],d=new Float32Array(a*s*u*c),p=[o&&f>1?s-1:s,o&&h>1?u-1:u],v=[o&&f>1?f-1:f,o&&h>1?h-1:h],m=p[0]/v[0],g=p[1]/v[1],y=this.readSync(t.dataId),x=0,b=0;b<a;b++)for(var w=b*r.strides[0],_=0;_<f;_++)for(var A=_*m,R=Math.floor(A),E=Math.min(Math.ceil(A),s-1),S=w+R*r.strides[1],F=w+E*r.strides[1],N=A-R,U=1-N,z=0;z<h;z++)for(var G=z*g,H=Math.floor(G),O=Math.min(Math.ceil(G),u-1),B=G-H,$=1-B,J=S+H*r.strides[2],oe=S+O*r.strides[2],le=F+H*r.strides[2],de=F+O*r.strides[2],Re=U*$,Se=U*B,Ie=N*$,L=N*B,ee=0;ee<c;ee++){var Q=y[x++];d[J+ee]+=Q*Re,d[oe+ee]+=Q*Se,d[le+ee]+=Q*Ie,d[de+ee]+=Q*L}return Pt(d,[a,u,s,c],r.dtype)},n.prototype.resizeNearestNeighbor=function(t,r,o,i){Y(t,"resizeNearestNeighbor");for(var a=t.shape,s=a[0],u=a[1],c=a[2],l=a[3],f=this.readSync(t.dataId),h=new Float32Array(s*r*o*l),d=[i&&r>1?u-1:u,i&&o>1?c-1:c],p=[i&&r>1?r-1:r,i&&o>1?o-1:o],v=d[0]/p[0],m=d[1]/p[1],g=0,y=0;y<s;y++)for(var x=y*t.strides[0],b=0;b<r;b++)for(var w=v*b,_=x+Math.min(u-1,i?Math.round(w):Math.floor(w))*t.strides[1],A=0;A<o;A++)for(var R=m*A,E=_+Math.min(c-1,i?Math.round(R):Math.floor(R))*t.strides[2],S=0;S<l;S++){var F=f[E+S];h[g++]=F}return bt(h,[s,r,o,l],t.dtype)},n.prototype.resizeNearestNeighborBackprop=function(t,r,o){Y([t,r],"resizeNearestNeighborBackprop");for(var i=r.shape,a=i[0],s=i[1],u=i[2],c=i[3],l=t.shape,f=l[1],h=l[2],d=new Float32Array(a*s*u*c),p=this.readSync(t.dataId),v=[o&&f>1?s-1:s,o&&h>1?u-1:u],m=[o&&f>1?f-1:f,o&&h>1?h-1:h],g=v[0]/m[0],y=v[1]/m[1],x=1/g,b=1/y,w=2*Math.ceil(x)+2,_=2*Math.ceil(b)+2,A=0;A<a;A++)for(var R=A*r.strides[0],E=0;E<s;E++)for(var S=R+E*r.strides[1],F=Math.floor(E*x),N=Math.floor(F-w/2),U=0;U<u;U++)for(var z=S+U*r.strides[2],G=Math.floor(U*b),H=Math.floor(G-_/2),O=0;O<c;O++){for(var B=0,$=0;$<w;$++){var J=$+N;if(!(J<0||J>=f)){var oe=R+J*t.strides[1],le=J*g;if(E===Math.min(s-1,o?Math.round(le):Math.floor(le)))for(var de=0;de<_;de++){var Re=de+H;if(!(Re<0||Re>=h)){var Se=oe+Re*t.strides[2],Ie=Re*y;U===Math.min(u-1,o?Math.round(Ie):Math.floor(Ie))&&(B+=p[Se+O])}}}}d[z+O]=B}return Pt(d,r.shape,r.dtype)},n.prototype.batchNormalization=function(t,r,o,i,a,s){Y([t,r,o,a,s],"batchNorm");for(var u=this.readSync(t.dataId),c=this.readSync(r.dataId),l=this.readSync(o.dataId),f=a?this.readSync(a.dataId):new Float32Array([1]),h=s?this.readSync(s.dataId):new Float32Array([0]),d=new Float32Array(u.length),p=h.length,v=f.length,m=l.length,g=c.length,y=0,x=0,b=0,w=0,_=0;_<u.length;++_)d[_]=h[y++]+(u[_]-c[x++])*f[b++]/Math.sqrt(l[w++]+i),y>=p&&(y=0),x>=g&&(x=0),b>=v&&(b=0),w>=m&&(w=0);return Pt(d,t.shape)},n.prototype.localResponseNormalization4D=function(t,r,o,i,a){Y(t,"localResponseNormalization4D");var s=t.shape[3],u=s-1,c=this.readSync(t.dataId),l=t.size,f=new Float32Array(l);function h(m){for(var g=m%s,y=m-g+Math.max(0,g-r),x=m-g+Math.min(g+r,u),b=0;y<=x;y++){var w=c[y];b+=w*w}return b}for(var d=0;d<l;d++){var p=h(d),v=c[d]*Math.pow(o+i*p,-a);f[d]=v}return Pt(f,t.shape)},n.prototype.LRNGrad=function(t,r,o,i,a,s,u){Y(t,"LRNGrad");for(var c=t.shape[3],l=this.readSync(t.dataId),f=this.readSync(r.dataId),h=this.readSync(o.dataId),d=new Float32Array(t.size),p=t.size,v=0;v<p;v++){for(var m=v%c,g=v-m+Math.max(0,m-i),y=v-m+Math.min(c,m+i+1),x=0,b=g;b<y;b++)x+=Math.pow(f[b],2);for(x=s*x+a,b=g;b<y;b++){var w=-2*s*u*f[b]*h[v]/x;v===b&&(w+=Math.pow(x,-u)),w*=l[v],d[b]+=w}}return Pt(d,t.shape)},n.prototype.multinomial=function(t,r,o,i){Y(t,"multinomial");for(var a=r?t:nr(t),s=a.shape[0],u=a.shape[1],c=qe([s,o],"int32"),l=this.readSync(c.dataId),f=this.readSync(a.dataId),h=0;h<s;++h){var d=h*u,p=new Float32Array(u-1);p[0]=f[d];for(var v=1;v<p.length;++v)p[v]=p[v-1]+f[d+v];for(var m=es(i.toString()),g=h*o,y=0;y<o;++y){var x=m();l[g+y]=p.length;for(var b=0;b<p.length;b++)if(x<p[b]){l[g+y]=b;break}}}return c},n.prototype.oneHot=function(t,r,o,i){Y(t,"oneHot");var a=new Float32Array(t.size*r);a.fill(i);for(var s=this.readSync(t.dataId),u=0;u<t.size;++u)s[u]>=0&&s[u]<r&&(a[u*r+s[u]]=o);return yr(a,[t.size,r],"int32")},n.prototype.nonMaxSuppression=function(t,r,o,i,a){return Y(t,"nonMaxSuppression"),Sc(this.readSync(t.dataId),this.readSync(r.dataId),o,i,a)},n.prototype.fft=function(t){return this.fftBatch(t,!1)},n.prototype.ifft=function(t){return this.fftBatch(t,!0)},n.prototype.fftBatch=function(t,r){for(var o=t.shape[0],i=t.shape[1],a=Te(t.shape,"float32"),s=Te(t.shape,"float32"),u=tn(t).as2D(o,i),c=Sn(t).as2D(o,i),l=0;l<o;l++)for(var f=u.slice([l,0],[1,i]),h=c.slice([l,0],[1,i]),d=gt(f,h),p=this.readSync(this.fftImpl(d,r).dataId),v=0;v<i;v++){var m=Df(p,v);a.values[l*i+v]=m.real,s.values[l*i+v]=m.imag}return gt(a.toTensor(),s.toTensor()).as2D(o,i)},n.prototype.fftImpl=function(t,r){var o=t.as1D(),i=o.size;if(this.isExponentOf2(i)){var a=this.fftRadix2(o,i,r).as2D(t.shape[0],t.shape[1]);return r&&(a=gt(tn(a).div(ae(i)),Sn(a).div(ae(i)))),a}var s=this.readSync(t.dataId),u=(function(c){for(var l=new Float32Array(c.length/2),f=new Float32Array(c.length/2),h=0;h<c.length;h+=2)l[h/2]=c[h],f[h/2]=c[h+1];return{real:l,imag:f}})(this.fourierTransformByMatmul(s,i,r));return gt(u.real,u.imag).as2D(t.shape[0],t.shape[1])},n.prototype.isExponentOf2=function(t){return(t&t-1)==0},n.prototype.fftRadix2=function(t,r,o){if(r===1)return t;var i=this.readSync(t.dataId),a=r/2,s=(function(g){for(var y=Math.ceil(g.length/4),x=new Float32Array(y),b=new Float32Array(y),w=0;w<g.length;w+=4)x[Math.floor(w/4)]=g[w],b[Math.floor(w/4)]=g[w+1];return{real:x,imag:b}})(i),u=gt(s.real,s.imag).as1D(),c=(function(g){for(var y=Math.floor(g.length/4),x=new Float32Array(y),b=new Float32Array(y),w=2;w<g.length;w+=4)x[Math.floor(w/4)]=g[w],b[Math.floor(w/4)]=g[w+1];return{real:x,imag:b}})(i),l=gt(c.real,c.imag).as1D();u=this.fftRadix2(u,a,o),l=this.fftRadix2(l,a,o);var f=(function(g,y){for(var x=new Float32Array(g/2),b=new Float32Array(g/2),w=0;w<Math.ceil(g/2);w++){var _=(y?2:-2)*Math.PI*(w/g);x[w]=Math.cos(_),b[w]=Math.sin(_)}return{real:x,imag:b}})(r,o),h=gt(f.real,f.imag).mul(l),d=u.add(h),p=u.sub(h),v=tn(d).concat(tn(p)),m=Sn(d).concat(Sn(p));return gt(v,m).as1D()},n.prototype.fourierTransformByMatmul=function(t,r,o){for(var i=new Float32Array(2*r),a=0;a<r;a++){for(var s=0,u=0,c=0;c<r;c++){var l=a1(a*c,r,o),f=Df(t,c);s+=f.real*l.real-f.imag*l.imag,u+=f.real*l.imag+f.imag*l.real}o&&(s/=r,u/=r),i1(i,s,u,a)}return i},n.prototype.depthToSpace=function(t,r,o){I(o==="NHWC",(function(){return"Only NHWC dataFormat supported on CPU for depthToSpace. Got "+o})),I(r>1,(function(){return"blockSize should be > 1 for depthToSpace, but was: "+r}));for(var i=t.shape[0],a=t.shape[1],s=t.shape[2],u=t.shape[3],c=a*r,l=s*r,f=u/(r*r),h=this.readSync(t.dataId),d=new Float32Array(i*c*l*f),p=0,v=0;v<i;++v)for(var m=0;m<c;++m)for(var g=Math.floor(m/r),y=m%r,x=0;x<l;++x)for(var b=Math.floor(x/r),w=(y*r+x%r)*f,_=0;_<f;++_){var A=_+w+u*(b+s*(g+a*v));d[p++]=h[A]}return Pt(d,[i,c,l,f])},n.prototype.broadcastedBinaryOp=function(t,r,o,i){var a=Oe(t.shape,r.shape),s=Te(a,o),u=this.readSync(t.dataId),c=this.readSync(r.dataId),l=mr(t.shape,a),f=mr(r.shape,a),h=s.values;if(l.length+f.length===0)for(var d=0;d<h.length;++d)h[d]=i(u[d%u.length],c[d%c.length]);else{var p=this.bufferSync(t),v=this.bufferSync(r),m=function(g){var y=s.indexToLoc(g),x=y.slice(-t.rank);l.forEach((function(A){return x[A]=0}));var b=p.locToIndex(x),w=y.slice(-r.rank);f.forEach((function(A){return w[A]=0}));var _=v.locToIndex(w);h[g]=i(u[b],c[_])};for(d=0;d<h.length;++d)m(d)}return s.toTensor()},n.prototype.broadcastedBinaryComplexOp=function(t,r,o){var i=Oe(t.shape,r.shape),a=Te(i,"float32"),s=Te(i,"float32"),u=this.readSync(t.dataId),c=this.readSync(r.dataId),l=mr(t.shape,i),f=mr(r.shape,i),h=a.values,d=s.values;if(l.length+f.length===0)for(var p=0;p<h.length;p++){var v=p%u.length,m=p%c.length,g=o(u[2*v],u[2*v+1],c[2*m],c[2*m+1]);h[p]=g.real,d[p]=g.imag}else{var y=this.bufferSync(this.data.get(t.dataId).complexTensors.real),x=this.bufferSync(this.data.get(r.dataId).complexTensors.real),b=function(w){var _=a.indexToLoc(w),A=_.slice(-t.rank);l.forEach((function(N){return A[N]=0}));var R=y.locToIndex(A),E=_.slice(-r.rank);f.forEach((function(N){return E[N]=0}));var S=x.locToIndex(E),F=o(u[2*R],u[2*R+1],c[2*S],c[2*S+1]);h[w]=F.real,d[w]=F.imag};for(p=0;p<h.length;p++)b(p)}return this.complex(a.toTensor(),s.toTensor())},n.prototype.split=function(t,r,o){return Fp(t,r,o)},n.prototype.dispose=function(){},n.prototype.floatPrecision=function(){return 32},n.prototype.epsilon=function(){return 1e-7},n.prototype.cropAndResize=function(t,r,o,i,a,s){for(var u=t.shape,c=u[0],l=u[1],f=u[2],h=u[3],d=r.shape[0],p=i[0],v=i[1],m=Te([d,p,v,h],"float32"),g=this.readSync(r.dataId),y=this.readSync(o.dataId),x=this.readSync(t.dataId),b=t.strides,w=m.strides,_=0;_<d;_++){var A=4*_,R=g[A],E=g[A+1],S=g[A+2],F=g[A+3],N=y[_];if(!(N>=c))for(var U=p>1?(S-R)*(l-1)/(p-1):0,z=v>1?(F-E)*(f-1)/(v-1):0,G=0;G<p;G++){var H=p>1?R*(l-1)+G*U:.5*(R+S)*(l-1);if(H<0||H>l-1)for(var O=0;O<v;O++)for(var B=0;B<h;B++){var $=B+O*w[2]+G*w[1]+_*w[0];m.values[$]=s}else if(a==="bilinear"){var J=Math.floor(H),oe=Math.ceil(H),le=H-J;for(O=0;O<v;O++)if((se=v>1?E*(f-1)+O*z:.5*(E+F)*(f-1))<0||se>f-1)for(B=0;B<h;B++)$=B+O*w[2]+G*w[1]+_*w[0],m.values[$]=s;else{var de=Math.floor(se),Re=Math.ceil(se),Se=se-de;for(B=0;B<h;B++){var Ie=x[$=B+de*b[2]+J*b[1]+N*b[0]],L=x[$=B+Re*b[2]+J*b[1]+N*b[0]],ee=x[$=B+de*b[2]+oe*b[1]+N*b[0]],Q=Ie+(L-Ie)*Se,ie=ee+(x[$=B+Re*b[2]+oe*b[1]+N*b[0]]-ee)*Se;$=B+O*w[2]+G*w[1]+_*w[0],m.values[$]=Q+(ie-Q)*le}}}else for(O=0;O<v;++O){var se;if((se=v>1?E*(f-1)+O*z:.5*(E+F)*(f-1))<0||se>f-1)for(B=0;B<h;B++)$=B+O*w[2]+G*w[1]+_*w[0],m.values[$]=s;else{var Ee=Math.round(se),he=Math.round(H);for(B=0;B<h;B++){var ge=B+Ee*b[2]+he*b[1]+N*b[0],D=B+O*w[2]+G*w[1]+_*w[0];m.values[D]=x[ge]}}}}}return m.toTensor()},n.prototype.sparseToDense=function(t,r,o,i){var a=Ra(0,t,o),s=a.sliceRank,u=a.numUpdates,c=a.sliceSize,l=a.strides,f=a.outputSize;return this.scatter(t,r,o,f,c,u,s,l,i,!1)},n.prototype.gatherND=function(t,r){var o=r.shape,i=o[o.length-1],a=Cp(t,r),s=a[0],u=a[1],c=a[2],l=a[3];if(u===0)return bt([],s,t.dtype);for(var f=new di([u,c],t.dtype),h=this.readSync(r.dataId),d=this.readSync(t.dataId),p=0;p<u;p++){for(var v=[],m=0,g=0;g<i;g++){var y=h[p*i+g];m+=y*l[g],v.push(y)}if(m<0||m>=t.size/c)throw new Error("Invalid indices: "+v+" does not index into "+t.shape);for(var x=0;x<c;x++)f.values[p*c+x]=d[m*c+x]}return f.toTensor().reshape(s)},n.prototype.scatterND=function(t,r,o){var i=Ra(0,t,o),a=i.sliceRank,s=i.numUpdates,u=i.sliceSize,c=i.strides,l=i.outputSize,f=ae(0);return this.scatter(t,r,o,l,u,s,a,c,f,!0)},n.prototype.fill=function(t,r,o){var i=va(o=o||Ei(r),be(t));return i.fill(r),P.makeTensor(i,t,o,this)},n.prototype.onesLike=function(t){if(t.dtype==="string")throw new Error("onesLike is not supported for string tensors");return this.fill(t.shape,1,t.dtype)},n.prototype.zerosLike=function(t){var r=va(t.dtype,be(t.shape));return this.makeOutput(r,t.shape,t.dtype)},n.prototype.linspace=function(t,r,o){return Tp(t,r,o)},n.prototype.scatter=function(t,r,o,i,a,s,u,c,l,f){var h=[i/a,a],d=this.readSync(t.dataId),p=this.readSync(r.dataId);if(i===0)return bt([],o,r.dtype);var v=new di(h,r.dtype);v.values.fill(this.readSync(l.dataId)[0]);for(var m=0;m<s;m++){for(var g=[],y=0,x=0;x<u;x++){var b=d[m*u+x];g.push(b),y+=b*c[x]}if(y<0||y>=i/a)throw new Error("Invalid indices: "+g+" does not index into "+o);for(var w=0;w<a;w++)f?v.values[y*a+w]+=p[m*a+w]:v.values[y*a+w]=r.rank===0?p[0]:p[m*a+w]}return v.toTensor().reshape(o)},n})(Ap);P.registerBackend("cpu",(function(){return new SC}),1);for(var Js=0,Qf=[{kernelName:"NonMaxSuppressionV5",backendName:"cpu",kernelFunc:function(e){var n=e.inputs,t=e.backend,r=e.attrs,o=n,i=o.boxes,a=o.scores,s=r,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,f=s.softNmsSigma,h=t;Y(i,"NonMaxSuppressionWithScore");var d=Ic(h.data.get(i.dataId).values,h.data.get(a.dataId).values,u,c,l,f);return[d.selectedIndices,d.selectedScores]}},{kernelName:"Square",backendName:"cpu",kernelFunc:function(e){var n=e.inputs,t=e.backend,r=n.x,o=t;Y(r,"square");for(var i=o.data.get(r.dataId).values,a=new Float32Array(i.length),s=0;s<i.length;++s){var u=i[s];a[s]=u*u}return{dataId:o.write(a,r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}},{kernelName:mi,backendName:"cpu",kernelFunc:function(e){var n=e.inputs,t=e.backend,r=n,o=r.a,i=r.b,a=t;Y([o,i],mi);var s=a.data.get(o.dataId).values,u=a.data.get(i.dataId).values,c=(function(h,d,p,v,m,g){var y=Oe(h,d),x=y.length,b=Tn(y),w=hi(m,be(y)),_=h.length,A=d.length,R=Tn(h),E=Tn(d),S=mr(h,y),F=mr(d,y);if(S.length+F.length===0)for(var N=0;N<w.length;++N)w[N]=g(p[N%p.length],v[N%v.length]);else{var U=function(z){var G=Ob(z,x,b),H=G.slice(-_);S.forEach((function(J){return H[J]=0}));var O=wf(H,_,R),B=G.slice(-A);F.forEach((function(J){return B[J]=0}));var $=wf(B,A,E);w[z]=g(p[O],v[$])};for(N=0;N<w.length;++N)U(N)}return[w,y]})(o.shape,i.shape,s,u,o.dtype,(function(h,d){var p=h-d;return p*p})),l=c[0],f=c[1];return{dataId:a.write(l,f,o.dtype),shape:f,dtype:o.dtype}}}];Js<Qf.length;Js++)np(Qf[Js]);var oo,IC=function(e){this.variableNames=["A"];var n=Et(),t=e[0],r=e[1];this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+r+".0, "+t+`.0);

        vec4 values = `+n.texture2D+`(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `},AC=function(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var n=Et(),t=e[0],r=e[1];this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(`+r+".0, "+t+`.0);
            vec4 values = `+n.texture2D+`(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        `+n.output+` = result;
      }
    `};for(var Qs=0,Zf=[{kernelName:"FromPixels",backendName:"webgl",kernelFunc:function(e){var n=e.inputs,t=e.backend,r=e.attrs,o=n.pixels,i=r.numChannels,a=typeof HTMLVideoElement<"u"&&o instanceof HTMLVideoElement,s=typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement,u=a?[o.videoWidth,o.videoHeight]:[o.width,o.height],c=u[0],l=u[1],f=[l,c],h=[l,c,i];(s||a)&&(oo==null&&(oo=document.createElement("canvas").getContext("2d")),oo.canvas.width=c,oo.canvas.height=l,oo.drawImage(o,0,0,c,l),o=oo.canvas);var d=t.makeTensorInfo(f,"int32");t.texData.get(d.dataId).usage=qt.PIXELS,t.gpgpu.uploadPixelDataToTexture(t.getTexture(d.dataId),o);var p=q().getBool("WEBGL_PACK")?new AC(h):new IC(h),v=t.runWebGLProgram(p,[d],"int32");return t.disposeData(d.dataId),v}},{kernelName:"NonMaxSuppressionV5",backendName:"webgl",kernelFunc:function(e){var n=e.inputs,t=e.backend,r=e.attrs;ba("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");var o=n,i=o.boxes,a=o.scores,s=r,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,f=s.softNmsSigma,h=t,d=Ic(h.readSync(i.dataId),h.readSync(a.dataId),u,c,l,f);return[d.selectedIndices,d.selectedScores]}},{kernelName:"Square",backendName:"webgl",kernelFunc:function(e){var n=e.inputs,t=e.backend,r=n.x,o=t,i=new Fe(r.shape,"return x * x;");return o.runWebGLProgram(i,[r],r.dtype)}},{kernelName:mi,backendName:"webgl",kernelFunc:function(e){var n=e.inputs,t=e.backend,r=n,o=r.a,i=r.b,a=t,s=q().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Gn("return (a - b) * (a - b);",o.shape,i.shape):new Ze("return (a - b) * (a - b);",o.shape,i.shape);return a.compileAndRun(s,[o,i])}}];Qs<Zf.length;Qs++)np(Zf[Qs]);for(var Zs=0,eh=[{kernelName:"Square",gradFunc:function(e,n){var t=n[0];return{x:function(){return e.mul(t.toFloat().mul(2))}}}},{kernelName:mi,gradFunc:function(e,n){var t=n[0],r=n[1],o=ae(2);return{a:function(){return At(e,At(o,lt(t,r)))},b:function(){return At(e,At(o,lt(r,t)))}}}}];Zs<eh.length;Zs++)Rb(eh[Zs]);var kC=(function(){function e(){}return e.prototype.fetch=function(n,t){return fetch(n,t)},e.prototype.now=function(){return performance.now()},e.prototype.encode=function(n,t){if(t!=="utf-8"&&t!=="utf8")throw new Error("Browser's encoder only supports utf-8, but got "+t);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(n)},e.prototype.decode=function(n,t){return new TextDecoder(t).decode(n)},e})();q().get("IS_BROWSER")&&q().setPlatform("browser",new kC);var eu,DC=function(){return require("node-fetch")},TC=(function(){function e(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}return e.prototype.fetch=function(n,t){return q().global.fetch!=null?q().global.fetch(n,t):(eu==null&&(eu=DC()),eu(n,t))},e.prototype.now=function(){var n=process.hrtime();return 1e3*n[0]+n[1]/1e6},e.prototype.encode=function(n,t){if(t!=="utf-8"&&t!=="utf8")throw new Error("Node built-in encoder only supports utf-8, but got "+t);return this.textEncoder.encode(n)},e.prototype.decode=function(n,t){return n.length===0?"":new this.util.TextDecoder(t).decode(n)},e})();q().get("IS_NODE")&&q().setPlatform("node",new TC);var ju={float32:4,int32:4,uint16:2,uint8:1,bool:1},Na=4;function Rv(e,n){for(var t={},r=0,o=function(s){var u=s.name,c=s.dtype,l=s.shape,f=be(l),h=void 0;if("quantization"in s){var d=s.quantization;if(d.dtype!=="uint8"&&d.dtype!=="uint16")throw new Error("Weight "+s.name+" has unknown quantization dtype "+d.dtype+". Supported quantization dtypes are: 'uint8' and 'uint16'.");var p=ju[d.dtype],v=e.slice(r,r+f*p),m=d.dtype==="uint8"?new Uint8Array(v):new Uint16Array(v);if(c==="float32")h=Float32Array.from(m,(function(_){return _*d.scale+d.min}));else{if(c!=="int32")throw new Error("Unsupported dtype in weight '"+u+"': "+c);h=Int32Array.from(m,(function(_){return Math.round(_*d.scale+d.min)}))}r+=f*p}else if(c==="string"){var g=be(s.shape);h=[];for(var y=0;y<g;y++){var x=new Uint32Array(e.slice(r,r+Na))[0];r+=Na;var b=new Uint8Array(e.slice(r,r+x));h.push(b),r+=x}}else{var w=ju[c];if(v=e.slice(r,r+f*w),c==="float32")h=new Float32Array(v);else if(c==="int32")h=new Int32Array(v);else{if(c!=="bool")throw new Error("Unsupported dtype in weight '"+u+"': "+c);h=new Uint8Array(v)}r+=f*w}t[u]=bt(h,l,c)},i=0,a=n;i<a.length;i++)o(a[i]);return t}function NC(e){if(e===null)throw new Error("Invalid input value: "+JSON.stringify(e));var n=0,t=[];e.forEach((function(i){if(n+=i.byteLength,t.push(i.byteLength===i.buffer.byteLength?i:new i.constructor(i)),!(i instanceof Float32Array||i instanceof Int32Array||i instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+i.constructor.name)}));var r=new Uint8Array(n),o=0;return t.forEach((function(i){r.set(new Uint8Array(i.buffer),o),o+=i.byteLength})),r.buffer}var qu=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function th(e){return qu?Buffer.byteLength(e):new Blob([e]).size}function qc(e){var n=0;e.forEach((function(o){n+=o.byteLength}));var t=new Uint8Array(n),r=0;return e.forEach((function(o){t.set(new Uint8Array(o),r),r+=o.byteLength})),t.buffer}function nh(e){for(e=e.trim();e.endsWith("/");)e=e.slice(0,e.length-1);var n=e.split("/");return n[n.length-1]}function Ti(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:e.modelTopology==null?0:th(JSON.stringify(e.modelTopology)),weightSpecsBytes:e.weightSpecs==null?0:th(JSON.stringify(e.weightSpecs)),weightDataBytes:e.weightData==null?0:e.weightData.byteLength}}var Kt=(function(){function e(){this.saveRouters=[],this.loadRouters=[]}return e.getInstance=function(){return e.instance==null&&(e.instance=new e),e.instance},e.registerSaveRouter=function(n){e.getInstance().saveRouters.push(n)},e.registerLoadRouter=function(n){e.getInstance().loadRouters.push(n)},e.getSaveHandlers=function(n){return e.getHandlers(n,"save")},e.getLoadHandlers=function(n,t){return e.getHandlers(n,"load",t)},e.getHandlers=function(n,t,r){var o=[];return(t==="load"?e.getInstance().loadRouters:e.getInstance().saveRouters).forEach((function(i){var a=i(n,r);a!==null&&o.push(a)})),o},e})(),xo="://",br=(function(){function e(){this.managers={}}return e.getInstance=function(){return e.instance==null&&(e.instance=new e),e.instance},e.registerManager=function(n,t){I(n!=null,(function(){return"scheme must not be undefined or null."})),n.endsWith(xo)&&(n=n.slice(0,n.indexOf(xo))),I(n.length>0,(function(){return"scheme must not be an empty string."}));var r=e.getInstance();I(r.managers[n]==null,(function(){return"A model store manager is already registered for scheme '"+n+"'."})),r.managers[n]=t},e.getManager=function(n){var t=this.getInstance().managers[n];if(t==null)throw new Error("Cannot find model manager for scheme '"+n+"'");return t},e.getSchemes=function(){return Object.keys(this.getInstance().managers)},e})();function oa(e){if(e.indexOf(xo)===-1)throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+br.getSchemes().join(","));return{scheme:e.split(xo)[0],path:e.split(xo)[1]}}function rh(e,n,t){return t===void 0&&(t=!1),pe(this,void 0,void 0,(function(){var r,o,i,a,s,u,c,l,f;return ve(this,(function(h){switch(h.label){case 0:return I(e!==n,(function(){return"Old path and new path are the same: '"+e+"'"})),I((r=Kt.getLoadHandlers(e)).length>0,(function(){return"Copying failed because no load handler is found for source URL "+e+"."})),I(r.length<2,(function(){return"Copying failed because more than one ("+r.length+") load handlers for source URL "+e+"."})),o=r[0],I((i=Kt.getSaveHandlers(n)).length>0,(function(){return"Copying failed because no save handler is found for destination URL "+n+"."})),I(i.length<2,(function(){return"Copying failed because more than one ("+r.length+") save handlers for destination URL "+n+"."})),a=i[0],s=oa(e).scheme,u=oa(e).path,c=s===oa(e).scheme,[4,o.load()];case 1:return l=h.sent(),t&&c?[4,br.getManager(s).removeModel(u)]:[3,3];case 2:h.sent(),h.label=3;case 3:return[4,a.save(l)];case 4:return f=h.sent(),!t||c?[3,6]:[4,br.getManager(s).removeModel(u)];case 5:h.sent(),h.label=6;case 6:return[2,f.modelArtifactsInfo]}}))}))}var Wr="models_store",gr="model_info_store";function Sv(){if(!q().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var e=window||self,n=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(n==null)throw new Error("The current browser does not appear to support IndexedDB.");return n}function Ku(e){var n=e.result;n.createObjectStore(Wr,{keyPath:"modelPath"}),n.createObjectStore(gr,{keyPath:"modelPath"})}var wo=(function(){function e(n){if(this.indexedDB=Sv(),n==null||!n)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=n}return e.prototype.save=function(n){return pe(this,void 0,void 0,(function(){return ve(this,(function(t){if(n.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return[2,this.databaseAction(this.modelPath,n)]}))}))},e.prototype.load=function(){return pe(this,void 0,void 0,(function(){return ve(this,(function(n){return[2,this.databaseAction(this.modelPath)]}))}))},e.prototype.databaseAction=function(n,t){var r=this;return new Promise((function(o,i){var a=r.indexedDB.open("tensorflowjs",1);a.onupgradeneeded=function(){return Ku(a)},a.onsuccess=function(){var s=a.result;if(t==null){var u=s.transaction(Wr,"readonly"),c=u.objectStore(Wr).get(r.modelPath);c.onsuccess=function(){if(c.result==null)return s.close(),i(new Error("Cannot find model with path '"+r.modelPath+"' in IndexedDB."));o(c.result.modelArtifacts)},c.onerror=function(v){return s.close(),i(c.error)},u.oncomplete=function(){return s.close()}}else{var l,f=Ti(t),h=s.transaction(gr,"readwrite"),d=h.objectStore(gr),p=d.put({modelPath:r.modelPath,modelArtifactsInfo:f});p.onsuccess=function(){var v=(l=s.transaction(Wr,"readwrite")).objectStore(Wr).put({modelPath:r.modelPath,modelArtifacts:t,modelArtifactsInfo:f});v.onsuccess=function(){return o({modelArtifactsInfo:f})},v.onerror=function(m){var g=(d=h.objectStore(gr)).delete(r.modelPath);g.onsuccess=function(){return s.close(),i(v.error)},g.onerror=function(y){return s.close(),i(v.error)}}},p.onerror=function(v){return s.close(),i(p.error)},h.oncomplete=function(){l==null?s.close():l.oncomplete=function(){return s.close()}}}},a.onerror=function(s){return i(a.error)}}))},e.URL_SCHEME="indexeddb://",e})(),oh=function(e){return q().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(wo.URL_SCHEME)?(n=e.slice(wo.URL_SCHEME.length),new wo(n)):null;var n};Kt.registerSaveRouter(oh),Kt.registerLoadRouter(oh);var FC=(function(){function e(){this.indexedDB=Sv()}return e.prototype.listModels=function(){return pe(this,void 0,void 0,(function(){var n=this;return ve(this,(function(t){return[2,new Promise((function(r,o){var i=n.indexedDB.open("tensorflowjs",1);i.onupgradeneeded=function(){return Ku(i)},i.onsuccess=function(){var a=i.result,s=a.transaction(gr,"readonly"),u=s.objectStore(gr).getAll();u.onsuccess=function(){for(var c={},l=0,f=u.result;l<f.length;l++){var h=f[l];c[h.modelPath]=h.modelArtifactsInfo}r(c)},u.onerror=function(c){return a.close(),o(u.error)},s.oncomplete=function(){return a.close()}},i.onerror=function(a){return o(i.error)}}))]}))}))},e.prototype.removeModel=function(n){return pe(this,void 0,void 0,(function(){var t=this;return ve(this,(function(r){var o;return n=(o=n).startsWith(wo.URL_SCHEME)?o.slice(wo.URL_SCHEME.length):o,[2,new Promise((function(i,a){var s=t.indexedDB.open("tensorflowjs",1);s.onupgradeneeded=function(){return Ku(s)},s.onsuccess=function(){var u,c=s.result,l=c.transaction(gr,"readwrite"),f=l.objectStore(gr),h=f.get(n);h.onsuccess=function(){if(h.result==null)return c.close(),a(new Error("Cannot find model with path '"+n+"' in IndexedDB."));var d=f.delete(n),p=function(){var v=(u=c.transaction(Wr,"readwrite")).objectStore(Wr).delete(n);v.onsuccess=function(){return i(h.result.modelArtifactsInfo)},v.onerror=function(m){return a(h.error)}};d.onsuccess=p,d.onerror=function(v){return p(),c.close(),a(h.error)}},h.onerror=function(d){return c.close(),a(h.error)},l.oncomplete=function(){u==null?c.close():u.oncomplete=function(){return c.close()}}},s.onerror=function(u){return a(s.error)}}))]}))}))},e})();if(q().getBool("IS_BROWSER"))try{br.registerManager(wo.URL_SCHEME,new FC)}catch{}var $n="/",ho="tensorflowjs_models",Iv="info",PC="model_topology",MC="weight_specs",OC="weight_data",BC="model_metadata";function Av(e){return{info:[ho,e,Iv].join($n),topology:[ho,e,PC].join($n),weightSpecs:[ho,e,MC].join($n),weightData:[ho,e,OC].join($n),modelMetadata:[ho,e,BC].join($n)}}function LC(e){var n=e.split($n);if(n.length<3)throw new Error("Invalid key format: "+e);return n.slice(1,n.length-1).join($n)}var _o=(function(){function e(n){if(!q().getBool("IS_BROWSER")||typeof window>"u"||window.localStorage===void 0)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,n==null||!n)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=n,this.keys=Av(this.modelPath)}return e.prototype.save=function(n){return pe(this,void 0,void 0,(function(){var t,r,o;return ve(this,(function(i){if(n.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");t=JSON.stringify(n.modelTopology),r=JSON.stringify(n.weightSpecs),o=Ti(n);try{return this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,(function(a){if(qu)return Buffer.from(a).toString("base64");for(var s=new Uint8Array(a),u="",c=0,l=s.length;c<l;c++)u+=String.fromCharCode(s[c]);return btoa(u)})(n.weightData)),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy,userDefinedMetadata:n.userDefinedMetadata})),[2,{modelArtifactsInfo:o}]}catch{throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error("Failed to save model '"+this.modelPath+"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes="+o.modelTopologyBytes+", weightSpecsBytes="+o.weightSpecsBytes+", weightDataBytes="+o.weightDataBytes+".")}return[2]}))}))},e.prototype.load=function(){return pe(this,void 0,void 0,(function(){var n,t,r,o,i,a,s;return ve(this,(function(u){if((n=JSON.parse(this.LS.getItem(this.keys.info)))==null)throw new Error("In local storage, there is no model with name '"+this.modelPath+"'");if(n.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(t={},(r=JSON.parse(this.LS.getItem(this.keys.topology)))==null)throw new Error("In local storage, the topology of model '"+this.modelPath+"' is missing.");if(t.modelTopology=r,(o=JSON.parse(this.LS.getItem(this.keys.weightSpecs)))==null)throw new Error("In local storage, the weight specs of model '"+this.modelPath+"' are missing.");if(t.weightSpecs=o,(i=this.LS.getItem(this.keys.modelMetadata))!=null&&(a=JSON.parse(i),t.format=a.format,t.generatedBy=a.generatedBy,t.convertedBy=a.convertedBy,t.userDefinedMetadata=a.userDefinedMetadata),(s=this.LS.getItem(this.keys.weightData))==null)throw new Error("In local storage, the binary weight values of model '"+this.modelPath+"' are missing.");return t.weightData=(function(c){if(qu){var l=Buffer.from(c,"base64");return l.buffer.slice(l.byteOffset,l.byteOffset+l.byteLength)}for(var f=atob(c),h=new Uint8Array(f.length),d=0;d<f.length;++d)h.set([f.charCodeAt(d)],d);return h.buffer})(s),[2,t]}))}))},e.URL_SCHEME="localstorage://",e})(),ih=function(e){return q().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(_o.URL_SCHEME)?(n=e.slice(_o.URL_SCHEME.length),new _o(n)):null;var n};Kt.registerSaveRouter(ih),Kt.registerLoadRouter(ih);var WC=(function(){function e(){I(q().getBool("IS_BROWSER"),(function(){return"Current environment is not a web browser"})),I(typeof window>"u"||window.localStorage!==void 0,(function(){return"Current browser does not appear to support localStorage"})),this.LS=window.localStorage}return e.prototype.listModels=function(){return pe(this,void 0,void 0,(function(){var n,t,r,o,i,a;return ve(this,(function(s){for(n={},t=ho+$n,r=$n+Iv,o=0;o<this.LS.length;++o)(i=this.LS.key(o)).startsWith(t)&&i.endsWith(r)&&(a=LC(i),n[a]=JSON.parse(this.LS.getItem(i)));return[2,n]}))}))},e.prototype.removeModel=function(n){return pe(this,void 0,void 0,(function(){var t,r;return ve(this,(function(o){var i;if(n=(i=n).startsWith(_o.URL_SCHEME)?i.slice(_o.URL_SCHEME.length):i,t=Av(n),this.LS.getItem(t.info)==null)throw new Error("Cannot find model at path '"+n+"'");return r=JSON.parse(this.LS.getItem(t.info)),this.LS.removeItem(t.info),this.LS.removeItem(t.topology),this.LS.removeItem(t.weightSpecs),this.LS.removeItem(t.weightData),[2,r]}))}))},e})();if(q().getBool("IS_BROWSER"))try{br.registerManager(_o.URL_SCHEME,new WC)}catch{}var VC="model",UC=".json",zC=".weights.bin";function ah(e){return new Promise((function(n){return setTimeout(n)})).then(e)}var tu=(function(){function e(n){if(!q().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");n.startsWith(e.URL_SCHEME)&&(n=n.slice(e.URL_SCHEME.length)),n!=null&&n.length!==0||(n=VC),this.modelTopologyFileName=n+UC,this.weightDataFileName=n+zC}return e.prototype.save=function(n){return pe(this,void 0,void 0,(function(){var t,r,o,i,a,s;return ve(this,(function(u){switch(u.label){case 0:if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");if(t=window.URL.createObjectURL(new Blob([n.weightData],{type:"application/octet-stream"})),!(n.modelTopology instanceof ArrayBuffer))return[3,1];throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");case 1:return r=[{paths:["./"+this.weightDataFileName],weights:n.weightSpecs}],o={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy,weightsManifest:r},i=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),(a=this.jsonAnchor==null?document.createElement("a"):this.jsonAnchor).download=this.modelTopologyFileName,a.href=i,[4,ah((function(){return a.dispatchEvent(new MouseEvent("click"))}))];case 2:return u.sent(),n.weightData==null?[3,4]:((s=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,s.href=t,[4,ah((function(){return s.dispatchEvent(new MouseEvent("click"))}))]);case 3:u.sent(),u.label=4;case 4:return[2,{modelArtifactsInfo:Ti(n)}]}}))}))},e.URL_SCHEME="downloads://",e})(),GC=(function(){function e(n){if(n==null||n.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+n);this.files=n}return e.prototype.load=function(){return pe(this,void 0,void 0,(function(){var n,t,r=this;return ve(this,(function(o){return n=this.files[0],t=this.files.slice(1),[2,new Promise((function(i,a){var s=new FileReader;s.onload=function(u){var c=JSON.parse(u.target.result),l=c.modelTopology;if(l!=null){t.length===0&&i({modelTopology:l});var f=c.weightsManifest;if(f!=null){var h;try{h=r.checkManifestAndWeightFiles(f,t)}catch(m){return void a(m)}var d=[],p=[],v=[];f.forEach((function(m){m.paths.forEach((function(g){p.push(g),v.push(null)})),d.push.apply(d,m.weights)})),f.forEach((function(m){m.paths.forEach((function(g){var y=new FileReader;y.onload=function(x){var b=x.target.result,w=p.indexOf(g);v[w]=b,v.indexOf(null)===-1&&i({modelTopology:l,weightSpecs:d,weightData:qc(v),format:c.format,generatedBy:c.generatedBy,convertedBy:c.convertedBy,userDefinedMetadata:c.userDefinedMetadata})},y.onerror=function(x){return a("Failed to weights data from file of path '"+g+"'.")},y.readAsArrayBuffer(h[g])}))}))}else a(new Error("weightManifest field is missing from file "+n.name))}else a(new Error("modelTopology field is missing from file "+n.name))},s.onerror=function(u){return a("Failed to read model topology and weights manifest JSON from file '"+n.name+"'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")},s.readAsText(n)}))]}))}))},e.prototype.checkManifestAndWeightFiles=function(n,t){for(var r=[],o=t.map((function(u){return nh(u.name)})),i={},a=0,s=n;a<s.length;a++)s[a].paths.forEach((function(u){var c=nh(u);if(r.indexOf(c)!==-1)throw new Error("Duplicate file basename found in weights manifest: '"+c+"'");if(r.push(c),o.indexOf(c)===-1)throw new Error("Weight file with basename '"+c+"' is not provided.");i[u]=t[o.indexOf(c)]}));if(r.length!==t.length)throw new Error("Mismatch in the number of files in weights manifest ("+r.length+") and the number of weight files provided ("+t.length+").");return i},e})();function sh(e,n,t,r){(function(i){I(i!=null&&Array.isArray(i)&&i.length>0,(function(){return"promises must be a none empty array"}))})(e),(function(i,a){I(i>=0&&i<=1,(function(){return"Progress fraction must be in range [0, 1], but got startFraction "+i})),I(a>=0&&a<=1,(function(){return"Progress fraction must be in range [0, 1], but got endFraction "+a})),I(a>=i,(function(){return"startFraction must be no more than endFraction, but got startFraction "+i+" and endFraction "+a}))})(t=t??0,r=r??1);var o=0;return Promise.all(e.map((function(i){return i.then((function(a){var s=t+ ++o/e.length*(r-t);return n(s),a})),i})))}function kv(e,n){return pe(this,void 0,void 0,(function(){var t,r,o,i,a,s,u,c,l;return ve(this,(function(f){switch(f.label){case 0:return n==null&&(n={}),t=n.fetchFunc==null?q().platform.fetch:n.fetchFunc,r=e.map((function(h){return t(h,n.requestInit,{isBinary:!0})})),o=0,i=.5,n.onProgress!=null?[3,2]:[4,Promise.all(r)];case 1:return a=f.sent(),[3,4];case 2:return[4,sh(r,n.onProgress,o,i)];case 3:a=f.sent(),f.label=4;case 4:return s=a.map((function(h){return h.arrayBuffer()})),u=.5,c=1,n.onProgress!=null?[3,6]:[4,Promise.all(s)];case 5:return l=f.sent(),[3,8];case 6:return[4,sh(s,n.onProgress,u,c)];case 7:l=f.sent(),f.label=8;case 8:return[2,l]}}))}))}function uh(e){var n=this;return function(t,r,o){return r===void 0&&(r=""),pe(n,void 0,void 0,(function(){var i,a,s,u,c,l,f,h,d,p;return ve(this,(function(v){switch(v.label){case 0:if(i=t.map((function(){return!1})),a={},s=o!=null?o.map((function(){return!1})):[],u=[],t.forEach((function(m,g){var y=0;m.weights.forEach((function(x){var b="quantization"in x?x.quantization.dtype:x.dtype,w=ju[b]*be(x.shape),_=function(){i[g]=!0,a[g]==null&&(a[g]=[]),a[g].push({manifestEntry:x,groupOffset:y,sizeBytes:w})};o!=null?o.forEach((function(A,R){A===x.name&&(_(),s[R]=!0)})):_(),u.push(x.name),y+=w}))})),!s.every((function(m){return m})))throw c=o.filter((function(m,g){return!s[g]})),new Error("Could not find weights in manifest with names: "+c.join(", ")+`. 
Manifest JSON has weights with names: `+u.join(", ")+".");return l=i.reduce((function(m,g,y){return g&&m.push(y),m}),[]),f=[],l.forEach((function(m){t[m].paths.forEach((function(g){var y=r+(r.endsWith("/")?"":"/")+g;f.push(y)}))})),[4,e(f)];case 1:return h=v.sent(),d={},p=0,l.forEach((function(m){for(var g=t[m].paths.length,y=0,x=0;x<g;x++)y+=h[p+x].byteLength;for(var b=new ArrayBuffer(y),w=new Uint8Array(b),_=0,A=0;A<g;A++){var R=new Uint8Array(h[p+A]);w.set(R,_),_+=R.byteLength}a[m].forEach((function(E){var S=Rv(b.slice(E.groupOffset,E.groupOffset+E.sizeBytes),[E.manifestEntry]);for(var F in S)d[F]=S[F]})),p+=g})),[2,d]}}))}))}}Kt.registerSaveRouter((function(e){return q().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(tu.URL_SCHEME)?(function(n){return n===void 0&&(n="model"),new tu(n)})(e.slice(tu.URL_SCHEME.length)):null}));var Dv=(function(){function e(n,t){if(this.DEFAULT_METHOD="POST",t==null&&(t={}),this.weightPathPrefix=t.weightPathPrefix,this.onProgress=t.onProgress,t.fetchFunc!=null?(I(typeof t.fetchFunc=="function",(function(){return"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"})),this.fetch=t.fetchFunc):this.fetch=q().platform.fetch,I(n!=null&&n.length>0,(function(){return"URL path for http must not be null, undefined or empty."})),Array.isArray(n)&&I(n.length===2,(function(){return"URL paths for http must have a length of 2, (actual length is "+n.length+")."})),this.path=n,t.requestInit!=null&&t.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=t.requestInit||{}}return e.prototype.save=function(n){return pe(this,void 0,void 0,(function(){var t,r,o,i;return ve(this,(function(a){switch(a.label){case 0:if(n.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return(t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,r=[{paths:["./model.weights.bin"],weights:n.weightSpecs}],o={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy,userDefinedMetadata:n.userDefinedMetadata,weightsManifest:r},t.body.append("model.json",new Blob([JSON.stringify(o)],{type:"application/json"}),"model.json"),n.weightData!=null&&t.body.append("model.weights.bin",new Blob([n.weightData],{type:"application/octet-stream"}),"model.weights.bin"),[4,this.fetch(this.path,t)];case 1:if((i=a.sent()).ok)return[2,{modelArtifactsInfo:Ti(n),responses:[i]}];throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+i.status+".")}}))}))},e.prototype.load=function(){return pe(this,void 0,void 0,(function(){var n,t,r,o,i,a,s,u,c,l,f,h;return ve(this,(function(d){switch(d.label){case 0:return[4,this.fetch(this.path,this.requestInit)];case 1:if(!(n=d.sent()).ok)throw new Error("Request to "+this.path+" failed with status code "+n.status+". Please verify this URL points to the model JSON of the model to load.");d.label=2;case 2:return d.trys.push([2,4,,5]),[4,n.json()];case 3:return t=d.sent(),[3,5];case 4:throw d.sent(),r="Failed to parse model JSON of response from "+this.path+".",this.path.endsWith(".pb")?r+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":r+=" Please make sure the server is serving valid JSON for this request.",new Error(r);case 5:if(o=t.modelTopology,i=t.weightsManifest,a=t.generatedBy,s=t.convertedBy,u=t.format,c=t.userDefinedMetadata,o==null&&i==null)throw new Error("The JSON from HTTP path "+this.path+" contains neither model topology or manifest for weights.");return i==null?[3,7]:[4,this.loadWeights(i)];case 6:h=d.sent(),l=h[0],f=h[1],d.label=7;case 7:return[2,{modelTopology:o,weightSpecs:l,weightData:f,userDefinedMetadata:c,generatedBy:a,convertedBy:s,format:u}]}}))}))},e.prototype.loadWeights=function(n){return pe(this,void 0,void 0,(function(){var t,r,o,i,a,s,u,c,l,f,h;return ve(this,(function(d){switch(d.label){case 0:for(t=Array.isArray(this.path)?this.path[1]:this.path,r=(function(p){var v=p.lastIndexOf("/"),m=p.lastIndexOf("?"),g=p.substring(0,v),y=m>v?p.substring(m):"";return[g+"/",y]})(t),o=r[0],i=r[1],a=this.weightPathPrefix||o,s=[],u=0,c=n;u<c.length;u++)l=c[u],s.push.apply(s,l.weights);return f=[],n.forEach((function(p){p.paths.forEach((function(v){f.push(a+v+i)}))})),[4,kv(f,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress})];case 1:return h=d.sent(),[2,[s,qc(h)]]}}))}))},e.URL_SCHEME_REGEX=/^https?:\/\//,e})();function $u(e){return e.match(Dv.URL_SCHEME_REGEX)!=null}var ch=function(e,n){return typeof fetch>"u"?null:(Array.isArray(e)?e.every((function(t){return $u(t)})):$u(e))?Xu(e,{onProgress:n}):null};function Xu(e,n){return new Dv(e,n)}Kt.registerSaveRouter(ch),Kt.registerLoadRouter(ch);var nu=(function(){function e(n){this.modelArtifacts=n}return e.prototype.load=function(){return pe(this,void 0,void 0,(function(){return ve(this,(function(n){return[2,this.modelArtifacts]}))}))},e})(),HC=(function(){function e(n){this.saveHandler=n}return e.prototype.save=function(n){return pe(this,void 0,void 0,(function(){return ve(this,(function(t){return[2,this.saveHandler(n)]}))}))},e})(),Tv=Object.freeze({browserFiles:function(e){return new GC(e)},browserHTTPRequest:function(e,n){return Xu(e,n)},concatenateArrayBuffers:qc,decodeWeights:Rv,encodeWeights:function(e,n){return pe(this,void 0,void 0,(function(){var t,r,o,i,a,s=this;return ve(this,(function(u){switch(u.label){case 0:for(t=[],r=[],o=Array.isArray(e)?e.map((function(c){return c.name})):Object.keys(e),i=function(c){var l=o[c],f=Array.isArray(e)?e[c].tensor:e[l];if(f.dtype!=="float32"&&f.dtype!=="int32"&&f.dtype!=="bool"&&f.dtype!=="string")throw new Error("Unsupported dtype in weight '"+l+"': "+f.dtype);var h={name:l,shape:f.shape,dtype:f.dtype};if(f.dtype==="string"){var d=new Promise((function(p){return pe(s,void 0,void 0,(function(){var v,m,g,y,x,b,w;return ve(this,(function(_){switch(_.label){case 0:return[4,f.bytes()];case 1:for(v=_.sent(),m=v.reduce((function(A,R){return A+R.length}),0)+Na*v.length,g=new Uint8Array(m),y=0,x=0;x<v.length;x++)b=v[x],w=new Uint8Array(new Uint32Array([b.length]).buffer),g.set(w,y),y+=Na,g.set(b,y),y+=b.length;return p(g),[2]}}))}))}));r.push(d)}else r.push(f.data());n!=null&&(h.group=n),t.push(h)},a=0;a<o.length;++a)i(a);return[4,Promise.all(r)];case 1:return[2,{data:NC(u.sent()),specs:t}]}}))}))},fromMemory:function(e,n,t,r){return arguments.length===1?e.modelTopology!=null||e.weightSpecs!=null?new nu(e):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new nu({modelTopology:e})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new nu({modelTopology:e,weightSpecs:n,weightData:t,trainingConfig:r}))},getLoadHandlers:function(e,n){return Kt.getLoadHandlers(e,n)},getModelArtifactsInfoForJSON:Ti,getSaveHandlers:function(e){return Kt.getSaveHandlers(e)},http:Xu,isHTTPScheme:$u,loadWeights:function(e,n,t,r){return n===void 0&&(n=""),pe(this,void 0,void 0,(function(){return ve(this,(function(o){return[2,uh((function(i){return kv(i,{requestInit:r})}))(e,n,t)]}))}))},registerLoadRouter:function(e){return Kt.registerLoadRouter(e)},registerSaveRouter:function(e){return Kt.registerSaveRouter(e)},weightsLoaderFactory:uh,withSaveHandler:function(e){return new HC(e)},copyModel:function(e,n){return pe(this,void 0,void 0,(function(){return ve(this,(function(t){return[2,rh(e,n,!1)]}))}))},listModels:function(){return pe(this,void 0,void 0,(function(){var e,n,t,r,o,i,a;return ve(this,(function(s){switch(s.label){case 0:e=br.getSchemes(),n={},t=0,r=e,s.label=1;case 1:return t<r.length?(o=r[t],[4,br.getManager(o).listModels()]):[3,4];case 2:for(a in i=s.sent())n[o+xo+a]=i[a];s.label=3;case 3:return t++,[3,1];case 4:return[2,n]}}))}))},moveModel:function(e,n){return pe(this,void 0,void 0,(function(){return ve(this,(function(t){return[2,rh(e,n,!0)]}))}))},removeModel:function(e){return pe(this,void 0,void 0,(function(){var n;return ve(this,(function(t){return n=oa(e),[2,br.getManager(n.scheme).removeModel(n.path)]}))}))}}),io;T({confusionMatrix_:function(e,n,t){var r=C(e,"labels","confusionMatrix"),o=C(n,"predictions","confusionMatrix");I(t==null||t>0&&Number.isInteger(t),(function(){return"If provided, numClasses must be a positive integer, but got "+t})),I(r.rank===1,(function(){return"Expected the rank of labels to be 1, but got "+r.rank})),I(o.rank===1,(function(){return"Expected the rank of predictions to be 1, but got "+o.rank})),I(r.shape[0]===o.shape[0],(function(){return"Mismatch in the number of examples: "+r.shape[0]+" vs. "+o.shape[0]+". Labels and predictions should have the same number of elements."})),I(t>0&&Number.isInteger(t),(function(){return"numClasses is required to be a positive integer, but got "+t}));var i=Vu(r.asType("int32"),t),a=Vu(o.asType("int32"),t);return i.transpose().matMul(a).asType("int32")}});var jC=T({fromPixels_:function(e,n){if(n===void 0&&(n=3),n>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(e==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");var t=!1,r=!1,o=!1,i=!1,a=!1;if(e.data instanceof Uint8Array)t=!0;else if(typeof ImageData<"u"&&e instanceof ImageData)r=!0;else if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)o=!0;else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement)i=!0;else{if(e.getContext==null)throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+e.constructor.name);a=!0}if(o&&o&&e.readyState<2)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");if(tp("FromPixels",P.backendName)!=null)return P.runKernel("FromPixels",{pixels:e},{numChannels:n});var s,u,c=o?[e.videoWidth,e.videoHeight]:[e.width,e.height],l=c[0],f=c[1];if(a?s=e.getContext("2d").getImageData(0,0,l,f).data:r||t?s=e.data:(i||o)&&(io==null&&(io=document.createElement("canvas").getContext("2d")),io.canvas.width=l,io.canvas.height=f,io.drawImage(e,0,0,l,f),s=io.getImageData(0,0,l,f).data),n===4)u=new Int32Array(s);else{var h=l*f;u=new Int32Array(h*n);for(var d=0;d<h;d++)for(var p=0;p<n;++p)u[d*n+p]=s[4*d+p]}return wc(u,[f,l,n],"int32")}}),Kc=Object.freeze({toPixels:function(e,n){return pe(this,void 0,void 0,(function(){var t,r,o,i,a,s,u,c,l,f,h,d,p,v,m,g,y,x,b,w,_,A,R;return ve(this,(function(E){switch(E.label){case 0:if(t=C(e,"img","toPixels"),e instanceof Xe||(t=t.toInt()),t.rank!==2&&t.rank!==3)throw new Error("toPixels only supports rank 2 or 3 tensors, got rank "+t.rank+".");if(r=t.shape.slice(0,2),o=r[0],i=r[1],(a=t.rank===2?1:t.shape[2])>4||a===2)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+a);return[4,t.data()];case 1:return s=E.sent(),u=t.min(),c=t.max(),[4,Promise.all([u.data(),c.data()])];case 2:if(l=E.sent(),f=l[0],h=l[1],d=f[0],p=h[0],u.dispose(),c.dispose(),t.dtype==="float32"){if(d<0||p>1)throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range ["+d+" - "+p+"].")}else{if(t.dtype!=="int32")throw new Error("Unsupported type for toPixels: "+t.dtype+". Please use float32 or int32 tensors.");if(d<0||p>255)throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range ["+d+" - "+p+"].")}for(v=t.dtype==="float32"?255:1,m=new Uint8ClampedArray(i*o*4),g=0;g<o*i;++g)y=void 0,x=void 0,b=void 0,w=void 0,a===1?(y=s[g]*v,x=s[g]*v,b=s[g]*v,w=255):a===3?(y=s[3*g]*v,x=s[3*g+1]*v,b=s[3*g+2]*v,w=255):a===4&&(y=s[4*g]*v,x=s[4*g+1]*v,b=s[4*g+2]*v,w=s[4*g+3]*v),m[(_=4*g)+0]=Math.round(y),m[_+1]=Math.round(x),m[_+2]=Math.round(b),m[_+3]=Math.round(w);return n!=null&&(n.width=i,n.height=o,A=n.getContext("2d"),R=new ImageData(m,i,o),A.putImageData(R,0,0)),t!==e&&t.dispose(),[2,m]}}))}))},fromPixels:jC}),qC=(function(){function e(){}return e.prototype.getClassName=function(){return this.constructor.className},e.fromConfig=function(n,t){return new n(t)},e})(),KC=(function(){function e(){this.classNameMap={}}return e.getMap=function(){return e.instance==null&&(e.instance=new e),e.instance},e.register=function(n){e.getMap().classNameMap[n.className]=[n,n.fromConfig]},e})();function Qr(e){I(e.className!=null,(function(){return"Class being registered does not have the static className property defined."})),I(typeof e.className=="string",(function(){return"className is required to be a string, but got type "+typeof e.className})),I(e.className.length>0,(function(){return"Class being registered has an empty-string as its className, which is disallowed."})),KC.register(e)}var Zr=(function(e){function n(){return e!==null&&e.apply(this,arguments)||this}return vn(n,e),n.prototype.minimize=function(t,r,o){r===void 0&&(r=!1);var i=this.computeGradients(t,o),a=i.value,s=i.grads;if(o!=null){var u=o.map((function(c){return{name:c.name,tensor:s[c.name]}}));this.applyGradients(u)}else this.applyGradients(s);return Bt(s),r?a:(a.dispose(),null)},Object.defineProperty(n.prototype,"iterations",{get:function(){return this.iterations_==null&&(this.iterations_=0),this.iterations_},enumerable:!0,configurable:!0}),n.prototype.incrementIterations=function(){this.iterations_=this.iterations+1},n.prototype.computeGradients=function(t,r){return r1(t,r)},n.prototype.dispose=function(){this.iterations_!=null&&Bt(this.iterations_)},n.prototype.saveIterations=function(){return pe(this,void 0,void 0,(function(){return ve(this,(function(t){return this.iterations_==null&&(this.iterations_=0),[2,{name:"iter",tensor:ae(this.iterations_,"int32")}]}))}))},n.prototype.getWeights=function(){return pe(this,void 0,void 0,(function(){return ve(this,(function(t){throw new Error("getWeights() is not implemented for this optimizer yet.")}))}))},n.prototype.setWeights=function(t){return pe(this,void 0,void 0,(function(){return ve(this,(function(r){throw new Error("setWeights() is not implemented for this optimizer class "+this.getClassName())}))}))},n.prototype.extractIterations=function(t){return pe(this,void 0,void 0,(function(){var r;return ve(this,(function(o){switch(o.label){case 0:return r=this,[4,t[0].tensor.data()];case 1:return r.iterations_=o.sent()[0],[2,t.slice(1)]}}))}))},n})(qC);Object.defineProperty(Zr,Symbol.hasInstance,{value:function(e){return e.minimize!=null&&e.computeGradients!=null&&e.applyGradients!=null}});var $C=(function(e){function n(t,r,o){o===void 0&&(o=null);var i=e.call(this)||this;return i.learningRate=t,i.rho=r,i.epsilon=o,i.accumulatedGrads=[],i.accumulatedUpdates=[],o==null&&(i.epsilon=P.backend.epsilon()),i}return vn(n,e),n.prototype.applyGradients=function(t){var r=this;(Array.isArray(t)?t.map((function(o){return o.name})):Object.keys(t)).forEach((function(o,i){var a=P.registeredVariables[o];r.accumulatedGrads[i]==null&&(r.accumulatedGrads[i]={originalName:o+"/accum_grad",variable:fe((function(){return Be(a).variable(!1)}))}),r.accumulatedUpdates[i]==null&&(r.accumulatedUpdates[i]={originalName:o+"/accum_var",variable:fe((function(){return Be(a).variable(!1)}))});var s=Array.isArray(t)?t[i].tensor:t[o];if(s!=null){var u=r.accumulatedGrads[i].variable,c=r.accumulatedUpdates[i].variable;fe((function(){var l=u.mul(r.rho).add(s.square().mul(1-r.rho)),f=c.add(r.epsilon).sqrt().div(u.add(r.epsilon).sqrt()).mul(s),h=c.mul(r.rho).add(f.square().mul(1-r.rho));u.assign(l),c.assign(h);var d=f.mul(-r.learningRate).add(a);a.assign(d)}))}})),this.incrementIterations()},n.prototype.dispose=function(){this.accumulatedUpdates!=null&&(Bt(this.accumulatedGrads.map((function(t){return t.variable}))),Bt(this.accumulatedUpdates.map((function(t){return t.variable}))))},n.prototype.getWeights=function(){return pe(this,void 0,void 0,(function(){var t;return ve(this,(function(r){switch(r.label){case 0:return t=this.accumulatedGrads.concat(this.accumulatedUpdates),[4,this.saveIterations()];case 1:return[2,[r.sent()].concat(t.map((function(o){return{name:o.originalName,tensor:o.variable}})))]}}))}))},n.prototype.setWeights=function(t){return pe(this,void 0,void 0,(function(){var r;return ve(this,(function(o){switch(o.label){case 0:return[4,this.extractIterations(t)];case 1:return t=o.sent(),r=t.length/2,this.accumulatedGrads=t.slice(0,r).map((function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}})),this.accumulatedUpdates=t.slice(r,2*r).map((function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}})),[2]}}))}))},n.prototype.getConfig=function(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},n.fromConfig=function(t,r){return new t(r.learningRate,r.rho,r.epsilon)},n.className="Adadelta",n})(Zr);Qr($C);var XC=(function(e){function n(t,r){r===void 0&&(r=.1);var o=e.call(this)||this;return o.learningRate=t,o.initialAccumulatorValue=r,o.accumulatedGrads=[],o}return vn(n,e),n.prototype.applyGradients=function(t){var r=this;(Array.isArray(t)?t.map((function(o){return o.name})):Object.keys(t)).forEach((function(o,i){var a=P.registeredVariables[o];r.accumulatedGrads[i]==null&&(r.accumulatedGrads[i]={originalName:o+"/accumulator",variable:fe((function(){return Nn(a.shape,r.initialAccumulatorValue).variable(!1)}))});var s=Array.isArray(t)?t[i].tensor:t[o];if(s!=null){var u=r.accumulatedGrads[i].variable;fe((function(){var c=u.add(s.square());u.assign(c);var l=s.div(c.add(P.backend.epsilon()).sqrt()).mul(-r.learningRate).add(a);a.assign(l)}))}})),this.incrementIterations()},n.prototype.dispose=function(){this.accumulatedGrads!=null&&Bt(this.accumulatedGrads.map((function(t){return t.variable})))},n.prototype.getWeights=function(){return pe(this,void 0,void 0,(function(){return ve(this,(function(t){switch(t.label){case 0:return[4,this.saveIterations()];case 1:return[2,[t.sent()].concat(this.accumulatedGrads.map((function(r){return{name:r.originalName,tensor:r.variable}})))]}}))}))},n.prototype.setWeights=function(t){return pe(this,void 0,void 0,(function(){return ve(this,(function(r){switch(r.label){case 0:return[4,this.extractIterations(t)];case 1:return t=r.sent(),this.accumulatedGrads=t.map((function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}})),[2]}}))}))},n.prototype.getConfig=function(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},n.fromConfig=function(t,r){return new t(r.learningRate,r.initialAccumulatorValue)},n.className="Adagrad",n})(Zr);Qr(XC);var YC=(function(e){function n(t,r,o,i){i===void 0&&(i=null);var a=e.call(this)||this;return a.learningRate=t,a.beta1=r,a.beta2=o,a.epsilon=i,a.accumulatedFirstMoment=[],a.accumulatedSecondMoment=[],fe((function(){a.accBeta1=ae(r).variable(),a.accBeta2=ae(o).variable()})),i==null&&(a.epsilon=P.backend.epsilon()),a}return vn(n,e),n.prototype.applyGradients=function(t){var r=this,o=Array.isArray(t)?t.map((function(i){return i.name})):Object.keys(t);fe((function(){var i=lt(1,r.accBeta1),a=lt(1,r.accBeta2);o.forEach((function(s,u){var c=P.registeredVariables[s];r.accumulatedFirstMoment[u]==null&&(r.accumulatedFirstMoment[u]={originalName:s+"/m",variable:fe((function(){return Be(c).variable(!1)}))}),r.accumulatedSecondMoment[u]==null&&(r.accumulatedSecondMoment[u]={originalName:s+"/v",variable:fe((function(){return Be(c).variable(!1)}))});var l=Array.isArray(t)?t[u].tensor:t[s];if(l!=null){var f=r.accumulatedFirstMoment[u].variable,h=r.accumulatedSecondMoment[u].variable,d=f.mul(r.beta1).add(l.mul(1-r.beta1)),p=h.mul(r.beta2).add(l.square().mul(1-r.beta2)),v=d.div(i),m=p.div(a);f.assign(d),h.assign(p);var g=v.div(m.sqrt().add(r.epsilon)).mul(-r.learningRate).add(c);c.assign(g)}})),r.accBeta1.assign(r.accBeta1.mul(r.beta1)),r.accBeta2.assign(r.accBeta2.mul(r.beta2))})),this.incrementIterations()},n.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&Bt(this.accumulatedFirstMoment.map((function(t){return t.variable}))),this.accumulatedSecondMoment!=null&&Bt(this.accumulatedSecondMoment.map((function(t){return t.variable})))},n.prototype.getWeights=function(){return pe(this,void 0,void 0,(function(){var t;return ve(this,(function(r){switch(r.label){case 0:return t=this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment),[4,this.saveIterations()];case 1:return[2,[r.sent()].concat(t.map((function(o){return{name:o.originalName,tensor:o.variable}})))]}}))}))},n.prototype.setWeights=function(t){return pe(this,void 0,void 0,(function(){var r,o=this;return ve(this,(function(i){switch(i.label){case 0:return[4,this.extractIterations(t)];case 1:return t=i.sent(),fe((function(){o.accBeta1.assign(Da(o.beta1,o.iterations_+1)),o.accBeta2.assign(Da(o.beta2,o.iterations_+1))})),r=t.length/2,this.accumulatedFirstMoment=t.slice(0,r).map((function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}})),this.accumulatedSecondMoment=t.slice(r,2*r).map((function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}})),[2]}}))}))},n.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},n.fromConfig=function(t,r){return new t(r.learningRate,r.beta1,r.beta2,r.epsilon)},n.className="Adam",n})(Zr);Qr(YC);var JC=(function(e){function n(t,r,o,i,a){i===void 0&&(i=null),a===void 0&&(a=0);var s=e.call(this)||this;return s.learningRate=t,s.beta1=r,s.beta2=o,s.epsilon=i,s.decay=a,s.accumulatedFirstMoment=[],s.accumulatedWeightedInfNorm=[],fe((function(){s.iteration=ae(0).variable(),s.accBeta1=ae(r).variable()})),i==null&&(s.epsilon=P.backend.epsilon()),s}return vn(n,e),n.prototype.applyGradients=function(t){var r=this,o=Array.isArray(t)?t.map((function(i){return i.name})):Object.keys(t);fe((function(){var i=lt(1,r.accBeta1),a=un(-r.learningRate,r.iteration.mul(r.decay).add(1));o.forEach((function(s,u){var c=P.registeredVariables[s];r.accumulatedFirstMoment[u]==null&&(r.accumulatedFirstMoment[u]={originalName:s+"/m",variable:Be(c).variable(!1)}),r.accumulatedWeightedInfNorm[u]==null&&(r.accumulatedWeightedInfNorm[u]={originalName:s+"/v",variable:Be(c).variable(!1)});var l=Array.isArray(t)?t[u].tensor:t[s];if(l!=null){var f=r.accumulatedFirstMoment[u].variable,h=r.accumulatedWeightedInfNorm[u].variable,d=f.mul(r.beta1).add(l.mul(1-r.beta1)),p=h.mul(r.beta2),v=l.abs(),m=p.maximum(v);f.assign(d),h.assign(m);var g=a.div(i).mul(d.div(m.add(r.epsilon))).add(c);c.assign(g)}})),r.iteration.assign(r.iteration.add(1)),r.accBeta1.assign(r.accBeta1.mul(r.beta1))})),this.incrementIterations()},n.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&Bt(this.accumulatedFirstMoment.map((function(t){return t.variable}))),this.accumulatedWeightedInfNorm!=null&&Bt(this.accumulatedWeightedInfNorm.map((function(t){return t.variable})))},n.prototype.getWeights=function(){return pe(this,void 0,void 0,(function(){return ve(this,(function(t){throw new Error("getWeights() is not implemented for Adamax yet.")}))}))},n.prototype.setWeights=function(t){return pe(this,void 0,void 0,(function(){return ve(this,(function(r){throw new Error("setWeights() is not implemented for Adamax yet.")}))}))},n.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},n.fromConfig=function(t,r){return new t(r.learningRate,r.beta1,r.beta2,r.epsilon,r.decay)},n.className="Adamax",n})(Zr);Qr(JC);var Nv=(function(e){function n(t){var r=e.call(this)||this;return r.learningRate=t,r.setLearningRate(t),r}return vn(n,e),n.prototype.applyGradients=function(t){var r=this;(Array.isArray(t)?t.map((function(o){return o.name})):Object.keys(t)).forEach((function(o,i){var a=Array.isArray(t)?t[i].tensor:t[o];if(a!=null){var s=P.registeredVariables[o];fe((function(){var u=r.c.mul(a).add(s);s.assign(u)}))}})),this.incrementIterations()},n.prototype.setLearningRate=function(t){this.learningRate=t,this.c!=null&&this.c.dispose(),this.c=gx(ae(-t))},n.prototype.dispose=function(){this.c.dispose()},n.prototype.getWeights=function(){return pe(this,void 0,void 0,(function(){return ve(this,(function(t){switch(t.label){case 0:return[4,this.saveIterations()];case 1:return[2,[t.sent()]]}}))}))},n.prototype.setWeights=function(t){return pe(this,void 0,void 0,(function(){return ve(this,(function(r){switch(r.label){case 0:return[4,this.extractIterations(t)];case 1:if((t=r.sent()).length!==0)throw new Error("SGD optimizer does not have settable weights.");return[2]}}))}))},n.prototype.getConfig=function(){return{learningRate:this.learningRate}},n.fromConfig=function(t,r){return new t(r.learningRate)},n.className="SGD",n})(Zr);Qr(Nv);var QC=(function(e){function n(t,r,o){o===void 0&&(o=!1);var i=e.call(this,t)||this;return i.learningRate=t,i.momentum=r,i.useNesterov=o,i.accumulations=[],i.m=ae(i.momentum),i}return vn(n,e),n.prototype.applyGradients=function(t){var r=this;(Array.isArray(t)?t.map((function(o){return o.name})):Object.keys(t)).forEach((function(o,i){var a=P.registeredVariables[o];r.accumulations[i]==null&&(r.accumulations[i]={originalName:o+"/momentum",variable:fe((function(){return Be(a).variable(!1)}))});var s=r.accumulations[i].variable,u=Array.isArray(t)?t[i].tensor:t[o];u!=null&&fe((function(){var c,l=r.m.mul(s).add(u);c=r.useNesterov?r.c.mul(u.add(l.mul(r.m))).add(a):r.c.mul(l).add(a),s.assign(l),a.assign(c)}))})),this.incrementIterations()},n.prototype.dispose=function(){this.m.dispose(),this.accumulations!=null&&Bt(this.accumulations.map((function(t){return t.variable})))},n.prototype.setMomentum=function(t){this.momentum=t},n.prototype.getWeights=function(){return pe(this,void 0,void 0,(function(){return ve(this,(function(t){switch(t.label){case 0:return[4,this.saveIterations()];case 1:return[2,[t.sent()].concat(this.accumulations.map((function(r){return{name:r.originalName,tensor:r.variable}})))]}}))}))},n.prototype.setWeights=function(t){return pe(this,void 0,void 0,(function(){return ve(this,(function(r){switch(r.label){case 0:return[4,this.extractIterations(t)];case 1:return t=r.sent(),this.accumulations=t.map((function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}})),[2]}}))}))},n.prototype.getConfig=function(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},n.fromConfig=function(t,r){return new t(r.learningRate,r.momentum,r.useNesterov)},n.className="Momentum",n})(Nv);Qr(QC);var ZC=(function(e){function n(t,r,o,i,a){r===void 0&&(r=.9),o===void 0&&(o=0),i===void 0&&(i=null),a===void 0&&(a=!1);var s=e.call(this)||this;if(s.learningRate=t,s.decay=r,s.momentum=o,s.epsilon=i,s.accumulatedMeanSquares=[],s.accumulatedMoments=[],s.accumulatedMeanGrads=[],s.centered=a,i==null&&(s.epsilon=P.backend.epsilon()),t==null)throw new Error("learningRate for RMSPropOptimizer must be defined.");return s}return vn(n,e),n.prototype.applyGradients=function(t){var r=this;(Array.isArray(t)?t.map((function(o){return o.name})):Object.keys(t)).forEach((function(o,i){var a=P.registeredVariables[o];r.accumulatedMeanSquares[i]==null&&(r.accumulatedMeanSquares[i]={originalName:o+"/rms",variable:fe((function(){return Be(a).variable(!1)}))}),r.accumulatedMoments[i]==null&&(r.accumulatedMoments[i]={originalName:o+"/momentum",variable:fe((function(){return Be(a).variable(!1)}))}),r.accumulatedMeanGrads[i]==null&&r.centered&&(r.accumulatedMeanGrads[i]={originalName:o+"/mg",variable:fe((function(){return Be(a).variable(!1)}))});var s=Array.isArray(t)?t[i].tensor:t[o];if(s!=null){var u=r.accumulatedMeanSquares[i].variable,c=r.accumulatedMoments[i].variable;fe((function(){var l=u.mul(r.decay).add(s.square().mul(1-r.decay));if(r.centered){var f=r.accumulatedMeanGrads[i].variable,h=f.mul(r.decay).add(s.mul(1-r.decay)),d=c.mul(r.momentum).add(s.mul(r.learningRate).div(l.sub(h.square().add(r.epsilon)).sqrt()));u.assign(l),f.assign(h),c.assign(d);var p=a.sub(d);a.assign(p)}else{var v=u.mul(r.decay).add(s.square().mul(1-r.decay));d=c.mul(r.momentum).add(s.mul(r.learningRate).div(v.add(r.epsilon).sqrt())),u.assign(v),c.assign(d),p=a.sub(d),a.assign(p)}}))}})),this.incrementIterations()},n.prototype.dispose=function(){this.accumulatedMeanSquares!=null&&Bt(this.accumulatedMeanSquares.map((function(t){return t.variable}))),this.accumulatedMeanGrads!=null&&this.centered&&Bt(this.accumulatedMeanGrads.map((function(t){return t.variable}))),this.accumulatedMoments!=null&&Bt(this.accumulatedMoments.map((function(t){return t.variable})))},n.prototype.getWeights=function(){return pe(this,void 0,void 0,(function(){var t;return ve(this,(function(r){switch(r.label){case 0:return t=this.accumulatedMeanSquares.concat(this.accumulatedMoments),this.centered&&t.push.apply(t,this.accumulatedMeanGrads),[4,this.saveIterations()];case 1:return[2,[r.sent()].concat(t.map((function(o){return{name:o.originalName,tensor:o.variable}})))]}}))}))},n.prototype.setWeights=function(t){return pe(this,void 0,void 0,(function(){var r;return ve(this,(function(o){switch(o.label){case 0:return[4,this.extractIterations(t)];case 1:return t=o.sent(),r=this.centered?t.length/3:t.length/2,this.accumulatedMeanSquares=t.slice(0,r).map((function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}})),this.accumulatedMoments=t.slice(r,2*r).map((function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}})),this.centered&&(this.accumulatedMeanGrads=t.slice(2*r,3*r).map((function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}))),[2]}}))}))},n.prototype.getConfig=function(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},n.fromConfig=function(t,r){return new t(r.learningRate,r.decay,r.momentum,r.epsilon,r.centered)},n.className="RMSProp",n})(Zr);Qr(ZC);Xe.prototype.squaredDifference=function(e){return Kp(this,e)},V=RC;var Yu=function(e,n){return Yu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var o in r)r.hasOwnProperty(o)&&(t[o]=r[o])},Yu(e,n)};function De(e,n){Yu(e,n);function t(){this.constructor=e}e.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}var Ct=function(){return Ct=Object.assign||function(n){for(var t,r=1,o=arguments.length;r<o;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Ct.apply(this,arguments)};function we(e,n,t,r){function o(i){return i instanceof t?i:new t(function(a){a(i)})}return new(t||(t=Promise))(function(i,a){function s(l){try{c(r.next(l))}catch(f){a(f)}}function u(l){try{c(r.throw(l))}catch(f){a(f)}}function c(l){l.done?i(l.value):o(l.value).then(s,u)}c((r=r.apply(e,[])).next())})}function _e(e,n){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(c){return function(l){return u([c,l])}}function u(c){if(r)throw new TypeError("Generator is already executing.");for(;t;)try{if(r=1,o&&(i=c[0]&2?o.return:c[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,c[1])).done)return i;switch(o=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return t.label++,{value:c[1],done:!1};case 5:t.label++,o=c[1],c=[0];continue;case 7:c=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){t=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){t.label=c[1];break}if(c[0]===6&&t.label<i[1]){t.label=i[1],i=c;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(c);break}i[2]&&t.ops.pop(),t.trys.pop();continue}c=n.call(e,t)}catch(l){c=[6,l],o=0}finally{r=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function ri(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;for(var r=Array(e),o=0,n=0;n<t;n++)for(var i=arguments[n],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r}var Hr=(function(){function e(n,t){if(!jr(n)||!jr(t))throw new Error("Dimensions.constructor - expected width and height to be valid numbers, instead have "+JSON.stringify({width:n,height:t}));this._width=n,this._height=t}return Object.defineProperty(e.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),e.prototype.reverse=function(){return new e(1/this.width,1/this.height)},e})();function us(e,n){return e instanceof Xe&&e.shape.length===n}function eE(e){return us(e,2)}function cs(e){return us(e,3)}function xr(e){return us(e,4)}function tE(e){return e%1!==0}function lh(e){return e%2===0}function nE(e,n){n===void 0&&(n=2);var t=Math.pow(10,n);return Math.floor(e*t)/t}function fh(e){return e&&e.width&&e.height}function rE(e,n){var t=e.width,r=e.height,o=n/Math.max(r,t);return new Hr(Math.round(t*o),Math.round(r*o))}function $c(e){return e.reduce(function(n,t){return n.add(t)},new Ue(0,0)).div(new Ue(e.length,e.length))}function gi(e,n,t){return Array(e).fill(0).map(function(r,o){return n+o*t})}function jr(e){return!!e&&e!==1/0&&e!==-1/0&&!isNaN(e)||e===0}function hh(e){return jr(e)&&0<=e&&e<=1}var Ue=(function(){function e(n,t){this._x=n,this._y=t}return Object.defineProperty(e.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),e.prototype.add=function(n){return new e(this.x+n.x,this.y+n.y)},e.prototype.sub=function(n){return new e(this.x-n.x,this.y-n.y)},e.prototype.mul=function(n){return new e(this.x*n.x,this.y*n.y)},e.prototype.div=function(n){return new e(this.x/n.x,this.y/n.y)},e.prototype.abs=function(){return new e(Math.abs(this.x),Math.abs(this.y))},e.prototype.magnitude=function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))},e.prototype.floor=function(){return new e(Math.floor(this.x),Math.floor(this.y))},e})(),Er=(function(){function e(n,t){t===void 0&&(t=!0);var r=n||{},o=[r.left,r.top,r.right,r.bottom].every(jr),i=[r.x,r.y,r.width,r.height].every(jr);if(!i&&!o)throw new Error("Box.constructor - expected box to be IBoundingBox | IRect, instead have "+JSON.stringify(r));var a=i?[r.x,r.y,r.width,r.height]:[r.left,r.top,r.right-r.left,r.bottom-r.top],s=a[0],u=a[1],c=a[2],l=a[3];e.assertIsValidBox({x:s,y:u,width:c,height:l},"Box.constructor",t),this._x=s,this._y=u,this._width=c,this._height=l}return e.isRect=function(n){return!!n&&[n.x,n.y,n.width,n.height].every(jr)},e.assertIsValidBox=function(n,t,r){if(r===void 0&&(r=!1),!e.isRect(n))throw new Error(t+" - invalid box: "+JSON.stringify(n)+", expected object with properties x, y, width, height");if(!r&&(n.width<0||n.height<0))throw new Error(t+" - width ("+n.width+") and height ("+n.height+") must be positive numbers")},Object.defineProperty(e.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"left",{get:function(){return this.x},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"top",{get:function(){return this.y},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"right",{get:function(){return this.x+this.width},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"area",{get:function(){return this.width*this.height},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"topLeft",{get:function(){return new Ue(this.left,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"topRight",{get:function(){return new Ue(this.right,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bottomLeft",{get:function(){return new Ue(this.left,this.bottom)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bottomRight",{get:function(){return new Ue(this.right,this.bottom)},enumerable:!0,configurable:!0}),e.prototype.round=function(){var n=[this.x,this.y,this.width,this.height].map(function(a){return Math.round(a)}),t=n[0],r=n[1],o=n[2],i=n[3];return new e({x:t,y:r,width:o,height:i})},e.prototype.floor=function(){var n=[this.x,this.y,this.width,this.height].map(function(a){return Math.floor(a)}),t=n[0],r=n[1],o=n[2],i=n[3];return new e({x:t,y:r,width:o,height:i})},e.prototype.toSquare=function(){var n=this,t=n.x,r=n.y,o=n.width,i=n.height,a=Math.abs(o-i);return o<i&&(t-=a/2,o+=a),i<o&&(r-=a/2,i+=a),new e({x:t,y:r,width:o,height:i})},e.prototype.rescale=function(n){var t=fh(n)?n.width:n,r=fh(n)?n.height:n;return new e({x:this.x*t,y:this.y*r,width:this.width*t,height:this.height*r})},e.prototype.pad=function(n,t){var r=[this.x-n/2,this.y-t/2,this.width+n,this.height+t],o=r[0],i=r[1],a=r[2],s=r[3];return new e({x:o,y:i,width:a,height:s})},e.prototype.clipAtImageBorders=function(n,t){var r=this,o=r.x,i=r.y,a=r.right,s=r.bottom,u=Math.max(o,0),c=Math.max(i,0),l=a-u,f=s-c,h=Math.min(l,n-u),d=Math.min(f,t-c);return new e({x:u,y:c,width:h,height:d}).floor()},e.prototype.shift=function(n,t){var r=this,o=r.width,i=r.height,a=this.x+n,s=this.y+t;return new e({x:a,y:s,width:o,height:i})},e.prototype.padAtBorders=function(n,t){var r=this.width+1,o=this.height+1,i=1,a=1,s=r,u=o,c=this.left,l=this.top,f=this.right,h=this.bottom;return f>t&&(s=-f+t+r,f=t),h>n&&(u=-h+n+o,h=n),c<1&&(u=2-c,c=1),l<1&&(u=2-l,l=1),{dy:a,edy:u,dx:i,edx:s,y:l,ey:h,x:c,ex:f,w:r,h:o}},e.prototype.calibrate=function(n){return new e({left:this.left+n.left*this.width,top:this.top+n.top*this.height,right:this.right+n.right*this.width,bottom:this.bottom+n.bottom*this.height}).toSquare().round()},e})(),ls=(function(e){De(n,e);function n(t,r,o,i,a){return a===void 0&&(a=!1),e.call(this,{left:t,top:r,right:o,bottom:i},a)||this}return n})(Er),Fv=(function(){function e(n,t,r,o,i){this._imageDims=new Hr(i.width,i.height),this._score=n,this._classScore=t,this._className=r,this._box=new Er(o).rescale(this._imageDims)}return Object.defineProperty(e.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"className",{get:function(){return this._className},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"box",{get:function(){return this._box},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"imageDims",{get:function(){return this._imageDims},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"imageWidth",{get:function(){return this.imageDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"imageHeight",{get:function(){return this.imageDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"relativeBox",{get:function(){return new Er(this._box).rescale(this.imageDims.reverse())},enumerable:!0,configurable:!0}),e.prototype.forSize=function(n,t){return new e(this.score,this.classScore,this.className,this.relativeBox,{width:n,height:t})},e})(),gn=(function(e){De(n,e);function n(t,r,o){return e.call(this,t,t,"",r,o)||this}return n.prototype.forSize=function(t,r){var o=e.prototype.forSize.call(this,t,r),i=o.score,a=o.relativeBox,s=o.imageDims;return new n(i,a,s)},n})(Fv);function oE(e,n,t){t===void 0&&(t=!0);var r=Math.max(0,Math.min(e.right,n.right)-Math.max(e.left,n.left)),o=Math.max(0,Math.min(e.bottom,n.bottom)-Math.max(e.top,n.top)),i=r*o;return t?i/(e.area+n.area-i):i/Math.min(e.area,n.area)}function iE(e){var n=e.map(function(s){return s.x}),t=e.map(function(s){return s.y}),r=n.reduce(function(s,u){return u<s?u:s},1/0),o=t.reduce(function(s,u){return u<s?u:s},1/0),i=n.reduce(function(s,u){return s<u?u:s},0),a=t.reduce(function(s,u){return s<u?u:s},0);return new ls(r,o,i,a)}function yi(e,n,t,r){r===void 0&&(r=!0);for(var o=n.map(function(s,u){return{score:s,boxIndex:u}}).sort(function(s,u){return s.score-u.score}).map(function(s){return s.boxIndex}),i=[],a=function(){var s=o.pop();i.push(s);for(var u=o,c=[],l=0;l<u.length;l++){var f=u[l],h=e[s],d=e[f];c.push(oE(h,d,r))}o=o.filter(function(p,v){return c[v]<=t})};o.length>0;)a();return i}function Ni(e,n){return fe(function(){var t=n[0],r=n[1],o=n[2],i=Nn(ri(e.shape.slice(0,3),[1]),t),a=Nn(ri(e.shape.slice(0,3),[1]),r),s=Nn(ri(e.shape.slice(0,3),[1]),o),u=at([i,a,s],3);return lt(e,u)})}function aE(e,n){return n===void 0&&(n=!1),fe(function(){var t=e.shape.slice(1),r=t[0],o=t[1];if(r===o)return e;var i=Math.abs(r-o),a=Math.round(i*(n?.5:1)),s=r>o?2:1,u=function(d){var p=e.shape.slice();return p[s]=d,Nn(p,0)},c=u(a),l=i-c.shape[s],f=n&&l?u(l):null,h=[f,e,c].filter(function(d){return!!d}).map(function(d){return d.toFloat()});return at(h,s)})}function ru(e){return 1/(1+Math.exp(-e))}var Xc=(function(e){De(n,e);function n(t,r,o,i,a){return a===void 0&&(a=!1),e.call(this,{x:t,y:r,width:o,height:i},a)||this}return n})(Er),sE=.5,uE=.43,cE=.45,bi=(function(){function e(n,t,r){r===void 0&&(r=new Ue(0,0));var o=t.width,i=t.height;this._imgDims=new Hr(o,i),this._shift=r,this._positions=n.map(function(a){return a.mul(new Ue(o,i)).add(r)})}return Object.defineProperty(e.prototype,"shift",{get:function(){return new Ue(this._shift.x,this._shift.y)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"imageWidth",{get:function(){return this._imgDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"imageHeight",{get:function(){return this._imgDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"positions",{get:function(){return this._positions},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"relativePositions",{get:function(){var n=this;return this._positions.map(function(t){return t.sub(n._shift).div(new Ue(n.imageWidth,n.imageHeight))})},enumerable:!0,configurable:!0}),e.prototype.forSize=function(n,t){return new this.constructor(this.relativePositions,{width:n,height:t})},e.prototype.shiftBy=function(n,t){return new this.constructor(this.relativePositions,this._imgDims,new Ue(n,t))},e.prototype.shiftByPoint=function(n){return this.shiftBy(n.x,n.y)},e.prototype.align=function(n,t){if(t===void 0&&(t={}),n){var r=n instanceof gn?n.box.floor():new Er(n);return this.shiftBy(r.x,r.y).align(null,t)}var o=Object.assign({},{useDlibAlignment:!1,minBoxPadding:.2},t),i=o.useDlibAlignment,a=o.minBoxPadding;return i?this.alignDlib():this.alignMinBbox(a)},e.prototype.alignDlib=function(){var n=this.getRefPointsForAlignment(),t=n[0],r=n[1],o=n[2],i=function(f){return o.sub(f).magnitude()},a=(i(t)+i(r))/2,s=Math.floor(a/cE),u=$c(n),c=Math.floor(Math.max(0,u.x-sE*s)),l=Math.floor(Math.max(0,u.y-uE*s));return new Xc(c,l,Math.min(s,this.imageWidth+c),Math.min(s,this.imageHeight+l))},e.prototype.alignMinBbox=function(n){var t=iE(this.positions);return t.pad(t.width*n,t.height*n)},e.prototype.getRefPointsForAlignment=function(){throw new Error("getRefPointsForAlignment not implemented by base class")},e})(),lE=(function(e){De(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}return n.prototype.getRefPointsForAlignment=function(){var t=this.positions;return[t[0],t[1],$c([t[3],t[4]])]},n})(bi),fE=(function(e){De(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}return n.prototype.getJawOutline=function(){return this.positions.slice(0,17)},n.prototype.getLeftEyeBrow=function(){return this.positions.slice(17,22)},n.prototype.getRightEyeBrow=function(){return this.positions.slice(22,27)},n.prototype.getNose=function(){return this.positions.slice(27,36)},n.prototype.getLeftEye=function(){return this.positions.slice(36,42)},n.prototype.getRightEye=function(){return this.positions.slice(42,48)},n.prototype.getMouth=function(){return this.positions.slice(48,68)},n.prototype.getRefPointsForAlignment=function(){return[this.getLeftEye(),this.getRightEye(),this.getMouth()].map($c)},n})(bi),dh=(function(){function e(n,t){this._label=n,this._distance=t}return Object.defineProperty(e.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"distance",{get:function(){return this._distance},enumerable:!0,configurable:!0}),e.prototype.toString=function(n){return n===void 0&&(n=!0),""+this.label+(n?" ("+nE(this.distance)+")":"")},e})(),ph=(function(e){De(n,e);function n(t,r){var o=e.call(this,t)||this;return o._label=r,o}return n.assertIsValidLabeledBox=function(t,r){if(Er.assertIsValidBox(t,r),!jr(t.label))throw new Error(r+" - expected property label ("+t.label+") to be a number")},Object.defineProperty(n.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),n})(Er),Ki=(function(){function e(n,t){if(typeof n!="string")throw new Error("LabeledFaceDescriptors - constructor expected label to be a string");if(!Array.isArray(t)||t.some(function(r){return!(r instanceof Float32Array)}))throw new Error("LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array");this._label=n,this._descriptors=t}return Object.defineProperty(e.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"descriptors",{get:function(){return this._descriptors},enumerable:!0,configurable:!0}),e.prototype.toJSON=function(){return{label:this.label,descriptors:this.descriptors.map(function(n){return Array.from(n)})}},e.fromJSON=function(n){var t=n.descriptors.map(function(r){return new Float32Array(r)});return new e(n.label,t)},e})();(function(e){De(n,e);function n(t,r,o,i){var a=e.call(this,t,r)||this;return a._score=o,a._classScore=i,a}return n.assertIsValidPredictedBox=function(t,r){if(ph.assertIsValidLabeledBox(t,r),!hh(t.score)||!hh(t.classScore))throw new Error(r+" - expected properties score ("+t.score+") and ("+t.classScore+") to be a number between [0, 1]")},Object.defineProperty(n.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),n})(ph);function Pv(e){return e.detection instanceof gn}function xi(e,n){var t={detection:n};return Object.assign({},e,t)}function Mv(){var e=window.fetch||function(){throw new Error("fetch - missing fetch implementation for browser environment")},n=function(){throw new Error("readFile - filesystem not available for browser environment")};return{Canvas:HTMLCanvasElement,CanvasRenderingContext2D,Image:HTMLImageElement,ImageData,Video:HTMLVideoElement,createCanvasElement:function(){return document.createElement("canvas")},createImageElement:function(){return document.createElement("img")},fetch:e,readFile:n}}function Ov(e){var n="";if(!e)try{e=require("fs")}catch(r){n=r.toString()}var t=e?function(r){return new Promise(function(o,i){e.readFile(r,function(a,s){return a?i(a):o(s)})})}:function(){throw new Error("readFile - failed to require fs in nodejs environment with error: "+n)};return{readFile:t}}function Bv(){var e=global.Canvas||global.HTMLCanvasElement,n=global.Image||global.HTMLImageElement,t=function(){if(e)return new e;throw new Error("createCanvasElement - missing Canvas implementation for nodejs environment")},r=function(){if(n)return new n;throw new Error("createImageElement - missing Image implementation for nodejs environment")},o=global.fetch||function(){throw new Error("fetch - missing fetch implementation for nodejs environment")},i=Ov();return Ct({Canvas:e||(function(){function a(){}return a})(),CanvasRenderingContext2D:global.CanvasRenderingContext2D||(function(){function a(){}return a})(),Image:n||(function(){function a(){}return a})(),ImageData:global.ImageData||(function(){function a(){}return a})(),Video:global.HTMLVideoElement||(function(){function a(){}return a})(),createCanvasElement:t,createImageElement:r,fetch:o},i)}function Lv(){return typeof window=="object"&&typeof document<"u"&&typeof HTMLImageElement<"u"&&typeof HTMLCanvasElement<"u"&&typeof HTMLVideoElement<"u"&&typeof ImageData<"u"&&typeof CanvasRenderingContext2D<"u"}function Wv(){return typeof global=="object"&&typeof require=="function"&&typeof _m<"u"&&typeof process<"u"&&!!process.version}var ot;function hE(){if(!ot)throw new Error("getEnv - environment is not defined, check isNodejs() and isBrowser()");return ot}function Ju(e){ot=e}function Yc(){Lv()&&Ju(Mv()),Wv()&&Ju(Bv())}function dE(e){if(ot||Yc(),!ot)throw new Error("monkeyPatch - environment is not defined, check isNodejs() and isBrowser()");var n=e.Canvas,t=n===void 0?ot.Canvas:n,r=e.Image,o=r===void 0?ot.Image:r;ot.Canvas=t,ot.Image=o,ot.createCanvasElement=e.createCanvasElement||(function(){return new t}),ot.createImageElement=e.createImageElement||(function(){return new o}),ot.ImageData=e.ImageData||ot.ImageData,ot.Video=e.Video||ot.Video,ot.fetch=e.fetch||ot.fetch,ot.readFile=e.readFile||ot.readFile}var kt={getEnv:hE,setEnv:Ju,initialize:Yc,createBrowserEnv:Mv,createFileSystem:Ov,createNodejsEnv:Bv,monkeyPatch:dE,isBrowser:Lv,isNodejs:Wv};Yc();function Vv(e){return!kt.isNodejs()&&typeof e=="string"?document.getElementById(e):e}function Kr(e){var n=kt.getEnv(),t=n.Canvas,r=n.CanvasRenderingContext2D;if(e instanceof r)return e;var o=Vv(e);if(!(o instanceof t))throw new Error("resolveContext2d - expected canvas to be of instance of Canvas");var i=o.getContext("2d");if(!i)throw new Error("resolveContext2d - canvas 2d context is null");return i}var vh;(function(e){e.TOP_LEFT="TOP_LEFT",e.TOP_RIGHT="TOP_RIGHT",e.BOTTOM_LEFT="BOTTOM_LEFT",e.BOTTOM_RIGHT="BOTTOM_RIGHT"})(vh||(vh={}));function Uv(e){var n=kt.getEnv(),t=n.Image,r=n.Video;return e instanceof t&&e.complete||e instanceof r&&e.readyState>=3}function pE(e){return new Promise(function(n,t){if(e instanceof kt.getEnv().Canvas||Uv(e))return n();function r(i){i.currentTarget&&(i.currentTarget.removeEventListener("load",r),i.currentTarget.removeEventListener("error",o),n(i))}function o(i){i.currentTarget&&(i.currentTarget.removeEventListener("load",r),i.currentTarget.removeEventListener("error",o),t(i))}e.addEventListener("load",r),e.addEventListener("error",o)})}function zv(e){var n=kt.getEnv(),t=n.Image,r=n.Video;return e instanceof t?new Hr(e.naturalWidth,e.naturalHeight):e instanceof r?new Hr(e.videoWidth,e.videoHeight):new Hr(e.width,e.height)}function fs(e){var n=e.width,t=e.height,r=kt.getEnv().createCanvasElement,o=r();return o.width=n,o.height=t,o}function Jc(e,n){var t=kt.getEnv().ImageData;if(!(e instanceof t)&&!Uv(e))throw new Error("createCanvasFromMedia - media has not finished loading yet");var r=zv(e),o=r.width,i=r.height,a=fs({width:o,height:i});return e instanceof t?Kr(a).putImageData(e,0,0):Kr(a).drawImage(e,0,0,o,i),a}function vE(e,n){return we(this,void 0,void 0,function(){var t,r,o,i,a,s;return _e(this,function(u){switch(u.label){case 0:return t=kt.getEnv().createCanvasElement(),r=e.shape.slice(xr(e)?1:0),o=r[0],i=r[1],a=r[2],s=fe(function(){return e.as3D(o,i,a).toInt()}),[4,Kc.toPixels(s,t)];case 1:return u.sent(),s.dispose(),[2,t]}})})}function mh(e){var n=kt.getEnv(),t=n.Image,r=n.Canvas,o=n.Video;return e instanceof t||e instanceof r||e instanceof o}function mE(e,n,t){t===void 0&&(t=!1);var r=kt.getEnv(),o=r.Image,i=r.Canvas;if(!(e instanceof o||e instanceof i))throw new Error("imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement");var a=zv(e),s=n/Math.max(a.height,a.width),u=s*a.width,c=s*a.height,l=fs({width:n,height:n}),f=e instanceof i?e:Jc(e),h=Math.abs(u-c)/2,d=t&&u<c?h:0,p=t&&c<u?h:0;return Kr(l).drawImage(f,d,p,u,c),l}var Fa=(function(){function e(n,t){var r=this;if(t===void 0&&(t=!1),this._imageTensors=[],this._canvases=[],this._treatAsBatchInput=!1,this._inputDimensions=[],!Array.isArray(n))throw new Error("NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have "+n);this._treatAsBatchInput=t,this._batchSize=n.length,n.forEach(function(o,i){if(cs(o)){r._imageTensors[i]=o,r._inputDimensions[i]=o.shape;return}if(xr(o)){var a=o.shape[0];if(a!==1)throw new Error("NetInput - tf.Tensor4D with batchSize "+a+" passed, but not supported in input array");r._imageTensors[i]=o,r._inputDimensions[i]=o.shape.slice(1);return}var s=o instanceof kt.getEnv().Canvas?o:Jc(o);r._canvases[i]=s,r._inputDimensions[i]=[s.height,s.width,3]})}return Object.defineProperty(e.prototype,"imageTensors",{get:function(){return this._imageTensors},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"canvases",{get:function(){return this._canvases},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isBatchInput",{get:function(){return this.batchSize>1||this._treatAsBatchInput},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"batchSize",{get:function(){return this._batchSize},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"inputDimensions",{get:function(){return this._inputDimensions},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"reshapedInputDimensions",{get:function(){var n=this;return gi(this.batchSize,0,1).map(function(t,r){return n.getReshapedInputDimensions(r)})},enumerable:!0,configurable:!0}),e.prototype.getInput=function(n){return this.canvases[n]||this.imageTensors[n]},e.prototype.getInputDimensions=function(n){return this._inputDimensions[n]},e.prototype.getInputHeight=function(n){return this._inputDimensions[n][0]},e.prototype.getInputWidth=function(n){return this._inputDimensions[n][1]},e.prototype.getReshapedInputDimensions=function(n){if(typeof this.inputSize!="number")throw new Error("getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet");var t=this.getInputWidth(n),r=this.getInputHeight(n);return rE({width:t,height:r},this.inputSize)},e.prototype.toBatchTensor=function(n,t){var r=this;return t===void 0&&(t=!0),this._inputSize=n,fe(function(){var o=gi(r.batchSize,0,1).map(function(a){var s=r.getInput(a);if(s instanceof Xe){var u=xr(s)?s:s.expandDims();return u=aE(u,t),(u.shape[1]!==n||u.shape[2]!==n)&&(u=Uc.resizeBilinear(u,[n,n])),u.as3D(n,n,3)}if(s instanceof kt.getEnv().Canvas)return Kc.fromPixels(mE(s,n,t));throw new Error("toBatchTensor - at batchIdx "+a+", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have "+s)}),i=Xt(o.map(function(a){return a.toFloat()})).as4D(r.batchSize,n,n,3);return i})},e})();function vt(e){return we(this,void 0,void 0,function(){var n,t,r;return _e(this,function(o){switch(o.label){case 0:if(e instanceof Fa)return[2,e];if(n=Array.isArray(e)?e:[e],!n.length)throw new Error("toNetInput - empty array passed as input");return t=function(i){return Array.isArray(e)?" at input index "+i+":":""},r=n.map(Vv),r.forEach(function(i,a){if(!mh(i)&&!cs(i)&&!xr(i))throw typeof n[a]=="string"?new Error("toNetInput -"+t(a)+" string passed, but could not resolve HTMLElement for element id "+n[a]):new Error("toNetInput -"+t(a)+" expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id");if(xr(i)){var s=i.shape[0];if(s!==1)throw new Error("toNetInput -"+t(a)+" tf.Tensor4D with batchSize "+s+" passed, but not supported in input array")}}),[4,Promise.all(r.map(function(i){return mh(i)&&pE(i)}))];case 1:return o.sent(),[2,new Fa(r,Array.isArray(e))]}})})}function Qc(e,n){return we(this,void 0,void 0,function(){var t,r,o,i,a,s,u;return _e(this,function(c){switch(c.label){case 0:return t=kt.getEnv().Canvas,r=e,e instanceof t?[3,5]:[4,vt(e)];case 1:if(o=c.sent(),o.batchSize>1)throw new Error("extractFaces - batchSize > 1 not supported");return i=o.getInput(0),i instanceof t?(a=i,[3,4]):[3,2];case 2:return[4,vE(i)];case 3:a=c.sent(),c.label=4;case 4:r=a,c.label=5;case 5:return s=Kr(r),u=n.map(function(l){return l instanceof gn?l.forSize(r.width,r.height).box.floor():l}).map(function(l){return l.clipAtImageBorders(r.width,r.height)}),[2,u.map(function(l){var f=l.x,h=l.y,d=l.width,p=l.height,v=fs({width:d,height:p});return Kr(v).putImageData(s.getImageData(f,h,d,p),0,0),v})]}})})}function Zc(e,n){return we(this,void 0,void 0,function(){return _e(this,function(t){if(!cs(e)&&!xr(e))throw new Error("extractFaceTensors - expected image tensor to be 3D or 4D");if(xr(e)&&e.shape[0]>1)throw new Error("extractFaceTensors - batchSize > 1 not supported");return[2,fe(function(){var r=e.shape.slice(xr(e)?1:0),o=r[0],i=r[1],a=r[2],s=n.map(function(c){return c instanceof gn?c.forSize(i,o).box:c}).map(function(c){return c.clipAtImageBorders(i,o)}),u=s.map(function(c){var l=c.x,f=c.y,h=c.width,d=c.height;return pv(e.as3D(o,i,a),[f,l,0],[d,h,a])});return u})]})})}function gE(e,n){return we(this,void 0,void 0,function(){var t,r;return _e(this,function(o){switch(o.label){case 0:return t=kt.getEnv().fetch,[4,t(e,n)];case 1:if(r=o.sent(),!(r.status<400))throw new Error("failed to fetch: ("+r.status+") "+r.statusText+", from url: "+r.url);return[2,r]}})})}function yE(e){return we(this,void 0,void 0,function(){return _e(this,function(n){switch(n.label){case 0:return[4,gE(e)];case 1:return[2,n.sent().json()]}})})}function Gv(e,n){var t=n+"-weights_manifest.json";if(!e)return{modelBaseUri:"",manifestUri:t};if(e==="/")return{modelBaseUri:"/",manifestUri:"/"+t};var r=e.startsWith("http://")?"http://":e.startsWith("https://")?"https://":"";e=e.replace(r,"");var o=e.split("/").filter(function(s){return s}),i=e.endsWith(".json")?o[o.length-1]:t,a=r+(e.endsWith(".json")?o.slice(0,o.length-1):o).join("/");return a=e.startsWith("/")?"/"+a:a,{modelBaseUri:a,manifestUri:a==="/"?"/"+i:a+"/"+i}}function bE(e,n){return we(this,void 0,void 0,function(){var t,r,o,i;return _e(this,function(a){switch(a.label){case 0:return t=Gv(e,n),r=t.manifestUri,o=t.modelBaseUri,[4,yE(r)];case 1:return i=a.sent(),[2,Tv.loadWeights(i,o)]}})})}var or=(function(){function e(n){this._name=n,this._params=void 0,this._paramMappings=[]}return Object.defineProperty(e.prototype,"params",{get:function(){return this._params},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"paramMappings",{get:function(){return this._paramMappings},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isLoaded",{get:function(){return!!this.params},enumerable:!0,configurable:!0}),e.prototype.getParamFromPath=function(n){var t=this.traversePropertyPath(n),r=t.obj,o=t.objProp;return r[o]},e.prototype.reassignParamFromPath=function(n,t){var r=this.traversePropertyPath(n),o=r.obj,i=r.objProp;o[i].dispose(),o[i]=t},e.prototype.getParamList=function(){var n=this;return this._paramMappings.map(function(t){var r=t.paramPath;return{path:r,tensor:n.getParamFromPath(r)}})},e.prototype.getTrainableParams=function(){return this.getParamList().filter(function(n){return n.tensor instanceof Po})},e.prototype.getFrozenParams=function(){return this.getParamList().filter(function(n){return!(n.tensor instanceof Po)})},e.prototype.variable=function(){var n=this;this.getFrozenParams().forEach(function(t){var r=t.path,o=t.tensor;n.reassignParamFromPath(r,o.variable())})},e.prototype.freeze=function(){var n=this;this.getTrainableParams().forEach(function(t){var r=t.path,o=t.tensor,i=bt(o.dataSync());o.dispose(),n.reassignParamFromPath(r,i)})},e.prototype.dispose=function(n){n===void 0&&(n=!0),this.getParamList().forEach(function(t){if(n&&t.tensor.isDisposed)throw new Error("param tensor has already been disposed for path "+t.path);t.tensor.dispose()}),this._params=void 0},e.prototype.serializeParams=function(){return new Float32Array(this.getParamList().map(function(n){var t=n.tensor;return Array.from(t.dataSync())}).reduce(function(n,t){return n.concat(t)}))},e.prototype.load=function(n){return we(this,void 0,void 0,function(){return _e(this,function(t){switch(t.label){case 0:return n instanceof Float32Array?(this.extractWeights(n),[2]):[4,this.loadFromUri(n)];case 1:return t.sent(),[2]}})})},e.prototype.loadFromUri=function(n){return we(this,void 0,void 0,function(){var t;return _e(this,function(r){switch(r.label){case 0:if(n&&typeof n!="string")throw new Error(this._name+".loadFromUri - expected model uri");return[4,bE(n,this.getDefaultModelName())];case 1:return t=r.sent(),this.loadFromWeightMap(t),[2]}})})},e.prototype.loadFromDisk=function(n){return we(this,void 0,void 0,function(){var t,r,o,i,a,s,u,c,l,f;return _e(this,function(h){switch(h.label){case 0:if(n&&typeof n!="string")throw new Error(this._name+".loadFromDisk - expected model file path");return t=kt.getEnv().readFile,r=Gv(n,this.getDefaultModelName()),o=r.manifestUri,i=r.modelBaseUri,a=function(d){return Promise.all(d.map(function(p){return t(p).then(function(v){return v.buffer})}))},s=Tv.weightsLoaderFactory(a),l=(c=JSON).parse,[4,t(o)];case 1:return u=l.apply(c,[h.sent().toString()]),[4,s(u,i)];case 2:return f=h.sent(),this.loadFromWeightMap(f),[2]}})})},e.prototype.loadFromWeightMap=function(n){var t=this.extractParamsFromWeigthMap(n),r=t.paramMappings,o=t.params;this._paramMappings=r,this._params=o},e.prototype.extractWeights=function(n){var t=this.extractParams(n),r=t.paramMappings,o=t.params;this._paramMappings=r,this._params=o},e.prototype.traversePropertyPath=function(n){if(!this.params)throw new Error("traversePropertyPath - model has no loaded params");var t=n.split("/").reduce(function(i,a){if(!i.nextObj.hasOwnProperty(a))throw new Error("traversePropertyPath - object does not have property "+a+", for path "+n);return{obj:i.nextObj,objProp:a,nextObj:i.nextObj[a]}},{nextObj:this.params}),r=t.obj,o=t.objProp;if(!r||!o||!(r[o]instanceof Xe))throw new Error("traversePropertyPath - parameter is not a tensor, for path "+n);return{obj:r,objProp:o}},e})();function $t(e,n,t){return fe(function(){var r=Oc(e,n.depthwise_filter,n.pointwise_filter,t,"same");return r=Me(r,n.bias),r})}function ou(e,n,t){return t===void 0&&(t=!1),fe(function(){var r=Ye(t?Me(on(e,n.conv0.filters,[2,2],"same"),n.conv0.bias):$t(e,n.conv0,[2,2])),o=$t(r,n.conv1,[1,1]),i=Ye(Me(r,o)),a=$t(i,n.conv2,[1,1]);return Ye(Me(r,Me(o,a)))})}function $i(e,n,t,r){return t===void 0&&(t=!1),r===void 0&&(r=!0),fe(function(){var o=Ye(t?Me(on(e,n.conv0.filters,r?[2,2]:[1,1],"same"),n.conv0.bias):$t(e,n.conv0,r?[2,2]:[1,1])),i=$t(o,n.conv1,[1,1]),a=Ye(Me(o,i)),s=$t(a,n.conv2,[1,1]),u=Ye(Me(o,Me(i,s))),c=$t(u,n.conv3,[1,1]);return Ye(Me(o,Me(i,Me(s,c))))})}function dn(e,n,t,r){return t===void 0&&(t="same"),r===void 0&&(r=!1),fe(function(){var o=Me(on(e,n.filters,[1,1],t),n.bias);return r?Ye(o):o})}function ir(e,n){Object.keys(e).forEach(function(t){n.some(function(r){return r.originalPath===t})||e[t].dispose()})}function hs(e,n){return function(t,r,o,i){var a=Pt(e(t*r*o*o),[o,o,t,r]),s=nt(e(r));return n.push({paramPath:i+"/filters"},{paramPath:i+"/bias"}),{filters:a,bias:s}}}function el(e,n){return function(t,r,o){var i=yr(e(t*r),[t,r]),a=nt(e(r));return n.push({paramPath:o+"/weights"},{paramPath:o+"/bias"}),{weights:i,bias:a}}}var Hv=(function(){function e(n,t,r){this.depthwise_filter=n,this.pointwise_filter=t,this.bias=r}return e})();function tl(e,n){return function(t,r,o){var i=Pt(e(9*t),[3,3,t,1]),a=Pt(e(t*r),[1,1,t,r]),s=nt(e(r));return n.push({paramPath:o+"/depthwise_filter"},{paramPath:o+"/pointwise_filter"},{paramPath:o+"/bias"}),new Hv(i,a,s)}}function nl(e){return function(n){var t=e(n+"/depthwise_filter",4),r=e(n+"/pointwise_filter",4),o=e(n+"/bias",1);return new Hv(t,r,o)}}function Ar(e,n){return function(t,r,o){var i=e[t];if(!us(i,r))throw new Error("expected weightMap["+t+"] to be a Tensor"+r+"D, instead have "+i);return n.push({originalPath:t,paramPath:o||t}),i}}function ar(e){var n=e;function t(o){var i=n.slice(0,o);return n=n.slice(o),i}function r(){return n}return{extractWeights:t,getRemainingWeights:r}}function jv(e,n){var t=hs(e,n),r=tl(e,n);function o(a,s,u,c){c===void 0&&(c=!1);var l=c?t(a,s,3,u+"/conv0"):r(a,s,u+"/conv0"),f=r(s,s,u+"/conv1"),h=r(s,s,u+"/conv2");return{conv0:l,conv1:f,conv2:h}}function i(a,s,u,c){c===void 0&&(c=!1);var l=o(a,s,u,c),f=l.conv0,h=l.conv1,d=l.conv2,p=r(s,s,u+"/conv3");return{conv0:f,conv1:h,conv2:d,conv3:p}}return{extractDenseBlock3Params:o,extractDenseBlock4Params:i}}function xE(e){var n=[],t=ar(e),r=t.extractWeights,o=t.getRemainingWeights,i=jv(r,n).extractDenseBlock4Params,a=i(3,32,"dense0",!0),s=i(32,64,"dense1"),u=i(64,128,"dense2"),c=i(128,256,"dense3");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:n,params:{dense0:a,dense1:s,dense2:u,dense3:c}}}function qv(e){return function(n){var t=e(n+"/filters",4),r=e(n+"/bias",1);return{filters:t,bias:r}}}function Kv(e,n){var t=Ar(e,n),r=qv(t),o=nl(t);function i(s,u){u===void 0&&(u=!1);var c=u?r(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),f=o(s+"/conv2");return{conv0:c,conv1:l,conv2:f}}function a(s,u){u===void 0&&(u=!1);var c=u?r(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),f=o(s+"/conv2"),h=o(s+"/conv3");return{conv0:c,conv1:l,conv2:f,conv3:h}}return{extractDenseBlock3Params:i,extractDenseBlock4Params:a}}function wE(e){var n=[],t=Kv(e,n).extractDenseBlock4Params,r={dense0:t("dense0",!0),dense1:t("dense1"),dense2:t("dense2"),dense3:t("dense3")};return ir(e,n),{params:r,paramMappings:n}}var $v=(function(e){De(n,e);function n(){return e.call(this,"FaceFeatureExtractor")||this}return n.prototype.forwardInput=function(t){var r=this.params;if(!r)throw new Error("FaceFeatureExtractor - load model before inference");return fe(function(){var o=t.toBatchTensor(112,!0),i=[122.782,117.001,104.298],a=Ni(o,i).div(ae(255)),s=$i(a,r.dense0,!0);return s=$i(s,r.dense1),s=$i(s,r.dense2),s=$i(s,r.dense3),s=Di(s,[7,7],[2,2],"valid"),s})},n.prototype.forward=function(t){return we(this,void 0,void 0,function(){var r;return _e(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,vt(t)];case 1:return[2,r.apply(this,[o.sent()])]}})})},n.prototype.getDefaultModelName=function(){return"face_feature_extractor_model"},n.prototype.extractParamsFromWeigthMap=function(t){return wE(t)},n.prototype.extractParams=function(t){return xE(t)},n})(or);function In(e,n){return fe(function(){return Me(is(e,n.weights),n.bias)})}function _E(e,n,t){var r=[],o=ar(e),i=o.extractWeights,a=o.getRemainingWeights,s=el(i,r),u=s(n,t,"fc");if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{paramMappings:r,params:{fc:u}}}function CE(e){var n=[],t=Ar(e,n);function r(i){var a=t(i+"/weights",2),s=t(i+"/bias",1);return{weights:a,bias:s}}var o={fc:r("fc")};return ir(e,n),{params:o,paramMappings:n}}function Xv(e){var n={},t={};return Object.keys(e).forEach(function(r){var o=r.startsWith("fc")?t:n;o[r]=e[r]}),{featureExtractorMap:n,classifierMap:t}}var Yv=(function(e){De(n,e);function n(t,r){var o=e.call(this,t)||this;return o._faceFeatureExtractor=r,o}return Object.defineProperty(n.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),n.prototype.runNet=function(t){var r=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return fe(function(){var i=t instanceof Fa?r.faceFeatureExtractor.forwardInput(t):t;return In(i.as2D(i.shape[0],-1),o.fc)})},n.prototype.dispose=function(t){t===void 0&&(t=!0),this.faceFeatureExtractor.dispose(t),e.prototype.dispose.call(this,t)},n.prototype.loadClassifierParams=function(t){var r=this.extractClassifierParams(t),o=r.params,i=r.paramMappings;this._params=o,this._paramMappings=i},n.prototype.extractClassifierParams=function(t){return _E(t,this.getClassifierChannelsIn(),this.getClassifierChannelsOut())},n.prototype.extractParamsFromWeigthMap=function(t){var r=Xv(t),o=r.featureExtractorMap,i=r.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),CE(i)},n.prototype.extractParams=function(t){var r=this.getClassifierChannelsIn(),o=this.getClassifierChannelsOut(),i=o*r+o,a=t.slice(0,t.length-i),s=t.slice(t.length-i);return this.faceFeatureExtractor.extractWeights(a),this.extractClassifierParams(s)},n})(or),gh=["neutral","happy","sad","angry","fearful","disgusted","surprised"],EE=(function(){function e(n){var t=this;if(n.length!==7)throw new Error("FaceExpressions.constructor - expected probabilities.length to be 7, have: "+n.length);gh.forEach(function(r,o){t[r]=n[o]})}return e.prototype.asSortedArray=function(){var n=this;return gh.map(function(t){return{expression:t,probability:n[t]}}).sort(function(t,r){return r.probability-t.probability})},e})(),RE=(function(e){De(n,e);function n(t){return t===void 0&&(t=new $v),e.call(this,"FaceExpressionNet",t)||this}return n.prototype.forwardInput=function(t){var r=this;return fe(function(){return nr(r.runNet(t))})},n.prototype.forward=function(t){return we(this,void 0,void 0,function(){var r;return _e(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,vt(t)];case 1:return[2,r.apply(this,[o.sent()])]}})})},n.prototype.predictExpressions=function(t){return we(this,void 0,void 0,function(){var r,o,i,a,s=this;return _e(this,function(u){switch(u.label){case 0:return[4,vt(t)];case 1:return r=u.sent(),[4,this.forwardInput(r)];case 2:return o=u.sent(),[4,Promise.all(st(o).map(function(c){return we(s,void 0,void 0,function(){var l;return _e(this,function(f){switch(f.label){case 0:return[4,c.data()];case 1:return l=f.sent(),c.dispose(),[2,l]}})})}))];case 3:return i=u.sent(),o.dispose(),a=i.map(function(c){return new EE(c)}),[2,r.isBatchInput?a:a[0]]}})})},n.prototype.getDefaultModelName=function(){return"face_expression_model"},n.prototype.getClassifierChannelsIn=function(){return 256},n.prototype.getClassifierChannelsOut=function(){return 7},n})(Yv);function Jv(e,n){var t={expressions:n};return Object.assign({},e,t)}function Qv(e){return Pv(e)&&e.landmarks instanceof bi&&e.unshiftedLandmarks instanceof bi&&e.alignedRect instanceof gn}function ds(e,n){var t=e.detection.box,r=n.shiftBy(t.x,t.y),o=r.align(),i=e.detection.imageDims,a=new gn(e.detection.score,o.rescale(i.reverse()),i),s={landmarks:r,unshiftedLandmarks:n,alignedRect:a};return Object.assign({},e,s)}function SE(e,n){var t=hs(e,n),r=tl(e,n);function o(a,s,u){var c=r(a,s,u+"/separable_conv0"),l=r(s,s,u+"/separable_conv1"),f=t(a,s,1,u+"/expansion_conv");return{separable_conv0:c,separable_conv1:l,expansion_conv:f}}function i(a,s){var u=r(a,a,s+"/separable_conv0"),c=r(a,a,s+"/separable_conv1"),l=r(a,a,s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:t,extractSeparableConvParams:r,extractReductionBlockParams:o,extractMainBlockParams:i}}function IE(e,n){var t=[],r=ar(e),o=r.extractWeights,i=r.getRemainingWeights,a=SE(o,t),s=a.extractConvParams,u=a.extractSeparableConvParams,c=a.extractReductionBlockParams,l=a.extractMainBlockParams,f=s(3,32,3,"entry_flow/conv_in"),h=c(32,64,"entry_flow/reduction_block_0"),d=c(64,128,"entry_flow/reduction_block_1"),p={conv_in:f,reduction_block_0:h,reduction_block_1:d},v={};gi(n,0,1).forEach(function(x){v["main_block_"+x]=l(128,"middle_flow/main_block_"+x)});var m=c(128,256,"exit_flow/reduction_block"),g=u(256,512,"exit_flow/separable_conv"),y={reduction_block:m,separable_conv:g};if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{paramMappings:t,params:{entry_flow:p,middle_flow:v,exit_flow:y}}}function AE(e,n){var t=Ar(e,n),r=qv(t),o=nl(t);function i(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=r(s+"/expansion_conv");return{separable_conv0:u,separable_conv1:c,expansion_conv:l}}function a(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=o(s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:r,extractSeparableConvParams:o,extractReductionBlockParams:i,extractMainBlockParams:a}}function kE(e,n){var t=[],r=AE(e,t),o=r.extractConvParams,i=r.extractSeparableConvParams,a=r.extractReductionBlockParams,s=r.extractMainBlockParams,u=o("entry_flow/conv_in"),c=a("entry_flow/reduction_block_0"),l=a("entry_flow/reduction_block_1"),f={conv_in:u,reduction_block_0:c,reduction_block_1:l},h={};gi(n,0,1).forEach(function(m){h["main_block_"+m]=s("middle_flow/main_block_"+m)});var d=a("exit_flow/reduction_block"),p=i("exit_flow/separable_conv"),v={reduction_block:d,separable_conv:p};return ir(e,t),{params:{entry_flow:f,middle_flow:h,exit_flow:v},paramMappings:t}}function Zv(e,n,t){return Me(on(e,n.filters,t,"same"),n.bias)}function iu(e,n,t){t===void 0&&(t=!0);var r=t?Ye(e):e;return r=$t(r,n.separable_conv0,[1,1]),r=$t(Ye(r),n.separable_conv1,[1,1]),r=ht(r,[3,3],[2,2],"same"),r=Me(r,Zv(e,n.expansion_conv,[2,2])),r}function DE(e,n){var t=$t(Ye(e),n.separable_conv0,[1,1]);return t=$t(Ye(t),n.separable_conv1,[1,1]),t=$t(Ye(t),n.separable_conv2,[1,1]),t=Me(t,e),t}var TE=(function(e){De(n,e);function n(t){var r=e.call(this,"TinyXception")||this;return r._numMainBlocks=t,r}return n.prototype.forwardInput=function(t){var r=this,o=this.params;if(!o)throw new Error("TinyXception - load model before inference");return fe(function(){var i=t.toBatchTensor(112,!0),a=[122.782,117.001,104.298],s=Ni(i,a).div(ae(256)),u=Ye(Zv(s,o.entry_flow.conv_in,[2,2]));return u=iu(u,o.entry_flow.reduction_block_0,!1),u=iu(u,o.entry_flow.reduction_block_1),gi(r._numMainBlocks,0,1).forEach(function(c){u=DE(u,o.middle_flow["main_block_"+c])}),u=iu(u,o.exit_flow.reduction_block),u=Ye($t(u,o.exit_flow.separable_conv,[1,1])),u})},n.prototype.forward=function(t){return we(this,void 0,void 0,function(){var r;return _e(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,vt(t)];case 1:return[2,r.apply(this,[o.sent()])]}})})},n.prototype.getDefaultModelName=function(){return"tiny_xception_model"},n.prototype.extractParamsFromWeigthMap=function(t){return kE(t,this._numMainBlocks)},n.prototype.extractParams=function(t){return IE(t,this._numMainBlocks)},n})(or);function NE(e){var n=[],t=ar(e),r=t.extractWeights,o=t.getRemainingWeights,i=el(r,n),a=i(512,1,"fc/age"),s=i(512,2,"fc/gender");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:n,params:{fc:{age:a,gender:s}}}}function FE(e){var n=[],t=Ar(e,n);function r(i){var a=t(i+"/weights",2),s=t(i+"/bias",1);return{weights:a,bias:s}}var o={fc:{age:r("fc/age"),gender:r("fc/gender")}};return ir(e,n),{params:o,paramMappings:n}}var Pa;(function(e){e.FEMALE="female",e.MALE="male"})(Pa||(Pa={}));var PE=(function(e){De(n,e);function n(t){t===void 0&&(t=new TE(2));var r=e.call(this,"AgeGenderNet")||this;return r._faceFeatureExtractor=t,r}return Object.defineProperty(n.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),n.prototype.runNet=function(t){var r=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return fe(function(){var i=t instanceof Fa?r.faceFeatureExtractor.forwardInput(t):t,a=Di(i,[7,7],[2,2],"valid").as2D(i.shape[0],-1),s=In(a,o.fc.age).as1D(),u=In(a,o.fc.gender);return{age:s,gender:u}})},n.prototype.forwardInput=function(t){var r=this;return fe(function(){var o=r.runNet(t),i=o.age,a=o.gender;return{age:i,gender:nr(a)}})},n.prototype.forward=function(t){return we(this,void 0,void 0,function(){var r;return _e(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,vt(t)];case 1:return[2,r.apply(this,[o.sent()])]}})})},n.prototype.predictAgeAndGender=function(t){return we(this,void 0,void 0,function(){var r,o,i,a,s,u,c=this;return _e(this,function(l){switch(l.label){case 0:return[4,vt(t)];case 1:return r=l.sent(),[4,this.forwardInput(r)];case 2:return o=l.sent(),i=st(o.age),a=st(o.gender),s=i.map(function(f,h){return{ageTensor:f,genderTensor:a[h]}}),[4,Promise.all(s.map(function(f){var h=f.ageTensor,d=f.genderTensor;return we(c,void 0,void 0,function(){var p,v,m,g,y;return _e(this,function(x){switch(x.label){case 0:return[4,h.data()];case 1:return p=x.sent()[0],[4,d.data()];case 2:return v=x.sent()[0],m=v>.5,g=m?Pa.MALE:Pa.FEMALE,y=m?v:1-v,h.dispose(),d.dispose(),[2,{age:p,gender:g,genderProbability:y}]}})})}))];case 3:return u=l.sent(),o.age.dispose(),o.gender.dispose(),[2,r.isBatchInput?u:u[0]]}})})},n.prototype.getDefaultModelName=function(){return"age_gender_model"},n.prototype.dispose=function(t){t===void 0&&(t=!0),this.faceFeatureExtractor.dispose(t),e.prototype.dispose.call(this,t)},n.prototype.loadClassifierParams=function(t){var r=this.extractClassifierParams(t),o=r.params,i=r.paramMappings;this._params=o,this._paramMappings=i},n.prototype.extractClassifierParams=function(t){return NE(t)},n.prototype.extractParamsFromWeigthMap=function(t){var r=Xv(t),o=r.featureExtractorMap,i=r.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),FE(i)},n.prototype.extractParams=function(t){var r=1539,o=t.slice(0,t.length-r),i=t.slice(t.length-r);return this.faceFeatureExtractor.extractWeights(o),this.extractClassifierParams(i)},n})(or),em=(function(e){De(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}return n.prototype.postProcess=function(t,r,o){var i=o.map(function(s){var u=s.width,c=s.height,l=r/Math.max(c,u);return{width:u*l,height:c*l}}),a=i.length;return fe(function(){var s=function(h,d){return Xt([Nn([68],h),Nn([68],d)],1).as2D(1,136).as1D()},u=function(h,d){var p=i[h],v=p.width,m=p.height;return d(v,m)?Math.abs(v-m)/2:0},c=function(h){return u(h,function(d,p){return d<p})},l=function(h){return u(h,function(d,p){return p<d})},f=t.mul(Nn([a,136],r)).sub(Xt(Array.from(Array(a),function(h,d){return s(c(d),l(d))}))).div(Xt(Array.from(Array(a),function(h,d){return s(i[d].width,i[d].height)})));return f})},n.prototype.forwardInput=function(t){var r=this;return fe(function(){var o=r.runNet(t);return r.postProcess(o,t.inputSize,t.inputDimensions.map(function(i){var a=i[0],s=i[1];return{height:a,width:s}}))})},n.prototype.forward=function(t){return we(this,void 0,void 0,function(){var r;return _e(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,vt(t)];case 1:return[2,r.apply(this,[o.sent()])]}})})},n.prototype.detectLandmarks=function(t){return we(this,void 0,void 0,function(){var r,o,i,a=this;return _e(this,function(s){switch(s.label){case 0:return[4,vt(t)];case 1:return r=s.sent(),o=fe(function(){return st(a.forwardInput(r))}),[4,Promise.all(o.map(function(u,c){return we(a,void 0,void 0,function(){var l,f,h,d,p;return _e(this,function(v){switch(v.label){case 0:return h=(f=Array).from,[4,u.data()];case 1:return l=h.apply(f,[v.sent()]),d=l.filter(function(m,g){return lh(g)}),p=l.filter(function(m,g){return!lh(g)}),[2,new fE(Array(68).fill(0).map(function(m,g){return new Ue(d[g],p[g])}),{height:r.getInputHeight(c),width:r.getInputWidth(c)})]}})})}))];case 2:return i=s.sent(),o.forEach(function(u){return u.dispose()}),[2,r.isBatchInput?i:i[0]]}})})},n.prototype.getClassifierChannelsOut=function(){return 136},n})(Yv),tm=(function(e){De(n,e);function n(t){return t===void 0&&(t=new $v),e.call(this,"FaceLandmark68Net",t)||this}return n.prototype.getDefaultModelName=function(){return"face_landmark_68_model"},n.prototype.getClassifierChannelsIn=function(){return 256},n})(em);function ME(e){var n=[],t=Kv(e,n).extractDenseBlock3Params,r={dense0:t("dense0",!0),dense1:t("dense1"),dense2:t("dense2")};return ir(e,n),{params:r,paramMappings:n}}function OE(e){var n=[],t=ar(e),r=t.extractWeights,o=t.getRemainingWeights,i=jv(r,n).extractDenseBlock3Params,a=i(3,32,"dense0",!0),s=i(32,64,"dense1"),u=i(64,128,"dense2");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:n,params:{dense0:a,dense1:s,dense2:u}}}var BE=(function(e){De(n,e);function n(){return e.call(this,"TinyFaceFeatureExtractor")||this}return n.prototype.forwardInput=function(t){var r=this.params;if(!r)throw new Error("TinyFaceFeatureExtractor - load model before inference");return fe(function(){var o=t.toBatchTensor(112,!0),i=[122.782,117.001,104.298],a=Ni(o,i).div(ae(255)),s=ou(a,r.dense0,!0);return s=ou(s,r.dense1),s=ou(s,r.dense2),s=Di(s,[14,14],[2,2],"valid"),s})},n.prototype.forward=function(t){return we(this,void 0,void 0,function(){var r;return _e(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,vt(t)];case 1:return[2,r.apply(this,[o.sent()])]}})})},n.prototype.getDefaultModelName=function(){return"face_feature_extractor_tiny_model"},n.prototype.extractParamsFromWeigthMap=function(t){return ME(t)},n.prototype.extractParams=function(t){return OE(t)},n})(or),LE=(function(e){De(n,e);function n(t){return t===void 0&&(t=new BE),e.call(this,"FaceLandmark68TinyNet",t)||this}return n.prototype.getDefaultModelName=function(){return"face_landmark_68_tiny_model"},n.prototype.getClassifierChannelsIn=function(){return 128},n})(em);(function(e){De(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}return n})(tm);function WE(e,n){return Me(At(e,n.weights),n.biases)}function rl(e,n,t,r,o){o===void 0&&(o="same");var i=n.conv,a=i.filters,s=i.bias,u=on(e,a,t,o);return u=Me(u,s),u=WE(u,n.scale),r?Ye(u):u}function VE(e,n){return rl(e,n,[1,1],!0)}function nm(e,n){return rl(e,n,[1,1],!1)}function rm(e,n){return rl(e,n,[2,2],!0,"valid")}function UE(e,n){function t(s,u,c){var l=e(s),f=l.length/(u*c*c);if(tE(f))throw new Error("depth has to be an integer: "+f+", weights.length: "+l.length+", numFilters: "+u+", filterSize: "+c);return fe(function(){return Cr(Pt(l,[u,f,c,c]),[2,3,1,0])})}function r(s,u,c,l){var f=t(s,u,c),h=nt(e(u));return n.push({paramPath:l+"/filters"},{paramPath:l+"/bias"}),{filters:f,bias:h}}function o(s,u){var c=nt(e(s)),l=nt(e(s));return n.push({paramPath:u+"/weights"},{paramPath:u+"/biases"}),{weights:c,biases:l}}function i(s,u,c,l){var f=r(s,u,c,l+"/conv"),h=o(u,l+"/scale");return{conv:f,scale:h}}function a(s,u,c,l,f){f===void 0&&(f=!1);var h=i((f?.5:1)*s,u,c,l+"/conv1"),d=i(s,u,c,l+"/conv2");return{conv1:h,conv2:d}}return{extractConvLayerParams:i,extractResidualLayerParams:a}}function zE(e){var n=ar(e),t=n.extractWeights,r=n.getRemainingWeights,o=[],i=UE(t,o),a=i.extractConvLayerParams,s=i.extractResidualLayerParams,u=a(4704,32,7,"conv32_down"),c=s(9216,32,3,"conv32_1"),l=s(9216,32,3,"conv32_2"),f=s(9216,32,3,"conv32_3"),h=s(36864,64,3,"conv64_down",!0),d=s(36864,64,3,"conv64_1"),p=s(36864,64,3,"conv64_2"),v=s(36864,64,3,"conv64_3"),m=s(147456,128,3,"conv128_down",!0),g=s(147456,128,3,"conv128_1"),y=s(147456,128,3,"conv128_2"),x=s(589824,256,3,"conv256_down",!0),b=s(589824,256,3,"conv256_1"),w=s(589824,256,3,"conv256_2"),_=s(589824,256,3,"conv256_down_out"),A=fe(function(){return Cr(yr(t(256*128),[128,256]),[1,0])});if(o.push({paramPath:"fc"}),r().length!==0)throw new Error("weights remaing after extract: "+r().length);var R={conv32_down:u,conv32_1:c,conv32_2:l,conv32_3:f,conv64_down:h,conv64_1:d,conv64_2:p,conv64_3:v,conv128_down:m,conv128_1:g,conv128_2:y,conv256_down:x,conv256_1:b,conv256_2:w,conv256_down_out:_,fc:A};return{params:R,paramMappings:o}}function GE(e,n){var t=Ar(e,n);function r(a){var s=t(a+"/scale/weights",1),u=t(a+"/scale/biases",1);return{weights:s,biases:u}}function o(a){var s=t(a+"/conv/filters",4),u=t(a+"/conv/bias",1),c=r(a);return{conv:{filters:s,bias:u},scale:c}}function i(a){return{conv1:o(a+"/conv1"),conv2:o(a+"/conv2")}}return{extractConvLayerParams:o,extractResidualLayerParams:i}}function HE(e){var n=[],t=GE(e,n),r=t.extractConvLayerParams,o=t.extractResidualLayerParams,i=r("conv32_down"),a=o("conv32_1"),s=o("conv32_2"),u=o("conv32_3"),c=o("conv64_down"),l=o("conv64_1"),f=o("conv64_2"),h=o("conv64_3"),d=o("conv128_down"),p=o("conv128_1"),v=o("conv128_2"),m=o("conv256_down"),g=o("conv256_1"),y=o("conv256_2"),x=o("conv256_down_out"),b=e.fc;if(n.push({originalPath:"fc",paramPath:"fc"}),!eE(b))throw new Error("expected weightMap[fc] to be a Tensor2D, instead have "+b);var w={conv32_down:i,conv32_1:a,conv32_2:s,conv32_3:u,conv64_down:c,conv64_1:l,conv64_2:f,conv64_3:h,conv128_down:d,conv128_1:p,conv128_2:v,conv256_down:m,conv256_1:g,conv256_2:y,conv256_down_out:x,fc:b};return ir(e,n),{params:w,paramMappings:n}}function xn(e,n){var t=VE(e,n.conv1);return t=nm(t,n.conv2),t=Me(t,e),t=Ye(t),t}function Xi(e,n){var t=rm(e,n.conv1);t=nm(t,n.conv2);var r=Di(e,2,2,"valid"),o=qe(r.shape),i=r.shape[3]!==t.shape[3],a=r.shape[1]!==t.shape[1]||r.shape[2]!==t.shape[2];if(a){var s=ri(t.shape);s[1]=1;var u=qe(s);t=at([t,u],1);var c=ri(t.shape);c[2]=1;var l=qe(c);t=at([t,l],2)}return r=i?at([r,o],3):r,t=Me(r,t),t=Ye(t),t}var jE=(function(e){De(n,e);function n(){return e.call(this,"FaceRecognitionNet")||this}return n.prototype.forwardInput=function(t){var r=this.params;if(!r)throw new Error("FaceRecognitionNet - load model before inference");return fe(function(){var o=t.toBatchTensor(150,!0).toFloat(),i=[122.782,117.001,104.298],a=Ni(o,i).div(ae(256)),s=rm(a,r.conv32_down);s=ht(s,3,2,"valid"),s=xn(s,r.conv32_1),s=xn(s,r.conv32_2),s=xn(s,r.conv32_3),s=Xi(s,r.conv64_down),s=xn(s,r.conv64_1),s=xn(s,r.conv64_2),s=xn(s,r.conv64_3),s=Xi(s,r.conv128_down),s=xn(s,r.conv128_1),s=xn(s,r.conv128_2),s=Xi(s,r.conv256_down),s=xn(s,r.conv256_1),s=xn(s,r.conv256_2),s=Xi(s,r.conv256_down_out);var u=s.mean([1,2]),c=is(u,r.fc);return c})},n.prototype.forward=function(t){return we(this,void 0,void 0,function(){var r;return _e(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,vt(t)];case 1:return[2,r.apply(this,[o.sent()])]}})})},n.prototype.computeFaceDescriptor=function(t){return we(this,void 0,void 0,function(){var r,o,i,a=this;return _e(this,function(s){switch(s.label){case 0:return[4,vt(t)];case 1:return r=s.sent(),o=fe(function(){return st(a.forwardInput(r))}),[4,Promise.all(o.map(function(u){return u.data()}))];case 2:return i=s.sent(),o.forEach(function(u){return u.dispose()}),[2,r.isBatchInput?i:i[0]]}})})},n.prototype.getDefaultModelName=function(){return"face_recognition_model"},n.prototype.extractParamsFromWeigthMap=function(t){return HE(t)},n.prototype.extractParams=function(t){return zE(t)},n})(or);function om(e,n){var t={descriptor:n};return Object.assign({},e,t)}function im(e,n){var t={age:n};return Object.assign({},e,t)}function am(e,n,t){var r={gender:n,genderProbability:t};return Object.assign({},e,r)}var sm=(function(){function e(n){var t=n===void 0?{}:n,r=t.minFaceSize,o=t.scaleFactor,i=t.maxNumScales,a=t.scoreThresholds,s=t.scaleSteps;if(this._name="MtcnnOptions",this._minFaceSize=r||20,this._scaleFactor=o||.709,this._maxNumScales=i||10,this._scoreThresholds=a||[.6,.7,.7],this._scaleSteps=s,typeof this._minFaceSize!="number"||this._minFaceSize<0)throw new Error(this._name+" - expected minFaceSize to be a number > 0");if(typeof this._scaleFactor!="number"||this._scaleFactor<=0||this._scaleFactor>=1)throw new Error(this._name+" - expected scaleFactor to be a number between 0 and 1");if(typeof this._maxNumScales!="number"||this._maxNumScales<0)throw new Error(this._name+" - expected maxNumScales to be a number > 0");if(!Array.isArray(this._scoreThresholds)||this._scoreThresholds.length!==3||this._scoreThresholds.some(function(u){return typeof u!="number"}))throw new Error(this._name+" - expected scoreThresholds to be an array of numbers of length 3");if(this._scaleSteps&&(!Array.isArray(this._scaleSteps)||this._scaleSteps.some(function(u){return typeof u!="number"})))throw new Error(this._name+" - expected scaleSteps to be an array of numbers")}return Object.defineProperty(e.prototype,"minFaceSize",{get:function(){return this._minFaceSize},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"scaleFactor",{get:function(){return this._scaleFactor},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"maxNumScales",{get:function(){return this._maxNumScales},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"scoreThresholds",{get:function(){return this._scoreThresholds},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"scaleSteps",{get:function(){return this._scaleSteps},enumerable:!0,configurable:!0}),e})();function qE(e,n){function t(u,c){var l=Pt(e(9*u),[3,3,u,1]),f=nt(e(u)),h=nt(e(u)),d=nt(e(u)),p=nt(e(u));return n.push({paramPath:c+"/filters"},{paramPath:c+"/batch_norm_scale"},{paramPath:c+"/batch_norm_offset"},{paramPath:c+"/batch_norm_mean"},{paramPath:c+"/batch_norm_variance"}),{filters:l,batch_norm_scale:f,batch_norm_offset:h,batch_norm_mean:d,batch_norm_variance:p}}function r(u,c,l,f,h){var d=Pt(e(u*c*l*l),[l,l,u,c]),p=nt(e(c));return n.push({paramPath:f+"/filters"},{paramPath:f+"/"+(h?"batch_norm_offset":"bias")}),{filters:d,bias:p}}function o(u,c,l,f){var h=r(u,c,l,f,!0),d=h.filters,p=h.bias;return{filters:d,batch_norm_offset:p}}function i(u,c,l){var f=t(u,l+"/depthwise_conv"),h=o(u,c,1,l+"/pointwise_conv");return{depthwise_conv:f,pointwise_conv:h}}function a(){var u=o(3,32,3,"mobilenetv1/conv_0"),c=i(32,64,"mobilenetv1/conv_1"),l=i(64,128,"mobilenetv1/conv_2"),f=i(128,128,"mobilenetv1/conv_3"),h=i(128,256,"mobilenetv1/conv_4"),d=i(256,256,"mobilenetv1/conv_5"),p=i(256,512,"mobilenetv1/conv_6"),v=i(512,512,"mobilenetv1/conv_7"),m=i(512,512,"mobilenetv1/conv_8"),g=i(512,512,"mobilenetv1/conv_9"),y=i(512,512,"mobilenetv1/conv_10"),x=i(512,512,"mobilenetv1/conv_11"),b=i(512,1024,"mobilenetv1/conv_12"),w=i(1024,1024,"mobilenetv1/conv_13");return{conv_0:u,conv_1:c,conv_2:l,conv_3:f,conv_4:h,conv_5:d,conv_6:p,conv_7:v,conv_8:m,conv_9:g,conv_10:y,conv_11:x,conv_12:b,conv_13:w}}function s(){var u=o(1024,256,1,"prediction_layer/conv_0"),c=o(256,512,3,"prediction_layer/conv_1"),l=o(512,128,1,"prediction_layer/conv_2"),f=o(128,256,3,"prediction_layer/conv_3"),h=o(256,128,1,"prediction_layer/conv_4"),d=o(128,256,3,"prediction_layer/conv_5"),p=o(256,64,1,"prediction_layer/conv_6"),v=o(64,128,3,"prediction_layer/conv_7"),m=r(512,12,1,"prediction_layer/box_predictor_0/box_encoding_predictor"),g=r(512,9,1,"prediction_layer/box_predictor_0/class_predictor"),y=r(1024,24,1,"prediction_layer/box_predictor_1/box_encoding_predictor"),x=r(1024,18,1,"prediction_layer/box_predictor_1/class_predictor"),b=r(512,24,1,"prediction_layer/box_predictor_2/box_encoding_predictor"),w=r(512,18,1,"prediction_layer/box_predictor_2/class_predictor"),_=r(256,24,1,"prediction_layer/box_predictor_3/box_encoding_predictor"),A=r(256,18,1,"prediction_layer/box_predictor_3/class_predictor"),R=r(256,24,1,"prediction_layer/box_predictor_4/box_encoding_predictor"),E=r(256,18,1,"prediction_layer/box_predictor_4/class_predictor"),S=r(128,24,1,"prediction_layer/box_predictor_5/box_encoding_predictor"),F=r(128,18,1,"prediction_layer/box_predictor_5/class_predictor"),N={box_encoding_predictor:m,class_predictor:g},U={box_encoding_predictor:y,class_predictor:x},z={box_encoding_predictor:b,class_predictor:w},G={box_encoding_predictor:_,class_predictor:A},H={box_encoding_predictor:R,class_predictor:E},O={box_encoding_predictor:S,class_predictor:F};return{conv_0:u,conv_1:c,conv_2:l,conv_3:f,conv_4:h,conv_5:d,conv_6:p,conv_7:v,box_predictor_0:N,box_predictor_1:U,box_predictor_2:z,box_predictor_3:G,box_predictor_4:H,box_predictor_5:O}}return{extractMobilenetV1Params:a,extractPredictionLayerParams:s}}function KE(e){var n=[],t=ar(e),r=t.extractWeights,o=t.getRemainingWeights,i=qE(r,n),a=i.extractMobilenetV1Params,s=i.extractPredictionLayerParams,u=a(),c=s(),l=wc(r(5118*4),[1,5118,4]),f={extra_dim:l};if(n.push({paramPath:"output_layer/extra_dim"}),o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{params:{mobilenetv1:u,prediction_layer:c,output_layer:f},paramMappings:n}}function $E(e,n){var t=Ar(e,n);function r(c,l,f){var h=t(c+"/Conv2d_"+l+"_pointwise/weights",4,f+"/filters"),d=t(c+"/Conv2d_"+l+"_pointwise/convolution_bn_offset",1,f+"/batch_norm_offset");return{filters:h,batch_norm_offset:d}}function o(c){var l="mobilenetv1/conv_"+c,f="MobilenetV1/Conv2d_"+c+"_depthwise",h=l+"/depthwise_conv",d=l+"/pointwise_conv",p=t(f+"/depthwise_weights",4,h+"/filters"),v=t(f+"/BatchNorm/gamma",1,h+"/batch_norm_scale"),m=t(f+"/BatchNorm/beta",1,h+"/batch_norm_offset"),g=t(f+"/BatchNorm/moving_mean",1,h+"/batch_norm_mean"),y=t(f+"/BatchNorm/moving_variance",1,h+"/batch_norm_variance");return{depthwise_conv:{filters:p,batch_norm_scale:v,batch_norm_offset:m,batch_norm_mean:g,batch_norm_variance:y},pointwise_conv:r("MobilenetV1",c,d)}}function i(){return{conv_0:r("MobilenetV1",0,"mobilenetv1/conv_0"),conv_1:o(1),conv_2:o(2),conv_3:o(3),conv_4:o(4),conv_5:o(5),conv_6:o(6),conv_7:o(7),conv_8:o(8),conv_9:o(9),conv_10:o(10),conv_11:o(11),conv_12:o(12),conv_13:o(13)}}function a(c,l){var f=t(c+"/weights",4,l+"/filters"),h=t(c+"/biases",1,l+"/bias");return{filters:f,bias:h}}function s(c){var l=a("Prediction/BoxPredictor_"+c+"/BoxEncodingPredictor","prediction_layer/box_predictor_"+c+"/box_encoding_predictor"),f=a("Prediction/BoxPredictor_"+c+"/ClassPredictor","prediction_layer/box_predictor_"+c+"/class_predictor");return{box_encoding_predictor:l,class_predictor:f}}function u(){return{conv_0:r("Prediction",0,"prediction_layer/conv_0"),conv_1:r("Prediction",1,"prediction_layer/conv_1"),conv_2:r("Prediction",2,"prediction_layer/conv_2"),conv_3:r("Prediction",3,"prediction_layer/conv_3"),conv_4:r("Prediction",4,"prediction_layer/conv_4"),conv_5:r("Prediction",5,"prediction_layer/conv_5"),conv_6:r("Prediction",6,"prediction_layer/conv_6"),conv_7:r("Prediction",7,"prediction_layer/conv_7"),box_predictor_0:s(0),box_predictor_1:s(1),box_predictor_2:s(2),box_predictor_3:s(3),box_predictor_4:s(4),box_predictor_5:s(5)}}return{extractMobilenetV1Params:i,extractPredictionLayerParams:u}}function XE(e){var n=[],t=$E(e,n),r=t.extractMobilenetV1Params,o=t.extractPredictionLayerParams,i=e["Output/extra_dim"];if(n.push({originalPath:"Output/extra_dim",paramPath:"output_layer/extra_dim"}),!cs(i))throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have "+i);var a={mobilenetv1:r(),prediction_layer:o(),output_layer:{extra_dim:i}};return ir(e,n),{params:a,paramMappings:n}}function wn(e,n,t){return fe(function(){var r=on(e,n.filters,t,"same");return r=Me(r,n.batch_norm_offset),Nc(r,0,6)})}var YE=.0010000000474974513;function JE(e,n,t){return fe(function(){var r=os(e,n.filters,t,"same");return r=Zp(r,n.batch_norm_mean,n.batch_norm_variance,n.batch_norm_offset,n.batch_norm_scale,YE),Nc(r,0,6)})}function QE(e){return[2,4,6,12].some(function(n){return n===e})?[2,2]:[1,1]}function ZE(e,n){return fe(function(){var t=null,r=wn(e,n.conv_0,[2,2]),o=[n.conv_1,n.conv_2,n.conv_3,n.conv_4,n.conv_5,n.conv_6,n.conv_7,n.conv_8,n.conv_9,n.conv_10,n.conv_11,n.conv_12,n.conv_13];if(o.forEach(function(i,a){var s=a+1,u=QE(s);r=JE(r,i.depthwise_conv,u),r=wn(r,i.pointwise_conv,[1,1]),s===11&&(t=r)}),t===null)throw new Error("mobileNetV1 - output of conv layer 11 is null");return{out:r,conv11:t}})}function eR(e,n,t,r,o){var i=e.shape[0],a=Math.min(t,i),s=n.map(function(l,f){return{score:l,boxIndex:f}}).filter(function(l){return l.score>o}).sort(function(l,f){return f.score-l.score}),u=function(l){return l<=r?1:0},c=[];return s.forEach(function(l){if(!(c.length>=a)){for(var f=l.score,h=c.length-1;h>=0;--h){var d=tR(e,l.boxIndex,c[h]);if(d!==0&&(l.score*=u(d),l.score<=o))break}f===l.score&&c.push(l.boxIndex)}}),c}function tR(e,n,t){var r=e.arraySync(),o=Math.min(r[n][0],r[n][2]),i=Math.min(r[n][1],r[n][3]),a=Math.max(r[n][0],r[n][2]),s=Math.max(r[n][1],r[n][3]),u=Math.min(r[t][0],r[t][2]),c=Math.min(r[t][1],r[t][3]),l=Math.max(r[t][0],r[t][2]),f=Math.max(r[t][1],r[t][3]),h=(a-o)*(s-i),d=(l-u)*(f-c);if(h<=0||d<=0)return 0;var p=Math.max(o,u),v=Math.max(i,c),m=Math.min(a,l),g=Math.min(s,f),y=Math.max(m-p,0)*Math.max(g-v,0);return y/(h+d-y)}function nR(e){var n=st(Cr(e,[1,0])),t=[lt(n[2],n[0]),lt(n[3],n[1])],r=[Me(n[0],un(t[0],ae(2))),Me(n[1],un(t[1],ae(2)))];return{sizes:t,centers:r}}function rR(e,n){var t=nR(e),r=t.sizes,o=t.centers,i=st(Cr(n,[1,0])),a=un(At(Hu(un(i[2],ae(5))),r[0]),ae(2)),s=Me(At(un(i[0],ae(10)),r[0]),o[0]),u=un(At(Hu(un(i[3],ae(5))),r[1]),ae(2)),c=Me(At(un(i[1],ae(10)),r[1]),o[1]);return Cr(Xt([lt(s,a),lt(c,u),Me(s,a),Me(c,u)]),[1,0])}function oR(e,n,t){return fe(function(){var r=e.shape[0],o=rR(ln(yo(t.extra_dim,[r,1,1]),[-1,4]),ln(e,[-1,4]));o=ln(o,[r,o.shape[0]/r,4]);var i=Xp(Mn(n,[0,0,1],[-1,-1,-1])),a=Mn(i,[0,0,0],[-1,-1,1]);a=ln(a,[r,a.shape[1]]);var s=st(o),u=st(a);return{boxes:s,scores:u}})}function ao(e,n){return fe(function(){var t=e.shape[0],r=ln(dn(e,n.box_encoding_predictor),[t,-1,1,4]),o=ln(dn(e,n.class_predictor),[t,-1,3]);return{boxPredictionEncoding:r,classPrediction:o}})}function iR(e,n,t){return fe(function(){var r=wn(e,t.conv_0,[1,1]),o=wn(r,t.conv_1,[2,2]),i=wn(o,t.conv_2,[1,1]),a=wn(i,t.conv_3,[2,2]),s=wn(a,t.conv_4,[1,1]),u=wn(s,t.conv_5,[2,2]),c=wn(u,t.conv_6,[1,1]),l=wn(c,t.conv_7,[2,2]),f=ao(n,t.box_predictor_0),h=ao(e,t.box_predictor_1),d=ao(o,t.box_predictor_2),p=ao(a,t.box_predictor_3),v=ao(u,t.box_predictor_4),m=ao(l,t.box_predictor_5),g=at([f.boxPredictionEncoding,h.boxPredictionEncoding,d.boxPredictionEncoding,p.boxPredictionEncoding,v.boxPredictionEncoding,m.boxPredictionEncoding],1),y=at([f.classPrediction,h.classPrediction,d.classPrediction,p.classPrediction,v.classPrediction,m.classPrediction],1);return{boxPredictions:g,classPredictions:y}})}var ps=(function(){function e(n){var t=n===void 0?{}:n,r=t.minConfidence,o=t.maxResults;if(this._name="SsdMobilenetv1Options",this._minConfidence=r||.5,this._maxResults=o||100,typeof this._minConfidence!="number"||this._minConfidence<=0||this._minConfidence>=1)throw new Error(this._name+" - expected minConfidence to be a number between 0 and 1");if(typeof this._maxResults!="number")throw new Error(this._name+" - expected maxResults to be a number")}return Object.defineProperty(e.prototype,"minConfidence",{get:function(){return this._minConfidence},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"maxResults",{get:function(){return this._maxResults},enumerable:!0,configurable:!0}),e})(),um=(function(e){De(n,e);function n(){return e.call(this,"SsdMobilenetv1")||this}return n.prototype.forwardInput=function(t){var r=this.params;if(!r)throw new Error("SsdMobilenetv1 - load model before inference");return fe(function(){var o=t.toBatchTensor(512,!1).toFloat(),i=lt(At(o,ae(.007843137718737125)),ae(1)),a=ZE(i,r.mobilenetv1),s=iR(a.out,a.conv11,r.prediction_layer),u=s.boxPredictions,c=s.classPredictions;return oR(u,c,r.output_layer)})},n.prototype.forward=function(t){return we(this,void 0,void 0,function(){var r;return _e(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,vt(t)];case 1:return[2,r.apply(this,[o.sent()])]}})})},n.prototype.locateFaces=function(t,r){return r===void 0&&(r={}),we(this,void 0,void 0,function(){var o,i,a,s,u,c,l,f,h,d,p,v,m,g,y,x,b,w,_,A,R;return _e(this,function(E){switch(E.label){case 0:return o=new ps(r),i=o.maxResults,a=o.minConfidence,[4,vt(t)];case 1:for(s=E.sent(),u=this.forwardInput(s),c=u.boxes,l=u.scores,f=c[0],h=l[0],d=1;d<c.length;d++)c[d].dispose(),l[d].dispose();return m=(v=Array).from,[4,h.data()];case 2:return p=m.apply(v,[E.sent()]),g=.5,y=eR(f,p,i,g,a),x=s.getReshapedInputDimensions(0),b=s.inputSize,w=b/x.width,_=b/x.height,A=f.arraySync(),R=y.map(function(S){var F=[Math.max(0,A[S][0]),Math.min(1,A[S][2])].map(function(O){return O*_}),N=F[0],U=F[1],z=[Math.max(0,A[S][1]),Math.min(1,A[S][3])].map(function(O){return O*w}),G=z[0],H=z[1];return new gn(p[S],new Xc(G,N,H-G,U-N),{height:s.getInputHeight(0),width:s.getInputWidth(0)})}),f.dispose(),h.dispose(),[2,R]}})})},n.prototype.getDefaultModelName=function(){return"ssd_mobilenetv1_model"},n.prototype.extractParamsFromWeigthMap=function(t){return XE(t)},n.prototype.extractParams=function(t){return KE(t)},n})(or);(function(e){De(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}return n})(um);var aR=.4,sR=[new Ue(.738768,.874946),new Ue(2.42204,2.65704),new Ue(4.30971,7.04493),new Ue(10.246,4.59428),new Ue(12.6868,11.8741)],uR=[new Ue(1.603231,2.094468),new Ue(6.041143,7.080126),new Ue(2.882459,3.518061),new Ue(4.266906,5.178857),new Ue(9.041765,10.66308)],cR=[117.001,114.697,97.404],lR="tiny_yolov2_model",fR="tiny_yolov2_separable_conv_model",Yi=function(e){return typeof e=="number"};function hR(e){if(!e)throw new Error("invalid config: "+e);if(typeof e.withSeparableConvs!="boolean")throw new Error("config.withSeparableConvs has to be a boolean, have: "+e.withSeparableConvs);if(!Yi(e.iouThreshold)||e.iouThreshold<0||e.iouThreshold>1)throw new Error("config.iouThreshold has to be a number between [0, 1], have: "+e.iouThreshold);if(!Array.isArray(e.classes)||!e.classes.length||!e.classes.every(function(n){return typeof n=="string"}))throw new Error("config.classes has to be an array class names: string[], have: "+JSON.stringify(e.classes));if(!Array.isArray(e.anchors)||!e.anchors.length||!e.anchors.map(function(n){return n||{}}).every(function(n){return Yi(n.x)&&Yi(n.y)}))throw new Error("config.anchors has to be an array of { x: number, y: number }, have: "+JSON.stringify(e.anchors));if(e.meanRgb&&(!Array.isArray(e.meanRgb)||e.meanRgb.length!==3||!e.meanRgb.every(Yi)))throw new Error("config.meanRgb has to be an array of shape [number, number, number], have: "+JSON.stringify(e.meanRgb))}function ol(e){return fe(function(){var n=At(e,ae(.10000000149011612));return Me(Ye(lt(e,n)),n)})}function ur(e,n){return fe(function(){var t=Yr(e,[[0,0],[1,1],[1,1],[0,0]]);return t=on(t,n.conv.filters,[1,1],"valid"),t=lt(t,n.bn.sub),t=At(t,n.bn.truediv),t=Me(t,n.conv.bias),ol(t)})}function cr(e,n){return fe(function(){var t=Yr(e,[[0,0],[1,1],[1,1],[0,0]]);return t=Oc(t,n.depthwise_filter,n.pointwise_filter,[1,1],"valid"),t=Me(t,n.bias),ol(t)})}function dR(e,n){var t=hs(e,n);function r(a,s){var u=nt(e(a)),c=nt(e(a));return n.push({paramPath:s+"/sub"},{paramPath:s+"/truediv"}),{sub:u,truediv:c}}function o(a,s,u){var c=t(a,s,3,u+"/conv"),l=r(s,u+"/bn");return{conv:c,bn:l}}var i=tl(e,n);return{extractConvParams:t,extractConvWithBatchNormParams:o,extractSeparableConvParams:i}}function pR(e,n,t,r){var o=ar(e),i=o.extractWeights,a=o.getRemainingWeights,s=[],u=dR(i,s),c=u.extractConvParams,l=u.extractConvWithBatchNormParams,f=u.extractSeparableConvParams,h;if(n.withSeparableConvs){var d=r[0],p=r[1],v=r[2],m=r[3],g=r[4],y=r[5],x=r[6],b=r[7],w=r[8],_=n.isFirstLayerConv2d?c(d,p,3,"conv0"):f(d,p,"conv0"),A=f(p,v,"conv1"),R=f(v,m,"conv2"),E=f(m,g,"conv3"),S=f(g,y,"conv4"),F=f(y,x,"conv5"),N=b?f(x,b,"conv6"):void 0,U=w?f(b,w,"conv7"):void 0,z=c(w||b||x,5*t,1,"conv8");h={conv0:_,conv1:A,conv2:R,conv3:E,conv4:S,conv5:F,conv6:N,conv7:U,conv8:z}}else{var d=r[0],p=r[1],v=r[2],m=r[3],g=r[4],y=r[5],x=r[6],b=r[7],w=r[8],_=l(d,p,"conv0"),A=l(p,v,"conv1"),R=l(v,m,"conv2"),E=l(m,g,"conv3"),S=l(g,y,"conv4"),F=l(y,x,"conv5"),N=l(x,b,"conv6"),U=l(b,w,"conv7"),z=c(w,5*t,1,"conv8");h={conv0:_,conv1:A,conv2:R,conv3:E,conv4:S,conv5:F,conv6:N,conv7:U,conv8:z}}if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{params:h,paramMappings:s}}function vR(e,n){var t=Ar(e,n);function r(s){var u=t(s+"/sub",1),c=t(s+"/truediv",1);return{sub:u,truediv:c}}function o(s){var u=t(s+"/filters",4),c=t(s+"/bias",1);return{filters:u,bias:c}}function i(s){var u=o(s+"/conv"),c=r(s+"/bn");return{conv:u,bn:c}}var a=nl(t);return{extractConvParams:o,extractConvWithBatchNormParams:i,extractSeparableConvParams:a}}function mR(e,n){var t=[],r=vR(e,t),o=r.extractConvParams,i=r.extractConvWithBatchNormParams,a=r.extractSeparableConvParams,s;if(n.withSeparableConvs){var u=n.filterSizes&&n.filterSizes.length||9;s={conv0:n.isFirstLayerConv2d?o("conv0"):a("conv0"),conv1:a("conv1"),conv2:a("conv2"),conv3:a("conv3"),conv4:a("conv4"),conv5:a("conv5"),conv6:u>7?a("conv6"):void 0,conv7:u>8?a("conv7"):void 0,conv8:o("conv8")}}else s={conv0:i("conv0"),conv1:i("conv1"),conv2:i("conv2"),conv3:i("conv3"),conv4:i("conv4"),conv5:i("conv5"),conv6:i("conv6"),conv7:i("conv7"),conv8:o("conv8")};return ir(e,t),{params:s,paramMappings:t}}var yh;(function(e){e[e.XS=224]="XS",e[e.SM=320]="SM",e[e.MD=416]="MD",e[e.LG=608]="LG"})(yh||(yh={}));var il=(function(){function e(n){var t=n===void 0?{}:n,r=t.inputSize,o=t.scoreThreshold;if(this._name="TinyYolov2Options",this._inputSize=r||416,this._scoreThreshold=o||.5,typeof this._inputSize!="number"||this._inputSize%32!==0)throw new Error(this._name+" - expected inputSize to be a number divisible by 32");if(typeof this._scoreThreshold!="number"||this._scoreThreshold<=0||this._scoreThreshold>=1)throw new Error(this._name+" - expected scoreThreshold to be a number between 0 and 1")}return Object.defineProperty(e.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"scoreThreshold",{get:function(){return this._scoreThreshold},enumerable:!0,configurable:!0}),e})(),cm=(function(e){De(n,e);function n(t){var r=e.call(this,"TinyYolov2")||this;return hR(t),r._config=t,r}return Object.defineProperty(n.prototype,"config",{get:function(){return this._config},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"withClassScores",{get:function(){return this.config.withClassScores||this.config.classes.length>1},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"boxEncodingSize",{get:function(){return 5+(this.withClassScores?this.config.classes.length:0)},enumerable:!0,configurable:!0}),n.prototype.runTinyYolov2=function(t,r){var o=ur(t,r.conv0);return o=ht(o,[2,2],[2,2],"same"),o=ur(o,r.conv1),o=ht(o,[2,2],[2,2],"same"),o=ur(o,r.conv2),o=ht(o,[2,2],[2,2],"same"),o=ur(o,r.conv3),o=ht(o,[2,2],[2,2],"same"),o=ur(o,r.conv4),o=ht(o,[2,2],[2,2],"same"),o=ur(o,r.conv5),o=ht(o,[2,2],[1,1],"same"),o=ur(o,r.conv6),o=ur(o,r.conv7),dn(o,r.conv8,"valid",!1)},n.prototype.runMobilenet=function(t,r){var o=this.config.isFirstLayerConv2d?ol(dn(t,r.conv0,"valid",!1)):cr(t,r.conv0);return o=ht(o,[2,2],[2,2],"same"),o=cr(o,r.conv1),o=ht(o,[2,2],[2,2],"same"),o=cr(o,r.conv2),o=ht(o,[2,2],[2,2],"same"),o=cr(o,r.conv3),o=ht(o,[2,2],[2,2],"same"),o=cr(o,r.conv4),o=ht(o,[2,2],[2,2],"same"),o=cr(o,r.conv5),o=ht(o,[2,2],[1,1],"same"),o=r.conv6?cr(o,r.conv6):o,o=r.conv7?cr(o,r.conv7):o,dn(o,r.conv8,"valid",!1)},n.prototype.forwardInput=function(t,r){var o=this,i=this.params;if(!i)throw new Error("TinyYolov2 - load model before inference");return fe(function(){var a=t.toBatchTensor(r,!1).toFloat();return a=o.config.meanRgb?Ni(a,o.config.meanRgb):a,a=a.div(ae(256)),o.config.withSeparableConvs?o.runMobilenet(a,i):o.runTinyYolov2(a,i)})},n.prototype.forward=function(t,r){return we(this,void 0,void 0,function(){var o;return _e(this,function(i){switch(i.label){case 0:return o=this.forwardInput,[4,vt(t)];case 1:return[4,o.apply(this,[i.sent(),r])];case 2:return[2,i.sent()]}})})},n.prototype.detect=function(t,r){return r===void 0&&(r={}),we(this,void 0,void 0,function(){var o,i,a,s,u,c,l,f,h,d,p,v,m,g,y=this;return _e(this,function(x){switch(x.label){case 0:return o=new il(r),i=o.inputSize,a=o.scoreThreshold,[4,vt(t)];case 1:return s=x.sent(),[4,this.forwardInput(s,i)];case 2:return u=x.sent(),c=fe(function(){return st(u)[0].expandDims()}),l={width:s.getInputWidth(0),height:s.getInputHeight(0)},[4,this.extractBoxes(c,s.getReshapedInputDimensions(0),a)];case 3:return f=x.sent(),u.dispose(),c.dispose(),h=f.map(function(b){return b.box}),d=f.map(function(b){return b.score}),p=f.map(function(b){return b.classScore}),v=f.map(function(b){return y.config.classes[b.label]}),m=yi(h.map(function(b){return b.rescale(i)}),d,this.config.iouThreshold,!0),g=m.map(function(b){return new Fv(d[b],p[b],v[b],h[b],l)}),[2,g]}})})},n.prototype.getDefaultModelName=function(){return""},n.prototype.extractParamsFromWeigthMap=function(t){return mR(t,this.config)},n.prototype.extractParams=function(t){var r=this.config.filterSizes||n.DEFAULT_FILTER_SIZES,o=r?r.length:void 0;if(o!==7&&o!==8&&o!==9)throw new Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found "+o+" filterSizes in config");return pR(t,this.config,this.boxEncodingSize,r)},n.prototype.extractBoxes=function(t,r,o){return we(this,void 0,void 0,function(){var i,a,s,u,c,l,f,h,d,p,v,m,g,y,x,b,w,_,A,R,E,S,F,N,U,z,G,H,O,B=this;return _e(this,function($){switch($.label){case 0:return i=r.width,a=r.height,s=Math.max(i,a),u=s/i,c=s/a,l=t.shape[1],f=this.config.anchors.length,h=fe(function(){var J=t.reshape([l,l,f,B.boxEncodingSize]),oe=J.slice([0,0,0,0],[l,l,f,4]),le=J.slice([0,0,0,4],[l,l,f,1]),de=B.withClassScores?nr(J.slice([0,0,0,5],[l,l,f,B.config.classes.length]),3):ae(0);return[oe,le,de]}),d=h[0],p=h[1],v=h[2],m=[],[4,p.array()];case 1:return g=$.sent(),[4,d.array()];case 2:y=$.sent(),x=0,$.label=3;case 3:if(!(x<l))return[3,12];b=0,$.label=4;case 4:if(!(b<l))return[3,11];w=0,$.label=5;case 5:return w<f?(_=ru(g[x][b][w][0]),!o||_>o?(A=(b+ru(y[x][b][w][0]))/l*u,R=(x+ru(y[x][b][w][1]))/l*c,E=Math.exp(y[x][b][w][2])*this.config.anchors[w].x/l*u,S=Math.exp(y[x][b][w][3])*this.config.anchors[w].y/l*c,F=A-E/2,N=R-S/2,U={row:x,col:b,anchor:w},this.withClassScores?[4,this.extractPredictedClass(v,U)]:[3,7]):[3,9]):[3,10];case 6:return O=$.sent(),[3,8];case 7:O={classScore:1,label:0},$.label=8;case 8:z=O,G=z.classScore,H=z.label,m.push(Ct({box:new ls(F,N,F+E,N+S),score:_,classScore:_*G,label:H},U)),$.label=9;case 9:return w++,[3,5];case 10:return b++,[3,4];case 11:return x++,[3,3];case 12:return d.dispose(),p.dispose(),v.dispose(),[2,m]}})})},n.prototype.extractPredictedClass=function(t,r){return we(this,void 0,void 0,function(){var o,i,a,s;return _e(this,function(u){switch(u.label){case 0:return o=r.row,i=r.col,a=r.anchor,[4,t.array()];case 1:return s=u.sent(),[2,Array(this.config.classes.length).fill(0).map(function(c,l){return s[o][i][a][l]}).map(function(c,l){return{classScore:c,label:l}}).reduce(function(c,l){return c.classScore>l.classScore?c:l})]}})})},n.DEFAULT_FILTER_SIZES=[3,16,32,64,128,256,512,1024,1024],n})(or),gR=(function(e){De(n,e);function n(t){t===void 0&&(t=!0);var r=this,o=Object.assign({},{withSeparableConvs:t,iouThreshold:aR,classes:["face"]},t?{anchors:uR,meanRgb:cR}:{anchors:sR,withClassScores:!0});return r=e.call(this,o)||this,r}return Object.defineProperty(n.prototype,"withSeparableConvs",{get:function(){return this.config.withSeparableConvs},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),n.prototype.locateFaces=function(t,r){return we(this,void 0,void 0,function(){var o;return _e(this,function(i){switch(i.label){case 0:return[4,this.detect(t,r)];case 1:return o=i.sent(),[2,o.map(function(a){return new gn(a.score,a.relativeBox,{width:a.imageWidth,height:a.imageHeight})})]}})})},n.prototype.getDefaultModelName=function(){return this.withSeparableConvs?fR:lR},n.prototype.extractParamsFromWeigthMap=function(t){return e.prototype.extractParamsFromWeigthMap.call(this,t)},n})(cm),lm=(function(e){De(n,e);function n(){var t=e!==null&&e.apply(this,arguments)||this;return t._name="TinyFaceDetectorOptions",t}return n})(il),Fi=(function(){function e(){}return e.prototype.then=function(n){return we(this,void 0,void 0,function(){var t;return _e(this,function(r){switch(r.label){case 0:return t=n,[4,this.run()];case 1:return[2,t.apply(void 0,[r.sent()])]}})})},e.prototype.run=function(){return we(this,void 0,void 0,function(){return _e(this,function(n){throw new Error("ComposableTask - run is not implemented")})})},e})();function vs(e,n,t,r,o){return o===void 0&&(o=function(i){var a=i.alignedRect;return a}),we(this,void 0,void 0,function(){var i,a,s,u,c;return _e(this,function(l){switch(l.label){case 0:return i=e.map(function(f){return Qv(f)?o(f):f.detection}),s=r,s?[3,5]:n instanceof Xe?[4,Zc(n,i)]:[3,2];case 1:return u=l.sent(),[3,4];case 2:return[4,Qc(n,i)];case 3:u=l.sent(),l.label=4;case 4:s=u,l.label=5;case 5:return a=s,[4,t(a)];case 6:return c=l.sent(),a.forEach(function(f){return f instanceof Xe&&f.dispose()}),[2,c]}})})}function al(e,n,t,r,o){return we(this,void 0,void 0,function(){var i=this;return _e(this,function(a){return[2,vs([e],n,function(s){return we(i,void 0,void 0,function(){return _e(this,function(u){return[2,t(s[0])]})})},r,o)]})})}function yR(e){return fe(function(){return Xt(st(e,3).reverse(),3)})}var Ji=2,Ma=12;function bR(e,n){var t=hs(e,n),r=el(e,n);function o(c,l){var f=nt(e(c));return n.push({paramPath:l}),f}function i(c,l,f){f===void 0&&(f=!1);var h=t(c[0],c[1],3,l+"/conv1"),d=o(c[1],l+"/prelu1_alpha"),p=t(c[1],c[2],3,l+"/conv2"),v=o(c[2],l+"/prelu2_alpha"),m=t(c[2],c[3],f?2:3,l+"/conv3"),g=o(c[3],l+"/prelu3_alpha");return{conv1:h,prelu1_alpha:d,conv2:p,prelu2_alpha:v,conv3:m,prelu3_alpha:g}}function a(){var c=i([3,10,16,32],"pnet"),l=t(32,2,1,"pnet/conv4_1"),f=t(32,4,1,"pnet/conv4_2");return Ct(Ct({},c),{conv4_1:l,conv4_2:f})}function s(){var c=i([3,28,48,64],"rnet",!0),l=r(576,128,"rnet/fc1"),f=o(128,"rnet/prelu4_alpha"),h=r(128,2,"rnet/fc2_1"),d=r(128,4,"rnet/fc2_2");return Ct(Ct({},c),{fc1:l,prelu4_alpha:f,fc2_1:h,fc2_2:d})}function u(){var c=i([3,32,64,64],"onet"),l=t(64,128,2,"onet/conv4"),f=o(128,"onet/prelu4_alpha"),h=r(1152,256,"onet/fc1"),d=o(256,"onet/prelu5_alpha"),p=r(256,2,"onet/fc2_1"),v=r(256,4,"onet/fc2_2"),m=r(256,10,"onet/fc2_3");return Ct(Ct({},c),{conv4:l,prelu4_alpha:f,fc1:h,prelu5_alpha:d,fc2_1:p,fc2_2:v,fc2_3:m})}return{extractPNetParams:a,extractRNetParams:s,extractONetParams:u}}function xR(e){var n=ar(e),t=n.extractWeights,r=n.getRemainingWeights,o=[],i=bR(t,o),a=i.extractPNetParams,s=i.extractRNetParams,u=i.extractONetParams,c=a(),l=s(),f=u();if(r().length!==0)throw new Error("weights remaing after extract: "+r().length);return{params:{pnet:c,rnet:l,onet:f},paramMappings:o}}function wR(e,n){var t=Ar(e,n);function r(l){var f=t(l+"/weights",4,l+"/filters"),h=t(l+"/bias",1);return{filters:f,bias:h}}function o(l){var f=t(l+"/weights",2),h=t(l+"/bias",1);return{weights:f,bias:h}}function i(l){return t(l,1)}function a(l){var f=r(l+"/conv1"),h=i(l+"/prelu1_alpha"),d=r(l+"/conv2"),p=i(l+"/prelu2_alpha"),v=r(l+"/conv3"),m=i(l+"/prelu3_alpha");return{conv1:f,prelu1_alpha:h,conv2:d,prelu2_alpha:p,conv3:v,prelu3_alpha:m}}function s(){var l=a("pnet"),f=r("pnet/conv4_1"),h=r("pnet/conv4_2");return Ct(Ct({},l),{conv4_1:f,conv4_2:h})}function u(){var l=a("rnet"),f=o("rnet/fc1"),h=i("rnet/prelu4_alpha"),d=o("rnet/fc2_1"),p=o("rnet/fc2_2");return Ct(Ct({},l),{fc1:f,prelu4_alpha:h,fc2_1:d,fc2_2:p})}function c(){var l=a("onet"),f=r("onet/conv4"),h=i("onet/prelu4_alpha"),d=o("onet/fc1"),p=i("onet/prelu5_alpha"),v=o("onet/fc2_1"),m=o("onet/fc2_2"),g=o("onet/fc2_3");return Ct(Ct({},l),{conv4:f,prelu4_alpha:h,fc1:d,prelu5_alpha:p,fc2_1:v,fc2_2:m,fc2_3:g})}return{extractPNetParams:s,extractRNetParams:u,extractONetParams:c}}function _R(e){var n=[],t=wR(e,n),r=t.extractPNetParams,o=t.extractRNetParams,i=t.extractONetParams,a=r(),s=o(),u=i();return ir(e,n),{params:{pnet:a,rnet:s,onet:u},paramMappings:n}}function Qu(e,n){var t=n[0],r=n[1];return{height:Math.floor(t*e),width:Math.floor(r*e)}}function CR(e,n,t){for(var r=t[0],o=t[1],i=Ma/e,a=[],s=Math.min(r,o)*i,u=0;s>=12;)a.push(i*Math.pow(n,u)),s=s*n,u+=1;return a}var sl=(function(e){De(n,e);function n(t,r,o,i){return e.call(this,{left:t,top:r,right:o,bottom:i},!0)||this}return n})(Er);function fm(e){return fe(function(){return At(lt(e,ae(127.5)),ae(.0078125))})}function Co(e,n){return fe(function(){return Me(Ye(e),At(n,ka(Ye(ka(e)))))})}function ul(e,n,t){return t===void 0&&(t=!1),fe(function(){var r=dn(e,n.conv1,"valid");return r=Co(r,n.prelu1_alpha),r=ht(r,t?[2,2]:[3,3],[2,2],"same"),r=dn(r,n.conv2,"valid"),r=Co(r,n.prelu2_alpha),r=t?r:ht(r,[3,3],[2,2],"valid"),r=dn(r,n.conv3,"valid"),r=Co(r,n.prelu3_alpha),r})}function ER(e,n){return fe(function(){var t=ul(e,n,!0),r=dn(t,n.conv4_1,"valid"),o=Zt(as(r,3),3),i=nr(lt(r,o),3),a=dn(t,n.conv4_2,"valid");return{prob:i,regions:a}})}function RR(e,n){return fe(function(){var t=Qu(n,e.shape.slice(1)),r=t.height,o=t.width,i=Uc.resizeBilinear(e,[r,o]),a=fm(i);return Cr(a,[0,2,1,3])})}function SR(e,n,t,r){for(var o=[],i=e.arraySync(),a=0;a<e.shape[0];a++)for(var s=0;s<e.shape[1];s++)i[a][s]>=r&&o.push(new Ue(s,a));var u=o.map(function(c){var l=new ls(Math.round((c.y*Ji+1)/t),Math.round((c.x*Ji+1)/t),Math.round((c.y*Ji+Ma)/t),Math.round((c.x*Ji+Ma)/t)),f=i[c.y][c.x],h=n.arraySync(),d=new sl(h[c.y][c.x][0],h[c.y][c.x][1],h[c.y][c.x][2],h[c.y][c.x][3]);return{cell:l,score:f,region:d}});return u}function IR(e,n,t,r,o){o.stage1=[];var i=n.map(function(h){return fe(function(){var d={scale:h},p=RR(e,h),v=Date.now(),m=ER(p,r),g=m.prob,y=m.regions;d.pnet=Date.now()-v;var x=st(st(g,3)[1])[0],b=st(y)[0];return{scoresTensor:x,regionsTensor:b,scale:h,statsForScale:d}})}),a=i.map(function(h){var d=h.scoresTensor,p=h.regionsTensor,v=h.scale,m=h.statsForScale,g=SR(d,p,v,t);if(d.dispose(),p.dispose(),!g.length)return o.stage1.push(m),[];var y=Date.now(),x=yi(g.map(function(b){return b.cell}),g.map(function(b){return b.score}),.5);return m.nms=Date.now()-y,m.numBoxes=x.length,o.stage1.push(m),x.map(function(b){return g[b]})}),s=a.reduce(function(h,d){return h.concat(d)},[]),u=[],c=[];if(s.length>0){var l=Date.now(),f=yi(s.map(function(h){return h.cell}),s.map(function(h){return h.score}),.7);o.stage1_nms=Date.now()-l,c=f.map(function(h){return s[h].score}),u=f.map(function(h){return s[h]}).map(function(h){var d=h.cell,p=h.region;return new ls(d.left+p.left*d.width,d.top+p.top*d.height,d.right+p.right*d.width,d.bottom+p.bottom*d.height).toSquare().round()})}return{boxes:u,scores:c}}function hm(e,n,t){var r=t.width,o=t.height;return we(this,void 0,void 0,function(){var i,a,s,u=this;return _e(this,function(c){switch(c.label){case 0:return i=Kr(e),[4,Promise.all(n.map(function(l){return we(u,void 0,void 0,function(){var f,h,d,p,v,m,g,y;return _e(this,function(x){return f=l.padAtBorders(e.height,e.width),h=f.y,d=f.ey,p=f.x,v=f.ex,m=p-1,g=h-1,y=i.getImageData(m,g,v-m,d-g),[2,kt.isNodejs()?Jc(y):createImageBitmap(y)]})})}))];case 1:return a=c.sent(),s=[],a.forEach(function(l){var f=fs({width:r,height:o}),h=Kr(f);h.drawImage(l,0,0,r,o);for(var d=h.getImageData(0,0,r,o).data,p=[],v=0;v<d.length;v+=4)p.push(d[v+2]),p.push(d[v+1]),p.push(d[v]);s.push(p)}),[2,s.map(function(l){var f=fe(function(){var h=Cr(Pt(l,[1,r,o,3]),[0,2,1,3]).toFloat();return fm(h)});return f})]}})})}function AR(e,n){return fe(function(){var t=ul(e,n),r=ln(t,[t.shape[0],n.fc1.weights.shape[0]]),o=In(r,n.fc1),i=Co(o,n.prelu4_alpha),a=In(i,n.fc2_1),s=Zt(as(a,1),1),u=nr(lt(a,s),1),c=In(i,n.fc2_2),l=st(u,1)[1];return{scores:l,regions:c}})}function kR(e,n,t,r,o){return we(this,void 0,void 0,function(){var i,a,s,u,c,l,f,h,d,p,v,m,g,y;return _e(this,function(x){switch(x.label){case 0:return i=Date.now(),[4,hm(e,n,{width:24,height:24})];case 1:return a=x.sent(),o.stage2_extractImagePatches=Date.now()-i,i=Date.now(),s=a.map(function(b){var w=AR(b,r);return b.dispose(),w}),o.stage2_rnet=Date.now()-i,u=s.length>1?at(s.map(function(b){return b.scores})):s[0].scores,f=(l=Array).from,[4,u.data()];case 2:return c=f.apply(l,[x.sent()]),u.dispose(),h=c.map(function(b,w){return{score:b,idx:w}}).filter(function(b){return b.score>t}).map(function(b){var w=b.idx;return w}),d=h.map(function(b){return n[b]}),p=h.map(function(b){return c[b]}),v=[],m=[],d.length>0&&(i=Date.now(),g=yi(d,p,.7),o.stage2_nms=Date.now()-i,y=g.map(function(b){var w=s[h[b]].regions.arraySync();return new sl(w[0][0],w[0][1],w[0][2],w[0][3])}),m=g.map(function(b){return p[b]}),v=g.map(function(b,w){return d[b].calibrate(y[w])})),s.forEach(function(b){b.regions.dispose(),b.scores.dispose()}),[2,{boxes:v,scores:m}]}})})}function DR(e,n){return fe(function(){var t=ul(e,n);t=ht(t,[2,2],[2,2],"same"),t=dn(t,n.conv4,"valid"),t=Co(t,n.prelu4_alpha);var r=ln(t,[t.shape[0],n.fc1.weights.shape[0]]),o=In(r,n.fc1),i=Co(o,n.prelu5_alpha),a=In(i,n.fc2_1),s=Zt(as(a,1),1),u=nr(lt(a,s),1),c=In(i,n.fc2_2),l=In(i,n.fc2_3),f=st(u,1)[1];return{scores:f,regions:c,points:l}})}function TR(e,n,t,r,o){return we(this,void 0,void 0,function(){var i,a,s,u,c,l,f,h,d,p,v,m,g,y,x;return _e(this,function(b){switch(b.label){case 0:return i=Date.now(),[4,hm(e,n,{width:48,height:48})];case 1:return a=b.sent(),o.stage3_extractImagePatches=Date.now()-i,i=Date.now(),s=a.map(function(w){var _=DR(w,r);return w.dispose(),_}),o.stage3_onet=Date.now()-i,u=s.length>1?at(s.map(function(w){return w.scores})):s[0].scores,f=(l=Array).from,[4,u.data()];case 2:return c=f.apply(l,[b.sent()]),u.dispose(),h=c.map(function(w,_){return{score:w,idx:_}}).filter(function(w){return w.score>t}).map(function(w){var _=w.idx;return _}),d=h.map(function(w){var _=s[w].regions.arraySync();return new sl(_[0][0],_[0][1],_[0][2],_[0][3])}),p=h.map(function(w,_){return n[w].calibrate(d[_])}),v=h.map(function(w){return c[w]}),m=[],g=[],y=[],p.length>0&&(i=Date.now(),x=yi(p,v,.7,!1),o.stage3_nms=Date.now()-i,m=x.map(function(w){return p[w]}),g=x.map(function(w){return v[w]}),y=x.map(function(w,_){return Array(5).fill(0).map(function(A,R){var E=s[w].points.arraySync();return new Ue(E[0][R]*(m[_].width+1)+m[_].left,E[0][R+5]*(m[_].height+1)+m[_].top)})})),s.forEach(function(w){w.regions.dispose(),w.scores.dispose(),w.points.dispose()}),[2,{boxes:m,scores:g,points:y}]}})})}var NR=(function(e){De(n,e);function n(){return e.call(this,"Mtcnn")||this}return n.prototype.load=function(t){return we(this,void 0,void 0,function(){return _e(this,function(r){return console.warn("mtcnn is deprecated and will be removed soon"),[2,e.prototype.load.call(this,t)]})})},n.prototype.loadFromDisk=function(t){return we(this,void 0,void 0,function(){return _e(this,function(r){return console.warn("mtcnn is deprecated and will be removed soon"),[2,e.prototype.loadFromDisk.call(this,t)]})})},n.prototype.forwardInput=function(t,r){return r===void 0&&(r={}),we(this,void 0,void 0,function(){var o,i,a,s,u,c,l,f,h,d,p,v,m,g,y,x,b,w,_,A,R;return _e(this,function(E){switch(E.label){case 0:if(o=this.params,!o)throw new Error("Mtcnn - load model before inference");if(i=t.canvases[0],!i)throw new Error("Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.");return a={},s=Date.now(),u=fe(function(){return yR(Zt(Kc.fromPixels(i)).toFloat())}),c=function(S){return u.dispose(),a.total=Date.now()-s,S},l=u.shape.slice(1),f=l[0],h=l[1],d=new sm(r),p=d.minFaceSize,v=d.scaleFactor,m=d.maxNumScales,g=d.scoreThresholds,y=d.scaleSteps,x=(y||CR(p,v,[f,h])).filter(function(S){var F=Qu(S,[f,h]);return Math.min(F.width,F.height)>Ma}).slice(0,m),a.scales=x,a.pyramid=x.map(function(S){return Qu(S,[f,h])}),b=Date.now(),[4,IR(u,x,g[0],o.pnet,a)];case 1:return w=E.sent(),a.total_stage1=Date.now()-b,w.boxes.length?(a.stage2_numInputBoxes=w.boxes.length,b=Date.now(),[4,kR(i,w.boxes,g[1],o.rnet,a)]):[2,c({results:[],stats:a})];case 2:return _=E.sent(),a.total_stage2=Date.now()-b,_.boxes.length?(a.stage3_numInputBoxes=_.boxes.length,b=Date.now(),[4,TR(i,_.boxes,g[2],o.onet,a)]):[2,c({results:[],stats:a})];case 3:return A=E.sent(),a.total_stage3=Date.now()-b,R=A.boxes.map(function(S,F){return ds(xi({},new gn(A.scores[F],new Xc(S.left/h,S.top/f,S.width/h,S.height/f),{height:f,width:h})),new lE(A.points[F].map(function(N){return N.sub(new Ue(S.left,S.top)).div(new Ue(S.width,S.height))}),{width:S.width,height:S.height}))}),[2,c({results:R,stats:a})]}})})},n.prototype.forward=function(t,r){return r===void 0&&(r={}),we(this,void 0,void 0,function(){var o;return _e(this,function(i){switch(i.label){case 0:return o=this.forwardInput,[4,vt(t)];case 1:return[4,o.apply(this,[i.sent(),r])];case 2:return[2,i.sent().results]}})})},n.prototype.forwardWithStats=function(t,r){return r===void 0&&(r={}),we(this,void 0,void 0,function(){var o;return _e(this,function(i){switch(i.label){case 0:return o=this.forwardInput,[4,vt(t)];case 1:return[2,o.apply(this,[i.sent(),r])]}})})},n.prototype.getDefaultModelName=function(){return"mtcnn_model"},n.prototype.extractParamsFromWeigthMap=function(t){return _R(t)},n.prototype.extractParams=function(t){return xR(t)},n})(or),FR=.4,PR=[new Ue(1.603231,2.094468),new Ue(6.041143,7.080126),new Ue(2.882459,3.518061),new Ue(4.266906,5.178857),new Ue(9.041765,10.66308)],MR=[117.001,114.697,97.404],OR=(function(e){De(n,e);function n(){var t=this,r={withSeparableConvs:!0,iouThreshold:FR,classes:["face"],anchors:PR,meanRgb:MR,isFirstLayerConv2d:!0,filterSizes:[3,16,32,64,128,256,512]};return t=e.call(this,r)||this,t}return Object.defineProperty(n.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),n.prototype.locateFaces=function(t,r){return we(this,void 0,void 0,function(){var o;return _e(this,function(i){switch(i.label){case 0:return[4,this.detect(t,r)];case 1:return o=i.sent(),[2,o.map(function(a){return new gn(a.score,a.relativeBox,{width:a.imageWidth,height:a.imageHeight})})]}})})},n.prototype.getDefaultModelName=function(){return"tiny_face_detector_model"},n.prototype.extractParamsFromWeigthMap=function(t){return e.prototype.extractParamsFromWeigthMap.call(this,t)},n})(cm),Ot={ssdMobilenetv1:new um,tinyFaceDetector:new OR,tinyYolov2:new gR,mtcnn:new NR,faceLandmark68Net:new tm,faceLandmark68TinyNet:new LE,faceRecognitionNet:new jE,faceExpressionNet:new RE,ageGenderNet:new PE},dm=(function(e){De(n,e);function n(t,r,o){var i=e.call(this)||this;return i.parentTask=t,i.input=r,i.extractedFaces=o,i}return n})(Fi),cl=(function(e){De(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}return n.prototype.run=function(){return we(this,void 0,void 0,function(){var t,r,o=this;return _e(this,function(i){switch(i.label){case 0:return[4,this.parentTask];case 1:return t=i.sent(),[4,vs(t,this.input,function(a){return we(o,void 0,void 0,function(){return _e(this,function(s){switch(s.label){case 0:return[4,Promise.all(a.map(function(u){return Ot.faceExpressionNet.predictExpressions(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return r=i.sent(),[2,t.map(function(a,s){return Jv(a,r[s])})]}})})},n.prototype.withAgeAndGender=function(){return new dl(this,this.input)},n})(dm),ll=(function(e){De(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}return n.prototype.run=function(){return we(this,void 0,void 0,function(){var t,r;return _e(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return t=o.sent(),t?[4,al(t,this.input,function(i){return Ot.faceExpressionNet.predictExpressions(i)},this.extractedFaces)]:[2];case 2:return r=o.sent(),[2,Jv(t,r)]}})})},n.prototype.withAgeAndGender=function(){return new pl(this,this.input)},n})(dm),fl=(function(e){De(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}return n.prototype.withAgeAndGender=function(){return new vl(this,this.input)},n.prototype.withFaceDescriptors=function(){return new gl(this,this.input)},n})(cl),hl=(function(e){De(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}return n.prototype.withAgeAndGender=function(){return new ml(this,this.input)},n.prototype.withFaceDescriptor=function(){return new yl(this,this.input)},n})(ll),pm=(function(e){De(n,e);function n(t,r,o){var i=e.call(this)||this;return i.parentTask=t,i.input=r,i.extractedFaces=o,i}return n})(Fi),dl=(function(e){De(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}return n.prototype.run=function(){return we(this,void 0,void 0,function(){var t,r,o=this;return _e(this,function(i){switch(i.label){case 0:return[4,this.parentTask];case 1:return t=i.sent(),[4,vs(t,this.input,function(a){return we(o,void 0,void 0,function(){return _e(this,function(s){switch(s.label){case 0:return[4,Promise.all(a.map(function(u){return Ot.ageGenderNet.predictAgeAndGender(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return r=i.sent(),[2,t.map(function(a,s){var u=r[s],c=u.age,l=u.gender,f=u.genderProbability;return im(am(a,l,f),c)})]}})})},n.prototype.withFaceExpressions=function(){return new cl(this,this.input)},n})(pm),pl=(function(e){De(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}return n.prototype.run=function(){return we(this,void 0,void 0,function(){var t,r,o,i,a;return _e(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return t=s.sent(),t?[4,al(t,this.input,function(u){return Ot.ageGenderNet.predictAgeAndGender(u)},this.extractedFaces)]:[2];case 2:return r=s.sent(),o=r.age,i=r.gender,a=r.genderProbability,[2,im(am(t,i,a),o)]}})})},n.prototype.withFaceExpressions=function(){return new ll(this,this.input)},n})(pm),vl=(function(e){De(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}return n.prototype.withFaceExpressions=function(){return new fl(this,this.input)},n.prototype.withFaceDescriptors=function(){return new gl(this,this.input)},n})(dl),ml=(function(e){De(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}return n.prototype.withFaceExpressions=function(){return new hl(this,this.input)},n.prototype.withFaceDescriptor=function(){return new yl(this,this.input)},n})(pl),vm=(function(e){De(n,e);function n(t,r){var o=e.call(this)||this;return o.parentTask=t,o.input=r,o}return n})(Fi),gl=(function(e){De(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}return n.prototype.run=function(){return we(this,void 0,void 0,function(){var t,r;return _e(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return t=o.sent(),[4,vs(t,this.input,function(i){return Promise.all(i.map(function(a){return Ot.faceRecognitionNet.computeFaceDescriptor(a)}))},null,function(i){return i.landmarks.align(null,{useDlibAlignment:!0})})];case 2:return r=o.sent(),[2,r.map(function(i,a){return om(t[a],i)})]}})})},n.prototype.withFaceExpressions=function(){return new fl(this,this.input)},n.prototype.withAgeAndGender=function(){return new vl(this,this.input)},n})(vm),yl=(function(e){De(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}return n.prototype.run=function(){return we(this,void 0,void 0,function(){var t,r;return _e(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return t=o.sent(),t?[4,al(t,this.input,function(i){return Ot.faceRecognitionNet.computeFaceDescriptor(i)},null,function(i){return i.landmarks.align(null,{useDlibAlignment:!0})})]:[2];case 2:return r=o.sent(),[2,om(t,r)]}})})},n.prototype.withFaceExpressions=function(){return new hl(this,this.input)},n.prototype.withAgeAndGender=function(){return new ml(this,this.input)},n})(vm),mm=(function(e){De(n,e);function n(t,r,o){var i=e.call(this)||this;return i.parentTask=t,i.input=r,i.useTinyLandmarkNet=o,i}return Object.defineProperty(n.prototype,"landmarkNet",{get:function(){return this.useTinyLandmarkNet?Ot.faceLandmark68TinyNet:Ot.faceLandmark68Net},enumerable:!0,configurable:!0}),n})(Fi),BR=(function(e){De(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}return n.prototype.run=function(){return we(this,void 0,void 0,function(){var t,r,o,i,a,s=this;return _e(this,function(u){switch(u.label){case 0:return[4,this.parentTask];case 1:return t=u.sent(),r=t.map(function(c){return c.detection}),this.input instanceof Xe?[4,Zc(this.input,r)]:[3,3];case 2:return i=u.sent(),[3,5];case 3:return[4,Qc(this.input,r)];case 4:i=u.sent(),u.label=5;case 5:return o=i,[4,Promise.all(o.map(function(c){return s.landmarkNet.detectLandmarks(c)}))];case 6:return a=u.sent(),o.forEach(function(c){return c instanceof Xe&&c.dispose()}),[2,t.map(function(c,l){return ds(c,a[l])})]}})})},n.prototype.withFaceExpressions=function(){return new fl(this,this.input)},n.prototype.withAgeAndGender=function(){return new vl(this,this.input)},n.prototype.withFaceDescriptors=function(){return new gl(this,this.input)},n})(mm),LR=(function(e){De(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}return n.prototype.run=function(){return we(this,void 0,void 0,function(){var t,r,o,i,a;return _e(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return t=s.sent(),t?(r=t.detection,this.input instanceof Xe?[4,Zc(this.input,[r])]:[3,3]):[2];case 2:return i=s.sent(),[3,5];case 3:return[4,Qc(this.input,[r])];case 4:i=s.sent(),s.label=5;case 5:return o=i,[4,this.landmarkNet.detectLandmarks(o[0])];case 6:return a=s.sent(),o.forEach(function(u){return u instanceof Xe&&u.dispose()}),[2,ds(t,a)]}})})},n.prototype.withFaceExpressions=function(){return new hl(this,this.input)},n.prototype.withAgeAndGender=function(){return new ml(this,this.input)},n.prototype.withFaceDescriptor=function(){return new yl(this,this.input)},n})(mm),gm=(function(e){De(n,e);function n(t,r){r===void 0&&(r=new ps);var o=e.call(this)||this;return o.input=t,o.options=r,o}return n})(Fi),WR=(function(e){De(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}return n.prototype.run=function(){return we(this,void 0,void 0,function(){var t,r,o,i;return _e(this,function(a){switch(a.label){case 0:return t=this,r=t.input,o=t.options,o instanceof sm?[4,Ot.mtcnn.forward(r,o)]:[3,2];case 1:return[2,a.sent().map(function(s){return s.detection})];case 2:if(i=o instanceof lm?function(s){return Ot.tinyFaceDetector.locateFaces(s,o)}:o instanceof ps?function(s){return Ot.ssdMobilenetv1.locateFaces(s,o)}:o instanceof il?function(s){return Ot.tinyYolov2.locateFaces(s,o)}:null,!i)throw new Error("detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options");return[2,i(r)]}})})},n.prototype.runAndExtendWithFaceDetections=function(){var t=this;return new Promise(function(r){return we(t,void 0,void 0,function(){var o;return _e(this,function(i){switch(i.label){case 0:return[4,this.run()];case 1:return o=i.sent(),[2,r(o.map(function(a){return xi({},a)}))]}})})})},n.prototype.withFaceLandmarks=function(t){return t===void 0&&(t=!1),new BR(this.runAndExtendWithFaceDetections(),this.input,t)},n.prototype.withFaceExpressions=function(){return new cl(this.runAndExtendWithFaceDetections(),this.input)},n.prototype.withAgeAndGender=function(){return new dl(this.runAndExtendWithFaceDetections(),this.input)},n})(gm),VR=(function(e){De(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}return n.prototype.run=function(){return we(this,void 0,void 0,function(){var t,r;return _e(this,function(o){switch(o.label){case 0:return[4,new WR(this.input,this.options)];case 1:return t=o.sent(),r=t[0],t.forEach(function(i){i.score>r.score&&(r=i)}),[2,r]}})})},n.prototype.runAndExtendWithFaceDetection=function(){var t=this;return new Promise(function(r){return we(t,void 0,void 0,function(){var o;return _e(this,function(i){switch(i.label){case 0:return[4,this.run()];case 1:return o=i.sent(),[2,r(o?xi({},o):void 0)]}})})})},n.prototype.withFaceLandmarks=function(t){return t===void 0&&(t=!1),new LR(this.runAndExtendWithFaceDetection(),this.input,t)},n.prototype.withFaceExpressions=function(){return new ll(this.runAndExtendWithFaceDetection(),this.input)},n.prototype.withAgeAndGender=function(){return new pl(this.runAndExtendWithFaceDetection(),this.input)},n})(gm);function UR(e,n){return n===void 0&&(n=new ps),new VR(e,n)}function zR(e,n){if(e.length!==n.length)throw new Error("euclideanDistance: arr1.length !== arr2.length");var t=Array.from(e),r=Array.from(n);return Math.sqrt(t.map(function(o,i){return o-r[i]}).reduce(function(o,i){return o+Math.pow(i,2)},0))}(function(){function e(n,t){t===void 0&&(t=.6),this._distanceThreshold=t;var r=Array.isArray(n)?n:[n];if(!r.length)throw new Error("FaceRecognizer.constructor - expected atleast one input");var o=1,i=function(){return"person "+o++};this._labeledDescriptors=r.map(function(a){if(a instanceof Ki)return a;if(a instanceof Float32Array)return new Ki(i(),[a]);if(a.descriptor&&a.descriptor instanceof Float32Array)return new Ki(i(),[a.descriptor]);throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>")})}return Object.defineProperty(e.prototype,"labeledDescriptors",{get:function(){return this._labeledDescriptors},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"distanceThreshold",{get:function(){return this._distanceThreshold},enumerable:!0,configurable:!0}),e.prototype.computeMeanDistance=function(n,t){return t.map(function(r){return zR(r,n)}).reduce(function(r,o){return r+o},0)/(t.length||1)},e.prototype.matchDescriptor=function(n){var t=this;return this.labeledDescriptors.map(function(r){var o=r.descriptors,i=r.label;return new dh(i,t.computeMeanDistance(n,o))}).reduce(function(r,o){return r.distance<o.distance?r:o})},e.prototype.findBestMatch=function(n){var t=this.matchDescriptor(n);return t.distance<this.distanceThreshold?t:new dh("unknown",t.distance)},e.prototype.toJSON=function(){return{distanceThreshold:this.distanceThreshold,labeledDescriptors:this.labeledDescriptors.map(function(n){return n.toJSON()})}},e.fromJSON=function(n){var t=n.labeledDescriptors.map(function(r){return Ki.fromJSON(r)});return new e(t,n.distanceThreshold)},e})();function ym(e,n){var t=new Hr(n.width,n.height),r=t.width,o=t.height;if(r<=0||o<=0)throw new Error("resizeResults - invalid dimensions: "+JSON.stringify({width:r,height:o}));if(Array.isArray(e))return e.map(function(s){return ym(s,{width:r,height:o})});if(Qv(e)){var i=e.detection.forSize(r,o),a=e.unshiftedLandmarks.forSize(i.box.width,i.box.height);return ds(xi(e,i),a)}return Pv(e)?xi(e,e.detection.forSize(r,o)):e instanceof bi||e instanceof gn?e.forSize(r,o):e}const Eo=St(null),Vr=St(null),Oa=St(!1),Zu=St(!1),Xn=St(null),Yn=St(null),au=St({});let oi=null,Ro=!1,ia=!1,su=!1;async function GR(){try{if(Oa.value||su)return;su=!0,console.log("🔄 Carregando modelos...");const e="https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model/";await Ot.tinyFaceDetector.loadFromUri(e),await Ot.faceLandmark68Net.loadFromUri(e),Oa.value=!0,console.log("✅ MODELOS CARREGADOS!")}catch(e){console.error("❌ ERRO AO CARREGAR MODELOS:",e)}finally{su=!1}}async function bm(e="user"){try{console.log("🎥 Iniciando câmara...",e),Xn.value&&(Xn.value.getTracks().forEach(n=>n.stop()),Xn.value=null),Xn.value=await navigator.mediaDevices.getUserMedia({video:{facingMode:e,width:{ideal:1280},height:{ideal:720}},audio:!1}),Eo.value&&(Eo.value.srcObject=Xn.value,await Eo.value.play(),console.log("✅ CÂMARA OK!"))}catch(n){console.error("❌ ERRO CÂMARA:",n)}}async function HR(e){try{if(!e){Yn.value=null;return}if(au.value[e]){Yn.value=au.value[e];return}const n=new Image;n.crossOrigin="anonymous",await new Promise((t,r)=>{n.onload=()=>{n.complete&&n.naturalWidth>0?(au.value[e]=n,Yn.value=n,t()):r(new Error("Imagem inválida"))},n.onerror=r,n.src=e}),console.log("✅ Máscara carregada!",Yn.value.naturalWidth,"x",Yn.value.naturalHeight)}catch(n){console.error("❌ Erro ao definir máscara:",n)}}function jR(e,n){if(!Yn.value||!Yn.value.complete)return;const t=n.getJawOutline(),r=n.getNose(),o=[...t,...r],i=o.map(g=>g.x),a=o.map(g=>g.y),s=Math.min(...i),u=Math.max(...i),c=Math.min(...a),l=Math.max(...t.map(g=>g.y)),f=u-s,h=l-c,d=f*1.5,p=h*1.5,v=s+f/2-d/2,m=c-p*.15;e.fillStyle="rgba(255,255,0,0.35)",e.fillRect(v,m,d,p),e.drawImage(Yn.value,v,m,d,p)}async function ec(){if(Ro){if(ia){oi=requestAnimationFrame(ec);return}ia=!0;try{const e=Eo.value,n=Vr.value;if(!e||!n||!Oa.value||e.videoWidth===0||e.videoHeight===0)return;const t=n.getBoundingClientRect(),r=Math.round(t.width),o=Math.round(t.height);(n.width!==r||n.height!==o)&&(n.width=r,n.height=o,console.log("📐 Canvas redimensionado:",n.width,"x",n.height));const i=n.getContext("2d"),a=await UR(e,new lm({inputSize:320,scoreThreshold:.5})).withFaceLandmarks();if(!Ro)return;if(i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,n.width,n.height),i.fillStyle="rgba(0,255,255,0.9)",i.fillRect(20,20,80,80),a){Zu.value=!0,i.save(),i.translate(n.width,0),i.scale(-1,1),i.fillStyle="rgba(255,255,0,0.6)",i.fillRect(20,120,220,140);const s={width:n.width,height:n.height},u=ym(a,s);jR(i,u.landmarks),i.restore()}else Zu.value=!1}catch(e){console.error("❌ ERRO DETECÇÃO:",e)}finally{ia=!1,Ro&&(oi=requestAnimationFrame(ec))}}}function qR(){if(Ro){console.log("⚠️ tracking já está ativo");return}Ro=!0,ec()}function xm(){if(Ro=!1,ia=!1,oi&&cancelAnimationFrame(oi),oi=null,Vr.value){const e=Vr.value.getContext("2d");e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,Vr.value.width,Vr.value.height)}}function KR(){const e=Eo.value,n=Vr.value;if(!e||!n)return null;const t=document.createElement("canvas"),r=t.getContext("2d"),o=n.width,i=n.height;t.width=o,t.height=i;const a=e.videoWidth,s=e.videoHeight,u=Math.max(o/a,i/s),c=a*u,l=s*u,f=(o-c)/2,h=(i-l)/2;return r.save(),r.translate(o,0),r.scale(-1,1),r.drawImage(e,f,h,c,l),r.restore(),r.drawImage(n,0,0),t.toDataURL("image/png")}async function $R(){const n=(Xn.value?.getVideoTracks?.()[0]?.getSettings?.().facingMode||"user")==="user"?"environment":"user";await bm(n)}function XR(){xm(),Xn.value&&(Xn.value.getTracks().forEach(e=>e.stop()),Xn.value=null)}function wm(){return fc(()=>{}),{videoRef:Eo,canvasRef:Vr,isModelLoaded:Oa,isFaceDetected:Zu,currentMaskImage:Yn,loadModels:GR,startCamera:bm,startTracking:qR,stopTracking:xm,captureImage:KR,switchCamera:$R,stopCamera:XR,setMask:HR}}const YR={class:"absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-6 bg-gradient-to-b from-black/80 to-transparent"},JR={class:"flex items-center gap-3"},QR={class:"text-xs font-black tracking-widest uppercase italic"},ZR={class:"flex gap-4"},eS={__name:"AppBar",emits:["openEmail","switchCamera"],setup(e,{emit:n}){const t=Ci(),{isTracking:r}=Ya(t);return(o,i)=>(jt(),cn("div",YR,[me("div",JR,[me("div",{class:Ur(["size-3 rounded-full bg-primary",dt(r)&&"animate-pulse"])},null,2),me("span",QR,So(dt(r)?"Tracking Active":"No Target"),1)]),i[4]||(i[4]=me("h1",{class:"text-xl font-black italic tracking-tighter uppercase leading-none"},[pc("Mask "),me("span",{class:"text-primary italic"},"Lab")],-1)),me("div",ZR,[me("button",{onClick:i[0]||(i[0]=a=>n("openEmail")),class:"flex items-center justify-center size-10 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"},[...i[2]||(i[2]=[me("span",{class:"material-symbols-outlined text-white"},"mail",-1)])]),me("button",{onClick:i[1]||(i[1]=a=>n("switchCamera")),class:"flex items-center justify-center size-10 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"},[...i[3]||(i[3]=[me("span",{class:"material-symbols-outlined text-white"},"flip_camera_ios",-1)])])])]))}},tS={class:"relative flex-1 bg-zinc-900 overflow-hidden"},nS={class:"absolute inset-0 flex items-center justify-center pointer-events-none z-20"},rS={key:0,class:"relative size-72 border-2 border-white/40 rounded-3xl"},oS={class:"absolute bottom-4 left-6 pointer-events-none z-20"},iS={class:"text-4xl font-black italic uppercase leading-none text-white/90"},aS={class:"text-2xl font-black italic uppercase leading-none text-primary"},sS={__name:"ARCamera",setup(e){const n=Ci(),{selectedMask:t}=Ya(n),{videoRef:r,canvasRef:o,isFaceDetected:i,loadModels:a,startCamera:s,startTracking:u,setMask:c}=wm();async function l(){if(await a(),await s("user"),t.value?.maskImage){const f=`/Mask-Marval-App/${t.value.maskImage}`;console.log("Setting mask:",f),await c(f)}u(),n.setTracking(!0)}return cd(()=>{l()}),mo(t,async f=>{f?.maskImage&&await c(f.maskImage)},{deep:!0}),(f,h)=>(jt(),cn("div",tS,[me("video",{ref_key:"videoElement",ref:r,class:"absolute inset-0 w-full h-full object-cover z-0 -scale-x-100",autoplay:"",playsinline:"",muted:""},null,512),me("canvas",{ref_key:"canvasElement",ref:o,class:"absolute inset-0 w-full h-full z-10 pointer-events-none"},null,512),me("div",nS,[dt(i)?(jt(),cn("div",rS,[...h[0]||(h[0]=[me("div",{class:"absolute -top-1 -left-1 size-8 border-t-4 border-l-4 border-primary rounded-tl-xl"},null,-1),me("div",{class:"absolute -top-1 -right-1 size-8 border-t-4 border-r-4 border-primary rounded-tr-xl"},null,-1),me("div",{class:"absolute -bottom-1 -left-1 size-8 border-b-4 border-l-4 border-primary rounded-bl-xl"},null,-1),me("div",{class:"absolute -bottom-1 -right-1 size-8 border-b-4 border-r-4 border-primary rounded-br-xl"},null,-1)])])):kd("",!0)]),me("div",oS,[me("p",iS,So(dt(i)?"Target":"Searching"),1),me("p",aS,So(dt(i)?"Acquired":"..."),1)])]))}},uS={class:"relative h-[40%] w-full bg-white dark:bg-zinc-950 flex flex-col border-t-4 border-white overflow-hidden"},cS={class:"flex-1 overflow-x-auto flex items-center px-6 gap-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"},lS=["onClick"],fS={class:"relative h-32 flex items-center justify-center pb-6"},hS=["src"],dS={__name:"MaskSelector",emits:["capture","openGallery","openEffects"],setup(e,{emit:n}){const t=Ci(),{masks:r,capturedPhoto:o}=Ya(t);function i(a){t.selectMask(a)}return(a,s)=>(jt(),cn("div",uS,[s[5]||(s[5]=me("div",{class:"absolute inset-0 halftone-pattern pointer-events-none opacity-10"},null,-1)),s[6]||(s[6]=me("div",{class:"px-6 pt-6 pb-2"},[me("h2",{class:"text-sm font-black uppercase tracking-widest text-zinc-500"},"Select Identity")],-1)),me("div",cS,[(jt(!0),cn(sn,null,jg(dt(r),u=>(jt(),cn("button",{key:u.id,onClick:c=>i(u.id),class:"group flex flex-col items-center gap-3 shrink-0"},[me("div",{class:Ur(["size-24 rounded-2xl bg-zinc-900 p-2 overflow-hidden transition-all",u.active?"border-4 border-white shadow-[4px_4px_0px_0px_#ffffff]":"border-4 border-zinc-800 hover:border-white"])},[me("div",{class:Ur(["w-full h-full bg-cover bg-center rounded-lg transition-all",!u.active&&"grayscale group-hover:grayscale-0"]),style:Ua({backgroundImage:`url(${u.thumbnail})`})},null,6)],2),me("span",{class:Ur(["text-xs font-black uppercase italic transition-colors",u.active?"text-white":"text-zinc-500 hover:text-white"])},So(u.name),3)],8,lS))),128))]),me("div",fS,[me("button",{onClick:s[0]||(s[0]=u=>n("capture")),class:"group relative flex items-center justify-center size-20 rounded-full bg-white transition-transform active:scale-90"},[...s[3]||(s[3]=[me("div",{class:"absolute inset-0 rounded-full border-4 border-white scale-110 group-active:scale-100 transition-transform"},null,-1),me("div",{class:"size-16 rounded-full border-4 border-black bg-white flex items-center justify-center"},[me("div",{class:"size-12 rounded-full bg-primary/20 flex items-center justify-center"},[me("span",{class:"material-symbols-outlined text-black font-black text-3xl"},"photo_camera")])],-1)])]),dt(o)?(jt(),cn("div",{key:0,onClick:s[1]||(s[1]=u=>n("openGallery")),class:"absolute left-8 size-12 rounded-lg border-2 border-white overflow-hidden comic-shadow rotate-[-6deg] cursor-pointer"},[me("img",{src:dt(o),alt:"Recent capture",class:"w-full h-full object-cover"},null,8,hS)])):kd("",!0),me("button",{onClick:s[2]||(s[2]=u=>n("openEffects")),class:"absolute right-8 flex flex-col items-center justify-center text-white/60 hover:text-white"},[...s[4]||(s[4]=[me("span",{class:"material-symbols-outlined text-3xl"},"filter_vintage",-1),me("span",{class:"text-[8px] font-black uppercase mt-1"},"Effects",-1)])])])]))}},pS={class:"relative flex h-screen w-full flex-col overflow-hidden"},vS={__name:"CameraView",setup(e){const n=b0();Ci();const{captureImage:t,switchCamera:r}=wm();function o(){requestAnimationFrame(()=>{const l=t();l&&i(l)})}function i(l){const f=document.createElement("a");f.href=l,f.download=`mask-${Date.now()}.png`,document.body.appendChild(f),f.click(),document.body.removeChild(f)}function a(){r()}function s(){n.push("/share")}function u(){console.log("Open gallery")}function c(){console.log("Open effects")}return(l,f)=>(jt(),cn("div",pS,[It(eS,{onSwitchCamera:a,onOpenEmail:s}),It(sS),It(dS,{onCapture:o,onOpenGallery:u,onOpenEffects:c}),f[0]||(f[0]=me("div",{class:"bg-zinc-950 flex justify-center pb-2 pt-1"},[me("div",{class:"h-1.5 w-36 rounded-full bg-white/20"})],-1))]))}},mS={class:"relative flex h-screen w-full flex-col overflow-hidden bg-black"},gS={class:"absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-6 bg-gradient-to-b from-black to-transparent"},yS={class:"flex-1 flex items-center justify-center p-6"},bS={class:"relative max-w-lg w-full aspect-[3/4] rounded-2xl overflow-hidden comic-border comic-shadow"},xS=["src"],wS={key:1,class:"w-full h-full bg-zinc-900 flex items-center justify-center"},_S={class:"relative bg-zinc-950 p-6 space-y-4"},CS={class:"relative"},ES=["disabled"],RS={__name:"ShareView",setup(e){const n=Ci(),{capturedPhoto:t}=Ya(n),r=St(""),o=St(!1);async function i(){if(!(!r.value||!t.value)){o.value=!0;try{console.log("Sending to:",r.value),await new Promise(u=>setTimeout(u,2e3)),alert("Email sent successfully! 🦸‍♂️")}catch(u){console.error("Error sending email:",u),alert("Failed to send email")}finally{o.value=!1}}}function a(){if(!t.value)return;const u=document.createElement("a");u.href=t.value,u.download=`marvel-hero-${Date.now()}.png`,u.click()}async function s(){if(t.value)try{const u=await(await fetch(t.value)).blob(),c=new File([u],"marvel-hero.png",{type:"image/png"});navigator.share?await navigator.share({files:[c],title:"My Marvel Hero",text:"Check out my superhero mask!"}):alert("Sharing not supported on this device")}catch(u){console.error("Error sharing:",u)}}return(u,c)=>(jt(),cn("div",mS,[me("div",gS,[me("button",{onClick:c[0]||(c[0]=l=>u.$router.back()),class:"flex items-center justify-center size-10 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"},[...c[2]||(c[2]=[me("span",{class:"material-symbols-outlined text-white"},"arrow_back",-1)])]),c[3]||(c[3]=me("h1",{class:"text-xl font-black italic tracking-tighter uppercase leading-none"},[pc("Your "),me("span",{class:"text-primary italic"},"Hero")],-1)),c[4]||(c[4]=me("div",{class:"size-10"},null,-1))]),me("div",yS,[me("div",bS,[dt(t)?(jt(),cn("img",{key:0,src:dt(t),alt:"Captured hero photo",class:"w-full h-full object-cover"},null,8,xS)):(jt(),cn("div",wS,[...c[5]||(c[5]=[me("span",{class:"text-white/50"},"No photo captured",-1)])])),c[6]||(c[6]=me("div",{class:"absolute top-4 right-4 px-4 py-2 bg-primary rounded-lg"},[me("span",{class:"text-white font-black text-sm uppercase"},"Marvel")],-1))])]),me("div",_S,[c[8]||(c[8]=me("div",{class:"halftone-pattern absolute inset-0 opacity-10 pointer-events-none"},null,-1)),me("div",CS,[c[7]||(c[7]=me("label",{class:"block text-sm font-black uppercase tracking-widest text-zinc-500 mb-2"}," Receive Your Hero Photo ",-1)),Eg(me("input",{"onUpdate:modelValue":c[1]||(c[1]=l=>r.value=l),type:"email",placeholder:"hero@marvel.com",class:"w-full px-4 py-4 bg-zinc-900 border-2 border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:border-primary focus:outline-none transition-colors"},null,512),[[e0,r.value]])]),me("button",{onClick:i,disabled:!r.value||o.value,class:"w-full py-4 bg-primary hover:bg-primary/90 disabled:bg-zinc-800 disabled:text-zinc-600 text-white font-black uppercase rounded-lg transition-all active:scale-95 shadow-[4px_4px_0px_0px_#000000] active:shadow-none"},So(o.value?"Sending...":"Send to Email"),9,ES),me("div",{class:"flex gap-4"},[me("button",{onClick:a,class:"flex-1 py-3 bg-white/10 hover:bg-white/20 text-white font-bold uppercase rounded-lg transition-colors"},"Download"),me("button",{onClick:s,class:"flex-1 py-3 bg-white/10 hover:bg-white/20 text-white font-bold uppercase rounded-lg transition-colors"},"Share")])]),c[9]||(c[9]=me("div",{class:"bg-zinc-950 flex justify-center pb-2 pt-1"},[me("div",{class:"h-1.5 w-36 rounded-full bg-white/20"})],-1))]))}},SS=xb({history:Z0("/Mask-Marval-App/"),routes:[{path:"/",name:"camera",component:vS},{path:"/share",name:"share",component:RS}]}),bl=i0(wb);bl.use(u0());bl.use(SS);bl.mount("#app")});export default IS();
