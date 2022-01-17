

//<!----------------------------- cart  -->
$(document).ready(function(){
//    <!--close messages-->

    function close () {
     window.setTimeout(function() {
        TriggerAlertClose();

        },5000);
    };

     function TriggerAlertClose(){ window.setTimeout(function() {
            $(".alert-dismissible").fadeTo(1000, 0).slideUp(1000, function(){
                $(this).remove();
            });
        }, 5000);
        }



    load_cart_values();
    load_wishlist_values();

    function load_cart_values(){

        var token = '{{ csrf_token }}';
            $.ajax({
            type:"POST",
            headers: {
                            'X-CSRFToken': token
                       },
            url: url1,

            success: function(data){
            $("#cart_value").html(data)
            },

            });
    }

    function load_wishlist_values(){

        var token = '{{ csrf_token }}';
            $.ajax({
            type:"POST",
            headers: {
                            'X-CSRFToken': token
                       },
            url: url2,

            success: function(data){
            $("#wishlist_value").html(data)
            },

            });
    }

    $(document).on('click','.add-to-cart',function (e){
                e.preventDefault();
                var token = '{{ csrf_token }}';
                var product_id = $(this).data('product');
                var action = $(this).data('action');
                alert(action)


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
        success: function(data){
            alert('sdcs')
           $("#message").append('<div class="alert alert-success alert-dismissible alert-fixed"  role="alert" ><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>'+data+'</div>');
           load_cart_values();
           close();
        }

      });

    });

    $(document).on('click','.add-to-whishlist',function (e){
                e.preventDefault();
                var token = '{{ csrf_token }}';
                var product_id = $(this).data('product');
                var action = $(this).data('action');


      $.ajax({

        type:"POST",
        headers: {
                    'X-CSRFToken': token
               },
        url: url4,

        data: {
          'product_id': product_id ,
          'action':action,
        },
          success: function(data){

           $("#message").append('<div class="alert alert-success alert-dismissible"  role="alert" ><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>'+data+'</div>');
            load_wishlist_values()
            close();
        }
      });
    });

    $(document).on('click','.add-to-cart2',function (e){



			e.preventDefault();

			var token = '{{ csrf_token }}';
			var product_id = $(this).data('product');
			var value = $("#cart_quantity_input").val();
			if (value == "" ){
			value = 1;
			}
			var action = $(this).data('action');
//			var url = "{% url 'Home:CartAdd' %}"


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

				}

			  });
			  $(document).ajaxStop(function(){
                    window.location.reload();
                });


    });
});

//<!---------------------------- mailchimp -->

$('#subscribe').submit(function(e){
      e.preventDefault();
      var email_id = $("#email_id").val();
      if(email_id){
        var csrfmiddlewaretoken = csrftoken;
        var email_data = {"email_id": email_id,
                          "csrfmiddlewaretoken" : csrfmiddlewaretoken};


        $.ajax({
          type : 'POST',
          url :  url5,
          data : email_data,
          success : function(response){
            $('#email_id').val('');
            if(response.status == "404"){
              alert("This Email is already been subscribed!");
            }
            else{
              alert("Thank you for Subscribing! Please Check your Email to Confirm the Subscription");
            }
          },
          error: function(response) {
            alert("Sorry Something went Wrong");
            $('#email_id').val('');
          }
        });
        return false;
      }
      else{
        alert("Please provide correct email!");
      }
  });


function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = jQuery("[name=csrfmiddlewaretoken]").val();

function csrfSafeMethod(method) {
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
})


$(document).ready(function(){

			var limit = 4;
			var start = 1;
			var button_action = 'inactive';

				function load_data(limit,start,is_category)
				{

				$.ajax({
						url: url6,
						method:"GET",
						data: {
						  limit: limit,
						  start:start,
						  is_category : is_category,
						},
						cache:false,

						success: function(data){

							$('.load_data').append(data)
							if(data == '' )
							{
								$('.load_data_message').html("");
								action = 'active';
							}
							else
							{
								action = 'inactive';
							}
						}
				});
			}

			$(".button-message").on('click',function(){
				button_action = 'action';
				start = start + 1;
				var is_category = 'False';
				load_data(limit,start,is_category);
			});

			$(".button-message-category").on('click',function(){
				button_action = 'action';
				start = start + 1;
				var is_category = $(this).data('category');
				load_data(limit,start,is_category);
			});


});
//
//
//<!--function load_category_data(category_id)-->
//<!--			{-->
//<!--				alert(category_id)-->
//<!--				alert(url)-->
//<!--				$.ajax({-->
//<!--						url: url,-->
//<!--						method:"GET",-->
//<!--						data: {-->
//<!--						  category_id :category_id,-->
//<!--						},-->
//
//<!--						success: function(data){-->
//<!--							alert(data)-->
//<!--							$('.category-new-data').html(data)-->
//<!--						}-->
//<!--				});-->
//<!--			}-->
//
//<!--			$(document).on('click',".category-call",function(){-->
//
//<!--				var category_id = $(this).data('category');-->
//<!--				load_category_data(category_id);-->
//
//<!--			});-->


