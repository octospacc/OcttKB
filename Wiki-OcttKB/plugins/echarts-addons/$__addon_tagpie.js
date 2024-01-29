/*\
title: $:/addon/tagpie.js
module-type: echarts-component
type: application/javascript
description: tag pie on tiddlywiki

\*/
const e=new $tw.Story,t=t=>{const o=t.name;$tw.wiki.tiddlerExists(o)?
// parentWidget.dispatchEvent( { type: 'tm-navigate', navigateTo: title } )
e.navigateTiddler(o):console.log(o+" not found")},o={onUpdate(e,o,s){const{title:r,filter:i="[tags[]!prefix[$:/]]",sort:l="descend",width:a=2,radius:n=10,toolbox:d="hide",doughnut:f,focusSelf:u,legend:c}=s,h=[];$tw.wiki.filterTiddlers(i).slice(0,50).sort().forEach((e=>h.push((e=>({name:e,value:$tw.wiki.filterTiddlers(`[tag[${e}]!has[draft.of]]`).length}))(e))));const g=h.length>10?0:a,p=h.length>10?5:n,m={title:{text:r,subtext:"",left:"left",top:"top"},toolbox:{show:"show"===d,left:0,bottom:0,feature:{dataView:{show:!0,readOnly:!1},restore:{},saveAsImage:{}}},tooltip:{trigger:"item",formatter:function(e){const{name:t,value:o,percent:s}=e;return o?`${t} 标签 有 ${o} 个条目 (${s}%)`:`${t} 条目`}},legend:{show:"yes"===c,orient:"vertical",right:10,top:20,bottom:20,type:"scroll"},series:[{name:"Tag",type:"pie",radius:"yes"===f?["40%","70%"]:"50%",center:"yes"===c?["40%","50%"]:"50%",data:h,itemStyle:{borderRadius:p,borderWidth:g,borderColor:"#fff"},emphasis:{focus:"yes"===u?"self":"",itemStyle:{}}}]};h.sort((function(e,t){return"descend"===l?t.value-e.value:e.value-t.value})),e.setOption(m),e.on("click","series",t)},shouldUpdate:(e,t)=>!!Object.keys(t).filter((e=>"$:/info/darkmode"===e||!e.startsWith("$:/")&&!e.startsWith("Draft of"))).length};module.exports=o;