$(document).ready(function(){
  $("#languageForm").submit(function(event){
    const name = $("input#name").val();
    const color = $("input:radio[name=color]:checked").val();
    const activity = $("#activity").val()
    const animal = $("#animal").val()
    const food = $("#food").val()
    const weather = $("#weather").val()
    $("#content div").hide();
    $(".user").text(name);
    
    if (color || activity || animal || food || weather){
      if (color === "blue" && activity ==="1") {
        $("#ruby").show();
      }
      else if (color === "yellow" || food === "3") {
        $("#javaScript").show();
      }
      else if (animal === "4") {
        $("#python").show();
      }
      else {
        $("#swift").show();
      }
    }
    else {
      alert("you must answer at least one of the questions, please try again");
    }
    event.preventDefault();
  })
})