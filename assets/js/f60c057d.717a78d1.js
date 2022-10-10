"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6779:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:8,title:"Otterize OSS"},o=void 0,l={unversionedId:"otterize-oss/README",id:"otterize-oss/README",title:"Otterize OSS",description:"Otterize OSS implements intent-based access control (IBAC) in a single Kubernetes cluster.",source:"@site/docs/otterize-oss/README.mdx",sourceDirName:"otterize-oss",slug:"/otterize-oss/",permalink:"/otterize-oss/",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/otterize-oss/README.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Otterize OSS"},sidebar:"docSidebar",previous:{title:"Intents and intents files",permalink:"/intents-and-intents-files/"},next:{title:"Kubernetes mTLS with Otterize",permalink:"/k8s-mtls/"}},s={},p=[],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Otterize OSS implements intent-based access control (IBAC) in a single Kubernetes cluster.\nIt is a fully standalone, free and open-source software implementation of IBAC built for cloud-native\nteams that use Kubernetes at the core of their infrastructure."),(0,a.kt)("p",null,"It consists of several components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"/components/intents-operator"},"Otterize intents operator")," that translates ClientIntents resources to\naccess controls using plugins, which currently include:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A network policies manager to control pod-to-pod access."),(0,a.kt)("li",{parentName:"ul"},"An ACL configurator for in-Kubernetes Kafka clusters to control client access."))),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"/components/spire-integration-operator"},"Otterize SPIRE integration operator")," that integrates with SPIFFE/SPIRE\nto handle pod identities and manage certificates."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"/components/network-mapper"},"Otterize network mapper")," that sniffs pod-to-pod traffic and builds a network map,\nwhich is useful on its own and may also be exported as client intents files for bootstrapping IBAC.")),(0,a.kt)("p",null,"The Otterize OSS code base and issues are managed ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/otterize"},"on GitHub"),".and"),(0,a.kt)("p",null,"To get started with Otterize OSS, see the ",(0,a.kt)("a",{parentName:"p",href:"/tutorials"},"quick tutorials")," or the ",(0,a.kt)("a",{parentName:"p",href:"/guides"},"more in-depth guides"),"."),(0,a.kt)("p",null,"The near-term roadmap for Otterize OSS currently includes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Otterize SDK"),': an SDK for fine-grained inline ("middleware") access control.',(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Capabilities:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A server-side library to authenticate clients and only authorize calls that have been declared as intents."),(0,a.kt)("li",{parentName:"ul"},"A client-side library to easily get the credentials needed to present to the server-side library when making calls."))),(0,a.kt)("li",{parentName:"ul"},"Supported protocols:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"HTTP"))),(0,a.kt)("li",{parentName:"ul"},"Supported languages:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Python"),(0,a.kt)("li",{parentName:"ul"},"Go"),(0,a.kt)("li",{parentName:"ul"},"JavaScript")))))))}u.isMDXComponent=!0}}]);