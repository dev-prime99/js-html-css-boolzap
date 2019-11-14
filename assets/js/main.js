
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

  var chatactive = $(".contact-mex.active").attr("data-ref");
  var messaggio = $("#myinput").val();
  var risposta = "Ok";

  var elmentmsg = $("#template_user .user").clone();
  var messcontact = $("#template_contact .cont").clone();

  var dt = new Date();
  var time = dt.getHours() + ":" + dt.getMinutes();

  elmentmsg.find(".outtext").text(messaggio);
  elmentmsg.find(".outtime").text(time);
  messcontact.find(".outtext").text(risposta);
  messcontact.find(".outtime").text(time);

if ( !$("#myinput").val() ) {
  alert("inserisci un testo");
  } else{
  $(".contact-mex[data-ref=" + chatactive + "]").append(elmentmsg);
  setTimeout(function () {
    $(".contact-mex[data-ref=" + chatactive + "]").append(messcontact)
  }, 1000);

  $("#myinput").val("");
  }
}

// funzione ricerca contatti
$("#search_contact").keyup(function(){

  var text = $("#search_contact").val().toLowerCase();

  var list_contact = $(".contact-cred h4:first-child");

  list_contact.each(function() {

    var element = $(this);

    var name = element.text().toLowerCase();

    var parent = element.parents(".chat");

    if (name.includes(text)) {
      parent.show();
    } else{
      parent.hide();
    }
  });
});


// funzione cambio chat
$(".chat").click(function () {
   var click = $(this).attr("data-ref");
   var foto = $(".chat[data-ref=" + click + "] img").attr("src");
   var nome = $(".chat[data-ref=" + click + "] .nomecont").clone();
   console.log(foto);

   $(".chat").removeClass("active");
   $(".contact-mex").removeClass("active");
   $(this).addClass("active");
   $(".contact-mex[data-ref=" + click + "]").addClass("active");
})
