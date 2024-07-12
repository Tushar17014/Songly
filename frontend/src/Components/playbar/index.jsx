import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay, faBackwardStep, faForwardStep, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { Song_Path } from '../../constants/const';
import Slider from './slider';
import ControlPanel from './controlPanel';
import { useDispatch, useSelector } from 'react-redux';
import { ChangePlayingSongObj } from '../../redux/slices/songSlice';
const Playbar = () => {
    const [percentage, setPercentage] = useState(0)
    const [volume, setVolume] = useState(100)
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const songNamePath = useSelector((state) => state.songRouter.playingSongPath);
    const songTitle = useSelector((state) => state.songRouter.songTitle);
    const playingSongID = useSelector((state) => state.songRouter.playingSongID);
    const pauseRequest = useSelector((state) => state.songRouter.pauseRequest);
    const resumeRequest = useSelector((state) => state.songRouter.resumeRequest);
    const song = `${Song_Path}${songNamePath}.mp3`;
    const audioRef = useRef()
    const audio = audioRef.current
    const dispatch = useDispatch();

    const onChange = (e) => {
        audio.currentTime = (audio.duration / 100) * e.target.value
        setPercentage(e.target.value)
    }

    const onVolChange = (e) => {
        audio.volume = e.target.value / 100
        setVolume(e.target.value);
    }

    const playSong = () => {
        if(audio && songNamePath){
            document.getElementById('playBar').classList.remove("playbar-remove");
            setIsPlaying(true);
            audio.play();
            dispatch(ChangePlayingSongObj({
                songID: playingSongID,
                playing: true,
            }))
        }
    }
    const pauseSong = () => {
        if(audio){
            setIsPlaying(false);
            audio.pause();
            dispatch(ChangePlayingSongObj({
                songID: playingSongID,
                playing: false,
            }))
        }
    }

    const play = () => {
        if (audio) {
            audio.volume = 1;

            if (!isPlaying) {
                setIsPlaying(true)
                audio.play()
                dispatch(ChangePlayingSongObj({
                    songID: playingSongID,
                    playing: true,
                }))
            }

            if (isPlaying) {
                setIsPlaying(false)
                audio.pause()
                dispatch(ChangePlayingSongObj({
                    songID: playingSongID,
                    playing: false,
                }))
            }
        }
    }

    const getCurrDuration = (e) => {
        const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
        const time = e.currentTarget.currentTime

        setPercentage(+percent)
        setCurrentTime(time.toFixed(2))
    }

    useEffect(() => {
        playSong();
    }, [songNamePath, songTitle]);

    useEffect(() => {
        playSong();
    }, [resumeRequest])

    useEffect(() => {
        if(pauseRequest){
            pauseSong();
        }
    }, [pauseRequest])

    return (
        <>
            <div className="play-bar playbar-remove" id='playBar'>
                <Slider percentage={percentage} onChange={onChange} />

                <div className="playInfo">
                    <div className="playback-controls">
                        <FontAwesomeIcon icon={faBackwardStep} size='1x' className='control-button' style={{ "fontSize": "22px" }} />

                        {!isPlaying ? (
                            <FontAwesomeIcon icon={faPlay} size='2x' onClick={play} className='control-button' />
                        ) : (
                            <FontAwesomeIcon icon={faPause} size='2x' onClick={play} className='control-button' />
                        )}
                        <FontAwesomeIcon icon={faForwardStep} size='1x' className='control-button' style={{ "fontSize": "22px" }} />

                        <ControlPanel play={play} isPlaying={isPlaying} duration={duration} currentTime={currentTime} />
                    </div>
                    <div className="track-info">
                        <div className="track-title">{songTitle}</div>
                    </div>
                    <div className="volume-controls">
                        <FontAwesomeIcon icon={faVolumeHigh} size='1x' className='control-button' style={{ "fontSize": "22px" }} />
                        <Slider percentage={volume} onChange={onVolChange} />
                    </div>
                </div>


                <audio ref={audioRef} src={song} onTimeUpdate={getCurrDuration} onLoadedMetadata={(e) => {
                    setDuration(e.currentTarget.duration.toFixed(2))
                }}></audio>

            </div>
        </>
    )
}

export default Playbar