"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[516],{5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),l=n(6010);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,r),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),l=n(7294),o=n(6010),r=n(2389),i=n(7392),s=n(7094),c=n(2466);const p="tabList__CuJ",u="tabItem_LNqP";function d(e){var t,n;const{lazy:r,block:d,defaultValue:m,values:k,groupId:h,className:g}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=k?k:b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,i.l)(w,((e,t)=>e.value===t.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===m?m:null!=(t=null!=m?m:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==v&&!w.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+w.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[z,T]=(0,l.useState)(v),C=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=h){const e=y[h];null!=e&&e!==z&&w.some((t=>t.value===e))&&T(e)}const S=e=>{const t=e.currentTarget,n=C.indexOf(t),a=w[n].value;a!==z&&(x(t),T(a),null!=h&&N(h,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=C.indexOf(e.currentTarget)+1;n=null!=(a=C[t])?a:C[0];break}case"ArrowLeft":{var l;const t=C.indexOf(e.currentTarget)-1;n=null!=(l=C[t])?l:C[C.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},g)},w.map((e=>{let{value:t,label:n,attributes:r}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:z===t?0:-1,"aria-selected":z===t,key:t,ref:e=>C.push(e),onKeyDown:I,onFocus:S,onClick:S},r,{className:(0,o.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":z===t})}),null!=n?n:t)}))),r?(0,l.cloneElement)(b.filter((e=>e.props.value===z))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==z})))))}function m(e){const t=(0,r.Z)();return l.createElement(d,(0,a.Z)({key:String(t)},e))}},2257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=n(7462),l=(n(7294),n(3905)),o=(n(814),n(5488)),r=n(5162);const i={sidebar_position:1,title:"Shadow mode - network policies"},s=void 0,c={unversionedId:"realistic-example/shadow-mode-network-policies",id:"realistic-example/shadow-mode-network-policies",title:"Shadow mode - network policies",description:"Otterize Cloud extends the capabilities of Otterize OSS. It lets you visualize discovered communication within your cluster using the access graph, apply intents and see what will happen to communication between your workloads before enforcing shadow mode, and gain real-time insights into how to roll out network policies.",source:"@site/docs/realistic-example/shadow-mode-network-policies.mdx",sourceDirName:"realistic-example",slug:"/realistic-example/shadow-mode-network-policies",permalink:"/realistic-example/shadow-mode-network-policies",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/realistic-example/shadow-mode-network-policies.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Shadow mode - network policies"},sidebar:"docSidebar",previous:{title:"Deploy mTLS between pods",permalink:"/quick-tutorials/k8s-mtls"},next:{title:"Access graph - Kafka",permalink:"/realistic-example/visualize-kafka-protection"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deploy the reference lab",id:"deploy-the-reference-lab",level:2},{value:"Map the cluster",id:"map-the-cluster",level:2},{value:"Try out IBAC with shadow mode",id:"try-out-ibac-with-shadow-mode",level:2},{value:"Declare more intents",id:"declare-more-intents",level:3},{value:"Protect everything easily",id:"protect-everything-easily",level:3},{value:"Enable enforcement",id:"enable-enforcement",level:2},{value:"Browse the lab",id:"browse-the-lab",level:3},{value:"Inspect the access graph",id:"inspect-the-access-graph",level:3},{value:"What&#39;s next",id:"whats-next",level:2},{value:"Teardown",id:"teardown",level:2}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Otterize Cloud extends the capabilities of Otterize OSS. It lets you visualize discovered communication within your cluster using the access graph, apply intents and see what will happen to communication between your workloads before enforcing shadow mode, and gain real-time insights into how to roll out network policies."),(0,l.kt)("p",null,"In this tutorial, we will:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Deploy a demo reference lab,\nwhich is based on the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/GoogleCloudPlatform/microservices-demo"},"Google microservices demo"),"\nsimulating an e-commerce application."),(0,l.kt)("li",{parentName:"ul"},"Use the access graph and Shadow mode in tandem with intents to see how Otterize can help in gradually rolling out secure access.")),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Prepare a cluster that supports network policies"),(0,l.kt)("p",null,"Before you start, you need a Kubernetes cluster with a ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/"},"CNI")," that supports ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/network-policies/"},"NetworkPolicies"),"."),(0,l.kt)("p",null,"Below are instructions for setting up a cluster with network policies.\nIf you don't have a cluster already, we recommend starting out with a Minikube cluster."),(0,l.kt)(o.Z,{groupId:"cni",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"minikube",label:"Minikube",mdxType:"TabItem"},"Start your Minikube cluster. ",(0,l.kt)("a",{href:"https://minikube.sigs.k8s.io/docs/start/"},"Don't have the Minikube CLI? Read the installation instructions"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"minikube start --network-plugin=cni\n")),(0,l.kt)("p",null,"Install Calico:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/projectcalico/calico/v3.24.1/manifests/calico.yaml\n"))),(0,l.kt)(r.Z,{value:"gke",label:"Google GKE",mdxType:"TabItem"},(0,l.kt)("a",{href:"https://cloud.google.com/kubernetes-engine/docs/how-to/network-policy#gcloud"},"Visit the official documentation"),", or follow the instructions below:",(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"cli",label:"gcloud CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"To use the gcloud CLI for this tutorial, ",(0,l.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/install"},"install")," and then\n",(0,l.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/initializing"},"initialize")," it."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"To enable network policy enforcement when creating a new cluster, run the following command:"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"gcloud container clusters create CLUSTER_NAME --enable-network-policy --zone=ZONE"),"\nReplace CLUSTER_NAME with the name of the new cluster."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"To enable network policy enforcement for an existing cluster, perform the following tasks:"))),(0,l.kt)("p",null,"Run the following command to enable the add-on:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"gcloud container clusters update CLUSTER_NAME --update-addons=NetworkPolicy=ENABLED"),"\nReplace CLUSTER_NAME with the name of the cluster."),(0,l.kt)("p",null,"Run the following command to enable network policy enforcement on your cluster, which in turn re-creates your cluster's node pools with network policy enforcement enabled:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"gcloud container clusters update CLUSTER_NAME --enable-network-policy"))),(0,l.kt)(r.Z,{value:"console",label:"Console",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"To enable network policy enforcement when creating a new cluster:"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Go to the Google Kubernetes Engine page in the Google Cloud console.\nThe remaining steps will appear automatically in the Google Cloud console.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"On the Google Kubernetes Engine page, click Create.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Configure your cluster as desired.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"From the navigation pane, under Cluster, click Networking.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the checkbox to Enable network policy.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click Create."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"To enable network policy enforcement for an existing cluster:"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Go to the Google Kubernetes Engine page in the Google Cloud console. The remaining steps will appear automatically in the Google Cloud console.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In the cluster list, click the name of the cluster you want to modify.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Under Networking, in the Network policy field, click Edit network policy.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the checkbox to Enable network policy for master and click Save Changes.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Wait for your changes to apply, and then click Edit network policy again.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the checkbox to Enable network policy for nodes.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click Save Changes.")))))),(0,l.kt)(r.Z,{value:"eks",label:"AWS EKS",mdxType:"TabItem"},(0,l.kt)("a",{href:"https://docs.aws.amazon.com/eks/latest/userguide/calico.html"},"Visit the official documentation"),", or follow the instructions below:",(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Spin up an ",(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html"},"EKS cluster")," using the console, AWS CLI or ",(0,l.kt)("inlineCode",{parentName:"li"},"eksctl"),"."),(0,l.kt)("li",{parentName:"ol"},"Install Calico for NetworkPolicy enforcement, without replacing the CNI:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/aws/amazon-vpc-cni-k8s/master/config/master/calico-operator.yaml\nkubectl apply -f https://raw.githubusercontent.com/aws/amazon-vpc-cni-k8s/master/config/master/calico-crs.yaml\n"))),(0,l.kt)(r.Z,{value:"aks",label:"Azure AKS",mdxType:"TabItem"},(0,l.kt)("p",null,"You can set up an AKS cluster using this ",(0,l.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-cli"},"guide"),"."),(0,l.kt)("p",null,"For network policy support, no setup is required: Azure AKS comes with a built-in network policy implementation called Azure Network Policy Manager. You choose whether you'd like to use this option or Calico when you create a cluster."),(0,l.kt)("a",{href:"https://learn.microsoft.com/en-us/azure/aks/use-network-policies"}," Read more at the official documentation site"),"."))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Integrate Otterize Cloud with your cluster (enforcement=false)"),(0,l.kt)("p",null,"Set ",(0,l.kt)("em",{parentName:"p"},"client id")," and ",(0,l.kt)("em",{parentName:"p"},"client secret")," to your values and run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm upgrade --install otterize otterize/otterize-kubernetes \\\n-n otterize-system --create-namespace \\\n--set global.otterizeCloud.credentials.clientId=client_id \\\n--set global.otterizeCloud.credentials.clientSecret=client_secret \\\n--set intentsOperator.operator.enableEnforcement=false \\\n--set credentialsOperator.useOtterizeCloud=true\n"))),(0,l.kt)("h2",{id:"deploy-the-reference-lab"},"Deploy the reference lab"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create namespace otterize-ecom-demo\nkubectl apply -n otterize-ecom-demo -f https://docs.otterize.com/code-examples/shadow-mode/ecom-demo.yaml\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Optional: check that the lab was deployed..."),(0,l.kt)("div",null,(0,l.kt)("p",null,"To see all the pods in the lab:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n otterize-ecom-demo\n")),(0,l.kt)("p",null,"The pods should all be ready and running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                     READY   STATUS    RESTARTS      AGE\nadservice-65494cbb9d-5lrv6               1/1     Running   0             115s\ncartservice-6d84fc45bb-hdtwn             1/1     Running   0             115s\ncheckoutservice-5599486df-dvj9n          1/1     Running   3 (79s ago)   115s\ncurrencyservice-6d64686d74-lxb7x         1/1     Running   0             115s\nemailservice-7c6cbfbbd7-xjxlt            1/1     Running   0             115s\nfrontend-f9448d7d4-6dmnr                 1/1     Running   0             115s\nkafka-0                                  1/1     Running   2 (83s ago)   115s\nloadgenerator-7f6987f59-bchgm            1/1     Running   0             114s\norderservice-7ffdbf6df-wzzfd             1/1     Running   0             115s\notterize-ecom-demo-zookeeper-0           1/1     Running   0             115s\npaymentservice-86855d78db-zjjfn          1/1     Running   0             115s\nproductcatalogservice-5944c7f666-2rjc6   1/1     Running   0             115s\nrecommendationservice-6c8d848498-zm2rm   1/1     Running   0             114s\nredis-cart-6b79c5b497-xpms2              1/1     Running   0             115s\nshippingservice-85694cb9bd-v54xp         1/1     Running   0             114s\n")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Optional: Browse the lab"),(0,l.kt)(o.Z,{groupId:"frontend-addr",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"k8s",label:"K8s",mdxType:"TabItem"},(0,l.kt)("p",null,"To get the externally-accessible URL where your demo front end is available, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get service -n otterize-ecom-demo frontend-external | awk '{print $4}'\n")),(0,l.kt)("p",null,"The result should be similar to (if running on AWS EKS):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"a11843075fd254f8099a986467098647-1889474685.us-east-1.elb.amazonaws.com\n")),(0,l.kt)("p",null,'Go ahead and browse to the URL above to "shop" and get a feel for the reference lab\'s behavior.\n(The URL might take some time to populate across DNS servers. Note that we are accessing an HTTP and not an HTTPS website.)')),(0,l.kt)(r.Z,{value:"minikube",label:"Minikube",mdxType:"TabItem"},(0,l.kt)("p",null,"To get the externally-accessible URL where your demo front end is available, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl port-forward -n otterize-ecom-demo service/frontend-external 8080:80 &\n")),(0,l.kt)("p",null,"The demo is now accessible at:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"http://localhost:8080\n")),(0,l.kt)("p",null,'Go ahead and browse to the URL above to "shop" and get a feel for the reference lab\'s behavior.')))),(0,l.kt)("h2",{id:"map-the-cluster"},"Map the cluster"),(0,l.kt)("p",null,"Locate your deployment in the ",(0,l.kt)("a",{parentName:"p",href:"https://app.otterize.com/access-graph"},"access graph"),". You should see the following map for the deployed lab."),(0,l.kt)("img",{src:"/img/quick-tutorials/shadow-mode/phase-0.png",alt:"Discovered intents",width:"600"}),(0,l.kt)("p",null,"The access graph allows you to quickly inspect your network, map services communication and prepare for gradual rollout using its ",(0,l.kt)("strong",{parentName:"p"},"shadow mode")," features."),(0,l.kt)("h2",{id:"try-out-ibac-with-shadow-mode"},"Try out IBAC with shadow mode"),(0,l.kt)("p",null,"Let\u2019s declare that the ",(0,l.kt)("inlineCode",{parentName:"p"},"frontend")," intends to call the ",(0,l.kt)("inlineCode",{parentName:"p"},"recommendationservice"),"."),(0,l.kt)("p",null,"We expect this will provide secure access, allowing the intended access from the ",(0,l.kt)("inlineCode",{parentName:"p"},"fronted")," while protecting the ",(0,l.kt)("inlineCode",{parentName:"p"},"recommendationservice")," from unintended access."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha2\nkind: ClientIntents\nmetadata:\n  name: frontend\nspec:\n  service:\n    name: frontend\n  calls:\n    - name: recommendationservice\n")),(0,l.kt)("p",null,"Apply this intents file with"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -n otterize-ecom-demo -f https://docs.otterize.com/code-examples/shadow-mode/phase-1.yaml\n")),(0,l.kt)("p",null,"Look at the access graph again:"),(0,l.kt)("img",{src:"/img/quick-tutorials/shadow-mode/phase-1.png",alt:"Discovered intents",width:"600"}),(0,l.kt)("p",null,"We\u2019re not enforcing access controls, but we can see the ",(0,l.kt)("inlineCode",{parentName:"p"},"frontend")," will still be able to call the ",(0,l.kt)("inlineCode",{parentName:"p"},"recommendationservice"),", and the latter would be protected from any other calls."),(0,l.kt)("h3",{id:"declare-more-intents"},"Declare more intents"),(0,l.kt)("p",null,"Let\u2019s add another intent, this time from ",(0,l.kt)("inlineCode",{parentName:"p"},"recommendationservice")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"productcatalogservice"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha2\nkind: ClientIntents\nmetadata:\n  name: recommendationservice\nspec:\n  service:\n    name: recommendationservice\n  calls:\n    - name: productcatalogservice\n")),(0,l.kt)("p",null,"Apply this intents file with"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -n otterize-ecom-demo -f https://docs.otterize.com/code-examples/shadow-mode/phase-2.yaml\n")),(0,l.kt)("p",null,"Look at the access graph again:"),(0,l.kt)("img",{src:"/img/quick-tutorials/shadow-mode/phase-2.png",alt:"Discovered intents",width:"600"}),(0,l.kt)("p",null,"What happened? The access graph is warning us that when we\u2019ll protect the ",(0,l.kt)("inlineCode",{parentName:"p"},"productcatalogservice"),", only the ",(0,l.kt)("inlineCode",{parentName:"p"},"recommendationservice")," will be able to reach it and the ",(0,l.kt)("inlineCode",{parentName:"p"},"frontend")," and the ",(0,l.kt)("inlineCode",{parentName:"p"},"checkoutservice")," will be blocked."),(0,l.kt)("p",null,"Let's add the required intents for the ",(0,l.kt)("inlineCode",{parentName:"p"},"checkoutservice")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"frontend"),"."),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"frontend",label:"frontend",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha2\nkind: ClientIntents\nmetadata:\n  name: frontend\nspec:\n  service:\n    name: frontend\n  calls:\n    - name: recommendationservice\n    - name: productcatalogservice\n\n"))),(0,l.kt)(r.Z,{value:"checkout-service",label:"checkout-service",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha2\nkind: ClientIntents\nmetadata:\n  name: checkoutservice\nspec:\n  service:\n    name: checkoutservice\n  calls:\n    - name: productcatalogservice\n\n")))),(0,l.kt)("p",null,"Apply these intents files with"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -n otterize-ecom-demo -f https://docs.otterize.com/code-examples/shadow-mode/phase-3.yaml\n")),(0,l.kt)("img",{src:"/img/quick-tutorials/shadow-mode/phase-3.png",alt:"Discovered intents",width:"600"}),(0,l.kt)("p",null,"We can see how to roll out IBAC gradually: pick a service to protect, make sure its clients declare intents to call it and apply. The access graph and shadow mode allow us to gain confidence by highlighting any required configuration changes."),(0,l.kt)("h3",{id:"protect-everything-easily"},"Protect everything easily"),(0,l.kt)("p",null,"Could we also bootstrap the whole cluster and protect it? Yes!"),(0,l.kt)("p",null,"You can use the Otterize CLI (",(0,l.kt)("a",{parentName:"p",href:"/installation#install-the-otterize-cli"},"Installation instructions"),") to export all discovered intents with the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"otterize network-mapper export -n otterize-ecom-demo --output-type dir --output intents\n")),(0,l.kt)("p",null,"And apply them"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f intents\n")),(0,l.kt)("p",null,"Or use our already generated intents with"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -n otterize-ecom-demo -f https://docs.otterize.com/code-examples/shadow-mode/all.yaml\n")),(0,l.kt)("p",null,"Look at the access graph again:"),(0,l.kt)("img",{src:"/img/quick-tutorials/shadow-mode/phase-4.png",alt:"Discovered intents",width:"600"}),(0,l.kt)("p",null,"Looks like everything is protected and nothing intended should be blocked."),(0,l.kt)("h2",{id:"enable-enforcement"},"Enable enforcement"),(0,l.kt)("p",null,"Otterize Cloud's shadow mode allowed us to gain confidence in the effects of\napplying network policies using client intents and we can move on to enabling enforcement."),(0,l.kt)("p",null,"Let's enable enforcement with"),(0,l.kt)("p",null,"Set ",(0,l.kt)("em",{parentName:"p"},"client id")," and ",(0,l.kt)("em",{parentName:"p"},"client secret")," to your values and run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm upgrade --install otterize otterize/otterize-kubernetes \\\n-n otterize-system --create-namespace \\\n--set global.otterizeCloud.credentials.clientId=client_id \\\n--set global.otterizeCloud.credentials.clientSecret=client_secret \\\n--set credentialsOperator.useOtterizeCloud=true\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"See generated network policies"),"Otterize automatically generated network policies according to your declared (and applied) intents.",(0,l.kt)("p",null,"To list all generated network policies run"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"get netpol -n otterize-ecom-demo\n")),(0,l.kt)("p",null,"let's inspect one of these network policies with"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get netpol -n otterize-ecom-demo access-to-recommendationservice-from-otterize-ecom-demo -o yaml\n")),(0,l.kt)("p",null,"And we will get the following output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: access-to-recommendationservice-from-otterize-ecom-demo\n  namespace: otterize-ecom-demo\n  ...\nspec:\n  ingress:\n  - from:\n    - namespaceSelector:\n        matchLabels:\n          intents.otterize.com/namespace-name: otterize-ecom-demo\n      podSelector:\n        matchLabels:\n          intents.otterize.com/access-recommendationservic-otterize-ecom-demo-850ad9: "true"\n  podSelector:\n    matchLabels:\n      intents.otterize.com/server: recommendationservic-otterize-ecom-demo-850ad9\n  policyTypes:\n  - Ingress\n'))),(0,l.kt)("h3",{id:"browse-the-lab"},"Browse the lab"),(0,l.kt)("p",null,"You can browse the lab using the browser to see it works as intended."),(0,l.kt)("h3",{id:"inspect-the-access-graph"},"Inspect the access graph"),(0,l.kt)("img",{src:"/img/quick-tutorials/shadow-mode/phase-5.png",alt:"Discovered intents",width:"600"}),(0,l.kt)("h2",{id:"whats-next"},"What's next"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Learn how to ",(0,l.kt)("a",{parentName:"li",href:"/realistic-example/visualize-kafka-protection"},"manage secure access for Kafka")," using the demo lab tutorial.")),(0,l.kt)("h2",{id:"teardown"},"Teardown"),(0,l.kt)("p",null,"To remove the deployed reference lab run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete -n otterize-ecom-demo -f https://docs.otterize.com/code-examples/shadow-mode/all.yaml\nkubectl delete -n otterize-ecom-demo -f https://docs.otterize.com/code-examples/shadow-mode/ecom-demo.yaml\nkubectl delete namespace otterize-ecom-demo\n")))}m.isMDXComponent=!0}}]);