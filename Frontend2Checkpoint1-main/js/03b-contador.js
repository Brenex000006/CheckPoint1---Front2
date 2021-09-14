if (typeof(Storage) != "undefine") { // verifica se existe o Storage
    // se existir
    if (localStorage.visitas) { //verifica se existe o localStorage.visitas = true; 
        // a partir da 2ª vez, pega o está armazenado e conta + 1;
        localStorage.visitas = Number(localStorage.visitas)+1; // converte em número
    } else {
        localStorage.setItem("visitas","1"); //clássica //aceita apenas atring
        //localStorage.visitas=1; // objetiva
    }
    // Imprimir caso seja a 1ª vez: "Visitas: 1"
    // caso contrário, soma + 1 
    document.write("Visitas: "+localStorage.visitas);
} else {
    document.write("Sem suporte a Web Storage!");
}