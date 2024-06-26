import './index.css'
import { Image_Path } from '../../constants/const';
const Card = ({image, name}) => {
    const ex = name;
    return (
        <div className="card">
            <img src={Image_Path + image} alt="No Image" />
            <div className="card-content">
                <div className="title">
                    <p>{ex}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
