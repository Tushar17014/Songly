import './index.css';
function PlaylistCard() {
    return (
        <>
            <div className="mainPlaylistCard">
                <div className="image">
                    <img src="/images/image.png" alt="" />
                </div>
                <div className="playlistDetails">
                    <div className="name">
                        <p>My Playlist</p>
                    </div>
                    <div className="songCount">
                        <p>10 Songs</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlaylistCard