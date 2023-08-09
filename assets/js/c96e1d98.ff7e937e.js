"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3811],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),o=n(6010),l=n(2389),i=n(7392),s=n(7094),c=n(2466);const u="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n;const{lazy:l,block:m,defaultValue:d,values:h,groupId:k,className:g}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,i.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===d?d:null!=(t=null!=d?d:null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)?t:f[0].props.value;if(null!==N&&!y.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:w}=(0,s.U)(),[C,T]=(0,r.useState)(N),z=[],{blockElementScrollPositionUntilNextRender:S}=(0,c.o5)();if(null!=k){const e=v[k];null!=e&&e!==C&&y.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,n=z.indexOf(t),a=y[n].value;a!==C&&(S(t),T(a),null!=k&&w(k,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=z.indexOf(e.currentTarget)+1;n=null!=(a=z[t])?a:z[0];break}case"ArrowLeft":{var r;const t=z.indexOf(e.currentTarget)-1;n=null!=(r=z[t])?r:z[z.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},g)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>z.push(e),onKeyDown:E,onFocus:O,onClick:O},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(f.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function d(e){const t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},2711:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),l=n(5162);const i={sidebar_position:5,title:"Simple mTLS deployment"},s=void 0,c={unversionedId:"quick-tutorials/k8s-mtls",id:"quick-tutorials/k8s-mtls",title:"Simple mTLS deployment",description:"Otterize can automatically provision mTLS credentials by using the service identities implied by Kubernetes.",source:"@site/docs/quick-tutorials/k8s-mtls.mdx",sourceDirName:"quick-tutorials",slug:"/quick-tutorials/k8s-mtls",permalink:"/quick-tutorials/k8s-mtls",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/quick-tutorials/k8s-mtls.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Simple mTLS deployment"},sidebar:"docSidebar",previous:{title:"Istio traffic mapping",permalink:"/quick-tutorials/k8s-istio-watcher"},next:{title:"Kubernetes cluster mapping",permalink:"/quick-visual-tutorials/visual-k8s-cluster-mapping"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create an Otterize Cloud account",id:"create-an-otterize-cloud-account",level:4},{value:"Install Otterize OSS, connected to Otterize Cloud",id:"install-otterize-oss-connected-to-otterize-cloud",level:4},{value:"Deploy the example",id:"deploy-the-example",level:2},{value:"Watch it in action",id:"watch-it-in-action",level:2},{value:"Inspect credentials",id:"inspect-credentials",level:2},{value:"Using Otterize Cloud",id:"using-otterize-cloud",level:3},{value:"Using the command line",id:"using-the-command-line",level:3},{value:"What&#39;s next",id:"whats-next",level:2},{value:"Teardown",id:"teardown",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Otterize can automatically provision mTLS credentials by using the service identities implied by Kubernetes.\nThis tutorial will walk you through deploying mTLS certificates on a sample client-server deployment using the ",(0,r.kt)("a",{parentName:"p",href:"/reference/configuration/credentials-operator"},"Otterize credentials operator"),".\nYou can configure this operator to use a ",(0,r.kt)("a",{parentName:"p",href:"https://spiffe.io/docs/latest/spire-about/"},"local SPIRE server")," to issue and manage certificates, or to use the Otterize Cloud service to manage this for you.\nYou can read more about these options in the ",(0,r.kt)("a",{parentName:"p",href:"/security#cryptographic-credentials"},"cryptographic credentials documentation"),"."),(0,r.kt)("p",null,"In this tutorial, we will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deploy client and server pods communicating over HTTP with mTLS."),(0,r.kt)("li",{parentName:"ul"},"See that mTLS credentials were autogenerated.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Prepare a Kubernetes cluster"),(0,r.kt)("p",null,"Before you start, you'll need a Kubernetes cluster. Having a cluster with a ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/"},"CNI")," that supports ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/network-policies/"},"NetworkPolicies")," isn't required for this tutorial, but is recommended so that your cluster works with other tutorials."),(0,r.kt)("p",null,"Below are instructions for setting up a Kubernetes cluster with network policies.\nIf you don't have a cluster already, we recommend starting out with a Minikube cluster."),(0,r.kt)(o.Z,{groupId:"cni",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"minikube",label:"Minikube",mdxType:"TabItem"},(0,r.kt)("p",null,"If you don't have the Minikube CLI, first ",(0,r.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"install it"),". "),(0,r.kt)("p",null,"Then start your Minikube cluster with Calico, in order to enforce network policies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"minikube start --cpus=4 --memory 8192 --disk-size 32g --cni=calico\n")),(0,r.kt)("p",null,"The increased CPU, memory and disk resource allocations are required to be able to deploy the ecommerce app used in the visual tutorials successfully.")),(0,r.kt)(l.Z,{value:"gke",label:"Google GKE",mdxType:"TabItem"},(0,r.kt)("a",{href:"https://cloud.google.com/kubernetes-engine/docs/how-to/network-policy#gcloud"},"Visit the official documentation"),", or follow the instructions below:",(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"cli",label:"gcloud CLI",mdxType:"TabItem"},(0,r.kt)("p",null,"To use the gcloud CLI for this tutorial, first ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/install"},"install")," and then\n",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/initializing"},"initialize")," it."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"To enable network policy enforcement when creating a new cluster:"))),(0,r.kt)("p",null,"Run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters create CLUSTER_NAME --enable-network-policy --zone=ZONE\n")),(0,r.kt)("p",null,"(Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"CLUSTER_NAME")," with the name of the new cluster and ",(0,r.kt)("inlineCode",{parentName:"p"},"ZONE")," with your zone.)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"To enable network policy enforcement for an existing cluster, perform the following tasks:"))),(0,r.kt)("p",null,"Run the following command to enable the add-on:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters update CLUSTER_NAME --update-addons=NetworkPolicy=ENABLED\n")),(0,r.kt)("p",null,"(Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"CLUSTER_NAME")," with the name of the cluster.)"),(0,r.kt)("p",null,"Then enable network policy enforcement on your cluster, re-creating your cluster's node pools with network policy enforcement enabled:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters update CLUSTER_NAME --enable-network-policy\n")),(0,r.kt)("p",null,"(Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"CLUSTER_NAME")," with the name of the cluster.)")),(0,r.kt)(l.Z,{value:"console",label:"Console",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"To enable network policy enforcement when creating a new cluster:"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the Google Kubernetes Engine page in the Google Cloud console.\nThe remaining steps will appear automatically in the Google Cloud console.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the Google Kubernetes Engine page, click Create.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure your cluster as desired.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the navigation pane, under Cluster, click Networking.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the checkbox to Enable network policy.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click Create."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"To enable network policy enforcement for an existing cluster:"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the Google Kubernetes Engine page in the Google Cloud console. The remaining steps will appear automatically in the Google Cloud console.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the cluster list, click the name of the cluster you want to modify.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under Networking, in the Network policy field, click Edit network policy.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the checkbox to Enable network policy for master and click Save Changes.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Wait for your changes to apply, and then click Edit network policy again.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the checkbox to Enable network policy for nodes.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click Save Changes.")))))),(0,r.kt)(l.Z,{value:"eks",label:"AWS EKS",mdxType:"TabItem"},(0,r.kt)("a",{href:"https://docs.aws.amazon.com/eks/latest/userguide/calico.html"},"Visit the official documentation"),", or follow the instructions below:",(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Spin up an ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html"},"EKS cluster")," using the console, AWS CLI or ",(0,r.kt)("inlineCode",{parentName:"li"},"eksctl"),"."),(0,r.kt)("li",{parentName:"ol"},"Install Calico for network policy enforcement, without replacing the CNI:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/aws/amazon-vpc-cni-k8s/v1.12.6/config/master/calico-operator.yaml\nkubectl apply -f https://raw.githubusercontent.com/aws/amazon-vpc-cni-k8s/v1.12.6/config/master/calico-crs.yaml\n"))),(0,r.kt)(l.Z,{value:"aks",label:"Azure AKS",mdxType:"TabItem"},(0,r.kt)("p",null,"You can set up an AKS cluster using this ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-cli"},"guide"),"."),(0,r.kt)("p",null,"For network policy support, no setup is required: Azure AKS comes with a built-in network policy implementation called Azure Network Policy Manager. You can choose whether you'd like to use this option or Calico when you create a cluster."),(0,r.kt)("a",{href:"https://learn.microsoft.com/en-us/azure/aks/use-network-policies"}," Read more at the official documentation site"),"."))),(0,r.kt)("p",null,"You can now install Otterize in your cluster (if it's not already installed), and optionally connect to Otterize Cloud. Connecting to Cloud lets you:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'See what\'s happening visually in your browser, through the "access graph";'),(0,r.kt)("li",{parentName:"ol"},"Avoid using SPIRE (which can be installed with Otterize) for issuing certificates, as Otterize Cloud provides a certificate service.")),(0,r.kt)("p",null,"So either forego browser visualization and:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Install Otterize in your cluster, ",(0,r.kt)("b",null,"without")," Otterize Cloud"),(0,r.kt)("admonition",{title:"Basic system memory requirements",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Otterize requires about 200 MBs and 200 mCPU for all components (including a SPIRE deployment) to install and run properly on Minikube and EKS clusters.")),(0,r.kt)("p",null,"   You'll need ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"Helm")," installed on your machine to install Otterize as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add otterize https://helm.otterize.com\nhelm repo update\nhelm install otterize otterize/otterize-kubernetes -n otterize-system --create-namespace\n")),(0,r.kt)("p",null,"This chart is a bundle of the Otterize intents operator, Otterize credentials operator, Otterize network mapper, and SPIRE.\nInitial deployment may take a couple of minutes.\nYou can add the ",(0,r.kt)("inlineCode",{parentName:"p"},"--wait")," flag for Helm to wait for deployment to complete and all pods to be Ready, or manually watch for all pods to be ",(0,r.kt)("inlineCode",{parentName:"p"},"Ready")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n otterize-system -w"),"."),(0,r.kt)("p",null,"After all the pods are ready you should see the following (or similar) in your terminal when you run ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n otterize-system"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                                       READY  STATUS  RESTARTS AGE\ncredentials-operator-controller-manager-6c56fcfcfb-vg6m9   2/2    Running   0     9s\nintents-operator-controller-manager-65bb6d4b88-bp9pf       2/2    Running   0     9s\notterize-network-mapper-779fffd959-twjqd                   1/1    Running   0     9s\notterize-network-sniffer-65mjt                             1/1    Running   0     9s\notterize-spire-agent-lcbq2                                 1/1    Running   0     9s\notterize-spire-server-0                                    2/2    Running   0     9s\notterize-watcher-b9bf87bcd-276nt                           1/1    Running   0     9s\n"))),(0,r.kt)("p",null,"Or choose to include browser visualization and Cloud-managed credentials:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Install Otterize in your cluster, ",(0,r.kt)("b",null,"with")," Otterize Cloud"),(0,r.kt)("h4",{id:"create-an-otterize-cloud-account"},"Create an Otterize Cloud account"),(0,r.kt)("p",null,"If you don't already have an account, browse to ",(0,r.kt)("a",{parentName:"p",href:"https://app.otterize.com"},"https://app.otterize.com")," to set one up."),(0,r.kt)("p",null,"If someone in your team has already created an org in Otterize Cloud, and invited you (using your email address), you may see an invitation to accept."),(0,r.kt)("p",null,"Otherwise, you'll create a new org, which you can later rename, and invite your teammates to join you there."),(0,r.kt)("h4",{id:"install-otterize-oss-connected-to-otterize-cloud"},"Install Otterize OSS, connected to Otterize Cloud"),(0,r.kt)("p",null,'If no Kubernetes clusters are connected to your account, click the "Connect your cluster" button to:'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a Cloud cluster object, specifying its name and the name of an environment to which all namespaces in that cluster will belong, by default."),(0,r.kt)("li",{parentName:"ol"},'Connect it with your actual Kubernetes cluster, by clicking on the "Connection guide ',"\u2192","\" link and running the Helm commands shown there. You'll want to use ",(0,r.kt)("inlineCode",{parentName:"li"},"mode=defaultShadow")," so you're in shadow mode on every server until you're ready to protect it.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"More details, if you're curious"),(0,r.kt)("p",null,"Connecting your cluster simply entails installing Otterize OSS via Helm, using credentials from your account so Otterize OSS can report information needed to visualize the cluster."),(0,r.kt)("p",null,"The credentials will already be inlined into the Helm command shown in the Cloud UI, so you just need to copy that line and run it from your shell.\nIf you don't give it the Cloud credentials, Otterize OSS will run fully standalone in your cluster ","\u2014"," you just won't have the visualization in Otterize Cloud."),(0,r.kt)("p",null,'The Helm command shown in the Cloud UI also includes flags to turn off enforcement: Otterize OSS will be running in "shadow mode," meaning that it will not create network policies to restrict pod-to-pod traffic, or create Kafka ACLs to control access to Kafka topics. Instead, it will report to Otterize Cloud what ',(0,r.kt)("strong",{parentName:"p"},"would")," happen if enforcement were to be enabled, guiding you to implement IBAC without blocking intended access."))),(0,r.kt)("h2",{id:"deploy-the-example"},"Deploy the example"),(0,r.kt)("p",null,'Our example consists of two pods, "client" and "server", communicating over HTTP with mTLS.\nOtterize makes mTLS easy, requiring just 3 simple changes to a client pod spec:'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Generate credentials"),": add the ",(0,r.kt)("inlineCode",{parentName:"li"},"credentials-operator.otterize.com/tls-secret-name")," annotation, which tells the Otterize\ncredentials operator to generate mTLS credentials, and to store them in a Kubernetes secret\nwhose name is the value of this annotation."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Expose credentials in a volume"),": add a volume containing this secret to the pod."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Mount the volume"),": mount the volume in every container in the pod.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see this structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  template:\n    metadata:\n      annotations:\n        # highlight-next-line\n        # 1. Generate credentials as a secret called "client-credentials-secret":\n        credentials-operator.otterize.com/tls-secret-name: client-credentials-secret\n        ...\n    spec:\n      volumes:\n        # highlight-start\n        # 2. Create a volume containing this secret:\n        - name: otterize-credentials\n          secret:\n            secretName: client-credentials-secret\n        # highlight-end\n        ...\n      containers:\n        - name: client\n          ...\n          volumeMounts:\n            # highlight-start\n            # 3. Mount volume into container\n            - name: otterize-credentials\n              mountPath: /var/otterize/credentials\n              readOnly: true\n            # highlight-end\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see the complete YAML files of the example"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"namespace.yaml",label:"namespace.yaml",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: otterize-tutorial-kafka-mtls\n"))),(0,r.kt)(l.Z,{value:"client-deployment.yaml",label:"client-deployment.yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: client\n  namespace: otterize-tutorial-kafka-mtls\nspec:\n  selector:\n    matchLabels:\n      app: client\n  template:\n    metadata:\n      labels:\n        app: client\n      annotations:\n        credentials-operator.otterize.com/tls-secret-name: client-credentials-secret\n    spec:\n      containers:\n        - name: client\n          image: golang\n          command: [ "/bin/sh", "-c", "--" ]\n          args: [ "while true; do cd /app; cp src/* .; go get main; go run .; sleep infinity; done" ]\n          volumeMounts:\n            - name: ephemeral\n              mountPath: /app\n            - mountPath: /app/src\n              name: client-go\n            - name: otterize-credentials\n              mountPath: /var/otterize/credentials\n              readOnly: true\n      volumes:\n        - name: client-go\n          configMap:\n            name: client-go\n        - name: otterize-credentials\n          secret:\n            secretName: client-credentials-secret\n        - name: ephemeral\n          emptyDir: { }\n'))),(0,r.kt)(l.Z,{value:"client-configmap.yaml",label:"client-configmap.yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: client-go\n  namespace: otterize-tutorial-kafka-mtls\ndata:\n  client.go: |\n    package main\n\n    import (\n        "crypto/tls"\n        "crypto/x509"\n        "fmt"\n        "github.com/Shopify/sarama"\n        "github.com/sirupsen/logrus"\n        "io/ioutil"\n        "time"\n    )\n    \n    const (\n        kafkaAddr     = "kafka.kafka:9092"\n        testTopicName = "mytopic"\n        certFile      = "/var/otterize/credentials/cert.pem"\n        keyFile       = "/var/otterize/credentials/key.pem"\n        rootCAFile    = "/var/otterize/credentials/ca.pem"\n    )\n    \n    func getTLSConfig() (*tls.Config, error) {\n        cert, err := tls.LoadX509KeyPair(certFile, keyFile)\n        if err != nil {\n            return nil, fmt.Errorf("failed loading x509 key pair: %w", err)\n        }\n    \n        pool := x509.NewCertPool()\n        rootCAPEM, err := ioutil.ReadFile(rootCAFile)\n        if err != nil {\n            return nil, fmt.Errorf("failed loading root CA PEM file: %w ", err)\n        }\n        pool.AppendCertsFromPEM(rootCAPEM)\n    \n        return &tls.Config{\n            Certificates: []tls.Certificate{cert},\n            RootCAs:      pool,\n        }, nil\n    }\n    \n    func send_messages(producer sarama.SyncProducer) {\n        i := 1\n        for {\n          msg := fmt.Sprintf("Message %d [sent by client]", i)\n          _, _, err := producer.SendMessage(&sarama.ProducerMessage{\n              Topic:     testTopicName,\n              Partition: -1,\n              Value:     sarama.StringEncoder(msg),\n          })\n          if err != nil {\n              return\n          }\n          fmt.Printf("Sent message - %s\\n", msg)\n          time.Sleep(2 * time.Second)\n          i++\n        }\n    }\n    \n    func loop_kafka() error {\n        addrs := []string{kafkaAddr}\n    \n        config := sarama.NewConfig()\n        fmt.Println("Loading mTLS certificates")\n        config.Net.TLS.Enable = true\n        tlsConfig, err := getTLSConfig()\n        if err != nil {\n            return err\n        }\n        config.Net.TLS.Config = tlsConfig\n        fmt.Println("Connecting to Kafka")\n        config.Net.DialTimeout = 5 * time.Second\n        config.Net.ReadTimeout = 5 * time.Second\n        config.Net.WriteTimeout = 5 * time.Second\n        client, err := sarama.NewClient(addrs, config)\n        if err != nil {\n            return err\n        }\n        fmt.Println("Creating a producer and a consumer for -", testTopicName)\n        config.Producer.Return.Successes = true\n        config.Producer.Timeout = 5 * time.Second\n        config.Consumer.MaxWaitTime = 5 * time.Second\n        config.Producer.Return.Errors = true\n        config.Consumer.Return.Errors = true\n        producer, err := sarama.NewSyncProducerFromClient(client)\n        if err != nil {\n            return err\n        }\n    \n        consumer, err := sarama.NewConsumerFromClient(client)\n        if err != nil {\n            return err\n        }\n        fmt.Println("Sending messages")\n        go send_messages(producer)\n    \n        partConsumer, err := consumer.ConsumePartition(testTopicName, 0, 0)\n        if err != nil {\n            return err\n        }\n    \n        for msg := range partConsumer.Messages() {\n            fmt.Printf("Read message - %s\\n", msg.Value)\n        }\n        return nil\n    }\n    \n    func main() {\n        for {\n            err := loop_kafka()\n            logrus.WithError(err).Println()\n            fmt.Println("Loop exited")\n            time.Sleep(2 * time.Second)\n        }\n    }\n\n\n  go.mod: |\n    module main\n            \n            go 1.18\n            \n            require (\n            github.com/Shopify/sarama v1.36.0\n            github.com/sirupsen/logrus v1.9.0\n            )\n            \n            require (\n            github.com/davecgh/go-spew v1.1.1 // indirect\n            github.com/eapache/go-resiliency v1.3.0 // indirect\n            github.com/eapache/go-xerial-snappy v0.0.0-20180814174437-776d5712da21 // indirect\n            github.com/eapache/queue v1.1.0 // indirect\n            github.com/golang/snappy v0.0.4 // indirect\n            github.com/hashicorp/errwrap v1.0.0 // indirect\n            github.com/hashicorp/go-multierror v1.1.1 // indirect\n            github.com/hashicorp/go-uuid v1.0.3 // indirect\n            github.com/jcmturner/aescts/v2 v2.0.0 // indirect\n            github.com/jcmturner/dnsutils/v2 v2.0.0 // indirect\n            github.com/jcmturner/gofork v1.7.6 // indirect\n            github.com/jcmturner/gokrb5/v8 v8.4.3 // indirect\n            github.com/jcmturner/rpc/v2 v2.0.3 // indirect\n            github.com/klauspost/compress v1.15.9 // indirect\n            github.com/pierrec/lz4/v4 v4.1.15 // indirect\n            github.com/rcrowley/go-metrics v0.0.0-20201227073835-cf1acfcdf475 // indirect\n            golang.org/x/crypto v0.0.0-20220722155217-630584e8d5aa // indirect\n            golang.org/x/net v0.0.0-20220809184613-07c6da5e1ced // indirect\n            golang.org/x/sys v0.0.0-20220728004956-3c1f35247d10 // indirect\n            )\n'))),(0,r.kt)(l.Z,{value:"client.js",label:"client.js",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const fs = require('fs');\nconst https = require('https');\n\nconst options = {\n    hostname: 'server.otterize-tutorial-mtls',\n    port: 443,\n    path: '/hello',\n    method: 'GET',\n    cert: fs.readFileSync('/var/otterize/credentials/cert.pem'),\n    key: fs.readFileSync('/var/otterize/credentials/key.pem'),\n    ca: fs.readFileSync('/var/otterize/credentials/ca.pem')\n}\n\nconst req = https.request(\n    options,\n    res => {\n        res.on('data', function (data) {\n            console.log(data.toString())\n        });\n    }\n);\n\nreq.end();\n"))),(0,r.kt)(l.Z,{value:"server.js",label:"server.js",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const https = require(`https`);\nconst fs = require(`fs`);\n\nconst options = {\n  key: fs.readFileSync('/var/otterize/credentials/key.pem'),\n  cert: fs.readFileSync('/var/otterize/credentials/cert.pem'),\n  ca: fs.readFileSync('/var/otterize/credentials/ca.pem'),\n  requestCert: true\n};\n\nhttps.createServer(\n    options,\n    (req, res) => {\n        const peerCert = req.connection.getPeerCertificate();\n        const ownCert = req.connection.getCertificate();\n        console.log(\"Received request:\");\n        console.log(peerCert.subject.CN + \":\\t\" + req.method + \" \" + req.url);\n        if (req.url === '/hello') {\n            res.writeHead(200);\n            res.end('mTLS hello world\\nfrom: ' + ownCert.subject.CN + '\\nto client: ' + peerCert.subject.CN);\n        } else {\n            res.end();\n        }\n    }).listen(443);\n"))))),(0,r.kt)("p",null,"Deploy the client and server using ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://docs.otterize.com/code-examples/mtls/all.yaml\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Optional: check deployment status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n otterize-tutorial-mtls\n")),(0,r.kt)("p",null,"You should see"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NAME                      READY   STATUS    RESTARTS   AGE\nclient-5689997b5c-grlnt   1/1     Running   0          35s\nserver-6698c58cbc-v9n9b   1/1     Running   0          34s\n"))),(0,r.kt)("h2",{id:"watch-it-in-action"},"Watch it in action"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Confirm that the client can successfully call the server using HTTP with mTLS:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs --tail 3 -n otterize-tutorial-mtls deploy/client\n")),(0,r.kt)("p",{parentName:"li"},"The client makes requests and prints out the server's response; our example server will respond with\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"common name")," of the server's certificate as well as the ",(0,r.kt)("inlineCode",{parentName:"p"},"common name")," of the client's certificate:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mTLS hello world\nfrom: server.otterize-tutorial-mtls          # server's common name in the certificate\nto client: client.otterize-tutorial-mtls     # client's common name in the certificate\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can also confirm on the server side that it sees requests from this authenticated client:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs --tail 1 -n otterize-tutorial-mtls deploy/server\n")),(0,r.kt)("p",{parentName:"li"},"The example server logs the common name of every client that makes a request:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"client.otterize-tutorial-mtls:  GET /hello\n")))),(0,r.kt)("admonition",{title:"Certificate lifecycle management",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Otterize leverages SPIRE or the Otterize Cloud credentials service to manage certificate lifecycle tasks such as rotation, revocation, etc."),(0,r.kt)("p",{parentName:"admonition"},"We recommend reloading credentials before each use, as Otterize makes sure\nthe mounted credentials are constantly refreshed and up to date.")),(0,r.kt)("h2",{id:"inspect-credentials"},"Inspect credentials"),(0,r.kt)("h3",{id:"using-otterize-cloud"},"Using Otterize Cloud"),(0,r.kt)("p",null,"Otterize Cloud can be used for visualizing your network and overlay certificate information. When you browse to ",(0,r.kt)("a",{parentName:"p",href:"https://app.otterize.com"},"https://app.otterize.com")," you can see the access graph, showing you information about the services in your cluster, how they access each other, and so on. There are many other insights in the access graph, such as whether a service is or would be protected if enforcement were activated, or whether it would then block clients... but those are the subjects of the other tutorials."),(0,r.kt)("p",null,"If you click on the ",(0,r.kt)("strong",{parentName:"p"},"server")," service to see its details, you can expand and see the certificate details:"),(0,r.kt)("img",{src:"/img/quick-tutorials/mtls/creds.png",alt:"Service details",width:"600"}),(0,r.kt)("p",null,"You can see the common name (CN) used as the service's identity. And, when available, this will also show all DNS names (SANs), which together with the CN encompass all the possible names attested for by this certificate."),(0,r.kt)("h3",{id:"using-the-command-line"},"Using the command line"),(0,r.kt)("p",null,"We can use ",(0,r.kt)("inlineCode",{parentName:"p"},"openssl")," to inspect the generated credentials. The credentials are stored as a Kubernetes secret\nand are then mounted as a file into the container."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Retrieve the credentials from the Kubernetes secret:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get secret -n otterize-tutorial-mtls client-credentials-secret -o jsonpath='{.data.cert\\.pem}' | base64 -d > cert.pem\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Inspect the credentials with ",(0,r.kt)("inlineCode",{parentName:"p"},"openssl"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"openssl x509 -in cert.pem -text | head -n 15\n")),(0,r.kt)("p",{parentName:"li"},"You should see output similar to:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-x509"},"Certificate:\n    Data:\n        Version: 3 (0x2)\n        Serial Number:\n            0b:eb:eb:4d:0e:02:7e:28:93:30:1c:55:26:22:8b:c7\n        Signature Algorithm: sha256WithRSAEncryption\n        Issuer: C = ..., O = ...\n        Validity\n            Not Before: Aug 24 12:19:57 2022 GMT\n            Not After : Sep 23 12:20:07 2022 GMT\n# highlight-next-line\n        Subject: C = ..., O = ..., CN = client.otterize-tutorial-mtls       # the client's name\n        Subject Public Key Info:\n            Public Key Algorithm: id-ecPublicKey\n                Public-Key: (256 bit)\n                pub:\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'You can see that Otterize generated an X.509 keypair using the pod\'s name ("client")\nand namespace ("otterize-tutorial-mtls"): ',(0,r.kt)("inlineCode",{parentName:"p"},"client.otterize-tutorial-mtls"),"."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see what happened behind the scenes"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We annotated the pods to let Otterize know it should generate mTLS credentials."),(0,r.kt)("li",{parentName:"ol"},"The Otterize credentials operator:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Generated matching mTLS credentials."),(0,r.kt)("li",{parentName:"ol"},"Stored the mTLS credentials into Kubernetes secrets."))),(0,r.kt)("li",{parentName:"ol"},"The secrets were mounted (separately) into each pod's container."),(0,r.kt)("li",{parentName:"ol"},"The pods communicated with each other using mutual TLS-authenticated HTTPS."))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Otterize defaults to generating credentials with an expiry time of 1 day. The certificates are\nautomatically refreshed before expiring, and therefore you must always read the credentials from file rather than caching them."),(0,r.kt)("p",{parentName:"admonition"},"To set a longer expiration time, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"credentials-operator.otterize.com/cert-ttl")," annotation for your pods.\nFor more information, see ",(0,r.kt)("a",{parentName:"p",href:"/reference/configuration/credentials-operator"},"the documentation for the credentials operator"))),(0,r.kt)("h2",{id:"whats-next"},"What's next"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Learn how to manage and ",(0,r.kt)("a",{parentName:"li",href:"/quick-tutorials/k8s-mtls"},"automatically provision mTLS")," credentials within a Kubernetes cluster."),(0,r.kt)("li",{parentName:"ul"},"Enforce ",(0,r.kt)("a",{parentName:"li",href:"/quick-tutorials/k8s-kafka-mtls"},"secure Kafka access")," with mTLS."),(0,r.kt)("li",{parentName:"ul"},"Learn more about how the ",(0,r.kt)("a",{parentName:"li",href:"/reference/configuration/credentials-operator"},"Otterize credentials operator")," works.")),(0,r.kt)("h2",{id:"teardown"},"Teardown"),(0,r.kt)("p",null,"To remove the deployed examples run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete -f https://docs.otterize.com/code-examples/mtls/all.yaml\n")))}d.isMDXComponent=!0}}]);