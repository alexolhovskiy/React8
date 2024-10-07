import { useDispatch, useSelector } from 'react-redux';
import './castom_selector.scss';
import { useState } from 'react';

export const CastomSelector=({title,g_value,options,selectFunc})=>{
    // const {items,trends,range,sizes,showSelector,sortSelector,sizeSelector,priceSelector,trendSelector}=useSelector((state)=>state.data);

    const [value,setValue]=useState(g_value);
    
    const setFunc=(v)=>{
        setValue(v);
        selectFunc(v);
    }
    
    return(
        <div className="catalog__right_middle_sort">
            <div className="catalog__right_middle_sort_label">
                <p>{title}</p>
            </div>
            <div className="catalog__right_middle_sort_box">
                <select 
                    value={value}
                    onChange={({target})=>setFunc(target.value)}>
                    {options.map(item => 
                        <option key={crypto.randomUUID()}>{item}</option>
                    )}
                </select>
            </div>
        </div>
    )
}