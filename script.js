let menuVisible = false
///función ocultar mostrar menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //ocular menu 1 vez seleccionado 1 opcion
    document.getElementById("nav").classList="";
    menuVisible  = false;
}
//animaciones
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect() .top;
    if(distancia_skills >= 300){
        let habilidades =document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("C");
        habilidades[3].classList.add("Comunicación");
        habilidades[4].classList.add("creatividad");
        habilidades[5].classList.add("aprendizaje");
    }
}

window.onscroll = function(){
    efectoHabilidades();
}