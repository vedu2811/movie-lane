import {useEffect} from 'react';
import './App.css';
import searchIcon from './search.svg';

// Omdb API Key
// fcea5672

const API_URL = 'https://www.omdbapi.com/?apikey=fcea5672';

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
        </div>
    );
}

export default App;