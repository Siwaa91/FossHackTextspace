  function navDropdown(value)
        {
          // console.log(value)
          $(value).slideToggle(400);
        }

$(document).ready(function () {
    var alterClass = function () {
        var ww = document.body.clientWidth;
        if (ww >= 883) {
         
            $(".nav-dropdown-outer").show()
        }


    };
    $(window).resize(function () {
        alterClass();
    });
    alterClass();
});
