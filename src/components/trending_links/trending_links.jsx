import { useDispatch, useSelector } from 'react-redux';
import './trending_links.scss';
import { setTrendSelector } from '../../redux/slices/dataSlice';

export const TrendingList=()=>{
    const {items,trends,range,sizes,showSelector,sortSelector,sizeSelector,priceSelector,trendSelector}=useSelector((state)=>state.data);
    const dispatch=useDispatch();
    
    const getTrend=(e,item)=>{
        e.preventDefault();
        dispatch(setTrendSelector(item));
        console.log(item);
    }

    return(
        <div className="catalog__right_top_item">
            <div className="catalog__right_top_item_title">
                <p>Trending now</p>
            </div>
            <div className="catalog__right_top_item_box1">
                {
                    trends.map((item,index)=>(
                        item===trendSelector?
                        <a href='#' key={crypto.randomUUID()} onClick={(e)=>getTrend(e,item)}>
                            <div  className="catalog__right_top_item_box1_el1">
                                <p style={{color:"#f16d7f"}}>{item}</p>
                            </div>
                        </a>:
                        <a href='#' key={crypto.randomUUID()} onClick={(e)=>getTrend(e,item)}>
                            <div  className="catalog__right_top_item_box1_el1">
                                <p>{item}</p>
                            </div>
                        </a>           
                    ))
                }  
            </div>
        </div>
    );
}