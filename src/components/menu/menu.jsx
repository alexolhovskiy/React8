import { menu_category } from '../data/data';
import './menu.scss';
import { Link } from 'react-router-dom';

export const Menu=()=>{

    return (
        <nav className="center navigation">
            {
                menu_category.map((item1, index1) => (
                    <nav className={index1>3?"navigation_item navigation_mod":"navigation_item"} key={crypto.randomUUID()}>
                        <p>{item1.title}</p>
                        <nav className="menu">
                            {
                                item1.categories.map((item2, index2) => (
                                    <nav className="menu__block" key={crypto.randomUUID()}>
                                        <h3 className="menu__block_h">{item2.name}</h3>
                                        {
                                            item2.links.map((item3, index3) => (
                                                <Link to={item3.href} className="menu__block_a" key={crypto.randomUUID()}>
                                                    {item3.name}
                                                </Link>
                                            ))
                                        }
                                    </nav>
                                ))
                            }
                            <nav className="menu__block_sale">
                                <nav className="menu__block_sale_super">
                                    <a href="Product.html">super</a>
                                    <a href="Product.html">sale!</a>
                                </nav>
                            </nav>
                        </nav>
                    </nav>
                ))
            }
        </nav>
    );
    
}

