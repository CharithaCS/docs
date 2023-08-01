"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5773],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=d(r),u=n,k=c["".concat(p,".").concat(u)]||c[u]||s[u]||l;return r?a.createElement(k,o(o({ref:t},m),{},{components:r})):a.createElement(k,o({ref:t},m))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7770:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const l={sidebar_position:1,title:"Helm chart"},o=void 0,i={unversionedId:"reference/configuration/credentials-operator/helm-chart",id:"reference/configuration/credentials-operator/helm-chart",title:"Helm chart",description:"You can use the credentials operator's Helm chart to deploy the credentials operator on its own, and configure a SPIRE server for it to work with according to the parameters value.",source:"@site/docs/reference/configuration/credentials-operator/helm-chart.mdx",sourceDirName:"reference/configuration/credentials-operator",slug:"/reference/configuration/credentials-operator/helm-chart",permalink:"/reference/configuration/credentials-operator/helm-chart",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/reference/configuration/credentials-operator/helm-chart.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Helm chart"},sidebar:"docSidebar",previous:{title:"Credentials operator",permalink:"/reference/configuration/credentials-operator/"},next:{title:"Network mapper",permalink:"/reference/configuration/network-mapper/"}},p={},d=[{value:"Global parameters",id:"global-parameters",level:2},{value:"SPIRE parameters",id:"spire-parameters",level:2},{value:"Operator parameters",id:"operator-parameters",level:2},{value:"Cloud parameters",id:"cloud-parameters",level:2},{value:"Common parameters",id:"common-parameters",level:2}],m={toc:d};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can use the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/otterize/helm-charts/tree/main/credentials-operator"},"credentials operator's Helm chart")," to deploy the credentials operator on its own, and configure a SPIRE server for it to work with according to the parameters value.\nBut it is recommended to deploy the operator as part of the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/otterize/helm-charts/tree/main/otterize-kubernetes"},"Otterize OSS Helm chart"),", which comes with a SPIRE server and the intents operator, rather than managing it independently."),(0,n.kt)("p",null,"If you would like to deploy it on its own, add the Otterize Helm chart repository and configure the operator:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"  helm repo add otterize https://helm.otterize.com\n  helm repo update\n  helm install otterize-credentials-operator otterize/credentials-operator -n otterize-system --create-namespace\n")),(0,n.kt)("h1",{id:"parameters"},"Parameters"),(0,n.kt)("h2",{id:"global-parameters"},"Global parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"global.spire.serverServiceName")),(0,n.kt)("td",{parentName:"tr",align:null},"If deployed with SPIRE, this key specifies SPIRE-server's service name. You should use either this ",(0,n.kt)("strong",{parentName:"td"},"OR")," ",(0,n.kt)("inlineCode",{parentName:"td"},"spire.serverAddress")," (not both)."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"global.allowGetAllResources")),(0,n.kt)("td",{parentName:"tr",align:null},"If defined overrides ",(0,n.kt)("inlineCode",{parentName:"td"},"allowGetAllResources"),"."),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h2",{id:"spire-parameters"},"SPIRE parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"spire.serverAddress")),(0,n.kt)("td",{parentName:"tr",align:null},"Specify the SPIRE-server's address. You should use either this OR ",(0,n.kt)("inlineCode",{parentName:"td"},"global.spire.serverServiceName")," (not both)."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"spire.socketsPath")),(0,n.kt)("td",{parentName:"tr",align:null},"SPIRE sockets path. The operator will expect to find agent.sock in the host-mounted folder"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"/run/spire/sockets"'))))),(0,n.kt)("h2",{id:"operator-parameters"},"Operator parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"operator.image.repository")),(0,n.kt)("td",{parentName:"tr",align:null},"Operator image repository."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"otterize"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"operator.image.image")),(0,n.kt)("td",{parentName:"tr",align:null},"Operator image."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"credentials-operator"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"operator.image.tag")),(0,n.kt)("td",{parentName:"tr",align:null},"Operator image tag."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"latest"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"operator.pullPolicy")),(0,n.kt)("td",{parentName:"tr",align:null},"Operator pull policy."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"(none)"))))),(0,n.kt)("h2",{id:"cloud-parameters"},"Cloud parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"global.otterizeCloud.useCloudToGenerateTLSCredentials")),(0,n.kt)("td",{parentName:"tr",align:null},"Use Otterize Cloud for certificate management instead of SPIRE"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"false"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"global.otterizeCloud.credentials.clientId")),(0,n.kt)("td",{parentName:"tr",align:null},"Client ID for connecting to Otterize Cloud."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"(none)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"global.otterizeCloud.credentials.clientSecret")),(0,n.kt)("td",{parentName:"tr",align:null},"Client secret for connecting to Otterize Cloud."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"(none)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"global.otterizeCloud.credentials.secretKeyRef.secretName")),(0,n.kt)("td",{parentName:"tr",align:null},"If specified, the name of a pre-created Kubernetes Secret to be used instead of creating a secret with the value of clientSecret."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"(none)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"global.otterizeCloud.credentials.secretKeyRef.secretKey")),(0,n.kt)("td",{parentName:"tr",align:null},"If specified, the key for the clientSecret in a pre-created Kubernetes Secret to be used instead of creating a secret with the value of clientSecret."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"(none)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"global.otterizeCloud.apiAddress")),(0,n.kt)("td",{parentName:"tr",align:null},"Overrides Otterize Cloud default API address."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"(none)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"global.otterizeCloud.apiExtraCAPEMSecret")),(0,n.kt)("td",{parentName:"tr",align:null},"The name of a secret containing a single ",(0,n.kt)("inlineCode",{parentName:"td"},"CA.pem")," file for an extra root CA used to connect to Otterize Cloud. The secret should be placed in the same namespace as the Otterize deployment."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"(none)"))))),(0,n.kt)("h2",{id:"common-parameters"},"Common parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"allowGetAllResources")),(0,n.kt)("td",{parentName:"tr",align:null},"Gives get, list and watch permission to watch on all resources. This is used to resolve service names when pods have owners that are custom resources. When disabled, a limited set of permissions is used that only allows access to built-in Kubernetes resources that deploy Pods and Pods themselves - Deployments, StatefulSets, DaemonSets, ReplicaSets and Services. Resolving may not be able to complete if the owning resource is not one of those."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"true"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"resources")),(0,n.kt)("td",{parentName:"tr",align:null},"Resources of the container"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"{}"))))))}s.isMDXComponent=!0}}]);