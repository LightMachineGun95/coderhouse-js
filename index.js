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