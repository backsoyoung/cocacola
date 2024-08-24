
// mousewheell
var pno = 0;
const totcnt = 8;
var prot = 0;

// brand
var acall;


$(function () {

    $(document).on('mousewheel DOMMouseScroll', function (e) {
        if (prot == 1) return false;
        prot = 1;

        var evt = window.event || e;

        var delta = evt.detail ? evt.detail : evt.wheelDelta;

        if (/Firefox/i.test(navigator.userAgent)) {
            delta = -evt.detail;
            console.log('파이어폭스 detail: ' + delta);
        }

        if (delta > 0) {
            pno--;
            if (pno === -1) pno = 0;
        } else {
            pno++;
            if (pno === totcnt) pno = totcnt - 1;
        }

        console.log('현재 페이지번호: ' + pno);

        var pagepos = $('.page').eq(pno).offset().top;
        console.log('페이지 이동거리: ' + pagepos);

        //페이지 이동 애니메이션
        $('html,body').animate({
            scrollTop: pagepos + 'px'
        }, 800, function () {

            initSet();
            pageAction();


            prot = 0;
        });

        chgMenu();
    }); //mousewheel 이벤트

    // 블릿
    $('#bnavi a').on('click', function (e) {
        e.preventDefault();

        var idx = $(this).parent().index();
        console.log(idx);

        pno = idx;
        console.log('변경된 pno번호: ' + pno);

        var pid = $(this).attr('href');
        console.log('클릭된 a의 href값: ' + pid);

        var pagepos = $(pid).offset().top;

        $('html,body').animate({
            scrollTop: pagepos
        }, 800, function () {
            initSet();
            pageAction();
        });

        chgMenu();
    });

    initSet();
    pageAction();


    //menu
    $('.leftmenu>li').mouseenter(function () {
        $(this).find('.sub').slideDown();
    });
    $('.leftmenu>li').mouseleave(function () {
        $(this).find('.sub').stop().slideUp();
    });

    $('.rightmenu>li').mouseenter(function () {
        $(this).find('.sub').slideDown();
    });
    $('.rightmenu>li').mouseleave(function () {
        $(this).find('.sub').stop().slideUp();
    });



    // swiper 
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination'
        },
        effect: 'slide',
        loop : true,
        speed: 800 
    });

    new Swiper('.swiper-container', {
        navigation : {
            nextEl : '.swiper-button-next', 
            prevEl : '.swiper-button-prev',
        },
    });



    //section.brand
    $('.logos').mouseover(function () {
        clearInterval(acall);
    }).mouseout(function () {
        acall = setInterval(flowImg, 20);
    });

});



/* -----------함수 */

// 블릿함수
function chgMenu() {
    $('#bnavi li').eq(pno).addClass('selB').siblings().removeClass('selB');
}

// brand 함수
var fnum = 0;

function flowImg() {

    fnum++;
    console.log(fnum);

    //var fw = $('.logos li').first().width();
    var fw = $('.logos li').first().outerWidth(true);

    if (fnum > fw) {
        $('.logos').append($('.logos li').first()).css({
            left: 0
        });

        fnum = 0;

    } else {
        $('.logos').css({
            left: -fnum + 'px'
        });
    }
}



// 초기설정
function initSet() {
    //new
    $('#new .n-chapter1 p:first').css({
        transform: 'translateX(-50%)'
    });
    $('#new .n-chapter1 p:last').css({
        transform: 'translateX(50%)'
    });

    $('#new .n-chapter2').hide();
    $('#new .n-caption h3').hide();
    $('#new .n-caption p').hide();

    $('#new .n-bg').css({
        transform: 'translateX(100%)'
    });
    $('#new .n-product').css({
        transform: 'scale(0)'
    });


    //limited
    $('#limited .l-chapter1 p:first').css({
        transform: 'translateX(-50%)'
    });
    $('#limited .l-chapter1 p:last').css({
        transform: 'translateX(50%)'
    });

    $('#limited .l-chapter2').hide();
    $('#limited .l-caption h3').hide();
    $('#limited .l-caption p').hide();

    $('#limited .l-bg').css({
        transform: 'translateX(-100%)'
    });
    $('#limited .l-product').css({
        transform: 'scale(0)'
    });

    //event
    $('#event .s-cocacola').hide();
    $('#event .m-cocacola').hide();
    $('#event .powerade').hide();


    //promotion
    $('#promotion .pm').css({
        top: '200px'
    });
}

// 등장액션 
function pageAction() {
    if (pno === 1) {
        //new
        $('#new .n-chapter1 p:first').css({
            transform: 'translateX(-15%)',
            transition: 'all 1s ease-out'
        });
        $('#new .n-chapter1 p:last').css({
            transform: 'translateX(15%)',
            transition: 'all 1s ease-out'
        });

        setTimeout(function () {
            $('#new .n-chapter1').css({
                opacity: 0,
                transition: 'opacity 1s ease-out'
            });
            setTimeout(function () {
                $('#new .n-chapter1').css('display', 'none');
            }, 800);

            setTimeout(function () {
                $('#new .n-chapter2').fadeIn();
            }, 800);
        }, 1500);

        setTimeout(function () {
            $('#new .n-caption h3').fadeIn(600);
            setTimeout(function () {
                $('#new .n-caption p').fadeIn();
            }, 800);
        }, 2000);

        setTimeout(function () {
            $('#new .n-bg').css({
                transform: 'translateX(5%)',
                transition: 'all 0.5s ease-out'
            });
            setTimeout(function () {
                $('#new .n-product').css({
                    transform: 'scale(1)',
                    transition: 'all 1s ease-out'
                });
            });
        }, 3000);

    } else if (pno === 2) {
        //limited
        $('#limited .l-chapter1 p:first').css({
            transform: 'translateX(-15%)',
            transition: 'all 1s ease-out'
        });
        $('#limited .l-chapter1 p:last').css({
            transform: 'translateX(15%)',
            transition: 'all 1s ease-out'
        });

        setTimeout(function () {
            $('#limited .l-chapter1').css({
                opacity: 0,
                transition: 'opacity 1s ease-out'
            });
            setTimeout(function () {
                $('#limited .l-chapter1').css('display', 'none');
            }, 800);

            setTimeout(function () {
                $('#limited .l-chapter2').fadeIn();
            }, 800);
        }, 1500);

        setTimeout(function () {
            $('#limited .l-caption h3').fadeIn(600);
            setTimeout(function () {
                $('#limited .l-caption p').fadeIn();
            }, 800);
        }, 2000);

        setTimeout(function () {
            $('#limited .l-bg').css({
                transform: 'translateX(-5%)',
                transition: 'all 0.5s ease-out'
            });
            setTimeout(function () {
                $('#limited .l-product').css({
                    transform: 'scale(1)',
                    transition: 'all 1s ease-out'
                });
            });
        }, 3000);


    } else if (pno === 4) {
        //event
        $('#event .s-cocacola').fadeIn(800);
        $('#event .m-cocacola').fadeIn(1500);
        $('#event .powerade').fadeIn(2000);

    } else if (pno === 5) {
        //section.promotion
        $('#promotion .pm1').animate({
            marginTop: '-150px'
        }, 1000, 'easeOutBack');
        $('#promotion .pm2').animate({
            marginTop: '-150px'
        }, 2000, 'easeOutBack');
        $('#promotion .pm3').animate({
            marginTop: '-150px'
        }, 3000, 'easeOutBack');

    } else if (pno === 6) {
        //brand
        acall = setInterval(flowImg, 20);
    }
}