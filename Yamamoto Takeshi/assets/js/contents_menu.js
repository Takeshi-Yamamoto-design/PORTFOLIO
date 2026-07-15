$(function () {

    const pages = $('#Flier, #Package, #Key-visual, #Layout');

    const flierDetail = $('#flier_menu');
    const packageDetail = $('#Package_menu');
    const keyDetail = $('#Key-visual_menu');
    const clientDetail = $('#Client-brief_menu');

    function hideAll() {
        pages.hide();
        flierDetail.hide();
        packageDetail.hide();
        keyDetail.hide();
        clientDetail.hide();
    }

    function showPage(target) {
        hideAll();
        $(target).show();
    }

    // 初期表示（Flier）
    hideAll();            // ← 追加（重要）
    showPage('#Flier');

    // メニュー切り替え
    $('.menu_flier').click(function () {
        showPage('#Flier');
    });

    $('.menu_ps').click(function () {
        showPage('#Package');
    });

    $('.menu_key-visual').click(function () {
        showPage('#Key-visual');
    });

    $('.menu_client-brief').click(function () {
        hideAll();
        clientDetail.show();
    });

    // ★ Layoutメニュー追加（これが抜けていると永遠に出る）
    $('.menu_layout').click(function () {
        showPage('#Layout');
    });

    // Flier詳細
    $('#Flier li').click(function (e) {
        e.preventDefault();

        hideAll();
        flierDetail.show();

        const target = $(this).attr('class');
        flierDetail.find('section').hide();
        flierDetail.find('.' + target).show();
    });

    // Package詳細
    $('#Package li').click(function (e) {
        e.preventDefault();

        hideAll();
        packageDetail.show();

        const target = $(this).attr('class');
        packageDetail.find('section').hide();
        packageDetail.find('.' + target).show();
    });

    // KeyVisual詳細
    $('#Key-visual li').click(function (e) {
        e.preventDefault();

        hideAll();
        keyDetail.show();

        const target = $(this).attr('class');
        keyDetail.find('section').hide();
        keyDetail.find('.' + target).show();
    });

});