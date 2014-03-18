// JavaScript Document
$( document ).ready(function() {
	var estado_intro=0;
	var secciones_intro=3
	$('#atras_intro').fadeOut(0);
	
    /*var ids = [];
    $(".contenedor_texto_intro").children().each(function(){
		var tabId = this.id.split("_").pop(); // => "Tabs1"
		if(tabId!=1){
			$(this).fadeOut();
		}
    });*/
	
	
$( "#adelante_intro" ).click(function() {
	if(estado_intro<secciones_intro-1){
		percent = -0.33;
		add_width = (percent*$('.contenedor_informacion').parent().width())+'px';
		estado_intro+=1;
		$('.contenedor_texto_intro').animate({'marginLeft': '+='+add_width}, 
			{
				duration:1000,
        		easing: 'easeInOutExpo'
		});	
		if(estado_intro>0){
		$('#atras_intro').fadeIn();
		}
		if(estado_intro==secciones_intro-1){
		$('#adelante_intro').fadeOut();
		}
	}/*
    $(".contenedor_texto_intro").children().each(function(){
		var tabId = this.id.split("_").pop(); // => "Tabs1"
		if(tabId==(estado_intro+1)){
			$(this).fadeIn();
		}else{
			$(this).fadeOut();
		}
    });*/
	
});
	
$( "#atras_intro" ).click(function() {
	if(estado_intro>0){
		$('#adelante_intro').fadeIn();
		percent = 0.33;
		add_width = (percent*$('.contenedor_informacion').parent().width())+'px';
		estado_intro-=1;
		$('.contenedor_texto_intro').animate({'marginLeft': '+='+add_width}, 
			{
				duration:1000,
        		easing: 'easeInOutExpo'
		});
		if(estado_intro==0){
		$('#atras_intro').fadeOut();
		}
	}
});

$(window).resize(function(){
		
	reset_distance = $('.contenedor_informacion').parent().width();
	
	$('.contenedor_texto_intro').animate({'marginLeft': ((reset_distance/3)*estado_intro)*-1}, 	
		{
			duration:0,
        	easing: 'easeInOutExpo'
		});	
});
});