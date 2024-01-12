import { useState, useEffect } from 'react';




const GalleryCustom = ({url}) => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data)=> {
            console.log(data);
            setMovies(data.Search);
        })
    }, [])

    return (
        <div className="d-flex mx-4 gap-2" style={{marginBottom:"50px"}}>
           {movies.slice(0,6).map((movie) => (
            <img key={movie.imdbID} src={movie.Poster} alt={movie.Title} width="200px" height="300"/>
           ))}
        </div>
    )
}


export default GalleryCustom