import GenresComponent from "../atoms/GenresComponent";
import GalleryCustom from "../molecules/GalleryCustom"



const CustomMain = () => {
    return (
        <>
          <GenresComponent/>
          <p className="text-light mx-4">Futurama</p>
          <GalleryCustom url="http://www.omdbapi.com/?apikey=f0a20f4e&s=futurama"/>
          <br/>
          <p className="text-light mx-4">Doctor Who</p>
          <GalleryCustom url="http://www.omdbapi.com/?apikey=f0a20f4e&s=doctor%20who"/>
          <br/>
          <p className="text-light mx-4">Star Wars</p>
          <GalleryCustom url="http://www.omdbapi.com/?apikey=f0a20f4e&s=star%20wars"/>
        </>
    )
}

export default CustomMain;