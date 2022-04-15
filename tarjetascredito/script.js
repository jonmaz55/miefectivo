///boton subir
$(document).ready(function(){

	$('.subir').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.subir').slideDown(300);
		} else {
			$('.subir').slideUp(300);
		}
	});

});
////////////////////////////////////////
///////sub-menu fijo//////////////////
posicionarMenu();

$(window).scroll(function() {    
    posicionarMenu();
});

function posicionarMenu() {
    var altura_del_header = $('.header').outerHeight(true);
    var altura_del_menu = $('.sub-menu').outerHeight(true);

    if ($(window).scrollTop() >= altura_del_header){
        $('.sub-menu').addClass('fixed');
        $('.wrapper').css('margin-top', (altura_del_menu) + 'px');
    } else {
        $('.sub-menu').removeClass('fixed');
        $('.wrapper').css('margin-top', '0');
    }
}
///////////////////////////////////////