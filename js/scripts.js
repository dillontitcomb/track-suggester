var percentFit = function (trackScore, trackPossibleScore) {
	var trackPercent = ((trackScore / trackPossibleScore) * 100);
	return trackPercent
}

$(document).ready(function() {
  $("form#trackSurvey").submit(function(event) {
		$("form#trackSurvey").hide();
		$(".trackOption").hide();
		var name = $("#name").val();
		var email = $("#email").val();
		var education = $("#education").val();
		var comfort = $("#computerComfort").val();
		var codeInterest = $("#codeInterest").val();
		var companySize = $("#companySize").val();
		$("h4").prepend(name + ", ");

		if (comfort === "uncomfortable" || comfort === "lowComfort") {
			$("#introTrack").fadeIn();
		}	else if (codeInterest === "intMobile") {
			$("#javaTrack").fadeIn();
		}	else if (codeInterest === "intDesign") {
			$("#cssTrack").fadeIn();
		}	else if (codeInterest === "intBackend") {
			$("#phpTrack").fadeIn();
		}	else if (codeInterest === "intBtoB") {
			$("#csharpTrack").fadeIn();
		} else if (companySize === "smStartup" || companySize === "mdStartup" || codeInterest === "intInteractive") {
			$("#rubyTrack").fadeIn();
		} else {
			alert("Sorry! We're not exactly sure which track you should take.")
		}

		// $("#rubyTrack").show();
		// $("#phpTrack").show();
		// $("#javaTrack").show();
		// $("#cssTrack").show();
		// $("#csharpTrack").show();
		event.preventDefault();
	});
});
