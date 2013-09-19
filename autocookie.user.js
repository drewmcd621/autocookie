// ==UserScript==
// @name           AutoCookie
// @namespace      http://drewmcdermott.net
// @version        1.4
// @include        http://orteil.dashnet.org/cookieclicker/*
// ==/UserScript==




//Clicker
var elementID="bigCookie";
var clickthis = document.getElementById(elementID);

var ref_time = 15;

//Upgrades

//run funcs on intv

var tim;

function start()
{
	tim = setInterval(autoclick,ref_time);
	JQuery(productBuy);
	JQuery(upgradeBuy);
	JQuery(goldenClick);

}







function autoclick()
{
	clickthis.click();
}

function JQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}// Note, jQ replaces $ to avoid conflicts.






function goldenClick()
{
	var gc_time = 10000;
	var gctim = setInterval(function() { jQ( "div[style*='/img/goldCookie.png']" ).click();   },gc_time);

}

function productBuy()
{

	var buy_time = 1000;
	var ptim= setInterval(function() { jQ( "span[style='color: rgb(0, 255, 0);']" ).parent().click();   },buy_time);

}


function upgradeBuy()
{
	var up_time = 1000;
	var utim= setInterval(function() { jQ( ".crate.upgrade.enabled").not("div[onmouseover*='%5BSwitch%5D']").click(); },up_time);
}

//http://cookieclicker.wikia.com/wiki/Cookie_Monster_%28JavaScript_Add-on%29
function gui() {
var jA = document.createElement('script');
jA.setAttribute('type', 'text/javascript');
jA.setAttribute('src', 'http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js');
jA.onload = function() {
  var jB = document.createElement('script');
  jB.setAttribute('type', 'text/javascript');
  jB.setAttribute('src', 'http://pastebin.com/raw.php?i=2KRNm8Gm');
  document.body.appendChild(jB);
};
document.body.appendChild(jA);

start();
}

window.onload=gui;
