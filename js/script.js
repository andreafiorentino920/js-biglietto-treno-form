// Selezione bottoni 
var btnGenera = document.getElementById("genera");
var btnAnnulla = document.getElementById("annulla");

// Click bottone
btnGenera.addEventListener("click",
    function(){
      var biglietto = document.getElementById("biglietto");
        // controllo se il box ha la classe open
      biglietto.classList.add("open");
      var nome = document.getElementById("nome").value;
      var km = document.getElementById("km").value;
      var fasciaEta = document.getElementById("fascia").value;
      if (nome != "" && !isNaN(km) && km > 0 && fasciaEta != ""){
        // Calcolo il prezzo in base alla fascia d'età
        var prezzo = km * 0.21;
        var tipoOfferta = "Biglietto Standard";
        var discount20 = prezzo * 0.20;
        var discount40 = prezzo * 0.40;
        if (fasciaEta == "minorenne"){
            prezzo = prezzo - discount20;
            tipoOfferta = "Sconto Minorenne";
        }else if(fasciaEta == "over"){
            prezzo = prezzo - discount40;
            tipoOfferta = "Sconto Silver"
        }    
        // Arrotondo per i primi 2 decimali
        prezzo = prezzo.toFixed(2);
        // Stampo dati nel div biglietto
        document.getElementById("nome-passeggero").innerHTML = nome;
        document.getElementById("tipo-offerta").innerHTML = tipoOfferta;
        document.getElementById("carrozza").innerHTML = Math.floor(Math.random()*9)+1;
        document.getElementById("codice").innerHTML = Math.floor(Math.random()* (99999 - 90000))+90000;
        document.getElementById("totale").innerHTML = prezzo + "€";
        document.getElementById("biglietto").classList.add("open");
      }else{
        alert("Errore");
      }
    }
);

// al click del bottone annulla 
btnAnnulla.addEventListener("click",
    function(){
        // nascondo il biglietto
        document.getElementById("biglietto").classList.remove("open");
        // reset campi input 
        document.getElementById("nome").value = "";
        document.getElementById("km").value = "";
        document.getElementById("fascia").selectIndex = "0";
    }
);