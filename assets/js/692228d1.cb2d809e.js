"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[723],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),k=l,d=m["".concat(s,".").concat(k)]||m[k]||u[k]||o;return n?a.createElement(d,r(r({ref:t},c),{},{components:n})):a.createElement(d,r({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),l=n(6010);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,r),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(7462),l=n(7294),o=n(6010),r=n(2389),i=n(7392),s=n(7094),p=n(2466);const c="tabList__CuJ",u="tabItem_LNqP";function m(e){var t,n;const{lazy:r,block:m,defaultValue:k,values:d,groupId:h,className:f}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,i.l)(b,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===k?k:null!=(t=null!=k?k:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?t:g[0].props.value;if(null!==w&&!b.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:N}=(0,s.U)(),[C,z]=(0,l.useState)(w),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=h){const e=v[h];null!=e&&e!==C&&b.some((t=>t.value===e))&&z(e)}const E=e=>{const t=e.currentTarget,n=O.indexOf(t),a=b[n].value;a!==C&&(T(t),z(a),null!=h&&N(h,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=O.indexOf(e.currentTarget)+1;n=null!=(a=O[t])?a:O[0];break}case"ArrowLeft":{var l;const t=O.indexOf(e.currentTarget)-1;n=null!=(l=O[t])?l:O[O.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},f)},b.map((e=>{let{value:t,label:n,attributes:r}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>O.push(e),onKeyDown:I,onFocus:E,onClick:E},r,{className:(0,o.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),r?(0,l.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function k(e){const t=(0,r.Z)();return l.createElement(m,(0,a.Z)({key:String(t)},e))}},7376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=n(7462),l=(n(7294),n(3905)),o=n(5488),r=n(5162);const i={sidebar_position:1,title:"Installing Otterize in Kubernetes"},s=void 0,p={unversionedId:"guides/k8s-installation",id:"guides/k8s-installation",title:"Installing Otterize in Kubernetes",description:"Make sure you have a cluster that supports network policies",source:"@site/docs/3-guides/1-k8s-installation.mdx",sourceDirName:"3-guides",slug:"/guides/k8s-installation",permalink:"/guides/k8s-installation",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/3-guides/1-k8s-installation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Installing Otterize in Kubernetes"},sidebar:"docSidebar",previous:{title:"Guides",permalink:"/guides/"},next:{title:"IBAC in Kubernetes via network policies",permalink:"/guides/k8s-ibac-via-network-policies/"}},c={},u=[{value:"Make sure you have a cluster that supports network policies",id:"make-sure-you-have-a-cluster-that-supports-network-policies",level:2},{value:"Install Otterize",id:"install-otterize",level:2},{value:"Install Otterize components separately",id:"install-otterize-components-separately",level:2},{value:"Network policies only",id:"network-policies-only",level:3},{value:"Kafka &amp; mTLS only",id:"kafka--mtls-only",level:3},{value:"Uninstall Otterize",id:"uninstall-otterize",level:2},{value:"Before uninstalling",id:"before-uninstalling",level:3},{value:"Uninstallation",id:"uninstallation",level:3}],m={toc:u};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"make-sure-you-have-a-cluster-that-supports-network-policies"},"Make sure you have a cluster that supports network policies"),(0,l.kt)("p",null,"Before you start, you need to have a Kubernetes cluster with a ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/"},"CNI")," that supports ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/network-policies/"},"NetworkPolicies"),"."),(0,l.kt)("p",null,"Below are instructions for setting up a cluster with Network Policies.\nIf you don't have a cluster already, we recommend starting out with a Minikube cluster."),(0,l.kt)(o.Z,{groupId:"cni",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"minikube",label:"minikube",mdxType:"TabItem"},"Start your minikube cluster. ",(0,l.kt)("a",{href:"https://minikube.sigs.k8s.io/docs/start/"},"Don't have the minikube CLI? Read the installation instructions"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ minikube start --network-plugin=cni\n")),(0,l.kt)("p",null,"Install Calico:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/projectcalico/calico/v3.24.1/manifests/calico.yaml\n"))),(0,l.kt)(r.Z,{value:"gke",label:"Google GKE",mdxType:"TabItem"},(0,l.kt)("a",{href:"https://cloud.google.com/kubernetes-engine/docs/how-to/network-policy#gcloud"},"Visit the official documentation"),", or follow the instructions below:",(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"cli",label:"gcloud CLI",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"To enable network policy enforcement when creating a new cluster, run the following command:"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"gcloud container clusters create CLUSTER_NAME --enable-network-policy"),"\nReplace CLUSTER_NAME with the name of the new cluster."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"To enable network policy enforcement for an existing cluster, perform the following tasks:"))),(0,l.kt)("p",null,"Run the following command to enable the add-on:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"gcloud container clusters update CLUSTER_NAME --update-addons=NetworkPolicy=ENABLED"),"\nReplace CLUSTER_NAME with the name of the cluster."),(0,l.kt)("p",null,"Run the following command to enable network policy enforcement on your cluster, which in turn re-creates your cluster's node pools with network policy enforcement enabled:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"gcloud container clusters update CLUSTER_NAME --enable-network-policy"))),(0,l.kt)(r.Z,{value:"console",label:"Console",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"To enable network policy enforcement when creating a new cluster:"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Go to the Google Kubernetes Engine page in the Google Cloud console.\nThe remaining steps will appear automatically in the Google Cloud console.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"On the Google Kubernetes Engine page, click Create.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Configure your cluster as desired.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"From the navigation pane, under Cluster, click Networking.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the Enable network policy checkbox.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click Create."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"To enable network policy enforcement for an existing cluster:"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Go to the Google Kubernetes Engine page in the Google Cloud console. The remaining steps will appear automatically in the Google Cloud console.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In the cluster list, click the name of the cluster you want to modify.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Under Networking, in the Network policy field, click Edit network policy.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the Enable network policy for master checkbox and click Save Changes.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Wait for your changes to apply, and then click Edit network policy again.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the Enable network policy for nodes checkbox.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click Save Changes.")))))),(0,l.kt)(r.Z,{value:"eks",label:"AWS EKS",mdxType:"TabItem"},(0,l.kt)("a",{href:"https://docs.aws.amazon.com/eks/latest/userguide/calico.html"},"Visit the official documentation"),", or follow the instructions below:",(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Spin up an EKS cluster using the console, AWS CLI or ",(0,l.kt)("inlineCode",{parentName:"li"},"eksctl"),"."),(0,l.kt)("li",{parentName:"ol"},"Install Calico for NetworkPolicy enforcement, without replacing the CNI:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/aws/amazon-vpc-cni-k8s/master/config/master/calico-operator.yaml\nkubectl apply -f https://raw.githubusercontent.com/aws/amazon-vpc-cni-k8s/master/config/master/calico-crs.yaml\n"))),(0,l.kt)(r.Z,{value:"aks",label:"Azure AKS",mdxType:"TabItem"},"No setup is required: Azure AKS comes with a built-in network policy implementation called Azure Network Policy Manager. You choose whether you'd like to use this option or Calico when you create a cluster.",(0,l.kt)("a",{href:"https://learn.microsoft.com/en-us/azure/aks/use-network-policies"}," Read more at the official documentation site"),".")),(0,l.kt)("p",null,"Install Otterize on a Kubernetes cluster using helm."),(0,l.kt)("h2",{id:"install-otterize"},"Install Otterize"),(0,l.kt)("p",null,"Use Helm to install the latest version of Otterize:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add otterize https://helm.otterize.com\nhelm repo update\nhelm install otterize otterize/otterize-kubernetes -n otterize-system --create-namespace --wait\n")),(0,l.kt)("p",null,"This chart is a bundle of the Otterize intents operator, SPIRE integration operator, and SPIRE.\nInitial deployment may take a couple of minutes.\nYou can remove the ",(0,l.kt)("inlineCode",{parentName:"p"},"--wait")," flag if you don't want Helm to wait for all pods to be ready, and instead manually watch for all pods to be ",(0,l.kt)("inlineCode",{parentName:"p"},"Ready")," using ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n otterize-system -w"),"."),(0,l.kt)("h2",{id:"install-otterize-components-separately"},"Install Otterize components separately"),(0,l.kt)("p",null,"You can install Otterize components by disabling the deployment of some of the components in the chart.\nFor a complete list of the Helm values the chart accepts, consult the ",(0,l.kt)("a",{parentName:"p",href:"/components/otterize/helm-chart"},"Helm chart documentation"),"."),(0,l.kt)("h3",{id:"network-policies-only"},"Network policies only"),(0,l.kt)("p",null,"Use Helm to install the latest version of Otterize:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add otterize https://helm.otterize.com\nhelm repo update\nhelm install otterize otterize/otterize-kubernetes -n otterize-system --create-namespace --set deployment.spire=false \\\n--set deployment.spireIntegrationOperator=false --set intentsOperator.operator.autoGenerateTLSUsingSpireIntegration=false --wait\n")),(0,l.kt)("p",null,"You can remove the ",(0,l.kt)("inlineCode",{parentName:"p"},"--wait")," flag if you don't want Helm to wait for all pods to be ready, and instead manually watch for all pods to be ",(0,l.kt)("inlineCode",{parentName:"p"},"Ready")," using ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n otterize-system -w"),"."),(0,l.kt)("h3",{id:"kafka--mtls-only"},"Kafka & mTLS only"),(0,l.kt)("p",null,"Use Helm to install the latest version of Otterize:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add otterize https://helm.otterize.com\nhelm repo update\nhelm install -n otterize-system --create-namespace \\\n--set intentsOperator.operator.enableNetworkPolicyCreation=false otterize otterize/otterize-kubernetes\n")),(0,l.kt)("p",null,"You can add the ",(0,l.kt)("inlineCode",{parentName:"p"},"--wait")," flag for Helm to wait for deployment to complete and all pods to be Ready, or manually watch for all pods to be ",(0,l.kt)("inlineCode",{parentName:"p"},"Ready")," using ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n otterize-system -w"),"."),(0,l.kt)("h2",{id:"uninstall-otterize"},"Uninstall Otterize"),(0,l.kt)("h3",{id:"before-uninstalling"},"Before uninstalling"),(0,l.kt)("p",null,"Before uninstalling Otterize, you should make sure to delete any resources created by users: ",(0,l.kt)("inlineCode",{parentName:"p"},"ClientIntents")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"KafkaServerConfig"),"s."),(0,l.kt)("p",null,"When you remove these resources, the Intents Operator will clean up network policies and Kafka ACLs it created. If you remove the operator before doing so, it will not be able to clean up."),(0,l.kt)("p",null,"If, however, you want the network policies and ACLs to stay in place (because you're redeploying with different configuration, for example), don't remove them."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"First check if any ",(0,l.kt)("inlineCode",{parentName:"li"},"ClientIntents")," exist: ",(0,l.kt)("inlineCode",{parentName:"li"},"kubectl get clientintents --all-namespaces")),(0,l.kt)("li",{parentName:"ol"},"If so, remove them."),(0,l.kt)("li",{parentName:"ol"},"Check if any ",(0,l.kt)("inlineCode",{parentName:"li"},"KafkaServerConfig"),"s exist: ",(0,l.kt)("inlineCode",{parentName:"li"},"kubectl get kafkaserverconfig --all-namespaces")),(0,l.kt)("li",{parentName:"ol"},"If so, remove them.")),(0,l.kt)("p",null,"It's important to remove ",(0,l.kt)("inlineCode",{parentName:"p"},"ClientIntents")," before removing ",(0,l.kt)("inlineCode",{parentName:"p"},"KafkaServerConfig"),"s, as once you remove the ",(0,l.kt)("inlineCode",{parentName:"p"},"KafkaServerConfig")," for a Kafka cluster, the intents operator will no longer know how to connect to it and perform cleanup."),(0,l.kt)("h3",{id:"uninstallation"},"Uninstallation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm uninstall otterize -n otterize-system\n")))}k.isMDXComponent=!0}}]);