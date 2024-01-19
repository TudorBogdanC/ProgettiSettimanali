import GenresTvShow from "../atoms/GenresTvShow";
import GenresComponent from "../atoms/GenresTvShow";
import GalleryCustom from "../molecules/GalleryCustom"



const CustomTvShows = () => {
    return (
        <>
          <GenresTvShow/>
          <p className="text-light mx-5">Futurama</p>
          <GalleryCustom url="http://www.omdbapi.com/?apikey=f0a20f4e&s=futurama"/>
          <br/>
          <p className="text-light mx-5">Doctor Who</p>
          <GalleryCustom url="http://www.omdbapi.com/?apikey=f0a20f4e&s=doctor%20who"/>
          <br/>
          <p className="text-light mx-5">Stranger Things</p>
          <GalleryCustom url="http://www.omdbapi.com/?apikey=f0a20f4e&s=stranger%20things"/>
        </>
    )
}

export default CustomTvShows;