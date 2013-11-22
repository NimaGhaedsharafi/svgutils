/**
 * Unit Test for manipulating existing Svg file
 */


var svg         = null,
    svgPath     = __dirname + '/../demo/test.svg',
    svgutils    = require(__dirname + '/../index');

describe('Manipulating existing File', function(){
    it("load Svg", function(done){
        svgutils.Svg.fromSvgDocument(svgPath, function(error, svgObject){
            if(error){
                done(error);
                return;
            }

            if(typeof svgObject == 'undefined'){
                done(new Error("No Svg created"));
                return;
            }

            if((svgObject instanceof svgutils.Svg) == false){
                done(new Error("no correct object returned"));
                return;
            }

            svg = svgObject;
            done();
        });
    });
    it("check root elements", function(done){
        if(svg == null){
            done(new Error("Svg is null"));
            return;
        }
        if(svg.elements.length != 1){
            done(new Error("No correct number of element are count"));
            return;
        }
        if(svg.elements[0].type != 'g'){
            done(new Error("Element is not a group"));
            return;
        }
        done();
    });
    it("find all polygons in SVG", function(done){
        if(svg == null){
            done(new Error("Svg is null"));
            return;
        }
        var findSvg = svg.findByType('polygon', true);
        if(findSvg.elements.length != 1){
            done(new Error("No correct number of polygons were founds"));
            return;
        }
        done();
    });
});