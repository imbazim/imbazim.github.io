(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f18152e4"],{"0674":function(t,e,a){t.exports=a.p+"img/logo-inverted.d7f0eb76.png"},"1c15":function(t,e,a){"use strict";a("ecbf")},"9d64":function(t,e,a){t.exports=a.p+"img/logo.7537e287.png"},"9d76":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"off_canvars_overlay",class:[t.sidebar?"active":""],on:{click:function(e){return e.preventDefault(),t.hideSidebar.apply(null,arguments)}}}),a("div",{staticClass:"offcanvas_menu"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"offcanvas_menu_wrapper",class:[t.sidebar?"active":""]},[a("div",{staticClass:"canvas_close"},[a("a",{attrs:{href:"javascript:void(0)"},on:{click:t.hideSidebar}},[a("i",{staticClass:"fa fa-times"})])]),t._m(0),a("div",{staticClass:"text-left ",style:t.heightPro,attrs:{id:"menu"}},[a("ul",{staticClass:"offcanvas_main_menu"},t._l(t.menuItems,(function(e,s){return a("li",{key:s,staticClass:"menu-item-has-children active",class:[t.menuOpen===e.name?"menu-open":""]},[e.childrens&&e.childrens.length>0&&t.nasted?a("span",{staticClass:"menu-expand"},[a("i",{staticClass:"fa fa-angle-down"})]):t._e(),e.path?a("router-link",{staticStyle:{"text-transform":"capitalize"},attrs:{to:e.path}},[t._v(" "+t._s(e.name))]):a("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.show(e.name)}}},[t._v(" "+t._s(e.name))]),e.childrens&&t.nasted?a("ul",{staticClass:"sidebar-sub-menu",class:[t.menuOpen===e.name?"expend_menu_item":""],attrs:{id:e.name}},t._l(e.childrens,(function(e,s){return a("li",{key:s},[a("router-link",{attrs:{to:e.path?e.path:"#"}},[t._v(t._s(e.name))])],1)})),0):t._e()],1)})),0)]),t._m(1),t._m(2)])])])])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"offcanvas-brand text-center mb-40"},[s("img",{staticClass:"img-fluid bz-logo",attrs:{src:a("9d64"),alt:"Basim"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"offcanvas-social"},[a("ul",{staticClass:"text-center"},[a("li",[a("a",{attrs:{href:"https://twitter.com/imbazim"}},[a("i",{staticClass:"fab fa-twitter"})])]),a("li",[a("a",{attrs:{href:"https://instagram.com/imbazim"}},[a("i",{staticClass:"fab fa-instagram"})])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-widget-info"},[a("ul",[a("li",[a("a",{attrs:{href:"mailto:basim.vt@gmail.com"}},[a("i",{staticClass:"fal fa-envelope"}),t._v(" basim.vt@gmail.com")])]),a("li",[a("a",{attrs:{href:"tel:+919995663366"}},[a("i",{staticClass:"fal fa-phone"}),t._v(" +91 9995663366")])]),a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fal fa-map-marker-alt"}),t._v(" Bangalore")])])])])}],l={props:{sidebar:{type:Boolean,required:!0},menuItems:{type:Array,required:!0},nasted:{type:Boolean,default:!0}},data(){return{menuOpen:null,subMenuHeight:null}},computed:{heightPro(){return{"--height":this.subMenuHeight}}},methods:{hideSidebar(t){this.$emit("toggleSidebar",t)},show(t){t!==this.menuOpen?this.menuOpen=t:this.menuOpen=null;const e=document.querySelectorAll(`#${t} li`).length;this.subMenuHeight=43*e+"px"}}},r=l,n=(a("1c15"),a("2877")),o=Object(n["a"])(r,s,i,!1,null,null,null);e["a"]=o.exports},a290:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"appie-header-area appie-sticky"},[a("div",{staticClass:"container"},[a("div",{staticClass:"header-nav-box"},[a("div",{staticClass:"row align-items-center"},[t._m(0),a("div",{staticClass:"col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2"},[a("div",{staticClass:"appie-header-main-menu"},[a("nav-items",{attrs:{menuItems:t.menuItems,nasted:t.nasted}})],1)]),a("div",{staticClass:"col-lg-4  col-md-7 col-sm-6 col-6 order-2 order-sm-3"},[a("div",{staticClass:"appie-btn-box",staticStyle:{"text-align":"right"}},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.bz-modal",modifiers:{"bz-modal":!0}}],staticClass:"main-btn ml-30"},[t._v("Get Started")]),a("b-modal",{ref:"modal",attrs:{title:"Contact Basim",id:"bz-modal"},on:{show:t.resetModal,hidden:t.resetModal,ok:t.handleOk}},[a("div",{staticClass:"d-block text-center"},[a("h4",[t._v("Hello from Basim!")]),a("p",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.")])]),a("form",{ref:"form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[a("b-form-group",{attrs:{label:"Name","label-for":"name-input","invalid-feedback":"Name is required",state:t.nameState}},[a("b-form-input",{attrs:{id:"name-input",state:t.nameState,required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("b-form-group",{attrs:{label:"Email","label-for":"email-input","invalid-feedback":"Email is required",state:t.emailState}},[a("b-form-input",{attrs:{id:"email-input",state:t.emailState,required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1)]),a("div",{staticClass:"toggle-btn ml-30 canvas_open d-lg-none d-block"},[a("i",{staticClass:"fa fa-bars",on:{click:t.showSidebar}})])],1)])])])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1"},[s("div",{staticClass:"appie-logo-box"},[s("a",{attrs:{href:"/"}},[s("img",{staticClass:"img-fluid bz-logo",attrs:{src:a("0674"),alt:"Basim"}}),s("h4",{staticClass:"bz-logo-text"},[t._v("Basim")])])])])}],l=a("a31d"),r={data(){return{modalShow:!1,name:"",nameState:null,email:"",emailState:null,submittedNames:[]}},props:{menuItems:{type:Array,required:!0},nasted:{type:Boolean,default:!0}},components:{NavItems:l["a"]},mounted(){document.addEventListener("scroll",this.stickMenu)},methods:{showSidebar(t){this.$emit("toggleSidebar",t)},stickMenu(){const t=document.querySelector(".appie-sticky");document.body.scrollTop>100||document.documentElement.scrollTop>100?t.classList.add("sticky"):t.classList.remove("sticky")},checkFormValidity(){const t=this.$refs.form.checkValidity();return this.nameState=t,t},resetModal(){this.name="",this.nameState=null},handleOk(t){t.preventDefault(),this.handleSubmit()},handleSubmit(){this.checkFormValidity()&&(this.submittedNames.push(this.name),this.$nextTick(()=>{this.$bvModal.hide("modal-prevent-closing")}))}}},n=r,o=a("2877"),c=Object(o["a"])(n,s,i,!1,null,null,null);e["a"]=c.exports},a31d:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",t._l(t.menuItems,(function(e,s){return a("li",{key:s},[e.path?a("router-link",{staticStyle:{"text-transform":"capitalize"},attrs:{to:e.path}},[t._v(t._s(e.name))]):a("a",{staticStyle:{"text-transform":"capitalize"},attrs:{href:"#"}},[t._v(t._s(e.name)+" "),t.nasted?a("i",{staticClass:"fal fa-angle-down"}):t._e()]),e.childrens&&t.nasted?a("ul",{staticClass:"sub-menu"},t._l(e.childrens,(function(e,s){return a("li",{key:s},[a("router-link",{staticStyle:{"text-transform":"capitalize"},attrs:{to:e.path?e.path:"#"}},[t._v(t._s(e.name))])],1)})),0):t._e()],1)})),0)},i=[],l={props:{menuItems:{type:Array,required:!0},nasted:{type:Boolean,default:!0}}},r=l,n=a("2877"),o=Object(n["a"])(r,s,i,!1,null,null,null);e["a"]=o.exports},cfcc:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"appie-footer-area"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4 col-md-6"},[a("div",{staticClass:"footer-about-widget"},[t._m(0),a("p",[t._v("Basim.")]),a("router-link",{attrs:{to:"/about-us"}},[t._v("Read More "),a("i",{staticClass:"fal fa-arrow-right"})]),t._m(1)],1)]),a("div",{staticClass:"col-lg-2 col-md-6"},[a("div",{staticClass:"footer-navigation"},[a("h4",{staticClass:"title"},[t._v("Company")]),a("ul",[a("li",[a("router-link",{attrs:{to:"/about-us"}},[t._v("About Us")])],1),a("li",[a("router-link",{attrs:{to:"/service-details"}},[t._v("Service")])],1),t._m(2),a("li",[a("router-link",{attrs:{to:"/news"}},[t._v("Blog")])],1),a("li",[a("router-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])]),t._m(3),t._m(4)]),t._m(5)])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"logo"},[s("a",{attrs:{href:"#"}},[s("img",{staticClass:"img-fluid bz-logo",attrs:{src:a("9d64"),alt:""}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"social mt-30"},[a("ul",[a("li",[a("a",{attrs:{href:"https://twitter.com/imbazim",target:"_blank"}},[a("i",{staticClass:"fab fa-twitter"})])]),a("li",[a("a",{attrs:{href:"https://instagram.com/imbazim",target:"_blank"}},[a("i",{staticClass:"fab fa-instagram"})])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#"}},[t._v("Case Studies")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-3 col-md-6"},[a("div",{staticClass:"footer-navigation"},[a("h4",{staticClass:"title"},[t._v("Support")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Community")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Resources")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Faqs")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Privacy Policy")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Careers")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-3 col-md-6"},[a("div",{staticClass:"footer-widget-info"},[a("h4",{staticClass:"title"},[t._v("Get In Touch")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fal fa-envelope"}),t._v(" basim.vt@gmail.com")])]),a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fal fa-phone"}),t._v(" +91 9995663366")])]),a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fal fa-map-marker-alt"}),t._v(" Bangalore")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"footer-copyright d-flex align-items-center justify-content-between pt-35"},[a("div",{staticClass:"copyright-text"},[a("p",[t._v("Copyright © 2022 Basim. All rights reserved.")])])])])])}],l={},r=l,n=a("2877"),o=Object(n["a"])(r,s,i,!1,null,null,null);e["a"]=o.exports},dda8:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("error-com")},i=[],l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("sidebar-home-one",{attrs:{sidebar:t.sidebar},on:{toggleSidebar:t.toggleSidebar}}),s("header-home-one",{attrs:{menuItems:t.navs},on:{toggleSidebar:t.toggleSidebar}}),s("div",{staticClass:"appie-error-area"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"appie-error-content text-center"},[s("img",{attrs:{src:a("fa93"),alt:""}}),s("span",[t._v("Sorry!")]),s("h3",{staticClass:"title"},[t._v("The page can't be found.")]),s("p",[t._v("The page you're looking for isn't available. Try with another page or use the go home button below")]),s("router-link",{attrs:{to:"/"}},[t._v("Back to Home "),s("i",{staticClass:"fal fa-arrow-right"})])],1)])])])]),s("footer-home-one",{staticClass:"mt-160"}),t._m(0)],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"back-to-top"},[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fal fa-arrow-up"})])])}],n=a("cfcc"),o=a("a290"),c=a("9d76"),m={components:{HeaderHomeOne:o["a"],SidebarHomeOne:c["a"],FooterHomeOne:n["a"]},data(){return{sidebar:!1,navs:[{name:"home",path:"/"},{name:"About us",path:"/about-us"},{name:"services",path:"/services"},{name:"pages",childrens:[{name:"Error",path:"/error"}]},{name:"blogs",childrens:[{name:"Blogs",path:"/blogs"},{name:"Blog Details",path:"/blog-details"}]},{name:"contact",path:"/contact"}]}},mounted(){document.addEventListener("scroll",this.topToBottom)},methods:{topToBottom(){const t=document.querySelector(".back-to-top");document.body.scrollTop>window.innerHeight||document.documentElement.scrollTop>window.innerHeight?t.style.display="block":t.style.display="none"},toggleSidebar(){this.sidebar=!this.sidebar}}},u=m,d=a("2877"),f=Object(d["a"])(u,l,r,!1,null,null,null),h=f.exports,v={components:{ErrorCom:h}},p=v,b=Object(d["a"])(p,s,i,!1,null,null,null);e["default"]=b.exports},ecbf:function(t,e,a){},fa93:function(t,e,a){t.exports=a.p+"img/error.982b8554.png"}}]);
//# sourceMappingURL=chunk-f18152e4.7e6437d5.js.map