function fadeAnime() {
	$('.fastview_secion').addClass('fastview_secion_fadeUpAnime') // 画面内に入ったらfadeUpというクラス名を追記
	$('.message_div').addClass('message_div_fadeUpAnime') // 画面内に入ったらfadeUpというクラス名を追記
}

// eachTextAnimeにappeartextというクラス名を付ける定義
function EachTextAnimeControl() {
	$('.message_div p').addClass('appeartext')
}

function header_area_fadeInAnime() {
	$('.header_area').addClass('header_area_fadeInAnime') // 画面内に入ったらfadeUpというクラス名を追記
}

function hanabira1_fadeInAnime() {
	$('.fastview_secion').addClass('hanabira1_fadeInAnime') // 画面内に入ったらfadeUpというクラス名を追記
}

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	fadeAnime() /* アニメーション用の関数を呼ぶ*/
	header_area_fadeInAnime()
	hanabira1_fadeInAnime()
	//spanタグを追加する
	var element = $('.message_div p')
	element.each(function () {
		var text = $(this).text()
		var textbox = ''
		text.split('').forEach(function (t, i) {
			if (t !== ' ') {
				var n = i / 12 + 2 //文字数　/　1文字あたりの表示速度を調整　/　delayの調整（2秒）
				textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>'
			} else {
				textbox += t
			}
		})
		$(this).html(textbox)
	})

	EachTextAnimeControl() /* アニメーション用の関数を呼ぶ*/
}) // ここまで画面が読み込まれたらすぐに動かしたい場合の記述

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	fadeAnime() /* アニメーション用の関数を呼ぶ*/
	header_area_fadeInAnime()
	hanabira1_fadeInAnime()
}) // ここまで画面をスクロールをしたら動かしたい場合の記述
