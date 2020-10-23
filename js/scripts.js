$(document).ready(function(){
  $("#languageForm").submit(function(event){
    const name = $("input#name").val();
    const color = $("input:radio[name=color]:checked").val();
    const activity = $("#activity").val()
    const animal = $("#animal").val()
    const food = $("#food").val()
    const weather = $("#weather").val()
    $("#content div").hide();

    //If you do not enter a name, the program will call you user in the generated response.
    //If you do enter a name, the program will call you by your entered name in the generated response. 
    //In either case, if you do not answer at least one of the questions, the program will give you an alert asking you to go back and answer one. 
    if(name){
      if (color || activity || animal || food || weather){
        $(".user").text(name);
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
    }
    else {
      if (color || activity || animal || food || weather){
        $(".user").text("User, you didn't enter a name so we will call you User");
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
    }
    event.preventDefault();
  })
})