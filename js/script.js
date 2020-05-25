var n_vista=parseInt("1");
var x = document.getElementById("clave");
var y = document.getElementById("retiro");
function add(key) { 
    var s = x.value;
    x.value = s + key;
    var h = y.value;
    y.value = h + key;
}

function borrar (){
    document.getElementById("clave").value="";
    document.getElementById("retiro").value="";
}
logueado=new Boolean (false);
var claveverif = "12345678";
var  monto = "1000"
class Usuario{
    constructor(clave,monto){
        this.clave=clave;
        this.monto=monto;
    }
    clave(){
        return this.clave;
    };
};

function ok(){
    var user = new Usuario (document.getElementById("clave").value);
    if (user.clave==claveverif) {
        logueado = true;
            document.getElementById("m1").style.display="none";
            document.getElementById("m2").style.display="block";
            n_vista++;
        }else{
        document.getElementById("mensaje").innerHTML="Contraseña incorrecta"
        var elemnto = document.getElementById("clave");
        elemnto.value="";
    }
}

function menu(){
    document.getElementById("m2").style.display="block";
}
function boton1(){
    if (n_vista==2) {
        document.getElementById("m2").style.display="none";
        document.getElementById("m3").style.display="block";
        n_vista++;
    } 
    
}
function boton2(){
    if (n_vista==2) {
        document.getElementById("m2").style.display="none";
        document.getElementById("m8").style.display="block";
        document.getElementById("msn").innerHTML=this.monto;
        n_vista++;
    } 
    if (n_vista==9) {
        document.getElementById("m9").style.display="none";
        document.getElementById("m11").style.display="block";
        n_vista++;
    } 

}
function boton4(){
    if(n_vista==3){
        document.getElementById("m3").style.display="none";
        document.getElementById("m4").style.display="block";
        n_vista++;
    }
    if (n_vista==5) {
        document.getElementById("m5").style.display="none";
        document.getElementById("m6").style.display="block";
        n_vista++;
    }
   

}
function boton3(){
    if (n_vista=4) {
        document.getElementById("m4").style.display="none";
        document.getElementById("m5").style.display="block";
        n_vista++;
    }
}
function boton5(){
    if (n_vista=2) {
        document.getElementById("m2").style.display="none";
        document.getElementById("m9").style.display="block";
        n_vista++;
    }
}
function boton5(){
    if (n_vista=2) {
        document.getElementById("m2").style.display="none";
        document.getElementById("m9").style.display="block";
        n_vista++;
    }
}
function boton6(){
    if (n_vista=2) {
        document.getElementById("m2").style.display="none";
        document.getElementById("m10").style.display="block";
        n_vista++;
    }
}
function cancelar(){
    if (n_vista==3) {
        document.getElementById("m2").style.display="block";
        document.getElementById("m3").style.display="none";
        n_vista++;
    } 
    if (n_vista==4) {
        document.getElementById("m3").style.display="block";
        document.getElementById("m4").style.display="none";
        
        n_vista++;
    }
}
