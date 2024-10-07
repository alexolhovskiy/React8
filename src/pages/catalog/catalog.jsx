import { Item_catalog } from "../../components/item_catalog/item_catalog";
import { Link } from 'react-router-dom';

import './catalog.scss';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRange, setShowSelector, setSizes, setSortSelector, setTrendSelector } from "../../redux/slices/dataSlice";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { DetailCategory } from "../../components/detail_category/detail_cetegory";
import { catalog_categories } from "../../components/data/data";
import { Sizes } from "../../components/sizes/sizes";
import { TrendingList } from "../../components/trending_links/trending_links";
import { PriceRange } from "../../components/price_range/price_range";
import { CastomSelector } from "../../components/castom_selector/castom_selector";


export const Catalog=()=>{
    const {items,range,sizes,showSelector,sortSelector,trendSelector}=useSelector((state)=>state.data);
    const dispatch=useDispatch();
    const [listToShow,setListToShow]=useState([]);
    const [frame,setFrame]=useState([]);
    const [pages,setPages]=useState(0);
    const [f_index,setFIndex]=useState(0);
    const [a_index,setAIndex]=useState(0);


    const showList=[3,6,9,12];
    const sizeRate=['XXS','XS','S','M','L','XL','XXL'];
    const sortList=[{id:101,name:'NO',compFunc:(e1,e2)=>0},
                    {id:102,name:'name',compFunc:(e1,e2)=>e1.header.localeCompare(e2.header)},
                    {id:103,name:'size',compFunc:(e1,e2)=>sizeRate.indexOf(e1.size)-sizeRate.indexOf(e2.size)},
                    {id:104,name:'price',compFunc:(e1,e2)=>e1.price-e2.price}];
    

    const sizeFilter=(arr)=>{
        if(sizes.some(item=>item.checked)){
            console.log("YES");
            let temp=[];
            sizes.forEach(item=>{
                if(item.checked){
                    console.log(item.label);
                    temp=temp.concat(arr.filter(el=>el.size===item.label));
                }
            });
            console.log(temp);
            return temp;
        }
        return arr;
    }

    useEffect(()=>{
        console.log(trendSelector,range.value,sortSelector,showSelector)
        const temp=sizeFilter(items
            .filter(item=>trendSelector==="All"?true:item.trend===trendSelector)
            .filter(item=>item.price<=range.value))
            .sort((e1,e2)=>sortList.find(item => item.name==sortSelector).compFunc(e1,e2));
        setListToShow(temp);
        console.log(temp);
        initPages(temp.length);
    },[trendSelector,sizes,range,sortSelector,showSelector]);

    const selectSort=(data)=>{
        dispatch(setSortSelector(data))
    }

    const selectShow=(data)=>{
        dispatch(setShowSelector(data));
    }

    const initPages=(l)=>{
        const p=Math.ceil(l/showSelector);
        if(p>5){
            setFrame(Array.from({ length: 5 }, (_, index) => index));
        }else{
            setFrame(Array.from({ length: p }, (_, index) => index));
        }
        setPages(p);
        setFIndex(0);
        setAIndex(0);
    }

    const shiftLeft=()=>{
        let new_f_index=f_index;
        let new_a_index=a_index;
        if(f_index>2){
            new_f_index--;
            setFIndex(new_f_index);
        }else{
            if(a_index>0){
                new_a_index--;
                setAIndex(new_a_index);
            }else{
                if(f_index>0){
                    new_f_index--;
                    setFIndex(new_f_index);
                }
            }
        } 
    }

    const shiftRight=()=>{
        let new_f_index=f_index;
        let new_a_index=a_index;
        if(f_index<2){
            new_f_index++;
            setFIndex(new_f_index);
        }else{
            if((a_index+frame.length)<pages){
                new_a_index++;
                setAIndex(new_a_index);
            }else{
                if(f_index<frame.length-1){
                    new_f_index++;
                    setFIndex(new_f_index);
                }
            }
        }
        // console.log(new_f_index,new_a_index,showSelector);
    }

    const viewAll=()=>{
        dispatch(setTrendSelector('All'));
        const newSizesList=sizes.map((item)=>(
            {...item,checked:false}
        ));
        dispatch(setSizes(newSizesList));
        dispatch(setRange(range.max));
    }

    return(
        <>
            <Header/>
            <main className="center catalog">
            <section className="catalog__left">
                {
                    catalog_categories.map(category=>(
                        <DetailCategory key={crypto.randomUUID()} category={category}/>
                    ))
                }
            </section>
            <section className="catalog__right">
                <div className="catalog__right_top">
                    <TrendingList/>
                    <Sizes/>
                    <PriceRange/>
                </div>
                <div className="catalog__right_middle">
                    <CastomSelector title={"Sort"} g_value={sortSelector} options={sortList.map(i=>i.name)} selectFunc={selectSort}/>
                    <CastomSelector title={"Show"} g_value={showSelector} options={showList} selectFunc={selectShow}/>
                </div>
                
                <div className="catalog__right_grid-main">
                    {
                        listToShow.slice((a_index+f_index)*Number(showSelector),(a_index+f_index)*Number(showSelector)+Number(showSelector)).map((item)=>(
                            item.amount>0?
                            <Item_catalog key={item.id} item={item}/>:''
                        ))
                    }
                </div>            

                <div className="catalog__right_bottom">
                    <div className="catalog__right_bottom_pages">
                        <button onClick={shiftLeft}>
                            <img src="img/2207.png" alt="to the left" />
                        </button>
                        {
                            frame.map((item,index)=>(
                                index===f_index?
                                <button key={crypto.randomUUID()} style={{background:'#f16d7f'}} onClick={()=>setFIndex(index)}>
                                    {a_index+index+1}
                                </button>:
                                <button key={crypto.randomUUID()} onClick={()=>setFIndex(index)}>
                                    {a_index+index+1}
                                </button>
                            ))
                        }
                        <button onClick={shiftRight}>
                            <img src="img/__2207.png" alt="to the right" />
                        </button>
                    </div>
                    <Link to='#' onClick={viewAll} className="catalog__right_bottom_button">
                        <p className="view-button-text">View All</p>
                    </Link>
                </div>
            </section>
        </main>
        <Footer/>
    </>
    )
}