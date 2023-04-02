//itt egy megjegyzés

function betolto() {
    document.getElementById("szal").checked = true;
    document.getElementById("all").checked = true;
    document.getElementById("wif").checked = true;
}

function tipi() {
    if (document.getElementById("szal").checked)
        document.getElementById("kaja").removeAttribute("hidden");
    else document.getElementById("kaja").setAttribute("hidden", "hidden");
}

function keres() {
    var tol = Date.parse(document.getElementById("erk").value);
    if (isNaN(tol)) {
        //alert(tol + " Ön nem állította be az utazás első napjának dátumát!");
        //return;
    }
    var ig = Date.parse(document.getElementById("elu").value);
    if (isNaN(ig)) {
        //alert("Ön nem állította be az utazás utolsó napjának dátumát!");
        //return;
    }
    if (tol > ig) {
        alert("Az első nep nem lehet az utolsó nap után!");
        return;
    }
    var felnott = parseInt(document.getElementById("fel").value);
    var gyerek = parseInt(document.getElementById("gye").value);
    if (felnott < 1) {
        felnott = 1;
        document.getElementById("fel").value = "1";
    }
    if (gyerek < 0) {
        gyerek = 0;
        document.getElementById("gye").value = "0";
    }
    var email = document.getElementById("ema").value;
    if (email == "") {
        alert("Az e-mail cím nincs kitöltve!");
        return;
    }
    var jel1 = document.getElementById("je1").value;
    var jel2 = document.getElementById("je2").value;
    if (jel1 == "") {
        alert("Ön nem adott meg jelszót!");
        return;
    }
    if (jel1 != jel2) {
        alert("A két jelszó nem egyezik!");
        return;
    }
}