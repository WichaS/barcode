(this.webpackJsonpreact_barcode=this.webpackJsonpreact_barcode||[]).push([[0],{67:function(e,t,a){},68:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),s=a.n(r),i=(a(67),a(68),a(19)),o=a(11),d=a(106),l=a(110),h=a(111),j=a(3);var b=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(d.a,{style:{margin:30},variant:"h2",children:"React Barcode"}),Object(j.jsxs)(l.a,{container:!0,spacing:6,children:[Object(j.jsx)(l.a,{item:!0,xs:6,children:Object(j.jsx)(i.b,{to:"/barcode_generator",children:Object(j.jsx)(h.a,{variant:"contained",size:"large",color:"secondary",children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"300",height:"300",style:{padding:30},fill:"currentColor",class:"bi bi-upc",viewBox:"0 0 16 16",children:Object(j.jsx)("path",{d:"M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z"})})})})}),Object(j.jsx)(l.a,{item:!0,xs:6,children:Object(j.jsx)(i.b,{to:"/barcode_scanner",children:Object(j.jsx)(h.a,{variant:"contained",size:"large",color:"secondary",children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"300",height:"300",style:{padding:30},fill:"currentColor",class:"bi bi-upc-scan",viewBox:"0 0 16 16",children:Object(j.jsx)("path",{d:"M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5zM3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z"})})})})})]})]})},u=a(53),v=a(112),x=a(117),O=a(114),g=a(113),m=a(116),p=a(52);var f=function(){var e=Object(n.useState)("lintangwisesa"),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(p.a)({value:a,options:{background:"#ffffff"}}).inputRef;return Object(j.jsxs)("div",{children:[Object(j.jsx)(i.b,{to:"/",children:Object(j.jsx)(v.a,{style:{marginRight:10},color:"secondary",children:Object(j.jsx)(g.a,{})})}),Object(j.jsx)("span",{children:"Barcode Generator"}),Object(j.jsx)("div",{style:{marginTop:30,marginBottom:30},children:Object(j.jsx)(x.a,{onChange:function(e){c(e.target.value?e.target.value:"")},style:{width:320},value:a,label:"Barcode content",size:"large",variant:"outlined",color:"secondary"})}),Object(j.jsx)("div",{children:""!==a?Object(j.jsx)("canvas",{id:"mybarcode",ref:r}):Object(j.jsx)("p",{children:"No barcode preview"})}),Object(j.jsx)("div",{children:a?Object(j.jsxs)(l.a,{container:!0,style:{marginTop:30},children:[Object(j.jsx)(l.a,{item:!0,xs:10,children:Object(j.jsx)(O.a,{style:{fontSize:18,width:250,height:100},rowsMax:4,defaultValue:a,value:a})}),Object(j.jsx)(l.a,{item:!0,xs:2,children:Object(j.jsx)(v.a,{onClick:function(){var e=document.getElementById("mybarcode").toDataURL("image/png").replace("image/png","image/octet-stream"),t=document.createElement("a");t.href=e,t.download="mybarcode.png",document.body.appendChild(t),t.click(),document.body.removeChild(t)},style:{marginLeft:10},color:"secondary",children:Object(j.jsx)(m.a,{})})})]}):""})]})},w=a(34),y=a(35),z=a(38),B=a(37),S=a(29),_=a.n(S),C=function(e){Object(z.a)(a,e);var t=Object(B.a)(a);function a(){var e;Object(w.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c)))._onDetected=function(t){e.props.onDetected(t)},e}return Object(y.a)(a,[{key:"componentDidMount",value:function(){_.a.init({inputStream:{type:"LiveStream",constraints:{width:640,height:320,facingMode:"environment"}},locator:{halfSample:!0,patchSize:"large",debug:{showCanvas:!0,showPatches:!1,showFoundPatches:!1,showSkeleton:!1,showLabels:!1,showPatchLabels:!1,showRemainingPatchLabels:!1,boxFromPatches:{showTransformed:!0,showTransformedBox:!0,showBB:!0}}},numOfWorkers:4,decoder:{readers:["code_128_reader"],debug:{drawBoundingBox:!0,showFrequency:!0,drawScanline:!0,showPattern:!0}},locate:!0},(function(e){if(e)return console.log(e);_.a.start()})),_.a.onDetected(this._onDetected)}},{key:"componentWillUnmount",value:function(){_.a.offDetected(this._onDetected)}},{key:"render",value:function(){return Object(j.jsx)("div",{id:"interactive",className:"viewport"})}}]),a}(n.Component),D=a(115),k=function(e){Object(z.a)(a,e);var t=Object(B.a)(a);function a(){var e;Object(w.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={results:[]},e._scan=function(){e.setState({scanning:!e.state.scanning})},e._onDetected=function(t){e.setState({results:[]}),e.setState({results:e.state.results.concat([t])})},e}return Object(y.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(i.b,{to:"/",children:Object(j.jsx)(v.a,{style:{marginRight:10},color:"secondary",children:Object(j.jsx)(g.a,{})})}),Object(j.jsx)("span",{children:"Barcode Scanner"}),Object(j.jsx)(D.a,{variant:"outlined",style:{marginTop:30,width:640,height:320},children:Object(j.jsx)(C,{onDetected:this._onDetected})}),Object(j.jsx)(O.a,{style:{fontSize:32,width:320,height:100,marginTop:30},rowsMax:4,defaultValue:"No data scanned",value:this.state.results[0]?this.state.results[0].codeResult.code:"No data scanned"})]})}}]),a}(n.Component);var M=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("div",{className:"App-header",children:Object(j.jsx)(i.a,{children:Object(j.jsx)("div",{children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",children:Object(j.jsx)(b,{})}),Object(j.jsx)(o.a,{path:"/barcode_generator",children:Object(j.jsx)(f,{})}),Object(j.jsx)(o.a,{path:"/barcode_scanner",children:Object(j.jsx)(k,{})})]})})})})})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,119)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(M,{})}),document.getElementById("root")),L()}},[[79,1,2]]]);
//# sourceMappingURL=main.e0785869.chunk.js.map