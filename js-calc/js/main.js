/*global document, $*/
var screen = document.getElementById("screen");
var entery = "";
var func = 0;
function getClicked(el) {
    "use strict";
    entery = entery + el;
    screen.innerHTML = entery;
    func = eval(entery);
}
$(".calc-button").click(function () {getClicked($(this).attr('value')); });
$(".change-button").click(function () {
    "use strict";
    func = -func;
    entery = func.toString();
    screen.innerHTML = entery;
});
$(".equal-button").click(function () {
    "use strict";
    screen.innerHTML = func;
    entery = func.toString();
});
$(".clear-button").click(function () {"use strict"; entery = ""; func = 0; screen.innerHTML = 0; });