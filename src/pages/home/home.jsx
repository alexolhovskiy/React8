import { Link } from 'react-router-dom';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { Item } from '../../components/item/item';
import './style.scss';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Banner } from '../../components/banner/banner';
import { HeaderBanner } from '../../components/header_banner/header_banner';

export const Home=()=>{
    const items=useSelector((state)=>state.data.items);
    const [randomItems,setItems]=useState([]);

    useEffect(()=>{
        const temp =[]; 
        if(items.length>0){
            temp.push(items[Math.floor(Math.random()*items.length)]);
            console.log(temp);
            let i=0;
            while(i<7){
                const item=items[Math.floor(Math.random()*items.length)];
                if(!temp.some(el=>el.id===item.id)){
                    temp.push(item);
                    i++;
                }
                
                console.log(temp);
            }
        }
        
        
        setItems(temp);
        console.log(randomItems);
    },[items]);
    
    const home_banners=[
        {t1:'hot deal',t2:'for men',style:{width:'560px',height: '540px',gridRow:'1/3',gridColumn:'1/2',background: 'url(../img/middle1.png)'}},
        {t1:'30% offer',t2:'women',style:{width:'560px',height: '260px',gridRow:'3/4',gridColumn:'1/2',background: 'url(../img/middle4.png)'}},
        {t1:'luxirous and trendy',t2:'accesories',style:{width:'560px',gridRow:'1/2',gridColumn:'2/3',height: '260px',background: 'url(../img/middle3.png)'}},
        {t1:'new arrivals',t2:'for kids',style:{width:'560px',height: '540px',gridRow:'2/4',gridColumn:'2/3',background: 'url(../img/middle2.png)'}}
    ];

    return(
    <>
        <Header/>
        <HeaderBanner/>
        <section className="center middle">

            {
                home_banners.map(item=>(
                    <Banner key={crypto.randomUUID()} text={item}/>
                ))
            }
        </section>

        <br />
        <br />
        <br />

        <main className="center down">

            <div className="down__header">
                <p className="down__header_text1">Fetured Items</p>
                <p className="down__header_text2">Shop for items based on what we featured in this week</p>
            </div>

            <div className="down__items">
                {
                    randomItems.length>0?randomItems.map((item)=>(
                        <Item key={item.id} item={item}/>
                    )):""
                }
            </div>
            
            <Link to='/catalog'  className="down__footer">
                <div className="down__footer_button">
                    <p className="down__footer_button_text">Browse All Product</p>
                </div>
            </Link>
        </main>

        <br />
        <br />
        <br />
        <br />
        <Footer/>
    </>
    );
}