/* api key => a887a50ff50977d868897c721ddadc74
image api => https://image.tmdb.org/t/p/original/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg

api doc => https://developers.themoviedb.org/3/authentication

movie details => https://api.themoviedb.org/3/movie/724089?api_key=a887a50ff50977d868897c721ddadc74

top rated movies => https://api.themoviedb.org/3/movie/top_rated?api_key=a887a50ff50977d868897c721ddadc74

get videos => https://api.themoviedb.org/3/movie/724089/videos?api_key=a887a50ff50977d868897c721ddadc74

if site is youtube get the key and paste here https://youtube.com/watch?v={key} 

My themoviedb.org te user name and details

userName = ibrahimH
email = .......ih2@gmail.com
pass = ........97s

*/

const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=a887a50ff50977d868897c721ddadc74`
fetch(url)
.then(res => res.json())
.then(data => setMovies(data.results));


const setMovies = (movies) =>{
    const movieListContainer = document.getElementById('movie-list-container');
    movies.forEach(movie =>{
        const boxDiv = document.createElement('div');
        const imgUrl = 'https://image.tmdb.org/t/p/original' + movie.poster_path;
        boxDiv.classList.add('col-md-3');
        boxDiv.innerHTML = `
            <div class="shadow rounded p-3 m-2">
                <img class="img-fluid" src="${imgUrl}" alt="Image">
                <h3>${movie.title}</h3>
                 <p>${movie.overview.slice(0,200)}</p>
                 <button onclick="loadMovieDetails('${movie.id}')" class="btn btn-primary">See Details</button>
            </div>
        `
        movieListContainer.appendChild(boxDiv);
    })
};

const loadMovieDetails = (id)=>{
    const detUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=a887a50ff50977d868897c721ddadc74`;
    fetch(detUrl)
    .then(res => res.json())
    .then(data => setMovieDetails(data))
};

const setMovieDetails = (movie) => {
    const movieDetailsContainer = document.getElementById('movie-details-container');
    movieDetailsContainer.innerHTML = '';
    const movieBoxDetail = document.createElement('div');
    const imgUrl = 'https://image.tmdb.org/t/p/original' + movie.poster_path;
    movieBoxDetail.innerHTML = `
            <img class="img-fluid" src="${imgUrl}" alt="Image">
            <h4>Title: ${movie.title}:</h4>
            <h4>Original Title: ${movie.original_title}</h4>
            <h5>Release Date: ${movie.release_date}</h5>
            <h5>Popularity: ${movie.popularity}</h5>
            <h5>Details: ${movie.overview}</h5>
    `
    movieDetailsContainer.appendChild(movieBoxDetail);
};