$(function() {
 
	// METODO PARA VALIDAR SELECTS
	jQuery.validator.addMethod("notEqualTo", function(elementValue,element,param) {
	  return elementValue != param;
	}, "Value cannot be {0}" );


    // METODOS AÑADIDOS

    // valida el rut
    $.validator.addMethod("rut", function(value, element) {
        return this.optional(element) || $.validateRut(value);
    }, "Este campo debe ser un rut valido.");

    // valida que una cadena de txt sea igual a algo
    $.validator.addMethod("equals", function(value, element, string) {
        return value === string;
    }, $.validator.format(
        "Texto no corresponde"));

    // valida numero de telefono movil
    $.validator.addMethod("movil", function(value, element) {
      return this.optional(element) || value.match(/^([5-9][0-9]{7})$/i);
    }, "El teléfono ingresado no es correcto.");
    // sólo texto

    $.validator.addMethod("textonly", function(value, element) {
        valid = false;
        check = /[^-\.a-zA-Z\s\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02AE-\u0027]/.test(value);
        if(check==false)
            valid = true;
        return this.optional(element) || valid;
    }, "Ingrese sólo texto");


	// formatea rut

    $("[name='rut']").rut({
            formatOn: 'keyup'
    });

    // recorre todos los formularios para validar
	$('form').each(function() {   
		
		$(this).validate({

            submitHandler: function(form) {
                

                  var ide = $(form).attr('id');

                 if(ide == 'formQuince'){
               	
		         	$('#success-alert').fadeIn();
					$('#data-container').fadeIn();
					$('#edit-data').hide(); 

                 }else if( ide == 'formQuinceB'){
                 	$('#success-alert').fadeIn();
			        $('#contacts').fadeIn();
			        $('#edit-contacts-layer').hide();   

                 }else if(ide == 'form-cambio-boleta-electronica'){
                 	$('#terminos-condiciones-boleta').fadeIn();
                 	$('#data-boleta').hide();

                 }else if(ide == 'form-direccion-85'){
		         	$('#success-alert').slideDown().delay( 3000 ).slideUp();
					$('#data-container-general').fadeIn();
					$('#edit-data-general').hide(); 

                 }else if( ide == 'form-edit-notificaciones'){
                 	$('#success-alert-2').slideDown().delay( 3000 ).slideUp();
                 	$('#edit-info-notificaciones').hide();
                 	$('#info-notificaciones').fadeIn();

                 }else{
                 	console.log(form.submit)
                 	form.submit();
                 }
            },
            debug: true,
            onkeyup: false,
            errorClass: "invalid",
            rules: {
		        correo: {
		            required: true,
		            email: true
		        },
		        confirmar_correo: {
		            required: true,
		            email: true,
		            equalTo: "#correo"
		        },
		        numero_servicio:{
		            required: true,
		            notEqualTo: 0
		        },
		        tipo:{
		            required: true,
		            notEqualTo: 0
		        },
		        categoria:{
		            required: true,
		            notEqualTo: 0
		        },
		        nombre:{
		        	required: true,
		        	textonly: true
		        },
		        apellido:{
		        	required: true,
		        	textonly: true
		        },
		        rut:{
		        	required: true,
		        	rut: true
		        },
		        serie:{
		        	required: true
		        },
		        usuario:{
		            required: true,
		            notEqualTo: 0
		        },
		        tel_fijo:{
		        	number: true
		        },
		        tel_movil:{
		        	number: true
		        },
		        correo2:{
		            required: '#viaMail:checked',
		            email: true		        	
		        },
		        sms:{
		        	required: '#viaSMS:checked',
		        	//number: true
		        },
		        tel_fijo2:{
		        	required: '#viaFijo:checked',
		        	number: true
		        },
		        tel_movil2:{
		        	required: '#viaMovil:checked',
		        	number: true
		        },
		        seleccionarLinea:{
		            required: '#Invitado:checked',
		            notEqualTo: 0
		        },
		        cap:{
		            required: true,
		            notEqualTo: 0
		        },
		        recap:{
		            required: true,
		            notEqualTo: 0
		        },
		        nombre_usuario:{
		        	required: true
		        },
			    tel_fijo_esp:{
			    	require_from_group: [1, ".phone-group"],
			    	number: true			    	
			    },
			    tel_movil_esp:{
			    	require_from_group: [1, ".phone-group"],
			    	number: true			    	
			    },
			    direccion: {
			    	required: true
			    },
			    t_fijo:{
			    	require_from_group: [1, ".phone-group"],
			    	number: true			    	
			    },
			    t_mobi:{
			    	require_from_group: [1, ".phone-group"],
			    	number: true			    	
			    },
			    region:{
		            required: true,
		            notEqualTo: 0
			    },
			    ciudad: {
		            required: true,
		            notEqualTo: 0
			    },
			    comuna:{
		            required: true,
		            notEqualTo: 0			    	
			    },
			    rangohorario:{
		            required: true,
		            notEqualTo: 0
			    },
			    compania:{
		            required: true,
		            notEqualTo: 0
			    },
			    accept: {
			    	required: true
			    },
			    tel_movil_required: {
			    	number: true,
			    	required: true
			    },
			    tel_movil_not_req: {
			    	number: true,
		        	minlength: 9,
		        	maxlength: 9
			    },
			    imei: {
			    	number: true,
			    	required: true
			    },
		        correo_not_req: {
		            email: true
		        },
		        confirmar_correo_not_req: {
		            email: true,
		            equalTo: "#correo"
		        },
		        fono: {
		        	required: true,
		        	number: true,
		        	minlength: 8,
		        	maxlength: 9
		        },
		        confirmaFono: {
		        	number: true,
		        	equalTo: "#fono"
		        },
		        num_contacto: {
		        	required: true,
		        	textonly: true
		        },
		        puntos: {
		        	required: true,
		        	number: true,
		        	min: 6000,
		        	max: 10000
		        },
		        monto: {
		        	required: true,
		        	number: true
		        },
		        opcion: {
		        	required: true,
		        	notEqualTo: 0
		        },
		        num_compra: {
		        	required: true,
		        	rangelength: [10, 15]
		        },
		        nombre_pref: {
		        	required: true,
		        	textonly: true
		        },
		        num_pref: {
		        	required: true,
		        	number: true,
		        	minlength: 7,
		        	maxlength: 9
		        }
            },

			groups: {
			    GrupoTelefonos: "t_fijo t_mobi"
			},            
            messages: {
			    correo: {
			    	required: "Ingresa un e-mail",
			    	email: "Ingresa un e-mail válido."
			    },
		        confirmar_correo: {
		            required: "Ingresa un e-mail",
		            email: "Ingresa un e-mail válido.",
		            equalTo: "El correo que ingresaste no es igual al anterior."
		        },
			    telefono: "Ingresa un número válido.",
			    tipo: "Selecciona un tipo de solicitud.",
			    categoria: "Selecciona una categoría para tu solicitud.",
			    numero_servicio: "Selecciona un N° de servicio para realizar tu solicitud.",
			    mensaje: "El mensaje es demasiado corto.",
			    nombre: {
			    	required: "Ingresa tu nombre",
			    	textonly: "Ingresa sólo texto"
			    },
			    apellido: {
			    	required: "Ingresa tu apellido",
			    	textonly: "Ingresa sólo texto"
			    },
			    usuario: {
			    	required: "Selecciona un usuario",
			    	notEqualTo: "Selecciona un usuario"
			    },
			    rut: {
			    	required: "Ingresa tu RUT",
			    	rut: "Ingresa un RUT válido"
			    },
			    serie: {
			    	required: "Ingresa el número de serie",
			    },
			    tel_fijo: {
			    	number: "Ingresa sólo números"
			    },
			    tel_movil: {
			    	number: "Ingresa sólo números"
			    },

			    calle: "Ingresa tu calle.",
			    numero: "Ingresa solamente números.",
			    region: "Selecciona tu región.",
			    ciudad: "Selecciona tu ciudad.",
			    comuna: "Selecciona tu comuna.",
			    rangohorario: "Selecciona el rango horario.",
			    compania: "Selecciona la compañía de origen.",
			    correo2: {
			    	required: "Ingresa un e-mail",
			    	email: "Ingresa un e-mail válido."
			    },
			    sms: {
			    	required: "Ingresa un número válido",
			    	number: "Ingresa sólo números"
			    },
			    tel_fijo2: {
			    	required: "Ingresa un teléfono fijo",
			    	number: "Ingresa sólo números"
			    },
			    tel_movil2: {
			    	required: "Ingresa un teléfono móvil",
			    	number: "Ingresa sólo números"
			    },
			    seleccionarLinea: {
			    	required: "Selecciona una línea",
			    	notEqualTo: "Selecciona una línea"
			    },
			    cap: {
			    	required: "Ingresa el código CAP",
			    	notEqualTo: "Selecciona una línea"
			    },
			    recap: {
			    	required: "Ingresa nuevamente el código CAP",
			    	notEqualTo: "Ingresa nuevamente el código CAP2"
			    },

			    nombre_usuario:{
			    	required: "Ingresa un nombre de usuario"
			    },

			    tel_fijo_esp:{
			    	require_from_group: "Ingresa al menos un teléfono",
			    	number: "Ingresa sólo números"			    	
			    },
			    tel_movil_esp:{
			    	require_from_group: "Ingresa al menos un teléfono",
			    	number: "Ingresa sólo números"			    	
			    },
			    direccion: {
			    	required: "Ingresa una dirección"
			    },
			    t_fijo:{
			    	require_from_group: "Ingresa al menos un teléfono",
			    	number: "Ingresa sólo números"			    	
			    },
			    t_mobi:{
			    	require_from_group: "Ingresa al menos un teléfono",
			    	number: "Ingresa sólo números"			    	
			    },
				tel_movil_required: {
			    	number: "Ingresa sólo números",
			    	required: "Ingresa un teléfono móvil"
			    },
				imei: {
			    	number: "Ingresa sólo números",
			    	required: "Ingresa tu IMEI"
			    },
			    tel_movil_not_req:{
			    	number: "Ingresa sólo números",
		        	minlength: "El número ingresado no es válido",
		        	maxlength: "El número ingresado no es válido"			    				    	
			    },
			    correo_not_req: {
			    	email: "Ingresa un e-mail válido."
			    },
		        confirmar_correo_not_req: {
		            email: "Ingresa un e-mail válido.",
		            equalTo: "El correo que ingresaste no es igual al anterior."
		        },
		        fono: {
		        	number: "Ingresa sólo números",
		        	required: "Ingresa un teléfono móvil",
		        	minlength: "El número ingresado no es válido",
		        	maxlength: "El número ingresado no es válido"
		        },
		        confirmaFono: {
		        	equalTo: "El número que ingresaste no es igual al anterior."
		        },
		        num_contacto: {
		        	required: "Ingresa el nombre de tu contacto",
			    	textonly: "Ingresa sólo texto"
		        },
		        puntos: {
		        	required: "Ingresa tus puntos",
		        	number: "Ingresa sólo números",
			    	min: "Ingresa un número mayor a 6000",
		        	max: "Ingresa un número menor a 10000"
		        },
		        monto: {
		        	required: "Ingresa un monto",
		        	number: "Ingresa sólo números",
		        },
		        opcion: {
		        	required: "Selecciona una opción",
		        	notEqualTo: "Selecciona una opción"
		        },
		         num_compra: {
		        	required: 'Ingresa un número de compra valido',
		        	rangelength: 'Ingresa un número de compra valido'
		        },
		        nombre_pref: {
		        	required: 'Ingresa un nombre',
		        	textonly: "Ingresa sólo texto"
		        },
		        num_pref: {
		        	number: "Ingresa sólo números",
		        	required: "Ingresa un teléfono móvil Movistar",
		        	minlength: "El número ingresado no es válido",
		        	maxlength: "El número ingresado no es válido"
		        }
            },

		    highlight: function(element) {
		    	$(element).parent().addClass('error');
		    },
		    unhighlight: function(element) {
		       $(element).parent().removeClass('error');
		    }, 
		    errorPlacement: function(error, element) {

		    	if (element.attr("name") == "seleccionarLinea" ) {
		    		var parent = element.parents('.styled-select');
		    		 error.insertBefore(parent);
		    	}else if(element.attr("name") == "t_fijo"  || element.attr("name") == "t_mobi"){
		    			error.insertBefore('#telGroup');
		    	}else if(element.attr("class") == "name-pref"  || element.attr("class") == "movil-pref"){
		    		var sibling= element.siblings('.field-title');
		    		 error.insertBefore(sibling);
		    	}else{
		    		var parent = element.parents('.row-form');
		    		 error.insertBefore(parent);
		    	}
               
            },
			showErrors: function(em, el) {
				this.defaultShowErrors();
				$( "<a class='close' aria-label='Close'>&times;</a>" ).appendTo( ".mensaje-error" );
				$('.close').on('click',function(e){
					$(this).parent().remove();
					e.preventDefault();
				});
			}
		}); // validate

	});  // form


	if($('#form-cambio-boleta-electronica').size()){

		var formulario ='#form-cambio-boleta-electronica';

		editarMails(formulario);

		$('input').change(function(){

			if($(formulario).valid()){

				$('#submit-button').removeAttr('disabled').removeClass('disabled');
				$('.guardarMail').removeClass('disabled')

			}else{
				$('#submit-button').attr('disabled', 'disabled').addClass('disabled');
				$('.guardarMail').addClass('disabled')
			}

		});		

	}// if


	if( $('#activarNotificaciones').size()){


		var formulario ='#activarNotificaciones';
		editarMails(formulario);

		$('input').change(function(){

			edita_mail_fono(formulario);

		});

	}// if

	if($('#form-edit-notificaciones').size()){

		var formulario ='#form-edit-notificaciones';
		editarMails(formulario);	

		$('input').change(function(){

			edita_mail_fono(formulario);

		});


	}

	if($('#guardar-tarifas').size()){
		var formulario ='#guardar-tarifas';
		guardarContacto(formulario);	
	}


});// doc ready


