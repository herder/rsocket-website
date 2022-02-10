"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[227],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>v});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=p(t),v=o,k=d["".concat(i,".").concat(v)]||d[v]||u[v]||s;return t?n.createElement(k,c(c({ref:r},l),{},{components:t})):n.createElement(k,c({ref:r},l))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,c=new Array(s);c[0]=d;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var p=2;p<s;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4152:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>p,toc:()=>l,default:()=>d});var n=t(7462),o=t(3366),s=(t(7294),t(3905)),c=["components"],a={slug:"/guides/rsocket-js/server/rsocket-tcp-server",title:"RSocketTCPServer - rsocket-js",sidebar_label:"TCP Server"},i=void 0,p={unversionedId:"guides/rsocket-js/server/rsocket-tcp-server",id:"guides/rsocket-js/server/rsocket-tcp-server",isDocsHomePage:!1,title:"RSocketTCPServer - rsocket-js",description:"Getting Started",source:"@site/content-docs/guides/rsocket-js/server/rsocket-tcp-server.mdx",sourceDirName:"guides/rsocket-js/server",slug:"/guides/rsocket-js/server/rsocket-tcp-server",permalink:"/guides/rsocket-js/server/rsocket-tcp-server",editUrl:"https://github.com/rsocket/rsocket-website/edit/master/content-docs/guides/rsocket-js/server/rsocket-tcp-server.mdx",tags:[],version:"current",lastUpdatedBy:"Kevin Viglucci",lastUpdatedAt:1644465247,formattedLastUpdatedAt:"2/10/2022",frontMatter:{slug:"/guides/rsocket-js/server/rsocket-tcp-server",title:"RSocketTCPServer - rsocket-js",sidebar_label:"TCP Server"},sidebar:"docs",previous:{title:"Introduction",permalink:"/guides/rsocket-js/server"},next:{title:"WebSocket Server",permalink:"/guides/rsocket-js/server/rsocket-websocket-server"}},l=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Example",id:"example",children:[]}],u={toc:l};function d(e){var r=e.components,t=(0,o.Z)(e,c);return(0,s.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"getting-started"},"Getting Started"),(0,s.kt)("p",null,"TODO"),(0,s.kt)("h2",{id:"example"},"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"npm install rsocket-core rsocket-tcp-server rsocket-flowable\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { RSocketServer } = require('rsocket-core');\nconst RSocketTCPServer = require('rsocket-tcp-server');\nconst { Single } = require('rsocket-flowable');\n\nconst TCPTransport = RSocketTCPServer.default;\n\nconst host = '127.0.0.1';\nconst port = 3000;\n\nconst transportOpts = {\n  host: host,\n  port: port,\n};\n\nconst transport = new TCPTransport(transportOpts);\n\nconst rSocketServer = new RSocketServer({\n  transport,\n  getRequestHandler: function () {\n    ...\n  },\n});\n\nrSocketServer.start();\n")))}d.isMDXComponent=!0}}]);