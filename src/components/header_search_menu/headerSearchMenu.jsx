import './header_search_menu.scss';

export const HeaderSearchMenu=()=>{
    return(
        <details>
            <summary className="header__top_right_search_brows">
                <p className="header__top_right_search_brows_text">
                    Brows
                </p>
                <img src="img/__52.png" alt="bird" />
            </summary>
            <div className="burger-menu">
                <h3>MENU</h3>
                <h4>MAN</h4>
                <ul>
                    <li><a href="/catalog">Accessories</a></li>
                    <li><a href="/catalog">Bags</a></li>
                    <li><a href="/catalog">Denim</a></li>
                    <li><a href="/catalog">T-Shirts</a></li>
                </ul>
                <h4>WOMAN</h4>
                <ul>
                    <li><a href="/catalog">Accessories</a></li>
                    <li><a href="/catalog">Jackets & Coats</a></li>
                    <li><a href="/catalog">Polos</a></li>
                    <li><a href="/catalog">T-Shirts</a></li>
                    <li><a href="/catalog">Shirts</a></li>
                </ul>
                <h4>KIDS</h4>
                <ul>
                    <li><a href="/catalog">Accessories</a></li>
                    <li><a href="/catalog">Jackets & Coats</a></li>
                    <li><a href="/catalog">Polos</a></li>
                    <li><a href="/catalog">T-Shirts</a></li>
                    <li><a href="/catalog">Shirts</a></li>
                    <li><a href="/catalog">Bags</a></li>
                </ul>
            </div>
        </details>
    );
}