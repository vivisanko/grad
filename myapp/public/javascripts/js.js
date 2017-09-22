(function () {

    "use strict";

    var trapezia = new Place('Trapezia');

    trapezia.createRoute(12, 'желтые', 'ростовой', 10, true);
    trapezia.createRoute(34, 'желтые', 'на равновесие', 15, true);
    trapezia.createRoute(21, 'зеленые', 'силовой', 20, true);
    trapezia.createRoute(33, 'зеленые', 'на равновесие', 25, true);
    trapezia.createRoute(56, 'красные', 'силовой', 30, true);
    trapezia.createRoute(38, 'красные', 'на равновесие', 35, true);
    trapezia.createRoute(52, 'синие', 'на равновесие', 40, true);
    trapezia.createRoute(83, 'синие', 'прыжковый', 45, true);
    trapezia.createRoute(6, 'черные', 'прыжковый', 50, true);
    trapezia.createRoute(11, 'черные', 'на равновесие', 55, true);

    console.log(trapezia.transformToJSON(trapezia.routes));


    trapezia.createVisitor('admin', '1234');
    trapezia.createVisitor('vivisanko', '1111');
    // trapezia.createVisitor('vivisanko', '1122');
    trapezia.createVisitor('Tolia', 'sang');
    trapezia.createVisitor('Boris', 'silent');
    trapezia.createVisitor('Nikola', 'swing');
    trapezia.createVisitor('galka', 'sitdown');
    trapezia.createVisitor('cat', 'climb');
    trapezia.createVisitor('Vova', 'answer');
    trapezia.createVisitor('Nata', 'said');
    trapezia.createVisitor('Nina', 'asked');


    console.log(trapezia.transformToJSON(trapezia.visitors));


    console.log(JSON.parse(JSON.stringify(trapezia.visitors[1])));

    console.log(trapezia.routes[9]);
    console.log(trapezia.visitors[1]);


}());