
const loadTopMovieData = () =>{
    const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=a887a50ff50977d868897c721ddadc74';
    fetch(url)
    .then(res => res.json())
    .then(data => setTopMovie(data.results));
};
loadTopMovieData();


const setTopMovie = (movies) =>{
    console.log(movies);
    const topMovieListContainer = document.getElementById('movie-list-container');

    movies.forEach(movie =>{
        const movieListBox = document.createElement('div');
        const imgUrl = `https://image.tmdb.org/t/p/original/` + movie.poster_path;
        movieListBox.classList.add('col-md-3');
        movieListBox.innerHTML = `
            <div class="shadow rounded p-3 m-2">
                <img class="img-fluid" src="${imgUrl}" alt="Image">
                <h3>Title: ${movie.title}</h3>
                <p>Description: ${movie.overview.slice(0, 200)}</p>
                <button onclick = "loadMovieDetails('${movie.id}')" class="btn btn-primary">See Details</button>
            </div>
        `
        topMovieListContainer.appendChild(movieListBox);
    });
};

const loadMovieDetails = (id) =>{
    const movieDlsUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=a887a50ff50977d868897c721ddadc74`;
    fetch(movieDlsUrl)
    .then(res => res.json())
    .then(data => setMovieDetails(data))

};

const setMovieDetails = (movie) =>{
    window.scrollTo(0,40)
    const movieDetailsContainer = document.getElementById('movie-details-container');
    movieDetailsContainer.innerHTML = '';
    const movieDetailsBox = document.createElement('div');
    const imgUrl = `https://image.tmdb.org/t/p/original/` + movie.poster_path;
    movieDetailsBox.innerHTML = `
        <img class="img-fluid" src="${imgUrl}" alt="Image">
        <h4>Title: ${movie.title}:</h4>
        <h4>Original Title: ${movie.original_title}</h4>
        <h5>Release Date: ${movie.release_date}</h5>
        <h5>Popularity: ${movie.popularity}</h5>
        <h5>Details: ${movie.overview}</h5>
    `
    movieDetailsContainer.appendChild(movieDetailsBox);

}



