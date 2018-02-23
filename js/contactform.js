$('form').submit(function(e) {
      if (parseInt($('input[name="entry.82829002"]').val()) == 12) {
        return true;
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
      }
      else{
        alert('You not enterd the correct value');
        return false;
      }
});
