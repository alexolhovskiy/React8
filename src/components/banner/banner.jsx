import { Link } from 'react-router-dom';
import './banner.scss';

export const Banner=({text})=>{
    return(
        <Link to='/catalog' className="middle__item" style={text.style}>

            <div className="middle__item_box">
                <div className="middle__item_box_text">
                    <p className="middle__item_box_text_1">
                        {text.t1}
                    </p>
                    <p className="middle__item_box_text_2">
                        {text.t2}
                    </p>
                </div>
            </div>

        </Link>
    );
}