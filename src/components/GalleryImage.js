import './GalleryImage.css';

const GalleryImage = (props) => {
    return (
        <>
            <div className={"item"}>
                
                <img className={"tile"} src={props.img} alt={props.img} />
                <div className={"name"}>
                    <h4 >{props.name}</h4>
                    <p>{props.artist}</p>
                </div>

            </div>
        </>
    )
}

export default GalleryImage;