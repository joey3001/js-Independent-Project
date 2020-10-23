$(document).ready(function(){
  $("#languageForm").submit(function(){
    const name = $("input#name").val();
    const color = $("input:radio[name=color]:checked").val();
    const activity = $("#activity").val()
    const animal = $("#animal").val()
    const food = $("#food").val()
    const weather = $("#weather").val()
    alert(name);
    alert(color);
    alert(activity);
    alert(animal)
    alert(food)
    alert(weather)
  })
})