var mn = $(".navbar");
mns = "navbar-scrolled";
hdr = $('header').height();

/*IF THE CONTENT REACHES A CERTAIN HEIGHT (IN THIS CASE 300PX AFTER MUCH TESTING)
	add the navbar-scrolled class which will add new attributes and fucntion
	*/
$(window).scroll(function(){
	if( $(this).scrollTop() > 950){
		mn.addClass(mns);
		nl.addClass(nls);
	}
	else{
		mn.removeClass(mns);
		nl.addClass(nls);
	}
});