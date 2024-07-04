import Card from '../card'
import './index.css'
import React, { useRef } from 'react'
const CardCarousel = ({ cardsss }) => {
    let songID = [];
    let image = [];
    let name = [];
    cardsss.map((card) => {
        songID.push(card.id);
        image.push(card.image);
        name.push(card.name);
    })
    const containerRef = useRef(null);

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: -containerRef.current.clientWidth,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: containerRef.current.clientWidth,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="carousel-container">
            <button className="scroll-button left" onClick={scrollLeft}>&lt;</button>
            <div className="card-container" ref={containerRef}>
                {image.map((img, index) => (
                    <Card id={songID[index]} image={img} name={name[index]} key={songID[index]}></Card>
                ))}
            </div>
            <button className="scroll-button right" onClick={scrollRight}>&gt;</button>
        </div>
    );
}

export default CardCarousel;