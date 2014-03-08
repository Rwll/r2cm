var $vid = $('video','#container');
var $msg = $('#custom-message'); 
$msg.css({
    top:$vid.offset().top + (($vid.height()/2) - ($msg.height()/2)),
    left:$vid.offset().left + (($vid.width()/2) - ($msg.width()/2))
});