$('document').ready(function(){
	var n1 = Math.round(Math.random() * 10 + 1);
    var n2 = Math.round(Math.random() * 10 + 1);
	document.getElementsByName('captcha')[0].placeholder=("CAPTCHA CODE: " + n1 + "+" + n2);

});


$('form').submit(function(e) {
	if  (eval($("#captcha").val()) == (n1+n2)) {
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
		$('#gform *').fadeOut(0);
		$('#contact-box *').fadeOut(0);
		$('#gform').prepend(
			'<div class="thank-you-box"><h3 class="thank-you">Thank-you!!<h3><p class="thank-you">This is a website template.  Please contact Blake Davies directly via his website at http://blakedavies.net/ .</p></div>'
		);
		return true;
	}
	else{
		alert('You not enterd the correct captcha code value');
		return false;
	}
});
