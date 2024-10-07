import './header_banner.scss';

export const HeaderBanner=()=>{
    return(
        <div className="big-container">
            <div className="center_t banner">

                <div className="banner_container">

                    <div className="banner_container_rectangle"></div>

                    <div className="banner_container_box">

                        <p className="banner_container_box_t1">
                            THE BRAND
                        </p>
                        <p className="banner_container_box_t2">
                            OF LUXERIOUS <a href="/catalog">FASHION</a>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}