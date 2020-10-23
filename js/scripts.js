$(document).ready(function(){
  $("#languageForm").submit(function(event){
    const name = $("input#name").val();
    const color = $("input:radio[name=color]:checked").val();
    const activity = $("#activity").val()
    const animal = $("#animal").val()
    const food = $("#food").val()
    const weather = $("#weather").val()
    $("#content div").hide();

    if(name){
      if (color || activity || animal || food || weather){
        if (color === "blue" && activity ==="1") {
          $("#ruby").show();
          $(".user").text(name);
        }
        else if (color === "yellow" || food === "3") {
          $("#javaScript").show();
          $(".user").text(name);
        }
        else if (animal === "4") {
          $("#python").show();
          $(".user").text(name);
        }
        else {
          $("#swift").show();
          $(".user").text(name);
        }
      }
      else {
        alert("you must 1 answer at least one of the questions, please try again");
      }
    }
    else {
      if (color || activity || animal || food || weather){
        if (color === "blue" && activity ==="1") {
          $("#ruby").show();
          $(".user").text("User, you didn't enter a name so we will call you User");
        }
        else if (color === "yellow" || food === "3") {
          $("#javaScript").show();
          $(".user").text("User, you didn't enter a name so we will call you User");
        }
        else if (animal === "4") {
          $("#python").show();
          $(".user").text("User, you didn't enter a name so we will call you User");
        }
        else {
          $("#swift").show();
          $(".user").text("User, you didn't enter a name so we will call you User");
        }
      }
      else {
        alert("you must 2 answer at least one of the questions, please try again");
      }
    }
    event.preventDefault();
  })
})