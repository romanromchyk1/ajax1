/* global $ */
$(function() {
    $('#btn-submit').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/romanromchyk@hotmail.com",
            method: "POST",
            data: {
                name: $('#name').val()
            },
            dataType: "json"
        }).done(function() {
            $('form').html('<h1>Thank you!</h1>');
        });
    });
});