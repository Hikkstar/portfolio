$(function(){
        // #で始まるリンクをクリックしたら実行
        $('a[href^="#"]').click(function() {
          // スクロールの速度
          var speed = 1000; // ミリ秒で記述
          var href= $(this).attr("href");
          var target = $(href == "#" || href == "" ? 'html' : href);
          var position = target.offset().top;
          $('body,html').animate({scrollTop:position}, speed, 'swing');
          return false;
        });
        // $('#scroll').click(function(){
        //   $(".nav-content").slideUp("slow");
        //   $("#nav-input").detach();
        //   $("nav-input").show();
        // });

      });
