import { useDispatch, useSelector } from 'react-redux';
import './sizes.scss';
import { setSizes } from '../../redux/slices/dataSlice';

export const Sizes=()=>{
    const {items,trends,range,sizes,showSelector,sortSelector,sizeSelector,priceSelector,trendSelector}=useSelector((state)=>state.data);
    const dispatch=useDispatch();
    const checkHandle=(id)=>{
        const newSizesList=sizes.map((item)=>(
            item.id===id ? {...item,checked:!item.checked}:item
        ));
        console.log(newSizesList);
        dispatch(setSizes(newSizesList));
        // console.log(sizes);
    }
    return(
    <>
        <div className="catalog__right_top_item">
            <div className="catalog__right_top_item_title">
                <p>Size</p>
            </div>
            <div className="catalog__right_top_item_box2">

                {
                    sizes.map(item=>(
                        
                        <label key={item.id}>
                            <input className="catalog__right_top_item_box2_check" 
                                type="checkbox"
                                checked={item.checked}
                                onChange={()=>checkHandle(item.id)} 
                                disabled={item.disabled}
                            />{item.label}
                        </label>
                    ))            
                }
            </div>
        </div>
    </>
    );
}