import './Details.css';

const Details = (props) => {
    return (
        <>
            <div className={"main-content"}>

                <div className='title'>
                    <h2>{props.name}</h2>
                    <p>{props.artist}</p>
                </div>

                <div className='main-image'>
                    <button onClick={props.maximize} className='max-image'>
                        <img className={'view-image'} src={'./assets/shared/icon-view-image.svg'}></img>
                        <span>View Image</span>
                    </button>
                    <img className={'art'} src={props.url} alt={"art"}></img>
                </div>
               
                <img className={'artist'} src={props.artistUrl} alt={'artist'}></img>
               
                <div className={'info'}>
                    <p>{props.desc}</p>
                    <h2>{props.date}</h2>
                </div>
            </div>

            <div className={'footer'}>
                <footer>
                    <h4>{props.name}</h4>
                    <p>{props.artist}</p></footer>

                <div className={"nav"}>
                    <button onClick={props.prevImage}>
                        <img src={'./assets/shared/icon-back-button.svg'} alt={"last"}></img>
                    </button>
                    <button onClick={props.nextImage}>
                        <img src={'./assets/shared/icon-next-button.svg'} alt={"next"}></img>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Details;