(this["webpackJsonpbooks-champion"]=this["webpackJsonpbooks-champion"]||[]).push([[0],{36:function(e,t,n){},38:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(28),r=n.n(o),i=(n(36),n(37),n(31)),l=n(3),s=n(4),u=(n(38),n(1)),j=Object(a.createContext)(),d=JSON.parse(localStorage.getItem("user")),b=function(e){var t=e.children,n=Object(a.useState)(d),c=Object(s.a)(n,2),o=c[0],r=c[1];return Object(u.jsx)(j.Provider,{value:{user:o,handleLogin:function(e){localStorage.setItem("user",JSON.stringify({email:e})),r({email:e})},handleLogout:function(){localStorage.removeItem("user"),r(null)}},children:t})},h=n(26),O=Object(a.createContext)(),x=function(e){var t=e.children,n=Object(a.useState)("light"),c=Object(s.a)(n,2),o=c[0],r=c[1];return Object(u.jsx)(O.Provider,{value:{theme:o,toggleTheme:function(){r("light"===o?"dark":"light")}},children:t})},m=function(e){e.onLogin;var t=Object(a.useState)(""),n=Object(s.a)(t,2),c=n[0],o=n[1],r=Object(a.useState)(""),i=Object(s.a)(r,2),d=i[0],b=i[1],x=Object(a.useContext)(j).handleLogin,m=Object(a.useContext)(O),v=m.toggleTheme,f=m.theme,g=Object(l.m)(),p=Object(a.useRef)(null),k=Object(a.useRef)(null);return Object(u.jsx)("div",{className:"login-container",children:Object(u.jsxs)("div",{className:"login-box ".concat("dark"===f&&"login-box-dark"),children:[Object(u.jsx)("h4",{children:"\xa1Bienvenidos a Book Champions!"}),Object(u.jsx)("div",{className:"input-container",children:Object(u.jsx)("input",{className:"input-control",onChange:function(e){p.current.style.borderColor="",p.current.style.outline="",o(e.target.value)},placeholder:"Email",type:"email",ref:p})}),Object(u.jsx)("div",{className:"input-container",children:Object(u.jsx)("input",{className:"input-control",onChange:function(e){k.current.style.borderColor="",k.current.style.outline="",b(e.target.value)},placeholder:"Password",type:"password",ref:k})}),Object(u.jsx)("button",{onClick:function(){return 0===p.current.value.length?(p.current.focus(),p.current.style.borderColor="red",void(p.current.style.outline="none")):0===d.length?(k.current.focus(),k.current.style.borderColor="red",void(k.current.style.outline="none")):(x(c),void g("/home"))},className:"signin-button mb-4",type:"button",children:"Iniciar sesi\xf3n"}),Object(u.jsx)(h.a,{onClick:v,children:"Cambiar tema"})]})})},v=n(6),f=n(8),g=n(30),p=(n(41),n(42),n(43),n(44),function(e){var t=e.date;console.log("In ReadDate");var n=t.getFullYear(),a=t.toLocaleString("es-AR",{month:"long"}),c=t.getUTCDate();return Object(u.jsxs)("div",{className:"date-container",children:[Object(u.jsx)("div",{children:n}),Object(u.jsx)("div",{children:a}),Object(u.jsx)("div",{children:c})]})}),k=(n(45),function(e){var t=e.children;return Object(u.jsx)("div",{className:"book-item-container",children:t})}),C=function(e){var t=e.title,n=e.author,a=e.dateRead,c=e.pageCount;return Object(u.jsxs)(k,{children:[Object(u.jsx)("h2",{children:t}),Object(u.jsx)("h3",{children:n}),Object(u.jsx)(p,{date:a}),Object(u.jsxs)("p",{children:[c," p\xe1ginas"]})]})},N=function(e){var t=e.books,n=e.filterYear;return 0===t.length?Object(u.jsxs)("h2",{className:"no-books-read",children:["\xa1No le\xedste libros en ",n,"!"]}):t.map((function(e){return Object(u.jsx)(C,{title:e.title,author:e.author,pageCount:e.pageCount,dateRead:e.dateRead},e.id)}))},y=(n(46),Object(a.memo)((function(e){var t=e.filterYear,n=e.onFilterYear;console.log("In BookFilter");return Object(u.jsx)("div",{className:"Books-filter",children:Object(u.jsx)("div",{className:"Books-filter__control",children:Object(u.jsxs)("select",{value:t,onChange:function(e){n(e.target.value)},children:[Object(u.jsx)("option",{value:"2023",children:"2023"}),Object(u.jsx)("option",{value:"2022",children:"2022"}),Object(u.jsx)("option",{value:"2021",children:"2021"}),Object(u.jsx)("option",{value:"2020",children:"2020"}),Object(u.jsx)("option",{value:"2019",children:"2019"})]})})})}))),R=(n(47),function(e){var t=e.value,n=e.maxValue,a="0%";return n>0&&(a=Math.round(t/n*100)+"%",console.log(a)),Object(u.jsxs)("div",{className:"chart-bar",children:[Object(u.jsx)("div",{className:"chart-bar__inner",children:Object(u.jsx)("div",{className:"chart-bar__fill",style:{width:a}})}),Object(u.jsx)("div",{className:"chart-bar__label",children:"Libros leidos"})]})}),T=(n(48),function(e){var t=e.maxRead,n=e.onMaxRead;return Object(u.jsxs)("form",{children:[Object(u.jsx)("label",{children:"Registrar nuevo objetivo de lectura"}),Object(u.jsx)("input",{className:"new-max-read-control",onChange:function(e){n(e.target.value)},type:"number",step:"1",value:t})]})}),S=Object(a.memo)((function(e){var t=e.books;console.log("In Books");var n=Object(a.useState)("2021"),c=Object(s.a)(n,2),o=c[0],r=c[1],i=Object(a.useState)(7),l=Object(s.a)(i,2),j=l[0],d=l[1],b=Object(a.useCallback)((function(e){r(e)}),[]),h=t.filter((function(e){return e.dateRead.getFullYear().toString()===o}));return t.length?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)(T,{maxRead:j,onMaxRead:function(e){d(e)}}),Object(u.jsx)(R,{value:h.length,maxValue:j}),Object(u.jsx)(y,{filterYear:o,onFilterYear:b})]}),Object(u.jsx)("div",{className:"books-container books-container-dark",children:Object(u.jsx)(N,{books:h,filterYear:o})})]}):Object(u.jsx)("p",{children:"No hay lecturas disponibles"})})),D=(n(49),n(50),{title:"",author:"",dateRead:"",pageCount:"",formValid:!1}),E=function(e,t){switch(t.type){case"TITLE_UPDATED":return Object(v.a)(Object(v.a)({},e),{},{title:t.value,formValid:t.value&&e.author&&e.pageCount&&e.dateRead});case"AUTHOR_UPDATED":return Object(v.a)(Object(v.a)({},e),{},{author:t.value,formValid:t.value&&e.title&&e.pageCount&&e.dateRead});case"DATE_READ_UPDATED":return Object(v.a)(Object(v.a)({},e),{},{dateRead:t.value,formValid:t.value&&e.author&&e.pageCount&&e.title});case"PAGE_COUNT_UPDATED":return Object(v.a)(Object(v.a)({},e),{},{pageCount:t.value,formValid:t.value&&e.author&&e.title&&e.dateRead});case"RESET_FORM":return D;default:return e}},A=function(e){var t=e.onBookDataSaved,n=e.onToggleForm,c=Object(a.useReducer)(E,D),o=Object(s.a)(c,2),r=o[0],i=o[1];return Object(u.jsxs)("form",{children:[Object(u.jsxs)("div",{className:"new-book-controls",children:[Object(u.jsxs)("div",{className:"new-book-control",children:[Object(u.jsx)("label",{children:"T\xedtulo"}),Object(u.jsx)("input",{type:"text",className:"input-control",value:r.title,onChange:function(e){i({type:"TITLE_UPDATED",value:e.target.value})}})]}),Object(u.jsxs)("div",{className:"new-book-control",children:[Object(u.jsx)("label",{children:"Autor"}),Object(u.jsx)("input",{type:"text",className:"input-control",value:r.author,onChange:function(e){i({type:"AUTHOR_UPDATED",value:e.target.value})}})]}),Object(u.jsxs)("div",{className:"new-book-control",children:[Object(u.jsx)("label",{children:"P\xe1ginas"}),Object(u.jsx)("input",{type:"number",className:"input-control",min:"1",step:"1",onChange:function(e){i({type:"PAGE_COUNT_UPDATED",value:e.target.value})},value:r.pageCount})]}),Object(u.jsxs)("div",{className:"new-book-control",children:[Object(u.jsx)("label",{children:"\xbfCu\xe1ndo terminaste de leerlo?"}),Object(u.jsx)("input",{type:"date",className:"input-control",min:"2019-01-01",max:"2024-12-31",onChange:function(e){i({type:"DATE_READ_UPDATED",value:e.target.value})},value:r.dateRead})]})]}),Object(u.jsxs)("div",{className:"new-book-actions",children:[Object(u.jsx)("button",{onClick:n,children:"Cancelar"}),Object(u.jsx)("button",{disabled:!r.formValid,onClick:function(e){e.preventDefault();var n={title:r.title,author:r.author,pageCount:r.pageCount,dateRead:new Date(r.dateRead)};t(n),i({type:"RESET_FORM"})},type:"button",children:"Agregar lectura"})]})]})},_=Object(a.memo)((function(e){var t=e.onBookAdded;console.log("new Book");var n=Object(a.useState)(!1),c=Object(s.a)(n,2),o=c[0],r=c[1],i=function(){r(!o)};return o?Object(u.jsx)("div",{className:"new-book",children:Object(u.jsx)(A,{onToggleForm:i,onBookDataSaved:function(e){var n=Object(v.a)(Object(v.a)({},e),{},{id:Math.random().toString()});t(n)}})}):Object(u.jsx)("div",{className:"new-book",children:Object(u.jsx)("button",{className:"new-book-button",onClick:i,children:"Registrar nueva lectura"})})})),w=n(55),P=Object(a.createContext)(),B=function(e){var t=e.children,n=Object(a.useState)(!1),c=Object(s.a)(n,2),o=c[0],r=c[1];return Object(u.jsx)(P.Provider,{value:{isLoading:o,toggleLoading:function(e){r(e)}},children:t})},L=(n(51),function(){var e=Object(a.useContext)(O).theme;return Object(u.jsx)("div",{className:"spinner ".concat("dark"===e&&"dark-theme-spinner"," ")})}),U=function(e){e.onSignOut;var t=Object(a.useState)([]),n=Object(s.a)(t,2),c=n[0],o=n[1],r=Object(a.useContext)(j),i=r.user,d=r.handleLogout,b=Object(a.useContext)(O),x=(b.theme,b.toggleTheme),m=Object(a.useContext)(P),p=m.isLoading,k=m.toggleLoading,C=Object(l.m)(),N=i.email.split("@")[0],y=Object(a.useCallback)((function(e){var t=e.dateRead.toISOString().slice(0,10);fetch("https://63a44a012a73744b0072f847.mockapi.io/api/books/Books",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({title:e.title,author:e.author,dateRead:t,pageCount:parseInt(e.pageCount,10)})}).then((function(e){if(e.ok)return e.json();throw new Error("The response has some errors!")})).then((function(){var t=[e].concat(Object(f.a)(c));o(t)})).catch((function(e){return console.log(e)}))}),[c]);return Object(a.useEffect)((function(){k(!0),fetch("https://63a44a012a73744b0072f847.mockapi.io/api/books/Books",{headers:{Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){k(!1);var t=e.map((function(e){return Object(v.a)(Object(v.a)({},e),{},{dateRead:new Date(e.dateRead)})}));o(t)})).catch((function(e){k(!1),console.log(e)}))}),[]),Object(u.jsxs)(u.Fragment,{children:[p&&Object(u.jsx)(L,{}),Object(u.jsxs)(g.a,{children:[Object(u.jsxs)(w.a,{children:[Object(u.jsxs)("h4",{className:"text-left m-3",children:["Hola ",N,"!"]}),Object(u.jsx)(h.a,{onClick:x,children:"Cambiar tema"})]}),Object(u.jsx)(w.a,{md:3,className:"mx-3 d-flex justify-content-end",children:Object(u.jsx)(h.a,{className:"m-4",variant:"primary",onClick:function(){d(),C("/login")},children:"Cerrar Sesi\xf3n"})})]}),Object(u.jsx)("h2",{children:"Books Champion App"}),Object(u.jsx)(_,{onBookAdded:y}),Object(u.jsx)(S,{books:c})]})},F=function(e){var t=e.children;return Object(a.useContext)(j).user?t:Object(u.jsx)(l.a,{to:"/login",replace:!0})},I=(n(52),n(53),function(){var e=Object(l.m)();return Object(u.jsxs)("div",{className:"container404",children:[Object(u.jsx)("h2",{className:"my-4",children:"\xa1Oops! La p\xe1gina solicitada no fue encontrada"}),Object(u.jsx)(h.a,{onClick:function(){e("/login")},variant:"primary",children:"Volver a iniciar sesi\xf3n"})]})}),V=function(){var e=Object(a.useContext)(O).theme,t=Object(a.useContext)(P).isLoading,n=Object(i.a)([{path:"/",element:Object(u.jsx)(l.a,{to:"login"})},{path:"/login",element:Object(u.jsx)(m,{})},{path:"/home",element:Object(u.jsx)(F,{children:Object(u.jsx)(U,{})})},{path:"*",element:Object(u.jsx)(I,{})}]);return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"".concat("dark"===e&&"dark-theme"," ").concat(t&&"opacity-80"),children:Object(u.jsx)(l.c,{router:n})})})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(b,{children:Object(u.jsx)(x,{children:Object(u.jsx)(B,{children:Object(u.jsx)(V,{})})})})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.0df41043.chunk.js.map