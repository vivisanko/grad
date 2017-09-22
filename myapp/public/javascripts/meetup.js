/**
 * Created by ALEX on 03.07.2017.
 */
(function () {
    "use strict";

    class MeetUp {
        constructor(serialNumber, routeNumber) {
            this.serialNumber = serialNumber;
            this.participants = [];
            this.routeNumber = routeNumber;
            this.rank = null;
            this.speed = null;
            this.actual = true;
            this.winnerSpeed = null;
            this.winnerId = null;
        }

        startTimer(id) {
            var g = this.participants.indexOf(id);
            var start = new Date();
            var end = new Date();
            this.speed[g] = Math.floor((end - start) / 1000);
            console.log(`Скорость участника c id ${id} составила ${this.speed[g]} секунд`);
            return this.speed;
        }

        compareTime() {
            if (this.speed.length > 1) {
                this.winnerSpeed = this.speed.slice();
                this.winnerSpeed.sort((a, b) => (b - a)).reverse();
                console.log(`самый медленный участник преодолел маршрут за ${this.winnerSpeed[this.winnerSpeed.length - 1]} секунд`);
                if (this.winnerSpeed[0] !== this.winnerSpeed[1]) {
                    this.winnerSpeed.splice(1, this.winnerSpeed.length - 1);
                    console.log(`самый быстрый участник преодолел маршрут за ${this.winnerSpeed[0]} секунд`);
                }
                else {
                    console.log(`нет участника с лучшим результатом, лучшая скорость0 ${this.winnerSpeed[0]} секунд`);
                    console.log(`нет участника с лучшим результатом, лучшая скорость1 ${this.winnerSpeed[1]} секунд`);
                    this.winnerSpeed = [];
                }
            }

        }


        findWinner() {
            if (this.winnerSpeed.length == 1) {
                var g = this.speed.indexOf(this.winnerSpeed[0]);
                console.log(`Лучшая скорость у намера ${g} в списке участников`);
                this.winnerId = this.participants[g];
                console.log(`ID победителя ${this.winnerId}`);
            }
        }

    };
    window.MeetUp = MeetUp;

}())