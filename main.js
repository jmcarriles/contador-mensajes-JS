

let datoIngresado = prompt('Por favor ingrese un numero de veces que se repetira el mensaje, solo se contar hasta 10!')

if (datoIngresado <= 10) {

    for (let i = 1; i <= datoIngresado; i++) {

        console.log('Este es el mensaje ' + i)

    }
}
else {
    console.log('solo se contar hasta 10 :(')
}

console.log('Muchas gracias!')
