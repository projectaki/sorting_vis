(this.webpackJsonpvis=this.webpackJsonpvis||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n(1),o=n.n(a),s=n(10),i=n.n(s),c=(n(16),n(2)),u=n.n(c),h=n(9),l=n(7),f=n(3),b=n(4),d=n(6),g=n(5),v=function(t){for(var e=[],n=0;n<t.length;n++)for(var r=0;r<t.length-1;r++)if(t[r]>t[r+1]){var a=t[r];t[r]=t[r+1],t[r+1]=a,e.push([r,r+1])}return[e,t]},j=function(t){var e=[];return m(t,[],0,t.length-1,e),e},m=function t(e,n,r,a,o){if(!(a<=r)){var s=Math.floor((r+a)/2);t(e,n,r,s,o),t(e,n,s+1,a,o),y(e,n,r,a,o)}},y=function(t,e,n,r,a){for(var o=Math.floor((n+r)/2)+1,s=n,i=n;s<=Math.floor((r+n)/2)&&o<=r;)t[s]<=t[o]?e[i++]=t[s++]:e[i++]=t[o++];for(;s<=Math.floor((r+n)/2);)e[i++]=t[s++];for(;o<=r;)e[i++]=t[o++];for(var c=n;c<n+(r-n)+1;c++)t[c]=e[c],a.push([c,e[c]])},p=(n(18),function(t){Object(d.a)(n,t);var e=Object(g.a)(n);function n(t){var r;return Object(f.a)(this,n),(r=e.call(this,t)).state={array:[],terminate:!0,running:!1},r}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.setupArray()}},{key:"setupArray",value:function(){for(var t=[],e=0;e<100;e++)t.push(x(5,60));this.setState({array:t});for(var n=document.getElementsByClassName("array"),r=0;r<n.length;r++)n[r].style.backgroundColor="white",n[r].style.height=t[r]+"vh"}},{key:"resetArray",value:function(){this.setState({terminate:!0}),this.setState({running:!1}),this.setupArray()}},{key:"bubbleSort",value:function(){!1===this.state.running&&(this.setState({running:!0}),this.bubbleSortCode()),console.log(this.state.array)}},{key:"mergeSort",value:function(){!1===this.state.running&&(this.setState({running:!0}),this.mergeSortCode())}},{key:"testSorting",value:function(){for(var t=0,e=0;e<100;e++){for(var n=[],r=[],a=0;a<100;a++){var o=x(5,60);n.push(o),r.push(o)}r.sort((function(t,e){return t-e})),n=v(n)[1],console.log(r),console.log(n);for(var s=0;s<r.length;s++)r[s]!==n[s]&&t++}console.log(t)}},{key:"bubbleSortCode",value:function(){var t=Object(l.a)(u.a.mark((function t(){var e,n,r,a,o,s,i,c,l;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({terminate:!1}),t.next=3,k(1);case 3:e=v(this.state.array)[0],n=document.getElementsByClassName("array"),r=0;case 6:if(!(r<e.length)){t.next=24;break}if(!0!==this.state.terminate){t.next=9;break}return t.abrupt("return");case 9:return a=Object(h.a)(e[r],2),o=a[0],s=a[1],i=n[o].style,c=n[s].style,i.backgroundColor="red",i.backgroundColor="white",l=i.height,i.height=c.height,c.height=l,c.backgroundColor="red",t.next=20,k(1);case 20:c.backgroundColor="white";case 21:r++,t.next=6;break;case 24:this.finished();case 26:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"mergeSortCode",value:function(){var t=Object(l.a)(u.a.mark((function t(){var e,n,r,a,o,s,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({terminate:!1}),t.next=3,k(1);case 3:e=j(this.state.array),n=document.getElementsByClassName("array"),r=0;case 6:if(!(r<e.length)){t.next=19;break}if(!0!==this.state.terminate){t.next=9;break}return t.abrupt("return");case 9:return a=Object(h.a)(e[r],2),o=a[0],s=a[1],(i=n[o].style).height="".concat(s,"vh"),i.backgroundColor="red",t.next=15,k(1);case 15:i.backgroundColor="white";case 16:r++,t.next=6;break;case 19:this.finished();case 21:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"finished",value:function(){var t=Object(l.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=document.getElementsByClassName("array"),n=0;case 2:if(!(n<e.length)){t.next=9;break}return e[n].style.backgroundColor="green",t.next=6,k(.1);case 6:n++,t.next=2;break;case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.state.array;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"back-btn",style:{position:"absolute",padding:0,margin:0},children:Object(r.jsx)("a",{href:"https://projectaki.github.io/portfolio_akos_madarasz/#/Projects",style:{color:"black"},children:Object(r.jsx)("i",{class:"fas fa-arrow-left fa-2x"})})}),Object(r.jsx)("div",{className:"cont",children:e.map((function(t,e){return Object(r.jsx)("div",{className:"array",style:{height:"".concat(t,"vh"),width:"0.6vw"}},e)}))}),Object(r.jsxs)("div",{style:{textAlign:"center"},children:[Object(r.jsx)("button",{onClick:function(){return t.bubbleSort()},children:"BUBBLE"}),Object(r.jsx)("button",{onClick:function(){return t.mergeSort()},children:"MERGE"}),Object(r.jsx)("button",{onClick:function(){return t.resetArray()},children:"RESET"})]})]})}}]),n}(o.a.Component));function k(t){return t=t||2e3,new Promise((function(e){setTimeout((function(){e()}),t)}))}function x(t,e){return Math.floor(Math.random()*(e-t+1)+t)}var O=function(t){Object(d.a)(n,t);var e=Object(g.a)(n);function n(){return Object(f.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"navbar",children:Object(r.jsx)("h1",{style:{margin:0,fontSize:"3vmin",paddingTop:"2vmin",paddingBottom:"2vmin"},children:"Sorting visualiser"})})}}]),n}(a.Component);var C=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(O,{}),Object(r.jsx)(p,{})]})},S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,o=e.getLCP,s=e.getTTFB;n(t),r(t),a(t),o(t),s(t)}))};i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(C,{})}),document.getElementById("root")),S()}},[[19,1,2]]]);
//# sourceMappingURL=main.1fe36326.chunk.js.map