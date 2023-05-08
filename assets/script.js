var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);


// Save Button & Local Storage Save
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".info").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

// Grabs Current Hours
function currHours() {
    var currentTime = moment().hour();
};

// Loop Times
$(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);

    if (blockTime < currHours) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    } else if (blockTime === currHours) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
        }
    })
})


$("#hour-9 .info").val(localStorage.getItem("hour9"));
$("#hour-10 .info").val(localStorage.getItem("hour10"));
$("#hour-11 .info").val(localStorage.getItem("hour11"));
$("#hour-12 .info").val(localStorage.getItem("hour12"));
$("#hour-13 .info").val(localStorage.getItem("hour13"));
$("#hour-14 .info").val(localStorage.getItem("hour14"));
$("#hour-15 .info").val(localStorage.getItem("hour15"));
$("#hour-16 .info").val(localStorage.getItem("hour16"));
$("#hour-17 .info").val(localStorage.getItem("hour17"));

currentTime();