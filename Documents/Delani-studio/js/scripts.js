alert("What's good awesome people,welcome to Delani Studio.It all happens here!");
$(document).ready(function() {
  $(".toggle").click(function() {
    $("#shown-design").toggle();
    $("#hidden-design").toggle();
  });
});
$(document).ready(function() {
  $(".toggle1").click(function() {
    $("#shown-development").toggle();
    $("#hidden-development").toggle();
  });
});
$(document).ready(function() {
  $(".toggle2").click(function() {
    $("#shown-product").toggle();
    $("#hidden-product").toggle();
  });
});
 
$(document).ready(function() {
  $(".cruiser").mouseover(function() {
    $("#j1").show()
  })
  $(".cruiser").mouseleave(function(){
    $("#j1").hide()
  })
  $(".cruiser1").mouseover(function() {
    $("#j2").show()
  })
  $(".cruiser1").mouseleave(function(){
    $("#j2").hide()
  })
})
$(".cruiser2").mouseover(function() {
  $("#j3").show()
})
$(".cruiser2").mouseleave(function(){
  $("#j3").hide()
})
})