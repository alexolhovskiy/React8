import { Link } from 'react-router-dom';
import './detail_category.scss';

export const DetailCategory=({category})=>{
    return(
        <div className="catalog__left_category">
            <details className="details-product">
                <summary className="details-product__title">
                    <p className="details-product__title_text">{category.title}</p>
                    <img src="img/__52.png" alt="bird" />
                </summary>
                {
                    category.links.map(item=>(
                        <Link key={crypto.randomUUID()} to={item.href} className="details-product__link">{item.name}</Link>
                    ))
                }
            </details>
        </div>
    );
}