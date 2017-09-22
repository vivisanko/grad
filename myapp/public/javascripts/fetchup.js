/**
 * Created by ALEX on 28.07.2017.
 */
(function () {
    'use strict';
    var routes = document.querySelector('a[href="#route"]');
    console.log(routes);
    // routes.addEventListener('click', function (event) {
    //
    //     fetch('routes.json')
    //         .then(function (responce) {
    //             return responce.json();
    //         })
    //         .then(function (data) {
    //             console.log(JSON.stringify(data));
    //             // console.log(JSON.stringify(data, 4, 4));
    //         });
    // });
    var notification = document.querySelector('a[href="#notification"]');
    notification.addEventListener('click', function (event) {

        fetch('test.html')
            .then(function (responce) {
                return responce.text();
            })
            .then(function (data) {
                var template = document.createElement('div');
                template.innerHTML = data;
                console.log(template);
               var model = document.getElementById('performance');
               model.innerHTML = data;
               model.style.backgroundImage= 'url("images/preikestolen.jpg")';
            });
    })

}());