(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{34:function(e,t,n){},46:function(e,t,n){},53:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var i=n(14),s=n.n(i),a=n(47),c=n.n(a),r=(n(53),n(13)),l=n(43),o=n(29),d=n(6),u=n(4),j=n(0),b=n.n(j),h=n(41),O=n(42),p=n(7),x=(n(56),n(57),n(22)),m=n(23),f=n(5);var g=function(e){return Object(f.jsxs)("div",{id:"topTab",children:[Object(f.jsx)("div",{className:"topTabThird first",children:Object(f.jsxs)("select",{id:"sortParameterSelector",value:e.sortParameter,disabled:e.dataLength<=1,onChange:function(t){return e.setSortParameter(t.target.value)},children:[Object(f.jsx)("option",{"aria-label":"Increasing by taskname",value:"taskName asc",children:"Name \u2b06"}),Object(f.jsx)("option",{"aria-label":"Decreasing by taskname",value:"taskName desc",children:"Name \u2b07"}),Object(f.jsx)("option",{"aria-label":"Increasing by date created",value:"created asc",children:"Date \u2b06"}),Object(f.jsx)("option",{"aria-label":"Decreasing by date created",value:"created desc",children:"Date \u2b07"}),Object(f.jsx)("option",{"aria-label":"Increasing by priority level",value:"priorityLevel asc",children:"Priority \u2b06"}),Object(f.jsx)("option",{"aria-label":"Decreasing by priority level",value:"priorityLevel desc",children:"Priority \u2b07"})]})}),Object(f.jsx)("div",{className:"topTabThird",children:Object(f.jsx)("h1",{children:"To-Do"})}),Object(f.jsx)("div",{className:"topTabThird last",children:e.appMode===T.EDIT_MODE?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("button",{"aria-label":"Cancel Edits",id:"cancelEdits",onClick:function(){e.setDataChanges({}),e.setAppMode(T.DEFAULT_MODE)},children:Object(f.jsx)(x.a,{icon:m.g})}),Object(f.jsx)("button",{"aria-label":"Save Edits",id:"saveEdits",onClick:function(){e.applyDataChanges(),e.setAppMode(T.DEFAULT_MODE)},children:Object(f.jsx)(x.a,{icon:m.e})})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("button",{"aria-label":"Edit Button",id:"editButton",onClick:function(){return e.setAppMode(T.EDIT_MODE)},disabled:e.dataLength<1||e.appMode!==T.DEFAULT_MODE,children:Object(f.jsx)(x.a,{icon:m.b})}),Object(f.jsx)("button",{"aria-label":"Add Button",id:"addItem",onClick:function(){e.setAppMode(T.ADD_TASK_MODE)},disabled:e.appMode!==T.DEFAULT_MODE||0===e.lists.length,children:Object(f.jsx)(x.a,{icon:m.d})})]})})]})},v=n(33);n(63),n(64);var k=function(e){var t,n;function i(t,n){e.addToTaskChangeList(e.task.id,Object(v.a)(Object(v.a)({},e.taskChangeList),{},Object(d.a)({},t,n)))}return Object(f.jsx)(f.Fragment,{children:!("delete"in e.taskChangeList)&&Object(f.jsx)("li",{className:"listItem",children:Object(f.jsxs)("label",{className:"taskLabel",children:[Object(f.jsx)("input",{className:"checkbox",type:"checkbox",checked:e.task.isChecked,disabled:e.appMode===T.EDIT_MODE,onChange:function(t){return e.onTaskChanged(e.task.id,"isChecked",t.target.checked)}}),Object(f.jsx)("div",{className:"taskContent",children:e.appMode===T.EDIT_MODE?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("input",{className:"editInput",type:"text",value:void 0!==e.taskChangeList.taskName?e.taskChangeList.taskName:e.task.taskName,onChange:function(e){i("taskName",e.target.value)}}),Object(f.jsxs)("select",{className:"prioritySelector",value:(null===(t=e.taskChangeList)||void 0===t?void 0:t.priorityLevel)||e.task.priorityLevel,onChange:function(e){return i("priorityLevel",parseInt(e.target.value))},children:[Object(f.jsx)("option",{"aria-label":"Low priority",value:"1",children:"!"}),Object(f.jsx)("option",{"aria-label":"Medium priority",value:"2",children:"!!"}),Object(f.jsx)("option",{"aria-label":"High priority",value:"3",children:"!!!"})]}),Object(f.jsx)("button",{"aria-label":"Delete task",className:"deleteButton",onClick:function(){i("delete",!0)},children:Object(f.jsx)(x.a,{icon:m.f,size:"xs"})})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("span",{className:"taskName",children:e.task.taskName}),Object(f.jsx)("span",{className:(n=e.task.priorityLevel,1===n?"priorityLevel low":2===n?"priorityLevel medium":"priorityLevel high"),children:"!".repeat(e.task.priorityLevel)})]})})]})})})};var C=function(e){var t,n=null===(t=e.data)||void 0===t?void 0:t.filter((function(t){return e.tasksShowing===M.ALL||e.tasksShowing===M.UNCOMPLETED&&!t.isChecked}));function i(t,n){e.setDataChanges(Object(v.a)(Object(v.a)({},e.dataChanges),{},Object(d.a)({},t,n)))}return Object(f.jsx)("ul",{id:"itemList",children:n.length>0?n.map((function(t){return Object(f.jsx)(k,{task:t,onTaskChanged:e.onTaskChanged,appMode:e.appMode,addToTaskChangeList:i,taskChangeList:t.id in e.dataChanges?e.dataChanges[t.id]:{}},t.id)})):Object(f.jsx)("li",{id:"noItems",children:Object(f.jsx)("h3",{children:e.appMode===T.EDIT_MODE?"No tasks to edit.":0===e.lists.length?"You have no lists. Create your first one by clicking the lists icon above!":"You have completed all your tasks, woohoo!"})},"1")})};n(65);var L=function(e){var t=Object(i.useState)(null),n=Object(r.a)(t,2),s=n[0],a=n[1];function c(e){return e>1?e+" tasks":e+" task"}var l=Object(f.jsxs)("div",{id:"deleteButtonContainer",children:[null===s?Object(f.jsx)("button",{type:"button",id:"deleteCompleted",disabled:e.tasksShowing===M.UNCOMPLETED||0===e.data.filter((function(e){return e.isChecked})).length,onClick:function(){return a("completed")},children:" Delete All Completed"}):Object(f.jsx)("button",{type:"button",id:"cancel",onClick:function(){return a(null)},children:" Cancel"}),null===s?Object(f.jsx)("button",{type:"button",id:"deleteAll",disabled:0===e.data.length,onClick:function(){a("all")},children:" Delete All"}):Object(f.jsxs)("button",{type:"button",id:"confirm",onClick:function(){e.onTasksDeleted("all"===s?e.data.map((function(e){return e.id})):e.data.filter((function(e){return e.isChecked})).map((function(e){return e.id}))),a(null)},children:[" Delete ",c("all"===s?e.data.length:e.data.filter((function(e){return e.isChecked})).length)]})]}),o=Object(f.jsxs)("div",{"aria-label":"Select Shown Tasks",id:"switcherContainer",children:[Object(f.jsx)("button",{"aria-label":"Show All Tasks",type:"button",id:"showAll",disabled:e.tasksShowing===M.ALL,onClick:function(){return e.setTasksShowing(M.ALL)},children:" All"}),Object(f.jsx)("button",{"aria-label":"Show Uncompleted Tasks",type:"button",id:"showUncompleted",disabled:e.tasksShowing===M.UNCOMPLETED,onClick:function(){return e.setTasksShowing(M.UNCOMPLETED)},children:" Uncompleted"})]});return Object(f.jsxs)("div",{id:"footer",children:[e.appMode===T.EDIT_MODE?l:o,Object(f.jsxs)("div",{id:"signOutRow",children:[Object(f.jsx)("span",{children:e.user.email}),Object(f.jsx)("button",{id:"signOutButton",onClick:function(){return e.auth.signOut()},children:"Sign Out"})]})]})};n(66),n(34);var D=function(e){var t=Object(i.useState)(""),n=Object(r.a)(t,2),s=n[0],a=n[1],c=Object(i.useState)(1),l=Object(r.a)(c,2),o=l[0],d=l[1];return Object(f.jsx)("div",{id:"popUpBackground",children:Object(f.jsxs)("div",{id:"popUp",children:[Object(f.jsxs)("div",{id:"popUpHeader",children:[Object(f.jsx)("button",{id:"closePopUp",onClick:function(){a(""),d(1),e.setAppMode(T.DEFAULT_MODE)},children:"X"}),Object(f.jsx)("h2",{children:" New Task "}),Object(f.jsx)("button",{children:"X"})]}),Object(f.jsxs)("form",{id:"createForm",onSubmit:function(t){t.preventDefault(),e.onItemAdded(s,o),a(""),d(1),e.setAppMode(T.DEFAULT_MODE)},children:[Object(f.jsx)("input",{id:"taskName",type:"text",value:s,onChange:function(e){return a(e.target.value)},autoFocus:!0}),Object(f.jsxs)("div",{id:"prioritySelector",children:[Object(f.jsx)("button",{"aria-label":"Low priority",className:"priorityButton",type:"button",id:"low",disabled:1===o,onClick:function(){return d(1)},children:"Low!"}),Object(f.jsx)("button",{"aria-label":"Medium priority",className:"priorityButton",type:"button",id:"medium",disabled:2===o,onClick:function(){return d(2)},children:"Medium!!"}),Object(f.jsx)("button",{"aria-label":"High priority",className:"priorityButton",type:"button",id:"high",disabled:3===o,onClick:function(){return d(3)},children:"High!!!"})]}),Object(f.jsx)("button",{id:"addTask",type:"submit",disabled:0===s.length,children:"Add Task"})]})]})})};n(67);var E=function(e){var t;return Object(f.jsxs)("div",{id:"listSelectorRow",children:[Object(f.jsx)("div",{className:"topTabThird first",children:Object(f.jsx)("select",{id:"listSelector",disabled:0===e.lists.length,value:e.currentListID||void 0,onChange:function(t){return e.setCurrentListID(t.target.value)},children:e.lists.map((function(e){return Object(f.jsx)("option",{value:e.id,children:e.listName},e.id)}))})}),Object(f.jsx)("div",{className:"topTabThird"}),Object(f.jsxs)("div",{className:"topTabThird last",children:[(null===(t=e.lists.find((function(t){return t.id===e.currentListID})))||void 0===t?void 0:t.owner)===e.user.email&&Object(f.jsx)("button",{id:"shareLists",onClick:function(){return e.setAppMode(T.SHARE_LISTS_MODE)},children:Object(f.jsx)(x.a,{icon:m.i})}),Object(f.jsx)("button",{id:"editLists",onClick:function(){return e.setAppMode(T.EDIT_LISTS_MODE)},children:Object(f.jsx)(x.a,{icon:m.c})})]})]})};n(46),n(68);var N=function(e){var t=Object(i.useState)(""),n=Object(r.a)(t,2),s=n[0],a=n[1],c=Object(i.useState)(null),l=Object(r.a)(c,2),o=l[0],d=l[1];function u(t){return Object(f.jsxs)(f.Fragment,{children:[t.owner===e.user.email?Object(f.jsx)("td",{className:"listNameCell",children:Object(f.jsx)("input",{className:"listNameInput",type:"text",value:t.listName,onChange:function(n){return e.onListChanged(t.id,"listName",n.target.value)}})}):Object(f.jsx)("td",{className:"sharedEmailCell",children:Object(f.jsx)("span",{children:t.listName})}),Object(f.jsx)("td",{className:"sharedCell",children:t.sharedWith.length>1&&Object(f.jsx)(x.a,{icon:m.i,size:"xs"})}),Object(f.jsx)("td",{className:"deleteCell",children:Object(f.jsx)("button",{className:"deleteListButton",onClick:function(){return d(t.id)},children:t.owner===e.user.email?Object(f.jsx)(x.a,{icon:m.f,size:"xs"}):Object(f.jsx)(x.a,{icon:m.a,size:"xs"})})})]})}function j(t){return Object(f.jsxs)("td",{colSpan:"3",className:"confirmCell",children:[Object(f.jsxs)("span",{children:[(t.owner===e.user.email?"Delete ":"Leave ")+t.listName,"?"]}),Object(f.jsx)("button",{className:"cancelButton",onClick:function(){return d(null)},children:"No"}),Object(f.jsx)("button",{className:"confirmButton",onClick:function(){t.owner===e.user.email?(e.onListDeleted(t.id),d(null)):e.onListChanged(t.id,"sharedWith",t.sharedWith.filter((function(t){return t!==e.user.email})))},children:"Yes"})]})}return Object(f.jsx)("div",{id:"popUpBackground",children:Object(f.jsxs)("div",{id:"popUp",children:[Object(f.jsxs)("div",{id:"popUpHeader",children:[Object(f.jsx)("button",{id:"closePopUp",onClick:function(){a(""),d(null),e.setAppMode(T.DEFAULT_MODE)},children:"X"}),Object(f.jsx)("h2",{id:"tableTitle",children:" Lists "}),Object(f.jsx)("button",{children:"X"})]}),e.lists.length>0?Object(f.jsx)("div",{id:"tableContainer",children:Object(f.jsxs)("table",{id:"table",border:"1",frame:"void",rules:"rows",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{className:"tableHeaderRow",children:[Object(f.jsx)("th",{className:"listNameCell",children:"Name"}),Object(f.jsx)("th",{className:"sharedCell",children:"Shared"}),Object(f.jsx)("th",{className:"deleteCell",children:"Delete"})]})}),Object(f.jsx)("tbody",{children:e.lists.map((function(e){return Object(f.jsx)("tr",{className:"tableRow",children:o===e.id?j(e):u(e)},e.id)}))})]})}):Object(f.jsx)("div",{id:"messageContainer",children:Object(f.jsx)("h3",{children:"Create your first list!"})}),Object(f.jsxs)("form",{id:"createRow",children:[Object(f.jsx)("div",{id:"createInputWrapper",children:Object(f.jsx)("input",{id:"createInput",type:"text",value:s,placeholder:"New list",onChange:function(e){return a(e.target.value)}})}),Object(f.jsx)("div",{id:"createButtonWrapper",children:Object(f.jsx)("button",{id:"createNewButton",type:"submit",disabled:0===s.length,onClick:function(t){t.preventDefault(),e.onListAdded(s,0===e.lists.length),a("")},children:Object(f.jsx)(x.a,{icon:m.d})})})]})]})})};n(69),n(70),n(71);var y=function(){return Object(f.jsx)("div",{id:"popUpBackground",className:"loadingPopUpBackground",children:Object(f.jsx)("div",{id:"loader"})})};function S(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}var I=function(e){var t="Sign In",n="Sign Up",s=Object(i.useState)(null),a=Object(r.a)(s,2),c=a[0],l=a[1];function o(e){return e.replace("Firebase: ","").split("(")[0]}function d(){var t=Object(i.useState)(""),n=Object(r.a)(t,2),s=n[0],a=n[1],c=Object(i.useState)(""),l=Object(r.a)(c,2),d=l[0],u=l[1],j=Object(i.useState)(""),b=Object(r.a)(j,2),h=b[0],O=b[1];return Object(f.jsx)(f.Fragment,{children:e.signUpLoading?Object(f.jsx)(y,{}):Object(f.jsxs)("form",{id:"signUp",children:[Object(f.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(f.jsx)("input",{id:"email",className:"signUpSignInInput",type:"email",value:s,onChange:function(e){return a(e.target.value)}}),Object(f.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(f.jsx)("input",{id:"password",className:"signUpSignInInput",type:"password",value:d,onChange:function(e){return u(e.target.value)}}),""!==d&&d.length<6&&Object(f.jsx)("span",{className:"errorMessage",children:"Password must be at least 6 characters long"}),Object(f.jsx)("label",{htmlFor:"verifyPassword",children:" Verify Password:"}),Object(f.jsx)("input",{id:"verifyPassword",className:"signUpSignInInput",type:"password",value:h,onChange:function(e){return O(e.target.value)}}),""!==d&&""!==h&&d!==h&&Object(f.jsx)("span",{className:"errorMessage",children:"Passwords don't match!"}),Object(f.jsx)("button",{id:"signUpSubmit",type:"submit",onClick:function(){return e.createUserWithEmailAndPassword(s,d)},disabled:!S(s)||d.length<6||d!==h,children:"Submit"}),null!==e.signUpError&&void 0!==e.signUpError&&Object(f.jsx)("span",{className:"errorMessage",children:o(e.signUpError.message)})]})})}function u(){var t=Object(i.useState)(""),n=Object(r.a)(t,2),s=n[0],a=n[1],c=Object(i.useState)(""),l=Object(r.a)(c,2),d=l[0],u=l[1];return Object(f.jsx)(f.Fragment,{children:e.signInLoading?Object(f.jsx)(y,{}):Object(f.jsxs)("form",{id:"signIn",children:[Object(f.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(f.jsx)("input",{id:"email",className:"signUpSignInInput",type:"email",value:s,onChange:function(e){return a(e.target.value)}}),Object(f.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(f.jsx)("input",{id:"password",className:"signUpSignInInput",type:"password",value:d,onChange:function(e){return u(e.target.value)}}),Object(f.jsx)("button",{id:"signInSubmit",type:"submit",onClick:function(){return e.signInWithEmailAndPassword(s,d)},disabled:""===s||""===d,children:"Submit"}),null!==e.signInError&&void 0!==e.signInError&&Object(f.jsx)("span",{className:"errorMessage",children:o(e.signInError.message)})]})})}return Object(f.jsxs)("div",{id:"signUpSignIn",children:[null===c&&Object(f.jsx)("h1",{id:"title",children:"To-Do List"}),Object(f.jsxs)("div",{id:"buttonOptions",children:[c===t&&Object(f.jsx)(u,{}),c===n&&Object(f.jsx)(d,{}),null!==c&&Object(f.jsxs)("div",{id:"divider",children:[Object(f.jsx)("hr",{}),Object(f.jsx)("span",{children:"Or"}),Object(f.jsx)("hr",{})]}),c!==t&&Object(f.jsx)("button",{id:"logInButton",onClick:function(){return l(t)},children:"Log In"}),c!==n&&Object(f.jsx)("button",{id:"signUpButton",onClick:function(){return l(n)},children:"Sign Up"})]})]})};var w=function(e){var t=Object(i.useState)(""),n=Object(r.a)(t,2),s=n[0],a=n[1],c=Object(i.useState)(null),l=Object(r.a)(c,2),o=l[0],d=l[1],u=Object(i.useState)(null),j=Object(r.a)(u,2),b=j[0],h=j[1],O=Object(i.useState)(null),p=Object(r.a)(O,2),g=p[0],v=p[1],k=e.lists.find((function(t){return t.id===e.currentListID}));function C(t){return[o,b].includes(t)?function(t){return Object(f.jsxs)("td",{colSpan:"3",className:"confirmCell",children:[Object(f.jsxs)("span",{children:[t+":",Object(f.jsx)("br",{}),o===t?"Remove from list?":"Make owner? (You will lose ownership)"]}),Object(f.jsx)("button",{className:"cancelButton",onClick:function(){return o===t?d(null):h(null)},children:"No"}),Object(f.jsx)("button",{className:"confirmButton",onClick:function(){o===t?(d(null),v(null),e.onListChanged(e.currentListID,"sharedWith",k.sharedWith.filter((function(e){return e!==t})))):(e.onListChanged(e.currentListID,"owner",t),e.setAppMode(T.DEFAULT_MODE))},children:"Yes"})]})}(t):t===g?function(e){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("td",{className:"sharedEmailCell",children:[Object(f.jsx)("button",{className:"makeOwnerButton",onClick:function(){return h(e)},children:"Make Owner"}),Object(f.jsx)("button",{className:"removeUserButton",onClick:function(){return d(e)},children:"Remove"})]}),Object(f.jsx)("td",{className:"manageCell",children:Object(f.jsx)("button",{className:"cancelManageButton",onClick:function(){return v(null)},children:Object(f.jsx)(x.a,{icon:m.g,size:"xs"})})})]})}(t):function(e){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("td",{className:"sharedEmailCell",children:Object(f.jsx)("span",{children:e})}),Object(f.jsx)("td",{className:"manageCell",children:Object(f.jsx)("button",{className:"manageButton",onClick:function(){return v(e)},children:Object(f.jsx)(x.a,{icon:m.h,size:"xs"})})})]})}(t)}return Object(f.jsx)("div",{id:"popUpBackground",children:Object(f.jsxs)("div",{id:"popUp",children:[Object(f.jsxs)("div",{id:"popUpHeader",children:[Object(f.jsx)("button",{id:"closePopUp",disabled:0===e.lists.length,onClick:function(){a(""),d(null),h(null),e.setAppMode(T.DEFAULT_MODE)},children:"X"}),Object(f.jsxs)("h2",{id:"tableTitle",children:["Share List:",Object(f.jsx)("br",{}),k.listName]}),Object(f.jsx)("button",{children:"X"})]}),k.sharedWith.filter((function(t){return t!==e.user.email})).length>0?Object(f.jsx)("div",{id:"tableContainer",children:Object(f.jsxs)("table",{id:"table",border:"1",frame:"void",rules:"rows",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{className:"tableHeaderRow",children:[Object(f.jsx)("th",{className:"sharedEmailCell",children:"Email"}),Object(f.jsx)("th",{className:"manageCell",children:"Settings"})]})}),Object(f.jsx)("tbody",{children:k.sharedWith.filter((function(t){return t!==e.user.email})).map((function(e){return Object(f.jsx)("tr",{className:"tableRow",children:C(e)},e)}))})]})}):Object(f.jsx)("div",{id:"messageContainer",children:Object(f.jsx)("h3",{children:"Add another user below!"})}),Object(f.jsxs)("form",{id:"createRow",children:[Object(f.jsx)("div",{id:"createInputWrapper",children:Object(f.jsx)("input",{id:"createInput",type:"email",value:s,placeholder:"User email",onChange:function(e){return a(e.target.value)}})}),Object(f.jsx)("div",{id:"createButtonWrapper",children:Object(f.jsx)("button",{id:"createNewButton",type:"submit",disabled:!S(s)||k.sharedWith.includes(s),onClick:function(t){t.preventDefault(),e.onListChanged(e.currentListID,"sharedWith",k.sharedWith.concat([s])),a("")},children:Object(f.jsx)(x.a,{icon:m.d})})})]})]})})},T={ADD_TASK_MODE:"add_task_mode",EDIT_LISTS_MODE:"edit_lists_mode",SHARE_LISTS_MODE:"share_lists_mode",DEFAULT_MODE:"default_mode",EDIT_MODE:"edit_mode"},M={ALL:"all",UNCOMPLETED:"uncompleted"};var A=function(e){var t=Object(i.useState)(T.DEFAULT_MODE),n=Object(r.a)(t,2),s=n[0],a=n[1],c=Object(i.useState)(M.ALL),l=Object(r.a)(c,2),o=l[0],d=l[1],u=Object(i.useState)({}),j=Object(r.a)(u,2),b=j[0],h=j[1];return Object(f.jsxs)("div",{className:"App",children:[s===T.SHARE_LISTS_MODE&&Object(f.jsx)(w,{appMode:s,setAppMode:a,user:e.user,lists:e.lists,onListChanged:e.onListChanged,currentListID:e.currentListID}),s===T.EDIT_LISTS_MODE&&Object(f.jsx)(N,{appMode:s,setAppMode:a,lists:e.lists,user:e.user,onListAdded:e.onListAdded,onListChanged:e.onListChanged,onListDeleted:e.onListDeleted}),s===T.ADD_TASK_MODE&&Object(f.jsx)(D,{appMode:s,setAppMode:a,onItemAdded:e.onTaskAdded}),Object(f.jsx)(g,{dataLength:e.data.length,lists:e.lists,appMode:s,setAppMode:a,applyDataChanges:function(){var t=[];Object.keys(b).forEach((function(n){"delete"in b[n]&&t.push(n),Object.keys(b[n]).filter((function(e){return"delete"!==e})).forEach((function(t){e.onTaskChanged(n,t,b[n][t])}))})),t.length>0&&e.onTasksDeleted(t)},setDataChanges:h,sortParameter:e.sortParameter,setSortParameter:e.setSortParameter}),Object(f.jsx)(E,{currentListID:e.currentListID,setCurrentListID:e.setCurrentListID,lists:e.lists,setAppMode:a,user:e.user}),Object(f.jsx)(C,{data:e.data,lists:e.lists,onTaskChanged:e.onTaskChanged,appMode:s,tasksShowing:o,setDataChanges:h,dataChanges:b}),Object(f.jsx)(L,{data:e.data,appMode:s,tasksShowing:o,setTasksShowing:d,onTasksDeleted:e.onTasksDeleted,user:e.user,auth:e.auth})]})};n(72);var U=function(e){return Object(f.jsx)(f.Fragment,{children:e.error&&Object(f.jsx)("div",{id:"popUpBackground",className:"errorPopUp",children:Object(f.jsxs)("div",{id:"popUp",children:[Object(f.jsxs)("div",{id:"popUpHeader",children:[Object(f.jsx)("button",{id:"closePopUp",onClick:function(){return window.location.reload(!0)},children:"X"}),Object(f.jsx)("h2",{id:"errorTitle",children:"ERROR"}),Object(f.jsx)("button",{children:"X"})]}),Object(f.jsxs)("span",{id:"errorMessage",children:["Type: ",JSON.stringify(e.error.name),Object(f.jsx)("br",{}),"Message: ",JSON.stringify(e.error.code)]})]})})})};var _=function(e){var t=Object(i.useState)("priorityLevel desc"),n=Object(r.a)(t,2),s=n[0],a=n[1],c=Object(i.useState)(null),l=Object(r.a)(c,2),u=l[0],j=l[1];Object(i.useEffect)((function(){e.currentListID?e.db.doc(e.currentListID).get().then((function(t){t.exists?j(e.db.doc(e.currentListID).collection("tasks").orderBy(s.split(" ")[0],s.split(" ")[1])):j(null)})).catch((function(e){return e})):j(null)}),[e.currentListID,e.db,s]);var b=Object(O.a)(u),x=Object(r.a)(b,3),m=x[0],g=x[1],v=x[2],k=(null===m||void 0===m?void 0:m.docs.map((function(e){return e.data()})))||[];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(U,{error:v}),g&&Object(f.jsx)(y,{}),Object(f.jsx)(A,{lists:e.lists,data:k,user:e.user,auth:e.auth,currentListID:e.currentListID,setCurrentListID:e.setCurrentListID,onListAdded:e.onListAdded,onListDeleted:e.onListDeleted,onListChanged:e.onListChanged,sortParameter:s,setSortParameter:a,onTaskAdded:function(t,n){var i=Object(h.a)();e.db.doc(e.currentListID).collection("tasks").doc(i).set({id:i,taskName:t,priorityLevel:n,isChecked:!1,created:o.a.firestore.FieldValue.serverTimestamp()})},onTaskChanged:function(t,n,i){e.db.doc(e.currentListID).collection("tasks").doc(t).update(Object(d.a)({},n,i))},onTasksDeleted:function(t){var n,i=Object(p.a)(t);try{for(i.s();!(n=i.n()).done;){var s=n.value;e.db.doc(e.currentListID).collection("tasks").doc(s).delete()}}catch(a){i.e(a)}finally{i.f()}}})]})};o.a.initializeApp({apiKey:"AIzaSyDbDnRMAuOjcmsEB2iwcbt2_w6SPX-EAQo",authDomain:"cs124lab3.firebaseapp.com",projectId:"cs124lab3",storageBucket:"cs124lab3.appspot.com",messagingSenderId:"191143519167",appId:"1:191143519167:web:f33464f0d0ede5b538370a",measurementId:"G-B8CQHTFNQE"});var F=o.a.firestore(),B="lists";var P=function(e){var t=Object(i.useState)(null),n=Object(r.a)(t,2),s=n[0],a=n[1],c=F.collection(B).where("sharedWith","array-contains",e.user.email),l=Object(O.a)(c),o=Object(r.a)(l,3),j=o[0],p=o[1],x=o[2],m=Object(i.useState)([]),g=Object(r.a)(m,2),v=g[0],k=g[1],C=Object(i.useState)(!1),L=Object(r.a)(C,2),D=L[0],E=L[1];function N(){return(N=Object(u.a)(b.a.mark((function t(n){var i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return E(!0),i=Object(h.a)(),t.next=4,F.collection(B).doc(i).set({id:i,listName:n,owner:e.user.email,sharedWith:[e.user.email]});case 4:E(!1);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(){return(S=Object(u.a)(b.a.mark((function e(t){var n,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),n=s,a(null),e.next=5,F.collection(B).doc(t).collection("tasks").get();case 5:return i=e.sent,e.next=8,i.docs.forEach((function(e){return e.ref.delete()}));case 8:return e.next=10,F.collection(B).doc(t).delete();case 10:t!==n&&a(n),E(!1);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=Object(u.a)(b.a.mark((function t(n,i,c){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return E(!0),n===s&&"sharedWith"===i&&void 0===c.find((function(t){return t===e.user.email}))&&a(null),t.next=4,F.collection(B).doc(n).update(Object(d.a)({},i,c));case 4:E(!1);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(i.useEffect)((function(){k((null===j||void 0===j?void 0:j.docs.map((function(e){return e.data()})))||[])}),[j]),Object(i.useEffect)((function(){null!==s||D||v.length>0&&a(v[0].id)}),[s,v,D]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(U,{error:x}),p&&Object(f.jsx)(y,{}),Object(f.jsx)(_,{lists:v,user:e.user,auth:e.auth,db:F.collection(B),currentListID:s,setCurrentListID:a,onListAdded:function(e){return N.apply(this,arguments)},onListDeleted:function(e){return S.apply(this,arguments)},onListChanged:function(e,t,n){return I.apply(this,arguments)}})]})};n(73);var W=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),s=n[0],a=n[1];return Object(f.jsx)("div",{id:"popUpBackground",children:Object(f.jsxs)("div",{id:"popUp",children:[Object(f.jsxs)("div",{id:"popUpHeader",children:[Object(f.jsx)("button",{id:"closePopUp",onClick:function(){return e.auth.signOut()},children:"X"}),Object(f.jsx)("h2",{children:" Verify Email "}),Object(f.jsx)("button",{children:"X"})]}),Object(f.jsx)("div",{id:"verifyBody",children:s?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("span",{id:"verifyMessage",children:["Check your email for a verification link:",Object(f.jsx)("br",{}),e.user.email]}),Object(f.jsx)("div",{id:"loader"}),Object(f.jsx)("button",{id:"sendEmail",onClick:function(){return window.location.reload(!0)},children:"Refresh Page"})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("span",{id:"verifyMessage",children:["Click the button below to send a verification email to:",Object(f.jsx)("br",{}),e.user.email]}),Object(f.jsx)("button",{id:"sendEmail",onClick:function(){a(!0),e.auth.currentUser.sendEmailVerification()},children:"Send Email"})]})})]})})},R=o.a.auth();var H=function(){var e=Object(l.a)(R),t=Object(r.a)(e,3),n=t[0],i=t[1],s=t[2],a=Object(l.c)(R),c=Object(r.a)(a,4),o=c[0],d=c[1],u=c[2],j=c[3],b=Object(l.b)(R),h=Object(r.a)(b,4),O=h[0],p=h[1],x=h[2],m=h[3];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(U,{error:s}),i?Object(f.jsx)(y,{}):Object(f.jsx)(f.Fragment,{children:n?Object(f.jsx)(f.Fragment,{children:n.emailVerified?Object(f.jsx)(P,{user:n,auth:R}):Object(f.jsx)(W,{auth:R,user:n})}):Object(f.jsx)(I,{auth:R,signInWithEmailAndPassword:o,signInUserCredential:d,signInLoading:u,signInError:j,createUserWithEmailAndPassword:O,signUpUserCredential:p,signUpLoading:x,signUpError:m})})]})};c.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(H,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.98d3a395.chunk.js.map