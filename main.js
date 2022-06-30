

let datoIngresado = prompt('Por favor ingrese un numero de veces que se repetira un mensaje')

if (datoIngresado <= 10) {

    for (let i=1; i <= datoIngresado; i++) {
    
    alert('Este es el mensaje ' + i)

}
}
else{
    alert('solo se contar hasta 10 :(')
}


