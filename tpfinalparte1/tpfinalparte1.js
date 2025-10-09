  let ElCohete=[];
let estado= 'PantallaInicio';

function preload(){
  for (let i=0; i<19; i++) {
    ElCohete[i]=loadImage('data/elcohete'+i+'.jpg');
  }
}
function setup() {
createCanvas(640,480);
}


function draw() {
 background(0);
 
 if  (estado === 'PantallaInicio'){
 background(255);
   image(ElCohete[0],0,0);
   texto
   boton
 }
 if (estado === "Final01"){
    background(255);
 image(ElCohete[1],0,0);
 }
 if (estado === 'Eleccion1'){ //va a FinFin0 sino sigue a Final03
 background(255);
 image(ElCohete[2],0,0);
 }
 if (estado === 'Final03'){
  background(255);
  image(ElCohete[3],0,0);
 }
 if (estado === 'Eleccion2'){ // va a Fin0 o sigue en Final05
  background(255);
  image(ElCohete[4],0,0);
 }
 if (estado === 'Final05'){
 background(255);
 image (ElCohete[5],0,0);
 }
 if(estado === 'Final06'){
 background(255);
 image (ElCohete[6],0,0);
 }
 if (estado === 'Final07'){
 background(255);
 image(ElCohete[7],0,0);
 }
 if (estado === 'Eleccion3'){ // va a FinalFinal0 sino sigue en Final09
 background(255);
 image(ElCohete[8],0,0);
 }
 if (estado === 'Final09'){
  background(255);
  image(ElCohete[9],0,0);
}
if (estado === 'Final10'){
 background(255);
 image(ElCohete[10],0,0);
 
}
if (estado === 'Final11'){
 background(255);
 image(ElCohete[11],0,0);
}
if (estado === 'Fin0'){
 background(255);
  image(ElCohete[12],0,0);
}
if (estado === 'Fin1'){
background(255);
image(ElCohete[13],0,0);
}
if (estado === 'FinFin0'){
background(255);
image(ElCohete[14],0,0);
}
if (estado === 'FinFin1'){
background(255);
image(ElCohete[15],0,0);
}
if (estado === 'FinalFinal0'){
background(255);
image(ElCohete[16],0,0);

}
if (estado === 'FinalFinal1'){
background(255);
image(ElCohete[17],0,0);
}
if (estado === 'Portada'){
background(255);
image(ElCohete[18],0,0);
}
function Botoncito(){


}

}
function mousePressed(){
  estado =('Portada'); //puesto a modo de pueba para probar las imagenes estado por estado al hacer click. 

}
