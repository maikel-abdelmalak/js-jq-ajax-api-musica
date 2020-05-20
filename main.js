$(document).ready(function(){

    $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/array/music',
        method: 'GET',
        success: function(data){
        var cd = data.response;
        console.log(cd);
        for (var i = 0; i < cd.length; i++) {
            cd[i]
            var source   = $('#music-template').html()
            var template = Handlebars.compile(source);
            var context = {immagine: cd[i].poster, titolo: cd[i].title, autore:cd[i].author, anno:cd[i].year}
            var html = template(context);
            $('.cds-container').append(html);
        }
        },
        error: function(a, b, c){
            var numero =a.status;
            var source   = $('#errore-template').html()
            var template = Handlebars.compile(source);
            var context = {numeroErrore: numero, tipoErrore: c}
            var html = template(context);
            $('.cds-container').append(html);
        }
    })
    





})
