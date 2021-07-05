(this["webpackJsonpmy-react-starter"]=this["webpackJsonpmy-react-starter"]||[]).push([[0],{19:function(t,e,o){t.exports={footer:"Footer_footer__1w0lV",even:"Footer_even__2uLl-",odd:"Footer_odd__3sdY2"}},40:function(t,e,o){t.exports={header:"Header_header__1VCKf"}},41:function(t,e,o){t.exports={centerContainer:"Main_centerContainer__2M3AK"}},49:function(t,e,o){},50:function(t,e,o){},79:function(t,e,o){"use strict";o.r(e);var n=o(0),i=o.n(n),r=o(39),s=o.n(r),c=o(23),a=(o(49),o(27)),b=o(44),u=o(15),l=o(16),d=o(11),j=o(18),h=o(17),O=(o(50),o(40)),p=o.n(O),k=o(81),x=o(82),f=(o(29),o(1)),v=function(t){Object(j.a)(o,t);var e=Object(h.a)(o);function o(t){var n;return Object(u.a)(this,o),(n=e.call(this,t)).state={isEdit:!1},n.onDelete=n.onDelete.bind(Object(d.a)(n)),n.onEdit=n.onEdit.bind(Object(d.a)(n)),n.onEditSave=n.onEditSave.bind(Object(d.a)(n)),n}return Object(l.a)(o,[{key:"onDelete",value:function(){var t=this.props,e=t.onDelete;e(t.id)}},{key:"onEdit",value:function(){this.setState({isEdit:!0})}},{key:"onEditSave",value:function(t){t.preventDefault(),this.props.onEditSubmit(this.props.id,this.bookNameInput.value,this.bookAuthorInput.value,this.bookIsbnInput.value,this.bookCategoryInput.value),this.bookNameInput.value="",this.bookAuthorInput.value="",this.bookIsbnInput.value="",this.bookCategoryInput.value="",this.setState({isEdit:!1})}},{key:"render",value:function(){var t=this,e=this.props,o=e.book_title,n=e.author_name,i=e.isbn,r=e.category;return Object(f.jsx)("div",{children:this.state.isEdit?Object(f.jsx)("div",{children:Object(f.jsx)(k.a,{onSubmit:this.onEditSave,children:Object(f.jsxs)("div",{children:[Object(f.jsxs)("span",{children:[" ",Object(f.jsx)("h3",{children:"Edit book "})]}),Object(f.jsx)("br",{}),Object(f.jsx)("span",{children:"Book Name"}),Object(f.jsx)("input",{placeholder:"Book Name",ref:function(e){return t.bookNameInput=e},defaultValue:o}),Object(f.jsx)("br",{}),Object(f.jsx)("span",{children:"Book author"}),Object(f.jsx)("input",{placeholder:"Book author",ref:function(e){return t.bookAuthorInput=e},defaultValue:n}),Object(f.jsx)("br",{}),Object(f.jsx)("span",{children:"Book isbn"}),Object(f.jsx)("input",{placeholder:"Book isbn",ref:function(e){return t.bookIsbnInput=e},defaultValue:i}),Object(f.jsx)("br",{}),Object(f.jsx)("span",{children:"Book category"}),Object(f.jsx)("input",{placeholder:"Book category",ref:function(e){return t.bookCategoryInput=e},defaultValue:r}),"  ",Object(f.jsx)("br",{}),Object(f.jsx)(x.a,{variant:"primary",size:"sm",onClick:this.onEditSave,children:" Save"}),Object(f.jsx)("hr",{})]})})}):Object(f.jsxs)("div",{children:[Object(f.jsxs)("span",{children:[Object(f.jsx)(x.a,{variant:"danger",size:"sm",onClick:this.onDelete,children:" Delete "})," "]}),Object(f.jsxs)("span",{children:[Object(f.jsx)(x.a,{variant:"warning",size:"sm",onClick:this.onEdit,children:" Edit"})," "]})]})})}}]),o}(n.Component),m=function(t){Object(j.a)(o,t);var e=Object(h.a)(o);function o(t){var n;return Object(u.a)(this,o),(n=e.call(this,t)).onSubmit=n.onSubmit.bind(Object(d.a)(n)),n}return Object(l.a)(o,[{key:"onSubmit",value:function(t){t.preventDefault(),this.props.onAdd(this.bookNameInput.value,this.bookAuthorInput.value,this.bookIsbnInput.value,this.bookCategoryInput.value),this.bookNameInput.value="",this.bookAuthorInput.value="",this.bookIsbnInput.value="",this.bookCategoryInput.value=""}},{key:"render",value:function(){var t=this;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(k.a,{onSubmit:this.onSubmit,children:Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:" Add a book "}),Object(f.jsx)("br",{}),Object(f.jsx)("input",{placeholder:"Book Name",ref:function(e){return t.bookNameInput=e},required:!0}),Object(f.jsx)("input",{placeholder:"Book author",ref:function(e){return t.bookAuthorInput=e},required:!0}),Object(f.jsx)("input",{placeholder:"Book isbn",ref:function(e){return t.bookIsbnInput=e},required:!0}),Object(f.jsx)("input",{placeholder:"Book category",ref:function(e){return t.bookCategoryInput=e},required:!0}),Object(f.jsx)(x.a,{variant:"primary",size:"sm",onClick:this.onSubmit,children:"Add Book"}),Object(f.jsx)("hr",{})]})})})}}]),o}(n.Component);o(41);var y=function(){return Object(f.jsx)("header",{className:p.a.header,children:Object(f.jsx)("nav",{children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"/",children:"home"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"/booklist",children:"booklist"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"/AddBook",children:"AddBook"})})]})})})},g=o(19),S=o.n(g),I=function(){return Object(f.jsx)("footer",{className:S.a.footer,children:Object(f.jsx)("p",{className:Math.floor(Math.random()*Math.floor(10))>5?S.a.even:S.a.odd,children:"Copyright 2021"})})},E=o(24),_=o.n(E),B=o(80),A=function(t){Object(j.a)(o,t);var e=Object(h.a)(o);function o(t){var n;return Object(u.a)(this,o),(n=e.call(this,t)).state={books:JSON.parse(localStorage.getItem("books")),term:""},n.onDelete=n.onDelete.bind(Object(d.a)(n)),n.onAdd=n.onAdd.bind(Object(d.a)(n)),n.onEditSubmit=n.onEditSubmit.bind(Object(d.a)(n)),n}return Object(l.a)(o,[{key:"componentWillMount",value:function(){var t=this.getBooks();this.setState({books:t}),console.log("componentWillMount",t)}},{key:"componentDidUpdate",value:function(t,e){this.state.books!==e.books&&localStorage.setItem("books",JSON.stringify(this.state.books))}},{key:"componentDidMount",value:function(){var t=this,e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({category:"React POST Request Example"})};fetch("https://localhost:4000/books",e).then((function(t){return t.json()})).then((function(e){return t.setState({books:e.category})}))}},{key:"getBooks",value:function(){var t=this;return _.a.defaults.baseURL="http://localhost:4000",_.a.get("/books").then((function(e){var o=e.data;return console.log("+++++++",o),localStorage.setItem("books",JSON.stringify(o)),t.setState((function(){return{book:Object(b.a)(o)}}))})).catch((function(t){console.log("---------",t)})),this.state.books}},{key:"onDelete",value:function(t){var e=this.getBooks().filter((function(e){return e.id!==t}));this.setState({books:e})}},{key:"onAdd",value:function(t,e,o,n){var i=this.getBooks(),r=i.length+1;i.push({id:r,book_title:t,author_name:e,category:o,isbn:n}),this.setState({books:i})}},{key:"onEditSubmit",value:function(t,e,o,n,i){var r=this.getBooks();r=r.map((function(r){return r.id===t&&(r.id=t,r.book_title=e,r.author_name=o,r.category=n,r.isbn=i),r})),this.setState({books:r})}},{key:"render",value:function(){var t=this,e=this.state.books;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{children:e.map((function(t){return t.category}))}),Object(f.jsx)(y,{}),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(m,{onAdd:this.onAdd}),Object(f.jsxs)(B.a,{striped:!0,bordered:!0,hover:!0,books:this.state.books,children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"#"}),Object(f.jsx)("th",{children:"Title book"}),Object(f.jsx)("th",{children:"Author name"}),Object(f.jsx)("th",{children:"Category"}),Object(f.jsx)("th",{children:"ISBN"}),Object(f.jsx)("th",{children:"Action"})]})}),Object(f.jsx)("tbody",{children:this.state.books.map((function(e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.id},e.id),Object(f.jsx)("td",{children:e.book_title}),Object(f.jsx)("td",{children:e.author_name}),Object(f.jsx)("td",{children:e.category}),Object(f.jsx)("td",{children:e.isbn}),Object(f.jsx)("td",{children:Object(f.jsx)("span",{children:Object(f.jsx)(v,Object(a.a)(Object(a.a)({},e),{},{onDelete:t.onDelete,onEditSubmit:t.onEditSubmit}),e.id)})})]},e.id)}))})]})]}),Object(f.jsx)(I,{})]})}}]),o}(n.Component);s.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(c.a,{children:Object(f.jsx)(A,{})})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.8ec986dc.chunk.js.map