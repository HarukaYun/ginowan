

$(document).ready(function(){
AOS.init({
    duration: 500,
    easing: 'ease',

  });


  $(function(){
    // ハンバーガーメニュー開閉とリンククリック時のナビゲーション制御

    // JavaScriptで#navが.activeの時に#nav_fix_iconを非表示にする
    function updateNavFixIconVisibility() {
        var nav = document.getElementById("nav_sp");
        var navFixIcon = document.getElementById("nav_fix_icon_sp");
        
        if (nav && navFixIcon && nav.classList.contains("active")) {
            navFixIcon.style.display = "none";
        }
        else {
          navFixIcon.style.display = "block"; // .active クラスがない場合、表示する
      }
        
    }

    // ハンバーガーメニューをクリックしたとき
    $("#hamb_sp").on("click", function() {
        $("#hamb_sp span").toggleClass("active");
        $("#nav_sp").toggleClass("active");

                // メニューのテキストを切り替え
                if ($("#nav_sp").hasClass("active")) {
                  $("#menu_text").text("閉じる");
              } else {
                  $("#menu_text").text("メニュー");
              }

        updateNavFixIconVisibility(); // メニュー状態が変わったら非表示を更新
    });

    // リンクをクリックしたとき
    $('a[href*="#"]').on('click', function() {  
        $('#nav_sp').removeClass('active');
        $("#hamb_sp span").removeClass("active");
        $("#menu_text").text("メニュー"); // メニューを閉じたらテキストを戻す
        updateNavFixIconVisibility(); // メニュー状態が変わったら非表示を更新
    });

    // 初期状態で非表示に
    updateNavFixIconVisibility();
});



//itemページの商品スライド
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  arrows: false,
  // centerMode: true,
  focusOnSelect: true
});



    // アコーディオンをクリックした時の動作
    $('.title, .ibox').on('click', function() {
      var parent = $(this).closest('.faq_box'); // 親要素を取得
      var findElm = parent.find(".box"); // 親要素内の .box を取得
      var titleElm = parent.find('.title'); // 親要素内の .title を取得
      var ibox = parent.find('.ibox'); // 親要素内の .ibox を取得

      // すべてのアコーディオンを閉じる
      $('.box').not(findElm).slideUp(500);
      $('.title').not(titleElm).removeClass('close'); // 他のすべてのタイトルからクラス名 close を除去
      $('.ibox').removeClass('minus'); // すべての .ibox から minus クラスを削除
      // 現在のアコーディオンを開く/閉じる
      if (titleElm.hasClass('close')) {
          titleElm.removeClass('close'); // クラス名を除去
          findElm.slideUp(500); // アコーディオンを閉じる
          findElm.siblings('.ibox').removeClass('minus'); // .ibox の兄弟要素の .minus を追加

      } else {
          titleElm.addClass('close'); // クリックしたタイトルにクラス名 close を付与
          findElm.slideDown(500); // アコーディオンを開く
          findElm.siblings('.ibox').addClass('minus'); // .ibox の兄弟要素の .minus を削除
      }
    });
    
});
