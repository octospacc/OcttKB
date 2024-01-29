/*\
title: $:/addon/bookprogress.js
type: application/javascript
description:

// module-type: echarts-component

\*/
new $tw.Story;const e={onUpdate(e,t,o){const{title:r,filter:s="[tags[]!prefix[$:/]]",sort:i="descend",width:l=2,radius:a=10,toolbox:d="hide",doughnut:n,focusSelf:f,legend:u}=o,h=[];$tw.wiki.filterTiddlers(s).slice(0,50).sort().forEach((e=>h.push((e=>({name:e,value:$tw.wiki.filterTiddlers(`[tag[${e}]!has[draft.of]]`).length}))(e))));const c=h.length>10?0:l,p=h.length>10?5:a,g={title:{text:r,subtext:"",left:"left",top:"top"},toolbox:{show:"show"===d,left:0,bottom:0,feature:{dataView:{show:!0,readOnly:!1},restore:{},saveAsImage:{}}},tooltip:{trigger:"item",formatter:function(e){const{name:t,value:o,percent:r}=e;return o?`${t} 标签 有 ${o} 个条目 (${r}%)`:`${t} 条目`}},legend:{show:"yes"===u,orient:"vertical",right:10,top:20,bottom:20,type:"scroll"},series:[{name:"Tag",type:"pie",radius:"yes"===n?["40%","70%"]:"50%",center:"yes"===u?["40%","50%"]:"50%",data:h,itemStyle:{borderRadius:p,borderWidth:c,borderColor:"#fff"},emphasis:{focus:"yes"===f?"self":"",itemStyle:{}}}]};h.sort((function(e,t){return"descend"===i?t.value-e.value:e.value-t.value})),e.setOption(g)},shouldUpdate:(e,t)=>!!Object.keys(t).filter((e=>"$:/info/darkmode"===e||!e.startsWith("$:/")&&!e.startsWith("Draft of"))).length};module.exports=e;