"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[123],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||c;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<c;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5019:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const c={},i="Services",s={unversionedId:"documentation/concepts/services",id:"documentation/concepts/services",title:"Services",description:"What an Otterize service is.",source:"@site/docs/documentation/5-concepts/3-services.md",sourceDirName:"documentation/5-concepts",slug:"/documentation/concepts/services",permalink:"/documentation/concepts/services",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/documentation/5-concepts/3-services.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"docSidebar",previous:{title:"Intents-based Access Control",permalink:"/documentation/concepts/intents-based-access-control"},next:{title:"Introduction",permalink:"/documentation/intents-operator/intro"}},a={},u=[{value:"Kubernetes",id:"kubernetes",level:2},{value:"Additional resources",id:"additional-resources",level:3}],l={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"services"},"Services"),(0,o.kt)("p",null,"What an Otterize service is."),(0,o.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,o.kt)("p",null,"How we resolve services in Kubernetes."),(0,o.kt)("h3",{id:"additional-resources"},"Additional resources"),(0,o.kt)("p",null,"References to Network Mapper, SPIRE integration operator, and Intents operator."))}p.isMDXComponent=!0}}]);