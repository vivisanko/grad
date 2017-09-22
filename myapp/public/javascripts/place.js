/**
 * Created by ALEX on 03.07.2017.
 */
(function () {
        "use strict";

        class Place {
            constructor(location) {
                this.location = location;
                this.meetings = [];
                this.visitors = [];
                this.routes = [];

            }

            createVisitor(userName, password) {
                var newUserName = true;
                for (var i = 0; i < this.visitors.length; i++) {
                    if (userName !== this.visitors[i].name) {
                        continue;
                    }
                    alert('Пользователь с таким логином уже существует');
                    newUserName = false;
                }
                if (newUserName) {
                    var visitor = new Profile(userName, password);
                    visitor.id = this.visitors.length + 1;
                    this.visitors.push(visitor);
                    console.log(`количество посетителей - ${this.visitors.length}`);
                    console.log(`добавлен посетитель с id - ${this.visitors[this.visitors.length - 1].id}`);
                }
                return this.visitors;
            }

            createRoute(number, type, group, rank, valid) {
                var newNumber = true;
                for (var i = 0; i < this.routes.length; i++) {
                    if (number !== this.routes[i].number) {
                        continue;
                    }
                    alert('Маршрут с таким номером уже существует');
                    newNumber = false;
                }
                if (newNumber) {
                    var track = new Route(number, type, group, rank, valid);
                    track.identifyDifficulty();
                    this.routes.push(track);
                    console.log(`количество маршрутов - ${this.routes.length}`);
                }
                return this.routes;
            }

            // takePartMeetUp(serialNum, ...args) {
            //     var j = this.meetings[serialNum - 1];
            //     this.meetings[j].participants.push(args);
            //
            // }

            // createMeetUp(routeNumber, starterId) {
            //     var serialNumber = this.meetings.length + 1;
            //     var meeting = new MeetUp(serialNumber, routeNumber);
            //     var g = this.routes.number.indexOf(routeNumber);
            //     meeting.rank = this.routes[g] + 10;
            //     meeting.participants[0] = starterId;
            //
            //
            //     // как добавить других желающих поучаствовать?
            //
            //
            //     console.log(`номер митапа- ${serialNumber}`);
            //     console.log(`участники митапа- ${meeting.participants.join('VS')}`);
            //     this.meetings.push(meeting);
            // }

            // closeMeetUp(serialNum) {
            //     var g = this.visitors.id.indexOf(this.meetings[serialNum - 1].winnerId);
            //     this.visitors[g].historyMeetUps.push(this.meetings[serialNum - 1]);
            //     this.meetings[serialNum - 1].actual = false;
            // }

            transformToJSON(something) {
                var arrSomething=[];
                var i = 0;
                while (something[i]) {
                    arrSomething.push(JSON.stringify(something[i]));
                    i++;
                }
                return arrSomething;
            }

        }
        ;

        window
            .Place = Place;

    }
    ()
)