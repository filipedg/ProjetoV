/**
 * Created by filip on 11/05/2016.
 */
$(document).ready(function () {
    var altura=($(window).height());

    $("#centralizar").css({"margin-top":(altura-(altura/2))-93-52})

    $(window).resize(function () {
        var altura=($(window).height());
        $("#centralizar").css({"margin-top":(altura-(altura/2))-93-52})
    })
});