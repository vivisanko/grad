(function () {
    "use strict";


    var form = document.forms['entrance'];
    // var forma= document.forms.namedItem('entrance');
    console.log(form);

    form.addEventListener('submit', function listener(event) {
        // form.removeEventListener('submit', listener);
        event.preventDefault();
        // var reqForm = new FormData();
        var loginForm = form.elements.uname.value,
            passwordForm = form.elements.psw.value;
        console.log(loginForm);
        console.log(passwordForm);
        // reqForm.append('uname', loginForm);
        // reqForm.append('psw', passwordForm);
        // console.log(reqForm);

        var str = JSON.stringify({uname: loginForm, psw: passwordForm});
        console.log(str);

        fetch('/logon', {
            method: 'post',
            headers: {
                "Content-type": "application/json"
            },
            body: str
            // JSON.stringify({uname: loginForm, psw: passwordForm})
            // reqForm

        })
            .then(function (response) {
                console.log('ответ от сервера');
                // if (typeof response=="string") {

                // } else
                return response.json();

            })
            .then(function (data) {
                console.log(data);
                if (data.error) {
                    var err = document.getElementById('mistake');
                    err.innerHTML = `<h3>${data.error}</h3>`;
                    err.style.color = '#fff';

                } else {
                    sessionStorage.setItem('token', data.token);
                    sessionStorage.setItem('userId', data.userId);
                    form.style.display = 'none';


                }
            })
    });


}());
