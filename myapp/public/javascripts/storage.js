(function () {
    'use strict';

    var form = document.forms.namedItem('entrance'),
        remember = document.getElementById('remember');

    function saveUname() {
        localStorage.setItem('uname', form.elements.uname.value);
    }

    function savePsw() {
        localStorage.setItem('psw', form.elements.psw.value);
    }

    remember.addEventListener('change', function () {
        if (!remember.checked) {
            localStorage.clear();
        } else {
            saveUname();
            savePsw();
        }
    });

    form.elements.uname.addEventListener('change', function () {
        saveUname();
    });
    form.elements.psw.addEventListener('change', function () {
        savePsw();
    });


    if (localStorage.getItem('uname') && localStorage.getItem('psw')) {
        form.elements.uname.value = localStorage.getItem('uname');
        form.elements.psw.value = localStorage.getItem('psw');
    }


}())