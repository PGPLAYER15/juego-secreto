//Crea un numero aleatorio y lo pone en una variable 
let NumeroSecreto = 0;
let INTENTOS = 0;
let listadenumeros = [];
let numeroMaximo = 10; 


console.log(NumeroSecreto);

// Función que asigna un texto a un elemento HTML identificado por su selector.
function AsignarTextoElemento(elemento, texto){
    let ElementoHTML= document.querySelector(elemento);
    ElementoHTML.innerHTML = texto;
    return;
}



function VerificarIntento (){

    let NumeroDeusuario = parseInt(document.getElementById("ValorUser").value);
   if (NumeroSecreto === NumeroDeusuario){
        AsignarTextoElemento('p',`Acertaste el numero ${INTENTOS} ${(INTENTOS == 1 ) ? `vez`: `Veces`}`);
        document.getElementById(`reiniciar`).removeAttribute('disabled')
   }else{  
        if (NumeroDeusuario > NumeroSecreto){
            AsignarTextoElemento('p','El numero secreto es menor');
        }else{
            AsignarTextoElemento('p','El numero secreto es mayor');
            
        }
   
        INTENTOS++;
        limpiarCaja();
    }    

    return;
}


// Función que genera un número aleatorio entre 1 y 10.

function NumeroRandom() {
    let numerogenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numerogenerado)
    console.log(listadenumeros)

    if (listadenumeros.length == numeroMaximo){
        AsignarTextoElemento('p','llegaste al maximo de numeros sorteados :D');
    }else {
     // si el numero que generamos esta ya esta en la lista 
        if (listadenumeros.includes(numerogenerado)){
            return NumeroRandom();
        } else {
            listadenumeros.push(numerogenerado);
            return numerogenerado;
        }
    }

}



function limpiarCaja(){
    let CajitaUSUARIO = document.querySelector(`#ValorUser`);
    CajitaUSUARIO.value = '';
}

function CondicionesIniciales(){

    AsignarTextoElemento('h1','El juego del numero secreto :D');
    AsignarTextoElemento('p','Dame un numero del 1 al 10');

    NumeroSecreto = NumeroRandom();
    INTENTOS = 1;

}

function ReiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar un numero aleatorio

    //Iniciar el numero de intentos
    CondicionesIniciales();
  //Desabilitar el boton de nuevo juego
  document.querySelector(`#reiniciar`).setAttribute('disabled','true')
    
}

CondicionesIniciales();