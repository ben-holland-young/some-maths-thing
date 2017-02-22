// use math.js
var app = new Vue({
    el: '#app',
    data: {
        input: "",
        output: "",

    },
    methods: {
        chain: function() {
            this.input = this.output;
        },
        derive: function() {
            var result = math.derivative(this.input,"x").toString();
            this.output = result;
        },
        simplify: function() {
            var result = math.simplify(this.input).toString();
            this.output = result;
        },
        quadratic: function() {
            var split = this.input.split(",");
            var a = parseInt(split[0]);
            var b = parseInt(split[1]);
            var c = parseInt(split[2]);
            var result_pos = -(b)+(math.sqrt(((b)^2)-(4*(a*c))))/(2*a);
            var result_neg = -(b)-(math.sqrt(((b)^2)-(4*(a*c))))/(2*a);
            var result = [result_pos, result_neg];
            var str = "Positive: " + result[0] + " Negative: " + result[1];
            this.output = str;
        },
        squareArea: function () {
            var split = this.input.split(",");
            var height = parseInt(split[0]);
            var width = parseInt(split[1]);
            var result = height * width;
            this.output = result;


        },
        rectangleArea: function() {
            var split = this.input.split(",");
            var height = parseInt(split[0]);
            var width = parseInt(split[1]);
            var result = height * width;
            this.output = result;

        },
        triangleArea: function() {
            var split = this.input.split(",");
            var base = parseInt(split[0]);
            var height = parseInt(split[1]);
            var result = (height * base) / 2;
            this.output = result;


        },
        trapezoidArea: function() {
            var split = this.input.split(",");
            var b1 = parseInt(split[0]);
            var b2 = parseInt(split[1]);
            var h = parseInt(split[2]);
            var result = (b1+b2)*(h/2);
            this.output = result;

        },
        circleArea: function() {
            var area = Math.PI * (math.sqr(this.input));
            var circum = Math.PI * (this.input*2);
            var result = [area, circum];
            this.output = "A: " + result[0] +" C: " + result[1];
        
        }, //return array for circum too
        cubeVolume: function() {
            var result = math.pow(this.result,3);
            this.output = result;
        
        },
        rectPrismVolume: function() {
            var split = this.input.split(",");
            var a = parseInt(split[0]);
            var b = parseInt(split[1]);
            var c = parseInt(split[2]);
            var result = a * b * c;
            this.output = result;
        
        },
        cylinderVolume: function() {
            var split = this.input.split(",");
            var r = parseInt(split[0]);
            var h = parseInt(split[1]);
            var result = Math.PI * (math.pow(r,2)) * h;
            this.output = result;
        },
        pyramidVolume: function() {},
        coneVolume: function() {},
        sphereVolume: function() {},
        ellipsoidVolume: function() {},
        triangleAngle: function() {},
        pythagoras: function() {},
        gradient: function() {},
        trig: function() {}, //will take string like cosh, 6 and split it
        indices: function() {},
        surds: function() {},
        factorial: function() {},
        mean: function() {},
        mode: function () {},
        median: function() {},
        range: function() {},
        sum: function() {},
        unit: function() {},
        gcm: function() {},
        lcm: function() {},
        nthroot: function() {},
        power: function() {},
        root: function() {},
        square: function() {},
        cube: function() {},
        cubeRoot: function() {},
        randomInt: function() {},
        isPrime: function() {}


    }
});
//console.log(math.sqrt(4));
//ideas
//areas
//volumes
//factorising
//simplifying
//indices
//surds
//graphing
//differentiation
//fractionality multiplication
//basic arithmetic
