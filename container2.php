<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
    <title>YUI: Container using my Effects class</title>
    <link rel="stylesheet" href="http://blog.davglass.com/files/yui/css/reset-min.css" type="text/css">
            <link rel="stylesheet" href="http://blog.davglass.com/files/yui/css/fonts-min.css" type="text/css">
            <link rel="stylesheet" href="http://blog.davglass.com/files/yui/css/grids-min.css" type="text/css">
            <link rel="stylesheet" href="http://blog.davglass.com/wp-content/themes/davglass/style.css" type="text/css">
    <style type="text/css" media="screen">
        @import url( ../css/container_assets/container.css );
        @import url( style.css );

        #dlg {
            border: 1px solid black;
        }
        .overlay {
            position: relative;
        }
        p {
            margin: 1em;
        }
	</style>
</head>
<body>
<div id="davdoc" class="yui-t7">
    <div id="hd"><h1 id="header"><a href="http://blog.davglass.com/">YUI: Container using my Effects widget</a></h1></div>
    <div id="bd">
    <p>I have created a batch of Container Effects based off of my widget.Effects. Pick an effect and Hide/Show the overlay panel.</p>
    <p<a href="../docs">Docs available here</a> - <a href="effects-min.js">Minimized source here</a> - <a href="index.php">Full Effects List</a></p>
    <select id="contEff">
        <optgroup label="Normal">
            <option value="YAHOO.widget.Effects.ContainerEffect.BlindUpDownBinded">Blind Up/Down (binded)</option>
            <option value="YAHOO.widget.Effects.ContainerEffect.BlindUpDown">Blind Up/Down</option>
            <option value="YAHOO.widget.Effects.ContainerEffect.BlindLeftRightBinded">Blind Left/Right (binded)</option>
            <option value="YAHOO.widget.Effects.ContainerEffect.BlindLeftRight">Blind Left/Right</option>
            <option value="YAHOO.widget.Effects.ContainerEffect.BlindRightFold">Blind Right - Fold</option>
            <option value="YAHOO.widget.Effects.ContainerEffect.BlindLeftFold">Blind Left (binded) - Fold</option>
            <option value="YAHOO.widget.Effects.ContainerEffect.BlindDownDrop">Blind Down - Drop</option>
            <option value="YAHOO.widget.Effects.ContainerEffect.BlindUpDrop">Blind Up (binded) - Drop</option>
            <option value="YAHOO.widget.Effects.ContainerEffect.UnFoldFold">UnFold - Fold</option>
        </optgroup>
        <optgroup label="Ghosting">
            <option value="YAHOO.widget.Effects.ContainerEffect.BlindUpDownBindedGhost">Blind Up/Down (binded &amp; ghosted)</option>
            <option value="YAHOO.widget.Effects.ContainerEffect.BlindUpDownGhost">Blind Up/Down (ghosted)</option>
            <option value="YAHOO.widget.Effects.ContainerEffect.BlindLeftRightBindedGhost">Blind Left/Right (binded &amp; ghosted)</option>
            <option value="YAHOO.widget.Effects.ContainerEffect.BlindLeftRightGhost">Blind Left/Right (ghosted)</option>
            <option value="YAHOO.widget.Effects.ContainerEffect.BlindRightFoldGhost">Blind Right - Fold (ghosted)</option>
            <option value="YAHOO.widget.Effects.ContainerEffect.BlindLeftFoldGhost">Blind Left (binded &amp; ghosted) - Fold (ghosted)</option>
            <option value="YAHOO.widget.Effects.ContainerEffect.BlindDownDropGhost">Blind Down (ghosted) - Drop</option>
            <option value="YAHOO.widget.Effects.ContainerEffect.BlindUpDropGhost">Blind Up (binded &amp; ghosted) - Drop</option>
            <option value="YAHOO.widget.Effects.ContainerEffect.UnFoldFoldGhost">UnFold - Fold (ghosted)</option>
        </optgroup>
    </select>
<button onclick="handleShow()">Show Panel/Dialog</button>
<button onclick="handleHide()">Hide Panel/Dialog</button>

<div id="dlg">
    <div class="hd">Title of Panel</div>
    <div class="bd">
<p>Test text. Look at me.</p><p>Test text. Look at me.</p><p>Test text. Look at me.</p>
    </div>
</div>

</div>
<div id="ft">&nbsp;</div>
</div>



<script type="text/javascript" src="../js/yahoo-min.js"></script>
<script type="text/javascript" src="../js/dom-min.js"></script>
<script type="text/javascript" src="../js/event-min.js"></script>
<script type="text/javascript" src="../js/animation-min.js"></script>
<script type="text/javascript" src="../js/dragdrop-min.js"></script>
<script type="text/javascript" src="../js/logger-min.js"></script>
<script type="text/javascript" src="./container-debug.js"></script>
<script type="text/javascript" src="effects.js"></script>
<script type="text/javascript">
YAHOO.namespace('example.container');
var shown = false;

function handleShow() {
    eff = eval(YAHOO.example.container.contEffData.options[YAHOO.example.container.contEffData.selectedIndex].value);
    YAHOO.example.container.dlg.cfg.applyConfig({ effect: { effect:  eff , duration: 1} });
    YAHOO.example.container.dlg.show();
}

function handleHide() {
    eff = eval(YAHOO.example.container.contEffData.options[YAHOO.example.container.contEffData.selectedIndex].value);
    YAHOO.example.container.dlg.cfg.applyConfig({ effect: { effect:  eff , duration: 1} });
    YAHOO.example.container.dlg.hide();
}

function init() {
    YAHOO.example.container.contEffData = YAHOO.util.Dom.get('contEff');
    YAHOO.example.container.dlg = new YAHOO.widget.Dialog('dlg', 
        { 
            close: true,
            visible: false,
            height: '150px',
            width: '350px',
            underlay: 'matte',
            effect: {
                effect: YAHOO.widget.Effects.ContainerEffect.BlindUpDownBinded,
                duration: 1
            }
        }
    );
    YAHOO.example.container.dlg.render(YAHOO.util.Dom.get('bd'));
}

YAHOO.util.Event.addListener(window, "load", init);


</script>
</body>
</html>
