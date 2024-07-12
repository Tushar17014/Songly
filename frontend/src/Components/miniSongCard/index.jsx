import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { ChangeSongId, ChangePlayingSongID, ChangePauseRequest, ChangeResumeRequest } from '../../redux/slices/songSlice';
import { Image_Path } from '../../constants/const';
function MiniSongCard({ song }) {
    const [showIcon, setShowIcon] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const dispatch = useDispatch();
    const playingSong = useSelector((state) => state.songRouter.playingSong);
    useEffect(() => {
        if (playingSong) {
            if (playingSong.songID == song.id && playingSong.playing) {
                setIsPlaying(true);
                setShowIcon(false);
            }
            else if (playingSong.songID == song.id && !playingSong.playing) {
                setShowIcon(true);
                setIsPlaying(false);
            }
            else {
                setIsPlaying(false);
                setShowIcon(false);
            }
        }
    }, [playingSong]);

    const handleSongClick = () => {
        if (!isPlaying) {
            dispatch(ChangeSongId(song.id));
            dispatch(ChangePlayingSongID(song.id));
            dispatch(ChangePauseRequest(false));
            dispatch(ChangeResumeRequest(true));
        }
        if (isPlaying) {
            dispatch(ChangePauseRequest(true));
            dispatch(ChangeResumeRequest(false));
        }
    }

    return (
        <>
            <div className="FullMiniSongCard">
                <div className="mainMiniSongCard" onMouseOver={() => setShowIcon(true)} onMouseLeave={() => setShowIcon(false)} onClick={handleSongClick}>
                    <div className="image">
                        <img src={`${Image_Path}${song.image}`} alt="" />
                    </div>
                    <div className="songDetails">
                        <div className="songName">
                            <p>{song.name}</p>
                        </div>
                        <div className="songArtist">
                            <p>{song.artist}</p>
                        </div>
                    </div>
                    <div className="time">
                        {showIcon && !isPlaying && (
                            <FontAwesomeIcon icon={faPlay} size='sm' />
                        )}
                        {isPlaying && (
                            <FontAwesomeIcon icon={faPause} size='sm' />
                        )}
                        <p>{song.duration}</p>
                    </div>
                </div>
                <div className="menu">
                    <FontAwesomeIcon icon={faEllipsisVertical} size='lg' />
                </div>
            </div>
        </>
    )
}

export default MiniSongCard