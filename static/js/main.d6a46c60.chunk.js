(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"ContactsForm_form__2EUos",text:"ContactsForm_text__1K8WT",btn:"ContactsForm_btn__3nbl0"}},function(t,e,n){t.exports={list:"Contacts_list__3XVjK",item:"Contacts_item__3qblq",btn:"Contacts_btn__3XjpX",text:"Contacts_text__tNe41"}},,,,,,,,,function(t,e,n){t.exports={section:"Section_section__2vulX"}},function(t,e,n){t.exports={text:"Filter_text__2IKSh"}},function(t,e,n){t.exports={container:"App_container__1ZSl7"}},,,,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),s=n.n(r),o=n(15),i=n(11),l=n(5),u=n(6),b=n(8),m=n(7),h=n(16),j=n(12),d=n.n(j),p=n(0);function f(t){var e=t.title,n=t.children;return Object(p.jsxs)("section",{className:d.a.section,children:[Object(p.jsx)("h2",{children:e}),n]})}var x=n(4),O=n(2),C=n.n(O),_=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(x.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{className:C.a.form,onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{children:[Object(p.jsx)("p",{className:C.a.text,children:"Name"}),Object(p.jsx)("input",{type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:this.handleChange,autoComplete:"off"})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("p",{className:C.a.text,children:"Phone number"}),Object(p.jsx)("input",{type:"tel",name:"number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:this.handleChange,autoComplete:"off"})]}),Object(p.jsx)("p",{className:C.a.text,children:Object(p.jsx)("button",{className:C.a.btn,type:"submit",children:"Add contact"})})]})}}]),n}(a.Component),v=n(13),g=n.n(v);function S(t){var e=t.value,n=t.onChange;return Object(p.jsxs)("label",{children:[Object(p.jsx)("p",{className:g.a.text,children:"Find contacts by name"}),Object(p.jsx)("input",{type:"text",name:"",id:"",value:e,onChange:n})]})}var N=n(3),y=n.n(N);function A(t){var e=t.contacts,n=t.onDeleteContact;return Object(p.jsx)("ul",{className:y.a.list,children:e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(p.jsxs)("li",{className:y.a.item,children:[Object(p.jsx)("p",{className:y.a.text,children:e}),Object(p.jsx)("p",{className:y.a.text,children:a}),Object(p.jsx)("button",{className:y.a.btn,onClick:function(){return n(c)},children:"delete"})]},c)}))})}var w=n(14),F=n.n(w),k=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"123",name:"Rosie Simpson",number:"459-12-56"},{id:"456",name:"Hermione Kline",number:"443-89-12"},{id:"789",name:"Eden Clements",number:"645-17-79"},{id:"987",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmitHandler=function(e){var n=Object(i.a)({id:Object(h.a)(3)},e);t.state.contacts.find((function(t){return t.name===e.name}))?alert("".concat(e.name," is already in contacts.")):t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[n])}}))},t.onChangeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.onDeleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter.toLowerCase(),e=this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t)}));return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:F.a.container,children:[Object(p.jsx)(f,{title:"Phonebook",children:Object(p.jsx)(_,{onSubmit:this.formSubmitHandler})}),Object(p.jsxs)(f,{title:"Contacts",children:[Object(p.jsx)(S,{value:this.state.filter,onChange:this.onChangeFilter}),Object(p.jsx)(A,{contacts:e,onDeleteContact:this.onDeleteContact})]})]})})}}]),n}(a.Component);n(22),n(23);s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(k,{})}),document.querySelector("#root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.d6a46c60.chunk.js.map