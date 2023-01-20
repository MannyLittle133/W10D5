import harvardArt from "../../data/harvardArt"
import GalleryIndexItem from "../GalleryIndexItem" 
import { NavLink } from "react-router-dom"
import "./GalleryNavigation.css"
const GalleryNavigation = props => {
    const galleries = Object.values(props)
    debugger
    // console.log(harvardArt)
    const galleryList = galleries[0].map((gallery, i) => {
        // debugger
        return <GalleryIndexItem key={gallery.id} gallery={gallery}/>    
    })
    return (
        <nav>
            {galleryList}
        </nav>
    )
}


export default GalleryNavigation