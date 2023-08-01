"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5203],{5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),o=n(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7462),o=n(7294),i=n(6010),l=n(2389),r=n(7392),s=n(7094),c=n(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n;const{lazy:l,block:d,defaultValue:h,values:m,groupId:k,className:g}=e,w=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:w.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,r.l)(y,((e,t)=>e.value===t.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===h?h:null!=(t=null!=h?h:null==(n=w.find((e=>e.props.default)))?void 0:n.props.value)?t:w[0].props.value;if(null!==b&&!y.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:v}=(0,s.U)(),[z,C]=(0,o.useState)(b),T=[],{blockElementScrollPositionUntilNextRender:I}=(0,c.o5)();if(null!=k){const e=N[k];null!=e&&e!==z&&y.some((t=>t.value===e))&&C(e)}const O=e=>{const t=e.currentTarget,n=T.indexOf(t),a=y[n].value;a!==z&&(I(t),C(a),null!=k&&v(k,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=T.indexOf(e.currentTarget)+1;n=null!=(a=T[t])?a:T[0];break}case"ArrowLeft":{var o;const t=T.indexOf(e.currentTarget)-1;n=null!=(o=T[t])?o:T[T.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},g)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:z===t?0:-1,"aria-selected":z===t,key:t,ref:e=>T.push(e),onKeyDown:E,onFocus:O,onClick:O},l,{className:(0,i.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":z===t})}),null!=n?n:t)}))),l?(0,o.cloneElement)(w.filter((e=>e.props.value===z))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},w.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==z})))))}function h(e){const t=(0,l.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}},5302:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var a=n(7462),o=(n(7294),n(3905)),i=(n(814),n(5488)),l=n(5162);const r={sidebar_position:5,title:"Istio AuthorizationPolicy automation"},s=void 0,c={unversionedId:"quick-tutorials/k8s-istio-authorization-policies",id:"quick-tutorials/k8s-istio-authorization-policies",title:"Istio AuthorizationPolicy automation",description:"Otterize automates mTLS-based, HTTP-level pod-to-pod access control with Istio authorization (authZ) policies, within your Kubernetes cluster.",source:"@site/docs/quick-tutorials/k8s-istio-authorization-policies.mdx",sourceDirName:"quick-tutorials",slug:"/quick-tutorials/k8s-istio-authorization-policies",permalink:"/quick-tutorials/k8s-istio-authorization-policies",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/quick-tutorials/k8s-istio-authorization-policies.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Istio AuthorizationPolicy automation"},sidebar:"docSidebar",previous:{title:"Kubernetes cluster mapping",permalink:"/quick-tutorials/k8s-network-mapper"},next:{title:"Istio traffic mapping",permalink:"/quick-tutorials/k8s-istio-watcher"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create an Otterize Cloud account",id:"create-an-otterize-cloud-account",level:4},{value:"Install Otterize OSS, connected to Otterize Cloud",id:"install-otterize-oss-connected-to-otterize-cloud",level:4},{value:"Install and configure Istio",id:"install-and-configure-istio",level:2},{value:"Deploy the two clients and the server",id:"deploy-the-two-clients-and-the-server",level:2},{value:"Apply intents",id:"apply-intents",level:2},{value:"See it in action",id:"see-it-in-action",level:3},{value:"What did we accomplish?",id:"what-did-we-accomplish",level:2},{value:"What&#39;s next",id:"whats-next",level:2},{value:"Teardown",id:"teardown",level:2}],d={toc:p};function h(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Otterize automates mTLS-based, HTTP-level pod-to-pod access control with Istio authorization (authZ) policies, within your Kubernetes cluster."),(0,o.kt)("p",null,"Implementing this kind of access control with Istio is complicated. For example, authorization policies select servers by label, and clients by service account, so both of those need to be created or updated."),(0,o.kt)("p",null,"To help you avoid manually managing complicated authorization policies per server, Otterize implements ",(0,o.kt)("strong",{parentName:"p"},"intent-based access control")," (IBAC).\nYou just declare what calls the client pods intend to make,\nand everything is automatically wired together so only intended calls are allowed."),(0,o.kt)("p",null,"In this tutorial, we will:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deploy an Istio demo application with two client pods and one server pod."),(0,o.kt)("li",{parentName:"ul"},"Declare that the first client intends to call the server with a specific HTTP path and method."),(0,o.kt)("li",{parentName:"ul"},"See that an Istio authorization policy was autogenerated to allow just that, and to block the (undeclared) calls from the other client.")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Prepare a Kubernetes cluster"),(0,o.kt)("p",null,"Before you start, you'll need a Kubernetes cluster. Having a cluster with a ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/"},"CNI")," that supports ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/network-policies/"},"NetworkPolicies")," isn't required for this tutorial, but is recommended so that your cluster works with other tutorials."),(0,o.kt)("p",null,"Below are instructions for setting up a Kubernetes cluster with network policies.\nIf you don't have a cluster already, we recommend starting out with a Minikube cluster."),(0,o.kt)(i.Z,{groupId:"cni",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"minikube",label:"Minikube",mdxType:"TabItem"},(0,o.kt)("p",null,"If you don't have the Minikube CLI, first ",(0,o.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"install it"),". "),(0,o.kt)("p",null,"Then start your Minikube cluster with Calico, in order to enforce network policies."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"minikube start --cpus=4 --memory 8192 --disk-size 32g --cni=calico\n")),(0,o.kt)("p",null,"The increased CPU, memory and disk resource allocations are required to be able to deploy the ecommerce app used in the visual tutorials successfully.")),(0,o.kt)(l.Z,{value:"gke",label:"Google GKE",mdxType:"TabItem"},(0,o.kt)("a",{href:"https://cloud.google.com/kubernetes-engine/docs/how-to/network-policy#gcloud"},"Visit the official documentation"),", or follow the instructions below:",(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cli",label:"gcloud CLI",mdxType:"TabItem"},(0,o.kt)("p",null,"To use the gcloud CLI for this tutorial, first ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/install"},"install")," and then\n",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/initializing"},"initialize")," it."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"To enable network policy enforcement when creating a new cluster:"))),(0,o.kt)("p",null,"Run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters create CLUSTER_NAME --enable-network-policy --zone=ZONE\n")),(0,o.kt)("p",null,"(Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"CLUSTER_NAME")," with the name of the new cluster and ",(0,o.kt)("inlineCode",{parentName:"p"},"ZONE")," with your zone.)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"To enable network policy enforcement for an existing cluster, perform the following tasks:"))),(0,o.kt)("p",null,"Run the following command to enable the add-on:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters update CLUSTER_NAME --update-addons=NetworkPolicy=ENABLED\n")),(0,o.kt)("p",null,"(Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"CLUSTER_NAME")," with the name of the cluster.)"),(0,o.kt)("p",null,"Then enable network policy enforcement on your cluster, re-creating your cluster's node pools with network policy enforcement enabled:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters update CLUSTER_NAME --enable-network-policy\n")),(0,o.kt)("p",null,"(Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"CLUSTER_NAME")," with the name of the cluster.)")),(0,o.kt)(l.Z,{value:"console",label:"Console",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"To enable network policy enforcement when creating a new cluster:"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the Google Kubernetes Engine page in the Google Cloud console.\nThe remaining steps will appear automatically in the Google Cloud console.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the Google Kubernetes Engine page, click Create.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure your cluster as desired.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the navigation pane, under Cluster, click Networking.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the checkbox to Enable network policy.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click Create."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"To enable network policy enforcement for an existing cluster:"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the Google Kubernetes Engine page in the Google Cloud console. The remaining steps will appear automatically in the Google Cloud console.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the cluster list, click the name of the cluster you want to modify.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Under Networking, in the Network policy field, click Edit network policy.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the checkbox to Enable network policy for master and click Save Changes.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Wait for your changes to apply, and then click Edit network policy again.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the checkbox to Enable network policy for nodes.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click Save Changes.")))))),(0,o.kt)(l.Z,{value:"eks",label:"AWS EKS",mdxType:"TabItem"},(0,o.kt)("a",{href:"https://docs.aws.amazon.com/eks/latest/userguide/calico.html"},"Visit the official documentation"),", or follow the instructions below:",(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Spin up an ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html"},"EKS cluster")," using the console, AWS CLI or ",(0,o.kt)("inlineCode",{parentName:"li"},"eksctl"),"."),(0,o.kt)("li",{parentName:"ol"},"Install Calico for network policy enforcement, without replacing the CNI:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/aws/amazon-vpc-cni-k8s/v1.12.6/config/master/calico-operator.yaml\nkubectl apply -f https://raw.githubusercontent.com/aws/amazon-vpc-cni-k8s/v1.12.6/config/master/calico-crs.yaml\n"))),(0,o.kt)(l.Z,{value:"aks",label:"Azure AKS",mdxType:"TabItem"},(0,o.kt)("p",null,"You can set up an AKS cluster using this ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-cli"},"guide"),"."),(0,o.kt)("p",null,"For network policy support, no setup is required: Azure AKS comes with a built-in network policy implementation called Azure Network Policy Manager. You can choose whether you'd like to use this option or Calico when you create a cluster."),(0,o.kt)("a",{href:"https://learn.microsoft.com/en-us/azure/aks/use-network-policies"}," Read more at the official documentation site"),"."))),(0,o.kt)("p",null,"You can now install (or reinstall) Otterize in your cluster, and optionally connect to Otterize Cloud. Connecting to Cloud lets you:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'See what\'s happening visually in your browser, through the "access graph";'),(0,o.kt)("li",{parentName:"ol"},"Avoid using SPIRE (which can be installed with Otterize) for issuing certificates, as Otterize Cloud provides a certificate service.")),(0,o.kt)("p",null,"So either forego browser visualization and:"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Install Otterize in your cluster, ",(0,o.kt)("b",null,"without")," Otterize Cloud"),(0,o.kt)("admonition",{title:"Basic system memory requirements",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Otterize requires about 200 MBs and 200 mCPU for all components (including a SPIRE deployment) to install and run properly on Minikube and EKS clusters."),(0,o.kt)("p",{parentName:"admonition"},"   You'll need ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"Helm")," installed on your machine to install Otterize as follows:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add otterize https://helm.otterize.com\nhelm repo update\nhelm install otterize otterize/otterize-kubernetes -n otterize-system --create-namespace \\\n--set networkMapper.istiowatcher.enable=true \\\n--set intentsOperator.operator.enableNetworkPolicyCreation=false\n"))),(0,o.kt)("p",null,"This chart is a bundle of the Otterize intents operator, Otterize credentials operator, Otterize network mapper, and SPIRE.\nInitial deployment may take a couple of minutes.\nYou can add the ",(0,o.kt)("inlineCode",{parentName:"p"},"--wait")," flag for Helm to wait for deployment to complete and all pods to be Ready, or manually watch for all pods to be ",(0,o.kt)("inlineCode",{parentName:"p"},"Ready")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n otterize-system -w"),"."),(0,o.kt)("p",null,"After all the pods are ready you should see the following (or similar) in your terminal when you run ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n otterize-system"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                                       READY  STATUS  RESTARTS AGE\ncredentials-operator-controller-manager-6c56fcfcfb-vg6m9   2/2    Running   0     9s\nintents-operator-controller-manager-65bb6d4b88-bp9pf       2/2    Running   0     9s\notterize-network-mapper-779fffd959-twjqd                   1/1    Running   0     9s\notterize-network-sniffer-65mjt                             1/1    Running   0     9s\notterize-spire-agent-lcbq2                                 1/1    Running   0     9s\notterize-spire-server-0                                    2/2    Running   0     9s\notterize-watcher-b9bf87bcd-276nt                           1/1    Running   0     9s\n"))),(0,o.kt)("p",null,"Or choose to include browser visualization and:"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Install Otterize in your cluster, ",(0,o.kt)("b",null,"with")," Otterize Cloud"),(0,o.kt)("h4",{id:"create-an-otterize-cloud-account"},"Create an Otterize Cloud account"),(0,o.kt)("p",null,"If you don't already have an account, browse to ",(0,o.kt)("a",{parentName:"p",href:"https://app.otterize.com"},"https://app.otterize.com")," to set one up."),(0,o.kt)("p",null,"If someone in your team has already created an org in Otterize Cloud, and invited you (using your email address), you may see an invitation to accept."),(0,o.kt)("p",null,"Otherwise, you'll create a new org, which you can later rename, and invite your teammates to join you there."),(0,o.kt)("h4",{id:"install-otterize-oss-connected-to-otterize-cloud"},"Install Otterize OSS, connected to Otterize Cloud"),(0,o.kt)("p",null,'If no Kubernetes clusters are connected to your account, click the "connect your cluster" button to:'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a Cloud cluster object, specifying its name and the name of an environment to which all namespaces in that cluster will belong, by default."),(0,o.kt)("li",{parentName:"ol"},'Connect it with your actual Kubernetes cluster, by clicking on the "Connection guide ',"\u2192",'" link and running the Helm commands shown there.',(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Follow the instructions to install Otterize ",(0,o.kt)("b",null,"with enforcement on")," (not in shadow mode) for this tutorial. In other words, ",(0,o.kt)("b",null,"omit")," the following flag in the Helm command: ",(0,o.kt)("inlineCode",{parentName:"li"},"--set intentsOperator.operator.enableEnforcement=false"))))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"More details, if you're curious"),(0,o.kt)("p",null,"Connecting your cluster simply entails installing Otterize OSS via Helm, using credentials from your account so Otterize OSS can report information needed to visualize the cluster."),(0,o.kt)("p",null,"The credentials will already be inlined into the Helm command shown in the Cloud UI, so you just need to copy that line and run it from your shell.\nIf you don't give it the Cloud credentials, Otterize OSS will run fully standalone in your cluster ","\u2014"," you just won't have the visualization in Otterize Cloud."),(0,o.kt)("p",null,'The Helm command shown in the Cloud UI also includes flags to turn off enforcement: Otterize OSS will be running in "shadow mode," meaning that it will show you what ',(0,o.kt)("strong",{parentName:"p"},"would")," happen if it created network policies to restrict pod-to-pod traffic, and created Kafka ACLs to control access to Kafka topics. While that's useful for gradually rolling out IBAC, for this tutorial we go straight to active enforcement."))),(0,o.kt)("h2",{id:"install-and-configure-istio"},"Install and configure Istio"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Install Istio in the cluster via Helm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add istio https://istio-release.storage.googleapis.com/charts\nhelm repo update\nhelm install istio-base istio/base -n istio-system --create-namespace\nhelm install istiod istio/istiod -n istio-system --wait\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Add HTTP methods and request paths to Istio exported metrics"),(0,o.kt)("p",null,"Apply this configuration in the ",(0,o.kt)("inlineCode",{parentName:"p"},"istio-system")," namespace, propagating it to all namespaces covered by the mesh."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl apply -f https://docs.otterize.com/code-examples/network-mapper/istio-telemetry-enablement.yaml -n istio-system\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: telemetry.istio.io/v1alpha1\nkind: Telemetry\nmetadata:\n  name: mesh-default\n  namespace: istio-system\nspec:\n  accessLogging:\n    - providers:\n        - name: envoy\n  metrics:\n    - providers:\n        - name: prometheus\n      overrides:\n        - tagOverrides:\n            request_method:\n              value: request.method\n            request_path:\n              value: request.path\n"))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"HTTP request paths and methods aren't exported in Envoy's connection metrics by default, but we do want to capture those\ndetails when creating the network map. That way we not only have better visibility of the calling patterns,\ne.g. in the access graph, but we can also use that information to automatically generate fine-grained intents and\nenforce them with Istio authorization policies.")),(0,o.kt)("h2",{id:"deploy-the-two-clients-and-the-server"},"Deploy the two clients and the server"),(0,o.kt)("p",null,"Deploy a simple example consisting of ",(0,o.kt)("inlineCode",{parentName:"p"},"client")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"other-client")," calling ",(0,o.kt)("inlineCode",{parentName:"p"},"nginx")," over HTTP:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -n otterize-tutorial-istio -f https://docs.otterize.com/code-examples/istio-authorization-policies/all.yaml\n")),(0,o.kt)("h2",{id:"apply-intents"},"Apply intents"),(0,o.kt)("p",null,"We will now declare that the ",(0,o.kt)("strong",{parentName:"p"},"client")," intends to call the ",(0,o.kt)("strong",{parentName:"p"},"server")," at a particular HTTP path using a specific HTTP method."),(0,o.kt)("p",null,"When the intents YAML is applied, creating a custom resource of type ",(0,o.kt)("inlineCode",{parentName:"p"},"ClientIntents"),",\nOtterize will add an Istio authorization policy to allow the intended call\n(",(0,o.kt)("strong",{parentName:"p"},"client")," ","\u2192"," ",(0,o.kt)("strong",{parentName:"p"},"server")," with the declared path and method) and block all unintended calls (e.g., ",(0,o.kt)("strong",{parentName:"p"},"client-other")," ","\u2192"," ",(0,o.kt)("strong",{parentName:"p"},"server"),")."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Here is the ",(0,o.kt)("inlineCode",{parentName:"li"},"intents.yaml")," declaration of the client, which we will apply below:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha2\nkind: ClientIntents\nmetadata:\n  name: client\n  namespace: otterize-tutorial-istio\nspec:\n  service:\n    name: client\n  calls:\n    - name: nginx\n      type: http\n      resources:\n        - path: /client-path\n          methods: [ GET ]\n")),(0,o.kt)("h3",{id:"see-it-in-action"},"See it in action"),(0,o.kt)("p",null,"Keep an eye on the logs being tailed in the ",(0,o.kt)("strong",{parentName:"p"},"[client-other]")," terminal window,\nand apply this ",(0,o.kt)("inlineCode",{parentName:"p"},"intents.yaml")," file in your ",(0,o.kt)("strong",{parentName:"p"},"main terminal window")," using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://docs.otterize.com/code-examples/istio-authorization-policies/intents.yaml\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Client intents are the cornerstone of ",(0,o.kt)("a",{parentName:"p",href:"https://otterize.com/ibac"},"intent-based access control (IBAC)"),".")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"You should quickly see in the ",(0,o.kt)("strong",{parentName:"li"},"[client-other]")," terminal that it times out when calling the server,\nas expected since it didn't declare its intents:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Calling server...\nHTTP/1.1 200 OK\n...\nhello from /other-client-path  # <- before applying the intents file\n# highlight-start\nCalling server...              # <- after applying the intents file\nRBAC: access denied\nCalling server...\nRBAC: access denied\n# highlight-end\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"And in the ",(0,o.kt)("strong",{parentName:"li"},"[client]")," terminal you should see that calls go through, as expected since they were declared:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Calling server...\nHTTP/1.1 200 OK\n...\nhello from /client-path\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"You should also see that a new Istio authorization policy was created:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get authorizationpolicies.security.istio.io -n otterize-tutorial-istio\n")),(0,o.kt)("p",null,"This should return:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NAME                                                                AGE\nauthorization-policy-to-nginx-from-client.otterize-tutorial-istio   6s\n")),(0,o.kt)("p",null,"If you've attached Otterize OSS to Otterize Cloud, go back to see the ",(0,o.kt)("a",{parentName:"p",href:"https://app.otterize.com"},"access graph in your browser"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Access graph",src:n(1404).Z,width:"1625",height:"1327"})),(0,o.kt)("p",null,"And upon clicking the green arrow:\n",(0,o.kt)("img",{alt:"Access graph",src:n(6787).Z,width:"1625",height:"1327"})),(0,o.kt)("p",null,"It's now clear what happened:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The server is now protected, and is also blocking some of its clients. Click on it and go to focus mode, to see what's allowed and how to unblock any blocked clients (if desired)."),(0,o.kt)("li",{parentName:"ol"},"Calls from ",(0,o.kt)("strong",{parentName:"li"},"[client]")," ","\u2192"," ",(0,o.kt)("strong",{parentName:"li"},"[nginx]")," are declared and therefore allowed (solid green arrow)."),(0,o.kt)("li",{parentName:"ol"},"Calls from ",(0,o.kt)("strong",{parentName:"li"},"[client-other]")," ","\u2192"," ",(0,o.kt)("strong",{parentName:"li"},"[nginx]")," are not declared and therefore blocked (dashed red arrow). Click on the arrow to see what to do about it.")),(0,o.kt)("admonition",{title:"Done!",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Otterize did its job of both protecting the server ",(0,o.kt)("em",{parentName:"p"},"and")," allowing intended access.")),(0,o.kt)("h2",{id:"what-did-we-accomplish"},"What did we accomplish?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Controlling access through Istio authorization policies no longer means touching authorization policies at all.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The server is now protected, and can be accessed only by clients which declared their intents, authenticated via mTLS connection with specific certificates.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Clients simply declare what they need to access with their intents files.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The next ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl apply")," ensures that authorization policies automatically reflect the most recent intended pod-to-pod access."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand to see what happened behind the scenes"),(0,o.kt)("p",null,"Otterize generated a specific Istio authorization policy on the ingress of the pod of the server, allowing the server to\nbe accessed by the pod of the client, based on that client's declared intent. Otterize uses labels to define the authorization policy and associate it\nwith a server in a namespace, and uses service accounts to identify clients, as Istio requires. This happens as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The server's pod is given a label ",(0,o.kt)("inlineCode",{parentName:"li"},"intents.otterize.com/server")," whose value uniquely represents that server.\nThe Istio authorization policy stipulates that it applies to the ingress of server pods with this label."),(0,o.kt)("li",{parentName:"ol"},"The client's service account is looked up through its pod, and used in the policy.\nThe authorization policy stipulates that only services with this service account can access the server.\nIn the event that the service account is shared by multiple services, an Event is placed on the ClientIntent to warn about this, which is also picked up as a warning in Otterize Cloud, if connected.")),(0,o.kt)("p",null,"Otterize saved us from doing all this work: by simply declaring the client's intents in ",(0,o.kt)("inlineCode",{parentName:"p"},"intents.yaml"),",\nall the appropriate configuration was managed automatically behind the scenes."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/reference/configuration/intents-operator#istio-authorizationpolicy"},"Learn more about Istio authorization policies and Otterize"),".")),(0,o.kt)("admonition",{title:"Bonus tutorial",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Try to create an intents file yourself for ",(0,o.kt)("strong",{parentName:"p"},"client-other"),", and apply it to allow this other client to call the server.")),(0,o.kt)("h2",{id:"whats-next"},"What's next"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Get started with the ",(0,o.kt)("a",{parentName:"li",href:"/quick-tutorials/k8s-istio-watcher"},"Otterize network mapper for Istio")," to help you bootstrap intents files with HTTP resources\nfor use in ",(0,o.kt)("a",{parentName:"li",href:"https://otterize.com/ibac"},"intent-based access control (IBAC)"),"."),(0,o.kt)("li",{parentName:"ul"},"See in advance what calls will be allowed or blocked, by running Otterize in ",(0,o.kt)("strong",{parentName:"li"},"shadow mode")," ","\u2014"," just follow the ",(0,o.kt)("a",{parentName:"li",href:"/quick-visual-tutorials/visual-ibac-istio-authorization-policies"},"quick visual tutorial for IBAC with Istio authorization policies"),"."),(0,o.kt)("li",{parentName:"ul"},"Learn how to easily secure Kafka with IBAC, in ",(0,o.kt)("a",{parentName:"li",href:"/quick-tutorials/k8s-kafka-mtls"},"a hands-on tutorial")," or ",(0,o.kt)("a",{parentName:"li",href:"/quick-visual-tutorials/visual-ibac-kafka-k8s"},"a more visual tutorial"),".")),(0,o.kt)("h2",{id:"teardown"},"Teardown"),(0,o.kt)("p",null,"To remove Istio and the deployed examples run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm uninstall istio-base -n istio-system\nkubectl delete namespace otterize-tutorial-istio\n")))}h.isMDXComponent=!0},6787:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/protected-edge-a95831eba050c20d40d1d819b289b42e.png"},1404:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/protected-62a7ac10912048146c0f4e23e1f96112.png"}}]);