// die generierte Zufallzahl
const meinZufallZahl = Math.floor(Math.random() * 100);
// das Form wird erneuet geladen
function reset() {
    window.location.reload();
}

/* Mit der start-Fuktion wird eine Zahl ins Form eingegeben, die eingegebene Zahl wird 
mit der ZufallZahl verglichen,
 Bei ungleichheit wird einen neuen Wert ins Form eingegeben bis es ein Treffer landet. */
function start() {
    //das Ergebnis der Prüfung wird mit "const resultat" angezeigt
    const resultat = document.createElement("resultat");
    let text = "";

    //hier gebe ich eine Zahl ins Form ein.
    let MeineEingebeneZahl = (document.getElementById("meineZahl"));
    // Der Vergleich von beiden Werten
    if (MeineEingebeneZahl == meinZufallZahl) {

        text = document.getElementById("resultat").innerHTML = 'Treffer!';
        text = document.getElementById("resultat").innerHTML = 'Die richtige Zahl lautet:' + MeineEingebeneZahl;

        return false;
    } else if (MeineEingebeneZahl < meinZufallZahl) {

        text = document.getElementById("resultat").innerHTML = 'ZU Klein!';

        resultat.reset();
        MeineEingebeneZahl.reset();
    } else if (MeineEingebeneZahl > meinZufallZahl) {
        text = document.getElementById("resultat").innerHTML = 'ZU Groß!';
        resultat.reset();
        MeineEingebeneZahl.reset();
    } else {

        reset();
    }

}