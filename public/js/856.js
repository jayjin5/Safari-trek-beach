(self.webpackChunk=self.webpackChunk||[]).push([[856],{2409:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var i=n(3645),a=n.n(i)()((function(t){return t[1]}));a.push([t.id,"#destination-card .bg-image{background-size:cover;position:relative;width:100%;height:0;padding-top:56.25%}#destination-card{transition:box-shadow .2s ease-in-out,transform .3s ease-in-out;box-shadow:0 2px 3px rgb(0 0 0/18%);cursor:pointer}#destination-card:hover{box-shadow:0 1px 13px #666}#destination-card .card-text{-webkit-line-clamp:3;--max-lines:3;min-height:75px}#destination-card .card-text,#destination-card .card-title{display:-webkit-box;-webkit-box-orient:vertical;position:relative;max-height:calc(var(--lh)*var(--max-lines));overflow:hidden;padding-right:1rem}#destination-card .card-title{-webkit-line-clamp:1;--max-lines:1;min-height:24px}#destination-card .subtitle{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#destination-card .subtitle:first-letter{text-transform:uppercase}",""]);const s=a},8306:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var i=n(3645),a=n.n(i)()((function(t){return t[1]}));a.push([t.id,".vue-content-placeholders-img,.vue-content-placeholders-text__line{background:#c9c9c9!important}.vue-content-placeholders-img{height:200px!important}",""]);const s=a},9604:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var i=n(3645),a=n.n(i)()((function(t){return t[1]}));a.push([t.id,".destination-page{padding-top:50px;padding-bottom:100px}.destination-page section{margin-top:100px}",""]);const s=a},7814:(t,e,n)=>{"use strict";n.d(e,{Z:()=>c});const i={name:"TourCardSkelecton",data:function(){return{}}};var a=n(3379),s=n.n(a),r=n(8306),o={insert:"head",singleton:!1};s()(r.Z,o);r.Z.locals;const c=(0,n(1900).Z)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card mb-3 mx-2"},[n("content-placeholders",{attrs:{rounded:!0}},[n("content-placeholders-img"),t._v(" "),n("content-placeholders-heading"),t._v(" "),n("content-placeholders-heading"),t._v(" "),n("content-placeholders-heading")],1)],1)}),[],!1,null,null,null).exports},8856:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>m});const i={name:"DestinationCard",props:{destination:Object},components:{},data:function(){return{}},created:function(){},methods:{toInnerPage:function(){var t=this.$router.resolve({name:"Destination Package",params:{slug:this.destination.post_slug}});window.open(t.href,"_blank")}}};var a=n(3379),s=n.n(a),r=n(2409),o={insert:"head",singleton:!1};s()(r.Z,o);r.Z.locals;var c=n(1900);const l=(0,c.Z)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card mb-3 mx-2",attrs:{id:"destination-card"},on:{click:t.toInnerPage}},[n("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.destination.post_image,expression:"destination.post_image",arg:"background-image"}],staticClass:"bg-image hover-overlay ripple",attrs:{"data-mdb-ripple-color":"light",title:t.destination.post_title}},[t._m(0)]),t._v(" "),n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title fw-bold text-center text-danger",attrs:{title:t.destination.post_title}},[n("div",[t._v(t._s(t.destination.post_title))])]),t._v(" "),n("h6",{staticClass:"fw-bold text-dark mt-4 mb-2 subtitle",staticStyle:{"text-overflow":"ellipsis"},attrs:{title:t.destination.post_sub_title}},[t._v("\n      "+t._s(t.destination.post_sub_title)+"\n    ")]),t._v(" "),n("p",{staticClass:"card-text",attrs:{title:t.destination.short_description}},[t._v("\n      "+t._s(t.destination.short_description)+"\n    ")]),t._v(" "),t._m(1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",[e("div",{staticClass:"mask"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"btn btn-warning",attrs:{type:"button"}},[t._v("\n      Read More "),n("span",{staticClass:"fa fa-angle-double-right ms-2"})])}],!1,null,null,null).exports;var d=n(629);function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const g={name:"DestinationPage",components:{DestinationCard:l,TourCardSkelecton:n(7814).Z},data:function(){return{current_destination_page:null,destinations_per_page:6,current_page_destinations:[],total_page_number:1}},metaInfo:function(){return{title:"Destination - Page ".concat(this.current_destination_page," of ").concat(this.total_page_number," | Safari-Trek-Beach"),meta:[{property:"og:title",content:"Safari-Trek-Beach Destination"},{name:"twitter:title",content:"Safari-Trek-Beach Destination"}]}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({page_id:function(){var t=this.$route.params.id;return null!=t?t.slice(0,t.length):""}},(0,d.Se)({listDestinations:"destinationController/listDestinations",loading:"tourcard_loading"})),watch:{current_destination_page:function(t){var e=this;t>1?this.$router.push({name:"Destination",params:{id:t,page:"page"}}).then((function(){e.getListDestinations()})).catch((function(){})):1==t&&this.$router.push({name:"Destination",params:{}}).then((function(){e.getListDestinations()})).catch((function(){}))}},created:function(){""!=this.page_id?this.current_destination_page=parseInt(this.page_id):this.current_destination_page=1,this.getListDestinations()},methods:{getListDestinations:function(){var t=this;this.$store.dispatch("destinationController/getListDestinations").then((function(){t.getCurrentPageDestinations(t.current_destination_page),t.total_page_number=Math.floor(t.listDestinations.length/t.destinations_per_page),t.listDestinations.length%t.destinations_per_page>0&&(t.total_page_number=t.total_page_number+1)}))},getCurrentPageDestinations:function(t){this.current_page_destinations=[];for(var e=0,n=(t-1)*this.destinations_per_page;n<t*this.destinations_per_page;n++)null!=this.listDestinations[n]&&(this.current_page_destinations[e]=this.listDestinations[n],e++)}}};var _=n(9604),h={insert:"head",singleton:!1};s()(_.Z,h);_.Z.locals;const m=(0,c.Z)(g,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"destination-page"},[n("div",{staticClass:"container"},[n("section",[t._m(0),t._v(" "),t.loading?n("div",{staticClass:"row gx-0"},t._l(6,(function(t,e){return n("div",{key:e+"bloglist",staticClass:"col-lg-4 col-md-6 col-xs-12"},[n("TourCardSkelecton")],1)})),0):n("div",{staticClass:"row gx-0"},[t._l(t.current_page_destinations,(function(t,e){return n("div",{key:"destination"+e,staticClass:"col-lg-4 col-md-6 col-xs-12"},[n("DestinationCard",{attrs:{destination:t}})],1)})),t._v(" "),null!=t.listDestinations?n("div",{staticClass:"d-flex justify-content-center mt-4"},[n("paginate",{attrs:{"page-count":t.total_page_number,"prev-text":"Prev","next-text":"Next","container-class":"pagination","page-class":"page-item","prev-class":"page-link","next-class":"page-link","page-link-class":"page-link"},model:{value:t.current_destination_page,callback:function(e){t.current_destination_page=e},expression:"current_destination_page"}})],1):t._e()],2)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"section-header mt-5"},[n("h3",[t._v("DESTINATIONS")])])}],!1,null,null,null).exports}}]);