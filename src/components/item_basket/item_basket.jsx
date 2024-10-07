
export const Item_basket=({item,deleteProduct})=>{
    
    
    return(
        <div className="product">
            <a href="/catalog" className="product-img">
                <img src={item.img} alt="buy" />
            </a>

            <div className="characteristic">
                <p className="text1">{item.header}</p>
                <p className="text2">Color:   <span className="text3">{item.color}</span></p>
                <p className="text2">Size:   <span className="text3">{item.size}</span></p>
            </div>
            <div>
                <p className="text1">${item.price}</p>
            </div>
            <div>
                <p className="text1">{item.cnt}</p>
            </div>
            <div>
                <p className="text1">order</p>
            </div>
            <div>
                <p className="text1">${item.price*item.cnt}</p>
            </div>

            <div>
                <img onClick={()=>deleteProduct(item.id)} style={{background:'red'}} src="img/__2890.png" />
            </div>
        </div>
    );
}

