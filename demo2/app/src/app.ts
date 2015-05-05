/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="Developer.ts" />

var developers: Array<Developer> = [];

$("#add").click(function () {
    var dev = new Developer($("#firstName").val(),
        $("#lastName").val(),
        $("#salary").val());

    developers.push(dev);

    updateUI();
});

function updateUI(): void {
    $("#developers").empty();

    if (developers.length > 0) {
        $("#developers").append("<ul></ul>");

        developers.forEach(function(dev) {
            $("#developers ul")
                .append("<li>" + dev.getFullName() + "</li>");
        });
    } else {
        $("#developers").text("No entries.");
    }
}

updateUI();