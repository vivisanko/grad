(function () {
    "use strict";


    function converter(str, answer) {
        var resFirst = str.replace(/\$\{([a-z]+)\}/gim, function (re) {
            var news = re.slice(2, re.length - 1);
            var newstr = answer[news]
            return newstr;
        });
        var resSecond = resFirst.replace(/\$\{([4][a-z]+)\}/gim, function (re) {
                var news = re.slice(3, re.length - 1);
                var newstr = answer[news].length;
                return newstr;
            }
            )
        ;
     return resSecond;
    };

    window.converter = converter;
}());