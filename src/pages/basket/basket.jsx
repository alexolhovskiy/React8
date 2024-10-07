import './basket.scss';
import { Item_basket } from "../../components/item_basket/item_basket";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Link } from 'react-router-dom';
import { unsetSelectItems } from '../../redux/slices/dataSlice';

export const Basket=()=>{
    const dispatch=useDispatch();
    
    const {selectItems,items}=useSelector((store)=>store.data);
    const [total,setTotal]=useState(0);
    const [listToShow,setListToShow]=useState([]);


    useEffect(()=>{
        let temp=selectItems.map(item=>({...items.find(i=>i.id===item.id),cnt:item.cnt}));
        setTotal(temp.reduce((sum, current) => sum + current.price*current.cnt, 0));
        setListToShow(temp);
    },[selectItems]);

    const clearBasket=()=>{
        listToShow.forEach(item=>{
            for(let i=0;i<item.cnt;i++){
                deleteProduct(item.id);
            }
        })
    }

    const deleteProduct=(id)=>{
        dispatch(unsetSelectItems(id));
        console.log("delete",id);
    }


    return(
    <>
        <Header/>
        <main className="center">
            <div className="grid">
                <div className="title">
                    <div className="first title-item">
                        <p className="text1">Product Details</p>
                    </div>
                    <div className="title-item">
                        <p className="text1">unite Price</p>
                    </div>
                    <div className="title-item">
                        <p className="text1">Quantity</p>
                    </div>
                    <div className="title-item">
                        <p className="text1">shipping</p>
                    </div>
                    <div className="title-item">
                        <p className="text1">Subtotal</p>
                    </div>
                    <div className="title-item">
                        <p className="text1">ACTION</p>
                    </div>
                </div>

                {
                    listToShow.map(item=>(
                        <Item_basket key={item.id} item={item} deleteProduct={deleteProduct}/>
                    ))
                }
            </div>

            <div className="button-set">
                <a href="#" onClick={clearBasket} className="button">
                    <p className="button-text">cLEAR SHOPPING CART</p>
                </a>
                <Link to="/catalog" className="button">
                    <p className="button-text">cONTINUE sHOPPING</p>
                </Link>
            </div>

            <div className="bottom-grid">
                <div>
                    <form action="#" method="post">
                        <p className="bottom-text1">Shipping Adress</p>
                        <input className="bottom-input" type="text" placeholder="Bangladesh" />
                        <input className="bottom-input" type="text" placeholder="State" />
                        <input className="bottom-input" type="text" placeholder="Postcode / Zip" />
                        <div className="button-wrap">
                            <button type="submit" className="button3">
                                <p className="bottom-text2">get a quote</p>
                            </button>
                        </div>
                    </form>
                </div>

                <div>
                    <form method="post" action="#">
                        <p className="bottom-text1">coupon  discount</p>
                        <p className="bottom-text3">Enter your coupon code if you have one</p>
                        <input className="bottom-input" type="text" placeholder="State" />
                        <div className="button-wrap">
                            <button type="submit" className="button3">
                                <p className="bottom-text2">Apply coupon</p>
                            </button>
                        </div>
                    </form>
                </div>


                <div className="lust-item-wrap">
                    <div className="lust-item">
                        <div className="lust-item-top">
                            <div className="text-wrap1">
                                <p className="bottom-text4">Sub total ${total}</p>
                            </div>
                            <div className="text-wrap2">
                                <p className="bottom-text11">GRAND TOTAL <span>${total}</span> </p>
                            </div>
                        </div>

                        <div className="lust-item-bottom">
                            <a href="CheckOut.html" className="button2">
                                <p className="bottom-text5">proceed to checkout</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
    </>
    );
}