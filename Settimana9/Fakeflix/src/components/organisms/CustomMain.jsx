import GenresComponent from "../atoms/GenresComponent";
import GalleryCustom from "../molecules/GalleryCustom"



const CustomMain = () => {
    return (
        <>
          <GenresComponent/>
          <p className="text-light mx-5">Futurama</p>
          <GalleryCustom url="http://www.omdbapi.com/?apikey=f0a20f4e&s=futurama"/>
          <br/>
          <p className="text-light mx-5">Doctor Who</p>
          <GalleryCustom url="http://www.omdbapi.com/?apikey=f0a20f4e&s=doctor%20who"/>
          <br/>
          <p className="text-light mx-5">Star Wars</p>
          <GalleryCustom url="http://www.omdbapi.com/?apikey=f0a20f4e&s=star%20wars"/>
        </>
    )
}

export default CustomMain;