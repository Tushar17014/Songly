import './index.css';
import Searchbar from './searchBar';
import ProfileNav from './profileNav'
function TopNavbar() {

    return (
        <>  
        <div className="mainTopNavbar">
            <Searchbar/>
            <ProfileNav/>
        </div>
        </>
    )
}

export default TopNavbar