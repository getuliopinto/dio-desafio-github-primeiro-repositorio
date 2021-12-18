$(function(){
    
  var seg = 0, min = 0, hora = 0;
  var ss, mm, hh; //vão armazenar em formato de string, os valores, com zero a esquerda
  var cronometro = null;

  function incrementaContador() {
      seg++;
      if(seg === 60) {
        min++;
        seg = 0;
      }
      if(min === 60) {
        hora++;
        min = 0;
      }
      ss = (seg<10)? "0" + seg : seg;
      mm = (min<10)? "0" + min : min;
      hh = (hora<10)? "0" + hora : hora


      $("#contador").text(hh + " : " + mm + " : " + ss);
  }

  $("#btn-iniciar").on('click', function(){
      if(cronometro === null) {
          cronometro = setInterval(incrementaContador, 1000);
          $("#btn-iniciar").text("Pausar");
      } else {
          clearInterval(cronometro);
          cronometro = null;
          $("#btn-iniciar").text("Retomar");
      }
      
  });

  $("#btn-zerar").on('click', function() { //executa quando clicado no botao de zerar
    clearInterval(cronometro); // limpa o intervalo de contagem
          cronometro = null; // define o cronometro como vazio
          seg = min = hora = 0; // define o contador como zero
          $("#contador").text('00 : 00 : 00'); //colca, via texto, o cronometro para zero
          $("#btn-iniciar").text("Iniciar"); //retorna o texto 'iniciar' para o botao
  });
  
});

