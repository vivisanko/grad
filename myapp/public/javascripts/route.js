/**
 * Created by ALEX on 02.07.2017.
 */
(function () {
    "use strict";

    class Route {
        constructor(number, type, group, rank, valid) {
            this.number = number;
            this.type = type;
            this.difficulty = [];
            this.group = group;
            this.rank = rank;
            this.valid = valid;
            this.amount = [];
        }

        identifyDifficulty() {
            var types = ['жёлтые', 'зелёные', 'красные', 'синие', 'чёрные'];
            var font = ['4', '4+', '5 / 6a / 6a+', '6b / 6c', '7a / 7a+ / 7b'];
            var hueco = ['V0', 'V0+', 'V1 / V2 / V3', 'V4 / V5 / V6', 'V7 / V8'];
            var uk = ['B1', 'B2', 'B3 / B4', 'B5 / B6 / B7', 'B8'];
            this.difficulty[0] = this.type;
            for (var i = 0; i < types.length; i++) {
                if (types[i] == this.type) {
                    this.difficulty[1] = font[i];
                    this.difficulty[2] = hueco[i];
                    this.difficulty[3] = uk[i];
                };
            }
            console.log(`Сложность маршрута ${this.difficulty.join(' - ')}`);
            return this.difficulty;
        }


    };
    window.Route = Route;

}())