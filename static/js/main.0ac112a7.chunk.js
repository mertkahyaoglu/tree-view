(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(29)},,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e){e.exports=[{id:1,parent:null,ancestors:[]},{id:2,parent:1,ancestors:[1]},{id:3,parent:null,ancestors:[]},{id:4,parent:3,ancestors:[1]}]},function(e){e.exports=[{id:1,parent:null,ancestors:[]},{id:2,parent:1,ancestors:[1]},{id:3,parent:1,ancestors:[1]},{id:4,parent:3,ancestors:[1,3]},{id:5,parent:3,ancestors:[1,3]},{id:6,parent:2,ancestors:[1,2]},{id:7,parent:5,ancestors:[1,5,3]},{id:8,parent:5,ancestors:[1,5,3]}]},function(e){e.exports=[{id:1,parent:null,ancestors:[]},{id:2,parent:1,ancestors:[1]},{id:3,parent:1,ancestors:[1]},{id:4,parent:1,ancestors:[1]},{id:5,parent:2,ancestors:[1,2]},{id:6,parent:2,ancestors:[1,2]},{id:7,parent:2,ancestors:[1,2]},{id:8,parent:3,ancestors:[1,3]},{id:9,parent:4,ancestors:[1,4]}]},function(e){e.exports=[{id:1,parent:null,ancestors:[]},{id:2,parent:1,ancestors:[1]},{id:3,parent:1,ancestors:[1]},{id:4,parent:2,ancestors:[1]},{id:5,parent:2,ancestors:[1,2]},{id:6,parent:2,ancestors:[1,2]},{id:61,parent:2,ancestors:[1,2]},{id:7,parent:3,ancestors:[1,3]},{id:8,parent:4,ancestors:[1,3,4]},{id:9,parent:4,ancestors:[1,3,4]},{id:10,parent:4,ancestors:[1,3,4]},{id:11,parent:8,ancestors:[1,3,4,8]},{id:12,parent:9,ancestors:[1,3,4,9]},{id:13,parent:12,ancestors:[1,3,4,9,12]},{id:14,parent:12,ancestors:[1,3,4,9,12]},{id:15,parent:12,ancestors:[1,3,4,9,12]},{id:16,parent:12,ancestors:[1,3,4,9,12]},{id:17,parent:13,ancestors:[1,3,4,9,12,13]},{id:19,parent:15,ancestors:[1,3,4,9,12,15]},{id:20,parent:15,ancestors:[1,3,4,9,12,16]},{id:21,parent:15,ancestors:[1,3,4,9,12,16]},{id:22,parent:16,ancestors:[1,3,4,9,12,16]}]},function(e){e.exports=[{id:1,parent:null,ancestors:[]},{id:2,parent:null,ancestors:[]},{id:3,parent:null,ancestors:[]},{id:4,parent:null,ancestors:[]},{id:5,parent:null,ancestors:[]},{id:6,parent:null,ancestors:[]},{id:7,parent:null,ancestors:[]},{id:8,parent:null,ancestors:[]},{id:9,parent:null,ancestors:[]},{id:10,parent:null,ancestors:[]}]},function(e){e.exports=[{id:1,parent:null,ancestors:[]},{id:2,parent:1,ancestors:[1]},{id:3,parent:1,ancestors:[1]},{id:4,parent:1,ancestors:[1]},{id:5,parent:1,ancestors:[1]},{id:6,parent:2,ancestors:[1,2]},{id:7,parent:2,ancestors:[1,2]},{id:8,parent:2,ancestors:[1,2]},{id:9,parent:3,ancestors:[1,3]},{id:10,parent:3,ancestors:[1,3]},{id:11,parent:4,ancestors:[1,4]},{id:12,parent:4,ancestors:[1,4]},{id:13,parent:5,ancestors:[1,5]}]},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(7),o=n.n(s),c=n(1),i=n(2),d=n(4),l=n(3),u=n(5),p=n(9),h=(n(15),36),f=96,v=60,g=2;var m=function(e){var t=e.parentId,n=e.parentNodeRef,r=e.nodeRefs,s=e.totalWeight,o=e.weight,c=r[0].getBoundingClientRect(),i=r[r.length-1].getBoundingClientRect(),d=r[0].parentNode.parentNode.getBoundingClientRect(),l=n.getBoundingClientRect().left+h,u=Math.min(c.left+h,l),p=Math.max(i.right-h,l)-u,m=u-d.left,b=c.left+h-l>0,y=v/(s+1)*o,O=v-y,j=(b?c.left-u+h:0)+g,R=Array(r.length).fill().reduce(function(e,t,n){return e.concat(a.a.createElement("path",{key:n,d:"M".concat(j+n*f,",").concat(y," l00,").concat(O)}))},[]),E="M".concat(g,",").concat(y," l").concat(p,",00 "),k="M".concat((b?0:l-u)+g,",00 l00,").concat(y);return a.a.createElement("svg",{class:"lines","data-parentId":t,style:{top:-v,left:m,width:p+2*g,height:v}},R,a.a.createElement("path",{d:E}),a.a.createElement("path",{d:k}))},b=n(8),y=n.n(b),O=(n(17),{width:72,height:60}),j=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(n=Object(d.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).handleRef=function(e){var t=n.props,r=t.onRef,a=t.node.id;r&&r(a,e)},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.node,t=e.id,n=e.parentId,r=y()("node",{hasParent:!!n});return a.a.createElement("div",{style:O,ref:this.handleRef,class:r},t)}}]),t}(a.a.Component),R=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3?arguments[3]:void 0;Object(c.a)(this,e),this.id=t,this.parentId=n,this.children=r,this.data=a}return Object(i.a)(e,[{key:"isRoot",get:function(){return!this.parentId}},{key:"isLeaf",get:function(){return 0===this.children.length}}]),e}(),E=function(){function e(t){Object(c.a)(this,e),this.root=t,this.levels=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};t.children.length>0&&(r[n]=(r[n]||[]).concat(t.children),t.children.forEach(function(t){e(t,n+1,r)}));return Object.keys(r).map(function(e){return new k(Number(e),r[e])})}(t,1)}return Object(i.a)(e,[{key:"height",get:function(){return Object.keys(this.levels).length+1}},{key:"isRootTree",get:function(){return this.root.isLeaf}}]),e}(),k=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];Object(c.a)(this,e),this.level=t,this.nodes=n};function w(e){var t={};return e.forEach(function(e){var n=new R(e.id,e.parent,[],e);t[n.id]=n}),e.forEach(function(e){if(e.parent){var n=t[e.id];t[e.parent].children.push(n)}}),Object.keys(t).filter(function(e){return!t[e].parentId}).map(function(e){return new E(t[e])})}n(19);var x=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(n=Object(d.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).nodeRefs={},n.state={mounted:!1},n.handleNodeRef=function(e,t){n.nodeRefs[e]=t},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({mounted:!0})}},{key:"renderLevels",value:function(){var e=this,t=this.state.mounted,n=this.props.tree;return[a.a.createElement("div",{class:"level",key:"root"},a.a.createElement(j,{onRef:this.handleNodeRef,node:n.root})),n.levels.map(function(n,r){var s=function(e){var t,n=(t="parentId",e.reduce(function(e,n){return(e[n[t]]=e[n[t]]||[]).push(n),e},{})),r=Object.values(n).sort(function(e,t){return t.length-e.length}),a=-1;return r.reduce(function(t,r,s,o){var c,i=r[0].parentId;if(-1===a&&o[s+1]&&r.length===o[s+1].length){var d=o[o.length-1],l=d[d.length-1];e.map(function(e){return e.id}).indexOf(l.id)<e.length/2&&(a=s)}return c=-1!==a?s-a+1:o.length-s,t[i]={weight:c,nodes:n[i]},t},{})}(n.nodes),o=Object.keys(s).length;return a.a.createElement("div",{class:"level",key:r},Object.entries(s).map(function(n){var r=Object(p.a)(n,2),s=r[0],c=r[1],i=c.nodes.map(function(t){return e.nodeRefs[t.id]}),d=e.nodeRefs[s];return[t&&d&&a.a.createElement(m,{totalWeight:o,weight:c.weight,nodeRefs:i,parentNodeRef:d}),a.a.createElement("div",{class:"nodes"},c.nodes.map(function(t){return a.a.createElement(j,{key:t.id,onRef:e.handleNodeRef,node:t})}))]}))})]}},{key:"render",value:function(){var e=this.props.tree;return e.isRootTree?a.a.createElement(j,{node:e.root}):a.a.createElement("div",{class:"tree"},this.renderLevels())}}]),t}(a.a.Component),I=[n(21),n(22),n(23),n(24),n(25),n(26)],N=(n(27),function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(n=Object(d.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).trees=I.map(w).flat(),n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.branched.sort(function(e,t){return e.height-t.height});return a.a.createElement("div",{class:"app"},a.a.createElement("h3",null,"Branched trees"),a.a.createElement("div",{class:"trees"},e.map(function(e){return a.a.createElement(x,{key:e.root.id,tree:e})})),a.a.createElement("h3",null,"Root trees"),a.a.createElement("div",{class:"trees"},this.roots.map(function(e){return a.a.createElement(x,{key:e.root.id,tree:e})})))}},{key:"roots",get:function(){return this.trees.filter(function(e){return e.isRootTree})}},{key:"branched",get:function(){return this.trees.filter(function(e){return!e.isRootTree})}}]),t}(r.Component));o.a.render(a.a.createElement(N,null),document.getElementById("root"))}],[[10,2,1]]]);
//# sourceMappingURL=main.0ac112a7.chunk.js.map