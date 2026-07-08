const Questions = {

    prepare() {

        const continent = State.currentContinent();

        State.questions = [...continent.questions];

        this.shuffle(State.questions);

        State.players = [
            "Marcin",
            "Marcin",
            "Marcin",
            "Marcin",
            "Helenka",
            "Helenka",
            "Helenka",
            "Helenka"
        ];

        this.shuffle(State.players);

        State.question = 0;

    },

    currentQuestion() {

        return State.questions[
            State.question
        ];

    },

    currentPlayer() {

        return State.players[
            State.question
        ];

    },

    next() {

        State.question++;

    },

    finished() {

        return State.question >= State.questions.length;

    },

    shuffle(array) {

        for (
            let i = array.length - 1;
            i > 0;
            i--
        ) {

            const j = Math.floor(
                Math.random() * (i + 1)
            );

            [array[i], array[j]] =
            [array[j], array[i]];

        }

    }

};