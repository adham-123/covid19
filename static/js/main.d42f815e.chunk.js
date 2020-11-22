(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{159:function(e,t,s){},160:function(e,t,s){},161:function(e,t,s){},162:function(e,t,s){},163:function(e,t,s){},164:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(1),r=s.n(n),c=s(8),o=s.n(c),i=s(4),l=s.n(i),d=s(9),u=s(50),j=s(2),b=(s(57),function(){document.getElementById("myInput").value=null}),h=function(e){document.getElementById("myInput").value=e};var p=function(e){return Object(n.useEffect)((function(){h(e.country.name)}),[e.country]),Object(a.jsxs)("div",{className:"header__dropdown",children:[Object(a.jsx)("input",{type:"text",size:"8",name:"myInput",id:"myInput",list:"dropdown__countries",className:"header__dropbtn",placeholder:"Search Country",onChange:e.changeCountry,onFocus:function(){return b()},onDoubleClick:function(){return b()},onBlur:function(){return h(e.country.name)}}),Object(a.jsx)("datalist",{id:"dropdown__countries",children:e.countries.map((function(e){return Object(a.jsx)("option",{value:e.name},e.value+e.name)}))})]})};s(58);var v=function(e){var t={padding:e.padding,width:e.width,color:e.color,borderRadius:e.radius,backgroundColor:e.bcolor,boxShadow:e.shadow,margin:e.margin,fontSize:e.fontSize};return e.active&&(t={padding:e.padding,width:e.width,color:e.activeColor,borderRadius:e.radius,backgroundColor:e.bcolor,margin:e.margin,fontSize:e.fontSize}),Object(a.jsx)("div",{className:"infoBox",style:{margin:e.margin,marginLeft:e.marginL},children:Object(a.jsx)("button",{className:"infoBox__button",onClick:e.click,style:t,onFocus:e.onFocus,children:Object(a.jsx)("span",{children:Object(a.jsx)("p",{children:e.content})})})})};s(59);var y,x=function(e){var t=e.countries.find((function(e){return"WorldWide"===e.name}));return Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("button",{className:"header__title",onClick:function(){return e.setCasesType("cases"),e.setDataShowing("all"),e.setGraphSlider({value:"200"}),e.setSortType(""),void 0!==t?e.setCountry(t):null},style:{border:"0px",backgroundColor:"rgba(230, 230, 230,1)",cursor:"pointer",outline:"none"},children:"Covid 19 Tracker"}),Object(a.jsx)("img",{alt:"".concat(e.country.name," Flag"),src:e.country.flag,className:"header_image"}),Object(a.jsxs)("div",{className:"header__dd_img",id:"myHeader",children:[Object(a.jsx)("div",{className:"header__right",children:Object(a.jsx)(p,{countries:e.countries,changeCountry:e.changeCountry,country:e.country})}),Object(a.jsxs)("div",{className:"header__infoBox",children:[Object(a.jsx)(v,{content:"Cases",active:"cases"===e.casesType,click:function(){return e.setCasesType("cases")},padding:e.isMobile.width<365?"3px":"10px",activeColor:"rgb(225, 0, 0)",margin:"1px",fontSize:e.isMobile.width<420?"12px":"15px"}),Object(a.jsx)(v,{content:"Recovered",active:"recovered"===e.casesType,click:function(){return e.setCasesType("recovered")},padding:e.isMobile.width<365?"3px":"10px",activeColor:"rgb(70, 250, 70)",margin:"1px",fontSize:e.isMobile.width<420?"12px":"15px"}),Object(a.jsx)(v,{content:"Deaths",active:"deaths"===e.casesType,click:function(){return e.setCasesType("deaths")},padding:e.isMobile.width<365?"3px":"10px",activeColor:"rgb(50, 50, 50)",margin:"1px",fontSize:e.isMobile.width<420?"12px":"15px"})]})]}),window.onscroll=function(){!function(){var t=document.getElementById("myHeader"),s=document.getElementById("header"),a=document.getElementById("bodyExtension");t.offsetTop,e.isMobile.width<710?window.pageYOffset<50?(t.classList.remove("sticky"),a.classList.remove("bodyExtension")):(t.classList.add("sticky"),a.classList.add("bodyExtension")):s.classList.add("headerSticky")}()}]})},m=s(34),O=s(23),f=s(13),g=s(22),_=new Intl.NumberFormat,w=(y={animation:{duration:0},hover:{animationDuration:0},responsiveAnimationDuration:0,legend:{display:!0},elements:{points:{radius:0},line:{tension:.4}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return _.format(e.value)}}}},Object(f.a)(y,"hover",{mode:"index",intersect:!0}),Object(f.a)(y,"scales",{xAxes:[{gridLines:{display:!0},type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!0},ticks:{callback:function(e,t,s){return _.format(e)}}}]}),y);var S=function(e){var t,s=e.country,r=e.casesType,c=Object(O.a)(e,["country","casesType"]),o=Object(n.useState)([]),i=Object(j.a)(o,2),u=i[0],b=i[1],h=Object(n.useState)([]),p=Object(j.a)(h,2),v=p[0],y=p[1],x=Object(n.useState)(!0),f=Object(j.a)(x,2),_=f[0],S=(f[1],Object(n.useState)("Loading...")),C=Object(j.a)(S,2),N=C[0],T=C[1],k=Object(n.useState)({}),P=Object(j.a)(k,2),D=(P[0],P[1]),z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";if(e){var s,a=[];if(void 0!==e.cases){for(var n in e.cases){if(s&&_){var r={x:n,y:e[t][n]-s<0?0:e[t][n]-s};a.push(r)}if(s&&!1===_){var c={x:n,y:e[t][n]<0?0:e[t][n]};a.push(c)}s=e[t][n]}return a}}},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";if(e){var s,a=[];if(void 0!==e.cases){for(var n in e.cases){if(s){var r={x:n,y:e[t][n]<0?0:e[t][n]};a.push(r)}s=e[t][n]}return a}}};Object(n.useEffect)((function(){"WorldWide"!==s.name&&void 0!==s.name?function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/".concat(s.name,"?lastdays=all")).then((function(e){return e.json()})).then((function(e){if("Country not found or doesn't have any historical data"===e.message)return null;b(z(e.timeline,r)),y(I(e.timeline,r)),u&&T(e.country),c.setGraphSlider({value:150})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()():function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all").then((function(e){return e.json()})).then((function(e){e.country="WorldWide",T(e.country),b(z(e,r)),y(I(e,r)),c.setGraphSlider({value:200})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[s.name,_,r]),Object(n.useEffect)((function(){if(u&&v){c.setSliderMax(u.length);var e=u.length-c.graphSlider.value,t=u.slice(e,u.length);c.setCountry(Object(m.a)(Object(m.a)({},s),{},{timeline:t})),D(v.slice(e,v.length))}}),[c.graphSlider,u,v]);var E="cases"===r?"rgba(200, 20, 50, 0.5)":"recovered"===r?"rgba(0, 200, 50, 0.5)":"rgba(100, 100, 100, 0.5)",M="cases"===r?"rgb(200, 20, 50)":"recovered"===r?"rgb(0, 200, 50)":"rgb(100, 100, 100)";return Object(a.jsx)("div",{style:{maxHeight:"100%",position:"relative",height:"100%",width:"100%"},children:(null===(t=s.timeline)||void 0===t?void 0:t.length)>0&&Object(a.jsx)(g.Line,{options:w,data:{datasets:[{backgroundColor:E,borderColor:M,data:s.timeline,pointRadius:1,fill:!0,label:N+" "+r,hoverRadius:5}]}})})},C=s.p+"static/media/earth.f22c010c.jpg";s(159);var N=function(e){return Object(a.jsxs)("div",{className:"slidecontainer",children:[Object(a.jsxs)("p",{style:{minWidth:"110px"},children:["Past ",e.graphSlider.value," Days:"]}),Object(a.jsx)("input",{type:"range",min:"10",max:e.sliderMax,step:"1",value:e.graphSlider.value,onChange:function(t){e.setGraphSlider({value:t.target.value})},className:"slider"})]})},T=(s(160),s(161),new Intl.NumberFormat);var k=function(e){var t=e.dataShowing,s=Object(O.a)(e,["dataShowing"]);return Object(a.jsxs)("div",{className:"table",children:[Object(a.jsxs)("span",{style:{display:"flex",flexDirection:"row",fontSize:"13px"},children:[Object(a.jsx)(v,{content:"All",click:function(){return s.setDataShowing("all")},onFocus:function(){return s.setSortType("")},width:"50px",margin:"0px",active:"all"===t,color:"rgb(40, 40, 40)",activeColor:"rgb(250, 250, 250)"}),Object(a.jsx)(v,{content:"Today",click:function(){return s.setDataShowing("today")},onFocus:function(){return s.setSortType("")},width:"50px",margin:"0px",active:"today"===t,color:"rgb(40, 40, 40)",activeColor:"rgb(250, 250, 250)"})]}),Object(a.jsx)("div",{className:"table__data",children:Object(a.jsxs)("table",{style:{position:"relative",display:"block"},children:[Object(a.jsx)("thead",{style:{position:"sticky",top:0},children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{style:{position:"sticky",top:0},onClick:function(){return s.setSortType("countries")},children:"countries"===s.sortType?Object(a.jsx)("p",{children:"Country \u25be"}):Object(a.jsx)("span",{children:"Country"})}),Object(a.jsxs)("th",{style:{position:"sticky",top:0},onClick:"all"===t?function(){return s.setSortType("cases")}:function(){return s.setSortType("todayCases")},children:["today"===t?Object(a.jsx)("p",{style:{fontSize:"10px",fontWeight:"lighter"},children:"Today"}):null,"cases"===s.sortType||"todayCases"===s.sortType?Object(a.jsx)("p",{children:"Cases \u25be"}):Object(a.jsx)("span",{children:"Cases"})]}),Object(a.jsxs)("th",{style:{position:"sticky",top:0},onClick:"all"===t?function(){return s.setSortType("recovered")}:function(){return s.setSortType("todayRecovered")},children:["today"===t?Object(a.jsx)("p",{style:{fontSize:"10px",fontWeight:"lighter"},children:"Today"}):null,"recovered"===s.sortType||"todayRecovered"===s.sortType?Object(a.jsx)("p",{children:"Recovered \u25be"}):Object(a.jsx)("span",{children:"Recovered"})]}),Object(a.jsxs)("th",{style:{position:"sticky",top:0},onClick:"all"===t?function(){return s.setSortType("deaths")}:function(){return s.setSortType("todayDeaths")},children:["today"===t?Object(a.jsx)("p",{style:{fontSize:"10px",fontWeight:"lighter"},children:"Today"}):null,"deaths"===s.sortType||"todayDeaths"===s.sortType?Object(a.jsx)("p",{children:"Deaths \u25be"}):Object(a.jsx)("span",{children:"Deaths"})]}),Object(a.jsx)("th",{style:{position:"sticky",top:0},onClick:function(){return s.setSortType("active")},children:"active"===s.sortType?Object(a.jsx)("p",{children:"Active \u25be"}):Object(a.jsx)("span",{children:"Active"})}),Object(a.jsx)("th",{style:{position:"sticky",top:0},children:"Critical"}),Object(a.jsx)("th",{style:{position:"sticky",top:0},children:"Tests"}),Object(a.jsx)("th",{style:{position:"sticky",top:0},children:"Case/Person"}),Object(a.jsx)("th",{style:{position:"sticky",top:0},children:"Death/Person"}),Object(a.jsx)("th",{style:{position:"sticky",top:0},children:"Test/Person"})]})}),Object(a.jsx)("tbody",{children:s.countries.map((function(e){return"all"===t?Object(a.jsxs)("tr",{id:e.name,children:[Object(a.jsx)("td",{children:e.name}),Object(a.jsx)("td",{children:T.format(e.cases)}),Object(a.jsx)("td",{children:T.format(e.recovered)}),Object(a.jsx)("td",{children:T.format(e.deaths)}),Object(a.jsx)("td",{children:T.format(e.active)}),Object(a.jsx)("td",{children:T.format(e.critical)}),Object(a.jsx)("td",{children:T.format(e.tests)}),Object(a.jsx)("td",{children:T.format(e.casePerPerson)}),Object(a.jsx)("td",{children:T.format(e.deathPerPerson)}),Object(a.jsx)("td",{children:T.format(e.testPerPerson)})]},e.name):Object(a.jsxs)("tr",{id:e.name,children:[Object(a.jsx)("td",{children:e.name}),Object(a.jsx)("td",{children:T.format(e.todayCases)}),Object(a.jsx)("td",{children:T.format(e.todayRecovered)}),Object(a.jsx)("td",{children:T.format(e.todayDeaths)}),Object(a.jsx)("td",{children:T.format(e.active)}),Object(a.jsx)("td",{children:T.format(e.critical)}),Object(a.jsx)("td",{children:T.format(e.tests)}),Object(a.jsx)("td",{children:T.format(e.casePerPerson)}),Object(a.jsx)("td",{children:T.format(e.deathPerPerson)}),Object(a.jsx)("td",{children:T.format(e.testPerPerson)})]},e.name)}))})]})})]})};var P=new Intl.NumberFormat;function D(e){var t=[{value:1e18,symbol:"E"},{value:1e15,symbol:"P"},{value:1e12,symbol:"T"},{value:1e9,symbol:"G"},{value:1e6,symbol:"M"},{value:1e3,symbol:"k"},{value:1,symbol:""}],s=t.findIndex((function(t){return e>=t.value}));return(e/t[-1===s?6:s].value).toFixed(2)+t[-1===s?6:s].symbol}var z=function(e){var t=e.country,s=e.countries,n=(e.casesType,e.sortType),r=e.setSortType,c=e.setDataShowing,o=e.dataShowing;return Object(a.jsxs)("div",{className:"dataLayout",children:[Object(a.jsxs)("div",{className:"datalayout__overview",children:[Object(a.jsx)("div",{style:{borderBottom:"1px solid gray",width:"100%",display:"table"},children:Object(a.jsxs)("p",{style:{padding:"10px",backgroundColor:"rgb(255, 255, 255)",borderTopRightRadius:"9px",borderTopLeftRadius:"9px",boxShadow:"inset 100px 0px 100px -50px rgb(170, 170, 170), inset -100px 0px 100px -50px rgb(170, 170, 170)",textAlign:"center",verticalAlign:"middle"},children:[Object(a.jsx)("b",{style:{fontSize:"22px",fontFamily:"cursive"},children:t.name})," ","Overview"]})}),Object(a.jsxs)("div",{className:"datalayout__overview_in",children:[Object(a.jsx)("div",{className:"datalayout__overview_box",style:{borderLeft:"hidden"},children:Object(a.jsxs)("p",{className:"datalayout__overview_title",children:["Cases ",Object(a.jsx)("br",{}),Object(a.jsx)("span",{className:"datalayout__overview_boldnumber",children:D(t.cases)})," ",Object(a.jsx)("br",{}),Object(a.jsxs)("span",{className:"datalayout__overview_dailynumber",children:["+ ",P.format(t.todayCases)]})]})}),Object(a.jsx)("div",{className:"datalayout__overview_box",children:Object(a.jsxs)("p",{className:"datalayout__overview_title",children:["Recovered ",Object(a.jsx)("br",{}),Object(a.jsx)("span",{className:"datalayout__overview_boldnumber",children:D(t.recovered)})," ",Object(a.jsx)("br",{}),Object(a.jsxs)("span",{className:"datalayout__overview_dailynumber",children:["+ ",P.format(t.todayRecovered)]})]})}),Object(a.jsx)("div",{className:"datalayout__overview_box",children:Object(a.jsxs)("p",{className:"datalayout__overview_title",children:["Deaths ",Object(a.jsx)("br",{}),Object(a.jsx)("span",{className:"datalayout__overview_boldnumber",children:D(t.deaths)})," ",Object(a.jsx)("br",{}),Object(a.jsxs)("span",{className:"datalayout__overview_dailynumber",children:["+ ",P.format(t.todayDeaths)]})]})})]}),Object(a.jsxs)("div",{className:"datalayout__overview_in",children:[Object(a.jsx)("div",{className:"datalayout__overview_box",style:{borderLeft:"hidden"},children:Object(a.jsxs)("p",{className:"datalayout__overview_title",children:["Active ",Object(a.jsx)("br",{})," ",Object(a.jsx)("span",{className:"datalayout__overview_number",children:D(t.active)})]})}),Object(a.jsx)("div",{className:"datalayout__overview_box",children:Object(a.jsxs)("p",{className:"datalayout__overview_title",children:["Critical ",Object(a.jsx)("br",{})," ",Object(a.jsx)("span",{className:"datalayout__overview_number",children:D(t.critical)})]})}),Object(a.jsx)("div",{className:"datalayout__overview_box",children:Object(a.jsxs)("p",{className:"datalayout__overview_title",children:["Tests ",Object(a.jsx)("br",{})," ",Object(a.jsx)("span",{className:"datalayout__overview_number",children:D(t.tests)})]})})]}),Object(a.jsxs)("div",{className:"datalayout__overview_in",children:[Object(a.jsx)("div",{className:"datalayout__overview_box",style:{borderLeft:"hidden"},children:Object(a.jsxs)("p",{className:"datalayout__overview_title",children:["Case/Person ",Object(a.jsx)("br",{})," ",Object(a.jsx)("span",{className:"datalayout__overview_number",children:D(t.casePerPerson)})]})}),Object(a.jsx)("div",{className:"datalayout__overview_box",children:Object(a.jsxs)("p",{className:"datalayout__overview_title",children:["Test/Person ",Object(a.jsx)("br",{})," ",Object(a.jsx)("span",{className:"datalayout__overview_number",children:D(t.testPerPerson)})]})}),Object(a.jsx)("div",{className:"datalayout__overview_box",children:Object(a.jsxs)("p",{className:"datalayout__overview_title",children:["Deaths/Person ",Object(a.jsx)("br",{})," ",Object(a.jsx)("span",{className:"datalayout__overview_number",children:D(t.deathPerPerson)})]})})]}),Object(a.jsxs)("p",{style:{paddingLeft:"8px",paddingBottom:"2px",fontSize:"10px"},children:[Object(a.jsx)("b",{children:"Case/Person"})," = ",Object(a.jsx)("b",{children:"X"})," (Every ",Object(a.jsx)("b",{children:"X"})," people there's one Case )"]})]}),Object(a.jsx)("div",{className:"datalayout__table",children:Object(a.jsx)(k,{countries:s,country:t,setSortType:r,sortType:n,setDataShowing:c,dataShowing:o})})]})},I=s(14),E={width:"100%",height:"100%"};function M(e){var t=e.setShowingInfoWindow,s=e.setCurrentCountry,n=e.country,r=e.currentZoom,c=e.casesType,o=e.onClose;if("WorldWide"===n.name)return null;var i={casesOptions:{strokeColor:"rgba(255, 0, 0)",strokeWeight:.5,fillColor:"rgba(255, 0, 0)",fillOpacity:.35,clickable:!0,draggable:!1,editable:!1,visible:!0,zIndex:1},recoveredOptions:{strokeColor:"rgba(0, 255, 150)",strokeWeight:1.5,fillColor:"rgba(0, 255, 0)",fillOpacity:.35,clickable:!0,draggable:!1,editable:!1,visible:!0,zIndex:1},deathsOptions:{strokeColor:"rgba(70, 70, 70)",strokeWeight:1.5,fillColor:"rgba(100, 100, 100)",fillOpacity:.35,clickable:!0,draggable:!1,editable:!1,visible:!0,zIndex:1}},l="cases"===c?i.casesOptions:"deaths"===c?i.deathsOptions:i.recoveredOptions,d="cases"===c?n.cases:"recovered"===c?n.recovered:n.deaths;return Object(a.jsx)(I.a,{center:n.center,options:l,radius:1e3*Math.sqrt(d)/r,onMouseOver:function(){s(n),t(!0)},onMouseOut:o,clickable:!0})}function R(e){var t=Object(n.useState)(!1),s=Object(j.a)(t,2),r=s[0],c=s[1],o=Object(n.useState)(e.country),i=Object(j.a)(o,2),l=i[0],d=i[1],u=Object(n.useState)(),b=Object(j.a)(u,2),h=b[0],p=b[1];var v=function(){r&&c(!1)},y=new Intl.NumberFormat;return Object(a.jsx)(I.d,{googleMapsApiKey:"AIzaSyA0qwEl7BqF71zcbmOvKq67ZgmPJNB47AM",googleMapsClientId:"b16c2d548c77ab9e",children:Object(a.jsx)(I.b,{mapContainerStyle:E,center:e.country.center,zoom:e.country.zoom,onZoomChanged:function(){p(this.getZoom()+1)},options:{streetViewControl:!1,mapTypeControl:!1,maxZoom:6,minZoom:1},children:Object(a.jsxs)(a.Fragment,{children:[e.countries.map((function(t){return Object(a.jsx)(M,{setShowingInfoWindow:c,setCurrentCountry:d,country:t,showingInfoWindow:r,currentZoom:h,casesType:e.casesType,onClose:v},t.name)})),r&&Object(a.jsx)(I.c,{position:l.center,onCloseClick:v,children:Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{children:Object(a.jsx)("img",{alt:"".concat(l.name," Flag"),src:l.flag,className:"map_image"})}),Object(a.jsx)("br",{}),Object(a.jsx)("span",{children:"".concat(l.name)}),Object(a.jsx)("br",{}),Object(a.jsx)("span",{children:"Cases: ".concat(y.format(l.cases))}),Object(a.jsx)("br",{}),Object(a.jsx)("span",{children:"Recovered: ".concat(y.format(l.recovered))}),Object(a.jsx)("br",{}),Object(a.jsx)("span",{children:"Deaths: ".concat(y.format(l.deaths))})]})})]})})})}var W=r.a.memo(R);var L=function(e){var t="cases"===e.casesType?"rgba(200, 20, 50, 0.5)":"recovered"===e.casesType?"rgba(0, 200, 50, 0.5)":"rgba(100, 100, 100, 0.5)";return Object(a.jsxs)("div",{style:{position:"relative",height:"100%",width:"100%"},children:[Object(a.jsxs)("div",{style:{padding:"3px"},children:[Object(a.jsx)("p",{style:{display:"inline"},children:"Map of "}),Object(a.jsx)("h3",{style:{display:"inline",color:t},children:e.casesType})]}),Object(a.jsx)("div",{style:{position:"relative",height:"250px",width:"100%"},children:Object(a.jsx)(W,{countries:e.countries,country:e.country,casesType:e.casesType})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{style:{fontSize:"13px",color:"gray",paddingLeft:"10px",display:"inline",position:"relative",height:"100%"},children:"Source:"}),Object(a.jsx)("a",{href:"https://www.worldometers.info/",target:"_blank",rel:"noopener noreferrer",style:{color:"gray",display:"inline",fontSize:"10px"},children:"Worldometer"})]})]})};s(162);var F=function(){return Object(a.jsxs)("div",{className:"footer",children:[Object(a.jsxs)("p",{children:["Contact me:"," ",Object(a.jsx)("a",{href:"mailto: adham@adhamnasr.com",children:"adham@adhamnasr.com"})]}),Object(a.jsx)("p",{style:{fontSize:"11px"},children:"Copyright\xa9 2020"})]})};var A=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),s=t[0],r=t[1],c=Object(n.useState)({}),o=Object(j.a)(c,2),i=o[0],b=o[1],h=Object(n.useState)("cases"),p=Object(j.a)(h,2),v=p[0],y=p[1],m=Object(n.useState)(""),O=Object(j.a)(m,2),f=O[0],g=O[1],_=Object(n.useState)({value:"200"}),w=Object(j.a)(_,2),T=w[0],k=w[1],P=Object(n.useState)("300"),D=Object(j.a)(P,2),I=D[0],E=D[1],M=Object(n.useState)("all"),R=Object(j.a)(M,2),W=R[0],A=R[1],B=function(){var e=Object(n.useState)({width:void 0,height:void 0}),t=Object(j.a)(e,2),s=t[0],a=t[1];return Object(n.useEffect)((function(){function e(){a({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),s}();return Object(n.useEffect)((function(){var e=function(e){var t=Object(u.a)(e);return"cases"===f?t.sort((function(e,t){return e.cases>t.cases?-1:1})):"deaths"===f?t.sort((function(e,t){return e.deaths>t.deaths?-1:1})):"recovered"===f?t.sort((function(e,t){return e.recovered>t.recovered?-1:1})):"todayCases"===f?t.sort((function(e,t){return e.todayCases>t.todayCases?-1:1})):"todayDeaths"===f?t.sort((function(e,t){return e.todayDeaths>t.todayDeaths?-1:1})):"todayRecovered"===f?t.sort((function(e,t){return e.todayRecovered>t.todayRecovered?-1:1})):"active"===f?t.sort((function(e,t){return e.active>t.active?-1:1})):"countries"===f?t.sort((function(e,t){return e.name<t.name?-1:1})):t.sort((function(e,t){return e>t?-1:1}))}(s);r(e)}),[f]),Object(n.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/all?yesterday=true").then((function(e){return e.json()})).then((function(e){var t=e;t.name="WorldWide",t.flag=C,t.center={lat:0,lng:0},t.zoom=1,t.casePerPerson=e.population/e.cases,t.testPerPerson=e.population/e.tests,t.deathPerPerson=e.population/e.deaths,t.timeline=null,r((function(e){return e.concat(t)})),b(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries?yesterday=true").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2,cases:e.cases,todayCases:e.todayCases,recovered:e.recovered,todayRecovered:e.todayRecovered,deaths:e.deaths,todayDeaths:e.todayDeaths,flag:e.countryInfo.flag,center:{lat:e.countryInfo.lat,lng:e.countryInfo.long},zoom:4,active:e.active,critical:e.critical,tests:e.tests,casePerPerson:e.oneCasePerPeople,testPerPerson:e.oneTestPerPeople,deathPerPerson:e.oneDeathPerPeople,timeline:null}}));r((function(e){return e.concat(t)}))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)("div",{className:"app__header",id:"header",children:Object(a.jsx)(x,{countries:s,changeCountry:function(e){var t=e.target.value,a=s.find((function(e){return e.name===t}));void 0!==a&&(b(a),document.activeElement.blur())},country:i,casesType:v,setCasesType:y,setDataShowing:A,setGraphSlider:k,setSortType:g,setCountry:b,isMobile:B})}),Object(a.jsxs)("div",{className:"app__body",id:"bodyExtension",children:[Object(a.jsx)("div",{className:"app__dataLayout",children:Object(a.jsx)(z,{country:i,countries:s,casesType:v,setSortType:g,sortType:f,dataShowing:W,setDataShowing:A})}),Object(a.jsx)("div",{className:"app__map_wrapper",children:Object(a.jsx)(L,{countries:s,country:i,casesType:v})}),Object(a.jsxs)("div",{className:"app__graph",children:[Object(a.jsx)("div",{className:"app__graph_graph",children:Object(a.jsx)(S,{casesType:v,country:i,setCountry:b,graphSlider:T,setGraphSlider:k,setSliderMax:E})}),Object(a.jsx)(N,{graphSlider:T,setGraphSlider:k,sliderMax:I})]})]}),Object(a.jsx)("div",{className:"app__footer",children:Object(a.jsx)(F,{})})]})};s(163);o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(A,{})}),document.getElementById("root"))},57:function(e,t,s){},58:function(e,t,s){},59:function(e,t,s){}},[[164,1,2]]]);
//# sourceMappingURL=main.d42f815e.chunk.js.map