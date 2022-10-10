"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[870],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=c(n),h=a,m=f["".concat(l,".").concat(h)]||f[h]||d[h]||r;return n?i.createElement(m,s(s({ref:t},p),{},{components:n})):i.createElement(m,s({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:7,title:"Intents and intents files"},s=void 0,o={unversionedId:"intents-and-intents-files/README",id:"intents-and-intents-files/README",title:"Intents and intents files",description:"Intent-based access control is, not surprisingly, centered around declaring intents &mdash; specifically, declaring client intents",source:"@site/docs/intents-and-intents-files/README.mdx",sourceDirName:"intents-and-intents-files",slug:"/intents-and-intents-files/",permalink:"/intents-and-intents-files/",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/intents-and-intents-files/README.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Intents and intents files"},sidebar:"docSidebar",previous:{title:"IBAC: Intent-based access control",permalink:"/intent-based-access-control/"},next:{title:"Otterize OSS",permalink:"/otterize-oss/"}},l={},c=[{value:"Intents within intents files",id:"intents-within-intents-files",level:2},{value:"Intents file formats",id:"intents-file-formats",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Intent-based access control is, not surprisingly, centered around declaring intents ","\u2014"," specifically, declaring ",(0,a.kt)("strong",{parentName:"p"},"client")," intents\nto call servers."),(0,a.kt)("p",null,"The mechanism to declare client intents is with ",(0,a.kt)("strong",{parentName:"p"},"client intents files"),', or just "intents files" for short.\nThis is a natural approach for agile, cloud-native organizations and initiatives:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Intents files are ",(0,a.kt)("strong",{parentName:"li"},"declarative"),";"),(0,a.kt)("li",{parentName:"ul"},"Specifically, intents files declare ",(0,a.kt)("strong",{parentName:"li"},"what")," needs to happen (service A needs to access service B to do operation C)\nwithout specifying, or needing to know, ",(0,a.kt)("strong",{parentName:"li"},"how")," to accomplish this;"),(0,a.kt)("li",{parentName:"ul"},"Intents files align with ",(0,a.kt)("strong",{parentName:"li"},"rapid, distributed development")," because they only require the knowledge that\nclient developers already have &mdash no need for the target server developers or admins to keep track of who needs to access them;"),(0,a.kt)("li",{parentName:"ul"},"The declarative approach thrives in ",(0,a.kt)("strong",{parentName:"li"},"cloud-native infrastructures")," where there are existing APIs to configure access control automatically.")),(0,a.kt)("h2",{id:"intents-within-intents-files"},"Intents within intents files"),(0,a.kt)("p",null,"An intent is a declaration by a specific client to call a specific server, optionally specifying more granular\ninformation about the call (e.g. the resource path and method for HTTP, the topic name and operation for Kafka).\nIn other words, an intent is a tuple of client, server, and optional granular call information.\nIf any of those changes, that's logically a different intent, though the intents file format allows some\nshorthand ways of aggregating intents that only differ by HTTP method or Kafka operation. See the example below."),(0,a.kt)("p",null," An client's intents file specifies ",(0,a.kt)("em",{parentName:"p"},"all")," the intents of that client, in one YAML file. Why is that important?\nBecause as the client's needs change, the intents file should change with it, and any intents no longer needed\nshould be removed from the file. When this updated file is applied, the corresponding access is also removed,\ni.e. the network policies or the Kafka ACLs that were previously in place due to those intents are now gone.\nIn this way, access controls always reflect all of, and only, the latest intended access."),(0,a.kt)("h2",{id:"intents-file-formats"},"Intents file formats"),(0,a.kt)("p",null,"Client intents files are independent of the infrastructure on which IBAC is deployed ","\u2014"," indeed, they abstract away\nany tie-ins with infrastructures and implementations of access control."),(0,a.kt)("p",null,"Here is an example of the client intents file for the ",(0,a.kt)("inlineCode",{parentName:"p"},"checkoutservice"),".\nIt declares that it will call the ",(0,a.kt)("inlineCode",{parentName:"p"},"emailservice"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"orderservice"),", and the ",(0,a.kt)("inlineCode",{parentName:"p"},"ecomm-events")," Kafka service.\nIt also provides more granular information for some of the calls:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"service:\n  name: checkoutservice\ncalls:\n  - name: emailservice\n    type: http\n  - name: orderservice\n    type: http\n    resources:\n      - path: /orders/*\n        methods: [ get, post ]\n  - name: ecomm-events\n    type: kafka\n    topics:\n      - name: orders\n        operations: [ produce ]\n\n")),(0,a.kt)("p",null,'This is a "plain" or "vanilla" intents file, which the Otterize CLI can parse and process.\nWithin the context of a Kubernetes cluster, it is very natural to format intents files as\nKubernetes custom resources, and these are processed by the Kubernetes API, which validates\nthem against a ',(0,a.kt)("inlineCode",{parentName:"p"},"ClientIntents"),' custom resource definition (CRD) and then hands them over to the Otterize intents\noperator, as expected of a Kubernetes ecosystem extension.\nThe two formats are trivially related: the "plain" intents file contents are simply embedded in the ',(0,a.kt)("inlineCode",{parentName:"p"},"spec"),"\nsection of the custom resource format."),(0,a.kt)("p",null,"Here is the same intents file, now formatted as a Kubernetes custom resource YAML,\nso it can be applied directly via ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl apply"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha1\nkind: ClientIntents\nmetadata:\n  name: checkoutservice\nspec:\n  // highlight-start\n  service:\n    name: checkoutservice\n  calls:\n    - name: emailservice\n      type: http\n    - name: orderservice\n      type: http\n      resources:\n        - path: /orders/*\n          methods: [ get, post ]\n    - name: ecomm-events\n      type: kafka\n      topics:\n        - name: orders\n          operations: [ produce ]\n  // highlight-end\n")),(0,a.kt)("p",null,"More formal specification of the format of client intents files, including a schema definition, will be published\nat a later time."))}d.isMDXComponent=!0}}]);