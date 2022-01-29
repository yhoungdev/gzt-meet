import{o as a,c,a as e,w as b,v,b as _,n as p,d as f,t as x,r as g,e as d,f as m,g as h,h as y,i as w,p as k,j as $,k as N}from"./vendor.6b476621.js";const C=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function l(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=l(o);fetch(o.href,n)}};C();var I="/assets/images/camera.png",u=(s,t)=>{const l=s.__vccOpts||s;for(const[i,o]of t)l[i]=o;return l};const M={data(){return{meetingCode:"",enabledJoinButton:!1}},watch:{meetingCode(s){let t=s.trim();(s.includes("https://")||s.includes("http://"))&&(t=t.split("/").pop()),t.split("-").length>=3&&t.length>=11?this.enabledJoinButton=!0:this.enabledJoinButton=!1}},methods:{joinMeeting(){this.enabledJoinButton&&((this.meetingCode.includes("https://")||this.meetingCode.includes("http://"))&&(this.meetingCode=this.meetingCode.split("/").pop()),this.$router.push({name:"meeting-room",params:{id:this.meetingCode}}))}}},L={class:"max-w-7xl mx-auto container px-4 py-10 lg:py-20"},S={class:"grid grid-cols-1 lg:grid-cols-2 gap-8"},E={class:"mx-auto my-auto text-center md:text-left px-3 lg:pl-24"},T=e("h1",{class:"text-4xl lg:text-5xl leading-[3rem] lg:leading-[4rem] font-extrabold"}," Premium Meetings free for everyone \u{1F918}\u{1F3FE} ",-1),O=e("h3",{class:"font-semibold text-xl py-5"}," Create a More secure, more flexible, and completely free video conference ",-1),j={class:"box-shadow shadow bg-white p-3 rounded-full flex justify-between my-2 space-x-3"},A=["disabled"],R=e("div",{class:"m-auto"},[e("img",{src:I,alt:"video-camera",class:"max-w-full w-[400px]",srcset:""})],-1);function P(s,t,l,i,o,n){return a(),c("main",L,[e("section",S,[e("div",E,[T,O,e("div",j,[b(e("input",{"onUpdate:modelValue":t[0]||(t[0]=r=>o.meetingCode=r),type:"text",placeholder:"Enter a Meeting Code or Link",class:"outline-none ml-3 w-full text-sm"},null,512),[[v,o.meetingCode]]),e("input",{onClick:t[1]||(t[1]=(...r)=>n.joinMeeting&&n.joinMeeting(...r)),disabled:o.enabledJoinButton==!1,type:"submit",value:"Join Meeting",class:"font-semibold bg-green-600 px-5 py-3 rounded-full hover:bg-green-700 focus:bg-green-700 transition duration-300 ease-in-out text-white cursor-pointer"},null,8,A)])]),R])])}var B=u(M,[["render",P]]);const J={},D={class:"flex flex-col justify-center min-h-full py-10 md:py-0"},H=_('<h1 class="text-5xl md:text-6xl text-center text-gray-900 font-semibold">The team!</h1><div class="flex flex-wrap justify-evenly items-center w-3/4 m-auto py-5"><div class="bg-indigo-800 w-56 h-56 lg:w-64 lg:h-64 mx-auto my-4 rounded-full"></div><div class="bg-indigo-800 w-56 h-56 lg:w-64 lg:h-64 mx-auto my-4 rounded-full"></div><div class="bg-indigo-800 w-56 h-56 lg:w-64 lg:h-64 mx-auto my-4 rounded-full"></div></div>',2),z=[H];function V(s,t){return a(),c("main",D,z)}var W=u(J,[["render",V]]),G="/assets/images/copy.svg";const K={mounted(){const s=`${p(3)}-${p(3)}-${p(3)}`.toUpperCase();this.uuid=s,setTimeout(()=>{const t=JSON.parse(localStorage.getItem("meetings"))||[];t.push(s),localStorage.setItem("meetings",JSON.stringify(t)),this.loading=!1},2e3)},data(){return{uuid:null,loading:!0}},computed:{meetingCode(){return this.uuid},meetingLink(){return window.location.origin+"/"+this.uuid}},methods:{async copyLink(){await navigator.clipboard.writeText(this.meetingLink),alert("Link copied to clipboard")},continueToMeetingRoom(){return this.$router.push("/"+this.uuid)}}},U=e("div",{class:"py-10"},null,-1),q={key:0,class:"flex flex-col items-center justify-center w-full flex-1 px-1 lg:px-20 text-center"},Z=e("div",{className:"flex justify-center items-center"},[e("div",{className:"animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"})],-1),F=e("h1",{class:"text-3xl font-bold mt-4"},"Loading...",-1),Q=e("p",{class:"text-lg font-light mt-4"},"Please wait while we create a new meeting room.",-1),X=[Z,F,Q],Y={key:1,class:"flex flex-col items-center justify-center w-full flex-1 px-1 lg:px-20 text-center"},ee=e("div",{className:"flex justify-center items-center"},[e("img",{src:G,class:"h-32 w-32",alt:"copy-link-icon"})],-1),te=e("h1",{class:"text-3xl font-bold mt-4"},"Copy Link",-1),oe=e("p",{class:"text-lg font-light my-2"},"Please copy the link below and share it with your friends",-1),se={class:"text-lg font-bold my-1 break-all"},ne=e("p",{class:"text-lg font-light mt-4"}," or share the code",-1),le={class:"text-lg font-bold mt-1 break-all"},ie={class:"justify-center mt-8 space-x-3"},re={class:"justify-center mt-8"};function ae(s,t,l,i,o,n){return a(),c("div",null,[U,o.loading==!0?(a(),c("section",q,X)):f("",!0),o.loading==!1?(a(),c("section",Y,[ee,te,oe,e("p",se,x(n.meetingLink),1),ne,e("p",le,x(n.meetingCode),1),e("div",ie,[e("button",{class:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded",onClick:t[0]||(t[0]=(...r)=>n.copyLink&&n.copyLink(...r))},"Copy Link")]),e("div",re,[e("button",{class:"bg-green-700 hover:bg-green-700 text-white font-bold py-2 px-4 rounded",onClick:t[1]||(t[1]=(...r)=>n.continueToMeetingRoom&&n.continueToMeetingRoom(...r))},"Continue To Meeting")])])):f("",!0)])}var ce=u(K,[["render",ae]]),de="/assets/images/how-1.png",ue="/assets/images/how-2.png",me="/assets/images/how-3.png";const he={},pe={class:""},fe=_('<div class="carousel relative"><div class="carousel-inner relative overflow-hidden w-full"><input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked"><div class="carousel-item absolute opacity-0"><section class="flex flex-col justify-center min-h-full py-10 md:py-0"><div class="flex mx-auto py-5"><img src="'+de+'" alt="how-it-works" class="max-w-full w-80" srcset=""></div><h2 class="text-4xl text-center font-semibold">1. Create a Meeting</h2><div class="mx-auto"><p class="text-center py-4 px-2 tracking-wider max-w-xl">Create a More secure, more flexible, and completely free video conference </p></div></section></div><label for="carousel-3" class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto shadow-lg">\u2039</label><label for="carousel-2" class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto shadow-lg">\u203A</label><input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden=""><div class="carousel-item absolute opacity-0"><section class="flex flex-col justify-center min-h-full py-10 md:py-0"><div class="flex mx-auto py-5"><img src="'+ue+'" alt="how-it-works" class="max-w-full w-80" srcset=""></div><h2 class="text-4xl text-center font-semibold">2. Share the invite</h2><div class="mx-auto"><p class="text-center py-4 px-2 tracking-wider max-w-xl">Create a More secure, more flexible, and completely free video conference </p></div></section></div><label for="carousel-1" class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto shadow-lg">\u2039</label><label for="carousel-3" class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto shadow-lg">\u203A</label><input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden=""><div class="carousel-item absolute opacity-0"><section class="flex flex-col justify-center min-h-full py-10 md:py-0"><div class="flex mx-auto py-5"><img src="'+me+'" alt="how-it-works" class="max-w-full w-80"></div><h2 class="text-4xl text-center font-semibold">3. Join meeting</h2><div class="mx-auto"><p class="text-center py-4 px-2 tracking-wider max-w-xl">Create a More secure, more flexible, and completely free video conference </p></div></section></div><label for="carousel-2" class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto shadow-lg">\u2039</label><label for="carousel-1" class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto shadow-lg">\u203A</label><ol class="carousel-indicators"><li class="inline-block mr-3"><label for="carousel-1" class="carousel-bullet cursor-pointer block text-4xl hover:text-green-600 text-gray-400">\u2022</label></li><li class="inline-block mr-3"><label for="carousel-2" class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-green-600">\u2022</label></li><li class="inline-block mr-3"><label for="carousel-3" class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-green-600">\u2022</label></li></ol></div></div>',1),xe=[fe];function ge(s,t){return a(),c("div",pe,xe)}var _e=u(he,[["render",ge]]);const be={mounted(){const s=JSON.parse(localStorage.getItem("meetings"))||[],t=this.meetingId,l=s.includes(t);setTimeout(()=>{const i=new JitsiMeetExternalAPI("meet.jit.si",{roomName:t,width:"100%",parentNode:document.querySelector("#meet"),chromeExtensionBanner:!1,interfaceConfigOverwrite:{APP_NAME:"GenZtechies",MOBILE_APP_PROMO:!1,SHOW_JITSI_WATERMARK:!1,HIDE_DEEP_LINKING_LOGO:!0,NATIVE_APP_NAME:"GenZtechies",JITSI_WATERMARK_LINK:"https://meet.genztechies.com",SHOW_CHROME_EXTENSION_BANNER:!1,VIDEO_QUALITY_LABEL_DISABLED:!0,SETTINGS_SECTIONS:["devices","moderator","profile","sounds"]},configOverwrite:{disableInviteFunctions:!0,dynamicBrandingUrl:"https://meet.genztechies.com",hideConferenceSubject:!0,disableThirdPartyRequests:!0,defaultRemoteDisplayName:"A GenZ User",disabledSounds:["REACTION_SOUND"],autoKnockLobby:!0,toolbarButtons:["camera","chat","closedcaptions","desktop","download","etherpad","fullscreen","hangup","livestreaming","microphone","mute-everyone","mute-video-everyone","participants-pane","profile","raisehand","recording","security","select-background","settings","shareaudio","sharedvideo","shortcuts","toggle-camera","__end"]},onload:()=>{this.loading=!1}});i.addEventListener("participantRoleChanged",function(o){o.role==="moderator"&&l&&i.executeCommand("toggleLobby",!0)}),i.on("readyToClose",()=>{this.$router.push("/")})},2e3)},data(){return{meetingId:this.$route.params.id,loading:!0}}},ve=e("main",{id:"meet",class:"w-screen h-screen fixed top-0 bg-[#000]"},null,-1),ye={key:0,className:"flex flex-col items-center justify-center w-screen h-screen fixed top-0 bg-[#000] text-white"},we={className:"flex flex-col items-center justify-center w-full flex-1 px-1 lg:px-20 text-center"},ke=e("div",{className:"flex justify-center items-center"},[e("div",{className:"animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"})],-1),$e={className:"text-3xl font-black mt-4"};function Ne(s,t,l,i,o,n){return a(),c("div",null,[ve,o.loading==!0?(a(),c("section",ye,[e("div",we,[ke,e("h1",$e,"Loading \u26A1\uFE0F"+x(o.meetingId)+"\u26A1\uFE0F",1)])])):f("",!0)])}var Ce=u(be,[["render",Ne]]);const Ie={},Me={class:"pt-20 space-y-10 max-w-3xl mx-auto"},Le=e("h1",{class:"text-6xl text-center font-black"},"404",-1),Se=e("p",{class:"text-4xl text-center"}," Oops, you got an invalid meeting id or the page you're looking for doesn't exist. ",-1),Ee={class:"text-2xl text-center"},Te=h(" Return to the homepage");function Oe(s,t){const l=g("router-link");return a(),c("main",Me,[Le,Se,e("p",Ee,[d(l,{to:"/",class:"bg-yellow-500 px-4 py-2 rounded-lg font-bold text-lg"},{default:m(()=>[Te]),_:1})])])}var je=u(Ie,[["render",Oe]]);const Ae=y({routes:[{path:"/",name:"home",component:B},{path:"/team",name:"team",component:W},{path:"/new",name:"create-meeting",component:ce},{path:"/how-it-works",name:"how-it-works",component:_e},{path:"/404",name:"not-found",component:je},{path:"/:id",name:"meeting-room",component:Ce},{path:"/:catchAll(.*)",redirect:"/404"}],history:w()});const Re={},Pe=s=>(k("data-v-9bbd3f84"),s=s(),$(),s),Be={class:"relative mx-auto"},Je={class:"flex justify-between bg-transparent text-black w-screen"},De={class:"px-5 xl:px-12 py-6 flex w-full items-center"},He=h(" GenZ-Meet "),ze={class:"flex px-4 mx-auto font-semibold font-heading space-x-12"},Ve={class:"hidden md:block"},We=h("How It Works"),Ge={class:"hidden md:block"},Ke=h("Team"),Ue={class:"flex space-x-5 items-center"},qe=Pe(()=>e("button",{class:"bg-green-600 px-5 py-2 rounded font-bold text-white text-sm"}," Create New Meeting ",-1));function Ze(s,t){const l=g("router-link");return a(),c("nav",Be,[e("div",Je,[e("div",De,[d(l,{class:"logo text-3xl font-bold font-heading",to:"/"},{default:m(()=>[He]),_:1}),e("ul",ze,[e("li",Ve,[d(l,{class:"text-sm transition-all",to:"/how-it-works"},{default:m(()=>[We]),_:1})]),e("li",Ge,[d(l,{class:"text-sm transition-all",to:"/team"},{default:m(()=>[Ke]),_:1})])]),e("div",Ue,[d(l,{class:"flex items-center",to:"/new"},{default:m(()=>[qe]),_:1})])])])])}var Fe=u(Re,[["render",Ze],["__scopeId","data-v-9bbd3f84"]]);const Qe={id:"app",class:"min-h-screen bg-cover",style:{"background-image":"url('/assets/images/background.svg')","font-family":"'Manrope', sans-serif"}},Xe={setup(s){return(t,l)=>{const i=g("router-view");return a(),c("div",Qe,[e("main",null,[d(Fe),d(i)])])}}};N(Xe).use(Ae).mount("#app");
