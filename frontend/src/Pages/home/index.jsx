import Navbar from '../../Components/navbar'
import CardCarousel from '../../Components/cardCarousel'
import Playbar from '../../Components/playbar'
import './index.css'
import { getSongs } from '../../services/api/songs'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ChangePlayingSong, ChangeSongTitle } from '../../redux/slices/slice1'
const Home = () => {
    const [songs, setSongs] = useState([]);
    const songId = useSelector((state) => state.counterRouter.songId);
    const dispatch = useDispatch();
    useEffect(()=>{
        const fun = async () => {
            const res = await getSongs();
            setSongs(res);
        };
        fun();
    }, []);

    useEffect(() => {
        songs.forEach((song)=>{
            if(songId === song.id){
                dispatch(ChangePlayingSong(song.songPath));
                dispatch(ChangeSongTitle(song.name));
                return;
            }
        });
    }, [songId])

    return(
        <>
            <Navbar></Navbar>
            <div className="main">
                {songs && (
                    <div className="recently-main">
                        <h1>Recently Played</h1>
                        <div className="cards">
                            <CardCarousel cardsss={songs} />
                        </div>
                    </div>
                )
                }
            </div>
            <footer>
                <Playbar></Playbar>
            </footer>
        </>
    )
}

export default Home