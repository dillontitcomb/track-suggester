$(document).ready(function() {
  $("form#trackSurvey").submit(function(event) {
		var name = $("#name").val();
		var email = $("#email").val();
		var education = $("#education").val();
		var comfort = $("#computerComfort").val();
		var codeInterest = $("#codeInterest").val();
		var companySize = $("#companySize").val();
		alert(name + email + education + comfort + codeInterest + companySize);
		$(".rubyTrack").show();
		event.preventDefault();
	});
});
