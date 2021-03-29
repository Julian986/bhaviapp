        var boton = document.getElementById("boton");
        var imagenesBhavi = document.getElementById("imagenesBhavi");
        var iconoMusica = document.getElementById("iconoMusica");
        var bhaviPoints = document.getElementById("bhaviPoints");
        var tema = document.getElementById("tema");
        var salir = document.getElementById("salir");
        var suma = document.getElementById("suma");
        var puntos = document.getElementById("puntos");
        var contenedorCorrecto = document.getElementById("contenedorCorrecto");
        var bhaviError = document.getElementById("bhaviError");
        var temaCorrecto = document.getElementById("temaCorrecto");
        var puntajeFinal = document.getElementById("puntajeFinal");
        var altoContenedor = document.getElementById("altoContenedor");
        var elFinal = document.getElementById("elFinal");
        var hiperContenedor = document.getElementById("hiperContenedor");


                  /* TEMAS */

                var piso = document.getElementById("piso");
                var damemas = document.getElementById("damemas");
                var dejameser = document.getElementById("dejameser");
                var mojaa = document.getElementById("mojaa");
                var sinconexion = document.getElementById("sinconexion");
                var visa = document.getElementById("visa");
                var basta = document.getElementById("basta");

        
        
            var estado = 'enpausa';
            var numeroDeTema = 1;
            var numeroPoints = 0;

           

            var cambio = function(){
                
                               /*  PISO   */

                             if(estado == 'enpausa'){

                        imagenesBhavi.className = "invisible";
                        iconoMusica.classList.remove("invisible");
                        boton.innerHTML = "Lo tengo!";
                        piso.play();
                        estado = 'enplay';
                        salir.classList.remove("invisible");
                        hiperContenedor.className = "invisible";
                        bhaviPoints.classList.remove("bhaviPointsPosicion");
                        
                }

                        else if(estado == 'enplay'){
                            piso.pause();
                            boton.innerHTML = "Comprobar";
                            tema.classList.remove("invisible");
                            boton.classList.remove("btn-lg");
                            estado = "nada";
                        }

                        else if(boton.innerHTML == 'Comprobar' && numeroDeTema == 1){
                               if(tema.value == "piso"){
                                  numeroPoints = 10;
                                   suma.classList.replace("invisible", "suma");
                                    puntos.classList.replace("invisible", "puntos");
                                 bhaviPoints.innerHTML = `Bhavi Points: ${numeroPoints}`;
                                 iconoMusica.className = "invisible";
                                 tema.classList.add("invisible");
                                 boton.innerHTML = "Siguiente";
                                 boton.classList.add("btn-lg");
                                 tema.value = "";
                                 numeroDeTema = 2;
                                 
                               }
                                 else{
                                             bhaviError.classList.replace("invisible", "bhaviError");
                                            contenedorCorrecto.classList.replace("invisible", "contenedorCorrecto"); 
                                            tema.classList.add("invisible");
                                            iconoMusica.className = "invisible";
                                            boton.innerHTML = "Siguiente";
                                            temaCorrecto.innerHTML = "Piso";
                                            numeroDeTema = 2;
                                            
                                 }
                              
                               
                        } 

                            /* DAME MAS */

                        else if (boton.innerHTML == "Siguiente" && numeroDeTema == 2){

                          
                          iconoMusica.classList.remove("invisible");
                          boton.innerHTML = "Lo tengo!";
                          damemas.play();
                          salir.classList.remove("invisible");
                          bhaviError.className = "invisible";
                          contenedorCorrecto.className = "invisible";
                          suma.className = "invisible";
                          puntos.className = "invisible";
                          boton.classList.add("btn-lg");

                          

                        }

                        else if (boton.innerHTML == "Lo tengo!" && numeroDeTema == 2){

                          damemas.pause();
                          boton.innerHTML = "Comprobar";
                          tema.classList.remove("invisible");
                          boton.classList.remove("btn-lg");
                              
                        }

                        else if(boton.innerHTML == 'Comprobar' && numeroDeTema == 2){

                          
                          if(tema.value == "dame mas" || tema.value == "damemas"){
                            numeroPoints = numeroPoints + 10;
                            suma.classList.replace("invisible", "suma");
                             puntos.classList.replace("invisible", "puntos");
                          bhaviPoints.innerHTML = `Bhavi Points: ${numeroPoints}`;
                          iconoMusica.className = "invisible";
                          tema.classList.add("invisible");
                          boton.innerHTML = "Siguiente";
                          boton.classList.add("btn-lg");
                          tema.value = "";
                          numeroDeTema = 3;
                          
                        }
                          
                          
                          
                          else{
                          bhaviError.classList.replace("invisible", "bhaviError");
                          contenedorCorrecto.classList.replace("invisible", "contenedorCorrecto"); 
                          tema.classList.add("invisible");
                          iconoMusica.className = "invisible";
                          boton.innerHTML = "Siguiente";
                          temaCorrecto.innerHTML = "Dame mas";
                          numeroDeTema = 3;
                          tema.value = "";

                        }
                      }
                        
                          /* DEJAME SER */
            
                        else if(boton.innerHTML == "Siguiente" && numeroDeTema == 3){
                          iconoMusica.classList.remove("invisible");
                          boton.innerHTML = "Lo tengo!";
                          dejameser.play();
                          salir.classList.remove("invisible");
                          bhaviError.className = "invisible";
                          contenedorCorrecto.className = "invisible";
                          suma.className = "invisible";
                          puntos.className = "invisible";
                          boton.classList.add("btn-lg");
                        }

                        else if (boton.innerHTML == "Lo tengo!" && numeroDeTema == 3){

                          dejameser.pause();
                          boton.innerHTML = "Comprobar";
                          tema.classList.remove("invisible");
                          boton.classList.remove("btn-lg");
                             
                        }

                        else if(boton.innerHTML == 'Comprobar' && numeroDeTema == 3){

                          
                          if(tema.value == "dejame ser" || tema.value == "dejameser"){
                            numeroPoints = numeroPoints + 10;
                            suma.classList.replace("invisible", "suma");
                             puntos.classList.replace("invisible", "puntos");
                          bhaviPoints.innerHTML = `Bhavi Points: ${numeroPoints}`;
                          iconoMusica.className = "invisible";
                          tema.classList.add("invisible");
                          boton.innerHTML = "Siguiente";
                          boton.classList.add("btn-lg");
                          tema.value = "";
                          numeroDeTema = 4;
                          
                        }
                          
                          
                          
                          else{
                          bhaviError.classList.replace("invisible", "bhaviError");
                          contenedorCorrecto.classList.replace("invisible", "contenedorCorrecto"); 
                          tema.classList.add("invisible");
                          iconoMusica.className = "invisible";
                          boton.innerHTML = "Siguiente";
                          temaCorrecto.innerHTML = "Dejame ser";
                          numeroDeTema = 4;
                          tema.value = "";

                        }
                      }


                         /*  MOJAA */

                         else if(boton.innerHTML == "Siguiente" && numeroDeTema == 4){
                          iconoMusica.classList.remove("invisible");
                          boton.innerHTML = "Lo tengo!";
                          mojaa.play();
                          salir.classList.remove("invisible");
                          bhaviError.className = "invisible";
                          contenedorCorrecto.className = "invisible";
                          suma.className = "invisible";
                          puntos.className = "invisible";
                          boton.classList.add("btn-lg");
                        }

                        else if (boton.innerHTML == "Lo tengo!" && numeroDeTema == 4){

                          mojaa.pause();
                          boton.innerHTML = "Comprobar";
                          tema.classList.remove("invisible");
                          boton.classList.remove("btn-lg");
                              
                        }

                        else if(boton.innerHTML == 'Comprobar' && numeroDeTema == 4){

                          
                          if(tema.value == "mojaa"){
                            numeroPoints = numeroPoints + 10;
                            suma.classList.replace("invisible", "suma");
                             puntos.classList.replace("invisible", "puntos");
                          bhaviPoints.innerHTML = `Bhavi Points: ${numeroPoints}`;
                          iconoMusica.className = "invisible";
                          tema.classList.add("invisible");
                          boton.innerHTML = "Siguiente";
                          boton.classList.add("btn-lg");
                          tema.value = "";
                          numeroDeTema = 5;
                          
                        }
                          
                          
                          
                          else{
                          bhaviError.classList.replace("invisible", "bhaviError");
                          contenedorCorrecto.classList.replace("invisible", "contenedorCorrecto"); 
                          tema.classList.add("invisible");
                          iconoMusica.className = "invisible";
                          boton.innerHTML = "Siguiente";
                          temaCorrecto.innerHTML = "Mojaa";
                          numeroDeTema = 5;
                          tema.value = "";

                        }
                      }

                      /* SIN CONEXION */

                      else if(boton.innerHTML == "Siguiente" && numeroDeTema == 5){
                        iconoMusica.classList.remove("invisible");
                        boton.innerHTML = "Lo tengo!";
                        sinconexion.play();
                        salir.classList.remove("invisible");
                        bhaviError.className = "invisible";
                        contenedorCorrecto.className = "invisible";
                        suma.className = "invisible";
                        puntos.className = "invisible";
                        boton.classList.add("btn-lg");
                      }

                      else if (boton.innerHTML == "Lo tengo!" && numeroDeTema == 5){

                        sinconexion.pause();
                        boton.innerHTML = "Comprobar";
                        tema.classList.remove("invisible");
                        boton.classList.remove("btn-lg");
                            
                      }

                      else if(boton.innerHTML == 'Comprobar' && numeroDeTema == 5){

                        
                        if(tema.value == "sin conexion"){
                          numeroPoints = numeroPoints + 10;
                          suma.classList.replace("invisible", "suma");
                           puntos.classList.replace("invisible", "puntos");
                        bhaviPoints.innerHTML = `Bhavi Points: ${numeroPoints}`;
                        iconoMusica.className = "invisible";
                        tema.classList.add("invisible");
                        boton.innerHTML = "Siguiente";
                        boton.classList.add("btn-lg");
                        tema.value = "";
                        numeroDeTema = 6;
                        
                      }
                        
                        
                        
                        else{
                        bhaviError.classList.replace("invisible", "bhaviError");
                        contenedorCorrecto.classList.replace("invisible", "contenedorCorrecto"); 
                        tema.classList.add("invisible");
                        iconoMusica.className = "invisible";
                        boton.innerHTML = "Siguiente";
                        temaCorrecto.innerHTML = "Sin conexion";
                        numeroDeTema = 6;
                        tema.value = "";

                      }
                    }

                        /* VISA */

                        else if(boton.innerHTML == "Siguiente" && numeroDeTema == 6){
                          iconoMusica.classList.remove("invisible");
                          boton.innerHTML = "Lo tengo!";
                          visa.play();
                          salir.classList.remove("invisible");
                          bhaviError.className = "invisible";
                          contenedorCorrecto.className = "invisible";
                          suma.className = "invisible";
                          puntos.className = "invisible";
                          boton.classList.add("btn-lg");
                        }
  
                        else if (boton.innerHTML == "Lo tengo!" && numeroDeTema == 6){
  
                          visa.pause();
                          boton.innerHTML = "Comprobar";
                          tema.classList.remove("invisible");
                          boton.classList.remove("btn-lg");
                              
                        }
  
                        else if(boton.innerHTML == 'Comprobar' && numeroDeTema == 6){
  
                          
                          if(tema.value == "visa"){
                            numeroPoints = numeroPoints + 10;
                            suma.classList.replace("invisible", "suma");
                             puntos.classList.replace("invisible", "puntos");
                          bhaviPoints.innerHTML = `Bhavi Points: ${numeroPoints}`;
                          iconoMusica.className = "invisible";
                          tema.classList.add("invisible");
                          boton.innerHTML = "Siguiente";
                          boton.classList.add("btn-lg");
                          tema.value = "";
                          numeroDeTema = 7;
                          
                        }
                          
                          
                          
                          else{
                          bhaviError.classList.replace("invisible", "bhaviError");
                          contenedorCorrecto.classList.replace("invisible", "contenedorCorrecto"); 
                          tema.classList.add("invisible");
                          iconoMusica.className = "invisible";
                          boton.innerHTML = "Siguiente";
                          temaCorrecto.innerHTML = "Visa";
                          numeroDeTema = 7;
                          tema.value = "";
  
                        }
                      }


                            /* BASTA */

                            else if(boton.innerHTML == "Siguiente" && numeroDeTema == 7){
                              iconoMusica.classList.remove("invisible");
                              boton.innerHTML = "Lo tengo!";
                              basta.play();
                              salir.classList.remove("invisible");
                              bhaviError.className = "invisible";
                              contenedorCorrecto.className = "invisible";
                              suma.className = "invisible";
                              puntos.className = "invisible";
                              boton.classList.add("btn-lg");
                            }
      
                            else if (boton.innerHTML == "Lo tengo!" && numeroDeTema == 7){
      
                              basta.pause();
                              boton.innerHTML = "Comprobar";
                              tema.classList.remove("invisible");
                              boton.classList.remove("btn-lg");
                                  
                            }
      
                            else if(boton.innerHTML == 'Comprobar' && numeroDeTema == 7){
      
                              
                              if(tema.value == "basta"){
                                numeroPoints = numeroPoints + 10;
                                suma.classList.replace("invisible", "suma");
                                 puntos.classList.replace("invisible", "puntos");
                              bhaviPoints.innerHTML = `Bhavi Points: ${numeroPoints}`;
                              iconoMusica.className = "invisible";
                              tema.classList.add("invisible");
                              boton.innerHTML = "Ver resultados";
                              boton.classList.add("btn-lg");
                              boton.classList.replace("btn-primary", "btn-success");
                              tema.value = "";
                              numeroDeTema = 8;
                              
                            }
                              
                              
                              
                              else{
                              bhaviError.classList.replace("invisible", "bhaviError");
                              boton.classList.replace("btn-primary", "btn-success");
                              contenedorCorrecto.classList.replace("invisible", "contenedorCorrecto"); 
                              tema.classList.add("invisible");
                              iconoMusica.className = "invisible";
                              boton.classList.add("btn-lg");
                              boton.innerHTML = "Ver resultados";
                              temaCorrecto.innerHTML = "Basta";
                              numeroDeTema = 8;
                              tema.value = "";
      
                            }
                          } 
            
                              /* FINAL */

                              else if(boton.innerHTML == "Ver resultados" && numeroDeTema == 8){

                                altoContenedor.className = "invisible";

                                elFinal.classList.replace("invisible", "imagenFinal");

                                puntajeFinal.innerHTML = `Bhavi Points: ${numeroPoints}`;


                              }


            
                    }

            boton.addEventListener("click", cambio);