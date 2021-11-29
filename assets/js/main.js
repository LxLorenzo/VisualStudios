// MENU HAMBURGUER //
$(".menu-toggler").on("click", () => {
	$(".nav__bar").toggleClass("active");
	$(".menu-toggler").toggleClass("active");
});

//  FAQ //
$(".faq__layout").each(function () {
	$(this).on("click", function () {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
		} else {
			$(this).addClass("active");
		}
	});
});

// CLOSE MENU ON CLICK //
$(".nav__link").on("click", () => {
	$(".nav__bar").removeClass("active");
});

// TRANSPARENT MENU WHEN SCROLL DOWN //
window.onscroll = () => {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		$(".header").addClass("transparent");
	} else {
		$(".header").removeClass("transparent");
	}
};

// SCROLL REVEAL //

const sr = ScrollReveal({
	origin: "right",
	distance: "120px",
	duration: 1500,
	delay: 200,
	reset: false,
});

sr.reveal(".introduction__description", { origin: "left" });
sr.reveal(".introduction__title", { origin: "left", delay: 300 });
sr.reveal(".introduction__text", { origin: "left", delay: 400 });
sr.reveal(".introduction__img", { delay: 500 });
sr.reveal(".introduction__button__container", { origin: "left", delay: 600 });
sr.reveal(".header", { origin: "top", reset: false });
sr.reveal(".services__title", { origin: "left" });
sr.reveal(".services__card", { origin: "bottom" });
sr.reveal(".knowourwork__img__container");
sr.reveal(".knowourwork__title", { origin: "left" });
sr.reveal(".knowourwork__text", { origin: "left" });
sr.reveal(".faq__title", { origin: "left" });
sr.reveal(".faq__layout");
sr.reveal(".contact__title", { origin: "left" });
sr.reveal("#nome", { origin: "left" });
sr.reveal("#assunto", { delay: 250 });
sr.reveal("#email", { origin: "left", delay: 300 });
sr.reveal("#msg", { delay: 350 });
sr.reveal(".contact__button__container", { origin: "bottom" });
sr.reveal(".footer", { origin: "bottom", reset: false });

// SCROLL ACTIVE LINKS

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
	const scrollY = window.pageYOffset;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute("id");

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document.querySelector(".nav__bar a[href*=" + sectionId + "]").classList.add("active-link");
		} else {
			document
				.querySelector(".nav__bar a[href*=" + sectionId + "]")
				.classList.remove("active-link");
		}
	});
};
window.addEventListener("scroll", scrollActive);
