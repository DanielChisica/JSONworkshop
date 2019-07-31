let movie = { 'name':'Avengers: Endgame',
                'cast':[{'name':'Scarlett Johansson','character':'Black Widow'},
                    {'name':'Chris Hemsworth', 'character':'Thor'},
                    {'name':'Robert Downey Jr', 'character':'Tony Stark'},
                    {'name':'Mark Ruffalo', 'character': 'Bruce Banner'},
                    {'name':'Chris Evans', 'character':'Steve Rogers'}]
};

function paint(){
    document.getElementById("json").innerHTML = JSON.stringify(movie, undefined, 2);
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

