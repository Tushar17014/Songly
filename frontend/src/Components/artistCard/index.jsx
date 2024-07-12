import './index.css';
function ArtistCard() {
    return (
        <>
            <div className="mainArtistCard">
                <div className="image">
                    <img src="/images/image.png" alt="" />
                </div>
                <div className="artistDetails">
                    <div className="name">
                        <p>My Playlist</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArtistCard