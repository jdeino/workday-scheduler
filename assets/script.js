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
}

