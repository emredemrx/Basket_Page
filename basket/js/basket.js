$(document).ready(function($){
    //open popup
    $('.basketPrice').on('click', function(event){
        event.preventDefault();
        $('.cd-popup').addClass('is-visible');
    });
    
    //close popup
    $('.cd-popup').on('click', function(event){
        if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
            event.preventDefault();
            $(this).removeClass('is-visible');
        }
    });
    //close popup when clicking the esc keyboard button
    $(document).keyup(function(event){
        if(event.which=='27'){
            $('.cd-popup').removeClass('is-visible');
        }
    });
});
$('.basket-product-delete').on('click', function(event){
    event.preventDefault();
    var product = $(this).attr("data-product");
    var a = $('[data-productlist='+product+']').remove();
    
});