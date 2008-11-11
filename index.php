<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
    <title>YUI: Effects Widget 0.8</title>
    <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.2.0/build/reset-fonts-grids/reset-fonts-grids.css"> 
    <link rel="stylesheet" href="http://blog.davglass.com/wp-content/themes/davglass/style.css" type="text/css">
    <link rel="stylesheet" type="text/css" href="http://us.js2.yimg.com/us.js.yimg.com/i/ydn/yuiweb/css/dpsyntax-min-11.css">
    <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.2.0/build/container/assets/container.css"> 
    <style type="text/css" media="screen">
        .demo {
            height: 150px;
            width: 150px;
            border: 2px solid black;
            background-color: #ccc;
            position: relative;
            font-size: 100%;
        }
        .demo_holder {
            height: 152px;
            width: 152px;
            margin: 15px;
            float: left;
            cursor: pointer;
            cursor: hand;
        }

        p {
            padding: .25em;
        }
	</style>
</head>
<body>
<div id="davdoc" class="yui-t7">
    <div id="hd"><h1 id="header"><a href="http://blog.davglass.com/">YUI: Effects Widgets 0.8</a></h1></div>

    <div id="bd">
<p>This is my attempt to somewhat mimic &amp; improve upon the Combination Effects in script.aculo.us (<a href="http://wiki.script.aculo.us/scriptaculous/show/CombinationEffectsDemo">http://wiki.script.aculo.us/scriptaculous/show/CombinationEffectsDemo</a>)</p>
<p>The YUI libraries are fantastic, but coming from developing tools with script.aculo.us, I kind of miss the simple combination effects. The power of the YUI libraries is outstanding, if I want to make all of my effects manually.</p>
<p>I have added some serious enhancements to the Effects. The Effects now support passing in an option called "delay". This will cause the Effect to not execute immediately. Additionally I have added support for a Custom Event called onEffectComplete. Combining the two will allow for more customization (See the Batch Example Below).</p>
<p>Also check out my <a href="container.php">new Container effects</a>, they can be applied directly to a YUI Panel/Overlay/Container</p>
<p>Also check out my <a href="ghost.php">new Ghosting effects</a>, you can now set an option called "ghost" that will allow for opacity animation.</p>
<p>The latest version now monitors the effects animation &amp; will not run again if it is still animating. This will prevent the dreaded "multiple crazy click" problem, where the effect would run on top of itself if the effect was fired off more than once (e.g. from a user clicking it several times).</p>
<p><b>NOTICE: The latest version now requires my <a href="../tools/">YAHOO.Tools</a> package as well as the YUI libs</b></p>
<p><a href="../docs/?type=effects">Docs available here</a> - <a href="effects-min.js">Minimized source here</a></p>
    <div class="demo_holder"><div id="demo1" class="demo" onclick="new YAHOO.widget.Effects.Shadow(this);">Effects.Shadow</div></div>
    <div class="demo_holder"><div id="demo2" class="demo" onclick="new YAHOO.widget.Effects.Fade(this); setTimeout('YAHOO.widget.Effects.Appear(\'demo2\')', 2500);">Effects.Fade</div></div>
    <div class="demo_holder"><div id="demo3" class="demo" onclick="new YAHOO.widget.Effects.Appear(this);">Effects.Appear</div></div>
    <div class="demo_holder"><div id="demo4" class="demo" onclick="new YAHOO.widget.Effects.BlindDown(this);">Effects.BlindDown</div></div>
    <div class="demo_holder"><div id="demo5" class="demo" onclick="new YAHOO.widget.Effects.BlindUp(this); setTimeout('YAHOO.widget.Effects.Appear(\'demo5\')', 2500);">Effects.BlindUp</div></div>
    <div class="demo_holder"><div id="demo6" class="demo" onclick="new YAHOO.widget.Effects.BlindRight(this);">Effects.BlindRight</div></div>
    <div class="demo_holder"><div id="demo7" class="demo" onclick="new YAHOO.widget.Effects.BlindLeft(this); setTimeout('YAHOO.widget.Effects.Appear(\'demo7\')', 2500);">Effects.BlindLeft</div></div>
    <div class="demo_holder"><div id="demo41" class="demo" onclick="new YAHOO.widget.Effects.BlindDown(this, {bind: 'bottom'}); setTimeout('YAHOO.widget.Effects.Appear(\'demo41\')', 2500);">Effects.BlindDown (binded)</div></div>
    <div class="demo_holder"><div id="demo51" class="demo" onclick="new YAHOO.widget.Effects.BlindUp(this, {bind: 'bottom'});">Effects.BlindUp (binded)</div></div>
    <div class="demo_holder"><div id="demo71" class="demo" onclick="new YAHOO.widget.Effects.BlindLeft(this, {bind: 'right'});">Effects.BlindLeft (binded)</div></div>
    <div class="demo_holder"><div id="demo61" class="demo" onclick="new YAHOO.widget.Effects.BlindRight(this, {bind: 'right'}); setTimeout('YAHOO.widget.Effects.Appear(\'demo61\')', 2500);">Effects.BlindRight (binded)</div></div>
    <div class="demo_holder"><div id="demo8" class="demo" onclick="new YAHOO.widget.Effects.Fold(this); setTimeout('YAHOO.widget.Effects.Appear(\'demo8\')', 2500);">Effects.Fold</div></div>
    <div class="demo_holder"><div id="demo81" class="demo" onclick="new YAHOO.widget.Effects.UnFold(this);">Effects.UnFold</div></div>
    <div class="demo_holder"><div id="demo9" class="demo" onclick="new YAHOO.widget.Effects.ShakeLR(this);">Effects.ShakeLR</div></div>
    <div class="demo_holder"><div id="demo10" class="demo" onclick="new YAHOO.widget.Effects.ShakeTB(this);">Effects.ShakeTB</div></div>
    <div class="demo_holder"><div id="demo11" class="demo" onclick="new YAHOO.widget.Effects.Drop(this); setTimeout('YAHOO.widget.Effects.Appear(\'demo11\')', 2500);">Effects.Drop</div></div>
    <div class="demo_holder"><div id="demo12" class="demo" onclick="new YAHOO.widget.Effects.Pulse(this);">Effects.Pulse</div></div>
    <div class="demo_holder"><div id="demo15" class="demo" onclick="new YAHOO.widget.Effects.Shrink(this); setTimeout('YAHOO.widget.Effects.Appear(\'demo15\')', 3500);">Effects.Shrink</div></div>
    <div class="demo_holder"><div id="demo16" class="demo" onclick="new YAHOO.widget.Effects.Grow(this);">Effects.Grow</div></div>
    <div class="demo_holder"><div id="demo14" class="demo" onclick="new YAHOO.widget.Effects.TV(this); setTimeout('YAHOO.widget.Effects.Appear(\'demo14\')', 3500);">Effects.TV</div></div>
    <div class="demo_holder"><div id="demo13" class="demo">Effects Batching with onEffectComplete(<br>&nbsp;BlindUp<br>&nbsp;BlindRight<br>&nbsp;BlindDown<br>&nbsp;Drop)</div></div>
    <br clear="all" />
    <h2>Combining effects with onEffectComplete</h2>
    <textarea name="code" class="JScript">
    function init() {
        eff = new YAHOO.widget.Effects.BlindUp('demo13', { delay: true });
        eff.onEffectComplete.subscribe(function() {
            eff2 = new YAHOO.widget.Effects.BlindRight('demo13', { delay: true });
            eff2.onEffectComplete.subscribe(function() {
                eff3 = new YAHOO.widget.Effects.BlindDown('demo13', { delay: true });
                eff3.onEffectComplete.subscribe(function() {
                    eff4 = new YAHOO.widget.Effects.Drop('demo13', { delay: true });
                    eff4.onEffectComplete.subscribe(function() {
                        setTimeout('YAHOO.widget.Effects.Appear('demo13')', 2500); 
                    });
                    eff4.animate();
                });
                eff3.animate();
            });
            eff2.animate();
        });
        YAHOO.util.Event.addListener('demo13', 'click', handleFireEffect);
    }

    function handleFireEffect(ev) {
        eff.animate();
        YAHOO.util.Event.stopEvent(ev);
    }

    YAHOO.util.Event.addListener(window, 'load', init);

    </textarea>
</div>
<div id="ft">&nbsp;</div>
</div>
    
<script type="text/javascript" src="http://yui.yahooapis.com/2.2.0/build/utilities/utilities.js"></script> 
<script type="text/javascript" src="http://yui.yahooapis.com/2.2.0/build/container/container-min.js"></script> 
<script type="text/javascript" src="../js/toolseffects-min.js"></script>
<script src="http://us.js2.yimg.com/us.js.yimg.com/i/ydn/yuiweb/js/dpsyntax-min-2.js"></script>
<script type="text/javascript" src="../js/davglass.js"></script>
<script type="text/javascript">
var eff = null;

function init() {
    eff = new YAHOO.widget.Effects.BlindUp('demo13', { delay: true });
    eff.onEffectComplete.subscribe(function() {
        eff2 = new YAHOO.widget.Effects.BlindRight('demo13', { delay: true });
        eff2.onEffectComplete.subscribe(function() {
            eff3 = new YAHOO.widget.Effects.BlindDown('demo13', { delay: true });
            eff3.onEffectComplete.subscribe(function() {
                eff4 = new YAHOO.widget.Effects.Drop('demo13', { delay: true });
                eff4.onEffectComplete.subscribe(function() {
                    setTimeout('YAHOO.widget.Effects.Appear(\'demo13\')', 2500); 
                });
                eff4.animate();
            });
            eff3.animate();
        });
        eff2.animate();
    });

    YAHOO.util.Event.addListener('demo13', 'click', handleFireEffect);

    setupToolTips();
    dp.SyntaxHighlighter.HighlightAll('code'); 
}

function handleFireEffect(ev) {
    eff.animate();
    YAHOO.util.Event.stopEvent(ev);
}

YAHOO.util.Event.addListener(window, 'load', init);



function setupToolTips() {
    var demos = $D.getElementsByClassName('demo');
    for (var i = 0; i < demos.length; i++) {
        var val = String(demos[i].getAttribute('onclick'));
        if (val) {
            if (demos[i].id == 'demo13') {
                val = 'See example below.';
            } else {
                val = 'Assigning this effect is as easy as:<br>' + val.substring(0, (val.indexOf(';') + 1)).replace('this', '\'' + demos[i].id + '\'') + '<br>Click for an example';
            }
            demos[i].title = val;
            new YAHOO.widget.Tooltip(demos[i].id + '_tip', { context: demos[i].id, showDelay:500 } );
        }
    }
}

</script>
</body>
</html>
<?php @include_once($_SERVER["DOCUMENT_ROOT"]."/wp-content/plugins/shortstat/inc.stats.php"); ?>

