(this.webpackJsonpbookstore=this.webpackJsonpbookstore||[]).push([[0],{16:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(17),o=c.n(n),r=c(9),i=c(13),j=c(3),l=c(38),b=(c(16),c(1)),d=function(){return Object(b.jsxs)("div",{className:"Nav-Container",children:[Object(b.jsx)("h1",{children:"Bookstore CMS"}),Object(b.jsxs)("nav",{children:[Object(b.jsxs)("ul",{className:"Nav-Items",children:[Object(b.jsx)("li",{className:"Nav-Item1",children:Object(b.jsx)(i.b,{exact:!0,to:"/",children:"BOOKS"})}),Object(b.jsx)("li",{className:"Nav-Item2",children:Object(b.jsx)(i.b,{to:"/categories",children:"CATEGORIES"})})]}),Object(b.jsx)("button",{className:"user",type:"button",children:Object(b.jsx)(l.a,{className:"userIcon"})})]})]})},u=function(e){var t=e.text;return Object(b.jsx)("div",{className:"Categories-Container",children:t})},O=c(15),p=c(10),h=c(25),m=c.n(h),x="REMOVE_BOOK_SUCCESS",f="ADD_BOOK_SUCCESS",N="GET_BOOK_REQUEST",k="GET_BOOK_SUCCESS",v="GET_BOOK_FAILURE",C=function(){return{type:N}},y=function(){return function(e){e(C),m.a.get("https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Cr80pbkuf1RrEQZCSqfj/books").then((function(t){var c=Object.entries(t.data).map((function(e){return{id:e[0],title:e[1][0].title,category:e[1][0].category,author:"Jane Doe"}}));e(function(e){return{type:k,payload:e}}(c))})).catch((function(t){var c=t.message;e(function(e){return{type:v,payload:e}}(c))}))}},E=function(e){return function(t){var c=e.item_id,a=e.category,s=e.title;m.a.post("https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Cr80pbkuf1RrEQZCSqfj/books",{item_id:c,title:s,category:a}).then((function(){t({type:f,payload:{id:c,title:s,category:a,author:"Jane Doe"}})}))}},g=function(e){return function(t){fetch("https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Cr80pbkuf1RrEQZCSqfj/books/".concat(e.id),{method:"DELETE",body:JSON.stringify({item_id:e}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(){t({type:x,payload:e})}))}},S={loading:!1,books:[],error:""},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(p.a)(Object(p.a)({},e),{},{loading:!0});case k:return Object(p.a)(Object(p.a)({},e),{},{loading:!0,books:[].concat(Object(O.a)(e.books),Object(O.a)(t.payload)),error:""});case v:return{loading:!1,books:[],error:t.payload};case f:return Object(p.a)(Object(p.a)({},e),{},{books:[].concat(Object(O.a)(e.books),[t.payload])});case x:return Object(p.a)(Object(p.a)({},e),{},{books:Object(O.a)(e.books.filter((function(e){return e.id!==t.payload.id})))});default:return e}},I=function(e){var t=e.book,c=t.id,a=t.category,s=t.title,n=t.author,o=Object(r.b)();return Object(b.jsxs)("div",{className:"Book-Container",children:[Object(b.jsxs)("div",{className:"Book-Info",children:[Object(b.jsx)("p",{className:"Genre",children:a}),Object(b.jsx)("h3",{className:"Title",children:s}),Object(b.jsx)("p",{className:"Author",children:n}),Object(b.jsxs)("div",{className:"Book-Edits",children:[Object(b.jsx)("button",{type:"button",className:"Edit-Item",children:"Comments"}),Object(b.jsx)("span",{className:"Edit-Item",children:"|"}),Object(b.jsx)("button",{type:"button",className:"Edit-Item Edit-Item2",onClick:function(){o(g({id:c}))},children:"Remove"}),Object(b.jsx)("span",{className:"Edit-Item",children:"|"}),Object(b.jsx)("button",{type:"button",className:"Edit-Item",children:"Edit"})]})]}),Object(b.jsxs)("div",{className:"Book-Stats",children:[Object(b.jsxs)("div",{className:"Completion",children:[Object(b.jsx)("div",{className:"Circle"}),Object(b.jsxs)("div",{className:"Book-Stats1",children:[Object(b.jsx)("p",{className:"Percent",children:"100%"}),Object(b.jsx)("p",{className:"Status",children:"Completed"})]})]}),Object(b.jsx)("span",{className:"Partition"}),Object(b.jsxs)("div",{className:"Chapter-Stats",children:[Object(b.jsx)("p",{className:"Current-Chapter",children:"CURRENT CHAPTER"}),Object(b.jsx)("p",{className:"Chapter-Number",children:"Chapter 17"}),Object(b.jsx)("button",{className:"Update-Progress",type:"button",children:"UPDATE PROGRESS"})]})]})]})},A=c(26),D=c(68),_=function(){var e=Object(a.useState)(""),t=Object(A.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)("Drama"),o=Object(A.a)(n,2),i=o[0],j=o[1],l=Object(r.b)();return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{children:[Object(b.jsx)("h2",{className:"Add-Title",children:"ADD NEW BOOK"}),Object(b.jsx)("input",{className:"Input1",type:"text",name:"title",value:c,onChange:function(e){return s(e.target.value)},placeholder:"Book Title",required:!0}),Object(b.jsxs)("select",{className:"Input2",name:"category",value:i,placeholder:"Category",onChange:function(e){return j(e.target.value)},required:!0,children:[Object(b.jsx)("option",{value:"Drama",children:"Drama"}),Object(b.jsx)("option",{value:"Action",children:"Action"})]}),Object(b.jsx)("input",{className:"Input3",type:"submit",value:"ADD BOOK",onClick:function(e){e.preventDefault(),c&&i&&(l(E({item_id:Object(D.a)(),category:i,title:c})),s(""),j("Drama"))}})]})})},R=function(){var e=Object(r.c)((function(e){return e.books.books})),t=Object(r.c)((function(e){return e.books.loading})),c=Object(r.b)();Object(a.useEffect)((function(){!1===t&&c(y())}),[]);var s=e.map((function(e){return Object(b.jsx)(I,{book:e},e.id)}));return Object(b.jsxs)("div",{className:"Main-Holder",children:[Object(b.jsx)("ul",{className:"Books-Holder",children:s}),Object(b.jsx)("div",{className:"Border"}),Object(b.jsx)(_,{})]})};var T=function(){return Object(b.jsx)(i.a,{basename:"/bookstore",children:Object(b.jsx)(j.c,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(d,{}),Object(b.jsx)(j.a,{path:"/categories",children:Object(b.jsx)(u,{text:"Under Construction."})}),Object(b.jsx)(j.a,{path:"/",exact:!0,children:Object(b.jsx)(R,{})})]})})})},U=c(20),K=c(36),G=c(37),P=c.n(G),q=Object(U.b)({books:B}),J=Object(U.c)(q,Object(U.a)(P.a,K.a));o.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(r.a,{store:J,children:Object(b.jsx)(T,{})})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.6f5e1262.chunk.js.map