"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[568],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>c});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=d(n),c=a,k=u["".concat(p,".").concat(c)]||u[c]||s[c]||i;return n?r.createElement(k,l(l({ref:e},m),{},{components:n})):r.createElement(k,l({ref:e},m))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8701:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={id:"behavior",title:"Behavior"},l=void 0,o={unversionedId:"documentation/components/behavior",id:"documentation/components/behavior",title:"Behavior",description:"X509 credentials are generated on pod startup if it has the otterize/credentials-secret-name  annotation. The credentials are stored as a K8s secret names as the value for the annotation.",source:"@site/docs/documentation/5-components/3-behavior.md",sourceDirName:"documentation/5-components",slug:"/documentation/components/behavior",permalink:"/documentation/components/behavior",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/documentation/5-components/3-behavior.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"behavior",title:"Behavior"},sidebar:"docSidebar",previous:{title:"Credential operator",permalink:"/documentation/components/credential-operator"},next:{title:"Debugging",permalink:"/documentation/components/debugging"}},p={},d=[{value:"Credential flavors:",id:"credential-flavors",level:2},{value:"Supported annotations",id:"supported-annotations",level:2}],m={toc:d};function s(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"X509 credentials are generated on ",(0,a.kt)("inlineCode",{parentName:"p"},"pod startup")," if it has the ",(0,a.kt)("inlineCode",{parentName:"p"},"otterize/credentials-secret-name"),"  annotation. The credentials are stored as a K8s secret names as the value for the annotation."),(0,a.kt)("h2",{id:"credential-flavors"},"Credential flavors:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Trust bundle, SVID, private key (for most clients)"),(0,a.kt)("li",{parentName:"ul"},"Trust store, key store, password (for Kafka)")),(0,a.kt)("h2",{id:"supported-annotations"},"Supported annotations"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Annotation"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"required"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"otterize/credentials-secret-name"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#string"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"empty"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"The K8s secret name to store credentials in")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"spire-integration.otterize.com/dns-names"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#string"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"empty"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Extra DNS names to add to x509 certificates in the ",(0,a.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Subject_Alternative_Name"},"SAN")," field.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"spire-integration.otterize.com/cert-ttl"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#int"},"int")),(0,a.kt)("td",{parentName:"tr",align:null},"999999"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Certificate expiry time relative to generation time in seconds.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"spire-integration.otterize.com/cert-type"),(0,a.kt)("td",{parentName:"tr",align:null},"one of ","[jks,pem]"),(0,a.kt)("td",{parentName:"tr",align:null},"jks"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"otterize/bundle-file-name"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#string"},"string")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"otterize/svid-file-name"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#string"},"string")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"otterize/key-file-name"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#string"},"string")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"spire-integration.otterize.com/truststore-file-name"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#string"},"string")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"if spire-integration.otterize.com/cert-type == jks"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"spire-integration.otterize.com/keystore-file-name"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#string"},"string")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"if spire-integration.otterize.com/cert-type == jks"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"spire-integration.otterize.com/jks-password"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#string"},"string")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"if spire-integration.otterize.com/cert-type == jks"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"not sure if values for the ",(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"jks")," flow are actually required")))}s.isMDXComponent=!0}}]);