
// Change the navigation bar on scroll in the main page
$(window).scroll(function() {
	var windscroll = $(window).scrollTop();
	if (windscroll >= ($("#main-screen").height() - $("#main-nav").height())) {
		if (! $("#main-nav").hasClass("fixed solid-bg")) {
			$("#main-nav").hide().fadeIn(700).addClass("fixed solid-bg");
			$("#main-nav > a.active").addClass("no-active");
		}
	} else {
		if ($("#main-nav").hasClass("fixed solid-bg")) {
			$("#main-nav").hide().removeClass("fixed solid-bg").show();
			$("#main-nav > a.active").removeClass("no-active");
		}
	}
}); 

$("#downloadCV").click(function() {
	window.open("Resume - Adam Gencarelli.pdf", "_blank");
});

// Animate typing
var initial_wait_after_doc_ready = 50;
var addition_wait_min = 400;
var addition_wait_max = 600;

// When the page loads, start the animation to type a welcome message 
$(document).ready(function() {
	$('.pusher').fadeIn();
	var typeTextDiv = document.getElementById("typeText");
	setTimeout(function() {
        var rect = typeTextDiv.getBoundingClientRect();
        var corrected_text = typeTextDiv.getAttribute("text");
        //ensure_cursor_text($("#typeText"));
        setTimeout(function() {
            add_chars_one_by_one($("#typeText"), corrected_text, function() {
            	$("#typeText").append("<span id='cursor'>| </span>");
            });
        }, initial_wait_after_doc_ready);
    }, initial_wait_after_doc_ready);
});

function add_chars_one_by_one(editable, text, done) {
    if (editable.html().length != text.length) {
        var new_text = text.substr(0, editable.html().length + 1);
        //ensure_cursor_text(editable);
        editable.html(new_text);
        setTimeout(function() {
            add_chars_one_by_one(editable, text, done);
        }, randomIntFromInterval(addition_wait_min, addition_wait_max));
    } else {
        done();
    }
}

function ensure_cursor_text(editable) {
    var rect = editable[0].getBoundingClientRect();

    if ($(".cursor_text").length === 0) {
        $("<div class='cursor_text'></div>").insertAfter(editable);
    }

    if (rect.height > 0) {
        $(".cursor_text").offset({
            top: rect.top + 'px',
            left: (rect.right + 5) + 'px'
        });
        $(".cursor_text").height(rect.height);
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}