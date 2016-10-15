/// <reference path="../typings/index.d.ts" />

$("#add").click(evt => {
    let todo = $("#todo").val();
    $("ul#todos").append(`<li>${todo}</li>`);
});