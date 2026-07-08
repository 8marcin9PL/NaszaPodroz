const Missions = {

    draw() {

        const available =
            GAME_DATA.missions.filter(

                mission =>

                !State.usedMissions.includes(
                    mission
                )

            );

        State.currentMission =

            available[
                Math.floor(
                    Math.random() *
                    available.length
                )
            ];

        State.usedMissions.push(

            State.currentMission

        );

        return State.currentMission;

    }

};