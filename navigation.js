const Navigation = {

    nextContinent() {

        State.continent++;

        if (State.continent >= GAME_DATA.continents.length) {

            UI.showFinal();

            return;

        }

        Questions.prepare();

        UI.showContinent(
            State.currentContinent()
        );

    },

    restart() {

        State.reset();

        UI.showIntro();

    }

};