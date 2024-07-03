import './index.css'
import { Image_Path } from '../../constants/const';
const Card = ({id, image, name, setSongID}) => {
    return (
        <div className="card" onClick={() => {
            setSongID(id);
        }}>
            <img src={Image_Path + image} alt="No Image" />
            <div className="card-content">
                <div className="title">
                    <p>{name}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
