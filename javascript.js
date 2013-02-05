$(document).ready(function() {
	// this will get the full URL at the address bar
    var url = window.location.href; 

    // passes on every "a" tag 
    $("a").each(function() {
            // checks if its the same on the address bar
        if(url == (this.href)) { 
            $(this).closest("div").replaceWith($('active')); //this doesn't work not sure why
    
        }
    }); 
	
	$('.home-menu').mouseover(function() {
		$(this).css({'background-color': '#c5c5ad', 'border': 'solid #3a3a52', 'color': '#3a3a52'});
		$('.home-menu a:link').css({'color': '#3a3a52'});
	});
	$('.home-menu').mouseleave(function() {
		$(this).css({'background-color': '#3a3a52', 'border': 'solid #c5c5ad', 'color': '#c5c5ad'});
		$('.home-menu a:link').css({'color': '#c5c5ad'});
	}); 
	
	$('.contact-menu').mouseover(function() {
		$(this).css({'background-color': '#c5c5ad', 'border': 'solid #3a3a52', 'color': '#3a3a52'});
		$('.contact-menu a:link').css({'color': '#3a3a52'});
	});
	$('.contact-menu').mouseleave(function() {
		$(this).css({'background-color': '#3a3a52', 'border': 'solid #c5c5ad', 'color': '#c5c5ad'});
		$('.contact-menu a:link').css({'color': '#c5c5ad'});
	});
	
	$('.about-menu').mouseover(function() {
		$(this).css({'background-color': '#c5c5ad', 'border': 'solid #3a3a52', 'color': '#3a3a52'});
		$('.about-menu a:link').css({'color': '#3a3a52'});
	});
	$('.about-menu').mouseleave(function() {
		$(this).css({'background-color': '#3a3a52', 'border': 'solid #c5c5ad', 'color': '#c5c5ad'});
		$('.about-menu a:link').css({'color': '#c5c5ad'});
	});
	
	$('.services-menu').mouseover(function() {
		$(this).css({'background-color': '#c5c5ad', 'border': 'solid #3a3a52', 'color': '#3a3a52'});
		$('.services-menu a:link').css({'color': '#3a3a52'});
	});
	$('.services-menu').mouseleave(function() {
		$(this).css({'background-color': '#3a3a52', 'border': 'solid #c5c5ad', 'color': '#c5c5ad'});
		$('.services-menu a:link').css({'color': '#c5c5ad'});
	}); 
});
