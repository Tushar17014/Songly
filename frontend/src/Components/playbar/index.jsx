import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBackward, faForward, faPlay} from '@fortawesome/free-solid-svg-icons';
const Playbar = () => {
    
    return (
        <>
            <div className="play-bar">
                <div className="playback-controls">
                    <button className="control-button">
                    <FontAwesomeIcon icon={faBackward} size='xl' />
                    </button>
                    <button className="control-button">
                    <FontAwesomeIcon icon={faPlay} size='xl' />
                    </button>
                    <button className="control-button">
                    <FontAwesomeIcon icon={faForward} size='xl' />
                    </button>
                </div>
                    <input type="range" value="0" min="0" max="100" step="1" id='inputProg'></input>
                {/* <div className="progress-bar">
                    <div className="progress" style={{ width: `${100}%` }}></div>
                </div> */}
                <div className="track-info">
                    <div className="track-title">Song Title</div>
                    <div className="track-artist">Artist Name</div>
                </div>
                <div className="volume-controls">
                    <button className="control-button">
                        <i className="fa fa-volume-up"></i>
                    </button>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        defaultValue="50"
                        className="volume-slider"
                        onChange={(event) => {
                            const volume = event.target.value;
                            console.log('Volume changed to:', volume);
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default Playbar