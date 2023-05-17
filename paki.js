var imagenes = [];
imagenes["cauchin"] = "vaca.png";
imagenes["pokacho"] = "pollo.png";
imagenes["tocinauro"] = "cerdo.png";

//var cauchin = new Pakiman("Cauchin","tierra","100","30");
//var pokacho = new Pakiman("pokacho","aire","80","50");
//var tocinauro = new Pakiman("tocinauro","tierra","140","40");

var coleccion =[];
coleccion.push(new Pakiman("Cauchin","tierra","100","30"));
coleccion.push(new Pakiman("pokacho","aire","80","50"));
coleccion.push(new Pakiman("tocinauro","tierra","140","40"));
console.log(coleccion);

for(var tania of coleccion)
{
    tania.mostrar();
}

for(var x in coleccion [0])
{
    console.log(x);
}

//pokacho.mostrar();
//cauchin.mostrar();
//tocinauro.mostrar();
