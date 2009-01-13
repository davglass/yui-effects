/**
 * @description Provides the YUI with several built-in effect combinations.
 * @module effects
 * @version 0.8
 * @namespace YAHOO.widget
 * @requires yahoo, dom, event
*/
/**
* @class Effects
* @description Provides the YUI with several built-in effect combinations.<br>
* All effects now support a Custom Event called onEffectComplete.<br>
* They all now support a new option called delay. If delay is set to true the effect will not immediately execute.<br>
* You can then call eff.animate(); to animate it later. This way you can delay the execution & bind an onEffectComplete subscriber<br>
* Then animate the effect.
*/
YAHOO.widget.Effects = function() {
    return {
        version: '0.8'
    }
}();

/**
* This effect makes the object dissappear with display none.
* @class Effects.Hide
* @param {String/HTMLElement} inElm HTML element to apply the effect to
*/
YAHOO.widget.Effects.Hide = function(inElm) {
    this.element = YAHOO.util.Dom.get(inElm);

    YAHOO.util.Dom.setStyle(this.element, 'display', 'none');
    YAHOO.util.Dom.setStyle(this.element, 'visibility', 'hidden');
}

/**
* @method toString
* String function for reporting to YUI Logger
*/
YAHOO.widget.Effects.Hide.prototype.toString = function() {
    return 'Effect Hide [' + this.element.id + ']';
}
/**
* This effect makes the object Appear with display block.
* @class Effects.Show
* @param {String/HTMLElement} inElm HTML element to apply the effect to
*/
YAHOO.widget.Effects.Show = function(inElm) {
    this.element = YAHOO.util.Dom.get(inElm);

    YAHOO.util.Dom.setStyle(this.element, 'display', 'block');
    YAHOO.util.Dom.setStyle(this.element, 'visibility', 'visible');
}
/**
* @method toString
* String function for reporting to YUI Logger
*/
YAHOO.widget.Effects.Show.prototype.toString = function() {
    return 'Effect Show [' + this.element.id + ']';
}
/**
* This effect makes the object fade & disappear.
* @class Effects.Fade
* @param {String/HTMLElement} inElm HTML element to apply the effect to
* @param {Object} options Pass in an object of options for this effect, you can choose the Easing and the Duration
* <code> <br>var options = (<br>
*   ease: YAHOO.util.Easing.easeOut,<br>
*   seconds: 1<br>
*   delay: true (Delays execution)<br>
* )</code>
* @return Effect Object (Acess anmiation object via this.effect)
* @type Object
*/
YAHOO.widget.Effects.Fade = function(inElm, opts) {
    this.element = YAHOO.util.Dom.get(inElm);

    var attributes = {
        opacity: { from: 1, to: 0 }
    };
    /**
    * Custom Event fired after the effect completes
    * @type Object
    */
    this.onEffectComplete = new YAHOO.util.CustomEvent('oneffectcomplete', this);

    var ease = ((opts && opts.ease) ? opts.ease : YAHOO.util.Easing.easeOut);
    var secs = ((opts && opts.seconds) ? opts.seconds : 1);
    var delay = ((opts && opts.delay) ? opts.delay : false);

    /**
    * YUI Animation Object
    * @type Object
    */
    this.effect = new YAHOO.util.Anim(this.element, attributes, secs, ease);
    this.effect.onComplete.subscribe(function() {
        YAHOO.widget.Effects.Hide(this.element);
        this.onEffectComplete.fire();
    }, this, true);
    if (!delay) {
        this.effect.animate();
    }
}
/**
* @method animate
* Fires off the embedded Animation.
*/
YAHOO.widget.Effects.Fade.prototype.animate = function() {
    this.effect.animate();
}
/**
* @method toString
* String function for reporting to YUI Logger
*/
YAHOO.widget.Effects.Fade.prototype.toString = function() {
    return 'Effect Fade [' + this.element.id + ']';
}
/**
* This effect makes the object fade & appear.
* @class Effects.Appear
* @param {String/HTMLElement} inElm HTML element to apply the effect to
* @param {Object} options Pass in an object of options for this effect, you can choose the Easing and the Duration
* <code> <br>var options = (<br>
*   ease: YAHOO.util.Easing.easeOut,<br>
*   seconds: 3<br>
*   delay: true (Delays execution)<br>
* )</code>
* @return Effect Object (Acess anmiation object via this.effect)
* @type Object
*/
YAHOO.widget.Effects.Appear = function(inElm, opts) {
    this.element = YAHOO.util.Dom.get(inElm);

    YAHOO.util.Dom.setStyle(this.element, 'opacity', '0');
    YAHOO.widget.Effects.Show(this.element);
    var attributes = {
        opacity: { from: 0, to: 1 }
    };
    /*
    * Custom Event fired after the effect completes
    * @type Object
    */
    this.onEffectComplete = new YAHOO.util.CustomEvent('oneffectcomplete', this);
    
    var ease = ((opts && opts.ease) ? opts.ease : YAHOO.util.Easing.easeOut);
    var secs = ((opts && opts.seconds) ? opts.seconds : 3);
    var delay = ((opts && opts.delay) ? opts.delay : false);

    /**
    * YUI Animation Object
    * @type Object
    */
    this.effect = new YAHOO.util.Anim(this.element, attributes, secs, ease);
    this.effect.onComplete.subscribe(function() {
        this.onEffectComplete.fire();
    }, this, true);
    if (!delay) {
        this.effect.animate();
    }
}
/**
* @method animate
* Fires off the embedded Animation.
*/
YAHOO.widget.Effects.Appear.prototype.animate = function() {
    this.effect.animate();
}
/**
* @method toString
* String function for reporting to YUI Logger
*/
YAHOO.widget.Effects.Appear.prototype.toString = function() {
    return 'Effect Appear [' + this.element.id + ']';
}
/**
* This effect makes the object act like a window blind and retract.
* @class Effects.BlindUp
* @param {String/HTMLElement} inElm HTML element to apply the effect to
* @param {Object} options Pass in an object of options for this effect, you can choose the Easing and the Duration
* <code> <br>var options = (<br>
*   ease: YAHOO.util.Easing.easeOut,<br>
*   seconds: 1<br>
*   delay: true (Delays execution)<br>
*   bind: (string) bottom<br>
*   ghost: (boolean)<br>
* )</code><br>
* Setting the bind option will make the element "blind up/rise" from the bottom.
* @return Effect Object (Acess anmiation object via this.effect)
* @type Object
*/
YAHOO.widget.Effects.BlindUp = function(inElm, opts) {
    var ease = ((opts && opts.ease) ? opts.ease : YAHOO.util.Easing.easeOut);
    var secs = ((opts && opts.seconds) ? opts.seconds : 1);
    var delay = ((opts && opts.delay) ? opts.delay : false);
    var ghost = ((opts && opts.ghost) ? opts.ghost : false);

    this.element = YAHOO.util.Dom.get(inElm);
    this._height = $T.getHeight(this.element);
    this._top = parseInt($D.getStyle(this.element, 'top'));
    
    this._opts = opts;

    YAHOO.util.Dom.setStyle(this.element, 'overflow', 'hidden');
    var attributes = {
        height: { to: 0 }
    };
    if (ghost) {
        attributes.opacity = {
            to : 0,
            from: 1
        }
    }

    /**
    * Custom Event fired after the effect completes
    * @type Object
    */
    this.onEffectComplete = new YAHOO.util.CustomEvent('oneffectcomplete', this);


    if (opts && opts.bind && (opts.bind == 'bottom')) {
        var attributes = {
            height: { from: 0, to: parseInt(this._height)},
            top: { from: (this._top + parseInt(this._height)), to: this._top }
        };
        if (ghost) {
            attributes.opacity = {
                to : 1,
                from: 0
            }
        }
    }

    /**
    * YUI Animation Object
    * @type Object
    */
	this.effect = new YAHOO.util.Anim(this.element, attributes, secs, ease);
	this.effect.onComplete.subscribe(function() {
		if (this._opts && this._opts.bind && (this._opts.bind == 'bottom')) {
			YAHOO.util.Dom.setStyle(this.element, 'top', this._top + 'px');
		} else {
			YAHOO.widget.Effects.Hide(this.element);
			YAHOO.util.Dom.setStyle(this.element, 'height', this._height);
		}
		YAHOO.util.Dom.setStyle(this.element, 'opacity', 1);
		this.onEffectComplete.fire();
	}, this, true);
	if (!delay) {
		this.animate();
	}
}
/**
* @private
* @method prepStyle
* Preps the style of the element before running the Animation.
*/
YAHOO.widget.Effects.BlindUp.prototype.prepStyle = function() {
    if (this._opts && this._opts.bind && (this._opts.bind == 'bottom')) {
        YAHOO.util.Dom.setStyle(this.element, 'height', '0px');
        YAHOO.util.Dom.setStyle(this.element, 'top', this._height);
    }
    YAHOO.widget.Effects.Show(this.element);
}
/**
* @method animate
* Fires off the embedded Animation.
*/
YAHOO.widget.Effects.BlindUp.prototype.animate = function() {
	this.prepStyle();
	this.effect.animate();
}
/**
* @method toString
* String function for reporting to YUI Logger
*/
YAHOO.widget.Effects.BlindUp.prototype.toString = function() {
    return 'Effect BlindUp [' + this.element.id + ']';
}
/**
* This effect makes the object act like a window blind opening.
* @class Effects.BlindDown
* @param {String/HTMLElement} inElm HTML element to apply the effect to
* @param {Object} options Pass in an object of options for this effect, you can choose the Easing and the Duration
* <code> <br>var options = (<br>
*   ease: YAHOO.util.Easing.easeOut,<br>
*   seconds: 1<br>
*   delay: true (Delays execution)<br>
*   bind: (string) bottom<br>
*   ghost: (boolean)<br>
* )</code><br>
* Setting the bind option will make the element "blind down" from top to bottom.
* @return Effect Object (Acess anmiation object via this.effect)
* @type Object
*/
YAHOO.widget.Effects.BlindDown = function(inElm, opts) {
    var ease = ((opts && opts.ease) ? opts.ease : YAHOO.util.Easing.easeOut);
    var secs = ((opts && opts.seconds) ? opts.seconds : 1);
    var delay = ((opts && opts.delay) ? opts.delay : false);
    var ghost = ((opts && opts.ghost) ? opts.ghost : false);

    this.element = YAHOO.util.Dom.get(inElm);

    this._opts = opts;
    this._height = parseInt($T.getHeight(this.element));
    this._top = parseInt($D.getStyle(this.element, 'top'));

    YAHOO.util.Dom.setStyle(this.element, 'overflow', 'hidden');
    var attributes = {
        height: { from: 0, to: this._height }
    };
    if (ghost) {
        attributes.opacity = {
            to : 1,
            from: 0
        }
    }
    /**
    * Custom Event fired after the effect completes
    * @type Object
    */
    this.onEffectComplete = new YAHOO.util.CustomEvent('oneffectcomplete', this);


    if (opts && opts.bind && (opts.bind == 'bottom')) {
        var attributes = {
            height: { to: 0, from: parseInt(this._height)},
            top: { to: (this._top + parseInt(this._height)), from: this._top }
        };
        if (ghost) {
            attributes.opacity = {
                to : 0,
                from: 1
            }
        }
    }

    /**
    * YUI Animation Object
    * @type Object
    */
    this.effect = new YAHOO.util.Anim(this.element, attributes, secs, ease);
    if (opts && opts.bind && (opts.bind == 'bottom')) {
        this.effect.onComplete.subscribe(function() {
            YAHOO.widget.Effects.Hide(this.element);
            YAHOO.util.Dom.setStyle(this.element, 'top', this._top + 'px');
            YAHOO.util.Dom.setStyle(this.element, 'height', this._height + 'px');
            YAHOO.util.Dom.setStyle(this.element, 'opacity', 1);
            this.onEffectComplete.fire();
        }, this, true);
    } else {
        this.effect.onComplete.subscribe(function() {
            YAHOO.util.Dom.setStyle(this.element, 'opacity', 1);
            this.onEffectComplete.fire();
        }, this, true);
    }
    if (!delay) {
        this.animate();
    }
}
/**
* @private
* @method prepStyle
* Preps the style of the element before running the Animation.
*/
YAHOO.widget.Effects.BlindDown.prototype.prepStyle = function() {
    if (this._opts && this._opts.bind && (this._opts.bind == 'bottom')) {
    } else {
        YAHOO.util.Dom.setStyle(this.element, 'height', '0px');
    }
    YAHOO.widget.Effects.Show(this.element);
}
/**
* @method animate
* Fires off the embedded Animation.
*/
YAHOO.widget.Effects.BlindDown.prototype.animate = function() {
    this.prepStyle();
    this.effect.animate();
}
/**
* @method toString
* String function for reporting to YUI Logger
*/
YAHOO.widget.Effects.BlindDown.prototype.toString = function() {
    return 'Effect BlindDown [' + this.element.id + ']';
}
/**
* This effect makes the object slide open from the right.
* @class Effects.BlindRight
* @param {String/HTMLElement} inElm HTML element to apply the effect to
* @param {Object} options Pass in an object of options for this effect, you can choose the Easing and the Duration
* <code> <br>var options = (<br>
*   ease: YAHOO.util.Easing.easeOut,<br>
*   seconds: 1<br>
*   delay: true (Delays execution)<br>
*   bind: (string) right<br>
*   ghost: (boolean)<br>
* )</code><br>
* Setting the bind option will make the element "blind right" from right to left (it will be attached to the right side).
* @return Effect Object (Acess anmiation object via this.effect)
* @type Object
*/
YAHOO.widget.Effects.BlindRight = function(inElm, opts) {
    var ease = ((opts && opts.ease) ? opts.ease : YAHOO.util.Easing.easeOut);
    var secs = ((opts && opts.seconds) ? opts.seconds : 1);
    var delay = ((opts && opts.delay) ? opts.delay : false);
    var ghost = ((opts && opts.ghost) ? opts.ghost : false);
    this.element = YAHOO.util.Dom.get(inElm);

    this._width = parseInt(YAHOO.util.Dom.getStyle(this.element, 'width'));
    this._left = parseInt(YAHOO.util.Dom.getStyle(this.element, 'left'));
    this._opts = opts;

    YAHOO.util.Dom.setStyle(this.element, 'overflow', 'hidden');
    /**
    * Custom Event fired after the effect completes
    * @type Object
    */
    this.onEffectComplete = new YAHOO.util.CustomEvent('oneffectcomplete', this);

    var attributes = {
        width: { from: 0, to: this._width }
    };
    if (ghost) {
        attributes.opacity = {
            to : 1,
            from: 0
        }
    }

    if (opts && opts.bind && (opts.bind == 'right')) {
        var attributes = {
            width: { to: 0 },
            /*left: { from: parseInt, to: this._width }*/
            left: { to: this._left + parseInt(this._width), from: this._left }
        };
        if (ghost) {
            attributes.opacity = {
                to : 0,
                from: 1
            }
        }
    }
    /**
    * YUI Animation Object
    * @type Object
    */
    this.effect = new YAHOO.util.Anim(this.element, attributes, secs, ease);
    if (opts && opts.bind && (opts.bind == 'right')) {
        this.effect.onComplete.subscribe(function() {
            YAHOO.widget.Effects.Hide(this.element);
            YAHOO.util.Dom.setStyle(this.element, 'width', this._width + 'px');
            YAHOO.util.Dom.setStyle(this.element, 'left', this._left + 'px');
            this._width = null;
            YAHOO.util.Dom.setStyle(this.element, 'opacity', 1);
            this.onEffectComplete.fire();
        }, this, true);
    } else {
        this.effect.onComplete.subscribe(function() {
            YAHOO.util.Dom.setStyle(this.element, 'opacity', 1);
            this.onEffectComplete.fire();
        }, this, true);
    }
    if (!delay) {
        this.animate();
    }
}
/**
* @private
* @method prepStyle
* Preps the style of the element before running the Animation.
*/
YAHOO.widget.Effects.BlindRight.prototype.prepStyle = function() {
    if (this._opts && this._opts.bind && (this._opts.bind == 'right')) {
    } else {
        YAHOO.util.Dom.setStyle(this.element, 'width', '0');
    }
}
/**
* @method animate
* Fires off the embedded Animation.
*/
YAHOO.widget.Effects.BlindRight.prototype.animate = function() {
    this.prepStyle();
    this.effect.animate();
}
/**
* @method toString
* String function for reporting to YUI Logger
*/
YAHOO.widget.Effects.BlindRight.prototype.toString = function() {
    return 'Effect BlindRight [' + this.element.id + ']';
}
/**
* This effect makes the object slide closed from the left.
* @class Effects.BlindLeft
* @param {String/HTMLElement} inElm HTML element to apply the effect to
* @param {Object} options Pass in an object of options for this effect, you can choose the Easing and the Duration
* <code> <br>var options = (<br>
*   ease: YAHOO.util.Easing.easeOut,<br>
*   seconds: 1<br>
*   delay: true (Delays execution)<br>
*   bind: (string) right<br>
*   ghost: (boolean)<br>
* )</code><br>
* Setting the bind option will make the element "blind left" from left to right (it will be attached to the right side).
* @return Effect Object (Acess anmiation object via this.effect)
* @type Object
*/
YAHOO.widget.Effects.BlindLeft = function(inElm, opts) {
    var ease = ((opts && opts.ease) ? opts.ease : YAHOO.util.Easing.easeOut);
    var secs = ((opts && opts.seconds) ? opts.seconds : 1);
    var delay = ((opts && opts.delay) ? opts.delay : false);
    var ghost = ((opts && opts.ghost) ? opts.ghost : false);
    this.ghost = ghost;

    this.element = YAHOO.util.Dom.get(inElm);
    this._width = YAHOO.util.Dom.getStyle(this.element, 'width');
    this._left = parseInt(YAHOO.util.Dom.getStyle(this.element, 'left'));


    this._opts = opts;
    YAHOO.util.Dom.setStyle(this.element, 'overflow', 'hidden');
    var attributes = {
        width: { to: 0 }
    };
    if (ghost) {
        attributes.opacity = {
            to : 0,
            from: 1
        }
    }
    
    /**
    * Custom Event fired after the effect completes
    * @type Object
    */
    this.onEffectComplete = new YAHOO.util.CustomEvent('oneffectcomplete', this);


    if (opts && opts.bind && (opts.bind == 'right')) {
        var attributes = {
            width: { from: 0, to: parseInt(this._width) },
            left: { from: this._left + parseInt(this._width), to: this._left }
        };
        if (ghost) {
            attributes.opacity = {
                to : 1,
                from: 0
            }
        }
    }
    
    /**
    * YUI Animation Object
    * @type Object
    */
    this.effect = new YAHOO.util.Anim(this.element, attributes, secs, ease);
    if (opts && opts.bind && (opts.bind == 'right')) {
        this.effect.onComplete.subscribe(function() {
            this.onEffectComplete.fire();
        }, this, true);
    } else {
        this.effect.onComplete.subscribe(function() {
            YAHOO.widget.Effects.Hide(this.element);
            YAHOO.util.Dom.setStyle(this.element, 'width', this._width);
            YAHOO.util.Dom.setStyle(this.element, 'left', this._left + 'px');
            YAHOO.util.Dom.setStyle(this.element, 'opacity', 1);
            this._width = null;
            this.onEffectComplete.fire();
        }, this, true);
    }
    if (!delay) {
        this.animate();
    }
}
/**
* @private
* @method BlindLeft
* Preps the style of the element before running the Animation.
*/
YAHOO.widget.Effects.BlindLeft.prototype.prepStyle = function() {
    if (this._opts && this._opts.bind && (this._opts.bind == 'right')) {
        YAHOO.widget.Effects.Hide(this.element);
        YAHOO.util.Dom.setStyle(this.element, 'width', '0px');
        YAHOO.util.Dom.setStyle(this.element, 'left', parseInt(this._width));
        if (this.ghost) {
            YAHOO.util.Dom.setStyle(this.element, 'opacity', 0);
        }
        YAHOO.widget.Effects.Show(this.element);
    }
}
/**
* @method animate
* Fires off the embedded Animation.
*/
YAHOO.widget.Effects.BlindLeft.prototype.animate = function() {
    this.prepStyle();
    this.effect.animate();
}
/**
* @method toString
* String function for reporting to YUI Logger
*/
YAHOO.widget.Effects.BlindLeft.prototype.toString = function() {
    return 'Effect BlindLeft [' + this.element.id + ']';
}
/**
* This effect makes the object appear to fold up.
* @class Effects.Fold
* @param {String/HTMLElement} inElm HTML element to apply the effect to
* @param {Object} options Pass in an object of options for this effect, you can choose the Easing and the Duration
* <code> <br>var options = (<br>
*   ease: YAHOO.util.Easing.easeOut,<br>
*   seconds: 1,<br>
*   to: 5,<br>
*   delay: true (Delays execution),<br>
*   ghost: (boolean)<br>
* )</code>
* @return Effect Object (Acess anmiation object via this.effect)
* @type Object
*/
YAHOO.widget.Effects.Fold = function(inElm, opts) {
    var ease = ((opts && opts.ease) ? opts.ease : YAHOO.util.Easing.easeOut);
    var secs = ((opts && opts.seconds) ? opts.seconds : 1);
    var delay = ((opts && opts.delay) ? opts.delay : false);
    this.ghost = ((opts && opts.ghost) ? opts.ghost : false);

    this.element = YAHOO.util.Dom.get(inElm);

    this._to = 5;
    if (!delay) {
        YAHOO.widget.Effects.Show(this.element);
    }
    YAHOO.util.Dom.setStyle(this.element, 'overflow', 'hidden');

    this.done = false;

    this._height = parseInt($T.getHeight(this.element));

    this._width = YAHOO.util.Dom.getStyle(this.element, 'width');

    /**
    * Custom Event fired after the effect completes
    * @type Object
    */
    this.onEffectComplete = new YAHOO.util.CustomEvent('oneffectcomplete', this);

    if (opts && opts.to) {
        this._to = opts.to;
    }
    
    var attributes = {
        height: { to: this._to }
    };

    /**
    * YUI Animation Object
    * @type Object
    */
    this.effect = new YAHOO.util.Anim(this.element, attributes, secs, ease);
    this.effect.onComplete.subscribe(function() {
        if (this.done) {
            YAHOO.widget.Effects.Hide(this.element);
            YAHOO.util.Dom.setStyle(this.element, 'height', this._height + 'px');
            YAHOO.util.Dom.setStyle(this.element, 'width', this._width);
            this.onEffectComplete.fire();
        } else {
            this.done = true;
            this.effect.attributes = { width: { to: 0 }, height: { from: this._to, to: this._to } }
            if (this.ghost) {
                this.effect.attributes.opacity = {
                    to : 0, from: 1
                }
            }
            this.animate();
        }
    }, this, true);
    if (!delay) {
        this.animate();
    }
}
/**
* @method animate
* Fires off the embedded Animation.
*/
YAHOO.widget.Effects.Fold.prototype.animate = function() {
    this.effect.animate();
}
/**
* @method toString
* String function for reporting to YUI Logger
*/
YAHOO.widget.Effects.Fold.prototype.toString = function() {
    return 'Effect Fold [' + this.element.id + ']';
}
/**
* This effect makes the object appear to fold out (opposite of Fold).
* @class Effects.UnFold
* @param {String/HTMLElement} inElm HTML element to apply the effect to
* @param {Object} options Pass in an object of options for this effect, you can choose the Easing and the Duration
* <code> <br>var options = (<br>
*   ease: YAHOO.util.Easing.easeOut,<br>
*   seconds: 1,<br>
*   to: 5,<br>
*   delay: true (Delays execution),<br>
*   ghost: (boolean)<br>
* )</code>
* @return Effect Object (Acess anmiation object via this.effect)
* @type Object
*/
YAHOO.widget.Effects.UnFold = function(inElm, opts) {
    var ease = ((opts && opts.ease) ? opts.ease : YAHOO.util.Easing.easeOut);
    var secs = ((opts && opts.seconds) ? opts.seconds : 1);
    var delay = ((opts && opts.delay) ? opts.delay : false);
    this.ghost = ((opts && opts.ghost) ? opts.ghost : false);

    this.element = YAHOO.util.Dom.get(inElm);
    this._height = $T.getHeight(this.element);
    this._width = YAHOO.util.Dom.getStyle(this.element, 'width');

    this._to = 5;
    YAHOO.util.Dom.setStyle(this.element, 'overflow', 'hidden');


    this.done = false;

    /**
    * Custom Event fired after the effect completes
    * @type Object
    */
    this.onEffectComplete = new YAHOO.util.CustomEvent('oneffectcomplete', this);

    if (opts && opts.to) {
        this._to = opts.to;
    }
    
    attributes = {
        height: { from: 0, to: this._to },
        width: { from: 0, to: parseInt(this._width) }
    };
    if (this.ghost) {
        attributes.opacity = {
            to : .15, from: 0
        }
    }
    
    /**
    * YUI Animation Object
    * @type Object
    */
    this.effect = new YAHOO.util.Anim(this.element, attributes, secs, ease);
    this.effect.onComplete.subscribe(function() {
        if (this.done) {
            this.onEffectComplete.fire();
            this.done = false;
        } else {
            this.done = true;
            this.effect.attributes = { width: { from: parseInt(this._width), to: parseInt(this._width) }, height: { from: this._to, to: parseInt(this._height) } }
            if (this.ghost) {
                this.effect.attributes.opacity = {
                    to : 1, from: .15
                }
            }
            this.effect.animate();
        }
    }, this, true);
    if (!delay) {
        this.animate();
    }
}
/**
* @private
* @method prepStyle
* Preps the style of the element before running the Animation.
*/
YAHOO.widget.Effects.UnFold.prototype.prepStyle = function() {
    YAHOO.widget.Effects.Hide(this.element);
    YAHOO.util.Dom.setStyle(this.element, 'height', '0px');
    YAHOO.util.Dom.setStyle(this.element, 'width', '0px');
    this.effect.attributes = attributes;
}
/**
* @method animate
* Fires off the embedded Animation.
*/
YAHOO.widget.Effects.UnFold.prototype.animate = function() {
    this.prepStyle();
    YAHOO.widget.Effects.Show(this.element);
    this.effect.animate();
}
/**
* @method toString
* String function for reporting to YUI Logger
*/
YAHOO.widget.Effects.UnFold.prototype.toString = function() {
    return 'Effect UnFold [' + this.element.id + ']';
}


