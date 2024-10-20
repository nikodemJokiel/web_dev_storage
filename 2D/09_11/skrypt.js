btn.addEventListener("click", spr);
function spr(){
    let wzor1 = /[a-zA-z]{6,}\d{1}|\d{1}[a-zA-z]{6,}/;
    let wzor2 = /[a-zA-z]{4,6}\d{1}|\d{1}[a-zA-z]{4,6}/;
    
    let dane = inp.value;

    if(wzor1.test(dane)){
        wynik.innerText = "podałeś dobre hasło";
    }
    else if (wzor2.test(dane)) {
        wynik.innerText = "podałeś średnie hasło";
    } 
    else {
        wynik.innerText = "podałeś słabe hasło";
    }
}