"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[498],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),k=l,d=m["".concat(s,".").concat(k)]||m[k]||u[k]||r;return a?n.createElement(d,o(o({ref:t},c),{},{components:a})):n.createElement(d,o({ref:t},c))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a(7462),l=a(7294),r=a(6010),o=a(2389),i=a(7392),s=a(7094),p=a(2466);const c="tabList__CuJ",u="tabItem_LNqP";function m(e){var t,a;const{lazy:o,block:m,defaultValue:k,values:d,groupId:h,className:f}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),w=(0,i.l)(b,((e,t)=>e.value===t.value));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===k?k:null!=(t=null!=k?k:null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)?t:g[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:v}=(0,s.U)(),[C,z]=(0,l.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=h){const e=N[h];null!=e&&e!==C&&b.some((t=>t.value===e))&&z(e)}const E=e=>{const t=e.currentTarget,a=T.indexOf(t),n=b[a].value;n!==C&&(x(t),z(n),null!=h&&v(h,String(n)))},I=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=T.indexOf(e.currentTarget)+1;a=null!=(n=T[t])?n:T[0];break}case"ArrowLeft":{var l;const t=T.indexOf(e.currentTarget)-1;a=null!=(l=T[t])?l:T[T.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},f)},b.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>T.push(e),onKeyDown:I,onFocus:E,onClick:E},o,{className:(0,r.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),o?(0,l.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function k(e){const t=(0,o.Z)();return l.createElement(m,(0,n.Z)({key:String(t)},e))}},2199:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=a(7462),l=(a(7294),a(3905)),r=a(5488),o=a(5162);const i={sidebar_position:3,title:"Map your cluster"},s=void 0,p={unversionedId:"quick-tutorials/k8s-network-mapper",id:"quick-tutorials/k8s-network-mapper",title:"Map your cluster",description:"The network mapper allows you to map pod-to-pod traffic within your K8s cluster.",source:"@site/docs/quick-tutorials/k8s-network-mapper.mdx",sourceDirName:"quick-tutorials",slug:"/quick-tutorials/k8s-network-mapper",permalink:"/quick-tutorials/k8s-network-mapper",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/quick-tutorials/k8s-network-mapper.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Map your cluster"},sidebar:"docSidebar",previous:{title:"Automate network policies",permalink:"/quick-tutorials/k8s-network-policies"},next:{title:"Automate secure Kafka access",permalink:"/quick-tutorials/k8s-kafka-mtls"}},c={},u=[{value:"Map the cluster",id:"map-the-cluster",level:2},{value:"Deploy demo to simulate traffic",id:"deploy-demo-to-simulate-traffic",level:3},{value:"Show mapped traffic",id:"show-mapped-traffic",level:3},{value:"Visualize using the access graph (Cloud)",id:"visualize-using-the-access-graph-cloud",level:3},{value:"What&#39;s next",id:"whats-next",level:2},{value:"Teardown",id:"teardown",level:3}],m={toc:u};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The network mapper allows you to map pod-to-pod traffic within your K8s cluster."),(0,l.kt)("p",null,"In this tutorial, we will:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Deploy a server, and two clients calling it."),(0,l.kt)("li",{parentName:"ul"},"Map their communication using the network mapper.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Make sure you have a Kubernetes cluster"),(0,l.kt)("p",null,"Before you start, you need to have a Kubernetes cluster. Having a cluster with a ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/"},"CNI")," that supports ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/network-policies/"},"NetworkPolicies")," isn't required for this tutorial, but is recommended so that your cluster works with other tutorials."),(0,l.kt)("p",null,"Below are instructions for setting up a cluster with network policies.\nIf you don't have a cluster already, we recommend starting out with a Minikube cluster."),(0,l.kt)(r.Z,{groupId:"cni",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minikube",label:"Minikube",mdxType:"TabItem"},"Start your Minikube cluster. ",(0,l.kt)("a",{href:"https://minikube.sigs.k8s.io/docs/start/"},"Don't have the Minikube CLI? Read the installation instructions"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"minikube start --network-plugin=cni\n")),(0,l.kt)("p",null,"Install Calico:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/projectcalico/calico/v3.24.1/manifests/calico.yaml\n"))),(0,l.kt)(o.Z,{value:"gke",label:"Google GKE",mdxType:"TabItem"},(0,l.kt)("a",{href:"https://cloud.google.com/kubernetes-engine/docs/how-to/network-policy#gcloud"},"Visit the official documentation"),", or follow the instructions below:",(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"cli",label:"gcloud CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"To use the gcloud CLI for this tutorial, ",(0,l.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/install"},"install")," and then\n",(0,l.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/initializing"},"initialize")," it."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"To enable network policy enforcement when creating a new cluster, run the following command:"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"gcloud container clusters create CLUSTER_NAME --enable-network-policy --zone=ZONE"),"\nReplace CLUSTER_NAME with the name of the new cluster."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"To enable network policy enforcement for an existing cluster, perform the following tasks:"))),(0,l.kt)("p",null,"Run the following command to enable the add-on:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"gcloud container clusters update CLUSTER_NAME --update-addons=NetworkPolicy=ENABLED"),"\nReplace CLUSTER_NAME with the name of the cluster."),(0,l.kt)("p",null,"Run the following command to enable network policy enforcement on your cluster, which in turn re-creates your cluster's node pools with network policy enforcement enabled:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"gcloud container clusters update CLUSTER_NAME --enable-network-policy"))),(0,l.kt)(o.Z,{value:"console",label:"Console",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"To enable network policy enforcement when creating a new cluster:"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Go to the Google Kubernetes Engine page in the Google Cloud console.\nThe remaining steps will appear automatically in the Google Cloud console.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"On the Google Kubernetes Engine page, click Create.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Configure your cluster as desired.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"From the navigation pane, under Cluster, click Networking.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the checkbox to Enable network policy.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click Create."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"To enable network policy enforcement for an existing cluster:"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Go to the Google Kubernetes Engine page in the Google Cloud console. The remaining steps will appear automatically in the Google Cloud console.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In the cluster list, click the name of the cluster you want to modify.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Under Networking, in the Network policy field, click Edit network policy.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the checkbox to Enable network policy for master and click Save Changes.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Wait for your changes to apply, and then click Edit network policy again.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the checkbox to Enable network policy for nodes.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click Save Changes.")))))),(0,l.kt)(o.Z,{value:"eks",label:"AWS EKS",mdxType:"TabItem"},(0,l.kt)("a",{href:"https://docs.aws.amazon.com/eks/latest/userguide/calico.html"},"Visit the official documentation"),", or follow the instructions below:",(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Spin up an ",(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html"},"EKS cluster")," using the console, AWS CLI or ",(0,l.kt)("inlineCode",{parentName:"li"},"eksctl"),"."),(0,l.kt)("li",{parentName:"ol"},"Install Calico for NetworkPolicy enforcement, without replacing the CNI:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/aws/amazon-vpc-cni-k8s/master/config/master/calico-operator.yaml\nkubectl apply -f https://raw.githubusercontent.com/aws/amazon-vpc-cni-k8s/master/config/master/calico-crs.yaml\n"))),(0,l.kt)(o.Z,{value:"aks",label:"Azure AKS",mdxType:"TabItem"},(0,l.kt)("p",null,"You can set up an AKS cluster using this ",(0,l.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-cli"},"guide"),"."),(0,l.kt)("p",null,"For network policy support, no setup is required: Azure AKS comes with a built-in network policy implementation called Azure Network Policy Manager. You choose whether you'd like to use this option or Calico when you create a cluster."),(0,l.kt)("a",{href:"https://learn.microsoft.com/en-us/azure/aks/use-network-policies"}," Read more at the official documentation site"),"."))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Install Otterize on your cluster"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"You can skip this section if Otterize is already installed in your cluster.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add otterize https://helm.otterize.com\nhelm repo update\nhelm install otterize otterize/otterize-kubernetes -n otterize-system --create-namespace\n")),(0,l.kt)("p",null,"This chart is a bundle of the Otterize intents operator, Otterize credentials operator, Otterize network mapper, and SPIRE.\nInitial deployment may take a couple of minutes.\nYou can add the ",(0,l.kt)("inlineCode",{parentName:"p"},"--wait")," flag for Helm to wait for deployment to complete and all pods to be Ready, or manually watch for all pods to be ",(0,l.kt)("inlineCode",{parentName:"p"},"Ready")," using ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n otterize-system -w"),".")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Connect to Otterize Cloud (optional)"),"Upgrade/install your Otterize OSS deployment using the *client id* and *client secret* generated for your integration.",(0,l.kt)("p",null,"Set ",(0,l.kt)("em",{parentName:"p"},"client id")," and ",(0,l.kt)("em",{parentName:"p"},"client secret")," to your values and run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm upgrade --install otterize otterize/otterize-kubernetes \\\n-n otterize-system --create-namespace \\\n--set global.otterizeCloud.credentials.clientId=client_id \\\n--set global.otterizeCloud.credentials.clientSecret=client_secret \\\n--set credentialsOperator.useOtterizeCloud=true\n")),(0,l.kt)("p",null,"For detailed instructions follow this ",(0,l.kt)("a",{parentName:"p",href:"/installation#connect-otterize-oss-to-otterize-cloud"},"guide"))),(0,l.kt)("h2",{id:"map-the-cluster"},"Map the cluster"),(0,l.kt)("p",null,"The network mapper starts to sniff traffic and build an in-memory network map as soon as it's installed.\nThe Otterize CLI allows you to interact with the network mapper to grab a snapshot of current mapped traffic,\nreset its state and more. For a complete list of the CLI capabilities read the ",(0,l.kt)("a",{parentName:"p",href:"/reference/cli/#network-mapper"},"CLI command reference"),".\nOtterize Cloud allows you to visualize that data in the ",(0,l.kt)("a",{parentName:"p",href:"https://app.otterize.com"},"access graph"),"."),(0,l.kt)("h3",{id:"deploy-demo-to-simulate-traffic"},"Deploy demo to simulate traffic"),(0,l.kt)("p",null,"Let's add traffic to the cluster and see how the network mapper tracks it.\nDeploy the following simple example ","\u2014"," ",(0,l.kt)("inlineCode",{parentName:"p"},"client"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"client2")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"server"),", communicating over HTTP:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -n otterize-tutorial-mapper -f https://docs.otterize.com/code-examples/network-mapper/all.yaml\n")),(0,l.kt)("h3",{id:"show-mapped-traffic"},"Show mapped traffic"),(0,l.kt)("p",null,"You can view mapped traffic by calling the CLI ",(0,l.kt)("inlineCode",{parentName:"p"},"list")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"export")," commands.\nThe latter supports multiple output formats, namely ",(0,l.kt)("inlineCode",{parentName:"p"},"intents")," (client intents files) and ",(0,l.kt)("inlineCode",{parentName:"p"},"json"),".\nThe following shows the CLI output filtered for the namespace (",(0,l.kt)("inlineCode",{parentName:"p"},"otterize-tutorial-mapper"),")\nof the example above."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"list",label:"List",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'List the pod-to-pod network map built up ("sniffed") so far:'),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"otterize network-mapper list -n otterize-tutorial-mapper\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"For the simple example above, you should see:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"client in namespace otterize-tutorial-mapper calls:\n  - server\nclient2 in namespace otterize-tutorial-mapper calls:\n  - server\n"))))),(0,l.kt)(o.Z,{value:"intents",label:"Export as intents",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Export as YAML client intents (the default format) the pod-to-pod network map built up so far:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"otterize network-mapper export -n otterize-tutorial-mapper\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"For the simple example above, you should see (concatenated into one YAML file):"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.k8s.otterize.com/v1\nkind: ClientIntents\nmetadata:\n  name: client\n  namespace: otterize-tutorial-mapper\nspec:\n  service:\n    name: client\n  calls:\n    - name: server\n---\napiVersion: k8s.k8s.otterize.com/v1\nkind: ClientIntents\nmetadata:\n  name: server\n  namespace: otterize-tutorial-mapper\nspec:\n  service:\n    name: client2\n  calls:\n    - name: server\n"))))),(0,l.kt)(o.Z,{value:"json",label:"Export as JSON",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Export as JSON the pod-to-pod network map built up so far:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"otterize network-mapper export -n otterize-tutorial-mapper --format json\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"For the simple example above, you should see:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "kind": "ClientIntents",\n    "apiVersion": "k8s.otterize.com/v1alpha2",\n    "metadata": {\n      "name": "client",\n      "namespace": "otterize-tutorial-mapper"\n    },\n    "spec": {\n      "service": {\n        "name": "client"\n      },\n      "calls": [\n        {\n          "name": "server"\n        }\n      ]\n    }\n  },\n  {\n    "kind": "ClientIntents",\n    "apiVersion": "k8s.otterize.com/v1alpha2",\n    "metadata": {\n      "name": "client",\n      "namespace": "otterize-tutorial-mapper"\n    },\n    "spec": {\n      "service": {\n        "name": "client"\n      },\n      "calls": [\n        {\n          "name": "server"\n        }\n      ]\n    }\n  }\n]\n')))))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"See the ",(0,l.kt)("a",{parentName:"p",href:"/reference/cli"},"CLI documentation")," for more details about the CLI.")),(0,l.kt)("h3",{id:"visualize-using-the-access-graph-cloud"},"Visualize using the access graph (Cloud)"),(0,l.kt)("p",null,"You can visualize mapped traffic with the ",(0,l.kt)("a",{parentName:"p",href:"https://app.staging.otterize.com/access-graph"},"access graph")," on Otterize Cloud."),(0,l.kt)("img",{src:"/img/quick-tutorials/network-mapper/map.png",alt:"Discovered intents",width:"600"}),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Learn more about ",(0,l.kt)("a",{parentName:"p",href:"/realistic-example/shadow-mode-network-policies"},"Shadow mode")," to see how the access graph can be used for gradually rolling out intents.")),(0,l.kt)("h2",{id:"whats-next"},"What's next"),(0,l.kt)("p",null,"The network mapper is a great way to bootstrap IBAC. It generates client intents files that reflect\nthe current topology of your services; those can then be used by each client team to grant them easy\nand ",(0,l.kt)("em",{parentName:"p"},"secure")," access to the services they need, and as their needs evolve, they need only evolve\nthe intents files. We'll see more of that below."),(0,l.kt)("p",null,"Where to go next?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If you haven't already, see the ","[automate network policies tutorial]","((/quick-tutorials/k8s-network-policies)."),(0,l.kt)("li",{parentName:"ul"},"Or go to the next tutorial to ",(0,l.kt)("a",{parentName:"li",href:"/quick-tutorials/k8s-kafka-mtls"},"automate secure access for Kafka"),"."),(0,l.kt)("li",{parentName:"ul"},"Explore how ",(0,l.kt)("a",{parentName:"li",href:"/realistic-example/shadow-mode-network-policies"},"Shadow Mode")," can expand these capabilities.")),(0,l.kt)("h3",{id:"teardown"},"Teardown"),(0,l.kt)("p",null,"To remove the deployed examples run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete namespace otterize-tutorial-mapper\n")))}k.isMDXComponent=!0}}]);