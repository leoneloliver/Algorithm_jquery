$('#up').on('click', function(){
  var a = $(".ball").offset({ top: $(".ball").offset().top-10 });
  $(".ball").css({"top":a});
  win();
});
$('#down').on('click', function(){
  var a = $(".ball").offset({ top: $(".ball").offset().top+10 });
  $(".ball").css({"top":a});
  win();
});
$('#left').on('click', function(){
  var a = $(".ball").offset({ left: $(".ball").offset().left-10 });
  $(".ball").css({"top":a});
  win();
});
$('#right').on('click', function(){
  var a = $(".ball").offset({ left: $(".ball").offset().left+10 });
  $(".ball").css({"top":a});
  win();
});
$('.ball').on('click', function(){
  alert("Top position is: "+$(this).offset().top+" and Left position is: "+$(this).offset().left);
  reposition();
  win();
});
function win(){
  if($(".ball").offset().top==327 && $(".ball").offset().left == 327 ){
    alert("you win!");
    reposition();
  }
  if($(".ball").offset().top==27 && $(".ball").offset().left == 327 ){
    alert("you win!");
    reposition();
  }
}
function reposition(){
  $(".ball").css({"top":"46%","left":"46%"});
}
