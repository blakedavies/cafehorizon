function checkform() {
		var val = $("#entry.1594840891").val();
		if (val == 'TEST') {
        
        $('#gform').submit(function(e) {
	      e.preventDefault();
	      $.ajax({
	        url: "https://docs.google.com/a/blakedavies.net/forms/d/e/1FAIpQLSdlElv_pBFNUwP7OZ4wI-BLIA_QLDMjxa1v3UwvucJCjuSVbg/formResponse",
	        data: $(this).serialize(),
	        type: "POST",
	        dataType: "xml",
	        success: function(data) {
	          console.log('Submission successful');
	        },
	        error: function(xhr, status, error) {
	          console.log('Submission failed: ' + error);
	        }
	      });
	    });

		$('#gform').on('submit', function(e) {
	  		$('#gform *').fadeOut(0);
	  		$('#contact-box *').fadeOut(0);
	  		$('#gform').prepend(
	    		'<div class="thank-you-box"><h3 class="thank-you">Thank-you!!<h3><p class="thank-you">This is a website template.  Please contact Blake Davies directly via his website at http://blakedavies.net/ .</p></div>'
	    	);
	  	});

    }	
