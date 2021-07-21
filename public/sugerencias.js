
alert("este sitio web esta en construccion")
/////
/////var sugerencia;
/////sugerencia = prompt('Puedes darnos sugerencias para mejorar😀  \nSolo usa Psugurencia (sugerencia) \no puedes ponerla aqui:'  );

/////if(sugerencia){

/////alert('Tu sugerencia: ' + sugerencia);

//////////}else{
///// alert('Sin sugerencia :(');
/////}


 var suma = function(numero1, numero2, numero3, numero4, numero5){
var n1 = document.getElementById("numero1").value;
var n2 = document.getElementById("numero2").value;
var n3 = document.getElementById("numero3").value;
var n4 = document.getElementById("numero4").value;
var n5 = document.getElementById("numero5").value;


if(!n1){
n1 = 0
};

if(!n2){
n2 = 0
};

if(!n3){
n3 = 0
};

if(!n4){
n4 = 0
};

if(!n5){
n5 = 0
};

var result = n1 + n2 + n3 + n4 + n5;
return result;
 };



