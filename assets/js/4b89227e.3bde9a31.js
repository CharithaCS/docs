"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2732],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),d=o,k=p["".concat(s,".").concat(d)]||p[d]||m[d]||r;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),o=a(6010);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7462),o=a(7294),r=a(6010),l=a(2466),i=a(6550),s=a(1980),u=a(7392),c=a(12);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function m(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=m(e),[l,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,u]=k({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,c.Nk)(a);return[n,(0,o.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),f=(()=>{const e=s??p;return d({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,r]),tabValues:r}}var f=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(p(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},l,{className:(0,r.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},o.createElement(b,(0,n.Z)({},e,t)),o.createElement(y,(0,n.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return o.createElement(w,(0,n.Z)({key:String(t)},e))}},6508:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(7462),o=(a(7294),a(3905)),r=a(4866),l=a(5162);a(3875);const i={sidebar_position:1,title:"Network mapping a Kubernetes cluster"},s=void 0,u={unversionedId:"quickstart/visualization/k8s-network-mapper",id:"quickstart/visualization/k8s-network-mapper",title:"Network mapping a Kubernetes cluster",description:"The network mapper allows you to map pod-to-pod traffic within your K8s cluster.",source:"@site/docs/quickstart/visualization/k8s-network-mapper.mdx",sourceDirName:"quickstart/visualization",slug:"/quickstart/visualization/k8s-network-mapper",permalink:"/quickstart/visualization/k8s-network-mapper",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/quickstart/visualization/k8s-network-mapper.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Network mapping a Kubernetes cluster"},sidebar:"docSidebar",previous:{title:"Kafka access automation using cert-manager mTLS",permalink:"/quickstart/access-control/k8s-kafka-mtls-cert-manager"},next:{title:"Istio HTTP-level access mapping",permalink:"/quickstart/visualization/k8s-istio-watcher"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create an Otterize Cloud account",id:"create-an-otterize-cloud-account",level:4},{value:"Install Otterize OSS, connected to Otterize Cloud",id:"install-otterize-oss-connected-to-otterize-cloud",level:4},{value:"Deploy demo to simulate traffic",id:"deploy-demo-to-simulate-traffic",level:2},{value:"Map the cluster",id:"map-the-cluster",level:2},{value:"Extract and see the network map",id:"extract-and-see-the-network-map",level:3},{value:"Show the access graph in Otterize Cloud",id:"show-the-access-graph-in-otterize-cloud",level:3},{value:"What&#39;s next",id:"whats-next",level:2},{value:"Teardown",id:"teardown",level:3}],m={toc:p},d="wrapper";function k(e){let{components:t,...i}=e;return(0,o.kt)(d,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The network mapper allows you to map pod-to-pod traffic within your K8s cluster."),(0,o.kt)("p",null,"In this tutorial, we will:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deploy a server, and two clients calling it."),(0,o.kt)("li",{parentName:"ul"},"Map their communication using the network mapper.")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Prepare a Kubernetes cluster"),(0,o.kt)("p",null,"Before you start, you'll need a Kubernetes cluster. Having a cluster with a ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/"},"CNI")," that supports ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/network-policies/"},"NetworkPolicies")," isn't required for this tutorial, but is recommended so that your cluster works with other tutorials."),(0,o.kt)("p",null,"Below are instructions for setting up a Kubernetes cluster with network policies.\nIf you don't have a cluster already, we recommend starting out with a Minikube cluster."),(0,o.kt)(r.Z,{groupId:"cni",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"minikube",label:"Minikube",mdxType:"TabItem"},(0,o.kt)("p",null,"If you don't have the Minikube CLI, first ",(0,o.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"install it"),". "),(0,o.kt)("p",null,"Then start your Minikube cluster with Calico, in order to enforce network policies."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"minikube start --cpus=4 --memory 4096 --disk-size 32g --cni=calico\n")),(0,o.kt)("p",null,"The increased CPU, memory and disk resource allocations are required to be able to deploy the ecommerce app used in the visual tutorials successfully.")),(0,o.kt)(l.Z,{value:"gke",label:"Google GKE",mdxType:"TabItem"},(0,o.kt)("a",{href:"https://cloud.google.com/kubernetes-engine/docs/how-to/network-policy#gcloud"},"Visit the official documentation"),", or follow the instructions below:",(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cli",label:"gcloud CLI",mdxType:"TabItem"},(0,o.kt)("p",null,"To use the gcloud CLI for this tutorial, first ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/install"},"install")," and then\n",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/initializing"},"initialize")," it."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"To enable network policy enforcement when creating a new cluster:"))),(0,o.kt)("p",null,"Run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters create CLUSTER_NAME --enable-network-policy --zone=ZONE\n")),(0,o.kt)("p",null,"(Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"CLUSTER_NAME")," with the name of the new cluster and ",(0,o.kt)("inlineCode",{parentName:"p"},"ZONE")," with your zone.)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"To enable network policy enforcement for an existing cluster, perform the following tasks:"))),(0,o.kt)("p",null,"Run the following command to enable the add-on:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters update CLUSTER_NAME --update-addons=NetworkPolicy=ENABLED\n")),(0,o.kt)("p",null,"(Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"CLUSTER_NAME")," with the name of the cluster.)"),(0,o.kt)("p",null,"Then enable network policy enforcement on your cluster, re-creating your cluster's node pools with network policy enforcement enabled:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters update CLUSTER_NAME --enable-network-policy\n")),(0,o.kt)("p",null,"(Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"CLUSTER_NAME")," with the name of the cluster.)")),(0,o.kt)(l.Z,{value:"console",label:"Console",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"To enable network policy enforcement when creating a new cluster:"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the Google Kubernetes Engine page in the Google Cloud console.\nThe remaining steps will appear automatically in the Google Cloud console.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the Google Kubernetes Engine page, click Create.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure your cluster as desired.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the navigation pane, under Cluster, click Networking.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the checkbox to Enable network policy.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click Create."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"To enable network policy enforcement for an existing cluster:"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the Google Kubernetes Engine page in the Google Cloud console. The remaining steps will appear automatically in the Google Cloud console.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the cluster list, click the name of the cluster you want to modify.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Under Networking, in the Network policy field, click Edit network policy.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the checkbox to Enable network policy for master and click Save Changes.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Wait for your changes to apply, and then click Edit network policy again.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the checkbox to Enable network policy for nodes.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click Save Changes.")))))),(0,o.kt)(l.Z,{value:"eks",label:"AWS EKS",mdxType:"TabItem"},(0,o.kt)("p",null,"Starting August 29, 2023, ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/containers/amazon-vpc-cni-now-supports-kubernetes-network-policies"},"you can configure the built-in VPC CNI add-on to enable network policy support"),".\nTo spin up a new cluster, use the following ",(0,o.kt)("inlineCode",{parentName:"p"},"eksctl")," ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterConfig"),", and save it to a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.yaml"),"."),(0,o.kt)("p",null,"Spin up the cluster using ",(0,o.kt)("inlineCode",{parentName:"p"},"eksctl create cluster -f cluster.yaml"),". This will spin up a cluster called ",(0,o.kt)("inlineCode",{parentName:"p"},"network-policy-demo")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"us-west-2"),"."),(0,o.kt)("p",null,"The important bit is the configuration for the VPC CNI addon:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'    configurationValues: |-\n       # highlight-next-line\n      enableNetworkPolicy: "true"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: eksctl.io/v1alpha5\nkind: ClusterConfig\n\nmetadata:\n  name: network-policy-demo\n  version: "1.27"\n  region: us-west-2\n\niam:\n  withOIDC: true\n\nvpc:\n  clusterEndpoints:\n    publicAccess: true\n    privateAccess: true\n\naddons:\n  - name: vpc-cni\n    version: 1.14.0\n    attachPolicyARNs: #optional\n    - arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy \n    configurationValues: |-\n       # highlight-next-line\n      enableNetworkPolicy: "true"\n  - name: coredns\n  - name: kube-proxy\n\nmanagedNodeGroups:\n  - name: x86-al2-on-demand\n    amiFamily: AmazonLinux2\n    instanceTypes: [ "m6i.xlarge", "m6a.xlarge" ]\n    minSize: 0\n    desiredCapacity: 2\n    maxSize: 6\n    privateNetworking: true\n    disableIMDSv1: true\n    volumeSize: 100\n    volumeType: gp3\n    volumeEncrypted: true\n    tags:\n      team: "eks"\n')),(0,o.kt)("p",null,"For guides that deploy the larger set of services, Kafka and ZooKeeper are also deployed, and you will also need the EBS CSI driver to accommodate their storage needs. ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/managing-ebs-csi.html"},"Follow the AWS guide for the EBS CSI add-on to do so."),"\nIf you're not using the VPC CNI, you can set up the Calico network policy controller using the following instructions:"),(0,o.kt)("a",{href:"https://docs.aws.amazon.com/eks/latest/userguide/calico.html"},"Visit the official documentation"),", or follow the instructions below:",(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Spin up an ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html"},"EKS cluster")," using the console, AWS CLI or ",(0,o.kt)("inlineCode",{parentName:"li"},"eksctl"),"."),(0,o.kt)("li",{parentName:"ol"},"Install Calico for network policy enforcement, without replacing the CNI:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/aws/amazon-vpc-cni-k8s/v1.12.6/config/master/calico-operator.yaml\nkubectl apply -f https://raw.githubusercontent.com/aws/amazon-vpc-cni-k8s/v1.12.6/config/master/calico-crs.yaml\n"))),(0,o.kt)(l.Z,{value:"aks",label:"Azure AKS",mdxType:"TabItem"},(0,o.kt)("p",null,"You can set up an AKS cluster using this ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-cli"},"guide"),"."),(0,o.kt)("p",null,"For network policy support, no setup is required: Azure AKS comes with a built-in network policy implementation called Azure Network Policy Manager. You can choose whether you'd like to use this option or Calico when you create a cluster."),(0,o.kt)("a",{href:"https://learn.microsoft.com/en-us/azure/aks/use-network-policies"}," Read more at the official documentation site"),"."))),(0,o.kt)("p",null,"You can now install Otterize in your cluster (if it's not already installed), and optionally connect to Otterize Cloud. Connecting to Cloud lets you:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'See what\'s happening visually in your browser, through the "access graph";'),(0,o.kt)("li",{parentName:"ol"},"Avoid using SPIRE (which can be installed with Otterize) for issuing certificates, as Otterize Cloud provides a certificate service.")),(0,o.kt)("p",null,"So either forego browser visualization and:"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Install Otterize in your cluster, ",(0,o.kt)("b",null,"without")," Otterize Cloud"),(0,o.kt)("p",null,"   You'll need ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"Helm")," installed on your machine to install Otterize as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add otterize https://helm.otterize.com\nhelm repo update\nhelm install otterize otterize/otterize-kubernetes -n otterize-system --create-namespace\n")),(0,o.kt)("p",null,"This chart is a bundle of the Otterize intents operator, Otterize credentials operator, Otterize network mapper, and SPIRE.\nInitial deployment may take a couple of minutes.\nYou can add the ",(0,o.kt)("inlineCode",{parentName:"p"},"--wait")," flag for Helm to wait for deployment to complete and all pods to be Ready, or manually watch for all pods to be ",(0,o.kt)("inlineCode",{parentName:"p"},"Ready")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n otterize-system -w"),"."),(0,o.kt)("p",null,"After all the pods are ready you should see the following (or similar) in your terminal when you run ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n otterize-system"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                                       READY  STATUS  RESTARTS AGE\ncredentials-operator-controller-manager-6c56fcfcfb-vg6m9   2/2    Running   0     9s\nintents-operator-controller-manager-65bb6d4b88-bp9pf       2/2    Running   0     9s\notterize-network-mapper-779fffd959-twjqd                   1/1    Running   0     9s\notterize-network-sniffer-65mjt                             1/1    Running   0     9s\notterize-spire-agent-lcbq2                                 1/1    Running   0     9s\notterize-spire-server-0                                    2/2    Running   0     9s\notterize-watcher-b9bf87bcd-276nt                           1/1    Running   0     9s\n"))),(0,o.kt)("p",null,"Or choose to include browser visualization and:"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Install Otterize in your cluster, ",(0,o.kt)("b",null,"with")," Otterize Cloud"),(0,o.kt)("h4",{id:"create-an-otterize-cloud-account"},"Create an Otterize Cloud account"),(0,o.kt)("p",null,"If you don't already have an account, browse to ",(0,o.kt)("a",{parentName:"p",href:"https://app.otterize.com"},"https://app.otterize.com")," to set one up."),(0,o.kt)("p",null,"If someone in your team has already created an org in Otterize Cloud, and invited you (using your email address), you may see an invitation to accept."),(0,o.kt)("p",null,"Otherwise, you'll create a new org, which you can later rename, and invite your teammates to join you there."),(0,o.kt)("h4",{id:"install-otterize-oss-connected-to-otterize-cloud"},"Install Otterize OSS, connected to Otterize Cloud"),(0,o.kt)("p",null,'If no Kubernetes clusters are connected to your account, click the "connect your cluster" button to:'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a Cloud cluster object, specifying its name and the name of an environment to which all namespaces in that cluster will belong, by default."),(0,o.kt)("li",{parentName:"ol"},'Connect it with your actual Kubernetes cluster, by clicking on the "Connection guide ',"\u2192",'" link and running the Helm commands shown there.',(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Follow the instructions to install Otterize ",(0,o.kt)("b",null,"with enforcement on")," (use the toggle to make ",(0,o.kt)("inlineCode",{parentName:"li"},"Enforcement mode: active"),")")))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"More details, if you're curious"),(0,o.kt)("p",null,"Connecting your cluster simply entails installing Otterize OSS via Helm, using credentials from your account so Otterize OSS can report information needed to visualize the cluster."),(0,o.kt)("p",null,"The credentials will already be inlined into the Helm command shown in the Cloud UI, so you just need to copy that line and run it from your shell.\nIf you don't give it the Cloud credentials, Otterize OSS will run fully standalone in your cluster ","\u2014"," you just won't have the visualization in Otterize Cloud."),(0,o.kt)("p",null,'The Helm command shown in the Cloud UI also includes flags to turn off enforcement: Otterize OSS will be running in "shadow mode," meaning that it will show you what ',(0,o.kt)("strong",{parentName:"p"},"would")," happen if it were to create/update your access controls (Kubernetes network policies, Kafka ACLs, Istio authorization policies, etc.). While that's useful for gradually rolling out IBAC, for this tutorial we go straight to active enforcement."))),(0,o.kt)("p",null,"Finally, you'll need to install the Otterize CLI (if you haven't already) to interact with the network mapper:"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Install the Otterize CLI"),(0,o.kt)(r.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"mac",label:"Mac",default:!0,mdxType:"TabItem"},(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Brew",label:"Brew",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew install otterize/otterize/otterize-cli\n"))),(0,o.kt)(l.Z,{value:"Apple Silicon",label:"Apple Silicon",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -LJO https://get.otterize.com/otterize-cli/v0.1.30/otterize_macOS_arm64_notarized.zip\ntar xf otterize_macOS_arm64_notarized.zip\nsudo cp otterize /usr/local/bin  # optionally move to PATH\n"))),(0,o.kt)(l.Z,{value:"Intel 64-bit",label:"Intel 64-bit",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -LJO https://get.otterize.com/otterize-cli/v0.1.30/otterize_macOS_x86_64_notarized.zip\ntar xf otterize_macOS_x86_64_notarized.zip\nsudo cp otterize /usr/local/bin  # optionally move to PATH\n"))))),(0,o.kt)(l.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Scoop",label:"Scoop",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-PowerShell"},"scoop bucket add otterize-cli https://github.com/otterize/scoop-otterize-cli\nscoop update\nscoop install otterize-cli\n"))),(0,o.kt)(l.Z,{value:"64-bit",label:"64-bit",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-PowerShell"},"Invoke-WebRequest -Uri https://get.otterize.com/otterize-cli/v0.1.30/otterize_windows_x86_64.zip -OutFile otterize_Windows_x86_64.zip\nExpand-Archive otterize_Windows_x86_64.zip -DestinationPath .\n# optionally move to PATH\n"))))),(0,o.kt)(l.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"64-bit",label:"64-bit",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://get.otterize.com/otterize-cli/v0.1.30/otterize_linux_x86_64.tar.gz\ntar xf otterize_linux_x86_64.tar.gz\nsudo cp otterize /usr/local/bin  # optionally move to PATH\n")))))),(0,o.kt)("p",null,"More variants are available at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/otterize/otterize-cli/releases"},"GitHub Releases page"),".")),(0,o.kt)("h2",{id:"deploy-demo-to-simulate-traffic"},"Deploy demo to simulate traffic"),(0,o.kt)("p",null,"Let's add services and traffic to the cluster and see how the network mapper builds the map.\nDeploy the following simple example ","\u2014"," ",(0,o.kt)("inlineCode",{parentName:"p"},"client"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"client2")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"server"),", communicating over HTTP:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -n otterize-tutorial-mapper -f ${ABSOLUTE_URL}/code-examples/network-mapper/all.yaml\n")),(0,o.kt)("h2",{id:"map-the-cluster"},"Map the cluster"),(0,o.kt)("p",null,"The network mapper starts to sniff traffic and build an in-memory network map as soon as it's installed.\nThe Otterize CLI allows you to interact with the network mapper to grab a snapshot of current mapped traffic,\nreset its state and more."),(0,o.kt)("p",null,"For a complete list of the CLI capabilities read the ",(0,o.kt)("a",{parentName:"p",href:"/reference/cli/#network-mapper"},"CLI command reference"),"."),(0,o.kt)("h3",{id:"extract-and-see-the-network-map"},"Extract and see the network map"),(0,o.kt)("p",null,"{@include: ../getting-started/","_","show_mapped_traffic_cli.mdx}"),(0,o.kt)("h3",{id:"show-the-access-graph-in-otterize-cloud"},"Show the access graph in Otterize Cloud"),(0,o.kt)("p",null,"If you've attached Otterize OSS to Otterize Cloud, you can now also see the ",(0,o.kt)("a",{parentName:"p",href:"https://app.otterize.com"},"access graph in your browser"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Access graph",src:a(1927).Z,width:"2836",height:"1412"})),(0,o.kt)("p",null,"The access graph reveals several types of information and insights, such as:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Seeing the network map for different clusters, seeing the subset of the map for a given namespace, or even ","\u2014"," according to how you've mapped namespaces to environments ","\u2014"," seeing the subset of the map for a specific environment."),(0,o.kt)("li",{parentName:"ol"},"Filtering the map to include recently-seen traffic, since some date in the past. That way you can eliminate calls that are no longer relevant, without having to reset the network mapper and start building a new map."),(0,o.kt)("li",{parentName:"ol"},"If the intents operator is also connected, the access graph now reveals more specifics about access: understand which services are protected or would be protected, and which client calls are being blocked or would be blocked. We'll see more of that in the next couple of tutorials")),(0,o.kt)("p",null,"Note, for example, that the ",(0,o.kt)("inlineCode",{parentName:"p"},"client")," ","\u2192"," ",(0,o.kt)("inlineCode",{parentName:"p"},"server")," arrow is yellow. Clicking on it shows:"),(0,o.kt)("img",{src:"/img/quick-tutorials/network-mapper/otterize-tutorial-access-graph-edge-info-modal.png",alt:"Client to server edge info"}),(0,o.kt)("h2",{id:"whats-next"},"What's next"),(0,o.kt)("p",null,"The network mapper is a great way to bootstrap IBAC. It generates client intents files that reflect\nthe current topology of your services; those can then be used by each client team to grant them easy\nand ",(0,o.kt)("em",{parentName:"p"},"secure")," access to the services they need, and as their needs evolve, they need only evolve\nthe intents files. We'll see more of that below."),(0,o.kt)("p",null,"Where to go next?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you haven't already, see the ",(0,o.kt)("a",{parentName:"li",href:"/quickstart/access-control/k8s-network-policies"},"automate network policies tutorial"),"."),(0,o.kt)("li",{parentName:"ul"},"Or go to the next tutorial to ",(0,o.kt)("a",{parentName:"li",href:"/quickstart/access-control/k8s-kafka-mtls"},"automate secure access for Kafka"),".")),(0,o.kt)("h3",{id:"teardown"},"Teardown"),(0,o.kt)("p",null,"To remove the deployed examples run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete namespace otterize-tutorial-mapper\n")))}k.isMDXComponent=!0},3875:()=>{},1927:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/otterize-tutorial-access-graph-60084beb3dee7d1ff93ce97e2507d7ad.png"}}]);