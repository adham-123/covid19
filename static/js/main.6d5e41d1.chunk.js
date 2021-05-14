(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{171:function(e,t,n){},172:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){},175:function(e,t,n){},177:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),c=n.n(a),s=n(10),o=n.n(s),i=n(61),d=n(13),l=n(56),u=n(57),j=n(62),b=n(60),h=(n(68),n(2)),p=n(39),v=n(4),x=Object(v.c)({name:"selectedCountry",initialState:{country:{}},reducers:{changeSelectedCountry:function(e,t){e.country=t.payload},changeSelectedCountryTimeline:function(e,t){var n=t.payload.timeline;e.country=Object(p.a)(Object(p.a)({},e.country),{},{timeline:n})}}}),f=x.actions,y=f.changeSelectedCountry,O=(f.changeSelectedCountryTimeline,x.reducer),m=function(){document.getElementById("myInput").value=null},g=function(e){document.getElementById("myInput").value=e};var _=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.countries.countries})),n=Object(h.c)((function(e){return e.selectedCountry.country}));return Object(a.useEffect)((function(){g(n.name)}),[n]),Object(r.jsxs)("div",{className:"header__dropdown",children:[Object(r.jsx)("input",{type:"text",size:"8",name:"myInput",id:"myInput",list:"dropdown__countries",className:"header__dropbtn",placeholder:"Search Country",onChange:function(n){return function(n){var r=n.target.value,a=t.find((function(e){return e.name===r}));void 0!==a&&(e(y(a)),document.activeElement.blur())}(n)},onFocus:function(){return m()},onDoubleClick:function(){return m()},onBlur:function(){return g(n.name)}}),Object(r.jsx)("datalist",{id:"dropdown__countries",children:t.map((function(e){return Object(r.jsx)("option",{value:e.name},e.value+e.name)}))})]})};n(73);var w=function(e){var t={padding:e.padding,width:e.width,color:e.color,borderRadius:e.radius,backgroundColor:e.bcolor,boxShadow:e.shadow,margin:e.margin,fontSize:e.fontSize};return e.active&&(t={padding:e.padding,width:e.width,color:e.activeColor,borderRadius:e.radius,backgroundColor:e.bcolor,margin:e.margin,fontSize:e.fontSize}),Object(r.jsx)("div",{className:"infoBox",style:{margin:e.margin,marginLeft:e.marginL},children:Object(r.jsx)("button",{className:"infoBox__button",onClick:e.click,style:t,onFocus:e.onFocus,children:Object(r.jsx)("span",{children:Object(r.jsx)("p",{children:e.content})})})})},C=(n(74),Object(v.c)({name:"conRender",initialState:{casesType:"cases",sortingType:"",dataShowing:"all",graphSliderValue:200,graphSliderMaxValue:300},reducers:{casesTypeCases:function(e){e.casesType="cases"},casesTypeRecovered:function(e){e.casesType="recovered"},casesTypeDeaths:function(e){e.casesType="deaths"},sortTable:function(e,t){var n=t.payload.sortType;e.sortingType=n},showTodayData:function(e,t){var n=t.payload.dataShow;e.dataShowing=n},changeGraphSliderVal:function(e,t){var n=t.payload.value;e.graphSliderValue=n},changeGraphSliderMaxValue:function(e,t){e.graphSliderMaxValue=t.payload.value}}})),N=C.actions,S=N.casesTypeCases,T=N.casesTypeRecovered,D=N.casesTypeDeaths,k=N.sortTable,P=N.showTodayData,R=N.changeGraphSliderVal,E=N.changeGraphSliderMaxValue,z=C.reducer;var I=function(e){var t=Object(h.b)(),n=Object(h.c)((function(e){return e.conRender.casesType})),a=Object(h.c)((function(e){return e.countries.countries})),c=Object(h.c)((function(e){return e.selectedCountry.country})),s=a.find((function(e){return"WorldWide"===e.name}));return window.onscroll=function(){!function(){var t=document.getElementById("myHeader"),n=document.getElementById("header"),r=document.getElementById("bodyExtension");e.isMobile.width<710?window.pageYOffset<50?(t.classList.remove("sticky"),r.classList.remove("bodyExtension")):(t.classList.add("sticky"),r.classList.add("bodyExtension")):n.classList.add("headerSticky")}()},Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("button",{className:"header__title",onClick:function(){return t(S()),t(P({dataShow:"all"})),t(R({value:200})),void 0!==s?t(y(s)):null},style:{border:"0px",backgroundColor:"rgba(230, 230, 230,1)",cursor:"pointer",outline:"none"},children:"Covid 19 Tracker"}),Object(r.jsx)("img",{alt:"".concat(c.name," Flag"),src:c.flag,className:"header_image"}),Object(r.jsxs)("div",{className:"header__dd_img",id:"myHeader",children:[Object(r.jsx)("div",{className:"header__right",children:Object(r.jsx)(_,{})}),Object(r.jsxs)("div",{className:"header__infoBox",children:[Object(r.jsx)(w,{content:"Cases",active:"cases"===n,click:function(){return t(S())},padding:e.isMobile.width<365?"3px":"10px",activeColor:"rgb(225, 0, 0)",margin:"1px",fontSize:e.isMobile.width<420?"12px":"15px"}),Object(r.jsx)(w,{content:"Recovered",active:"recovered"===n,click:function(){return t(T())},padding:e.isMobile.width<365?"3px":"10px",activeColor:"rgb(70, 250, 70)",margin:"1px",fontSize:e.isMobile.width<420?"12px":"15px"}),Object(r.jsx)(w,{content:"Deaths",active:"deaths"===n,click:function(){return t(D())},padding:e.isMobile.width<365?"3px":"10px",activeColor:"rgb(50, 50, 50)",margin:"1px",fontSize:e.isMobile.width<420?"12px":"15px"})]})]})]})},W=n(6),M=n.n(W),L=n(12),V=n(59),F=Object(v.c)({name:"graphData",initialState:{country:"",cases:[],deaths:[],recovered:[],displayedData:[]},reducers:{setgraphDataCountry:function(e,t){e.country=t.payload},setgraphDataCases:function(e,t){var n=t.payload,r=n.cases,a=n.recovered,c=n.deaths;e.cases=r,e.recovered=a,e.deaths=c},emptyUpGraphDisplayData:function(e,t){e.displayedData=[]},changeGraphDisplayData:function(e,t){var n=t.payload,r=n.sliderValue,a=n.type,c=n.maxValue;e.displayedData="cases"===a?e.cases.slice(r,c):"recovered"===a?e.recovered.slice(r,c):e.deaths.slice(r,c)}}}),B=F.actions,A=B.setgraphDataCountry,G=B.setgraphDataCases,Z=B.emptyUpGraphDisplayData,H=B.changeGraphDisplayData,Y=F.reducer,J=new Intl.NumberFormat,U={animation:{duration:0},responsiveAnimationDuration:0,legend:{display:!0},elements:{points:{radius:0},line:{tension:.4}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return J.format(e.value)}}},hover:{mode:"index",intersect:!0,animationDuration:0},scales:{xAxes:[{gridLines:{display:!0},type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!0},ticks:{callback:function(e,t,n){return J.format(e)}}}]}};var X=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.selectedCountry.country})),n=Object(h.c)((function(e){return e.graphData.country})),c=Object(h.c)((function(e){return e.graphData.cases})),s=Object(h.c)((function(e){return e.graphData.deaths})),o=Object(h.c)((function(e){return e.graphData.recovered})),i=Object(h.c)((function(e){return e.graphData.displayedData})),d=Object(h.c)((function(e){return e.conRender.graphSliderValue})),l=Object(h.c)((function(e){return e.conRender.graphSliderMaxValue})),u=Object(h.c)((function(e){return e.conRender.casesType})),j=function(e){var t,n=[];if(void 0!==e){for(var r in e){if(t){var a={x:r,y:e[r]-t<0?0:e[r]-t};n.push(a)}t=e[r]<0?0:e[r]}return n}};Object(a.useEffect)((function(){"WorldWide"!==t.name&&void 0!==t.name?function(){var n=Object(L.a)(M.a.mark((function n(){return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://disease.sh/v3/covid-19/historical/".concat(t.name,"?lastdays=all")).then((function(e){return e.json()})).then((function(t){if("Country not found or doesn't have any historical data"===t.message)return null;e(A(t.country)),e(G({cases:j(t.timeline.cases),recovered:j(t.timeline.recovered),deaths:j(t.timeline.deaths)})),e(R({value:150}))}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()():function(){var t=Object(L.a)(M.a.mark((function t(){return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all").then((function(e){return e.json()})).then((function(t){t.country="WorldWide",e(A(t.country)),e(G({cases:j(t.cases),recovered:j(t.recovered),deaths:j(t.deaths)})),e(R({value:200}))}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[t.name]),Object(a.useEffect)((function(){var t=l-d;setTimeout((function(){e(H({sliderValue:t,type:u,maxValue:l}))}))}),[d]),Object(a.useEffect)((function(){if(i){e(R("WorldWide"===n?{value:200}:{value:150}));var t="cases"===u?c.length:"recovered"===u?o.length:s.length;e(E({value:t})),e(Z({type:""}));var r=l-d;setTimeout((function(){e(H({sliderValue:r,type:u,maxValue:l}))}))}}),[c,o,s,n,u]);var b="cases"===u?"rgba(200, 20, 50, 0.5)":"recovered"===u?"rgba(0, 200, 50, 0.5)":"rgba(100, 100, 100, 0.5)",p="cases"===u?"rgb(200, 20, 50)":"recovered"===u?"rgb(0, 200, 50)":"rgb(100, 100, 100)";return n!==t.name?Object(r.jsx)("div",{children:Object(r.jsx)("p",{children:"Loading..."})}):Object(r.jsx)("div",{style:{maxHeight:"100%",position:"relative",height:"100%",width:"100%"},children:Object(r.jsx)(V.Line,{options:U,data:{datasets:[{backgroundColor:b,borderColor:p,data:i.length>1?i:null,pointRadius:1,fill:!0,label:n+" "+u,hoverRadius:5}]}})})};n(171);var q=function(e){var t=Object(h.b)(),n=Object(h.c)((function(e){return e.conRender.graphSliderValue})),a=Object(h.c)((function(e){return e.conRender.graphSliderMaxValue}));return Object(r.jsxs)("div",{className:"slidecontainer",children:[Object(r.jsxs)("p",{style:{minWidth:"110px"},children:["Past ",n," Days:"]}),Object(r.jsx)("input",{type:"range",min:"10",max:a,step:"1",value:n,onChange:function(e){return t(R({value:e.target.value}))},className:"slider"})]})},K=(n(172),n(173),new Intl.NumberFormat);var Q=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.conRender.sortingType})),n=Object(h.c)((function(e){return e.conRender.dataShowing})),a=Object(h.c)((function(e){return e.countries.countries}));return Object(r.jsxs)("div",{className:"table",children:[Object(r.jsxs)("span",{style:{display:"flex",flexDirection:"row",fontSize:"13px"},children:[Object(r.jsx)(w,{content:"All",click:function(){return e(P({dataShow:"all"}))},onFocus:function(){return e(k({sortType:""}))},width:"50px",margin:"0px",active:"all"===n,color:"rgb(40, 40, 40)",activeColor:"rgb(250, 250, 250)"}),Object(r.jsx)(w,{content:"Today",click:function(){return e(P({dataShow:"today"}))},onFocus:function(){return e(k({sortType:""}))},width:"60px",margin:"0px",active:"today"===n,color:"rgb(40, 40, 40)",activeColor:"rgb(250, 250, 250)"})]}),Object(r.jsx)("div",{className:"table__data",children:Object(r.jsxs)("table",{children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{onClick:function(){return e(k({sortType:"countries"}))},children:"countries"===t?Object(r.jsx)("p",{children:"Country \u25be"}):Object(r.jsx)("span",{children:"Country"})}),Object(r.jsxs)("th",{onClick:"all"===n?function(){return e(k({sortType:"cases"}))}:function(){return e(k({sortType:"todayCases"}))},children:["today"===n?Object(r.jsx)("p",{style:{fontSize:"10px",fontWeight:"lighter"},children:"Today"}):null,"cases"===t||"todayCases"===t?Object(r.jsx)("p",{children:"Cases \u25be"}):Object(r.jsx)("span",{children:"Cases"})]}),Object(r.jsxs)("th",{onClick:"all"===n?function(){return e(k({sortType:"recovered"}))}:function(){return e(k({sortType:"todayRecovered"}))},children:["today"===n?Object(r.jsx)("p",{style:{fontSize:"10px",fontWeight:"lighter"},children:"Today"}):null,"recovered"===t||"todayRecovered"===t?Object(r.jsx)("p",{children:"Recovered \u25be"}):Object(r.jsx)("span",{children:"Recovered"})]}),Object(r.jsxs)("th",{onClick:"all"===n?function(){return e(k({sortType:"deaths"}))}:function(){return e(k({sortType:"todayDeaths"}))},children:["today"===n?Object(r.jsx)("p",{style:{fontSize:"10px",fontWeight:"lighter"},children:"Today"}):null,"deaths"===t||"todayDeaths"===t?Object(r.jsx)("p",{children:"Deaths \u25be"}):Object(r.jsx)("span",{children:"Deaths"})]}),Object(r.jsx)("th",{onClick:function(){return e(k({sortType:"active"}))},children:"active"===t?Object(r.jsx)("p",{children:"Active \u25be"}):Object(r.jsx)("span",{children:"Active"})}),Object(r.jsx)("th",{children:"Critical"}),Object(r.jsx)("th",{children:"Tests"}),Object(r.jsx)("th",{children:"Case/Person"}),Object(r.jsx)("th",{children:"Death/Person"}),Object(r.jsx)("th",{children:"Test/Person"})]})}),Object(r.jsx)("tbody",{children:a.map((function(e,t){return"all"===n?Object(r.jsxs)("tr",{id:e.name,children:[Object(r.jsx)("td",{children:e.name}),Object(r.jsx)("td",{children:K.format(e.cases)}),Object(r.jsx)("td",{children:K.format(e.recovered)}),Object(r.jsx)("td",{children:K.format(e.deaths)}),Object(r.jsx)("td",{children:K.format(e.active)}),Object(r.jsx)("td",{children:K.format(e.critical)}),Object(r.jsx)("td",{children:K.format(e.tests)}),Object(r.jsx)("td",{children:K.format(e.casePerPerson)}),Object(r.jsx)("td",{children:K.format(e.deathPerPerson)}),Object(r.jsx)("td",{children:K.format(e.testPerPerson)})]},t):Object(r.jsxs)("tr",{id:e.name,children:[Object(r.jsx)("td",{children:e.name}),Object(r.jsx)("td",{children:K.format(e.todayCases)}),Object(r.jsx)("td",{children:K.format(e.todayRecovered)}),Object(r.jsx)("td",{children:K.format(e.todayDeaths)}),Object(r.jsx)("td",{children:K.format(e.active)}),Object(r.jsx)("td",{children:K.format(e.critical)}),Object(r.jsx)("td",{children:K.format(e.tests)}),Object(r.jsx)("td",{children:K.format(e.casePerPerson)}),Object(r.jsx)("td",{children:K.format(e.deathPerPerson)}),Object(r.jsx)("td",{children:K.format(e.testPerPerson)})]},t)}))})]})})]})},$=new Intl.NumberFormat;function ee(e){var t=[{value:1e18,symbol:"E"},{value:1e15,symbol:"P"},{value:1e12,symbol:"T"},{value:1e9,symbol:"B"},{value:1e6,symbol:"M"},{value:1e3,symbol:"k"},{value:1,symbol:""}],n=t.findIndex((function(t){return e>=t.value}));return(e/t[-1===n?6:n].value).toFixed(2)+t[-1===n?6:n].symbol}var te=function(){var e=Object(h.c)((function(e){return e.selectedCountry.country}));return Object(r.jsxs)("div",{className:"dataLayout",children:[Object(r.jsxs)("div",{className:"datalayout__overview",children:[Object(r.jsx)("div",{style:{borderBottom:"1px solid gray",width:"100%",display:"table"},children:Object(r.jsxs)("p",{style:{padding:"10px",backgroundColor:"rgb(255, 255, 255)",borderTopRightRadius:"9px",borderTopLeftRadius:"9px",boxShadow:"inset 100px 0px 100px -50px rgb(170, 170, 170), inset -100px 0px 100px -50px rgb(170, 170, 170)",textAlign:"center",verticalAlign:"middle"},children:[Object(r.jsx)("b",{style:{fontSize:"22px",fontFamily:"cursive"},children:e.name}),"Overview"]})}),Object(r.jsxs)("div",{className:"datalayout__overview_in",children:[Object(r.jsx)("div",{className:"datalayout__overview_box",style:{borderLeft:"hidden"},children:Object(r.jsxs)("p",{className:"datalayout__overview_title",children:["Cases ",Object(r.jsx)("br",{}),Object(r.jsx)("span",{className:"datalayout__overview_boldnumber",children:ee(e.cases)}),Object(r.jsx)("br",{}),Object(r.jsxs)("span",{className:"datalayout__overview_dailynumber",children:["+ ",$.format(e.todayCases)]})]})}),Object(r.jsx)("div",{className:"datalayout__overview_box",children:Object(r.jsxs)("p",{className:"datalayout__overview_title",children:["Recovered ",Object(r.jsx)("br",{}),Object(r.jsx)("span",{className:"datalayout__overview_boldnumber",children:ee(e.recovered)})," ",Object(r.jsx)("br",{}),Object(r.jsxs)("span",{className:"datalayout__overview_dailynumber",children:["+ ",$.format(e.todayRecovered)]})]})}),Object(r.jsx)("div",{className:"datalayout__overview_box",children:Object(r.jsxs)("p",{className:"datalayout__overview_title",children:["Deaths ",Object(r.jsx)("br",{}),Object(r.jsx)("span",{className:"datalayout__overview_boldnumber",children:ee(e.deaths)})," ",Object(r.jsx)("br",{}),Object(r.jsxs)("span",{className:"datalayout__overview_dailynumber",children:["+ ",$.format(e.todayDeaths)]})]})})]}),Object(r.jsxs)("div",{className:"datalayout__overview_in",children:[Object(r.jsx)("div",{className:"datalayout__overview_box",style:{borderLeft:"hidden"},children:Object(r.jsxs)("p",{className:"datalayout__overview_title",children:["Active ",Object(r.jsx)("br",{})," ",Object(r.jsx)("span",{className:"datalayout__overview_number",children:ee(e.active)})]})}),Object(r.jsx)("div",{className:"datalayout__overview_box",children:Object(r.jsxs)("p",{className:"datalayout__overview_title",children:["Critical ",Object(r.jsx)("br",{})," ",Object(r.jsx)("span",{className:"datalayout__overview_number",children:ee(e.critical)})]})}),Object(r.jsx)("div",{className:"datalayout__overview_box",children:Object(r.jsxs)("p",{className:"datalayout__overview_title",children:["Tests ",Object(r.jsx)("br",{})," ",Object(r.jsx)("span",{className:"datalayout__overview_number",children:ee(e.tests)})]})})]}),Object(r.jsxs)("div",{className:"datalayout__overview_in",children:[Object(r.jsx)("div",{className:"datalayout__overview_box",style:{borderLeft:"hidden"},children:Object(r.jsxs)("p",{className:"datalayout__overview_title",children:["Case/Person ",Object(r.jsx)("br",{})," ",Object(r.jsx)("span",{className:"datalayout__overview_number",children:ee(e.casePerPerson)})]})}),Object(r.jsx)("div",{className:"datalayout__overview_box",children:Object(r.jsxs)("p",{className:"datalayout__overview_title",children:["Test/Person ",Object(r.jsx)("br",{}),Object(r.jsx)("span",{className:"datalayout__overview_number",children:ee(e.testPerPerson)})]})}),Object(r.jsx)("div",{className:"datalayout__overview_box",children:Object(r.jsxs)("p",{className:"datalayout__overview_title",children:["Deaths/Person ",Object(r.jsx)("br",{})," ",Object(r.jsx)("span",{className:"datalayout__overview_number",children:ee(e.deathPerPerson)})]})})]}),Object(r.jsxs)("p",{style:{paddingLeft:"8px",paddingBottom:"2px",fontSize:"10px"},children:[Object(r.jsx)("b",{children:"Case/Person"})," = ",Object(r.jsx)("b",{children:"X"})," (Every ",Object(r.jsx)("b",{children:"X"})," people there's one Case )"]})]}),Object(r.jsx)("div",{className:"datalayout__table",children:Object(r.jsx)(Q,{})})]})},ne=n(17),re={width:"100%",height:"100%"};function ae(e){var t=e.setShowingInfoWindow,n=e.setCurrentCountry,a=e.country,c=e.currentZoom,s=e.casesType,o=e.onClose;if("WorldWide"===a.name)return null;var i={casesOptions:{strokeColor:"rgba(255, 0, 0)",strokeWeight:.5,fillColor:"rgba(255, 0, 0)",fillOpacity:.35,clickable:!0,draggable:!1,editable:!1,visible:!0,zIndex:1},recoveredOptions:{strokeColor:"rgba(0, 255, 150)",strokeWeight:1.5,fillColor:"rgba(0, 255, 0)",fillOpacity:.35,clickable:!0,draggable:!1,editable:!1,visible:!0,zIndex:1},deathsOptions:{strokeColor:"rgba(20, 20, 20)",strokeWeight:1.5,fillColor:"rgba(0, 0, 0)",fillOpacity:.35,clickable:!0,draggable:!1,editable:!1,visible:!0,zIndex:1}},d="cases"===s?i.casesOptions:"deaths"===s?i.deathsOptions:i.recoveredOptions,l="cases"===s?a.cases:"recovered"===s?a.recovered:a.deaths;return Object(r.jsx)(ne.a,{center:a.center,options:d,radius:600*Math.sqrt(l)/c,onMouseOver:function(){n(a),t(!0)},onMouseOut:o,clickable:!0})}function ce(e){var t=Object(a.useState)(!1),n=Object(d.a)(t,2),c=n[0],s=n[1],o=Object(a.useState)(e.country),i=Object(d.a)(o,2),l=i[0],u=i[1],j=Object(a.useState)(),b=Object(d.a)(j,2),h=b[0],p=b[1];var v=function(){c&&s(!1)},x=new Intl.NumberFormat;return Object(r.jsx)(ne.d,{children:Object(r.jsx)(ne.b,{mapContainerStyle:re,center:e.country.center,zoom:e.country.zoom,onZoomChanged:function(){p(this.getZoom()+1)},options:{streetViewControl:!1,mapTypeControl:!1,maxZoom:6,minZoom:1},children:Object(r.jsxs)(r.Fragment,{children:[e.countries.map((function(t,n){return Object(r.jsx)(ae,{setShowingInfoWindow:s,setCurrentCountry:u,country:t,showingInfoWindow:c,currentZoom:h,casesType:e.casesType,onClose:v},n)})),c&&Object(r.jsx)(ne.c,{position:l.center,onCloseClick:v,children:Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{children:Object(r.jsx)("img",{alt:"".concat(l.name," Flag"),src:l.flag,className:"map_image"})}),Object(r.jsx)("br",{}),Object(r.jsx)("span",{children:"".concat(l.name)}),Object(r.jsx)("br",{}),Object(r.jsx)("span",{children:"Cases: ".concat(x.format(l.cases))}),Object(r.jsx)("br",{}),Object(r.jsx)("span",{children:"Recovered: ".concat(x.format(l.recovered))}),Object(r.jsx)("br",{}),Object(r.jsx)("span",{children:"Deaths: ".concat(x.format(l.deaths))})]})})]})})})}var se=c.a.memo(ce);var oe=function(){var e=Object(h.c)((function(e){return e.countries.countries})),t=Object(h.c)((function(e){return e.selectedCountry.country})),n=Object(h.c)((function(e){return e.conRender.casesType})),a="cases"===n?"rgba(200, 20, 50, 0.5)":"recovered"===n?"rgba(0, 200, 50, 0.5)":"rgba(100, 100, 100, 0.5)";return Object(r.jsxs)("div",{style:{position:"relative",height:"100%",width:"100%"},children:[Object(r.jsxs)("div",{style:{padding:"3px"},children:[Object(r.jsx)("p",{style:{display:"inline"},children:"Map of "}),Object(r.jsx)("h3",{style:{display:"inline",color:a},children:n})]}),Object(r.jsx)("div",{style:{position:"relative",height:"250px",width:"100%"},children:Object(r.jsx)(se,{countries:e,country:t,casesType:n})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{style:{fontSize:"13px",color:"gray",paddingLeft:"10px",display:"inline",position:"relative",height:"100%"},children:"Source:"}),Object(r.jsx)("a",{href:"https://www.worldometers.info/",target:"_blank",rel:"noopener noreferrer",style:{color:"gray",display:"inline",fontSize:"10px"},children:"Worldometer"})]})]})};n(174);var ie,de,le=function(){return Object(r.jsxs)("div",{className:"footer",children:[Object(r.jsxs)("p",{children:["Contact me:"," ",Object(r.jsx)("a",{href:"mailto: adham@adhamnasr.com",children:"adham@adhamnasr.com"})]}),Object(r.jsx)("p",{style:{fontSize:"11px"},children:"Copyright\xa9 2020"})]})},ue=n(7),je=Object(v.b)("countries/fetchCountries",Object(L.a)(M.a.mark((function e(){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries?yesterday=true");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))),be=Object(v.c)({name:"countries",initialState:{loading:null,countries:[]},reducers:{pushToCountries:function(e,t){e.countries.push(t.payload)},updateCountries:function(e,t){e.countries=t.payload}},extraReducers:(ie={},Object(ue.a)(ie,je.pending,(function(e){e.loading=!0})),Object(ue.a)(ie,je.fulfilled,(function(e,t){e.loading=!1;var n=t.payload.map((function(e){return{name:e.country,value:e.countryInfo.iso2,cases:e.cases,todayCases:e.todayCases,recovered:e.recovered,todayRecovered:e.todayRecovered,deaths:e.deaths,todayDeaths:e.todayDeaths,flag:e.countryInfo.flag,center:{lat:e.countryInfo.lat,lng:e.countryInfo.long},zoom:4,active:e.active,critical:e.critical,tests:e.tests,casePerPerson:e.oneCasePerPeople,testPerPerson:e.oneTestPerPeople,deathPerPerson:e.oneDeathPerPeople,timeline:null}}));e.countries=n})),Object(ue.a)(ie,je.rejected,(function(e){e.loading=!1})),ie)}),he=be.actions,pe=he.pushToCountries,ve=he.updateCountries,xe=be.reducer,fe=n.p+"static/media/earth.f22c010c.jpg",ye=Object(v.b)("worldwide/fetchworldwide",Object(L.a)(M.a.mark((function e(){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/all?yesterday=true");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))),Oe=Object(v.c)({name:"worldwide",initialState:{loading:null,worldwide:[]},reducers:{},extraReducers:(de={},Object(ue.a)(de,ye.pending,(function(e){e.loading=!0})),Object(ue.a)(de,ye.fulfilled,(function(e,t){e.loading=!1;var n=t.payload;n.name="WorldWide",n.flag=fe,n.center={lat:0,lng:0},n.zoom=1,n.casePerPerson=t.payload.population/t.payload.cases,n.testPerPerson=t.payload.population/t.payload.tests,n.deathPerPerson=t.payload.population/t.payload.deaths,n.timeline=null,e.worldwide=n})),Object(ue.a)(de,ye.rejected,(function(e){e.loading=!1})),de)}).reducer,me=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(u.a)(n,[{key:"componentDidCatch",value:function(e,t){}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"Something went wrong."}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(c.a.Component);var ge=function(){var e=Object(h.c)((function(e){return e.conRender.sortingType})),t=Object(h.c)((function(e){return e.worldwide.worldwide})),n=Object(h.c)((function(e){return e.countries.countries})),c=Object(h.b)(),s=function(){var e=Object(a.useState)({width:void 0,height:void 0}),t=Object(d.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){function e(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}();return Object(a.useEffect)((function(){var t=function(t){var n=Object(i.a)(t);return"cases"===e?n.sort((function(e,t){return e.cases>t.cases?-1:1})):"deaths"===e?n.sort((function(e,t){return e.deaths>t.deaths?-1:1})):"recovered"===e?n.sort((function(e,t){return e.recovered>t.recovered?-1:1})):"todayCases"===e?n.sort((function(e,t){return e.todayCases>t.todayCases?-1:1})):"todayDeaths"===e?n.sort((function(e,t){return e.todayDeaths>t.todayDeaths?-1:1})):"todayRecovered"===e?n.sort((function(e,t){return e.todayRecovered>t.todayRecovered?-1:1})):"active"===e?n.sort((function(e,t){return e.active>t.active?-1:1})):"countries"===e?n.sort((function(e,t){return e.name<t.name?-1:1})):n.sort((function(e,t){return e>t?-1:1}))}(n);c(ve(t))}),[e]),Object(a.useEffect)((function(){return c(je()),c(ye())}),[]),Object(a.useEffect)((function(){return c(pe(t),c(y(t)))}),[t]),Object(r.jsxs)("div",{className:"app",children:[Object(r.jsx)("div",{className:"app__header",id:"header",children:Object(r.jsx)(me,{children:Object(r.jsx)(I,{isMobile:s})})}),Object(r.jsxs)("div",{className:"app__body",id:"bodyExtension",children:[Object(r.jsx)("div",{className:"app__dataLayout",children:Object(r.jsx)(me,{children:Object(r.jsx)(te,{})})}),Object(r.jsx)("div",{className:"app__map_wrapper",children:Object(r.jsx)(me,{children:Object(r.jsx)(oe,{})})}),Object(r.jsxs)("div",{className:"app__graph",children:[Object(r.jsx)("div",{className:"app__graph_graph",children:Object(r.jsx)(me,{children:Object(r.jsx)(X,{})})}),Object(r.jsx)(me,{children:Object(r.jsx)(q,{})})]})]}),Object(r.jsx)("div",{className:"app__footer",children:Object(r.jsx)(me,{children:Object(r.jsx)(le,{})})})]})},_e=(n(175),n(5)),we=(n(176),Object(_e.c)({conRender:z,countries:xe,worldwide:Oe,selectedCountry:O,graphData:Y})),Ce=function(e){return function(e){return function(t){return e(t)}}},Ne=Object(v.a)({reducer:we,middleware:function(e){return e().concat(Ce)}});o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(h.a,{store:Ne,children:Object(r.jsx)(ge,{})})}),document.getElementById("root"))},68:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){}},[[177,1,2]]]);
//# sourceMappingURL=main.6d5e41d1.chunk.js.map