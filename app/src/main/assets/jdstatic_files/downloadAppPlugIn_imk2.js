var isLoadedImk2=typeof window.imk2Handler=="undefined"?false:true;if(isLoadedImk2){}else{window.BadJSService=(function(){var b;b="https://wq.jd.com/webmonitor/collect/badjs.json?";function a(c,d){var f=d&&c&&d!==""&&c!=="";if(f){var e=new Image();e.src=b+"Content="+encodeURIComponent(" [ "+new Date()+" ] "+d)+"&referer="+encodeURIComponent(c)+"&t="+Math.random()}else{console.warn("The request is rejected by BadJSService as either [kContent] or [kReferer] is null or empty.")}}return{error:a}})();window.IMK2_COMMON_OPTION=(function(){return{imk2AppDownloadURL4Apple:"//st.360buyimg.com/common/downLoadCommon/downLoadAppIOSMPage.html",imk2AppDownloadURL:"//h5.m.jd.com/active/download/download.html?channel=jd-m",imk2OpenAppType:0}})();window.imk2Handler=(function(){var aM=document.URL.toLowerCase();var R=B(aM).params;var ar=R.ad_od;var ah=R.pc_source;var P=navigator.userAgent;var ad=P.match(/Chrome/i)!=null&&P.match(/Version\/\d+\.\d+(\.\d+)?\sChrome\//i)==null?true:false;var Q=(P.match(/(Android);?[\s\/]+([\d.]+)?/))?true:false;var av=(P.match(/(iPad).*OS\s([\d_]+)/))?true:false;var al=(P.match(/(Mac\sOS)\sX\s([\d_]+)/))?true:false;var ae=(!av&&P.match(/(iPhone\sOS)\s([\d_]+)/))?true:false;var am=(ae||av)&&P.match(/Safari/);var y=0;var m=P.match(/(iPhone\sOS)\s([\d_]+)/);var aB=(m&&m.length>2)?(m[2].split("_").length>0?m[2].split("_")[0]:""):"";am&&(y=P.match(/Version\/([\d\.]+)/));try{y=parseFloat(y[1],10)}catch(K){}var P=window.navigator.userAgent,p=false;var p=P.toUpperCase().indexOf("SAMSUNG-SM-N7508V")!=-1;var aj="plugIn_downloadAppPlugIn_loadIframe";var i=false;var ab=0;var aI={};var q={};var ap=null;var an={};var ac=window.Zepto||window.jQuery?true:false;var J=[];var o=window.localStorage?true:false;var aa=Math.floor(Math.random()*100)+1;var C=false;var M=false;if(P.indexOf("baiduboxapp")!=-1&&P.indexOf("light")!=-1){if(((ar&&(ar==1||ar==2||ar==3))||ah)){}else{M=true;C=true}}var Y=false;var t=null;var aK={closeUaAjax:false,keplerAjax:false,configCenterAjax:false};var d={closeUaAjax:null,configCenterAjax:null};var au={AROUSAL_APP:true,DOWNLOAD_LAYER:true,GENERAL_HEAD:true,msf_type:"auto",cooldown_time:0,scheme_prame:"",use_universallinks:true,appDownCloseIntervalTime:0,appDownOpenIntervalTime:0,downAppConfigData:null,isNewUser:false,isOpenWechat:true,sideDownAppConfigData:null,downAppUrl:"http://h5.m.jd.com/active/download/download.html",mediaConfigData:null};var at={mediaTimes:"mediaTimes",stepTime:"stepTime",firstAdChannelURL:"firstAdChannelURL"};var h={"h5.m.jd.com":"&channel=jd-mxz5","pro.m.jd.com":"&channel=jd-mxz5","sale.jd.com":"&channel=jd-mxz2"};var U={keplerID:null,keplerFrom:1,keplerParamJson:null};var l={isUniversalLinksUa:false,isUniversalLinksOs:false,isUseUniversalLinks:false};var O={login_State:false,pcScan_Layer:null,newPeople_Layer:null};var x={url:"https://mapi.m.jd.com/config/display.action?_format_=json&domain="+encodeURIComponent(document.referrer)+(location.href.indexOf("showSide=true")>0?"&showSide=true":""),method:"POST",async:true,timeout:1400,withCredentials:true,hasAjax:"configCenterAjax",hasAjaxSend:false,error:function(){aK.configCenterAjax=true},success:function(aR){aK.configCenterAjax=true;try{aR=JSON.parse(aR);k(aR)}catch(aS){BadJSService.error("https://imk2.jd.com/auto/open/app/configCenter/ajax/success/exception","configCenterAjaxPrame Exception："+aS)}}};var Z={url:"https://so.m.jd.com/downLoad/closeUa.action?_format_=json",method:"POST",async:true,timeout:1200,hasAjax:"closeUaAjax",hasAjaxSend:false,error:function(){aK.closeUaAjax=true},success:function(aR){aK.closeUaAjax=true;try{aR=JSON.parse(aR);if(aR&&aR.ua){aR=JSON.parse(aR.ua);aD(aR)}}catch(aS){BadJSService.error("https://imk2.jd.com/auto/open/app/closeUaAjaxPrame/ajax/success/exception","closeUaAjaxPrame Exception："+aS)}}};function B(aR){var e=document.createElement("a");e.href=aR;return{source:aR,protocol:e.protocol.replace(":",""),host:e.hostname,port:e.port,query:e.search,params:(function(){var aU={},aT=e.search.replace(/^\?/,"").split("&"),aS=aT.length,aV=0,aW;for(;aV<aS;aV++){if(!aT[aV]){continue}aW=aT[aV].split("=");aU[aW[0]]=aW[1]}return aU})(),file:(e.pathname.match(/\/([^\/?#]+)$/i)||[,""])[1],hash:e.hash.replace("#",""),path:e.pathname.replace(/^([^\/])/,"/$1"),relative:(e.href.match(/tps?:\/\/[^\/]+(.+)/)||[,""])[1],segments:e.pathname.replace(/^\//,"").split("/")}}function aG(){var aR=new Date();var aS=aR.getFullYear();var aT=aR.getMonth()+1;var e=aR.getDate();strDate=aS+"-"+aT+"-"+e;return strDate}function aE(aS,aR,e){if(ac){ap("#"+aS).bind(aR,e)}else{ap("#"+aS).addEventListener(aR,e,!1)}}function G(e){var aR=(e||"mGen")+(++ab);return aR}if(ac){ap=window.$;an=window.$}else{ap=function(e){if(typeof e=="object"){return e}return document.querySelector(e)};if(!window.$){window.$=an=ap}else{an=window.$}}window.onblur=function(){for(var e=0;e<J.length;e++){clearTimeout(J[e])}};function s(aS){var aR=document.cookie.indexOf(aS+"=");if(aR==-1){return""}aR=aR+aS.length+1;var e=document.cookie.indexOf(";",aR);if(e==-1){e=document.cookie.length}return document.cookie.substring(aR,e)}function aq(aS,aU,e,aV,aT){var aW=aS+"="+escape(aU);if(e!=""){var aR=new Date();aR.setTime(aR.getTime()+e*24*3600*1000);aW+=";expires="+aR.toGMTString()}if(aV!=""){aW+=";path="+aV}if(aT!=""){aW+=";domain="+aT}document.cookie=aW}function W(aS,aV){var aU=null;if(aV){aU={downAppURl:"//h5.m.jd.com/active/download/download.html?channel=jd-m",downAppIos:"https://st.360buyimg.com/common/downLoadCommon/downLoadAppIOSMPage.html",downWeixin:"http://a.app.qq.com/o/simple.jsp?pkgname=com.jingdong.app.mall&g_f=991850",downIpad:"https://itunes.apple.com/cn/app/jing-dong-hd/id434374726?mt=8",downAppIosPage:"//st.360buyimg.com/common/downLoadCommon/downLoadAppIOSMPage.html",inteneUrl:"openapp.jdmobile://virtual?",inteneUrlParams:null,sourceType:"JSHOP_SOURCE_TYPE",sourceValue:"JSHOP_SOURCE_VALUE",M_sourceFrom:"mxz",NoJumpDownLoadPage:false,kepler_param:null,autoOpenAppEventId:"MDownLoadFloat_AppArouse",autoOpenAppEventParam:"",autoOpenIntervalTime:0,autoOpenAppCallback:null,autoOpenAppCallbackSource:null,cookieFlag:null,noJdApp:false,universalLinksUrl:"https://linkst.m.jd.com"}}else{aU={downAppURl:"//h5.m.jd.com/active/download/download.html?channel=jd-m",downAppIos:"https://st.360buyimg.com/common/downLoadCommon/downLoadAppIOSMPage.html",downWeixin:"http://a.app.qq.com/o/simple.jsp?pkgname=com.jingdong.app.mall&g_f=991850",downIpad:"https://itunes.apple.com/cn/app/jing-dong-hd/id434374726?mt=8",downAppIosPage:"//st.360buyimg.com/common/downLoadCommon/downLoadAppIOSMPage.html",inteneUrl:"openapp.jdmobile://virtual?",inteneUrlParams:null,openAppBtnId:"",closePanelBtnId:"",closePanelId:"",openAppCallback:null,openAppCallbackSource:null,closeCallblack:null,closeCallblackSource:null,cookieFlag:null,sourceType:"JSHOP_SOURCE_TYPE",sourceValue:"JSHOP_SOURCE_VALUE",openAppEventId:"MDownLoadFloat_OpenNow",openAppEventParam:"",closePanelEventId:"MDownLoadFloat_Close",closePanelEventParam:"",appDownCloseIntervalTime:0,appDownOpenIntervalTime:0,noRecord:false,isnotWriteOpenAppCookie:false,M_sourceFrom:"mxz",msf_type:"click",NoJumpDownLoadPage:false,kepler_param:null,noJdApp:false,universalLinksUrl:"https://linkst.m.jd.com"}}if(aS){for(var aT in aS){if((aT&&aS[aT])||(aT=="appDownCloseIntervalTime"&&aS[aT]==0)||(aT=="appDownOpenIntervalTime"&&aS[aT]==0)||(aT=="autoOpenIntervalTime"&&aS[aT]==0)){if(aT=="appDownCloseIntervalTime"||aT=="appDownOpenIntervalTime"||aT=="autoOpenIntervalTime"){var aX=/^(-     |\+)?\d+$/;if(aX.test(aS[aT])&&aS[aT]>=0){try{var aR=parseInt(aS[aT],10);aU[aT]=aR}catch(aW){BadJSService.error("https://imk2.jd.com/auto/open/app/convertOptions/intervalTime","ConvertOptions intervalTime："+aW)}}}else{aU[aT]=aS[aT]}}}}return aU}function az(aS){var aV=aQ(aS,true);var aT=aS.universalLinksUrl+"/ul/ul.action?"+aV;if(navigator.userAgent.indexOf("baidubrowser")>=0){window.location.href=aT}else{var aR=document.createElement("a");aR.setAttribute("href",aT);aR.style.display="none";document.body.appendChild(aR);var aU=document.createEvent("HTMLEvents");aU.initEvent("click",!1,!1);aR.dispatchEvent(aU)}}function af(e,aT){var aV=aQ(e);var aS=null;if(av){aS=e.downIpad}else{if(ae){aS=e.downAppIos}else{aS=e.downAppURl}}var aR=function(){if((ad&&Q)||p){var aX=aV;aV=aO(aX);setTimeout(function(){window.location.href=aV},50)}if((am&&y>=9)||al){setTimeout(function(){var aY=document.createElement("a");aY.setAttribute("href",aV);aY.style.display="none";document.body.appendChild(aY);var aZ=document.createEvent("HTMLEvents");aZ.initEvent("click",!1,!1);aY.dispatchEvent(aZ)},0)}else{document.querySelector("#"+aj).src=aV}if(!e.NoJumpDownLoadPage){var aW=Date.now();setTimeout(function(){var aY=setTimeout(function(){aN(aW,aS)},1500);J.push(aY)},100)}};if(au.isOpenWechat&&navigator.userAgent.indexOf("MicroMessenger")>-1){var aU=aV.split("virtual?params=")[1];aU=decodeURIComponent(aU);aU="virtual?params="+encodeURIComponent(aU);new wxOpenApp(aU)}else{aR()}}function aN(aS,aR){var e=Date.now();if(aS&&(e-aS)<5000){window.location.href=aR}}function aQ(aU,aR){var a4=[];var aX=aU.inteneUrlParams;var a2={category:"jump",des:"HomePage"};if(aU.sourceType&&aU.sourceValue){a2.sourceType=aU.sourceType;a2.sourceValue=aU.sourceValue;if(aX&&!aX.sourceType&&!aX.sourceValue){aX.sourceType=aU.sourceType;aX.sourceValue=aU.sourceValue}}if(aU&&aU.M_sourceFrom){if(aR){aU.M_sourceFrom=(aU.M_sourceFrom.indexOf("_UL")>=0)?aU.M_sourceFrom:(aU.M_sourceFrom+"_UL")}a2.M_sourceFrom=aU.M_sourceFrom;if(aX){aX.M_sourceFrom=aU.M_sourceFrom}}if(aX){for(var a3 in aX){if(a3&&aX[a3]){if(Object.prototype.toString.call(aX[a3])==="[object Object]"){a4.push('"'+a3+'":'+JSON.stringify(aX[a3]))}else{a4.push('"'+a3+'":"'+aX[a3]+'"')}}}}else{for(var a3 in a2){if(a3&&a2[a3]){a4.push('"'+a3+'":"'+a2[a3]+'"')}}}if(aU&&aU.msf_type){a4.push('"msf_type":"'+aU.msf_type+'"')}if(U.keplerID){a4.push('"keplerID":"'+encodeURIComponent(U.keplerID)+'"');a4.push('"keplerFrom":"'+U.keplerFrom+'"')}if(U.keplerParamJson){a4.push('"kepler_param":'+encodeURIComponent(U.keplerParamJson))}if(aR){a4.push('"NoJumpDownLoadPage":'+aU.NoJumpDownLoadPage);a4.push('"downAppIos":"'+encodeURIComponent(aU.downAppIos)+'"');a4.push('"locationHref":"'+encodeURIComponent(window.location.href)+'"')}try{var aY=MPing.EventSeries.getSeries();if(aY){var a5=JSON.parse(aY);for(var a3 in a5){if(a3&&a5[a3]){a5[a3]=(a3=="utr"||a3=="umd"||a3=="ucp")?encodeURIComponent(a5[a3]):a5[a3]}}a5.jdv=encodeURIComponent(s("__jdv"));a5.unpl=encodeURIComponent(s("unpl"));a5.mt_xid=encodeURIComponent(s("mt_xid"));a5.mt_subsite=encodeURIComponent(s("mt_subsite"))}var a1={mt_subsite:encodeURIComponent(s("mt_subsite")),__jdv:encodeURIComponent(s("__jdv")),unpl:encodeURIComponent(s("unpl")),__jda:encodeURIComponent(s("__jda"))};aY=JSON.stringify(a5);a4.push('"m_param":'+aY);a4.push('"SE":'+JSON.stringify(a1))}catch(a0){a4.push('"m_param":null');BadJSService.error("https://imk2.jd.com/auto/open/app/getIntentUrl","getIntentUrl() Exception："+a0)}var aT="{"+a4.join(",")+"}";var aW=aU.inteneUrl.split("?");var aS=null;var aZ="";if(au.scheme_prame){aZ="/"+au.scheme_prame}if(aW.length==2&&aW[1]){aS=aW[0]+aZ+"?"+aW[1]+"&params="+aT}else{aS=aW[0]+aZ+"?params="+aT}if(Y){var aV={url:"//ccc-x.jd.com/dsp/op?openapp_url="+encodeURI(aT)+"&openapp_source_type=100",method:"GET",async:true,timeout:1000,error:function(){},success:function(e){}};ay(aV)}return aS}function aO(e){return"intent://m.jd.com/#Intent;scheme="+e+";package=com.jingdong.app.mall;end"}function ag(e){if(e.openAppBtnId&&document.querySelector("#"+e.openAppBtnId)){aI[e.openAppBtnId]=e;if(e&&e.M_sourceFrom&&e.M_sourceFrom=="mxz"){if(e.openAppEventParam){e.openAppEventParam=e.openAppEventParam+"_other_"+window.location.hostname}else{e.openAppEventParam="other_"+window.location.hostname}}L(e.openAppBtnId,e.openAppEventId,e.openAppEventParam);aE(e.openAppBtnId,"click",function(){aw("0");var aU=this.getAttribute("id");var aR=aI[aU];if(!i){var aT=document.createElement("iframe");aT.id=aj;document.body.appendChild(aT);document.getElementById(aj).style.display="none";document.getElementById(aj).style.width="0px";document.getElementById(aj).style.height="0px";i=true}if(aR.openAppCallback){var aS=aR.openAppCallbackSource?aR.openAppCallbackSource:null;aR.openAppCallback.call(this,aS)}f(aR,"appDownOpenIntervalTime");aH(aR);if(l.isUseUniversalLinks&&!aR.noJdApp){az(aR)}else{af(aR)}})}}function a(aR,e){if(aR.closePanelBtnId&&aR.closePanelId&&document.querySelector("#"+aR.closePanelId)&&document.querySelector("#"+aR.closePanelBtnId)){aI[aR.closePanelBtnId]=aR;L(aR.closePanelBtnId,aR.closePanelEventId,aR.closePanelEventParam);if(!e){if(aF(aR)){document.querySelector("#"+aR.closePanelId).style.display="none";if(aR.closeCallblack){var aT=event||window.event;var aS=aR.closeCallblackSource?aR.closeCallblackSource:null;aR.closeCallblack.call(this,aS,aT)}return}else{document.querySelector("#"+aR.closePanelId).style.display="block"}}aE(aR.closePanelBtnId,"click",function(){var aX=this.getAttribute("id");var aU=aI[aX];f(aU,"appDownCloseIntervalTime");document.querySelector("#"+aU.closePanelId).style.display="none";if(aU.closeCallblack){var aW=event||window.event;var aV=aU.closeCallblackSource?aU.closeCallblackSource:null;aU.closeCallblack.call(this,aV,aW)}})}}function f(aR,e){var aS=null;if(aR.cookieFlag&&aR[e]){aS="downloadAppPlugIn_downCloseDate_"+aR.cookieFlag}else{aS="downloadAppPlugIn_downCloseDate";aR[e]=au[e]}if(!aR.isnotWriteOpenAppCookie&&aR[e]){if(document.domain.indexOf(".m.jd.com")<0&&document.domain!="m.jd.com"){S(aS,aR[e])}else{aq(aS,Date.now()+"_"+aR[e],60,"/",".m.jd.com");aq(aS,Date.now()+"_"+aR[e],60,"/","m.jd.hk")}}}function aF(aT,a1){var a2=s(at.mediaTimes);var e=s(at.stepTime);if(a2&&e){var aV=parseInt(a2);var aU=parseInt(e);if(aV&&aU&&aV>0&aU>0){if(aV%aU==0){return false}}return true}var aW=false;var a0=null;if(a1){if(au.msf_type&&au.msf_type=="auto"){a0=(aT.cookieFlag&&aT.autoOpenIntervalTime)?"autoOpenApp_downCloseDate_"+aT.cookieFlag:"autoOpenApp_downCloseDate_"+au.msf_type}else{a0="autoOpenApp_downCloseDate_"+au.msf_type}if(M||!au.AROUSAL_APP){aW=true}}else{var aS=P.indexOf("jdmsxh");var aX=P.indexOf("jdmsxh2");if(P.indexOf("Html5Plus")>=0||(aS>=0&&aS!=aX)||C||!au.DOWNLOAD_LAYER){aW=true}a0=(aT.cookieFlag&&aT.appDownCloseIntervalTime)?"downloadAppPlugIn_downCloseDate_"+aT.cookieFlag:"downloadAppPlugIn_downCloseDate"}var aY=s(a0);if(!aY&&aK.configCenterAjax&&document.domain.indexOf(".m.jd.com")<0&&document.domain!="m.jd.com"&&t&&t.hasOwnProperty(a0)){aY=t[a0]}var aZ=null;if(aY){aZ=aY.split("_");if(aZ.length==2){aZ[0]=parseInt(aZ[0],10);aZ[1]=parseInt(aZ[1],10)}else{aZ=null}}var aR=Date.now();if(!aW&&!aT.noRecord&&aZ&&aZ.length==2&&(aR-aZ[0])<aZ[1]&&(aT.closePanelBtnId||a1)){aW=true}return aW}function ay(aS){var aR;try{aR=new ActiveXObject("Msxml2.XMLHTTP")}catch(aT){try{aR=new ActiveXObject("Microsoft.XMLHTTP")}catch(aT){aR=new XMLHttpRequest()}}aR.ajaxRunError=true;if(aS.withCredentials){try{aR.withCredentials=true}catch(aT){}}try{aR.open(aS.method,aS.url,aS.async);aR.onreadystatechange=function(){var aU=aS.source?aS.source:null;if(aR.readyState==4){if(aR.status==200){aR.ajaxRunError=false;var e=aR.responseText;aS.success.call(aU,e)}else{aS.error.call(aU)}}};if((ae||av)&&navigator.userAgent.indexOf("QQBrowser")>-1){aR.send("xxxxx=ccccc")}else{aR.send(null)}}catch(aT){}}function I(aR){var aT="MAuthentication";var e=document.createElement("script");var aS=function(){w(e);delete window[aT]};var aU=function(){aS()};window[aT]=function(aV){aR.callback.call(this,aV);aS()};e.onerror=function(){aU()};e.onload=function(){aU()};e.src=aR.url+"&callbackName="+aT;document.getElementsByTagName("head")[0].appendChild(e)}function w(aR){var e=aR.parentNode;if(e){e.removeChild(aR)}}function L(aW,aT,aR){try{var aV=document.getElementById(aW);var aS=aV.className;if(aS){aS=aS+" J_ping"}else{aS="J_ping"}aV.className=aS;aV.setAttribute("report-eventid",aT);if(aR){aV.setAttribute("report-eventparam",aR)}}catch(aU){}}function z(aT,aR){try{var aU=new MPing.inputs.Click(aT);if(aR){aU.event_param=aR}var aS=new MPing();aS.send(aU)}catch(aV){}}function F(aR,aX,a3){var aS=aX?aX:1;var aY=a3?true:false;if(!aF(aR)&&aR.closePanelId){var a4=document.getElementById(aR.closePanelId);if(a4){var a1=a4.getBoundingClientRect();var a2=a1.height||a1.bottom-a1.top;var aW=ai(a4,"opacity");var a0=ai(a4,"display");if(a0&&a2&&a0!="none"&&a2==0){aY=true}else{if(a2&&aW&&a2==50&&aW==0){aY=true}}}else{aY=true}if(aS<3&&aY==false){aS++;setTimeout(function(){F(aR,aS,aY)},2000)}}if(aY){try{var aU=new MPing.inputs.Click("MDownLoadFloat_FloatShield");var aV=new MPing();aU.event_param=aR.openAppEventId;aV.send(aU);var aT={url:"//so.m.jd.com/downLoad/checkShield.action?_format_=json",method:"POST",async:true,timeout:1000,error:function(){},success:function(e){}};ay(aT)}catch(aZ){BadJSService.error("https://imk2.jd.com/auto/open/app/checkShield","checkShield() Exception："+aZ)}}}function ai(aR,e){if(aR.currentStyle){return aR.currentStyle[e]}else{return document.defaultView.getComputedStyle(aR,false)[e]}}function D(aU,aS){var aT=aS?false:aF(aU.funcPrame);var e=true;if(!aT&&aU&&Object.prototype.toString.apply(aU.ajaxPrame)==="[object Array]"&&aU.ajaxPrame.length>0){aU.ajaxPrameIsArray=true;for(var aR=0;aR<aU.ajaxPrame.length;aR++){if(!aK[aU.ajaxPrame[aR].hasAjax]){e=false;if(!aU.ajaxPrame[aR].hasAjaxSend){ay(aU.ajaxPrame[aR]);aU.ajaxPrame[aR].hasAjaxSend=true}}}}else{if(!aT&&!aK[aU.ajaxPrame.hasAjax]){e=false;if(!aU.ajaxPrame.hasAjaxSend){ay(aU.ajaxPrame);aU.ajaxPrame.hasAjaxSend=true}}}if(e){ak(aU.funcList,aU.funcPrame)}else{b(aU)}}function b(aU,aR){var aT=aR?aR:0;var e=true;if(aU.ajaxPrameIsArray){for(var aS=0;aS<aU.ajaxPrame.length;aS++){if(!aK[aU.ajaxPrame[aS].hasAjax]){e=false;break}}}else{e=aK[aU.ajaxPrame.hasAjax]}if(aU.funcList&&aU.funcList.length>0){if(e){ak(aU.funcList,aU.funcPrame)}else{setTimeout(function(){aT++;if(aT<15){b(aU,aT)}else{ak(aU.funcList,aU.funcPrame)}},100)}}}function ak(e,aS){if(e.length==1&&Object.prototype.toString.apply(e)==="[object Function]"){e(aS)}else{for(var aR=0;aR<e.length;aR++){e[aR](aS)}}}function aD(aW){if(aW){if(aW&&aW.clickCloseUa){var aU=aW.clickCloseUa.split("|");for(var aX=0;aX<aU.length;aX++){var aZ=aU[aX];if(aZ&&P.indexOf(aZ)>=0){C=true;break}}}if(aW&&!C&&aW.closeUaMoreKeys){for(var aX=0;aX<aW.closeUaMoreKeys.length;aX++){var e=aW.closeUaMoreKeys[aX];if(e&&e.uaMoreKeys){var a1=e.uaMoreKeys.split("|");var aY=0;var aV=0;for(var aT=0;aT<a1.length;aT++){var a0=a1[aT];if(a0){aV++}if(a0&&P.indexOf(a0)>=0){aY++}}C=(aV==aY)?true:C}if(C){break}}}if(aW&&aW.autoCloseBrowser){for(var aX=0;aX<aW.autoCloseBrowser.length;aX++){var a0=aW.autoCloseBrowser[aX];if(a0.browser&&a0.abtest&&P.indexOf(a0.browser)>=0){aJ(a0.abtest);break}}}if(!M&&aW&&aW.autoCloseOs){for(var aX=0;aX<aW.autoCloseOs.length;aX++){var a0=aW.autoCloseOs[aX];if(a0.os=="IOS"&&a0.abtest&&(av||ae)){aJ(a0.abtest);break}else{if(a0.os=="Android"&&a0.abtest&&Q){aJ(a0.abtest);break}}}}if(!M&&aW&&aW.autoCloseOsAndBrowser){for(var aX=0;aX<aW.autoCloseOsAndBrowser.length;aX++){var a0=aW.autoCloseOsAndBrowser[aX];if(a0.os&&a0.browser&&a0.abtest&&a0.os=="IOS"&&(av||ae)&&P.indexOf(a0.browser)>=0){aJ(a0.abtest);break}if(a0.os&&a0.browser&&a0.abtest&&a0.os=="Android"&&Q&&P.indexOf(a0.browser)>=0){aJ(a0.abtest);break}}}if(aW&&aW.universalLinksUa){var aR=aW.universalLinksUa.split("|");for(var aX=0;aX<aR.length;aX++){var aZ=aR[aX];if(aZ&&P.indexOf(aZ)>=0&&!Q){l.isUniversalLinksUa=true;break}}}if(aW&&aW.universalLinksOs){var aS=aW.universalLinksOs.split("|");for(var aX=0;aX<aS.length;aX++){var aZ=aS[aX];if(aZ&&aB&&aZ==aB&&aB>8){l.isUniversalLinksOs=true;break}}}if(aW&&aW.appDownCloseIntervalTime){au.appDownCloseIntervalTime=aW.appDownCloseIntervalTime}if(aW&&aW.appDownOpenIntervalTime){au.appDownOpenIntervalTime=aW.appDownOpenIntervalTime}if(P.indexOf("baiduboxapp")!=-1&&P.indexOf("light")!=-1){if(((ar&&(ar==1||ar==2||ar==3))||ah)){}else{M=true;C=true}}}}function k(e){if(e){if(e.data){for(var aS=0;aS<e.data.length;aS++){var aR=e.data[aS];if(aR.compent&&au.hasOwnProperty(aR.compent)){au[aR.compent]=aR.display;if(aR.compent=="AROUSAL_APP"&&aR.msf_type){au.msf_type=aR.msf_type;if(e.cooldown&&e.cooldown[aR.msf_type]){au.cooldown_time=e.cooldown[aR.msf_type]}if(aR.openAppParam){au.scheme_prame=aR.openAppParam}if(aR.hasOwnProperty("isSpportUL")&&!aR.isSpportUL){au.use_universallinks=false}}}}}if(e.kepler){if(e.kepler.kepler_data&&e.kepler.kepler_data.keplerID&&e.kepler.kepler_data.keplerFrom){U.keplerID=e.kepler.kepler_data.keplerID;U.keplerFrom=e.kepler.kepler_data.keplerFrom}if(e.kepler.kepler_param){U.keplerParamJson=JSON.stringify(e.kepler.kepler_param)}}if(e.isNewUser){au.isNewUser=true}if(e.loginState){O.login_State=e.loginState}if(e.shieldingLayer){O.pcScan_Layer=e.shieldingLayer.pcScan_Layer||"";O.newPeople_Layer=e.shieldingLayer.newPeople_Layer||""}if(e.openSendOutUrl){Y=e.openSendOutUrl}if(e.coolDownTimeUtil){t=e.coolDownTimeUtil}if(e.downAppConfigData){au.downAppConfigData=e.downAppConfigData}au.isOpenWechat=e.isOpenWechat?true:false;if(e.sideDownAppConfigData){au.sideDownAppConfigData=e.sideDownAppConfigData}if(e.downAppUrl){au.downAppUrl=e.downAppUrl}if(e.mediaConfigData){au.mediaConfigData=e.mediaConfigData}}}function r(){try{var aS;var aV;var aW=navigator.userAgent;if(au.sideDownAppConfigData){aS=au.sideDownAppConfigData;if(aS.closeUa){aV=aS.closeUa.split("|");for(var aT=0,aR=aV.length;aT<aR;aT++){if(aV[aT].trim()==""){continue}if(aW.indexOf(aV[aT].trim())>-1){return}}}H(au)}}catch(aU){}}function X(){this.addEventListener("touchstart",function(e){v.preventDefault(e);e.stopPropagation()});this.addEventListener("touchmove",function(aR){aR.preventDefault(aR);aR.stopPropagation();this.style.transition="";var aS=aR.changedTouches[0].clientX>=0&&aR.changedTouches[0].clientX<(document.documentElement.clientWidth-this.offsetWidth);var e=aR.changedTouches[0].clientY>=0&&aR.changedTouches[0].clientY<(document.documentElement.clientHeight-this.offsetHeight);if(aS||e){this.style.left=(aR.changedTouches[0].clientX)+"px";this.style.top=(aR.changedTouches[0].clientY)+"px"}});this.addEventListener("touchend",function(){var aT=5;var aU=this.getBoundingClientRect().left+this.offsetWidth/2;if(document.documentElement.clientWidth/2>=aU){this.style.left=aT+"PX"}else{this.style.left=(document.documentElement.clientWidth-this.offsetWidth-aT)+"PX"}var aS=this.getBoundingClientRect();var aR=document.documentElement.clientHeight-this.offsetHeight-aT;if(aS.top<=0){this.style.top=aT+"PX"}else{if(aS.top>=aR){this.style.top=aR+"PX"}}var e=document.documentElement.clientWidth-this.offsetWidth-aT;if(aS.left<=0){this.style.left=aT+"PX"}else{if(aS.left>=e){this.style.left=e+"PX"}}this.style.transition="left 50ms ease-in"})}function T(){var aS=".side-shine{position: absolute; left: 0; top: 0;z-index: 9999; width: 200%; height: 0px;box-shadow: 0 0 0 4PX rgba(255, 255, 255, .3); background-color: rgba(255, 255, 255, .3);transform-origin: right; animation: sideShine 1200ms infinite;} @keyframes sideShine { 0%{ transform: translate3d(-80px, 0, 1px) rotate(-45deg); } 100%{ transform: translate3d(80px, 0, 1px) rotate(-45deg); } } ";var aT=document.getElementsByTagName("head");if(aT[0]){var e=document.createElement("style");e.innerHTML=aS;aT[0].appendChild(e);var aR=document.createElement("div");aR.classList.add("side-shine");this.appendChild(aR)}}function H(aS){var aU=aS.sideDownAppConfigData;var aX;var aZ;var aT;var aR;var aY;try{aX=new Image();aX.src=aU.iconUrl;aX.style="display: block; width: 100%;";aU.jumpOpt?aY=aU.jumpOpt:"";aT=document.getElementById("imk2Side");if(!aT){aT=document.createElement("div");aT.id="imk2Side";aT.appendChild(aX);aT.style="position: fixed;  right: "+aU.positionX+";  top: "+aU.positionY+"; width: "+aU.width+"; overflow: hidden;   border-radius: 6PX;z-index: 999999;  background: transparent;";document.body.appendChild(aT);var a0=window.getComputedStyle(aT,null).left;a0=a0.replace("px","");if(a0<=0){aT.style.right=(document.documentElement.clientWidth-aT.offsetWidth-5)+"PX"}}T.call(aT,null);X.apply(aT,null);var aW=V();$.downloadAppPlugIn({openAppBtnId:"imk2Side",inteneUrlParams:aW,msf_type:"click",downAppURl:"//h5.m.jd.com/active/download/download.html?"+aY,downAppIos:"https://st.360buyimg.com/common/downLoadCommon/downLoadAppIOSMPage.html?"+aY,downWeixin:"http://a.app.qq.com/o/simple.jsp?pkgname=com.jingdong.app.mall&g_f=991850"+aY,downIpad:"https://itunes.apple.com/cn/app/jing-dong-hd/id434374726?mt=8"+aY,downAppIosPage:"//st.360buyimg.com/common/downLoadCommon/downLoadAppIOSMPage.html?"+aY});if(aU.pingData&&aT){aT.addEventListener("click",function(){z(aU.pingData.eventId)})}}catch(aV){}}function n(e,aT){var aR;if(e&&e.indexOf("?")>-1){var aS=e.split("?");if(aS[1]&&aS[1].indexOf("channel=")>-1){if(aS[1].indexOf("?&")>-1){aS[1]=aS[1].replace("?&","?")}if(aS[1].indexOf("&")>-1){aR=e.replace(/channel=[a-zA-Z0-9_%-]*&/ig,aT+"&")}else{aR=aS[0]+"?"+aT}}else{aR=aS[0]+"?"+aS[1]+aT}}else{aR=e+"?"+aT}return aR}function V(){var aW={};var aV=location.host;function aT(){var aZ=c();var aY=aZ.shopId;var aX={category:"jump",des:"jshopMain",shopId:aY,sourceType:"M_sourceFrom",sourceValue:"dpauto"};return aX}function aS(){var aY="";var aZ=location.pathname.split("/");if(aZ&&aZ.length>0){aY=pathsp[aZ.length-1]}var aX={category:"jump",des:"productDetail",skuId:aY};return aX}function aR(){var aX={action:"to",category:"jump",des:"getCoupon",url:encodeURIComponent("http://h5.m.jd.com/active/download/download.html")};return aX}function e(){var aX={category:"jump",des:"m",sourceValue:"babel-act",sourceType:"babel",url:encodeURIComponent(location.href)};return aX}function aU(){var aX={category:"jump",des:"DM",dmurl:location.href,sourceType:"sale-act",sourceValue:"Sale"};return aX}switch(aV){case"shop.m.jd.com":aW=aT();break;case"item.m.jd.com":aW=aS();break;case"h5.m.jd.com":aW=aR();break;case"pro.m.jd.com":aW=e();break;case"sale.jd.com":aW=aU();break}return aW}function aA(e){if(!aF(e,true)){if(au.msf_type&&au.msf_type=="auto"){if(e.cookieFlag&&e.autoOpenIntervalTime){cookieName="autoOpenApp_downCloseDate_"+e.cookieFlag}else{cookieName="autoOpenApp_downCloseDate_"+au.msf_type;e.autoOpenIntervalTime=au.cooldown_time}}else{cookieName="autoOpenApp_downCloseDate_"+au.msf_type;e.autoOpenIntervalTime=au.cooldown_time}if(e.autoOpenIntervalTime){if(document.domain.indexOf(".m.jd.com")<0&&document.domain!="m.jd.com"){S(cookieName,e.autoOpenIntervalTime)}else{aq(cookieName,Date.now()+"_"+e.autoOpenIntervalTime,60,"/",".m.jd.com");aq(cookieName,Date.now()+"_"+e.autoOpenIntervalTime,60,"/","m.jd.hk")}}aH(e);if(e&&e.M_sourceFrom&&e.M_sourceFrom=="mxz"){if(e.autoOpenAppEventParam){e.autoOpenAppEventParam=e.autoOpenAppEventParam+"_other_"+window.location.hostname}else{e.autoOpenAppEventParam="other_"+window.location.hostname}}z(e.autoOpenAppEventId,e.autoOpenAppEventParam);e.msf_type=au.msf_type;if(e.autoOpenAppCallback){var aR=e.autoOpenAppCallbackSource?e.autoOpenAppCallbackSource:null;e.autoOpenAppCallback.call(this,aR)}af(e,true)}}function aJ(e){if(e&&aa<=e){M=true}}function aH(e){if(e&&e.kepler_param){U.keplerParamJson=e.kepler_param}if(U.keplerParamJson){z("MDownLoadFloat_ArouseParam",U.keplerParamJson)}}function aL(e){if(l.isUniversalLinksOs&&l.isUniversalLinksUa&&!e.noJdApp&&e.universalLinksUrl&&au.use_universallinks){l.isUseUniversalLinks=true}}function aw(e){window.IMK2_COMMON_OPTION.imk2OpenAppType=e}function g(){return window.IMK2_COMMON_OPTION.imk2OpenAppType=="1"?true:false}an.isAutoOpenJDApp=g;function S(aU,aT){try{var aR=[];aR.push('"'+aU+'":"'+Date.now()+"_"+aT+'"');I({url:"//mapi.m.jd.com/cookie/addCookie.action?cookiePrame={"+aR.join(",")+"}",callback:function(){}})}catch(aS){BadJSService.error("https://imk2.jd.com/auto/open/app/addCookieByJsonp","addCookieByJsonp() Exception："+aS)}}function ao(aR){var aT="";var aS={downloadAppContentBtn:"立即打开",downloadAppContentBtnStyle:"",downloadAppContentDown:"新人领188元红包",downloadAppContentDownStyle:"",downloadAppContentUP:"打开京东APP购物",downloadAppContentUpStyle:"",downloadAppImg:"//st.360buyimg.com/common/commonH_B/images/2015/download-bg.png",downloadApplogo:"//st.360buyimg.com/common/commonH_B/images/2015/top-jdlogo.png"};if((aR.downAppConfigData&&au.downAppConfigData&&au.downAppConfigData.hasOwnProperty("highPriority")&&!au.downAppConfigData.highPriority)||(aR.downAppConfigData&&!au.downAppConfigData)){aS.downloadAppContentBtn=aR.downAppConfigData.downloadAppContentBtn||"立即打开";aS.downloadAppContentBtnStyle=aR.downAppConfigData.downloadAppContentBtnStyle||"";aS.downloadAppContentDown=aR.downAppConfigData.downloadAppContentDown||"新人领188元红包";aS.downloadAppContentDownStyle=aR.downAppConfigData.downloadAppContentDownStyle||"";aS.downloadAppContentUP=aR.downAppConfigData.downloadAppContentUP||"打开京东APP购物";aS.downloadAppContentUpStyle=aR.downAppConfigData.downloadAppContentUpStyle||"";aS.downloadAppImg=aR.downAppConfigData.downloadAppImg||"//st.360buyimg.com/common/commonH_B/images/2015/download-bg.png";aS.downloadApplogo=aR.downAppConfigData.downloadApplogo||"//st.360buyimg.com/common/commonH_B/images/2015/top-jdlogo.png"}else{if(au.downAppConfigData){aS.downloadAppContentBtn=au.downAppConfigData.downloadAppContentBtn||"立即打开";aS.downloadAppContentBtnStyle=au.downAppConfigData.downloadAppContentBtnStyle||"";aS.downloadAppContentDown=au.downAppConfigData.downloadAppContentDown||"新人领188元红包";aS.downloadAppContentDownStyle=au.downAppConfigData.downloadAppContentDownStyle||"";aS.downloadAppContentUP=au.downAppConfigData.downloadAppContentUP||"打开京东APP购物";aS.downloadAppContentUpStyle=au.downAppConfigData.downloadAppContentUpStyle||"";aS.downloadAppImg=au.downAppConfigData.downloadAppImg||"//st.360buyimg.com/common/commonH_B/images/2015/download-bg.png";aS.downloadApplogo=au.downAppConfigData.downloadApplogo||"//st.360buyimg.com/common/commonH_B/images/2015/top-jdlogo.png"}}if(aR.location){var e=aR.location;aT=' style = "'+e+'"'}var aU='	<div  id="'+aR.tipId+'_div" '+aT+' class="download-pannel download-noBg">	    <div class="pannel-bg"><img src="'+aS.downloadAppImg+'"></div>	    <div id="'+aR.tipId+'_x" class="download-close"><img src="//st.360buyimg.com/common/commonH_B/images/2015/icon-close.png"></div>	    <div class="download-logo"><img src="'+aS.downloadApplogo+'"></div>	    <div class="download-txt">	            <span class="download-content">	                <em style="'+aS.downloadAppContentUpStyle+'" class="content-up">'+aS.downloadAppContentUP+'</em>	                <em style="'+aS.downloadAppContentDownStyle+'" class="content-down">'+aS.downloadAppContentDown+'</em>	            </span>	    </div>	    <div id="'+aR.tipId+'_trynow" class="download-action">	        <span style="'+aS.downloadAppContentBtnStyle+'" class="font-large">'+aS.downloadAppContentBtn+"</span>	    </div>	</div>";return aU}function N(aT){if(aT){aT.downloadAppPlugIn=aT.downloadAppPlugIn?aT.downloadAppPlugIn:{};aT.downloadAppPlugIn.openAppBtnId=aT.tipId+"_trynow";aT.downloadAppPlugIn.closePanelBtnId=aT.tipId+"_x";aT.downloadAppPlugIn.closePanelId=aT.tipId+"_div";var aU=W(aT.downloadAppPlugIn);if(!aF(aU)){var aW=ao(aT);document.getElementById(aT.tipId).innerHTML=aW;if(aT.callFunShowTip){aT.callFunShowTip.call(this)}aE(aT.tipId+"_x","click",function(){if(aT.onClickTipX){aT.onClickTipX.call(this)}});aE(aT.tipId+"_trynow","click",function(){if(aT.onClickTrynow){aT.onClickTrynow.call(this)}});var aR=aT.downloadAppPlugIn.downAppURl;var aS=U.keplerParamJson;aR=(aR.indexOf("M_sourceFrom")>=0)?aR:(aR+"&M_sourceFrom="+aT.downloadAppPlugIn.M_sourceFrom);aR=(aR.indexOf("isneworold")<0&&au.isNewUser)?(aR+"&isneworold=new"):aR;try{aS=JSON.parse(aS)}catch(aV){BadJSService.error("https://imk2.jd.com/auto/open/app/downAppHandle","downAppHandle() Exception："+aV)}if(aS&&aS.source&&aS.channel){aR=(aR.indexOf("kplsource")>=0)?aR:(aR+"&kplsource="+aS.source);aR=(aR.indexOf("kplchannel")>=0)?aR:(aR+"&kplchannel="+aS.channel)}aT.downloadAppPlugIn.downAppURl=aR;aC(aT.downloadAppPlugIn)}}}function aC(e){var aR=W(e);ag(aR);var aS={ajaxPrame:[Z,x],funcList:[aL,a,F],funcPrame:aR};D(aS)}an.downloadAppPlugIn=aC;an.downloadAppPlugInOpenApp=function(e){aw("1");var aR=W(e,true);if(!i){var aS=document.createElement("iframe");aS.id=aj;document.body.appendChild(aS);document.getElementById(aj).style.display="none";document.getElementById(aj).style.width="0px";document.getElementById(aj).style.height="0px";i=true}var aT={ajaxPrame:[Z,x],funcList:aA,funcPrame:aR};D(aT,true)};an.downloadAppLayerConfigData=function(e){var aR={ajaxPrame:[Z,x],funcList:[N],funcPrame:e};D(aR)};function c(aT){var aR={};var aV=aT.split("?")[1];if(aV){var e=aV.split("&");for(var aU=0;aU<e.length;aU++){var aS=e[aU].split("=");aR[aS[0]]=aS[1]}}return aR}function aP(aT,aV,aR,aX,aU){try{var aY=aT+"="+escape(aV);if(aR!=""){var aS=new Date();aS.setTime(aS.getTime()+aR*1000);aY+=";expires="+aS.toGMTString()}if(aX!=""){aY+=";path="+aX}if(aU!=""){aY+=";domain="+aU}document.cookie=aY}catch(aW){}}function j(){var e=s(at.mediaTimes);var aR=s(at.stepTime);var aU=parseInt(e);var aS=parseInt(aR);if(aU&&aS&&aU>0&aS>0){if(aU%aS==0){var aT=V();$.downloadAppPlugInOpenApp({inteneUrlParams:aT})}}else{return}}function A(){var e=document.createElement("div");e.setAttribute("id","_aDChannelMark");e.style.position="fixed";e.style.zIndex=100000;e.style.width="1px";e.style.height="1px";e.style.backgroundColor="rgba(0, 0, 255 , .5)";e.style.left="2px";e.style.bottom="2px";document.body.appendChild(e)}function E(){var e=document.getElementById("_aDChannelMark");if(e){e.remove()}}function ax(){var aV;var aS=au.mediaConfigData.stepTimesLifeTime;try{var aU=c(location.href);if(aU.ad_od&&aU.ad_od=="0"&&aU.stepTime){aV=s(at.firstAdChannelURL);if(aV){if(unescape(aV)==location.href){var aR=s(at.mediaTimes);aP(at.mediaTimes,parseInt(aR)+1,aS,"/",".jd.com");aP(at.stepTime,aU.stepTime,aS,"/",".jd.com");A();j()}else{aP(at.firstAdChannelURL,location.href,aS,"/",".jd.com");aP(at.mediaTimes,1,aS,"/",".jd.com");aP(at.stepTime,aU.stepTime,aS,"/",".jd.com");A()}}else{aP(at.firstAdChannelURL,location.href,aS,"/",".jd.com");aP(at.mediaTimes,1,aS,"/",".jd.com");aP(at.stepTime,aU.stepTime,aS,"/",".jd.com");A()}}else{var aR=s(at.mediaTimes);var aT=s(at.stepTime);if(aR&&aT){aP(at.mediaTimes,parseInt(aR)+1,aS,"/",".jd.com");aP(at.stepTime,aT,aS,"/",".jd.com");A();j()}else{E()}}}catch(aW){console.log(aW)}}function u(e){var aR={ajaxPrame:[x],funcList:[r,ax],funcPrame:{}};D(aR,true)}return{immediateExecutionFun:u}})();window.imk2Handler.immediateExecutionFun();(function(c,a){var b=a(c);c.wxOpenApp=b;if(typeof module=="object"&&module.exports){module.exports=b}})(window,function(b){var a=function(d,c){this.init(d,c)};a.prototype={init:function(d,c){this.cb=c;this.param=d;this.scheme="openapp.jdmobile";this.appId="wxe75a2e68877315fb";this.packageName="com.jingdong.app.mall";this.packageUrl="openApp.jdMobile://";this.configUrl="//wq.jd.com/bases/jssdk/GetWxJsApiSign?url="+encodeURIComponent(location.href.split("#")[0])+"&callback=callback";this.loadWxJsSdk()},loadWxJsSdk:function(){var d=this;var c="//res.wx.qq.com/open/js/jweixin-1.2.0.js";if("function"==typeof define&&(define.amd||define.cmd)){try{require([c],function(e){b.wx=e;d.requestConfig()})}catch(g){BadJSService.error("https://imk2.jd.com/auto/open/app/wechat/jweixin/load","amd or cmd load -- wxJsSdk( "+c+" ) load fail!!! , e = "+g+" CurrentURL = "+location.href)}}else{var f=document.createElement("script");f.src=c;document.body.appendChild(f);f.onload=f.onreadystatechange=function(){if(!this.readyState||this.readyState==="loaded"||this.readyState==="complete"){if(typeof wx=="undefined"){console.error("wxJsSdk( "+c+" ) load fail!");BadJSService.error("https://imk2.jd.com/auto/open/app/wechat/jweixin/load","script tag load ---  wxJsSdk( "+c+" ) load fail!!! CurrentURL = "+location.href);return}d.requestConfig();f.onload=f.onreadystatechange=null}}}},requestConfig:function(){var c=this;c.JSONP(c.configUrl,function(d){c.openApp(d)})},openApp:function(d){var c=this;wx.config({beta:true,debug:false,appId:d.appId,timestamp:d.timestamp,nonceStr:d.nonceStr,signature:d.signature,jsApiList:["checkJsApi","getInstallState","launchApplication"]});wx.ready(function(){wx.checkJsApi({jsApiList:["getInstallState","launchApplication"],success:function(e){if(e.checkResult.getInstallState&&e.checkResult.launchApplication){wx.invoke("getInstallState",{packageName:c.packageName,packageUrl:c.packageUrl},function(f){if(f.err_msg&&f.err_msg.indexOf("get_install_state:yes")>-1){wx.invoke("launchApplication",{appID:c.scheme,parameter:c.param},function(g){if(g){if(g.err_msg&&g.err_msg.indexOf("fail")>-1){BadJSService.error("https://imk2.jd.com/auto/open/app/wechat/invoke/result","wechat launchApplication method：falil!  res = "+JSON.stringify(g)+"。 res = "+JSON.stringify(g)+" ,   CurrentURL = "+location.href);if(!$.isAutoOpenJDApp()){setTimeout(function(){if(navigator.userAgent.match(/(Android);?[\s\/]+([\d.]+)?/)){location.href=b.IMK2_COMMON_OPTION.imk2AppDownloadURL}else{location.href=b.IMK2_COMMON_OPTION.imk2AppDownloadURL4Apple}},200)}}else{}}else{BadJSService.error("https://imk2.jd.com/auto/open/app/wechat/invoke/result","wechat launchApplication method ：Exception! res = "+JSON.stringify(g)+" ,   CurrentURL = "+location.href)}})}else{if(f.err_msg&&f.err_msg.indexOf("get_install_state:no")>-1){BadJSService.error("https://imk2.jd.com/auto/open/app/wechat/invoke/result","wechat getInstallState method res.err_msg ："+f.err_msg+"  ,   CurrentURL = "+location.href);if(!$.isAutoOpenJDApp()){setTimeout(function(){if(navigator.userAgent.match(/(Android);?[\s\/]+([\d.]+)?/)){location.href=b.IMK2_COMMON_OPTION.imk2AppDownloadURL}else{location.href=b.IMK2_COMMON_OPTION.imk2AppDownloadURL4Apple}},200)}}else{if(f.err_msg&&f.err_msg.indexOf("missing auguments")>-1){BadJSService.error("https://imk2.jd.com/auto/open/app/wechat/invoke/result","wechat getInstallState method  res.err_msg ："+f.err_msg+"  ,   CurrentURL = "+location.href)}else{BadJSService.error("https://imk2.jd.com/auto/open/app/wechat/invoke/result","wechat getInstallState method res.err_msg ："+f.err_msg+"  ,   CurrentURL = "+location.href)}}}})}else{if(typeof this.cb=="function"){this.cb()}}}})})},JSONP:function(e,h){var d=function(){return(new Date()).getTime()};var g=function(){return Math.random().toString().substr(2)};var i=function(k){var j=k.parentNode;if(j&&j.nodeType!==11){j.removeChild(k)}};var c=function(l){var j="";if(typeof l==="string"){j=l}else{if(typeof l==="object"){for(var k in l){j+="&"+k+"="+encodeURIComponent(l[k])}}}j+="&_time="+d();j=j.substr(1);return j};var f=function(m,o){var l;var k=/callback=(\w+)/.exec(m);if(k&&k[1]){l=k[1]}else{l="jsonp_"+d()+"_"+g();m=m.replace("callback=?","callback="+l);m=m.replace("callback=%3F","callback="+l)}var j=document.createElement("script");j.type="text/javascript";j.src=m;j.id="id_"+l;b[l]=function(p){b[l]=undefined;var q=document.getElementById("id_"+l);i(q);o(p)};var n=document.getElementsByTagName("head");if(n&&n[0]){n[0].appendChild(j)}};f(e,h)}};return a})};