
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_smbHitArea}","click",function(sym,e){var ball=sym.createChildSymbol("smbCircle","Stage");var elBall=ball.getSymbolElement();elBall.css("top",(e.pageY-(elBall.width()*0.5))+"px");elBall.css("left",(e.pageX-(elBall.height()*0.5))+"px");elBall.css("position","absolute");});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){var score=0;sym.setVariable("score",score);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){var stageHeight=sym.$('Stage').height();sym.$("#Stage").css({"transform-origin":"0 0","-ms-transform-origin":"0 0","-webkit-transform-origin":"0 0","-moz-transform-origin":"0 0","-o-transform-origin":"0 0"});function scaleStage(){var stage=sym.$('Stage');var parent=sym.$('Stage').parent();var parentWidth=stage.parent().width();var stageWidth=stage.width();var desiredWidth=Math.round(parentWidth*1);var rescale=(desiredWidth/stageWidth);stage.css('transform','scale('+rescale+')');stage.css('-o-transform','scale('+rescale+')');stage.css('-ms-transform','scale('+rescale+')');stage.css('-webkit-transform','scale('+rescale+')');stage.css('-moz-transform','scale('+rescale+')');stage.css('-o-transform','scale('+rescale+')');parent.height(stageHeight*rescale);}
$(window).on('resize',function(){});$(document).ready(function(){});});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'smbCircle'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){var requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.requestAnimationFrame=requestAnimationFrame;var reId;var el=sym.getSymbolElement();var posX;var posY;var speed=Math.random()*8+2;var dirX=Math.random()*2-1;var dirY=Math.random()*2-1;var arrColor=["#69ab35","#f37321","#524e86","#0091fe","#fdce59","#c22e13"];var randColor=arrColor[Math.floor(Math.random()*arrColor.length)];sym.$("bg").css("background",randColor);function moving(){reId=window.requestAnimationFrame(moving);sym.setVariable("reId",reId);posX=el.position().left;posY=el.position().top;posX+=speed*dirX;posY+=speed*dirY;el.css('left',posX+'px');el.css('top',posY+'px');if(posX>=800-el.width()||posX<=0){dirX*=-1;}
if(posY>=500-el.height()||posY<=0){dirY*=-1;}}
reId=window.requestAnimationFrame(moving);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.deleteSymbol();});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"beforeDeletion",function(sym,e){var stage=sym.getComposition().getStage();var scoreTemp=stage.getVariable("score");scoreTemp+=5;stage.$("tfScore").html(scoreTemp);stage.setVariable("score",scoreTemp);var myVariable=sym.getVariable("reId");window.cancelAnimationFrame(myVariable);console.log("deleted");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Ellipse}","click",function(sym,e){sym.play();});
//Edge binding end
})("smbCircle");
//Edge symbol end:'smbCircle'

//=========================================================

//Edge symbol: 'smbHitArea'
(function(symbolName){})("smbHitArea");
//Edge symbol end:'smbHitArea'
})(jQuery,AdobeEdge,"EDGE-6429735");