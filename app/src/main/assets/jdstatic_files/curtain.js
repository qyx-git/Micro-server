!function(t){function e(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/index/js/",e(e.s=78)}({12:function(t,e,n){var i=n(5),a=i.JSON||(i.JSON={stringify:JSON.stringify});t.exports=function(t){return a.stringify.apply(a,arguments)}},4:function(t,e,n){"use strict";var i={sendMping:function(t,e,n){try{var i=new MPing.inputs.Click(t);i.event_param=e||"",i.event_level=n?parseInt(n):"";(new MPing).send(i)}catch(t){console.log("mping sendMping errpr",t)}}};t.exports=i},5:function(t,e){var n=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=n)},78:function(t,e,n){"use strict";var i=window.localStorage;if(i)try{i.setItem("key","value"),i.removeItem("key"),!0}catch(t){!1}else!1;n(79).showCurtains()},79:function(t,e,n){"use strict";var i=n(9),a=function(t){return t&&t.__esModule?t:{default:t}}(i),o=n(80);n(4);t.exports={global_curtain_opt:{curtainDomId:o.uuid(32,32),mHomeCurtainsVersion:M.localstorage.get("m_home_curtains_version"),url:"/index/curtains.json?ts="+(new Date).getTime(),pingData:{closeBtn:{eventId:"MHome_CurtainClose",eventPara:"",eventLevel:""},curtain:{eventId:"MHome_CurtainClose",eventPara:"",eventLevel:""},curtainShow:{eventId:"MHome_CurtainExpo",eventPara:"",eventLevel:""}},callback:function(t){if(t&&t.show&&1==t.show){M.localstorage.set("m_home_curtain_start_time",t.curtains.startTime),M.localstorage.set("m_home_curtain_end_time",t.curtains.endTime),M.localstorage.set("m_home_curtain_data",(0,a.default)(t));var e='<img id="curtainImg" src="'+t.curtains.pic+'"  class="index-curtain-img-block"  data-url="'+t.curtains.url+'">';$("#"+o.option.curtainBodyDomId).append(e);document.getElementById("curtainImg").onclick=function(t){t.preventDefault(),t.stopPropagation(),o.sendPingData("MHome_Curtain","","1"),localStorage.setItem("m_home_curtain_user_click_img_url",1),o.hiddenCurtain();var e=this;setTimeout(function(){location.href=e.dataset.url},200)}}else{var n=document.getElementById(this.curtainDomId);n&&n.remove()}}},showCurtains:function(){if(this.global_curtain_opt.mHomeCurtainsVersion&&this.global_curtain_opt.mHomeCurtainsVersion==global_curtains_version){var t=M.localstorage.get("m_home_curtain_end_time");if(t&&t<(new Date).getTime()){var e=M.localstorage.get("m_home_user_close_curtains"),n=e&&1==e,i=M.localstorage.get("m_home_curtain_user_click_img_url"),a=i&&1==i;if(n||a);else{var r=M.localstorage.get("m_home_curtain_data");r&&(r=JSON.parse(r),o.renderCurtainPanel(this.global_curtain_opt))}}}else M.localstorage.set("m_home_curtains_version",global_curtains_version),M.localstorage.remove("m_home_user_close_curtains"),M.localstorage.remove("m_home_curtain_end_time"),M.localstorage.remove("m_home_curtain_data"),M.localstorage.remove("m_home_curtain_user_click_img_url"),o.renderCurtainPanel(this.global_curtain_opt)}}},80:function(t,e,n){"use strict";var i=n(4);t.exports={option:{curtainContentDomId:"m_home_curtain_2017_6_5_content",curtainWrapperId:"m_home_curtain_wrapper",curtainHeaderDomId:"m_home_curtain_2017_6_5_header",curtainHeaderCloseBtnDomId:"m_home_curtain_2017_6_5_header_close_btn",curtainBodyDomId:"m_home_curtain_2017_6_5_body",maxWidth:640,minWidht:320,bgColor:"rgba(0, 0, 0, .7)",url:""},requestAjaxData:function(){var t=this;$.ajax({url:this.option.url,type:"get",dataType:"json",data:{},async:!0,success:function(e){t.rendData4Curtain(e)},error:function(e,n){t.hiddenCurtain()}})},rendData4Curtain:function(t){this.showCurtain(t)},showCurtain:function(t,e){var n=document.querySelector("#"+this.option.curtainDomId);if(n)n.style.display="block";else{var i='<div id="'+this.option.curtainDomId+'" class="index-curtain"></div>';$("body").append(i),$("#"+this.option.curtainDomId).append('<div id="'+this.option.curtainContentDomId+'" class="common-box-center common-box-content-vertical-horizontal-center" ></div>'),$("#"+this.option.curtainContentDomId).append('<div id="'+this.option.curtainWrapperId+'" class="index-curtain-wrapper"></div>'),$("#"+this.option.curtainWrapperId).append('<div id="'+this.option.curtainHeaderDomId+'" class="index-curtain-header"></div>'),$("#"+this.option.curtainHeaderDomId).append('<div id="'+this.option.curtainHeaderCloseBtnDomId+'"  class="index-curtain-header-close-btn"></div>'),$("#"+this.option.curtainWrapperId).append('<div id="'+this.option.curtainBodyDomId+'" class="index-curtain-body"></div>'),this.option.callback(t);var a=this,o=document.getElementById(a.option.curtainHeaderCloseBtnDomId);o&&(o.onclick=function(){a.sendPingData(a.option.pingData.closeBtn.eventId,a.option.pingData.closeBtn.eventPara,a.option.pingData.closeBtn.eventLevel),M.localstorage.set("m_home_user_close_curtains",1),a.hiddenCurtain()});var r=document.getElementById(a.option.curtainContentDomId);r&&(r.onclick=function(t){t=t||window.event;var e=t.target||t.srcElement;return e&&e.id==a.option.curtainContentDomId&&(a.sendPingData(a.option.pingData.curtain.eventId,a.option.pingData.curtain.eventPara,a.option.pingData.curtain.eventLevel),localStorage.setItem("m_home_user_close_curtains",1),a.hiddenCurtain()),t.preventDefault(),t.stopPropagation(),!1}),$("#"+a.option.curtainDomId).live("click",function(){a.sendPingData(a.option.pingData.curtain.eventId,a.option.pingData.curtain.eventPara,a.option.pingData.curtain.eventLevel),localStorage.setItem("m_home_user_close_curtains",1),a.hiddenCurtain()}),setTimeout(function(){a.sendPingData(a.option.pingData.curtainShow.eventId,a.option.pingData.curtainShow.eventPara,a.option.pingData.curtainShow.eventLevel)},500)}},hiddenCurtain:function(){var t=document.getElementById(this.option.curtainDomId);t&&t.remove(),window.closeCurtainCallback&&"function"==typeof window.closeCurtainCallback&&window.closeCurtainCallback()},renderCurtainPanel:function(t,e,n){this.option=this.mergeJSONObj(this.option,t),e?this.showCurtain(n):this.requestAjaxData()},uuid:function(){return"M_HOME_"+(new Date).getTime()},sendPingData:function(t,e,n){i.sendMping(t,e,n)},mergeJSONObj:function(t,e){var n={};for(var i in t)n[i]=t[i];for(var i in e)n[i]=e[i];return n}}},9:function(t,e,n){t.exports={default:n(12),__esModule:!0}}});