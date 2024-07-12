import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
function Navbar() {

    return (
        <>
            <div className="mainNavbar">
                <div className="navContent">
                    <div className="navBurger">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <div className="navLinks">
                        <p>Home</p>
                        <p>Podcasts</p>
                        <p>Artists</p>
                        <p>Albums</p>
                    </div>
                    <div className="navMyArea">
                        <div className="heading">
                            <p>My Music</p>
                        </div>
                        <div className="myArea">
                            <p>Playlists</p>
                            <p>Downloads</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar