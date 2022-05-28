const APIKEY = "c2e87bc437cd81cbffa17e4f70a8009c";  // 환경 파일로 저장하는 것이 원칙
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const now_playingURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=" + APIKEY + "&language=en-US&page=1";
const now_playing = document.querySelector("#now-playing");

fetch(now_playingURL)
.then(response => response.json())
.then(response => {
    response.results.forEach((element) => {

        let movie = document.createElement('li');
        let movieDiv = document.createElement('div');
        let movieImg = document.createElement('img');
        movieImg.setAttribute("src", IMAGE_URL + element.backdrop_path);
        let movieTitle = document.createElement('h4');
        movieTitle.innerText = element.title;
        let movieRate = document.createElement('span');
        movieRate.innerText = "★" + element.vote_average;

        movieDiv.appendChild(movieImg);
        movieDiv.appendChild(movieTitle);
        movieDiv.appendChild(movieRate);

        movie.appendChild(movieDiv);

        now_playing.appendChild(movie);
    })
});

const popularURL = "https://api.themoviedb.org/3/movie/popular?api_key=" + APIKEY + "&language=en-US&page=1";
const popular = document.querySelector("#popular");

fetch(popularURL)
.then(response => response.json())
.then(response => {
    response.results.forEach((element) => {

        // HTML 코드를 쓰는 것
        let movie = document.createElement('li');
        let movieDiv = document.createElement('div');
        let movieImg = document.createElement('img');
        movieImg.setAttribute("src", IMAGE_URL + element.backdrop_path);
        let movieTitle = document.createElement('h4');
        movieTitle.innerText = element.title;
        let movieRate = document.createElement('span');
        movieRate.innerText = "★" + element.vote_average;

        // 요소들의 계층관계 설정
        movieDiv.appendChild(movieImg);
        movieDiv.appendChild(movieTitle);
        movieDiv.appendChild(movieRate);

        movie.appendChild(movieDiv);

        popular.appendChild(movie);
    })
});

const top_ratedURL = "https://api.themoviedb.org/3/movie/top_rated?api_key=" + APIKEY + "&language=en-US&page=1";
const top_rated = document.querySelector("#top-rated");

fetch(top_ratedURL)
.then(response => response.json())
.then(response => {
    response.results.forEach((element) => {

        let movie = document.createElement('li');
        let movieDiv = document.createElement('div');
        let movieImg = document.createElement('img');
        movieImg.setAttribute("src", IMAGE_URL + element.backdrop_path);
        let movieTitle = document.createElement('h4');
        movieTitle.innerText = element.title;
        let movieRate = document.createElement('span');
        movieRate.innerText = "★" + element.vote_average;

        movieDiv.appendChild(movieImg);
        movieDiv.appendChild(movieTitle);
        movieDiv.appendChild(movieRate);

        movie.appendChild(movieDiv);

        top_rated.appendChild(movie);
    })
});

const upcomingURL = "https://api.themoviedb.org/3/movie/upcoming?api_key=" + APIKEY + "&language=en-US&page=1";
const upcoming = document.querySelector("#upcoming");

fetch(upcomingURL)
.then(response => response.json())
.then(response => {
    response.results.forEach((element) => {
        console.log(element);

        let movie = document.createElement('li');
        let movieDiv = document.createElement('div');
        let movieImg = document.createElement('img');
        movieImg.setAttribute("src", IMAGE_URL + element.backdrop_path);
        let movieTitle = document.createElement('h4');
        movieTitle.innerText = element.title;
        let movieRate = document.createElement('span');
        movieRate.innerText = "★" + element.vote_average;

        movieDiv.appendChild(movieImg);
        movieDiv.appendChild(movieTitle);
        movieDiv.appendChild(movieRate);

        movie.appendChild(movieDiv);

        upcoming.appendChild(movie);
    })
});