/**
* This effect makes the object shake from Right to Left.
* @class Effects.ShakeLR
* @param {String/HTMLElement} inElm HTML element to apply the effect to
* @param {Object} options Pass in an object of options for this effect, you can choose the Easing and the Duration
* <code> <br>var options = (<br>
*   ease: YAHOO.util.Easing.easeOut,<br>
*   seconds: .25,<br>
*   delay: true (Delays execution)<br>
*   offset: 10,<br>
*   maxcount: 5<br>
* )</code>
* @return Effect Object (Acess anmiation object via this.effect)
* @type Object
*/
YAHOO.widget.Effects.ShakeLR = function(inElm, opts) {
    this.element = YAHOO.util.Dom.get(inElm);

    this._offSet = 10;
    this._maxCount = 5;
    this._counter = 0;
    this._elmPos = YAHOO.util.Dom.getXY(this.element);
    var attributes = {
        left: { to:  ( - this._offSet) }
    };

    /**
    * Custom Event fired after the effect completes
    * @type Object
    */
    this.onEffectComplete = new YAHOO.util.CustomEvent('oneffectcomplete', this);

    if (opts && opts.offset) {
        this._offSet = opts.offset;
    }
    if (opts && opts.maxcount) {
        this._maxCount = opts.maxcount;
    }
    
    var ease = ((opts && opts.ease) ? opts.ease : YAHOO.util.Easing.easeOut);
    var secs = ((opts && opts.seconds) ? opts.seconds : .25);
    var delay = ((opts && opts.delay) ? opts.delay : false);

    /**
    * YUI Animation Object
    * @type Object
    */
    this.effect = new YAHOO.util.Anim(this.element, attributes, secs, ease);
    this.effect.onComplete.subscribe(function() {
        if (this.done) {
            this.onEffectComplete.fire();
        } else {
            if (this._counter < this._maxCount) {
                this._counter++;
                if (this._left) {
                    this._left = null;
                    this.effect.attributes = { left: { to: ( - this._offSet) } }
                } else {
                    this._left = true;
                    this.effect.attributes = { left: { to: this._offSet } }
                }
                this.effect.animate();
            } else {
                this.done = true;
                this._left = null;
                this._counter = null;
                this.effect.attributes = { left: { to: 0 } }
                this.effect.animate();
            }
        }
    }, this, true);
    if (!delay) {
        this.effect.animate();
    }
}
/**
* @method animate
* Fires off the embedded Animation.
*/
YAHOO.widget.Effects.ShakeLR.prototype.animate = function() {
    this.effect.animate();
}
/**
* @method toString
* String function for reporting to YUI Logger
*/
YAHOO.widget.Effects.ShakeLR.prototype.toString = function() {
    return 'Effect ShakeLR [' + this.element.id + ']';
}
/**
* This effect makes the object shake from Top to Bottom.
* @class Effects.ShakeTB
* @param {String/HTMLElement} inElm HTML element to apply the effect to
* @param {Object} options Pass in an object of options for this effect, you can choose the Easing and the Duration
* <code> <br>var options = (<br>
*   ease: YAHOO.util.Easing.easeOut,<br>
*   seconds: .25,<br>
*   delay: true (Delays execution)<br>
*   offset: 10,<br>
*   maxcount: 5<br>
* )</code>
* @return Effect Object (Acess anmiation object via this.effect)
* @type Object
*/
YAHOO.widget.Effects.ShakeTB = function(inElm, opts) {
    this.element = YAHOO.util.Dom.get(inElm);

    this._offSet = 10;
    this._maxCount = 5;
    this._counter = 0;
    this._elmPos = YAHOO.util.Dom.getXY(this.element);
    var attributes = {
        top: { to:  ( - this._offSet) }
    };

    if (opts && opts.offset) {
        this._offSet = opts.offset;
    }
    if (opts && opts.maxcount) {
        this._maxCount = opts.maxcount;
    }

    /**
    * Custom Event fired after the effect completes
    * @type Object
    */
    this.onEffectComplete = new YAHOO.util.CustomEvent('oneffectcomplete', this);
    
    var ease = ((opts && opts.ease) ? opts.ease : YAHOO.util.Easing.easeOut);
    var secs = ((opts && opts.seconds) ? opts.seconds : .25);
    var delay = ((opts && opts.delay) ? opts.delay : false);

    /**
    * YUI Animation Object
    * @type Object
    */
    this.effect = new YAHOO.util.Anim(this.element, attributes, secs, ease);
    this.effect.onComplete.subscribe(function() {
        if (this.done) {
            this.onEffectComplete.fire();
        } else {
            if (this._counter < this._maxCount) {
                this._counter++;
                if (this._left) {
                    this._left = null;
                    this.effect.attributes = { top: { to: ( - this._offSet) } }
                } else {
                    this._left = true;
                    this.effect.attributes = { top: { to: this._offSet } }
                }
                this.effect.animate();
            } else {
                this.done = true;
                this._left = null;
                this._counter = null;
                this.effect.attributes = { top: { to: 0 } }
                this.effect.animate();
            }
        }
    }, this, true);
    if (!delay) {
        this.effect.animate();
    }
}
/**
* @method animate
* Fires off the embedded Animation.
*/
YAHOO.widget.Effects.ShakeTB.prototype.animate = function() {
    this.effect.animate();
}
/**
* @method toString
* String function for reporting to YUI Logger
*/
YAHOO.widget.Effects.ShakeTB.prototype.toString = function() {
    return 'Effect ShakeTB [' + this.element.id + ']';
}
/**
* This effect makes the object drop from sight.
* @class Effects.Drop
* @param {String/HTMLElement} inElm HTML element to apply the effect to
* @param {Object} options Pass in an object of options for this effect, you can choose the Easing and the Duration
* <code> <br>var options = (<br>
*   ease: YAHOO.util.Easing.easeOut,<br>
*   seconds: 1,<br>
*   delay: true (Delays execution)<br>
* )</code>
* @return Effect Object (Acess anmiation object via this.effect)
* @type Object
*/
YAHOO.widget.Effects.Drop = function(inElm, opts) {
    this.element = YAHOO.util.Dom.get(inElm);


    this._height = parseInt($T.getHeight(this.element));
    this._top = parseInt($D.getStyle(this.element, 'top'));

    var attributes = {
        top: { from: this._top, to: (this._top + this._height) },
        opacity: { from: 1, to: 0 }
    };
    
    /**
    * Custom Event fired after the effect completes
    * @type Object
    */
    this.onEffectComplete = new YAHOO.util.CustomEvent('oneffectcomplete', this);

    var ease = ((opts && opts.ease) ? opts.ease : YAHOO.util.Easing.easeIn);
    var secs = ((opts && opts.seconds) ? opts.seconds : 1);
    var delay = ((opts && opts.delay) ? opts.delay : false);

    /**
    * YUI Animation Object
    * @type Object
    */
    this.effect = new YAHOO.util.Anim(this.element, attributes, secs, ease);
    this.effect.onComplete.subscribe(function() {
        YAHOO.widget.Effects.Hide(this.element);
        YAHOO.util.Dom.setStyle(this.element, 'top', this._top + 'px');
        YAHOO.util.Dom.setStyle(this.element, 'opacity', 1);
        this.onEffectComplete.fire();
    }, this, true);
    if (!delay) {
        this.animate();
    }
}
/**
* @method animate
* Fires off the embedded Animation.
*/
YAHOO.widget.Effects.Drop.prototype.animate = function() {
    this.effect.animate();
}
/**
* @method toString
* String function for reporting to YUI Logger
*/
YAHOO.widget.Effects.Drop.prototype.toString = function() {
    return 'Effect Drop [' + this.element.id + ']';
}
/**
* This effect makes the object flash on and off.
* @class Effects.Pulse
* @param {String/HTMLElement} inElm HTML element to apply the effect to
* @param {Object} options Pass in an object of options for this effect, you can choose the Easing and the Duration
* <code> <br>var options = (<br>
*   ease: YAHOO.util.Easing.easeOut,<br>
*   seconds: .25,<br>
*   delay: true (Delays execution)<br>
*   maxcount: 9<br>
* )</code>
* @return Effect Object (Acess anmiation object via this.effect)
* @type Object
*/
YAHOO.widget.Effects.Pulse = function(inElm, opts) {
    this.element = YAHOO.util.Dom.get(inElm);

    this._counter = 0;
    this._maxCount = 9;
    var attributes = {
        opacity: { from: 1, to: 0 }
    };

    if (opts && opts.maxcount) {
        this._maxCount = opts.maxcount;
    }
    
    /**
    * Custom Event fired after the effect completes
    * @type Object
    */
    this.onEffectComplete = new YAHOO.util.CustomEvent('oneffectcomplete', this);

    var ease = ((opts && opts.ease) ? opts.ease : YAHOO.util.Easing.easeIn);
    var secs = ((opts && opts.seconds) ? opts.seconds : .25);
    var delay = ((opts && opts.delay) ? opts.delay : false);

    /**
    * YUI Animation Object
    * @type Object
    */
    this.effect = new YAHOO.util.Anim(this.element, attributes, secs, ease);
    this.effect.onComplete.subscribe(function() {
        if (this.done) {
            this.onEffectComplete.fire();
        } else {
            if (this._counter < this._maxCount) {
                this._counter++;
                if (this._on) {
                    this._on = null;
                    this.effect.attributes = { opacity: { to: 0 } }
                } else {
                    this._on = true;
                    this.effect.attributes = { opacity: { to: 1 } }
                }
                this.effect.animate();
            } else {
                this.done = true;
                this._on = null;
                this._counter = null;
                this.effect.attributes = { opacity: { to: 1 } }
                this.effect.animate();
            }
        }
    }, this, true);
    if (!delay) {
        this.effect.animate();
    }
}
/**
* @method animate
* Fires off the embedded Animation.
*/
YAHOO.widget.Effects.Pulse.prototype.animate = function() {
    this.effect.animate();
}
/**
* @method toString
* String function for reporting to YUI Logger
*/
YAHOO.widget.Effects.Pulse.prototype.toString = function() {
    return 'Effect Pulse [' + this.element.id + ']';
}
/**
* This effect makes the object shrink from sight.
* @class Effects.Shrink
* @param {String/HTMLElement} inElm HTML element to apply the effect to
* @param {Object} options Pass in an object of options for this effect, you can choose the Easing and the Duration
* <code> <br>var options = (<br>
*   ease: YAHOO.util.Easing.easeOut,<br>
*   seconds: 1,<br>
*   delay: true (Delays execution)<br>
* )</code>
* @return Effect Object (Acess anmiation object via this.effect)
* @type Object
*/
YAHOO.widget.Effects.Shrink = function(inElm, opts) {
    this.start_elm = YAHOO.util.Dom.get(inElm);
    this.element = this.start_elm.cloneNode(true);

    this.start_elm.parentNode.replaceChild(this.element, this.start_elm);
    YAHOO.widget.Effects.Hide(this.start_elm);
    
    YAHOO.util.Dom.setStyle(this.element, 'overflow', 'hidden');

    /**
    * Custom Event fired after the effect completes
    * @type Object
    */
    this.onEffectComplete = new YAHOO.util.CustomEvent('oneffectcomplete', this);
    
    var ease = ((opts && opts.ease) ? opts.ease : YAHOO.util.Easing.easeOut);
    var secs = ((opts && opts.seconds) ? opts.seconds : 1);
    var delay = ((opts && opts.delay) ? opts.delay : false);
    
    var attributes = {
        width: { to: 0 },
        height: { to: 0 },
        fontSize: { from: 100, to: 0, unit: '%' },
        opacity: { from: 1, to: 0 }
    };

    /**
    * YUI Animation Object
    * @type Object
    */
    this.effect = new YAHOO.util.Anim(this.element, attributes, secs, ease);
    this.effect.onComplete.subscribe(function() {
        this.element.parentNode.replaceChild(this.start_elm, this.element);
        this.onEffectComplete.fire();
    }, this, true);
    if (!delay) {
        this.effect.animate();
    }
}
/**
* @method animate
* Fires off the embedded Animation.
*/
YAHOO.widget.Effects.Shrink.prototype.animate = function() {
    this.effect.animate();
}
/**
* @method toString
* String function for reporting to YUI Logger
*/
YAHOO.widget.Effects.Shrink.prototype.toString = function() {
    return 'Effect Shrink [' + this.element.id + ']';
}
/**
* This effect makes the object grow.
* @class Effects.Grow
* @param {String/HTMLElement} inElm HTML element to apply the effect to
* @param {Object} options Pass in an object of options for this effect, you can choose the Easing and the Duration
* <code> <br>var options = (<br>
*   ease: YAHOO.util.Easing.easeOut,<br>
*   seconds: 1,<br>
*   delay: true (Delays execution)<br>
* )</code>
* @return Effect Object (Acess anmiation object via this.effect)
* @type Object
*/
YAHOO.widget.Effects.Grow = function(inElm, opts) {
    this.element = YAHOO.util.Dom.get(inElm);

    
    var h = parseInt($T.getHeight(this.element));
    var w = parseInt(YAHOO.util.Dom.getStyle(this.element, 'width'));
    YAHOO.util.Dom.setStyle(this.element, 'overflow', 'hidden');

    /**
    * Custom Event fired after the effect completes
    * @type Object
    */
    this.onEffectComplete = new YAHOO.util.CustomEvent('oneffectcomplete', this);
    
    var ease = ((opts && opts.ease) ? opts.ease : YAHOO.util.Easing.easeOut);
    var secs = ((opts && opts.seconds) ? opts.seconds : 1);
    var delay = ((opts && opts.delay) ? opts.delay : false);
    
    var attributes = {
        width: { to: w, from: 0 },
        height: { to: h, from: 0 },
        fontSize: { from: 0, to: 100, unit: '%' },
        opacity: { from: 0, to: 1 }
    };

    /**
    * YUI Animation Object
    * @type Object
    */
    this.effect = new YAHOO.util.Anim(this.element, attributes, secs, ease);
    this.effect.onComplete.subscribe(function() {
        this.onEffectComplete.fire();
    }, this, true);
    if (!delay) {
        this.animate();
    }
}
/**
* @method animate
* Fires off the embedded Animation.
*/
YAHOO.widget.Effects.Grow.prototype.animate = function() {
    this.effect.animate();
}
/**
* @method toString
* String function for reporting to YUI Logger
*/
YAHOO.widget.Effects.Grow.prototype.toString = function() {
    return 'Effect Grow [' + this.element.id + ']';
}
/**
* This effect makes the object act like an old TV set.
* @class Effects.TV
* @param {String/HTMLElement} inElm HTML element to apply the effect to
* @param {Object} options Pass in an object of options for this effect, you can choose the Easing and the Duration
* <code> <br>var options = (<br>
*   ease: YAHOO.util.Easing.easeOut,<br>
*   seconds: 1,<br>
*   delay: true (Delays execution)<br>
* )</code>
* @return Effect Object (Acess anmiation object via this.effect)
* @type Object
*/
YAHOO.widget.Effects.TV = function(inElm, opts) {
    var ease = ((opts && opts.ease) ? opts.ease : YAHOO.util.Easing.easeIn);
    var secs = ((opts && opts.seconds) ? opts.seconds : 1);
    var delay = ((opts && opts.delay) ? opts.delay : false);

    this.element = YAHOO.util.Dom.get(inElm);

    this.done = false;

    this._height = parseInt($T.getHeight(this.element));
    this._width = parseInt(YAHOO.util.Dom.getStyle(this.element, 'width'));
    YAHOO.util.Dom.setStyle(this.element, 'overflow', 'hidden');

    var attributes = {
        top: { from: 0, to: (this._height / 2) },
        height: { to: 5 }
    };
    
    /**
    * Custom Event fired after the effect completes
    * @type Object
    */
    this.onEffectComplete = new YAHOO.util.CustomEvent('oneffectcomplete', this);


    /**
    * YUI Animation Object
    * @type Object
    */
    this.effect = new YAHOO.util.Anim(this.element, attributes, secs, ease);
    this.effect.onComplete.subscribe(function() {
        if (this.done) {
            this.onEffectComplete.fire();
            YAHOO.widget.Effects.Hide(this.element);
            YAHOO.util.Dom.setStyle(this.element, 'height', this._height + 'px');
            YAHOO.util.Dom.setStyle(this.element, 'width', this._width + 'px');
            YAHOO.util.Dom.setStyle(this.element, 'top', '');
            YAHOO.util.Dom.setStyle(this.element, 'left', '');
            YAHOO.util.Dom.setStyle(this.element, 'opacity', '1');
        } else {
            this.done = true;
            this.effect.attributes = { top: { from: (this._height / 2), to: (this._height / 2) }, left: { from: 0, to: (this._width / 2) }, height: { from: 5, to: 5 }, width: { to: 5 }, opacity: { from: 1, to: 0 } };
            this.effect.animate();
        }
    }, this, true);
    if (!delay) {
        this.animate();
    }
}
/**
* @method animate
* Fires off the embedded Animation.
*/
YAHOO.widget.Effects.TV.prototype.animate = function() {
    this.effect.animate();
}
/**
* @method toString
* String function for reporting to YUI Logger
*/
YAHOO.widget.Effects.TV.prototype.toString = function() {
    return 'Effect TV [' + this.element.id + ']';
}
/**
* This effect makes the object expand & dissappear.
* @class Effects.Shadow
* @param {String/HTMLElement} inElm HTML element to apply the effect to
* @param {Object} options Pass in an object of options for this effect, you can choose the Easing and the Duration
* <code> <br>var options = (<br>
*   delay: true<br>
*   topOffset: 8<br>
*   leftOffset: 8<br>
*   shadowColor: #ccc<br>
*   shadowOpacity: .75<br>
* )</code>
* @return Animation Object
* @type Object
*/
YAHOO.widget.Effects.Shadow = function(inElm, opts) {
    var delay = ((opts && opts.delay) ? opts.delay : false);
    var topOffset = ((opts && opts.top) ? opts.top : 8);
    var leftOffset = ((opts && opts.left) ? opts.left : 8);
    var shadowColor = ((opts && opts.color) ? opts.color : '#ccc');
    var shadowOpacity = ((opts && opts.opacity) ? opts.opacity : .75);

    this.element = YAHOO.util.Dom.get(inElm);

    
    if (YAHOO.util.Dom.get(this.element.id + '_shadow')) {
        this.shadow = YAHOO.util.Dom.get(this.element.id + '_shadow');
    } else {
        this.shadow = document.createElement('div');
        this.shadow.id = this.element.id + '_shadow';
        this.element.parentNode.appendChild(this.shadow);
    }

    var h = parseInt($T.getHeight(this.element));
    var w = parseInt(YAHOO.util.Dom.getStyle(this.element, 'width'));
    var z = this.element.style.zIndex;
    if (!z) {
        z = 1;
        this.element.style.zIndex = z;
    }

    YAHOO.util.Dom.setStyle(this.element, 'overflow', 'hidden');
    YAHOO.util.Dom.setStyle(this.shadow, 'height', h + 'px');
    YAHOO.util.Dom.setStyle(this.shadow, 'width', w + 'px');
    YAHOO.util.Dom.setStyle(this.shadow, 'background-color', shadowColor);
    YAHOO.util.Dom.setStyle(this.shadow, 'opacity', 0);
    YAHOO.util.Dom.setStyle(this.shadow, 'position', 'absolute');
    this.shadow.style.zIndex = (z - 1);
    var xy = YAHOO.util.Dom.getXY(this.element);

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
* @method animate
* Fires off the embedded Animation.
*/
YAHOO.widget.Effects.Shadow.prototype.animate = function() {
    this.effect.animate();
}
/**
* @method toString
* String function for reporting to YUI Logger
*/
YAHOO.widget.Effects.Shadow.prototype.toString = function() {
    return 'Effect Shadow [' + this.element.id + ']';
}
/**
* This effect makes the object expand & dissappear.
* @class Effects.Puff
* @param {String/HTMLElement} inElm HTML element to apply the effect to
* @param {Object} options Pass in an object of options for this effect, you can choose the Easing and the Duration
* <code> <br>var options = (<br>
*   ease: YAHOO.util.Easing.easeOut,<br>
*   seconds: 1<br>
* )</code>
* @return Animation Object
* @type Object
*/
YAHOO.widget.Effects.Puff = function(inElm, opts) {
    var start_elm = YAHOO.util.Dom.get(inElm);
    /**
    * DOM manipulation...
    * @type HTMLElement
    */
    this.element = start_this.element.cloneNode(true);

    start_this.element.parentNode.replaceChild(this.element, start_elm);
    YAHOO.widget.Effects.Hide(start_elm);
    
    /**
    * Current location on the page
    * @type Array
    */
    var xy = YAHOO.util.Dom.getXY(this.element);
    /**
    * Get the Height
    * @type Integer
    */
    var h = parseInt($T.getHeight(this.element));
    /**
    * Get the Width
    * @type Integer
    */
    var w = parseInt(YAHOO.util.Dom.getStyle(this.element, 'width'));
    
    /**
    * One and a Half Times Bigger than it is
    */
    var nh = ((h / 2) + h);
    var nw = ((w / 2) + w);
    /**
    * Adjust position based on the new height and width
    */
    var nto = ((nh - h) / 2);
    var nlo = ((nw - w) / 2);
    var nt = xy[1] - nto;
    var nl = xy[0] - nlo;
    
    /**
    * Position needs to be absolute, so the new Height & Width will work
    */
    YAHOO.util.Dom.setStyle(this.element, 'position', 'absolute');
    
    var attributes = {
        top: { to: nt },
        left: { to: nl },
        width: { to: nw },
        height: { to: nh },
        opacity: { from: 1, to: 0 }
    };
    
    var ease = ((opts && opts.ease) ? opts.ease : YAHOO.util.Easing.easeOut);
    var secs = ((opts && opts.seconds) ? opts.seconds : 1);

    var puff = new YAHOO.util.Anim(this.element, attributes, secs, ease);
    puff.onComplete.subscribe(function() {
        this.element = this.getEl();
        /**
        * Replace the "cloned" element so we can put the original back with display:none set from above
        */
        this.element.parentNode.replaceChild(start_elm, elm);
    });
    puff.animate();
    
    return puff;
}


if (!YAHOO.Tools) {
    $T = {
        getHeight: function(el) {
            return YAHOO.util.Dom.getStyle(el, 'height');
        }
    }
}


