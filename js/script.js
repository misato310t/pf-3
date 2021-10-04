$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200){
                $(function(){
                    $('.fadein').each(function(i){
                        $(this).delay(i * 500).queue(function(){
                            $(this).addClass('active');
                        });
                    });
                });
            }
        });
    });
});

jQuery(".drawer-icon").on("click", function(e) {
    e.preventDefault();

    jQuery('.drawer-icon').toggleClass('is-click')
    jQuery('.drawer-content').toggleClass('is-click')
    jQuery('.drawer-background').toggleClass('is-click')

    return false;
  });

  jQuery(window).on("scroll", function() {
    // トップから1000px以上スクロールしたら
    if (1000 < jQuery(this).scrollTop()) {
    // is-showクラスをつける
    jQuery('.totop').addClass( 'is-show' );
    } else {
    // 1000pxを下回ったらis-showクラスを削除
    jQuery('.totop').removeClass( 'is-show' );
    }
    });
    
    jQuery('.totop').click(function(){
    // ページの先頭へ移動する
    jQuery('html,body').animate({scrollTop:0}, 'fast');
    });