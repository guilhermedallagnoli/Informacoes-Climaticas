function getSol() {

    $.ajax({

        method: 'get',
        crossDomain: true,
        url: 'https://api.openweathermap.org/data/2.5/weather?id=3468879&appid=d1f3b926232e7ac4719ea08818b0c496&lang=pt_br',
        dataType: 'json',

        success: function (data) {

            $('#pressao').html(data.main.pressure + ' hPa');
            $('#nascer').html(data.sys.sunrise);
            $('#por').html(data.sys.sunset);
            $('#mar').html(data.main.sea_level+ ' NMM');

        },

        error: function (argument) {
            alert('Falha ao obter dados!');
        }

    });

}

window.onload = function () {
    getSol();
};
