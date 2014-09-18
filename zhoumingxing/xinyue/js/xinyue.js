$(function(){
	$(".menu ul li a").hover(function(){
		$(this).css("background",'url("css/images/menunow.jpg")');
		$(this).css("color","#000");
	},function(){
		$(this).css("background","");
		$(this).css("color","");
	});
	dmarquee();
});


function dmarquee(lineheight, speed, delay, id) {	
	this.t; this.p = false; this.o = Dd(id); this.h = this.o.innerHTML; if(this.h.length < 10) return;
	this.o.innerHTML = '<div id="'+id+'_tmp"><div>'+this.h+'</div></div>';
	var h1 = Number(Dd(id).style.height.replace('px', '')); var h2 = Dd(id+'_tmp').scrollHeight;
	if(lineheight == -1) {alert(h2); return;}
	if(h2*2 <= h1) { this.o.innerHTML = this.h; return; } else if(h2 >= h1) { this.o.innerHTML = this.h + this.h; } else { this.o.innerHTML = this.h + this.h + this.h;	}
	this.o.scrollTop = 0; var _this = this;
	this.o.onmouseover = function() {_this.p = true;} 
	this.o.onmouseout = function() {_this.p = false;}
	this.start = function() { this.t = setInterval(function() {_this.scrolling();}, speed); if(!this.p) {this.o.scrollTop += 1;} } 
	this.scrolling = function() { if(this.o.scrollTop%lineheight !=0) { this.o.scrollTop += 1; if(this.o.scrollTop == h2) this.o.scrollTop = 0; } else { clearInterval(this.t); setTimeout(function() {_this.start();}, delay); } }
	setTimeout(function() {_this.start();}, delay);
}









/*function show_date() {
	var dt_day = dt_month = dt_weekday = '';
	var dt_week = [L['Sunday'], L['Monday'], L['Tuesday'], L['Wednesday'], L['Thursday'], L['Friday'], L['Saturday']];
	dt_today = new Date();
	dt_weekday = dt_today.getDay();
	dt_month = dt_today.getMonth()+1;
	dt_day = dt_today.getDate();
	document.write(lang(L['show_date'], [dt_month, dt_day, dt_week[dt_weekday]]));
}*/