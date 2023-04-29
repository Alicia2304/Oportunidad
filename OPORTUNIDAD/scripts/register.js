let Alumnos=[];
//crear constructor
// Estudiante nombre, correo, genero, campus, calificacion A, calificacion B, calificacion C
let contador=0;
function alumnos(Nombre, Correo, Genero, Campus, A, B, C){
    this.nombre= Nombre;
    this.correo= Correo;
    this.genero= Genero;
    this.campus= Campus;
    this.califA= A;
    this.califB= B;
    this.califC= C;
    this.id=contador++;
}
//crear funcion registrar
function registrar(){
    console.log("registrando alumno");
    //obtener los valores de los inputs document.getElementByid()
    let inputNombre=document.getElementById("txtNombre").value;
    let inputCorreo=document.getElementById("txtCorreo").value;
    let inputGenero=document.getElementById("selGenero").value;
    let inputCampus=document.getElementById("selCampus").value;
    let inputcalifA=document.getElementById("califA").value;
    let inputcalifB=document.getElementById("califB").value;
    let inputcalifC=document.getElementById("califC").value;

    //crear nuevo alumno
    let nuevoAlumno= new alumnos (inputNombre, inputCorreo,inputGenero,inputCampus, inputcalifA, inputcalifB, inputcalifC);
    //agregar alumno al arreglo
    Alumnos.push (nuevoAlumno);
    imprimirAlumnos();
    limpiar();
}
function imprimirAlumnos(){
    let row="";
    for(let i=0; i<Alumnos.length; i++){
        let alumno= Alumnos[i];
        //let suma=estudiante.califA+estudiante.califB;
        row += `
        <tr id="${alumnos.id}>
            <td>${alumnos.Nombre}</td>
            <td>${alumnos.Correo}</td>
            <td>${alumnos.Genero}</td>
            <td>${alumnos.Campus}</td>
            <td>${alumnos.califA}</td>
            <td>${alumnos.califB}</td>
            <td>${alumnos.CalifC}</td>
            <td>${alumnos.califA+alumno.califB}</td>
            <td><button class="btn btn-success btn-sm"onclik=>borrarAlumnos(${alumnos.id});"</button></td>
         </tr>
        `;
    }   
    document.getElementById("alumnosTabla").innerHTML = row;
}
function limpiar(){
    document.getElementById("txtNombre").value="";
    document.getElementById("txtCorreo").value="";
    document.getElementById("selGenero").value="";
    document.getElementById("selCampus").value="";
    document.getElementById("califA").value="";
    document.getElementById("califB").value="";
    document.getElementById("califC").value="";
}

function borrarAlumnos(identificador){
    document.getElementById(identificador).remove();
    Alumnos.splice(identificador,1);
}

//crear funcion init
function init (){
    console.log("registrar");
        let alumnos1= new alumnos ("Ana","alichitaan@gmail.com","Femenino","Mexicali", 90, 95, 98);
        let alumnos2= new alumnos ("Ricardo", "ricardo@gmail.com", "Masculino","Tijuana", 90, 98,100);
        let alumnos3= new alumnos ("Andree","Andree@gmail.com", "Masculino","Ensenada", 91, 86,90); 
    console.log(alumnos,alumnos2,alumnos3);
        Alumnos.push(alumnos1,alumnos2,alumnos3);
        imprimirAlumnos();
}
//ejecutar funcion init
window.onload=init;// ejecucion cuando renderiza el html