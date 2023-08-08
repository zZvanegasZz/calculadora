function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        return "Error: No se puede dividir por cero.";
    }
}

function potenciar(base, exponente) {
    return Math.pow(base, exponente);
}

function concatenar(cadena1, cadena2) {
    return cadena1 + cadena2;
}

function calcular() {
    let opcion = prompt("Seleccione una operación:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Potenciar\n6. Concatenar");
    let resultado;

    switch (opcion) {
        case "1":
            let num1 = parseFloat(prompt("Ingrese el primer número:"));
            let num2 = parseFloat(prompt("Ingrese el segundo número:"));
            resultado = sumar(num1, num2);
            break;

        case "2":
            num1 = parseFloat(prompt("Ingrese el primer número:"));
            num2 = parseFloat(prompt("Ingrese el segundo número:"));
            resultado = restar(num1, num2);
            break;

        case "3":
            num1 = parseFloat(prompt("Ingrese el primer número:"));
            num2 = parseFloat(prompt("Ingrese el segundo número:"));
            resultado = multiplicar(num1, num2);
            break;

        case "4":
            num1 = parseFloat(prompt("Ingrese el dividendo:"));
            num2 = parseFloat(prompt("Ingrese el divisor:"));
            resultado = dividir(num1, num2);
            break;

        case "5":
            let base = parseFloat(prompt("Ingrese la base:"));
            let exponente = parseFloat(prompt("Ingrese el exponente:"));
            resultado = potenciar(base, exponente);
            break;

        case "6":
            let cadena1 = prompt("Ingrese la primera cadena:");
            let cadena2 = prompt("Ingrese la segunda cadena:");
            resultado = concatenar(cadena1, cadena2);
            break;

        default:
            resultado = "Opción inválida. Intente nuevamente.";
    }

    alert("El resultado es: " + resultado);
}

calcular();
