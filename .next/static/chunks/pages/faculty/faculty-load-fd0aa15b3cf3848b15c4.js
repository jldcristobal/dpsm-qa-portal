(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[615],{14176:function(t,e,s){"use strict";s(85893),s(9008),s(41664),s(37940)},81318:function(t,e,s){"use strict";s(85893),s(41664)},8237:function(t,e,s){"use strict";var i=s(85893),n=s(65988),a=s(41664);e.Z=function(t){return(0,i.jsxs)("div",{className:"jsx-3546386183 row",children:[(0,i.jsxs)("nav",{className:"jsx-3546386183 navbar navbar-expand-lg",children:[(0,i.jsx)("span",{className:"jsx-3546386183 navbar-text",children:(0,i.jsx)("a",{className:"jsx-3546386183 navbar-brand",children:(0,i.jsx)("img",{src:"/dpsm-seal.png",width:"186",height:"150",alt:"DPSM-QA-Portal",className:"jsx-3546386183 d-inline-block align-top"})})}),(0,i.jsx)("h2",{className:"jsx-3546386183",children:" DPSM QA PORTAL "}),(0,i.jsx)("div",{className:"jsx-3546386183 ml-auto",children:(0,i.jsxs)("h5",{className:"jsx-3546386183",children:[" Currently Logged In: ",(0,i.jsx)(a.default,{href:"/settings/change-password",children:(0,i.jsxs)("a",{className:"jsx-3546386183",children:[" ",t.name," "]})})," "]})})]}),(0,i.jsx)(n.default,{id:"3546386183",children:[".navbar.jsx-3546386183{background-color:#910303;width:100%;}","h2.jsx-3546386183,h5.jsx-3546386183{font-family:Georgia;color:#fff;}"]})]})}},97752:function(t,e,s){"use strict";var i=s(85893),n=s(9008),a=s(8237),r=s(37940);s(81318),s(14176),s(49704);e.Z=function(t){var e;return t.approvalList&&(e=t.approvalList),(0,i.jsxs)("div",{className:"container-fluid",children:[(0,i.jsxs)(n.default,{children:[(0,i.jsx)("title",{children:"DPSM-QA-PORTAL"}),(0,i.jsx)("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"}),(0,i.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"}),(0,i.jsx)("script",{src:"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"}),(0,i.jsx)("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"}),(0,i.jsx)("script",{src:"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"})]}),(0,i.jsx)(a.Z,{name:t.name}),(0,i.jsxs)("div",{className:"row",id:"layout_row",children:[(0,i.jsx)(r.Z,{role:t.role,approvalList:e,facultyId:t.facultyId,roleAssignment:t.roleAssignmentFlag}),(0,i.jsx)("div",{className:"col-10",children:(0,i.jsx)("div",{className:"container",children:t.children})})]})]})}},61588:function(t,e,s){"use strict";var i=s(85893);e.Z=function(t){return null!=t.children?(0,i.jsxs)("div",{children:[(0,i.jsxs)("h3",{align:"center",children:[" ",(0,i.jsx)("u",{children:t.children})," "]}),(0,i.jsxs)("h5",{align:"center",children:[" ",t.position,", ",t.unit," "]}),(0,i.jsx)("br",{})]}):(0,i.jsx)("div",{})}},37940:function(t,e,s){"use strict";var i=s(85893),n=s(64121),a=s(65988),r=s(41664),c=s(12102),l=s(11163);e.Z=function(t){var e=(0,l.useRouter)(),s=(0,c.Z)(["user"]),o=(0,n.Z)(s,3),u=(o[0],o[1],o[2]),d=!0,f=!0;return 1!=t.role&&2!=t.role&&3!=t.role||(f=!1,2!=t.role&&3!=t.role||(d=!1)),(0,i.jsxs)("div",{className:"jsx-3733848192 col-2",children:[(0,i.jsxs)("div",{className:"jsx-3733848192 list-group",children:[(0,i.jsx)("a",{"data-toggle":"collapse","data-target":"#facultyMenu","aria-controls":"facultyMenu",className:"jsx-3733848192 list-group-item list-group-item-action list-group-item-secondary",children:" Faculty "}),(0,i.jsxs)("div",{id:"facultyMenu",className:"jsx-3733848192 collapse show",children:[!f&&!d&&(0,i.jsx)(r.default,{href:{pathname:"/faculty"},children:(0,i.jsx)("a",{id:"/faculty"===e.pathname?"active":"inactive",className:"jsx-3733848192 list-group-item list-group-item-action list-group-item-success",children:"Dashboard"})}),!f&&(0,i.jsx)(r.default,{href:{pathname:"/faculty/basic-info"},children:(0,i.jsx)("a",{id:"/faculty/basic-info"===e.pathname?"active":"inactive",className:"jsx-3733848192 list-group-item list-group-item-action list-group-item-success",children:"Basic Information"})}),!f&&(0,i.jsx)(r.default,{href:{pathname:"/faculty/accomplishment"},children:(0,i.jsx)("a",{id:"/faculty/accomplishment"===e.pathname?"active":"inactive",className:"jsx-3733848192 list-group-item list-group-item-action list-group-item-success",children:"Accomplishment"})}),!f&&(0,i.jsx)(r.default,{href:{pathname:"/faculty/faculty-load"},children:(0,i.jsx)("a",{id:"/faculty/faculty-load"===e.pathname?"active":"inactive",className:"jsx-3733848192 list-group-item list-group-item-action list-group-item-success",children:"Faculty Load"})}),!f&&(0,i.jsx)(r.default,{href:{pathname:"/faculty/evaluation"},children:(0,i.jsx)("a",{id:"/faculty/evaluation"===e.pathname?"active":"inactive",className:"jsx-3733848192 list-group-item list-group-item-action list-group-item-success ",children:"Peer Evaluation"})}),!f&&!d&&(0,i.jsx)(r.default,{href:{pathname:"/faculty/view/all"},children:(0,i.jsx)("a",{id:"/faculty/view/all"===e.pathname?"active":"inactive",className:"jsx-3733848192 list-group-item list-group-item-action list-group-item-success ",children:"Faculty List"})}),!f&&!d&&(0,i.jsx)(r.default,{href:{pathname:"/faculty/approval"},children:(0,i.jsxs)("a",{id:"/faculty/approval"===e.pathname?"active":"inactive",className:"jsx-3733848192 list-group-item list-group-item-action list-group-item-success ",children:["Pending Approvals \xa0",t.approvalList.facultyCount>0&&(0,i.jsx)("span",{className:"jsx-3733848192 badge badge-danger",children:t.approvalList.facultyCount})]})}),f&&(0,i.jsx)(r.default,{href:{pathname:"/admin"},children:(0,i.jsx)("a",{id:"/admin"===e.pathname?"active":"inactive",className:"jsx-3733848192 list-group-item list-group-item-action list-group-item-success ",children:"Faculty List"})}),!f&&!d&&t.roleAssignment&&(0,i.jsx)(r.default,{href:{pathname:"/faculty/role-assignment"},children:(0,i.jsxs)("a",{id:"/faculty/role-assignment"===e.pathname?"active":"inactive",className:"jsx-3733848192 list-group-item list-group-item-action list-group-item-success",children:["Role Assignment \xa0",(0,i.jsx)("span",{className:"jsx-3733848192 badge badge-danger",children:"!"})]})}),!f&&!d&&!t.roleAssignment&&(0,i.jsx)(r.default,{href:{pathname:"/faculty/role-assignment"},children:(0,i.jsx)("a",{id:"/faculty/role-assignment"===e.pathname?"active":"inactive",className:"jsx-3733848192 list-group-item list-group-item-action list-group-item-success",children:"Role Assignment"})})]})]}),(0,i.jsx)("div",{className:"jsx-3733848192 list-group",children:(0,i.jsx)(r.default,{href:"/student",children:(0,i.jsx)("a",{className:"jsx-3733848192 list-group-item list-group-item-action list-group-item-secondary",children:"Student"})})}),(0,i.jsx)("div",{className:"jsx-3733848192 list-group",children:(0,i.jsx)(r.default,{href:"/alumni",children:(0,i.jsx)("a",{className:"jsx-3733848192 list-group-item list-group-item-action list-group-item-secondary",children:"Alumni"})})}),(0,i.jsx)("div",{className:"jsx-3733848192 list-group",children:(0,i.jsx)(r.default,{href:"/department-activities",children:(0,i.jsx)("a",{className:"jsx-3733848192 list-group-item list-group-item-action list-group-item-secondary",children:"Department Activities"})})}),(0,i.jsx)("div",{className:"jsx-3733848192 list-group",children:(0,i.jsx)(r.default,{href:"/login",children:(0,i.jsx)("a",{onClick:function(){u("user")},className:"jsx-3733848192 list-group-item list-group-item-action list-group-item-danger",children:"Log Out"})})}),(0,i.jsx)(a.default,{id:"3733848192",children:[".col-2.jsx-3733848192{background-color:#017823;}",".list-group-item-success.jsx-3733848192{text-indent:20%;}","#active.jsx-3733848192{background-color:#005919;color:#fff;}"]})]})}},34856:function(t,e,s){"use strict";s.r(e),s.d(e,{__N_SSP:function(){return l}});var i=s(85893),n=s(26265),a=s(65988),r=s(97752),c=(s(41664),s(59187));s(61588);var l=!0;e.default=function(t){var e;return(0,i.jsxs)(r.Z,{userId:t.data.userId,facultyId:t.data.facultyId,role:t.data.role,name:t.data.name,approvalList:t.approvalList,roleAssignmentFlag:t.roleAssignmentFlag,children:[(0,i.jsx)("br",{className:"jsx-4140694371"}),(0,i.jsx)(c.Z,(e={name:t.name,token:t.token.user,unit:t.unit,position:t.position,facultyId:t.data.facultyId},(0,n.Z)(e,"name",t.data.name),(0,n.Z)(e,"facultyFlag",!0),(0,n.Z)(e,"clerkFlag",!1),(0,n.Z)(e,"children",t.facultyLoad),e)),(0,i.jsx)(a.default,{id:"4140694371",children:[".list-group-item-info.jsx-4140694371{text-indent:5%;}"]})]})}},4818:function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faculty/faculty-load",function(){return s(34856)}])},92447:function(t,e,s){"use strict";function i(t,e,s,i,n,a,r){try{var c=t[a](r),l=c.value}catch(o){return void s(o)}c.done?e(l):Promise.resolve(l).then(i,n)}function n(t){return function(){var e=this,s=arguments;return new Promise((function(n,a){var r=t.apply(e,s);function c(t){i(r,n,a,c,l,"next",t)}function l(t){i(r,n,a,c,l,"throw",t)}c(void 0)}))}}s.d(e,{Z:function(){return n}})},74047:function(t,e,s){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}s.d(e,{Z:function(){return i}})},52700:function(t,e,s){"use strict";function i(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,e,s){return e&&i(t.prototype,e),s&&i(t,s),t}s.d(e,{Z:function(){return n}})},20775:function(t,e,s){"use strict";function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}s.d(e,{Z:function(){return i}})},8127:function(t,e,s){"use strict";function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function n(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}s.d(e,{Z:function(){return n}})},58580:function(t,e,s){"use strict";function i(t){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){return!e||"object"!==i(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}s.d(e,{Z:function(){return n}})},80950:function(){},46601:function(){},89214:function(){},8623:function(){},7748:function(){},85568:function(){},56619:function(){},77108:function(){},52361:function(){},94616:function(){}},function(t){t.O(0,[155,851,704,669,513,187,774,888,179],(function(){return e=4818,t(t.s=e);var e}));var e=t.O();_N_E=e}]);