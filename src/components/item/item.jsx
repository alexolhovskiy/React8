import { useDispatch } from 'react-redux';
import './item.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setSelectItems } from '../../redux/slices/dataSlice';

export const Item=({item})=>{
    const dispatch=useDispatch();
    const [cnt,setCnt]=useState(item.amount);

    useEffect(()=>{
        setCnt(item.amount);
    },[item.amount]);

    const addToCard=(e)=>{
        
        if(cnt>0){
            // e.preventDefault();
            setCnt(prevCnt=>prevCnt-1);
            dispatch(setSelectItems(item.id));
        }
        console.log(cnt);
    }
    return(
        <div className="item">
            <Link to='/' className="item__link">
                <img className="item__link_img" src={item.img} alt="item1"/>
                <div className="item__link_text">
                    <p className="item__link_text_1">{item.header}</p>
                    <p className="item__link_text_2">${item.price}</p>
                </div>
            </Link>
            <div className="item__box">
                <Link to='/basket'  className="item__box_add"
                style={cnt>0?{}:{background:'red'}} 
                onClick={(e)=>addToCard(e)}>
                    <img className="item__box_add_img" src="img/forma_1_copy_1287.png" alt="basket"/>
                    <p className="item__box_add_text">Add to cart</p>
                </Link>
            </div>
        </div>
    );
}