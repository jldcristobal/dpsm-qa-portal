(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[49],{14176:function(e,t,a){"use strict";a(85893),a(9008),a(41664),a(37940)},81318:function(e,t,a){"use strict";a(85893),a(41664)},8237:function(e,t,a){"use strict";var n=a(85893),s=a(65988),r=a(41664);t.Z=function(e){var t="";switch(e.role){case 1:t="Faculty";break;case 2:t="Unit Head";break;case 3:t="Department Chair";break;default:t="Admin Clerk"}return(0,n.jsxs)("div",{className:"jsx-3546386183 row",children:[(0,n.jsxs)("nav",{className:"jsx-3546386183 navbar navbar-expand-lg",children:[(0,n.jsx)("span",{className:"jsx-3546386183 navbar-text",children:(0,n.jsx)("a",{className:"jsx-3546386183 navbar-brand",children:(0,n.jsx)("img",{src:"/dpsm-seal.png",width:"186",height:"150",alt:"DPSM-QA-Portal",className:"jsx-3546386183 d-inline-block align-top"})})}),(0,n.jsx)("h2",{className:"jsx-3546386183",children:" DPSM QA PORTAL "}),(0,n.jsx)("div",{className:"jsx-3546386183 ml-auto",children:(0,n.jsxs)("h5",{className:"jsx-3546386183",children:[" Currently Logged In: ",(0,n.jsx)(r.default,{href:"/settings/change-password",children:(0,n.jsxs)("a",{className:"jsx-3546386183",children:[" ",e.name," (",t,") "]})})," "]})})]}),(0,n.jsx)(s.default,{id:"3546386183",children:[".navbar.jsx-3546386183{background-color:#910303;width:100%;}","h2.jsx-3546386183,h5.jsx-3546386183{font-family:Georgia;color:#fff;}"]})]})}},97752:function(e,t,a){"use strict";var n=a(85893),s=a(9008),r=a(8237),i=a(37940);a(81318),a(14176),a(49704);t.Z=function(e){var t;return e.approvalList&&(t=e.approvalList),(0,n.jsxs)("div",{className:"container-fluid",children:[(0,n.jsxs)(s.default,{children:[(0,n.jsx)("title",{children:"DPSM-QA-PORTAL"}),(0,n.jsx)("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"}),(0,n.jsx)("script",{src:"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"}),(0,n.jsx)("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"}),(0,n.jsx)("script",{src:"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"})]}),(0,n.jsx)(r.Z,{name:e.name,role:e.role}),(0,n.jsxs)("div",{className:"row",id:"layout_row",children:[(0,n.jsx)(i.Z,{role:e.role,approvalList:t,facultyId:e.facultyId,roleAssignment:e.roleAssignmentFlag}),(0,n.jsx)("div",{className:"col",id:"layout_content",children:e.children})]})]})}},37940:function(e,t,a){"use strict";var n=a(85893),s=a(64121),r=a(65988),i=a(41664),l=a(12102),c=a(67294),o=a(11163);t.Z=function(e){var t=(0,o.useRouter)(),a=(0,l.Z)(["user"]),d=(0,s.Z)(a,3),u=(d[0],d[1],d[2]),h=!0,m=!0;1!=e.role&&2!=e.role&&3!=e.role||(m=!1,2!=e.role&&3!=e.role||(h=!1));var p=(0,c.useState)("false"),f=p[0],x=p[1];return(0,n.jsxs)("div",{id:"sidebar",children:[(0,n.jsx)("div",{className:"alert alert-info col-12 d-md-none text-center",onClick:function(){x(!f)},children:" Main Menu "}),(0,n.jsxs)("div",{id:"menu",className:"jsx-1836586042 "+((f?null:"d-none d-md-block")||""),children:[(0,n.jsxs)("div",{className:"jsx-1836586042 list-group col-12",children:[(0,n.jsx)("a",{"data-toggle":"collapse","data-target":"#facultyMenu","aria-controls":"facultyMenu",className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-secondary",children:" Faculty "}),(0,n.jsxs)("div",{id:"facultyMenu",className:"jsx-1836586042 collapse show",children:[!m&&!h&&(0,n.jsx)(i.default,{href:{pathname:"/faculty"},children:(0,n.jsx)("a",{id:"/faculty"===t.pathname?"active":"inactive",className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-success",children:"Dashboard"})}),!m&&(0,n.jsx)(i.default,{href:{pathname:"/faculty/basic-info"},children:(0,n.jsx)("a",{id:"/faculty/basic-info"===t.pathname?"active":"inactive",className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-success",children:"Basic Information"})}),!m&&(0,n.jsx)(i.default,{href:{pathname:"/faculty/accomplishment"},children:(0,n.jsx)("a",{id:"/faculty/accomplishment"===t.pathname?"active":"inactive",className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-success",children:"Accomplishment"})}),!m&&(0,n.jsx)(i.default,{href:{pathname:"/faculty/faculty-load"},children:(0,n.jsx)("a",{id:"/faculty/faculty-load"===t.pathname?"active":"inactive",className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-success",children:"Faculty Load"})}),!m&&!h&&(0,n.jsx)(i.default,{href:{pathname:"/faculty/view/all"},children:(0,n.jsx)("a",{id:"/faculty/view/all"===t.pathname?"active":"inactive",className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-success ",children:"Faculty List"})}),!m&&!h&&(0,n.jsx)(i.default,{href:{pathname:"/faculty/approval"},children:(0,n.jsxs)("a",{id:"/faculty/approval"===t.pathname?"active":"inactive",className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-success ",children:["Pending Approvals \xa0",e.approvalList.facultyCount>0&&(0,n.jsx)("span",{className:"jsx-1836586042 badge badge-danger",children:e.approvalList.facultyCount})]})}),m&&(0,n.jsx)(i.default,{href:{pathname:"/admin"},children:(0,n.jsx)("a",{id:"/admin"===t.pathname?"active":"inactive",className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-success ",children:"Faculty List"})}),!m&&!h&&e.roleAssignment&&(0,n.jsx)(i.default,{href:{pathname:"/faculty/role-assignment"},children:(0,n.jsxs)("a",{id:"/faculty/role-assignment"===t.pathname?"active":"inactive",className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-success",children:["Role Assignment \xa0",(0,n.jsx)("span",{className:"jsx-1836586042 badge badge-danger",children:"!"})]})}),!m&&!h&&!e.roleAssignment&&(0,n.jsx)(i.default,{href:{pathname:"/faculty/role-assignment"},children:(0,n.jsx)("a",{id:"/faculty/role-assignment"===t.pathname?"active":"inactive",className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-success",children:"Role Assignment"})})]})]}),(0,n.jsx)("div",{className:"jsx-1836586042 list-group col-12",children:(0,n.jsx)(i.default,{href:"/login",children:(0,n.jsx)("a",{onClick:function(){u("user")},className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-danger",children:"Log Out"})})}),(0,n.jsx)(r.default,{id:"1836586042",children:["#menu.jsx-1836586042{background-color:#017823;}",".list-group-item-success.jsx-1836586042{text-indent:20%;}","#active.jsx-1836586042{background-color:#005919;color:#fff;}"]})]})]})}},75372:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSP:function(){return E},default:function(){return M}});var n=a(85893),s=a(65988),r=a(97752),i=a(809),l=a.n(i),c=a(92447),o=a(11163),d=a(17513),u=a(9669),h=a.n(u);function m(e,t,a){return p.apply(this,arguments)}function p(){return(p=(0,c.Z)(l().mark((function e(t,a,n){var s,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!n){e.next=8;break}return"0"==t&&(t=null),r="http://localhost:3001/api/faculty/basic-info/unit/"+a,e.next=6,h()({method:"PUT",url:r,data:{incomingUnitHead:t,approverRemarks:null},headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 6:return s=e.sent,e.abrupt("return",s.data);case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var f=function(e){var t;return null!=e.children&&(t=Object.keys(e.facultyListInfo).map((function(t){var a=!1;if(e.facultyListInfo[t].faculty_personal_info)return e.facultyListInfo[t].facultyId==e.children.incomingUnitHead&&(a=!0),(0,n.jsx)("option",{value:e.facultyListInfo[t].facultyId,selected:a,children:e.facultyListInfo[t].faculty_personal_info.lastName+", "+e.facultyListInfo[t].faculty_personal_info.firstName})}))),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{align:"center",children:" Unit Head Assignment "}),(0,n.jsx)("div",{role:"alert",id:"assignalert",style:{visibility:"hidden"}}),(0,n.jsx)("br",{}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:"NOTE: Changing the value on the dropdown will automatically update the value of the incoming unit head and notify the department chair for possible approval"}),(0,n.jsx)("table",{className:"table table-striped table-sm",children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Incoming Unit Head"}),(0,n.jsx)("th",{children:"Status"}),(0,n.jsx)("th",{children:"Approver Remarks"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("form",{children:(0,n.jsxs)("select",{name:"faculty",className:"form-control",id:"faculty",onChange:(0,c.Z)(l().mark((function t(){var a,n,s;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=document.getElementById("assignalert"),n=document.getElementById("faculty").value,t.next=4,m(n,e.children.unitId,e.token);case 4:1==(s=t.sent).success?(a.className="alert alert-success",a.style="visibility: visible",a.innerHTML=s.message):(a.className="alert alert-danger",a.style="visibility: visible",s.error?a.innerHTML=s.error[0].message:a.innerHTML=s.message),$("#assignalert").fadeTo(5e3,500).slideUp(500,(function(){$("#assignalert").slideUp(500)})),o.default.push("/faculty/role-assignment","/faculty/role-assignment");case 8:case"end":return t.stop()}}),t)}))),children:[(0,n.jsx)("option",{value:"0",children:"--SELECT FACULTY--"}),t]})})}),(0,n.jsx)("td",{children:e.children.approverRemarks?"Rejected":"Pending"}),(0,n.jsx)("td",{children:e.children.approverRemarks||"None"})]},e.children.unitId)]})})]})]})};function x(e,t,a,n,s){return j.apply(this,arguments)}function j(){return(j=(0,c.Z)(l().mark((function e(t,a,n,s,r){var i,c,o,d,u,m;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!r){e.next=25;break}if(s){e.next=20;break}return i="http://localhost:3001/api/user/"+t,e.next=6,h()({method:"PUT",url:i,data:{role:"1"},headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)}});case 6:if(1!=e.sent.data.success){e.next=18;break}return c="http://localhost:3001/api/user/"+a,e.next=11,h()({method:"PUT",url:c,data:{role:"2"},headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)}});case 11:if(1!=(o=e.sent).data.success){e.next=17;break}return d="http://localhost:3001/api/faculty/basic-info/unit/"+n,e.next=16,h()({method:"PUT",url:d,data:{incomingUnitHead:null},headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)}});case 16:e.sent;case 17:return e.abrupt("return",o.data);case 18:e.next=25;break;case 20:return u="http://localhost:3001/api/faculty/basic-info/unit/"+n,e.next=23,h()({method:"PUT",url:u,data:{approverRemarks:s},headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)}});case 23:return m=e.sent,e.abrupt("return",m.data);case 25:e.next=31;break;case 27:return e.prev=27,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",e.t0);case 31:case"end":return e.stop()}}),e,null,[[0,27]])})))).apply(this,arguments)}var b=function(e){var t,a=0,s=0,r=0;function i(e,t,n){a=e,s=t,r=n}return t=null!=e.children?Object.keys(e.children).map((function(t){var a=e.children[t].currentUnitHead.faculty_personal_info.lastName+", "+e.children[t].currentUnitHead.faculty_personal_info.firstName,s=e.children[t].faculty_personal_info.lastName+", "+e.children[t].faculty_personal_info.firstName;return(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e.children[t].unit}),(0,n.jsx)("td",{children:a}),(0,n.jsx)("td",{children:s}),(0,n.jsx)("td",{children:(0,n.jsxs)("div",{className:"btn-group",children:[(0,n.jsx)("a",{className:"btn btn-info","data-toggle":"modal","data-target":"#approveUnitHead",onClick:function(){i(e.children[t].currentUnitHead.faculty_personal_info.user.userId,e.children[t].faculty_personal_info.user.userId,e.children[t].unitId)},children:"Approve"}),(0,n.jsx)("a",{className:"btn btn-danger","data-toggle":"modal","data-target":"#rejectUnitHead",onClick:function(){i(e.children[t].currentUnitHead.faculty_personal_info.user.userId,e.children[t].faculty_personal_info.user.userId,e.children[t].unitId)},children:"Reject"})]})})]},e.children[t].unitId)})):(0,n.jsx)("tr",{children:(0,n.jsx)("td",{colSpan:"4",children:(0,n.jsx)("p",{align:"center",children:"No data available!"})})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{align:"center",children:" Unit Head Assignment "}),(0,n.jsx)("div",{role:"alert",id:"assignalert",style:{visibility:"hidden"}}),(0,n.jsx)("br",{}),(0,n.jsx)("div",{children:(0,n.jsx)("table",{className:"table table-striped table-sm",children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Unit"}),(0,n.jsx)("th",{children:"Current Unit Head"}),(0,n.jsx)("th",{children:"Incoming Unit Head"}),(0,n.jsx)("th",{children:"Action"})]}),t]})})}),(0,n.jsx)("div",{className:"modal fade",id:"approveUnitHead",tabIndex:"-1",role:"dialog","aria-labelledby":"approveUnitHeadLabel","aria-hidden":"true",children:(0,n.jsx)("div",{className:"modal-dialog",role:"document",children:(0,n.jsxs)("div",{className:"modal-content",children:[(0,n.jsxs)("div",{className:"modal-header",children:[(0,n.jsx)("h5",{className:"modal-title",id:"approveUnitHeadLabel",children:"Approve Unit Head Change"}),(0,n.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:(0,n.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,n.jsxs)("div",{className:"modal-body",children:[(0,n.jsx)("hr",{}),(0,n.jsx)("p",{children:" Are you sure you want to approve the change in unit head role? "})]}),(0,n.jsxs)("div",{className:"modal-footer",children:[(0,n.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:"No, don't approve"}),(0,n.jsx)("button",{type:"button",className:"btn btn-danger","data-dismiss":"modal",onClick:(0,c.Z)(l().mark((function t(){var n,i;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=document.getElementById("assignalert"),$("#approveUnitHead").modal("toggle"),t.next=4,x(a,s,r,!1,e.token);case 4:1==(i=t.sent).success?(n.className="alert alert-success",n.style="visibility: visible",n.innerHTML=i.message):(n.className="alert alert-danger",n.style="visibility: visible",i.error?n.innerHTML=i.error[0].message:n.innerHTML=i.message),$("#assignalert").fadeTo(5e3,500).slideUp(500,(function(){$("#assignalert").slideUp(500)})),o.default.push("/faculty/role-assignment","/faculty/role-assignment");case 8:case"end":return t.stop()}}),t)}))),children:"Yes, approve"})]})]})})}),(0,n.jsx)("div",{className:"modal fade",id:"rejectUnitHead",tabIndex:"-1",role:"dialog","aria-labelledby":"rejectUnitHeadLabel","aria-hidden":"true",children:(0,n.jsx)("div",{className:"modal-dialog",role:"document",children:(0,n.jsxs)("div",{className:"modal-content",children:[(0,n.jsxs)("div",{className:"modal-header",children:[(0,n.jsx)("h5",{className:"modal-title",id:"rejectUnitHeadLabel",children:"Reject Unit Head Change"}),(0,n.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:(0,n.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,n.jsxs)("div",{className:"modal-body",children:[(0,n.jsx)("p",{children:" Are you sure you want to reject this change in unit head? "}),(0,n.jsx)("div",{className:"form-row",children:(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{htmlFor:"approverRemarks",children:" Reason/Remarks for Rejection "}),(0,n.jsx)("input",{className:"form-control",type:"text",name:"approverRemarks",id:"approverRemarks",placeholder:"Input remarks",required:!0})]})}),(0,n.jsx)("hr",{})]}),(0,n.jsxs)("div",{className:"modal-footer",children:[(0,n.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:"No, don't reject"}),(0,n.jsx)("button",{type:"button",className:"btn btn-danger",onClick:(0,c.Z)(l().mark((function t(){var n,i,c;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=document.getElementById("assignalert"),$("#rejectUnitHead").modal("toggle"),i=document.getElementById("approverRemarks").value,t.next=5,x(a,s,r,i,e.token);case 5:1==(c=t.sent).success?(n.className="alert alert-success",n.style="visibility: visible",n.innerHTML=c.message):(n.className="alert alert-danger",n.style="visibility: visible",c.error?n.innerHTML=c.error[0].message:n.innerHTML=c.message),$("#assignalert").fadeTo(5e3,500).slideUp(500,(function(){$("#assignalert").slideUp(500)})),o.default.push("/faculty/role-assignment","/faculty/role-assignment");case 9:case"end":return t.stop()}}),t)}))),children:"Yes, reject"})]})]})})})]})},v=(a(41664),a(49704)),g=a.n(v);function y(e,t){return N.apply(this,arguments)}function N(){return(N=(0,c.Z)(l().mark((function e(t,a){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!a){e.next=13;break}return e.prev=2,e.next=5,h().delete("http://localhost:3001/api/user/admin/"+t,{headers:{Authorization:"Bearer ".concat(a)}});case 5:return n=e.sent,e.abrupt("return",n.data);case 9:return e.prev=9,e.t0=e.catch(2),console.error(e.t0),e.abrupt("return",e.t0);case 13:e.next=19;break;case 15:return e.prev=15,e.t1=e.catch(0),console.error(e.t1),e.abrupt("return",e.t1);case 19:case"end":return e.stop()}}),e,null,[[0,15],[2,9]])})))).apply(this,arguments)}var k=a(74047),w=a(52700),C=a(8127),L=a(58580),A=a(20775);function I(e,t){return T.apply(this,arguments)}function T(){return(T=(0,c.Z)(l().mark((function e(t,a){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!a){e.next=15;break}return e.prev=2,t.append("password","password"),t.append("role","5"),e.next=7,h()({method:"POST",url:"http://localhost:3001/api/user/add",data:t,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)}});case 7:return n=e.sent,e.abrupt("return",n.data);case 11:return e.prev=11,e.t0=e.catch(2),console.error(e.t0),e.abrupt("return",e.t0);case 15:e.next=21;break;case 17:return e.prev=17,e.t1=e.catch(0),console.error(e.t1),e.abrupt("return",e.t1);case 21:case"end":return e.stop()}}),e,null,[[0,17],[2,11]])})))).apply(this,arguments)}function U(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=(0,A.Z)(e);if(t){var s=(0,A.Z)(this).constructor;a=Reflect.construct(n,arguments,s)}else a=n.apply(this,arguments);return(0,L.Z)(this,a)}}var _=function(e){(0,C.Z)(a,e);var t=U(a);function a(e){return(0,k.Z)(this,a),t.call(this,e)}return(0,w.Z)(a,[{key:"render",value:function(){var e=this;return(0,n.jsx)(d.J9,{initialValues:{name:"",upemail:""},onSubmit:function(){var t=(0,c.Z)(l().mark((function t(a,n){var s,r,i,c,d;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=n.resetForm,r=document.getElementById("clerkalert"),i=document.getElementById("clerkForm"),c=new FormData(i),t.next=6,I(c,e.props.token);case 6:1==(d=t.sent).success?(r.className="alert alert-success",r.style="visibility: visible",r.innerHTML=d.message):(r.className="alert alert-danger",d.error?r.innerHTML=d.error[0].message:r.innerHTML=d.message),r.setAttribute("style","visibility: visible"),$("#clerkalert").fadeTo(5e3,500).slideUp(500,(function(){$("#clerkalert").slideUp(500)})),s(),o.default.push("/faculty/role-assignment");case 12:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),children:function(e){e.values,e.errors,e.touched;var t=e.isSubmitting;return(0,n.jsxs)(d.l0,{id:"clerkForm",children:[(0,n.jsx)("hr",{className:"jsx-371132353"}),(0,n.jsx)("br",{className:"jsx-371132353"}),(0,n.jsx)("h6",{className:"jsx-371132353",children:"Required"}),(0,n.jsxs)("div",{className:"jsx-371132353 form-row",children:[(0,n.jsxs)("div",{className:"jsx-371132353 form-group col-md-6",children:[(0,n.jsx)("label",{htmlFor:"ClerkName[]",className:"jsx-371132353 required-label",children:" Name "}),(0,n.jsx)("input",{type:"text",name:"name",placeholder:"Input name",required:!0,className:"jsx-371132353 form-control"})]}),(0,n.jsxs)("div",{className:"jsx-371132353 form-group col-md-6",children:[(0,n.jsx)("label",{htmlFor:"ClerkEmail[]",className:"jsx-371132353 required-label",children:" UP Email Address "}),(0,n.jsx)("input",{type:"email",name:"upemail",placeholder:"Input UP Email",required:!0,className:"jsx-371132353 form-control"})]})]}),(0,n.jsx)("br",{className:"jsx-371132353"}),(0,n.jsx)("button",{type:"submit",disabled:t,className:"jsx-371132353 btn btn-primary",children:"Add Clerk"}),(0,n.jsx)(s.default,{id:"371132353",children:['label.required-label.jsx-371132353:after{content:"*";color:#f00;}','h6.jsx-371132353:before{content:"* ";color:#f00;}']})]})}})}}]),a}(a(67294).Component);var H=function(e){var t,a=0;return t=null!=e.children?Object.keys(e.children).map((function(t){return(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e.children[t].name}),(0,n.jsx)("td",{children:(0,n.jsx)("div",{className:"btn-group",children:(0,n.jsx)("a",{className:"btn btn-danger","data-toggle":"modal","data-target":"#deleteClerk",onClick:function(){var n;n=e.children[t].userId,a=n},children:"Delete"})})})]},e.children[t].userId)})):(0,n.jsx)("td",{colSpan:"2",children:(0,n.jsx)("p",{align:"center",children:"No data available!"})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{align:"center",children:" Admin Clerk Assignment "}),(0,n.jsx)("div",{className:"alert alert-success",role:"alert",id:"clerkalert",style:{visibility:"hidden"}}),(0,n.jsx)("br",{}),(0,n.jsx)("div",{children:(0,n.jsx)("table",{className:"table table-striped table-sm",children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Action"})]}),t]})})}),(0,n.jsx)("br",{}),(0,n.jsx)(_,{token:e.token}),(0,n.jsx)("div",{className:"modal fade",id:"deleteClerk",tabIndex:"-1",role:"dialog","aria-labelledby":"deleteClerkLabel","aria-hidden":"true",children:(0,n.jsx)("div",{className:"modal-dialog",role:"document",children:(0,n.jsxs)("div",{className:"modal-content",children:[(0,n.jsxs)("div",{className:"modal-header",children:[(0,n.jsx)("h5",{className:"modal-title",id:"deleteClerkLabel",children:"Delete Admin Clerk"}),(0,n.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:(0,n.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,n.jsxs)("div",{className:"modal-body",children:[(0,n.jsx)("hr",{}),(0,n.jsx)("p",{children:" Are you sure you want to delete this admin clerk? "})]}),(0,n.jsxs)("div",{className:"modal-footer",children:[(0,n.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:"No, don't delete"}),(0,n.jsx)("button",{type:"button",className:"btn btn-danger","data-dismiss":"modal",onClick:(0,c.Z)(l().mark((function t(){var n,s;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=document.getElementById("clerkalert"),$("#deleteClerk").modal("toggle"),t.next=4,y(a,e.token);case 4:1==(s=t.sent).success?(n.className="alert alert-success",n.style="visibility: visible",n.innerHTML=s.message):(n.className="alert alert-danger",s.error?n.innerHTML=s.error[0].message:n.innerHTML=s.message),$("#clerkalert").fadeTo(5e3,500).slideUp(500,(function(){$("#clerkalert").slideUp(500)})),o.default.push("/faculty/role-assignment","/faculty/role-assignment");case 8:case"end":return t.stop()}}),t)}))),children:"Yes, delete"})]})]})})})]})};function Z(e,t){return P.apply(this,arguments)}function P(){return(P=(0,c.Z)(l().mark((function e(t,a){var n,s,r,i,c;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!a){e.next=14;break}return n=g().decode(a),s=n.userId,r="http://localhost:3001/api/user/"+s,e.next=7,h()({method:"PUT",url:r,data:{role:"1"},headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)}});case 7:if(1!=e.sent.data.success){e.next=14;break}return i="http://localhost:3001/api/user/"+t,e.next=12,h()({method:"PUT",url:i,data:{role:"3"},headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)}});case 12:return c=e.sent,e.abrupt("return",c.data);case 14:e.next=20;break;case 16:return e.prev=16,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}var R=function(e){var t;return null!=e.children&&(t=Object.keys(e.children).map((function(t){return(0,n.jsx)("option",{value:e.children[t].userId,children:e.children[t].lastName+", "+e.children[t].firstName},e.children[t].userId)}))),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{align:"center",children:" Department Chair Assignment "}),(0,n.jsx)("div",{className:"alert alert-success",role:"alert",id:"deptchairalert",style:{visibility:"hidden"}}),(0,n.jsx)("br",{}),(0,n.jsxs)("div",{className:"jumbotron",children:[(0,n.jsxs)("div",{className:"form-group col-md-8",children:[(0,n.jsx)("label",{htmlFor:"deptChair",children:" Select New Department Chair "}),(0,n.jsxs)("select",{className:"form-control",name:"deptChair",id:"deptChair",required:!0,children:[(0,n.jsx)("option",{value:"0",children:"-- SELECT FACULTY --"},"0"),t]})]}),(0,n.jsx)("button",{className:"btn btn-danger","data-toggle":"modal","data-target":"#assignDeptChair",children:"Assign New Department Chair"})]}),(0,n.jsx)("div",{className:"modal fade",id:"assignDeptChair",tabIndex:"-1",role:"dialog","aria-labelledby":"assignDeptChairLabel","aria-hidden":"true",children:(0,n.jsx)("div",{className:"modal-dialog",role:"document",children:(0,n.jsxs)("div",{className:"modal-content",children:[(0,n.jsxs)("div",{className:"modal-header",children:[(0,n.jsx)("h5",{className:"modal-title",id:"assignDeptChairLabel",children:"Assign New Department Chair"}),(0,n.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:(0,n.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,n.jsxs)("div",{className:"modal-body",children:[(0,n.jsx)("hr",{}),(0,n.jsx)("p",{children:"Are you sure you want to assign this user as the new department chair? You will lose access to all department chair-specific functionalities, and the user you assigned will gain access to said functionalities. Once you finalize this decision, you will be logged out immediately, and your account will be reverted to a standard faculty account when you log in again."})]}),(0,n.jsxs)("div",{className:"modal-footer",children:[(0,n.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:"No, don't assign"}),(0,n.jsx)("button",{type:"button",className:"btn btn-danger",onClick:(0,c.Z)(l().mark((function t(){var a,n,s;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=document.getElementById("deptchairalert"),$("#assignDeptChair").modal("toggle"),0==(n=document.getElementById("deptChair").value)){t.next=8;break}return t.next=6,Z(n,e.token);case 6:1==(s=t.sent).success?(a.className="alert alert-success",a.style="visibility: visible",a.innerHTML=s.message,$("#deptchairalert").fadeTo(3e3,500).slideUp(500,(function(){$("#deptchairalert").slideUp(500),window.location.href="/login"}))):(a.className="alert alert-danger",s.error?a.innerHTML=s.error[0].message:a.innerHTML=s.message,$("#deptchairalert").fadeTo(5e3,500).slideUp(500,(function(){$("#deptchairalert").slideUp(500)})),o.default.push("/faculty/role-assignment","/faculty/role-assignment"));case 8:case"end":return t.stop()}}),t)}))),children:"Yes, assign"})]})]})})})]})};var E=!0,M=function(e){return(0,n.jsxs)(r.Z,{userId:e.data.userId,facultyId:e.data.facultyId,role:e.data.role,name:e.data.name,approvalList:e.approvalList,roleAssignmentFlag:e.roleAssignmentFlag,children:[3==e.data.role&&(0,n.jsx)("nav",{className:"jsx-3469655085",children:(0,n.jsxs)("div",{id:"nav-tab",role:"tablist",className:"jsx-3469655085 nav nav-tabs nav-fill nav-justified",children:[(0,n.jsxs)("a",{id:"unit-head-tab","data-toggle":"tab",href:"#unit-head",role:"tab","aria-controls":"unit-head","aria-selected":"true",className:"jsx-3469655085 nav-item nav-link active",children:["Unit Head Assignment ",e.roleAssignmentFlag&&(0,n.jsx)("span",{className:"jsx-3469655085 badge badge-danger",children:"!"})]}),(0,n.jsx)("a",{id:"admin-clerk-tab","data-toggle":"tab",href:"#admin-clerk",role:"tab","aria-controls":"admin-clerk","aria-selected":"false",className:"jsx-3469655085 nav-item nav-link",children:"Admin Clerk Assignment"}),(0,n.jsx)("a",{id:"dept-chair-tab","data-toggle":"tab",href:"#dept-chair",role:"tab","aria-controls":"dept-chair","aria-selected":"false",className:"jsx-3469655085 nav-item nav-link",children:"Department Chair Assignment"})]})}),(0,n.jsx)("br",{className:"jsx-3469655085"}),(0,n.jsx)("br",{className:"jsx-3469655085"}),(0,n.jsxs)("div",{id:"nav-tabContent",className:"jsx-3469655085 tab-content",children:[2==e.data.role&&(0,n.jsx)("div",{id:"unit-head",role:"tabpanel","aria-labelledby":"unit-head-tab",className:"jsx-3469655085 tab-pane fade show active",children:(0,n.jsx)(f,{token:e.token.user,role:e.data.role,facultyListInfo:e.facultyListInfo,children:e.roleAssignmentList})}),3==e.data.role&&(0,n.jsx)("div",{id:"unit-head",role:"tabpanel","aria-labelledby":"unit-head-tab",className:"jsx-3469655085 tab-pane fade show active",children:(0,n.jsx)(b,{token:e.token.user,role:e.data.role,children:e.roleAssignmentList})}),(0,n.jsx)("div",{id:"admin-clerk",role:"tabpanel","aria-labelledby":"admin-clerk-tab",className:"jsx-3469655085 tab-pane fade",children:(0,n.jsx)(H,{token:e.token.user,role:e.data.role,children:e.clerkAssignmentList})}),(0,n.jsx)("div",{id:"dept-chair",role:"tabpanel","aria-labelledby":"dept-chair-tab",className:"jsx-3469655085 tab-pane fade",children:(0,n.jsx)(R,{token:e.token.user,role:e.data.role,children:e.facultyListInfo})})]}),(0,n.jsx)(s.default,{id:"3469655085",children:["a.nav-item.jsx-3469655085:focus{background-color:#78b6c2;}","a.nav-item.jsx-3469655085:hover{background-color:#78b6c2;}","a.active.jsx-3469655085{background-color:#78b6c2;}"]})]})}},5723:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faculty/role-assignment",function(){return a(75372)}])},74047:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,{Z:function(){return n}})},52700:function(e,t,a){"use strict";function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}a.d(t,{Z:function(){return s}})},20775:function(e,t,a){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}a.d(t,{Z:function(){return n}})},8127:function(e,t,a){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}a.d(t,{Z:function(){return s}})},58580:function(e,t,a){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}a.d(t,{Z:function(){return s}})},80950:function(){},46601:function(){},89214:function(){},8623:function(){},7748:function(){},85568:function(){},56619:function(){},77108:function(){},52361:function(){},94616:function(){}},function(e){e.O(0,[383,704,321,513,774,888,179],(function(){return t=5723,e(e.s=t);var t}));var t=e.O();_N_E=t}]);