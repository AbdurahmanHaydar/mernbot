(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,a){e.exports=a(45)},21:function(e,t,a){},22:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(6),c=a.n(o),i=(a(21),a(22),a(4)),r=a(7),l=a(8),m=a(15),h=a(14),u=a(13),g=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={messageList:[{author:"them",type:"text",data:{text:"Hi, Welcome!"}}]},e}return Object(l.a)(a,[{key:"_onMessageWasSent",value:function(e){var t=this;console.log("message",e),this.setState({messageList:[].concat(Object(i.a)(this.state.messageList),[e])}),fetch(window.location.origin+"/api/chatbot?crsf=c2a79270-a6ee-49e5-9cf4-2c114d733892",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){t.setState({messageList:[].concat(Object(i.a)(t.state.messageList),[e[0]])}),console.log(".",e)}))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(u.a,{agentProfile:{teamName:"FinChatBot"},onMessageWasSent:this._onMessageWasSent.bind(this),messageList:this.state.messageList,showEmoji:!1,mute:!0,style:{color:"green"}}))}}]),a}(n.Component);var d=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.941b3902.chunk.js.map