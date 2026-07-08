const State = {

    continent: 0,

    question: 0,

    questions: [],

    players: [],

    usedMissions: [],

    currentMission: null,

    reset() {

        this.continent = 0;
        this.question = 0;

        this.questions = [];

        this.players = [];

        this.usedMissions = [];

        this.currentMission = null;

    },

    currentContinent() {

        return GAME_DATA.continents[
            this.continent
        ];

    }

};