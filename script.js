$(document).ready(function() {
	let previousbutton = $("#previous");
	previousbutton.on("click", function() {
		previous();
	})
	let nextbutton = $("#next");
	nextbutton.on("click", function() {
		next();
	})
	let slides = $(".slide");
	let index = 0;
	let previousboolean = false;
	let nextboolean = false;
	showslide();

	function previous() {
		index -= 1;
		previousboolean = true;
		slides.removeClass("animation1");
		slides.removeClass("animation2");
		showslide();
	}

	function next() {
		index += 1;
		nextboolean = true;
		slides.removeClass("animation1");
		slides.removeClass("animation2");
		showslide();
	}

	function showslide() {
		index = checkindex(index);
		slides.hide();
		slides.eq(index).show();
		if (previousboolean === true) {
			slides.eq(checkindex(index + 1)).addClass("animation2");
			slides.eq(checkindex(index + 1)).show();
			slides.eq(index).addClass("animation1");
			slides.eq(index).show();
			document.getElementsByClassName("slide")[index].style.zIndex = "4";
		}
		if (nextboolean === true) {
			slides.eq(checkindex(index - 1)).addClass("animation2");
			slides.eq(checkindex(index - 1)).show();
			slides.eq(index).addClass("animation1");
			slides.eq(index).show();
			document.getElementsByClassName("slide")[index].style.zIndex = "4";
		}
		previousboolean = false;
		nextboolean = false;
	}

	function checkindex(i) {
		if (i > slides.length - 1) {
			return 0;
		}
		if (i < 0) {
			return slides.length - 1;
		}
		return i;
	}
})