<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
    <title>YUI: Effects Widget 0.8</title>
    <link rel="stylesheet" href="http://blog.davglass.com/files/yui/css/yuicss.css" type="text/css">
    <link rel="stylesheet" href="http://blog.davglass.com/wp-content/themes/davglass/style.css" type="text/css">
    <link rel="stylesheet" type="text/css" href="../css/dpSyntaxHighlighter.css">
    <link rel="stylesheet" href="../css/container_assets/container.css" type="text/css">
    <style type="text/css" media="screen">
		@import url( effects.css );
        p {
            padding: .25em;
        }
        .demo_holder {
            cursor: pointer;
            cursor: hand;
        }
	</style>
</head>
<body>
<div id="davdoc" class="yui-t7">
    <div id="hd"><h1 id="header"><a href="http://blog.davglass.com/">YUI: Effects Widgets 0.8 (with ghosting)</a></h1></div>
    <div id="bd">
<p>These are my standard effects, with the "ghost" option set to true. A full list of <a href="index.php">effects can be found here</a>.</p>
<p<a href="../docs/?type=effects">Docs available here</a> - <a href="effects-min.js">Minimized source here</a></p>
    <div class="demo_holder"><div id="demo4" class="demo" onclick="new YAHOO.widget.Effects.BlindDown(this, {ghost: true});">Effects.BlindDown</div></div>
    <div class="demo_holder"><div id="demo5" class="demo" onclick="new YAHOO.widget.Effects.BlindUp(this, {ghost: true}); setTimeout('YAHOO.widget.Effects.Appear(\'demo5\')', 2500);">Effects.BlindUp</div></div>
    <div class="demo_holder"><div id="demo6" class="demo" onclick="new YAHOO.widget.Effects.BlindRight(this, {ghost: true});">Effects.BlindRight</div></div>
    <div class="demo_holder"><div id="demo7" class="demo" onclick="new YAHOO.widget.Effects.BlindLeft(this, {ghost: true}); setTimeout('YAHOO.widget.Effects.Appear(\'demo7\')', 2500);">Effects.BlindLeft</div></div>
    <div class="demo_holder"><div id="demo41" class="demo" onclick="new YAHOO.widget.Effects.BlindDown(this, {bind: 'bottom', ghost: true}); setTimeout('YAHOO.widget.Effects.Appear(\'demo41\')', 2500);">Effects.BlindDown (binded)</div></div>
    <div class="demo_holder"><div id="demo51" class="demo" onclick="new YAHOO.widget.Effects.BlindUp(this, {bind: 'bottom', ghost: true});">Effects.BlindUp (binded)</div></div>
    <div class="demo_holder"><div id="demo71" class="demo" onclick="new YAHOO.widget.Effects.BlindLeft(this, {bind: 'right', ghost: true});">Effects.BlindLeft (binded)</div></div>
    <div class="demo_holder"><div id="demo61" class="demo" onclick="new YAHOO.widget.Effects.BlindRight(this, {bind: 'right', ghost: true}); setTimeout('YAHOO.widget.Effects.Appear(\'demo61\')', 2500);">Effects.BlindRight (binded)</div></div>
    <div class="demo_holder"><div id="demo8" class="demo" onclick="new YAHOO.widget.Effects.Fold(this, {ghost: true}); setTimeout('YAHOO.widget.Effects.Appear(\'demo8\')', 3500);">Effects.Fold</div></div>
    <div class="demo_holder"><div id="demo81" class="demo" onclick="new YAHOO.widget.Effects.UnFold(this, {ghost: true});">Effects.UnFold</div></div>
</div>
<div id="ft">&nbsp;</div>
</div>
    
<script type="text/javascript" src="../js/yui-012.js"></script>
<script type="text/javascript" src="../tools/tools-min.js"></script>
<script type="text/javascript" src="effects-min.js"></script>
<script src="../js/dpSyntaxHighlighter.js"></script>
<script type="text/javascript" src="../js/davglass.js"></script>
<script>
YAHOO.util.Event.addListener(window, 'load', setupToolTips);

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
