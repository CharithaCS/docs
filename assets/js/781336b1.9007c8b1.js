"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[517],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return n?r.createElement(k,l(l({ref:t},m),{},{components:n})):r.createElement(k,l({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6341:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:11,title:"CLI command reference"},l=void 0,o={unversionedId:"cli/README",id:"cli/README",title:"CLI command reference",description:"The Otterize command line interface (CLI) offers the following capabilities:",source:"@site/docs/cli/README.mdx",sourceDirName:"cli",slug:"/cli/",permalink:"/cli/",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/cli/README.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"CLI command reference"},sidebar:"docSidebar",previous:{title:"Kubernetes mTLS with Otterize",permalink:"/k8s-mtls/"},next:{title:"Otterize OSS Helm chart",permalink:"/components/otterize-chart/"}},p={},s=[{value:"Command structure",id:"command-structure",level:2},{value:"Intents",id:"intents",level:2},{value:"<code>otterize intents convert [-f PATH]</code>",id:"otterize-intents-convert--f-path",level:3},{value:"Options",id:"options",level:4},{value:"Returns",id:"returns",level:4},{value:"Network mapper",id:"network-mapper",level:2},{value:"Common options",id:"common-options",level:4},{value:"<code>otterize mapper reset</code>",id:"otterize-mapper-reset",level:3},{value:"<code>otterize mapper list</code>",id:"otterize-mapper-list",level:3},{value:"Options",id:"options-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"<code>otterize mapper export</code>",id:"otterize-mapper-export",level:3},{value:"Options",id:"options-2",level:4},{value:"Returns",id:"returns-2",level:4}],m={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Otterize command line interface (CLI) offers the following capabilities:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Interact with the ",(0,a.kt)("a",{parentName:"li",href:"/quick-tutorials/k8s-network-mapper"},"Otterize network mapper"),"."),(0,a.kt)("li",{parentName:"ul"},"Transform ",(0,a.kt)("a",{parentName:"li",href:"/intents-and-intents-files/#intents-file-formats"},"intents files")," from plain YAML format to Kubernetes custom resource YAML format."),(0,a.kt)("li",{parentName:"ul"},"(Coming soon) Interact with the Otterize Cloud, through its API.")),(0,a.kt)("p",null,"This CLI is open-source software. To see its source or build it yourself,\nsee ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/otterize/otterize-cli"},"https://github.com/otterize/otterize-cli"),"."),(0,a.kt)("p",null,"The CLI is available as an installable binary as documented in this ",(0,a.kt)("a",{parentName:"p",href:"/k8s-installation/#install-the-otterize-cli"},"guide"),"."),(0,a.kt)("p",null,"The following are the commands offered by the Otterize CLI."),(0,a.kt)("h2",{id:"command-structure"},"Command structure"),(0,a.kt)("p",null,"Most CLI commands are of the form ",(0,a.kt)("inlineCode",{parentName:"p"},"otterize OBJECT ACTION"),". Because there are multiple objects\nwhich each have multiple operations, this order makes the auto-completion and documentation built into the CLI\neasy to access on the fly."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"otterize -h")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"otterize --help")," offers help on the various objects"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"otterize OBJECT -h")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"otterize OBJECT --help")," offers help on the specified object"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"otterize OBJECT OPERATION -h")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"otterize OBJECT OPERATION --help")," offers help on the specified operation")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"otterize completion")," offers instruction for generating command completions in various shells."),(0,a.kt)("h2",{id:"intents"},"Intents"),(0,a.kt)("h3",{id:"otterize-intents-convert--f-path"},(0,a.kt)("inlineCode",{parentName:"h3"},"otterize intents convert [-f PATH]")),(0,a.kt)("p",null,"Convert client intents files in plain YAML format to Kubernetes ClientIntents resource format."),(0,a.kt)("h4",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-f")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"--filename")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"'.'")),(0,a.kt)("td",{parentName:"tr",align:null},"The client intents filename, or a directory containing client intents files.")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,"Here's the result of converting a directory containing two client intents file in plain YAML format.\nThe result is YAML describing two Kubernetes resources separated with the YAML ",(0,a.kt)("inlineCode",{parentName:"p"},"---")," separator."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"apiVersion: k8s.otterize.com/v1alpha1\nkind: ClientIntents\nmetadata:\n  name: cartservice\n  namespace: otterize-ecom-demo\nspec:\n  service:\n    name: cartservice\n  calls:\n    - name: redis-cart\n      type: http\n---\napiVersion: k8s.otterize.com/v1alpha1\nkind: ClientIntents\nmetadata:\n  name: checkoutservice\n  namespace: otterize-ecom-demo\nspec:\n  service:\n    name: checkoutservice\n  calls:\n    - name: cartservice\n      type: http\n    - name: currencyservice\n      type: http\n")),(0,a.kt)("h2",{id:"network-mapper"},"Network mapper"),(0,a.kt)("p",null,"All ",(0,a.kt)("inlineCode",{parentName:"p"},"otterize mapper")," commands share a set of optional flags which will not be repeated in the documentation\nfor each command."),(0,a.kt)("h4",{id:"common-options"},"Common options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--mapper-namespace")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"otterize-system")),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies the namespace where the mapper service was installed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--mapper-service-name")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"otterize-network-mapper")),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies the name of the mapper service as it was installed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--mapper-service-name")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"otterize-service-port")),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies the port on which the mapper service is listening.")))),(0,a.kt)("h3",{id:"otterize-mapper-reset"},(0,a.kt)("inlineCode",{parentName:"h3"},"otterize mapper reset")),(0,a.kt)("p",null,"Resets the network mapper by deleting all map information built up so far in memory."),(0,a.kt)("h3",{id:"otterize-mapper-list"},(0,a.kt)("inlineCode",{parentName:"h3"},"otterize mapper list")),(0,a.kt)("p",null,"Return the network map built by the network mapper since it started, or since it was reset,\nas a list of clients and the servers they call."),(0,a.kt)("h4",{id:"options-1"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-n")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"--namespaces")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Export only clients in these namespaces (comma-separated)")))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,"Here's a partial output from ",(0,a.kt)("inlineCode",{parentName:"p"},"otterize mapper list -n otterize-ecom-demo"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cartservice in namespace otterize-ecom-demo calls:\n  - redis-cart\ncheckoutservice in namespace otterize-ecom-demo calls:\n  - cartservice\n  - currencyservice\n  - emailservice\n  - paymentservice\n  - productcatalogservice\n  - shippingservice\nfrontend in namespace otterize-ecom-demo calls:\n  - adservice\n  - cartservice\n  - checkoutservice\n  - currencyservice\n  - productcatalogservice\n  - recommendationservice\n  - shippingservice\nloadgenerator in namespace otterize-ecom-demo calls:\n  - frontend\nrecommendationservice in namespace otterize-ecom-demo calls:\n  - productcatalogservice\n")),(0,a.kt)("h3",{id:"otterize-mapper-export"},(0,a.kt)("inlineCode",{parentName:"h3"},"otterize mapper export")),(0,a.kt)("p",null,"Return the network map built by the network mapper since it started, or since it was reset,\nas client intents file(s) in various formats."),(0,a.kt)("h4",{id:"options-2"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--format")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"yaml")),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies the format for the export: 'yaml' or 'json'.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-n")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"--namespaces")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Export only clients in these namespaces (comma-separated)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-o")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"--output")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"STDOUT")),(0,a.kt)("td",{parentName:"tr",align:null},"Filename or directory for redirecting the output")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--output-type")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"single-file")),(0,a.kt)("td",{parentName:"tr",align:null},"Whether the output should be written as a single file (",(0,a.kt)("inlineCode",{parentName:"td"},"single-file"),") or as multiple files in a directory (",(0,a.kt)("inlineCode",{parentName:"td"},"dir"),"). Requires the ",(0,a.kt)("inlineCode",{parentName:"td"},"-o")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"--output")," to point to a directory.")))),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,"Here's a partial output from ",(0,a.kt)("inlineCode",{parentName:"p"},"otterize mapper export -n otterize-ecom-demo"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"apiVersion: k8s.otterize.com/v1alpha1\nkind: ClientIntents\nmetadata:\n  name: cartservice\n  namespace: otterize-ecom-demo\nspec:\n  service:\n    name: cartservice\n  calls:\n    - name: redis-cart\n      type: http\n---\napiVersion: k8s.otterize.com/v1alpha1\nkind: ClientIntents\nmetadata:\n  name: checkoutservice\n  namespace: otterize-ecom-demo\nspec:\n  service:\n    name: checkoutservice\n  calls:\n    - name: cartservice\n      type: http\n    - name: currencyservice\n      type: http\n")))}c.isMDXComponent=!0}}]);