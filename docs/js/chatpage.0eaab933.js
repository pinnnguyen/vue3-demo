(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chatpage"],{5246:function(t,e,n){"use strict";n("68ef"),n("cb51"),n("3743"),n("8a0b")},"6b41":function(t,e,n){"use strict";var c=n("7a23"),r=n("d282"),i=n("b1d2"),a=n("a5d6"),o=n("ad06"),l=Object(r["a"])("nav-bar"),s=l[0],u=l[1];e["a"]=s({props:{title:String,fixed:Boolean,zIndex:[Number,String],leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,border:{type:Boolean,default:!0}},emits:["click-left","click-right"],setup:function(t,e){var n=e.emit,r=e.slots,l=Object(c["z"])(),s=Object(a["a"])(l,u),f=function(t){n("click-left",t)},d=function(t){n("click-right",t)},b=function(){return r.left?r.left():[t.leftArrow&&Object(c["h"])(o["a"],{class:u("arrow"),name:"arrow-left"},null),t.leftText&&Object(c["h"])("span",{class:u("text")},[t.leftText])]},p=function(){return r.right?r.right():t.rightText?Object(c["h"])("span",{class:u("text")},[t.rightText]):void 0},h=function(){var e,n=t.title,a=t.fixed,o=t.border,s=t.zIndex;return Object(c["h"])("div",{ref:l,style:{zIndex:s},class:[u({fixed:a}),(e={},e[i["b"]]=o,e)]},[Object(c["h"])("div",{class:u("left"),onClick:f},[b()]),Object(c["h"])("div",{class:[u("title"),"van-ellipsis"]},[r.title?r.title():n]),Object(c["h"])("div",{class:u("right"),onClick:d},[p()])])};return function(){return t.fixed&&t.placeholder?s(h):h()}}})},"8a0b":function(t,e,n){},a11f:function(t,e,n){"use strict";n.r(e);n("d81d"),n("b64b"),n("5246");var c=n("6b41"),r=(n("96cf"),n("1da1")),i=n("7a23"),a=n("954b"),o={Q1:'<p>这是第1个问题<span class="cred">哈哈</span>自定义html</p>',Q2:'<img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="微信关注指引" width="100%"/><img src="https://img.yzcdn.cn/vant/leaf.jpg" alt="微信关注指引" width="100%"/>',Q3:"这是第3个问题",Q4:"这是第4个问题",Q5:'<p>这是第5个问题</p><img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt="ipad" width="100%"/>',Q6:"这是第6个问题",Q7:"这是第7个问题",Q8:"问题结束",Q9:"结束语"},l={A1:"这是第1个回答选项",A2:"这是第2个回答选项",A3:"这是第3个回答选项",A4:"这是第4个回答选项",A5:"这是第5个回答选项",A6:"这是第6个回答选项",A7:"这是第7个回答选项",A8:"这是第8个回答选项",A9:"这是第9个回答选项",A10:"这是第10个回答选项",A11:"这是第11个回答选项",A12:"这是第12个回答选项",A13:"这是第13个回答选项",A14:"这是第14个回答选项",A15:"这是第15个回答选项",A16:"这是第16个回答选项"},s={Q1:{A1:"Q6",A2:"Q3",A3:"Q7",A4:"Q5"},Q2:{A5:"Q4",A6:"Q3",A7:"Q8",A8:"Q1"},Q3:{A9:"Q2",A10:"Q4",A11:"Q8"},Q4:{A5:"Q1",A7:"Q8",A2:"Q3",A8:"Q4"},Q5:{A1:"Q5",A3:"Q6",A9:"Q7",A11:"Q8"},Q6:{A4:"Q2",A6:"Q6",A10:"Q4",A12:"Q7"},Q7:"Q8",Q8:"Q9"};n("cde2");function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,c=t.scrollTop;if(c===e||"number"!==typeof e||0===n)return!1;window.requestAnimationFrame||(window.requestAnimationFrame=function(t){return setTimeout(t,17)});var r=function r(){c+=(e-c)/n,Math.abs(e-c)<2?t.scrollTop=e:(t.scrollTop=c,requestAnimationFrame(r))};r()}e["default"]=Object(i["i"])((function(){var t=Object(a["c"])(),e=Object(i["y"])([]),n=0,f=Object(i["y"])([]),d=s.Q1,b=function(){t.back()},p=function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["o"])();case 2:e=document.documentElement.scrollTop||document.body.scrollTop,n=e===document.documentElement.scrollTop?document.documentElement:document.body,u(n,n.offsetHeight-n.clientHeight+100,10);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){console.log("聊天结束")},m=function t(c){if(e.push({message:o[c],direction:"left"}),d=s[c],!d)return h();"string"===typeof d?(n=setTimeout((function(){t(d)}),5*Math.random()*100),p()):f=Object.keys(d)},g=function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(c){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.push({message:l[c],direction:"right"}),f=[],n=setTimeout((function(){m("string"===typeof d?d:d[c])}),100*(5*Math.random()+5)),p();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),A=function(){return e.length>0&&Object(i["h"])("div",{class:"chat-wrapper"},[e.map((function(t){return Object(i["h"])("li",{class:"flex pd10"},["left"===t.direction?Object(i["h"])("div",{class:"avatar"},null):null,Object(i["h"])("div",{class:["mg-l10 flex-auto bubble","left"===t.direction?"bubble-left":"bubble-right"]},[Object(i["h"])("p",{class:"bgfff lh20 fs12",innerHTML:t.message},null)]),"right"===t.direction?Object(i["h"])("div",{class:"avatar"},null):null])}))])},Q=function(){return f.length>0&&Object(i["h"])("div",{class:"answers-wrapper flex flex-wrap max640"},[f.map((function(t){return Object(i["h"])("div",{class:"btnbox col-6"},[Object(i["h"])("div",{class:"btn",onClick:function(){return g(t)}},[l[t]])])}))])};return Object(i["s"])((function(){m("Q1")})),Object(i["t"])((function(){clearTimeout(n)})),function(){return Object(i["h"])("div",{class:"pd-nav"},[Object(i["h"])(c["a"],{fixed:!0,title:"聊天室","left-arrow":!0,"onClick-left":b},null),A(),Q()])}}))},b64b:function(t,e,n){var c=n("23e7"),r=n("7b0b"),i=n("df75"),a=n("d039"),o=a((function(){i(1)}));c({target:"Object",stat:!0,forced:o},{keys:function(t){return i(r(t))}})},cde2:function(t,e,n){},d81d:function(t,e,n){"use strict";var c=n("23e7"),r=n("b727").map,i=n("1dde"),a=n("ae40"),o=i("map"),l=a("map");c({target:"Array",proto:!0,forced:!o||!l},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);