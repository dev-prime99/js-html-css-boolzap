
// funzione selezione chat contatto
$(".chat").click(function (){
  if ($(".chat").hasClass("active")){
    $(".chat").removeClass("active");
    $(this).addClass("active");
  }
});

// funzione accettazione notifiche
$(".notifications a").click(function (){
  $(".notifications").css("display", "none");
  $(".list-chat").css("height", "calc(100% - 100px)")
})

// funzione tasto enter function text
$(document).keydown(function (e){
  switch(e.which) {
    case 13: text(); //enter
    break;

    default: return;
  }
  e.preventDefault();
});

// funione stampa testo
function text(){
  var val = $("#myinput").val();
  if ( !$("#myinput").val() ) {
    alert("inserisci un testo");
  } else{
    document.getElementById('ii').innerHTML += "<div class='user'><div class='bs_graf_txt'><p>" + val + "<span>14:44</span></p></div></div>";
    $("#myinput").val("");
  }
}
