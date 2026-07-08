const Game = {

    start() {

        State.reset();

        Questions.prepare();

        UI.showContinent(

            State.currentContinent()

        );

    },

    startQuestions() {

        UI.showPlayer(

            Questions.currentPlayer()

        );

    },

    showQuestion() {

        UI.showQuestion(

            Questions.currentQuestion(),

            State.question + 1,

            8

        );

    },

    nextQuestion() {

        Questions.next();

        if (

            Questions.finished()

        ) {

            UI.showMission(

                Missions.draw()

            );

            return;

        }

        UI.showPlayer(

            Questions.currentPlayer()

        );

    },

    finishMission() {

        Navigation.nextContinent();

    }

};