(function(t){function e(e){for(var r,o,n=e[0],c=e[1],l=e[2],d=0,p=[];d<n.length;d++)o=n[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,n=1;n<a.length;n++){var c=a[n];0!==i[c]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},i={app:0},s=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"bg-primary"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-between"},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary",staticStyle:{width:"100%"}},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Vue/Express Demo")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarToggler"}},[a("ul",{staticClass:"navbar-nav ml-auto mt-2 mt-lg-0"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/admin"}},[t._v("Admin")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/cart"}},[t._v("Cart")])],1)])])],1)])])]),a("router-view")],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarToggler","aria-controls":"navbarToggler","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],o=a("2877"),n={},c=Object(o["a"])(n,i,s,!1,null,null,null),l=c.exports,u=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("h1",[t._v("Product list")]),t._l(t.products,(function(e){return a("div",{key:e._id,staticClass:"list-unstyled"},[a("li",[a("div",{staticClass:"container"},[a("router-link",{attrs:{to:{name:"Product",params:{id:e._id}}}},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-6"},[a("img",{staticClass:"img-fluid",attrs:{src:"/img/300x200.jpg"}})]),a("div",{staticClass:"col-6"},[a("p",[t._v(" "+t._s(e.title)+" ")]),a("p",[t._v("$"+t._s(e.price))])])])])],1)]),a("hr")])}))],2)},p=[],v=a("2f62"),m={name:"Home",data:()=>({error:""}),computed:Object(v["d"])({products:t=>t.products.all}),created(){this.$store.dispatch("products/getAllProducts")}},h=m,f=Object(o["a"])(h,d,p,!1,null,null,null),g=f.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("h1",[t._v("Add products to database")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.addProduct(e)}}},[t.error?a("div",{staticClass:"alert alert-dismissible alert-warning"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"}},[t._v(" × ")]),a("h4",{staticClass:"alert-heading"},[t._v("Error!")]),a("p",{staticClass:"mb-0"},[t._v(t._s(t.error))])]):t._e(),a("div",{staticClass:"container"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.title,expression:"product.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"Enter a product name",required:""},domProps:{value:t.product.title},on:{input:function(e){e.target.composing||t.$set(t.product,"title",e.target.value)}}})])]),a("div",{staticClass:"col-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"price"}},[t._v("Price")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.price,expression:"product.price"}],staticClass:"form-control",attrs:{type:"number",min:"0",step:"0.01",id:"price",placeholder:"Enter product price",required:""},domProps:{value:t.product.price},on:{input:function(e){e.target.composing||t.$set(t.product,"price",e.target.value)}}})])]),a("div",{staticClass:"col-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"inventory"}},[t._v("Inventory")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.inventory,expression:"product.inventory"}],staticClass:"form-control",attrs:{type:"number",id:"inventory",placeholder:"Enter product inventory",required:""},domProps:{value:t.product.inventory},on:{input:function(e){e.target.composing||t.$set(t.product,"inventory",e.target.value)}}})])])]),t._m(0)])]),a("hr"),a("div",{staticClass:"product-table"},[a("h1",[t._v("Product list")]),a("table",{staticClass:"datatable display table table-striped"},[t._m(1),a("tbody",t._l(t.products,(function(e){return a("tr",{key:e._id,staticStyle:{cursor:"pointer"}},[a("td",[t._v(t._s(e.title))]),a("td",[t._v("$"+t._s(e.price))]),a("td",[t._v(t._s(e.inventory))]),a("td",[a("router-link",{attrs:{to:{name:"Edit",params:{id:e._id}}}},[a("img",{attrs:{src:"/img/outline_edit_black_18dp.png","data-toggle":"tooltip","data-placement":"bottom",title:"Edit product"}})])],1)])})),0)])])])},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("button",{staticClass:"btn btn-primary mt-3",attrs:{type:"submit"}},[t._v("Add product")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Product name")]),a("th",{attrs:{scope:"col"}},[t._v("Price")]),a("th",{attrs:{scope:"col"}},[t._v("Inventory")]),a("th",{attrs:{scope:"col"}})])])}],_=a("bc3a"),b=a.n(_);const w=`${window.location.protocol}//${window.location.host}/products`;var P={name:"Admin",data:()=>({error:"",products:[],product:{title:"",price:0,inventory:0}}),mounted(){b.a.get(w).then(t=>{this.products=t.data}).catch(t=>{console.log(t)})},methods:{addProduct(){b.a.post(w,this.product).then(t=>{this.products.push(t.data),this.error="",this.product={title:"",price:"",inventory:""},alert("One product has been added to database.")}).catch(t=>{console.log(t),this.error="Something went wrong with saving form data!"})}}},$=P,q=Object(o["a"])($,y,C,!1,null,null,null),k=q.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("h1",[t._v("Product detail")]),a("div",{staticClass:"container"},[a("div",{staticClass:"row align-items-center"},[t._m(0),a("div",{staticClass:"col-6 text-left"},[a("p",[t._v(t._s(t.product.title))]),a("p",[t._v("$"+t._s(t.product.price))]),a("p",[t._v("Inventory: "+t._s(t.product.inventory))])])])]),a("form",{on:{submit:function(e){return e.preventDefault(),t.addToCart()}}},[a("div",{staticClass:"container mt-5"},[a("div",{staticClass:"row align-items-center justify-content-center"},[a("div",{staticClass:"col-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"quantity"}},[t._v("Quantity")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],staticClass:"form-control",attrs:{type:"number",min:"0",id:"quantity",required:""},domProps:{value:t.quantity},on:{input:function(e){e.target.composing||(t.quantity=e.target.value)}}})])]),a("div",{staticClass:"col-4 text-left"},[a("button",{staticClass:"btn btn-primary",attrs:{disabled:!t.isInventoryGood,type:"submit"}},[t._v(" Add to cart ")])])])])]),t.isInventoryGood?t._e():a("p",[t._v(" This product's inventory is lower than the quantity you required. ")])])},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-6"},[a("img",{staticClass:"img-fluid",attrs:{src:"/img/300x200.jpg"}})])}],j={name:"Product",data:()=>({error:"",id:"",quantity:0,product:{}}),computed:{isInventoryGood(){return parseInt(this.product.inventory,10)>=this.quantity}},methods:{...Object(v["b"])("cart",["addProductToCart"]),addToCart(){this.quantity?(this.addProductToCart({id:this.id,quantity:this.quantity}).then(()=>setTimeout(()=>alert("Added to cart."),500)),this.quantity=0):alert("Quantity should be greater than 0.")}},created(){this.id=this.$route.params.id,this.product=this.$store.getters["products/getOneProduct"](this.id)}},T=j,E=Object(o["a"])(T,x,I,!1,null,null,null),O=E.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("h1",[t._v("Your Cart")]),a("p",{directives:[{name:"show",rawName:"v-show",value:!t.products.length,expression:"!products.length"}]},[t._v(" Your cart is empty, add some products to cart. ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.checkoutStatus,expression:"!checkoutStatus"}]},[t._m(0),a("hr"),t._l(t.products,(function(e,r){return a("li",{key:r},[a("div",{staticClass:"container"},[a("div",{staticClass:"row align-items-center"},[t._m(1,!0),a("div",{staticClass:"col-3"},[a("p",[t._v(t._s(e.title))]),a("p",[t._v("$"+t._s(e.price))]),a("p",[a("a",{staticStyle:{color:"blue"},attrs:{onclick:t.removeItem(e.id)}},[t._v("Remove")])])]),a("div",{staticClass:"col-2"},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.quantities[r],expression:"quantities[index]"}],staticClass:"form-control",attrs:{type:"number",min:"1"},domProps:{value:t.quantities[r]},on:{input:[function(e){e.target.composing||t.$set(t.quantities,r,e.target.value)},function(a){return t.changeQuantity(e.id,t.quantities[r])}]}})])]),a("div",{staticClass:"col-3"},[t._v(" $"+t._s(Math.round(e.price*t.quantities[r]*100)/100)+" ")])])])])})),a("hr"),a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-end"},[a("div",{staticClass:"col-2"},[t._v("Total price:")]),a("div",{staticClass:"col-3"},[t._v("$"+t._s(t.total))])])])],2),a("p",{staticClass:"mt-5 mb-5"},[a("button",{staticClass:"btn btn-primary",attrs:{disabled:!t.products.length},on:{click:function(e){return t.checkout(t.products)}}},[t._v(" Checkout ")])])])},Q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-4"}),a("div",{staticClass:"col-3"},[t._v("Product")]),a("div",{staticClass:"col-2"},[t._v(" Quantity ")]),a("div",{staticClass:"col-3"},[t._v(" Total price ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-4"},[a("img",{staticClass:"img-fluid",attrs:{src:"/img/300x200.jpg"}})])}],N={name:"Cart",data:()=>({quantities:[]}),computed:{...Object(v["d"])({checkoutStatus:t=>t.cart.checkoutStatus}),...Object(v["c"])("cart",{products:"cartProducts",total:"cartTotalPrice"})},methods:{changeQuantity(t,e){this.$store.dispatch("cart/changeQuantity",{id:t,quantity:e})},checkout(t){this.$store.dispatch("cart/checkout",t).then(()=>setTimeout(()=>alert("Checkout successful."),500))},removeItem(t){this.$store.dispatch("cart/removeItem",{id:t})}},created(){this.products.forEach(t=>this.quantities.push(t.quantity))}},A=N,D=Object(o["a"])(A,S,Q,!1,null,null,null),M=D.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("h1",[t._v("Edit product")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.editProduct(e)}}},[t.error?a("div",{staticClass:"alert alert-dismissible alert-warning"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"}},[t._v(" × ")]),a("h4",{staticClass:"alert-heading"},[t._v("Error!")]),a("p",{staticClass:"mb-0"},[t._v(t._s(t.error))])]):t._e(),a("div",{staticClass:"container"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.title,expression:"product.title"}],staticClass:"form-control",attrs:{disabled:"",type:"text",id:"title"},domProps:{value:t.product.title},on:{input:function(e){e.target.composing||t.$set(t.product,"title",e.target.value)}}})])]),a("div",{staticClass:"col-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"price"}},[t._v("Price")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.price,expression:"product.price"}],staticClass:"form-control",attrs:{type:"number",min:"0",step:"0.01",id:"price",required:""},domProps:{value:t.product.price},on:{input:function(e){e.target.composing||t.$set(t.product,"price",e.target.value)}}})])]),a("div",{staticClass:"col-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"inventory"}},[t._v("Inventory")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.inventory,expression:"product.inventory"}],staticClass:"form-control",attrs:{type:"number",id:"inventory",required:""},domProps:{value:t.product.inventory},on:{input:function(e){e.target.composing||t.$set(t.product,"inventory",e.target.value)}}})])])]),t._m(0)])])])},H=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("button",{staticClass:"btn btn-primary mt-3",attrs:{type:"submit"}},[t._v("Save")])])])}];const B=`${window.location.protocol}//${window.location.host}/editproduct`;var J={name:"Edit",data:()=>({error:"",id:"",product:{}}),methods:{editProduct(){b.a.post(B,this.product).then(()=>setTimeout(()=>{this.error="",alert("The product has been updated in database!"),window.location.href=`${window.location.protocol}//${window.location.host}/#/admin`},500)).catch(t=>{console.log(t),this.error="Something went wrong with editing product!"})}},created(){this.id=this.$route.params.id;const t=`${window.location.protocol}//${window.location.host}/getproduct/:${this.id}`;b.a.get(t).then(t=>{this.product=t.data}).catch(t=>{console.log(t)})}},Y=J,R=Object(o["a"])(Y,G,H,!1,null,null,null),V=R.exports;r["a"].use(u["a"]);const z=[{path:"/",name:"Home",component:g},{path:"/admin",name:"Admin",component:k},{path:"/product/:id",name:"Product",component:O},{path:"/edit/:id",name:"Edit",component:V},{path:"/cart",name:"Cart",component:M}],F=new u["a"]({routes:z});var K=F,L=a("0e44");const U=`${window.location.protocol}//${window.location.host}/products`,W=`${window.location.protocol}//${window.location.host}/updateinventory`;let X=[];var Z={getProducts(t){b.a.get(U).then(e=>{X=e.data,t(X)}).catch(t=>{console.log(t)})},buyProducts(t,e){setTimeout(()=>{e()},100)},updateInventoryInDB(t){b.a.post(W,t).catch(t=>{console.log(t)})}};const tt=()=>({items:[],checkoutStatus:null}),et={cartProducts:(t,e,a)=>t.items.map(({id:t,quantity:e})=>{const r=a.products.all.find(e=>e._id===t);return{id:t,title:r.title,price:r.price,quantity:e}}),cartTotalPrice:(t,e)=>{const a=e.cartProducts.reduce((t,e)=>t+e.price*e.quantity,0);return Math.round(100*a)/100}},at={checkout({commit:t},e){t("setCheckoutStatus",null),t("setCartItems",{items:[]}),Z.buyProducts(e,()=>{t("setCheckoutStatus",!0),Z.updateInventoryInDB(e)})},addProductToCart({state:t,commit:e},{id:a,quantity:r}){e("setCheckoutStatus",null);const i=t.items.find(t=>t.id===a);e(i?"incrementItemQuantity":"pushProductToCart",{id:a,quantity:r}),e("products/decrementProductInventory",{id:a,quantity:r},{root:!0})},changeQuantity({commit:t},{id:e,quantity:a}){t("changeItemQuantity",{id:e,quantity:a})},removeItem({commit:t},{id:e}){t("removeCartItem",{id:e})}},rt={pushProductToCart(t,{id:e,quantity:a}){t.items.push({id:e,quantity:a})},incrementItemQuantity(t,{id:e,quantity:a}){const r=t.items.find(t=>t.id===e);r.quantity=(parseInt(r.quantity,10)+parseInt(a,10)).toString()},changeItemQuantity(t,{id:e,quantity:a}){const r=t.items.find(t=>t.id===e);r.quantity=parseInt(a,10)},removeCartItem(t,{id:e}){t.items.filter(t=>t.id!==e)},setCartItems(t,{items:e}){t.items=e},setCheckoutStatus(t,e){t.checkoutStatus=e}};var it={namespaced:!0,state:tt,getters:et,actions:at,mutations:rt};const st=()=>({all:[]}),ot={getOneProduct:t=>e=>t.all.find(t=>t._id===e)},nt={getAllProducts({commit:t}){Z.getProducts(e=>{t("setProducts",e)})}},ct={setProducts(t,e){t.all=e},decrementProductInventory(t,{id:e,quantity:a}){const r=t.all.find(t=>t._id===e);r.inventory-=a}};var lt={namespaced:!0,state:st,getters:ot,actions:nt,mutations:ct};r["a"].use(v["a"]);const ut=!1;var dt=new v["a"].Store({modules:{cart:it,products:lt},strict:ut,plugins:[Object(L["a"])()]});r["a"].config.productionTip=!1,new r["a"]({router:K,store:dt,render(t){return t(l)}}).$mount("#app")}});
//# sourceMappingURL=app.d4d38ee5.js.map