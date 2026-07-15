window.addEventListener('load', () => {

	const items = document.querySelectorAll('.scroll');

	items.forEach(el => {
		el.style.opacity = 0;
		el.style.transform = "translateY(20px)";
		el.style.filter = "blur(6px)";
		el.style.transition = "1.6s ease";
	});

	window.addEventListener('scroll', () => {

		items.forEach(el => {
			const rect = el.getBoundingClientRect();

			if (rect.top < window.innerHeight - 100) {
				el.style.opacity = 1;
				el.style.transform = "translateY(0)";
				el.style.filter = "blur(0)";
			}
		});

	});

});