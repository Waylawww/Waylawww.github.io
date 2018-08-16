$.fn.typewriter = function() {
		var $ele = $(this), str = $ele.html(), progress = 0;
		$ele.html('');
		var timer = setInterval(function() {
			var current = str.substr(progress, 1);
			if (current == '<') {
				progress = str.indexOf('>', progress) + 1;
			} else {
				progress++;
			}
			$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
			if (progress >= str.length) {
				clearInterval(timer);
				aa();
				setTimeout("b()",4000);
			}
		}, 10);
};
$.fn.typewriter222 = function() {
		var $ele = $(this), str = $ele.html(), progress = 0;
		$ele.html('');
		var timer = setInterval(function() {
			var current = str.substr(progress, 1);
			if (current == '<') {
				progress = str.indexOf('>', progress) + 1;
			} else {
				progress++;
			}
			$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
			if (progress >= str.length) {
				clearInterval(timer);
				aa();
				setTimeout("b()",4000);
			}
		}, 100);
};

function aa(){
	$(".container4,.star").show();
	$("img").css("-webkit-animation","move15 6s infinite linear alternate");
}
function b(){
	$(".box").css("-webkit-animation","move 10s infinite linear");
}



(function(a){  
	$.fn.star_3d=function(p){  
        var p=p||{};  
  
        var w_w=p&&p.window_width?p.window_width:"500";  
        var w_h=p&&p.window_height?p.window_height:"400";  
        var w_b=p&&p.window_background?p.window_background:"#000";  
        var s_c=p&&p.star_count?p.star_count:"600";  
        var s_color=p&&p.star_color?p.star_color:"#FFF";  
        var s_d=p&&p.star_depth?p.star_depth:"250";  
        var dom=a(this);  
        var fov = parseInt(s_d);  
        var SCREEN_WIDTH = parseInt(w_w);  
        var SCREEN_HEIGHT = parseInt(w_h);  
        var HALF_WIDTH = SCREEN_WIDTH/2;  
        var HALF_HEIGHT = SCREEN_HEIGHT/2;  
        var c_id = dom.attr("id");  
        var numPoints = s_c;  
        dom.attr({ width: w_w, height: w_h});  
        setup();  
        function setup()  
        {  
            function draw3Din2D(point3d)  
            {  
                x3d = point3d[0];  
                y3d = point3d[1];  
                z3d = point3d[2];  
                var scale = fov/(fov+z3d);  
                var x2d = (x3d * scale) + HALF_WIDTH;  
                var y2d = (y3d * scale)  + HALF_HEIGHT;  
  
                c.lineWidth= scale;  
                c.strokeStyle = s_color;  
                c.fillStyle = s_color;  
                c.beginPath(); 
                //↓绘制图案
                c.arc(x2d,y2d,3,0,Math.PI);
            	/*c.moveTo(x2d,y2d);  
                c.lineTo(x2d+scale,y2d);*/
                c.stroke();
               
                
                
                
            }  
  
            var canvas = document.getElementById(c_id);  
            var c = canvas.getContext('2d');  
            var points = [];  
  
            function initPoints()  
            {  
                for (i=0; i<numPoints; i++)  
                {  
                    point = [(Math.random()*400)-200, (Math.random()*400)-200 , (Math.random()*400)-200 ];  
                    points.push(point);  
                }  
  
            }  
  
            function render()  
            {  
                c.fillStyle=w_b;  
                c.fillRect(0,0, SCREEN_WIDTH, SCREEN_HEIGHT);  
  
                for (i=0; i<numPoints; i++)  
                {  
                    point3d = points[i];  
  
                    z3d = point3d[2];  
                    z3d-=4;  
                    if(z3d<-fov) z3d +=400;  
                    point3d[2] = z3d;  
  
                    draw3Din2D(point3d);  
  
                }  
                var show = document.getElementById('show');  
                show.appendChild('p');  
            }  
  
            initPoints();  
  
            var loop = setInterval(function(){  
                render();  
            }, 50);  
  
        }  
       }  
})(jQuery); 