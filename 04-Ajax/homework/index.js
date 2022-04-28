

var amigos=document.getElementById("boton");
amigos.addEventListener("click",verAmigos, false);

function verAmigos() {
    // Tu código acá:
 
        $.ajax({
            url: 'http://localhost:5000/amigos',
            type: 'GET',
            success: function(respuesta) {
                console.log(respuesta);
                var lista=document.getElementById("lista");
                    lista.innerHTML="";
                    respuesta.forEach(element => {lista.appendChild(document.createElement("li")).append(element.name);
    
                });
            },
            error: function() {
                console.error("No es posible completar la operación");
            }
        });


  }
  

  $('#search').click(function(){ 

    let queBuscar=$('#input')[0].value;
    console.log(queBuscar);
      
   $.get(`http://localhost:5000/amigos/${queBuscar}`,function(data){
    $('#amigo').html(data.name);
    console.log(data);
    });
    
   }); 

   $('#delete').click(function(){ 
    let queBorrar=$('#inputDelete')[0].value;
    console.log(queBorrar);

    $.ajax({
        url: `http://localhost:5000/amigos/${queBorrar}`,
        type: 'DELETE',
        success: function(result) {
            // Do something with the result
            console.log(result);
            $('#sucess').html("Tu amigo borrado fue borrado con exito");
        },
        error: function() {
            $('#sucess').html("No es posible completar la operación");
        }
    });

  
  
   }); 

