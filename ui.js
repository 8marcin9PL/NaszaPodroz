const app = document.getElementById("app");

const UI = {

    render(title, html) {

    const current = State.continent || 0;

    const stamps = [
        "🧭",
        "🍜",
        "❄️",
        "🏔️",
        "🌿",
        "✨",
        "🦒"
    ];

    const passport = stamps.map((icon,index)=>{

        return `
            <span class="${
                index <= current
                ? "stamp done"
                : "stamp"
            }">
                ${icon}
            </span>
        `;

    }).join("");

    app.innerHTML = `

        <div class="passport-bar">

            <div>

               <div
    class="passport-title"
    id="openPassport">

    🛂 PASSPORT

</div>

                <div class="passport-sub">

                    Helena ♥ Marcin

                </div>

            </div>

            <div class="passport-stamps">

                ${passport}

            </div>

        </div>

        <div class="screen">
<div
    class="passport-modal"
    id="passportModal">

    <div class="passport-book">

        <div class="passport-left">

            <h2>

                PASSPORT

            </h2>

            <p>

                Helena ♥ Marcin

            </p>

            <p>

                Expedition 04

            </p>

            <p>

                Berlin

            </p>

            <p>

                08.07.2026

            </p>

        </div>

        <div class="passport-right">

            <h3>

                Odwiedzone miejsca

            </h3>

            ${GAME_DATA.continents.map((c,i)=>`

                <p>

                    ${
                        i<=current
                        ?"✓"
                        :"○"
                    }

                    ${c.name}

                </p>

            `).join("")}

            <br>

            <button id="closePassport">

                Zamknij

            </button>

        </div>

    </div>

</div>

            <h1>${title}</h1>

            ${html}

        </div>

    `;

const modal = document.getElementById("passportModal");

document
.getElementById("openPassport")
.addEventListener("click", () => {

    modal.classList.add("show");

});

document
.getElementById("closePassport")
.addEventListener("click", () => {

    modal.classList.remove("show");

});

modal.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.classList.remove("show");

    }

});

document
.getElementById("closePassport")
.onclick=()=>{

document
.getElementById("passportModal")
.classList.remove("show");

};

},

    showIntro() {

        this.render(

            "🌍 Nasza podróż",

            `
                <p>08.07.2026</p>
                <p>Berlin</p>
                <p>Lot HM 0807</p>

                <br><br>

                <button id="start">

                    Rozpocznij podróż

                </button>
            `

        );

        document
            .getElementById("start")
            .onclick = () => {

                this.showWelcome();

            };

    },

    showWelcome() {

        this.render(

            "Witajcie",

            `

                ${GAME_DATA.narrator.welcome
                    .map(t=>`<p>${t}</p>`)
                    .join("")}

                <br>

                <button id="go">

                    Wyruszamy

                </button>

            `

        );

        document
            .getElementById("go")
            .onclick = () => {

                Game.start();

            };

    },

    showContinent(continent) {

        this.render(

            continent.emoji + " " + continent.name,

            `

                <h2>

                    ${continent.title}

                </h2>

                ${continent.intro
                    .map(t=>`<p>${t}</p>`)
                    .join("")}

                <br>

                <button id="startQuestions">

                    Rozpocznij etap

                </button>

            `

        );

        document
            .getElementById("startQuestions")
            .onclick = () => {

                Game.startQuestions();

            };

    },
   showPlayer(player) {

    this.render(

        "🎴 Losowanie",

        `

        <div class="shuffle">

            <div class="card back"></div>

            <div class="card back second"></div>

            <div class="card front">

                <h2>

                    ${player} zaczyna

                </h2>

            </div>

        </div>

        <button id="question">

            Odkryj pytanie

        </button>

        `

    );

    document
        .getElementById("question")
        .onclick = () => {

            Game.showQuestion();

        };

},

    showQuestion(question, nr, total) {

    this.render(

        `Pytanie ${nr} / ${total}`,

        `

        <div class="question-card">

            <div class="question-inner">

                <div class="question-front">

                    <span>🃏</span>

                    <p>Kliknij poniżej, aby odkryć pytanie</p>

                </div>

                <div class="question-back">

                    <p class="question">

                        ${question}

                    </p>

                </div>

            </div>

        </div>

        <button id="reveal">

            Odkryj pytanie

        </button>

        <button id="next"

                style="display:none">

            Dalej

        </button>

        `

    );

    const card =
        document.querySelector(".question-card");

    document
        .getElementById("reveal")
        .onclick = () => {

            card.classList.add("flip");

            document.getElementById("reveal").style.display="none";

            document.getElementById("next").style.display="inline-block";

        };

    document
        .getElementById("next")
        .onclick = () => {

            Game.nextQuestion();

        };

},

    showMission(mission) {

        const text =
            GAME_DATA.narrator.afterMission[
                Math.floor(
                    Math.random() *
                    GAME_DATA.narrator.afterMission.length
                )
            ];

        this.render(

            "🎯 Misja",

            `

                <p class="question">

                    ${mission}

                </p>

                <br>

                <p>

                    ${text}

                </p>

                <br>

                <button id="done">

                    Misja wykonana

                </button>

            `

        );

        document
            .getElementById("done")
            .onclick = () => {

                Game.finishMission();

            };

    },
    showFinal() {

        this.render(

            "❤️",

            `

                <h2>

                    ${GAME_DATA.finalReward.title}

                </h2>

                ${GAME_DATA.finalReward.text
                    .map(t => `<p>${t}</p>`)
                    .join("")}

                <br>

                <button id="restart">

                    Zagraj ponownie

                </button>

            `

        );

        document
            .getElementById("restart")
            .onclick = () => {

                Navigation.restart();

            };

    }

};