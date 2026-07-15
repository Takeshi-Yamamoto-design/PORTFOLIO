window.addEventListener('load', () => {

	const items = document.querySelectorAll('.fade');

	// 初期状態（JSで隠す）
	items.forEach(el => {
		el.style.opacity = 0;
		el.style.transform = "translateY(20px)";
		el.style.filter = "blur(6px)";
	});

	// 表示アニメーション
	items.forEach((el, i) => {
		setTimeout(() => {
			el.style.transition = "1.0s ease";
			el.style.opacity = 1;
			el.style.transform = "translateY(0)";
			el.style.filter = "blur(0)";
		}, 100 + i * 300);
	});

});