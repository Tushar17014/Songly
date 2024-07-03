import Navbar from '../../Components/navbar'
import CardCarousel from '../../Components/cardCarousel'
import Playbar from '../../Components/playbar'
import './index.css'
import { getSongs } from '../../services/api/songs'
import { useEffect, useState } from 'react'
const Home = () => {
    const [songs, setSongs] = useState([]);
    const [songID, setSongID] = useState(null);
    const [playThisSong, setPlayThisSong] = useState(1);


    useEffect(()=>{
        const fun = async () => {
            const res = await getSongs();
            setSongs(res);
            console.log("My REs: ", res);
        };
        fun();
    }, []);

    useEffect(() => {
        songs.forEach((song)=>{
            if(songID === song.id){
                setPlayThisSong(song.songPath);
                return;
            }
        });
    }, [songID])

    return(
        <>
            <Navbar></Navbar>
            <div className="main">
                {songs && (
                    <div className="recently-main">
                        <h1>Recently Played</h1>
                        <div className="cards">
                            <CardCarousel cardsss={songs} setSongID={setSongID}/>
                        </div>
                    </div>
                )
                }
                {/* <div className="popular-main">
                    <h1>Most Popular</h1>
                    <div className="cards">
                        <CardCarousel cardsss={songs}/>
                    </div>
                </div> */}
            </div>
            <footer>
                <Playbar songName={playThisSong}></Playbar>
            </footer>
        </>
    )
}

export default Home