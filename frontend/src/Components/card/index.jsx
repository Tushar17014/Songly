import './index.css'
import { Image_Path } from '../../constants/const';
import { useDispatch } from 'react-redux';
import { ChangeSongId } from '../../redux/slices/slice1';
const Card = ({id, image, name}) => {
    const dispatch = useDispatch();
    return (
        <div className="card" onClick={() => {
            dispatch(ChangeSongId(id));
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
