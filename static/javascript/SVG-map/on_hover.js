$(document).ready(function() {
    $("path").hover(function() {
        const id_state = $(this).attr('id');
        $(this).css("background-color", "yellow");
    });
});