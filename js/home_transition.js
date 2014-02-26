$(document).ready(function(){
	function scrollToAnchor(aid){
	    var aTag = $("a[name='"+ aid +"']");
	    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
	}
	$('#scroll_one').click(function(){
		scrollToAnchor("aboutus");
	});
	$('#pane2_next_btn').click(function(){
		scrollToAnchor("pane3");
	});
	$('#pane3_next_btn').click(function(){
		scrollToAnchor("pane4");
	});
	$('#back_to_top').click(function(){
		scrollToAnchor("top");
	});
	$('#register_link').click(function(){
		scrollToAnchor("pane4");
	});

    $("#shitBTN").popover({ 
    	html : 'false' ,
    	placement : 'bottom'
    });   
});