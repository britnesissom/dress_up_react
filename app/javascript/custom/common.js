$(document).on("turbolinks:load", function() {
    $('.tabs').tabs();

    $(".checkbox-class").on("click", function() {
        $(".character_form").trigger("submit");
    });
});