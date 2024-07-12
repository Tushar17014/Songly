import './index.css';
import MiniSongCard from '../../components/miniSongCard';
import PlaylistCard from '../../components/playlistCard';
import ArtistCard from '../../components/artistCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { ChangePlayingSong } from '../../redux/slices/songSlice';
import { getSongs } from '../../services/api/songs';
function Home() {
    const [songs, setAllSongs] = useState([]);

    useEffect(() => {
        const getAllSongs = async () => {
            const songs = await getSongs();
            setAllSongs(songs);
        };
        getAllSongs();
        // console.log(allSongs)
    }, []) 

    const dispatch = useDispatch();
    const songId = useSelector((state) => state.songRouter.songId);

    const groupElements = (arr, groupSize) => {
        const grouped = [];
        for (let i = 0; i < arr.length; i += groupSize) {
            grouped.push(arr.slice(i, i + groupSize));
        }
        return grouped;
    };
    const arr = groupElements(songs, 3);

    useEffect(() => {
        songs.forEach((song) => {
            if(songId == song.id){
                dispatch(ChangePlayingSong(song.id));
                return;
            }
        })
    }, [songId])

    return (
        <>
            <div className="mainHome">
                <div className="recommended">
                    <div className="heading">
                        <p>Recommended For You</p>
                        <span>
                            <p>Refresh</p>
                        </span>
                    </div>
                    <div className="songCards">
                        {arr.map((group, index) => (
                            <div key={index} className="row">
                                {group.map((item, index2) => (
                                    <MiniSongCard key={index2} song={item}/>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="topPlaylist">
                    <div className="heading">
                        <p>Top Playlists</p>
                        <span>
                            <p>Refresh</p>
                        </span>
                    </div>
                    <div className="playlistCards">
                        <PlaylistCard />
                        <PlaylistCard />
                        <PlaylistCard />
                        <PlaylistCard />
                        <PlaylistCard />
                    </div>
                </div>
                <div className="topArtist">
                    <div className="heading">
                        <p>Top Artists</p>
                    </div>
                    <div className="artistCards">
                        <ArtistCard />
                        <ArtistCard />
                        <ArtistCard />
                        <ArtistCard />
                        <ArtistCard />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home