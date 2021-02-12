const regexFechaUTC = /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\\.[0-9]+)?$/g

export function ValidarFecha(i, f) {
    const isValid = regexFechaUTC.test(i, f)

    if(isValid === true) {
        const fechaInicialValidado = i.slice(0,10)
        const fechaFinalValidado = f.slice(0,10)
        const tiempoInicialValidado = i.slice(11)
        const tiempoFinalValidado = f.slice(11)

        return  fechaInicialValidado, fechaFinalValidado, tiempoInicialValidado, tiempoFinalValidado

    } else {
        console.log('Fecha invalida ' + i + f);
    }    
}
