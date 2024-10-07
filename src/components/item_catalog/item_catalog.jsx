import { Link } from 'react-router-dom';
import './item.scss';
import { useDispatch } from 'react-redux';
import { setSelectItems } from '../../redux/slices/dataSlice';
import { useEffect, useState } from 'react';

export const Item_catalog=({item})=>{
    const dispatch=useDispatch();
    const [cnt,setCnt]=useState(item.amount);

    useEffect(()=>{
        setCnt(item.amount);
    },[item.amount]);

    const addToCard=(e)=>{
        
        if(cnt>0){
            e.preventDefault();
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
                    <div className="item__link_text_bottom">
                        <p className="item__link_text_bottom_2">${item.price}</p>
                        <p className="item__link_text_bottom_2">{item.size}</p>
                    </div>
                </div>
            </Link>
            <div className="item__box">
                <div className="item__box_block">
                    <Link to='/basket'  
                        style={cnt>0?{}:{background:'red'}} 
                        onClick={(e)=>addToCard(e)}
                        className="item__box_block_add">
                        <img className="item__box_block_add_img" src="img/forma_1_copy_1287.png" alt="basket"/>
                        <p className="item__box_block_add_text">Add to cart</p>
                    </Link>

                    <div className="item__box_block_container">
                        <Link to='/' className="item__box_block_container_img">
                            <img src="img/forma_1_2109.png" alt="img" />
                        </Link>
                        <Link to='/basket' className="item__box_block_container_img">
                            <img src="img/forma_1_2105.png" alt="img" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}