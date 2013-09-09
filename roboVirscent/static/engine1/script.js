/*
 * jQuery Nivo Slider v2.3 fixed 2
 * http://nivo.dev7studios.com
 *
 * Copyright 2010, Gilbert Pellegrom
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Jan 2011 fixed by wowslider.com - random effect selecting bug
 * Dec 2010 fixed by wowslider.com - added position:absolute to slice elements, added nivoRun external function to manual start
 * May 2010 - Pick random effect from specified set of effects by toronegro
 * May 2010 - controlNavThumbsFromRel option added by nerd-sh
 * May 2010 - Do not start nivoRun timer if there is only 1 slide by msielski
 * April 2010 - controlNavThumbs option added by Jamie Thompson (http://jamiethompson.co.uk)
 * March 2010 - manualAdvance option added by HelloPablo (http://hellopablo.co.uk)
 */
//////////////////////////////////////////////
// Obfuscated by Javascript Obfuscator 4.2  //
// http://javascript-source.com             //
//////////////////////////////////////////////
eval((function(x){var d="";var p=0;while(p<x.length){if(x.charAt(p)!="`")d+=x.charAt(p++);else{var l=x.charCodeAt(p+3)-28;if(l>4)d+=d.substr(d.length-x.charCodeAt(p+1)*96-x.charCodeAt(p+2)+3104-l,l);else d+="`";p+=4}}return d})("(function ($) {var NivoSlider = ` 5&element, options` G#settings = $.extend({}, $.fn.n` b%.defaults` V&;var vars = {current` H!:0, ` )#Image:\"\", total` :!s:0, randAnim` 7!running:false, paused` &$stop` &\"}`!-!s`\"3$$`\"+$);` .\".data(\"nivo:vars\",`!Z!` 6%css(\"position\", \"relative\"` :%addClass` `\"`\"U\"\"`\"D\"kids =`!8#.children();kids.each`$!'`#V#` A!`!f!thi`#+#link = \"\";if (!` >!.is(\"img\")) {if (` ,&a` /!` *\"`!P*-imageLink\");` o#` C!;}`!0$` Q\"find` z!:first\");}`!T%Width` A%width()`!U!` 3(= 0`!=$` C*attr(\"` R!` j)Height` >%h` *!` m(` 9$` o'` E+` u\"` T\"\");}`!E+>`$\"$`!m#) {` $)` A&` P(` }#` T%`!Q$` T&` +#` C'` Y#`#]!!= \"\") {link`&*\"display\", \"none\")`#w#` &4vars.`(\"'++;}`\"r\"`)B$.star`(d\" >`\"z!` %5=`'\\!` c() {` 60` 7. - 1`$L!s.`)p( =`*i%` U'`\"\\\"$(kids[` C-])`'3)` 4(`*[!`'|!` C4;} else` 'L`'A0`!A?`(h\"` *7`$F,block\");}`+8(background\", \"url(\" +`#\\\"`!u(`'<#src\") + \") no-repeat\");for (var i = 0; i <`#p'lices; i++`/ $lice`)5$Math.`!<!(`'x* /` T,`&6\"i =`$m(` 5! - 1`'n&append($(\"<div class=\\`+c\"` K!\\\"></div>\"`# \"{left:`!L'* i + \"px\", `!J!:`!M+-`!y(` B(`.l$:\"absolute\"})`%P&` dz` 5$`!-<`&:!`#:%ca`2a!`\"zB` F#\\\"><p></p`!X+`&H#:`*}\", opacity:` },O` 2\"})`$n\"`&84title\")`,C%var ` /!`*^$` :6` s!` '!.substr(0, 1) == \"#\") {` `$$` @\").html();}$(\".`\"@( p\",`.>#` >#` K\";` 9,` <'fadeIn`#Z&animSpeed);}`0v!timer`(I!`36!` @%manualAdvance &&`4G!.leng`0D!1`!t!` U\"setInterval`4A*nivoRun`(i#,` ^!,`(J%, false);}` *&.pauseTime`+u#` 0%dire` u!Nav`%Q-`%M/` D(\\\"><a` 1*prev` 4\"Prev</a` 1-next` <\"Next` =!`&;#`0l*` }(Hide`-G!`$)#` 0(`$P(ide();`2v$over`#+*` A<show(`#4!` *I`!1#}`&6\"a` F\"`\"c#` <'live(\"click\"` s+`(;%running) {return`$f\";}clear`%E%`%]!);`%a$\"\"`4E\"`2p)-= 2;`%J<\"prev\"`!v!`!p&`$;#` x~`!u!`!B=nex`3.!`'*,control`'2\"var nivoC` /\"`*R!`,j0` K%`.V'`%i$`'n#` \\'`2D2`)g'`2N$`!B3Thumbs`!X#child =` Y\"eq(i`'k\"!` 3!.is(\"img\")) {` B$` 4\"find` 7!:firs`\"f!` r9FromRel`+!#`\"##`*(&`)@+` W#\\\" rel=\\\"\" +`14\"\\\"><img src` 0#`!I\"`._\"rel\")` A\" alt=\\\"\\\" /></a>\"`2d&` Fwsrc\").replace`\"S6Search`->'` 1,R` \\\"`!q7`!Ed\" + (i + 1`!(!` v%`0|&`!R% a:eq(\" +`2X)`*2\"+ \")`)P'addClass(\"active\"`1k(` f'`)Gcif ($(this).has`!,+`*,M`)3#css(\"background\", \"url`\"P-Image`%4(`\"h! no-repeat\")`-5/= `!h$`'.(- 1`+X>`#9#`+i0keyboard`+x\"$(window).keypress`1-'event`#U#` '!.keyCode == \"37\"`.~~`/^>`!F39` xa`/:E`#V-pauseOnHover) {`%h#hover`#W'`.;\"` G#d = true;`!6<}`'m+` U*`\"5\"if ` T\"`\"j!\" && !`!T%manualAdvance) {` t$set`!.%` u)`\"H<`!/!);}`,D'`!K!Time`\"w#`\"[#b`0/!nivo:animFinished`),`$J(`\"+%$(kids).each`!R*`*1(is(\"a`*-!` *$`)`!display\", \"none`$N#` S\"kids[`&X-]` ^*` ,5` o,block`&s$`#t,`$@(`#2~`#y7` ,%afterChange.call`#/\";});this`.k!Run =`$6'index, effec`*y$`(k9`!$%` M\" =` U# ||`!T&` -\"`-41`!,!`,vA`\"O#`!8#`(j!};var `!t0` M4nudge`&`\"`/B! =`1<#.data`'8#vars\"`%|\"` ?!&&`2A/==` /\"total` .!s - 1) {`\"N%las` G\"`#q)if ((`%i! ||` ^\"stop)`%p!`!X$`#N3before`$a.if (` S%`10m} else`%G\"`! !`'q!`/!\"` ;p` z*`.c\"` 4p}`$e-++`%-%`$m=`,d$`'B+0;`$E%`!m!showEnd`%2-` J.< 0` ]3`&50` `\"`,c;img`,!`\"i- = ` A6`%(%` )J.f`/}!img:firs`$b%`\"g%controlNav`.R!\"`+}!-` ,& a\",`)H#).removeClass(\"active\");` A1:eq`%/-`#5\"+ \")` i'add` a,`!S+aption`--(`%}/title\") != \"\"`+F#` /!`$C$` :6`4W#tle.substr(0, 1)`'d!#\"`08!` b\"$` @\").html(`!a#`\"T&`!b\"`\"0'`1^)` j\"`1g#`#_(` Q\" p` N'fadeOut`\"Z&animSpeed`4J+`3l$`!L!`!W\";` ,$fadeIn` Q/`1)!`&'$`!+9` k(}`\".7` o8` q3`\")A`*i# i`)!` Z%slice` V'each`4@*var ` A!Width = Math.`,8!`1@#.width() /`2i&` M!s`#8&css({height:\"0px\", opacity:\"0\", `-(&:`,[Q -\" +`2s!`!a$+ i *`!n(-` \"'` Z!px 0%\"});i++;}`'6\"`!x%effect`&D!random`(\"$anims = new Array(\"` s!DownRight\", ` (&Lef` '&Up` 3*Up` 0+` R.` .\"` ?$fol`0-!fade\");`\"|!randAnim =`!U\"[`$;!floor(`$E\"`!z!() * (` =!.leng`\"}!1))]`0(&` `&= undefined`.6$` |'`!9\";}`+N*`#+\".indexOf(\",`+<\"-1`#)+` A,split` J!`!-$.trim`!o\"`!{8`\"*()]);`2S\"running = true`$e5`$B%\" ||`!N,` 4*`$5\" ||`&u\"`#$(` 10` O9`$n!` L;` ?!`.X%meBuff`)z!`)&`)U%s`.0!`* 2`\":>`!\"H` n=._reverse();}` H\"`+<8`0(\"his);` +!`+&\"top:0, bottom:\"`)b!f (i =`%x'`!D#- 1) {setTimeout` {*` o\"animate`+{&100%`+z(1.0\"},` r&`0='\"\"`0=+`-1#trigger(\"nivo:animFinished\"`03\", 100 +`$T%`/:&` ut` 2`%t%+= 50`-($`!E#`%@9Up`'-:`,k$`%a7` 7(` M7`&C<` ;#`'.}` ~H`')~`(#$\"\"`(#%0`')~`')~`')~`'8o`0$>`4W(`%e9`0#C` C\"`&O>`0#Gv`'_f`!*N`'Vw`(*%0`%s%`0P5++`&T&`(j:`#(!}if (v`(-~`(-~`(-~`(q:v`(jAfold`%}3` 6!`'G:`&\"5`%bBvar origWidth =` :\".width(`.e.0px\", `\"~+` H!` 6\"`.Ce` n\"`!P%`$}~`%AZ`!<O`.Egfade`%i4ade`%y$`%?M`%]#`%;!\"`%/\"\", `%1\"`$h=` U$`\"{%`\"Q> * 2`$+W`$L#` bS);}`#f$}`(1!tra`(E!`!B&msg) {if ` }!.console && typeof ` +#.log != \"undefine`)!` 2'` e!;}};` c!stop` {)` ~#!$(element).data`\"S#vars\")` Q!`#b!` %; = true;`\"*!(\"Stop S`#M!\"`!7(art`!00` [dfals`!9'art`!8)`$)&fterLoad.call`,=#};$.fn`'1!` O\"`!])options) {return `\"-!`-(2`!b#`39+` /#`!s'`&M\"\")` l%;}var ` 1& = new N`!J%` j!, `!E$;` [5,` ['`'2\"`\".,.defaults = {`*A\":\"random`)i\"ces:15, `'7%:500, pauseTime:3000, `$p!` n!:0, dire`\"h!Nav:true` %*Hide` 0#ca`\" !` &$ontrol` L&` '&Thumbs:`$w!` &.FromRel` '4Search:\".jpg\"` -.Replace:\"_thumb` ?#keyboard`!D&`\"P!OnHover` ,#manualAdvance`!6%`\"/\"O`*e#0.8, beforeChange:`%_)}, `&e!` %3`$Y!showEnd` ,-las`#o#` ^1Loa` D,`%;#_reverse = [].` &#;})(jQuery);"))// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Last updated: 2011-06-16
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
var ws_slices=function(options){var $=jQuery;var $new_cont;var $Imgs;var $As;var cur_index=0;this.init=function(aCont){var $container=$(aCont);$new_cont=$("<div id=\""+$(aCont).attr("id")+"-new\"></div>");$container.append($new_cont);$As=$(aCont).find("A");$Imgs=$As.find("img");$new_cont.css({left:(options.outWidth-options.width)/2+"px",top:(options.outHeight-options.height)/2+"px",width:options.width+"px",height:options.height+"px",'background-color':"#FFF",position:"absolute"});$new_cont.append($As);slider=$new_cont.nivoSlider({directionNav:false,keyboardNav:false,controlNav:false,manualAdvance:true,caption:0,effect:"sliceDownRight,sliceDownLeft,sliceUpRight,sliceUpLeft,sliceUpDownRight,sliceUpDownLeft,sliceUpDownRight,sliceUpDownLeft,fold,fold,fold",animSpeed:options.duration});$Imgs.css({border:"none"});$Imgs.show();$As.css({'z-index':30,position:"absolute",left:0,top:0});};this.go=function(index){var res=$new_cont.data("nivoslider").nivoRun(index);if(res){$($Imgs.get(cur_index)).hide();$($Imgs.get(index)).show();cur_index=index;}return res;};};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Last updated: 2011-06-16
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.fn.wowSlider=function(options){var $this=this;var $=jQuery;options=$.extend({effect:function(options){var images;this.init=function(aCont){images=aCont.find("img");images.each(function(Index){if(!Index){$(this).show();}else{$(this).hide();}});};this.go=function(new_index,curIdx){$(images.get(new_index)).fadeIn(options.duration);$(images.get(curIdx)).fadeOut(options.duration);return true;};},prev:"",next:"",duration:1000,delay:2000,outWidth:960,outHeight:360,width:960,height:360,caption:true,controls:true,autoPlay:true,bullets:true,onStep:function(){},stopOnHover:0},options);options.loop=options.loop||Number.MAX_VALUE;var $Elements=$this.find(".ws_images A");var images=$Elements.find("IMG");$Elements.each(function(index){var inner=$(this).html()||"";var pos=inner.indexOf(">",inner);if(pos>=0){$(this).data("descr",inner.substr(pos+1));if(pos<inner.length-1){$(this).html(inner.substr(0,pos+1));}}$(this).css({'font-size':0});});var elementsCount=$Elements.length;var frame=$("A.ws_frame",$this).get(0);var curIdx=0;function go(index){index=(index%elementsCount+elementsCount)%elementsCount;if(curIdx==index){return;}var current=effect.go(index,curIdx);if(!current){return;}if(typeof current!="object"){current=$Elements[index];}curIdx=index;go2(index);if(options.caption){setTitle(current);}options.onStep(curIdx);}var startX,startY,isMoving=0;var _this=$this.get(0);if(_this.addEventListener){_this.addEventListener("touchmove",function(e){if(isMoving){var dx=startX-e.touches[0].pageX;var dy=startY-e.touches[0].pageY;if(Math.abs(dx)>20||Math.abs(dy)>20){startX=startY=isMoving=0;forceGo(e,curIdx+(dx+dy>0?-1:1));}}},false);_this.addEventListener("touchstart",function(e){if(e.touches.length==1){startX=e.touches[0].pageX;startY=e.touches[0].pageY;isMoving=1;}else{isMoving=0;}},false);_this.addEventListener("touchend",function(e){isMoving=0;},false);}function go2(index){if(options.bullets){setBullet(index);}if(frame){frame.setAttribute("href",$Elements.get(index).href);frame.setAttribute("target",$Elements.get(index).target);}}var autoPlayTimer;function restartPlay(){stopPlay();if(options.autoPlay){autoPlayTimer=setTimeout(function(){go(curIdx<elementsCount-1?curIdx+1:0);if(!curIdx&&!--options.loop){options.autoPlay=0;}restartPlay();},options.delay+options.duration);}}function stopPlay(){if(autoPlayTimer){clearTimeout(autoPlayTimer);}autoPlayTimer=null;}function forceGo(event,index){stopPlay();event.preventDefault();go(index);restartPlay();}$Elements.find("IMG").css("position","absolute");if(typeof options.effect=="string"){options.effect=window["ws_"+options.effect];}var effect=new options.effect(options,images);effect.init($(".ws_images",$this));$Elements.find("IMG").css("visibility","visible");var ic=c=$(".ws_images",$this);var t="";c=t?$("<div></div>"):0;if(c){c.css({position:"absolute",right:"2px",bottom:"2px",padding:"0 0 0 0"});ic.append(c);}if(c&&document.all){var f=$("<iframe src=\"javascript:false\"></iframe>");f.css({position:"absolute",left:0,top:0,width:"100%",height:"100%",filter:"alpha(opacity=0)"});f.attr({scrolling:"no",framespacing:0,border:0,frameBorder:"no"});c.append(f);}var d=c?$(document.createElement("A")):c;if(d){d.css({position:"relative",display:"block",'background-color':"#E4EFEB",color:"#837F80",'font-family':"Lucida Grande,sans-serif",'font-size':"11px",'font-weight':"normal",'font-style':"normal",'-moz-border-radius':"5px",'border-radius':"5px",padding:"1px 5px",width:"auto",height:"auto",margin:"0 0 0 0",outline:"none"});d.attr({href:"ht"+"tp://"+t.toLowerCase()});d.html(t);d.bind("contextmenu",function(eventObject){return false;});c.append(d);}if(options.controls){var $next_photo=$("<a href=\"#\" class=\"ws_next\">"+options.next+"</a>");var $prev_photo=$("<a href=\"#\" class=\"ws_prev\">"+options.prev+"</a>");$this.append($next_photo);$this.append($prev_photo);$next_photo.bind("click",function(e){forceGo(e,curIdx+1);});$prev_photo.bind("click",function(e){forceGo(e,curIdx-1);});}function initBullets(){var $bullets_cont=$this.find(".ws_bullets>div");var $bullets=$("a",$bullets_cont);$bullets.click(function(e){forceGo(e,$(e.target).index());});var $thumbs=$bullets.find("IMG");if($thumbs.length){var mainFrame=$("<div class=\"ws_bulframe\"/>").appendTo($bullets_cont);var imgContainer=$("<div/>").css({width:$thumbs.length+1+"00%"}).appendTo($("<div/>").appendTo(mainFrame));$thumbs.appendTo(imgContainer);$("<span/>").appendTo(mainFrame);var curIndex=-1;function moveTooltip(index){if(index<0){index=0;}$($bullets.get(curIndex)).removeClass("ws_overbull");$($bullets.get(index)).addClass("ws_overbull");mainFrame.show();var mainCSS={left:$bullets.get(index).offsetLeft-mainFrame.width()/2};var contCSS={left:-$thumbs.get(index).offsetLeft};if(curIndex<0){mainFrame.css(mainCSS);imgContainer.css(contCSS);}else{if(!document.all){mainCSS.opacity=1;}mainFrame.stop().animate(mainCSS,"fast");imgContainer.stop().animate(contCSS,"fast");}curIndex=index;}$bullets.hover(function(){moveTooltip($(this).index());});var hideTime;$bullets_cont.hover(function(){if(hideTime){clearTimeout(hideTime);hideTime=0;}moveTooltip(curIndex);},function(){$bullets.removeClass("ws_overbull");if(document.all){if(!hideTime){hideTime=setTimeout(function(){mainFrame.hide();hideTime=0;},400);}}else{mainFrame.stop().animate({opacity:0},{duration:"fast",complete:function(){mainFrame.hide();}});}});$bullets_cont.click(function(e){forceGo(e,$(e.target).index());});}}function setBullet(new_index){$(".ws_bullets A",$this).each(function(index){if(index==new_index){$(this).addClass("ws_selbull");}else{$(this).removeClass("ws_selbull");}});}if(options.caption){$caption=$("<div class='ws-title' style='display:none'></div>");$this.append($caption);$caption.bind("mouseover",function(e){stopPlay();});$caption.bind("mouseout",function(e){restartPlay();});}function setTitle(A){var title=$("img",A).attr("title");var descr=$(A).data("descr");var $Title=$(".ws-title",$this);$Title.hide();if(title||descr){$Title.html((title?"<span>"+title+"</span>":"")+(descr?"<div>"+descr+"</div>":""));showWithSlide($Title,{direction:"left",easing:"easeInOutExpo",complete:function(){if($.browser.msie){$Title.get(0).style.removeAttribute("filter");}},duration:1000});}}if(options.bullets){initBullets();}go2(0);if(options.caption){setTitle($Elements[0]);}if(options.stopOnHover){this.bind("mouseover",function(e){stopPlay();});this.bind("mouseout",function(e){restartPlay();});}restartPlay();function showWithSlide(element,options){var $=jQuery;element.stop(true,true);var bkp_prop={};var props=["position","top","bottom","left","right"];for(var i=0;i<props.length;i++){bkp_prop[props[i]]=element[0].style[props[i]];}element.show();var wrap_props={width:element.outerWidth(true),height:element.outerHeight(true),'float':element.css("float"),overflow:"hidden",opacity:0},wrapper=$("<div></div>").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0});element.wrap(wrapper);wrapper=element.parent();if(element.css("position")=="static"){wrapper.css({position:"relative"});element.css({position:"relative"});}else{$.extend(wrap_props,{position:element.css("position"),zIndex:element.css("z-index")});$.each(["top","left","bottom","right"],function(i,pos){wrap_props[pos]=element.css(pos);if(isNaN(parseInt(wrap_props[pos],10))){wrap_props[pos]="auto";}});element.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"});}wrapper.css(wrap_props).show();var direction=options.direction||"left";var ref=direction=="up"||direction=="down"?"top":"left";var motion=direction=="up"||direction=="left"?"pos":"neg";var distance=options.distance||(ref=="top"?element.outerHeight({margin:true}):element.outerWidth({margin:true}));element.css(ref,motion=="pos"?isNaN(distance)?"-"+distance:-distance:distance);var animation={};animation[ref]=(motion=="pos"?"+=":"-=")+distance;wrapper.animate({opacity:1},{duration:options.duration,easing:options.easing});element.animate(animation,{queue:false,duration:options.duration,easing:options.easing,complete:function(){for(var p in bkp_prop){element[0].style[p]=bkp_prop[p];}element.parent().replaceWith(element);if(options.complete){options.complete();}}});}return this;};jQuery.extend(jQuery.easing,{easeInOutExpo:function(x,t,b,c,d){if(t==0){return b;}if(t==d){return b+c;}if((t/=d/2)<1){return c/2*Math.pow(2,10*(t-1))+b;}return c/2*(-Math.pow(2,-10*--t)+2)+b;}});// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Last updated: 2011-06-16
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"slices",prev:"",next:"",duration:10*100,delay:20*100,outWidth:952,outHeight:371,width:952,height:371,autoPlay:true,stopOnHover:false,loop:false,bullets:true,caption:false,controls:true});