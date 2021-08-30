// Selezione bottoni 
var btnGenera = document.getElementById("genera");
var btnAnnulla = document.getElementById("annulla");

// Click bottone
btnGenera.addEventListener("click",
    function(){
        // controllo se il box ha la classe open la rimuovo
        if (biglietto.classLIst.contains("open")){
            biglietto.classLIst.remove("open")     
        } else 
        biglietto.classlist.add("open")
    }

//Acquisizione valori campi input e select 
var nome = document.getElementById("nome").value;
var km = parseInt(document.getElementById("km").value);
var fasciaEta = document.getElementById("eta").value;

// Calcolo il prezzo in base alla fascia d'età


// Stampo dati nel div biglietto
// Inserire nome del passeggero
document.getElementById("nome-passeggero") = document.write("nome")
// Inserire il tipo di offerta
// Inserire codice cp e carrozza

// Mostro il biglietto
document.getElementById("biglietto").classList.add("open")

// al click del bottone annulla 
btnAnnulla.addEventListener("click",
    function(){
        // nascondo il biglietto
        document.getElementById("biglietto").classList.remove("open")
    }
)