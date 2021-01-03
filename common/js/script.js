$(function(){
  //언어선택
  $(".btnLang").click(function(e){
    e.preventDefault();
    $(".langList").slideToggle();
  });
  // gnb
  $("#gnb, .subMenuBg").mouseenter(function(){
    $(".subMenuBg").stop().slideDown();
  });
  $("#gnb, .subMenuBg").mouseleave(function(){
    $(".subMenuBg").stop().slideUp();
  });
  $("#gnb>li").hover(function(){
    $(".subMenuBg").stop().slideDown();
    $(this).addClass("over");
    $(this).stop().children(".dep2").fadeIn();
  },function(){
    $(this).removeClass("over");
    $(this).stop().children(".dep2").hide();
  });
  $(".dep2>li").hover(function(){
    $(this).stop().children(".dep3").fadeIn();
  },function(){
    $(this).stop().children(".dep3").fadeOut();
  });

  // 검색
  $("#gnbWrap .scr").click(function(){
    $("#gnbWrap .schArea").stop().slideToggle();
  });
  $("#gnbWrap .schArea .btnClose").click(function(){
      $(".schArea").slideUp();
  });

  // 패밀리사이트
  $(".btnFamily").click(function(e){
    e.preventDefault();
    $(".familyList").slideToggle();
  });
});
