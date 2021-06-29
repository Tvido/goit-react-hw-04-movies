(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[5],{40:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(0);var n=a(1),r=function(e){var t=e.poster_path,a=e.title;return Object(n.jsxs)("div",{className:"",children:[Object(n.jsx)("div",{className:"",children:Object(n.jsx)("img",{src:t,className:"card-img-top",alt:a})}),Object(n.jsx)("div",{className:"",children:Object(n.jsx)("h5",{className:"",children:a})})]})}},41:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a(0);var n=a(7),r=a(2),c=a(40),s=(a(16),a(1)),i=Object(r.f)((function(e){var t=e.movies,a=e.match,r=e.location;return Object(s.jsx)("ul",{className:"MovieList ",children:t.map((function(e){var t=e.id,i=e.poster_path,o=e.title;return Object(s.jsx)("li",{children:Object(s.jsx)(n.b,{to:{pathname:"".concat(a.url,"/").concat(t),state:{from:r}},className:"",children:Object(s.jsx)(c.a,{poster_path:"https://image.tmdb.org/t/p/w300".concat(i),title:o})})},t)}))})}))},72:function(e,t,a){"use strict";a.r(t);var n=a(37),r=a.n(n),c=a(38),s=a(33),i=a(34),o=a(36),u=a(35),h=a(0),l=a(1),m=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.reset()},e.reset=function(){e.setState({query:""})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.query;return Object(l.jsx)("header",{className:"Searchbar",children:Object(l.jsxs)("form",{onSubmit:this.handleSubmit,className:"SearchForm",children:[Object(l.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(l.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(l.jsx)("input",{className:"SearchForm-input",type:"text",value:e,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange})]})})}}]),a}(h.Component),j=a(41),b=a(39),d=a.n(b),p=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={movies:[],movieQuery:"",imagesPage:1},e.onChangeQuery=function(t){e.setState({movieQuery:t})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.movieQuery!==this.state.movieQuery&&this.fetchMovies()}},{key:"fetchMovies",value:function(){var e=Object(c.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"822df93417c2789fa5aa8e4d6553456b",t=this.state.movieQuery,e.next=4,d.a.get(" https://api.themoviedb.org/3/search/movie?api_key=".concat("822df93417c2789fa5aa8e4d6553456b","&language=en-US&page=1&include_adult=false&query=").concat(t));case 4:a=e.sent,console.log(a.data.results),this.setState({movies:a.data.results});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"SearchBar"}),Object(l.jsx)(m,{onSubmit:this.onChangeQuery}),Object(l.jsx)("ul",{className:"",children:Object(l.jsx)(j.a,{movies:this.state.movies})})]})}}]),a}(h.Component);t.default=p}}]);
//# sourceMappingURL=5.e3fc57e5.chunk.js.map