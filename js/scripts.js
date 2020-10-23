$(document).ready(function(){
  $("#languageForm").submit(function(){
    const name = $("input#name").val();
    const color = $("input:radio[name=color]:checked").val();
    const activity = $("#activity").val()
    const animal = $("#animal").val()
    const food = $("#food").val()
    const weather = $("#weather").val()

    if (name || color || activity || animal || food || weather){
      if (color === "blue" && activity ==="1") {
        alert("this if statement is functional");
      }
      else if (color === "yellow" || food === "3") {
        alert("your color was yellow or your favorite food was French Fries");
      }
      else if (animal === "4") {
        alert("your color and your activity were not simultaneously blue & singing, your color was not yellow, your favorite food was not french fries, and your favorite animal was a gezelle");
      }
      else {
        alert("you didnt select any of my things i programmed");
      }
    }
    else {
      alert("you must answer at least one of the questions, please try again");
    }
  })
})