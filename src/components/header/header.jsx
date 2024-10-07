import { Link } from 'react-router-dom';
import { Menu } from '../menu/menu';
import './header.scss';
import { HeaderSearchMenu } from '../header_search_menu/HeaderSearchMenu';

export const Header=()=>{
    return(
        <>
            <header className="header">
            <section className="center header__top">

                <div className="header__top_right">

                <Link to='/' className="header__top_right_logo">
                        <img className="header__top_right_logo_img" src="img/group_2_18.png" alt="logo" />
                        <p className="header__top_right_logo_black">
                            bran
                            <span className="header__top_right_logo_black_red">
                                d
                            </span>
                        </p>
                    </Link>

                    <div className="header__top_right_search">
                        <HeaderSearchMenu/>

                        <div className="header__top_right_search_search-box">
                            <input type="search" className="header__top_right_search_search-box_input" placeholder="Search for Item..." />
                            <div className="header__top_right_search_search-box_button">
                                <img src="img/__59.png" alt="search" />
                            </div>
                        </div>

                    </div>
                </div>



                <div className="header__top_account">
                    <Link to='/basket'>
                        <img src="img/basket.png" alt="basket" />
                    </Link>
                    
                    <Link to='/' className="header__top_account_button">
                        <p className="header__top_account_button_text">MyAccount</p>
                        <img className="header__top_account_button_img" src="img/__1109.png" alt="bird" />
                    </Link>
                </div>
            </section>

        </header>

        <Menu/>
    </>
    );
}