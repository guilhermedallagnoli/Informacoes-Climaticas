function getClima() {

    $.ajax({

        method: 'get',
        crossDomain: true,
        url: 'http://api.openweathermap.org/data/2.5/weather?id=3468879&appid=d1f3b926232e7ac4719ea08818b0c496&lang=pt_br',
        dataType: 'json',

        success: function (data) {

            let conveterCelsius = (data.main.temp - 273.15);
            celsius = (Math.round(conveterCelsius)+'C°');

            $('#temperatura').html(celsius);
            $('#condicao').html(data.weather[0].description.charAt(0).toUpperCase()+data.weather[0].description.slice(1));
            $('#vento').html((data.wind.speed*3,6)+"km/h");
            $('#umidade').html(data.main.humidity+'%');
            $('#barra').css('width', data.main.humidity+'%');

            let icone = 'img/imgprevisao/'+data.weather[0].icon+'.png';
            $('#iconeCondicao').attr('src',icone);

        },

        error: function (argument) {
            alert('Falha ao obter dados!');
        }

    });

}

window.onload = function () {
    getClima();
};
