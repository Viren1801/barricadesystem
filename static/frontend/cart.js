$(".cart_quantity_up").on('click',function (e){



			e.preventDefault();

			var token = '{{ csrf_token }}';
			var product_id = $(this).data('product');
			var action = $(this).data('action');


  $.ajax({

	type:"POST",
	headers: {
				'X-CSRFToken': token
		   },
    url: url3,

    data: {
      'product_id': product_id ,
      'action':action,

    },


  });
   $(document).ajaxStop(function(){
    window.location.reload();
});

});

$(".cart_quantity_down").on('click',function (e){



			e.preventDefault();

			var token = '{{ csrf_token }}';
			var product_id = $(this).data('product');
			var action = $(this).data('action');
			var total_item = $(this).data('total');



  $.ajax({

	type:"POST",
	headers: {
				'X-CSRFToken': token
		   },
    url: url3,

    data: {
      'product_id': product_id ,
      'action':action,
      'total_item':total_item,

    },

  });
  $(document).ajaxStop(function(){
    window.location.reload();
});

});


$(".cart_quantity_input").on('change',function (e){



			e.preventDefault();

			var token = '{{ csrf_token }}';
			var product_id = $(this).data('product');
			var value = $(this).val();
			var action = $(this).data('action');


  $.ajax({

	type:"POST",
	headers: {
				'X-CSRFToken': token
		   },
    url: url3,

    data: {
      'product_id': product_id ,
      'action':action,
      'value':value,

    },

  });
  $(document).ajaxStop(function(){
    window.location.reload();
});

});
$(".cart_quantity_delete").on('click',function (e){



			e.preventDefault();

			var token = '{{ csrf_token }}';
			var product_id = $(this).data('product');
			var action = $(this).data('action');


  $.ajax({

	type:"POST",
	headers: {
				'X-CSRFToken': token
		   },
    url: url3,

    data: {
      'product_id': product_id ,
      'action':action,


    },

  });
  $(document).ajaxStop(function(){
    window.location.reload();
});

});


$(".remove_coupon").on('click',function (e){



			e.preventDefault();

			var token = '{{ csrf_token }}';
			var action = $(this).data('action');
			alert(action)


  $.ajax({

	type:"POST",
	headers: {
				'X-CSRFToken': token
		   },
    url: url3,

    data: {
      'action':action,
    },

  });
  $(document).ajaxStop(function(){
    window.location.reload();
});

});