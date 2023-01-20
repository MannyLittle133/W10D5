import { NavLink } from "react-router-dom";

const GalleryIndexItem = props => {
    // debugger
    return (<NavLink to={`/galleries/${props.i}`}> {props.gallery.name}</NavLink>)
}

export default GalleryIndexItem