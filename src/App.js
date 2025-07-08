import {useEffect} from 'react';
import './App.css';
import searchIcon from './search.svg';

// Omdb API Key
// fcea5672

const API_URL = 'https://www.omdbapi.com/?apikey=fcea5672';

const movie1={
    "Title": "Harry Potter and the Half-Blood Prince",
    "Year": "2009",
    "imdbID": "tt0417741",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg"
}

const App = () => {
    const searchMovies =async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data=await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Harry Potter');
    })
    return(
        <div className="app">
            <h1>MovieLane</h1>

            <div className="search">
                <input 
                    placeholder="Search for movies"
                    value="Harry Potter"
                    onChange={() => {}}
                />
                <img 
                    src={searchIcon}
                    alt="search"
                    onClick={() => {}}
                />
            </div>

            <div className="container">
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                    <div>
                        <img src={movie1.Poster !== 'N/A' ? movie1.poster : 'https://via.placeholder.com/400'} alt={movie1.title}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;