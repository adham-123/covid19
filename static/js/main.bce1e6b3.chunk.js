(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{159:function(e,t,a){},160:function(e,t,a){},161:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a(1),n=a.n(r),c=a(8),o=a.n(c),i=a(4),l=a.n(i),d=a(9),u=a(50),j=a(2),b=(a(57),function(){document.getElementById("myInput").value=null}),h=function(e){document.getElementById("myInput").value=e};var p=function(e){return Object(r.useEffect)((function(){h(e.country.name)}),[e.country]),Object(s.jsxs)("div",{className:"header__dropdown",children:[Object(s.jsx)("input",{size:"8",id:"myInput",list:"dropdown__countries",className:"header__dropbtn",placeholder:"Search Country",onChange:e.changeCountry,onFocus:function(){return b()},onClick:function(){return b()},onBlur:function(){return h(e.country.name)}}),Object(s.jsx)("datalist",{id:"dropdown__countries",children:e.countries.map((function(e){return Object(s.jsx)("option",{value:e.name},e.value+e.name)}))})]})};a(58);var v=function(e){var t={padding:e.padding,width:e.width,color:e.color,borderRadius:e.radius,backgroundColor:e.bcolor,boxShadow:e.shadow,margin:e.margin};return e.active&&(t={padding:e.padding,width:e.width,color:e.activeColor,borderRadius:e.radius,backgroundColor:e.bcolor,margin:e.margin}),Object(s.jsx)("div",{className:"infoBox",style:{margin:e.margin,marginLeft:e.marginL},children:Object(s.jsx)("button",{className:"infoBox__button",onClick:e.click,style:t,onFocus:e.onFocus,children:Object(s.jsx)("span",{children:Object(s.jsx)("p",{children:e.content})})})})};a(59);var y,x=function(e){var t=e.countries.find((function(e){return"WorldWide"===e.name}));return Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("button",{className:"header__title",onClick:function(){return e.setCasesType("cases"),e.setDataShowing("all"),e.setGraphSlider({value:"200"}),e.setSortType(""),void 0!==t?e.setCountry(t):null},style:{border:"0px",backgroundColor:"rgba(230, 230, 230,1)",cursor:"pointer",outline:"none"},children:"Covid 19 Tracker"}),Object(s.jsx)("img",{alt:"".concat(e.country.name," Flag"),src:e.country.flag,className:"header_image"}),Object(s.jsxs)("div",{className:"header__dd_img",id:"myHeader",children:[Object(s.jsx)("div",{className:"header__right",children:Object(s.jsx)(p,{countries:e.countries,changeCountry:e.changeCountry,country:e.country})}),Object(s.jsxs)("div",{className:"app__infoBox",children:[Object(s.jsx)(v,{content:"Cases",active:"cases"===e.casesType,click:function(){return e.setCasesType("cases")},padding:"10px",activeColor:"rgb(225, 0, 0)"}),Object(s.jsx)(v,{content:"Recovered",active:"recovered"===e.casesType,click:function(){return e.setCasesType("recovered")},padding:"10px",activeColor:"rgb(70, 250, 70)"}),Object(s.jsx)(v,{content:"Deaths",active:"deaths"===e.casesType,click:function(){return e.setCasesType("deaths")},padding:"10px",activeColor:"rgb(50, 50, 50)"})]})]}),window.onscroll=function(){!function(){var e=document.getElementById("myHeader"),t=document.getElementById("bodyExtension"),a=e.offsetTop;window.pageYOffset>a?(e.classList.add("sticky"),t.classList.add("bodyExtension")):(e.classList.remove("sticky"),t.classList.remove("bodyExtension"))}()}]})},O=a(34),m=a(23),f=a(13),g=a(22),_=new Intl.NumberFormat,w=(y={animation:{duration:0},hover:{animationDuration:0},responsiveAnimationDuration:0,legend:{display:!0},elements:{points:{radius:0},line:{tension:.4}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return _.format(e.value)}}}},Object(f.a)(y,"hover",{mode:"index",intersect:!0}),Object(f.a)(y,"scales",{xAxes:[{gridLines:{display:!0},type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!0},ticks:{callback:function(e,t,a){return _.format(e)}}}]}),y);var C=function(e){var t,a=e.country,n=e.casesType,c=Object(m.a)(e,["country","casesType"]),o=Object(r.useState)([]),i=Object(j.a)(o,2),u=i[0],b=i[1],h=Object(r.useState)([]),p=Object(j.a)(h,2),v=p[0],y=p[1],x=Object(r.useState)(!0),f=Object(j.a)(x,2),_=f[0],C=(f[1],Object(r.useState)("Loading...")),S=Object(j.a)(C,2),N=S[0],T=S[1],k=Object(r.useState)({}),P=Object(j.a)(k,2),D=(P[0],P[1]),I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";if(e){var a,s=[];if(void 0!==e.cases){for(var r in e.cases){if(a&&_){var n={x:r,y:e[t][r]-a<0?0:e[t][r]-a};s.push(n)}if(a&&!1===_){var c={x:r,y:e[t][r]<0?0:e[t][r]};s.push(c)}a=e[t][r]}return s}}},R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";if(e){var a,s=[];if(void 0!==e.cases){for(var r in e.cases){if(a){var n={x:r,y:e[t][r]<0?0:e[t][r]};s.push(n)}a=e[t][r]}return s}}};Object(r.useEffect)((function(){"WorldWide"!==a.name&&void 0!==a.name?function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/".concat(a.name,"?lastdays=all")).then((function(e){return e.json()})).then((function(e){if("Country not found or doesn't have any historical data"===e.message)return null;b(I(e.timeline,n)),y(R(e.timeline,n)),u&&T(e.country),c.setGraphSlider({value:150})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()():function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all").then((function(e){return e.json()})).then((function(e){e.country="WorldWide",T(e.country),b(I(e,n)),y(R(e,n)),c.setGraphSlider({value:200})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a.name,_,n]),Object(r.useEffect)((function(){if(u&&v){c.setSliderMax(u.length);var e=u.length-c.graphSlider.value,t=u.slice(e,u.length);c.setCountry(Object(O.a)(Object(O.a)({},a),{},{timeline:t})),D(v.slice(e,v.length))}}),[c.graphSlider,u,v]);var W="cases"===n?"rgba(200, 20, 50, 0.5)":"recovered"===n?"rgba(0, 200, 50, 0.5)":"rgba(100, 100, 100, 0.5)",z="cases"===n?"rgb(200, 20, 50)":"recovered"===n?"rgb(0, 200, 50)":"rgb(100, 100, 100)";return Object(s.jsx)("div",{style:{maxHeight:"100%",position:"relative",height:"100%",width:"100%"},children:(null===(t=a.timeline)||void 0===t?void 0:t.length)>0&&Object(s.jsx)(g.Line,{options:w,data:{datasets:[{backgroundColor:W,borderColor:z,data:a.timeline,pointRadius:1,fill:!0,label:N+" "+n,hoverRadius:5}]}})})},S=a.p+"static/media/earth.f22c010c.jpg";a(159);var N=function(e){return Object(s.jsxs)("div",{className:"slidecontainer",children:[Object(s.jsxs)("p",{style:{minWidth:"110px"},children:["Past ",e.graphSlider.value," Days:"]}),Object(s.jsx)("input",{type:"range",min:"10",max:e.sliderMax,step:"1",value:e.graphSlider.value,onChange:function(t){e.setGraphSlider({value:t.target.value})},className:"slider"})]})},T=(a(160),a(161),new Intl.NumberFormat);var k=function(e){var t=e.dataShowing,a=Object(m.a)(e,["dataShowing"]);return Object(s.jsxs)("div",{className:"table",children:[Object(s.jsxs)("span",{style:{display:"flex",flexDirection:"row",fontSize:"13px"},children:[Object(s.jsx)(v,{content:"All",click:function(){return a.setDataShowing("all")},onFocus:function(){return a.setSortType("")},width:"50px",margin:"0px",active:"all"===t,color:"rgb(40, 40, 40)",activeColor:"rgb(250, 250, 250)"}),Object(s.jsx)(v,{content:"Today",click:function(){return a.setDataShowing("today")},onFocus:function(){return a.setSortType("")},width:"50px",margin:"0px",active:"today"===t,color:"rgb(40, 40, 40)",activeColor:"rgb(250, 250, 250)"})]}),Object(s.jsx)("div",{className:"table__data",children:Object(s.jsx)("table",{style:{position:"relative"},children:Object(s.jsxs)("tbody",{children:[Object(s.jsxs)("tr",{colSpan:"3",children:[Object(s.jsx)("th",{style:{position:"sticky",top:0},onClick:function(){return a.setSortType("countries")},children:"countries"===a.sortType?Object(s.jsx)("p",{children:"Country \u25be"}):Object(s.jsx)("span",{children:"Country"})}),Object(s.jsxs)("th",{style:{position:"sticky",top:0},onClick:"all"===t?function(){return a.setSortType("cases")}:function(){return a.setSortType("todayCases")},children:["today"===t?Object(s.jsx)("p",{style:{fontSize:"10px",fontWeight:"lighter"},children:"Today"}):null,"cases"===a.sortType||"todayCases"===a.sortType?Object(s.jsx)("p",{children:"Cases \u25be"}):Object(s.jsx)("span",{children:"Cases"})]}),Object(s.jsxs)("th",{style:{position:"sticky",top:0},onClick:"all"===t?function(){return a.setSortType("recovered")}:function(){return a.setSortType("todayRecovered")},children:["today"===t?Object(s.jsx)("p",{style:{fontSize:"10px",fontWeight:"lighter"},children:"Today"}):null,"recovered"===a.sortType||"todayRecovered"===a.sortType?Object(s.jsx)("p",{children:"Recovered \u25be"}):Object(s.jsx)("span",{children:"Recovered"})]}),Object(s.jsxs)("th",{style:{position:"sticky",top:0},onClick:"all"===t?function(){return a.setSortType("deaths")}:function(){return a.setSortType("todayDeaths")},children:["today"===t?Object(s.jsx)("p",{style:{fontSize:"10px",fontWeight:"lighter"},children:"Today"}):null,"deaths"===a.sortType||"todayDeaths"===a.sortType?Object(s.jsx)("p",{children:"Deaths \u25be"}):Object(s.jsx)("span",{children:"Deaths"})]}),Object(s.jsx)("th",{style:{position:"sticky",top:0},onClick:function(){return a.setSortType("active")},children:"active"===a.sortType?Object(s.jsx)("p",{children:"Active \u25be"}):Object(s.jsx)("span",{children:"Active"})}),Object(s.jsx)("th",{style:{position:"sticky",top:0},children:"Critical"}),Object(s.jsx)("th",{style:{position:"sticky",top:0},children:"Tests"}),Object(s.jsx)("th",{style:{position:"sticky",top:0},children:"Case/Person"}),Object(s.jsx)("th",{style:{position:"sticky",top:0},children:"Death/Person"}),Object(s.jsx)("th",{style:{position:"sticky",top:0},children:"Test/Person"})]}),a.countries.map((function(e){return"all"===t?Object(s.jsxs)("tr",{id:e.name,children:[Object(s.jsx)("td",{children:e.name}),Object(s.jsx)("td",{children:T.format(e.cases)}),Object(s.jsx)("td",{children:T.format(e.recovered)}),Object(s.jsx)("td",{children:T.format(e.deaths)}),Object(s.jsx)("td",{children:T.format(e.active)}),Object(s.jsx)("td",{children:T.format(e.critical)}),Object(s.jsx)("td",{children:T.format(e.tests)}),Object(s.jsx)("td",{children:T.format(e.casePerPerson)}),Object(s.jsx)("td",{children:T.format(e.deathPerPerson)}),Object(s.jsx)("td",{children:T.format(e.testPerPerson)})]},e.name):Object(s.jsxs)("tr",{id:e.name,children:[Object(s.jsx)("td",{children:e.name}),Object(s.jsx)("td",{children:T.format(e.todayCases)}),Object(s.jsx)("td",{children:T.format(e.todayRecovered)}),Object(s.jsx)("td",{children:T.format(e.todayDeaths)}),Object(s.jsx)("td",{children:T.format(e.active)}),Object(s.jsx)("td",{children:T.format(e.critical)}),Object(s.jsx)("td",{children:T.format(e.tests)}),Object(s.jsx)("td",{children:T.format(e.casePerPerson)}),Object(s.jsx)("td",{children:T.format(e.deathPerPerson)}),Object(s.jsx)("td",{children:T.format(e.testPerPerson)})]},e.name)}))]})})})]})};var P=new Intl.NumberFormat;function D(e){var t=[{value:1e18,symbol:"E"},{value:1e15,symbol:"P"},{value:1e12,symbol:"T"},{value:1e9,symbol:"G"},{value:1e6,symbol:"M"},{value:1e3,symbol:"k"},{value:1,symbol:""}],a=t.findIndex((function(t){return e>=t.value}));return(e/t[-1===a?6:a].value).toFixed(2)+t[-1===a?6:a].symbol}var I=function(e){var t=e.country,a=e.countries,r=(e.casesType,e.sortType),n=e.setSortType,c=e.setDataShowing,o=e.dataShowing;return Object(s.jsxs)("div",{className:"dataLayout",children:[Object(s.jsxs)("div",{className:"datalayout__overview",children:[Object(s.jsx)("div",{style:{borderBottom:"1px solid gray",width:"100%",display:"table"},children:Object(s.jsxs)("p",{style:{padding:"10px",backgroundColor:"rgb(255, 255, 255)",borderTopRightRadius:"9px",borderTopLeftRadius:"9px",boxShadow:"inset 100px 0px 100px -50px rgb(170, 170, 170), inset -100px 0px 100px -50px rgb(170, 170, 170)",textAlign:"center",verticalAlign:"middle"},children:[Object(s.jsx)("b",{style:{fontSize:"22px",fontFamily:"cursive"},children:t.name})," ","Overview"]})}),Object(s.jsxs)("div",{className:"datalayout__overview_in",children:[Object(s.jsx)("div",{className:"datalayout__overview_box",style:{borderLeft:"hidden"},children:Object(s.jsxs)("p",{className:"datalayout__overview_title",children:["Cases ",Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"datalayout__overview_boldnumber",children:D(t.cases)})," ",Object(s.jsx)("br",{}),Object(s.jsxs)("span",{className:"datalayout__overview_dailynumber",children:["+ ",P.format(t.todayCases)]})]})}),Object(s.jsx)("div",{className:"datalayout__overview_box",children:Object(s.jsxs)("p",{className:"datalayout__overview_title",children:["Recovered ",Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"datalayout__overview_boldnumber",children:D(t.recovered)})," ",Object(s.jsx)("br",{}),Object(s.jsxs)("span",{className:"datalayout__overview_dailynumber",children:["+ ",P.format(t.todayRecovered)]})]})}),Object(s.jsx)("div",{className:"datalayout__overview_box",children:Object(s.jsxs)("p",{className:"datalayout__overview_title",children:["Deaths ",Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"datalayout__overview_boldnumber",children:D(t.deaths)})," ",Object(s.jsx)("br",{}),Object(s.jsxs)("span",{className:"datalayout__overview_dailynumber",children:["+ ",P.format(t.todayDeaths)]})]})})]}),Object(s.jsxs)("div",{className:"datalayout__overview_in",children:[Object(s.jsx)("div",{className:"datalayout__overview_box",style:{borderLeft:"hidden"},children:Object(s.jsxs)("p",{className:"datalayout__overview_title",children:["Active ",Object(s.jsx)("br",{})," ",Object(s.jsx)("span",{className:"datalayout__overview_number",children:D(t.active)})]})}),Object(s.jsx)("div",{className:"datalayout__overview_box",children:Object(s.jsxs)("p",{className:"datalayout__overview_title",children:["Critical ",Object(s.jsx)("br",{})," ",Object(s.jsx)("span",{className:"datalayout__overview_number",children:D(t.critical)})]})}),Object(s.jsx)("div",{className:"datalayout__overview_box",children:Object(s.jsxs)("p",{className:"datalayout__overview_title",children:["Tests ",Object(s.jsx)("br",{})," ",Object(s.jsx)("span",{className:"datalayout__overview_number",children:D(t.tests)})]})})]}),Object(s.jsxs)("div",{className:"datalayout__overview_in",children:[Object(s.jsx)("div",{className:"datalayout__overview_box",style:{borderLeft:"hidden"},children:Object(s.jsxs)("p",{className:"datalayout__overview_title",children:["Case/Person ",Object(s.jsx)("br",{})," ",Object(s.jsx)("span",{className:"datalayout__overview_number",children:D(t.casePerPerson)})]})}),Object(s.jsx)("div",{className:"datalayout__overview_box",children:Object(s.jsxs)("p",{className:"datalayout__overview_title",children:["Test/Person ",Object(s.jsx)("br",{})," ",Object(s.jsx)("span",{className:"datalayout__overview_number",children:D(t.testPerPerson)})]})}),Object(s.jsx)("div",{className:"datalayout__overview_box",children:Object(s.jsxs)("p",{className:"datalayout__overview_title",children:["Deaths/Person ",Object(s.jsx)("br",{})," ",Object(s.jsx)("span",{className:"datalayout__overview_number",children:D(t.deathPerPerson)})]})})]}),Object(s.jsxs)("p",{style:{paddingLeft:"8px",paddingBottom:"2px",fontSize:"10px"},children:[Object(s.jsx)("b",{children:"Case/Person"})," = ",Object(s.jsx)("b",{children:"X"})," (Every ",Object(s.jsx)("b",{children:"X"})," people there's one Case )"]})]}),Object(s.jsx)("div",{className:"datalayout__table",children:Object(s.jsx)(k,{countries:a,country:t,setSortType:n,sortType:r,setDataShowing:c,dataShowing:o})})]})},R=a(14),W={width:"100%",height:"100%"};function z(e){var t=e.setShowingInfoWindow,a=e.setCurrentCountry,r=e.country,n=e.currentZoom,c=e.casesType,o=e.onClose;if("WorldWide"===r.name)return null;var i={casesOptions:{strokeColor:"rgba(255, 0, 0)",strokeWeight:.5,fillColor:"rgba(255, 0, 0)",fillOpacity:.35,clickable:!0,draggable:!1,editable:!1,visible:!0,zIndex:1},recoveredOptions:{strokeColor:"rgba(0, 255, 150)",strokeWeight:1.5,fillColor:"rgba(0, 255, 0)",fillOpacity:.35,clickable:!0,draggable:!1,editable:!1,visible:!0,zIndex:1},deathsOptions:{strokeColor:"rgba(70, 70, 70)",strokeWeight:1.5,fillColor:"rgba(100, 100, 100)",fillOpacity:.35,clickable:!0,draggable:!1,editable:!1,visible:!0,zIndex:1}},l="cases"===c?i.casesOptions:"deaths"===c?i.deathsOptions:i.recoveredOptions,d="cases"===c?r.cases:"recovered"===c?r.recovered:r.deaths;return Object(s.jsx)(R.a,{center:r.center,options:l,radius:1e3*Math.sqrt(d)/n,onMouseOver:function(){a(r),t(!0)},onMouseOut:o,clickable:!0})}function E(e){var t=Object(r.useState)(!1),a=Object(j.a)(t,2),n=a[0],c=a[1],o=Object(r.useState)(e.country),i=Object(j.a)(o,2),l=i[0],d=i[1],u=Object(r.useState)(),b=Object(j.a)(u,2),h=b[0],p=b[1];var v=function(){n&&c(!1)},y=new Intl.NumberFormat;return Object(s.jsx)(R.d,{googleMapsApiKey:"AIzaSyA0qwEl7BqF71zcbmOvKq67ZgmPJNB47AM",googleMapsClientId:"b16c2d548c77ab9e",children:Object(s.jsx)(R.b,{mapContainerStyle:W,center:e.country.center,zoom:e.country.zoom,onZoomChanged:function(){p(this.getZoom()+1)},options:{streetViewControl:!1,mapTypeControl:!1,maxZoom:6,minZoom:1},children:Object(s.jsxs)(s.Fragment,{children:[e.countries.map((function(t){return Object(s.jsx)(z,{setShowingInfoWindow:c,setCurrentCountry:d,country:t,showingInfoWindow:n,currentZoom:h,casesType:e.casesType,onClose:v},t.name)})),n&&Object(s.jsx)(R.c,{position:l.center,onCloseClick:v,children:Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{children:Object(s.jsx)("img",{alt:"".concat(l.name," Flag"),src:l.flag,className:"map_image"})}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:"".concat(l.name)}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:"Cases: ".concat(y.format(l.cases))}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:"Recovered: ".concat(y.format(l.recovered))}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:"Deaths: ".concat(y.format(l.deaths))})]})})]})})})}var L=n.a.memo(E);var F=function(e){var t="cases"===e.casesType?"rgba(200, 20, 50, 0.5)":"recovered"===e.casesType?"rgba(0, 200, 50, 0.5)":"rgba(100, 100, 100, 0.5)";return Object(s.jsxs)("div",{style:{position:"relative",height:"100%",width:"100%"},children:[Object(s.jsxs)("div",{style:{padding:"3px"},children:[Object(s.jsx)("p",{style:{display:"inline"},children:"Map of "}),Object(s.jsx)("h3",{style:{display:"inline",color:t},children:e.casesType})]}),Object(s.jsx)("div",{style:{position:"relative",height:"250px",width:"100%"},children:Object(s.jsx)(L,{countries:e.countries,country:e.country,casesType:e.casesType})}),Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{style:{fontSize:"13px",color:"gray",paddingLeft:"10px",display:"inline",position:"relative",height:"100%"},children:"Source:"}),Object(s.jsx)("a",{href:"https://www.worldometers.info/",target:"_blank",rel:"noopener noreferrer",style:{color:"gray",display:"inline",fontSize:"10px"},children:"Worldometer"})]})]})};a(162);var M=function(){return Object(s.jsxs)("div",{className:"footer",children:[Object(s.jsxs)("p",{children:["Contact me:"," ",Object(s.jsx)("a",{href:"mailto: adham@adhamnasr.com",children:"adham@adhamnasr.com"})]}),Object(s.jsx)("p",{style:{fontSize:"12px"},children:"Copyright\xa9 2020"})]})};var A=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)({}),o=Object(j.a)(c,2),i=o[0],b=o[1],h=Object(r.useState)("cases"),p=Object(j.a)(h,2),v=p[0],y=p[1],O=Object(r.useState)(""),m=Object(j.a)(O,2),f=m[0],g=m[1],_=Object(r.useState)({value:"200"}),w=Object(j.a)(_,2),T=w[0],k=w[1],P=Object(r.useState)("300"),D=Object(j.a)(P,2),R=D[0],W=D[1],z=Object(r.useState)("all"),E=Object(j.a)(z,2),L=E[0],A=E[1];return Object(r.useEffect)((function(){var e=function(e){var t=Object(u.a)(e);return"cases"===f?t.sort((function(e,t){return e.cases>t.cases?-1:1})):"deaths"===f?t.sort((function(e,t){return e.deaths>t.deaths?-1:1})):"recovered"===f?t.sort((function(e,t){return e.recovered>t.recovered?-1:1})):"todayCases"===f?t.sort((function(e,t){return e.todayCases>t.todayCases?-1:1})):"todayDeaths"===f?t.sort((function(e,t){return e.todayDeaths>t.todayDeaths?-1:1})):"todayRecovered"===f?t.sort((function(e,t){return e.todayRecovered>t.todayRecovered?-1:1})):"active"===f?t.sort((function(e,t){return e.active>t.active?-1:1})):"countries"===f?t.sort((function(e,t){return e.name<t.name?-1:1})):t.sort((function(e,t){return e>t?-1:1}))}(a);n(e)}),[f]),Object(r.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/all?yesterday=true").then((function(e){return e.json()})).then((function(e){var t=e;t.name="WorldWide",t.flag=S,t.center={lat:0,lng:0},t.zoom=1,t.casePerPerson=e.population/e.cases,t.testPerPerson=e.population/e.tests,t.deathPerPerson=e.population/e.deaths,t.timeline=null,n((function(e){return e.concat(t)})),b(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries?yesterday=true").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2,cases:e.cases,todayCases:e.todayCases,recovered:e.recovered,todayRecovered:e.todayRecovered,deaths:e.deaths,todayDeaths:e.todayDeaths,flag:e.countryInfo.flag,center:{lat:e.countryInfo.lat,lng:e.countryInfo.long},zoom:4,active:e.active,critical:e.critical,tests:e.tests,casePerPerson:e.oneCasePerPeople,testPerPerson:e.oneTestPerPeople,deathPerPerson:e.oneDeathPerPeople,timeline:null}}));n((function(e){return e.concat(t)}))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(s.jsxs)("div",{className:"app",children:[Object(s.jsx)("div",{className:"app__header",children:Object(s.jsx)(x,{countries:a,changeCountry:function(e){var t=e.target.value,s=a.find((function(e){return e.name===t}));void 0!==s&&b(s)},country:i,casesType:v,setCasesType:y,setDataShowing:A,setGraphSlider:k,setSortType:g,setCountry:b})}),Object(s.jsxs)("div",{className:"app__body",children:[Object(s.jsx)("div",{className:"app__dataLayout",id:"bodyExtension",children:Object(s.jsx)(I,{country:i,countries:a,casesType:v,setSortType:g,sortType:f,dataShowing:L,setDataShowing:A})}),Object(s.jsx)("div",{className:"app__map_wrapper",children:Object(s.jsx)(F,{countries:a,country:i,casesType:v})}),Object(s.jsxs)("div",{className:"app__graph",children:[Object(s.jsx)("div",{className:"app__graph_graph",children:Object(s.jsx)(C,{casesType:v,country:i,setCountry:b,graphSlider:T,setGraphSlider:k,setSliderMax:W})}),Object(s.jsx)(N,{graphSlider:T,setGraphSlider:k,sliderMax:R})]})]}),Object(s.jsx)("div",{children:Object(s.jsx)(M,{})})]})};a(163);o.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(A,{})}),document.getElementById("root"))},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){}},[[164,1,2]]]);
//# sourceMappingURL=main.bce1e6b3.chunk.js.map