(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"ContactsForm_form__I7y_t",text:"ContactsForm_text__NAk_o",btn:"ContactsForm_btn__2qosH"}},function(t,e,n){t.exports={list:"Contacts_list__25kTt",item:"Contacts_item__2SHdg",btn:"Contacts_btn__3LOOf",text:"Contacts_text__3G-St"}},,,,,,,,,function(t,e,n){t.exports={section:"Section_section__2gEMR"}},function(t,e,n){t.exports={text:"Filter_text__21XmT"}},function(t,e,n){t.exports={container:"App_container__hKRxr"}},,,,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),s=n.n(r),o=n(15),i=n(11),l=n(5),u=n(6),m=n(8),b=n(7),h=n(16),d=n(12),j=n.n(d),f=n(0);function p(t){var e=t.title,n=t.children;return Object(f.jsxs)("section",{className:j.a.section,children:[Object(f.jsx)("h2",{children:e}),n]})}var x=n(4),O=n(2),C=n.n(O),_=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(x.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.resetState()},t.resetState=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:C.a.form,onSubmit:this.handleSubmit,children:[Object(f.jsxs)("label",{children:[Object(f.jsx)("p",{className:C.a.text,children:"Name"}),Object(f.jsx)("input",{type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:this.handleChange,autoComplete:"off"})]}),Object(f.jsxs)("label",{children:[Object(f.jsx)("p",{className:C.a.text,children:"Phone number"}),Object(f.jsx)("input",{type:"tel",name:"number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:this.handleChange,autoComplete:"off"})]}),Object(f.jsx)("p",{className:C.a.text,children:Object(f.jsx)("button",{className:C.a.btn,type:"submit",children:"Add contact"})})]})}}]),n}(a.Component),v=n(13),g=n.n(v);function S(t){var e=t.value,n=t.onChange;return Object(f.jsxs)("label",{children:[Object(f.jsx)("p",{className:g.a.text,children:"Find contacts by name"}),Object(f.jsx)("input",{type:"text",name:"",id:"",value:e,onChange:n})]})}var y=n(3),N=n.n(y);function A(t){var e=t.contacts,n=t.onDeleteContact;return Object(f.jsx)("ul",{className:N.a.list,children:e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(f.jsxs)("li",{className:N.a.item,children:[Object(f.jsx)("p",{className:N.a.text,children:e}),Object(f.jsx)("p",{className:N.a.text,children:a}),Object(f.jsx)("button",{className:N.a.btn,onClick:function(){return n(c)},children:"delete"})]},c)}))})}var k=n(14),w=n.n(k),F=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"123",name:"Rosie Simpson",number:"459-12-56"},{id:"456",name:"Hermione Kline",number:"443-89-12"},{id:"789",name:"Eden Clements",number:"645-17-79"},{id:"987",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmitHandler=function(e){if(t.state.contacts.find((function(t){return t.name===e.name})))alert("".concat(e.name," is already in contacts."));else{var n=Object(i.a)({id:Object(h.a)(3)},e);t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[n])}}))}},t.onChangeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.onDeleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter.toLowerCase(),e=this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t)}));return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:w.a.container,children:[Object(f.jsx)(p,{title:"Phonebook",children:Object(f.jsx)(_,{onSubmit:this.formSubmitHandler})}),Object(f.jsxs)(p,{title:"Contacts",children:[Object(f.jsx)(S,{value:this.state.filter,onChange:this.onChangeFilter}),Object(f.jsx)(A,{contacts:e,onDeleteContact:this.onDeleteContact})]})]})})}}]),n}(a.Component);n(22),n(23);s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(F,{})}),document.querySelector("#root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.2b2398c7.chunk.js.map