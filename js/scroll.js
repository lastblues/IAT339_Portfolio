var mn = $(".navbar");
mns = "navbar-scrolled";
hdr = $('header').height();

$(window).scroll(function(){
	if( $(this).scrollTop() > 250){
		mn.addClass(mns);
	}
	else{
		mn.removeClass(mns);
	}
});