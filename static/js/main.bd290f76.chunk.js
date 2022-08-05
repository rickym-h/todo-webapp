(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(23)},19:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),l=a.n(i),s=a(10),o=a(1),c=a(2),u=a(4),d=a(3),m=a(5),h=function(e){function t(e){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"priority-"+this.props.value},{0:"No Priority",1:"Low Priority",2:"Medium Priority",3:"High Priority",4:"ASAP"}[this.props.value])}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleDeleteTaskEvent=function(e){a.props.deleteFunction(e)},a.handleEditTaskEvent=function(e){a.props.editTask(e)},a.datesAreOnSameDay=function(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()},a.datesAreWithinWeek=function(e,t){e=new Date(e.getFullYear(),e.getMonth(),e.getDate());var a=((t=new Date(t.getFullYear(),t.getMonth(),t.getDate())).getTime()-e.getTime())/1e3;return!(a<0)&&a<=604800},a.getValidTasks=function(e){var t=new Date;switch(a.props.filter){case"all":return e;case"today":return e.filter(function(e){var n=new Date(e.date);return a.datesAreOnSameDay(t,n)});case"week":return e.filter(function(e){var n=new Date(e.date);return a.datesAreWithinWeek(t,n)});default:return console.log("ERROR - FILTER METHOD NOT RECOGNISED: "+a.props.filter),e}},a.sortTasks=function(e){switch(a.props.sort){case"creation":return e.sort(function(e,t){return(e=new Date(e.creationDate))-(t=new Date(t.creationDate))});case"date":return e.sort(function(e,t){return e.date?t.date?(e=new Date(e.date))-(t=new Date(t.date)):1:-1});case"priority":return e.sort(function(e,t){return t.priority-e.priority});default:return console.log("ERROR - SORT METHOD NOT RECOGNISED: "+a.props.filter),e}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.tasks;return t=this.getValidTasks(t),t=this.sortTasks(t),r.a.createElement("div",{className:"overview-container"},r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Delete Task"),r.a.createElement("th",null,"Task Information"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Priority"),r.a.createElement("th",null,"Edit")),t.map(function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("th",null,r.a.createElement("button",{type:"button",id:t.id,onClick:function(){return e.handleDeleteTaskEvent(t.id)}},"Click to Complete!")),r.a.createElement("th",null,r.a.createElement("p",null,t.text)),r.a.createElement("th",null,r.a.createElement("p",null,t.date)),r.a.createElement("th",null,r.a.createElement(h,{value:t.priority})),r.a.createElement("th",null,r.a.createElement("button",{type:"button",id:"edit"+t.id,onClick:function(){return e.handleEditTaskEvent(t.id)}},"Click to Edit!")))})))}}]),t}(n.Component),p=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleSortChange=function(e){a.props.updateSort(e.target.id)},a.handleFilterChange=function(e){a.props.updateFilter(e.target.id)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{type:"radio",id:"all",name:"filter",value:"all",onChange:this.handleFilterChange,defaultChecked:!0}),r.a.createElement("label",{className:"radioLabel",htmlFor:"all"},"All"),r.a.createElement("br",null),r.a.createElement("input",{type:"radio",id:"today",name:"filter",value:"today",onChange:this.handleFilterChange}),r.a.createElement("label",{className:"radioLabel",htmlFor:"today"},"Today"),r.a.createElement("br",null),r.a.createElement("input",{type:"radio",id:"week",name:"filter",value:"week",onChange:this.handleFilterChange}),r.a.createElement("label",{className:"radioLabel",htmlFor:"week"},"This Week"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"radio",id:"creation",name:"sort",value:"creation",onChange:this.handleSortChange,defaultChecked:!0}),r.a.createElement("label",{className:"radioLabel",htmlFor:"creation"},"Creation Order"),r.a.createElement("br",null),r.a.createElement("input",{type:"radio",id:"date",name:"sort",value:"date",onChange:this.handleSortChange}),r.a.createElement("label",{className:"radioLabel",htmlFor:"date"},"Date"),r.a.createElement("br",null),r.a.createElement("input",{type:"radio",id:"priority",name:"sort",value:"priority",onChange:this.handleSortChange}),r.a.createElement("label",{className:"radioLabel",htmlFor:"priority"},"Priority"))}}]),t}(n.Component),E=function(e){function t(e){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,this.props.message))}}]),t}(n.Component),g=(a(19),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleFormChange=function(e){console.log(e.target.value);var t=a.state.currentTask;switch(e.target.id){case"editTask":t.text=e.target.value,a.setState({currentTask:t});break;case"editDate":t.date=e.target.value,a.setState({currentTask:t});break;case"editPriority":t.priority=e.target.value,a.setState({currentTask:t})}},a.handleEditTask=function(e){e.preventDefault(),a.props.finishEdit(a.state.currentTask),a.setState({currentTask:null})},a.state={currentTask:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){e.taskToEdit!==this.props.taskToEdit&&this.props.taskToEdit&&this.setState({currentTask:JSON.parse(this.props.taskToEdit.task)})}},{key:"render",value:function(){if(!this.state.currentTask)return null;var e=(new Date).toISOString().slice(0,10);return r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h4",{className:"modal-title"},"Edit Task")),r.a.createElement("div",{className:"modal-body"},r.a.createElement("form",{id:"editTaskForm"},r.a.createElement("label",{htmlFor:"editTask"},"Change Task"),r.a.createElement("input",{type:"text",id:"editTask",value:this.state.currentTask.text,onChange:this.handleFormChange,required:!0}),r.a.createElement("input",{type:"date",id:"editDate",min:e,onChange:this.handleFormChange}),r.a.createElement("select",{id:"editPriority",onChange:this.handleFormChange,value:this.state.currentTask.priority},r.a.createElement("option",{value:"0"},"No Priority"),r.a.createElement("option",{value:"1"},"Low"),r.a.createElement("option",{value:"2"},"Medium"),r.a.createElement("option",{value:"3"},"High"),r.a.createElement("option",{value:"4"},"ASAP")))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{className:"modal-button",form:"editTaskForm",onClick:this.handleEditTask},"Submit"))))}}]),t}(n.Component)),f=a(6),v=a.n(f),b=(a(21),function(e){function t(e){var a;if(Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleTextChange=function(e){a.setState({task:{text:e.target.value,date:a.state.task.date,priority:a.state.task.priority,id:a.state.task.id}})},a.handleDateChange=function(e){a.setState({task:{text:a.state.task.text,date:e.target.value,priority:a.state.task.priority,id:a.state.task.id}})},a.handlePriorityChange=function(e){a.setState({task:{text:a.state.task.text,date:a.state.task.date,priority:e.target.value,id:a.state.task.id}})},a.onSubmitTask=function(e){e.preventDefault(),a.setState({tasks:a.state.tasks.concat(Object(s.a)({},a.state.task,{creationDate:new Date})),task:{text:"",date:"",priority:"0",id:v()()}})},a.deleteTask=function(e){var t=a.state.tasks.filter(function(t){return t.id!==e});a.setState({tasks:t})},a.getTaskByID=function(e){return a.state.tasks.find(function(t){return t.id===e})},a.editTask=function(e){var t=JSON.stringify(a.getTaskByID(e));a.setState({currentEditingTask:{task:t}})},a.submitTaskEdit=function(e){var t=a.state.tasks.filter(function(t){return t.id!==e.id});t.push(e),a.setState({tasks:t,currentEditingTask:null})},a.changeSort=function(e){a.setState({sort:e})},a.changeFilter=function(e){a.setState({filter:e})},a.isLocalStorageAvailable=function(){try{return localStorage.setItem("test","test"),localStorage.removeItem("test"),!0}catch(e){return!1}},a.componentDidUpdate=function(e,t,n){t.tasks!==a.state.tasks&&a.isLocalStorageAvailable()&&window.localStorage.setItem("tasks",JSON.stringify(a.state.tasks))},a.state={task:{text:"",date:"",priority:"0",id:v()()},tasks:[],filter:"all",sort:"creation",currentEditingTask:""},a.isLocalStorageAvailable()&&window.localStorage.getItem("tasks"))try{a.state.tasks=JSON.parse(window.localStorage.getItem("tasks"))}catch(n){console.log("ERROR: Failed to load localstorage data..."),a.state.tasks=[]}return a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="";"all"!==this.state.filter&&this.state.tasks.some(function(e){return!e.date})&&(e="Warning: Some tasks without an assigned due date are not being shown!");var t=(new Date).toISOString().slice(0,10);return r.a.createElement("div",null,r.a.createElement("div",{id:"headerBar"},r.a.createElement("h1",null,"My Todo Webapp")),r.a.createElement("div",{id:"main"},r.a.createElement("div",{id:"optionsPane"},r.a.createElement(p,{updateSort:this.changeSort,updateFilter:this.changeFilter})),r.a.createElement("div",{id:"taskPane"},r.a.createElement(g,{taskToEdit:this.state.currentEditingTask,finishEdit:this.submitTaskEdit}),r.a.createElement(E,{message:e}),r.a.createElement("form",{onSubmit:this.onSubmitTask,id:"newTaskInterface"},r.a.createElement("label",{htmlFor:"taskInput"},"Create Task"),r.a.createElement("input",{type:"text",id:"taskInput",value:this.state.task.text,onChange:this.handleTextChange,required:!0}),r.a.createElement("input",{type:"date",id:"dateInput",min:t,onChange:this.handleDateChange}),r.a.createElement("select",{id:"priorityInput",onChange:this.handlePriorityChange,value:this.state.task.priority},r.a.createElement("option",{value:"0"},"No Priority"),r.a.createElement("option",{value:"1"},"Low"),r.a.createElement("option",{value:"2"},"Medium"),r.a.createElement("option",{value:"3"},"High"),r.a.createElement("option",{value:"4"},"ASAP")),r.a.createElement("button",{type:"submit"},"Add Task")),r.a.createElement(k,{tasks:this.state.tasks,deleteFunction:this.deleteTask,sort:this.state.sort,filter:this.state.filter,editTask:this.editTask}))),r.a.createElement("div",{id:"footerBar"},r.a.createElement("h4",null,r.a.createElement("a",{href:"https://github.com/rickym-h/todo-webapp"},"View Source Code"))))}}]),t}(n.Component));l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)))}},[[11,2,1]]]);
//# sourceMappingURL=main.bd290f76.chunk.js.map