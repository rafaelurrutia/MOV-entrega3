$(function() {

    //Calculo ancho pantalla y aplico ancho al filtro

    $('.filter-head').click(function(){

       if ($(window).width() <= 480) {  

            //Fixed ancho y altura sidebar
            function setWidth() {
                var windowWidth = $(window).width();
                var anchoFiltro = $('.filter-head').width();
                $('.filter-list').width(windowWidth - 20);
                $('.filter-list2').css("left",($('.filter-list').width()-anchoFiltro-58)*-1+"px");
            };
            setWidth(); 

            $(window).resize(function() {
                setWidth();
                var windowWidth = $(window).width();
                $('.filter-list').width(windowWidth - 20);
                $('.filter-list2').css("left",($('.filter-list').width()-anchoFiltro-58)*-1+"px");
            });
       } else{

       }
    });

    if($("#js-bootstrap-offcanvas").hasClass('in')){
        $("#js-bootstrap-offcanvas").bind( "clickoutside", function(event){
          $(this).removeClass('in');
        });    
    }




    // scrollfix html 72

    $('.box-oferta').appear();

    $('.bajada-head-block').on('fixed.shira.scrollfix unfixed.shira.scrollfix', function (e) {
        // make the background green when fixed, red otherwise
        //$(this).css('background-color', e.watcher.fixed ? 'green' : 'red');

        if(e.watcher.fixed){
           $('.bajada-head-block .cell a').addClass('boton-masinfo');

            $('.box-oferta').on('appear', function(event, $all_appeared_elements) {
              
                $('.bajada-head-block.scroll-fix').fadeOut('fast')
            });

            $('.box-oferta').on('disappear', function(event, $all_appeared_elements) {
              
                //$('.bajada-head-block').css('position', 'fixed');
                $('.bajada-head-block.scroll-fix').fadeIn('fast')
            });

        }else{
            $('.bajada-head-block .cell a').removeClass('boton-masinfo');
        }
    }).scrollFix();

    

    /*$(document.body).on('appear', '.box-oferta', function(e, $affected) {
        alert('aparece');
    });*/

    /* Reemplaza todos los elementos IMG clase SVG a elementos SVG */
    jQuery('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });

    $('#edit').on('click',function(e){
        $('.toggle').toggleClass("in");
        $('.toggle').toggleClass("out");
        e.preventDefault();
    });

    $("input[name='tel']").change(function() {
      $("#digito").toggleClass("in"); 
      $("#t-fijo").toggleClass("in out");
      $("#t-mobi").toggleClass("in out"); 
    });

    $('#mail a').on('click',function(e){
        $('#mail .toggle').toggleClass("in out");
        e.preventDefault();
    });

    //SIMULACION SUBIDA DE ARCHIVOS

    $('#drop a').click(function(){
        $('#files').click();
       $('#files').change(function() {
            var filename = $('#files')[0].files[0];
            console.log(filename.name);
            $('#fileList').append('<li>'+filename.name+'<span><img class="svg" src="../images/svg/ico-trash.svg"/></span></li> ');
            $('#label-hide').show();
       });
    });

    $('#fileList').on('click', 'li span', function(event){
        event.preventDefault();
        $(this).parent().remove();
        $('#label-hide').hide();
    });

    /*************************************************/
    
         /* HTML 13 */
    $('[rel="borrar"]').on('click',function(event){
        event.preventDefault();
        var ide = $(this).parent().parent().attr('id');
        $(this).parent().parent().after("<tr class='delete-row' id='tr-aviso-"+ide+"'><td class='delete-box' colspan='6'><div class='col-xs-12 col-sm-4 center-block'><div class='row'><p><svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 49.484 49.371' enable-background='new 0 0 49.484 49.371' xml:space='preserve'><g id='Layer_3'><path d='M24.746,37.562c-1.589,0-2.877-1.291-2.877-2.883c0-1.582,1.288-2.868,2.877-2.868c0.454,0,0.903,0.11,1.307,0.313l-1.021,1.993c-0.378-0.198-0.925,0.108-0.925,0.56c0,0.183,0.071,0.35,0.194,0.464l0.461-0.495l-0.309,0.605c0.399,0.211,0.928-0.117,0.928-0.572c0-0.185-0.081-0.354-0.211-0.469l1.522-1.642c0.588,0.545,0.927,1.314,0.927,2.108C27.617,36.271,26.327,37.562,24.746,37.562z'/><g><path d='M24.742,28.787c-0.972,0-1.756-0.789-1.756-1.757V10.766c0-0.969,0.785-1.755,1.756-1.755c0.968,0,1.754,0.786,1.754,1.755v16.267C26.497,27.998,25.71,28.787,24.742,28.787z'/></g><g><path d='M24.708,49.337c-6.12,0-11.942-2.23-16.525-6.355c-4.91-4.426-7.803-10.493-8.148-17.093c-0.347-6.6,1.898-12.938,6.323-17.851C10.78,3.125,16.85,0.229,23.452-0.116C37.057-0.834,48.742,9.68,49.45,23.299c0.301,5.713-1.406,11.387-4.795,15.981c-0.576,0.777-1.674,0.947-2.456,0.371c-0.777-0.577-0.941-1.679-0.366-2.456c2.911-3.94,4.37-8.812,4.113-13.711C45.337,11.794,35.352,2.806,23.635,3.388C17.972,3.686,12.76,6.171,8.965,10.385c-3.794,4.216-5.72,9.657-5.423,15.32c0.298,5.663,2.778,10.873,6.994,14.667c4.214,3.8,9.697,5.715,15.316,5.428c4.178-0.218,8.154-1.641,11.493-4.117c0.782-0.576,1.879-0.41,2.454,0.367c0.578,0.778,0.413,1.876-0.365,2.454c-3.896,2.886-8.529,4.546-13.398,4.801C25.591,49.324,25.148,49.337,24.708,49.337z M24.746,37.559c-1.589,0-2.877-1.291-2.877-2.879c0-1.582,1.288-2.873,2.877-2.873c0.462,0,0.919,0.115,1.327,0.327c0.105,0.057,0.206,0.127,0.294,0.198c0.111,0.063,0.216,0.137,0.311,0.226c0.597,0.544,0.939,1.318,0.939,2.12C27.617,36.268,26.327,37.559,24.746,37.559z'/></g></g></svg>¿Estás seguro que deseas eliminar a este usuario?</p></div><div class='row margin-top-10'><button class='button-movistar center-block col-sm-10' rel='eliminar'>Confirmar</button></div><div class='row text-center margin-top-20'><a href='#' class='link' rel='cancela'><i class='fa fa-chevron-left'></i>No por ahora</a></div></div></td></tr>");
        $(this).addClass("bloqueado").css("pointer-events","none");
        return false;
    });

    $('body').on('click','[rel="eliminar"]', function(){
        var tr = $(this).parent().parent().parent().parent();
        $(tr).prev('tr').remove();
        $(tr).remove();

    });

    $('.tabla').on('click','[rel="cancela"]', function(event){
        $(this).parent().parent().parent().parent().remove();
        var ide = $(this).parent().parent().parent().parent().attr('id');
        $('.bloqueado').removeClass("bloqueado").css("pointer-events","inherit");
        console.log( $(this) );
        event.preventDefault();
        //alert('click');
    });


    $('input[name="permiso"]').change(function(){
        var ide = $(this).attr('id');
        if( ide == 'Invitado'){
            $('#lineasInvitado').slideDown();
        }else{
             $('#lineasInvitado').slideUp();
        }

    });

   
    //html 8

        $('.datetimepicker').datetimepicker({
            format: 'DD-MM-YYYY',
            locale: 'es'
        });


        $("#tabla-sort").tablesorter({
            headers: { 
                1: { 
                    sorter: false 
                }, 
                2: { 
                    sorter: false 
                },
                3: { 
                    sorter: false 
                },
                5: {
                    sorter: false
                }
            } 
        });

        $("#tabla-historial-recarga").tablesorter({
            headers: {
                1:{
                    sorter:false
                } ,
                2: { 
                    sorter: false 
                }, 
                3: { 
                    sorter: false 
                },
                4: { 
                    sorter: false 
                },
                5: {
                    sorter: false
                }
            } 
        });


        $("#tabla-historial-bolsas").tablesorter({
            headers: {
                1:{
                    sorter:false
                } ,
                2: { 
                    sorter: false 
                },
                4: { 
                    sorter: false 
                }
            } 
        });

        $("#tabla-consumo-sva").tablesorter({
            headers: {
                1:{
                    sorter:false
                } ,
                2: { 
                    sorter: false 
                }
            } 
        });

        $("#tabla-consumo-trafico").tablesorter({
            headers: {

                1:{
                    sorter:false
                } ,
                2: { 
                    sorter: false 
                },
                3: { 
                    sorter: false 
                },               
                4: { 
                    sorter: false 
                }
            } 
        });
        $("#tabla-consumo-datos").tablesorter({
            headers: {
                1:{
                    sorter:false
                } ,
                2: { 
                    sorter: false 
                }
            } 
        });


    // html 26

        $("#tabla-consumo-trafico-voz").tablesorter({
            headers: {
                1:{
                    sorter:false
                } ,
                2: { 
                    sorter: false 
                } ,
                3: { 
                    sorter: false 
                }
            } 
        });  
         
    //html 70

    $("#tabla-historial-pagos").tablesorter({
        headers: {
            2: { 
                sorter: false 
            } 
        } 
    })
    // html 15

    $('#edit-data-button').click(function(){
        $('#data-container').hide();
        $('#edit-data').fadeIn();
    });   

    $('#edit-contacts').click(function(){
        $('#contacts').hide();
        $('#edit-contacts-layer').fadeIn();
    });

    $('.medios-contacto input[type="checkbox"]').change(function(){
        $(this).parent().next('.wrap-down').toggleClass('show');
        $(this).parent().parent().toggleClass('opened');
    });


    // html 9

    $('#cerrarSolicitud').click(function(){

        $('#SolicitudCerradaHide').hide();
        $('#eliminarSolicitud').fadeIn();
    });

    $('#noCerrar').click(function(){
        $('#SolicitudCerradaHide').fadeIn();
        $('#eliminarSolicitud').hide();        
    });
    
    // cargar mas filas en tablas

    var columns = [];

    $('#load').click(function(){

        $('.cargar-mas').hide();

        $('.tabla-movistar tbody tr').each(function(){
            columns.push($(this));
        });

        $.each(columns, function(value) {
            $('.tabla-movistar').append('<tr style="display:none;" class="new">'+columns[value].html()+'</tr>');
        });

         $('.tabla-movistar tbody tr.new').fadeIn();

         var lenght = $('.tabla-movistar tbody tr').size();

        $('.listado-mostrar p span').text(lenght)

    });

    // banner img

    if($('.banner').size()){
        var image = $('.banner .img-box').data('image');
        
        $('.banner .img-box').css('background-image','url(../images/' + image + ')');

    }


    // html 69
     $("#tabla-nofacturado-voz").tablesorter({
            headers: {
                1:{
                    sorter:false
                } ,
                2: { 
                    sorter: false 
                } ,
                3: { 
                    sorter: false 
                }
            } 
        });  
         
    $("[data-toggle='toggleSlide']").click(function (e) {
        e.preventDefault();
        $(this).toggleClass('toggleOn toggleOff');
        var href = $(this).attr("href");
        $(href).slideToggle();

    });

    // HTML 83
    $("#documentos-facturacion").tablesorter({
        headers: {
            2:{
                sorter:false
            } ,
            3: { 
                sorter: false 
            } ,
            6: { 
                sorter: false 
            }
        } 
    }); 



    $("#documentos-facturacion-ndc").tablesorter({
       headers: {
           2:{
               sorter:false
           } ,
           3: { 
               sorter: false 
           } ,
           4: { 
               sorter: false 
           },
           5: { 
               sorter: false 
           },
           6: { 
               sorter: false 
           },
           7: { 
               sorter: false 
           }
       } 
    }); 
    

    // html 85

    $('#edit-data-button-general').click(function(){
        $('#data-container-general').hide();
        $('#edit-data-general').fadeIn();
    });

    $('#cambio-boleta').click(function(){
        $('#data-boleta').fadeIn();
        $('#data-container-general').hide();
    });

    $('#back-to-general').click(function(){
        $('#edit-data-general').hide();
        $('#data-container-general').fadeIn();        
    });



    $('#accept').change(function(){

        if($(this).is(':checked')){

            $('#confirmar-e-boleta').removeClass('disabled').removeAttr('disabled');
        }else{
             $('#confirmar-e-boleta').addClass('disabled').attr('disabled', 'disabled');
        }

    });

    $('.alerta-success').each(function(){

        if($(this).is(':visible')){
            $(this).delay( 3000 ).slideUp();
        }

    });




    $('#readMoreMobile').click(function(){

        if($('#mask-mobile').is(':visible')){
            $('#mask-mobile').slideUp();
            $(this).text('Leer completo');
        }else{
            $('#mask-mobile').slideDown();
            $(this).text('Leer menos');
        }
        
    });

    $('#edit-nofiticaciones').click(function(){

        $('#info-notificaciones').hide();
        $('#edit-info-notificaciones').fadeIn();
    });

    $('#back-to-edit-notificaciones').click(function(){
        $('#edit-info-notificaciones').hide();
        $('#info-notificaciones').fadeIn();    
    });

    // 88

    $('.radio-box-holder input').change(function(){
         $(this).closest('.radio-box').addClass('active').siblings('div').removeClass('active');
    });

    $('.radio-boxes-holder .radio-box').click(function(){
         $(this).closest('.radio-boxes-holder').children('.radio-box').removeClass('active');
         $(this).addClass('active');
    });

    // 67

    $('[rel="closeThis"]').on('click', function(event){
        $(this).parent().slideUp();
        event.preventDefault();
    });

    //71
    /*$('.head-block-3').on('click', function(event){
        event.preventDefault();
        if($(this).find('a.close-slide')){
            $(this).find('a').removeClass('close-slide');
            $(this).parent().next().slideDown();
        }else if($(this).find('a.open-slide')){
            $(this).parent().next().slideUp();
            $(this).find('a').addClass('close-slide');
        }
    });*/
    $("[data-toggle='toggleSlide2']").click(function (e) {
        e.preventDefault();
        $(this).toggleClass('close-slide');
        var href = $(this).attr("href");
        $(href).slideToggle().toggleClass('open-contentslide');
    });

    $("#mes0").change(function (e) {
        if($(this).hasClass('on')){
            $('#valueOf').html('<span>$</span>83.970');
            $(this).removeClass('on');
        }else{
            $('#valueOf').html('<span>$</span>21.990');
            $(this).addClass('on');
        }
        
    });


    $('.terms-conditions .cargar-mas').click(function(){
           $(".li-hidden").slideToggle();
    });

    // NEW ORDER HTML #9

    $('.row-head input[type="radio"]').click(function(){

        $('.row-head').removeClass('checked');

        $('#btn-continuar').removeAttr('disabled').removeClass('disabled');

        if($(this).not( ":checked" )){
            $(this).parent().parent().addClass('checked');
        }else{
            $(this).parent().parent().removeClass('checked');
        }
    });

    $('input[name="seleccion_compra"]').change(function(){

        if($('#inicio_sesion').is(':checked')){
            $('#inicio').slideDown();
            $('#btn-continuar').text('Ingresar y continuar');
        }else{
            $('#inicio').slideUp();
            $('#btn-continuar').text('Continuar');
        }

    });

    $( ".bt-box-desplegable" ).click(function() {
        $(this).next().slideToggle();
    });
    $( ".mod-desplegable .bt_close" ).click(function() {
        $(this).parent().slideToggle();
    });

    $( ".check-15 input" ).prop( "checked", false );
    $( ".check-15 span" ).click(function() {

        $( "button.bt-get-cap" ).toggleClass("disabled");

    });
    $(".product input").defaultValue = "14";
    $(".product input").prop("disabled", true);
    $("#cantidad").prop("disabled", false); // NewOrder #8C

    $( ".product .trash-product" ).click(function() {
         $(this).closest( ".product" ).remove();
          $(".product header").removeClass("only-mobile-cell");
          $(".product header.hidden").addClass("only-desktop");
          $(".product header.hidden").removeClass("hidden");
          $(".product input").removeAttr("disabled");

    });
    $( ".product .trash-service" ).click(function() {
         $(this).closest( ".serv-ad" ).remove();
    });

    //New Order buscador


    $('#fake-searchbox').click(function(){
        $('#searchbox').addClass('show').removeClass('nm-hide');
        $(this).addClass('nm-hide');
        $(this).removeClass('show');
        //$('#buscador-predictivo').toggleClass('active');
        //$('#buscador-submit').toggleClass('active');
        //$('#buscador-predictivo').attr('placeholder',"Galaxy S6...");
    });
    $('#buscador-predictivo').focus(function(){
        //$('#results').slideDown();
        //$(this).addClass('act');
        //$('#buscador-submit').addClass('act');
    });
    $('#buscador-predictivo').focusout(function(){
        //$('#results').slideUp();
        //$(this).removeClass('act');
        //$('#buscador-submit').removeClass('act');
    });
    
    // New Order Filter
    $('div.filter-head').click(function(){
            $(this).addClass('filter-heigth');

        if($('div.filter').hasClass('active')){
            if( $(this).parent().hasClass('active') ){
                $(this).parent().removeClass('active');
                $(this).next().slideUp(function(){
                    $('.filter-head').removeClass('filter-heigth');
                });
                                              
            }else{
                $('div.filter').removeClass('active');
                $('div.filter-list').slideUp();
                $(this).parent().addClass('active');
                $(this).next().slideDown();
            }
        }else{
            $(this).parent().addClass('active');
            $(this).next().slideDown();
        }


        if($('.filter-list input[type=checkbox]')){
            $('.filter-list input[type=checkbox]').change(function(){
            $('.mostrando').hide();
            $('.filtrando').fadeIn();
            $('#filtro').text('Filtrando');
            $('.selected-filters').show();
            $('.selected-filters a').show();

                if($('.filter-list input[type=checkbox]:checked').length == 0){
                    $('.selected-filters').hide();
                    $('#filtro').text('Filtrar');
                    
                }


            });
        }
        

            

        if($('.filter-list input[type=radio]')){
            $('input[type=radio]').change(function(){
              var txt = $(this).val()
                $('#ordenar').text(txt)
            });
        }


    });


    $('#filters-added a').click(function (e){
        e.preventDefault();
        $(this).hide();
    });

  

    $('[rel="toggleDiv"]').click(function (e){
        e.preventDefault();
        $(this).find('span.fa').toggleClass('fa-chevron-up fa-chevron-down');
        var href = $(this).attr('href');
        $(href).slideToggle();

    });

    $('[rel="delete-cart"]').click(function (e){
        e.preventDefault();
        ide = $(this).parent().parent().attr('id');
        $(this).parent().parent().remove();
        if(ide === 'item-01'){
            $('#shop-on').hide();
            $('#shop-off').show();
            $('#cart-amount').text('');
        }else{
            $(this).parent().parent().remove();
        }
    });
    $('.btn-carro-compras').click(function (e){
        e.preventDefault();
        $("#cart").slideToggle();
    });
    $('.link-despacho').click(function (e){
        $(".texto").toggleClass('show hide');
    });
    


    //New Order Html #4
    $( ".cambio" ).click(function() {
       $(this).children( ".mostrar" ).toggle();
    });// Cambiar texto enlace "ver mas"

   
    $('input[name="tarifas"]').change(function(){
    
        var id = $(this).attr('id');

        if( id == 'preferidos'){
            $('#numeros-pref').slideToggle();
            $('a[href="#tarifa-dos"]').trigger("click") ;
        }else{
            $('#numeros-pref').slideUp();
            if($('#tarifa-dos').is(':visible')){
                $('a[href="#tarifa-dos"]').trigger("click") ;
            }
        }   
        if( id == 'recargame'){
            $('a[href="#tarifa-uno"]').trigger("click") ;
        }else{
            if($('#tarifa-uno').is(':visible')){
                $('a[href="#tarifa-uno"]').trigger("click") ;
            }
        }      
        $('#submit-button').removeAttr('disabled').removeClass('disabled');
    });

    //New Order Html #6

    $('input[name="garantia"]').change(function(){
    
        var id = $(this).attr('id');

        if( id == '6-meses'){
            $('a[href="#6meses"]').trigger("click") ;
        }else{
            if($('#6meses').is(':visible')){
                $('a[href="#6meses"]').trigger("click") ;
            }
        }   
        if( id == '1-ano'){
            $('a[href="#1ano"]').trigger("click") ;
        }else{
            if($('#1ano').is(':visible')){
                $('a[href="#1ano"]').trigger("click") ;
            }
        }     
        if( id == '2-anos'){
            $('a[href="#2anos"]').trigger("click") ;
        }else{
            if($('#2anos').is(':visible')){
                $('a[href="#2anos"]').trigger("click") ;
            }
        }    
    });
    
    $( '.planes span' ).click(function() {
        var id = $(this).attr('id');
        if( id == 'plan-danos'){
            $('a[href="#anti-danos"]').trigger("click") ;
        }else if( id == 'plan-total'){
            $('a[href="#p-total"]').trigger("click") ;
        }
    });

    // HTML 18 NEWORDER
    $('#retiro-en-tienda select').change(function(){
        if( $('#comuna-portabilidad').valid()){
            $('#listado-tiendas-portabilidad').fadeIn();
        }else{
            $('#listado-tiendas-portabilidad').hide();
        }

    });


/* HTML1 */
 // Scripts acciones HTML 1

 $('#eliminador_comparador_1').click(function (e){
        e.preventDefault();
        		$('[rel="eq2"]').hide();
                $('[rel="mockup2"]').show();
                
                if( $('[rel="op2"]').is(":visible") ){
	                $('[rel="op2"]').hide(); 
	                $('[rel="op1"]').show();
	                $('[rel="op3"]').hide();
                }
                 if( $('[rel="op3"]').is(":visible") ){
	                $('[rel="op1"]').hide(); 
	                $('[rel="op2"]').show();
	                $('[rel="op3"]').hide();
                }
    

                $('.add-compare').removeClass('disabled'); 
                $('.delete-compare').last().toggleClass('add-compare delete-compare').addClass('add-compare');
   });
 
 $('#eliminador_comparador_2').click(function (e){
        e.preventDefault();
        		$('[rel="eq3"]').hide();
                $('[rel="mockup3"]').show();
                 
                if( $('[rel="op2"]').is(":visible") ){
	                $('[rel="op2"]').hide(); 
	                $('[rel="op1"]').show();
	                $('[rel="op3"]').hide();
                }
                 if( $('[rel="op3"]').is(":visible") ){
	                $('[rel="op1"]').hide(); 
	                $('[rel="op2"]').show();
	                $('[rel="op3"]').hide();
                }
                
                $('.add-compare').removeClass('disabled'); 
                $('.delete-compare').last().toggleClass('add-compare delete-compare').addClass('add-compare');
   });
   
 $('#eliminador_comparador_mobil_1').click(function (e){
        e.preventDefault();
        		$('[rel="eq2"]').hide();
                $('[rel="mockup2"]').show();
                
                if( $('[rel="op2"]').is(":visible") ){
	                $('[rel="op2"]').hide(); 
	                $('[rel="op1"]').show();
	                $('[rel="op3"]').hide();
                }
                 if( $('[rel="op3"]').is(":visible") ){
	                $('[rel="op1"]').hide(); 
	                $('[rel="op2"]').show();
	                $('[rel="op3"]').hide();
                }
    

                $('.add-compare').removeClass('disabled'); 
                $('.delete-compare').last().toggleClass('add-compare delete-compare').addClass('add-compare');
   });
 
 $('#eliminador_comparador_mobil_2').click(function (e){
        e.preventDefault();
        		$('[rel="eq3"]').hide();
                $('[rel="mockup3"]').show();
                 
                if( $('[rel="op2"]').is(":visible") ){
	                $('[rel="op2"]').hide(); 
	                $('[rel="op1"]').show();
	                $('[rel="op3"]').hide();
                }
                 if( $('[rel="op3"]').is(":visible") ){
	                $('[rel="op1"]').hide(); 
	                $('[rel="op2"]').show();
	                $('[rel="op3"]').hide();
                }
                
                $('.add-compare').removeClass('disabled'); 
                $('.delete-compare').last().toggleClass('add-compare delete-compare').addClass('add-compare');
   });
 

	/* Función agregar al Comparador*/
  
  $('.add-compare').click(function (e){
        e.preventDefault();


        $(this).toggleClass('add-compare delete-compare');

        if( $('.holder-comparador').hasClass('hide') ){
            $('.holder-comparador').toggleClass('show hide');
        }
        else{



            if( $('.delete-compare').length===0 ){
                $('.holder-comparador').toggleClass('show hide');
            }



            else if( $('.delete-compare').length===0 ){
                $('[rel="mockup2"]').show();
                $('[rel="eq2"]').hide();
                $('[rel="op2"]').hide();
                $('[rel="op1"]').show(); 
            }
            else if( $('.delete-compare').length===2 ){

                $('[rel="mockup2"]').hide(); //oculta mockup 2
                $('[rel="op1"]').hide(); //oculta opcion 1
                $('[rel="op3"]').hide(); //oculta opcion 3

                $('[rel="eq3"]').hide();
                $('[rel="mockup3"]').show();

                $('[rel="op2"]').show(); 
                $('[rel="eq2"]').show();
                $('.add-compare').removeClass('disabled');
              
            }
            else if( $('.delete-compare').length===3 ){
                $('[rel="mockup3"]').hide();
                $('[rel="eq3"]').show();

                $('[rel="op2"]').hide();
                $('[rel="op3"]').show();

               
                $('.add-compare').addClass('disabled');

            }

        }

    });


    $('.delete-compare').click(function (e){
        e.preventDefault();        
        $(this).toggleClass('add-compare delete-compare');

    });
    
    /* estó pasará on document ready */
    $(function() {
 	    $('.holder-comparador').toggleClass('show hide');
		$('.add-compare:first').toggleClass('add-compare delete-compare');	    
    });
    
  	/* Resetea al eliminar el ultimo Filtro */
     $('#filters-added a').first().click(function (e){
        e.preventDefault();
        $('.selected-filters').hide();
        $('#filtro').text('Filtrar');
        $('.mostrando').show();
        $('.filtrando').hide();
        $('.filter-opt input:checkbox').removeAttr('checked');
    });
    
    /* Resetea al uncheck el ultimo checkbox */
    $('.filter-list input[type=checkbox]:checked').first().click(function (e){
        e.preventDefault();
        $('.selected-filters').hide();
        $('#filtro').text('Filtrar');
        $('.mostrando').show();
        $('.filtrando').hide();
        $('#filters-added a').show();
        
        
    });

/*
HTML 3
*/


        function setWidthLinea() {
            var anchoLinea = $('.numeros_preferidos').width();
            $('.contenedor_alerta_linea').css("width", anchoLinea+"px");
        };
        setWidthLinea(); 
        $(window).resize(function() {
                setWidthLinea();
            var anchoLinea = $('.numeros_preferidos').width();
            $('.contenedor_alerta-linea').css("width", anchoLinea+"px");
        });

        $(function() {
//PRIMERA CAJA
	    	$('.contenedor_caja_info_uno .caja_escondible').hide();
	    	
	    	$('.contenedor_caja_info_numeros_preferidos .contenedor_alerta').hide();
	    	
	    	$('.contenedor_caja_info_uno .cancelar_renovacion').click(function(e){
				e.preventDefault();
				$('.contenedor_caja_info_uno .caja_escondible').show();
				$('.contenedor_caja_info_uno .caja_info').css('margin-bottom',0);
				$(this).toggleClass('disabled');
    		});
    		
    		$('.contenedor_caja_info_uno .caja_escondible .no_cancelar_por_ahora').click(function(e){
				e.preventDefault();
				$('.contenedor_caja_info_uno .caja_escondible').hide();
				$('.contenedor_caja_info_uno .caja_info').css('margin-bottom',48);
				$('.contenedor_caja_info_uno .cancelar_renovacion').toggleClass('disabled');
    		});
    		
    		
    		$('.contenedor_caja_info_uno .caja_escondible .confirmar_cancelar_renovacion').click(function(e){
				e.preventDefault();
				$('.contenedor_caja_info_uno').fadeOut();
    		});
    		
//    		SEGUNDA CAJA
    		$('.contenedor_caja_info_numeros_preferidos .numeros_preferidos').hide();
	  
	  
	  function clickAbrirCajaEditarNumerosPreferidos(e) {
		  		e.preventDefault();
				$('.contenedor_caja_info_numeros_preferidos .numeros_preferidos').show();
				$(this).toggleClass('disabled');
				$('.contenedor_caja_info_numeros_preferidos .caja_info').css('margin-bottom',0);
				
				$('.nombre').attr('disabled', 'disabled');
				$('.numero').attr('disabled', 'disabled');
				$(this).unbind('click', clickAbrirCajaEditarNumerosPreferidos);
	  }
	  
	  $('.contenedor_caja_info_numeros_preferidos .editar_numeros_preferidos').bind('click', clickAbrirCajaEditarNumerosPreferidos);
    		
//     		ACCIONES EDITAR				

function clickEditarHandler_1(e) {
				e.preventDefault();				
				$('#nombre_1').toggleClass('disabled');
				$('#numero_1').toggleClass('disabled');

				$('#nombre_1').removeAttr('disabled');
				$('#numero_1').removeAttr('disabled');
				
				$('.guardar_cambios').removeClass('disabled');
				$(this).toggleClass('disabled');
				$(this).unbind('click', clickEditarHandler_1);
				$('.guardar_cambios').bind('click', guardarCambiosHandler);
	}
function clickEditarHandler_2(e) {
				e.preventDefault();				
				$('#nombre_2').toggleClass('disabled');
				$('#numero_2').toggleClass('disabled');
								
				$('#nombre_2').removeAttr('disabled');
				$('#numero_2').removeAttr('disabled');
				
				$('.guardar_cambios').removeClass('disabled');
				$('.guardar_cambios').removeClass('primer_click');
				$(this).toggleClass('disabled');
				$(this).unbind('click', clickEditarHandler_2);
				$('.guardar_cambios').bind('click', guardarCambiosHandler);
	}
function clickEditarHandler_3(e) {
				e.preventDefault();				
				$('#nombre_3').toggleClass('disabled');
				$('#numero_3').toggleClass('disabled');
								
				$('#nombre_3').removeAttr('disabled');
				$('#numero_3').removeAttr('disabled');
				
				$('.guardar_cambios').removeClass('disabled');
				$(this).toggleClass('disabled');
				$(this).unbind('click', clickEditarHandler_3);
				$('.guardar_cambios').bind('click', guardarCambiosHandler);
	}
	
	$('.contenedor_caja_info_numeros_preferidos .numeros_preferidos .editar_1').bind('click', clickEditarHandler_1);
	$('.contenedor_caja_info_numeros_preferidos .numeros_preferidos .editar_2').bind('click', clickEditarHandler_2);
	$('.contenedor_caja_info_numeros_preferidos .numeros_preferidos .editar_3').bind('click', clickEditarHandler_3);


//		RESET

		function reset_caja_info_numeros_preferidos(){
			$('.numeros_preferidos').fadeOut();
			$('.contenedor_caja_info_numeros_preferidos .editar_numeros_preferidos').removeClass('disabled');
			$('.guardar_cambios').text('Guardar Cambios');
			$('.guardar_cambios').addClass('disabled');
			
			$('.nombre').removeClass('disabled');
			$('.numero').removeClass('disabled');
			$('.nombre').addClass('disabled');
			$('.numero').addClass('disabled');
							
			$('.nombre').attr('disabled', 'disabled');
			$('.nombre').attr('disabled', 'disabled');

			$('.contenedor_caja_info_numeros_preferidos .numeros_preferidos .editar_1').removeClass('disabled');
			$('.contenedor_caja_info_numeros_preferidos .numeros_preferidos .editar_2').removeClass('disabled');
			$('.contenedor_caja_info_numeros_preferidos .numeros_preferidos .editar_3').removeClass('disabled');
				
			$('.contenedor_caja_info_numeros_preferidos .caja_info').css('margin-bottom',48);
			$('.contenedor_caja_info_numeros_preferidos .contenedor_alerta').hide();
	$('.contenedor_caja_info_numeros_preferidos .numeros_preferidos .editar_1').bind('click', clickEditarHandler_1);
	$('.contenedor_caja_info_numeros_preferidos .numeros_preferidos .editar_2').bind('click', clickEditarHandler_2);
	$('.contenedor_caja_info_numeros_preferidos .numeros_preferidos .editar_3').bind('click', clickEditarHandler_3);
		  $('.contenedor_caja_info_numeros_preferidos .editar_numeros_preferidos').bind('click', clickAbrirCajaEditarNumerosPreferidos);
		  $('.guardar_cambios').unbind('click', guardarCambiosHandler);
		}

		
//		GUARDAR CAMBIOS


$('.guardar_cambios').on('click', function(e){
     e.preventDefault();
	});

	var evento = true;
function guardarCambiosHandler(e) {

   if( evento == true ){
      e.preventDefault();
	  	$('.contenedor_caja_info_numeros_preferidos .contenedor_alerta').hide();
		$('.contenedor_caja_info_numeros_preferidos .contenedor_alerta').show();		
		$('.guardar_cambios').text('Confirmar');
        evento = false;

    }else{
		e.preventDefault();					
		reset_caja_info_numeros_preferidos();
        evento = true;
    }
	}
	
//		NO POR AHORA

  $('.contenedor_caja_info_numeros_preferidos .numeros_preferidos .no_por_ahora').click(function(e){
		e.preventDefault();				
		$('.contenedor_caja_info_numeros_preferidos .numeros_preferidos').fadeOut();
		$('.contenedor_caja_info_numeros_preferidos .editar_numeros_preferidos').toggleClass('disabled');
		$('.contenedor_caja_info_numeros_preferidos .caja_info').css('margin-bottom',48);
		
		reset_caja_info_numeros_preferidos();
			$('.nombre').attr('disabled', 'disabled');
			$('.numero').attr('disabled', 'disabled');
	});
});
    
//    HASTA AQUI 3

    $('#cargarmas').click(function(e){
        e.preventDefault();
        $( ".mostrar" ).toggle();
        $('.oculto').slideToggle();
    });


    $('.ico-trash.link-blue-bold').click(function() {
        var producto = ('.' + $(this).closest('.showcase').attr('class').split(' ')[0]);
       $((".spec-tables ")+(producto)).css( "visibility", "hidden" );
       $((producto)+(" .filled")).css( "display", "none" );
       $((producto)+(" .empty")).css( "display", "block" );
      // $(".slides").css( "margin-left", "0" );

    });


    $('.spec-tables .cargar-mas').click(function() {
        $(this).prev().children('tbody').children('tr').removeClass("hidden");
        $(this).prev().children('tr').removeClass("hidden");
        $(this).next(".listado-mostrar").remove();
        $(this).remove();

    });

    $('.flexslider').flexslider({
        animationLoop: false,
        animation: "slide",
        slideshow: false,
        touch: true,
        move:1,
        reverse:false,
        itemWidth: 150,
        itemMargin: 0,
        minItems: 2,
        useCSS:false,
        controlsContainer:".controles",
        manualControls: ".paginator li",
        maxItems: 2,
        prevText:"",
        nextText:"",
        after: function(){
            var comparacionActiva = ($(".paginator .flex-active").attr('class').split(' ')[0]);
            $("#comparator").removeClass();
            if (comparacionActiva == "product-a")  {
                $("#comparator").addClass("product-a-b");
             }
            if (comparacionActiva == "product-b")  {
                $("#comparator").addClass("product-b-c");
             }
            if (comparacionActiva == "product-c")  {
                $("#comparator").addClass("product-c-a");
             }
        }
    });

    var Touch = (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/Android/)) || (navigator.userAgent.match(/iPad/));
    if(Touch){

         $('.products').scrollFix({
            fixOffset: 300,
            unfixOffset: 300,
            syncSize: true
         })
    }else{

         $('.products').scrollFix({
            fixOffset: 130,
            syncSize: true
         })
    }
    

$('.link_comparador').click(function(e) {
    e.preventDefault();            
    $(this).toggleClass('activo');
});    


/* HTML5 */
 // Scripts acciones HTML 5

 $('#eliminador_comparador_1').click(function (e){
        e.preventDefault();
                $('[rel="eq2"]').hide();
                $('[rel="mockup2"]').show();
                
                if( $('[rel="op2"]').is(":visible") ){
                    $('[rel="op2"]').hide(); 
                    $('[rel="op1"]').show();
                    $('[rel="op3"]').hide();
                }
                 if( $('[rel="op3"]').is(":visible") ){
                    $('[rel="op1"]').hide(); 
                    $('[rel="op2"]').show();
                    $('[rel="op3"]').hide();
                }
    

                $('.add-compare2').removeClass('disabled'); 
                $('.delete-compare2').last().toggleClass('add-compare2 delete-compare2').addClass('add-compare2');
   });
 
 $('#eliminador_comparador_2').click(function (e){
        e.preventDefault();
                $('[rel="eq3"]').hide();
                $('[rel="mockup3"]').show();
                 
                if( $('[rel="op2"]').is(":visible") ){
                    $('[rel="op2"]').hide(); 
                    $('[rel="op1"]').show();
                    $('[rel="op3"]').hide();
                }
                 if( $('[rel="op3"]').is(":visible") ){
                    $('[rel="op1"]').hide(); 
                    $('[rel="op2"]').show();
                    $('[rel="op3"]').hide();
                }
                
                $('.add-compare2').removeClass('disabled'); 
                $('.delete-compare2').last().toggleClass('add-compare2 delete-compare2').addClass('add-compare2');
   });
   
 $('#eliminador_comparador_mobil_1').click(function (e){
        e.preventDefault();
                $('[rel="eq2"]').hide();
                $('[rel="mockup2"]').show();
                
                if( $('[rel="op2"]').is(":visible") ){
                    $('[rel="op2"]').hide(); 
                    $('[rel="op1"]').show();
                    $('[rel="op3"]').hide();
                }
                 if( $('[rel="op3"]').is(":visible") ){
                    $('[rel="op1"]').hide(); 
                    $('[rel="op2"]').show();
                    $('[rel="op3"]').hide();
                }
    

                $('.add-compare2').removeClass('disabled'); 
                $('.delete-compare2').last().toggleClass('add-compare2 delete-compare2').addClass('add-compare2');
   });
 
 $('#eliminador_comparador_mobil_2').click(function (e){
        e.preventDefault();
                $('[rel="eq3"]').hide();
                $('[rel="mockup3"]').show();
                 
                if( $('[rel="op2"]').is(":visible") ){
                    $('[rel="op2"]').hide(); 
                    $('[rel="op1"]').show();
                    $('[rel="op3"]').hide();
                }
                 if( $('[rel="op3"]').is(":visible") ){
                    $('[rel="op1"]').hide(); 
                    $('[rel="op2"]').show();
                    $('[rel="op3"]').hide();
                }
                
                $('.add-compare2').removeClass('disabled'); 
                $('.delete-compare2').last().toggleClass('add-compare2 delete-compare2').addClass('add-compare2');
   });
 

    /* Función agregar al Comparador*/
  
  $('.add-compare2').click(function (e){
        e.preventDefault();


        $(this).toggleClass('add-compare2 delete-compare2');

        if( $('.holder-comparador').hasClass('hide') ){
            $('.holder-comparador').toggleClass('show hide');
        }
        else{



            if( $('.delete-compare2').length===0 ){
                $('[rel="mockup2"]').show(); //oculta mockup 2
                $('[rel="mockup3"]').show();

                $('[rel="op1"]').show(); //oculta opcion 1
                $('[rel="op2"]').hide(); 
                $('[rel="op3"]').hide(); //oculta opcion 3

                
                $('[rel="eq2"]').hide();
                $('[rel="eq3"]').hide();
 
            }
            else if( $('.delete-compare2').length===1 ){

                $('[rel="mockup2"]').hide(); //oculta mockup 2
                $('[rel="op1"]').hide(); //oculta opcion 1
                $('[rel="op3"]').hide(); //oculta opcion 3

                $('[rel="eq3"]').hide();
                $('[rel="mockup3"]').show();
                $('[rel="op2"]').show(); 
                $('[rel="eq2"]').show();
                $('.add-compare2').removeClass('disabled');
              
            }
            else if( $('.delete-compare2').length===2 ){
                $('[rel="mockup3"]').hide();
                $('[rel="eq3"]').show();
                $('[rel="op1"]').hide();
                $('[rel="op2"]').hide();
                $('[rel="op3"]').show();

               
                $('.add-compare2').addClass('disabled');

            }

        }

    });


    $('.delete-compare2').click(function (e){
        e.preventDefault();        
        $(this).toggleClass('add-compare2 delete-compare2');

    });

// HASTA AQUI EL HTML5 

  //INCIO HTML #15 Postorder
    $('#contract-service li .MCSS-trash, #contract-service li .btn-verde').click(function() {
        $(this).parents(".brief").next(".box-message-bottom").slideToggle();
    });
    $('#contract-service li .button-back').click(function() {
        $(this).parents(".box-message-bottom").slideToggle();
    });

    $('#contract-service li .boton-azul').click(function() {

        if ( $(this).parents("#contract-service li").is(".added") ) {


            $(this).parents("#contract-service li").remove();

        }
        if ( $(this).parents("#contract-service li").is(".not-added") ) {
            $(this).parents("li").find(".price-plan").prependTo( $(this).parents("li").find(".col-3"));
            $(this).parents("#contract-service li").removeClass("not-added");
            $(this).parents("#contract-service li").addClass("added");
            $(this).parents(".box-message-bottom").slideToggle();
        }
    });
    //FIN HTML #15 Postorder 


    $('.radios-holder .radio').click(function(){
         $(this).closest('.radios-holder').children('.radio').removeClass('active');
         $(this).addClass('active');
         $(this).closest(".brief").find('.disabled').removeClass('disabled');
    });



    // HTML #06 Postorder
    $('.cart-contract li .cambiar-plan').click(function(e){
       $(this).parents(".brief").siblings('.box-message-bottom2').slideToggle();

    });
    $('.cart-contract li .closebottom2').click(function(e){
        $(this).parents(".brief").siblings('.box-message-bottom2').hide();
    });

    $('.add-plan').click(function(e){
        e.preventDefault();
        var id     = $(this).attr('rel'),
            plan   = $('#'+id).text().replace('Plan Revolución',''),
            $disp  = $('.disponible').first();
        count = $('.delete-plan:visible').length;
        $(this).hide().next('.delete-plan').show();
        $disp.children('span').text('Plan:')
        $disp.children('strong').text(plan);
        $disp.toggleClass('disponible '+id);
        $('.'+id+ ' .delete-holder').attr('rel',id).show();
            if( count === null ){
                $('[rel="op2"]').hide();
                $('[rel="op1"]').show(); 
            }else if( count === 0 ){
                $('[rel="op1"], [rel="op3"]').hide(); 
                $('[rel="op2"]').show();               
            } else if(count === 1 ){
                $('[rel="op2"]').hide();
                $('[rel="op3"]').show();
                $('.add-plan').addClass('disabled');
            }
     });

    $('.delete-plan').click(function(e){
        e.preventDefault();
        count = $('.disponible').length;
        var id = $(this).attr('rel');
        $(this).hide().prev('.add-plan').show();
        
        $('.'+id).children('strong').text('Plan');
        $('.'+id).children('.delete-holder').hide();
        $('.add-plan').removeClass('disabled');

            if(count === 1){
                $('.'+id).children('span').text('Elige un segundo')
                $('[rel="op2"]').hide();
                $('[rel="op1"]').show();
            }else{
                $('.'+id).children('span').text('Elige un tercer')
                $('[rel="op1"], [rel="op3"]').hide();
                $('[rel="op2"]').show();
                $('.add-plan').removeClass('disabled');
            }

        $('.'+id).toggleClass(id+' disponible');
    });
    $('.delete-holder').click(function(e){
        e.preventDefault();
        var id = $(this).attr('rel');
        $('.delete-plan[rel='+id+']').click();
    });


    $("#mobile-comparer").click(function(e){
        e.preventDefault();
        $('.btn-compare').toggle();
    });

    //INCIO HTML #07 Postorder
    $('.cart-contract li .btn-verde').click(function() {
        $(this).parents(".cart-contract li").toggleClass("not-added added");    
        $(this).parents(".box-message-bottom").slideToggle();
    });
    $('.cart-contract li .MCSS-trash').click(function() {
        $(this).addClass('disabled');
        $(this).parents(".brief").next(".box-message-bottom").slideToggle();
    });

    $('.cart-contract li .button-back').click(function() {
        $(this).closest('li').find('.brief .disabled').removeClass('disabled');
        $(this).parents(".box-message-bottom").slideToggle();
     });

    $('.cart-contract li .boton-azul, .cart-contract li .btn-contratar').click(function(e) {
        e.preventDefault();
        if ( $(this).parents(".cart-contract li").is(".added") ) {

            $(this).parents(".cart-contract li").toggleClass("added not-added");
            $(this).parents(".box-message-bottom").slideToggle();
        }else if ( $(this).parents(".cart-contract li").is(".not-added") ) {

            $(this).parents(".cart-contract li").toggleClass("not-added added");
            $(this).parents(".box-message-bottom").slideToggle();
        }
    });
    //FIN HTML #07 Postorder



    //HTML #11 Postorder
    $('.canjear-puntos').number(true, 0, '', '.');

    $('button[name="puntos-submit"]').click(function(e){
        e.preventDefault();
        var $campo = $(this).closest('form').find('.canjear-puntos');
            $puntos = $campo.val();
            $canjeado = $(this).parents().eq(3).find('[data-info="canjeado"]'),
            $canje    = $(this).parents().eq(3).find('[data-info="canje"]'),
            $puntaje  = $(this).parents().eq(3).find('[data-info="canjeado"] .puntos-canje');
             valor = $.number($puntos, 0, '', '.');         
            if ($campo.valid()){
                $('[data-info="puntos-oculto"]').addClass('shop-pos ocultar');
                $puntaje.text(valor);
                $canje.hide();
                $canjeado.show();
                $(this).closest('.canjear').slideUp();
            }
            
            $('.cancelar').click(function(e){
                e.preventDefault();
                $canje.show();
                $canjeado.hide();
               $('.canjear').hide();
            });
          
    });

    $('.trash').click(function(e){
        e.preventDefault();
        var count = $(this).closest('.panel-body').find('.row').length;
        if( count <= 3 ){
               $(this).closest('.panel').find('.delete-num').click();
        }
        $row = $(this).closest('.row');
        $row.remove();
    });

    $('.delete-num').click(function(e){
        e.preventDefault();
        var id = $(this).attr('href');
        $(id).remove();
        $(this).closest('.panel').remove();
        if($('.panel').length === 0){
            $('.sidebar-detail').remove();
            $('.alert-vacio').show();
        }
    })
    // Dropdown header postorder
    $('#dd').click(function(e){
        e.preventDefault();
        $(this).children('.dropdown').slideToggle();
    });
    // Fin Dropdown

    $('#search-order').click(function(e){
        e.preventDefault();
        $(this).hide();
        $('#searchbox').show();
        $('.tienda-postorder .navbar-default').addClass('tienda-search');
    });
    
    // HTML #15_2 Postorder    
    $('input[name=monto]').number(true, 0, '', '.');
    $( ".secondary-adjust .show-info" ).click(function() {
        $(this).siblings(".detail").slideToggle();
        $(this).toggleClass('chevron-active');
    });
    $( ".plan-adjust button" ).click(function(e) {
        e.preventDefault();
        if($(this).closest('form').valid()){
            $(this).toggleClass("btn-verde");
            $(this).toggleClass("boton-rojo");
            $(this).closest('form').find('.MCSS-check-o').toggle();
        }
    });
    //Fin HTML #15_2 Postorder

    $( ".box-delivery-status .fa-times, .check-delivery" ).click(function() {

         $('#detail-x-user .d-general').toggleClass('opened');
         $(".box-delivery-status").slideToggle();


    });
   
    //HTML 8.1 Postorder
    $("#remove-plan").click(function(e){
        e.preventDefault();
        $(this).closest('.price-toggle').addClass('remove-plan');
        $('.btn-verde').click(function(e){
            e.preventDefault();
             $(this).closest('.price-toggle').removeClass('remove-plan');
        });
    });
    //Fin 8.1 Postorder

    //HTML 8.2 Postorder
    $('#add-carrito, #edit-carrito').click(function(e){
        e.preventDefault();
        $('#add-carrito').fadeOut();
        $('.num-pref').slideDown();
        $('.insert-num').show();
        if($('.pref-ingresados').hasClass('add-nums')){
            $('.pref-ingresados').removeClass('add-nums');
        }
    });
    $('#add-pref').click(function(e){
        e.preventDefault();
        var form =  $('#form-clon');
        form.validate();
        if(form.valid() && $("input[name='nombre_pref']").last().val()!=='' && $("input[name='num_pref']").last().val()!==''){
            $(this).hide();
            $('.box-message-bottom').slideToggle();
                     
        }
    });
     $('.insert-num .button-back').click(function(e){
        e.preventDefault();
       
        if(! $('.detalle-pref').hasClass('pref-added')){ 
            $('.num-pref').slideUp();
           $('#add-carrito').show();  
        }else{
            $('.insert-num').slideUp();
            $('.num-pref').show();
        }
    });
    $('.message-add .MCSS-trash').click(function(e){
        e.preventDefault();
        $('.detalle-pref').removeClass('pref-added');
        $('#add-carrito').show();
        $('.num-pref').hide();
        $('#pref-car').removeClass('col-md-4 col-md-offset-1');
        $('#pref-car').addClass('col-md-6 col-md-offset-2');
    });
     $('#confirm-pref').click(function(e){
        e.preventDefault();
        $('.detalle-pref').addClass('pref-added');
        $('.insert-num').hide();
        $('.pref-ingresados').addClass('add-nums');
        $('#pref-car').addClass('col-md-4 col-md-offset-1');
        $('#pref-car').removeClass('col-md-6 col-md-offset-2');
    });
    $('#edit-pref').click(function(e){
        e.preventDefault();
        $('.insert-num').slideToggle();
        $('.pref-ingresados').removeClass('add-nums');
        $('.button-back').click(function(e){
            $('.pref-ingresados').addClass('add-nums');
        });
    });
    $('#guardar-numero').click(function(e){
        e.preventDefault();
        var $nombre    = $( "input[name='nombre_pref']" ).last();
        var $fono      = $( "input[name='num_pref']" ).last();   
        var validator = $('#form-clon').validate();
            validator.element( $fono );
        if(($nombre).valid()  && ($fono).valid() && $.trim(($fono).val())!==''  && $.trim(($nombre).val())!==''){
            $clon = $('.row-group').first().clone();
            $clon.find("input").val("");
            $clon.find(".del-content").removeClass('hide-all');
            $clon.appendTo('.content-clon').fadeIn("slow");
            if($('.row-group').length >= 3){
                $(this).addClass('disabled');
            }
        } 
        $('.del-content').removeClass('disabled');
    });
    $('.content-clon').on('click', '.del-content', function(e){
        e.preventDefault();
        $count =  $('.del-content').length
        if($count < 2){
             $(this).addClass('disabled');
         }else if($count<=3){
            $('#guardar-numero').removeClass('disabled');
            $(this).closest('.row-group').remove();
        }
            
    });

    $('.servicio .btn-verde').click(function(e){
        e.preventDefault();
       $(this).closest('.servicio').addClass('add-servicio');
    });
     $('.servicio .MCSS-trash').click(function(e){
            e.preventDefault();
            $(this).closest('.servicio').removeClass('add-servicio');
       });


$('.bt-user-box, .login-box .MCSS-cancel, .login-box .exit').click(function(e){
    $(".login-box").slideToggle();
});



  
    
    
$('.bt-listo, .bt-number-change').click(function(e){
 $( "#number-selector .selects" ).toggle();
$( "#number-selector .message" ).toggle();

});    



ma5mobileMenu({
    swipe: false
});    


$('.bt-slide-panel').click(function() {

    $("html").addClass("opened-slide-panel");

});  
  
$('.bt-close-panel').click(function() {

    $("html").removeClass("opened-slide-panel");

});  

  

});// doc ready
