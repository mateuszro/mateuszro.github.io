(this.webpackJsonpmapapp=this.webpackJsonpmapapp||[]).push([[0],{25:function(e,n,t){e.exports=t(51)},30:function(e,n,t){},48:function(e,n,t){},51:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),i=t(8),r=t.n(i),c=(t(30),t(22)),l=t.n(c),s=(t(48),t(54)),u=t(56),p=t(53),d=t(55),f=[51.505,-.09];var h=function(e){var n=e.location;return void 0!==n[0]&void 0!==n[1]&&(f=n),a.a.createElement(s.a,{center:f,zoom:14,className:"map"},a.a.createElement(u.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),a.a.createElement(p.a,{position:f},a.a.createElement(d.a,null,"A pretty CSS3 popup. ",a.a.createElement("br",null)," Easily customizable.")))},v=t(24);var g=function(e,n,t){e.preventDefault(),l.a.post("http://192.168.1.26:5000",{latitude:n,longitude:t},{headers:{"Content-Type":"application/json"}}).then((function(e){return console.log(e.data)}))},m=function(){var e=Object(v.usePosition)(),n=e.latitude,t=e.longitude;return e.timestamp,e.accuracy,e.error,a.a.createElement("div",{className:"App"},a.a.createElement(h,{location:[n,t]}),a.a.createElement("button",{onClick:function(e){return g(e,n,t)},className:"btn"},"Wy\u015blij lokalizacje"))},w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(a.a.createElement(m,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");w?(!function(e,n){fetch(e).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):b(n,e)}))}}()}},[[25,1,2]]]);
//# sourceMappingURL=main.4847ecf8.chunk.js.map