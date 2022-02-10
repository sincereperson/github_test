$(document).ready(function(){

    var $window = $(window),
        $parents = $('html, body'),
        $header = $('header'),
        $gnbLayer = $('.gnb_layer'),
        $btnTop = $('.btn_go_top');

    // gnb show
    $header.on('click', '.btn_gnb', function(){
        var windowH = $(window).innerHeight(),
            headerH = $header.outerHeight(true),
            footerH = $('footer').outerHeight(true),
            gnbHeight = windowH - headerH - footerH,
            contentH = headerH + gnbHeight + footerH;

        if(screen.width >= 769){
            $('.gnb_wrap').css('height', gnbHeight);
            $('.gnb_wrap .gnb > li').css('height', gnbHeight/4 + 'px');
        } else {
            $('.gnb_wrap').css({'height': '100%', 'overflow-y': 'auto', 'padding-bottom': headerH + 'px'});
            $('.gnb_wrap .gnb > li').css('height', 'auto');
        }

        $parents.css({'height': '100%', 'overflow': 'auto'});
        $gnbLayer.show();
    });

    // gnb hide
    $header.on('click', '.btn_close', function(){
        $parents.css({'height': 'auto', 'overflow': 'auto'});
        $gnbLayer.hide();
    });

    // 맨위로 올리기
	$btnTop.on("click", function(e) {
		e.preventDefault();

		$parents.stop().animate({"scrollTop": 0}, 700);
    });
    
    $window.on("scroll", function() {
        if($(this).scrollTop() > 200){
            $btnTop.css('opacity', '1');
        } else if($(this).scrollTop() < 200) {
            $btnTop.css('opacity', '0');
        }
    });
});