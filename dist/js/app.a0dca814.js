(function(e){function t(t){for(var a,o,i=t[0],u=t[1],l=t[2],c=0,d=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);m&&m(t);while(d.length)d.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,o=1;o<s.length;o++){var u=s[o];0!==r[u]&&(a=!1)}a&&(n.splice(t--,1),e=i(i.s=s[0]))}return e}var a={},r={app:0},n=[];function o(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"72667e86"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.e=function(e){var t=[],s=r[e];if(0!==s)if(s)t.push(s[2]);else{var a=new Promise((function(t,a){s=r[e]=[t,a]}));t.push(s[2]=a);var n,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=o(e);var l=new Error;n=function(t){u.onerror=u.onload=null,clearTimeout(c);var s=r[e];if(0!==s){if(s){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",l.name="ChunkLoadError",l.type=a,l.request=n,s[1](l)}r[e]=void 0}};var c=setTimeout((function(){n({type:"timeout",target:u})}),12e4);u.onerror=u.onload=n,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(s,a,function(t){return e[t]}.bind(null,a));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var m=l;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";s("85ec")},"56d7":function(e,t,s){"use strict";s.r(t);var a=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"nav"}},[s("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),s("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),s("router-view")],1)},n=[],o=(s("034f"),s("2877")),i={},u=Object(o["a"])(i,r,n,!1,null,null,null),l=u.exports,c=s("8c4f"),m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"main"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.addMessage(t)}}},[e.error?s("div",{staticClass:"alert alert-dismissible alert-warning"},[s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"}},[e._v("×")]),s("h4",{staticClass:"alert-heading"},[e._v("Error!")]),s("p",{staticClass:"mb-0"},[e._v(e._s(e.error))])]):e._e(),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"username"}},[e._v("Username")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.message.username,expression:"message.username"}],staticClass:"form-control",attrs:{type:"text",id:"username",placeholder:"Enter a screen name",required:""},domProps:{value:e.message.username},on:{input:function(t){t.target.composing||e.$set(e.message,"username",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"subject"}},[e._v("Subject")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.message.subject,expression:"message.subject"}],staticClass:"form-control",attrs:{type:"text",id:"subject",placeholder:"Enter a subject",required:""},domProps:{value:e.message.subject},on:{input:function(t){t.target.composing||e.$set(e.message,"subject",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"message"}},[e._v("Message")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message.message,expression:"message.message"}],staticClass:"form-control",attrs:{id:"message",rows:"3"},domProps:{value:e.message.message},on:{input:function(t){t.target.composing||e.$set(e.message,"message",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"imageURL"}},[e._v("Image URL")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.message.imageURL,expression:"message.imageURL"}],staticClass:"form-control",attrs:{type:"url",id:"imageURL",placeholder:"Enter URL to an image"},domProps:{value:e.message.imageURL},on:{input:function(t){t.target.composing||e.$set(e.message,"imageURL",t.target.value)}}})]),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Add Message")])]),e._l(e.reversedMessages,(function(t){return s("div",{key:t._id,staticClass:"list-unstyled"},[s("li",{staticClass:"media"},[t.imageURL?s("img",{staticClass:"mr-3",attrs:{src:t.imageURL,alt:t.subject}}):e._e(),s("div",{staticClass:"media-body"},[s("h4",{staticClass:"mt-0 mb-1"},[e._v(e._s(t.username))]),s("h5",{staticClass:"mt-0 mb-1"},[e._v(e._s(t.subject))]),e._v(" "+e._s(t.message)+" "),s("br"),s("small",[e._v(e._s(t.created))])])]),s("hr")])}))],2)},d=[],p=s("bc3a"),g=s.n(p);const f=`${window.location.protocol}//${window.location.host}/messages`;var v={name:"home",data:()=>({error:"",messages:[],message:{username:"",subject:"",message:"",imageURL:""}}),computed:{reversedMessages(){return this.messages.slice().reverse()}},mounted(){g.a.get(f).then(e=>{this.messages=e.data}).catch(e=>{console.log(e)})},methods:{addMessage(){console.log(this.message),g.a.post(f,this.message).then(e=>{console.log(e),this.error="",this.messages.push(e.data)}).catch(e=>{console.log(e)})}}},b=v,h=(s("cccb"),Object(o["a"])(b,m,d,!1,null,null,null)),_=h.exports;a["a"].use(c["a"]);const y=[{path:"/",name:"Home",component:_},{path:"/about",name:"About",component(){return s.e("about").then(s.bind(null,"f820"))}}],w=new c["a"]({routes:y});var j=w;a["a"].config.productionTip=!1,new a["a"]({router:j,render(e){return e(l)}}).$mount("#app")},"5ced":function(e,t,s){},"85ec":function(e,t,s){},cccb:function(e,t,s){"use strict";s("5ced")}});
//# sourceMappingURL=app.a0dca814.js.map