$(document).ready(function(){
  $("#languageForm").submit(function(){
    const name = $("input#name").val();
    alert(name);
  })
})