(()=>{var e={};e.id=129,e.ids=[129],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},83122:e=>{"use strict";e.exports=require("undici")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},60508:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c}),s(58951),s(35866),s(22790),s(19644);var r=s(23191),a=s(88716),l=s(37922),n=s.n(l),o=s(95231),i={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>o[e]);s.d(t,i);let c=["",{children:["(auth)",{children:["signup",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,58951)),"D:\\Projects\\Project Management\\learntube-1.0\\app\\(auth)\\signup\\page.tsx"]}]},{}]},{"not-found":[()=>Promise.resolve().then(s.t.bind(s,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,22790)),"D:\\Projects\\Project Management\\learntube-1.0\\app\\layout.tsx"],loading:[()=>Promise.resolve().then(s.bind(s,19644)),"D:\\Projects\\Project Management\\learntube-1.0\\app\\loading.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["D:\\Projects\\Project Management\\learntube-1.0\\app\\(auth)\\signup\\page.tsx"],u="/(auth)/signup/page",m={require:s,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(auth)/signup/page",pathname:"/signup",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},91073:(e,t,s)=>{Promise.resolve().then(s.bind(s,2062))},44003:(e,t,s)=>{Promise.resolve().then(s.bind(s,37761)),Promise.resolve().then(s.bind(s,17493)),Promise.resolve().then(s.bind(s,79958)),Promise.resolve().then(s.bind(s,50258)),Promise.resolve().then(s.t.bind(s,98684,23))},79029:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,12994,23)),Promise.resolve().then(s.t.bind(s,96114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,79671,23)),Promise.resolve().then(s.t.bind(s,41868,23)),Promise.resolve().then(s.t.bind(s,84759,23))},35303:()=>{},2062:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u});var r=s(10326),a=s(94682),l=s(31190),n=s(35121),o=s(17577),i=s(78882),c=s(10983),d=s(35047);let u=()=>{let[e,t]=(0,o.useState)(""),[s,u]=(0,o.useState)(""),[m,p]=(0,o.useState)(""),[x,g]=(0,o.useState)(null),[h,f]=(0,o.useState)(!1),[b,v]=(0,o.useState)(!1),j=(0,d.useRouter)(),[y]=(0,c.Rp)(i.I8),w=async e=>{let t=0,s=0,r=0;for(let a of e)/[A-Z]/.test(a)?t++:/[0-9]/.test(a)?s++:/[^A-Za-z0-9]/.test(a)&&r++;return e.length>=8&&t>0&&s>0&&r>0},P=(0,o.useCallback)(async t=>{if(t.preventDefault(),!s&&!m&&!e)return l.Am.error("All fields are required",{position:"top-center",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),"All fields are required";if(!await w(m))return l.Am.error("Password must contain at least one uppercase letter, one number and one special character",{position:"top-center",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),"Password must contain at least one uppercase letter, one number and one special character";v(!0);try{let t=new FormData;t.append("username",e),t.append("email",s),t.append("password",m),x&&t.append("avatar",x);let r=await y(s,m);if(f(!1),r)try{let e=await fetch("http://localhost:9063/api/register",{method:"POST",body:t});console.log(e),e.ok?(l.Am.success("Registration success",{position:"top-center",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),f(!0),setTimeout(()=>{j.push("/")},2e3)):(v(!1),l.Am.error("Registration failed",{position:"top-center",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))}catch(e){console.log("Internal server error",e)}}catch(e){f(!1),l.Am.error("Registration failed",{position:"top-center",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),console.error("Internal server error",e)}},[s,m,e,x,y,h]);return(0,r.jsxs)(r.Fragment,{children:[r.jsx(l.Ix,{}),!h&&(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsxs)("div",{className:"max-h-full max-w-2xl shadow-xl shadow-gray-400",children:[(0,r.jsxs)("div",{className:"p-5 ml-3 flex",children:[r.jsx("img",{className:"h-10",src:"https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/Mastercard_2019_logo.svg-e1659036851269.png?auto=format&q=60&fit=max&w=930",alt:""}),r.jsx("p",{className:"text-white font-bold text-2xl ml-5 mt-1",children:"LearnTube"})]}),r.jsx("p",{className:"text-slate-500 ml-10",children:"Its a free video sharing website that makes it easy to watch online videos. You can even create and upload your own videos to share with others."}),(0,r.jsxs)("div",{className:"m-10",children:[(0,r.jsxs)("div",{className:"",children:[(0,r.jsxs)("div",{className:"flex",children:[" ",r.jsx("img",{className:"",src:"https://outpost.mappls.com/api/sso/img/suitImg01.svg",alt:""}),r.jsx("p",{className:"text-gray-300 font-semibold ml-6 text-xl",children:"Web Application"})]}),r.jsx("p",{className:"text-slate-500 ml-14 text-sm",children:"Indias Super App for learning, contents, creativity and more."})]}),(0,r.jsxs)("div",{className:"mt-10",children:[(0,r.jsxs)("div",{className:"flex",children:[r.jsx("img",{src:"https://outpost.mappls.com/api/sso/img/suitImg02.svg",alt:""}),r.jsx("p",{className:"text-gray-300 font-semibold ml-3 text-xl",children:"Workmate"})]}),r.jsx("p",{className:"text-slate-500 ml-14 text-sm",children:"Connect with your allies or mates and get in touch with them."})]}),(0,r.jsxs)("div",{className:"mt-10",children:[(0,r.jsxs)("div",{className:"flex",children:[r.jsx("img",{src:"https://outpost.mappls.com/api/sso/img/suitImg03.svg",alt:""}),r.jsx("p",{className:"text-gray-300 font-semibold ml-4 text-xl",children:"Learn"})]}),r.jsx("p",{className:"text-slate-500 ml-14 text-sm",children:"Upskill your power with learntube by visit our contents."})]}),(0,r.jsxs)("div",{className:"mt-10",children:[(0,r.jsxs)("div",{className:"flex",children:[r.jsx("img",{src:"https://outpost.mappls.com/api/sso/img/suitImg04.svg",alt:""}),r.jsx("p",{className:"text-gray-300 font-semibold ml-4 text-xl",children:"Managements"})]}),r.jsx("p",{className:"text-slate-500 ml-14 text-sm",children:"Manage your contents with public or private your videos."})]}),(0,r.jsxs)("div",{className:"mt-10",children:[(0,r.jsxs)("div",{className:"flex",children:[r.jsx("img",{src:"https://outpost.mappls.com/api/sso/img/suitImg05.svg",alt:""}),r.jsx("p",{className:"text-gray-300 font-semibold ml-4 text-xl",children:"Insight"})]}),r.jsx("p",{className:"text-slate-500 ml-14 text-sm",children:"Dynamic dashboards to turn your data into actionable insights"})]})]}),r.jsx("div",{className:"mt-24",children:r.jsx("p",{className:"text-slate-400 ml-10",children:"\xa9 Copyright 2024. CE Info Systems Ltd. All Rights Reserved."})})]}),r.jsx("div",{className:"max-h-full",style:{marginLeft:"250px"},children:r.jsx("div",{className:"min-h-screen py-6 flex flex-col justify-center sm:py-12",children:(0,r.jsxs)("div",{className:"relative py-3 sm:max-w-xl sm:mx-auto",children:[r.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"}),r.jsx("div",{className:"relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20",children:(0,r.jsxs)("div",{className:"max-w-md mx-auto",children:[r.jsx("div",{children:r.jsx("h1",{className:"text-2xl font-semibold text-black",children:"Signup"})}),r.jsx("form",{onSubmit:P,id:"signup-form",children:r.jsx("div",{className:"divide-y divide-gray-200",children:(0,r.jsxs)("div",{className:"py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7",children:[(0,r.jsxs)("div",{className:"relative z-0 w-full mb-5 group",children:[r.jsx("svg",{className:"w-5 h-5 text-gray-500 dark:text-gray-400 absolute mt-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:r.jsx("path",{d:"M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"})}),r.jsx("input",{autoComplete:"username",onChange:e=>t(e.target.value),value:e,type:"text",name:"floating_name",id:"floating_name",className:"block py-2.5 px-7 dark:border-gray-600 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-gray-500 font-semibold  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",required:!0}),r.jsx("label",{htmlFor:"floating_name",className:"peer-focus:font-medium absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ml-6",children:"Username"})]}),(0,r.jsxs)("div",{className:"relative z-0 w-full mb-5 group",children:[(0,r.jsxs)("svg",{className:"w-4 h-4 absolute mt-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 16",children:[r.jsx("path",{d:"m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"}),r.jsx("path",{d:"M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"})]}),r.jsx("input",{autoComplete:"email",type:"email",name:"floating_email",id:"floating_email",className:"block py-2.5 px-7 w-full text-sm font-semibold bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-gray-500 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",required:!0,onChange:e=>u(e.target.value),value:s}),r.jsx("label",{htmlFor:"floating_email",className:"ml-6 peer-focus:font-medium absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Email address"})]}),(0,r.jsxs)("div",{className:"relative z-0 w-full mb-5 group",children:[(0,r.jsxs)("svg",{className:"absolute mt-3",xmlns:"http://www.w3.org/2000/svg",height:"20px",viewBox:"0 0 24 24",width:"20px",fill:"#949995",children:[(0,r.jsxs)("g",{fill:"none",children:[r.jsx("path",{d:"M0 0h24v24H0V0z"}),r.jsx("path",{d:"M0 0h24v24H0V0z",opacity:".87"})]}),r.jsx("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"})]}),r.jsx("input",{autoComplete:"current-password",type:"password",name:"floating_password",id:"floating_password",className:"block py-2.5 px-7 dark:border-gray-600 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2  appearance-none   dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",required:!0,onChange:e=>p(e.target.value),value:m}),r.jsx("label",{htmlFor:"floating_password",className:"ml-6 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Password"})]}),r.jsx("div",{className:"relative z-0 w-full mb-5 group",children:r.jsx("div",{className:"mx-auto max-w-xs",children:r.jsx("input",{onChange:e=>{let t=e.target,s=t.files&&t.files[0];s&&g(s)},id:"avatar",type:"file",className:"mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-teal-500 file:py-1 file:px-2 file:text-sm file:font-semibold file:text-white hover:file:bg-teal-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60"})})}),(0,r.jsxs)("div",{className:"flex items-center",children:[r.jsx("input",{id:"link-checkbox",type:"checkbox",value:"",className:"w-4 h-4 text-blue-600  border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 ",required:!0}),(0,r.jsxs)("label",{htmlFor:"link-checkbox",className:"ms-2 text-sm font-medium text-gray-500 ",children:["I agree with the"," ",r.jsx("a",{href:"#",className:"text-blue-600 dark:text-blue-500 hover:underline",children:"terms and conditions"}),"."]})]}),r.jsx("div",{className:"relative justify-center ml-20",children:(0,r.jsxs)("button",{type:"submit",className:"flex active:scale-110 duration-100 will-change-transform relative transition-all disabled:opacity-70 bg-green-800 text-white font-semibold rounded-2xl px-6 py-1 mt-2",children:["Signup",b&&r.jsx(a.c,{size:"sm",color:"warning",className:"mt-1 ml-2"})]})})]})})})]})})]})})})]}),h&&r.jsx(n.Z,{})]})}},37761:(e,t,s)=>{"use strict";s.d(t,{DarkModeProvider:()=>n,v:()=>o});var r=s(10326),a=s(17577);let l=(0,a.createContext)(),n=({children:e})=>{let[t,s]=(0,a.useState)(!1);return r.jsx(l.Provider,{value:{isDarkMode:t,toggleDarkMode:()=>{s(e=>!e),console.log("toggle dark mode ",t)}},children:e})},o=()=>(0,a.useContext)(l)},35121:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(10326);s(17577);let a=()=>(0,r.jsxs)("div",{className:"flex space-x-2 justify-center items-center mt-80 dark:invert ",children:[r.jsx("div",{className:"h-8 w-8 bg-red-500 rounded-full animate-bounce"}),r.jsx("div",{className:"h-8 w-8 bg-green-500 rounded-full animate-bounce [animation-delay:-0.15s]"}),r.jsx("div",{className:"h-8 w-8 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"})]})},17493:(e,t,s)=>{"use strict";s.d(t,{UiProviders:()=>l});var r=s(10326),a=s(53110);function l({children:e}){return r.jsx(a.w,{children:e})}},79958:(e,t,s)=>{"use strict";s.d(t,{ApolloWrapper:()=>i});var r=s(10326),a=s(46874),l=s(8164),n=s(5704);function o(){let e=new a.u({uri:"https://learntube-server.onrender.com/graphql"});return new n.p0({cache:new n.ND,link:l.i.from([new n.a4({stripDefer:!0}),e])})}function i({children:e}){return r.jsx(n.e$,{makeClient:o,children:e})}},78882:(e,t,s)=>{"use strict";s.d(t,{$x:()=>d,I8:()=>o,UP:()=>u,Xg:()=>c,cd:()=>m});var r=s(42585),a=s(18591),l=s(11552);let n=(0,r.ZF)({apiKey:"AIzaSyBm3wHNJBJlnYhBQBWZkVFjLcufqcA5FtA",authDomain:"learntube-4326c.firebaseapp.com",projectId:"learntube-4326c",storageBucket:"learntube-4326c.appspot.com",messagingSenderId:"312956664065",appId:"1:312956664065:web:27127dbb7e611c8e4b8300",measurementId:"G-KDEL369JSH"}),o=(0,a.v0)(n),i=(0,l.cF)(n,"gs://learntube-4326c.appspot.com"),c=async e=>{let t=(0,l.iH)(i,`upload/thumbnail/${Date.now()}-${e.name}`);return await (0,l.KV)(t,e)},d=async e=>{let t=(0,l.iH)(i,`upload/video/${Date.now()}-${e.name}`);return await (0,l.KV)(t,e)},u=async e=>{let t=new a.lI(o,"recaptcha-container",{});return t.render(),(0,a.$g)(o,e,t)},m=async e=>await (0,l.Jt)((0,l.iH)(i,e))},50258:(e,t,s)=>{"use strict";s.d(t,{StoreProvider:()=>p});var r=s(10326),a=s(17577),l=s(25842),n=s(73146);let o=(0,n.oM)({name:"counter",initialState:{value:0},reducers:{increment:e=>{e.value+=1},decrement:e=>{e.value-=1},incrementByAmount:(e,t)=>{e.value+=t.payload}}}),{increment:i,decrement:c,incrementByAmount:d}=o.actions,u=o.reducer,m=()=>(0,n.xC)({reducer:{counter:u}});function p({children:e}){let t=(0,a.useRef)();return t.current||(t.current=m()),r.jsx(l.zt,{store:t.current,children:e})}},58951:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>n,__esModule:()=>l,default:()=>o});var r=s(68570);let a=(0,r.createProxy)(String.raw`D:\Projects\Project Management\learntube-1.0\app\(auth)\signup\page.tsx`),{__esModule:l,$$typeof:n}=a;a.default;let o=(0,r.createProxy)(String.raw`D:\Projects\Project Management\learntube-1.0\app\(auth)\signup\page.tsx#default`)},22790:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>M,metadata:()=>k});var r=s(19510),a=s(77366),l=s.n(a);s(67272);var n=s(68570);let o=(0,n.createProxy)(String.raw`D:\Projects\Project Management\learntube-1.0\components\providers.tsx`),{__esModule:i,$$typeof:c}=o;o.default;let d=(0,n.createProxy)(String.raw`D:\Projects\Project Management\learntube-1.0\components\providers.tsx#UiProviders`),u=(0,n.createProxy)(String.raw`D:\Projects\Project Management\learntube-1.0\components\hooks\theme.js`),{__esModule:m,$$typeof:p}=u;u.default;let x=(0,n.createProxy)(String.raw`D:\Projects\Project Management\learntube-1.0\components\hooks\theme.js#DarkModeProvider`);(0,n.createProxy)(String.raw`D:\Projects\Project Management\learntube-1.0\components\hooks\theme.js#useDarkMode`),s(97001);var g=s(20756),h=s.n(g);let f=(0,n.createProxy)(String.raw`D:\Projects\Project Management\learntube-1.0\configurations\apollo\client.tsx`),{__esModule:b,$$typeof:v}=f;f.default;let j=(0,n.createProxy)(String.raw`D:\Projects\Project Management\learntube-1.0\configurations\apollo\client.tsx#ApolloWrapper`),y=(0,n.createProxy)(String.raw`D:\Projects\Project Management\learntube-1.0\configurations\redux\storeProvider.tsx`),{__esModule:w,$$typeof:P}=y;y.default;let N=(0,n.createProxy)(String.raw`D:\Projects\Project Management\learntube-1.0\configurations\redux\storeProvider.tsx#StoreProvider`),k={title:"LearnTube",description:"All learning content is available here"};function M({children:e}){return r.jsx("html",{lang:"en",className:"dark",children:r.jsx("body",{className:l().className,children:(0,r.jsxs)(x,{children:[r.jsx(h(),{}),r.jsx(N,{children:r.jsx(j,{children:r.jsx(d,{children:e})})})]})})})}},19644:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(19510);s(71159);let a=()=>(0,r.jsxs)("div",{className:"flex space-x-2 justify-center items-center mt-80 dark:invert ",children:[r.jsx("div",{className:"h-8 w-8 bg-red-500 rounded-full animate-bounce"}),r.jsx("div",{className:"h-8 w-8 bg-green-500 rounded-full animate-bounce [animation-delay:-0.15s]"}),r.jsx("div",{className:"h-8 w-8 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"})]})},57481:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(66621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},67272:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[948,806,621,7,983,190],()=>s(60508));module.exports=r})();