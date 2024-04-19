function playSonidoTecla (idElementoAudio) {
    document.querySelector(idElementoAudio).play(); //El .play es una propiedad que permite reproducir el sonido dentro del elemento.
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) { //Iniciando ciclo para recorrer la lista de todas las teclas

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];//La propiedad classList[] trae una lista de las clases que están vinculadas con el elemento utilizado previemente al .
    //console.log(instrumento);
    const idAudio = `#sonido_${instrumento}`;//Se concatena un texto dinamico para construir adecuadamente el ID para la interacción con los botones
    console.log(idAudio);
    tecla.onclick = function(){ //Se declara una función anonima para almacenar el valor dado a un atributo dentro de una variable o constante y el onclick captura el evento para el oprimir el click con el mouse
        playSonidoTecla(idAudio);
    };

    tecla.onkeydown = function(evento){//Se captura el evento de presión en la tecla para la funcionalidad del codigo con el .onkeydown
        //Con la variable 'evento' se captura toda la información que se optiene en la función tras usar el evento onkeydown
        if(evento.code === 'Space' || evento.code === 'Enter'){ //Se establece una condición para que el codigo solo funcione baje ciertos parametros
            tecla.classList.add('activa');//Se usa el add. para añadir al codigo el evento 'activa? que permite que se ejecute el onkeydown
        };
    };

    tecla.onkeyup = function(){//Se captura el evento de se suelta la tecla para la funcionalidad del codigo con el .onkeyup
        tecla.classList.remove('activa');//Se usa el remove. para quitar al codigo el evento 'activa' que permite que se ejecute el onkeydown
    };
}
