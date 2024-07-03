import './index.css'

function Navbar() {
    return (
        <nav className='navbar'>
            <ul>
                <li className='logo'><a href='/'>Songly</a></li>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>About</a></li>
            </ul>
            <div className="searchBar">
                <input type="text" placeholder='Search Song'/>
            </div>
            <div className="profileDiv">
                <a href="/">User</a>
            </div>
        </nav>
    );
}

export default Navbar;