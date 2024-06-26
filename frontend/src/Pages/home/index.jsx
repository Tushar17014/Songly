import Navbar from '../../Components/navbar'
import CardCarousel from '../../Components/cardCarousel'
import Playbar from '../../Components/playbar'
import './index.css'
const Home = () => {
    const cards = [
        {image: "image.png", name: "Brown Munde"},
        {image: "image.png", name: "Sherr"},
        {image: "image.png", name: "Cheetah"},
        {image: "image.png", name: "Cheetah"},
    ];
    return(
        <>
            <Navbar></Navbar>
            <div className="main">
                <div className="recently-main">
                    <h1>Recently Played</h1>
                    <div className="cards">
                        <CardCarousel cardsss={cards}/>
                    </div>
                </div>
                <div className="popular-main">
                    <h1>Most Popular</h1>
                    <div className="cards">
                        <CardCarousel cardsss={cards}/>
                    </div>
                </div>
            </div>
            <footer>
                <Playbar></Playbar>
            </footer>
        </>
    )
}

export default Home