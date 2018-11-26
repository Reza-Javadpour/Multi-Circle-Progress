var c = document.getElementById("mcp");
var ctx = c.getContext("2d");
var arc_x = c.dataset.arc_x;
var arc_y = c.dataset.arc_y;
var arc_radius = c.dataset.arc_radius;

ctx.beginPath();
ctx.arc(arc_x, arc_y, arc_radius, 0 * Math.PI, 2 * Math.PI);
ctx.strokeStyle = c.dataset.arc_color_bg;
ctx.lineWidth= (c.dataset.arc_size_bg - 1);
ctx.stroke();

var arc1_per = c.dataset.arc_per_1;
var arc1_to_c = (arc1_per / 50 );
var arc1_next_start = arc1_to_c;
arc1_per = startAt12(arc1_to_c) * Math.PI;
var arc1_start = startAt12(0) * Math.PI;
ctx.beginPath();
ctx.arc(arc_x, arc_y, arc_radius, arc1_start, arc1_per);
ctx.strokeStyle = c.dataset.arc_color_1;
ctx.lineWidth= c.dataset.arc_size_1;
ctx.stroke();

var arc2_per = c.dataset.arc_per_2;
var arc2_to_c = (arc2_per / 50);
var arc2_next_start = arc2_to_c;
arc2_per = startAt12(arc1_next_start + arc2_to_c) * Math.PI;
var arc2_start = startAt12(arc1_next_start) * Math.PI;
ctx.beginPath();
ctx.arc(arc_x, arc_y, arc_radius, arc2_start , arc2_per);
ctx.strokeStyle = c.dataset.arc_color_2;
ctx.lineWidth= c.dataset.arc_size_2;
ctx.stroke();


var arc3_per = c.dataset.arc_per_3;
var arc3_to_c = (arc3_per / 50);
var arc3_next_start = arc3_to_c;
arc3_per = startAt12(arc1_next_start + arc2_next_start + arc3_to_c) * Math.PI;
var arc3_start = startAt12(arc1_next_start + arc2_next_start) * Math.PI;
ctx.beginPath();
ctx.arc(arc_x, arc_y, arc_radius, arc3_start , arc3_per);
ctx.strokeStyle = c.dataset.arc_color_3;
ctx.lineWidth= c.dataset.arc_size_3;
ctx.stroke();

var arc4_per = c.dataset.arc_per_4;
var arc4_to_c = (arc4_per / 50);
var arc4_next_start = arc4_to_c;
arc4_per = startAt12(arc1_next_start + arc2_next_start + arc3_next_start + arc4_to_c) * Math.PI;
var arc4_start = startAt12(arc1_next_start + arc2_next_start + arc3_next_start) * Math.PI;
ctx.beginPath();
ctx.arc(arc_x, arc_y, arc_radius, arc4_start , arc4_per);
ctx.strokeStyle = c.dataset.arc_color_4;
ctx.lineWidth= c.dataset.arc_size_4;
ctx.stroke();

var arc5_per = c.dataset.arc_per_5;
var arc5_to_c = (arc5_per / 50);
var arc5_next_start = arc5_to_c;
arc5_per = startAt12(arc1_next_start + arc2_next_start + arc3_next_start + arc4_next_start + arc5_to_c) * Math.PI;
var arc5_start = startAt12(arc1_next_start + arc2_next_start + arc3_next_start + arc4_next_start) * Math.PI;
ctx.beginPath();
ctx.arc(arc_x, arc_y, arc_radius, arc5_start , arc5_per);
ctx.strokeStyle = c.dataset.arc_color_5;
ctx.lineWidth= c.dataset.arc_size_5;
ctx.stroke();

function startAt12(value){
    return (value - 0.5);
}

function startAt3(value){
    return (value);
}

function startAt6(value){
    return (value + 0.5);
}

function startAt9(value){
    return (value - 1);
}