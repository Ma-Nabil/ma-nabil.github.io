/*global $*/
var next,
	inputs;
$("#register-form input").wrap("<div class='form-group'></div>");
$("input:not([type='submit'])").addClass("form-control");
$(".form-control").parent().prev().each(
	function () {
		$(this).addClass("form-control-label");
		next = $(this).next();
		$(this).prependTo(next);
	}
);

$("input:not([type='submit'])").attr("data-toggle", "tooltip");
$('[data-toggle="tooltip"]').tooltip({
	placement: "left"
});
$("input[type='submit']").attr("data-toggle", "popover");
$("#register-form input:not([type='submit'])").on("blur", function () { toValidate($(this)); });
$("#register-form").on("submit", function () {
	inputs = $(this).find("input:not([type='submit'])");
	toValidate(inputs);
});
function toValidate(el) {
	if(!validate(el)) {
		el.css("border", "2px solid #f7696a");
		el.tooltip('show');
	} else {
		el.css("border", "1px solid #D7DCE0");
		el.tooltip('hide');
	}
}
function validate(el) {
	if (el.attr("name") == "username") {
		if (el.val().trim().match(/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[أ-يa-zA-Z0-9._]+(?<![_.])$/) == null) {
			return false;
		}
	} else if(el.attr("name") == "email") {
		if (el.val().trim().match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/) == null) {
			return false;
		}
	} else if(el.attr("name") == "password") {
		if (el.val().trim().length < 8 ) {
			return false;
		}
	}  else if (el.has("required").val() == "") {
		return false;
	}
	return true;
}
