$(function(){
  //윈도우 스크롤시 애니메이션
  $(window).scroll(function(){
    var winScrollT =$(window).scrollTop();
    var winH = $(window).height()/2;
    var mainScollT = winScrollT + winH;

    var quick = $(".quickLink").offset().top;
    var con1 = $(".mainCon1").offset().top;
    var con2 = $(".mainCon2").offset().top;
    var con3 = $(".mainCon3").offset().top;
    var con4 = $(".mainCon4").offset().top;
    var foot = $("#footer").offset().top;

    if(mainScollT >= quick && mainScollT <= con1){
      $(".quickLink h2").animate({"top":"0", "opacity":"1"},600,"swing");
      $(".quickLink p").delay(200).animate({"top":"0", "opacity":"1"},600,"swing");
      $(".quickLink ul").delay(400).animate({"top":"0", "opacity":"1"},600,"swing");
    }else if(mainScollT >= con1 && mainScollT <= con2){
      $(".mainCon1 h2").animate({"top":"0", "opacity":"1"},600,"swing");
      $(".mainCon1 p").delay(200).animate({"top":"0", "opacity":"1"},600,"swing");
      $(".mainCon1 ul").delay(400).animate({"top":"0", "opacity":"1"},600,"swing");
      $(".mainCon1 .btnMore").delay(600).animate({"top":"0", "opacity":"1"},600,"swing");
    }else if(mainScollT >= con2 && mainScollT <= con3){
      $(".mainCon2 h2").animate({"top":"0", "opacity":"1"},600,"swing");
      $(".mainCon2 p").delay(200).animate({"top":"0", "opacity":"1"},600,"swing");
      $(".mainCon2 ul").delay(400).animate({"top":"0", "opacity":"1"},600,"swing");
    }else if(mainScollT >= con3 && mainScollT <= con4){
      $(".mainCon3 h2").animate({"top":"0", "opacity":"1"},600,"swing");
      $(".mainCon3 p").delay(200).animate({"top":"0", "opacity":"1"},600,"swing");
      $(".mainCon3 ul").delay(400).animate({"top":"0", "opacity":"1"},600,"swing");
      $(".mainCon3 .btnMore").delay(600).animate({"top":"0", "opacity":"1"},600,"swing");
    }else if(mainScollT >= con4 && mainScollT <= foot){
      $(".mainCon4 h2").animate({"top":"0", "opacity":"1"},600,"swing");
      $(".mainCon4 .txt_s").delay(200).animate({"top":"0", "opacity":"1"},600,"swing");
      $(".mainCon4 .bx-wrapper").delay(400).animate({"top":"0", "opacity":"1"},600,"swing");
      $(".mainCon4 .btnMore").delay(600).animate({"top":"0", "opacity":"1"},600,"swing");
    }
  });
});
