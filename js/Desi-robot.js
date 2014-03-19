
var isDetailPrint = false;

$('#body').mouseover(function(e){
	onhover(e);
});


$('#body').mouseout(function(e){
	onleave(e);
});

$('body').mousemove(function(e){
	onmove(e);
});


function onhover(e){
				
	var $hands=$(".hands")
	var h1 = $('div',$hands[0]);
	$(h1[0]).removeClass();
	$(h1[0]).addClass('upper-hand1');
	$(h1[1]).removeClass();
	$(h1[1]).addClass('middle-hand1');
	$(h1[2]).removeClass();
	$(h1[2]).addClass('lower-hand1');
	h1 = $('div',$hands[1]);
	$(h1[0]).removeClass();
	$(h1[0]).addClass('upper-righthand1');
	$(h1[1]).removeClass();
	$(h1[1]).addClass('middle-righthand1');
	$(h1[2]).removeClass();
	$(h1[2]).addClass('lower-righthand1');
	
	$('#mouth').removeClass();
	$('#mouth').addClass('mouth-happy');
	$('#leftleg-middle').removeClass();
	$('#leftleg-middle').addClass('middle');
	$('#rightleg-middle').removeClass();
	$('#rightleg-middle').addClass('middle');
				
}
			
function onleave(e){
	
	if(!isDetailPrint) {
	var hands = $(".hands");
	
	var h1=$('div',hands[0]);
	$(h1[0]).removeClass();
	$(h1[0]).addClass('upper-hand');
	$(h1[1]).removeClass();
	$(h1[1]).addClass('middle-hand');
	$(h1[2]).removeClass();
	$(h1[2]).addClass('lower-hand');
	
	h1=$('div',hands[1]);
	$(h1[0]).removeClass();
	$(h1[0]).addClass('upper-righthand');
	$(h1[1]).removeClass();
	$(h1[1]).addClass('middle-righthand');
	$(h1[2]).removeClass();
	$(h1[2]).addClass('lower-righthand');
	
	
	$('#mouth').removeClass();
    $('#mouth').addClass('mouth-sad');
    $('#leftleg-middle').removeClass();
    $('#leftleg-middle').addClass('middle1');
    $('#rightleg-middle').removeClass();
	$('#rightleg-middle').addClass('middle1');
	}
}
			
function onmove(e){
	var x=(e.clientX);
	var y=(e.clientY);
	var f = 0;
	var m=$('.eyeball');
	var ymin = $('#body').offset().top;
	var ymax = ymin + $('#body').height();
	ymin = $('.sub-connector').offset().top 
    if(y<ymin){
	   $(m[0]).css('top','0px');
	   $(m[1]).css('top','0px');
	   //f++;
	}else if(y<ymax){
	   $(m[0]).css('top','2px');
	   $(m[1]).css('top','2px');
	   f++;
	}else{
	   $(m[0]).css('top','4px');
	   $(m[1]).css('top','4px');
    }
	
	
	var xmin = $('#body').offset().left;
	var xmax = xmin + $('#body').width();
	if(x>=xmax){
		$(m[0]).css('left','9px');
		$(m[1]).css('left','9px');
	}else if(x>=xmin){
		$(m[0]).css('left','5px');
		$(m[1]).css('left','5px');
		f++;
	}else{
		$(m[0]).css('left','0px');
		$(m[1]).css('left','0px');
	}
	
	if(!isDetailPrint && f == 2) {
		isDetailPrint = true;
		showInfo();
		onhover(e);
	}
}

function showInfo() {
    var $cartoon = $('#cartoon');
    $cartoon.css('padding-left','10%');

    $('#cartoon').animate({
        'width' : '30%'
    },100,'linear',function(){
        $('#info').css('display','block');
        $('#footer').css('display','block');
    });


	/*$('#cartoon').css({
		'float': 'right',
		'padding-left' : '30%'
		
	});*/
}
