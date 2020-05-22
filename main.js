$(document).ready(function(){
//chiamata ajax
    $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/array/music',
        method: 'GET',
        success: function(data){
        //recupero i dati dall'api
        var cd = data.response;
        //con un ciclo for ciclo tutti gli oggetti cd
        for (var i = 0; i < cd.length; i++) {
            //richiamo il template tramite handelbars
            var source   = $('#music-template').html()
            var template = Handlebars.compile(source);
            //inserisco nel template i dati ricevuti dall'api
            var context = {immagine: cd[i].poster, titolo: cd[i].title, autore:cd[i].author, anno:cd[i].year, genere:cd[i].genre}
            var html = template(context);
            //appendo il cd in pagina
            $('.cds-container').append(html);
        }
        },
        //in caso di errore visualizzo il messaggio di errore in pagina
        error: function(a, b, c){
            var numero =a.status;
            var source   = $('#errore-template').html()
            var template = Handlebars.compile(source);
            var context = {numeroErrore: numero, tipoErrore: c}
            var html = template(context);
            $('.cds-container').append(html);
        }
    })
// intercetto il cambio di opzione nel menù a tendina
    $('select').change(function(val){
        //visualizzo tutti i cd
        $('.cd').show()
        //salvo il valore della scelta
        var scelta = $('.genere').val()
        //con in if se la scelta è diversa da all nascondo i cd che hanno un genere diverso da quello scelto
        if(scelta != 'All'){
            $('.cd').each(function(){
                var valore = $(this).find('.genre').text()
                if(valore != scelta){
                    $(this).hide()
                }
            })
        }
    })


})
