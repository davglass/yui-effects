<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
    <title>YUI: Effects Widget</title>
    <link rel="stylesheet" href="http://blog.davglass.com/files/yui/css/reset-min.css" type="text/css">
            <link rel="stylesheet" href="http://blog.davglass.com/files/yui/css/fonts-min.css" type="text/css">
            <link rel="stylesheet" href="http://blog.davglass.com/files/yui/css/grids-min.css" type="text/css">
            <link rel="stylesheet" href="http://blog.davglass.com/wp-content/themes/davglass/style.css" type="text/css">
    <style type="text/css" media="screen">
		@import url( effects.css );
	</style>
</head>
<body>
<div id="davdoc" class="yui-t7">
    <div id="hd"><h1 id="header"><a href="http://blog.davglass.com/">YUI: Effects Widgets</a></h1></div>

    <div id="bd">

    <div class="demo_holder"><div id="demo1" class="demo">Effects Tester</div></div>
    <p><a href="" id="fireEffect">Fire Effect</a></p>
</div>
<div id="ft">&nbsp;</div>
</div>
    
<script type="text/javascript" src="../js/yahoo-min.js"></script>
<script type="text/javascript" src="../js/dom-min.js"></script>
<script type="text/javascript" src="../js/event-min.js"></script>
<script type="text/javascript" src="../js/animation-min.js"></script>
<script type="text/javascript" src="../js/dragdrop-min.js"></script>
<script type="text/javascript" src="../js/create.js"></script>
<script type="text/javascript" src="effects.js"></script>
<script type="text/javascript">
var eff = null;

function init() {
    //eff = new YAHOO.widget.Effects.Shrink('demo1', { delay: true });
    /*   
    eff = new YAHOO.widget.Effects.BlindUp('demo1', { delay: true });
    eff.onEffectComplete.subscribe(function() {
        eff2 = new YAHOO.widget.Effects.BlindRight('demo1', { delay: true });
        eff2.onEffectComplete.subscribe(function() {
            eff3 = new YAHOO.widget.Effects.BlindDown('demo1', { delay: true });
            eff3.onEffectComplete.subscribe(function() {
                eff4 = new YAHOO.widget.Effects.Drop('demo1', { delay: true });
                eff4.animate();
            });
            eff3.animate();
        });
        eff2.animate();
    });
    */
    //eff2 = new YAHOO.widget.Effects.BlindRight('demo1', { delay: true });
    //eff3 = new YAHOO.widget.Effects.BlindDown('demo1', { delay: true });
    //eff4 = new YAHOO.widget.Effects.Drop('demo1', { delay: true });

    //eff.onEffectComplete.subscribe(test, true, 1);
    eff = new YAHOO.widget.Effects.Shadow('demo1', { delay: true, top: 15, left: 50, color: 'red' });
    YAHOO.util.Event.addListener('fireEffect', 'click', handleFireEffect);
}

function handleFireEffect(ev) {
    eff.animate();
    YAHOO.util.Event.stopEvent(ev);
}

YAHOO.util.Event.addListener(window, 'load', init);

function test() {
    console.log('onEffectComplete fired');
}

YAHOO.widget.Effects.Shadow = function(inElm, opts) {
    var delay = ((opts && opts.delay) ? opts.delay : false);
    var topOffset = ((opts && opts.top) ? opts.top : 8);
    var leftOffset = ((opts && opts.left) ? opts.left : 8);
    var shadowColor = ((opts && opts.color) ? opts.color : '#ccc');
    var shadowOpacity = ((opts && opts.opacity) ? opts.opacity : .5);

    var elm = YAHOO.util.Dom.get(inElm);
    this.element = elm;
    
    this.shadow = document.createElement('div');

    var h = parseInt($T.getHeight(elm));
    var w = parseInt(YAHOO.util.Dom.getStyle(elm, 'width'));
    var z = this.element.style.zIndex;
    if (!z) {
        z = 1;
        this.element.style.zIndex = z;
    }

    YAHOO.util.Dom.setStyle(elm, 'overflow', 'hidden');
    YAHOO.util.Dom.setStyle(this.shadow, 'height', h + 'px');
    YAHOO.util.Dom.setStyle(this.shadow, 'width', w + 'px');
    YAHOO.util.Dom.setStyle(this.shadow, 'background-color', shadowColor);
    YAHOO.util.Dom.setStyle(this.shadow, 'opacity', 0);
    YAHOO.util.Dom.setStyle(this.shadow, 'position', 'absolute');
    this.shadow.style.zIndex = (z - 1);
    var xy = YAHOO.util.Dom.getXY(this.element);
    console.log(xy);
    this.element.parentNode.appendChild(this.shadow);

    /**
    * Custom Event fired after the effect completes
    * @type Object
    */
    this.onEffectComplete = new YAHOO.util.CustomEvent('oneffectcomplete', this);
    
    
    var attributes = {
        opacity: { from: 0, to: shadowOpacity },
        top: {
            from: xy[1],
            to: (xy[1] + topOffset)
        },
        left: {
            from: xy[0],
            to: (xy[0] + leftOffset)
        }
    };

    /**
    * YUI Animation Object
    * @type Object
    */
    this.effect = new YAHOO.util.Anim(this.shadow, attributes);
    this.effect.onComplete.subscribe(function() {
        this.onEffectComplete.fire();
    }, this, true);
    if (!delay) {
        this.animate();
    }
}
/**
* Fires off the embedded Animation.
*/
YAHOO.widget.Effects.Shadow.prototype.animate = function() {
    this.effect.animate();
}
/**
* String function for reporting to YUI Logger
*/
YAHOO.widget.Effects.Shadow.prototype.toString = function() {
    return 'Effect Shadow [' + this.element.id + ']';
}


</script>
</body>
</html>
