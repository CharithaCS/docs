"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),o=n(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),o=n(7294),r=n(6010),i=n(2389),l=n(7392),s=n(7094),c=n(2466);const p="tabList__CuJ",d="tabItem_LNqP";function u(e){var t,n;const{lazy:i,block:u,defaultValue:m,values:k,groupId:v,className:f}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=k?k:h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,l.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)?t:h[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:N}=(0,s.U)(),[O,T]=(0,o.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=v){const e=w[v];null!=e&&e!==O&&g.some((t=>t.value===e))&&T(e)}const D=e=>{const t=e.currentTarget,n=C.indexOf(t),a=g[n].value;a!==O&&(x(t),T(a),null!=v&&N(v,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=C.indexOf(e.currentTarget)+1;n=null!=(a=C[t])?a:C[0];break}case"ArrowLeft":{var o;const t=C.indexOf(e.currentTarget)-1;n=null!=(o=C[t])?o:C[C.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":u},f)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>C.push(e),onKeyDown:E,onFocus:D,onClick:D},i,{className:(0,r.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),i?(0,o.cloneElement)(h.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,i.Z)();return o.createElement(u,(0,a.Z)({key:String(t)},e))}},2420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(7462),o=(n(7294),n(3905)),r=n(5488),i=n(5162);const l={sidebar_position:2,title:"Mapping pod-to-pod calls"},s=void 0,c={unversionedId:"documentation/guides/mapping-pod-to-pod-calls",id:"documentation/guides/mapping-pod-to-pod-calls",title:"Mapping pod-to-pod calls",description:"How to collect call traffic",source:"@site/docs/documentation/3-guides/2-mapping-pod-to-pod-calls.md",sourceDirName:"documentation/3-guides",slug:"/documentation/guides/mapping-pod-to-pod-calls",permalink:"/documentation/guides/mapping-pod-to-pod-calls",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/documentation/3-guides/2-mapping-pod-to-pod-calls.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Mapping pod-to-pod calls"},sidebar:"docSidebar",previous:{title:"Installation",permalink:"/documentation/guides/installation"},next:{title:"Terminology",permalink:"/documentation/concepts/terminology"}},p={},d=[{value:"How to collect call traffic",id:"how-to-collect-call-traffic",level:2},{value:"Retrieving the network map (list, YAML intents, and JSON)",id:"retrieving-the-network-map-list-yaml-intents-and-json",level:2},{value:"What calls are picked up",id:"what-calls-are-picked-up",level:2},{value:"Network mapping for bootstrapping access controls",id:"network-mapping-for-bootstrapping-access-controls",level:2},{value:"Sniff&amp;Diff for discovery and evolving access controls <em>(incl. shadow mode)</em>",id:"sniffdiff-for-discovery-and-evolving-access-controls-incl-shadow-mode",level:2},{value:"How it works behind the scenes",id:"how-it-works-behind-the-scenes",level:2},{value:"Capturing DNS responses",id:"capturing-dns-responses",level:3},{value:"Tracking active connections",id:"tracking-active-connections",level:3},{value:"Current limitations",id:"current-limitations",level:2}],u={toc:d};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-to-collect-call-traffic"},"How to collect call traffic"),(0,o.kt)("p",null,"Otterize can help you collect pod-to-pod traffic within your cluster. You will need to install Otterize and the Otterize CLI by following\nthe ",(0,o.kt)("a",{parentName:"p",href:"/documentation/guides/installation"},"installation")," guide."),(0,o.kt)("h2",{id:"retrieving-the-network-map-list-yaml-intents-and-json"},"Retrieving the network map (list, YAML intents, and JSON)"),(0,o.kt)("p",null,"You can view mapped traffic by calling the CLI ",(0,o.kt)("inlineCode",{parentName:"p"},"export")," command. It supports multiple output formats such as ",(0,o.kt)("inlineCode",{parentName:"p"},"intents"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON"),".\nThe following example shows the CLI output for a cluster running three pods: checkout, kafka, zookeeper."),(0,o.kt)("p",null,"You should see similar structured results on your cluster."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"plain",label:"Plain",default:!0,mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the list command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"otterize intents list\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You should get a result based on your existing traffic looking like this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"checkoutservice calls:\n  - orderservice\n\norderservice calls:\n  - kafka\n"))))),(0,o.kt)(i.Z,{value:"intents",label:"Intents",default:!0,mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the export command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"otterize intents export\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You should get a result based on your existing traffic looking like this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"apiVersion: k8s.k8s.otterize.com/v1\nkind: ClientIntents\nmetadata:\n  name: checkoutservice\nspec:\n  service:\n    name: checkoutservice\n  calls:\n    - name: orderservice\n---\napiVersion: k8s.k8s.otterize.com/v1\nkind: ClientIntents\nmetadata:\n  name: orderservice\nspec:\n  service:\n    name: orderservice\n  calls:\n    - name: kafka\n"))))),(0,o.kt)(i.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the export command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"otterize intents export --format json\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You should get a result based on your existing traffic looking like this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "kind": "ClientIntents",\n    "apiVersion": "k8s.otterize.com/v1alpha1",\n    "metadata": {\n      "name": "checkoutservice"\n    },\n    "spec": {\n      "service": {\n        "name": "checkoutservice"\n      },\n      "calls": [\n        {\n          "name": "orderservice"\n        }\n      ]\n    }\n  },\n  {\n    "kind": "ClientIntents",\n    "apiVersion": "k8s.otterize.com/v1alpha1",\n    "metadata": {\n      "name": "orderservice"\n    },\n    "spec": {\n      "service": {\n        "name": "orderservice"\n      },\n      "calls": [\n        {\n          "name": "kafka"\n        }\n      ]\n    }\n  }\n]\n')))))),(0,o.kt)("h2",{id:"what-calls-are-picked-up"},"What calls are picked up"),(0,o.kt)("p",null,"Otterize identifies pod-to-pod traffic by tracking active TCP connections and DNS responses."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},'This segment isn\'t that differentiated from the "How it works behind the scenes"')),(0,o.kt)("h2",{id:"network-mapping-for-bootstrapping-access-controls"},"Network mapping for bootstrapping access controls"),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"TODO")),(0,o.kt)("h2",{id:"sniffdiff-for-discovery-and-evolving-access-controls-incl-shadow-mode"},"Sniff&Diff for discovery and evolving access controls ",(0,o.kt)("em",{parentName:"h2"},"(incl. shadow mode)")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"TODO")),(0,o.kt)("h2",{id:"how-it-works-behind-the-scenes"},"How it works behind the scenes"),(0,o.kt)("p",null,"Otterize maps cluster traffic by employing lightweight connection tracking mechanisms. Connections from\neach mechanism are mapped and resolved to pod-level identities."),(0,o.kt)("h3",{id:"capturing-dns-responses"},"Capturing DNS responses"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Relevant for clusters using DNS for service discovery.")),(0,o.kt)("p",null,"DNS is a common network protocol used for service discovery. When a ",(0,o.kt)("inlineCode",{parentName:"p"},"pod")," ","[checkout-service]"," queries for a ",(0,o.kt)("inlineCode",{parentName:"p"},"service"),"\n","[order-service]"," within K8s multiple queries are generated for multiple DNS suffixes such as: ","[order-service.prod]"," and\n","[order-service.prod.svc.cluster.local]",". To learn more about how K8s works with DNS for service discovery\nread ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/"},"here"),"."),(0,o.kt)("p",null,"By tracking only DNS responses Otterize lowers computational requirements as it only processes packets with relevant\ndata -- DNS answers (e.g. ","[order-service]"," is located at address ","[X.X.X.X]",")."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Checkout this blog by Evyatar Meged about how we implemented this feature.")),(0,o.kt)("h3",{id:"tracking-active-connections"},"Tracking active connections"),(0,o.kt)("p",null,"Otterize also tracks pod-to-pod connections by listing active TCP sessions between K8s nodes. Sessions are resolved back\nto pod-level identities."),(0,o.kt)("h2",{id:"current-limitations"},"Current limitations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'UDP sessions between pods aren\'t resolved using the "Tracking active connections" method.')))}m.isMDXComponent=!0}}]);