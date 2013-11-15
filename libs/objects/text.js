"use strict";

var SvgObject = require(__dirname + '/svgobject');

var Text = function(){
    SvgObject.call(this);
};

Text.prototype          = new SvgObject();
Text.prototype.type     = 'text';
Text.prototype.value    = "";
Text.prototype.x        = 0;
Text.prototype.y        = 0;
Text.prototype.childs   = [];

module.exports = Text;

module.exports.fromNode = function(node){
    var text = new Text();

    SvgObject.fromNode.call(this, node);

    if(typeof node != 'undefined'){
        if(typeof node.$ != 'undefined'){
            if(typeof node.$.x != 'undefined'){
                text.x = node.$.x;
            }
            if(typeof node.$.y != 'undefined'){
                text.y = node.$.y;
            }
        }

        if(typeof node._ != 'undefined'){
            text.value = node._;
        }

        if(typeof node.tspan != 'undefined'){
            // we are children
        }
    }


    return text;
};