let tipoVehiculo= prompt("Indique el tipo de vehículo a cotizar");

let precioVehiculo= prompt("Ingrese el precio del vehículo a cotizar");

let anioFabricacion= prompt("Indique el año de fabricación del vehículo a cotizar");

let cochera= prompt("Indique si posee o no cochera");

iva= (resp)

let ingresosBrutos= 0.05;

let tipoVehiculoPorcentajeAutomovil= 0.04;

let tipoVehiculoPorcentajeMotocicleta= 0.05;

let tipoVehiculoPorcentajeUtilitario= 0.03;

let precioVehiculoPorcentajeMenorCincoMillones= 0.05;

let precioVehiculoPorcentajeMayorDiezMillones= 0.02;

let precioVehiculoPorcentajeIntermedio= 0.01;

let anioFabricacionMenorDosMilTrece= 0.02;

let anioFabricacionDosMilVeintitres= 0;

let anioFabricacionIntermedio= 0.01;

let cocheraSi= 0;

let cocheraNo= 0.01;

let respuestaPorcentajeBaseAutomovil= precioVehiculo*tipoVehiculoPorcentajeAutomovil;

let respuestaPorcentajeBaseMotocicleta= precioVehiculo*tipoVehiculoPorcentajeMotocicleta;

let respuestaPorcentajeBaseUtilitario= precioVehiculo*tipoVehiculoPorcentajeUtilitario;

let respuestaPorcentajeAnioMenorDosMilTrece= precioVehiculo*0.02;

let respuestaPorcentajeAnioDosMilVeintitres= precioVehiculo*0;

let respuestaPorcentajeAnioIntermedio= precioVehiculo*0.01;

let respuestaPorcentajeCocheraSi= precioVehiculo*0;

let respuestaPorcentajeCocheraNo= precioVehiculo*0.01;

function Vehiculo (tipoVehiculo, precioVehiculo, anioFabricacion, cochera, iva, ingresosBrutos){
    this.tipoVehiculo= tipoVehiculo;
    this.precioVehiculo= precioVehiculo;
    this.anioFabricacion= anioFabricacion;
    this.cochera= cochera;
    this.iva= iva;
    this.ingresosBrutos= ingresosBrutos;
}

//creacion de 3 vehiculos: automovil(1), motocicleta(2), utilitario(3)//
const Vehiculo1 = new Vehiculo (tipoVehiculo, precioVehiculo, anioFabricacion, cochera, iva, ingresosBrutos);

const Vehiculo2= new Vehiculo (tipoVehiculo, precioVehiculo, anioFabricacion, cochera, iva, ingresosBrutos);

const Vehiculo3= new Vehiculo (tipoVehiculo, precioVehiculo, anioFabricacion, cochera, iva, ingresosBrutos);

//calcular % por tipo de vehiculo:seguro base//
//if: automovil, else if:motocicleta, else: utilitario//
if (tipoVehiculo === Vehiculo1){
    console.log("Respuesta % seguro base para autmovil ", precioVehiculo*tipoVehiculoPorcentajeAutomovil);
} else if (tipoVehiculo === Vehiculo2){
    console.log ("Respuesta % seguro base para motocicleta ", precioVehiculo*tipoVehiculoPorcentajeMotocicleta);
} else (tipoVehiculo === Vehiculo3){
    console.log("Respuesta % seguro base para utilitario ", precioVehiculo*tipoVehiculoPorcentajeUtilitario);
}

//calcular % por año de fabricacion//
if (tipoVehiculo === anioFabricacionMenorDosMilTrece){
    console.log("Respuesta % año <= 2013 ", precioVehiculo*0.02);
} else if (tipoVehiculo === anioFabricacionDosMilVeintitres){
    console.log("Respuesta % año = 2023 ", precioVehiculo*0);
} else (tipoVehiculo === anioFabricacionIntermedio){
    console.log("Respuesta % intermedio ",precioVehiculo*0.01);
}

//calcular % por cochera//
if (tipoVehiculo === cocheraSi){
    console.log("Respuesta % por cochera SI ", precioVehiculo*0);
} else (tipoVehiculo === cocheraNo){
    console.log("Respuesta % por cochera NO "precioVehiculo*0.01);
}

