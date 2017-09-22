(function () {
    "use strict";

    class Router {
        constructor() {
            this.routes = {
                "/": "indexPage",
                //     pattern            /\/$/
                "/:tag": "tagPage"
                //     pattern           /\/(#\w+)$/
            };
            this._routes = [];
            this.tags = ['profile', 'scores', 'rating', 'theory', 'route', 'passedroute', 'randomroute', 'exit'];
            this.userHeaders = new Headers();
            this.userInit = {
                method: 'GET',
                headers: this.userHeaders
            };
            window.addEventListener('hashchange', (event) => {
                console.log('поменялся хэш - 1');
                console.log(window.location);
                console.log(window.location.hash);
                console.log(event);
                console.log(event.oldURL);
                console.log(event.newURL);
                console.log(typeof event.newURL);
                this.nav(event.newURL);
            });
        }

        init() {
            for (var route in this.routes) {
                var methodName = this.routes[route];
                this._routes.push({
                    pattern: new RegExp(route.replace(/:\w+/, '(#\\w+)') + '$'),
                    callback: this[methodName]
                });
            }
        }

        nav(path) {
            var i = this._routes.length;
            // пройтись по массиву объектов pattern-callback
            while (i--) {
                var args = path.match(this._routes[i].pattern);
                // вернуть массив совпадение path с регэкспом, и если совпадение найдется
                if (args) {
                    console.log(this._routes[i].callback);
                    console.log(args.slice(1)[0]);
                    console.log(this.userHeaders);
                    this._routes[i].callback.apply(this, args.slice(1));
                    // то для этого совпадения вызвать функцию напр.'tagPage' или 'indexPage'
                    //    args.slice(1) - скопировать только те части регэкспов,
                    // которые были в скобках и вызвать для них соответствующую функцию
                }
            }

        }

        makeHTMLRequest(someHTML) {
            return fetch(someHTML)
                .then(function (responce) {
                    return responce.text();
                })
        };

        makeRequestToServer(someHTML, userInit) {
            return fetch(someHTML, userInit)
                .then(function (responce) {
                    return responce.json();
                })
        }

        indexPage() {
            console.log('это indexPage');
        }

        handleRequest(selfTag) {
            if (sessionStorage.key("token") === null || sessionStorage.key("userId") === null) {
                console.log('ключ не найден');
                return;
            }
            this.userHeaders.set('token', sessionStorage.getItem("token"));
            this.userHeaders.set('userId', sessionStorage.getItem("userId"));

            var answerServer = this.makeRequestToServer(`/${selfTag}`, this.userInit);
            answerServer.then(function (result) {
                console.log(result);
            });

            // if(0000000000000002)
            var answerClient = this.makeHTMLRequest(`${selfTag}.html`);
            answerClient.then(function (result) {
                console.log(result)
            });

            Promise.all([answerServer, answerClient])
                .then(values => {
                    var content = converter(values[1], values[0]);
                    console.log(content);
                    return content;
                })
                .then(content => {
                    console.log(content);
                    var model = document.getElementById('performance');
                    model.innerHTML = content;
                    console.log(model);
                    // var exit = document.getElementById('exit');
                    // exit.addEventListener('click', function listener(event) {
                    //     exit.removeEventListener('click', listener);
                    //
                    // })

                    if (selfTag === 'exit') {
                        document.forms['entrance'].style.display = 'block';
                        console.log(window.location.href);
                        window.location.href = window.location.href.replace(/#exit/, '');
                        sessionStorage.clear();
                    }

                });

        }


        tagPage(someTag) {
            console.log('это tagPage');
            console.log(someTag);
            var selfTag = someTag.slice(1);
            console.log(`/${selfTag}`);
            console.log(`${selfTag}.html`);
            for (var i = 0; i < this.tags.length; i++) {
                if (this.tags[i] !== selfTag) {
                    continue;
                }
                console.log('нашелся');
                this.handleRequest(selfTag);
                break;
            }
            ;

        };

    }
    ;

    var routerReq = new Router();
    routerReq.init();
    routerReq.nav('/');


    window.Router = Router;

}());
