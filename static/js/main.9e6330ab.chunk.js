(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c=t(0),o=t(1),s=t.n(o),r=t(3),a=t.n(r),i=(t(13),t(4)),h=t(5),u=t(7),l=t(6),d=(t(14),function(e){return Object(c.jsxs)("div",{className:"card-container",children:[Object(c.jsx)("img",{src:"https://robohash.org/".concat(e.goon.id,"?set=set2&size=180x180"),alt:"good"}),Object(c.jsx)("h2",{children:e.goon.name}),Object(c.jsx)("p",{children:e.goon.email})]})}),j=(t(15),function(e){return Object(c.jsx)("div",{className:"card-list",children:e.goons.map((function(e){return Object(c.jsx)(d,{goon:e},e.id)}))})}),f=(t(16),function(e){var n=e.placeholder,t=e.handleChange;return Object(c.jsx)("input",{className:"search",type:"search",placeholder:n,onChange:t})}),b=(t(17),function(e){Object(u.a)(t,e);var n=Object(l.a)(t);function t(){var e;return Object(i.a)(this,t),(e=n.call(this)).handleChange=function(n){e.setState({searchField:n.target.value})},e.state={monsters:[],searchField:""},e}return Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({monsters:n})}))}},{key:"render",value:function(){var e=this.state,n=e.monsters,t=e.searchField,o=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Monster Cards"}),Object(c.jsx)(f,{placeholder:"Search Monsters",handleChange:this.handleChange}),Object(c.jsx)(j,{goons:o})]})}}]),t}(o.Component)),g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(n){var t=n.getCLS,c=n.getFID,o=n.getFCP,s=n.getLCP,r=n.getTTFB;t(e),c(e),o(e),s(e),r(e)}))};a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root")),g()}],[[18,1,2]]]);
//# sourceMappingURL=main.9e6330ab.chunk.js.map