function editarMails(formulario){


	$('.guardarMail').on('click', function(){
        var mail = $('#correo').val();

        if(!(mail == '') && $('#confirmarCorreo').valid()){
            var item = '<li><div class="text-left">'+mail+'</div><div class="text-right"><a href="javascript:void(0);" class="editing deleteMail" title="Borrar"><img class="svg" src="../images/ico-trash-blue.png"><span>Borrar</span></a></div></li>';

            if($('#mail-list').is(':visible')){

                $('#mail-list').append(item);

            }else{

               $('#mail-list').fadeIn();
               $('#mail-list').append(item); 
            }

            if($('#mail-list li').size() >= 5){
                $('#row-add-mail').fadeOut();
                $('#show-form-mail').hide();
                
            }else if($('#mail-list li').size() < 5) {

                $('#row-add-mail').show();
                $('#show-form-mail').fadeIn();

            }

	         if($('#mail-list').hasClass('insideRow')){
	         	$('#field-estorbo').show();
	         }


            $('#submit-button').prop('disabled', false).removeClass('disabled');

            $('#correo, #confirmarCorreo').val(''); 

            $('#wrap-form').hide();

            //$('#show-form-mail').fadeIn();
        }         

	});

	$('#show-form-mail a').click(function(){
		
		$(this).parent().hide();
		$('.guardarMail').addClass('disabled');

		if($('#mail-list li').size() >= 1){
			$('#omitirMail').show();

			$('#submit-button').prop('disabled', 'disabled').addClass('disabled');
		}

		$('#field-estorbo').hide();

		$('#wrap-form').fadeIn();

	});

	$('#omitirMail').click(function(){

        $('#wrap-form').hide();
        $('#correo, #confirmarCorreo').val(''); 
        $('#show-form-mail').fadeIn();
        $('#field-estorbo').show();
        $('#submit-button').removeAttr('disabled').removeClass('disabled');

	});

    // borrar mails
    $('body').on('click', '.deleteMail', function(){

        if($('#mail-list li').size() == 1){

        	$('#show-form-mail').hide();
        	$('#wrap-form').fadeIn();
        	$('#mail-list').hide();
        	$(this).parents('li').remove();
        	$('#omitirMail').hide();

			if($('#mail-list').hasClass('insideRow')){
				$('#field-estorbo').hide();
			}


        }else{

        	$(this).parents('li').fadeOut().remove();
        }

    });// borrar mails
}// function


