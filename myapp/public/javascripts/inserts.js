(function () {
    "use strict";

    var h1 = document.getElementById('first');
    var h2 = document.createElement('h1');
    h2.innerHTML = "<span style='color: lightgrey;'>и это тоже контент</span>";
    document.body.appendChild(h2);
    h1.insertAdjacentElement('afterend', h2);

    var fragment = document.createDocumentFragment();
    var insertTest = document.getElementById('insertTest');
    var performance = document.getElementById('performance');


    for (var i = 0; i < insertTest.childNodes.length; i++) {
        // if (insertTest.childNodes[i].nodeType != 1) continue;

        fragment.appendChild(insertTest.childNodes[i]);
    }

    // var divElement = document.createElement('div');
    // insertTest.children.forEach(function (el) {
    //     var elem = divElement.cloneNode(false);
    //     elem.id = el.id;
    //     elem.textContent = el.textContent;
    //     fragment.appendChild(elem);
    // });


    performance.appendChild(fragment);


    // document.body.appendChild(fragment);


}());

