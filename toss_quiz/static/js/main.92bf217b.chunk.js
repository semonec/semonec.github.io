(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(t,e,n){t.exports=n(43)},24:function(t,e,n){},25:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),r=n(16),o=n.n(r),c=(n(24),n(2)),l=n(3),s=n(5),u=n(4),h=n(6),m=(n(25),n(17)),p=n.n(m),v=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).state={title:t.item&&t.item.title,link:t.item&&t.item.link},n}return Object(h.a)(e,t),Object(l.a)(e,[{key:"compareItem",value:function(t){return this.props.item.link!==t.link||this.props.item.title!==t.title}},{key:"shouldComponentUpdate",value:function(t,e){return!!this.compareItem(t.item)&&(this.setState({title:t.item.title,link:t.item.link}),!0)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("a",{href:this.state.link,target:"_blank"},this.state.title))}}]),e}(a.Component),f=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).state={text:"",result:[]},n}return Object(h.a)(e,t),Object(l.a)(e,[{key:"changeText",value:function(t){this.setState({text:t.target.value})}},{key:"query",value:function(){var t=this;p.a.get("https://openapi.naver.com/v1/search/news.json?query=".concat(this.state.text),{headers:{"X-Naver-Client-Id":"QfWUBuPQLRV5IUFcNJ9l","X-Naver-Client-Secret":"G130WKaANl"}}).then(function(e){console.log(e);var n=e.data.items;if(n){var a=n.filter(function(t){var e=t.title;if(e.search("\ud1a0\uc2a4")>=0||e.search("\ud034\uc988")>=0)return!0});console.log(a),t.setState({result:a})}}).catch(function(e){console.error(e),t.setState({result:[]})})}},{key:"render",value:function(){var t;return this.state.result.length&&(t=this.state.result.map(function(t,e){return i.a.createElement(v,{item:t})})),i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("p",null,"Input keyword then, press 'SEARCH' button"),i.a.createElement("input",{type:"text",onChange:this.changeText.bind(this)}),i.a.createElement("br",null),i.a.createElement("button",{onClick:this.query.bind(this)},"SEARCH"),t))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.92bf217b.chunk.js.map