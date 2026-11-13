let totale=0;
function aggiungi(){
    let costo;
    let costonum;
    costo=prompt("Aggiungi un prodotto:");
    //console.log(typeof(costo));
    costonum=parseFloat(costo);
    if(isNaN(costonum)==false){
        totale=totale+costonum;
        console.log("Spesa totale: "+totale);
    }
}
function mostra(){
    let p;
    let numero=777;
    //RECUPERARE PARAGRAFO BY ID:
    p=document.getElementById("paragrafo");
    //cambiare il testo dentro
    p.innerHTML=totale+"€";
    //oppure:
    //p.innerText="testo inserito da js: "+numero;

    //se usi innerhtml PUOI fare changes allo style. innertext NO.
    //p.style.color= "red"

    //cambiare css con BOOTSTRAP:
    p.classList.add=("bg-primary")
    p.classList.toggle=("d-none")
}
function reset(){
    totale=0;
}