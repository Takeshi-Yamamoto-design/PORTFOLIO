(function () {

	// =========================
	// 白いトランジション用レイヤー生成
	// =========================
	const cover = document.createElement('div');
	cover.style.position = 'fixed';
	cover.style.top = 0;
	cover.style.left = 0;
	cover.style.width = '100%';
	cover.style.height = '100%';
	cover.style.background = '#fff';
	cover.style.zIndex = 9999;
	cover.style.opacity = 1;
	cover.style.pointerEvents = 'none';
	cover.style.transition = '0.6s ease';

	document.body.appendChild(cover);

	// =========================
	// ページ表示時（開く演出）
	// =========================
	window.addEventListener('load', () => {

		setTimeout(() => {
			cover.style.opacity = 0;
		}, 200);

	});

	// =========================
	// リンククリック時（閉じる演出）
	// =========================
	document.addEventListener('click', (e) => {

		const link = e.target.closest('a');

		if (!link) return;

		const href = link.getAttribute('href');

		// 無効リンク除外
		if (!href || href.startsWith('#') || href.startsWith('javascript')) return;

		e.preventDefault();

		cover.style.opacity = 1;

		setTimeout(() => {
			window.location.href = href;
		}, 500);

	});

})();