function edita_mail_fono(formulario){

	var exist;

	if($('#mail-list li').size() >= 1){
		 exist = true;
	}

	if($.trim($('#tel_movil').val())!=='' && $('#tel_movil').valid() || $.trim($('#correo').val())!=='' && $('#confirmarCorreo').valid() || exist) {

		$('#submit-button').removeAttr('disabled').removeClass('disabled');

	}else{
		$('#submit-button').attr('disabled', 'disabled').addClass('disabled');
	}

	var validator = $( formulario ).validate();
	validator.element( "#confirmarCorreo" );


	if(	validator && $.trim($('#confirmarCorreo').val())!=='' ){

		$('.guardarMail').removeClass('disabled')
	}else{
		$('.guardarMail').addClass('disabled')
	}	

}

function guardarContacto(formulario){

 $('#guardar-numero').click(function(e){
 		
        e.preventDefault();

        var nombre = $('#num_contacto').val(),
            tfijo  = $('#t-fijo').val(),
            tmovil = $('#t-mobi').val();


        var validator = $(formulario).validate();
        	validator.element( "#t-fijo" );
        	validator.element( "#t-mobi" );
 
       if($('#num_contacto').valid()  && (($('#t-fijo').valid() && $.trim($('#t-fijo').val())!=='') || ($('#t-mobi').valid() && $.trim($('#t-mobi').val())!==''))){

                if(tfijo == ''){  
                    fono  ='(Móvil) '+ tmovil;  
                }else{
                    fono  ='(Fijo) '+ tfijo;  
                }

                var item = '<li>\
                <div class="text-left">'+nombre+'<br>'+fono+'</div>\
                <div class="text-right">\
                <a href="#" class="editing" id="borrar-num" title="Borrar">\
                <img class="svg" src="../images/ico-trash-blue.png">\
                <span>Borrar</span></a>\
                </div>\
                </li>';

                if($('#user-list').is(':visible')){
                    $('#user-list').append(item).fadeIn();
                    $('#num_contacto, #t-fijo, #t-mobi').val('');

                }else{
                   $('#user-list').fadeIn();
                   $('#user-list').append(item); 
                   $('#num_contacto, #t-fijo, #t-mobi').val('');
                }

                if($('#user-list li').size() > 2){

                    $('#wrap-form').hide('slow');

                } 
        }
    });//Guardar Numero
	$('#user-list').on('click', '#borrar-num', function(e){
	        e.preventDefault();
	       
	    if($('#user-list li').size() == 3){
		     $(this).parents('li').fadeOut().remove();
	         $('#wrap-form').show('slow');

	    }else{
	         $(this).parents('li').fadeOut().remove();
	    }
	     
	 });//Borrar Numero
}


$(document.body).on('submit', '#formQuince', function(e){

    $(this).validate({});

});