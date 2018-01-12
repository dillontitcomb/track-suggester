var percentFit = function (trackScore, trackPossibleScore) {
	return (trackScore / trackPossibleScore) * 100;
}

var introVal = 0;
var rubyVal = 0;
var phpVal = 0;
var javaVal = 0;
var cssVal = 0;
var csharpVal = 0;

var introPossible = 5;
var rubyPossible = 8;
var phpPossible = 8;
var javaPossible = 8;
var cssPossible = 8;
var csharpPossible = 8;

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
		var clientType = $("#clientType").val();

		$("h4").prepend(name + ", ");

		if (education === "graduate") {
			introVal -= 1;
		}

		if (comfort === "uncomfortable") {
			introVal += 5;
		} else if (comfort === "lowComfort") {
			introVal += 1;
		} else if (comfort === "highComfort") {
			introVal -= 1;
		}

		if (codeInterest === "intMobile") {
			javaVal += 3;
		}	else if (codeInterest === "intInteractive") {
			rubyVal += 2;
			cssVal += 1;
			phpVal -= 1;
		} else if (codeInterest === "intDesign") {
			cssVal += 5;
		} else if (codeInterest === "intBackend") {
			phpVal += 3;
			csharpVal += 1;
			cssVal -= 1;
		} else if (codeInterest === "intBtoB") {
			csharpVal += 3;
			phpVal += 1;
		}

		if (companySize === "smStartup" || companySize === "mdStartup") {
			rubyVal += 3;
			csharpVal -= 1;
		} else if (companySize === "smCompany" || companySize === "mdCompany") {
			javaVal += 1;
			csharpVal += 1;
			phpVal +=1;
		} else if (companySize === "lgCompany") {
			csharpVal +=2;
			phpVal +=2;
			javaVal +=2;
		}

		if (clientType === "clientReddit") {
			rubyVal +=3;
			javaVal +=1;
		} else if (clientType === "clientGovt") {
			phpVal +=3;
			csharpVal +=2
		} else if (clientType === "clientCorp") {
			csharpVal +=3
			phpVal += 2
			javaVal +=1
		} else if (clientType === "clientFashion") {
			cssVal += 3;
			javaVal +=1;
		} else if (clientType === "clientMobile") {
			javaVal +=3;
			rubyVal +=1;
		}

		var introPercent = percentFit(introVal, introPossible);
		var rubyPercent = percentFit(rubyVal, rubyPossible);
		var javaPercent = percentFit(javaVal, javaPossible);
		var phpPercent = percentFit(phpVal, phpPossible);
		var cssPercent = percentFit(cssVal, cssPossible);
		var csharpPercent = percentFit(csharpVal, csharpPossible);

		// Troubleshooting:
		// alert(introPercent);
		// alert(rubyPercent);
		// alert(javaPercent);
		// alert(phpPercent);
		// alert(cssPercent);
		// alert(csharpPercent);

		if (introPercent > rubyPercent && introPercent > javaPercent && introPercent > phpPercent && introPercent > cssPercent && introPercent > csharpPercent || introPercent === 100) {
			$(".trackPercent").text(introPercent + "%");
			$("#introTrack").fadeIn();
		}	else if (rubyPercent > introPercent && rubyPercent > javaPercent && rubyPercent > phpPercent && rubyPercent > cssPercent && rubyPercent > csharpPercent) {
			$(".trackPercent").text(rubyPercent + "%");
			$("#rubyTrack").fadeIn();
		} else if (javaPercent > introPercent && javaPercent > rubyPercent && javaPercent > phpPercent && javaPercent > cssPercent && javaPercent > csharpPercent) {
			$(".trackPercent").text(javaPercent + "%");
			$("#javaTrack").fadeIn();
		} else if (phpPercent > introPercent && phpPercent > rubyPercent && phpPercent > javaPercent && phpPercent > cssPercent && phpPercent > csharpPercent) {
			$(".trackPercent").text(phpPercent + "%");
			$("#phpTrack").fadeIn();
		} else if (cssPercent > introPercent && cssPercent > rubyPercent && cssPercent > javaPercent && cssPercent > phpPercent && cssPercent > csharpPercent) {
			$(".trackPercent").text(cssPercent + "%");
			$("#cssTrack").fadeIn();
		} else if (csharpPercent > introPercent && csharpPercent > rubyPercent && csharpPercent > javaPercent && csharpPercent > phpPercent && csharpPercent > cssPercent) {
			$(".trackPercent").text(csharpPercent + "%");
			$("#csharpTrack").fadeIn();
		} else {
			alert("Unfortunately, we weren't able to place you decisively with one track over another. Feel free to give the survey another try if you'd like. Our apologies.")
		}
		event.preventDefault();
	});
});
