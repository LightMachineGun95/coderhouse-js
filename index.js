/* PRIMERA ENTREGA
alert("Bienvenido a CODERHOUSE e-Commerce");
alert("Haciendo una compra de igual o mayor a $30000 recibis un 10%")
alert("Seleccione los productos que desea adquirir introduciendo el respectivo numero");
alert("Para terminar con la compra digite 0");

let numeroProducto = Number(prompt(" 1-Curso Fullstack $25000 \n 2-Html y Css $10000 \n 3-Java $15000 \n 4-Javascript y React $20000"));
let totalCompra = 0;
let totalDescuento = 0;
let descuento = 0.10;

while (numeroProducto != 0) {
    switch (numeroProducto) {
        case 1:
            alert("El producto seleccionado es Curso Fullstack");
            totalCompra = totalCompra + 25000;
            break;
        case 2:
            alert("El producto seleccionado es Html y Css");
            totalCompra = totalCompra + 10000;
            break;
        case 3:
            alert("El producto seleccionado es Java");
            totalCompra = totalCompra + 15000;
            break;
        case 4:
            alert("El producto seleccionado es Javascript y React");
            totalCompra = totalCompra + 20000;
            break;
        default:
            alert("Producto invalido")
            break;
    }
    numeroProducto = Number(prompt(" 1-Curso Fullstack $25000 \n 2-Html y Css $10000 \n 3-Java $15000 \n 4-Javascript y React $20000"));
};
alert("El total a abonar es: $" + totalCompra);
if(totalCompra > 30000){
    alert("Recibe un descuento de 10%!")
    totalDescuento = totalCompra * descuento;
    totalCompra = totalCompra - totalDescuento;
    alert("Valor a pagar con descuento: $" + totalCompra);
    alert("Gracias por su compra!")
} else {
    alert("Gracias por su compra!")
};
*/

// SEGUNDA ENTREGA
alert("Bienvenido a CODERHOUSE e-Commerce");
alert("Haciendo una compra de igual o mayor a $40000 recibis un 10%")
alert("Seleccione los productos que desea adquirir introduciendo el respectivo ID");
alert("Para terminar con la compra digite 0");

function curso(id, nombre, costo, duracion) {
    this.id = id;
    this.nombre = nombre;
    this.costo = costo;
    this.duracion = duracion;
}

let totalCompra = 0;
let totalDescuento = 0;
let cursoSeleccionado = 0
const descuento = 0.10;

const cursos = [];

cursos.push(new curso(1, "Java", 16000, 5));
cursos.push(new curso(2, "Javascript", 18000, 6));
cursos.push(new curso(3, "React", 17000, 4));
cursos.push(new curso(4, "Angular", 14000, 3));
cursos.push(new curso(5, "Html y Css", 12000, 2));

for (const curso of cursos){
    alert("ID: " + curso.id + " \nNombre: " + curso.nombre  + " \nCosto: $" + curso.costo  + " \nDuracion(Meses): " + curso.duracion)
 }

cursoSeleccionado = Number(prompt("Seleccione producto por su ID:"));

while (cursoSeleccionado != 0) {
    switch (cursoSeleccionado) {
        case 1:
            alert("El producto seleccionado es Java");
            totalCompra = totalCompra + 16000;
            break;
        case 2:
            alert("El producto seleccionado es Javascript");
            totalCompra = totalCompra + 18000;
            break;
        case 3:
            alert("El producto seleccionado es React");
            totalCompra = totalCompra + 17000;
            break;
        case 4:
            alert("El producto seleccionado es Angular");
            totalCompra = totalCompra + 14000;
            break;
        case 5:
            alert("El producto seleccionado es Html y Css");
            totalCompra = totalCompra + 14000;
            break;
        default:
            alert("Producto invalido")
            break;
    }
    cursoSeleccionado = Number(prompt("Seleccione otro producto por su ID o presione 0 para terminar la compra:"));
}
if(totalCompra > 40000){
    alert("Recibe un descuento de 10%!")
    totalDescuento = totalCompra * descuento;
    totalCompra = totalCompra - totalDescuento;
    alert("Valor a pagar con descuento: $" + totalCompra);
    alert("Gracias por su compra!")
    } else if(totalCompra == 0) {
        alert("Usted no a comprado ningun articulo")
    } else {
    alert("Total de compra es: $" +totalCompra)
    alert("Gracias por su compra!")
};