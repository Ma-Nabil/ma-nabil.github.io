/*global document, $, console*/
var screen = document.getElementById("screen");
var entery = "";
var func = 0;
var verify = "";
var verify2 = "";
// var dot = "";
function getClicked(el) {
    "use strict";
    verify = entery.substr(-1, 1);
    verify2 = entery.substr(-2, 2);
    /* dot = entery.search(".");
    if (el == "." && dot > 0) {
        return;
    } */
    if (el == "+" || el == "-" || el == "/" || el == "*" || el == "**") {
       if (verify2 == "**") {
            entery = entery.slice(0, -2) + el;
        } else if (verify == "+" || verify == "-" || verify == "/" || verify == "*") {
            entery = entery.slice(0, -1) + el;
        } else {
            entery = entery + el;
        }
    } else {
        entery = entery + el;
    }
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
