// ||||||||||||| Clases |||||||||||||

class Billete
{
  constructor(v, c, i)
  {
    this.valor = v;
    this.cantidad = c;
    this.imgUrl = i;
  }
}
// |||||||||||| Variables |||||||||||||

var caja = []; // array de los blletes que tengo
var dineroDisponible = document.getElementById("dineroDisponible")

// cargando la caja con blletes
caja.push( new Billete (500, 50, "billete500.jpg") );
caja.push( new Billete (100, 65, "billete100.jpg") );
caja.push( new Billete (50, 45, "billete50.jpg") );
caja.push( new Billete (10, 35, "billete10.jpg") );
caja.push( new Billete (5, 45, "billete5.jpg") );
caja.push( new Billete (1, 300, "billete1.jpg") );


var dinero = 0; // User Input

var resultDisplay = document.getElementById("resultado"); // tag del html donde se muestra el resultaado 

// ||||||||||| Funciones ||||||||||| 

function entregarDinero()
{
  var entrega = [];
  var div = 0;
  var papeles = 0;
  var getDinero = document.getElementById("dinero");
  dinero = parseInt(getDinero.value);
  
  resultDisplay.innerHTML = "";

  for(var b of caja)
  {
    if (dinero > 0)
    {
      div = Math.floor(dinero / b.valor);
      if (div > b.cantidad)
      {
        papeles = b.cantidad;
        b.cantidad = 0;
      }
      else
      {
        papeles = div;
        b.cantidad = b.cantidad - div
      }
      entrega.push( new Billete(b.valor, papeles, b.imgUrl) );
      dinero = dinero - (b.valor * papeles);
    }
  }

  if (dinero > 0)
  {
    resultDisplay.innerHTML = "Soy Pobre";
  } else 
  {
    for (var e of entrega)
    {
      if (e.cantidad > 0)
      {
        resultDisplay.innerHTML += e.cantidad + ": " + `<img src="` + e.imgUrl + `" width="130" height="70" style="box-shadow: 0px 0px 7px rgba(0,0,0,0.66);">` + "<br /> <br />";
      }
    }
  }
  showMoney();
}

function showMoney() 
{
  dineroDisponible.innerHTML = "";
  for (var b of caja) 
  {
    dineroDisponible.innerHTML += "Disponemos de " + b.cantidad + " billetes de " + b.valor + "<br />";
  }
}
// ||||||||||| DA CODE |||||||||||

// button that invokes entregarDinero() when clicked
document.getElementById("extraer").addEventListener("click", entregarDinero);
showMoney();
// |||||||||||  The End  |||||||||||