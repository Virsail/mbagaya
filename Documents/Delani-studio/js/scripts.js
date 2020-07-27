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