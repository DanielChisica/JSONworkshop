let movie = { 'name':'Avengers: Endgame',
                'cast':[{'name':'Scarlett Johansson','character':'Black Widow'},
                    {'name':'Chris Hemsworth', 'character':'Thor'},
                    {'name':'Robert Downey Jr', 'character':'Tony Stark'},
                    {'name':'Mark Ruffalo', 'character': 'Bruce Banner'},
                    {'name':'Chris Evans', 'character':'Steve Rogers'}]
};

function paint(){
    document.getElementById("json").innerHTML = JSON.stringify(movie, undefined, 2);

    $('#row1').empty();
    $('#castBody').empty();

    $('#row1').append($('<td>'+movie.name+'</td>'));
    if (movie.date!=null){
        $('#row1').append($('<td>'+movie.date+'</td>'));
    }

    for(i=0;i<movie.cast.length;i++){
        $('#castBody').append($('<tr>\n' +
            '                        <th scope="row">\n' +
            '                            <input class="form-check-input" type="checkbox" id="checkbox2t2">\n' +
            '                            <label class="form-check-label" for="checkbox2t2" class="label-table"></label>\n' +
            '                        </th>\n' +
            '                        <td>'+movie.cast[i].name+'</td>\n' +
            '                        <td>'+movie.cast[i].character+'</td>\n' +
            '                    </tr>'));
    }
}

function addDate(){
    movie.date= '23/04/2018';
    paint()
}

function changeName(){
    movie.name='Infinity War';
    paint()
}

function deleteActor(){
    delete movie.cast[4];
    paint()
}
paint()

