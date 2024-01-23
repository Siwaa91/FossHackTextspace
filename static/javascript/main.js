
function formOpen(id) {
    $(id).fadeIn(300)
}

function formClose(id) {
    $(id).fadeOut(300)
}

//function for pulldown the recent section
$(".down-arrow-icon").click(function () {
    $("#recent-shutdown-block-2").slideToggle(400)
    $(".lockdown-stats-table-block").slideToggle(400)
    $(".fa-chevron-down").slideToggle()
    $(".fa-angle-up").slideToggle()
});

// world-map toggle
$(".fa-toggle-off").click(function () {
    $(".fa-toggle-on").show(50);
    $(".fa-toggle-off").hide(50);
    document.getElementById("india-active").classList.remove("active-map");
    document.getElementById("world-active").classList.add("active-map")
});

$(".fa-toggle-on").click(function () {
    $(".fa-toggle-off").show(50);
    $(".fa-toggle-on").hide(50);
    document.getElementById("india-active").classList.add("active-map");
    document.getElementById("world-active").classList.remove("active-map")
});



$("#back_to_map").click(function () {
    $("#hidden-video-container").fadeOut(400);
    $("#hidden-video-spacing").fadeOut(400);

})


$(document).on("click", "#read-more", function () {
    if ($(this).text() == "Read more") {
        $(this).text("Read less")
    } else {
        $(this).text("Read more")
    }
})

function ToggleFaq(answer) {
    answer = "#" + answer
    $(answer).toggle();
    answer = answer + "h"
    $(answer).toggle();

}

function messageOnSubmit(msg, textColor, BgColor, id, borderColor) {
    $('#' + id).text(msg)
    document.getElementById(id).style.background = BgColor
    document.getElementById(id).style.color = textColor;
    document.getElementById(id).style.borderColor = borderColor;
    if (msg === "Submitted") {
        $('#' + id).attr("id", "")
    } else if (msg === "Error occured") {
        $('#' + id).attr("id", "")
    }

}

//API call for sending mail of share your experience
$("#shareExperience").submit(function (e) {
    // preventing from page reload and default actions
    e.preventDefault();

    $("#shareExperienceSubmit").text("Submitting")
    $.ajax({
        type: 'GET',
        url: "/share-experience/",
        data: $("#shareExperience").serialize(),
        success: function (response) {
            messageOnSubmit("Submitted", "white", "Green", "shareExperienceSubmit", "lightgreen")
            $("#form-share-experience-inner").slideUp(500)
            $('#submission-msg').text("Thanks Your response submitted successfully")
            myvariable = response
        },
        error: function (response) {
            $("#form-share-experience-inner").slideUp(500)
            $('#submission-msg').text("Something went wrong kindly mail us at : internetshutdowns@sflc.in")
            messageOnSubmit("Error occured", "white", "Red", "shareExperienceSubmit", "lightred")

        }
    })

})


//API call for sending mail of  report shutdown
$("#report-shutdown").submit(function (e) {
    // preventing from page reload and default actions
    e.preventDefault();
    $("#report-shutdown-submit").text("Submitting")
    $.ajax({
        type: 'GET',
        url: "/report-shutdown/",
        data: $("#report-shutdown").serialize(),
        success: function (response) {
            messageOnSubmit("Submitted", "white", "Green", "report-shutdown-submit", "lightgreen")
            $('#submission-msg-2').text("Thanks Your response submitted successfully")
            $("#form-report-shutdown-inner").slideUp(500)
            myvariable = response
        },
        error: function (response) {
            $("#form-report-shutdown-inner").slideUp(500)
            $('#submission-msg-2').text("Something went wrong kindly mail us at : internetshutdowns@sflc.in")
            messageOnSubmit("Error occured", "white", "Red", "report-shutdown-submit", "lightred")

        }
    })
})

