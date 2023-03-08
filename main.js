const iva= 0.21;
const tipoVehiculoAutomovil= 0.03;
const tipoVehiculoMotocicleta= 0.04;
const tipoVehiculoUtilitario= 0.05;
const gamaBaja= 0;
const gamaMedia= 0.05;
const gamaAlta= 0.1;
const cocheraNo= 0.05;
const tasaMasDiez= 0.1;
const tasaHastaDiez= 0.05;
const tasaCero= 0;

let total = 0;
let mensajeTipoVehiculo = "Indique el tipo de vehículo a cotizar \n" + "1) Automóvil \n" + "2) Motocicleta \n" + "3) Utilitario \n" + " \n" + "Elegí la opción correcta:"

cotizar();

function cotizar (){
    let tipoVehiculo = 0;
    while (tipoVehiculo !== "1" && tipoVehiculo !== "2" && tipoVehiculo !== "3" && tipoVehiculo !== null) {
        tipoVehiculo = prompt(mensajeTipoVehiculo);
    }
    
    if (tipoVehiculo == null){
        return;
    }
    
    let precioVehiculo= parseInt(prompt("Ingrese el precio del vehículo."));

    while (isNaN(precioVehiculo)) {
        precioVehiculo = parseInt(prompt("Ingrese el precio del vehículo."));
        if (isNaN(precioVehiculo)) {
        alert("Ingrese un número válido.");
        }
    }

    let anioFabricacion= parseInt(prompt("Indique el año de fabricación del vehículo."));

    do {
        anioFabricacion = parseInt(prompt("Indique el año de fabricación del vehículo."));
    } while (isNaN(anioFabricacion));
    
    let cochera= confirm("Indique si posee o no cochera.");
    
    switch(tipoVehiculo){
        case "1": 
            total = precioVehiculo * tipoVehiculoAutomovil;
            break;
    
        case "2": 
            total = precioVehiculo * tipoVehiculoMotocicleta;
            break;
    
        case "3":
            total = precioVehiculo * tipoVehiculoUtilitario;
            break; 
    
        default: 
            alert("No se ingresó un dato válido.");
    }
    if (precioVehiculo >= 10000000) {
        total += precioVehiculo * gamaAlta;
    } else if (precioVehiculo >= 5000000) {
        total += precioVehiculo * gamaMedia;
    } else {
        total += precioVehiculo * gamaBaja;
    }
    
    if (anioFabricacion <= 2013) {
        total += precioVehiculo * tasaMasDiez;
    } else if (anioFabricacion <= 2022) {
        total += precioVehiculo * tasaHastaDiez;
    } else {
        total += precioVehiculo * tasaCero;
    }
    if (!cochera) {
        total += precioVehiculo * cocheraNo;
    }
    if (total >= 0){
        total += total * iva;
    }
    alert("El total de tu seguro es $" + total + " anual.");
}

