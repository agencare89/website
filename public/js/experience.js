$(document).ready(function() {
    $("#courses-accordian1").accordion();
    $("#courses-accordian2").accordion();
    $(".tabular.menu > .item").tab();
});

$(window).on("scroll", function() {
    // Take the absolute value of each offset - smallest abs value becomes the new active value
    var workExpOffset = Math.abs($("#work-exp-title").position().top - $(this).scrollTop());
    var educationOffset = Math.abs($("#education-title").position().top - $(this).scrollTop());
    var volunteerExpOffset = Math.abs($("#volunteer-exp-title").position().top - $(this).scrollTop());

    var min = Math.min(workExpOffset, educationOffset, volunteerExpOffset);
    if (min == workExpOffset) {
        $("#experience-menu > a.item.active").removeClass("active");
        $("#work-exp-tab").addClass("active");
    } else if (min == educationOffset) {
        $("#experience-menu > a.item.active").removeClass("active");
        $("#education-tab").addClass("active");
    } else if (min == volunteerExpOffset) {
        $("#experience-menu > a.item.active").removeClass("active");
        $("#volunteer-exp-tab").addClass("active");
    }
});

$("#work-exp-tab").click(function() {
    $('html,body').animate({scrollTop: 0 - 55},'slow');
    setTimeout(function() {
        $("#experience-menu > a.item.active").removeClass("active");
        $("#work-exp-tab").addClass("active");
    }, 600);
});
$("#education-tab").click(function() {
    $('html,body').animate({scrollTop: $("#education-title").offset().top - 55},'slow');
    setTimeout(function() {
        $("#experience-menu > a.item.active").removeClass("active");
        $("#education-tab").addClass("active");
    }, 600);
});
$("#volunteer-exp-tab").click(function() {
    $('html,body').animate({scrollTop: $("#volunteer-exp-title").offset().top - 55},'slow');
    setTimeout(function() {
        $("#experience-menu > a.item.active").removeClass("active");
        $("#volunteer-exp-tab").addClass("active");
    }, 600);
});
