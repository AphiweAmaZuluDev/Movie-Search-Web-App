const API_LINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=89e70b61feab034994b6a3c1d7212722&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=89e70b61feab034994b6a3c1d7212722&query="';


const mainBody = document.querySelector('.main-body');
const searchBox = document.querySelector('.search-box');
const form = document.getElementById('search-form');

function getMovieResult(url){
    fetch(url)
    .then(res => res.json())
    .then(res => {
        res.results.forEach(element => {
            console.log(element);
            const divRow = document.createElement('div');
            divRow.setAttribute('class', 'row');
            const divColumn= document.createElement('div');
            divColumn.setAttribute('class', 'column');
            const divCard= document.createElement('div');
            divCard.setAttribute('class', 'card');
            const thumbnail = document.createElement('img');
            thumbnail.setAttribute('class', 'thumbnail');
            const movieTitle = document.createElement('h3');
            movieTitle.setAttribute('class', 'movie-title');
            
            mainBody.appendChild(divRow);
            divRow.appendChild(divColumn);
            divColumn.appendChild(divCard);
            divCard.appendChild(thumbnail);
            divCard.appendChild(movieTitle);

            thumbnail.src = IMG_PATH + element.poster_path;
            movieTitle.innerHTML = `${element.title}`;


        });
    })
}

form.addEventListener("submit", e => {
    e.preventDefault();
    mainBody.innerHTML = ''; //Clear page before searching again.
    if(searchBox.value){
        getMovieResult(SEARCH_API + searchBox.value);
        searchBox.value = '';
    }
});

getMovieResult(API_LINK);


//   fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=89e70b61feab034994b6a3c1d7212722&page=1')
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err));