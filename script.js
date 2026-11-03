
const startButton = document.getElementById("startButton");
const geschenk = document.querySelector(".geschenk");
const start = document.getElementById("start");
const erinnerungen = document.getElementById("erinnerungen");

let geschenkGeoeffnet = false;

// Startbildschirm
startButton.addEventListener("click", () => {

    if (!geschenkGeoeffnet) {
geschenk.classList.add("geoeffnet");
        document.querySelector("#start h1").textContent =
            "Für den wichtigsten Menschen in meinem Leben ❤️";

        document.querySelector("#start p").textContent =
            "Hier beginnt eine kleine Reise durch unsere Erinnerungen.";

        startButton.textContent =
            "Weiter zu unseren Erinnerungen";

        geschenkGeoeffnet = true;

    } else {
        start.classList.add("versteckt");
        erinnerungen.classList.remove("versteckt");
    }
});

// Erinnerungskarten umdrehen
document.querySelectorAll(".karte").forEach(karte => {
    karte.addEventListener("click", () => {
        karte.classList.toggle("umgedreht");
    });
});

// Wechsel zum Liebesbrief
const weiterButton = document.getElementById("weiterButton");
const liebesbrief = document.getElementById("liebesbrief");

weiterButton.addEventListener("click", () => {
    erinnerungen.classList.add("versteckt");
    liebesbrief.classList.remove("versteckt");
});

// Brief öffnen
const briefContainer = document.getElementById("briefContainer");
const briefOverlay = document.getElementById("briefOverlay");

let briefGeoeffnet = false;

briefContainer.addEventListener("click", () => {

    if (briefGeoeffnet) return;

    briefGeoeffnet = true;

    // Umschlag öffnen
    briefContainer.classList.add("offen");

    // Nach der Animation den großen Brief anzeigen
    setTimeout(() => {
        briefOverlay.classList.remove("versteckt");
    }, 1800);

});

// Abschlussanimation
const abschlussButton =
    document.getElementById("abschlussButton");

const abschluss =
    document.getElementById("abschluss");

const herzenContainer =
    document.getElementById("herzenContainer");

abschlussButton.addEventListener("click", () => {

    // Brief ausblenden
    briefOverlay.classList.add("versteckt");

    // Abschluss anzeigen
    abschluss.classList.remove("versteckt");

    // Herzen erzeugen
const herzIntervall = setInterval(() => {

    const herz = document.createElement("span");
    herz.classList.add("herz");

    const symbole = ["❤️", "❤️", "❤️", "❤️", "🐼"];
    herz.textContent = symbole[Math.floor(Math.random() * symbole.length)];

    herz.style.left = Math.random() * 100 + "%";
    herz.style.fontSize = (15 + Math.random() * 30) + "px";

    const dauer = 4 + Math.random() * 4;
    herz.style.animationDuration = dauer + "s";

    herzenContainer.appendChild(herz);

    setTimeout(() => {
        herz.remove();
    }, dauer * 1000);

}, 300);

    // Nach 15 Sekunden keine neuen Herzen mehr
    setTimeout(() => {
        clearInterval(herzIntervall);
    }, 15000);
});

// Zusätzliche Bilder beim schönsten Ausflug

const ausflugKarte = document.getElementById("ausflugKarte");
const fotoAnimation = document.getElementById("fotoAnimation");

// Hier später deine eigenen Bilder eintragen
const ausflugBilder = [
    "bilder/ausflug1.jpeg",
    "bilder/ausflug2.jpeg",
    "bilder/ausflug3.jpeg",
    "bilder/ausflug4.jpeg",
    "bilder/ausflug5.jpeg"
];

// Positionen auf dem Bildschirm in Prozent
const positionen = [
    { x: 5, y: 12, drehung: -12 },
    { x: 72, y: 10, drehung: 9 },
    { x: 8, y: 60, drehung: 7 },
    { x: 72, y: 62, drehung: -9 },
    { x: 42, y: 70, drehung: 5 }
];

let animationLaeuft = false;

ausflugKarte.addEventListener("click", () => {
console.log("Ausflugskarte wurde angeklickt!");
console.log("Umgedreht:", ausflugKarte.classList.contains("umgedreht"));
console.log("Bildcontainer:", fotoAnimation);
    // Nur starten, wenn die Rückseite gezeigt wird
    if (!ausflugKarte.classList.contains("umgedreht")) {
        return;
    }

    if (animationLaeuft) return;

    animationLaeuft = true;

    fotoAnimation.innerHTML = "";

    // Alle fünf Bilder nacheinander anzeigen
    ausflugBilder.forEach((bild, index) => {

        setTimeout(() => {

            const foto = document.createElement("img");

            foto.src = bild;
            foto.classList.add("popup-foto");

            foto.style.left = positionen[index].x + "%";
            foto.style.top = positionen[index].y + "%";

            foto.style.setProperty(
                "--drehung",
                positionen[index].drehung + "deg"
            );

            fotoAnimation.appendChild(foto);

            requestAnimationFrame(() => {
                foto.classList.add("sichtbar");
            });

        }, index * 500);
    });

    // Nach 5 Sekunden alle Bilder ausblenden
    setTimeout(() => {

        document.querySelectorAll(".popup-foto").forEach(foto => {
            foto.classList.add("verblassen");
        });

    }, 7000);

    // Bilder vollständig entfernen
    setTimeout(() => {
        fotoAnimation.innerHTML = "";
        animationLaeuft = false;
    }, 8500);
});

