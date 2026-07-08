document.addEventListener("DOMContentLoaded", () => {

    if(typeof GAME_DATA === "undefined"){
        alert("Nie znaleziono GAME_DATA");
        return;
    }

    if(typeof UI === "undefined"){
        alert("Nie znaleziono UI");
        return;
    }

    if(typeof Game === "undefined"){
        alert("Nie znaleziono Game");
        return;
    }

    UI.showIntro();

});