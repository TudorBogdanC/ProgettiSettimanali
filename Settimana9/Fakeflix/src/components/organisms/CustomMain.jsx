import GenresMain from "../atoms/GenresMain";
import GalleryCustom from "../molecules/GalleryCustom"



const CustomMain = () => {
    return (
        <>
          <GenresMain/>
          <p className="text-light mx-5">The Matrix</p>
          <GalleryCustom url="http://www.omdbapi.com/?apikey=f0a20f4e&s=the%20Matrix"/>
          <br/>
          <p className="text-light mx-5">Doctor Who</p>
          <GalleryCustom url="http://www.omdbapi.com/?apikey=f0a20f4e&s=doctor%20who"/>
          <br/>
          <p className="text-light mx-5">Disney Selected</p>
          <GalleryCustom url="http://www.omdbapi.com/?apikey=f0a20f4e&s=disney"/>
        </>
    )
}

export default CustomMain;