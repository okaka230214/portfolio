
// ハンバーガメニュー
const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');
const li = document.querySelector('.nav-items__item');

ham.addEventListener('click', function addActive() {

  ham.classList.toggle('active');
  nav.classList.toggle('active');

});

// メニューからリンクに飛んだらトグルをしまう
// スマートフォンの場合
$(document).on('click', '.nav-items__item', function(){
  ham.classList.toggle('active');
  nav.classList.toggle('active');

});

$(function showSetting(){
  $(window).resize(function() {
    var $hn =$('.header__nav');
    var width = $(window).width();
    if (width <= 1400){
      // console.log("スマホ用表示");
    } else{
      // console.log("PC表示");
    $hn.removeAttr('style');
    }
  });
});
