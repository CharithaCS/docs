"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1990],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(r),u=a,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6975:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:3,title:"Credentials operator"},o=void 0,l={unversionedId:"reference/configuration/credentials-operator/README",id:"reference/configuration/credentials-operator/README",title:"Credentials operator",description:"The Otterize credentials operator automatically resolves pods to dev-friendly service names, registers them with a SPIRE server or with Otterize Cloud, and provisions credentials as Kubernetes Secrets.",source:"@site/docs/reference/configuration/credentials-operator/README.mdx",sourceDirName:"reference/configuration/credentials-operator",slug:"/reference/configuration/credentials-operator/",permalink:"/reference/configuration/credentials-operator/",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/reference/configuration/credentials-operator/README.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Credentials operator"},sidebar:"docSidebar",previous:{title:"Configuring Kafka brokers",permalink:"/reference/configuration/intents-operator/configuration"},next:{title:"Helm chart",permalink:"/reference/configuration/credentials-operator/helm-chart"}},s={},d=[{value:"Deploying the credentials operator",id:"deploying-the-credentials-operator",level:2},{value:"Acquiring mTLS credentials using the credentials operator",id:"acquiring-mtls-credentials-using-the-credentials-operator",level:2},{value:"SPIRE workload registrar",id:"spire-workload-registrar",level:2},{value:"Pod annotations",id:"pod-annotations",level:3},{value:"How does the credentials operator work?",id:"how-does-the-credentials-operator-work",level:2},{value:"SPIRE entry registration",id:"spire-entry-registration",level:3},{value:"Credential generation",id:"credential-generation",level:3},{value:"Service name resolution and automatic pod labeling",id:"service-name-resolution-and-automatic-pod-labeling",level:3}],p={toc:d},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Otterize credentials operator automatically resolves pods to dev-friendly service names, registers them with a SPIRE server or with Otterize Cloud, and provisions credentials as Kubernetes Secrets."),(0,a.kt)("h2",{id:"deploying-the-credentials-operator"},"Deploying the credentials operator"),(0,a.kt)("p",null,"To deploy the operator, ",(0,a.kt)("a",{parentName:"p",href:"/reference/configuration/credentials-operator/helm-chart"},"use the Helm chart"),"."),(0,a.kt)("h2",{id:"acquiring-mtls-credentials-using-the-credentials-operator"},"Acquiring mTLS credentials using the credentials operator"),(0,a.kt)("p",null,"The credentials operator is controlled using annotations placed on pods. To have it provision credentials and place them in Secrets, you must specify ",(0,a.kt)("inlineCode",{parentName:"p"},"credentials-operator.otterize.com/tls-secret-name"),"."),(0,a.kt)("h2",{id:"spire-workload-registrar"},"SPIRE workload registrar"),(0,a.kt)("p",null,"When using SPIRE, the operator registers every pod (even those without annotations).\nAlongside the credentials operator, you could use SPIRE agents and the SPIRE SDK to work with the same SPIRE server.\nTo learn more, check out the documentation for ",(0,a.kt)("a",{parentName:"p",href:"https://spiffe.io/docs/latest/spire-about/spire-concepts/"},"SPIRE"),". Note that to use the credentials operator, you do not need to work directly with SPIRE or SPIRE agents, and can do everything completely using annotations and Kubernetes Secrets."),(0,a.kt)("h3",{id:"pod-annotations"},"Pod annotations"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Annotation"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"credentials-operator.otterize.com/tls-secret-name")),(0,a.kt)("td",{parentName:"tr",align:null},"If set, the operator will create a secret with this name with mTLS credentials for this pod."),(0,a.kt)("td",{parentName:"tr",align:null},"N/A")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"credentials-operator.otterize.com/dns-names")),(0,a.kt)("td",{parentName:"tr",align:null},"If set, overrides the list of subject alternative names in the certificate. Should include the hostname of Kubernetes services that will be used to access this pod."),(0,a.kt)("td",{parentName:"tr",align:null},"N/A")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"credentials-operator.otterize.com/cert-ttl")),(0,a.kt)("td",{parentName:"tr",align:null},"Override for the expiration time for the certificate in seconds."),(0,a.kt)("td",{parentName:"tr",align:null},"If deployed with the bundled SPIRE server, 1 day (86400).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"credentials-operator.otterize.com/cert-type")),(0,a.kt)("td",{parentName:"tr",align:null},"Type of the credential bundle - ",(0,a.kt)("inlineCode",{parentName:"td"},"pem")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"jks"),"."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"pem"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"credentials-operator.otterize.com/cert-file-name")),(0,a.kt)("td",{parentName:"tr",align:null},"Certificate key name in the secret. When mounted, this is the filename for the certificate (when using spire it's the SVID file). Only used when cert-type is ",(0,a.kt)("inlineCode",{parentName:"td"},"pem"),"."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"svid.pem"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"credentials-operator.otterize.com/ca-file-name")),(0,a.kt)("td",{parentName:"tr",align:null},"Bundle (certificate chain bundle) key name in the secret. When mounted, this is the filename for the certificate chain. Only used when cert-type is ",(0,a.kt)("inlineCode",{parentName:"td"},"pem"),"."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"bundle.pem"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"credentials-operator.otterize.com/key-file-name")),(0,a.kt)("td",{parentName:"tr",align:null},"Private key key name in the secret. When mounted, this is the filename for the private key. Only used when cert-type is ",(0,a.kt)("inlineCode",{parentName:"td"},"pem"),"."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"key.pem"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"credentials-operator.otterize.com/keystore-file-name")),(0,a.kt)("td",{parentName:"tr",align:null},"Keystore key name in the secret. When mounted, this is the filename for the keystore. Only used when cert-type is ",(0,a.kt)("inlineCode",{parentName:"td"},"jks"),"."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"keystore.jks"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"credentials-operator.otterize.com/truststore-file-name")),(0,a.kt)("td",{parentName:"tr",align:null},"Truststore key name in the secret. When mounted, this is the filename for the truststore. Only used when cert-type is ",(0,a.kt)("inlineCode",{parentName:"td"},"jks"),"."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"truststore.jks"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"credentials-operator.otterize.com/jks-password")),(0,a.kt)("td",{parentName:"tr",align:null},"Password for the JKS truststore and keystore. Only used when cert-type is ",(0,a.kt)("inlineCode",{parentName:"td"},"jks"),"."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"password"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"credentials-operator.otterize.com/restart-pod-on-certificate-renewal")),(0,a.kt)("td",{parentName:"tr",align:null},"A pod with this annotation (no matter the value) will be restarted after certificate renewal, along with any replicas. Should be ideally set through the pod owner's ",(0,a.kt)("inlineCode",{parentName:"td"},"template")," spec so it will persist between restarts."),(0,a.kt)("td",{parentName:"tr",align:null},"N/A")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"intents.otterize.com/service-name")),(0,a.kt)("td",{parentName:"tr",align:null},"Used for ",(0,a.kt)("a",{parentName:"td",href:"/reference/service-identities#kubernetes-service-identity-resolution"},"service identity resolution"),"."),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h2",{id:"how-does-the-credentials-operator-work"},"How does the credentials operator work?"),(0,a.kt)("h3",{id:"spire-entry-registration"},"SPIRE entry registration"),(0,a.kt)("p",null,"Once the operator ",(0,a.kt)("a",{parentName:"p",href:"#service-name-resolution-and-automatic-pod-labeling"},"resolves the service name")," for a pod, it labels the pod and registers an entry with the SPIRE server.\nIf configured to use Otterize Cloud credentials instead of SPIRE (",(0,a.kt)("inlineCode",{parentName:"p"},"useCloudToGenerateTLSCredentials")," in the Helm chart configuration), it registers the Otterize service with Otterize Cloud."),(0,a.kt)("h3",{id:"credential-generation"},"Credential generation"),(0,a.kt)("p",null,"The operator consults the label ",(0,a.kt)("inlineCode",{parentName:"p"},"credentials-operator.otterize.com/tls-secret-name"),". If that label exists, the operator creates a secret named after the value of the label with X.509 credentials within, provided by SPIRE or Otterize Cloud, depending on how the credentials operator is configured. This way, the pod can get autogenerated credentials without modifying its code."),(0,a.kt)("p",null,"When using SPIRE, once the operator has registered the pod with SPIRE, which happens automatically upon startup, the pod can use the SPIRE Workload API to generate credentials for the SVID ",(0,a.kt)("inlineCode",{parentName:"p"},"<servicename>.<namespace>"),"."),(0,a.kt)("h3",{id:"service-name-resolution-and-automatic-pod-labeling"},"Service name resolution and automatic pod labeling"),(0,a.kt)("p",null,"The operator performs service name resolution for each pod. You can read more about the resolution algorithm ",(0,a.kt)("a",{parentName:"p",href:"/reference/service-identities#kubernetes-service-identity-resolution"},"here"),".\nThe value resulting from this resolution process forms the value of the label ",(0,a.kt)("inlineCode",{parentName:"p"},"credentials-operator.otterize.com/service-name"),"."))}m.isMDXComponent=!0}}]);