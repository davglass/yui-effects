<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
    <title>YUI: Effects Widget</title>
    <style type="text/css" media="screen">
		@import url( effects.css );
        .demoslide {
            height: 150px;
            width: 150px;
            border: 2px solid black;
            background-color: #ccc;
            margin: 15px;
            float: left;
            position: relative;
            font-size: 100%;
        }

        .demoslide div {
            position: absolute;
            height: 148px;
            width: 148px;
            bottom: 0;
            left: 0;
        }
	</style>
</head>
<body>
<h2>YUI: Effects BlindUp/Blind Down - Sliding</h2>
<p>You can get the slide effect by simply applying a new style to an element inside of the element being animated.</p>
<p>Below I am applying the BlindUp and BlindDown effect to the outer div, but the inner div is styled like:<pre>
        .demoslide div {
            position: absolute;
            height: 148px;
            width: 148px;
            bottom: 0;
            left: 0;
        }
</pre></p>
    <div id="demo4" class="demoslide" onclick="new YAHOO.widget.Effects.BlindDown(this);"><div>Effects.BlindDown<br>Effects.BlindDown<br>Effects.BlindDown<br></div></div>
    <div id="demo5" class="demoslide" onclick="new YAHOO.widget.Effects.BlindUp(this); setTimeout('YAHOO.widget.Effects.Appear(\'demo5\')', 2500);"><div>Effects.BlindUp<br>Effects.BlindUp<br>Effects.BlindUp<br></div></div>




    
<script type="text/javascript" src="../js/yahoo-min.js"></script>
<script type="text/javascript" src="../js/dom-min.js"></script>
<script type="text/javascript" src="../js/event-min.js"></script>
<script type="text/javascript" src="../js/animation-min.js"></script>
<script type="text/javascript" src="../js/dragdrop-min.js"></script>
<script type="text/javascript" src="../tools/tools-min.js"></script>
<script type="text/javascript" src="effects.js"></script>
</body>
</html>
