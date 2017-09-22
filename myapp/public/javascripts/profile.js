/**
 * Created by ALEX on 02.07.2017.
 */
(function () {
    "use strict";

    class Profile {
        constructor(userName, password) {
            this.id = null;
            this.token = null;
            this.name = userName;
            this.password = password;
            this.experiens = 'без опыта';
            this.score = null;
            this.historyRoutes = [];
            this.historyMeetUps = [];
            this.duration = null;

        }
    };
    window.Profile = Profile;
    // module.exports = Profile;

}())