$(document).ready(function(){
  $("#languageForm").submit(function(){
    const name = $("input#name").val();
    const color = $("input:radio[name=color]:checked").val();
    const activity = $("#activity").val()
    alert(name);
    alert(color);
    alert(activity);
  })
})