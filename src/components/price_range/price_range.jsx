import { useDispatch, useSelector } from 'react-redux';
import './price_range.scss';
import { setRange } from '../../redux/slices/dataSlice';

export const PriceRange=()=>{
    const {items,trends,range,sizes,showSelector,sortSelector,sizeSelector,priceSelector,trendSelector}=useSelector((state)=>state.data);
    const dispatch=useDispatch();
    return(
        <div className="catalog__right_top_item">
            <div className="catalog__right_top_item_title">
                <p>Price</p>
            </div>
            <div className="catalog__right_top_item_box3">
                <div className="catalog__right_top_item_box3_price">
                    <input className="catalog__right_top_item_box3_price_range" 
                        type="range" 
                        min={range.min} 
                        max={range.max} 
                        step="5" 
                        value={range.value}
                        onChange={({target})=>(dispatch(setRange(target.value)))}
                    />
                    <div className="catalog__right_top_item_box3_price_value">
                        <p className="catalog__right_top_item_box3_price_value_min">{range.min}$</p>
                        <div className="catalog__right_top_item_box3_price_value_div"></div>
                        <p className="catalog__right_top_item_box3_price_value_max">{range.value}$</p>
                    </div>
                </div>
            </div>
        </div>
    )
}