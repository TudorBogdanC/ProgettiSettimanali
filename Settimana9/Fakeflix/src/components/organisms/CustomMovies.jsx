import GenresMovies from "../atoms/GenresMovies";
import GalleryCustom from "../molecules/GalleryCustom"



const CustomMovies = () => {
    return (
        <>
          <GenresMovies/>
          <p className="text-light mx-5">Harry Potter</p>
          <GalleryCustom url="http://www.omdbapi.com/?apikey=f0a20f4e&s=harry%20potter"/>
          <br/>
          <p className="text-light mx-5">Lord Of The Rings</p>
          <GalleryCustom url="http://www.omdbapi.com/?apikey=f0a20f4e&s=lord%20of%20the%20rings"/>
          <br/>
          <p className="text-light mx-5">Star Wars</p>
          <GalleryCustom url="http://www.omdbapi.com/?apikey=f0a20f4e&s=star%20wars"/>
        </>
    )
}

export default CustomMovies;